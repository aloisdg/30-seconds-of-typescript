---
title: readFileLines
tags: [node, array, string, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "readFileLines" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Returns an array of lines from the specified file.

Use `readFileSync` function in `fs` node package to create a `Buffer` from a file.
convert buffer to string using `toString(encoding)` function.
creating an array from contents of file by `split`ing file content line by line (each `\n`).

```js
const fs = require("fs");
const readFileLines = (filename) =>
  fs.readFileSync(filename).toString("UTF8").split("\n");
```

```js
/*
contents of test.txt :
  line1
  line2
  line3
  ___________________________
*/
let arr = readFileLines("test.txt");
console.log(arr); // ['line1', 'line2', 'line3']
```
