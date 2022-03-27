---
title: juxt
tags: [array, function, advanced]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "juxt" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Takes several functions as argument and returns a function that is the juxtaposition of those functions.

Use `Array.prototype.map()` to return a `fn` that can take a variable number of `args`.
When `fn` is called, return an array containing the result of applying each `fn` to the `args`.

```js
const juxt =
  (...fns) =>
  (...args) =>
    [...fns].map((fn) => [...args].map(fn));
```

```js
juxt(
  (x) => x + 1,
  (x) => x - 1,
  (x) => x * 10
)(1, 2, 3); // [[2,3,4],[0,1,2],[10,20,30]]

juxt(
  (s) => s.length,
  (s) => s.split(" ").join("-")
)("30 seconds of code"); // [[18],['30-seconds-of-code']]
```
