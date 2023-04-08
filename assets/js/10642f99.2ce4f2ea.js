"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=s,f=m["".concat(o,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:s,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),s=(n(7294),n(3905));const r={id:"common-beginner-mistakes",title:"Common Beginner Mistakes",description:"\u9019\u7bc7\u6587\u7ae0\u5217\u51fa\u4e86 9 \u9805 React \u958b\u767c\u8005\u5e38\u72af\u7684\u932f\u8aa4\uff0c\u4e26\u4e14\u63d0\u4f9b\u4e86\u89e3\u6c7a\u65b9\u6cd5\u3002\u6211\u5f9e\u7576\u4e2d\u64f7\u53d6\u4e86 6 \u9805\uff0c\u5176\u4e2d\u5305\u62ec\u4e86 (1) \u4f7f\u7528 0 \u4f5c\u70ba JSX \u7684\u5224\u65b7\u689d\u4ef6\uff0c(2) \u76f4\u63a5\u4fee\u6539 state\uff0c(3) \u6c92\u6709\u7d66 list \u7684\u6bcf\u4e00\u500b item \u52a0\u4e0a key\uff0c(4) \u5728 setState \u5f8c\uff0c\u4f7f\u7528\u820a\u7684 state \u503c\uff0c(5) \u5c07 input \u7684 value \u521d\u59cb\u5316\u70ba undefined\uff0c(6) \u8aa4\u5c07 async promise \u7576\u4f5c useEffect \u7684 return function\u3002",sidebar_label:"\ud83d\udfe9 Common Beginner Mistakes",hide_title:!0,hide_table_of_contents:!1,keywords:["react","beginner","mistakes"],tags:["react"],draft:!1,last_updated:new Date("2023-04-05T00:00:00.000Z")},i=void 0,l={unversionedId:"frontend/react-next/common-beginner-mistakes",id:"frontend/react-next/common-beginner-mistakes",title:"Common Beginner Mistakes",description:"\u9019\u7bc7\u6587\u7ae0\u5217\u51fa\u4e86 9 \u9805 React \u958b\u767c\u8005\u5e38\u72af\u7684\u932f\u8aa4\uff0c\u4e26\u4e14\u63d0\u4f9b\u4e86\u89e3\u6c7a\u65b9\u6cd5\u3002\u6211\u5f9e\u7576\u4e2d\u64f7\u53d6\u4e86 6 \u9805\uff0c\u5176\u4e2d\u5305\u62ec\u4e86 (1) \u4f7f\u7528 0 \u4f5c\u70ba JSX \u7684\u5224\u65b7\u689d\u4ef6\uff0c(2) \u76f4\u63a5\u4fee\u6539 state\uff0c(3) \u6c92\u6709\u7d66 list \u7684\u6bcf\u4e00\u500b item \u52a0\u4e0a key\uff0c(4) \u5728 setState \u5f8c\uff0c\u4f7f\u7528\u820a\u7684 state \u503c\uff0c(5) \u5c07 input \u7684 value \u521d\u59cb\u5316\u70ba undefined\uff0c(6) \u8aa4\u5c07 async promise \u7576\u4f5c useEffect \u7684 return function\u3002",source:"@site/docs/frontend/react-next/2023-04-05-common-beginner-mistakes.mdx",sourceDirName:"frontend/react-next",slug:"/frontend/react-next/common-beginner-mistakes",permalink:"/frontend/react-next/common-beginner-mistakes",draft:!1,editUrl:"https://github.com/windsuzu/windsuzu.github.io/tree/master/docs/frontend/react-next/2023-04-05-common-beginner-mistakes.mdx",tags:[{label:"react",permalink:"/tags/react"}],version:"current",lastUpdatedAt:1680944961,formattedLastUpdatedAt:"2023\u5e744\u67088\u65e5",frontMatter:{id:"common-beginner-mistakes",title:"Common Beginner Mistakes",description:"\u9019\u7bc7\u6587\u7ae0\u5217\u51fa\u4e86 9 \u9805 React \u958b\u767c\u8005\u5e38\u72af\u7684\u932f\u8aa4\uff0c\u4e26\u4e14\u63d0\u4f9b\u4e86\u89e3\u6c7a\u65b9\u6cd5\u3002\u6211\u5f9e\u7576\u4e2d\u64f7\u53d6\u4e86 6 \u9805\uff0c\u5176\u4e2d\u5305\u62ec\u4e86 (1) \u4f7f\u7528 0 \u4f5c\u70ba JSX \u7684\u5224\u65b7\u689d\u4ef6\uff0c(2) \u76f4\u63a5\u4fee\u6539 state\uff0c(3) \u6c92\u6709\u7d66 list \u7684\u6bcf\u4e00\u500b item \u52a0\u4e0a key\uff0c(4) \u5728 setState \u5f8c\uff0c\u4f7f\u7528\u820a\u7684 state \u503c\uff0c(5) \u5c07 input \u7684 value \u521d\u59cb\u5316\u70ba undefined\uff0c(6) \u8aa4\u5c07 async promise \u7576\u4f5c useEffect \u7684 return function\u3002",sidebar_label:"\ud83d\udfe9 Common Beginner Mistakes",hide_title:!0,hide_table_of_contents:!1,keywords:["react","beginner","mistakes"],tags:["react"],draft:!1,last_updated:"2023-04-05T00:00:00.000Z"},sidebar:"react-next",previous:{title:"\ud83d\udce2 README",permalink:"/frontend/react-next/intro"},next:{title:"\ud83d\udfe9 React is Immutable",permalink:"/frontend/react-next/react-is-immutable"}},o={},u=[{value:"\u932f\u8aa4\u4e00 \u4f7f\u7528 0 \u4f5c\u70ba\u6e32\u67d3 JSX \u7684\u5224\u65b7\u689d\u4ef6",id:"\u932f\u8aa4\u4e00-\u4f7f\u7528-0-\u4f5c\u70ba\u6e32\u67d3-jsx-\u7684\u5224\u65b7\u689d\u4ef6",level:2},{value:"\u932f\u8aa4\u4e8c \u76f4\u63a5\u4fee\u6539 state",id:"\u932f\u8aa4\u4e8c-\u76f4\u63a5\u4fee\u6539-state",level:2},{value:"\u932f\u8aa4\u4e09 \u6c92\u6709\u7d66 list \u7684\u6bcf\u4e00\u500b item \u52a0\u4e0a key",id:"\u932f\u8aa4\u4e09-\u6c92\u6709\u7d66-list-\u7684\u6bcf\u4e00\u500b-item-\u52a0\u4e0a-key",level:2},{value:"\u932f\u8aa4\u56db \u5728 setState \u5f8c\uff0c\u4ee5\u70ba state \u5df2\u7d93\u66f4\u65b0",id:"\u932f\u8aa4\u56db-\u5728-setstate-\u5f8c\u4ee5\u70ba-state-\u5df2\u7d93\u66f4\u65b0",level:2},{value:"\u932f\u8aa4\u4e94 \u6c92\u6709\u521d\u59cb\u5316 input \u7684 value",id:"\u932f\u8aa4\u4e94-\u6c92\u6709\u521d\u59cb\u5316-input-\u7684-value",level:2},{value:"\u932f\u8aa4\u516d \u76f4\u63a5\u5c07 useEffect \u8a2d\u5b9a\u70ba async",id:"\u932f\u8aa4\u516d-\u76f4\u63a5\u5c07-useeffect-\u8a2d\u5b9a\u70ba-async",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("profile",{title:"Common Beginner Mistakes with React",url:"https://www.joshwcomeau.com/react/common-beginner-mistakes",author:"Josh W Comeau",level:"beginner",category:["react/next"]}),(0,s.kt)("p",null,"\u9019\u7bc7\u6587\u7ae0\u5217\u51fa\u4e86 9 \u9805 React \u958b\u767c\u8005\u5e38\u72af\u7684\u932f\u8aa4\uff0c\u4e26\u4e14\u63d0\u4f9b\u4e86\u89e3\u6c7a\u65b9\u6cd5\u3002\u6211\u5f9e\u7576\u4e2d\u64f7\u53d6\u4e86 6 \u9805\uff0c\u5176\u4e2d\u5305\u62ec\u4e86 (1) \u4f7f\u7528 0 \u4f5c\u70ba JSX \u7684\u5224\u65b7\u689d\u4ef6\uff0c(2) \u76f4\u63a5\u4fee\u6539 state\uff0c(3) \u6c92\u6709\u7d66 list \u7684\u6bcf\u4e00\u500b item \u52a0\u4e0a key\uff0c(4) \u5728 setState \u5f8c\uff0c\u4f7f\u7528\u820a\u7684 state \u503c\uff0c(5) \u5c07 input \u7684 value \u521d\u59cb\u5316\u70ba undefined\uff0c(6) \u8aa4\u5c07 async promise \u7576\u4f5c useEffect \u7684 return function\u3002"),(0,s.kt)("h2",{id:"\u932f\u8aa4\u4e00-\u4f7f\u7528-0-\u4f5c\u70ba\u6e32\u67d3-jsx-\u7684\u5224\u65b7\u689d\u4ef6"},"\u932f\u8aa4\u4e00 \u4f7f\u7528 0 \u4f5c\u70ba\u6e32\u67d3 JSX \u7684\u5224\u65b7\u689d\u4ef6"),(0,s.kt)("p",null,'\u56e0\u70ba 0 \u8207\u5176\u4ed6 falsy \u503c (\u4f8b\u5982 null, undefined, false, NaN, "") \u4e0d\u540c\uff0c\u53ef\u4ee5\u5728 JSX \u4e2d\u88ab\u76f4\u63a5\u4f7f\u7528\u3002\u6240\u4ee5\u5982\u679c\u4f7f\u7528 0 \u4f5c\u70ba\u6e32\u67d3\u5143\u4ef6\u7684\u5224\u65b7\u689d\u4ef6\u6642\uff0c\u5c31\u975e\u5e38\u5bb9\u6613\u767c\u751f\u932f\u8aa4\u3002'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",0:!0,className:"language-jsx",metastring:'title="\u274c \u4f7f\u7528 0 \u4f5c\u70ba\u6e32\u67d3 JSX \u7684\u5224\u65b7\u689d\u4ef6"',title:'"\u274c',"\u4f7f\u7528":!0,"\u4f5c\u70ba\u6e32\u67d3":!0,JSX:!0,'\u7684\u5224\u65b7\u689d\u4ef6"':!0},"<div>{items.length && <ShoppingList items={items} />}</div>\n")),(0,s.kt)("p",null,"\u89e3\u6c7a\u65b9\u6cd5\u6709\u5169\u7a2e\uff1a\u7b2c\u4e00\u7a2e\u662f\u5c07\u6e32\u67d3\u689d\u4ef6\u5f37\u5236\u8f49\u70ba boolean\uff0c\u7b2c\u4e8c\u7a2e\u662f\u4f7f\u7528\u4e09\u5143\u904b\u7b97\u5b50\u4f86\u6e32\u67d3\u5143\u4ef6\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u2705 \u5c07\u5224\u65b7\u689d\u4ef6\u8f49\u70ba boolean"',title:'"\u2705',"\u5c07\u5224\u65b7\u689d\u4ef6\u8f49\u70ba":!0,'boolean"':!0},"<div>{items.length > 0 && <ShoppingList items={items} />}</div>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u2705 \u6539\u4f7f\u7528\u4e09\u5143\u904b\u7b97\u5b50"',title:'"\u2705','\u6539\u4f7f\u7528\u4e09\u5143\u904b\u7b97\u5b50"':!0},"<div>{items.length ? <ShoppingList items={items} /> : null}</div>\n")),(0,s.kt)("h2",{id:"\u932f\u8aa4\u4e8c-\u76f4\u63a5\u4fee\u6539-state"},"\u932f\u8aa4\u4e8c \u76f4\u63a5\u4fee\u6539 state"),(0,s.kt)("p",null,"\u7531\u65bc\u76f4\u63a5\u4fee\u6539 (mutate) object \u6216 array \u7684\u503c\uff0c\u5176 reference \u4e26\u4e0d\u6703\u6539\u8b8a\uff0c\u6240\u4ee5 React \u4e26\u4e0d\u6703\u91cd\u65b0\u6e32\u67d3\u5143\u4ef6\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u274c \u76f4\u63a5\u4fee\u6539 state"',title:'"\u274c',"\u76f4\u63a5\u4fee\u6539":!0,'state"':!0},"const [items, setItems] = useState([]);\n\nfunction addItem(newItem) {\n  items.push(newItem); // only mutates the state\n  setItems(items); // `items` is still the same reference\n}\n")),(0,s.kt)("p",null,"\u89e3\u6c7a\u65b9\u6cd5\u662f\u4f7f\u7528\u5168\u65b0\u7684 object \u6216 array \u4f86\u66f4\u65b0 state\uff0c\u4f8b\u5982\u4f7f\u7528\u5c55\u958b\u904b\u7b97\u5b50\u4f86\u8907\u88fd object \u6216 array\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u2705 \u4f7f\u7528\u5c55\u958b\u904b\u7b97\u5b50\u4f86\u8907\u88fd object \u6216 array"',title:'"\u2705',"\u4f7f\u7528\u5c55\u958b\u904b\u7b97\u5b50\u4f86\u8907\u88fd":!0,object:!0,"\u6216":!0,'array"':!0},"const [items, setItems] = useState([]);\n\nfunction addItem(newItem) {\n  setItems([...items, newItem]);\n}\n")),(0,s.kt)("h2",{id:"\u932f\u8aa4\u4e09-\u6c92\u6709\u7d66-list-\u7684\u6bcf\u4e00\u500b-item-\u52a0\u4e0a-key"},"\u932f\u8aa4\u4e09 \u6c92\u6709\u7d66 list \u7684\u6bcf\u4e00\u500b item \u52a0\u4e0a key"),(0,s.kt)("p",null,"React \u4f9d\u9760 key prop \u4f86\u8fa8\u8b58 map \u4e2d\u7684\u6bcf\u500b item\uff0c\u4e26\u4e14\u512a\u5316\u6e32\u67d3\u7684\u904e\u7a0b\u3002\u5982\u679c\u6c92\u6709\u63d0\u4f9b key prop \u6216\u4e0d\u662f\u552f\u4e00\u7684\uff0cReact \u53ef\u80fd\u6703\u4e0d\u5fc5\u8981\u5730\u92b7\u6bc0\u4e26\u91cd\u65b0\u5efa\u7acb\u5143\u4ef6\uff0c\u9019\u53ef\u80fd\u6703\u5c0d\u6548\u80fd\u9020\u6210\u8ca0\u9762\u5f71\u97ff\uff0c\u4e26\u4e14\u7522\u751f\u932f\u8aa4\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u274c \u6c92\u6709\u7d66 list \u7684\u6bcf\u4e00\u500b item \u52a0\u4e0a key"',title:'"\u274c',"\u6c92\u6709\u7d66":!0,list:!0,"\u7684\u6bcf\u4e00\u500b":!0,item:!0,"\u52a0\u4e0a":!0,'key"':!0},"<ul>\n  {items.map((item) => {\n    return <li>{item}</li>;\n  })}\n</ul>\n")),(0,s.kt)("p",null,"\u89e3\u6c7a\u65b9\u6cd5\u5c31\u662f\u7d66\u6bcf\u500b item \u52a0\u4e0a\u552f\u4e00\u7684 key prop\uff0c\u6211\u5011\u53ef\u4ee5\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"crypto.randomUUID()")," \u4f86\u7522\u751f\u552f\u4e00\u7684 key\u3002\u4f46\u662f\u6211\u5011\u61c9\u8a72\u5728 list \u521d\u59cb\u5316\u7684\u6642\u5019\u5c31\u7522\u751f\u597d key\uff0c\u800c\u4e0d\u662f\u5728 map \u7684\u6642\u5019\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u274c \u5728 map \u7684\u6642\u5019\u7522\u751f key"',title:'"\u274c',"\u5728":!0,map:!0,"\u7684\u6642\u5019\u7522\u751f":!0,'key"':!0},"<ul>\n  {items.map((item) => {\n    return <li key={crypto.randomUUID()}>{item}</li>;\n  })}\n</ul>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u2705 \u7d66\u6bcf\u500b item \u52a0\u4e0a\u552f\u4e00\u7684 key prop"',title:'"\u2705',"\u7d66\u6bcf\u500b":!0,item:!0,"\u52a0\u4e0a\u552f\u4e00\u7684":!0,key:!0,'prop"':!0},"const [items, setItems] = useState([]);\n\nfunction addItem(newItem) {\n  setItems([\n    ...items,\n    {\n      id: crypto.randomUUID(),\n      value: newItem,\n    },\n  ]);\n}\n\n<ul>\n  {items.map((item) => {\n    return <li key={item.id}>{item.value}</li>;\n  })}\n</ul>;\n")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"\u53e6\u5916\uff0cReact \u4e0d\u5efa\u8b70\u4f7f\u7528\u9663\u5217\u7684 index \u4f5c\u70ba key prop\uff0c\u56e0\u70ba\u9019\u53ef\u80fd\u6703\u5c0e\u81f4\u6548\u80fd\u554f\u984c\u548c\u610f\u5916\u7684\u932f\u8aa4\u3002\u5230 ",(0,s.kt)("a",{parentName:"p",href:"https://react.dev/learn/rendering-lists#why-does-react-need-keys"},"React Docs - rendering lists")," \u67e5\u770b\u66f4\u591a\u8cc7\u8a0a\u3002")),(0,s.kt)("h2",{id:"\u932f\u8aa4\u56db-\u5728-setstate-\u5f8c\u4ee5\u70ba-state-\u5df2\u7d93\u66f4\u65b0"},"\u932f\u8aa4\u56db \u5728 setState \u5f8c\uff0c\u4ee5\u70ba state \u5df2\u7d93\u66f4\u65b0"),(0,s.kt)("p",null,"\u56e0\u70ba state \u662f\u6bcf\u500b\u6e32\u67d3\u7684\u5feb\u7167\uff08snapshot\uff09\uff0c\u6240\u4ee5\u7576\u4f60\u5728\u51fd\u5f0f\u4e2d\u540c\u6642\u4f7f\u7528 setState \u8207 state \u6642\uff0c\u4f60\u5be6\u969b\u4e0a\u4f7f\u7528\u7684\u662f\u820a\u7684 state \u5feb\u7167\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u274c \u5728 setState \u5f8c\uff0c\u4ee5\u70ba state \u5df2\u7d93\u66f4\u65b0"',title:'"\u274c',"\u5728":!0,setState:!0,"\u5f8c\uff0c\u4ee5\u70ba":!0,state:!0,'\u5df2\u7d93\u66f4\u65b0"':!0},"const [count, setCount] = useState(0);\n\nfunction handleClick() {\n  setCount((prev) => prev + 1);\n  console.log(count); // count is still 0\n\n  setTimeout(() => {\n    console.log(count); // count is still 0\n  }, 1000);\n}\n")),(0,s.kt)("p",null,"\u89e3\u6c7a\u65b9\u6cd5\u662f\u53e6\u5916\u5b9a\u7fa9\u4e00\u500b\u8b8a\u6578\u4f86\u5132\u5b58\u66f4\u65b0\u5f8c\u7684 state\uff0c\u4f7f\u7528\u8a72\u8b8a\u6578\u4f86\u66f4\u65b0 state \u4e26\u7528\u65bc\u5176\u4ed6\u7684\u64cd\u4f5c\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u2705 \u53e6\u5916\u5b9a\u7fa9\u4e00\u500b\u8b8a\u6578\u4f86\u5132\u5b58\u66f4\u65b0\u5f8c\u7684 state"',title:'"\u2705',"\u53e6\u5916\u5b9a\u7fa9\u4e00\u500b\u8b8a\u6578\u4f86\u5132\u5b58\u66f4\u65b0\u5f8c\u7684":!0,'state"':!0},"const [count, setCount] = useState(0);\n\nfunction handleClick() {\n  const newCount = count + 1;\n  setCount(newCount);\n  console.log(newCount); // newCount is 1\n}\n")),(0,s.kt)("h2",{id:"\u932f\u8aa4\u4e94-\u6c92\u6709\u521d\u59cb\u5316-input-\u7684-value"},"\u932f\u8aa4\u4e94 \u6c92\u6709\u521d\u59cb\u5316 input \u7684 value"),(0,s.kt)("p",null,"\u5982\u679c\u6c92\u6709\u521d\u59cb\u5316 input \u7684 value\uff0cReact \u6703\u5c07\u5176\u8996\u70ba uncontrolled component\uff0c\u4e26\u4e14\u4e0d\u6703\u5c0d\u5176\u9032\u884c\u7ba1\u7406\u3002\u4f46\u662f\u7576\u4f60\u5728\u4e4b\u5f8c\u5c07 input \u7684 value \u8a2d\u5b9a\u70ba\u4e00\u500b\u975e undefined \u7684\u503c\u6642\uff0cReact \u5c31\u6703\u5c07\u5176\u8996\u70ba controlled component\u3002\u9019\u500b\u6642\u5019 React \u5c31\u6703\u8df3\u51fa\u932f\u8aa4\u8a0a\u606f\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"Warning: A component is changing an uncontrolled input to be controlled."),"\u3002\u4e00\u500b input \u5f9e uncontrolled \u5207\u63db\u5230 controlled \u6216\u662f\u53cd\u904e\u4f86\uff0c\u90fd\u6703\u5c0e\u81f4\u610f\u60f3\u4e0d\u5230\u7684\u884c\u70ba\u548c\u932f\u8aa4\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u274c \u6c92\u6709\u521d\u59cb\u5316 input \u7684 value"',title:'"\u274c',"\u6c92\u6709\u521d\u59cb\u5316":!0,input:!0,"\u7684":!0,'value"':!0},"const [value, setValue] = useState();\n\n<input value={value} onChange={(e) => setValue(e.target.value)} />;\n")),(0,s.kt)("p",null,"\u89e3\u6c7a\u65b9\u6cd5\u5f88\u7c21\u55ae\uff0c\u53ea\u8981\u5728 useState \u4e2d\u521d\u59cb\u5316\u4e00\u500b\u7a7a\u5b57\u4e32\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u2705 \u521d\u59cb\u5316 input \u7684 value"',title:'"\u2705',"\u521d\u59cb\u5316":!0,input:!0,"\u7684":!0,'value"':!0},'const [value, setValue] = useState("");\n\n<input value={value} onChange={(e) => setValue(e.target.value)} />;\n')),(0,s.kt)("h2",{id:"\u932f\u8aa4\u516d-\u76f4\u63a5\u5c07-useeffect-\u8a2d\u5b9a\u70ba-async"},"\u932f\u8aa4\u516d \u76f4\u63a5\u5c07 useEffect \u8a2d\u5b9a\u70ba async"),(0,s.kt)("p",null,"\u5982\u679c\u76f4\u63a5\u5c07 useEffect \u8a2d\u5b9a\u70ba async\uff0creturn function \u5c31\u6703\u8b8a\u6210\u4e00\u500b promise\uff0c\u800c React \u53ea\u671f\u671b\u6211\u5011\u56de\u50b3\u4e00\u500b\u6e05\u9664\u51fd\u5f0f\u6216\u662f undefined\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u274c \u76f4\u63a5\u5c07 useEffect \u8a2d\u5b9a\u70ba async"',title:'"\u274c',"\u76f4\u63a5\u5c07":!0,useEffect:!0,"\u8a2d\u5b9a\u70ba":!0,'async"':!0},"useEffect(async () => {\n  const url = `${API}/get-profile?id=${userId}`;\n  const res = await fetch(url);\n  const json = await res.json();\n  setUser(json);\n}, [userId]);\n")),(0,s.kt)("p",null,"\u89e3\u6c7a\u65b9\u6cd5\u662f\u5728 useEffect \u4e2d\u5efa\u7acb\u4e00\u500b async function\uff0c\u4e26\u4e14\u76f4\u63a5\u547c\u53eb\u5b83\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u2705 \u5728 useEffect \u4e2d\u5efa\u7acb\u4e00\u500b async function"',title:'"\u2705',"\u5728":!0,useEffect:!0,"\u4e2d\u5efa\u7acb\u4e00\u500b":!0,async:!0,'function"':!0},"useEffect(() => {\n  async function fetchUser() {\n    const url = `${API}/get-profile?id=${userId}`;\n    const res = await fetch(url);\n    const json = await res.json();\n    setUser(json);\n  }\n\n  fetchUser();\n\n  return () => {\n    // cleanup if needed\n  };\n}, [userId]);\n")))}m.isMDXComponent=!0}}]);