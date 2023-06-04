"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1383],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=l,u=m["".concat(s,".").concat(d)]||m[d]||g[d]||i;return t?a.createElement(u,r(r({ref:n},c),{},{components:t})):a.createElement(u,r({ref:n},c))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9950:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(7462),l=(t(7294),t(3905));const i={id:"garbage-collector-experiment",title:"Garbage Collector Experiment",description:"Garbage Collector (GC) \u662f JS \u4e2d\u975e\u5e38\u91cd\u8981\u7684\u6982\u5ff5\uff0c\u4f46\u662f\u5b83\u7684\u884c\u70ba\u4e26\u4e0d\u662f\u5f88\u5bb9\u6613\u8b93\u6211\u5011 debug\uff0c\u9019\u7bc7\u6587\u7ae0\u4f7f\u7528\u4e86 `FinalizationRegistry` \u4f86\u89c0\u5bdf GC \u7684\u884c\u70ba\u3002\u5982\u679c\u4f60\u9084\u4e0d\u719f\u6089 GC \u7684\u6982\u5ff5\uff0c\u53ef\u4ee5\u5148\u95b1\u8b80\u7531 Lin Clark \u5beb\u7684 [A Crash Course in Memory Management](https://hacks.mozilla.org/2017/06/a-crash-course-in-memory-management/)\u3002",sidebar_label:"\ud83d\udfe8 Garbage Collector Experiment",hide_title:!0,hide_table_of_contents:!1,tags:["javascript","garbage-collector","finalization-registry"],draft:!1,last_update:{date:new Date("2023-03-05T00:00:00.000Z")}},r=void 0,o={unversionedId:"frontend/js-ts/garbage-collector-experiment",id:"frontend/js-ts/garbage-collector-experiment",title:"Garbage Collector Experiment",description:"Garbage Collector (GC) \u662f JS \u4e2d\u975e\u5e38\u91cd\u8981\u7684\u6982\u5ff5\uff0c\u4f46\u662f\u5b83\u7684\u884c\u70ba\u4e26\u4e0d\u662f\u5f88\u5bb9\u6613\u8b93\u6211\u5011 debug\uff0c\u9019\u7bc7\u6587\u7ae0\u4f7f\u7528\u4e86 `FinalizationRegistry` \u4f86\u89c0\u5bdf GC \u7684\u884c\u70ba\u3002\u5982\u679c\u4f60\u9084\u4e0d\u719f\u6089 GC \u7684\u6982\u5ff5\uff0c\u53ef\u4ee5\u5148\u95b1\u8b80\u7531 Lin Clark \u5beb\u7684 [A Crash Course in Memory Management](https://hacks.mozilla.org/2017/06/a-crash-course-in-memory-management/)\u3002",source:"@site/docs/frontend/js-ts/2023-03-05-garbage-collector-experiment.mdx",sourceDirName:"frontend/js-ts",slug:"/frontend/js-ts/garbage-collector-experiment",permalink:"/frontend/js-ts/garbage-collector-experiment",draft:!1,editUrl:"https://github.com/windsuzu/windsuzu.github.io/tree/master/docs/frontend/js-ts/2023-03-05-garbage-collector-experiment.mdx",tags:[{label:"javascript",permalink:"/tags/javascript"},{label:"garbage-collector",permalink:"/tags/garbage-collector"},{label:"finalization-registry",permalink:"/tags/finalization-registry"}],version:"current",lastUpdatedAt:1677974400,formattedLastUpdatedAt:"2023\u5e743\u67085\u65e5",frontMatter:{id:"garbage-collector-experiment",title:"Garbage Collector Experiment",description:"Garbage Collector (GC) \u662f JS \u4e2d\u975e\u5e38\u91cd\u8981\u7684\u6982\u5ff5\uff0c\u4f46\u662f\u5b83\u7684\u884c\u70ba\u4e26\u4e0d\u662f\u5f88\u5bb9\u6613\u8b93\u6211\u5011 debug\uff0c\u9019\u7bc7\u6587\u7ae0\u4f7f\u7528\u4e86 `FinalizationRegistry` \u4f86\u89c0\u5bdf GC \u7684\u884c\u70ba\u3002\u5982\u679c\u4f60\u9084\u4e0d\u719f\u6089 GC \u7684\u6982\u5ff5\uff0c\u53ef\u4ee5\u5148\u95b1\u8b80\u7531 Lin Clark \u5beb\u7684 [A Crash Course in Memory Management](https://hacks.mozilla.org/2017/06/a-crash-course-in-memory-management/)\u3002",sidebar_label:"\ud83d\udfe8 Garbage Collector Experiment",hide_title:!0,hide_table_of_contents:!1,tags:["javascript","garbage-collector","finalization-registry"],draft:!1,last_update:{date:"2023-03-05T00:00:00.000Z"}},sidebar:"js-ts",previous:{title:"\ud83d\udfe9 Constant vs Mutation",permalink:"/frontend/js-ts/constant-vs-mutation"},next:{title:"\ud83d\udfe9 Maps More, Objects Less",permalink:"/frontend/js-ts/maps-more,-objects-less"}},s={},p=[{value:"Detecting Object Disposal",id:"detecting-object-disposal",level:2},{value:"Example 1: Nested Object",id:"example-1-nested-object",level:2},{value:"Example 2: Closure",id:"example-2-closure",level:2},{value:"Example 3: Eval",id:"example-3-eval",level:2},{value:"Example 4: DOM Elements",id:"example-4-dom-elements",level:2}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("profile",{title:"Experiments with the JavaScript Garbage Collector",url:"https://dev.to/codux/experiments-with-the-javascript-garbage-collector-2ae3",author:"Alexey Lebedev",level:"intermediate",category:["js/ts"]}),(0,l.kt)("p",null,"Garbage Collector (GC) \u662f JS \u4e2d\u975e\u5e38\u91cd\u8981\u7684\u6982\u5ff5\uff0c\u4f46\u662f\u5b83\u7684\u884c\u70ba\u4e26\u4e0d\u662f\u5f88\u5bb9\u6613\u8b93\u6211\u5011 debug\uff0c\u9019\u7bc7\u6587\u7ae0\u4f7f\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"FinalizationRegistry")," \u4f86\u89c0\u5bdf GC \u7684\u884c\u70ba\u3002\u5982\u679c\u4f60\u9084\u4e0d\u719f\u6089 GC \u7684\u6982\u5ff5\uff0c\u53ef\u4ee5\u5148\u95b1\u8b80\u7531 Lin Clark \u5beb\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://hacks.mozilla.org/2017/06/a-crash-course-in-memory-management/"},"A Crash Course in Memory Management"),"\u3002"),(0,l.kt)("h2",{id:"detecting-object-disposal"},"Detecting Object Disposal"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"FinalizationRegistry")," \u662f\u4e00\u500b\u652f\u63f4\u4e3b\u6d41 browser \u548c Node.js \u7684 API\uff0c\u5b83\u53ef\u4ee5\u8b93\u6211\u5011\u5728\u7269\u4ef6\u88ab\u56de\u6536\u6642\u57f7\u884c\u4e00\u4e9b\u7a0b\u5f0f\u78bc\u3002\u5b83\u7684\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a\u5728\u5e95\u4e0b\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u7531\u65bc ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"example()")," \u57f7\u884c\u5b8c\u5f8c\u4e0d\u518d\u88ab\u5f15\u7528\uff0c\u56e0\u6b64\u5b83\u5c07\u88ab\u56de\u6536\u3002\u7576 ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u88ab\u56de\u6536\u6642\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"FinalizationRegistry")," \u6703\u57f7\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"console.log(message)"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"live noInline",live:!0,noInline:!0},'const registry = new FinalizationRegistry((message) => console.log(message));\n\nfunction example() {\n  console.log("example() is running, waiting for GC...");\n\n  const x = {};\n  registry.register(x, "x has been collected");\n}\n\nrender(<button onClick={example}>Open console and click me</button>);\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="The output in the console will be:"',title:'"The',output:!0,in:!0,the:!0,console:!0,will:!0,'be:"':!0},"example() is running, waiting for GC...\nx has been collected\n")),(0,l.kt)("p",null,"\u901a\u5e38\u60c5\u6cc1\u4e0b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u4e26\u4e0d\u6703\u99ac\u4e0a\u88ab\u56de\u6536\uff0c\u56e0\u70ba\u700f\u89bd\u5668\u7684 engine \u53ef\u80fd\u6703\u6709\u5176\u4ed6\u66f4\u91cd\u8981\u7684\u4e8b\u60c5\u9700\u8981\u5148\u5b8c\u6210\u3002\u4f46\u6211\u5011\u53ef\u4ee5\u900f\u904e ",(0,l.kt)("inlineCode",{parentName:"p"},"DevTools > Memory > collect garbage icon")," \u4f86\u5f37\u5236\u89f8\u767c GC\u3002"),(0,l.kt)("fig",{src:"/img/reading/js-ts/2023-03-05-garbage-collector-experiment/devtool_gc.png",caption:"DevTools > Memory > collect garbage icon"}),(0,l.kt)("h2",{id:"example-1-nested-object"},"Example 1: Nested Object"),(0,l.kt)("p",null,"\u5728\u7b2c\u4e00\u500b\u7bc4\u4f8b\uff0c\u6211\u5011\u5617\u8a66\u5c07 ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u8a2d\u70ba ",(0,l.kt)("inlineCode",{parentName:"p"},"z")," \u7684\u5c6c\u6027\uff0c\u4e26\u4e14\u5c07 ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u8a2d\u70ba ",(0,l.kt)("inlineCode",{parentName:"p"},"globalThis.temp")," \u7684\u503c\u3002\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"example()")," \u57f7\u884c\u5b8c\u4e00\u6bb5\u6642\u9593\u5f8c\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"z")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," \u6703\u4e0d\u518d\u88ab\u4efb\u4f55\u6771\u897f\u5f15\u7528\uff0c\u56e0\u6b64\u5b83\u5011\u5c07\u6703\u88ab\u56de\u6536\u3002\u4f46 ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u4ecd\u7136\u88ab ",(0,l.kt)("inlineCode",{parentName:"p"},"globalThis.temp")," \u5f15\u7528\uff0c\u56e0\u6b64\u5b83\u4e0d\u6703\u88ab\u56de\u6536\u3002\u5982\u679c\u6211\u5011\u5c07 ",(0,l.kt)("inlineCode",{parentName:"p"},"globalThis.temp")," \u8a2d\u70ba ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),"\uff0c\u5247 ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u4e5f\u5c07\u88ab\u56de\u6536\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"live noInline",live:!0,noInline:!0},'const registry = new FinalizationRegistry((message) => console.log(message));\n\nfunction example() {\n  console.log("example() is running, waiting for GC...");\n\n  const x = {};\n  const y = {};\n  const z = { x, y };\n  registry.register(x, "x has been collected");\n  registry.register(y, "y has been collected");\n  registry.register(z, "z has been collected");\n\n  globalThis.temp = x;\n}\n\nrender(<button onClick={example}>Open console and click me</button>);\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="The output in the console will be:"',title:'"The',output:!0,in:!0,the:!0,console:!0,will:!0,'be:"':!0},"example() is running, waiting for GC...\nz has been collected\ny has been collected\n")),(0,l.kt)("h2",{id:"example-2-closure"},"Example 2: Closure"),(0,l.kt)("p",null,"\u5728\u7b2c\u4e8c\u500b\u7bc4\u4f8b\uff0c\u6211\u5011\u5c07 ",(0,l.kt)("inlineCode",{parentName:"p"},"z.x")," \u8a2d\u70ba ",(0,l.kt)("inlineCode",{parentName:"p"},"globalThis.temp")," \u7684\u503c\u3002\u65bc\u662f\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"example()")," \u57f7\u884c\u5b8c\u5f8c\uff0c\u6211\u5011\u5c07\u6c92\u8fa6\u6cd5\u518d\u53d6\u5f97 ",(0,l.kt)("inlineCode",{parentName:"p"},"z")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"y"),"\u3002"),(0,l.kt)("p",null,"\u7167\u7406\u4f86\u8aaa\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"z")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," \u61c9\u8a72\u6703\u88ab\u56de\u6536\uff0c\u4f46\u5be6\u969b\u4e0a\u4e26\u6c92\u6709\u3002\u53ef\u80fd\u662f\u56e0\u70ba engine \u7121\u6cd5\u5224\u65b7 ",(0,l.kt)("inlineCode",{parentName:"p"},"z.x")," \u662f\u5426\u53ea\u662f\u4e00\u500b\u55ae\u7d14\u7684\u503c (\u6709\u53ef\u80fd\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"z")," \u7684\u4e00\u500b ",(0,l.kt)("inlineCode",{parentName:"p"},"getter function"),")\uff0c\u56e0\u6b64 engine \u6c92\u6709\u5c07 ",(0,l.kt)("inlineCode",{parentName:"p"},"z")," \u56de\u6536\uff0c\u4e5f\u5c31\u5c0e\u81f4 ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," \u4e5f\u6c92\u6709\u88ab\u56de\u6536\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"live noInline",live:!0,noInline:!0},'const registry = new FinalizationRegistry((message) => console.log(message));\n\nfunction example() {\n  console.log("example() is running, waiting for GC...");\n\n  const x = {};\n  const y = {};\n  const z = { x, y };\n  registry.register(x, "x has been collected");\n  registry.register(y, "y has been collected");\n  registry.register(z, "z has been collected");\n\n  globalThis.temp = () => z.x;\n}\n\nrender(<button onClick={example}>Open console and click me</button>);\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="The output in the console will be:"',title:'"The',output:!0,in:!0,the:!0,console:!0,will:!0,'be:"':!0},"example() is running, waiting for GC...\n")),(0,l.kt)("h2",{id:"example-3-eval"},"Example 3: Eval"),(0,l.kt)("p",null,"\u5728\u7b2c\u4e09\u500b\u7bc4\u4f8b\uff0c\u6211\u5011\u5c07 ",(0,l.kt)("inlineCode",{parentName:"p"},"eval function")," \u8a2d\u70ba ",(0,l.kt)("inlineCode",{parentName:"p"},"globalThis.temp"),"\u3002\u7531\u65bc ",(0,l.kt)("inlineCode",{parentName:"p"},"eval")," \u53ef\u4ee5\u57f7\u884c\u4efb\u4f55\u7a0b\u5f0f\u78bc\uff0c\u56e0\u6b64 engine \u4e26\u4e0d\u77e5\u9053 ",(0,l.kt)("inlineCode",{parentName:"p"},"eval")," \u6703\u57f7\u884c\u4ec0\u9ebc\u7a0b\u5f0f\u78bc\uff0c\u56e0\u6b64\u5b83\u7121\u6cd5\u5224\u65b7\u540c\u6a23\u4f4d\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"example()")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u662f\u5426\u9084\u6703\u88ab\u4f7f\u7528\u3002\u56e0\u6b64 ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u4e0d\u6703\u88ab\u56de\u6536\u3002"),(0,l.kt)("p",null,"\u4e8b\u5be6\u4e0a\uff0c\u5c31\u7b97\u6211\u5011\u5c07 ",(0,l.kt)("inlineCode",{parentName:"p"},"globalThis.temp")," \u8a2d\u70ba ",(0,l.kt)("inlineCode",{parentName:"p"},"() => eval(1)"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u4e5f\u4e0d\u6703\u88ab\u56de\u6536\u3002\u56e0\u70ba engine \u53ef\u80fd\u53ea\u8981\u770b\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"eval")," \u5c31\u6703\u5c07\u6240\u6709\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"example()")," \u4e2d\u7684\u8b8a\u6578\u90fd\u4fdd\u7559\u4e0b\u4f86\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"live noInline",live:!0,noInline:!0},'const registry = new FinalizationRegistry((message) => console.log(message));\n\nfunction example() {\n  console.log("example() is running, waiting for GC...");\n\n  const x = {};\n  registry.register(x, "x has been collected");\n\n  globalThis.temp = (string) => eval(string);\n}\n\nrender(<button onClick={example}>Open console and click me</button>);\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="The output in the console will be:"',title:'"The',output:!0,in:!0,the:!0,console:!0,will:!0,'be:"':!0},"example() is running, waiting for GC...\n")),(0,l.kt)("h2",{id:"example-4-dom-elements"},"Example 4: DOM Elements"),(0,l.kt)("p",null,"\u9019\u500b\u7bc4\u4f8b\u548c\u7b2c\u4e00\u500b\u5f88\u50cf\uff0c\u53ea\u662f\u6539\u7528 DOM element \u4f86\u4ee3\u66ff plain object\u3002\u4e0d\u540c\u65bc plain object\uff0cDOM element \u6703\u6709\u9023\u7d50\u5230\u5b83\u7684 parent \u548c sibling\u3002\u6240\u4ee5\u6211\u5011\u53ef\u4ee5\u900f\u904e ",(0,l.kt)("inlineCode",{parentName:"p"},"globalThis.temp.parentElement")," \u4f86\u53d6\u5f97 ",(0,l.kt)("inlineCode",{parentName:"p"},"z"),"\uff0c\u900f\u904e ",(0,l.kt)("inlineCode",{parentName:"p"},"globalThis.temp.nextSibling")," \u4f86\u53d6\u5f97 ",(0,l.kt)("inlineCode",{parentName:"p"},"y"),"\u3002\u56e0\u6b64 ",(0,l.kt)("inlineCode",{parentName:"p"},"z")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," \u90fd\u4e0d\u6703\u88ab\u56de\u6536\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u6211\u5011\u57f7\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"temp.remove()"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"y")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"z")," \u5c07\u6703\u88ab\u56de\u6536\uff0c\u56e0\u70ba ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u5df2\u7d93\u5f9e\u5b83\u7684 parent \u4e2d\u5206\u96e2\u3002\u4f46 ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u4e0d\u6703\u88ab\u56de\u6536\uff0c\u56e0\u70ba\u5b83\u4ecd\u7136\u88ab ",(0,l.kt)("inlineCode",{parentName:"p"},"temp")," \u5f15\u7528\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"live noInline",live:!0,noInline:!0},'const registry = new FinalizationRegistry((message) => console.log(message));\n\nfunction example() {\n  console.log("example() is running, waiting for GC...");\n\n  const x = document.createElement("div");\n  const y = document.createElement("div");\n  const z = document.createElement("div");\n\n  z.append(x);\n  z.append(y);\n\n  registry.register(x, "x has been collected");\n  registry.register(y, "y has been collected");\n  registry.register(z, "z has been collected");\n\n  globalThis.temp = x;\n}\n\nrender(<button onClick={example}>Open console and click me</button>);\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="The output in the console will be:"',title:'"The',output:!0,in:!0,the:!0,console:!0,will:!0,'be:"':!0},"example() is running, waiting for GC...\n")))}m.isMDXComponent=!0}}]);