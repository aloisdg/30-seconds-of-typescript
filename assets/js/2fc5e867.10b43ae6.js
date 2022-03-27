"use strict";(self.webpackChunk_deepakvishwakarma_ts_util=self.webpackChunk_deepakvishwakarma_ts_util||[]).push([[3962],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,s(s({ref:t},l),{},{components:n})):r.createElement(h,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65123:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={title:"createEventHub",tags:["browser","event","advanced"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "createEventHub" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},p=void 0,c={unversionedId:"createEventHub",id:"createEventHub",title:"createEventHub",description:'Implementation of "createEventHub" in typescript, javascript and deno.',source:"@site/docs/createEventHub.md",sourceDirName:".",slug:"/createEventHub",permalink:"/30-seconds-of-typescript/docs/createEventHub",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/createEventHub.md",tags:[{label:"browser",permalink:"/30-seconds-of-typescript/docs/tags/browser"},{label:"event",permalink:"/30-seconds-of-typescript/docs/tags/event"},{label:"advanced",permalink:"/30-seconds-of-typescript/docs/tags/advanced"}],version:"current",frontMatter:{title:"createEventHub",tags:["browser","event","advanced"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "createEventHub" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},sidebar:"someSidebar",previous:{title:"createElement",permalink:"/30-seconds-of-typescript/docs/createElement"},next:{title:"CSVToArray",permalink:"/30-seconds-of-typescript/docs/CSVToArray"}},l={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),(0,i.kt)("p",null,"Creates a pub/sub (",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern"},"publish\u2013subscribe"),") event hub with ",(0,i.kt)("inlineCode",{parentName:"p"},"emit"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"on"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"off")," methods."),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.create(null)")," to create an empty ",(0,i.kt)("inlineCode",{parentName:"p"},"hub")," object that does not inherit properties from ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.prototype"),".\nFor ",(0,i.kt)("inlineCode",{parentName:"p"},"emit"),", resolve the array of handlers based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," argument and then run each one with ",(0,i.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," by passing in the data as an argument.\nFor ",(0,i.kt)("inlineCode",{parentName:"p"},"on"),", create an array for the event if it does not yet exist, then use ",(0,i.kt)("inlineCode",{parentName:"p"},"Array.prototype.push()")," to add the handler\nto the array.\nFor ",(0,i.kt)("inlineCode",{parentName:"p"},"off"),", use ",(0,i.kt)("inlineCode",{parentName:"p"},"Array.prototype.findIndex()")," to find the index of the handler in the event array and remove it using ",(0,i.kt)("inlineCode",{parentName:"p"},"Array.prototype.splice()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"const createEventHub = <T = any>() => ({\n  hub: Object.create(null),\n  emit(event: string, data?: T) {\n    (this.hub[event] || []).forEach((handler: Func<T | undefined>) =>\n      handler(data)\n    );\n  },\n  on(event: string, handler: Func<T>) {\n    if (!this.hub[event]) this.hub[event] = [];\n    this.hub[event].push(handler);\n  },\n  off(event: string, handler: Func<T>) {\n    const i = (this.hub[event] || []).findIndex((h: Func<T>) => h === handler);\n    if (i > -1) this.hub[event].splice(i, 1);\n    if (this.hub[event]?.length === 0) delete this.hub[event];\n  },\n});\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Basic String emitter:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'const handler = (data: string) => console.log(data);\nconst hub = createEventHub<string>();\n\n// Subscribe: listen for different types of events\nhub.on("message", handler);\nhub.on("message", () => console.log("Message event fired"));\n\n// Publish: emit events to invoke all handlers subscribed to them, passing the data to them as an argument\nhub.emit("message", "hello world"); // logs \'hello world\' and \'Message event fired\'\n\n// Unsubscribe: stop a specific handler from listening to the \'message\' event\nhub.off("message", handler);\nhub.emit("message", "hello world");\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Number Incremental:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'let increment = 0;\nconst numEmitter = createEventHub<number>();\nconst incrementHandler = () => increment++;\nnumEmitter.on("increment", incrementHandler);\nnumEmitter.emit("increment"); // `increment` variable is now 1\nnumEmitter.emit("increment"); // `increment` variable is now 1\nnumEmitter.off("increment", incrementHandler);\nnumEmitter.emit("increment"); // `increment` variable is now 1\nassertEquals(increment, 2);\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"User Emitter:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'interface User {\n  name: string;\n}\nlet user: User | undefined;\nconst userEmitter = createEventHub<User>();\nconst updateUser = (u: User) => (user = u);\nuserEmitter.on("update", updateUser);\nuserEmitter.emit("update", { name: "Deepak" });\n\nassertEquals(user, { name: "Deepak" });\n')))}d.isMDXComponent=!0}}]);