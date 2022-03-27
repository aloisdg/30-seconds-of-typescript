---
title: orderByFunc
tags: [object, array, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "orderByFunc" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns a sorted array of objects ordered by properties and orders.

Uses `Array.prototype.sort()`, `Array.prototype.reduce()` on the `props` array with a default value of `0`. Uses compare function callback `fn` to compare result based on the `prop` type.

```ts title="typescript"
export const orderByFunc = <T = AnyObject>(
  arr: T[],
  props: (keyof T)[],
  fn: Function
) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] = [a[prop], b[prop]];
        acc = fn(p1, p2, prop);
      }
      return acc;
    }, 0)
  );
```

```ts title="typescript"
const users = [
  { name: "fred", age: 48 },
  { name: "barney", age: 36 },
  { name: "fred", age: 40 },
];
orderByFunc(
  users,
  ["name", "age"],
  <T extends string | number>(p1: T, p2: T, prop: string) => {
    if (prop === "name") return String(p1).localeCompare(String(p2)); // asc
    if (prop === "age") return Number(p2) - Number(p1); // desc
  }
); // [ { name: "barney", age: 36 }, { name: "fred", age: 48 }, { name: "fred", age: 40 }];
```
