---
title: transform
tags: [object, array, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "transform" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Applies a function against an accumulator and each key in the object (from left to right).

Use `Object.keys(obj)` to iterate over each key in the object, `Array.prototype.reduce()` to call the apply the specified function against the given accumulator.

```ts title="typescript"
const transform = (obj, fn, acc) =>
  Object.keys(obj).reduce((a, k) => fn(a, obj[k], k, obj), acc);
```

```ts title="typescript"
transform(
  { a: 1, b: 2, c: 1 },
  (r: any, v: string, k: any) => {
    (r[v] || (r[v] = [])).push(k);
    return r;
  },
  {}
); // { '1': ['a', 'c'], '2': ['b'] }
```
