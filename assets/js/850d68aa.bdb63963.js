"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4177],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=i(n),u=r,y=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(y,p(p({ref:t},l),{},{components:n})):a.createElement(y,p({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:r,p[1]=c;for(var i=2;i<o;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={id:"components-map",title:"Components Map",description:"\u5728 React \u4e2d\u4f7f\u7528 components map \u53ef\u4ee5\u66f4\u7cbe\u7c21\u5730\u4f7f\u7528\u689d\u4ef6\u5f0f\u6e32\u67d3\u5143\u4ef6\u3002\u6211\u5011\u53ef\u4ee5\u4f7f\u7528\u666e\u901a\u7684 JavaScript \u7269\u4ef6\u6216 Map \u5275\u5efa components map\uff0c\u4ee5\u53ca\u4f7f\u7528 lazy-loading \u4f7f\u5143\u4ef6\u52d5\u614b\u8f09\u5165\u3002\u53e6\u5916\uff0c\u5728\u5207\u63db\u5143\u4ef6\u6642\u4f7f\u7528 startTransition \u53ef\u4ee5\u907f\u514d\u5143\u4ef6\u5207\u63db\u9583\u720d\u7684\u554f\u984c\u3002\u6700\u5f8c\uff0c\u4f7f\u7528 components map \u6709\u4e00\u500b\u7f3a\u9ede\uff0c\u5c31\u662f map \u4e2d\u7684\u6240\u6709\u5143\u4ef6\u5fc5\u9808\u4f7f\u7528\u76f8\u540c\u7684 props\u3002",sidebar_label:"Components Map",hide_title:!0,hide_table_of_contents:!1,tags:["react","components","map","lazy","code-splitting"],draft:!1,last_updated:new Date("2022-10-09T00:00:00.000Z")},p=void 0,c={unversionedId:"frontend/react-next/components-map",id:"frontend/react-next/components-map",title:"Components Map",description:"\u5728 React \u4e2d\u4f7f\u7528 components map \u53ef\u4ee5\u66f4\u7cbe\u7c21\u5730\u4f7f\u7528\u689d\u4ef6\u5f0f\u6e32\u67d3\u5143\u4ef6\u3002\u6211\u5011\u53ef\u4ee5\u4f7f\u7528\u666e\u901a\u7684 JavaScript \u7269\u4ef6\u6216 Map \u5275\u5efa components map\uff0c\u4ee5\u53ca\u4f7f\u7528 lazy-loading \u4f7f\u5143\u4ef6\u52d5\u614b\u8f09\u5165\u3002\u53e6\u5916\uff0c\u5728\u5207\u63db\u5143\u4ef6\u6642\u4f7f\u7528 startTransition \u53ef\u4ee5\u907f\u514d\u5143\u4ef6\u5207\u63db\u9583\u720d\u7684\u554f\u984c\u3002\u6700\u5f8c\uff0c\u4f7f\u7528 components map \u6709\u4e00\u500b\u7f3a\u9ede\uff0c\u5c31\u662f map \u4e2d\u7684\u6240\u6709\u5143\u4ef6\u5fc5\u9808\u4f7f\u7528\u76f8\u540c\u7684 props\u3002",source:"@site/docs/frontend/react-next/2022-10-09-components-map.mdx",sourceDirName:"frontend/react-next",slug:"/frontend/react-next/components-map",permalink:"/frontend/react-next/components-map",draft:!1,editUrl:"https://github.com/windsuzu/windsuzu.github.io/tree/master/docs/frontend/react-next/2022-10-09-components-map.mdx",tags:[{label:"react",permalink:"/tags/react"},{label:"components",permalink:"/tags/components"},{label:"map",permalink:"/tags/map"},{label:"lazy",permalink:"/tags/lazy"},{label:"code-splitting",permalink:"/tags/code-splitting"}],version:"current",lastUpdatedAt:1678011492,formattedLastUpdatedAt:"2023\u5e743\u67085\u65e5",frontMatter:{id:"components-map",title:"Components Map",description:"\u5728 React \u4e2d\u4f7f\u7528 components map \u53ef\u4ee5\u66f4\u7cbe\u7c21\u5730\u4f7f\u7528\u689d\u4ef6\u5f0f\u6e32\u67d3\u5143\u4ef6\u3002\u6211\u5011\u53ef\u4ee5\u4f7f\u7528\u666e\u901a\u7684 JavaScript \u7269\u4ef6\u6216 Map \u5275\u5efa components map\uff0c\u4ee5\u53ca\u4f7f\u7528 lazy-loading \u4f7f\u5143\u4ef6\u52d5\u614b\u8f09\u5165\u3002\u53e6\u5916\uff0c\u5728\u5207\u63db\u5143\u4ef6\u6642\u4f7f\u7528 startTransition \u53ef\u4ee5\u907f\u514d\u5143\u4ef6\u5207\u63db\u9583\u720d\u7684\u554f\u984c\u3002\u6700\u5f8c\uff0c\u4f7f\u7528 components map \u6709\u4e00\u500b\u7f3a\u9ede\uff0c\u5c31\u662f map \u4e2d\u7684\u6240\u6709\u5143\u4ef6\u5fc5\u9808\u4f7f\u7528\u76f8\u540c\u7684 props\u3002",sidebar_label:"Components Map",hide_title:!0,hide_table_of_contents:!1,tags:["react","components","map","lazy","code-splitting"],draft:!1,last_updated:"2022-10-09T00:00:00.000Z"},sidebar:"react-next",previous:{title:"Is useState Asynchronous?",permalink:"/frontend/react-next/is-usestate-asynchronous"},next:{title:"React Folder Structure",permalink:"/frontend/react-next/react-folder-structure"}},s={},i=[{value:"Component Map",id:"component-map",level:2},{value:"Lazy Component Map",id:"lazy-component-map",level:2},{value:"Disadvantages",id:"disadvantages",level:2}],l={toc:i};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("profile",{title:"(Lazy) Components Maps",url:"https://julesblom.com/writing/lazy-component-maps?ck_subscriber_id=1879469445&utm_source=convertkit&utm_medium=email&utm_campaign=%E2%9A%9B%EF%B8%8F+This+Week+In+React+%23118%3A+Gatsby%2C+Beta+Docs%2C+Reactivity%2C+Lazy+Maps%2C+Ezno%2C+Whyframe%2C+Reassure%2C+Node.js%2C+TypeScript%2C+WASM...%20-%209117597",author:"Jules Blom",level:"beginner",category:["react/next","js/ts"]}),(0,r.kt)("p",null,"\u96a8\u8457\u60c5\u6cc1\u4e0d\u65b7\u7684\u589e\u52a0\uff0c\u6211\u5011\u8981\u505a\u5230\u689d\u4ef6\u5f0f\u7684\u6e32\u67d3\u4e5f\u6703\u8b8a\u5f97\u8d8a\u4f86\u8d8a\u56f0\u96e3\u3002\u5728 React \u4e2d\uff0c\u6211\u5011\u901a\u5e38\u6703\u4f7f\u7528 if-else \u6216\u662f switch \u4f86\u689d\u4ef6\u5f0f\u7684\u6e32\u67d3\u5143\u4ef6\u3002\u4f46\u5176\u5be6\u6211\u5011\u53ef\u4ee5\u4f7f\u7528\u4e00\u500b component map \u4f86\u505a\u5230\u9019\u4ef6\u4e8b\u60c5\uff01"),(0,r.kt)("h2",{id:"component-map"},"Component Map"),(0,r.kt)("p",null,"\u4e00\u500b component map \u53ea\u662f\u4e00\u500b\u55ae\u7d14\u7684 Javascript \u7269\u4ef6\uff0c\u5c07\u9375\u503c (key) \u5c0d\u61c9\u5230 React \u5143\u4ef6\u3002\u4ee5\u4e0b\u662f\u4e00\u500b\u7c21\u55ae\u7684\u7bc4\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const components = {\n  day: DayPicker,\n  week: WeekPicker,\n  month: MonthPicker,\n  year: YearPicker,\n};\n\nconst SelectedPicker = components[type];\n\nreturn (\n  <SelectedPicker\n    selectedPeriod={selectedPeriod}\n    setSelectedPeriod={setSelectedPeriod}\n  />\n);\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u70ba\u4e86\u8b93 component map \u6620\u5c04\u51fa\u4f86\u7684\u5143\u4ef6\u80fd\u5728 JSX \u4e2d\u76f4\u63a5\u4f7f\u7528\uff0c\u9019\u4e9b\u5143\u4ef6\u7684\u8b8a\u6578\u540d\u7a31\u958b\u982d\u5fc5\u9808\u5927\u5beb\uff01")),(0,r.kt)("p",null,"\u6211\u5011\u4e5f\u53ef\u4ee5\u4f7f\u7528 Map \u4f86\u7522\u751f component map\uff0c\u4ee5\u4e0b\u662f\u4e00\u500b\u4f7f\u7528 Map \u7684\u7bc4\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const components = new Map([\n  ["day", DayPicker],\n  ["week", WeekPicker],\n  ["month", MonthPicker],\n  ["year", YearPicker],\n]);\n')),(0,r.kt)("h2",{id:"lazy-component-map"},"Lazy Component Map"),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u7bc4\u4f8b\u4e2d\uff0c\u6211\u5011\u4f7f\u7528\u4e86\u4e00\u500b component map \u4f86\u5c07\u9375\u503c\u5c0d\u61c9\u5230 React \u5143\u4ef6\uff0c\u4f46\u662f\u9019\u500b component map \u6703\u5728\u9801\u9762\u8f09\u5165\u6642\u5c31\u5c07\u6240\u6709\u7684\u5143\u4ef6\u90fd\u8f09\u5165\uff0c\u9019\u6a23\u53ef\u80fd\u6703\u5c0e\u81f4\u9801\u9762\u8f09\u5165\u7684\u6642\u9593\u8b8a\u9577\uff0c\u56e0\u6b64\u6211\u5011\u53ef\u4ee5\u4f7f\u7528 lazy loading (code-splitting) \u7684\u65b9\u5f0f\u4f86\u5c07\u5143\u4ef6\u52d5\u614b\u8f09\u5165\uff0c\u4ee5\u4e0b\u662f\u4e00\u500b lazy component map \u7684\u7bc4\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const components = {\n  day: lazy(() => import("./day-picker")),\n  week: lazy(() => import("./week-picker")),\n  month: lazy(() => import("./month-picker")),\n  year: lazy(() => import("./year-picker")),\n};\n\nconst SelectedPicker = components[type];\n\nreturn (\n  <ErrorBoundary FallbackComponent={ErrorFallback} onError={handleError}>\n    <Suspense fallback={<Spinner />}>\n      <SelectedPicker />\n    </Suspense>\n  <ErrorBoundary>\n);\n')),(0,r.kt)("p",null,"\u7576\u6211\u5011\u8981\u5207\u63db\u5143\u4ef6\u6642\uff0cReact \u6703\u5148\u5c07\u539f\u672c\u7684\u5143\u4ef6\u79fb\u9664\uff0c\u7136\u5f8c\u518d\u5c07\u65b0\u7684\u5143\u4ef6\u52a0\u5165\uff0c\u9019\u6a23\u6703\u5c0e\u81f4\u9801\u9762\u7684\u9583\u720d\uff0c\u56e0\u6b64\u6211\u5011\u53ef\u4ee5\u4f7f\u7528 React \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/reference/react/startTransition"},"startTransition")," \u4f86\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u5c07\u6539\u8b8a ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," \u7684\u908f\u8f2f\u5305\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"startTransition")," \u4e2d\u5c31\u53ef\u4ee5\u89e3\u6c7a\u9583\u720d\u7684\u554f\u984c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"onChange={(e) => startTransition(() => setType(e.target.value))}\n")),(0,r.kt)("h2",{id:"disadvantages"},"Disadvantages"),(0,r.kt)("p",null,"\u4f7f\u7528 component map \u4f86\u505a\u689d\u4ef6\u5f0f\u7684\u6e32\u67d3\uff0c\u53ef\u4ee5\u8b93\u6211\u5011\u7684\u7a0b\u5f0f\u78bc\u8b8a\u5f97\u66f4\u7c21\u6f54\uff0c\u4f46\u662f\u4e5f\u6709\u4e00\u500b\u7f3a\u9ede\u3002\u5728 map \u88e1\u9762\u7684\u5143\u4ef6\uff0c\u5fc5\u9808\u8981\u4f7f\u7528\u540c\u6a23\u7684 props\uff0c\u5426\u5247\u5c31\u6703\u51fa\u73fe\u932f\u8aa4\u3002\u9019\u6642\u5019\u5c31\u5fc5\u9808\u8981\u4f7f\u7528 switch \u6216\u662f if-else \u4f86\u505a\u689d\u4ef6\u5f0f\u7684\u6e32\u67d3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'switch (type) {\n  case "day": {\n    return <DayPicker currentDay={today} />;\n  }\n  case "week": {\n    return <WeekPicker currentWeek={week} />;\n  }\n}\n')))}m.isMDXComponent=!0}}]);