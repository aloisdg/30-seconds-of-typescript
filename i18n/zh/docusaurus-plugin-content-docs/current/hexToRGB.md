---
title: hexToRGB
tags: [string, advanced]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: 在 TypeScript、JavaScript 和 Deno 中实现 "hexToRGB" 的方法。
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

将颜色代码转换为 `rgb()` 或 `rgba()` 字符串（如果提供了 `alpha` 值）。

将字符串按照每两个字符一组分割，过滤空字符串，然后转换为数字。

```ts title="typescript"
const hexToRGB = (hex: string) => {
  hex = hex.startsWith("#") ? hex.slice(1) : hex;
  if (hex.length === 3) {
    hex = Array.from(hex).reduce((str, x) => str + x + x, ""); // 123 -> 112233
  }
  const values = hex
    .split(/([a-z0-9]{2,2})/)
    .filter(Boolean)
    .map((x) => parseInt(x, 16));
  return `rgb${values.length == 4 ? "a" : ""}(${values.join(", ")})`;
};

const hexToRGB2 = (hex: string) => {
  let hexChars = Array.from(hex.startsWith("#") ? hex.slice(1) : hex);
  if (hexChars.length === 3) {
    hexChars = hexChars.reduce((str, x) => [...str, x, x], [] as string[]); // 123 -> 112233
  }
  const values = chunk(hexChars, 2).map(([v1, v2]) => parseInt(v1 + v2, 16));
  return `rgb${values.length == 4 ? "a" : ""}(${values.join(", ")})`;
};
```

```ts title="typescript"
hexToRGB("#27ae60ff"); // 'rgba(39, 174, 96, 255)'
hexToRGB("27ae60"); // 'rgb(39, 174, 96)'
hexToRGB("#fff"); // 'rgb(255, 255, 255)'

hexToRGB2("#27ae60ff"); // 'rgba(39, 174, 96, 255)'
hexToRGB2("27ae60"); // 'rgb(39, 174, 96)'
hexToRGB2("#fff"); // 'rgb(255, 255, 255)'
```
