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

This event allows you to start [dialogue](../dialogue) directly from a node. Whether this be during a [quest](../quests) or another [dialogue](../dialogue) (it will simply end the current dialogue and move to the new one.)

Simply provide the Dialogue and the ID of the node you wish to start from.

### Properties

| Name        | Type                                   | Description                                                                       |
|-------------|----------------------------------------|-----------------------------------------------------------------------------------|
| Dialogue    | TSubclassOf\<[UDialogue](./index.md)\> | The dialogue class that you want to play.                                         |
| StartFromID | FName                                  | The ID the dialogue should start playing from, if empty will play from root node. |


## Begin Quest

This event allows you to start a [quest](../quests) directly from a node. Whether this be during a [quest](../quests) to spawn another quest or during [dialogue](../dialogue).

Simply provide the Quest and the ID of the node you wish to start from.

### Properties

| Name        | Type                | Description                                                                    |
|-------------|---------------------|--------------------------------------------------------------------------------|
| Quest       | [UQuest](../quests) | This is the quest in which the task needs to be checked to complete the task.  |
| StartFromID | FName               | The ID the quest should start playing from, if empty will play from root node. |


## Complete Narrative Data Task

It is common that you may want to complete a task within Narrative that doesn't specifically match up with a task the player has to action. This could be as simple as finding an item location via dialogue but not having it, or completing a task to talk to X amount of NPCs.

Using Narrative's Data Tasks you can complete them simply by providing the task and the argument.

### Properties

| Name     | Type                    | Description                                                       |
|----------|-------------------------|-------------------------------------------------------------------|
| Task     | [UDataTask](./index.md) | This is the data task in which the task will be completed.        |
| Argument | FName                   | The value that is assigned against the data task to be completed. |


## Consume Item

Consumes a specified item from the inventory, activating its effects if it's consumable.

### Properties

| Name             | Type                           | Description                                                        |
|------------------|--------------------------------|--------------------------------------------------------------------|
| Item Class       | [FNarrativeItem](../inventory) | The class of the item to consume.                                  |
| Quantity         | Int                            | The number of items to consume.                                    |
| Check Visibility | Bool                           | Consume only if the item is visible in the inventory (not hidden). |


## Forget Quest

Often you may need to remove progress from a quest. This may be if you return to the NPC and ask to repeat it or the user may have failed the quest.

### Properties

| Name        | Type                | Description                                   |
|-------------|---------------------|-----------------------------------------------|
| Quest       | [UQuest](../quests) | This is the quest that needs to be restarted. |


## Give Item to NPC

Gives a specified item and quantity to an NPC data asset, potentially as a quest requirement.

### Properties

| Name             | Type                           | Description                                         |
|------------------|--------------------------------|-----------------------------------------------------|
| Item Class       | [FNarrativeItem](../inventory) | The class of the item to give.                      |
| Quantity         | Int                            | The number of items to give.                        |
| Check Visibility | Bool                           | Give only if the item is visible in the inventory.  |
| NPC              | [UNPCDefinition](../npcs)      | The NPC data asset to which the item will be given. |


## Give XP

Awards a specific amount of XP to the Narrative player to help them level up.

### Properties

| Name     | Type  | Description   |
|----------|-------|---------------|
| XPtoGive | Float | The amount of |


## NPC Behavior - Attack Player

Commands selected NPCs to attack the player, using the specified behaviour tree.

### Properties

| Name           | Type                              | Description                               |
|----------------|-----------------------------------|-------------------------------------------|
| Behaviour Tree | Behaviour Tree                    | The behaviour tree to run for the NPCs.   |
| NPCsToEffect   | TArray\<[UNPCDefinition](../npcs)/> | List of NPC data assets that will attack. |


## NPC Behavior - Go to sequence start

Instructs selected NPCs to move to the starting point of a specified level sequence.

### Properties

| Name           | Type                              | Description                                            |
|----------------|-----------------------------------|--------------------------------------------------------|
| Behaviour Tree | Behaviour Tree                    | The behaviour tree to run for the NPCs.                |
| NPCsToEffect   | TArray\<[UNPCDefinition](../npcs)/> | List of NPC data assets to move.                       |
| Delay          | Float                             | Time to wait before NPCs arrive at the sequence start. |


## NPC Behavior - Return to settlement

Commands selected NPCs to return to their designated settlement location using the specified behaviour tree.

### Properties

| Name           | Type                              | Description                                      |
|----------------|-----------------------------------|--------------------------------------------------|
| Behaviour Tree | Behaviour Tree                    | The behaviour tree to execute for the NPCs.      |
| NPCsToEffect   | TArray\<[UNPCDefinition](../npcs)/> | List of NPCs that will return to the settlement. |
| Destination    | Vector                            | The location of the settlement for the NPCs.     |


## NPC Behavior - Send to destination

Commands selected NPCs to walk to a specified destination, with optional delay settings.

### Properties

| Name           | Type                              | Description                                        |
|----------------|-----------------------------------|----------------------------------------------------|
| Behaviour Tree | Behaviour Tree                    | The behaviour tree to run for the NPCs.            |
| NPCsToEffect   | TArray\<[UNPCDefinition](../npcs)/> | List of NPCs that will move to the destination.    |
| Destination    | Vector                            | The target location where NPCs will be sent.       |
| Delay          | Float                             | How long the event waits before NPCs start moving. |


## NPC Behavior - Start following Player

Instructs the selected NPCs to start following the player, acting as companions.

### Properties

| Name           | Type                              | Description                                 |
|----------------|-----------------------------------|---------------------------------------------|
| Behaviour Tree | Behaviour Tree                    | The behaviour tree to execute for the NPCs. |
| NPCsToEffect   | TArray\<[UNPCDefinition](../npcs)/> | List of NPCs that will follow the player.   |


## Play Narrative Sequence

Triggers a specific level sequence to play, involving selected NPCs.

### Properties

| Name                   | Type                              | Description                                            |
|------------------------|-----------------------------------|--------------------------------------------------------|
| SequencePlayerSettings | SequencePlayerSettings            | Settings that the sequencer will use for the sequence. |
| NPCsToBind             | TArray\<[UNPCDefinition](../npcs)/> | NPCs that will participate in the sequence.            |


## Print String

Displays a specific string on the screen or log for debugging purposes, useful for testing.

### Properties

| Name            | Type   | Description                               |
|-----------------|--------|-------------------------------------------|
| In string       | String | The string to print for debugging.        |
| Duration        | Float  | Duration for which the string is visible. |
| Print to screen | Bool   | Whether to print the string on screen.    |
| Print to log    | Bool   | Whether to print the string in the log.   |
| Text color      | FColor | The color of the text to display.         |


## Remove Gameplay Tags

Removes specified gameplay tags from the Narrative player or party.

### Properties

| Name         | Type                                                                                                             | Description                                           |
|--------------|------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| TagsToRemove | [FGameplayTag](https://dev.epicgames.com/documentation/en-us/unreal-engine/using-gameplay-tags-in-unreal-engine) | The gameplay tags to remove from the player or party. |


## Restart Quest

This event allows you to restart a quest directly from a node. Removing all progress and starting again from the beginning.

Simply provide the Quest and the ID of the node you wish to start from.

### Properties

| Name        | Type                | Description                                                                    |
|-------------|---------------------|--------------------------------------------------------------------------------|
| Quest       | [UQuest](../quests) | This is the quest that needs to be restarted.                                  |
| StartFromID | FName               | The ID the quest should start playing from, if empty will play from root node. |


## Set Faction Attitude

Changes the relationship attitude between two factions, altering their in-game behavior.

### Properties

| Name          | Type                                                                       | Description                                     |
|---------------|----------------------------------------------------------------------------|-------------------------------------------------|
| SourceFaction | [ENarrativeFactionID](../factions/index.md#enarrativefactionid-properties) | The faction whose attitude is being changed.    |
| TargetFaction | [ENarrativeFactionID](../factions/index.md#enarrativefactionid-properties) | The faction towards whom the attitude is set.   |
| NewAttitude   | [ENarrativeFactionID](../factions/index.md#eteamattitude-properties)       | The new attitude to set for the source faction. |


## Set NPC Behaviour

Applies a specific behaviour tree to selected NPCs to define their actions and AI.

### Properties

| Name           | Type                              | Description                                   |
|----------------|-----------------------------------|-----------------------------------------------|
| Behaviour Tree | Behaviour Tree                    | The behaviour tree to assign to the NPCs.     |
| NPCsToEffect   | TArray\<[UNPCDefinition](../npcs)/> | List of NPCs that will receive this behavior. |


## Show Notification

Displays a notification message to the player or party for a set duration.

### Properties

| Name     | Type   | Description                              |
|----------|--------|------------------------------------------|
| Message  | String | The notification message to display.     |
| Duration | Float  | How long the notification will be shown. |


## Start trading with NPC

Initiates a trading window with a specified NPC, useful for item exchanges or giving companions items.

### Properties

| Name      | Type                      | Description                                    |
|-----------|---------------------------|------------------------------------------------|
| SpeakerID | String                    | The specific ID of the NPC with whom to trade. |
| NPC       | [UNPCDefinition](../npcs) | The NPC data asset to initiate trading with.   |

























## Add Factions

Adds one or more factions to the Narrative player or party.

### Properties

| Name     | Type                                                                                                             | Description                                 |
|----------|------------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| Factions | [FGameplayTag](https://dev.epicgames.com/documentation/en-us/unreal-engine/using-gameplay-tags-in-unreal-engine) | The factions to add to the player or party. |

---

## Add Goal to NPC

Adds a goal to the given NPC. You may prefer to use a BP Event to bind this instead, as that will pass you a pointer back to the created goal, meaning you can keep a reference to the goal, update it, or remove it.

### Properties

| Name      | Type                                | Description                    |
|-----------|-------------------------------------|--------------------------------|
| GoalToAdd | [UNPCGoalItem](../npcs/ai/goals.md) | The goal to send to the NPC.   |

---

## Add Multiple Goals

Assigns multiple goals to an NPC in sequence or parallel depending on their configuration.

### Properties

| Name  | Type                                | Description                             |
|-------|-------------------------------------|-----------------------------------------|
| Goals | TArray\<[UNPCGoal](../npcs/goals)/> | The list of goals to assign to the NPC. |

---

## Add Multiple Goals Then Talk

Assigns a sequence of goals to an NPC, then starts a dialogue when all goals are completed.

### Properties

| Name         | Type                                    | Description                                       |
|--------------|-----------------------------------------|---------------------------------------------------|
| NPC          | [UNPCDefinition](../npcs)               | The NPC to perform the goals and dialogue.        |
| Goals        | TArray\<[UNPCGoal](../npcs/goals)/>     | The goals the NPC should complete before talking. |
| Dialogue     | TSubclassOf\<[UDialogue](../dialogue)\> | The dialogue to begin after completing goals.     |

---

## Move To Dest and Talk

Commands an NPC to move to a destination and initiate dialogue upon arrival.

### Properties

| Name         | Type                                    | Description                                 |
|--------------|-----------------------------------------|---------------------------------------------|
| NPC          | [UNPCDefinition](../npcs)               | The NPC to move and speak.                  |
| Destination  | Vector                                  | The location to move to.                    |
| Dialogue     | TSubclassOf\<[UDialogue](../dialogue)\> | The dialogue to begin once at destination.  |

---

## Sit and Talk

Instructs an NPC to sit at a specified location and start a conversation.

### Properties

| Name         | Type                                    | Description                               |
|--------------|-----------------------------------------|-------------------------------------------|
| NPC          | [UNPCDefinition](../npcs)               | The NPC to sit and begin a conversation.  |
| SeatLocation | Vector                                  | The location where the NPC should sit.    |
| Dialogue     | TSubclassOf\<[UDialogue](../dialogue)\> | The dialogue to start after sitting.      |

---

## Begin Soft Dialogue

Starts a dialogue with an NPC without ending the current conversation, useful for ambient or optional exchanges.

### Properties

| Name        | Type                                    | Description                                                   |
|-------------|-----------------------------------------|---------------------------------------------------------------|
| Dialogue    | TSubclassOf\<[UDialogue](../dialogue)\> | The dialogue class that you want to softly start.             |
| StartFromID | FName                                   | The ID the dialogue should start from, or root if left empty. |

---

## Remove Factions

Removes one or more factions from the Narrative player or party.

### Properties

| Name        | Type                                                            | Description                                  |
|-------------|-----------------------------------------------------------------|----------------------------------------------|
| Factions    | [ENarrativeFactionID](../factions/index.md#enarrativefactionid-properties) | The factions to remove from the player.     |

---

## Remove Follow Goal

Removes the “follow player” goal from an NPC, stopping them from tracking the player.

### Properties

| Name    | Type                      | Description                                |
|---------|---------------------------|--------------------------------------------|
| NPC     | [UNPCDefinition](../npcs) | The NPC who should stop following.         |

---

## Show Notification

Displays an on-screen notification to the player, optionally with sound and duration.

### Properties

| Name           | Type   | Description                                  |
|----------------|--------|----------------------------------------------|
| Message        | String | The message text to display.                 |
| Duration       | Float  | How long the notification should appear.     |
| PlaySound      | Bool   | Whether to play a sound with the message.    |

---

## Start Trading with NPC

Opens the trading interface with a specified NPC, allowing item exchange.

### Properties

| Name    | Type                      | Description                             |
|---------|---------------------------|-----------------------------------------|
| NPC     | [UNPCDefinition](../npcs) | The NPC to initiate trading with.       |
