---
title: isString
tags: [type, string, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: 在 TypeScript、JavaScript 和 Deno 中实现 "isString" 的方法。
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

检查给定的参数是否为字符串。仅适用于字符串原始值。

使用 `typeof` 来检查一个值是否被分类为字符串原始值。
使用守卫函数来检查字符串类型。

```ts title="typescript"
const isString = <T = any>(str: string | T): str is string => {
  return typeof str === "string";
};
```

```ts title="typescript"
isString("10"); // true
```
