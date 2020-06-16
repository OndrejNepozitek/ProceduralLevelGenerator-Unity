(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{203:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var o=a(2),n=a(6),l=(a(0),a(254)),r=a(257),i=a(259),s={title:"(PRO) Dead Cells case study"},p={id:"version-2.0.0-alpha.4/examples/dead-cells",title:"(PRO) Dead Cells case study",description:"In this tutorial, we will look into how to generate levels similar to what we can see in Dead Cells.",source:"@site/versioned_docs\\version-2.0.0-alpha.4\\examples\\dead-cells.md",permalink:"/Edgar-Unity/docs/examples/dead-cells",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.4/examples/dead-cells.md",version:"2.0.0-alpha.4",sidebar:"version-2.0.0-alpha.4/docs",previous:{title:"(PRO) Enter the Gungeon case study",permalink:"/Edgar-Unity/docs/examples/enter-the-gungeon"},next:{title:"Room template customization",permalink:"/Edgar-Unity/docs/guides/room-template-customization"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Underground level",id:"underground-level",children:[{value:"Room templates",id:"room-templates",children:[]},{value:"Level graph",id:"level-graph",children:[]},{value:"Custom room and connection types",id:"custom-room-and-connection-types",children:[]},{value:"Input setup",id:"input-setup",children:[]},{value:"Spawn position",id:"spawn-position",children:[]},{value:"Enemies",id:"enemies",children:[]},{value:"Level map",id:"level-map",children:[]},{value:"Results",id:"results",children:[]}]},{value:"Rooftop level",id:"rooftop-level",children:[{value:"Towers",id:"towers",children:[]},{value:"Rooms inside towers",id:"rooms-inside-towers",children:[]},{value:"Results",id:"results-1",children:[]}]}],m={rightToc:c};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"In this tutorial, we will look into how to generate levels similar to what we can see in ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"https://store.steampowered.com/app/588650/Dead_Cells/"}),"Dead Cells"),"."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Disclaimer:")," We are in no way affiliated with the authors of the Dead Cells game and this plugin is not used in the game. This is only a case study about how to use this plugin to create something similar to what is done in that game.")),Object(l.b)(r.c,{src:"img/v2/examples/dead_cells/underground_result1.png",caption:"Underground level generated by our algorithm, inspired by the Prisoners Quarters level from Dead Cells",mdxType:"Image"}),Object(l.b)(r.c,{src:"img/v2/examples/dead_cells/ramparts_result1.png",caption:"Rooftop level generated by our algorithm, inspired by the Ramparts level from Dead Cells",mdxType:"Image"}),Object(l.b)(r.c,{src:"img/v2/examples/dead_cells/ramparts_ingame.png",caption:"Rooftop level generated by our algorithm, ingame view",mdxType:"Image"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note:")," All files from this example can be found at ",Object(l.b)("em",{parentName:"p"},"ProceduralLevelGenerator/Examples/DeadCells"),".")),Object(l.b)(i.a,{id:"dead-cells",mdxType:"ExampleFeatures"}),Object(l.b)("h2",{id:"introduction"},"Introduction"),Object(l.b)("p",null,"Dead Cells is a rogue-lite, metroidvania inspired, action-platformer. They use procedural generation techniques to generate levels of the game. An article about their approach can be found ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.indiedb.com/games/dead-cells/news/the-level-design-of-a-procedurally-generated-metroidvania"}),"here")," and a video ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=tyMrRW-Li_I"}),"here"),"."),Object(l.b)("p",null,"The main idea is that they have hand-made room templates and a graph that describes the structure of the level. Both the room templates and the graph are usually different for each stage of the game. Their procedural generator is then guided by the graph of rooms and picks a random room template for each room. This approach is very similar to what we do in our algorithm."),Object(l.b)(r.c,{src:"img/v2/examples/dead_cells/original_sewers_graph.png",caption:"Graph that describes the structure of the Sewers level in Dead Cells",mdxType:"Image"}),Object(l.b)("h2",{id:"underground-level"},"Underground level"),Object(l.b)("p",null,"The first level that we will try to implement with our plugin is an underground level inspired by the Prisoners Quarters level from Dead Cells."),Object(l.b)(r.c,{src:"img/v2/examples/dead_cells/original_prisoners_quarters.png",caption:"Prisoners Quarters level map from Dead Cells",mdxType:"Image"}),Object(l.b)("h3",{id:"room-templates"},"Room templates"),Object(l.b)("p",null,"We use the default platformer tilemap layers handler to create the room templates."),Object(l.b)(r.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(r.b,{src:"img/v2/examples/dead_cells/underground/entrance.png",caption:"Entrance",mdxType:"GalleryImage"}),Object(l.b)(r.b,{src:"img/v2/examples/dead_cells/underground/exit.png",caption:"Exit",mdxType:"GalleryImage"}),Object(l.b)(r.b,{src:"img/v2/examples/dead_cells/underground/room4.png",caption:"Normal room",mdxType:"GalleryImage"}),Object(l.b)(r.b,{src:"img/v2/examples/dead_cells/underground/shop1.png",caption:"Shop",mdxType:"GalleryImage"}),Object(l.b)(r.b,{src:"img/v2/examples/dead_cells/underground/teleport2.png",caption:"Teleport",mdxType:"GalleryImage"}),Object(l.b)(r.b,{src:"img/v2/examples/dead_cells/underground/treasure1.png",caption:"Treasure",mdxType:"GalleryImage"})),Object(l.b)("h4",{id:"corridors"},"Corridors"),Object(l.b)("p",null,"We use simple corridors to connect individual rooms."),Object(l.b)(r.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(r.b,{src:"img/v2/examples/dead_cells/underground/hor.png",caption:"Horizontal corridor",mdxType:"GalleryImage"}),Object(l.b)(r.b,{src:"img/v2/examples/dead_cells/underground/ver.png",caption:"Vertical corridor",mdxType:"GalleryImage"})),Object(l.b)("p",null,"There is a slight problem with the corners of the corridor and the tileset that we use. In the image below, you can see that if the room that is connected with the corridor has a different height than the corridor, we should use a proper corner tile. We currently do not handle this situation but it could be solved by using rule tiles or by writing a post-processing logic that would find these problems and fix them."),Object(l.b)(r.c,{src:"img/v2/examples/dead_cells/corridor_problem.png",caption:"Problem with corridor corners",mdxType:"Image"}),Object(l.b)("h3",{id:"level-graph"},"Level graph"),Object(l.b)("p",null,"Our underground level is inspired by the Prisoners Quarters level in Dead Cells. The level graph below was created by analyzing the structure of several generated levels and then trying to replicate the main features. "),Object(l.b)(r.c,{src:"img/v2/examples/dead_cells/underground_level_graph.png",caption:"Level graph for the underground level",mdxType:"Image"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note:")," It seems like the structure of the level may sligthly differ between individual runs of the game. For example, the positions of the shop room and the treasure room may be swapped. However, to keep it simple, we will use a fixed level graph. You can see the ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"../examples/enter-the-gungeon"}),"Enter the Gungeon")," for an example of procedurally generated levels.")),Object(l.b)("h3",{id:"custom-room-and-connection-types"},"Custom room and connection types"),Object(l.b)("p",null,"In the level graph above, we used custom room and conenction types. The implementation of the custom room type can be seen below. Each room has its type (entrance, treasure, etc) and also a flag that indicates where it is outside (which is used for rooftop levels). Additionaly, we override the ",Object(l.b)("inlineCode",{parentName:"p"},"ToString()")," implementation so that the type of the room is displayed in the level graph."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{}),"public class DeadCellsRoom : RoomBase\n{\n    public DeadCellsRoomType Type;\n\n    public bool Outside;\n\n    public override List<GameObject> GetRoomTemplates()\n    {\n        // We do not need any room templates here because they are resolved based on the type of the room.\n        return null;\n    }\n\n    public override string GetDisplayName()\n    {\n        // Use the type of the room as its display name.\n        return Type.ToString();\n    }\n}\n")),Object(l.b)("p",null,"We also have a custom connection type. It currently looks exactly like the default implementation but we use it just in case we need some additional functionality later."),Object(l.b)("h3",{id:"input-setup"},"Input setup"),Object(l.b)("p",null,"We decided to use a custom input setup to prepare our inputs. The main idea is the following. We create a level graph as we would normally do but we do not assign any room templates to it. Instead, we create a custom input task that takes a level graph as an input, together with the mapping between the type of room and the available room templates. The implementation will go through individual rooms in the level graph and based on their type it will assign corresponding room templates."),Object(l.b)("p",null,"First, we create the mapping between the type of the room and the available room templates:"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{}),"[Serializable]\npublic class DeadCellsRoomTemplatesConfig\n{\n    public GameObject[] DefaultRoomTemplates;\n\n    public GameObject[] ShopRoomTemplates;\n\n    // Additional room templates would be here\n\n    public GameObject[] GetRoomTemplates(DeadCellsRoom room)\n    {\n        switch (room.Type)\n        {\n            case DeadCellsRoomType.Shop:\n                return ShopRoomTemplates;\n\n            default:\n                return DefaultRoomTemplates;\n        }\n    }\n}\n")),Object(l.b)("p",null,"And then we create a simple input setup task that prepares the level description:"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{}),"public class DeadCellsInputSetupTask : DungeonGeneratorInputBase\n{\n    public LevelGraph LevelGraph;\n\n    public DeadCellsRoomTemplatesConfig RoomTemplates;\n\n    /// <summary>\n    /// This is the main method of the input setup.\n    /// It prepares the description of the level for the procedural generator.\n    /// </summary>\n    /// <returns></returns>\n    protected override LevelDescription GetLevelDescription()\n    {\n        var levelDescription = new LevelDescription();\n\n        // Go through individual rooms and add each room to the level description\n        // Room templates are resolved based on their type\n        foreach (var room in LevelGraph.Rooms.Cast<DeadCellsRoom>())\n        {\n            levelDescription.AddRoom(room, RoomTemplates.GetRoomTemplates(room).ToList());\n        }\n\n        // Go through individual connections and for each connection create a corridor room\n        foreach (var connection in LevelGraph.Connections.Cast<DeadCellsConnection>())\n        {\n            var corridorRoom = ScriptableObject.CreateInstance<DeadCellsRoom>();\n            corridorRoom.Type = DeadCellsRoomType.Corridor;\n            levelDescription.AddCorridorConnection(connection, RoomTemplates.CorridorRoomTemplates.ToList(), corridorRoom);\n        }\n\n        return levelDescription;\n    }\n}\n")),Object(l.b)("h3",{id:"spawn-position"},"Spawn position"),Object(l.b)("p",null,"In ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"/Edgar-Unity/docs/examples/example-1"}),"Example 1"),", we placed the player prefab directly in the Spawn room template to make sure that the player always starts in the correct room. However, there is also a different approach to achieve the same result. Instead of placing the player prefab inside the room template, we simply create an empty GameObject that will act as a marker of the spawn position. We place the player prefab directly into the scene and implement a simple post-processing logic that finds the spawn position marker and moves the player there after the level is generated."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{}),'private void SetSpawnPosition(GeneratedLevel level)\n{\n    // Find the room with the Entrance type\n    var entranceRoomInstance = level\n        .GetRoomInstances()\n        .FirstOrDefault(x => ((DeadCellsRoom) x.Room).Type == DeadCellsRoomType.Entrance);\n\n    if (entranceRoomInstance == null)\n    {\n        throw new InvalidOperationException("Could not find Entrance room");\n    }\n\n    var roomTemplateInstance = entranceRoomInstance.RoomTemplateInstance;\n\n    // Find the spawn position marker\n    var spawnPosition = roomTemplateInstance.transform.Find("SpawnPosition");\n\n    // Move the player to the spawn position\n    var player = GameObject.FindWithTag("Player");\n    player.transform.position = spawnPosition.position;\n}\n')),Object(l.b)("h3",{id:"enemies"},"Enemies"),Object(l.b)("p",null,"In order to spawn enemies in generated levels, we added an empty GameObject called ",Object(l.b)("em",{parentName:"p"},"EnemySpawnPositions")," to each room template where we want to spawn enemies. Each empty GameObject that we attach as a child will mark a single position where an enemy can spawn. An advantage of this approach is that we can randomize the process of choosing an enemy for each spawn point."),Object(l.b)("p",null,"We did not implement any combat, just a simple patrol AI that makes the enemy change its direction if there is a hole or an obstacle ahead."),Object(l.b)("p",null,"Below you can see a method that we can put inside a post-processing task to handle the spawn of enemies."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{}),'public bool SpawnEnemies;\npublic GameObject[] Enemies;\n\nprivate void DoSpawnEnemies(GeneratedLevel level)\n{\n    // Check that we have at least one enemy to choose from\n    if (Enemies == null || Enemies.Length == 0)\n    {\n        throw new InvalidOperationException("There must be at least one enemy prefab to spawn enemies");\n    }\n\n    // Go through individual rooms\n    foreach (var roomInstance in level.GetRoomInstances())\n    {\n        var roomTemplate = roomInstance.RoomTemplateInstance;\n\n        // Find the game object that holds all the spawn points\n        var enemySpawnPoints = roomTemplate.transform.Find("EnemySpawnPoints");\n\n        if (enemySpawnPoints != null)\n        {\n            // Go through individual spawn points and choose a random enemy to spawn\n            foreach (Transform enemySpawnPoint in enemySpawnPoints)\n            {\n                var enemyPrefab = Enemies[Random.Next(Enemies.Length)];\n                var enemy = Instantiate(enemyPrefab);\n                enemy.transform.parent = roomTemplate.transform;\n                enemy.transform.position = enemySpawnPoint.position;\n            }\n        }\n    }\n}\n')),Object(l.b)("h3",{id:"level-map"},"Level map"),Object(l.b)("p",null,"Dead Cells comes with a schematic level map that shows the overview of the whole level with a very simple graphics. This level map also contains positions of all the teleport, treasures, etc. We decided to create something similar (although much simpler) for this tutorial. The result can be seen below:"),Object(l.b)(r.c,{src:"img/v2/examples/dead_cells/underground_result1.png",caption:"Simple level map",mdxType:"Image"}),Object(l.b)("p",null,"After a level is generated, we create an additional tilemap which will contain all the information about the level map. We go through individual tilemap layers of the level and copy them to the level map tilemap. First, we find all the tiles from the ",Object(l.b)("em",{parentName:"p"},"Background")," tilemap layer and copy them to the level map. But instead of using the normal graphics of individual tiles, we use a tile that is completely blue. Then we repeat this process with other layers and different colors of tiles."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{}),'public TileBase LevelMapWallTile;\npublic TileBase LevelMapWallBackgroundTile;\npublic TileBase LevelMapBackgroundTile;\npublic TileBase LevelMapPlatformTile;\n\nprivate void SetupLevelMap(GeneratedLevel level)\n{\n    // Return if level map not supported\n    if (!DeadCellsGameManager.Instance.LevelMapSupported())\n    {\n        return;\n    }\n\n    // Create new tilemap layer for the level map\n    var tilemaps = level.GetSharedTilemaps();\n    var tilemapsRoot = level.RootGameObject.transform.Find(GeneratorConstants.TilemapsRootName);\n    var tilemapObject = new GameObject("LevelMap");\n    tilemapObject.transform.SetParent(tilemapsRoot);\n    tilemapObject.transform.localPosition = Vector3.zero;\n    var tilemap = tilemapObject.AddComponent<Tilemap>();\n    var tilemapRenderer = tilemapObject.AddComponent<TilemapRenderer>();\n    tilemapRenderer.sortingOrder = 20;\n\n    // Assign special layer\n    var mapLayer = LayerMask.NameToLayer(DeadCellsGameManager.LevelMapLayer);\n    tilemapObject.layer = mapLayer;\n\n    // Copy background tiles\n    CopyTilesToLevelMap(level, new [] {"Background", "Other 1"}, tilemap, LevelMapBackgroundTile);\n\n    // Copy wall background tiles\n    CopyTilesToLevelMap(level, new [] {"Background"}, tilemap, LevelMapWallBackgroundTile, x => x == WallTile);\n\n    // Copy platforms tiles\n    CopyTilesToLevelMap(level, new [] {"Platforms"}, tilemap, LevelMapPlatformTile);\n\n    // Copy wall tiles\n    CopyTilesToLevelMap(level, new [] {"Walls"}, tilemap, LevelMapWallTile);\n}\n')),Object(l.b)("p",null,"The last part of the setup is to create a camera the displays only the level map tilemap layer. To achieve that, we assign a special layer to the tilemap and then set the culling mask. We also added a simple camera control that reacts to players pressing a button and toggles between the default view and the level map view."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note:")," For the level map to work, you need to add a layer called ",Object(l.b)("strong",{parentName:"p"},"LevelMap"),". Unfortunately, it is impossible to do that from a script.")),Object(l.b)("h3",{id:"results"},"Results"),Object(l.b)(r.c,{src:"img/v2/examples/dead_cells/underground/result1_ingame.png",caption:"Example result - ingame view",mdxType:"Image"}),Object(l.b)(r.c,{src:"img/v2/examples/dead_cells/underground/result1.png",caption:"Example result - level map view",mdxType:"Image"}),Object(l.b)(r.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(r.b,{src:"img/v2/examples/dead_cells/underground/result2.png",caption:"Example result",mdxType:"GalleryImage"}),Object(l.b)(r.b,{src:"img/v2/examples/dead_cells/underground/result3.png",caption:"Example result",mdxType:"GalleryImage"})),Object(l.b)("h2",{id:"rooftop-level"},"Rooftop level"),Object(l.b)("p",null,"The second level that we try to implement is a little bit different. It is inspired by the Ramparts level from Dead Cells. Instead of being underground, it takes places on the ramparts of the prison. We will have to combine two types of rooms - rooms that are on the roofs of towers and rooms that are inside towers."),Object(l.b)(r.c,{src:"img/v2/examples/dead_cells/original_ramparts.png",caption:"Ramparts level map from Dead Cells",mdxType:"Image"}),Object(l.b)("h3",{id:"towers"},"Towers"),Object(l.b)("p",null,"The first challenge of this level is how to generate the top layer of rooms in a way that it looks like there are towers that are divided by gaps. Our goal si to create a set of room templates that can be connected only horizontally and then implement a post-processing logic that will create the illusion of towers."),Object(l.b)("h4",{id:"room-templates-1"},"Room templates"),Object(l.b)(r.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(r.b,{src:"img/v2/examples/dead_cells/rooftop/entrance.png",caption:"Entrance",mdxType:"GalleryImage"}),Object(l.b)(r.b,{src:"img/v2/examples/dead_cells/rooftop/exit.png",caption:"Exit",mdxType:"GalleryImage"}),Object(l.b)(r.b,{src:"img/v2/examples/dead_cells/rooftop/outside1.png",caption:"Normal",mdxType:"GalleryImage"}),Object(l.b)(r.b,{src:"img/v2/examples/dead_cells/rooftop/outside3.png",caption:"Normal",mdxType:"GalleryImage"})),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note:")," It is ",Object(l.b)("strong",{parentName:"p"},"very important")," that we do not use layers with colliders if it is not neccessary. For example, you can see that only the outline tiles of walls have a collider and other walls are in the background layer without a collider. The reason for that is that when the generator assembles the level and copies tiles to shared tilemaps, Unity has to recompute collider shapes which can significantly decrease the performance if there are too tiles with colliders.")),Object(l.b)("h4",{id:"level-graph-1"},"Level graph"),Object(l.b)("p",null,"The first version of the level graph contains the top layer of rooms, i.e. only the rooms that are on top of the towers."),Object(l.b)(r.c,{src:"img/v2/examples/dead_cells/rooftop_level_graph_simple.png",caption:"Level graph with only the top layer of rooms",mdxType:"Image"}),Object(l.b)("h4",{id:"intermediate-results"},"Intermediate results"),Object(l.b)("p",null,"Below we can see how the level looks now. All the rooms are connected only horizontally because there are no vertical door positions."),Object(l.b)(r.c,{src:"img/v2/examples/dead_cells/rooftop_result_towers_intermediate.png",caption:"Intermediate result",mdxType:"Image"}),Object(l.b)("h4",{id:"walls"},"Walls"),Object(l.b)("p",null,"The last step is to add wall tiles under individual rooms so that the level looks like there are towers. This can be done with a custom post-processing logic that goes through all the rooms and for each used room template it finds the bottom-most layer of tiles. For each tile position in this layer, if it contains a non-null tile, we add a column of wall tiles under it."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{}),'private void AddWallsUnderRoom(RoomInstance roomInstance)\n{\n    // Get the room template and all the used tiles\n    var roomTemplate = roomInstance.RoomTemplateInstance;\n    var tilemaps = RoomTemplateUtils.GetTilemaps(roomTemplate);\n    var usedTiles = RoomTemplatesLoader.GetUsedTiles(tilemaps).ToList();\n    var roomTemplateWalls = tilemaps.Single(x => x.name == "Walls");\n\n    // Find the minimum y coordinate of all the tiles and use it to find the bottom layer of tiles\n    var minY = usedTiles.Min(x => x.y);\n    var bottomLayerTiles = usedTiles.Where(x => x.y == minY).ToList();\n\n    foreach (var pos in bottomLayerTiles)\n    {\n        var tilemap = backgroundTilemap;\n\n        // Use the walls tilemap only if the collider is really needed\n        // That means we only use it if the tile is the border tile of a tower\n        var leftTilePos = pos + Vector3Int.left;\n        var rightTilePos = pos + Vector3Int.right;\n        if (roomTemplateWalls.GetTile(pos) != null && !(bottomLayerTiles.Contains(leftTilePos) && bottomLayerTiles.Contains(rightTilePos)))\n        {\n            tilemap = wallsTilemap;\n        }\n\n        // Add tiles under this position\n        for (int i = 1; i <= WallDepth; i++)\n        {\n            var wallPosition = roomInstance.Position + pos + Vector3Int.down * i;\n            tilemap.SetTile(wallPosition, WallTile);\n        }\n    }\n}\n')),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note:")," Once again, it is ",Object(l.b)("strong",{parentName:"p"},"very important")," that we use collider for as few tiles as possible. We are adding many tiles and do not want to spend too much time recomputing colliders.")),Object(l.b)("p",null,"One problem that we have to solve is when we should call this post-processing logic. In the next section, we will add rooms inside the towers. But if we draw walls after all the rooms are drawn, we will overwrite all the rooms that are inside the tower. We would have to do some checks to avoid that. An easier solution is to call our logic after shared tilemaps are initialized but before any rooms are drawn. That means that we first draw the walls and if there is a room occupying the same tiles, the room overwrites the walls, which is what we want. To achieve that, we use ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"../generators/post-process#pro-priority-callbacks"}),"Priority callbacks")," and register our logic right after shared tilemaps are initialized."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{}),"public override void RegisterCallbacks(PriorityCallbacks<DungeonGeneratorPostProcessCallback> callbacks)\n{\n    if (AddWalls)\n    {\n        callbacks.RegisterCallbackAfter(PostProcessPriorities.InitializeSharedTilemaps, AddWallsUnderRooms);\n    }\n}\n")),Object(l.b)("p",null,"The resulting level can be seen below:"),Object(l.b)(r.c,{src:"img/v2/examples/dead_cells/rooftop_result_towers.png",caption:"Towers",mdxType:"Image"}),Object(l.b)("h3",{id:"rooms-inside-towers"},"Rooms inside towers"),Object(l.b)("p",null,"The second challenge is how to make sure that if we add rooms inside the towers, they will not cross the boundary of the tower. Unfortunately, it is currently not possible to add such constraints to the generator, so we have to be creative with how we design our room templates."),Object(l.b)("h4",{id:"room-templates-2"},"Room templates"),Object(l.b)("p",null,"We will design our room templates in a way that it is not possible for them to cross the borders of towers. To do so, we will place all the doors near to the center of the room."),Object(l.b)(r.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(r.b,{src:"img/v2/examples/dead_cells/rooftop/inside1.png",caption:"Inside room",mdxType:"GalleryImage"}),Object(l.b)(r.b,{src:"img/v2/examples/dead_cells/rooftop/inside2.png",caption:"Inside room",mdxType:"GalleryImage"})),Object(l.b)("p",null,"And we also have to create rooms templates that have some vertical door positions so that we can connect the inside rooms to them."),Object(l.b)(r.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(r.b,{src:"img/v2/examples/dead_cells/rooftop/outteleport1.png",caption:"Outside room",mdxType:"GalleryImage"}),Object(l.b)(r.b,{src:"img/v2/examples/dead_cells/rooftop/outteleport2.png",caption:"Outside room",mdxType:"GalleryImage"})),Object(l.b)("h4",{id:"level-graph-2"},"Level graph"),Object(l.b)("p",null,"Now we can add these inside rooms to the level graph."),Object(l.b)(r.c,{src:"img/v2/examples/dead_cells/rooftop_level_graph.png",caption:"Level graph with all the rooms",mdxType:"Image"}),Object(l.b)("h3",{id:"results-1"},"Results"),Object(l.b)(r.c,{src:"img/v2/examples/dead_cells/rooftop_result1.png",caption:"Example result - level map view",mdxType:"Image"}),Object(l.b)(r.c,{src:"img/v2/examples/dead_cells/rooftop_result1_ingame.png",caption:"Example result - ingame view",mdxType:"Image"}))}d.isMDXComponent=!0},257:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return p})),a.d(t,"c",(function(){return m}));var o=a(2),n=a(0),l=a.n(n),r=a(256);const i=e=>l.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),s=e=>l.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},l.a.Children.map(e.children,t=>l.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight}))),p=e=>l.a.createElement(i,{cols:e.cols},l.a.createElement("a",{href:Object(r.a)(e.src),target:"_blank"},l.a.createElement("img",{src:Object(r.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&l.a.createElement(c,null,e.caption)),c=e=>l.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),m=e=>{const{src:t,caption:a,...n}=e;return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("img",Object(o.a)({src:Object(r.a)(e.src)},n)),void 0!==e.caption&&l.a.createElement(c,null,e.caption))}},259:function(e,t,a){"use strict";a.d(t,"b",(function(){return p})),a.d(t,"a",(function(){return c}));a(261),a(262),a(263),a(264),a(265),a(266),a(267);var o=a(0),n=a.n(o),l=a(258),r=[{id:"outline-override",url:"../basics/room-templates#outline-override",name:"Outline override",usages:[{id:"corridors",description:"Outline override is used to properly handle corridors"}]},{id:"custom-rooms-and-connections",url:"../basics/level-graphs#pro-custom-rooms-and-connections",name:"Custom rooms",usages:[{id:"room-type",description:"The definition of rooms is enhanced with a custom type"}]},{id:"custom-post-processing",url:"../generators/post-process#custom-post-processing",name:"Custom post-processing",usages:[{id:"enemies",description:"A custom post-processing task is used to spawn enemies after a level is generated"},{id:"player-spawn",description:"Move the player to the spawn position of the level"}]}],i=[{id:"example-1",name:"Example 1",url:"../examples/example-1",features:[{id:"custom-post-processing",usage:"enemies",anchor:"enemies"}]},{id:"example-2",name:"Example 2",url:"../examples/example-2",features:[{id:"outline-override",usage:"corridors",anchor:"vertical-corridors"}]},{id:"dead-cells",name:"Dead Cells",url:"../examples/dead-cells",features:[{id:"custom-post-processing",usage:"enemies",anchor:"enemies"},{id:"custom-post-processing",usage:"player-spawn",anchor:"spawn-position"},{id:"custom-rooms-and-connections",usage:"room-type",anchor:"custom-room-and-connection-types"}]}];function s(e){if("undefined"!=typeof window){var t=window.location.href,a=t.split("/");(a[a.length-1].startsWith("#")||t.endsWith("/"))&&(e="../"+e)}return e}var p=function(e){var t=r.find((function(t){return t.id===e.id})).usages.map((function(e){return Object.assign({},e,{examples:[]})}));return i.forEach((function(a){a.features.forEach((function(o){o.id===e.id&&t.find((function(e){return e.id===o.usage})).examples.push({example:a,feature:o})}))})),n.a.createElement("div",{className:"featureUsage"},n.a.createElement("div",{className:"featureUsage__title"},"Where is this feature used?"),n.a.createElement("div",{className:"featureUsage__description"},"Below is the list of examples/tutorials where we use this feature. Feel free to check them out if you're not sure how something works or if you just want to see this feature used in action."),n.a.createElement("table",null,n.a.createElement("tbody",null,t.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",null,e.examples.map((function(e,t){return n.a.createElement("span",null,t?", ":"",n.a.createElement(l.a,{to:s(e.example.url+"#"+e.feature.anchor),onClick:function(){return t=e.feature.anchor,void setTimeout((function(){var e=document.getElementById(t);e&&e.scrollIntoView()}),750);var t}},e.example.name))}))),n.a.createElement("td",null,e.description))})))))},c=function(e){var t=i.find((function(t){return t.id===e.id})),a=[];return t.features.forEach((function(e){var t=r.find((function(t){return t.id===e.id})),o=t.usages.find((function(t){return t.id===e.usage}));a.push(Object.assign({},e,{feature:t,featureUsage:o}))})),n.a.createElement("div",{className:"featureUsage"},n.a.createElement("div",{className:"featureUsage__title"},"List of used features"),n.a.createElement("div",{className:"featureUsage__description"},"Below is a list of features that are used in this example."),n.a.createElement("table",null,n.a.createElement("tbody",null,a.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",null,n.a.createElement(l.a,{to:e.feature.url},e.feature.name)),n.a.createElement("td",null,e.featureUsage.description))})))))}}}]);