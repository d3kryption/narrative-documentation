---
sidebar_label: 'Map Tile Generator'
sidebar_position: 2
---
import MustEnablePluginViewContent from '/src/components/must-enable-plugin-view-content.mdx'

# Map Tile Generator

Navigator comes with a built-in tool to take screenshots of your level ready for the maps. It’s super easy to use.

## Usage

We need to take screenshots of your map. Drag in the **map tile bounds blueprint**. This actor will scale over the top of your map highlighting the bounds of your level.

![map-tile-bounds.webp](/img/navigator/map-tile-bounds.webp)

Drag it out and place it above the level. Anything above this bounds will be excluded from the tile generation process.

You can adjust the size of the bounds by changing the map width.

![map-tile-bounds-details.webp](/img/navigator/map-tile-bounds-details.webp)

You can also update the number of tiles. The more tiles, the higher quality images you will get when zooming in but the more memory it will take to view the map. Try to take as little as you can whilst achieving the quality you require.

## Editor tool

To get started using the tile generator, head into your **Narrative Navigation Plugins** folder in your **Content Drawer** -> **Assets** -> **MapTileGenerator**.

<MustEnablePluginViewContent />

Right-click on the **Utility_GenerateMapTiles** and select **Run Editor Utility Widget**. This will start the editor utility running within Unreal.

![run-editor-utility.webp](/img/navigator/run-editor-utility.webp)

This tool is going to take many screenshots of your level in order to create the map. Whatever you keep visible on the map before clicking Generate Tiles will be visible on the screenshots. 

You can use the hide button in the Outliner to hide anything you don’t want visible.

![hide_capture_actors.webp](/img/navigator/hide_capture_actors.webp)

Finally, it's time to run the generator. Head over to the new panel that enables the editor script displayed and click the **Generate Tiles** button. This is normally pretty quick, but it varies depending on the size of your level.

![generate-tiles-button.webp](/img/navigator/generate-tiles-button.webp)

Once complete, you should have all the tiles placed within the plugins folder named after your level.

![generated-tiles.webp](/img/navigator/generated-tiles.webp)

Now the maps in your game are ready and can be used.

