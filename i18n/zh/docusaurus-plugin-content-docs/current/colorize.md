---
title: colorize [给文本着色]
tags: [node, string, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: 在 TypeScript、JavaScript 和 Deno 中实现 "colorize" 的方法。
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-nodejs-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

在控制台中添加特殊字符到文本中以彩色打印（与 `console.log()` 结合使用）。

使用模板文字和特殊字符为字符串输出添加适当的颜色代码。
对于背景颜色，添加一个在字符串末尾重置背景颜色的特殊字符。

```ts title="typescript"
export const colorize = new (class {
  color = (code: number, ended = false, ...messages: any[]) =>
    `\x1b[${code}m${messages.join(" ")}${ended ? "\x1b[0m" : ""}`;
  black = this.color.bind(null, 30, false);
  red = this.color.bind(null, 31, false);
  green = this.color.bind(null, 32, false);
  yellow = this.color.bind(this, 33, false);
  blue = this.color.bind(this, 34, false);
  magenta = this.color.bind(this, 35, false);
  cyan = this.color.bind(this, 36, false);
  white = this.color.bind(this, 37, false);
  bgBlack = this.color.bind(this, 40, true);
  bgRed = this.color.bind(this, 41, true);
  bgGreen = this.color.bind(this, 42, true);
  bgYellow = this.color.bind(this, 43, true);
  bgBlue = this.color.bind(this, 44, true);
  bgMagenta = this.color.bind(this, 45, true);
  bgCyan = this.color.bind(this, 46, true);
  bgWhite = this.color.bind(this, 47, true);
})();

const color = colorize;
```

```ts title="typescript"
console.log(color.red("foo")); // 'foo' (red letters)
console.log(color.bgBlue("foo", "bar")); // 'foo bar' (blue background)
console.log(color.bgWhite(color.yellow("foo"), color.green("foo"))); // 'foo bar' (first
//word in yellow letters, second word in green letters, white background for both)

console.log(colorize.red("foo")); // 'foo' (red letters)
console.log(colorize.bgBlue("foo", "bar")); // 'foo bar' (blue background)
console.log(colorize.bgWhite(colorize.yellow("foo"), colorize.green("foo"))); // 'foo bar' (first
//word in yellow letters, second word in green letters, white background for both)
```
