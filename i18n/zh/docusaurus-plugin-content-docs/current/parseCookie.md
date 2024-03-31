---
title: parseCookie
tags: [browser, string, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: 在 TypeScript、JavaScript 和 Deno 中实现 "parseCookie" 的方法。
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

解析 HTTP Cookie 头字符串，并返回所有 cookie 名称-值对的对象。

使用 `String.prototype.split(';')` 将键值对相互分开。
使用 `Array.prototype.map()` 和 `String.prototype.split('=')` 将每对中的键与值分开。
使用 `Array.prototype.reduce()` 和 `decodeURIComponent()` 创建包含所有键值对的对象。

```ts title="typescript"
const parseCookie = (str: string) =>
  str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {} as AnyObject<string>);
```

```ts title="typescript"
parseCookie("foo=bar; equation=E%3Dmc%5E2"); // { foo: 'bar', equation: 'E=mc^2' }
```
