---
sidebar_label: 'Navigation Widgets'
---

# Navigation Widgets

Navigator features many widgets that can be used for showing the player navigational aspects.

## Widget style

Each UI option comes with some predefined map styles for you to pick from for you to use.

Simply open your HUD and select the Widget. WWithin the details you will see the option for the Map Style.

![widget-style.webp](//img/pro/navigator/widget-style.webp)

## Distorted Edge styles

The distorted edge style is a unique style that will work for some games. It distorts the edges of the map (in this example the minimap).

![minimap-distorted-edges.webp](//img/pro/navigator/minimap-distorted-edges.webp)

## Error text around the map

If you notice any errors around your map UI, this is an Unreal issue when using Render Targets with nothing behind it. 

To remove the error, simply block out the surrounding visible area with a plane, landscape, skydome or the like. It is just to remove the empty void which causes Unreal to display the error.

![empty-errors.webp](//img/pro/navigator/empty-errors.webp)

