---
sidebar_label: 'World map'
---

# World map

This is the world map widget that gives players access to view the entire map. It is not commonly added to the HUD but instead using the OpenMenu option via a key press instead.

![introduction.webp](/img/pro/navigator/introduction.webp)

## Usage

You just need to call **OpenMenu** from a key press, passing the **W_NarrativeMenu_WorldMap** option.

<iframe src="https://blueprintue.com/render/c42mnyp6/" width="100%" height="400" scrolling="no" allowfullscreen></iframe>

Now, pressing the key will spawn the world map on the screen.

![navigator-worldmap.webp](/img/pro/navigator/navigator-worldmap.webp)

## Custom waypoints

The world map gives the player the ability to add custom waypoints allowing them to remember locations in game.

![waypoint-buttons.webp](/img/pro/navigator/waypoint-buttons.webp)

![waypoint-remove.webp](/img/pro/navigator/waypoint-remove.webp)

![waypoint-world.webp](/img/pro/navigator/waypoint-world.webp)

## Waypoints on top of the world map

If your waypoints are on top of your map, you need to change the render order of the widgets in your HUD. 

Make sure to move the **WBP_NarrativeHUD** to the bottom of the other widgets so the menus sit on top of the markers.

![waypoint-order.webp](/img/pro/navigator/waypoint-order.webp)

## Zoom Distance

The world map allows you to change how far in and out you can zoom.

To change the zoom distance, open the **WBP_Navigator_Map_World** widget and select the **WBP_Navigator_Map**

![worldmap-worldmapwidget.webp](/img/pro/navigator/worldmap-worldmapwidget.webp)

![worldmap-worldmapcomponent.webp](/img/pro/navigator/worldmap-worldmapcomponent.webp)

From here, you can adjust the **Min Zoom Amount** and **Max Zoom Amount**.

Adjusting the **Min Zoom Amount** will change how much you can zoom out and changing the **max zoom amount** changes how far you can zoom into the map.



Note, unless you generate high quality map tiles, it is advised to not let the user zoom in too much otherwise it will start to look pixelated.