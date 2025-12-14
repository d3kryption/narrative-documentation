---
sidebar_label: 'Default Tasks'
sidebar_position: 0
---

# Default Tasks

Narrative contains a bunch of existing tasks for you to use to create your game. These tasks are commonly used ones in most games and integrations with other plugins.

## Complete Narrative Data Task

Data Tasks can be completed from any blueprint that has access to the [NarrativeComponent](../../tales-component) and does not require a task to be created.

### Properties

| Name        | Type                    | Description                                                                                                                                                                   |
|-------------|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Data Task   | [UDataTask](./index.md) | This is which data task the task needs to check for before completing itself. For example, the data task could be PickupItem.                                                 |
| Argument    | string                  | This is which argument when the data task is completed that the task needs to be checked for. For example, the data task could be PickupItem and the argument would be Apple. |
| Retroactive | bool                    | Whether the task should look at previously completed nodes before completing this. Useful if you want to skip a task if the player has already done it.                       |

## Complete Quest

A unique one that has its place, this task allows you to complete an objective when you complete another [quest](../index.md). 

An example could be a door quest which requires you to get 3 keys. To get each key, requires you to do a quest. The door quest would be made up of 3 Complete Quest tasks.

### Properties

| Name  | Type                   | Description                                                                   |
|-------|------------------------|-------------------------------------------------------------------------------|
| Quest | [UQuest](../../quests) | This is the quest in which the task needs to be checked to complete the task. |

## Finish Dialogue

This allows you to create objectives such as `Go and talk to Reubs` and upon exiting the dialogue with **Reubs**, this will trigger this objective to finish.

### Properties

| Name          | Type                        | Description                                                                                                   |
|---------------|-----------------------------|---------------------------------------------------------------------------------------------------------------|
| Dialogue      | [UDialogue](../../dialogue) | This is the dialogue which the task needs to check to complete the task.                                      |

## Follow NPC to Location

This task makes an NPC walk to a location and then complete itself if the player is close enough.

### Properties

| Name                   | Type   | Description                                                                                                                                                                                           |
|------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Goal Location          | vector | This is the vector location that the player needs to reach to complete the task.                                                                                                                      |
| Distance Tolerance     | float  | This is how close or far away the player needs to get to the goal location.                                                                                                                           |
| Friendly Location Name | string | The location name that will display on the UI for the player. For example, The House would display on the UI as Go to The House.                                                                      |
| Invert                 | bool   | By default, the task will wait for the player to arrive at the location. However, you may have scenarios where the player needs to get away from a location. You can use this to change this setting. |
| Actor                  | Actor  | GoalLocation can optionally be derived from a actors location if required.                                                                                                                            |
| NPCClass               | Actor  | The actor class to find.                                                                                                                                                                              |
| NPCTag                 | Name   | The tag of the actor to find specifically.                                                                                                                                                            |

## Go To Location

A very common node which allows you to complete an objective when the player arrives at a destination using the location vector. You can customize how often it checks the distance to save performance.

### Properties

| Name                   | Type   | Description                                                                                                                                                                                           |
|------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Goal Location          | vector | This is the vector location that the player needs to reach to complete the task.                                                                                                                      |
| Distance Tolerance     | float  | This is how close or far away the player needs to get to the goal location.                                                                                                                           |
| Friendly Location Name | string | The location name that will display on the UI for the player. For example, The House would display on the UI as Go to The House.                                                                      |
| Invert                 | bool   | By default, the task will wait for the player to arrive at the location. However, you may have scenarios where the player needs to get away from a location. You can use this to change this setting. |
| Actor                  | Actor  | GoalLocation can optionally be derived from a actors location if required.                                                                                                                            |

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

