---
title: Git and a database
excerpt: Using Git plumbing commands to create a database.
---

Let's imagine we need a database that would allow us to query for all the versions of a record since that record was created. For instance, we've got a note-taking app and we want to provide a history feature to the users. This could be solved by creating a history table that contains all previous versions of a record or by using a DBMS that already provides this, such as [Microsoft SQL Server](https://docs.microsoft.com/en-us/sql/relational-databases/tables/temporal-tables?view=sql-server-ver15). However, what if Git was used instead?

Think about it. Git has refs (tables) that point to commits (DB operations), which contain blobs (records) and information about the previous one (history). In other words, given a table, we can get the most recent state of a record and use it to reach previous versions. That's exactly what we need and what we'll talk about in this post. 

First, let's review a few things about Git.

## Object database and index
As stated in the [Pro Git book](https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain), Git is a content-addressable filesystem. So, we can store a file and refer to it by the hash of its content. Git has object types, and the one referring to a file is called blob. We cannot represent our whole project solely by blobs, though. We also need the filenames and a way to represent directories, and that's where the tree object is used. A node in a tree contains a name, a filemode (simillar, but not equal to Unix's) and the hash of an object, which can be a blob or another tree.

In a general Git workflow, the user doesn't create blobs and trees directly. Instead, the user creates a commit, which is another type of object. A commit contains the hash of a tree, an author and a committer, a date for each of them, an optional message and the hash(s) of its parent(s), if it's not the root commit. That's how `git log` is able to show us a history of commits. The command takes a revision range (e.g. a ref, a commit, a range of commits) and use it to start traversing the commits tree.

So, if the user doesn't create blobs and trees directly, but commits instead, where does the tree used by the next commit comes from? The answer for that is another data structure managed by Git: the index. The index is located at `.git/index` and contains a representation of the tree used by the next commit. When `git commit` is called, a tree is created from the index, then this tree is used to create a commit. The format of the file is specified in [index-format.txt](https://github.com/git/git/blob/master/Documentation/technical/index-format.txt), and it's not in the scope of this post to discuss the specifics of the file.

The last type of object is the tag. Tags in Git are used to refer to an object by another name. There are two types of tags: lightweight and annotated. The former is just a ref pointing to a commit and doesn't create an object, while the latter is an object containing when the tag was created, who created it and a message. An annotated tag also creates a ref the same way as a lightweight one does.

## Refs
Git has an object database whose items can be addressed by the hash of their contents, but there's still something missing. I mean, how can you know the hash of the last commit or how can Git know what commit to use as the parent of your next one? For that, there are refs. Refs are files that contain the hash of a commit or the name of another ref (symbolic ref) and, apart from a few, are located at `.git/refs`.

There are some special refs, including:

* `refs/heads/*`: branches.
* `refs/remotes/*`: remote-tracking branches.
* `refs/tags/*`: tag refs.
* `HEAD`: ref that either points to a branch, making it the current/active branch, or to a commit, in which case the repository would be in [detached HEAD state](https://git-scm.com/docs/git-checkout#_detached_head).

## Bare repositories
Up until this point we considered git-related files to be located under the `.git` directory, and that's generally the case, but we can also create a repository where the `.git` directory and the one where the working tree is are the same. The working tree is the current state of the directory of your project, but sometimes this tree is not necessary. Sometimes you don't need to be able to edit the files and just want to use this repository as a remote. That's what a bare repository is for.

A bare repository is created by calling `git init --bare`, and you can only interact with it by using it as a remote or by using plumbing commands.

## Plumbing and porcelain
You usually interact with a repository by using commands like `commit`, `branch`, `checkout` etc. These commands are called porcelain commands and abstract some operations done by Git so that it's easier to use. The other type of commands is called plumbing, and each of these commands is more focused on performing a specific operation on the filesystem. As an example:

### Using porcelain commands
```bash
# Create the file
echo foo > bar

# Create an object from the content of the bar file.
# Add the new object to the index.
git add bar

# Create a tree from the current index.
# Create a commit object from the new tree whose parent is 
# the commit pointed by HEAD after dereferencing it, if there's one.
# Update the branch pointed by HEAD to point to the new commit.
git commit -m "Add bar"
```

### Using plumbing commands
> **Note**: If you run the commands below, the hashes outputted by `git commit-tree` won't be the same. Remember, the hash of a commit is based on its content.

```bash
# Create the file
echo foo > bar

# Create an object from the content of the bar file.
git hash-object -w -- bar # 257cc5642cb1a054f08cc83f2d943e56fd3ebe99

# Add the new object to the index.
git update-index --add \
  --cacheinfo 100644,257cc5642cb1a054f08cc83f2d943e56fd3ebe99,bar

# Create a tree from the current index.
git write-tree # efbc17e61e746dad5c834bcb94869ba66b6264f9

# Create a commit object from the new tree whose parent is 
# the commit pointed by HEAD after dereferencing it, if there's one.
if [ "$(git show-ref --head -s HEAD)" ]; then
  git commit-tree efbc17e61e746dad5c834bcb94869ba66b6264f9 \
    -m "Add bar" \
    -p "$(git show-ref --head -s HEAD)"
  # ca541533f0062a19e4dfc21663c1c9d8eebba127
else
  git commit-tree efbc17e61e746dad5c834bcb94869ba66b6264f9 \
    -m "Add bar"
  # ca541533f0062a19e4dfc21663c1c9d8eebba127
fi

# Update the branch pointed by HEAD to point to the new commit.
git update-ref HEAD ca541533f0062a19e4dfc21663c1c9d8eebba127
```

> **Note**: The `100644` passed to `git commit-tree` refers to the mode of the index entry, as specified in [index-format.txt](https://github.com/git/git/blob/master/Documentation/technical/index-format.txt#L38).

I think this recap of some Git concepts is enough to get us started on the database. Note that there's a lot more Git concepts than the ones presented above, so take a look at the [Git reference](https://git-scm.com/docs) or the [Pro Git book](https://git-scm.com/book) if you want to know more.

## The DB
Let's start by creating the database itself:

```shell
git init --bare
```

It's a bare repository because there's no point in having two versions of the data. We just need the one stored in the object database. Speaking of which, let's create our first record:

```shell
echo '{"name": "Foo"}' | git hash-object -w --stdin
# 11a78487c8c5924f7d05f05ee223898fc6608cf4
```

We can use the `cat-file` command to check if the record was saved correctly:

```shell
git cat-file -p 11a78487c8c5924f7d05f05ee223898fc6608cf4
# {"name": "Foo"}
```

The `cat-file` command provides information about stored objects, like type, size and content. The `-p` flag asks for the content of the object to be printed based on its type, e.g. print a list of nodes when given a tree or print the raw content given a blob.

Let's not forget that we've stored the content of the record, but not its name. For that, we need a tree, and the most straightforward way to do that is to create one from the index. So, let's add our new object to the index:

```shell
git update-index --add \
  --cacheinfo 100644,11a78487c8c5924f7d05f05ee223898fc6608cf4,data
```

It was briefly talked about before, but let's now understand where the `100644` number, the mode of the index entry, comes from. The mode for an index entry is a 32-bit number that starts with the following bits:

* 4 bits for the object type.
* 3 bits unused.
* 9 bits for the Unix permission (only `0000`, `0755` and `0644` are accepted).

The `100644` number is an octal number and its binary representation is `1000000110100100`. It means:

* `1000`: object type that represents a regular file.
* `000`: three unused bits.
* `110100100`: a file than can be read and written by the owner and only read by the group and other users (`0644` in octal).

After adding the file to the index, we create a tree from it:

```shell
git write-tree
# f1db34daa05612f5e50f855715065cf26c929b19
```

Now we make our first commit. We don't need to check for the existence of a commit pointed by HEAD after dereferencing it because we know this is the first one. If we did, we'd use the version with an `if` statement presented when talking about plumbing commands.

```shell
echo -n | GIT_AUTHOR_NAME="Foo" \
  GIT_AUTHOR_EMAIL="foo@bar.com" \
  GIT_AUTHOR_DATE="2020-06-16T13:00:00Z" \
  GIT_COMMITTER_NAME="Foo" \
  GIT_COMMITTER_EMAIL="foo@bar.com" \
  GIT_COMMITTER_DATE="2020-06-16T13:00:00Z" \
  git commit-tree f1db34daa05612f5e50f855715065cf26c929b19
# 383f6fb5445bd2dd84b5c2b52d80565b8973d111
```

This time, we used `commit-tree` with environment variables. These variables are used to tell `commit-tree` to not use the default values when building the commit, making the outputted hash the same no matter where or when the command is run. Instead of passing a message using `-m`, we passed it through stdin by piping the output of the `echo -n` command with `git commit-tree`. Also, we're not passing any argument to `echo` to make this commit have an empty message, and `-n` tells the command to not append a `\n` character to the output. To be sure, let's check if the commit has indeed an empty message by doing a `hexdump` of the commit object's file.

```shell
pigz -c -z -d objects/38/3f6fb5445bd2dd84b5c2b52d80565b8973d111 | hexdump -C

# 00000000  63 6f 6d 6d 69 74 20 31  33 34 00 74 72 65 65 20  |commit 134.tree |
# 00000010  66 31 64 62 33 34 64 61  61 30 35 36 31 32 66 35  |f1db34daa05612f5|
# 00000020  65 35 30 66 38 35 35 37  31 35 30 36 35 63 66 32  |e50f855715065cf2|
# 00000030  36 63 39 32 39 62 31 39  0a 61 75 74 68 6f 72 20  |6c929b19.author |
# 00000040  46 6f 6f 20 3c 66 6f 6f  40 62 61 72 2e 63 6f 6d  |Foo <foo@bar.com|
# 00000050  3e 20 31 35 39 32 33 31  32 34 30 30 20 2b 30 30  |> 1592312400 +00|
# 00000060  30 30 0a 63 6f 6d 6d 69  74 74 65 72 20 46 6f 6f  |00.committer Foo|
# 00000070  20 3c 66 6f 6f 40 62 61  72 2e 63 6f 6d 3e 20 31  | <foo@bar.com> 1|
# 00000080  35 39 32 33 31 32 34 30  30 20 2b 30 30 30 30 0a  |592312400 +0000.|
# 00000090  0a                                                |.|
# 00000091
```

Any object file in Git starts with a header containing the object type (`commit`), a space, the size of the object in bytes (`134`) and a `NUL` character (the `.` after `134`). The concatenation of the header and the object's content is then compressed by zlib and that's what ends up being stored in the file and why we piped `pigz` to `hexdump`. After the committer's date, there are two `.` characters. If you look at the hex table, you'll see that both of these dots refer to the same hexadecimal number, `0x0a`, which represents the `\n` (new line, line feed) character. The commit message is placed after these two line feeds and, as you can see, there's nothing after them in our newly-created commit.

The last step is to create the ref:

```shell
git update-ref refs/note1 383f6fb5445bd2dd84b5c2b52d80565b8973d111
```

And that's it for the database. If we were to create a new version for `note1`, we'd do the same steps, but would also pass a parent commit when running `commit-tree`.

## About libgit2
It was not talked about in this post how to integrate the database with the note-taking app. This is because we wouldn't use Git commands for that, but a Git implementation, such as [libgit2](https://libgit2.org/), instead. Using commands would be very error-prone because of, among other things, having to parse the output of a command like `git log`. I've started a project that uses [git2go](https://github.com/libgit2/git2go), a Go package that provides bindings for libgit2, and this will be the subject of the next post.
