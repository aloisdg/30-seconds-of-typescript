---
title: offset
tags: [array, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "offset" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Moves the specified amount of elements to the end of the array.

Use `Array.prototype.slice()` twice to get the elements after the specified index and the elements before that.
Use the spread operator(`...`) to combine the two into one array.
If `offset` is negative, the elements will be moved from end to start.

```ts title="typescript"
const offset = (arr: any[], offset: number) => [
  ...arr.slice(offset),
  ...arr.slice(0, offset),
];
```

```ts title="typescript"
offset([1, 2, 3, 4, 5], 2); // [3, 4, 5, 1, 2]
offset([1, 2, 3, 4, 5], -2); // [4, 5, 1, 2, 3]
```
