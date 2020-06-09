(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return c}));var r=a(2),n=a(6),i=(a(0),a(228)),o={title:"Room template customization"},l={id:"version-2.0.0-alpha.3/guides/room-template-customization",title:"Room template customization",description:"In this guide, we will cover:",source:"@site/versioned_docs\\version-2.0.0-alpha.3\\guides\\room-template-customization.md",permalink:"/ProceduralLevelGenerator-Unity/docs/guides/room-template-customization",editUrl:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.3/guides/room-template-customization.md",version:"2.0.0-alpha.3",sidebar:"version-2.0.0-alpha.3/docs",previous:{title:"(PRO) Dead Cells case study",permalink:"/ProceduralLevelGenerator-Unity/docs/examples/dead-cells"},next:{title:"(PRO) Procedural level graphs",permalink:"/ProceduralLevelGenerator-Unity/docs/guides/procedural-level-graphs"}},m=[{value:"Tilemap layers",id:"tilemap-layers",children:[{value:"Register the  handler in the generator",id:"register-the--handler-in-the-generator",children:[]},{value:"Create a custom room template initializer",id:"create-a-custom-room-template-initializer",children:[]}]},{value:"Room template initializers",id:"room-template-initializers",children:[]}],s={rightToc:m};function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this guide, we will cover:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"How to ",Object(i.b)("strong",{parentName:"li"},"override the default structure of tilemap layers")),Object(i.b)("li",{parentName:"ol"},"How to ",Object(i.b)("strong",{parentName:"li"},"customize room templates")," e.g. by automatically adding additional gameobject/components")),Object(i.b)("h2",{id:"tilemap-layers"},"Tilemap layers"),Object(i.b)("p",null,"Each room template comes with a set of tilemap layers that are all children of the ",Object(i.b)("em",{parentName:"p"},"Tilemaps")," gameobject in the room template. For dungeon room templates, we usually want a tilemap layer for wall tiles, floor tiles, etc. We tried to provide a reasonable default setup but it is expected that users may want to use a different structure."),Object(i.b)("p",null,"To override the default structure of tilemaps, we first have to create a class that inherits from the ",Object(i.b)("inlineCode",{parentName:"p"},"TilemapLayersHandlerBase")," class. Below is a commented example of how to do that."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'using ProceduralLevelGenerator.Unity.Generators.Common.RoomTemplates.TilemapLayers;\nusing UnityEngine;\nusing UnityEngine.Tilemaps;\n\n// TilemapLayersHandlerBase inherit from ScriptableObject so we need to create an asset\n// menu item that we will use to create the scriptable object instance.\n// The menu name can be changed to anything you want.\n[CreateAssetMenu(menuName = "Dungeon generator/Custom tilemap layers handler", fileName = "CustomTilemapLayersHandler")]\npublic class CustomTilemapLayersHandlerExample : TilemapLayersHandlerBase\n{\n    public override void InitializeTilemaps(GameObject gameObject)\n    {\n        // First make sure that you add the grid component\n        var grid = gameObject.AddComponent<Grid>();\n\n        // If we want a different cell size, we can configure that here\n        // grid.cellSize = new Vector3(1, 2, 1);\n\n        // And now we create individual tilemap layers\n        var floorTilemapObject = CreateTilemapGameObject("Floor", gameObject, 0);\n\n        var wallsTilemapObject = CreateTilemapGameObject("Walls", gameObject, 1);\n        AddCompositeCollider(wallsTilemapObject);\n\n        CreateTilemapGameObject("Additional layer 1", gameObject, 2);\n        CreateTilemapGameObject("Additional layer 2", gameObject, 3);\n    }\n\n    /// <summary>\n    /// Helper to create a tilemap layer\n    /// </summary>\n    protected GameObject CreateTilemapGameObject(string name, GameObject parentObject, int sortingOrder)\n    {\n        // Create a new game object that will hold our tilemap layer\n        var tilemapObject = new GameObject(name);\n        // Make sure to correctly set the parent\n        tilemapObject.transform.SetParent(parentObject.transform);\n        var tilemap = tilemapObject.AddComponent<Tilemap>();\n        var tilemapRenderer = tilemapObject.AddComponent<TilemapRenderer>();\n        tilemapRenderer.sortingOrder = sortingOrder;\n\n        return tilemapObject;\n    }\n\n    /// <summary>\n    /// Helper to add a collider to a given tilemap game object.\n    /// </summary>\n    protected void AddCompositeCollider(GameObject tilemapGameObject, bool isTrigger = false)\n    {\n        var tilemapCollider2D = tilemapGameObject.AddComponent<TilemapCollider2D>();\n        tilemapCollider2D.usedByComposite = true;\n\n        var compositeCollider2d = tilemapGameObject.AddComponent<CompositeCollider2D>();\n        compositeCollider2d.geometryType = CompositeCollider2D.GeometryType.Polygons;\n        compositeCollider2d.isTrigger = isTrigger;\n\n        tilemapGameObject.GetComponent<Rigidbody2D>().bodyType = RigidbodyType2D.Static;\n    }\n}\n')),Object(i.b)("p",null,"When we have our custom tilemap layers handler prepared, there are 2 additional steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Register the handler in the generator")," so that each generated level has this new structure"),Object(i.b)("li",{parentName:"ol"},"(",Object(i.b)("em",{parentName:"li"},"Optional but highly recommended"),") ",Object(i.b)("strong",{parentName:"li"},"Create a custom room template initializer")," that will help us with creating room templates with the new structure")),Object(i.b)("h3",{id:"register-the--handler-in-the-generator"},"Register the  handler in the generator"),Object(i.b)("p",null,"We have to configure the generator to use our custom tilemap layers handler."),Object(i.b)("p",null,"First, we have to create an instance of a ScriptableObject that will hold our custom handler. This is the reason why we added the ",Object(i.b)("em",{parentName:"p"},"CreateAssetMenu")," attribute to our handler. In the project view, we right click in a folder and choose ",Object(i.b)("em",{parentName:"p"},"Create -> Dungeon Generator -> Custom tilemap layers handler")," (the path may be changed in the ",Object(i.b)("em",{parentName:"p"},"CreateAssetMenu")," attribute). That should create a file in the current folder."),Object(i.b)("p",null,"And second, we have to drag and drop this file to the ",Object(i.b)("em",{parentName:"p"},"Tilemap Layers Handler")," field of our generator component. If we want to switch the tilemap layers handler in the future, we can either replace it with a different handler or remove it to use the default handler."),Object(i.b)("h3",{id:"create-a-custom-room-template-initializer"},"Create a custom room template initializer"),Object(i.b)("p",null,"Now we will add a ",Object(i.b)("em",{parentName:"p"},"Create menu")," shortcut to create a room template with a custom tilemap layers handler. This is better explained in the next section, below is the minimal working example. It will add a ",Object(i.b)("em",{parentName:"p"},"Create -> Dungeon Generator -> Custom room template")," menu item that will create a room template prefab with our custom tilemap layers."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'using ProceduralLevelGenerator.Unity.Generators.Common.RoomTemplates.RoomTemplateInitializers;\nusing UnityEngine;\n#if UNITY_EDITOR\nusing UnityEditor;\n#endif\n\npublic class CustomRoomTemplateInitializerExample : RoomTemplateInitializerBase\n{\n    protected override void InitializeTilemaps(GameObject tilemapsRoot)\n    {\n        // Create an instance of our custom tilemap layers handler\n        var tilemapLayersHandler = ScriptableObject.CreateInstance<CustomTilemapLayersHandlerExample>();\n\n        // Initialize tilemaps\n        tilemapLayersHandler.InitializeTilemaps(tilemapsRoot);\n    }\n\n    #if UNITY_EDITOR\n    [MenuItem("Assets/Create/Dungeon generator/Custom room template")]\n    public static void CreateRoomTemplatePrefab()\n    {\n        // Make sure to use the correct generic parameter - it should be the type of this class\n        RoomTemplateInitializerUtils.CreateRoomTemplatePrefab<CustomRoomTemplateInitializerExample>();\n    }\n    #endif\n}\n')),Object(i.b)("h2",{id:"room-template-initializers"},"Room template initializers"),Object(i.b)("p",null,"The process of creating room templates would be very time-consuming and error-prone if done manually. Therefore, we use so-called ",Object(i.b)("em",{parentName:"p"},"room template initilizers")," to help us create room templates. In the previous section, we provided an example of a custom room template initializer that is able to create room templates with a custom structure of tilemaps."),Object(i.b)("p",null,"There are two main ways of utilizing custom room template initializers:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"To override the default structure of tilemap layers"),Object(i.b)("li",{parentName:"ol"},"To do some post processing, e.g. add additional game objects or components to a room template")),Object(i.b)("p",null,"The steps to create a custom room template initializer are the following:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create a class that inherits from ",Object(i.b)("inlineCode",{parentName:"li"},"RoomTemplateInitializerBase")),Object(i.b)("li",{parentName:"ol"},"(Optional) Override the ",Object(i.b)("inlineCode",{parentName:"li"},"InitializeTilemaps()")," method and use a custom tilemap layers handler"),Object(i.b)("li",{parentName:"ol"},"(Optional) Run additional logic after a room template is created"),Object(i.b)("li",{parentName:"ol"},"Add custom menu item so that we can use the initializer via a ",Object(i.b)("em",{parentName:"li"},"Create asset menu"))),Object(i.b)("p",null,"An example can be seen below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'using ProceduralLevelGenerator.Unity.Generators.Common.RoomTemplates.RoomTemplateInitializers;\nusing UnityEngine;\n#if UNITY_EDITOR\nusing UnityEditor;\n#endif\n\npublic class CustomRoomTemplateInitializerExample2 : RoomTemplateInitializerBase\n{\n    public override void Initialize()\n    {\n        // Call the default initialization\n        base.Initialize();\n\n        // Place your custom logic after initialization here\n        // This script is attached to the room template game object that is being created (and this component is later removed)\n        // So you can access the gameObject field and add e.g. additional game object\n\n        // For example, we can add a game object that will hold lights\n        var lightsGameObject = new GameObject("Lights");\n        lightsGameObject.transform.SetParent(gameObject.transform);\n    }\n\n    protected override void InitializeTilemaps(GameObject tilemapsRoot)\n    {\n        // Create an instance of our custom tilemap layers handler\n        var tilemapLayersHandler = ScriptableObject.CreateInstance<CustomTilemapLayersHandlerExample>();\n\n        // Initialize tilemaps\n        tilemapLayersHandler.InitializeTilemaps(tilemapsRoot);\n    }\n\n    #if UNITY_EDITOR\n    [MenuItem("Assets/Create/Dungeon generator/Custom room template")]\n    public static void CreateRoomTemplatePrefab()\n    {\n        // Make sure to use the correct generic parameter - it should be the type of this class\n        RoomTemplateInitializerUtils.CreateRoomTemplatePrefab<CustomRoomTemplateInitializerExample2>();\n    }\n    #endif\n}\n')))}c.isMDXComponent=!0},228:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),c=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,b=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return a?n.a.createElement(b,l(l({ref:t},s),{},{components:a})):n.a.createElement(b,l({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);