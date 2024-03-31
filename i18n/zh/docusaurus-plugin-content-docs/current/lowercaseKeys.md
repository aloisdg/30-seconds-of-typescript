---
title: lowercaseKeys
tags: [object, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: 在 TypeScript、JavaScript 和 Deno 中实现 "lowercaseKeys" 的方法。
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

从指定的对象创建一个新对象，其中所有的键都是小写的。

使用 `Object.keys()` 和 `Array.prototype.reduce()` 从指定的对象创建一个新对象。
使用 `String.toLowerCase()` 将原始对象中的每个键转换为小写。

```ts title="typescript"
type AnyObject = { [key: string]: any };
const lowercaseKeys = (obj: AnyObject, deep = false) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] =
      deep && typeof obj[key] === "object" ? lowercaseKeys(obj[key]) : obj[key];
    return acc;
  }, {} as AnyObject);
```

```ts title="typescript"
lowercaseKeys({ Name: "Adam", sUrnAME: "Smith" }); // {name: 'Adam', surname: 'Smith'};
lowercaseKeys({ Name: "Adam", adDress: { Pin: 700000 } }, true); // {name: 'Adam',  address: {pin: 700000} }
```
