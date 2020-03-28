---
title: The inotify Linux API
excerpt: Using inotify with Go.
---
Recently I released [wrun](https://github.com/efreitasn/wrun), a CLI written in Go that executes commands on changes in the working directory. The approach used to monitor these changes was interacting with the Linux inotify API. In this post I'll give an overview of this API in Go using the [`golang.org/x/sys/unix`](https://pkg.go.dev/golang.org/x/sys/unix) package, which provides abstractions for Unix/Unix-like OSs primitives.

## The API
First, you create an inotify instance:

```go
fd, err := unix.InotifyInit1(0)
```

The `0` represents the flags argument. This argument won't be covered here, but you can refer to the [man page](http://man7.org/linux/man-pages/man7/inotify.7.html) to read about it. `fd` is a file descriptor that we'll use to read events, but before doing that we need to specify what files/directories and what events we want to monitor.

```go
wd, err := unix.InotifyAddWatch(
	fd,
	".",
	unix.IN_CREATE|
		unix.IN_DELETE|
		unix.IN_CLOSE_WRITE|
		unix.IN_MOVED_TO|
		unix.IN_MOVED_FROM|
		unix.IN_MOVE_SELF,
)
```

This code means that we're monitoring the working directory for 6 events. As the name suggests, each time `unix.InotifyAddWatch()` is called a watch is added to the instance, and this watch has an identifier called watch descriptor (`wd`). The `wd` can be used to remove a watch by calling `unix.InotifyRmWatch()`.

Here are some commands and what events they trigger:

```bash
touch a.txt         # [IN_CREATE, IN_CLOSE_WRITE]
touch b.txt         # [IN_CREATE, IN_CLOSE_WRITE]
touch c.txt         # [IN_CREATE, IN_CLOSE_WRITE]
mkdir dir           # IN_CREATE
rm a.txt            # IN_DELETE
echo cc > c.txt     # IN_CLOSE_WRITE
mv b.txt dir        # IN_MOVED_FROM
touch dir/d.txt
rm -r dir           # IN_DELETE
mv c.txt a.txt      # [IN_MOVED_FROM, IN_MOVED_TO]
mv $(pwd) ../dir2   # IN_MOVE_SELF
cd ../dir2
touch e.txt         # [IN_CREATE, IN_CLOSE_WRITE]
```

When monitoring a directory, inotify doesn't monitor it recursively. If you want this behaviour, you have to add each subdirectory to the instance. Also, inotify is inode-based, which means that you can change the location of the file/directory passed to `unix.InotifyAddWatch()` and it'll continue to be monitored.

When it comes to renaming/moving a file/directory, there are three events:

* `IN_MOVE_SELF`: emitted when the file/directory being monitored is renamed/moved.
* `IN_MOVED_FROM`: emitted in the old parent directory of a file/directory that has been renamed/moved.
* `IN_MOVED_TO`: emitted in the new parent directory of a file/directory that has been renamed/moved.

So, if you intend to match `IN_MOVED_FROM` with `IN_MOVED_TO` events, you have to take into account that there may not be an `IN_MOVED_TO` event. This will happen if the file/directory was moved to a directory that isn't monitored. One of the solutions for this is to create a timer (e.g. `time.After()`). If an `IN_MOVED_TO` isn't emitted until this timer expires, consider the file/directory to have been moved to a location not being monitored. Lastly, since these events could be nonsequential, each of them has a `cookie` value that relates them.

### Reading events
Events are read by calling the `unix.Read()` function with the instance's `fd`. Besides requiring a file descriptor, this function also requires a buffer to store the events.

```go
var buff [unix.SizeofInotifyEvent + unix.NAME_MAX + 1]byte

n, err := unix.Read(fd, buff[:])
```

The `unix.SizeofInotifyEvent` is the size of the `inotify_event` C struct, the type that represents an event. The `unix.NAME_MAX + 1` part is related to this struct having a [flexible array member](https://wiki.sei.cmu.edu/confluence/display/c/DCL38-C.+Use+the+correct+syntax+when+declaring+a+flexible+array+member). A field of this type is located at the end of the struct, has a dynamic size and is ignored when calculating the size of the struct (`unix.SizeofInotifyEvent`). That's the field that represents the name of a file/directory. `unix.NAME_MAX` represents the max length for the name of a file/directory, and the `+ 1` is to account for the fact that this constant doesn't include the trailing `NULL` character of a C string. Therefore, this size guarantees that the buffer will be able to store at least one event.

Now, we need to take the bytes in `buff` and convert them to one or more `unix.InotifyEvent`, which is the equivalent of `inotify_event`. The problem with this conversion is the endianness value. In Go, there's not a standard way to get the processor's endianness, and this value is required so that the bytes can be interpreted correctly, since all number fields in the struct are `uint32`. This problem leaves us with two options: use the `encoding/binary` package and find a way to get the processor's endianness, or ignore Go's type system and use the address of `buff[0]` as the address of an `unix.InotifyEvent`.

Let's first remember that endianness is how the bytes of a number are ordered. There are two orders: big-endian, which starts with the most significant byte and ends with the least significant, and little-endian, which is the reverse. For instance, `0x123456` in big-endian is `12` `34` `56` and in little-endian is `56` `34` `12`. One way to find the processor's endianness is by checking how a `uint16` number is stored in memory.

```go
func getEndianness() binary.ByteOrder {
	n := uint16(1)
	firstByte := *((*byte)(unsafe.Pointer(&n)))

	if firstByte == 1 {
		return binary.LittleEndian
	}

	return binary.BigEndian
}
```

Now that there's a way to get the processor's endianness, the `encoding/binary` package can be used.

```go
var e unix.InotifyEvent

binary.Read(
	bytes.NewReader(buff[:unix.SizeofInotifyEvent]),
	getEndianness(),
	&e,
)
```

The second option is less verbose and relies on getting the address of the first item in `buff` and converting it to the address of an `unix.InotifyEvent`. That way we won't need to worry about the processor's endianess.

```go
e := (*unix.InotifyEvent)(unsafe.Pointer(&buff[0]))
```

#### The name
If you see the definition of `unix.InotifyEvent`, you'll notice there's not a field for the name of the file/directory that triggered the event when monitoring a directory, but there's a `name` field in the original C struct (`inotify_event`). So, we'll try to create our own struct to handle this case and see how it will play out.

The struct will have the same layout as `unix.InotifyEvent`, but with the addition of a `Name` field at the end. We just need to decide what type `Name` will have. The field in the original struct has the type `[]char`, which represents a flexible array member. An array of `char` ending with `NULL` is how a string is represented in C, which is different than Go. In Go, a string is represented by a pointer to its data and its length.

![String representation in C and Go](c-go-string.jpg "Representation of "abc" in C and Go")

If we choose the string type, we won't be able to use the second approach for reading events because memory layouts between the C and Go structs will be different. The first approach won't work either. `binary.Read()` doesn't accept a pointer to a struct with a variable-size field as its third argument.

The other type that makes sense is `[]byte`, but it won't work with either approach for the same reasons as the string type. The only type left is an array. An array of `byte` has the same representation as `[]char` and a fixed size, but the problem with a fixed size is that the name of a file/directory doesn't have one. So, we should continue using `unix.InotifyEvent` and find another way to get the name.

There's a field in `unix.InotifyEvent` that tells us the length of the name (`Len`). We can use the value of this field to take a slice of `buff` and convert it to a string.

```go
name := string(buff[unix.SizeofInotifyEvent:unix.SizeofInotifyEvent+e.Len])
```

Yeah, it's not so verbose. I just wanted to demonstrate why there's no `Name` field in `unix.InotifyEvent`.

##### `NULL` characters

There's still one thing left to do regarding the name: trim trailing `NULL` characters. There's always at least one `NULL` character because of it being a C string, but there could be more in order to guarantee alignment requirements for the next items in the buffer. Even though the previous examples assumed the buffer would contain only one event, it doesn't mean it can't have more.

```go
nameBs := buff[unix.SizeofInotifyEvent : unix.SizeofInotifyEvent+e.Len]
name := string(bytes.TrimRight(nameBs, "\x00"))
```

### Full example

```go
package main

import (
	"bytes"
	"fmt"
	"log"
	"unsafe"

	"golang.org/x/sys/unix"
)

func main() {
	fd, err := unix.InotifyInit1(0)
	if err != nil {
		log.Fatalf("err: %v\n", err)
	}
	defer unix.Close(fd)

	_, err = unix.InotifyAddWatch(
		fd,
		".",
		unix.IN_CREATE|
			unix.IN_DELETE|
			unix.IN_CLOSE_WRITE|
			unix.IN_MOVED_TO|
			unix.IN_MOVED_FROM|
			unix.IN_MOVE_SELF,
	)
	if err != nil {
		log.Fatalf("err: %v\n", err)
	}

	var buff [(unix.SizeofInotifyEvent + unix.NAME_MAX + 1) * 20]byte

	for {
		offset := 0
		n, err := unix.Read(fd, buff[:])
		if err != nil {
			log.Fatalf("err: %v\n", err)
		}

		for offset < n {
			e := (*unix.InotifyEvent)(unsafe.Pointer(&buff[offset]))

			nameBs := buff[offset+unix.SizeofInotifyEvent : offset+unix.SizeofInotifyEvent+int(e.Len)]
			name := string(bytes.TrimRight(nameBs, "\x00"))
			if len(name) > 0 && e.Mask&unix.IN_ISDIR == unix.IN_ISDIR {
				name += " (dir)"
			}

			switch {
			case e.Mask&unix.IN_CREATE == unix.IN_CREATE:
				fmt.Printf("CREATE %v\n", name)
			case e.Mask&unix.IN_DELETE == unix.IN_DELETE:
				fmt.Printf("DELETE %v\n", name)
			case e.Mask&unix.IN_CLOSE_WRITE == unix.IN_CLOSE_WRITE:
				fmt.Printf("CLOSE_WRITE %v\n", name)
			case e.Mask&unix.IN_MOVED_TO == unix.IN_MOVED_TO:
				fmt.Printf("IN_MOVED_TO [%v] %v\n", e.Cookie, name)
			case e.Mask&unix.IN_MOVED_FROM == unix.IN_MOVED_FROM:
				fmt.Printf("IN_MOVED_FROM [%v] %v\n", e.Cookie, name)
			case e.Mask&unix.IN_MOVE_SELF == unix.IN_MOVE_SELF:
				fmt.Printf("IN_MOVE_SELF %v\n", name)
			}

			offset += int(unix.SizeofInotifyEvent + e.Len)
		}
	}
}
```

## Refs

Here's a list of links that I used as reference and/or extend what I said about some concepts:

* http://man7.org/linux/man-pages/man7/inotify.7.html
* https://developer.ibm.com/technologies/systems/articles/au-endianc/
* https://www.gnu.org/software/libc/manual/html_node/Limits-for-Files.html
* http://blog.golang.org/slices-intro
* https://blog.golang.org/strings
* https://blog.golang.org/slices
* https://research.swtch.com/godata
* http://inotify.aiken.cz/
* https://wr.informatik.uni-hamburg.de/_media/teaching/wintersemester_2013_2014/epc-14-haase-svenhendrik-alignmentinc-paper.pdf
