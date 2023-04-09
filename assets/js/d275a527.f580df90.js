"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4766],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=m(n),u=i,d=g["".concat(c,".").concat(u)]||g[u]||p[u]||a;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[g]="string"==typeof e?e:i,l[1]=o;for(var m=2;m<a;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7294),i=n(6010),a=n(2802),l=n(9960),o=n(3919),c=n(5999);const m="cardContainer_fWXF",s="cardTitle_rnsV",g="cardDescription_PWke";function p(e){let{href:t,children:n}=e;return r.createElement(l.Z,{href:t,className:(0,i.Z)("card padding--lg",m)},n)}function u(e){let{href:t,icon:n,title:a,description:l}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",s),title:a},n," ",a),l&&r.createElement("p",{className:(0,i.Z)("text--truncate",g),title:l},l))}function d(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(v,e);const l=(0,a.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},l.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},7079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(7462),i=(n(7294),n(3905)),a=n(2991);const l={id:"improve-learning-algorithm",title:"Improve Learning Algorithm",sidebar_label:"6 - Improve Learning Algorithm",hide_title:!1,hide_table_of_contents:!1,tags:["machine-learning","learning-algorithm"],draft:!1,last_updated:new Date("2019-10-25T00:00:00.000Z")},o=void 0,c={unversionedId:"learning/machine-learning/improve-learning-algorithm/improve-learning-algorithm",id:"learning/machine-learning/improve-learning-algorithm/improve-learning-algorithm",title:"Improve Learning Algorithm",description:"\u9019\u500b\u7ae0\u7bc0\u5c07\u4ecb\u7d39\u5982\u4f55\u8a2d\u8a08\u4e00\u500b\u6a5f\u5668\u5b78\u7fd2\u7cfb\u7d71\uff0c\u4ee5\u53ca\u5982\u4f55\u8a55\u4f30\u6f14\u7b97\u6cd5\u7684\u6e96\u78ba\u5ea6\u3001\u9632\u6b62 overfitting \u4ee5\u53ca\u5982\u4f55\u5229\u7528\u5927\u91cf\u8cc7\u6599\u4f86\u63d0\u5347\u6f14\u7b97\u6cd5\u7684\u6548\u80fd\u3002\u70ba\u4e86\u89e3\u91cb\u9019\u4e9b\u6982\u5ff5\uff0c\u6211\u5011\u5c07\u4ee5\u4e00\u500b\u5783\u573e\u90f5\u4ef6\u5206\u985e\u5668\u70ba\u4f8b\uff0c\u8a73\u7d30\u89e3\u8aaa\u5982\u4f55\u6536\u96c6\u8cc7\u6599\u3001\u64b0\u5beb algorithm \u4ee5\u53ca\u5982\u4f55\u8655\u7406\u504f\u659c\u8cc7\u6599\u3002",source:"@site/docs/learning/2-machine-learning/6-improve-learning-algorithm/index.mdx",sourceDirName:"learning/2-machine-learning/6-improve-learning-algorithm",slug:"/learning/machine-learning/improve-learning-algorithm/",permalink:"/learning/machine-learning/improve-learning-algorithm/",draft:!1,editUrl:"https://github.com/windsuzu/windsuzu.github.io/tree/master/docs/learning/2-machine-learning/6-improve-learning-algorithm/index.mdx",tags:[{label:"machine-learning",permalink:"/tags/machine-learning"},{label:"learning-algorithm",permalink:"/tags/learning-algorithm"}],version:"current",lastUpdatedAt:1681014472,formattedLastUpdatedAt:"2023\u5e744\u67089\u65e5",frontMatter:{id:"improve-learning-algorithm",title:"Improve Learning Algorithm",sidebar_label:"6 - Improve Learning Algorithm",hide_title:!1,hide_table_of_contents:!1,tags:["machine-learning","learning-algorithm"],draft:!1,last_updated:"2019-10-25T00:00:00.000Z"},sidebar:"learning",previous:{title:"2 - Neural Network Training",permalink:"/learning/machine-learning/neural-networks/neural-network-training"},next:{title:"1 - Advice for Applying ML",permalink:"/learning/machine-learning/improve-learning-algorithm/advice-for-applying-ml"}},m={},s=[],g={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u9019\u500b\u7ae0\u7bc0\u5c07\u4ecb\u7d39\u5982\u4f55\u8a2d\u8a08\u4e00\u500b\u6a5f\u5668\u5b78\u7fd2\u7cfb\u7d71\uff0c\u4ee5\u53ca\u5982\u4f55\u8a55\u4f30\u6f14\u7b97\u6cd5\u7684\u6e96\u78ba\u5ea6\u3001\u9632\u6b62 overfitting \u4ee5\u53ca\u5982\u4f55\u5229\u7528\u5927\u91cf\u8cc7\u6599\u4f86\u63d0\u5347\u6f14\u7b97\u6cd5\u7684\u6548\u80fd\u3002\u70ba\u4e86\u89e3\u91cb\u9019\u4e9b\u6982\u5ff5\uff0c\u6211\u5011\u5c07\u4ee5\u4e00\u500b\u5783\u573e\u90f5\u4ef6\u5206\u985e\u5668\u70ba\u4f8b\uff0c\u8a73\u7d30\u89e3\u8aaa\u5982\u4f55\u6536\u96c6\u8cc7\u6599\u3001\u64b0\u5beb algorithm \u4ee5\u53ca\u5982\u4f55\u8655\u7406\u504f\u659c\u8cc7\u6599\u3002"),(0,i.kt)(a.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);