---
title: luhnCheck
tags: [math, advanced]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: 在 TypeScript、JavaScript 和 Deno 中实现 "luhnCheck" 的方法。
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

验证各种身份证号码（如信用卡号、IMEI 号码、国家提供者识别号码等）的 [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm) 的实现。

使用 `String.prototype.split('')`、`Array.prototype.reverse()` 和 `Array.prototype.map()` 与 `parseInt()` 结合使用来获取一个数字数组。
使用 `Array.prototype.splice(0,1)` 来获取最后一位数字。
使用 `Array.prototype.reduce()` 来实现 Luhn 算法。
如果 `sum` 可被 `10` 整除，则返回 `true`，否则返回 `false`。

```js
const luhnCheck = (num) => {
  let arr = (num + "")
    .split("")
    .reverse()
    .map((x) => parseInt(x));
  let lastDigit = arr.splice(0, 1)[0];
  let sum = arr.reduce(
    (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
    0
  );
  sum += lastDigit;
  return sum % 10 === 0;
};
```

```js
luhnCheck("4485275742308327"); // true
luhnCheck(6011329933655299); //  false
luhnCheck(123456789); // false
```
