---
title: hasKey
tags: [object, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "hasKey" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Returns `true` if the target value exists in a JSON object, `false` otherwise.

Check if `keys` is non-empty and use `Array.prototype.every()` to sequentially check its keys to internal depth of the object, `obj`.
Use `Object.prototype.hasOwnProperty()` to check if `obj` does not have the current key or is not an object, stop propagation and return `false`.
Otherwise assign the key's value to `obj` to use on the next iteration.
Return `false` beforehand if given key list is empty.

```js
const hasKey = (obj, keys) => {
  return (
    keys.length > 0 &&
    keys.every((key) => {
      if (typeof obj !== "object" || !obj.hasOwnProperty(key)) return false;
      obj = obj[key];
      return true;
    })
  );
};
```

```js
let obj = {
  a: 1,
  b: { c: 4 },
  "b.d": 5,
};
hasKey(obj, ["a"]); // true
hasKey(obj, ["b"]); // true
hasKey(obj, ["b", "c"]); // true
hasKey(obj, ["b.d"]); // true
hasKey(obj, ["d"]); // false
hasKey(obj, ["c"]); // false
hasKey(obj, ["b", "f"]); // false
```
