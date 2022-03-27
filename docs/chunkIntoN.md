---
title: chunkIntoN
tags: [array, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "chunkIntoN" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)

Chunks an array into `n` smaller arrays.

Use `Math.ceil()` and `Array.prototype.length` to get the size of each chunk.
Use `Array.from()` to create a new array of size `n`.
Use `Array.prototype.slice()` to map each element of the new array to a chunk the length of `size`.
If the original array can't be split evenly, the final chunk will contain the remaining elements.

```js
const chunkIntoN = (arr, n) => {
  const size = Math.ceil(arr.length / n);
  return Array.from({ length: n }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
};
```

```js
chunkIntoN([1, 2, 3, 4, 5, 6, 7], 4); // [[1,2], [3,4], [5,6], [7]]
```
