---
title: ellipsis [省略号]
tags: [string, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: 在 TypeScript、JavaScript 和 Deno 中实现 "ellipsis" 的方法。
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

将字符串截断到指定长度。

判断字符串的 `length` 是否大于 num。

返回截断到所需长度的字符串，并在末尾添加 `'...'`，或者返回原始字符串。

```ts title="typescript"
const truncateString = (
  str: string,
  num: number = str.length,
  ellipsisStr = "..."
) =>
  str.length >= num
    ? str.slice(0, num >= ellipsisStr.length ? num - ellipsisStr.length : num) +
      ellipsisStr
    : str;

const ellipsis = (str: string, num: number = str.length, ellipsisStr = "...") =>
  str.length >= num
    ? str.slice(0, num >= ellipsisStr.length ? num - ellipsisStr.length : num) +
      ellipsisStr
    : str;
```

```ts title="typescript"
truncateString("boomerang", 7); // 'boom...'

ellipsis("boomerang", 5, ".."); // "boo.."

ellipsis("boomerang"); // "boomer..."

ellipsis("boomerang", undefined, "♦♦♦"); // "boomer♦♦♦"
```
