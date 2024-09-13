---
sidebar_label: 'World map'
---

# World map

This is the world map widget that gives players access to view the entire map. It is not commonly added to the HUD but instead using the OpenMenu option via a key press instead.

![introduction.png](/img/navigator/introduction.png)

## Usage

To add the world map you need to first have completed the [Common UI HUD setup](../installation/common-ui.md).

Now, you just need to call **OpenMenu** from a key press, passing the **W_NarrativeMenu_WorldMap** option.

<iframe src="https://blueprintue.com/render/c42mnyp6/" width="100%" height="400" scrolling="no" allowfullscreen></iframe>

Now, pressing the key will spawn the world map on the screen.

![navigator-worldmap.png](/img/navigator/navigator-worldmap.png)

## Custom waypoints

The world map gives the player the ability to add custom waypoints allowing them to remember locations in game.

![waypoint-buttons.png](/img/navigator/waypoint-buttons.png)

![waypoint-remove.png](/img/navigator/waypoint-remove.png)

![waypoint-world.png](/img/navigator/waypoint-world.png)

## Waypoints on top of the world map

If your waypoints are on top of your map, you need to change the render order of the widgets in your HUD. 

Make sure to move the **WBP_NarrativeHUD** to the bottom of the other widgets so the menus sit on top of the markers.

![waypoint-order.png](/img/navigator/waypoint-order.png)

## Zoom Distance

The world map allows you to change how far in and out you can zoom.

To change the zoom distance, open the **WBP_Navigator_Map_World** widget and select the **WBP_Navigator_Map**

![worldmap-worldmapwidget.png](/img/navigator/worldmap-worldmapwidget.png)

![worldmap-worldmapcomponent.png](/img/navigator/worldmap-worldmapcomponent.png)

From here, you can adjust the **Min Zoom Amount** and **Max Zoom Amount**.

Adjusting the **Min Zoom Amount** will change how much you can zoom out and changing the **max zoom amount** changes how far you can zoom into the map.



Note, unless you generate high quality map tiles, it is advised to not let the user zoom in too much otherwise it will start to look pixelated.