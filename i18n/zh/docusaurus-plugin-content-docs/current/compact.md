---
title: compact [压缩]
tags: [array, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: 在 TypeScript、JavaScript 和 Deno 中实现 "compact" 的方法。
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

从数组中移除假值。

使用 `Array.prototype.filter()` 来过滤掉假值 `（false、null、0、""、undefined 和 NaN）`。

```ts title="typescript"
const compact = (arr: any[]) => arr.filter(Boolean);
```

```ts title="typescript"
compact([0, 1, false, 2, "", 3, "a", Number("e") * 23, NaN, "s", 34]); // [ 1, 2, 3, 'a', 's', 34 ]
```
