"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(o,".").concat(u)]||d[u]||m[u]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={id:"has-selector",title:":has Selector",description:"\u672c\u6587\u4ecb\u7d39\u4e86 CSS :has \u9078\u64c7\u5668\uff0c\u9019\u662f\u4e00\u500b\u53ef\u4ee5\u900f\u904e\u5b50\u5143\u7d20\u4f86\u6539\u8b8a\u7236\u5143\u7d20\u7684\u6a23\u5f0f\u7684\u9078\u64c7\u5668\u3002",sidebar_label:"The :has Selector",hide_title:!0,hide_table_of_contents:!1,tags:["css","selector"],draft:!1,last_updated:new Date("2022-10-09T00:00:00.000Z")},i=void 0,s={unversionedId:"frontend/html-css/has-selector",id:"frontend/html-css/has-selector",title:":has Selector",description:"\u672c\u6587\u4ecb\u7d39\u4e86 CSS :has \u9078\u64c7\u5668\uff0c\u9019\u662f\u4e00\u500b\u53ef\u4ee5\u900f\u904e\u5b50\u5143\u7d20\u4f86\u6539\u8b8a\u7236\u5143\u7d20\u7684\u6a23\u5f0f\u7684\u9078\u64c7\u5668\u3002",source:"@site/docs/frontend/html-css/2022-10-09-has-selector.mdx",sourceDirName:"frontend/html-css",slug:"/frontend/html-css/has-selector",permalink:"/frontend/html-css/has-selector",draft:!1,editUrl:"https://github.com/windsuzu/windsuzu.github.io/tree/master/docs/frontend/html-css/2022-10-09-has-selector.mdx",tags:[{label:"css",permalink:"/tags/css"},{label:"selector",permalink:"/tags/selector"}],version:"current",lastUpdatedAt:1678629868,formattedLastUpdatedAt:"2023\u5e743\u670812\u65e5",frontMatter:{id:"has-selector",title:":has Selector",description:"\u672c\u6587\u4ecb\u7d39\u4e86 CSS :has \u9078\u64c7\u5668\uff0c\u9019\u662f\u4e00\u500b\u53ef\u4ee5\u900f\u904e\u5b50\u5143\u7d20\u4f86\u6539\u8b8a\u7236\u5143\u7d20\u7684\u6a23\u5f0f\u7684\u9078\u64c7\u5668\u3002",sidebar_label:"The :has Selector",hide_title:!0,hide_table_of_contents:!1,tags:["css","selector"],draft:!1,last_updated:"2022-10-09T00:00:00.000Z"},sidebar:"html-css",previous:{title:"\ud83d\udce2 README",permalink:"/frontend/html-css/intro"},next:{title:"The Orton Effect",permalink:"/frontend/html-css/the-orton-effect"}},o={},p=[{value:"Usage",id:"usage",level:2},{value:"Basic",id:"basic",level:3},{value:"Complex",id:"complex",level:3},{value:"Multiple Conditions",id:"multiple-conditions",level:3},{value:"Use parent to select child",id:"use-parent-to-select-child",level:3},{value:"Example",id:"example",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("profile",{title:"CSS :has A Parent Selector And It Is Better Than I Ever Could Have Hoped For",url:"https://blog.webdevsimplified.com/2022-09/css-has-selector/",author:"Web Dev Simplified",level:"beginner",category:["html/css"]}),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8981",(0,r.kt)("highlight",null,"\u900f\u904e\u5b50\u5143\u7d20\u4f86\u6539\u8b8a\u7236\u5143\u7d20\u7684\u6a23\u5f0f"),"\uff0c\u90a3\u9ebc\u4f60\u53ef\u4ee5\u4f7f\u7528\u6700\u8fd1 CSS \u91cb\u51fa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},":has")," \u9078\u64c7\u5668\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},":has")," is a parent selector just released by CSS at the end of August 2022 in Chrome. It can be used to select parent elements that contain some specific child element. It can also be used with complex selectors, multiple selectors, or as a way to select some other elements.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4ecb\u7d39\u56db\u7a2e\u4e0d\u540c\u7684\u4f7f\u7528\u65b9\u5f0f\uff0c\u5206\u5225\u662f\u57fa\u672c\u3001\u8907\u96dc\u3001\u8907\u6578\u689d\u4ef6\u3001\u4ee5\u53ca\u4f7f\u7528\u7236\u5143\u7d20\u4f86\u9078\u64c7\u5b50\u5143\u7d20\u3002"),(0,r.kt)("h3",{id:"basic"},"Basic"),(0,r.kt)("p",null,"For example, we want to add some ",(0,r.kt)("inlineCode",{parentName:"p"},"margin-bottom")," to elements with the class of ",(0,r.kt)("inlineCode",{parentName:"p"},"heading"),". But we only want to select those ",(0,r.kt)("inlineCode",{parentName:"p"},"heading")," that contain any sub-elements with the class of ",(0,r.kt)("inlineCode",{parentName:"p"},"subtitle"),"."),(0,r.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff0c\u6211\u5011\u60f3\u5c0d ",(0,r.kt)("inlineCode",{parentName:"p"},"heading")," \u52a0\u4e0a\u984f\u8272\uff0c\u4f46\u662f\u6211\u5011\u53ea\u60f3\u8981\u9078\u64c7\u90a3\u4e9b\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"subtitle")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"heading"),"\u3002\u6211\u5011\u53ef\u4ee5\u9019\u6a23\u5beb\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".heading:has(.subtitle) {\n  margin-bottom: 1rem;\n}\n")),(0,r.kt)("h3",{id:"complex"},"Complex"),(0,r.kt)("p",null,"\u6211\u5011\u4e5f\u53ef\u4ee5\u52a0\u5f37\u641c\u5c0b\u689d\u4ef6\uff0c\u4f8b\u5982\u9078\u64c7\u5305\u542b",(0,r.kt)("strong",{parentName:"p"},"\u76f4\u63a5\u5b50\u5143\u7d20 (>)")," \u70ba ",(0,r.kt)("inlineCode",{parentName:"p"},"subtitle")," \u4e26\u4e14\u64c1\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"strong")," \u5143\u7d20\uff0c\u800c\u4e14 ",(0,r.kt)("inlineCode",{parentName:"p"},"strong")," \u5143\u7d20\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," \u9084\u70ba ",(0,r.kt)("inlineCode",{parentName:"p"},"accent")," \u7684",(0,r.kt)("inlineCode",{parentName:"p"},"heading"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".heading:has(> .subtitle strong#accent) {\n  margin-bottom: 1rem;\n}\n")),(0,r.kt)("h3",{id:"multiple-conditions"},"Multiple Conditions"),(0,r.kt)("p",null,"\u6211\u5011\u4e5f\u53ef\u4ee5\u4f7f\u7528\u9017\u865f\u4f86\u52a0\u5165\u591a\u500b (||) \u689d\u4ef6\uff0c\u4f8b\u5982\u9078\u64c7\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"subtitle")," \u6216\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"heading"),"\u3002\u6216\u662f\u5229\u7528\u591a\u500b ",(0,r.kt)("inlineCode",{parentName:"p"},":has")," \u4f86\u9054\u6210 (&&) \u7684\u6548\u679c\uff0c\u4f8b\u5982\u9078\u64c7\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"subtitle")," \u4e26\u4e14\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"heading"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* || */\n.heading:has(.subtitle, p)\n/* && */\n.heading:has(.subtitle):has(p)\n")),(0,r.kt)("h3",{id:"use-parent-to-select-child"},"Use parent to select child"),(0,r.kt)("p",null,"\u6211\u5011\u4e5f\u53ef\u4ee5\u4f7f\u7528\u7236\u5143\u7d20\u4f86\u9078\u64c7\u5b50\u5143\u7d20\uff0c\u4f8b\u5982\u9078\u64c7\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"subtitle")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"heading"),"\uff0c\u4e26\u4e14\u5c0d\u5176\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," \u52a0\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"color: red"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".heading:has(.subtitle) p {\n  color: red;\n}\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"\u5be6\u969b\u5229\u7528 Code Editor \u4f86\u770b\u770b ",(0,r.kt)("inlineCode",{parentName:"p"},":has")," \u9078\u64c7\u5668\u7684\u6548\u679c\u5427\uff01"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},'const Heading = styled.h3`\n  :has(.subtitle) {\n    color: red;\n  }\n  :has(> .subtitle strong#accent) {\n    color: blue;\n  }\n  :has(.subtitle):has(p) {\n    color: green;\n  }\n  :has(.subtitle) p {\n    color: orange;\n  }\n`;\n\nrender(\n  <>\n    <Heading>\n      Heading 1<span className="subtitle">Yes</span>\n    </Heading>\n    <Heading>\n      Heading 2\n      <span className="subtitle">\n        <strong id="accent">Wow</strong>\n      </span>\n    </Heading>\n    <Heading>\n      Heading 3<span className="subtitle">Hey</span>\n      <p>Random text</p>\n    </Heading>\n  </>\n);\n')))}d.isMDXComponent=!0}}]);