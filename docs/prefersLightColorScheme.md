---
title: prefersLightColorScheme
tags: [browser, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "prefersLightColorScheme" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Returns `true` if the user color scheme preference is `light`, `false` otherwise.

Use `window.matchMedia()` with the appropriate media query to check the user color scheme preference.

```js
const prefersLightColorScheme = () =>
  window &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches;
```

```js
prefersLightColorScheme(); // true
```
