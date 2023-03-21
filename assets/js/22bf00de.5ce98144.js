"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7294),o=n(6010),i=n(2802),a=n(9960),c=n(3919),l=n(5999);const s="cardContainer_fWXF",d="cardTitle_rnsV",p="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",s)},n)}function m(e){let{href:t,icon:n,title:i,description:a}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",d),title:i},n," ",i),a&&r.createElement("p",{className:(0,o.Z)("text--truncate",p),title:a},a))}function g(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return r.createElement(m,{href:t.href,icon:n,title:t.label,description:o?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(v,e);const a=(0,i.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(b,{item:e})))))}},719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905)),i=n(2991);const a={id:"robotic-navigation-and-exploration",title:"Robotic Navigation and Exploration",sidebar_label:"Robotic Navigation and Exploration",hide_title:!1,hide_table_of_contents:!1,tags:["robotic-navigation-and-exploration"],draft:!1,last_updated:new Date("2020-05-10T00:00:00.000Z")},c=void 0,l={unversionedId:"learning/robotic-navigation-and-exploration/robotic-navigation-and-exploration",id:"learning/robotic-navigation-and-exploration/robotic-navigation-and-exploration",title:"Robotic Navigation and Exploration",description:"\u9019\u500b\u7b46\u8a18\u5c0d\u61c9\u6210\u529f\u5927\u5b78 Robotic Navigation and Exploration (CS562000) \u7684\u8ab2\u7a0b\u3002\u76ee\u6a19\u70ba\u4e86\u89e3\u81ea\u99d5\u8eca\u539f\u7406\uff0c\u6700\u7d42\u80fd\u5920\u4f7f\u7528\u5f71\u50cf\u8fa8\u8b58\u6280\u8853\u64cd\u7e31 NVIDIA JetBot\u3002 \u4f60\u9084\u53ef\u4ee5\u5230\u6211\u7684 Github Repository - Robotic-Navigation \u67e5\u770b\u8ab2\u7a0b\u4e2d\u6bcf\u500b\u5c08\u6848\u7684\u6210\u679c\u8207\u7a0b\u5f0f\u78bc\u3002",source:"@site/docs/learning/5-robotic-navigation-and-exploration/index.mdx",sourceDirName:"learning/5-robotic-navigation-and-exploration",slug:"/learning/robotic-navigation-and-exploration/",permalink:"/learning/robotic-navigation-and-exploration/",draft:!1,editUrl:"https://github.com/windsuzu/windsuzu.github.io/tree/master/docs/learning/5-robotic-navigation-and-exploration/index.mdx",tags:[{label:"robotic-navigation-and-exploration",permalink:"/tags/robotic-navigation-and-exploration"}],version:"current",lastUpdatedAt:1679358500,formattedLastUpdatedAt:"2023\u5e743\u670821\u65e5",frontMatter:{id:"robotic-navigation-and-exploration",title:"Robotic Navigation and Exploration",sidebar_label:"Robotic Navigation and Exploration",hide_title:!1,hide_table_of_contents:!1,tags:["robotic-navigation-and-exploration"],draft:!1,last_updated:"2020-05-10T00:00:00.000Z"},sidebar:"learning",previous:{title:"\u5b78\u7fd2\u7b46\u8a18",permalink:"/learning/intro"},next:{title:"1 - Kinetic Model and Vehicle Control",permalink:"/learning/robotic-navigation-and-exploration/kinetic-model-and-vehicle-control/"}},s={},d=[{value:"Overview",id:"overview",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u9019\u500b\u7b46\u8a18\u5c0d\u61c9\u6210\u529f\u5927\u5b78 Robotic Navigation and Exploration (CS562000) \u7684\u8ab2\u7a0b\u3002\u76ee\u6a19\u70ba\u4e86\u89e3\u81ea\u99d5\u8eca\u539f\u7406\uff0c\u6700\u7d42\u80fd\u5920\u4f7f\u7528\u5f71\u50cf\u8fa8\u8b58\u6280\u8853\u64cd\u7e31 NVIDIA JetBot\u3002 \u4f60\u9084\u53ef\u4ee5\u5230\u6211\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/windsuzu/Robotic-Navigation"},"Github Repository - Robotic-Navigation")," \u67e5\u770b\u8ab2\u7a0b\u4e2d\u6bcf\u500b\u5c08\u6848\u7684\u6210\u679c\u8207\u7a0b\u5f0f\u78bc\u3002"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)(i.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);