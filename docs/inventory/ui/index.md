---
sidebar_label: 'UI'
---

# UI

The inventory system comes with a pre-built UI to allow all the functionality to work.

Below is a breakdown of each UI and how it relates to others.

## Inventory

### W_NarrativeMenu_Inventory

This is the main widget that shows the UI. It shows the [inventory](./index.md#wbp_inventorywidget), [equipment](./index.md#wbp_playerpreview) and [item inspector](./index.md#wbp_iteminspector).

![W_NarrativeMenu_Inventory.webp](//img/inventory/ui/W_NarrativeMenu_Inventory.webp)

### WBP_InventoryWidget

This is the main inventory display. It shows all the inventory [items](./index.md#wbp_item), [filters](./index.md#wbp_inventoryfilter) and inventory stats.

![wbp-inventory-widget.webp](//img/inventory/ui/wbp-inventory-widget.webp)

### WBP_ItemInspector

Shows the current items details (by hover or selection). It contains the thumbnail, name, description and any actionable buttons. (Drop, use etc...)

![WBP_ItemInspector.webp](//img/inventory/ui/WBP_ItemInspector.webp)

### WBP_Item

The item within the inventory. It has two modes for Grid view and List view using a widget switcher.

![WBP_ItemGrid.webp](//img/inventory/ui/WBP_ItemGrid.webp)

![WBP_ItemList.webp](//img/inventory/ui/WBP_ItemList.webp)

### WBP_ItemStat

This widget is used repeatedly when displaying all item stats within the [item inspector](./index.md#wbp_iteminspector).

![WBP_ItemStat.webp](//img/inventory/ui/WBP_ItemStat.webp)

### WBP_ItemTooltip

When hovering over an item in the inventory, this displays the details about the item before its moved. 

![WBP_ItemTooltip.webp](//img/inventory/ui/WBP_ItemTooltip.webp)

### WBP_InventoryFilter

The button used for applying filters. Filters are categories such as ALL and Clothing.

![WBP_InventoryFilter.webp](//img/inventory/ui/WBP_InventoryFilter.webp)

### WBP_InventoryFilter_Favourites

The button for viewing favourites. It's a child of [WBP_InventoryFilter](./index.md#wbp_inventoryfilter) but hard coded to control the Favourites. 

![WBP_InventoryFilter_Favourites.webp](//img/inventory/ui/WBP_InventoryFilter_Favourites.webp)

## Equipment

This subsection will focus on the equipment screens.

### WBP_PlayerPreview

The main preview window for the player and their equipment. It shows a render target capture image and all the [equipped items](./index.md#wbp_equippeditem). 

![WBP_PlayerPreview.webp](//img/inventory/ui/WBP_PlayerPreview.webp)

### WBP_EquippedItem

The thumbnail for an equipped item. Contains basic functionality to unequip an item and display its details using the [image tooltip](./index.md#wbp_itemtooltip).

![WBP_EquippedItem.webp](//img/inventory/ui/WBP_EquippedItem.webp)

## Looting

This subsection will focus on the looting system between two inventories (whether trader or free).

### W_NarrativeMenu_Looting

The main looting interface. Used in replacement to the standard menu, [W_NarrativeMenu_Inventory](./index.md#w_narrativemenu_inventory).

![WBP_NarrativeMenu_Looting.webp](//img/inventory/ui/WBP_NarrativeMenu_Looting.webp)

### WBP_Loot_YourInventory

A child of the standard [inventory widget](./index.md#wbp_inventorywidget) but modified to show specific details about the joining inventory. (Typically the player who initiates the loot).

![WBP_Loot_YourInventory.webp](//img/inventory/ui/WBP_Loot_YourInventory.webp)

### WBP_Loot_TheirInventory

Another child of the standard [inventory widget](./index.md#wbp_inventorywidget) but modified to show specific details about the looting inventory. (Typically the inventory being looted).

![WBP_Loot_TheirInventory.webp](//img/inventory/ui/WBP_Loot_TheirInventory.webp)
