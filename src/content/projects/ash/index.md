---
title: "ash"
description: "Batteries included shell written in C"
date: "Mar 18 2024"
repoURL: "https://github.com/awaisamjad/ash"
---
---

![](/github.svg)

# Motivation

Before I started this project, there were 3 current main things that i wanted to learn more about: 
1. C 
2. the shell and 
3. terminal emulators.

If im speaking honestly, this is just one step in my linux journey where i just want to learn and move to the next interesting thing i see, mostly abandoning my previous projects. `emoji`

A quick Google search and I found this tutorial by [Stephen Brennan](https://brennan.io/2015/01/16/write-a-shell-in-c) which was pretty easy to understand. After completing it, I decided to add as much functionality to it as i could and just try and learn as much as possible C and how the shell works. I can skip the terminal emulator for now and after i abandon this, i'll work on that. `emoji`

### Technologies Used
**Language** - **C**

**Build Tool** - **Make** [^1]

[^1]: I still barely understand how to use this. Maybe I'll make my own version someday.


---

### Features and Functionality


These are the following functionalities I have either partially added or plan to add:

##### Use of external commands/programs
1. Git
2. make
3. etc..

##### Configuration File (partly introduced)
A file that can configure how the shell works such as changing the theme or font etc.

##### Command history (partly introduced)
Using either the up or down arrow (or any key that you can customise through the config file) you can get the history of the commands you entered before

##### Shell prompt customisation (planned)
Similar to [starship](https://starship.rs)


##### The usual commands

- **cd** - Change Directory
- **mkd** - Make Directory
- **touch** - Create file
- **ls** - list files in directory

##### Flags for commands

##### Piping
Allows you to combine commands


==inlcude gifs==