(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{219:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return h}));var o=n(2),r=n(6),a=(n(0),n(228)),i=n(231),s={id:"motivation",title:"Motivation"},c={id:"version-2.0.0-alpha.1/motivation",title:"Motivation",description:"Dungeon generators usually let you configure how many rooms do you want to generate, their sizes, how long corridors do you want, etc. If you want to control the structure of generated dungeons, they sometimes let you specify how sparse or dense should the dungeons be or how many corridors should be connected to each room. And based on that configuration, they generate a random dungeon layout.",source:"@site/versioned_docs\\version-2.0.0-alpha.1\\motivation.md",permalink:"/ProceduralLevelGenerator-Unity/docs/2.0.0-alpha.1/motivation",editUrl:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.1/motivation.md",version:"2.0.0-alpha.1",sidebar:"version-2.0.0-alpha.1/docs",previous:{title:"Introduction",permalink:"/ProceduralLevelGenerator-Unity/docs/2.0.0-alpha.1/introduction"},next:{title:"Installation",permalink:"/ProceduralLevelGenerator-Unity/docs/2.0.0-alpha.1/installation"}},l=[],u={rightToc:l};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Dungeon generators usually let you configure how many rooms do you want to generate, their sizes, how long corridors do you want, etc. If you want to control the structure of generated dungeons, they sometimes let you specify how sparse or dense should the dungeons be or how many corridors should be connected to each room. And based on that configuration, they generate a random dungeon layout. "),Object(a.b)("p",null,"For me, the biggest advantage of such generators is that the setup is usually very simple and you can start generating your dungeons literally after a few minutes. Another advantage is that these algorithms can often quickly generate layouts consisting of tens or even hundreds of rooms because there are not that many constraints on the structure of the dungeon so the process of finding a suitable dungeon is quite simple. These dungeon generators are perfectly suitable for the majority of games."),Object(a.b)("p",null,"The main goal of this dungeon generator is to give game designers a complete control over the structure of generated layouts. This is achieved by specifying so-called level (connectivity) graphs which describe how many rooms you want to generate and how they should be connected to one another. Moreover, the look of individual rooms is controlled by so-called room templates."),Object(a.b)("p",null,"Through the level graph, a game designer can easily affect the flow of gameplay. Do you want a single main path to a boss room with some optional side paths? Simply start with a path graph and then pick some nodes where the player can choose to either follow the main path or explore a side path with possible treasures and/or monsters waiting for him or her. Do you want a shortcut? Simply choose two nodes in the graph and add a shorter path that connects them. The possibilities are endless."),Object(a.b)(i.c,{src:"img/original/motivation_level_graphs.png",caption:"Examples of input graphs. Main path is shown in red, optional paths are blue and a shortcut is orange.",mdxType:"Image"}),Object(a.b)("p",null,"The price for all of this is the performance of the algorithm. The most difficult thing is laying out rooms that are part of a cycle in the level graph. And even though the algorithm is specialized to handle cycles, there is a point where a level graph is simply too complex for the algorithm to handle."))}h.isMDXComponent=!0},228:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,m=h["".concat(i,".").concat(d)]||h[d]||p[d]||a;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},229:function(e,t,n){"use strict";var o=n(0),r=n(34);t.a=function(){return Object(o.useContext)(r.a)}},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(229);function r(e){const{siteConfig:t}=Object(o.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return h}));var o=n(2),r=n(0),a=n.n(r),i=n(230);const s=e=>a.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),c=e=>a.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},a.a.Children.map(e.children,t=>a.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight}))),l=e=>a.a.createElement(s,{cols:e.cols},a.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},a.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&a.a.createElement(u,null,e.caption)),u=e=>a.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),h=e=>{const{src:t,caption:n,...r}=e;return a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("img",Object(o.a)({src:Object(i.a)(e.src)},r)),void 0!==e.caption&&a.a.createElement(u,null,e.caption))}}}]);