"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3095],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7294),a=n(6010),i=n(2802),o=n(9960),l=n(3919),c=n(5999);const s="cardContainer_fWXF",p="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},n)}function m(e){let{href:t,icon:n,title:i,description:o}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",p),title:i},n," ",i),o&&r.createElement("p",{className:(0,a.Z)("text--truncate",d),title:o},o))}function g(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return r.createElement(m,{href:t.href,icon:n,title:t.label,description:t.description??a?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(h,{items:n.items,className:t})}function h(e){const{items:t,className:n}=e;if(!t)return r.createElement(b,e);const o=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}},3874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),i=n(2991);const o={title:"Deep Learning",sidebar_label:"Deep Learning",hide_title:!1,hide_table_of_contents:!1,tags:["introduction","deep-learning","coursera"],draft:!1,last_update:{date:new Date("2019-10-24T00:00:00.000Z")}},l=void 0,c={unversionedId:"learning/deep-learning/index",id:"learning/deep-learning/index",title:"Deep Learning",description:"\u9019\u500b\u7b46\u8a18\u5c0d\u61c9 Coursera \u7cfb\u5217\u8ab2\u7a0b Deep Learning\u3002 \u8ab2\u7a0b\u4e3b\u8981\u7531 Andrew Ng \u6559\u6388\u4e3b\u8b1b\uff0c\u662f\u4e00\u500b\u975e\u5e38\u597d\u7684\u6df1\u5ea6\u5b78\u7fd2\u8ab2\u7a0b\u3002",source:"@site/docs/learning/3-deep-learning/index.mdx",sourceDirName:"learning/3-deep-learning",slug:"/learning/deep-learning/",permalink:"/learning/deep-learning/",draft:!1,editUrl:"https://github.com/windsuzu/windsuzu.github.io/tree/master/docs/learning/3-deep-learning/index.mdx",tags:[{label:"introduction",permalink:"/tags/introduction"},{label:"deep-learning",permalink:"/tags/deep-learning"},{label:"coursera",permalink:"/tags/coursera"}],version:"current",lastUpdatedAt:1571875200,formattedLastUpdatedAt:"2019\u5e7410\u670824\u65e5",frontMatter:{title:"Deep Learning",sidebar_label:"Deep Learning",hide_title:!1,hide_table_of_contents:!1,tags:["introduction","deep-learning","coursera"],draft:!1,last_update:{date:"2019-10-24T00:00:00.000Z"}},sidebar:"learning",previous:{title:"5 - Evaluation",permalink:"/learning/data-mining/evaluation"},next:{title:"1 - Neural Networks and Deep Learning",permalink:"/learning/deep-learning/neural-networks-and-deep-learning/"}},s={},p=[{value:"Overview",id:"overview",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9019\u500b\u7b46\u8a18\u5c0d\u61c9 Coursera \u7cfb\u5217\u8ab2\u7a0b ",(0,a.kt)("a",{parentName:"p",href:"https://www.coursera.org/specializations/deep-learning"},"Deep Learning"),"\u3002 \u8ab2\u7a0b\u4e3b\u8981\u7531 ",(0,a.kt)("a",{parentName:"p",href:"https://www.coursera.org/instructor/andrewng"},"Andrew Ng")," \u6559\u6388\u4e3b\u8b1b\uff0c\u662f\u4e00\u500b\u975e\u5e38\u597d\u7684\u6df1\u5ea6\u5b78\u7fd2\u8ab2\u7a0b\u3002"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)(i.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);