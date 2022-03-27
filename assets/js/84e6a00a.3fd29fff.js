"use strict";(self.webpackChunk_deepakvishwakarma_ts_util=self.webpackChunk_deepakvishwakarma_ts_util||[]).push([[6609],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(r),g=a,d=m["".concat(p,".").concat(g)]||m[g]||u[g]||o;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78791:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={title:"getBaseURL",tags:["browser","string","url","beginner"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "getBaseURL" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},p=void 0,c={unversionedId:"getBaseURL",id:"getBaseURL",title:"getBaseURL",description:'Implementation of "getBaseURL" in typescript, javascript and deno.',source:"@site/docs/getBaseURL.md",sourceDirName:".",slug:"/getBaseURL",permalink:"/30-seconds-of-typescript/docs/getBaseURL",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/getBaseURL.md",tags:[{label:"browser",permalink:"/30-seconds-of-typescript/docs/tags/browser"},{label:"string",permalink:"/30-seconds-of-typescript/docs/tags/string"},{label:"url",permalink:"/30-seconds-of-typescript/docs/tags/url"},{label:"beginner",permalink:"/30-seconds-of-typescript/docs/tags/beginner"}],version:"current",frontMatter:{title:"getBaseURL",tags:["browser","string","url","beginner"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "getBaseURL" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},sidebar:"someSidebar",previous:{title:"get",permalink:"/30-seconds-of-typescript/docs/get"},next:{title:"getColonTimeFromDate",permalink:"/30-seconds-of-typescript/docs/getColonTimeFromDate"}},l={},u=[],m={toc:u};function g(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),(0,o.kt)("p",null,"Returns the current URL without any parameters."),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"String.prototype.indexOf()")," to check if the given ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," has parameters, ",(0,o.kt)("inlineCode",{parentName:"p"},"String.prototype.slice()")," to remove them if necessary."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'const getBaseURL = (url: string) =>\n  url.indexOf("?") > 0 ? url.slice(0, url.indexOf("?")) : url;\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"getBaseURL(\"http://url.com/page?name=Adam&surname=Smith\"); // 'http://url.com/page'\n")))}g.isMDXComponent=!0}}]);