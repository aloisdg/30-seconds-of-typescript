"use strict";(self.webpackChunk_deepakvishwakarma_ts_util=self.webpackChunk_deepakvishwakarma_ts_util||[]).push([[358],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15886:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"uncurry",tags:["function","intermediate"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "uncurry" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},p=void 0,c={unversionedId:"uncurry",id:"uncurry",title:"uncurry",description:'Implementation of "uncurry" in typescript, javascript and deno.',source:"@site/docs/uncurry.md",sourceDirName:".",slug:"/uncurry",permalink:"/30-seconds-of-typescript/docs/uncurry",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/uncurry.md",tags:[{label:"function",permalink:"/30-seconds-of-typescript/docs/tags/function"},{label:"intermediate",permalink:"/30-seconds-of-typescript/docs/tags/intermediate"}],version:"current",frontMatter:{title:"uncurry",tags:["function","intermediate"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "uncurry" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},sidebar:"someSidebar",previous:{title:"unary",permalink:"/30-seconds-of-typescript/docs/unary"},next:{title:"unescapeHTML",permalink:"/30-seconds-of-typescript/docs/unescapeHTML"}},u={},l=[],d={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),(0,o.kt)("p",null,"Uncurries a function up to depth ",(0,o.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,o.kt)("p",null,"Return a variadic function.\nUse ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," on the provided arguments to call each subsequent curry level of the function.\nIf the ",(0,o.kt)("inlineCode",{parentName:"p"},"length")," of the provided arguments is less than ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," throw an error.\nOtherwise, call ",(0,o.kt)("inlineCode",{parentName:"p"},"fn")," with the proper amount of arguments, using ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.slice(0, n)"),".\nOmit the second argument, ",(0,o.kt)("inlineCode",{parentName:"p"},"n"),", to uncurry up to depth ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'const uncurry =\n  (fn, n = 1) =>\n  (...args) => {\n    const next = (acc) => (args) => args.reduce((x, y) => x(y), acc);\n    if (n > args.length) throw new RangeError("Arguments too few!");\n    return next(fn)(args.slice(0, n));\n  };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"const add = (x) => (y) => (z) => x + y + z;\nconst uncurriedAdd = uncurry(add, 3);\nuncurriedAdd(1, 2, 3); // 6\n")))}m.isMDXComponent=!0}}]);