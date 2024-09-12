---
sidebar_label: 'UI'
sidebar_position: 3
---
import ExistingHUD from '/src/components/existing-hud.mdx'

# UI

Narrative Navigator comes with several UI widgets to handle displaying the navigation info to the player. It can be added to your existing UI to keep it nice and clean.

## Creating your HUD

To set up a simple HUD, open your **Content Drawer**, right click -> **user interface** -> **Widget Blueprint** and name this `WBP_HUD`.

<ExistingHUD />

Open the HUD and add the [widgets](./ui#navigator-widgets) you require.

### Navigator Widgets

Navigator comes with a series of widgets that you can use to customise your experience. These will be covered in more detail later in the docs.

#### Compass

This is the compass that sits normally at the top or bottom of the screen. Used as a replacement for a map by showing you what's in the direction you are facing.

![compass.png](/img/navigator/compass.png)

Add the widget **WBP_Navigator_Compass**. Some good default details are:

| Name       | Value          |
|------------|----------------|
| Anchors    | 0.5, 0, 0.5, 0 |
| Position X | 0              |
| Position Y | 0              |
| Size X     | 600            |
| Size Y     | 60             |
| Alignment  | 0.5, 0         |

#### Minimap

This is the minimap that sits in the corner and gives the player a map surrounding their location.

![minimap.png](/img/navigator/minimap.png)

Add the widget **WBP_Navigator_Map_Minimap**. Some good default details are:

| Name       | Value      |
|------------|------------|
| Anchors    | 1, 1, 1, 1 |
| Position X | 0          |
| Position Y | 0          |
| Size X     | 250        |
| Size Y     | 250        |
| Alignment  | 1, 1       |

#### World map

This is the world map widget that gives players access to view the entire map. It is not commonly added to the HUD but instead using the OpenMenu option via a key press instead.

![introduction.png](/img/navigator/introduction.png)

You do not need to add this as a widget. We will open this via an event later.

#### Screen Space markers

Screen space markers are the visible markers on screen in the player's viewport. They show in the 3d world.

![screen-space-markers.png](/img/navigator/screen-space-markers.png)

Add the widget **WBP_Navigator_ScreenSpaceMarkers**. This needs to be set to full screen and lowest priority order (put it at the top of your Hierarchy list).

### HUD display

Finally, go back into your [Player Controller](../../player-controller/index.md), and on begin play, create the widget, promote it to a variable then add it to the viewport.

<iframe src="https://blueprintue.com/render/zpfvq3f1/" width="100%" height="400" scrolling="no" allowfullscreen></iframe>