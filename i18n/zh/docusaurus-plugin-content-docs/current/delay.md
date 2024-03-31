---
title: delay [延迟]
tags: [function, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: 在 TypeScript、JavaScript 和 Deno 中实现 "delay" 的方法。
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

在 `wait` 毫秒后调用提供的函数。

使用 `setTimeout()` 来延迟执行 fn。

使用扩展运算符 `(...)` 来向函数提供任意数量的参数。

```ts title="typescript"
const delay = (fn: Func, wait: number, ...args: any[]) =>
  setTimeout(fn, wait, ...args);

// Return a promise, Resolve after `wait` milliseconds.
const delayedPromise = (wait: number = 300, ...args: any[]) =>
  new Promise((resolve) => {
    delay(resolve, wait, ...args);
  });
```

```ts title="typescript"
delay(
  function (text) {
    console.log(text);
  },
  1000,
  "later"
); // Logs 'later' after one second.

// delayedPromise
let counter = 0;
const updateState = () => {
  counter++;
};
const debouncedUpdate = debounce(updateState);
debouncedUpdate(); // counter == 1
debouncedUpdate(); // counter == 1
await delayedPromise(); // counter == 1
assertEquals(counter, 1);
```
