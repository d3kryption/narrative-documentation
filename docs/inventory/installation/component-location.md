---
sidebar_label: 'Component location'
sidebar_position: 2
---

# Component location

This highly depends on what your game is and how you want it to work.

The Narrative Inventory component has been created, so you can create an inventory, anywhere, on any blueprint. You simply assign the component to the blueprint.

## Example locations

### Chest

If you want a chest to store items, give the blueprint an inventory, set its friendly name to be Chest and set its default items. (see [looting](../looting/index.md) for more info)

### NPC

If you want to give an NPC items, give the blueprint an inventory, set its friendly name to be the NPC’s name and set its default items.

### Player

If you are adding an inventory for your player, we highly recommend you place the Narrative Inventory Component on the Player Controller or Player State whether you are creating a multiplayer game or not. 

This ensures uniformity across the plugin and is one less thing you have to do if you ever decide to move to a multiplayer game.

However, there will always be reasons why putting it on these won’t work for you (and that's okay!) so Narrative Inventory's node will try to find your inventory.

## Install

In this example, we are going to create an inventory for the player. In the next page, we will create a custom Player Controller.

