---
sidebar_label: 'Inventory Component'
sidebar_position: 1
---

# Inventory Component

The Inventory component is the core component to allow the player to use the Inventory system.

It allows the player to use their own inventory, equipment, trading or shops.

## Getting the inventory

There are multiple ways to get the inventory to what best suits the position you are in.

### Get Narrative Inventory From Target

This node will be the most common method of getting the inventory. Simply drag from your actor and choose GetNarrativeInventoryFromTarget. This will give you the inventory from whichever target you are interacting with. Whether it's the chest you are looking at via the line trace or the shopkeeper you are trading with via the dialogue.

![inventory-component-from-target.webp](/img/inventory/inventory-component-from-target.webp)

### Inventory Component

On some occasions you will have direct access to the inventory component. For example, you could be at a vendor trying to buy and sell items but you could put some code that randomizes the inventory of the shopkeeper. This will most likely sit in the shop giving you direct access to the component.

![inventory-component.webp](/img/inventory/inventory-component.webp)

## Saving & Loading

Inventory automatically comes with a save and load feature to allow you to save inventories and states.

To start saving & loading, you can call the Save or Load functions from the **Inventory** component.

In this example, we save and load when we press the 1 and 2 keys.

![save-load.webp](/img/inventory/save-load.webp)

:::note

Unlike other plugins, there is no central Inventory manager. You need to call Save / Load on **every** inventory component you want to save / load.

You may not want some inventories to save / load when the game resets.

:::

## Properties

| Name                  | Type                                          | Description                                        |
|-----------------------|-----------------------------------------------|----------------------------------------------------|
| InventoryFriendlyName | FText                                         | The name of this inventory                         |
| WeightCapacity        | float                                         | The maximum weight the inventory can hold          |
| Capacity              | int32                                         | The maximum number of items the inventory can hold |
| Items                 | TArray\<[UNarrativeItem](../items)\>          | The items currently in our inventory               |
| Currency              | int32                                         | The amount of currency our player has              |
| DefaultItemTables     | TArray\<[FLootTableRoll](../loot-tables.md)\> | Loot table used to generate inventory items        |
| bGaveDefaultItems     | bool                                          | Whether default items have been given              |
| bIsVendor             | bool                                          | Whether the inventory is treated as a vendor       |
| BuyItemPct            | float                                         | The percentage of item's value we'll buy for       |
| SellItemPct           | float                                         | The percentage of item's value we'll sell for      |

### FItemWithQuantity Properties

| Name     | Type                                        | Description              |
|----------|---------------------------------------------|--------------------------|
| Item     | TSoftClassPtr\<[UNarrativeItem](../items)\> | The item class           |
| Quantity | int32                                       | The quantity of the item |

