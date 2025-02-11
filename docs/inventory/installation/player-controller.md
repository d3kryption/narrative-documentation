---
sidebar_label: 'Player Controller'
sidebar_position: 3
---

# Player Controller

import PlayerControllerSetup from '/src/components/player-controller-setup.mdx'

<PlayerControllerSetup />

## Usage

Add the [Narrative Inventory](../inventory-component/index.md) component into your Player Controller.

![inventory-component-player-controller.webp](//img/inventory/inventory-component-player-controller.webp)

Now, you just need to get access to your HUD from the [CommonUI setup](../../common-ui/installation/narrative-hud.md) then call **OpenMenu** from a key press, passing the **WBP_Inventory** option.

<iframe src="https://blueprintue.com/render/0gwv5q0-/" width="100%" height="400" scrolling="no" allowfullscreen></iframe>

:::warning

Do not call **CreateWidget** on this widget. It will bypass the CommonUI framework causing functionality not to work.

:::

## Begin Looting

For the looting system to work, you need to hook into the [OnBeginLooting](../inventory-component/functions.md#on-begin-looting) event of the [Inventory component](../inventory-component).

Simply right-click on the inventory component -> **Add Event** -> [OnBeginLooting](../inventory-component/functions.md#on-begin-looting). Get the players HUD and call Open Menu for the **W_NarrativeMenu_Looting** widget.

<iframe src="https://blueprintue.com/render/4icsk2t4/" width="100%" height="400" scrolling="no" allowfullscreen></iframe>