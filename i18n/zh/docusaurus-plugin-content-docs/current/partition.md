---
title: partition
tags: [array, object, function, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: 在 TypeScript、JavaScript 和 Deno 中实现 "partition" 的方法。
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

根据提供的函数对每个元素的真值性，将元素分组为两个数组。

使用 `Array.prototype.reduce()` 创建包含两个数组的数组。
使用 `Array.prototype.push()` 将 `fn` 返回 `true` 的元素添加到第一个数组中，将 `fn` 返回 `false` 的元素添加到第二个数组中。

```ts title="typescript"
const partition = (arr: any[], fn: Predicate) =>
  arr.reduce(
    (acc, val, i, arr) => {
      acc[fn(val, i, arr) ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );
```

```ts title="typescript"
const users = [
  { user: "barney", age: 36, active: false },
  { user: "fred", age: 40, active: true },
];
partition(users, (o) => o.active); // [[{ 'user': 'fred',    'age': 40, 'active': true }],[{ 'user': 'barney',  'age': 36, 'active': false }]]
```
