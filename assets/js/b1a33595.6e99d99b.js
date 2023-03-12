"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[339],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),c=o(a),d=r,h=c["".concat(p,".").concat(d)]||c[d]||g[d]||s;return a?n.createElement(h,i(i({ref:t},l),{},{components:a})):n.createElement(h,i({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[c]="string"==typeof e?e:r,i[1]=m;for(var o=2;o<s;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6639:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>m,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const s={id:"fp-growth",title:"FP-growth",sidebar_label:"2 - FP-growth",hide_title:!1,hide_table_of_contents:!1,tags:["data-mining","fp-growth"],draft:!1,last_updated:new Date("2019-10-02T00:00:00.000Z")},i=void 0,m={unversionedId:"learning/data-mining/fp-growth",id:"learning/data-mining/fp-growth",title:"FP-growth",description:"FP-growth \u7684\u4e3b\u8981\u76ee\u7684\u662f\u7834\u89e3 candidate generation \u6240\u5f15\u8d77\u7684 bottleneck\uff0c\u56e0\u6b64\u5c07\u4e0d\u6703\u7528\u5230\u4efb\u4f55 candidate generation\uff0c\u4e26\u4e14\u5728 main memory \u5be6\u4f5c\u4ee5\u6e1b\u5c11\u5c0d database \u7684 scans\uff0c\u4e3b\u8981\u7684\u6982\u5ff5\u662f divide-and-conquer\uff0c\u4e26\u4e14\u5229\u7528\u4e86 suffix tree \u7684\u6982\u5ff5\u3002",source:"@site/docs/learning/4-data-mining/2-fp-growth.mdx",sourceDirName:"learning/4-data-mining",slug:"/learning/data-mining/fp-growth",permalink:"/learning/data-mining/fp-growth",draft:!1,editUrl:"https://github.com/windsuzu/windsuzu.github.io/tree/master/docs/learning/4-data-mining/2-fp-growth.mdx",tags:[{label:"data-mining",permalink:"/tags/data-mining"},{label:"fp-growth",permalink:"/tags/fp-growth"}],version:"current",lastUpdatedAt:1678629868,formattedLastUpdatedAt:"2023\u5e743\u670812\u65e5",sidebarPosition:2,frontMatter:{id:"fp-growth",title:"FP-growth",sidebar_label:"2 - FP-growth",hide_title:!1,hide_table_of_contents:!1,tags:["data-mining","fp-growth"],draft:!1,last_updated:"2019-10-02T00:00:00.000Z"},sidebar:"learning",previous:{title:"1 - Association Analysis",permalink:"/learning/data-mining/association-analysis"},next:{title:"3 - Other Association Rules",permalink:"/learning/data-mining/other-association-rules"}},p={},o=[{value:"Suffix Tree",id:"suffix-tree",level:2},{value:"Keyword Trees",id:"keyword-trees",level:3},{value:"Suffix Tree",id:"suffix-tree-1",level:3},{value:"FP-Growth Algorithm",id:"fp-growth-algorithm",level:2},{value:"FP-Trees Construction",id:"fp-trees-construction",level:3},{value:"FP-Growth",id:"fp-growth",level:3},{value:"FP-Growth Advantages",id:"fp-growth-advantages",level:2}],l={toc:o};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"FP-growth \u7684\u4e3b\u8981\u76ee\u7684\u662f\u7834\u89e3 candidate generation \u6240\u5f15\u8d77\u7684 bottleneck\uff0c\u56e0\u6b64\u5c07\u4e0d\u6703\u7528\u5230\u4efb\u4f55 candidate generation\uff0c\u4e26\u4e14\u5728 main memory \u5be6\u4f5c\u4ee5\u6e1b\u5c11\u5c0d database \u7684 scans\uff0c\u4e3b\u8981\u7684\u6982\u5ff5\u662f divide-and-conquer\uff0c\u4e26\u4e14\u5229\u7528\u4e86 suffix tree \u7684\u6982\u5ff5\u3002"),(0,r.kt)("h2",{id:"suffix-tree"},"Suffix Tree"),(0,r.kt)("h3",{id:"keyword-trees"},"Keyword Trees"),(0,r.kt)("p",null,'\u5c07 keywords \u5132\u5b58\u5728 rooted labeled tree\u3002\u6bcf\u500b\u5f9e root \u5230 leaf \u7684 path \u90fd\u6703\u5c0d\u61c9\u4e00\u500b keyword\u3002\u5229\u7528 "threading" \u6280\u5de7 traverse \u6587\u7ae0\u627e\u51fa keywords\uff0c\u6bcf\u7576\u6211\u5011\u8d70\u5230\u4e86 leaf node \u5c31\u4ee3\u8868\u627e\u5230 keyword\u3002'),(0,r.kt)("fig",{src:"/img/learning/data-mining/02-fp-growth/keyword_tree.png",caption:"Keyword Tree"}),(0,r.kt)("h3",{id:"suffix-tree-1"},"Suffix Tree"),(0,r.kt)("p",null,"\u904b\u7528 keyword tree \u7684\u6982\u5ff5\u5229\u7528\u6587\u5b57\u7684\u5b57\u5c3e (suffixes) \u4f86\u5efa\u7acb\u4e00\u7a2e trie data structure\uff0c\u5176 leaves \u6703\u662f\u6bcf\u500b suffix \u5728\u6587\u7ae0\u7684 start position\u3002"),(0,r.kt)("fig",{src:"/img/learning/data-mining/02-fp-growth/suffix_tree_build.png",caption:"Build a Suffix Tree"}),(0,r.kt)("p",null,"Suffix tree \u53ef\u4ee5\u638c\u63e1\u6240\u6709\u6587\u5b57\u7684 suffixes\uff0c\u4e26\u4e14\u53ea\u9700\u8981 ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mtext",{parentName:"mrow"},"length"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(\\text{length})")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord"},"length")),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," \u7684\u6642\u9593\u5c31\u80fd\u5efa\u7acb tree\u3002\u4f8b\u5982\uff0c\u4e0b\u9762\u662f\u4e00\u500b\u5c07\u57fa\u56e0\u5e8f\u5217\u7d22\u5f15\u6210 suffix tree \u7684\u4f8b\u5b50\uff1a"),(0,r.kt)("fig",{src:"/img/learning/data-mining/02-fp-growth/suffix_tree_example.png",caption:"Example of Suffix Tree"}),(0,r.kt)("h2",{id:"fp-growth-algorithm"},"FP-Growth Algorithm"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f FP-growth \u7684\u6f14\u7b97\u6cd5\uff0c\u4e3b\u8981\u5206\u6210\u5169\u500b\u6b65\u9a5f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Construct FP-Tree (Frequent pattern tree)"),(0,r.kt)("li",{parentName:"ol"},"FP-Growth (Frequent pattern growth)",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u6839\u64da\u4e0d\u540c frequent item \u5c07 FP-tree \u5206\u88c2\u6210 Conditional FP-Tree"),(0,r.kt)("li",{parentName:"ol"},"\u91dd\u5c0d\u6bcf\u4e00\u500b conditional FP-Tree \u9032\u884c mining")))),(0,r.kt)("h3",{id:"fp-trees-construction"},"FP-Trees Construction"),(0,r.kt)("p",null,"\u5148 scan \u6240\u6709 1-itemset \u7684 support \uff0c\u4f46\u8981 sort \u6210 descending order\u3002\u6392\u5e8f\u53ef\u4ee5\u6539\u8b8a transaction \u7d50\u69cb\uff0c\u5e6b\u52a9\u6211\u5011\u7528\u66f4\u5c11 nodes \u4f86\u5efa\u6a39\u3002"),(0,r.kt)("fig",{src:"/img/learning/data-mining/02-fp-growth/fp_construction_1.png",caption:"FP-Tree Construction Step 1"}),(0,r.kt)("fig",{src:"/img/learning/data-mining/02-fp-growth/fp_construction_2.png",caption:"FP-Tree Construction Step 2"}),(0,r.kt)("p",null,"\u5c07 ordered \u7684 itemset \u5efa\u7acb\u6210 FP-tree\u3002\u5f9e\u7b2c\u4e00\u7b46\u958b\u59cb\u5efa\u6a39\uff0c\u4e00\u6a23\u7684 character \u5c31\u52a0\u4e00\uff0c\u4e0d\u4e00\u6a23\u7684 character \u5c31\u5efa\u7acb\u5206\u652f\u3002"),(0,r.kt)("fig",{src:"/img/learning/data-mining/02-fp-growth/fp_construction_3.png",caption:"FP-Tree Construction Step 3"}),(0,r.kt)("p",null,"\u6700\u5f8c\uff0c\u5c07 tree \u4e2d\u76f8\u540c character \u5f9e header table \u4e32\u9023\u8d77\u4f86\u3002"),(0,r.kt)("fig",{src:"/img/learning/data-mining/02-fp-growth/fp_construction_4.png",caption:"FP-Tree Construction Step 4"}),(0,r.kt)("h3",{id:"fp-growth"},"FP-Growth"),(0,r.kt)("p",null,"\u63a5\u7e8c\u4e0a\u9762\u7522\u751f\u7684 FP-Tree\uff0c\u6211\u5011\u5148\u5f9e\u6bcf\u4e00\u500b 1-itemset \u4f86\u5efa\u7acb ",(0,r.kt)("strong",{parentName:"p"},"Conditional Pattern Base")," (\u7531\u4e0b\u5f80\u4e0a)\uff0c\u4f8b\u5982 p \u53ef\u4ee5\u5f9e fcam (2 \u6b21) \u63a5\u904e\u4f86\uff0c\u4e5f\u53ef\u5f9e cb (1 \u6b21) \u63a5\u904e\u4f86\u3002"),(0,r.kt)("p",null,"\u63a5\u8457\u5f9e conditional pattern base \u5efa\u7acb\u51fa ",(0,r.kt)("strong",{parentName:"p"},"Conditional FP-Tree"),"\uff0c\u627e\u51fa\u5728 conditional pattern base \u6709\u76f8\u540c prefix \u7684 items\uff0c\u4e26\u4e14\u53ef\u4ee5\u7b26\u5408 minsup\u3002\u4f8b\u5982 p \u7684 fcam \u8ddf cb \u4ee3\u8868 ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mo",{parentName:"mrow"},"\u2192"),(0,r.kt)("mi",{parentName:"mrow"},"p")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"c \\rightarrow p")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))," \u5171\u6709\u51fa\u73fe 3 \u6b21\u3002"),(0,r.kt)("p",null,"\u6700\u5f8c\uff0c\u6211\u5011\u5c07 conditional FP-Tree \u627e\u5230\u7684 items \u5404\u81ea\u62c6\u958b\u8207\u539f\u672c\u7684 item \u7d50\u5408\uff0c\u4f8b\u5982 ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mtext",{parentName:"mrow"},"\u2005\u200a"),(0,r.kt)("mo",{parentName:"mrow"},"\u27f9"),(0,r.kt)("mtext",{parentName:"mrow"},"\u2005\u200a"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mo",{parentName:"mrow"},"\u2192"),(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"c \\implies (c \\rightarrow p)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.549em",verticalAlign:"-0.024em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"\u27f9"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\u3002"),(0,r.kt)("fig",{src:"/img/learning/data-mining/02-fp-growth/fp_growth_1.png",caption:"FP-Growth"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/18XxvzPmSFWpnDQ-Mfd_ekEsw64fUTJ5z/view"},"A complete FP-Growth Example"))),(0,r.kt)("h2",{id:"fp-growth-advantages"},"FP-Growth Advantages"),(0,r.kt)("p",null,"FP-Growth Advantages include the use of the divide-and-conquer technique to decompose mining and the database, as well as no need for candidate generation, a compressed database (FP-Tree), no repeated scans of the database, and no pattern searching and matching."))}c.isMDXComponent=!0}}]);