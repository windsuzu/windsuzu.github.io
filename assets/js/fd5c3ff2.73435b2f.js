"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2614],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=i,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7294),i=n(6010),a=n(2802),o=n(9960),c=n(3919),l=n(5999);const s="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},n)}function p(e){let{href:t,icon:n,title:a,description:o}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",d),title:a},n," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",m),title:o},o))}function f(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:i?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(h,{items:n.items,className:t})}function h(e){const{items:t,className:n}=e;if(!t)return r.createElement(b,e);const o=(0,a.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}},6332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),i=(n(7294),n(3905)),a=n(2991);const o={title:"Data Mining",sidebar_label:"Data Mining",hide_title:!1,hide_table_of_contents:!1,tags:["introduction","data-mining"],draft:!1,last_updated:new Date("2019-10-24T00:00:00.000Z")},c=void 0,l={unversionedId:"learning/data-mining/index",id:"learning/data-mining/index",title:"Data Mining",description:"\u9019\u662f\u6210\u529f\u5927\u5b78\u8cc7\u8a0a\u5de5\u7a0b\u5b78\u7cfb\u9ad8\u5b8f\u5b87\u6559\u6388\u6240\u958b\u7684\u8cc7\u6599\u63a2\u52d8\u7684\u8ab2\u7a0b\u7b46\u8a18\u3002",source:"@site/docs/learning/4-data-mining/index.mdx",sourceDirName:"learning/4-data-mining",slug:"/learning/data-mining/",permalink:"/learning/data-mining/",draft:!1,editUrl:"https://github.com/windsuzu/windsuzu.github.io/tree/master/docs/learning/4-data-mining/index.mdx",tags:[{label:"introduction",permalink:"/tags/introduction"},{label:"data-mining",permalink:"/tags/data-mining"}],version:"current",lastUpdatedAt:1675143958,formattedLastUpdatedAt:"2023\u5e741\u670831\u65e5",frontMatter:{title:"Data Mining",sidebar_label:"Data Mining",hide_title:!1,hide_table_of_contents:!1,tags:["introduction","data-mining"],draft:!1,last_updated:"2019-10-24T00:00:00.000Z"},sidebar:"learning",previous:{title:"8 - SLAM Front-end",permalink:"/learning/robotic-navigation-and-exploration/slam-front-end"},next:{title:"1 - Association Analysis",permalink:"/learning/data-mining/association-analysis"}},s={},d=[{value:"Overview",id:"overview",level:2}],m={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u9019\u662f\u6210\u529f\u5927\u5b78\u8cc7\u8a0a\u5de5\u7a0b\u5b78\u7cfb\u9ad8\u5b8f\u5b87\u6559\u6388\u6240\u958b\u7684\u8cc7\u6599\u63a2\u52d8\u7684\u8ab2\u7a0b\u7b46\u8a18\u3002"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)(a.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);