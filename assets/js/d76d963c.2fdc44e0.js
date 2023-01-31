"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3643],{3905:(t,e,o)=>{o.d(e,{Zo:()=>u,kt:()=>d});var r=o(7294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var c=r.createContext({}),p=function(t){var e=r.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},s="mdxType",b={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var o=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=p(o),f=n,d=s["".concat(c,".").concat(f)]||s[f]||b[f]||i;return o?r.createElement(d,a(a({ref:e},u),{},{components:o})):r.createElement(d,a({ref:e},u))}));function d(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=o.length,a=new Array(i);a[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[s]="string"==typeof t?t:n,a[1]=l;for(var p=2;p<i;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},6103:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const i={title:"\u5982\u4f55\u6d3b\u7528 Copilot\uff0c\u52a0\u5feb\u958b\u767c\u6548\u7387",authors:["jay"],tags:["copilot","github","vscode"],keywords:["copilot","github","vscode"],hide_table_of_contents:!1,draft:!1},a=void 0,l={permalink:"/blog/2023/01/29/work-with-copilot",editUrl:"https://github.com/windsuzu/windsuzu.github.io/tree/master/blog/2023-01-29-work-with-copilot.mdx",source:"@site/blog/2023-01-29-work-with-copilot.mdx",title:"\u5982\u4f55\u6d3b\u7528 Copilot\uff0c\u52a0\u5feb\u958b\u767c\u6548\u7387",description:"Copilot \u662f\u7531 GitHub \u63a8\u51fa\u7684 AI \u8f14\u52a9\u5de5\u5177\uff0c\u7531 OpenAI Codex \u9a45\u52d5 (\u53ef\u4ee5\u8aaa\u662f ChatGPT \u7684\u597d\u9ebb\u5409)\uff0c\u53ef\u4ee5\u5354\u52a9\u7a0b\u5f0f\u958b\u767c\u3002\u6211\u5df2\u7d93\u4f7f\u7528\u4e86\u63a5\u8fd1\u4e00\u5e74\u7684\u6642\u9593\uff0c\u6211\u8a8d\u70ba\u5b83\u53ef\u4ee5\u5e6b\u52a9\u65b0\u624b\u63d0\u5347\u958b\u767c\u6280\u5de7\uff0c\u800c\u4e14\u53ef\u4ee5\u5e6b\u52a9\u958b\u767c\u8005\u63d0\u5347\u6548\u7387\uff0c\u4f8b\u5982\u7701\u4e0b\u91cd\u8907\u6027\u7684\u5de5\u4f5c\u3001\u81ea\u52d5\u7522\u751f\u6e2c\u8a66\u7a0b\u5f0f\u78bc\u7b49\u7b49\u3002\u751a\u81f3\u53ef\u4ee5\u5e6b\u5fd9\u7de8\u5beb\u6587\u4ef6\u9084\u6709\u90e8\u843d\u683c\u6587\u7ae0\uff0c\u9019\u7bc7\u6587\u7ae0\u5c31\u662f\u5728 Copilot \u7684\u5354\u52a9\u4e0b\u5b8c\u6210\u7684\u3002",date:"2023-01-29T00:00:00.000Z",formattedDate:"2023\u5e741\u670829\u65e5",tags:[{label:"copilot",permalink:"/blog/tags/copilot"},{label:"github",permalink:"/blog/tags/github"},{label:"vscode",permalink:"/blog/tags/vscode"}],readingTime:9.115,hasTruncateMarker:!0,authors:[{name:"Jay",title:"Front End Engineer",url:"https://github.com/windsuzu",imageURL:"https://github.com/windsuzu.png",key:"jay"}],frontMatter:{title:"\u5982\u4f55\u6d3b\u7528 Copilot\uff0c\u52a0\u5feb\u958b\u767c\u6548\u7387",authors:["jay"],tags:["copilot","github","vscode"],keywords:["copilot","github","vscode"],hide_table_of_contents:!1,draft:!1}},c={authorsImageUrls:[void 0]},p=[],u={toc:p};function s(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Copilot \u662f\u7531 GitHub \u63a8\u51fa\u7684 AI \u8f14\u52a9\u5de5\u5177\uff0c\u7531 OpenAI Codex \u9a45\u52d5 (\u53ef\u4ee5\u8aaa\u662f ChatGPT \u7684\u597d\u9ebb\u5409)\uff0c\u53ef\u4ee5\u5354\u52a9\u7a0b\u5f0f\u958b\u767c\u3002\u6211\u5df2\u7d93\u4f7f\u7528\u4e86\u63a5\u8fd1\u4e00\u5e74\u7684\u6642\u9593\uff0c\u6211\u8a8d\u70ba\u5b83\u53ef\u4ee5\u5e6b\u52a9\u65b0\u624b\u63d0\u5347\u958b\u767c\u6280\u5de7\uff0c\u800c\u4e14\u53ef\u4ee5\u5e6b\u52a9\u958b\u767c\u8005\u63d0\u5347\u6548\u7387\uff0c\u4f8b\u5982\u7701\u4e0b\u91cd\u8907\u6027\u7684\u5de5\u4f5c\u3001\u81ea\u52d5\u7522\u751f\u6e2c\u8a66\u7a0b\u5f0f\u78bc\u7b49\u7b49\u3002\u751a\u81f3\u53ef\u4ee5\u5e6b\u5fd9\u7de8\u5beb\u6587\u4ef6\u9084\u6709\u90e8\u843d\u683c\u6587\u7ae0\uff0c\u9019\u7bc7\u6587\u7ae0\u5c31\u662f\u5728 Copilot \u7684\u5354\u52a9\u4e0b\u5b8c\u6210\u7684\u3002"),(0,n.kt)("p",null,"\u5728\u958b\u59cb\u524d\uff0c\u53ef\u4ee5\u5148\u5230 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/features/copilot/"},"Copilot")," \u4e86\u89e3\u5b98\u65b9\u4ecb\u7d39\uff0c\u4e26\u6309\u7167 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/zh/copilot"},"Copilot Docs")," \u7684\u6307\u793a\u555f\u7528 60 \u5929\u514d\u8cbb\u8a66\u7528\uff0c\u5b89\u88dd\u5230 IDE\uff08\u5982 VS Code\u3001JetBrains \u7b49\uff09\u4e0a\u3002\u672c\u6587\u5c07\u4ecb\u7d39 Copilot \u7684\u57fa\u672c\u529f\u80fd\uff0c\u4e26\u8209\u51fa\u4e00\u4e9b\u5be6\u969b\u7684\u4f8b\u5b50\u4f86\u8aaa\u660e\u70ba\u4f55 Copilot \u53ef\u4ee5\u63d0\u5347\u958b\u767c\u6548\u7387\u3002"))}s.isMDXComponent=!0}}]);