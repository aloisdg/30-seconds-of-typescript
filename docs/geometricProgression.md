---
title: geometricProgression
tags: [math, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "geometricProgression" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Initializes an array containing the numbers in the specified range where `start` and `end` are inclusive and the ratio between two terms is `step`.
Returns an error if `step` equals `1`.

Use `Array.from()`, `Math.log()` and `Math.floor()` to create an array of the desired length, `Array.prototype.map()` to fill with the desired values in a range.
Omit the second argument, `start`, to use a default value of `1`.
Omit the third argument, `step`, to use a default value of `2`.

```js
const geometricProgression = (end, start = 1, step = 2) =>
  Array.from({
    length: Math.floor(Math.log(end / start) / Math.log(step)) + 1,
  }).map((v, i) => start * step ** i);
```

```js
geometricProgression(256); // [1, 2, 4, 8, 16, 32, 64, 128, 256]
geometricProgression(256, 3); // [3, 6, 12, 24, 48, 96, 192]
geometricProgression(256, 1, 4); // [1, 4, 16, 64, 256]
```
