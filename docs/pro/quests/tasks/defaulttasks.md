---
sidebar_label: 'Default Tasks'
---

# Default Tasks

Narrative contains a bunch of existing tasks for you to use to create your game. These tasks are commonly used ones in most games and integrations with other plugins.

## Activate Ability

When an [Ability](../../abilities) is activated, this task will complete.

### Properties

| Name    | Type                                        | Description                                               |
|---------|---------------------------------------------|-----------------------------------------------------------|
| Ability | [NarrativeGameplayAbility](../../abilities) | The ability that this task needs to wait to be activated. |

## Clear Settlement

When a [settlement](../../settlements) is marked as cleared (all enemies destroyed), it will complete this task.

### Properties

| Name              | Type                                                                                                             | Description                                            |
|-------------------|------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| SettlementToClear | [FGameplayTag](https://dev.epicgames.com/documentation/en-us/unreal-engine/using-gameplay-tags-in-unreal-engine) | The settlement's gameplay tag that needs to be cleared |

## Complete Narrative Data Task

Data Tasks can be completed from any blueprint that has access to the [NarrativeComponent](../../tales-component) and does not require a task to be created.

### Properties

| Name        | Type      | Description                                                                                                                                                                   |
|-------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Data Task   | UDataTask | This is which data task the task needs to check for before completing itself. For example, the data task could be PickupItem.                                                 |
| Argument    | string    | This is which argument when the data task is completed that the task needs to be checked for. For example, the data task could be PickupItem and the argument would be Apple. |
| Retroactive | bool      | Whether the task should look at previously completed nodes before completing this. Useful if you want to skip a task if the player has already done it.                       |

## Complete Quest

A unique one that has its place, this task allows you to complete an objective when you complete another [quest](../index.md). 

An example could be a door quest which requires you to get 3 keys. To get each key, requires you to do a quest. The door quest would be made up of 3 Complete Quest tasks.

### Properties

| Name  | Type                   | Description                                                                   |
|-------|------------------------|-------------------------------------------------------------------------------|
| Quest | [UQuest](../../quests) | This is the quest in which the task needs to be checked to complete the task. |

## Equip Item

When an [item is equipped](../../inventory/equipment), complete this task. You can also check if the item is already equipped.

### Properties

| Name                 | Type                                          | Description                                                              |
|----------------------|-----------------------------------------------|--------------------------------------------------------------------------|
| ItemToEquip          | [item is equipped](../../inventory/equipment) | The item that needs to be equipped.                                      |
| CheckAlreadyEquipped | bool                                          | Check if the item is currently equipped to the player and auto complete. |

## Find Item

When an [item](../../inventory) is found, complete this task. You can also check if the item is already in the players inventory.

### Properties

| Name              | Type                    | Description                                                                |
|-------------------|-------------------------|----------------------------------------------------------------------------|
| ItemToFind        | [item](../../inventory) | The item that needs to be found.                                           |
| CheckAlreadyFound | bool                    | Check if the item is currently in the players inventory and auto complete. |

## Finish Dialogue

This allows you to create objectives such as `Go and talk to Reubs` and upon exiting the dialogue with **Reubs**, this will trigger this objective to finish.

### Properties

| Name          | Type                        | Description                                                                                                   |
|---------------|-----------------------------|---------------------------------------------------------------------------------------------------------------|
| Dialogue      | [UDialogue](../../dialogue) | This is the dialogue which the task needs to check to complete the task.                                      |

## Follow NPC to Location

With this task you can set a list of NPCs that you must follow. They will all go to the same location as a group and you must stay with them.

### Properties

| Name                   | Type                                                                                                             | Description                                                                                                                                                                                           |
|------------------------|------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| NPCs To Follow         | [UNPCDefinition](../npcs/index.md)                                                                               | NPCs to go to the location with the player. If empty, all NPCs in the quest will be told to go.                                                                                                       |
| Goal Rotation          | Rotation                                                                                                         | The AI will try to have this as its rotation at the destination.                                                                                                                                      |
| Goal Location          | vector                                                                                                           | This is the vector location that the player needs to reach to complete the task.                                                                                                                      |
| Distance Tolerance     | float                                                                                                            | This is how close or far away the player needs to get to the goal location.                                                                                                                           |
| Friendly Location Name | string                                                                                                           | The location name that will display on the UI for the player. For example, The House would display on the UI as Go to The House.                                                                      |
| Invert                 | bool                                                                                                             | By default, the task will wait for the player to arrive at the location. However, you may have scenarios where the player needs to get away from a location. You can use this to change this setting. |
| POITarget              | [FGameplayTag](https://dev.epicgames.com/documentation/en-us/unreal-engine/using-gameplay-tags-in-unreal-engine) | GoalLocation can optionally be derived from a POITag if required, simply set this tag to your POI.                                                                                                    |
| NPCTarget              | [UNPCDefinition](../npcs/index.md)                                                                               | GoalLocation can optionally be derived from a NPCs data asset if required, simply set this to your data asset.                                                                                        |

## Go To Location

A very common node which allows you to complete an objective when the player arrives at a destination using the location vector. You can customize how often it checks the distance to save performance.

### Properties

| Name                   | Type                                                                                                             | Description                                                                                                                                                                                           |
|------------------------|------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Goal Location          | vector                                                                                                           | This is the vector location that the player needs to reach to complete the task.                                                                                                                      |
| Distance Tolerance     | float                                                                                                            | This is how close or far away the player needs to get to the goal location.                                                                                                                           |
| Friendly Location Name | string                                                                                                           | The location name that will display on the UI for the player. For example, The House would display on the UI as Go to The House.                                                                      |
| Invert                 | bool                                                                                                             | By default, the task will wait for the player to arrive at the location. However, you may have scenarios where the player needs to get away from a location. You can use this to change this setting. |
| POITarget              | [FGameplayTag](https://dev.epicgames.com/documentation/en-us/unreal-engine/using-gameplay-tags-in-unreal-engine) | GoalLocation can optionally be derived from a POITag if required, simply set this tag to your POI.                                                                                                    |
| NPCTarget              | [UNPCDefinition](../npcs/index.md)                                                                               | GoalLocation can optionally be derived from a NPCs data asset if required, simply set this to your data asset.                                                                                        |

## Holster / Unholser weapon

The task is completed when the player holsters or unholsters their [weapon](../../inventory/equipment/weapons).

### Properties

| Name          | Type                    | Description                                                           |
|---------------|-------------------------|-----------------------------------------------------------------------|
| HolsterWeapon | bool                    | If true, you need to holster weapon, otherwise you need to unholster. |

## Interact with Object

When the player interacts with an object, this task will be complete.

### Properties

| Name          | Type                                       | Description                                                                                                                               |
|---------------|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| RequiredClass | [NarrativeInteractable](../../interaction) | The interactable class the player needs to interact with.                                                                                 |
| OwnerNeedsTag | string                                     | Just in case you have multiple of the same interactable and need to narrow it down, you can enter a required tag the actor needs to have. |

## Kill Enemy

When the player needs to kill a specific enemy (or group of enemies) for the current objective.

### Properties

| Name        | Type                                                                                                             | Description                                                                                                                                 |
|-------------|------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| EnemyToKill | [UNPCDefinition](../npcs/index.md)                                                                               | The enemy to kill is derived from a NPCs data asset.                                                                                        |
| EventTag    | [FGameplayTag](https://dev.epicgames.com/documentation/en-us/unreal-engine/using-gameplay-tags-in-unreal-engine) | Just in case you have multiple of the same NPC data asset and need to narrow it down, you can enter a required tag the actor needs to have. |

## Move

This allows you to create objectives that make the player move a certain distance.

### Properties

| Name           | Type  | Description                                                   |
|----------------|-------|---------------------------------------------------------------|
| DistanceToMove | float | The distance that the player needs to move before completing. |

## Play Dialogue Node

This allows you to create objectives with dialogue, but unlike the Finish Dialogue task, this task will be completed when a single dialogue node is played.

### Properties

| Name           | Type   | Description                                                            |
|----------------|--------|------------------------------------------------------------------------|
| DialogueNodeID | string | The ID of the dialogue node that needs to finish to complete this task |


