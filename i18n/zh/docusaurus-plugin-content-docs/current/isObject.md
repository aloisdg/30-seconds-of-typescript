---
title: isObject
tags: [type, object, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: 在 TypeScript、JavaScript 和 Deno 中实现 "isObject" 的方法。
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

返回一个布尔值，用于确定传入的值是否是一个对象。

使用 `Object` 构造函数为给定的值创建一个对象包装器。
如果值为 `null` 或 `undefined`，则创建并返回一个空对象。否则，返回一个与给定值对应的类型的对象。

```ts title="typescript"
const isObject = (obj) => obj === Object(obj);
```

```ts title="typescript"
isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(["Hello!"]); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```
