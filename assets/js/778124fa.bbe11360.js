"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3018],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={id:"keeping-state-local",title:"Keeping State Local",description:"\u5728 React \u7684\u72c0\u614b\u7ba1\u7406\u4e2d\uff0c\u6709\u4e00\u500b\u9ec3\u91d1\u898f\u5247\uff0c\u5c31\u662f\u76e1\u53ef\u80fd\u5730\u5c07\u72c0\u614b\u4fdd\u6301\u5728\u5143\u4ef6\u672c\u8eab\u3002\u9019\u610f\u5473\u8457\u4f60\u61c9\u8a72\u53ea\u5728\u9700\u8981\u5b83\u7684\u5143\u4ef6\u4e2d\u5ba3\u544a\u72c0\u614b\uff0c\u800c\u4e0d\u662f\u6bcf\u6b21\u90fd\u5c07\u72c0\u614b\u5ba3\u544a\u5728\u6700\u4e0a\u5c64\u7684\u5143\u4ef6\u4e2d\u3002\u5728\u6700\u4e0a\u5c64\u5ba3\u544a\u72c0\u614b\uff0c\u53ef\u80fd\u6703\u5c0e\u81f4\u4e0d\u5fc5\u8981\u7684\u8907\u96dc\u6027\uff0c\u4f7f\u4f60\u7684\u7a0b\u5f0f\u78bc\u96e3\u4ee5\u7dad\u8b77\u3002",sidebar_label:"\ud83d\udfe9 Keeping State Local",hide_title:!0,hide_table_of_contents:!1,tags:["react","state-management"],draft:!1,last_updated:new Date("2022-09-28T00:00:00.000Z")},i=void 0,l={unversionedId:"frontend/react-next/keeping-state-local",id:"frontend/react-next/keeping-state-local",title:"Keeping State Local",description:"\u5728 React \u7684\u72c0\u614b\u7ba1\u7406\u4e2d\uff0c\u6709\u4e00\u500b\u9ec3\u91d1\u898f\u5247\uff0c\u5c31\u662f\u76e1\u53ef\u80fd\u5730\u5c07\u72c0\u614b\u4fdd\u6301\u5728\u5143\u4ef6\u672c\u8eab\u3002\u9019\u610f\u5473\u8457\u4f60\u61c9\u8a72\u53ea\u5728\u9700\u8981\u5b83\u7684\u5143\u4ef6\u4e2d\u5ba3\u544a\u72c0\u614b\uff0c\u800c\u4e0d\u662f\u6bcf\u6b21\u90fd\u5c07\u72c0\u614b\u5ba3\u544a\u5728\u6700\u4e0a\u5c64\u7684\u5143\u4ef6\u4e2d\u3002\u5728\u6700\u4e0a\u5c64\u5ba3\u544a\u72c0\u614b\uff0c\u53ef\u80fd\u6703\u5c0e\u81f4\u4e0d\u5fc5\u8981\u7684\u8907\u96dc\u6027\uff0c\u4f7f\u4f60\u7684\u7a0b\u5f0f\u78bc\u96e3\u4ee5\u7dad\u8b77\u3002",source:"@site/docs/frontend/react-next/2022-09-28-keeping-state-local.mdx",sourceDirName:"frontend/react-next",slug:"/frontend/react-next/keeping-state-local",permalink:"/frontend/react-next/keeping-state-local",draft:!1,editUrl:"https://github.com/windsuzu/windsuzu.github.io/tree/master/docs/frontend/react-next/2022-09-28-keeping-state-local.mdx",tags:[{label:"react",permalink:"/tags/react"},{label:"state-management",permalink:"/tags/state-management"}],version:"current",lastUpdatedAt:1678630745,formattedLastUpdatedAt:"2023\u5e743\u670812\u65e5",frontMatter:{id:"keeping-state-local",title:"Keeping State Local",description:"\u5728 React \u7684\u72c0\u614b\u7ba1\u7406\u4e2d\uff0c\u6709\u4e00\u500b\u9ec3\u91d1\u898f\u5247\uff0c\u5c31\u662f\u76e1\u53ef\u80fd\u5730\u5c07\u72c0\u614b\u4fdd\u6301\u5728\u5143\u4ef6\u672c\u8eab\u3002\u9019\u610f\u5473\u8457\u4f60\u61c9\u8a72\u53ea\u5728\u9700\u8981\u5b83\u7684\u5143\u4ef6\u4e2d\u5ba3\u544a\u72c0\u614b\uff0c\u800c\u4e0d\u662f\u6bcf\u6b21\u90fd\u5c07\u72c0\u614b\u5ba3\u544a\u5728\u6700\u4e0a\u5c64\u7684\u5143\u4ef6\u4e2d\u3002\u5728\u6700\u4e0a\u5c64\u5ba3\u544a\u72c0\u614b\uff0c\u53ef\u80fd\u6703\u5c0e\u81f4\u4e0d\u5fc5\u8981\u7684\u8907\u96dc\u6027\uff0c\u4f7f\u4f60\u7684\u7a0b\u5f0f\u78bc\u96e3\u4ee5\u7dad\u8b77\u3002",sidebar_label:"\ud83d\udfe9 Keeping State Local",hide_title:!0,hide_table_of_contents:!1,tags:["react","state-management"],draft:!1,last_updated:"2022-09-28T00:00:00.000Z"},sidebar:"react-next",previous:{title:"\ud83d\udfe9 React Folder Structure",permalink:"/frontend/react-next/react-folder-structure"},next:{title:"\ud83d\udfe9 useImperativeHandle",permalink:"/frontend/react-next/use-imperative-handle"}},p={},u=[{value:"Keeping State Local",id:"keeping-state-local",level:2},{value:"Keeping Form Data Local",id:"keeping-form-data-local",level:2}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("profile",{title:"Are You Making This React State Mistake?",url:"https://www.youtube.com/watch?v=NZqMVUEiDIw",author:"Web Dev Simplified",level:"beginner",category:["react/next"]}),(0,r.kt)("p",null,"\u5728 React \u7684\u72c0\u614b\u7ba1\u7406\u4e2d\uff0c\u6709\u4e00\u500b\u9ec3\u91d1\u898f\u5247\uff0c\u5c31\u662f\u76e1\u53ef\u80fd\u5730\u5c07\u72c0\u614b\u4fdd\u6301\u5728\u5143\u4ef6\u672c\u8eab\u3002\u9019\u610f\u5473\u8457\u4f60\u61c9\u8a72\u53ea\u5728\u9700\u8981\u5b83\u7684\u5143\u4ef6\u4e2d\u5ba3\u544a\u72c0\u614b\uff0c\u800c\u4e0d\u662f\u6bcf\u6b21\u90fd\u5c07\u72c0\u614b\u5ba3\u544a\u5728\u6700\u4e0a\u5c64\u7684\u5143\u4ef6\u4e2d\u3002\u5728\u6700\u4e0a\u5c64\u5ba3\u544a\u72c0\u614b\uff0c\u53ef\u80fd\u6703\u5c0e\u81f4\u4e0d\u5fc5\u8981\u7684\u8907\u96dc\u6027\uff0c\u4f7f\u4f60\u7684\u7a0b\u5f0f\u78bc\u96e3\u4ee5\u7dad\u8b77\u3002"),(0,r.kt)("h2",{id:"keeping-state-local"},"Keeping State Local"),(0,r.kt)("p",null,"\u8003\u616e\u4e0b\u9762\u9019\u500b\u8a08\u6578\u5668\u7684\u7bc4\u4f8b\uff0c\u6211\u5011\u5728\u6700\u4e0a\u5c64\u7684\u5143\u4ef6\u4e2d\u5ba3\u544a\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"setCount")," \u7684\u72c0\u614b\uff0c\u7136\u5f8c\u5c07\u5b83\u5011\u50b3\u905e\u7d66 ",(0,r.kt)("inlineCode",{parentName:"p"},"Counter")," \u5143\u4ef6\u3002\u4f46\u662f\uff0c\u9019\u500b\u72c0\u614b\u53ea\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Counter")," \u5143\u4ef6\u4e2d\u4f7f\u7528\uff0c\u6216\u8a31\u6211\u5011\u53ef\u4ee5\u5c07\u72c0\u614b\u79fb\u52d5\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Counter")," \u5143\u4ef6\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const App = () => {\n  const [count, setCount] = useState(0);\n  return <Counter count={count} setCount={setCount} />;\n};\n")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u91cd\u69cb\u5f8c\u7684\u7a0b\u5f0f\u78bc\uff0c\u6211\u5011\u5c07 ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"setCount")," \u7684\u72c0\u614b\u5ba3\u544a\u79fb\u52d5\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Counter")," \u5143\u4ef6\u4e2d\uff0c\u9019\u6a23\u5c31\u53ef\u4ee5\u7c21\u5316\u7a0b\u5f0f\u78bc\uff0c\u4e26\u4f7f\u5176\u66f4\u5bb9\u6613\u7dad\u8b77\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7576\u4f60\u6709\u5176\u4ed6\u5143\u4ef6\u9700\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"Counter")," \u6642\uff0c\u4f60\u4e0d\u9700\u8981\u518d\u50b3\u905e\u4e00\u6b21 ",(0,r.kt)("inlineCode",{parentName:"li"},"count")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"setCount"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7576\u4f60\u9700\u8981\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"li"},"Counter")," \u7684\u72c0\u614b\u6642\uff0c\u4f60\u4e0d\u6703\u5f71\u97ff\u5230 App \u4e2d\u7684\u5176\u4ed6\u5143\u4ef6\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},'const App = () => {\n  return <Counter />;\n};\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n  return (\n    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>\n      <button onClick={() => setCount((prev) => prev - 1)}>-</button>\n      <span>{count}</span>\n      <button onClick={() => setCount((prev) => prev + 1)}>+</button>\n    </div>\n  );\n};\n\nrender(<App />);\n')),(0,r.kt)("h2",{id:"keeping-form-data-local"},"Keeping Form Data Local"),(0,r.kt)("p",null,"\u9019\u500b\u9ec3\u91d1\u898f\u5247\u4e0d\u50c5\u9650\u65bc\u8a08\u6578\u5668\uff0c\u5b83\u4e5f\u9069\u7528\u65bc\u8868\u55ae\u3002\u8003\u616e\u4ee5\u4e0b\u7bc4\u4f8b\u3002\u6211\u5011\u6709\u4e00\u500b ",(0,r.kt)("inlineCode",{parentName:"p"},"LoginForm")," \u5143\u4ef6\uff0c\u4f46\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," \u6211\u5011\u53ea\u597d\u5947 ",(0,r.kt)("inlineCode",{parentName:"p"},"LoginForm")," \u6700\u7d42\u63d0\u4ea4\u7684\u8868\u55ae\u6578\u64da\uff0c\u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"LoginForm")," \u7684\u7576\u524d\u72c0\u614b (",(0,r.kt)("inlineCode",{parentName:"p"},"formData"),")\u3002\u6240\u4ee5\u6211\u5011\u53ef\u4ee5\u5c07 ",(0,r.kt)("inlineCode",{parentName:"p"},"formData")," \u7684\u72c0\u614b\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"updateFormData")," \u51fd\u5f0f\u79fb\u52d5\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"LoginForm")," \u5143\u4ef6\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const App = () => {\n  const [formData, setFormData] = useState({ email: "", password: "" });\n\n  function updateFormData(newData) {\n    setFormData((prev) => ({ ...prev, ...newData }));\n  }\n\n  function onSubmit() {\n    console.log(formData);\n  }\n\n  return (\n    <LoginForm\n      data={formData}\n      updateData={updateFormData}\n      onSubmit={onSubmit}\n    />\n  );\n};\n')),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u91cd\u69cb\u5f8c\u7684\u7a0b\u5f0f\u78bc\uff0c\u6211\u5011\u5c07 ",(0,r.kt)("inlineCode",{parentName:"p"},"formData")," \u7684\u72c0\u614b\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"updateFormData")," \u51fd\u5f0f\u79fb\u52d5\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"LoginForm")," \u5143\u4ef6\u4e2d\u3002\u7531\u65bc ",(0,r.kt)("inlineCode",{parentName:"p"},"LoginForm")," \u4e0d\u9700\u8981\u96a8\u6642\u66f4\u65b0\u6216\u6aa2\u67e5 ",(0,r.kt)("inlineCode",{parentName:"p"},"formData")," \u7684\u72c0\u614b\uff0c\u6240\u4ee5\u6211\u5011\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"useRef")," \u5728\u6700\u5f8c\u63d0\u4ea4\u6642\u7372\u53d6\u8868\u55ae\u6578\u64da\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},'const App = () => {\n  function onSubmit(formData) {\n    console.log(formData);\n  }\n  return <LoginForm onSubmit={onSubmit} />;\n};\n\nconst LoginForm = ({ onSubmit }) => {\n  const emailRef = useRef();\n  const passwordRef = useRef();\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    onSubmit({\n      email: emailRef.current.value,\n      password: passwordRef.current.value,\n    });\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <label htmlFor="email">Email</label>\n      <input ref={emailRef} type="email" id="email" />\n      <label htmlFor="password">Password</label>\n      <input ref={passwordRef} type="password" id="password" />\n      <button type="submit">Submit</button>\n    </form>\n  );\n};\n\nrender(<App />);\n')),(0,r.kt)("p",null,"\u5c07 React \u7684\u72c0\u614b\u76e1\u53ef\u80fd\u5730\u4fdd\u6301\u5728\u5143\u4ef6\u672c\u8eab\uff0c\u662f\u4e00\u500b\u91cd\u8981\u7684\u6982\u5ff5\u3002\u901a\u904e\u5c07\u72c0\u614b\u4fdd\u6301\u5728\u5143\u4ef6\u672c\u8eab\uff0c\u53ef\u4ee5\u7c21\u5316\u7a0b\u5f0f\u78bc\uff0c\u6e1b\u5c11\u8907\u96dc\u6027\uff0c\u4e26\u4f7f\u7a0b\u5f0f\u78bc\u66f4\u5bb9\u6613\u7dad\u8b77\u3002"))}s.isMDXComponent=!0}}]);