---
sidebar_label: 'Default Events'
sidebar_position: 0
---

# Default Events

Narrative contains a bunch of existing events for you to use to create your game. These events are commonly used ones in most games and integrations with other plugins.

## Add Currency

Adds a specific amount of currency to the Narrative player or the entire party.

### Properties

| Name          | Type | Description                                                     |
|---------------|------|-----------------------------------------------------------------|
| CurrentAmount | Int  | The amount of currency to add to the Narrative player or party. |

## Add Gameplay Tag to Player

Adds one or more gameplay tags to the Narrative player or party for use in the game.

### Properties

| Name      | Type                                                                                                             | Description                                                |
|-----------|------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| TagsToAdd | [FGameplayTag](https://dev.epicgames.com/documentation/en-us/unreal-engine/using-gameplay-tags-in-unreal-engine) | The gameplay tags to add to the Narrative player or party. |

## Add Item To Inventory

Adds the specified item and its quantity to the player's or party's inventory.

### Properties

| Name      | Type                           | Description                                    |
|-----------|--------------------------------|------------------------------------------------|
| ItemClass | [FNarrativeItem](../inventory) | The class of the item to add to the inventory. |
| Quantity  | Int                            | The number of items to add to the inventory.   |

## Begin Dialogue

This event allows you to start [dialogue](../dialogue) directly from a node...

### Properties

| Name        | Type                                   | Description                                                                       |
|-------------|----------------------------------------|-----------------------------------------------------------------------------------|
| Dialogue    | TSubclassOf\<[UDialogue](./index.md)\> | The dialogue class that you want to play.                                         |
| StartFromID | FName                                  | The ID the dialogue should start playing from, if empty will play from root node. |

## Begin Quest

This event allows you to start a [quest](../quests) directly from a node...

### Properties

| Name        | Type                | Description                                                                    |
|-------------|---------------------|--------------------------------------------------------------------------------|
| Quest       | [UQuest](../quests) | This is the quest in which the task needs to be checked to complete the task.  |
| StartFromID | FName               | The ID the quest should start playing from, if empty will play from root node. |

## Complete Narrative Data Task

It is common that you may want to complete a task within Narrative...

### Properties

| Name     | Type                    | Description                                                       |
|----------|-------------------------|-------------------------------------------------------------------|
| Task     | [UDataTask](./index.md) | This is the data task in which the task will be completed.        |
| Argument | FName                   | The value that is assigned against the data task to be completed. |

## Consume Item

Consumes a specified item from the inventory...

### Properties

| Name             | Type                           | Description                                                        |
|------------------|--------------------------------|--------------------------------------------------------------------|
| Item Class       | [FNarrativeItem](../inventory) | The class of the item to consume.                                  |
| Quantity         | Int                            | The number of items to consume.                                    |
| Check Visibility | Bool                           | Consume only if the item is visible in the inventory (not hidden). |

## Forget Quest

Often you may need to remove progress from a quest...

### Properties

| Name        | Type                | Description                                   |
|-------------|---------------------|-----------------------------------------------|
| Quest       | [UQuest](../quests) | This is the quest that needs to be restarted. |

## Give Item to NPC

Gives a specified item and quantity to an NPC...

### Properties

| Name             | Type                           | Description                                         |
|------------------|--------------------------------|-----------------------------------------------------|
| Item Class       | [FNarrativeItem](../inventory) | The class of the item to give.                      |
| Quantity         | Int                            | The number of items to give.                        |
| Check Visibility | Bool                           | Give only if the item is visible in the inventory.  |
| NPC              | [UNPCDefinition](../npcs)      | The NPC data asset to which the item will be given. |

## Give XP

Awards a specific amount of XP to the Narrative player...

### Properties

| Name     | Type  | Description   |
|----------|-------|---------------|
| XPtoGive | Float | The amount of |

## NPC Behavior - Attack Player

Commands selected NPCs to attack the player...

### Properties

| Name           | Type                                | Description                               |
|----------------|-------------------------------------|-------------------------------------------|
| Behaviour Tree | Behaviour Tree                      | The behaviour tree to run for the NPCs.   |
| NPCsToEffect   | TArray\<[UNPCDefinition](../npcs)/> | List of NPC data assets that will attack. |

## NPC Behavior - Go to sequence start

Instructs selected NPCs to move to the starting point...

### Properties

| Name           | Type                                | Description                                            |
|----------------|-------------------------------------|--------------------------------------------------------|
| Behaviour Tree | Behaviour Tree                      | The behaviour tree to run for the NPCs.                |
| NPCsToEffect   | TArray\<[UNPCDefinition](../npcs)/> | List of NPC data assets to move.                       |
| Delay          | Float                               | Time to wait before NPCs arrive at the sequence start. |

## NPC Behavior - Return to settlement

Commands selected NPCs to return to their designated settlement...

### Properties

| Name           | Type                                | Description                                      |
|----------------|-------------------------------------|--------------------------------------------------|
| Behaviour Tree | Behaviour Tree                      | The behaviour tree to execute for the NPCs.      |
| NPCsToEffect   | TArray\<[UNPCDefinition](../npcs)/> | List of NPCs that will return to the settlement. |
| Destination    | Vector                              | The location of the settlement for the NPCs.     |

## NPC Behavior - Send to destination

Commands selected NPCs to walk to a specified destination...

### Properties

| Name           | Type                                | Description                                        |
|----------------|-------------------------------------|----------------------------------------------------|
| Behaviour Tree | Behaviour Tree                      | The behaviour tree to run for the NPCs.            |
| NPCsToEffect   | TArray\<[UNPCDefinition](../npcs)/> | List of NPCs that will move to the destination.    |
| Destination    | Vector                              | The target location where NPCs will be sent.       |
| Delay          | Float                               | How long the event waits before NPCs start moving. |

## NPC Behavior - Start following Player

Instructs the selected NPCs to start following the player...

### Properties

| Name           | Type                                | Description                                 |
|----------------|-------------------------------------|---------------------------------------------|
| Behaviour Tree | Behaviour Tree                      | The behaviour tree to execute for the NPCs. |
| NPCsToEffect   | TArray\<[UNPCDefinition](../npcs)/> | List of NPCs that will follow the player.   |

## Play Narrative Sequence

Triggers a specific level sequence to play...

### Properties

| Name                   | Type                                | Description                                            |
|------------------------|-------------------------------------|--------------------------------------------------------|
| SequencePlayerSettings | SequencePlayerSettings              | Settings that the sequencer will use for the sequence. |
| NPCsToBind             | TArray\<[UNPCDefinition](../npcs)/> | NPCs that will participate in the sequence.            |

## Print String

Displays a specific string on the screen or log...

### Properties

| Name            | Type   | Description                               |
|-----------------|--------|-------------------------------------------|
| In string       | String | The string to print for debugging.        |
| Duration        | Float  | Duration for which the string is visible. |
| Print to screen | Bool   | Whether to print the string on screen.    |
| Print to log    | Bool   | Whether to print the string in the log.   |
| Text color      | FColor | The color of the text to display.         |

## Remove Gameplay Tags

Removes specified gameplay tags...

### Properties

| Name         | Type                                                                                                             | Description                                           |
|--------------|------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| TagsToRemove | [FGameplayTag](https://dev.epicgames.com/documentation/en-us/unreal-engine/using-gameplay-tags-in-unreal-engine) | The gameplay tags to remove from the player or party. |

## Restart Quest

This event allows you to restart a quest...

### Properties

| Name        | Type                | Description                                                                    |
|-------------|---------------------|--------------------------------------------------------------------------------|
| Quest       | [UQuest](../quests) | This is the quest that needs to be restarted.                                  |
| StartFromID | FName               | The ID the quest should start playing from, if empty will play from root node. |

## Set Faction Attitude

Changes the relationship attitude between two factions...

### Properties

| Name          | Type                                                                       | Description                                     |
|---------------|----------------------------------------------------------------------------|-------------------------------------------------|
| SourceFaction | [ENarrativeFactionID](../factions/index.md#enarrativefactionid-properties) | The faction whose attitude is being changed.    |
| TargetFaction | [ENarrativeFactionID](../factions/index.md#enarrativefactionid-properties) | The faction towards whom the attitude is set.   |
| NewAttitude   | [ENarrativeFactionID](../factions/index.md#eteamattitude-properties)       | The new attitude to set for the source faction. |

## Set NPC Behaviour

Applies a specific behaviour tree to selected NPCs...

### Properties

| Name           | Type                                | Description                                   |
|----------------|-------------------------------------|-----------------------------------------------|
| Behaviour Tree | Behaviour Tree                      | The behaviour tree to assign to the NPCs.     |
| NPCsToEffect   | TArray\<[UNPCDefinition](../npcs)/> | List of NPCs that will receive this behavior. |
