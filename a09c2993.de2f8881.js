(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{398:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(9),s=(n(0),n(546)),o={title:"30-seconds-of-typescript",tags:"introduction, beginner"},i={id:"introduction",isDocsHomePage:!0,title:"30-seconds-of-typescript",description:"TS",source:"@site/docs/introduction.md",permalink:"/30-seconds-of-typescript/docs/",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/introduction.md",sidebar:"someSidebar",previous:{title:"intersectionWith",permalink:"/30-seconds-of-typescript/docs/intersectionWith"},next:{title:"invertKeyValues",permalink:"/30-seconds-of-typescript/docs/invertKeyValues"}},c=[{value:"Install nodejs/npm",id:"install-nodejsnpm",children:[{value:"How to use Typescript",id:"how-to-use-typescript",children:[]},{value:"How to use JS",id:"how-to-use-js",children:[]}]},{value:"Install Snippet Extension",id:"install-snippet-extension",children:[{value:"Search for snippet- Sampletypescript & typescriptreact",id:"search-for-snippet--sampletypescript--typescriptreact",children:[]}]},{value:"How to use Deno",id:"how-to-use-deno",children:[]},{value:"How to use using Github CDN Modern HTML|JS",id:"how-to-use-using-github-cdn-modern-htmljs",children:[{value:"Contribution",id:"contribution",children:[]},{value:"How to test using Deno",id:"how-to-test-using-deno",children:[]}]}],p={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(s.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),"\n",Object(s.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-ECMAScript-yellow.svg?style=flat-square",alt:"ECMAScript"})),"\n",Object(s.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/github/license/deepakshrma/30-seconds-of-typescript",alt:"GitHub"}))),Object(s.b)("p",null,"This repo is collection of multiple utility function ",Object(s.b)("inlineCode",{parentName:"p"},"Like lodash"),", that can be used and anywhere with simply importing."),Object(s.b)("p",null,"All the documents can be found on ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://deepakshrma.github.io/30-seconds-of-typescript/docs/"}),"30-seconds-of-typescript")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Note:")," This repo is highly inspired by ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/30-seconds/30-seconds-of-code"}),"30-seconds-of-code"),". I am converting all JS to Typescript so that it can be used for Typescript, Modern HTML|JS and Deno. ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/deepakshrma/30-seconds-of-typescript/"}),"Github")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"I am refactoring code and fixing bug along with conversion."))),Object(s.b)("h2",{id:"install-nodejsnpm"},"Install nodejs/npm"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm i @deepakvishwakarma/ts-util\n")),Object(s.b)("h3",{id:"how-to-use-typescript"},"How to use ","[Typescript]"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"import { mask } from \"@deepakvishwakarma/ts-util\";\n\nconsole.log(mask(1234567890)); // '******7890'\nconsole.log(mask(1234567890, 3)); // '*******890'\nconsole.log(mask(1234567890, -4, \"$\")); // '$$$$567890'\n")),Object(s.b)("h3",{id:"how-to-use-js"},"How to use ","[JS]"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"const { mask } = require(\"@deepakvishwakarma/ts-util\");\n\nconsole.log(mask(1234567890)); // '******7890'\nconsole.log(mask(1234567890, 3)); // '*******890'\nconsole.log(mask(1234567890, -4, \"$\")); // '$$$$567890'\n")),Object(s.b)("h2",{id:"install-snippet-extension"},"Install Snippet Extension"),Object(s.b)("p",null,"You can find working plugin on ",Object(s.b)("inlineCode",{parentName:"p"},"marketplace.visualstudio.com"),". You can either search for ",Object(s.b)("inlineCode",{parentName:"p"},"30-seconds-of-typescript")," Or Install from here ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=imdeepak.30-seconds-of-typescript"}),"imdeepak.30-seconds-of-typescript")),Object(s.b)("h3",{id:"search-for-snippet--sampletypescript--typescriptreact"},"Search for snippet- Sample","[typescript & typescriptreact]"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"30_delay\n")),Object(s.b)("p",null,Object(s.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/deepakshrma/30-seconds-of-typescript/raw/master/assets/snippets.gif",alt:"assets/snippets.gif"}))),Object(s.b)("p",null,"This repo has utility file, that can be imported to Deno and modern EcmaScript."),Object(s.b)("h2",{id:"how-to-use-deno"},"How to use ","[Deno]"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'import { all } from "https://denopkg.com/deepakshrma/30-seconds-of-typescript/util.ts";\nall([{ name: "D" }, { name: "D2" }], hasName); //true\n')),Object(s.b)("h2",{id:"how-to-use-using-github-cdn-modern-htmljs"},"How to use using Github CDN ","[Modern HTML|JS]"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<script type="module">\n  // Use any Github CDN\n  import * as util from "https://cdn.jsdelivr.net/gh/deepakshrma/30-seconds-of-typescript/util.js";\n  const el = util.createElement(\n    `<div class="container"><p>Hello! This is created using createElement!! </p></div>`\n  );\n  document.body.appendChild(el);\n<\/script>\n')),Object(s.b)("h3",{id:"contribution"},"Contribution"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Docs: ",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/docs"}),"/docs")),Object(s.b)("li",{parentName:"ul"},"Util: ",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"/util.ts"}),"/util.ts"))),Object(s.b)("h4",{id:"create-new-utility-function"},"Create New utility function"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"export here")," ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/deepakshrma/30-seconds-of-typescript/blob/master/util.ts"}),"util.ts")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"How to bundle:")," It will be auto using husky githook"),Object(s.b)("h3",{id:"how-to-test-using-deno"},"How to test using Deno"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"deno test util.test.ts\n")),Object(s.b)("h4",{id:"commands--scripts"},"Commands | Scripts"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"1. Generate Snippets:")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm run code-gen\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"2. Generate Extension:")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm run extension\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"3. Install Extension Locally:")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"code --install-extension *.vsix\n")),Object(s.b)("p",null,"Note: This website is build using docusaurus."))}l.isMDXComponent=!0},546:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||s;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);