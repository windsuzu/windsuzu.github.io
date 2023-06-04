"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8610],{9703:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(5999),l=a(2244);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(l.Z,{permalink:a,title:r.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&r.createElement(l.Z,{permalink:o,title:r.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(9460),l=a(857);function o(e){let{items:t,component:a=l.Z}=e;return r.createElement(r.Fragment,null,t.map((e=>{let{content:t}=e;return r.createElement(n.n,{key:t.metadata.permalink,content:t},r.createElement(a,null,r.createElement(t,null)))})))}},1714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var r=a(7294),n=a(6010),l=a(5999),o=a(8824),i=a(1944),s=a(5281),c=a(9960),m=a(9058),g=a(9703),p=a(197),d=a(9985);function u(e){const t=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,l.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,l.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h(e){let{tag:t}=e;const a=u(t);return r.createElement(r.Fragment,null,r.createElement(i.d,{title:a}),r.createElement(p.Z,{tag:"blog_tags_posts"}))}function f(e){let{tag:t,items:a,sidebar:n,listMetadata:o}=e;const i=u(t);return r.createElement(m.Z,{sidebar:n},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,i),r.createElement(c.Z,{href:t.allTagsPath},r.createElement(l.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),r.createElement(d.Z,{items:a}),r.createElement(g.Z,{metadata:o}))}function E(e){return r.createElement(i.FG,{className:(0,n.Z)(s.k.wrapper.blogPages,s.k.page.blogTagPostListPage)},r.createElement(h,e),r.createElement(f,e))}},1770:(e,t,a)=>{a.d(t,{X:()=>o});var r=a(9861),n=a(7294),l=a(2949);const o=()=>{const{colorMode:e}=(0,l.I)();return n.createElement(r.Z,{repo:"windsuzu/windsuzu.github.io",repoId:"R_kgDOIlO8WQ",category:"Announcements",categoryId:"DIC_kwDOIlO8Wc4CUp9E",mapping:"url",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"zh-TW",loading:"lazy"})}},857:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(390),l=a(1770);function o(e){return r.createElement(r.Fragment,null,r.createElement(n.Z,e),r.createElement(l.X,null))}},8137:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(169),n=a(7294),l=a(4996);const o="gradient-text_Bqxt",i=e=>{let{children:t,color:a,style:r}=e;return n.createElement("div",{style:{userSelect:"none",padding:"0.2rem 0.5rem",background:a,fontWeight:700,color:"white",fontFamily:"Archivo Black, sans-serif",letterSpacing:"0.05rem",...r}},t)},s=e=>{let{level:t}=e;const a=(0,n.useMemo)((()=>({beginner:"#8b9862",intermediate:"#f18f43",advanced:"#ca4246"})),[]);return n.createElement(i,{color:a[t]},t.charAt(0).toUpperCase()+t.slice(1))},c=e=>{let{category:t}=e;const a=(0,n.useMemo)((()=>({"react/next":"#476098","js/ts":"#89632a","html/css":"#ca4246",other:"#a7489b"})),[]),r=(0,n.useMemo)((()=>({"react/next":"React / Next","js/ts":"JavaScript / TypeScript","html/css":"HTML / CSS",other:"Other"})),[]),l=(0,n.useMemo)((()=>Array.isArray(t)?t:[t]),[t]);return n.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.2rem"}},l.map((e=>n.createElement(i,{color:a[e],key:e},r[e]))))};var m=a(9521);const g=m.ZP.div`
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
`,p=m.ZP.fieldset`
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 6px;
  min-width: 0;
  text-overflow: ellipsis;
  overflow: hidden;
`,d=m.ZP.legend`
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
`,h={...r.Z,fig:e=>{let{src:t,caption:a}=e;return n.createElement("figure",{style:{padding:20,display:"flex",alignItems:"center",flexFlow:"column",gap:4}},n.createElement("img",{src:(0,l.Z)(t),alt:a}),n.createElement("figcaption",{style:{fontSize:14,textAlign:"center",color:"#BDBDBD"}},a))},profile:e=>{let{title:t,url:a,author:r,level:l,category:i}=e;return n.createElement("div",{style:{display:"flex",flexDirection:"column",placeItems:"start",textAlign:"start",padding:"0 0 2rem 0"}},n.createElement("a",{href:a,target:"_blank",rel:"noreferrer",className:o},t),n.createElement("p",{style:{fontWeight:600,margin:0,color:"gray",fontFamily:"monospace"}},n.createElement("span",{style:{fontSize:"1rem"}},"from"),"  ",n.createElement("span",{style:{fontSize:"1.5rem"}},r)),n.createElement("div",{style:{padding:"0.6rem 0",display:"flex",flexWrap:"wrap",gap:12}},n.createElement(s,{level:l}),n.createElement("p",{style:{margin:0,fontWeight:900,fontSize:19,verticalAlign:"middle"}},"/"),n.createElement(c,{category:i})))},highlight:e=>{let{children:t}=e;return n.createElement("span",{style:{padding:"0 5px",background:"linear-gradient(to bottom, transparent 60%, #fce0414D 50%)",fontWeight:"bold"}},t)},divider:g,takeaway:e=>{let{points:t}=e;return n.createElement(p,null,n.createElement(d,null,"Key Takeaways"),n.createElement(u,null,t.map(((e,t)=>n.createElement("li",{key:t},e)))))}}},6922:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(9521);const l={React:r,...r,styled:n.ZP}}}]);