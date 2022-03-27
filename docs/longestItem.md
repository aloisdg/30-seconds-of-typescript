---
title: longestItem
tags: [array, string, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "longestItem" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Takes any number of iterable objects or objects with a `length` property and returns the longest one.
If multiple objects have the same length, the first one will be returned.
Returns `undefined` if no arguments are provided.

Use `Array.prototype.reduce()`, comparing the `length` of objects to find the longest one.

```js
const longestItem = (...vals) =>
  vals.reduce((a, x) => (x.length > a.length ? x : a));
```

```js
longestItem("this", "is", "a", "testcase"); // 'testcase'
longestItem(...["a", "ab", "abc"]); // 'abc'
longestItem(...["a", "ab", "abc"], "abcd"); // 'abcd'
longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
longestItem([1, 2, 3], "foobar"); // 'foobar'
```
