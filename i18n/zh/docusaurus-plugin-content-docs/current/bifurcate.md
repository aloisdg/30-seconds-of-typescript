---
title: bifurcate
tags: [array, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: 在 TypeScript、JavaScript 和 Deno 中实现 "bifurcate" 的方法。
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

将值分成两组。如果 `filter` 中的元素为真值，则集合中对应的元素属于第一组；否则，它属于第二组。

使用 `Array.prototype.reduce()` 和 `Array.prototype.push()` 根据 `filter` 将元素添加到组中。

```ts title="typescript"
const bifurcate = <T = any>(arr: T[], filter: boolean[]) =>
  arr.reduce(
    (acc, val, i) => {
      acc[filter[i] ? 0 : 1].push(val);
      return acc;
    },
    [[] as T[], [] as T[]]
  );
```

```ts title="typescript"
bifurcate(["beep", "boop", "foo", "bar"], [true, true, false, true]); // [ ['beep', 'boop', 'bar'], ['foo'] ]
```
