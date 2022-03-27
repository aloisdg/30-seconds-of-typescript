"use strict";(self.webpackChunk_deepakvishwakarma_ts_util=self.webpackChunk_deepakvishwakarma_ts_util||[]).push([[4660],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82871:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"get",tags:["object","intermediate"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "get" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},p=void 0,l={unversionedId:"get",id:"get",title:"get",description:'Implementation of "get" in typescript, javascript and deno.',source:"@site/docs/get.md",sourceDirName:".",slug:"/get",permalink:"/30-seconds-of-typescript/docs/get",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/get.md",tags:[{label:"object",permalink:"/30-seconds-of-typescript/docs/tags/object"},{label:"intermediate",permalink:"/30-seconds-of-typescript/docs/tags/intermediate"}],version:"current",frontMatter:{title:"get",tags:["object","intermediate"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "get" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},sidebar:"someSidebar",previous:{title:"functions",permalink:"/30-seconds-of-typescript/docs/functions"},next:{title:"getBaseURL",permalink:"/30-seconds-of-typescript/docs/getBaseURL"}},c={},u=[{value:"Get",id:"get",level:3},{value:"GetAll",id:"getall",level:3}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),(0,o.kt)("p",null,"Retrieve a set of properties indicated by the given selectors from an object."),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," for each selector, ",(0,o.kt)("inlineCode",{parentName:"p"},"String.prototype.replace()")," to replace square brackets with dots, ",(0,o.kt)("inlineCode",{parentName:"p"},"String.prototype.split('.')")," to split each selector, ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," to remove empty values and ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to get the value indicated by it."),(0,o.kt)("h3",{id:"get"},"Get"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'export const get = (\n  from: any,\n  selector: string,\n  defaultValue: any = undefined\n) =>\n  selector\n    .replace(/\\[([^\\[\\]]*)\\]/g, ".$1.")\n    .split(".")\n    .filter((t) => t !== "")\n    .reduce((prev, cur) => prev && prev[cur], from) || defaultValue;\n')),(0,o.kt)("h3",{id:"getall"},"GetAll"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"export const getAll = (from: any, ...selectors: string[]) =>\n  [...selectors].map((s) => get(from, s));\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'const obj = {\n  selector: { to: { val: "val to select" } },\n  target: [1, 2, { a: "test" }],\n};\n\nget(obj, "selector.to.val"); //"val to select"\nget(obj, "selector.to1.val", null); // null\nget(obj, "selector.to1.val"); // undefined\ngetAll(obj, "selector.to.val", "target[0]", "target[2].a"); // [\'val to select\', 1, \'test\']\n')))}d.isMDXComponent=!0}}]);