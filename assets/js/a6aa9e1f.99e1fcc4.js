"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3089],{46:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var r=a(7294),n=a(6010),l=a(2263),i=a(1944),o=a(5281),c=a(9058),s=a(9703),m=a(197),g=a(9985);function d(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,l.Z)(),{blogDescription:n,blogTitle:o,permalink:c}=t,s="/"===c?a:o;return r.createElement(r.Fragment,null,r.createElement(i.d,{title:s,description:n}),r.createElement(m.Z,{tag:"blog_posts_list"}))}function p(e){const{metadata:t,items:a,sidebar:n}=e;return r.createElement(c.Z,{sidebar:n},r.createElement(g.Z,{items:a}),r.createElement(s.Z,{metadata:t}))}function u(e){return r.createElement(i.FG,{className:(0,n.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},r.createElement(d,e),r.createElement(p,e))}},9703:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(5999),l=a(2244);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(l.Z,{permalink:a,title:r.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&r.createElement(l.Z,{permalink:i,title:r.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(9460),l=a(857);function i(e){let{items:t,component:a=l.Z}=e;return r.createElement(r.Fragment,null,t.map((e=>{let{content:t}=e;return r.createElement(n.n,{key:t.metadata.permalink,content:t},r.createElement(a,null,r.createElement(t,null)))})))}},1770:(e,t,a)=>{a.d(t,{X:()=>i});var r=a(9861),n=a(7294),l=a(2949);const i=()=>{const{colorMode:e}=(0,l.I)();return n.createElement(r.Z,{repo:"windsuzu/windsuzu.github.io",repoId:"R_kgDOIlO8WQ",category:"Announcements",categoryId:"DIC_kwDOIlO8Wc4CUp9E",mapping:"url",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"zh-TW",loading:"lazy"})}},857:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(390),l=a(1770);function i(e){return r.createElement(r.Fragment,null,r.createElement(n.Z,e),r.createElement(l.X,null))}},8137:(e,t,a)=>{a.d(t,{Z:()=>f});var r=a(169),n=a(7294),l=a(4996);const i="gradient-text_Bqxt",o=e=>{let{children:t,color:a,style:r}=e;return n.createElement("div",{style:{userSelect:"none",padding:"0.2rem 0.5rem",background:a,fontWeight:700,color:"white",fontFamily:"Archivo Black, sans-serif",letterSpacing:"0.05rem",...r}},t)},c=e=>{let{level:t}=e;const a=(0,n.useMemo)((()=>({beginner:"#8b9862",intermediate:"#f18f43",advanced:"#ca4246"})),[]);return n.createElement(o,{color:a[t]},t.charAt(0).toUpperCase()+t.slice(1))},s=e=>{let{category:t}=e;const a=(0,n.useMemo)((()=>({"react/next":"#476098","js/ts":"#89632a","html/css":"#ca4246",other:"#a7489b"})),[]),r=(0,n.useMemo)((()=>({"react/next":"React / Next","js/ts":"JavaScript / TypeScript","html/css":"HTML / CSS",other:"Other"})),[]),l=(0,n.useMemo)((()=>Array.isArray(t)?t:[t]),[t]);return n.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.2rem"}},l.map((e=>n.createElement(o,{color:a[e],key:e},r[e]))))};var m=a(9521);const g=m.ZP.div`
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
`,d=m.ZP.fieldset`
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 6px;
  min-width: 0;
  text-overflow: ellipsis;
  overflow: hidden;
`,p=m.ZP.legend`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  padding: 0 0.5rem;
  font-family: "ink free";
  color: #476098;
`,u=m.ZP.ul`
  width: 100%;
  word-wrap: break-word;
  li::marker {
    content: "📝 ";
  }
  li {
    margin-bottom: 0.8rem;
  }
`,f={...r.Z,fig:e=>{let{src:t,caption:a}=e;return n.createElement("figure",{style:{padding:20,display:"flex",alignItems:"center",flexFlow:"column",gap:4}},n.createElement("img",{src:(0,l.Z)(t),alt:a}),n.createElement("figcaption",{style:{fontSize:14,textAlign:"center",color:"#BDBDBD"}},a))},profile:e=>{let{title:t,url:a,author:r,level:l,category:o}=e;return n.createElement("div",{style:{display:"flex",flexDirection:"column",placeItems:"start",textAlign:"start",padding:"0 0 2rem 0"}},n.createElement("a",{href:a,target:"_blank",rel:"noreferrer",className:i},t),n.createElement("p",{style:{fontWeight:600,margin:0,color:"gray",fontFamily:"monospace"}},n.createElement("span",{style:{fontSize:"1rem"}},"from"),"  ",n.createElement("span",{style:{fontSize:"1.5rem"}},r)),n.createElement("div",{style:{padding:"0.6rem 0",display:"flex",flexWrap:"wrap",gap:12}},n.createElement(c,{level:l}),n.createElement("p",{style:{margin:0,fontWeight:900,fontSize:19,verticalAlign:"middle"}},"/"),n.createElement(s,{category:o})))},highlight:e=>{let{children:t}=e;return n.createElement("span",{style:{padding:"0 5px",background:"linear-gradient(to bottom, transparent 60%, #fce0414D 50%)",fontWeight:"bold"}},t)},divider:g,takeaway:e=>{let{points:t}=e;return n.createElement(d,null,n.createElement(p,null,"Key Takeaways"),n.createElement(u,null,t.map(((e,t)=>n.createElement("li",{key:t},e)))))}}},6922:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(9521);const l={React:r,...r,styled:n.ZP}}}]);