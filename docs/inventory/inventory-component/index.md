---
sidebar_label: 'Inventory Component'
sidebar_position: 1
---

# Inventory Component

The Inventory component is the core component to allow the player to use the Inventory system.

It allows the player to use their own inventory, equipment, trading or shops.

## Saving & Loading

Inventory automatically comes with a save and load feature to allow you to save inventories and states.

To start saving & loading, you can call the Save or Load functions from the **Inventory** component.

In this example, we save and load when we press the 1 and 2 keys.

![save-load.png](/img/inventory/save-load.png)

:::note

Unlike other plugins, there is no central Inventory manager. You need to call Save / Load on **every** inventory component you want to save / load.

You may not want some inventories to save / load when the game resets.

:::