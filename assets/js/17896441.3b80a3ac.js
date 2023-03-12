"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7918],{5671:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ve});var a=n(7294),l=n(1944),r=n(902);const o=a.createContext(null);function s(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(o.Provider,{value:l},t)}function c(){const e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:n}=c();return a.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(6010),m=n(7524),u=n(7462),p=n(5999),v=n(2244);function h(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(v.Z,(0,u.Z)({},t,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(v.Z,(0,u.Z)({},n,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function f(){const{metadata:e}=c();return a.createElement(h,{previous:e.previous,next:e.next})}var g=n(2263),b=n(9960),E=n(143),L=n(5281),N=n(373),y=n(4477);const k={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function x(e){const t=k[e.versionMetadata.banner];return a.createElement(t,e)}function Z(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(p.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(b.Z,{to:n,onClick:l},a.createElement(p.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function _(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,g.Z)(),{pluginId:r}=(0,E.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,N.J)(r),{latestDocSuggestion:s,latestVersionSuggestion:c}=(0,E.Jo)(r),i=s??(m=c).docs.find((e=>e.id===m.mainDocId));var m;return a.createElement("div",{className:(0,d.Z)(t,L.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(x,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(Z,{versionLabel:c.label,to:i.path,onClick:()=>o(c.name)})))}function C(e){let{className:t}=e;const n=(0,y.E)();return n.banner?a.createElement(_,{className:t,versionMetadata:n}):null}function T(e){let{className:t}=e;const n=(0,y.E)();return n.badge?a.createElement("span",{className:(0,d.Z)(t,L.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(p.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function w(e){let{lastUpdatedBy:t}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function H(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:L.k.common.lastUpdated},a.createElement(p.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(A,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(w,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var U=n(4881),M=n(1526);const I="lastUpdated_vwxv";function B(e){return a.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(M.Z,e)))}function S(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(U.Z,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",I)},(n||l)&&a.createElement(H,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function O(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:o}=e,s=o.length>0,i=!!(t||n||r);return s||i?a.createElement("footer",{className:(0,d.Z)(L.k.docs.docFooter,"docusaurus-mt-lg")},s&&a.createElement(B,{tags:o}),i&&a.createElement(S,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var D=n(6043),z=n(3743);const P="tocCollapsibleButton_TO0P",R="tocCollapsibleButtonExpanded_MG3E";function V(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,u.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",P,!t&&R,n.className)}),a.createElement(p.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const F="tocCollapsible_ETCw",W="tocCollapsibleContent_vkbj",j="tocCollapsibleExpanded_sAul";function q(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:s}=(0,D.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(F,!o&&j,n)},a.createElement(V,{collapsed:o,onClick:s}),a.createElement(D.z,{lazy:!0,className:W,collapsed:o},a.createElement(z.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const J="tocMobile_ITEo";function $(){const{toc:e,frontMatter:t}=c();return a.createElement(q,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(L.k.docs.docTocMobile,J)})}var G=n(9407);function X(){const{toc:e,frontMatter:t}=c();return a.createElement(G.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:L.k.docs.docTocDesktop})}var Q=n(2503),Y=n(5042);function K(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(L.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(Q.Z,{as:"h1"},n)),a.createElement(Y.Z,null,t))}var ee=n(2802),te=n(8596),ne=n(4996);function ae(e){return a.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const le="breadcrumbHomeIcon_YNFT";function re(){const e=(0,ne.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(b.Z,{"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(ae,{className:le})))}const oe="breadcrumbsContainer_Z_bl";function se(e){let{children:t,href:n,isLast:l}=e;const r="breadcrumbs__link";return l?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(b.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function ce(e){let{children:t,active:n,index:l,addMicrodata:r}=e;return a.createElement("li",(0,u.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function ie(){const e=(0,ee.s1)(),t=(0,te.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(L.k.docs.docBreadcrumbs,oe),"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(re,null),e.map(((t,n)=>{const l=n===e.length-1;return a.createElement(ce,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(se,{href:t.href,isLast:l},t.label))})))):null}const de="docItemContainer_c0TR",me="docItemCol_z5aJ";var ue=n(1770);function pe(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?a.createElement($,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(X,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!n.hidden&&me)},a.createElement(C,null),a.createElement("div",{className:de},a.createElement("article",null,a.createElement(ie,null),a.createElement(T,null),n.mobile,a.createElement(K,null,t),a.createElement(O,null)),a.createElement(f,null)),a.createElement("br",null),a.createElement(ue.X,null)),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function ve(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(s,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(i,null),a.createElement(pe,null,a.createElement(n,null))))}},9407:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),l=n(7294),r=n(6010),o=n(3743);const s="tableOfContents_bqdL";function c(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(s,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),l=n(7294),r=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),c=i(s,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const p=l.memo(u);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:u,...v}=e;const h=(0,r.L)(),f=d??h.tableOfContents.minHeadingLevel,g=u??h.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>s({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:f,maxHeadingLevel:g});return m((0,l.useMemo)((()=>{if(c&&i)return{linkClassName:c,linkActiveClassName:i,minHeadingLevel:f,maxHeadingLevel:g}}),[c,i,f,g])),l.createElement(p,(0,a.Z)({toc:b,className:n,linkClassName:c},v))}},1770:(e,t,n)=>{n.d(t,{X:()=>o});var a=n(9861),l=n(7294),r=n(2949);const o=()=>{const{colorMode:e}=(0,r.I)();return l.createElement(a.Z,{repo:"windsuzu/windsuzu.github.io",repoId:"R_kgDOIlO8WQ",category:"Announcements",categoryId:"DIC_kwDOIlO8Wc4CUp9E",mapping:"url",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"zh-TW",loading:"lazy"})}},2021:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(1031),l=n(7294),r=n(4996);const o="gradient-text_Bqxt",s=e=>{let{children:t,color:n,style:a}=e;return l.createElement("div",{style:{userSelect:"none",padding:"0.2rem 0.5rem",background:n,fontWeight:700,color:"white",fontFamily:"Archivo Black, sans-serif",letterSpacing:"0.05rem",...a}},t)},c=e=>{let{level:t}=e;const n=(0,l.useMemo)((()=>({beginner:"#8b9862",intermediate:"#f18f43",advanced:"#ca4246"})),[]);return l.createElement(s,{color:n[t]},t.charAt(0).toUpperCase()+t.slice(1))},i=e=>{let{category:t}=e;const n=(0,l.useMemo)((()=>({"react/next":"#476098","js/ts":"#89632a","html/css":"#ca4246",other:"#a7489b"})),[]),a=(0,l.useMemo)((()=>({"react/next":"React / Next","js/ts":"JavaScript / TypeScript","html/css":"HTML / CSS",other:"Other"})),[]),r=(0,l.useMemo)((()=>Array.isArray(t)?t:[t]),[t]);return l.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.2rem"}},r.map((e=>l.createElement(s,{color:n[e],key:e},a[e]))))};const d=n(9521).ZP.div`
  position: relative;
  width: "75%";
  margin: 3rem auto;
  height: 1px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 5%;
    right: 5%;
    width: 90%;
    height: 2px;
    background-image: linear-gradient(
      to right,
      transparent,
      #9a9fa6,
      transparent
    );
  }
`,m={...a.Z,fig:e=>{let{src:t,caption:n}=e;return l.createElement("figure",{style:{padding:20,display:"flex",alignItems:"center",flexFlow:"column",gap:4}},l.createElement("img",{src:(0,r.Z)(t),alt:n}),l.createElement("figcaption",{style:{fontSize:14,textAlign:"center",color:"#BDBDBD"}},n))},profile:e=>{let{title:t,url:n,author:a,level:r,category:s}=e;return l.createElement("div",{style:{display:"flex",flexDirection:"column",placeItems:"start",textAlign:"start",padding:"0 0 2rem 0"}},l.createElement("a",{href:n,target:"_blank",rel:"noreferrer",className:o},t),l.createElement("p",{style:{fontWeight:600,margin:0,color:"gray",fontFamily:"monospace"}},l.createElement("span",{style:{fontSize:"1rem"}},"from"),"  ",l.createElement("span",{style:{fontSize:"1.5rem"}},a)),l.createElement("div",{style:{padding:"0.6rem 0",display:"flex",flexWrap:"wrap",gap:12}},l.createElement(c,{level:r}),l.createElement("p",{style:{margin:0,fontWeight:900,fontSize:19,verticalAlign:"middle"}},"/"),l.createElement(i,{category:s})))},highlight:e=>{let{children:t}=e;return l.createElement("span",{style:{padding:"0 5px",background:"linear-gradient(to bottom, transparent 60%, #fce041 50%)",fontWeight:"bold"}},t)},divider:d}},6922:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),l=n(9521);const r={React:a,...a,styled:l.ZP}}}]);