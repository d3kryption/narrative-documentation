---
sidebar_label: 'Screen Space markers'
---

# Screen Space markers

Screen space markers are the visible markers on screen in the player's viewport. They show in the 3d world.

![screen-space-markers.webp](//img/navigator/screen-space-markers.webp)

## Adding markers

Markers are super easy to add. Simply select your actor or blueprint and add the component **Navigation Marker**.

![navigator-marker.webp](//img/navigator/navigator-marker.webp)

After that it will work right out of the box across all Navigator UI widgets.

![navigatior-marker-demo.webp](//img/navigator/navigatior-marker-demo.webp)

You can add markers to any actor you wish. Commonly, you may add a marker to your player or enemies.

## Marker Properties

| Name                | Type       | Description                                                    |
|---------------------|------------|----------------------------------------------------------------|
| LocationDisplayName | Text       | The name of the location marker.                               |
| LocationIcon        | Texture2D  | The icon that will be used for the marker.                     |
| IconTint            | color      | The tint of the markers icon.                                  |
| IconSize            | size       | The size of the marker.                                        |
| IconOffset          | vector     | Used if the icon needs to be offset to be centered or changed. |
| ShowActorRotation   | bool       | Should the marker rotate as the parent actor does.             |

:::note

Each marker has specific properties, so you can change what it looks like on each element.

:::
