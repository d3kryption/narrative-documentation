---
sidebar_label: 'Functions'
sidebar_position: 0
---

# Functions

The Inventory component contains a bunch of functions to help you use the inventory how you require.

If you import the [Inventory Component](./index.md), you can view the list of functions supported.

## Add Currency

Add some currency to the player's inventory. Can accept negative values.

## Allow Loot Item

Return true if the taker can loot the item from this inventory.

## Allow Store Item

Return true if the storer can store the given item in this inventory.

## Client Refresh Inventory

Client-side function to refresh the inventory.

## Consume Item

Take some quantity away from the item, and remove it from the inventory when quantity reaches zero. Useful for things like eating food, using ammo, etc.

## Find Item By Class

Return the first item with the same class as ItemClass.

## Find Items Of Class

Get all inventory items that are children of the supplied ItemClass.

## Get Buy Price

Return the price we'll buy the given item for.

## Get Capacity

Get the capacity of the inventory.

## Get Currency

Return the amount of currency we have.

## Get Current Weight

Get the current weight of the inventory. To get the amount of items in the inventory, just do GetItems().Num().

## Get Items

Get the items in the inventory.

## Get Owning Controller

Get the player controller owning this inventory component.

## Get Owning Pawn

Get the pawn owning this inventory component.

## Get Space For Item

Return the amount of a given item that we have space for based on its weight, max stack size, etc. @param NoSpaceReason If we have no space for the item, this is the reason why.

## Get Weight Capacity

Get the weight capacity of the inventory.

## Has Item

Return true if we have a given amount of an item. bCheckVisibility will only look for items that are visible in the inventory.

## Perform Loot Item

Remove the item from us, and give it to the taker. Return how much of the item was able to be looted.

## Perform Store Item

Remove the item from the storer, and give it to us. Return how much of the item was able to be stored.

## Remove Item

Remove the item from the inventory. We do actually allow clients to call this unlike AddItem, however the server will still validate that the item is allowed to be removed before removing the item, so still cheat safe.

## Request Loot Item

Loot an item. Clients RPC to tell server they want to do this; server will validate to prevent cheating. If we're client return true/false if we notified server to loot. Server returns true if loot actually happened.

## Request Store Item

Store an item. Clients RPC to tell server they want to do this; server will validate to prevent cheating. If we're client return true/false if we notified server to store. Server returns true if store actually happened.

## Set Capacity

Set the capacity of the inventory.

## Set Currency

Set the amount of currency the player has.

## Set Inventory Friendly Name

Set the friendly name of the inventory.

## Set Is Vendor

Set whether the inventory is a vendor.

## Set Loot Source

Sets our loot source. Only the server can call this for obvious reasons!

## Set Weight Capacity

Set the weight capacity of the inventory.

## Stop Looting

Stop looting. Clients will RPC to the server to end looting.

## Try Add From Loot Table

Add an item to our inventory using a loot table instead of an item class. Current loads the granted items synchronously and may cause hitching depending on how heavy the item is.

## Try Add Item From Class

Add an item to the inventory using the item class. @param ItemClass the item to add @param Quantity the amount of the item to add @param bCheckAutoUse if true, we'll check if the item wants to be auto-used on add. Clothing items do this for example to auto-equip. @return the amount of the item that was added to the inventory.

## Use Item

Use the given item. Return true if the item was successfully used - please note this will always return false on a client in a networked game as the server uses the item, not the client.

## Get Sell Price

Return the price we'll sell the given item for.

## Give Default Items

Instead of calling this automatically on beginplay we let designers call this when they like.
