---
sidebar_label: 'UI'
sidebar_position: 4
---

# UI

Narrative Interaction comes with a UI widget to handle displaying the current interaction info to the player. It can be added to your existing UI to keep it nice and clean.

## Creating your HUD

To set up a simple HUD, open your **Content Drawer**, right click -> **user interface** -> **Widget Blueprint** and name this `WBP_HUD`.

:::note

If you already have an existing HUD, add it to that. It's much better for performance than having multiple HUD's rendering.

:::

Open the HUD and add a **WBP Interaction Widget**. Align this however you want to.

Finally, go back into your [Player Controller](./player-controller.md), and on begin play, create the widget, promote it to a variable then add it to the viewport.

<iframe src="https://blueprintue.com/render/zpfvq3f1/" width="100%" height="400" scrolling="no" allowfullscreen></iframe>