---
title: triggerEvent
tags: [browser, event, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: 在 TypeScript、JavaScript 和 Deno 中实现 "triggerEvent" 的方法。
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

在给定元素上触发特定事件，可选择传递自定义数据。

使用 `new CustomEvent()` 从指定的 `eventType` 和详细信息创建事件。
使用 `el.dispatchEvent()` 在给定元素上触发新创建的事件。
如果不想传递自定义数据给触发的事件，则省略第三个参数 `detail`。

```ts title="typescript"
const triggerEvent = (el: HTMLElementLike, eventType: string, detail: any) =>
  el.dispatchEvent && el.dispatchEvent(new CustomEvent(eventType, { detail }));
```

```ts title="typescript"
triggerEvent(document.getElementById("myId"), "click");
triggerEvent(document.getElementById("myId"), "click", { username: "bob" });
```
