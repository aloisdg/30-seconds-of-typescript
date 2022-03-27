"use strict";(self.webpackChunk_deepakvishwakarma_ts_util=self.webpackChunk_deepakvishwakarma_ts_util||[]).push([[6511],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2417:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"getDaysDiffBetweenDates",tags:["date","intermediate"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "getDaysDiffBetweenDates" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},p=void 0,c={unversionedId:"getDaysDiffBetweenDates",id:"getDaysDiffBetweenDates",title:"getDaysDiffBetweenDates",description:'Implementation of "getDaysDiffBetweenDates" in typescript, javascript and deno.',source:"@site/docs/getDaysDiffBetweenDates.md",sourceDirName:".",slug:"/getDaysDiffBetweenDates",permalink:"/30-seconds-of-typescript/docs/getDaysDiffBetweenDates",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/getDaysDiffBetweenDates.md",tags:[{label:"date",permalink:"/30-seconds-of-typescript/docs/tags/date"},{label:"intermediate",permalink:"/30-seconds-of-typescript/docs/tags/intermediate"}],version:"current",frontMatter:{title:"getDaysDiffBetweenDates",tags:["date","intermediate"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "getDaysDiffBetweenDates" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},sidebar:"someSidebar",previous:{title:"getColonTimeFromDate",permalink:"/30-seconds-of-typescript/docs/getColonTimeFromDate"},next:{title:"getImages",permalink:"/30-seconds-of-typescript/docs/getImages"}},l={},u=[],f={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),(0,i.kt)("p",null,"Returns the difference (in days) between two dates."),(0,i.kt)("p",null,"Calculate the difference (in days) between two ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")," objects."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>\n  (dateFinal - dateInitial) / (1000 * 3600 * 24);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'getDaysDiffBetweenDates(new Date("2017-12-13"), new Date("2017-12-22")); // 9\n')))}m.isMDXComponent=!0}}]);