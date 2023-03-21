"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2570],{3905:(n,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>u});var e=t(7294);function i(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function r(n,a){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),t.push.apply(t,e)}return t}function o(n){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(n,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))}))}return n}function l(n,a){if(null==n)return{};var t,e,i=function(n,a){if(null==n)return{};var t,e,i={},r=Object.keys(n);for(e=0;e<r.length;e++)t=r[e],a.indexOf(t)>=0||(i[t]=n[t]);return i}(n,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(e=0;e<r.length;e++)t=r[e],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var p=e.createContext({}),s=function(n){var a=e.useContext(p),t=a;return n&&(t="function"==typeof n?n(a):o(o({},a),n)),t},m=function(n){var a=s(n.components);return e.createElement(p.Provider,{value:a},n.children)},g="mdxType",c={inlineCode:"code",wrapper:function(n){var a=n.children;return e.createElement(e.Fragment,{},a)}},k=e.forwardRef((function(n,a){var t=n.components,i=n.mdxType,r=n.originalType,p=n.parentName,m=l(n,["components","mdxType","originalType","parentName"]),g=s(t),k=i,u=g["".concat(p,".").concat(k)]||g[k]||c[k]||r;return t?e.createElement(u,o(o({ref:a},m),{},{components:t})):e.createElement(u,o({ref:a},m))}));function u(n,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof n||i){var r=t.length,o=new Array(r);o[0]=k;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=n,l[g]="string"==typeof n?n:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return e.createElement.apply(null,o)}return e.createElement.apply(null,t)}k.displayName="MDXCreateElement"},577:(n,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var e=t(7462),i=(t(7294),t(3905));const r={id:"path-planning",title:"Path Planning",sidebar_label:"2 - Path Planning",hide_title:!1,hide_table_of_contents:!1,tags:["robotic-navigation-and-exploration","motion-planning"],draft:!1,last_updated:new Date("2020-05-10T00:00:00.000Z")},o=void 0,l={unversionedId:"learning/robotic-navigation-and-exploration/motion-planning/path-planning",id:"learning/robotic-navigation-and-exploration/motion-planning/path-planning",title:"Path Planning",description:"\u672c\u6587\u4ecb\u7d39 Path Planning\uff0c\u5b83\u662f\u70ba\u4e86\u8b93\u6a5f\u5668\u4eba\u77e5\u9053\u5982\u4f55\u5f9e\u4e00\u500b\u8d77\u9ede\u5230\u9054\u53e6\u4e00\u500b\u7d42\u9ede\u7684\u7b56\u7565\u3002\u5b83\u8b93\u6211\u5011\u53ef\u4ee5\u7528 Graph G \u4f86\u8868\u793a\u5730\u5716\uff0c\u5176\u4e2d G = (V, E)\uff0cV \u662f\u4e00\u7d44\u9ede\uff0cE \u662f\u4e00\u7d44\u908a\u3002\u800c\u53e6\u5916\u4e5f\u6703\u6709 weights \u4f86\u6c42\u89e3 single-source shortest path\uff0c\u5373\u7d66\u5b9a\u8d77\u9ede\u7684\u6700\u77ed\u8def\u5f91\u3002",source:"@site/docs/learning/5-robotic-navigation-and-exploration/2-motion-planning/2-path-planning.mdx",sourceDirName:"learning/5-robotic-navigation-and-exploration/2-motion-planning",slug:"/learning/robotic-navigation-and-exploration/motion-planning/path-planning",permalink:"/learning/robotic-navigation-and-exploration/motion-planning/path-planning",draft:!1,editUrl:"https://github.com/windsuzu/windsuzu.github.io/tree/master/docs/learning/5-robotic-navigation-and-exploration/2-motion-planning/2-path-planning.mdx",tags:[{label:"robotic-navigation-and-exploration",permalink:"/tags/robotic-navigation-and-exploration"},{label:"motion-planning",permalink:"/tags/motion-planning"}],version:"current",lastUpdatedAt:1679358500,formattedLastUpdatedAt:"2023\u5e743\u670821\u65e5",sidebarPosition:2,frontMatter:{id:"path-planning",title:"Path Planning",sidebar_label:"2 - Path Planning",hide_title:!1,hide_table_of_contents:!1,tags:["robotic-navigation-and-exploration","motion-planning"],draft:!1,last_updated:"2020-05-10T00:00:00.000Z"},sidebar:"learning",previous:{title:"1 - Introduction",permalink:"/learning/robotic-navigation-and-exploration/motion-planning/introduction"},next:{title:"3 - Curve Interpolation I",permalink:"/learning/robotic-navigation-and-exploration/motion-planning/curve-interpolation-i"}},p={},s=[{value:"Dijkstra&#39;s Algorithm",id:"dijkstras-algorithm",level:3},{value:"Best-First Search (BFS)",id:"best-first-search-bfs",level:3},{value:"A* Algorithm",id:"a-algorithm",level:3},{value:"Heuristic Function",id:"heuristic-function",level:3},{value:"Comparison",id:"comparison",level:3},{value:"Sampling Based Planning Methods",id:"sampling-based-planning-methods",level:3},{value:"PRM",id:"prm",level:3},{value:"RRT",id:"rrt",level:3},{value:"RRT*",id:"rrt-1",level:3},{value:"Re-parents",id:"re-parents",level:4},{value:"Re-wire",id:"re-wire",level:4},{value:"Comparison",id:"comparison-1",level:3}],m={toc:s};function g(n){let{components:a,...t}=n;return(0,i.kt)("wrapper",(0,e.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u4ecb\u7d39 Path Planning\uff0c\u5b83\u662f\u70ba\u4e86\u8b93\u6a5f\u5668\u4eba\u77e5\u9053\u5982\u4f55\u5f9e\u4e00\u500b\u8d77\u9ede\u5230\u9054\u53e6\u4e00\u500b\u7d42\u9ede\u7684\u7b56\u7565\u3002\u5b83\u8b93\u6211\u5011\u53ef\u4ee5\u7528 Graph G \u4f86\u8868\u793a\u5730\u5716\uff0c\u5176\u4e2d G = (V, E)\uff0cV \u662f\u4e00\u7d44\u9ede\uff0cE \u662f\u4e00\u7d44\u908a\u3002\u800c\u53e6\u5916\u4e5f\u6703\u6709 weights \u4f86\u6c42\u89e3 single-source shortest path\uff0c\u5373\u7d66\u5b9a\u8d77\u9ede\u7684\u6700\u77ed\u8def\u5f91\u3002"),(0,i.kt)("p",null,"\u6211\u5011\u6703\u4ecb\u7d39\u4e09\u7a2e\u7b97\u6cd5\uff0cDijkstra \u3001Best-First Search (BFS) \u4ee5\u53ca A","*","\uff0c\u540c\u6642\u4e5f\u6703\u63d0\u5230 Heuristic function \u4ee5\u53ca Sampling Based Planning Methods\u3002PRM \u548c RRT \u662f\u5169\u7a2e sampling based planning \u7684\u65b9\u6cd5\uff0c\u800c RRT","*"," \u662f RRT \u7684\u6539\u826f\u7248\u672c\u3002"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u5728 Path planning \u8981\u5148\u628a\u5730\u5716\u8f49\u63db\u6210 graph G"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"G = (V, E)"),(0,i.kt)("li",{parentName:"ul"},"V: a set of ",(0,i.kt)("strong",{parentName:"li"},"Vertices")),(0,i.kt)("li",{parentName:"ul"},"E: a set of ",(0,i.kt)("strong",{parentName:"li"},"Edges"))),(0,i.kt)("p",null,"\u5728 edges \u4e0a\u53ef\u80fd\u6709 weights\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u6c42\u89e3 ",(0,i.kt)("strong",{parentName:"p"},"single-source")," shortest path (\u7d66\u5b9a\u8d77\u9ede\u7684\u6700\u77ed\u8def\u5f91)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dijkstra: \u7528\u4f86\u6c42 non-negative weights graph"),(0,i.kt)("li",{parentName:"ul"},"Best-First Search (BFS): \u662f\u4e00\u7a2e heuristic greedy search"),(0,i.kt)("li",{parentName:"ul"},"A","*",": BFS + Dijkstra")),(0,i.kt)("h3",{id:"dijkstras-algorithm"},"Dijkstra's Algorithm"),(0,i.kt)("p",null,"Dijkstra \u53ef\u4ee5\u627e\u5230\u6700\u4f73\u8def\u5f91\uff0c\u4f46\u4e0d\u80fd\u6709\u8ca0\u7684 weights"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5f9e\u4e00\u500b start point (v)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u627e\u51fa\u8ddd\u96e2\u6700\u77ed\u4e14\u9084\u6c92\u7d50\u675f\u7684 vertex (u)"),(0,i.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u5176\u4ed6\u6c92\u7d50\u675f\u7684 vertex (v')"),(0,i.kt)("li",{parentName:"ul"},"d(v, v\u2019) = min(d(v, u) + <u, v\u2019>, d(v, v\u2019))"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Pseudo code"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def Dijkstra(G, weight, v_start):\n\n    for each vertex v in G.vertices:\n        v.distance = INF\n        v.predecessor = None\n    v_start.distance = 0\n\n    Q = set(G.vertices)\n\n    while Q is not empty:\n        u = extract_min(Q)\n        for each vertex v in G.Adj[u]:\n            if v.distance > u.distance + weight[u][v]:\n                v.distance = u.distance + weight[u][v]\n                v.redecessor = u\n")),(0,i.kt)("fig",{src:"/img/learning/robotic-navigation-and-exploration/02-motion-planning/path_planning_dijkstra.png",caption:"Path planning dijkstra"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Time complexity",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Original algorithm: ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"O"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mi",{parentName:"msup"},"V"),(0,i.kt)("mn",{parentName:"msup"},"2")),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(V^2)")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,i.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,i.kt)("li",{parentName:"ul"},"Optimized (Fibonacci-Heap): ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"O"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow"},"E"),(0,i.kt)("mo",{parentName:"mrow"},"+"),(0,i.kt)("mi",{parentName:"mrow"},"V"),(0,i.kt)("mi",{parentName:"mrow"},"log"),(0,i.kt)("mo",{parentName:"mrow"},"\u2061"),(0,i.kt)("mi",{parentName:"mrow"},"V"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(E+V\\log V)")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.kt)("span",{parentName:"span",className:"mop"},"lo",(0,i.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")"))))))))),(0,i.kt)("p",null,"Dijkstra \u597d\u8655\u662f\u4e00\u5b9a\u80fd\u627e\u5230\u6700\u4f73\u89e3\uff0c\u58de\u8655\u662f\u7576\u7bc0\u9ede\u8b8a\u591a\u6548\u7387\u6703\u8b8a\u5f88\u5dee"),(0,i.kt)("h3",{id:"best-first-search-bfs"},"Best-First Search (BFS)"),(0,i.kt)("p",null,"BFS \u6703\u5c0d\u6bcf\u500b point (v) \u4f7f\u7528 heuristic function (f(v)) \u4f86\u9810\u4f30 v \u548c\u7d42\u9ede\u7684\u6700\u5c0f cost \u8def\u5f91\uff0c\u9019\u500b heuristic function \u53ef\u80fd\u662f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Euclidean Distance"),(0,i.kt)("li",{parentName:"ul"},"Manhattan Distance")),(0,i.kt)("fig",{src:"/img/learning/robotic-navigation-and-exploration/02-motion-planning/path_planning_bfs.png",caption:"Path planning BFS"}),(0,i.kt)("p",null,"BFS \u512a\u9ede\u662f\u5f88\u5feb\uff0c\u4f46\u7f3a\u9ede\u662f heuristic \u7684\u9810\u6e2c\u4e0d\u4e00\u5b9a\u662f\u6700\u4f73\u89e3"),(0,i.kt)("h3",{id:"a-algorithm"},"A","*"," Algorithm"),(0,i.kt)("p",null,"A","*"," \u5247\u662f\u628a Dijkstra \u548c BFS \u7684\u512a\u9ede\u7d50\u5408\u8d77\u4f86\uff0c\u5716\u4e2d\u6703\u6709\u5169\u7a2e\u53c3\u6578 (\u8003\u616e\u6b77\u53f2\u548c\u672a\u4f86)"),(0,i.kt)("fig",{src:"/img/learning/robotic-navigation-and-exploration/02-motion-planning/path_planning_astar.png",caption:"Path planning A*"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"g(v) \u8a08\u7b97\u5f9e\u8d77\u9ede\u5230 v \u7684 cost"),(0,i.kt)("li",{parentName:"ul"},"h(v) \u8a08\u7b97\u5f9e v \u5230\u7d42\u9ede\u7684\u9810\u6e2c cost")),(0,i.kt)("fig",{src:"/img/learning/robotic-navigation-and-exploration/02-motion-planning/path_planning_astar2.png",caption:"Path planning A*"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"A -> B (2+10)  *\n  -> C (7+8)\n\nB -> C (4+8)   *\n  -> D (3+12)\n  -> E (8+9)\n\nC -> F (3+7)   *\n\nF -> G (1+3)   *\n  -> H (5+0)\n\nG -> H (2+0)   *\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7576 h(v) \u63a5\u8fd1 0 \u6642\uff0c\u5247 A","*"," \u5c31\u6703\u50cf Dijkstra \u4e00\u6a23"),(0,i.kt)("li",{parentName:"ul"},"\u7576 g(v) \u63a5\u8fd1 0 \u6642 (\u6216 h(v) \u9060\u5927\u65bc g(v) \u6642)\uff0c\u5247 A","*"," \u5c31\u6703\u50cf BFS \u4e00\u6a23")),(0,i.kt)("p",null,"\u7e3d\u800c\u8a00\u4e4b\uff0c\u6c7a\u5b9a\u597d\u7684 heuristic function \u662f\u6700\u91cd\u8981\u7684"),(0,i.kt)("h3",{id:"heuristic-function"},"Heuristic Function"),(0,i.kt)("p",null,"\u5728 mobile robot \u4e2d\uff0c\u6211\u5011\u53ef\u4ee5\u5c07 2D \u5e73\u9762\u8f49\u5316\u70ba grid space\uff0c\u7136\u5f8c\u5c31\u53ef\u4ee5\u4f9d\u6b64\u5b9a\u7fa9\u5e7e\u7a2e distance"),(0,i.kt)("fig",{src:"/img/learning/robotic-navigation-and-exploration/02-motion-planning/path_planning_heuristic.png",caption:"Path planning heuristic"}),(0,i.kt)("h3",{id:"comparison"},"Comparison"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Easy Case")),(0,i.kt)("fig",{src:"/img/learning/robotic-navigation-and-exploration/02-motion-planning/path_planning_comparison_easy.png",caption:"Path planning comparison easy"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hard Case")),(0,i.kt)("fig",{src:"/img/learning/robotic-navigation-and-exploration/02-motion-planning/path_planning_comparison_hard.png",caption:"Path planning comparison hard"}),(0,i.kt)("h3",{id:"sampling-based-planning-methods"},"Sampling Based Planning Methods"),(0,i.kt)("p",null,"\u56e0\u70ba A","*"," \u4f9d\u7136\u6703\u641c\u5c0b\u8def\u5f91\u7684\u6240\u6709\u53ef\u80fd (resolution complete)\uff0c\u6240\u4ee5\u6709\u4eba\u63d0\u51fa\u4e86 Sampling based planning methods\u3002\u9019\u500b\u65b9\u6cd5\u5229\u7528 sampling \u65b9\u5f0f\u4f86\u6311\u9078\u6700\u4f73\u8def\u5f91\uff0c\u96d6\u7136\u6703\u627e sub-optimal solution \u4f46\u80fd\u6e1b\u5c11\u641c\u5c0b\u6642\u9593 (probabilistic completeness)"),(0,i.kt)("h3",{id:"prm"},"PRM"),(0,i.kt)("p",null,"Probabilistic Road-Map (PRM) \u662f\u7b2c\u4e00\u7a2e sampling based planning\u3002PRM \u6703\u5229\u7528\u96a8\u6a5f\u63a1\u6a23\u7684\u65b9\u5f0f\u4f86\u5c07 graph \u5efa\u7acb\u6210 2D space\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5f9e free area \u96a8\u6a5f\u63a1\u6a23\uff0c\u79fb\u9664\u5728 occupied area \u7684\u9ede")),(0,i.kt)("fig",{src:"/img/learning/robotic-navigation-and-exploration/02-motion-planning/prm_1.png",caption:"PRM Step 1"}),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u9023\u63a5 k-nearest neighbor points"),(0,i.kt)("li",{parentName:"ol"},"\u79fb\u9664\u7a7f\u904e occupied area \u7684 edges")),(0,i.kt)("fig",{src:"/img/learning/robotic-navigation-and-exploration/02-motion-planning/prm_2.png",caption:"PRM Step 2"}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"\u9023\u63a5 connected components")),(0,i.kt)("fig",{src:"/img/learning/robotic-navigation-and-exploration/02-motion-planning/prm_3.png",caption:"PRM Step 3"}),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"\u5c31\u53ef\u4ee5\u5f9e\u7522\u751f\u7684 graph \u9032\u884c path planning")),(0,i.kt)("fig",{src:"/img/learning/robotic-navigation-and-exploration/02-motion-planning/prm_4.png",caption:"PRM Step 4"}),(0,i.kt)("h3",{id:"rrt"},"RRT"),(0,i.kt)("p",null,"PRM \u5efa\u7acb graph \u9084\u662f\u592a\u6162\u4e86\uff0c\u6240\u4ee5\u53c8\u51fa\u73fe\u4e86 rapidly exploring random tree (RRT)\u3002RRT \u52d5\u614b\u5efa\u7acb tree branch \u4e26\u4e14\u6aa2\u67e5\u662f\u5426\u6709 collision\u3002"),(0,i.kt)("fig",{src:"/img/learning/robotic-navigation-and-exploration/02-motion-planning/rrt_algorithm.png",caption:"RRT Algorithm"}),(0,i.kt)("p",null,"\u6311\u9078\u96a8\u6a5f\u9ede\u7684\u6a5f\u7387\u662f P\uff0c\u6311\u9078\u5230\u7d42\u9ede\u6a5f\u7387\u662f (1-P)"),(0,i.kt)("fig",{src:"/img/learning/robotic-navigation-and-exploration/02-motion-planning/rrt_1.png",caption:"RRT Step 1"}),(0,i.kt)("p",null,"\u5f9e\u5df2\u5efa\u7acb\u7684 graph \u627e\u51fa\u96e2\u96a8\u6a5f\u9ede\u6700\u8fd1\u7684\u4e00\u9ede"),(0,i.kt)("fig",{src:"/img/learning/robotic-navigation-and-exploration/02-motion-planning/rrt_2.png",caption:"RRT Step 2"}),(0,i.kt)("p",null,"\u5ef6\u4f38\u5169\u8005\u4e4b\u9593\u7684\u8ddd\u96e2"),(0,i.kt)("fig",{src:"/img/learning/robotic-navigation-and-exploration/02-motion-planning/rrt_3.png",caption:"RRT Step 3"}),(0,i.kt)("p",null,"\u53cd\u8986\u9032\u884c\u4e00\u6a23\u7684\u4e8b\uff0c\u4f46\u4e0d\u4f7f\u7528\u6703 cross obstacle \u7684\u8def\u5f91"),(0,i.kt)("fig",{src:"/img/learning/robotic-navigation-and-exploration/02-motion-planning/rrt_4.png",caption:"RRT Step 4"}),(0,i.kt)("p",null,"\u76f4\u5230\u8981\u5ef6\u4f38\u7684\u8def\u5f91 < \u5230\u7d42\u9ede\u7684\u8def\u5f91\uff0c\u5c31\u53ef\u4ee5\u7d50\u675f\u4e86"),(0,i.kt)("fig",{src:"/img/learning/robotic-navigation-and-exploration/02-motion-planning/rrt_5.png",caption:"RRT Step 5"}),(0,i.kt)("h3",{id:"rrt-1"},"RRT","*"),(0,i.kt)("p",null,"RRT","*"," \u662f RRT \u7684\u6539\u826f\u7248\u672c\uff0c\u73fe\u5728\u88ab\u5ee3\u6cdb\u7528\u5728 mobile robot \u7684\u8def\u5f91\u898f\u5283\uff0c\u4ed6\u57fa\u65bc RRT \u52a0\u5165\u4e86 re-parent \u548c re-wire \u7684\u6b65\u9a5f\uff0c\u589e\u52a0\u4e86\u8def\u5f91\u5e73\u6ed1\u5ea6\u3002"),(0,i.kt)("fig",{src:"/img/learning/robotic-navigation-and-exploration/02-motion-planning/rrt_star_algorithm.png",caption:"RRT* Algorithm"}),(0,i.kt)("p",null,"\u7d05\u8272\u90e8\u5206\u662f\u65b0\u52a0\u5165\u7684 re-parent \u548c re-wire"),(0,i.kt)("h4",{id:"re-parents"},"Re-parents"),(0,i.kt)("p",null,"\u5f9e\u65b0\u7684\u7bc0\u9ede\u5468\u570d\u627e\u51fa\u63a5\u8fd1\u7684\u7bc0\u9ede\uff0c\u7136\u5f8c\u8a08\u7b97\u662f\u5426\u6709\u6bd4\u539f\u672c parent cost \u9084\u8981\u66f4\u4f4e\u7684\uff0c\u505a\u70ba\u65b0\u7684 parent"),(0,i.kt)("fig",{src:"/img/learning/robotic-navigation-and-exploration/02-motion-planning/rrt_star_reparent.png",caption:"RRT* Re-parent"}),(0,i.kt)("h4",{id:"re-wire"},"Re-wire"),(0,i.kt)("p",null,"\u5c07\u65b0\u7bc0\u9ede\u518d\u505a\u70ba parent \u9023\u5230\u5468\u570d\u63a5\u8fd1\u7684\u7bc0\u9ede\uff0c\u6539\u8b8a\u5176\u4ed6\u7bc0\u9ede\u7684 parent (\u82e5\u65b0\u7bc0\u9ede\u6bd4\u4ed6\u7684 parent \u7684 cost \u9084\u8981\u4f4e)"),(0,i.kt)("fig",{src:"/img/learning/robotic-navigation-and-exploration/02-motion-planning/rrt_star_rewire.png",caption:"RRT* Re-wire"}),(0,i.kt)("h3",{id:"comparison-1"},"Comparison"),(0,i.kt)("fig",{src:"/img/learning/robotic-navigation-and-exploration/02-motion-planning/rrt_rrt_star.png",caption:"RRT vs RRT*"}))}g.isMDXComponent=!0}}]);