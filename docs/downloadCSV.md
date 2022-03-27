---
title: downloadCSV
tags: [function, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "downloadCSV" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Defers invoking a function until the current call stack has cleared.

Use `setTimeout()` with a timeout of 1ms to add a new event to the browser event queue and allow the rendering engine to complete its work. Use the spread (`...`) operator to supply the function with an arbitrary number of arguments.

```ts
const downloadCSV = (csvContent: string, name: string = "download.csv") => {
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", name);
  document.body.appendChild(link); // Required for FF
  link.click(); // This will download the data file named "my_data.csv".
};
```

```ts
const csvstr = arrayToCSV([
  ["a", '"b" great'],
  ["c", 3.1415],
]); // '"a","""b"" great"\n"c",3.1415'

downloadCSV(csvstr, "userdetail.csv");
```
