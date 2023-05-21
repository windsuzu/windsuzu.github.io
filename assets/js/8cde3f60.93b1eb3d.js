"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6855],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,g=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?a.createElement(g,s(s({ref:t},m),{},{components:n})):a.createElement(g,s({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7294),r=n(6010),i=n(2802),s=n(9960),l=n(3919),o=n(5999);const c="cardContainer_fWXF",m="cardTitle_rnsV",p="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return a.createElement(s.Z,{href:t,className:(0,r.Z)("card padding--lg",c)},n)}function d(e){let{href:t,icon:n,title:i,description:s}=e;return a.createElement(u,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",m),title:i},n," ",i),s&&a.createElement("p",{className:(0,r.Z)("text--truncate",p),title:s},s))}function g(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?a.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return a.createElement(d,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(h,{item:t});case"category":return a.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function N(e){let{className:t}=e;const n=(0,i.jA)();return a.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return a.createElement(N,e);const s=(0,i.MN)(t);return a.createElement("section",{className:(0,r.Z)("row",n)},s.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(f,{item:e})))))}},193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),i=n(2991);const s={title:"Linear Regression",sidebar_label:"2 - Linear Regression",hide_title:!1,hide_table_of_contents:!1,tags:["introduction","machine-learning","linear-regression"],draft:!1,last_update:{date:new Date("2019-09-15T00:00:00.000Z")}},l=void 0,o={unversionedId:"learning/machine-learning/linear-regression/index",id:"learning/machine-learning/linear-regression/index",title:"Linear Regression",description:"\u9019\u500b\u7ae0\u7bc0\u6211\u5011\u6703\u4ecb\u7d39\u7dda\u6027\u56de\u6b78\uff0c\u7dda\u6027\u56de\u6b78\u662f\u4e00\u500b\u975e\u5e38\u7c21\u55ae\u7684\u6a5f\u5668\u5b78\u7fd2\u6a21\u578b\uff0c\u4f46\u662f\u5b83\u7684\u61c9\u7528\u537b\u975e\u5e38\u5ee3\u6cdb\uff0c\u4f8b\u5982\uff1a\u80a1\u7968\u9810\u6e2c\u3001\u623f\u50f9\u9810\u6e2c\u3001\u92b7\u552e\u9810\u6e2c\u7b49\u7b49\uff0c\u56e0\u6b64\u7dda\u6027\u56de\u6b78\u662f\u4e00\u500b\u975e\u5e38\u91cd\u8981\u7684\u6a5f\u5668\u5b78\u7fd2\u6a21\u578b\u3002",source:"@site/docs/learning/2-machine-learning/2-linear-regression/index.mdx",sourceDirName:"learning/2-machine-learning/2-linear-regression",slug:"/learning/machine-learning/linear-regression/",permalink:"/learning/machine-learning/linear-regression/",draft:!1,editUrl:"https://github.com/windsuzu/windsuzu.github.io/tree/master/docs/learning/2-machine-learning/2-linear-regression/index.mdx",tags:[{label:"introduction",permalink:"/tags/introduction"},{label:"machine-learning",permalink:"/tags/machine-learning"},{label:"linear-regression",permalink:"/tags/linear-regression"}],version:"current",lastUpdatedAt:1568505600,formattedLastUpdatedAt:"2019\u5e749\u670815\u65e5",frontMatter:{title:"Linear Regression",sidebar_label:"2 - Linear Regression",hide_title:!1,hide_table_of_contents:!1,tags:["introduction","machine-learning","linear-regression"],draft:!1,last_update:{date:"2019-09-15T00:00:00.000Z"}},sidebar:"learning",previous:{title:"1 - Introduction",permalink:"/learning/machine-learning/introduction/"},next:{title:"1 - Model and Cost Function",permalink:"/learning/machine-learning/linear-regression/model-and-cost-function"}},c={},m=[],p={toc:m};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u9019\u500b\u7ae0\u7bc0\u6211\u5011\u6703\u4ecb\u7d39\u7dda\u6027\u56de\u6b78\uff0c\u7dda\u6027\u56de\u6b78\u662f\u4e00\u500b\u975e\u5e38\u7c21\u55ae\u7684\u6a5f\u5668\u5b78\u7fd2\u6a21\u578b\uff0c\u4f46\u662f\u5b83\u7684\u61c9\u7528\u537b\u975e\u5e38\u5ee3\u6cdb\uff0c\u4f8b\u5982\uff1a\u80a1\u7968\u9810\u6e2c\u3001\u623f\u50f9\u9810\u6e2c\u3001\u92b7\u552e\u9810\u6e2c\u7b49\u7b49\uff0c\u56e0\u6b64\u7dda\u6027\u56de\u6b78\u662f\u4e00\u500b\u975e\u5e38\u91cd\u8981\u7684\u6a5f\u5668\u5b78\u7fd2\u6a21\u578b\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e00\u7ae0\u63d0\u5230 Model \u8207 Cost Function \u4e4b\u9593\u6709\u8457\u5bc6\u5207\u7684\u95dc\u4fc2\uff0c\u800c Cost Function \u7528\u65bc\u6700\u5c0f\u5316 Model \u4e2d\u51fa\u73fe\u7684\u8aa4\u5dee\uff0c\u8b93 Model \u7684\u9810\u6e2c\u7d50\u679c\u8d8a\u4f86\u8d8a\u7cbe\u78ba\u3002\u7b2c\u4e8c\u7ae0\u5247\u662f\u4ecb\u7d39 Parameter learning \u662f\u4e00\u7a2e\u8a13\u7df4\u6a21\u578b\u7684\u65b9\u6cd5\uff0c\u53ef\u4ee5\u900f\u904e\u68af\u5ea6\u4e0b\u964d\u6cd5\u4f86\u66f4\u65b0\u53c3\u6578\u4ee5\u6539\u5584\u6a21\u578b\u6027\u80fd\u3002\u7b2c\u4e09\u7ae0\u5247\u662f\u63d0\u5230\u7576 linear progression \u6709\u591a\u500b features (variables) \u6642\uff0c\u5c31\u53ef\u4ee5\u7a31\u4f5c\u70ba multivariate linear regression\u3002\u6700\u5f8c\uff0c\u7b2c\u56db\u7ae0\u5247\u4ecb\u7d39\u4e86 Normal equation\uff0c\u53ea\u8981\u5c07\u8a13\u7df4\u96c6 (training sets) \u7684\u7279\u5fb5 ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"x")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," \u8207\u7d50\u679c ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"y")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y")))))," \u8f49\u63db\u70ba\u77e9\u9663\uff0c\u5c31\u80fd\u5957\u7528 normal equation \u76f4\u63a5\u5f97\u5230\u6700\u4f73\u89e3\u3002"),(0,r.kt)(i.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);