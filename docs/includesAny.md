---
title: includesAny
tags: [array, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "includesAny" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Returns `true` if at least one element of values is included in arr , `false` otherwise.

Use `Array.prototype.some()` and `Array.prototype.includes()` to check if at least one element of `values` is included in `arr`.

```js
const includesAny = (arr, values) => values.some((v) => arr.includes(v));
```

```js
includesAny([1, 2, 3, 4], [2, 9]); // true
includesAny([1, 2, 3, 4], [8, 9]); // false
```
