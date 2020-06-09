(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{197:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return n})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return m}));var a=r(2),o=r(6),l=(r(0),r(228)),i=r(231),n={title:"Example 2"},c={id:"examples/example-2",title:"Example 2",description:"In this tutorial, we will use this tileset by 0x72. Be sure to check their work out if you like the tileset. We will not care about room decorations - we will use just basic walls, floor and  door tiles.",source:"@site/docs\\examples\\example-2.md",permalink:"/ProceduralLevelGenerator-Unity/docs/next/examples/example-2",editUrl:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator-Unity/tree/docusaurus/docs/examples/example-2.md",version:"next",sidebar:"docs",previous:{title:"Example 1",permalink:"/ProceduralLevelGenerator-Unity/docs/next/examples/example-1"},next:{title:"(PRO) Platformer 1",permalink:"/ProceduralLevelGenerator-Unity/docs/next/examples/platformer-1"}},s=[{value:"Simple example",id:"simple-example",children:[{value:"Basic rooms romplates",id:"basic-rooms-romplates",children:[]},{value:"Vertical corridors",id:"vertical-corridors",children:[]},{value:"Horizontal corridors",id:"horizontal-corridors",children:[]},{value:"Level graph",id:"level-graph",children:[]},{value:"Results",id:"results",children:[]}]},{value:"Real-life example",id:"real-life-example",children:[{value:"Spawn and boss rooms",id:"spawn-and-boss-rooms",children:[]},{value:"Additional room template",id:"additional-room-template",children:[]},{value:"Wider corridors",id:"wider-corridors",children:[]},{value:"Level graph",id:"level-graph-1",children:[]},{value:"Results",id:"results-1",children:[]}]}],p={rightToc:s};function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"In this tutorial, we will use ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://0x72.itch.io/dungeontileset-ii"}),"this tileset")," by ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://0x72.itch.io/"}),"0x72"),". Be sure to check their work out if you like the tileset. We will not care about room decorations - we will use just basic walls, floor and  door tiles."),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/original/example2_result1.png",caption:"Simple example",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/v2/examples/example2/result_reallife1.png",caption:"Real-life example",mdxType:"GalleryImage"})),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note:")," I recommend reading ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"example1.md"}),"Example 1")," first as this is a little bit harder to setup and I will not repeat the basics here.")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note:")," All files from this example can be found at ",Object(l.b)("em",{parentName:"p"},"ProceduralLevelGenerator/Examples/Example2"),".")),Object(l.b)("h2",{id:"simple-example"},"Simple example"),Object(l.b)("p",null,"The goal is to create two basic rectangular room remplates of different sizes and a room template for both horizontal and vertical corridors."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note:")," This tileset is trickier than the one used in ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"example1.md"}),"Example 1")," because there is an additional row of ligther tiles above all horizontal wall tiles. It will cause us problems when working with corridors.")),Object(l.b)("h3",{id:"basic-rooms-romplates"},"Basic rooms romplates"),Object(l.b)("p",null,"For this example, I am using doors with two different lengths (1 and 2). That means that we have to use the ",Object(l.b)("em",{parentName:"p"},"Specific positions mode")," mode because the ",Object(l.b)("em",{parentName:"p"},"Simple mode")," can only handle doors with the same length. As you can see below, the door positions look quite messy because they overlap. However, this is only to showcase that it is possible and you can use doors with the same length."),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/original/example2_room1.png",caption:"Smaller room",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/original/example2_room2.png",caption:"Bigger room",mdxType:"GalleryImage"})),Object(l.b)("h3",{id:"vertical-corridors"},"Vertical corridors"),Object(l.b)("p",null,"As I said before, there is a problem with corridors when working with this tileset. To be more precise, there is a problem with vertical corridors because of the additional roow of tiles above wall tiles. If we were to design our vertical corridors as in Example 1, we would end up with something like this:"),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/original/example2_wrong_corridor.png",caption:"Incorrent vertical corridor",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/original/example2_wrong_corridor2.png",caption:"Incorrent connection",mdxType:"GalleryImage"})),Object(l.b)("p",null,"We can solve this by using the ",Object(l.b)("strong",{parentName:"p"},"Outline override")," feature. It allows us to tell the algorithm that instead of automatically computing the outline of the room template, we want to draw it manually. You can see the result below. By doing so, we easily fix the problem with walls being one tile taller and the level is drawn correctly."),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/v2/examples/example2/corridor_vertical_before.png",caption:"Incorrect - Without outline override",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/v2/examples/example2/corridor_vertical_after.png",caption:"Correct - With outline override",mdxType:"GalleryImage"})),Object(l.b)("p",null,"To enable the ",Object(l.b)("strong",{parentName:"p"},"Outline override"),", we have to click the ",Object(l.b)("strong",{parentName:"p"},"Add outline override")," button. This button adds another tilemap layer called ",Object(l.b)("em",{parentName:"p"},"Outline Override"),". "),Object(l.b)(i.c,{src:"img/v2/examples/example2/corridor_vertical_before_gui.png",caption:"Add outline override button",mdxType:"Image"}),Object(l.b)("p",null,"When computing the outline of this room template, the generator will now ignore all the other layers and use only the ",Object(l.b)("em",{parentName:"p"},"Outline Override")," layer. Moreover, the generator will ignore this layer while copying individual tiles to the shared tilemap so we can use any tiles to draw on this layer. And where we are done with drawing the outline, we can make that tilemap layer inactive so we can see how the room template normally looks."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note:")," We must not forget to make sure that all our doors are contained on the new outline.")),Object(l.b)(i.c,{src:"img/v2/examples/example2/corridor_vertical_with_outline_shown.png",caption:"We can use any tiles to draw on the Outline Override layer as they are not used in the output.",mdxType:"Image"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note:")," In the previous version of the algorithm, we had to manually implement some additional logic to fix these situations. The goal of the current version is to make it possible without writing any code.")),Object(l.b)("h3",{id:"horizontal-corridors"},"Horizontal corridors"),Object(l.b)("p",null,"There is also a slight problem with horizontal corridors. It is currently not possible to have doors with length 1 to be at the corners of the room template outline. We fix this by adding ",Object(l.b)("strong",{parentName:"p"},"Outline override")," and using a rectangular outline where the doors are not at the corners."),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/v2/examples/example2/corridor_horizontal_before.png",caption:"Incorrect - Without outline override. There must not be doors of length 1 at the corners of the outline.",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/v2/examples/example2/corridor_horizontal_after.png",caption:"Correct - With outline override. Doors are no longer at the corners of the outline.",mdxType:"GalleryImage"})),Object(l.b)("h3",{id:"level-graph"},"Level graph"),Object(l.b)(i.c,{src:"img/v2/examples/example2/level_graph1.png",caption:"Level graph",mdxType:"Image"}),Object(l.b)("h3",{id:"results"},"Results"),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/original/example2_result2.png",caption:"Example result",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/original/example2_result3.png",caption:"Example result",mdxType:"GalleryImage"})),Object(l.b)("h2",{id:"real-life-example"},"Real-life example"),Object(l.b)("p",null,"To create something that is closer to a real-life example, we will add more rooms to the level graph, add special room templates for spawn and boss rooms and also two more corridor room templates."),Object(l.b)("h3",{id:"spawn-and-boss-rooms"},"Spawn and boss rooms"),Object(l.b)("p",null,"These rooms will contain:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"our player prefab with basic movement"),Object(l.b)("li",{parentName:"ul"},"interactable chest that changes appearance after interaction (no loot is implemented)"),Object(l.b)("li",{parentName:"ul"},"ladder that causes the game manager to generated a new level after interaction"),Object(l.b)("li",{parentName:"ul"},"an ogre in the boss room (no AI implemented)")),Object(l.b)(i.c,{src:"img/v2/examples/example2/spawn.png",caption:"Spawn room with our player prefab, chest and exit",mdxType:"Image"}),Object(l.b)(i.c,{src:"img/v2/examples/example2/boss.png",caption:"Boss room with our enemy prefab, chest and exit",mdxType:"Image"}),Object(l.b)("h3",{id:"additional-room-template"},"Additional room template"),Object(l.b)("p",null,"We can make generated dungeons more interesting by adding smaller room templates to our dead-end rooms."),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/original/example2_room3.png",caption:"Additional room tempalte",mdxType:"GalleryImage"})),Object(l.b)("h3",{id:"wider-corridors"},"Wider corridors"),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/original/example2_corridor_horizontal2.png",caption:"Wider horizontal corridor",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/original/example2_corridor_vertical2.png",caption:"Wider vertical corridor",mdxType:"GalleryImage"})),Object(l.b)("h3",{id:"level-graph-1"},"Level graph"),Object(l.b)("p",null,"So the goal is to have more rooms than in the simple example and also a spawn room and a boss room. You can see one such level graph below."),Object(l.b)(i.c,{src:"img/v2/examples/example2/level_graph2.png",caption:"Level graph",mdxType:"Image"}),Object(l.b)("h3",{id:"results-1"},"Results"),Object(l.b)(i.c,{src:"img/v2/examples/example2/result_reallife2.png",caption:"Example result",mdxType:"Image"}),Object(l.b)(i.c,{src:"img/v2/examples/example2/result_reallife3.png",caption:"Example result",mdxType:"Image"}))}m.isMDXComponent=!0},228:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return u}));var a=r(0),o=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},m=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,u=m["".concat(i,".").concat(d)]||m[d]||b[d]||l;return r?o.a.createElement(u,n(n({ref:t},s),{},{components:r})):o.a.createElement(u,n({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var n={};for(var c in t)hasOwnProperty.call(t,c)&&(n[c]=t[c]);n.originalType=e,n.mdxType="string"==typeof e?e:a,i[1]=n;for(var s=2;s<l;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},229:function(e,t,r){"use strict";var a=r(0),o=r(34);t.a=function(){return Object(a.useContext)(o.a)}},230:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(229);function o(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:r="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},231:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return m}));var a=r(2),o=r(0),l=r.n(o),i=r(230);const n=e=>l.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),c=e=>l.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},l.a.Children.map(e.children,t=>l.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight}))),s=e=>l.a.createElement(n,{cols:e.cols},l.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},l.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&l.a.createElement(p,null,e.caption)),p=e=>l.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),m=e=>{const{src:t,caption:r,...o}=e;return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("img",Object(a.a)({src:Object(i.a)(e.src)},o)),void 0!==e.caption&&l.a.createElement(p,null,e.caption))}}}]);