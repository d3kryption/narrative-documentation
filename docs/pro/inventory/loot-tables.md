---
sidebar_label: 'Loot Tables'
---

# Loot Tables

Loot tables are used to provide items to Inventories, whether it's the players, [a trader](./looting) or a blueprint.

## Creation

To create a new loot table, **Right Click** in the **Content Drawer** -> **Miscellaneous** -> **Data Table**.

![loot-table-creation.webp](//img/inventory/loot-tables/loot-table-creation.webp)

Select the **LootTableRow** data structure. 

![loot-table-row.webp](//img/inventory/loot-tables/loot-table-row.webp)

You can now populate all the items the Loot Table needs to use.

![loot-table-empty.webp](//img/inventory/loot-tables/loot-table-empty.webp)

## LootTableRow Properties

| Variable Name          | Type                                    | Description                                              |
|------------------------|-----------------------------------------|----------------------------------------------------------|
| ItemsToGrant           | TArray\<FItemWithQuantity\>             | The items to grant if this row is given to the inventory |
| ItemCollectionsToGrant | TArray\<TObjectPtr\<UItemCollection\>\> | Item collections to grant                                |
| SubTablesToRoll        | TArray\<FLootTableRoll\>                | Subloot tables that this loot table will roll            |
| Chance                 | float                                   | The chance this row will actually be given if selected   |

## FItemWithQuantity Properties

| Variable Name | Type                                       |
|---------------|--------------------------------------------|
| Item          | TSoftClassPtr\<[UNarrativeItem](./items)\> |
| Quantity      | int32                                      |

## UItemCollection Properties

| Variable Name | Type                        |
|---------------|-----------------------------|
| Items         | TArray\<FItemWithQuantity\> |

## FLootTableRoll Properties

| Variable Name | Type                     |
|---------------|--------------------------|
| TableToRoll   | TObjectPtr\<UDataTable\> |
| NumRolls      | int32                    |
| Chance        | float                    |
