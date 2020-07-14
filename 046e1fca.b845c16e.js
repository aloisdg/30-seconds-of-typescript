(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(9),o=(n(0),n(542)),c={title:"chunkIntoN",tags:"array,intermediate"},i={id:"chunkIntoN",isDocsHomePage:!1,title:"chunkIntoN",description:"JS",source:"@site/docs/chunkIntoN.md",permalink:"/30-seconds-of-typescript/docs/chunkIntoN",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/chunkIntoN.md",sidebar:"someSidebar",previous:{title:"chunk",permalink:"/30-seconds-of-typescript/docs/chunk"},next:{title:"clampNumber",permalink:"/30-seconds-of-typescript/docs/clampNumber"}},p=[],l={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}))),Object(o.b)("p",null,"Chunks an array into ",Object(o.b)("inlineCode",{parentName:"p"},"n")," smaller arrays."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Math.ceil()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.length")," to get the size of each chunk.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.from()")," to create a new array of size ",Object(o.b)("inlineCode",{parentName:"p"},"n"),".\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," to map each element of the new array to a chunk the length of ",Object(o.b)("inlineCode",{parentName:"p"},"size"),".\nIf the original array can't be split evenly, the final chunk will contain the remaining elements."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const chunkIntoN = (arr, n) => {\n  const size = Math.ceil(arr.length / n);\n  return Array.from({ length: n }, (v, i) =>\n    arr.slice(i * size, i * size + size)\n  );\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"chunkIntoN([1, 2, 3, 4, 5, 6, 7], 4); // [[1,2], [3,4], [5,6], [7]]\n")))}s.isMDXComponent=!0},542:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(f,i(i({ref:t},l),{},{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);