---
title: btoa
tags: [node, string, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "btoa" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)

Creates a base-64 encoded ASCII string from a String object in which each character in the string is treated as a byte of binary data.

Create a `Buffer` for the given string with binary encoding and use `Buffer.toString('base64')` to return the encoded string.

```js
const btoa = (str) => Buffer.from(str, "binary").toString("base64");
```

```js
btoa("foobar"); // 'Zm9vYmFy'
```
