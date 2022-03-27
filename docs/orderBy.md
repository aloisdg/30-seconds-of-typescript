---
title: orderBy
tags: [object, array, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "orderBy" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns a sorted array of objects ordered by properties and orders.

Uses `Array.prototype.sort()`, `Array.prototype.reduce()` on the `props` array with a default value of `0`, use array destructuring to swap the properties position depending on the order passed.
If no `orders` array is passed it sort by `'asc'` by default.

```ts title="typescript"
const orderBy = <T = AnyObject>(
  arr: T[],
  props: (keyof T)[],
  orders?: ("asc" | "desc")[]
) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] =
          orders && orders[i] === "desc"
            ? [b[prop], a[prop]]
            : [a[prop], b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
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
orderBy(users, ["name", "age"], ["asc", "desc"]); // [{name: 'barney', age: 36}, {name: 'fred', age: 48}, {name: 'fred', age: 40}]
orderBy(users, ["name", "age"]); // [{name: 'barney', age: 36}, {name: 'fred', age: 40}, {name: 'fred', age: 48}]
```
