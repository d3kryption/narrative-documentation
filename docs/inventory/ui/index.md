---
sidebar_label: 'UI'
---

# UI

The inventory system comes with a pre-built UI to allow all the functionality to work.

Below is a breakdown of each UI and how it relates to others.

## Inventory

### W_NarrativeMenu_Inventory

This is the main widget that shows the UI. It shows the [inventory](./index.md#wbp_inventorywidget), [equipment](./index.md#wbp_playerpreview) and [item inspector](./index.md#wbp_iteminspector).

![W_NarrativeMenu_Inventory.png](/img/inventory/ui/W_NarrativeMenu_Inventory.png)

### WBP_InventoryWidget

This is the main inventory display. It shows all the inventory [items](./index.md#wbp_item), [filters](./index.md#wbp_inventoryfilter) and inventory stats.

![wbp-inventory-widget.png](/img/inventory/ui/wbp-inventory-widget.png)

### WBP_ItemInspector

Shows the current items details (by hover or selection). It contains the thumbnail, name, description and any actionable buttons. (Drop, use etc...)

![WBP_ItemInspector.png](/img/inventory/ui/WBP_ItemInspector.png)

### WBP_Item

The item within the inventory. It has two modes for Grid view and List view using a widget switcher.

![WBP_ItemGrid.png](/img/inventory/ui/WBP_ItemGrid.png)

![WBP_ItemList.png](/img/inventory/ui/WBP_ItemList.png)

### WBP_ItemStat

This widget is used repeatedly when displaying all item stats within the [item inspector](./index.md#wbp_iteminspector).

![WBP_ItemStat.png](/img/inventory/ui/WBP_ItemStat.png)

### WBP_ItemTooltip

When hovering over an item in the inventory, this displays the details about the item before its moved. 

![WBP_ItemTooltip.png](/img/inventory/ui/WBP_ItemTooltip.png)

### WBP_InventoryFilter

The button used for applying filters. Filters are categories such as ALL and Clothing.

![WBP_InventoryFilter.png](/img/inventory/ui/WBP_InventoryFilter.png)

### WBP_InventoryFilter_Favourites

The button for viewing favourites. It's a child of [WBP_InventoryFilter](./index.md#wbp_inventoryfilter) but hard coded to control the Favourites. 

![WBP_InventoryFilter_Favourites.png](/img/inventory/ui/WBP_InventoryFilter_Favourites.png)

## Equipment

This subsection will focus on the equipment screens.

### WBP_PlayerPreview

The main preview window for the player and their equipment. It shows a render target capture image and all the [equipped items](./index.md#wbp_equippeditem). 

![WBP_PlayerPreview.png](/img/inventory/ui/WBP_PlayerPreview.png)

### WBP_EquippedItem

The thumbnail for an equipped item. Contains basic functionality to unequip an item and display its details using the [image tooltip](./index.md#wbp_itemtooltip).

![WBP_EquippedItem.png](/img/inventory/ui/WBP_EquippedItem.png)

## Looting

This subsection will focus on the looting system between two inventories (whether trader or free).

### W_NarrativeMenu_Looting

The main looting interface. Used in replacement to the standard menu, [W_NarrativeMenu_Inventory](./index.md#w_narrativemenu_inventory).

![WBP_NarrativeMenu_Looting.png](/img/inventory/ui/WBP_NarrativeMenu_Looting.png)

### WBP_Loot_YourInventory

A child of the standard [inventory widget](./index.md#wbp_inventorywidget) but modified to show specific details about the joining inventory. (Typically the player who initiates the loot).

![WBP_Loot_YourInventory.png](/img/inventory/ui/WBP_Loot_YourInventory.png)

### WBP_Loot_TheirInventory

Another child of the standard [inventory widget](./index.md#wbp_inventorywidget) but modified to show specific details about the looting inventory. (Typically the inventory being looted).

![WBP_Loot_TheirInventory.png](/img/inventory/ui/WBP_Loot_TheirInventory.png)
