---
title: capitalizeEveryWord [大写每个单词]
tags: [string, regexp, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: 在 TypeScript、JavaScript 和 Deno 中实现 "capitalizeEveryWord" 的方法。
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

大写字符串中每个单词的首字母。

使用 `String.prototype.replace()` 匹配每个单词的第一个字符和 `String.prototype.toUpperCase()` 以大写。

```ts title="typescript"
const capitalizeEveryWord = (str: string = "") =>
  str.replace(/\b[a-z]/g, (char) => char.toUpperCase());
```

```ts title="typescript"
capitalizeEveryWord("hello world!"); // 'Hello World!'
```
