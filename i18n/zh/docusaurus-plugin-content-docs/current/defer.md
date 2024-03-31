---
title: defer [推迟]
tags: [function, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: 在 TypeScript、JavaScript 和 Deno 中实现 "defer" 的方法。
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

延迟调用一个函数，直到当前调用栈已经清空。

使用 `setTimeout()`，设置超时为 1 毫秒，向浏览器事件队列中添加一个新事件，以便让渲染引擎完成其工作。使用扩展运算符 (`...`) 来向函数提供任意数量的参数。

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);
```

```js
// Example A:
defer(console.log, "a"), console.log("b"); // logs 'b' then 'a'

// Example B:
document.querySelector("#someElement").innerHTML = "Hello";
longRunningFunction(); // Browser will not update the HTML until this has finished
defer(longRunningFunction); // Browser will update the HTML then run the function
```
