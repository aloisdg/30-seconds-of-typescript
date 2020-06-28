(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{359:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),c=(n(0),n(502)),i={title:"30-seconds-of-typescript",tags:"introduction, beginner"},o={id:"introduction",isDocsHomePage:!0,title:"30-seconds-of-typescript",description:"This repo is highly inspired by 30-seconds-of-code. I am converting all JS to Typescript so that it can be used for Typescript, Modern HTML|JS and Deno. Github",source:"@site/docs/introduction.md",permalink:"/30-seconds-of-typescript/docs/",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/introduction.md",sidebar:"someSidebar",previous:{title:"intersectionWith",permalink:"/30-seconds-of-typescript/docs/intersectionWith"},next:{title:"invertKeyValues",permalink:"/30-seconds-of-typescript/docs/invertKeyValues"}},s=[{value:"How to use Deno",id:"how-to-use-deno",children:[]},{value:"How to modern HTML|JS(Using Github CDN)",id:"how-to-modern-htmljsusing-github-cdn",children:[]},{value:"Install VS Code Extension",id:"install-vs-code-extension",children:[{value:"Search for snippet- Sample",id:"search-for-snippet--sample",children:[]}]},{value:"How to test using Deno",id:"how-to-test-using-deno",children:[{value:"Contribution",id:"contribution",children:[]}]}],p={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This repo is highly inspired by ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/30-seconds/30-seconds-of-code"}),"30-seconds-of-code"),". I am converting all JS to Typescript so that it can be used for Typescript, Modern HTML|JS and Deno. ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/deepakshrma/30-seconds-of-typescript/"}),"Github")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),"\n",Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/github/license/deepakshrma/30-seconds-of-typescript",alt:"GitHub"}))),Object(c.b)("p",null,"It has multiple utility function like ",Object(c.b)("inlineCode",{parentName:"p"},"lodash")," can be used and anywhere with simply importing."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"I am refactoring code and fixing bug along with conversion."))),Object(c.b)("h2",{id:"how-to-use-deno"},"How to use ","[Deno]"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'import { all } from "https://denopkg.com/deepakshrma/30-seconds-of-typescript/util.ts";\nall([{ name: "D" }, { name: "D2" }], hasName); //true\n')),Object(c.b)("h2",{id:"how-to-modern-htmljsusing-github-cdn"},"How to modern HTML|JS(Using Github CDN)"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<script type="module">\n  // Use any Github CDN\n  import * as util from "https://cdn.jsdelivr.net/gh/deepakshrma/30-seconds-of-typescript/util.js";\n  const el = util.createElement(\n    `<div class="container"><p>Hello! This is created using createElement!! </p></div>`\n  );\n  document.body.appendChild(el);\n<\/script>\n')),Object(c.b)("h2",{id:"install-vs-code-extension"},"Install VS Code Extension"),Object(c.b)("p",null,"Search for ",Object(c.b)("inlineCode",{parentName:"p"},"30-seconds-of-typescript")," Or Install here ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=imdeepak.30-seconds-of-typescript"}),"https://marketplace.visualstudio.com/items?itemName=imdeepak.30-seconds-of-typescript")),Object(c.b)("h3",{id:"search-for-snippet--sample"},"Search for snippet- Sample"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"30_delay\n")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://github.com/deepakshrma/30-seconds-of-typescript/raw/master/assets/snippets.gif",alt:"assets/snippets.gif"}))),Object(c.b)("h2",{id:"how-to-test-using-deno"},"How to test using Deno"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"deno test util.test.ts\n")),Object(c.b)("h3",{id:"contribution"},"Contribution"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Docs: ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs"}),"/docs")),Object(c.b)("li",{parentName:"ul"},"Util: ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/util.ts"}),"/util.ts"))),Object(c.b)("h4",{id:"create-new-utility-function"},"Create New utility function"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"export here")," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/deepakshrma/30-seconds-of-typescript/blob/master/util.ts"}),"util.ts")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),Object(c.b)("strong",{parentName:"h5"},"How to bundle"))),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},Object(c.b)("strong",{parentName:"p"},"It will be auto using husky githook")))),Object(c.b)("h4",{id:"commands"},"Commands"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1. Generate Snippets:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run code-gen\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"2. Generate Extension:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run extension\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"3. Install Extension Locally:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"code --install-extension *.vsix\n")),Object(c.b)("p",null,"This website is build using docusaurus."))}b.isMDXComponent=!0},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(n),u=a,m=l["".concat(i,".").concat(u)]||l[u]||d[u]||c;return n?r.a.createElement(m,o(o({ref:t},p),{},{components:n})):r.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);