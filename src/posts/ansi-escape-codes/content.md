---
date: "2019-09-08T16:37:00Z"
title: "ANSI escape codes"
description: "Printing custom strings on your terminal emulator."
cover_alt: "A custom string."
showInFeed: true
keywords: "ANSI escape codes, terminal"
---
Have you ever wondered how is it that some CLIs print a custom text on your terminal? By custom I mean: italic, bold, with foreground and/or background colors different than the default ones etc. The secret, so to speak, is something called ANSI escape codes.

## What they are
Basically, ANSI escape codes are sequences of characters, starting with `ESC`, that are interpreted as commands instead of solely characters. They were created because, back when *actual* terminals were used, there was a need to standardize how manufacturers could print special characters to the user using these devices. It was a need because the manufacturers were creating their own versions of escape codes to use in their own devices. This, [just as what happened with character encodings before Unicode](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/), created compatibility issues. Therefore, to address these issues, the ANSI escape codes were created.

Now, a few decades later, terminals aren't used anymore, but ANSI escape codes are still around. This time, though, they're used in our day-to-day terminal emulators.

## Attributes
In the ANSI escape codes, attributes are defined through codes. You define a sequence of attributes between `ESC[` and `m`, separating them with a `;`. For instance, an underlined string with a 4 bit color green background would be

```bash
echo -e "\x1b[4;42mSomeText"
```

Notice that it starts with `\x1b[`, which is `ESC[`, but with the `ESC` character in its hexadecimal ASCII representation since it's not a printable character. `1` is the code of the italic attribute, while `42` is the code of the green background attribute. The `m` before `SomeText` indicates the end of the attributes sequence, making `SomeText` the part that is actually printed to the user with both attributes applied.

### Colors
When it comes to color attributes, there are three groups: 4 bit colors, 8 bit colors and 24 bit colors.

#### 4 bit colors
First, we have the 4 bit colors. 4 bit colors are composed by red, green, blue, black, white, cyan, magenta, yellow and one brighter version of each one of them. That way, we got 16 colors to use as foreground and/or background colors.

The ranges 30-37 and 90-97 comprise the foreground colors, while the ranges 40-47 and 100-107 comprise the background colors.

Let's assume we're building a testing CLI tool and we want a string with a white foreground and a red background to demonstrate a failed test. To do that, we'd use something like

```bash
echo -e "\x1b[37;41mFAIL"
```

#### 8 bit colors
16 colors are good and all, but what about 256? In this second group of colors, there are 4 ranges. The first one, 0-7, is the same as the 4 bit colors range 30-37, while the second, 8-15, is the same as the 4 bit colors range 90-97. The last two are 16-231, which comprises colors that were not present in the 4 bit colors group, and 232-255, which is a scale from black to white.

Unlike the previous group, the code of the color doesn't change depending on whether you want to use it in the foreground or in the background. If you want the color to be used in the foreground, you start the sequence with `38;5`. If you want it in the background, then you start the sequence with `48;5`.

As I said, the last range comprise a scale of black to white. So, let's suppose we want a gray (`240`) foreground color. We could get it by writing

```bash
echo -e "\x1b[38;5;240mText"
```

#### 24 bit colors
Ok, so we increment the number of possible colors by a few bits with 24 bit colors. With them, we have over 16 million possible colors. This group, also known by the name true color, is like the colors used in HTML and CSS where we can represent red, green and blue with two hexadecimal digits (1 byte) each.

A 24 bit color syntax is

```bash
echo -e "\x1b[38;2;RED;GREEN;BLUEm" # Foreground
echo -e "\x1b[48;2;RED;GREEN;BLUEm" # Background
```

Similar to the CSS `rgb()` function, `RED`, `GREEN` and `BLUE` are numbers in the range 0-255.

In case you want to check how many colors your terminal emulator supports, there's this [Stack Exchange question](https://unix.stackexchange.com/q/23763) and [this gist](https://gist.github.com/XVilka/8346728) that might help.

### Other attributes
There are not only colors in ANSI escape codes attributes. As I said in the beginning of the post, we can do other things like making a string bold or italic.

```bash
echo -e "\x1b[1mText" # Bold
echo -e "\x1b[3mText" # Italic
echo -e "\x1b[4mText" # Underline
echo -e "\x1b[9mText" # Strikethrough
```

### Combining them
None of the attributes I mentioned above are exclusive. Yes, that means we can make, for instance, a bold, italic, underlined and crossed yellow string with a blue background

```bash
echo -e "\x1b[1;3;4;9;33;44mText"
```

### Resetting all
What if we want to print something in the same line as the custom text above but without any attributes? Well, we could use the attribute of code `0`, which is used to reset all attributes. So it would be something like this

```bash
echo -e "\x1b[1;3;4;9;33;44mText\x1b[0mOtherText"
```

While `Text` would have all the specified attributes applied, `OtherText` would have the default attributes of your terminal emulator.

## customo
customo is a package I wrote in go to help create custom strings using ANSI escape codes attributes. [The project is available on GitHub](https://github.com/efreitasn/customo) and it supports all attributes mentioned in this post. It also appends `\x1b[0m` to a custom string automatically, avoiding *an attributes leak*. For instance,

```go
package main

import (
	"fmt"

	"github.com/efreitasn/customo"
)

func main() {
	str := customo.Format(
		"Custom",
		customo.AttrBold,
		customo.AttrUnderline,
		customo.AttrFgColor24Bits(255, 255, 255),
		customo.AttrBgColor24Bits(0, 0, 255),
	)

	fmt.Println(str)
}
```

is equivalent to

```bash
echo -e "\x1b[1;4;38;2;255;255;255;48;2;0;0;255mCustom\x1b[0m"
```

which is an underlined, bold string with a 24 bits white color in the foreground and a 24 bits blue color in the background.

## Conclusion
I didn't mention all codes. I mean, I didn't even mention the codes related to cursor position or put a table showing all the possible combinations of colors. If you're looking for said tables or the full list of characters, you can have look at [this Wikipedia page](https://en.wikipedia.org/wiki/ANSI_escape_code).
