---
sidebar_label: 'Player State'
sidebar_position: 2
---

# Player State

Before we can move on, we need to create a custom PlayerState.

:::note

If you already have a custom PlayerState, you can skip this page.

:::

Simply right-click in your Content Drawer, select Blueprint Class and choose **Player State**. We will name this **BP_PlayerState**.

![player-controller-pick-parent-class.jpg](/img/inventory/player-state.png)

Now open the **BP_ThirdPersonGameMode** and set the Player State class to your newly created **BP_PlayerState**.

## Begin Looting

For the looting system to work, you need to hook into the [OnBeginLooting](../inventory-component/functions.md#on-begin-looting) event of the [Inventory component](../inventory-component).

Simply right-click on the inventory component -> **Add Event** -> [OnBeginLooting](../inventory-component/functions.md#on-begin-looting). Get the players HUD and call Open Menu for the **W_NarrativeMenu_Looting** widget. 

<iframe src="https://blueprintue.com/render/4icsk2t4/" width="100%" height="400" scrolling="no" allowfullscreen></iframe>

:::warning

There is a bug in Narrative Inventory 1.7.0 which requires the players Inventory to be on the player state. This is fixed in Narrative Inventory 2.0.0.

:::