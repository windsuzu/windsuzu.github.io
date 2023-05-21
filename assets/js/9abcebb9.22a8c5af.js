"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1996],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,g=u["".concat(c,".").concat(p)]||u[p]||m[p]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(7294),a=n(6010),i=n(2802),o=n(9960),l=n(3919),c=n(5999);const s="cardContainer_fWXF",d="cardTitle_rnsV",u="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},n)}function p(e){let{href:t,icon:n,title:i,description:o}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",d),title:i},n," ",i),o&&r.createElement("p",{className:(0,a.Z)("text--truncate",u),title:o},o))}function g(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??a?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(y,e);const o=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},4667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),i=n(2991);const o={id:"sequence-models",title:"Sequence Models",sidebar_label:"3 - Sequence Models",hide_title:!1,hide_table_of_contents:!1,tags:["deep-learning","sequence-models"],draft:!1,last_update:{date:new Date("2019-11-22T00:00:00.000Z")}},l=void 0,c={unversionedId:"learning/deep-learning/sequence-models.mdx/sequence-models",id:"learning/deep-learning/sequence-models.mdx/sequence-models",title:"Sequence Models",description:"\u5728 Sequence Models \u4e2d\uff0c\u6211\u5011\u5c07\u6703\u5b78\u7fd2\u5982\u4f55\u5efa\u7acb Natural Language\u3001Audio \u6216\u5176\u4ed6 Sequence Data \u7684\u6a21\u578b\u3002\u7531\u65bc\u6709 Deep Learning\uff0cSequence Algorithms \u624d\u80fd\u5920\u5feb\u901f\u9032\u6b65\uff0c\u5176\u4e2d\u7684\u5c08\u6848\u5305\u62ec\uff1aSpeech Recognition\u3001Music Synthesis\u3001Chatbots\u3001Machine Translation\u3001Natural Language Understanding \u7b49\u7b49\u3002",source:"@site/docs/learning/3-deep-learning/3-sequence-models.mdx/index.mdx",sourceDirName:"learning/3-deep-learning/3-sequence-models.mdx",slug:"/learning/deep-learning/sequence-models.mdx/",permalink:"/learning/deep-learning/sequence-models.mdx/",draft:!1,editUrl:"https://github.com/windsuzu/windsuzu.github.io/tree/master/docs/learning/3-deep-learning/3-sequence-models.mdx/index.mdx",tags:[{label:"deep-learning",permalink:"/tags/deep-learning"},{label:"sequence-models",permalink:"/tags/sequence-models"}],version:"current",lastUpdatedAt:1574380800,formattedLastUpdatedAt:"2019\u5e7411\u670822\u65e5",frontMatter:{id:"sequence-models",title:"Sequence Models",sidebar_label:"3 - Sequence Models",hide_title:!1,hide_table_of_contents:!1,tags:["deep-learning","sequence-models"],draft:!1,last_update:{date:"2019-11-22T00:00:00.000Z"}},sidebar:"learning",previous:{title:"5 - Hyperparameter, Batch Normalization, Softmax",permalink:"/learning/deep-learning/improve-deep-neural-networks/hyperparameter-batch-normalization-softmax"},next:{title:"1 - Recurrent Neural Networks",permalink:"/learning/deep-learning/sequence-models.mdx/recurrent-neural-networks/"}},s={},d=[{value:"Overview",id:"overview",level:2}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728 Sequence Models \u4e2d\uff0c\u6211\u5011\u5c07\u6703\u5b78\u7fd2\u5982\u4f55\u5efa\u7acb Natural Language\u3001Audio \u6216\u5176\u4ed6 Sequence Data \u7684\u6a21\u578b\u3002\u7531\u65bc\u6709 Deep Learning\uff0cSequence Algorithms \u624d\u80fd\u5920\u5feb\u901f\u9032\u6b65\uff0c\u5176\u4e2d\u7684\u5c08\u6848\u5305\u62ec\uff1aSpeech Recognition\u3001Music Synthesis\u3001Chatbots\u3001Machine Translation\u3001Natural Language Understanding \u7b49\u7b49\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u6703\u5148\u4ecb\u7d39\u4ec0\u9ebc\u662f RNNs\uff0c\u9019\u985e\u578b\u7684\u7db2\u8def (LSTM\u3001GRU\u3001BRNNs) \u80fd\u5920\u6709\u6548\u5730\u8655\u7406\u6642\u9593\u5e8f\u5217\u8cc7\u6599\u3002\u63a5\u8457\u4ecb\u7d39\u548c RNNs \u76f8\u95dc\u7684 Natural Language Processing (NLP) \u61c9\u7528\uff0c\u9019\u4e9b\u61c9\u7528\u5229\u7528 Word Vector \u548c Embedding Layers \u4f86\u8a13\u7df4 RNNs\uff0c\u4f8b\u5982 Sentiment Analysis\u3001Named Entity Recognition\u3001Machine Translation \u7b49\u7b49\u3002\u6700\u5f8c\uff0c\u6211\u5011\u6703\u4ecb\u7d39 Attention Mechanism \u4f86\u52a0\u5f37 Sequence Models\u3002\u9019\u500b Attention \u53ef\u4ee5\u544a\u8a34 RNNs \u6bcf\u6b21\u5728\u8f38\u51fa\u6642\uff0c\u61c9\u8a72\u5c08\u6ce8\u5728\u54ea\u4e00\u6bb5\u8f38\u5165\u3002"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)(i.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);