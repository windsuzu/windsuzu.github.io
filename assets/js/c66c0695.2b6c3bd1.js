"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3647],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),f=a,m=s["".concat(p,".").concat(f)]||s[f]||c[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={id:"use-imperative-handle",title:"useImperativeHandle",description:"\u672c\u6587\u5c07\u4ecb\u7d39 useImperativeHandle \u9019\u500b hook\uff0c\u5b83\u53ef\u4ee5\u8b93\u6211\u5011\u6514\u622a\u7236\u5143\u4ef6\u50b3\u905e\u7684 ref\uff0c\u4e26\u56de\u50b3\u4e00\u7d44\u65b0\u7684\u65b9\u6cd5\u7d66\u8a72 ref\u3002\u9019\u500b hook \u901a\u5e38\u6703\u642d\u914d forwardRef \u4e00\u8d77\u4f7f\u7528\uff0c\u8b93\u6211\u5011\u5728\u81ea\u5b9a\u7fa9\u5143\u4ef6\u4e2d\u53d6\u5f97 DOM reference\uff0c\u4e26\u4e14\u53ef\u4ee5\u5728\u7236\u5143\u4ef6\u4e2d\u4f7f\u7528\u5b50\u5143\u4ef6\u7684\u51fd\u5f0f\u3002",sidebar_label:"\ud83d\udfe9 useImperativeHandle",hide_title:!0,hide_table_of_contents:!1,tags:["react","forwardRef","useImperativeHandle"],draft:!1,last_updated:new Date("2022-09-24T00:00:00.000Z")},i=void 0,l={unversionedId:"frontend/react-next/use-imperative-handle",id:"frontend/react-next/use-imperative-handle",title:"useImperativeHandle",description:"\u672c\u6587\u5c07\u4ecb\u7d39 useImperativeHandle \u9019\u500b hook\uff0c\u5b83\u53ef\u4ee5\u8b93\u6211\u5011\u6514\u622a\u7236\u5143\u4ef6\u50b3\u905e\u7684 ref\uff0c\u4e26\u56de\u50b3\u4e00\u7d44\u65b0\u7684\u65b9\u6cd5\u7d66\u8a72 ref\u3002\u9019\u500b hook \u901a\u5e38\u6703\u642d\u914d forwardRef \u4e00\u8d77\u4f7f\u7528\uff0c\u8b93\u6211\u5011\u5728\u81ea\u5b9a\u7fa9\u5143\u4ef6\u4e2d\u53d6\u5f97 DOM reference\uff0c\u4e26\u4e14\u53ef\u4ee5\u5728\u7236\u5143\u4ef6\u4e2d\u4f7f\u7528\u5b50\u5143\u4ef6\u7684\u51fd\u5f0f\u3002",source:"@site/docs/frontend/react-next/2022-09-24-use-imperative-handle.mdx",sourceDirName:"frontend/react-next",slug:"/frontend/react-next/use-imperative-handle",permalink:"/frontend/react-next/use-imperative-handle",draft:!1,editUrl:"https://github.com/windsuzu/windsuzu.github.io/tree/master/docs/frontend/react-next/2022-09-24-use-imperative-handle.mdx",tags:[{label:"react",permalink:"/tags/react"},{label:"forwardRef",permalink:"/tags/forward-ref"},{label:"useImperativeHandle",permalink:"/tags/use-imperative-handle"}],version:"current",lastUpdatedAt:1679221146,formattedLastUpdatedAt:"2023\u5e743\u670819\u65e5",frontMatter:{id:"use-imperative-handle",title:"useImperativeHandle",description:"\u672c\u6587\u5c07\u4ecb\u7d39 useImperativeHandle \u9019\u500b hook\uff0c\u5b83\u53ef\u4ee5\u8b93\u6211\u5011\u6514\u622a\u7236\u5143\u4ef6\u50b3\u905e\u7684 ref\uff0c\u4e26\u56de\u50b3\u4e00\u7d44\u65b0\u7684\u65b9\u6cd5\u7d66\u8a72 ref\u3002\u9019\u500b hook \u901a\u5e38\u6703\u642d\u914d forwardRef \u4e00\u8d77\u4f7f\u7528\uff0c\u8b93\u6211\u5011\u5728\u81ea\u5b9a\u7fa9\u5143\u4ef6\u4e2d\u53d6\u5f97 DOM reference\uff0c\u4e26\u4e14\u53ef\u4ee5\u5728\u7236\u5143\u4ef6\u4e2d\u4f7f\u7528\u5b50\u5143\u4ef6\u7684\u51fd\u5f0f\u3002",sidebar_label:"\ud83d\udfe9 useImperativeHandle",hide_title:!0,hide_table_of_contents:!1,tags:["react","forwardRef","useImperativeHandle"],draft:!1,last_updated:"2022-09-24T00:00:00.000Z"},sidebar:"react-next",previous:{title:"\ud83d\udfe9 Keeping State Local",permalink:"/frontend/react-next/keeping-state-local"},next:{title:"\ud83d\udfe8 State in URLSearchParams",permalink:"/frontend/react-next/state-in-urlsearchparams"}},p={},d=[{value:"When to use <code>React.forwardRef</code>",id:"when-to-use-reactforwardref",level:2},{value:"When to use <code>useImperativeHandle</code>",id:"when-to-use-useimperativehandle",level:2},{value:"Summary",id:"summary",level:2}],u={toc:d};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("profile",{title:"When to use \u201cuseImperativeHandle\u201d and \u201cforwardRefs\u201d in React 18",url:"https://betterprogramming.pub/when-to-use-useimperativehandle-and-forwardrefs-in-react-18-89cce42b3309",author:"Sameer Kumar",level:"beginner",category:["react/next"]}),(0,a.kt)("p",null,"\u672c\u6587\u5c07\u4ecb\u7d39 ",(0,a.kt)("inlineCode",{parentName:"p"},"useImperativeHandle")," \u9019\u500b hook\uff0c\u5b83\u53ef\u4ee5\u8b93\u6211\u5011\u6514\u622a\u7236\u5143\u4ef6\u50b3\u905e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ref"),"\uff0c\u4e26\u56de\u50b3\u4e00\u7d44\u65b0\u7684\u65b9\u6cd5\u7d66\u8a72 ",(0,a.kt)("inlineCode",{parentName:"p"},"ref"),"\u3002\u9019\u500b hook \u901a\u5e38\u6703\u642d\u914d ",(0,a.kt)("inlineCode",{parentName:"p"},"forwardRef")," \u4e00\u8d77\u4f7f\u7528\uff0c\u8b93\u6211\u5011\u5728\u81ea\u5b9a\u7fa9\u5143\u4ef6\u4e2d\u53d6\u5f97 DOM reference\uff0c\u4e26\u4e14\u53ef\u4ee5\u5728\u7236\u5143\u4ef6\u4e2d\u4f7f\u7528\u5b50\u5143\u4ef6\u7684\u51fd\u5f0f\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\ud83d\udca1 Learn more details about ",(0,a.kt)("inlineCode",{parentName:"p"},"useImperativeHandle")," in ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://www.youtube.com/watch?v=zpEyAOkytkU"},"Learn\nuseImperativeHandle In 10\nMinutes"),"."))),(0,a.kt)("h2",{id:"when-to-use-reactforwardref"},"When to use ",(0,a.kt)("inlineCode",{parentName:"h2"},"React.forwardRef")),(0,a.kt)("p",null,"\u7576\u6211\u5011\u60f3\u8981\u5728",(0,a.kt)("highlight",null,"\u81ea\u5b9a\u7fa9\u5143\u4ef6\u4e2d\u53d6\u5f97 DOM reference \u6642\uff0c\u6211\u5011\u6703\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"forwardRef")," \u4f86\u5305\u88dd\u8a72\u5143\u4ef6"),"\u3002\u5728\u4e0b\u9762\u7684\u7bc4\u4f8b\u4e2d\uff0c\u6211\u5011\u5c07\n",(0,a.kt)("inlineCode",{parentName:"p"},"<NinjaButton>")," \u5305\u88dd\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"forwardRef")," \u4e2d\uff0c\u4e26\u5c07 ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," \u6307\u5b9a\u7d66\u5167\u90e8\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"<button>"),"\u3002\u9019\u6a23\u4e00\u4f86\uff0c\u6211\u5011\u5728\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"<NinjaButton>")," \u6642\uff0c\u5c31\u53ef\u4ee5\u53d6\u5f97\u8a72\u5143\u4ef6\u5167\u90e8\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"<button>")," \u7684 reference\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const NinjaButton = React.forwardRef((props, ref) => (\n  <button ref={ref}>{props.children}</button>\n));\n\nconst App = () => {\n  const btnRef = useRef();\n\n  useEffect(() => {\n    btnRef.current.disabled = true;\n  }, []);\n\n  return <NinjaButton ref={btnRef}>Ninja</NinjaButton>;\n};\n\nrender(<App />);\n")),(0,a.kt)("h2",{id:"when-to-use-useimperativehandle"},"When to use ",(0,a.kt)("inlineCode",{parentName:"h2"},"useImperativeHandle")),(0,a.kt)("p",null,"With the help of ",(0,a.kt)("inlineCode",{parentName:"p"},"useImperativeHandle"),", we can intercept the ref pass from the parent and return ",(0,a.kt)("strong",{parentName:"p"},"a new set of methods")," for that ref. In the following example, ",(0,a.kt)("inlineCode",{parentName:"p"},"btnRef")," receives a new set of methods (",(0,a.kt)("inlineCode",{parentName:"p"},"changeStyle")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"customFocus"),") from ",(0,a.kt)("inlineCode",{parentName:"p"},"useImperativeHandle")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"NinjaButton"),". This allows us to use the child's (",(0,a.kt)("inlineCode",{parentName:"p"},"NinjaButton"),") functions from the parent (",(0,a.kt)("inlineCode",{parentName:"p"},"App"),")."),(0,a.kt)("p",null,"\u6211\u5011\u53ef\u4ee5\u5728\u81ea\u5b9a\u7fa9\u5143\u4ef6\u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"useImperativeHandle")," \u4f86\u6514\u622a\u7236\u5143\u4ef6\u50b3\u905e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ref"),"\uff0c\u4e26\u56de\u50b3\u4e00\u7d44\u65b0\u7684\u65b9\u6cd5\u7d66\u8a72 ",(0,a.kt)("inlineCode",{parentName:"p"},"ref"),"\u3002\u5728\u4e0b\u9762\u7684\u7bc4\u4f8b\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"btnRef")," \u5f9e ",(0,a.kt)("inlineCode",{parentName:"p"},"NinjaButton")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"useImperativeHandle")," \u4e2d\u63a5\u6536\u5230\u4e00\u7d44\u65b0\u7684\u65b9\u6cd5 (",(0,a.kt)("inlineCode",{parentName:"p"},"changeStyle"),")\u3002\u9019\u6a23\u4e00\u4f86\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u5728\u7236\u5143\u4ef6 (",(0,a.kt)("inlineCode",{parentName:"p"},"App"),") \u4e2d\u4f7f\u7528\u5b50\u5143\u4ef6 (",(0,a.kt)("inlineCode",{parentName:"p"},"NinjaButton"),") \u7684\u51fd\u5f0f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},'const NinjaButton = React.forwardRef((props, ref) => {\n  const localRef = useRef();\n\n  useImperativeHandle(ref, () => ({\n    changeStyle: ({ textColor, backgroundColor }) => {\n      localRef.current.style.padding = "5px 10px";\n      localRef.current.style.color = textColor;\n      localRef.current.style.background = backgroundColor;\n    },\n  }));\n  return <button ref={localRef}>{props.children}</button>;\n});\n\nconst App = () => {\n  const btnRef = useRef();\n\n  useEffect(() => {\n    btnRef.current.changeStyle({\n      textColor: "white",\n      backgroundColor: "black",\n    });\n  }, []);\n\n  return <NinjaButton ref={btnRef}>Ninja</NinjaButton>;\n};\n\nrender(<App />);\n')),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"forwardRef")," \u662f\u4e00\u500b\u9ad8\u968e\u5143\u4ef6\uff0c\u5b83\u53ef\u4ee5\u8b93\u6211\u5011\u5728\u81ea\u5b9a\u7fa9\u5143\u4ef6\u4e2d\u53d6\u5f97 DOM reference\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"useImperativeHandle")," \u662f\u4e00\u500b hook\uff0c\u5b83\u53ef\u4ee5\u8b93\u6211\u5011\u6514\u622a\u7236\u5143\u4ef6\u50b3\u905e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ref"),"\uff0c\u4e26\u56de\u50b3\u4e00\u7d44\u65b0\u7684\u65b9\u6cd5\u7d66\u8a72 ",(0,a.kt)("inlineCode",{parentName:"p"},"ref"),"\u3002\u9019\u5169\u500b\u5143\u4ef6\u53ef\u4ee5\u642d\u914d\u4f7f\u7528\uff0c\u8b93\u6211\u5011\u5728\u81ea\u5b9a\u7fa9\u5143\u4ef6\u4e2d\u53d6\u5f97 DOM reference\uff0c\u4e26\u4e14\u53ef\u4ee5\u5728\u7236\u5143\u4ef6\u4e2d\u4f7f\u7528\u5b50\u5143\u4ef6\u7684\u51fd\u5f0f\u3002"))}s.isMDXComponent=!0}}]);