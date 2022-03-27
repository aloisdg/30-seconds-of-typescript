---
title: URLJoin
tags: [string, regexp, advanced]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "URLJoin" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Joins all given URL segments together, then normalizes the resulting URL.

Use `String.prototype.join('/')` to combine URL segments, then a series of `String.prototype.replace()` calls with various regexps to normalize the resulting URL (remove double slashes, add proper slashes for protocol, remove slashes before parameters, combine parameters with `'&'` and normalize first parameter delimiter).

```ts title="typescript"
const URLJoin = (...args: string[]) =>
  args
    .join("/")
    .replace(/[\/]+/g, "/")
    .replace(/^(.+):\//, "$1://")
    .replace(/^file:/, "file:/")
    .replace(/\/(\?|&|#[^!])/g, "$1")
    .replace(/\?/g, "&")
    .replace("&", "?");

const URLJoinWithParams = (url: string, params: AnyObject<string | number>) => {
  return URLJoin(url, objectToQueryString(params));
};
```

```ts title="typescript"
URLJoin("http://www.google.com", "a", "/b/cd", "?foo=123", "?bar=foo"); // 'http://www.google.com/a/b/cd?foo=123&bar=foo'

URLJoinWithParams(URLJoin("http://www.google.com", "a", "/b/cd"), {
  foo: 123,
  bar: "foo",
}); // "http://www.google.com/a/b/cd?foo=123&bar=foo";
```
