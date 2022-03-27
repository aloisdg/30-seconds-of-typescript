"use strict";(self.webpackChunk_deepakvishwakarma_ts_util=self.webpackChunk_deepakvishwakarma_ts_util||[]).push([[126],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45756:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],p={title:"zipWith",tags:["array","function","advanced"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "zipWith" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},s=void 0,c={unversionedId:"zipWith",id:"zipWith",title:"zipWith",description:'Implementation of "zipWith" in typescript, javascript and deno.',source:"@site/docs/zipWith.md",sourceDirName:".",slug:"/zipWith",permalink:"/30-seconds-of-typescript/docs/zipWith",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/zipWith.md",tags:[{label:"array",permalink:"/30-seconds-of-typescript/docs/tags/array"},{label:"function",permalink:"/30-seconds-of-typescript/docs/tags/function"},{label:"advanced",permalink:"/30-seconds-of-typescript/docs/tags/advanced"}],version:"current",frontMatter:{title:"zipWith",tags:["array","function","advanced"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "zipWith" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},sidebar:"someSidebar",previous:{title:"zipObject",permalink:"/30-seconds-of-typescript/docs/zipObject"}},u={},l=[],d={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),(0,i.kt)("p",null,"Creates an array of elements, grouped based on the position in the original arrays and using function as the last value to specify how grouped values should be combined."),(0,i.kt)("p",null,"Check if the last argument provided is a function.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"Math.max()")," to get the longest array in the arguments.\nCreates an array with that length as return value and use ",(0,i.kt)("inlineCode",{parentName:"p"},"Array.from()")," with a map-function to create an array of grouped elements.\nIf lengths of the argument-arrays vary, ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," is used where no value could be found.\nThe function is invoked with the elements of each group ",(0,i.kt)("inlineCode",{parentName:"p"},"(...group)"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const zipWith = (...array) => {\n  const fn =\n    typeof array[array.length - 1] === "function" ? array.pop() : undefined;\n  return Array.from(\n    { length: Math.max(...array.map((a) => a.length)) },\n    (_, i) => (fn ? fn(...array.map((a) => a[i])) : array.map((a) => a[i]))\n  );\n};\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c); // [111,222]\nzipWith(\n  [1, 2, 3],\n  [10, 20],\n  [100, 200],\n  (a, b, c) =>\n    (a != null ? a : "a") + (b != null ? b : "b") + (c != null ? c : "c")\n); // [111, 222, \'3bc\']\n')))}m.isMDXComponent=!0}}]);