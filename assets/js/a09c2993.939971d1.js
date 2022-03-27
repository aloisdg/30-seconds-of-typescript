"use strict";(self.webpackChunk_deepakvishwakarma_ts_util=self.webpackChunk_deepakvishwakarma_ts_util||[]).push([[4128],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=s.createContext({}),l=function(e){var t=s.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return s.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?s.createElement(h,a(a({ref:t},c),{},{components:n})):s.createElement(h,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88495:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var s=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],i={title:"30-seconds-of-typescript",slug:"/",tags:["introduction","beginner"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "30-seconds-of-typescript" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},p=void 0,l={unversionedId:"introduction",id:"introduction",title:"30-seconds-of-typescript",description:'Implementation of "30-seconds-of-typescript" in typescript, javascript and deno.',source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/30-seconds-of-typescript/docs/",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/introduction.md",tags:[{label:"introduction",permalink:"/30-seconds-of-typescript/docs/tags/introduction"},{label:"beginner",permalink:"/30-seconds-of-typescript/docs/tags/beginner"}],version:"current",frontMatter:{title:"30-seconds-of-typescript",slug:"/",tags:["introduction","beginner"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "30-seconds-of-typescript" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},sidebar:"someSidebar",next:{title:"accumulate",permalink:"/30-seconds-of-typescript/docs/accumulate"}},c={},u=[{value:"Install nodejs/npm",id:"install-nodejsnpm",level:2},{value:"How to use Typescript",id:"how-to-use-typescript",level:3},{value:"How to use JS",id:"how-to-use-js",level:3},{value:"Install Snippet Extension",id:"install-snippet-extension",level:2},{value:"Search for snippet- Sampletypescript & typescriptreact",id:"search-for-snippet--sampletypescript--typescriptreact",level:3},{value:"How to use Deno",id:"how-to-use-deno",level:2},{value:"How to use using Github CDN Modern HTML|JS",id:"how-to-use-using-github-cdn-modern-htmljs",level:2},{value:"Contribution",id:"contribution",level:3},{value:"Create New utility function",id:"create-new-utility-function",level:4},{value:"How to test using Deno",id:"how-to-test-using-deno",level:3},{value:"Commands | Scripts",id:"commands--scripts",level:4}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-ECMAScript-yellow.svg?style=flat-square",alt:"ECMAScript"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/github/license/deepakshrma/30-seconds-of-typescript",alt:"GitHub"})),(0,o.kt)("p",null,"This repo is collection of multiple utility function ",(0,o.kt)("inlineCode",{parentName:"p"},"Like lodash"),", that can be used and anywhere with simply importing."),(0,o.kt)("p",null,"All the documents can be found on ",(0,o.kt)("a",{parentName:"p",href:"https://deepakshrma.github.io/30-seconds-of-typescript/docs/"},"30-seconds-of-typescript")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," This repo is highly inspired by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/30-seconds/30-seconds-of-code"},"30-seconds-of-code"),". I am converting all JS to Typescript so that it can be used for Typescript, Modern HTML|JS and Deno. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/deepakshrma/30-seconds-of-typescript/"},"Github")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"I am refactoring code and fixing bug along with conversion."))),(0,o.kt)("h2",{id:"install-nodejsnpm"},"Install nodejs/npm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @deepakvishwakarma/ts-util\n")),(0,o.kt)("h3",{id:"how-to-use-typescript"},"How to use ","[Typescript]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"import { mask } from \"@deepakvishwakarma/ts-util\";\n\nconsole.log(mask(1234567890)); // '******7890'\nconsole.log(mask(1234567890, 3)); // '*******890'\nconsole.log(mask(1234567890, -4, \"$\")); // '$$$$567890'\n")),(0,o.kt)("h3",{id:"how-to-use-js"},"How to use ","[JS]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"const { mask } = require(\"@deepakvishwakarma/ts-util\");\n\nconsole.log(mask(1234567890)); // '******7890'\nconsole.log(mask(1234567890, 3)); // '*******890'\nconsole.log(mask(1234567890, -4, \"$\")); // '$$$$567890'\n")),(0,o.kt)("h2",{id:"install-snippet-extension"},"Install Snippet Extension"),(0,o.kt)("p",null,"You can find working plugin on ",(0,o.kt)("inlineCode",{parentName:"p"},"marketplace.visualstudio.com"),". You can either search for ",(0,o.kt)("inlineCode",{parentName:"p"},"30-seconds-of-typescript")," Or Install from here ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=imdeepak.30-seconds-of-typescript"},"imdeepak.30-seconds-of-typescript")),(0,o.kt)("h3",{id:"search-for-snippet--sampletypescript--typescriptreact"},"Search for snippet- Sample","[typescript & typescriptreact]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"30_delay\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/deepakshrma/30-seconds-of-typescript/raw/master/assets/snippets.gif",alt:"assets/snippets.gif"})),(0,o.kt)("p",null,"This repo has utility file, that can be imported to Deno and modern EcmaScript."),(0,o.kt)("h2",{id:"how-to-use-deno"},"How to use ","[Deno]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'import { all } from "https://denopkg.com/deepakshrma/30-seconds-of-typescript/util.ts";\nall([{ name: "D" }, { name: "D2" }], hasName); //true\n')),(0,o.kt)("h2",{id:"how-to-use-using-github-cdn-modern-htmljs"},"How to use using Github CDN ","[Modern HTML|JS]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script type="module">\n  // Use any Github CDN\n  import * as util from "https://cdn.jsdelivr.net/gh/deepakshrma/30-seconds-of-typescript/util.js";\n  const el = util.createElement(\n    `<div class="container"><p>Hello! This is created using createElement!! </p></div>`\n  );\n  document.body.appendChild(el);\n<\/script>\n')),(0,o.kt)("h3",{id:"contribution"},"Contribution"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docs: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/deepakshrma/30-seconds-of-typescript/docs"},"/docs")),(0,o.kt)("li",{parentName:"ul"},"Util: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/deepakshrma/30-seconds-of-typescript/blob/master/util.ts"},"/util.ts"))),(0,o.kt)("h4",{id:"create-new-utility-function"},"Create New utility function"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"export here")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/deepakshrma/30-seconds-of-typescript/blob/master/util.ts"},"util.ts")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How to bundle:")," It will be auto using husky githook"),(0,o.kt)("h3",{id:"how-to-test-using-deno"},"How to test using Deno"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deno test util.test.ts\n")),(0,o.kt)("h4",{id:"commands--scripts"},"Commands | Scripts"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Generate Snippets:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run code-gen\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Generate Extension:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run extension\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. Install Extension Locally:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"code --install-extension *.vsix\n")),(0,o.kt)("p",null,"Note: This website is build using docusaurus."))}d.isMDXComponent=!0}}]);