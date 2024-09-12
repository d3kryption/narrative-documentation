---
sidebar_label: 'Navigator Component'
sidebar_position: 1
---

# Navigator Component

The Navigation component is the core component to allow the player to use the Navigation aids and provides access to other Narrative Navigator functions.

## Setup

To get started you need to attach the **Navigation component** to your [player controller](./installation/player-controller). Inside the player controller, add the Narrative Navigation component. 

:::note

If you can’t find this, make sure the [Narrative Navigator plugin](./installation) is enabled, and you have restarted the editor.

:::

![navigation-componetn.png](/img/navigator/navigation-componetn.png)

## Saving & Loading

Navigator automatically comes with a save and load feature to allow you to save custom markers and unlocked POI’s.

To start saving & loading, you can call the Save or Load functions from the **Navigation** component.

In this example, we save and load when we press the 1 and 2 keys.

![save-load.png](/img/navigator/save-load.png)
