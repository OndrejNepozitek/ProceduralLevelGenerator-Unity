(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{237:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return m}));var n=r(2),a=r(6),l=(r(0),r(254)),i=r(257),o={title:"(PRO) Isometric 1"},c={id:"examples/isometric-1",title:"(PRO) Isometric 1",description:"In this tutorial, we will use this tileset by @KenneyNL to create very basic isometric levels. Be sure to check their work out if you like the tileset.",source:"@site/docs\\examples\\isometric-1.md",permalink:"/ProceduralLevelGenerator-Unity/docs/next/examples/isometric-1",editUrl:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator-Unity/tree/docusaurus/docs/examples/isometric-1.md",version:"next",sidebar:"docs",previous:{title:"(PRO) Platformer 1",permalink:"/ProceduralLevelGenerator-Unity/docs/next/examples/platformer-1"},next:{title:"(PRO) Enter the Gungeon case study",permalink:"/ProceduralLevelGenerator-Unity/docs/next/examples/enter-the-gungeon"}},s=[{value:"Scope",id:"scope",children:[]},{value:"Tilemap layers",id:"tilemap-layers",children:[]},{value:"Room templates",id:"room-templates",children:[]},{value:"Corridors",id:"corridors",children:[]},{value:"Level graph",id:"level-graph",children:[]},{value:"Results",id:"results",children:[]}],p={rightToc:s};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"In this tutorial, we will use ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.kenney.nl/assets/isometric-prototype-tiles"}),"this tileset")," by ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/KenneyNL"}),"@KenneyNL")," to create very basic isometric levels. Be sure to check their work out if you like the tileset. "),Object(l.b)(i.c,{src:"img/v2/examples/isometric1/result1.png",caption:"Example result",mdxType:"Image"}),Object(l.b)("h2",{id:"scope"},"Scope"),Object(l.b)("p",null,"This example is only a very simple showcase of generating isometric levels."),Object(l.b)("p",null,"It ",Object(l.b)("strong",{parentName:"p"},"includes"),":"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Basic isometric room templates"),Object(l.b)("li",{parentName:"ul"},"Custom tilemap layers structure"),Object(l.b)("li",{parentName:"ul"},"Custom room template initializer")),Object(l.b)("p",null,"It ",Object(l.b)("strong",{parentName:"p"},"does not include"),":"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Any characters to move around with"),Object(l.b)("li",{parentName:"ul"},"Colliders")),Object(l.b)("h2",{id:"tilemap-layers"},"Tilemap layers"),Object(l.b)("p",null,"The ",Object(l.b)("em",{parentName:"p"},"Grid")," is set to ",Object(l.b)("em",{parentName:"p"},"Isometric")," and we use the following structure of tilemaps:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Level 0 - Floor"),Object(l.b)("li",{parentName:"ul"},"Level 0 - Walls"),Object(l.b)("li",{parentName:"ul"},"Level 0.5 - Floor"),Object(l.b)("li",{parentName:"ul"},"Level 0.5 - Walls"),Object(l.b)("li",{parentName:"ul"},"Level 1 - Floor"),Object(l.b)("li",{parentName:"ul"},"Level 1 - Walls"),Object(l.b)("li",{parentName:"ul"},"Colliders")),Object(l.b)("p",null,"For each elevation level we have 2 tilemap layers - one for floor tile and one for wall (and decoration) tiles. Between the levels 0 and 1 there is a half-level because stairs in the tileset are halfway between 0 and 1. And there is also one additional layer for colliders which is not used in this example but can be utilized to place collider tiles."),Object(l.b)("p",null,"Room template prefabs can be created via ",Object(l.b)("em",{parentName:"p"},"Create -> Dungeon generator -> Examples -> Isometric 1 -> Room template"),"."),Object(l.b)("h2",{id:"room-templates"},"Room templates"),Object(l.b)("p",null,"Below you can see some of the basic room templates:"),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/v2/examples/isometric1/room1.png",caption:"Basic room",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/v2/examples/isometric1/room2.png",caption:"Basic room",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/v2/examples/isometric1/room3.png",caption:"Basic room",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/v2/examples/isometric1/room5.png",caption:"Basic room",mdxType:"GalleryImage"})),Object(l.b)("h2",{id:"corridors"},"Corridors"),Object(l.b)("p",null,"Below you can see some of the corridors: (there are also longer versions)"),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/v2/examples/isometric1/corridor1short.png",caption:"Short corridor",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/v2/examples/isometric1/corridor2short.png",caption:"Short corridor",mdxType:"GalleryImage"})),Object(l.b)("h2",{id:"level-graph"},"Level graph"),Object(l.b)(i.c,{src:"img/v2/examples/isometric1/level_graph.png",caption:"Level graph",mdxType:"Image"}),Object(l.b)("h2",{id:"results"},"Results"),Object(l.b)(i.c,{src:"img/v2/examples/isometric1/result2.png",caption:"Example result",mdxType:"Image"}),Object(l.b)(i.c,{src:"img/v2/examples/isometric1/result3.png",caption:"Example result",mdxType:"Image"}))}m.isMDXComponent=!0},254:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),b=n,d=m["".concat(i,".").concat(b)]||m[b]||u[b]||l;return r?a.a.createElement(d,o(o({ref:t},s),{},{components:r})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},255:function(e,t,r){"use strict";var n=r(0),a=r(34);t.a=function(){return Object(n.useContext)(a.a)}},256:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(255);function a(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:r="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},257:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return m}));var n=r(2),a=r(0),l=r.n(a),i=r(256);const o=e=>l.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),c=e=>l.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},l.a.Children.map(e.children,t=>l.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight}))),s=e=>l.a.createElement(o,{cols:e.cols},l.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},l.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&l.a.createElement(p,null,e.caption)),p=e=>l.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),m=e=>{const{src:t,caption:r,...a}=e;return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("img",Object(n.a)({src:Object(i.a)(e.src)},a)),void 0!==e.caption&&l.a.createElement(p,null,e.caption))}}}]);