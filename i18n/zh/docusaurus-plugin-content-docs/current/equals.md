---
title: equals [相等]
tags: [object, array, type, advanced]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: 在 TypeScript、JavaScript 和 Deno 中实现 "equals" 的方法。
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

执行两个值之间的深度比较，以确定它们是否等价。

检查这两个值是否相同，如果它们都是具有相同时间的 `Date` 对象，可以使用 `Date.getTime()`，或者如果它们都是非对象值并且具有等价的值（使用严格比较）。

检查只有一个值是 null 或 undefined，或者它们的原型不同。如果上述条件都不满足，使用 `Object.keys()` 检查这两个值是否具有相同数量的键，然后使用 Array.`prototype.every()` 检查第一个值中的每个键是否存在于第二个值中，并且通过递归调用此方法来检查它们是否等价。

```ts title="typescript"
const equals = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date)
    return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== "object" && typeof b !== "object"))
    return a === b;
  if (a.prototype !== b.prototype) return false;
  let keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every((k) => equals(a[k], b[k]));
};
```

```ts title="typescript"
equals(
  { a: [2, { e: 3 }], b: [4], c: "foo" },
  { a: [2, { e: 3 }], b: [4], c: "foo" }
); // true
equals([1, 2, 3], { 0: 1, 1: 2, 2: 3 }); // true

// equals(1, "1");// compile error
deepEquals(1, "1"); //false// no compile error
```
