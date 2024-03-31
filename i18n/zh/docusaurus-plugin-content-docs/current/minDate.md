---
title: minDate
tags: [date, math, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: 在 TypeScript、JavaScript 和 Deno 中实现 "minDate" 的方法。
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

返回给定日期中的最小值。

使用 ES6 展开语法来找到最小的日期值，使用 `new Date()` 将其转换为 `Date` 对象。

```js
const minDate = (dates) => new Date(Math.min(...dates));
```

```js
const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9),
];
minDate(array); // 2016-01-08T22:00:00.000Z
```
