---
sidebar_label: 'Creating your HUD'
sidebar_position: 1
---

# Creating your HUD

To set up a simple HUD, open your Content Drawer, right click -> user interface -> Widget Blueprint and name this WBP_HUD.

Open the HUD and add a **WBP Interaction Widget**. Align this however you want to.

Finally, go back into your [Player Controller](/player-controller/index.md), and on begin play, create the widget, promote it to a variable then add it to the viewport.

![create-hud.jpg](/img/interaction/create-hud.jpg)

If you are setting up a multiplayer game, make sure to check for the local player controller before you create the HUD.

![multiplayer-create-hud.jpg](/img/interaction/multiplayer-create-hud.jpg)