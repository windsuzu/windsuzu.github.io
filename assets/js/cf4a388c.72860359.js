"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7082],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>y});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(i),u=a,y=d["".concat(s,".").concat(u)]||d[u]||p[u]||r;return i?n.createElement(y,o(o({ref:t},m),{},{components:i})):n.createElement(y,o({ref:t},m))}));function y(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},2991:(e,t,i)=>{i.d(t,{Z:()=>b});var n=i(7294),a=i(6010),r=i(2802),o=i(9960),l=i(3919),s=i(5999);const c="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function p(e){let{href:t,children:i}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",c)},i)}function u(e){let{href:t,icon:i,title:r,description:o}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:r},i," ",r),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",d),title:o},o))}function y(e){let{item:t}=e;const i=(0,r.Wl)(t);return i?n.createElement(u,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const i=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,r.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:i,title:t.label,description:t.description??a?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(y,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const i=(0,r.jA)();return n.createElement(b,{items:i.items,className:t})}function b(e){const{items:t,className:i}=e;if(!t)return n.createElement(f,e);const o=(0,r.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",i)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},5906:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=i(7462),a=(i(7294),i(3905)),r=i(2991);const o={title:"Biology",sidebar_label:"Biology",hide_title:!1,hide_table_of_contents:!1,description:"To know about Biology, it's important to have a good understanding of General Science, Chemistry, Physics, Statistics, and Math.",tags:["introduction","biology","khan-academy"],keywords:["Biology","Chemistry","Physics","Statistics","Math","General science skills"],draft:!1,last_update:{date:new Date("2020-03-07T00:00:00.000Z")}},l=void 0,s={unversionedId:"learning/biology/index",id:"learning/biology/index",title:"Biology",description:"To know about Biology, it's important to have a good understanding of General Science, Chemistry, Physics, Statistics, and Math.",source:"@site/docs/learning/1-biology/index.mdx",sourceDirName:"learning/1-biology",slug:"/learning/biology/",permalink:"/learning/biology/",draft:!1,editUrl:"https://github.com/windsuzu/windsuzu.github.io/tree/master/docs/learning/1-biology/index.mdx",tags:[{label:"introduction",permalink:"/tags/introduction"},{label:"biology",permalink:"/tags/biology"},{label:"khan-academy",permalink:"/tags/khan-academy"}],version:"current",lastUpdatedAt:1583539200,formattedLastUpdatedAt:"2020\u5e743\u67087\u65e5",frontMatter:{title:"Biology",sidebar_label:"Biology",hide_title:!1,hide_table_of_contents:!1,description:"To know about Biology, it's important to have a good understanding of General Science, Chemistry, Physics, Statistics, and Math.",tags:["introduction","biology","khan-academy"],keywords:["Biology","Chemistry","Physics","Statistics","Math","General science skills"],draft:!1,last_update:{date:"2020-03-07T00:00:00.000Z"}},sidebar:"learning",previous:{title:"2 - ML System Design",permalink:"/learning/machine-learning/improve-learning-algorithm/ml-system-design"},next:{title:"1 - Scientific Method",permalink:"/learning/biology/scientific-method"}},c={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview",id:"overview",level:2}],d={toc:m};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"In order to understand the concepts of Biology, one should have a strong foundation in General Science skills, Chemistry, Physics, Statistics and Math. This includes topics such as the scientific method, general chemistry, acid-base chemistry, laws of thermodynamics, basics of probability, statistics and basic algebra and graphing."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"General science skills",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.khanacademy.org/science/biology/intro-to-biology/science-of-biology/v/the-scientific-method"},"The scientific method"),"."))),(0,a.kt)("li",{parentName:"ul"},"Chemistry:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.khanacademy.org/science/biology/chemistry--of-life/elements-and-atoms/v/elements-and-atoms"},"General chemistry")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.khanacademy.org/science/biology/water-acids-and-bases/acids-bases-and-ph/v/autoionization-water"},"Acid-base chemistry")))),(0,a.kt)("li",{parentName:"ul"},"Physics:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.khanacademy.org/science/biology/energy-and-enzymes/the-laws-of-thermodynamics/v/introduction-to-energy"},"Laws of thermodynamics")))),(0,a.kt)("li",{parentName:"ul"},"Statistics",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.khanacademy.org/math/probability/independent-dependent-probability/basic-probability/v/basic-probability"},"Basics of probability")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.khanacademy.org/math/probability/descriptive-statistics/central-tendency/v/statistics-intro-mean-median-and-mode"},"Statistics")))),(0,a.kt)("li",{parentName:"ul"},"Math",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.khanacademy.org/math/algebra-basics"},"Basic algebra and graphing"))))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)(r.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);