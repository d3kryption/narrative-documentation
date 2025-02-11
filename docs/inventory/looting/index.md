---
sidebar_label: 'Looting'
---

# Looting

Inventory contains a fully functional looting system to be able to take or transfer items from other inventories.

To add looting to a blueprint you need to do two things.

Add the [Inventory component](../inventory-component) to your blueprint, for example a **Chest**.

![looting.webp](//img/inventory/looting.webp)

Now, depending on how you want to handle the start of the looting, you can either set up an interaction system such as [Narrative Interaction](../../interaction) or an overlap trigger.

Upon activating, you need to get the inventory from the interactor (the player, an NPC, blueprint) then call [SetLootSource](../inventory-component/functions.md#set-loot-source) and set the new Loot Source to the blueprints inventory (such as the chest).

![looting-beginoverlap.webp](//img/inventory/looting-beginoverlap.webp)

## Trading / Shop

If you want to make a shop or a trader, see [Trading](./trading.md)