"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(n),k=r,u=d["".concat(i,".").concat(k)]||d[k]||c[k]||l;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={id:"webpack-beginner",title:"Webpack Beginner",description:"\u672c\u6587\u4ecb\u7d39\u4e86\u5728\u7db2\u9801\u958b\u767c\u4e2d\u4f7f\u7528\u6a21\u7d44\u5316\u7684\u554f\u984c\u53ca\u89e3\u6c7a\u65b9\u6cd5\uff0c\u4ee5\u53ca\u4f7f\u7528 Webpack \u6253\u5305\u5de5\u5177\u7684\u904e\u7a0b\u548c\u6280\u5de7\u3002\u6587\u7ae0\u4e2d\u8a73\u7d30\u4ecb\u7d39\u4e86\u5728\u700f\u89bd\u5668\u4e2d\u4f7f\u7528 ES6 \u7684\u6a21\u7d44\u5316\u8a9e\u6cd5\u7684\u9650\u5236\uff0c\u4ee5\u53ca\u4f7f\u7528 Webpack \u53ef\u4ee5\u89e3\u6c7a\u7684\u554f\u984c\u3002\u6b64\u5916\uff0c\u6587\u7ae0\u9084\u8b1b\u89e3\u4e86\u5982\u4f55\u914d\u7f6e Webpack \u4e26\u4f7f\u7528\u5176\u6253\u5305\u529f\u80fd\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 Webpack \u7684 loader \u4f86\u8655\u7406 CSS\u3001\u5716\u7247\u7b49\u8cc7\u6e90\u3002",sidebar_label:"\ud83d\udfe9 Webpack Beginner",hide_title:!0,hide_table_of_contents:!1,tags:["webpack"],draft:!1,last_update:{date:new Date("2022-10-09T00:00:00.000Z")}},o=void 0,p={unversionedId:"frontend/other/webpack-beginner",id:"frontend/other/webpack-beginner",title:"Webpack Beginner",description:"\u672c\u6587\u4ecb\u7d39\u4e86\u5728\u7db2\u9801\u958b\u767c\u4e2d\u4f7f\u7528\u6a21\u7d44\u5316\u7684\u554f\u984c\u53ca\u89e3\u6c7a\u65b9\u6cd5\uff0c\u4ee5\u53ca\u4f7f\u7528 Webpack \u6253\u5305\u5de5\u5177\u7684\u904e\u7a0b\u548c\u6280\u5de7\u3002\u6587\u7ae0\u4e2d\u8a73\u7d30\u4ecb\u7d39\u4e86\u5728\u700f\u89bd\u5668\u4e2d\u4f7f\u7528 ES6 \u7684\u6a21\u7d44\u5316\u8a9e\u6cd5\u7684\u9650\u5236\uff0c\u4ee5\u53ca\u4f7f\u7528 Webpack \u53ef\u4ee5\u89e3\u6c7a\u7684\u554f\u984c\u3002\u6b64\u5916\uff0c\u6587\u7ae0\u9084\u8b1b\u89e3\u4e86\u5982\u4f55\u914d\u7f6e Webpack \u4e26\u4f7f\u7528\u5176\u6253\u5305\u529f\u80fd\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 Webpack \u7684 loader \u4f86\u8655\u7406 CSS\u3001\u5716\u7247\u7b49\u8cc7\u6e90\u3002",source:"@site/docs/frontend/other/2022-10-09-webpack-beginner.mdx",sourceDirName:"frontend/other",slug:"/frontend/other/webpack-beginner",permalink:"/frontend/other/webpack-beginner",draft:!1,editUrl:"https://github.com/windsuzu/windsuzu.github.io/tree/master/docs/frontend/other/2022-10-09-webpack-beginner.mdx",tags:[{label:"webpack",permalink:"/tags/webpack"}],version:"current",lastUpdatedAt:1665273600,formattedLastUpdatedAt:"2022\u5e7410\u67089\u65e5",frontMatter:{id:"webpack-beginner",title:"Webpack Beginner",description:"\u672c\u6587\u4ecb\u7d39\u4e86\u5728\u7db2\u9801\u958b\u767c\u4e2d\u4f7f\u7528\u6a21\u7d44\u5316\u7684\u554f\u984c\u53ca\u89e3\u6c7a\u65b9\u6cd5\uff0c\u4ee5\u53ca\u4f7f\u7528 Webpack \u6253\u5305\u5de5\u5177\u7684\u904e\u7a0b\u548c\u6280\u5de7\u3002\u6587\u7ae0\u4e2d\u8a73\u7d30\u4ecb\u7d39\u4e86\u5728\u700f\u89bd\u5668\u4e2d\u4f7f\u7528 ES6 \u7684\u6a21\u7d44\u5316\u8a9e\u6cd5\u7684\u9650\u5236\uff0c\u4ee5\u53ca\u4f7f\u7528 Webpack \u53ef\u4ee5\u89e3\u6c7a\u7684\u554f\u984c\u3002\u6b64\u5916\uff0c\u6587\u7ae0\u9084\u8b1b\u89e3\u4e86\u5982\u4f55\u914d\u7f6e Webpack \u4e26\u4f7f\u7528\u5176\u6253\u5305\u529f\u80fd\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 Webpack \u7684 loader \u4f86\u8655\u7406 CSS\u3001\u5716\u7247\u7b49\u8cc7\u6e90\u3002",sidebar_label:"\ud83d\udfe9 Webpack Beginner",hide_title:!0,hide_table_of_contents:!1,tags:["webpack"],draft:!1,last_update:{date:"2022-10-09T00:00:00.000Z"}},sidebar:"other",previous:{title:"\ud83d\udfe8 Subpath Imports in Rollup",permalink:"/frontend/other/subpath-imports-in-rollup"}},i={},s=[{value:"Module and CommonJS",id:"module-and-commonjs",level:2},{value:"Browser Module and Browserify",id:"browser-module-and-browserify",level:2},{value:"ES6 ESM (import and export)",id:"es6-esm-import-and-export",level:2},{value:"ES6 ESM in Node.js",id:"es6-esm-in-nodejs",level:3},{value:"ES6 ESM in Browser",id:"es6-esm-in-browser",level:3},{value:"Webpack",id:"webpack",level:2},{value:"How to bundle with Webpack",id:"how-to-bundle-with-webpack",level:3},{value:"The power of webpack (loaders)",id:"the-power-of-webpack-loaders",level:3},{value:"Review",id:"review",level:2}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("profile",{title:"webpack \u65b0\u624b\u6559\u5b78\u4e4b\u6dfa\u8ac7\u6a21\u7d44\u5316\u8207 snowpack",url:"https://blog.techbridge.cc/2020/01/22/webpack-%E6%96%B0%E6%89%8B%E6%95%99%E5%AD%B8%E4%B9%8B%E6%B7%BA%E8%AB%87%E6%A8%A1%E7%B5%84%E5%8C%96%E8%88%87-snowpack/",author:"TechBridge \u6280\u8853\u5171\u7b46\u90e8\u843d\u683c huli",level:"beginner",category:["other"]}),(0,r.kt)("p",null,"\u672c\u6587\u4ecb\u7d39\u4e86\u5728\u7db2\u9801\u958b\u767c\u4e2d\u4f7f\u7528\u6a21\u7d44\u5316\u7684\u554f\u984c\u53ca\u89e3\u6c7a\u65b9\u6cd5\uff0c\u4ee5\u53ca\u4f7f\u7528 Webpack \u6253\u5305\u5de5\u5177\u7684\u904e\u7a0b\u548c\u6280\u5de7\u3002\u6587\u7ae0\u4e2d\u8a73\u7d30\u4ecb\u7d39\u4e86\u5728\u700f\u89bd\u5668\u4e2d\u4f7f\u7528 ES6 \u7684\u6a21\u7d44\u5316\u8a9e\u6cd5\u7684\u9650\u5236\uff0c\u4ee5\u53ca\u4f7f\u7528 Webpack \u53ef\u4ee5\u89e3\u6c7a\u7684\u554f\u984c\u3002\u6b64\u5916\uff0c\u6587\u7ae0\u9084\u8b1b\u89e3\u4e86\u5982\u4f55\u914d\u7f6e Webpack \u4e26\u4f7f\u7528\u5176\u6253\u5305\u529f\u80fd\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 Webpack \u7684 loader \u4f86\u8655\u7406 CSS\u3001\u5716\u7247\u7b49\u8cc7\u6e90\u3002"),(0,r.kt)("h2",{id:"module-and-commonjs"},"Module and CommonJS"),(0,r.kt)("p",null,"\u5728 ES6 (2015) \u4e4b\u524d\uff0cJS \u7684\u6a21\u7d44\u5316\u6c92\u6709\u4efb\u4f55\u6a19\u6e96\u6216\u898f\u5247\u53ef\u4ee5\u9075\u5faa\uff0c\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u5275\u5efa\u81ea\u5df1\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"import/export")," \u8a9e\u6cd5\u3002\u4f8b\u5982\u5728\u4ee5\u4e0b\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u5011\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"module.exports")," \u8207 ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," \u4f86\u5be6\u73fe\u6a21\u7d44\u5316\u3002\u9019\u7a2e\u65b9\u5f0f\u5c31\u662f ",(0,r.kt)("strong",{parentName:"p"},"CommonJS")," \u7684\u6a21\u7d44\u5316\u898f\u7bc4\uff0c\u662f \u5728 Node.js \u7684\u6a21\u7d44\u5316\u898f\u7bc4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// utils.js\nfunction sum(a, b) {\n  return a + b;\n}\nmodule.exports = {\n  sum,\n  name: "utils",\n};\n\n// main.js\nvar obj = require("./utils");\nconsole.log(obj.sum(1, 2)); // 3\nconsole.log(obj.name); // utils\n')),(0,r.kt)("h2",{id:"browser-module-and-browserify"},"Browser Module and Browserify"),(0,r.kt)("p",null,"\u6211\u5011\u5728\u700f\u89bd\u5668\u4e2d\u57f7\u884c\u7684 JavaScript \u6c92\u6709\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"CommonJS")," \u6216\u4efb\u4f55\u5176\u4ed6 ",(0,r.kt)("inlineCode",{parentName:"p"},"import/export")," \u8a9e\u6cd5\u7684\u80fd\u529b\u3002\u65bc\u662f ",(0,r.kt)("strong",{parentName:"p"},"Browserify"),' \u5728 2011 \u5e74\u88ab\u767c\u660e\u51fa\u4f86\uff0c\u4e26\u8aaa\uff1a"',(0,r.kt)("em",{parentName:"p"},"Browserify lets you require('modules') in the browser by bundling up all of your dependencies."),'"\u3002'),(0,r.kt)("p",null,"Browserify \u7c21\u55ae\u5730\u5c07\u61c9\u7528\u7a0b\u5f0f\u7684\u9032\u5165\u9ede\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"main.js"),"\uff09\u548c\u6240\u6709\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u6a21\u7d44\uff08import/export\uff09")," \u81ea\u52d5\u6253\u5305\u6210\u4e00\u500b\u53ef\u4ee5\u5728\u700f\u89bd\u5668\u4e2d\u4f7f\u7528\u7684 JavaScript \u6a94\u6848\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"bundle.js"),"\uff09\uff0c\u8b93\u4f60\u53ef\u4ee5\u5728\u700f\u89bd\u5668\u4e2d\u81ea\u7531\u5730\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"CommonJS"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx browserify main.js -o bundle.js\n")),(0,r.kt)("h2",{id:"es6-esm-import-and-export"},"ES6 ESM (import and export)"),(0,r.kt)("p",null,"\u6642\u9593\u4f86\u5230\u4e86 2015 \u5e74\uff0cES6 \u70ba JavaScript \u5efa\u7acb\u4e86\u4e00\u500b\u6a19\u6e96\u7684\u6a21\u7d44\u5316 ",(0,r.kt)("inlineCode",{parentName:"p"},"import/export")," \u8a9e\u6cd5\uff08ESM\uff09\uff0c\u4f46\u5b83\u4ecd\u7136\u7121\u6cd5\u76f4\u63a5\u8207\u700f\u89bd\u5668\u6216 Node.js \u76f8\u5bb9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// utils.js\nfunction sum(a, b) {\n  return a + b;\n}\nexport default {\n  sum,\n  name: "utils",\n};\n\n// main.js\nimport obj from "./utils";\nconsole.log(obj.sum(1, 2)); // 3\nconsole.log(obj.name); // utils\n')),(0,r.kt)("h3",{id:"es6-esm-in-nodejs"},"ES6 ESM in Node.js"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8981\u5728 Node.js \u4e2d\u4f7f\u7528 ES6 \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"import/export")," \u8a9e\u6cd5\uff0c\u4f60\u6709\u5169\u7a2e\u9078\u64c7\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5c07\u4f60\u7684\u6a94\u6848\u5f9e ",(0,r.kt)("inlineCode",{parentName:"li"},".js")," \u6539\u6210 ",(0,r.kt)("inlineCode",{parentName:"li"},".mjs")),(0,r.kt)("li",{parentName:"ol"},"\u6216\u8005\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=JYWwDg9gTgLgBBARgKzgMyhEcDkA6AegFcZgAbAZxwCgBjCAOwojIFM8yIBzACiWTy0AhmR4BmAAwBKKXUbM2HbnxR4GQkK1lA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.8.3&externalPlugins="},"babel"))," \u5c07 ES6 \u8a9e\u6cd5\u8f49\u63db\u6210 ES5")),(0,r.kt)("h3",{id:"es6-esm-in-browser"},"ES6 ESM in Browser"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8981\u5728\u700f\u89bd\u5668\u4e2d\u4f7f\u7528 ES6 \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"import/export")," \u8a9e\u6cd5\uff0c\u4f60\u5fc5\u9808\u7167\u8457\u4ee5\u4e0b\u6b65\u9a5f\u505a\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"<script>")," \u6a19\u7c64\u4e2d\u52a0\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},'type="module"')," \u5c6c\u6027")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  <script src="./main.js" type="module"><\/script>\n</head>\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"import")," \u7684\u6a94\u6848\u8def\u5f91\u4e2d\u52a0\u5165\u526f\u6a94\u540d ",(0,r.kt)("inlineCode",{parentName:"li"},".js"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// main.js\nimport obj from "./utils.js";\nconsole.log(obj.sum(1, 2)); // 3\nconsole.log(obj.name); // utils\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"http://")," \u4f86\u57f7\u884c\u4f60\u7684\u61c9\u7528\u7a0b\u5f0f\uff0c\u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"file://"))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0a\u9762\u7684\u6b65\u9a5f\u4f3c\u4e4e\u5df2\u7d93\u89e3\u6c7a\u4e86 ESM \u7684\u554f\u984c\uff0c\u4f46\u5b83\u4ecd\u7136\u6709\u5169\u500b\u554f\u984c\uff1a"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"ESM \u5728\u820a\u7248\u7684\u700f\u89bd\u5668\u4e2d\u4e0d\u88ab\u652f\u63f4\uff0c\u4f8b\u5982 IE"),(0,r.kt)("li",{parentName:"ol"},"ESM \u5f88\u96e3\u5f9e npm \u5b89\u88dd\u4e26\u5f15\u5165\u5957\u4ef6\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"import pad from 'pad-left'")," \u9019\u6a23\u7684\u8a9e\u6cd5\u662f\u4e0d\u88ab\u652f\u63f4\u7684\u3002\u4f60\u53ef\u80fd\u9700\u8981\u6bcf\u6b21\u90fd\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"import pad from './node_modules/pad-left/index.js")," \u4f86\u5f15\u5165\u5957\u4ef6\u3002"))),(0,r.kt)("h2",{id:"webpack"},"Webpack"),(0,r.kt)("p",null,"\u56e0\u70ba\u6a21\u7d44\u5316\u7684\u6a5f\u5236\u5728\u700f\u89bd\u5668\u4e2d\u6709\u5f88\u591a\u554f\u984c\uff08\u4f8b\u5982\u8207\u4e0d\u540c\u700f\u89bd\u5668\u548c npm \u7684\u76f8\u5bb9\u6027\uff09\uff0c\u6211\u5011\u9700\u8981\u4e00\u500b\u5de5\u5177\u4f86\u89e3\u6c7a\u5b83\u3002\u800c\u9019\u500b\u5de5\u5177\u5c31\u662f ",(0,r.kt)("strong",{parentName:"p"},"Webpack"),"\u3002 ",(0,r.kt)("strong",{parentName:"p"},"Webpack")," \u8207 ",(0,r.kt)("strong",{parentName:"p"},"Browserify")," \u5f88\u76f8\u4f3c\u3002\u5b83\u4e0d\u50c5\u5141\u8a31\u6211\u5011\u7684\u700f\u89bd\u5668 JavaScript \u4ee3\u78bc\u8f15\u9b06\u5730\u5229\u7528 ",(0,r.kt)("strong",{parentName:"p"},"ES6")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"import/export")," \u8a9e\u6cd5\u4f86\u4f7f\u7528\u6a21\u7d44\uff0c\u800c\u4e14\u9084\u9644\u5e36\u4e86\u8a31\u591a\u6709\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"loader")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin"),"\u3002\u8b93\u6211\u5011\u53ef\u4ee5\u505a\u5230\u50cf\u4e0b\u9762\u9019\u6a23\u7684\u4e8b\u60c5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// main.js\nimport obj from "./utils.js";\nimport pad from "pad-left"; // npm install pad-left\nconsole.log(obj.cal(30));\nconsole.log(pad("4", 4, 0));\n')),(0,r.kt)("h3",{id:"how-to-bundle-with-webpack"},"How to bundle with Webpack"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528 Webpack \u6642\uff0c\u6211\u5011\u9996\u5148\u9700\u8981\u5efa\u7acb\u4e00\u500b\u8a2d\u5b9a\u6a94\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),"\uff09\u3002\u5728\u8a2d\u5b9a\u6a94\u4e2d\uff0c\u6211\u5011\u9700\u8981\u5b9a\u7fa9\u4e00\u4e9b\u57fa\u672c\u7684\u53c3\u6578\uff0c\u4f8b\u5982\u61c9\u7528\u7a0b\u5f0f\u7684\u9032\u5165\u9ede\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"./main.js"),"\uff09\uff0c\u4ee5\u53ca\u7522\u751f\u7684\u6253\u5305\u6a94\u6848\u7684\u6a94\u540d\u548c\u4f4d\u7f6e\u3002Webpack \u4e5f\u6709\u4e00\u500b ",(0,r.kt)("inlineCode",{parentName:"p"},"mode")," \u53c3\u6578\uff0c\u53ef\u4ee5\u5728 ",(0,r.kt)("strong",{parentName:"p"},"development")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"production")," \u4e4b\u9593\u5207\u63db\u3002\u6211\u5011\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"development mode")," \u8b93\u6253\u5305\u7684\u901f\u5ea6\u5728 development \u6642\u8b8a\u5feb\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// webpack.config.js\nmodule.exports = {\n  mode: "development", // or \'production\'\n  entry: "./main.js",\n  output: {\n    // __dirname means using the same folder as this config\n    path: __dirname,\n    filename: "webpack_bundle.js",\n  },\n};\n')),(0,r.kt)("p",null,"\u63a5\u8457\uff0c\u6211\u5011\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"npx webpack")," \u4f86\u57f7\u884c Webpack\u3002Webpack \u6703\u81ea\u52d5\u8b80\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," \u4e26\u57f7\u884c\u6253\u5305\u3002\u6211\u5011\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"npx webpack --config webpack.config.js")," \u4f86\u57f7\u884c Webpack\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm init -y\nnpm install webpack webpack-cli --save-dev\nnpx webpack --config webpack.config.js\n")),(0,r.kt)("p",null,"\u6700\u5f8c\uff0c\u6211\u5011\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," \u4e2d\u52a0\u5165\u6253\u5305\u597d\u7684\u6a94\u6848 ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack_bundle.js")," \u5c31\u53ef\u4ee5\u4e86\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 webpack \u7522\u751f\u7684 bundle \u6a94\u6848\u53ef\u4ee5\u4e0d\u9700\u8981\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"type=module")," \u52a0\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"<script>")," \u6a19\u7c64\u4e2d\u3002  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  <script src="./webpack_bundle.js"><\/script>\n</head>\n')),(0,r.kt)("h3",{id:"the-power-of-webpack-loaders"},"The power of webpack (loaders)"),(0,r.kt)("p",null,"Webpack \u9664\u4e86\u89e3\u6c7a\u6a21\u7d44\u5316\u7684\u554f\u984c\u4e4b\u5916\uff0c\u9084\u53ef\u4ee5\u8b93\u6211\u5011\u76f4\u63a5\u5728 JavaScript \u4e2d\u5f15\u5165\u5716\u7247\u6216 CSS\u3002\u9019\u500b\u529f\u80fd\u8207 JavaScript \u6216 ES6 \u5b8c\u5168\u7121\u95dc\uff0c\u5b8c\u5168\u662f\u7531 webpack \u5c07\u5716\u7247\u548c CSS \u6a21\u7d44\u5316\u6240\u9054\u6210\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import Image from "./assets/banner.png";\nimport styles from "style.css";\n')),(0,r.kt)("p",null,"\u70ba\u4e86\u9054\u6210\u9019\u4e9b\u529f\u80fd\uff0cWebpack \u5b9a\u7fa9\u4e86\u4e00\u4e9b ",(0,r.kt)("inlineCode",{parentName:"p"},"loader"),"\uff0c\u4e0d\u540c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"loader")," \u8655\u7406\u4e0d\u540c\u7684\u8cc7\u6e90\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u500b SCSS loader \u4f86\u8f09\u5165 SCSS \u6a94\u6848\uff0cWebpack \u6703\u5e6b\u4f60\u5c07\u5b83\u5011\u7de8\u8b6f\u6210\u7d14 CSS\u3002\u6216\u662f\u4f60\u53ef\u4ee5\u4f7f\u7528 ES10 \u4f86\u64b0\u5beb\u4f60\u7684 JS\uff0cWebpack \u6703\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-loader")," \u5c07\u5b83\u8f49\u63db\u6210 ES5\u3002"),(0,r.kt)("fig",{caption:"Webpack \u7684 loader \u53ef\u4ee5\u8b93\u6211\u5011\u76f4\u63a5\u5728 JavaScript \u4e2d\u5f15\u5165\u5716\u7247\u6216 CSS\u3002",src:"/img/reading/other/2022-10-09-webpack-beginner/webpack.png"}),(0,r.kt)("p",null,"Webpack \u9084\u53ef\u4ee5\u5728\u6253\u5305\u7684\u904e\u7a0b\u4e2d\u505a\u5230\u66f4\u591a\u6709\u8da3\u7684\u4e8b\u60c5\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5c07 JS \u505a ",(0,r.kt)("strong",{parentName:"li"},"uglify")),(0,r.kt)("li",{parentName:"ol"},"\u5c07 CSS \u505a ",(0,r.kt)("strong",{parentName:"li"},"minify")),(0,r.kt)("li",{parentName:"ol"},"\u70ba\u6253\u5305\u597d\u7684\u6a94\u6848\u52a0\u4e0a ",(0,r.kt)("strong",{parentName:"li"},"hash")),(0,r.kt)("li",{parentName:"ol"},"\u5c07\u4e0d\u540c\u7684\u6a94\u6848\u6253\u5305\u6210\u4e0d\u540c\u7684\u9801\u9762\uff0c\u9019\u6a23\u4f60\u5c31\u4e0d\u9700\u8981\u4e00\u6b21\u8f09\u5165\u6240\u6709\u7684\u6a94\u6848"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u9700\u8981\u6642 ",(0,r.kt)("strong",{parentName:"li"},"\u52d5\u614b\u5f15\u5165")," JS")),(0,r.kt)("h2",{id:"review"},"Review"),(0,r.kt)("p",null,"\u5728\u4f60\u95b1\u8b80\u5b8c\u9019\u7bc7\u6587\u7ae0\u4e4b\u5f8c\uff0c\u4f60\u61c9\u8a72\u53ef\u4ee5\u56de\u7b54\u9019\u4e9b\u554f\u984c\uff1a"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"1. \u70ba\u4ec0\u9ebc\u5f88\u591a\u5c08\u6848\uff08\u4f8b\u5982 React\uff09\u5728\u90e8\u7f72\u4e4b\u524d\u90fd\u8981\u7d93\u904e\u5efa\u7f6e\uff08`build`\uff09\uff1f"),"\u56e0\u70ba\u700f\u89bd\u5668\u7121\u6cd5\u76f4\u63a5\u8b80\u53d6\u6211\u5011\u7684 ESM \u548c ES10 \u4ee3\u78bc\uff0c\u6240\u4ee5\u6211\u5011\u9700\u8981 webpack \u5728\u5efa\u7f6e\u904e\u7a0b\u4e2d\u5e6b\u52a9\u6211\u5011\u6253\u5305\u4ee3\u78bc\u3002"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"2. ",(0,r.kt)("code",null,"require/module.exports")," \u8207 ",(0,r.kt)("code",null,"import/export")," ","\u6709\u4ec0\u9ebc\u4e0d\u540c\uff1f"),(0,r.kt)("code",null,"require/module.exports")," \u662f\u652f\u63f4 Node.js \u7684 CommonJS \u8a9e\u6cd5\uff0c\u800c ",(0,r.kt)("code",null,"import/export")," \u662f ES6 \u7684\u8a9e\u6cd5\uff0c\u7531 Node.js \u548c\u90e8\u5206\u700f\u89bd\u5668\u652f\u63f4\u3002"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"3. \u5728\u700f\u89bd\u5668\u4e2d\u4f7f\u7528 ES6 \u7684 ",(0,r.kt)("code",null,"import/export")," \u6709\u4ec0\u9ebc\u9650\u5236\u55ce\uff1f"),(0,r.kt)("ol",{style:{listStyleType:"decimal"}},(0,r.kt)("li",null,"\u5fc5\u9808\u5728 server \u7aef\u57f7\u884c"),(0,r.kt)("li",null,"\u5fc5\u9808\u5728 ",(0,r.kt)("code",null,"<script>")," \u6a19\u7c64\u4e2d\u52a0\u4e0a ",(0,r.kt)("code",null,"type=module")),(0,r.kt)("li",null,"\u5fc5\u9808\u5728 ",(0,r.kt)("code",null,"import")," \u4e2d\u6307\u5b9a\u6a94\u6848\u526f\u6a94\u540d"),(0,r.kt)("li",null,"\u5fc5\u9808\u5728 ",(0,r.kt)("code",null,"import")," \u4e2d\u6307\u5b9a npm \u5957\u4ef6\u7684\u7d55\u5c0d\u8def\u5f91"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"4. \u70ba\u4ec0\u9ebc\u6211\u5011\u8981\u4f7f\u7528 ",(0,r.kt)("code",null,"webpack"),"\uff1f"),(0,r.kt)("ol",{style:{listStyleType:"decimal"}},(0,r.kt)("li",null,"\u6211\u5011\u60f3\u66f4\u5bb9\u6613\u5730\u5f15\u5165 ES6 \u6a21\u7d44\uff08\u548c npm \u5957\u4ef6\uff09"),(0,r.kt)("li",null,"\u6211\u5011\u60f3\u66f4\u5bb9\u6613\u5730\u5f15\u5165\u5716\u7247\u548c CSS \u6a94\u6848"),(0,r.kt)("li",null,"\u6211\u5011\u60f3\u7d71\u4e00\u5728\u4e00\u500b\u5730\u65b9\u8655\u7406 uglify\u3001minify \u548c\u5176\u4ed6\u8655\u7406\u7a0b\u5e8f"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"5. \u70ba\u4ec0\u9ebc ",(0,r.kt)("code",null,"webpack")," \u9700\u8981 ",(0,r.kt)("code",null,"loader"),"\uff1f"),"Webpack \u9810\u8a2d\u7684 loader \u53ea\u80fd\u8b80\u53d6 JavaScript\uff0c\u4f46\u662f\u5176\u4ed6\u7684 loader \u53ef\u4ee5\u8b80\u53d6 CSS\u3001\u5716\u7247\u7b49\u7b49\u3002"))}d.isMDXComponent=!0}}]);