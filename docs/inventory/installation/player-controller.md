---
sidebar_label: 'Player Controller'
sidebar_position: 3
---

# Player Controller

import PlayerControllerSetup from '/src/components/player-controller-setup.mdx'

<PlayerControllerSetup />

## Usage

To add the inventory you need to first have completed the [Common UI HUD setup](../installation/common-ui.md).

Now, you just need to call **OpenMenu** from a key press, passing the **WBP_Inventory** option.

<iframe src="https://blueprintue.com/render/0gwv5q0-/" width="100%" height="400" scrolling="no" allowfullscreen></iframe>

:::warning

Do not call **CreateWidget** on this widget. It will bypass the CommonUI framework causing functionality not to work.

:::