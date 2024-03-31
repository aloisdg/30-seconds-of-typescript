---
title: sum [和]
tags: [math, array, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: 在 TypeScript、JavaScript 和 Deno 中实现 "sum" 的方法。
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

返回两个或多个数字/数组的总和。

使用 `Array.prototype.reduce()` 要将每个值添加到一个累加器中，以一个值初始化的值 `0`.

```ts title="typescript"
const sum = (...arr: number[]) => [...arr].reduce((acc, val) => acc + val, 0);
```

```ts title="typescript"
sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```
