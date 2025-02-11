---
sidebar_label: 'Installation'
sidebar_position: 1
---

# Installation

To get started, you need to download the Narrative Common UI from the Epic Marketplace and you can install it to the engine (default) or move it into your project's Plugins folder (you may have to create this folder).

Make sure to enable the **Narrative Common UI** plugin by going to **Edit** -> **Plugins**, and checking the box next to **Narrative Common UI**. (you may have to restart Unreal)

![InstalledPlugins](//img/common-ui/InstalledPlugins.webp)

Go to **Edit** -> **Project Settings** and search for `Viewport`. Find the **Game Viewport Client Class** set it to be `CommonGameViewportClient`.

![ViewportChange.webp](//img/common-ui/ViewportChange.webp)

Now under **Game** -> **Common Input Settings**, set the **Input Data** to `BP_NarrativeInputData`.

![InputData.webp](//img/common-ui/InputData.webp)

Finally, under **Platform Input**, foreach platform you wish to support set the following settings:

- Default Gamepad Name: Set this to `Generic`
- Controller Data: Set which controller schemes you wish to support

![PlatformInputs.webp](//img/common-ui/PlatformInputs.webp)