---
sidebar_label: 'Default Tasks'
---

# Default Tasks

Narrative contains a bunch of existing tasks for you to use to create your game. These tasks are commonly used ones in most games and integrations with other plugins.

## Finish Dialogue

This allows you to create objectives such as `Go and talk to Reubs` and upon exiting the dialogue with **Reubs**, this will trigger this objective to finish.

### Properties

| Name          | Type                        | Description                                                                                                   |
|---------------|-----------------------------|---------------------------------------------------------------------------------------------------------------|
| Dialogue      | [UDialogue](../../dialogue) | This is the dialogue which the task needs to check to complete the task.                                      |
| Add Waypoint? | bool                        | Whether Narratives built in Waypoint be added to the actor's location so the player can track them on screen. |

## Play Dialogue Node

This allows you to create objectives with dialogue, but unlike the Finish Dialogue task, this task will be completed when a single dialogue node is played. Consider RPG games such as Skyrim or Witcher where you can complete quests in the middle of dialogue without leaving it. Objectives such as “Inform Reubs that you found the item”

### Properties

| Name           | Type   | Description                                                                                                                                             |
|----------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| DialogueNodeID | string | This is the dialogue node ID that the task needs to wait for to complete the task.                                                                      |
| Add Waypoint?  | bool   | Whether Narratives built in Waypoint be added to the actor's location so the player can track them on screen.                                           |
| Retroactive    | bool   | Whether the task should look at previously completed nodes before completing this. Useful if you want to skip a task if the player has already done it. |

## Move
This allows you to create objectives that make the player move a certain distance. For example, telling the player to move 100 meters.

## Complete Narrative Data Task

One of the most common tasks you may use. Narrative Tasks are blueprints that allow you to combine logic into a single task which can connect via Event Dispatchers or other means to actors and complete automatically. However, sometimes this might not be feasible and this is where Data Tasks come in. Data Tasks can be completed from any blueprint that has access to the NarrativeComponent and does not require a task to be created. Data Tasks can then be queried to get details about it. An example would be every time you defeat an enemy, a data task is marked as complete using the node CompleteNarrativeDataTask. You can then query this in your quest to detect if a certain number of enemies have been defeated.

### Properties

| Name        | Type      | Description                                                                                                                                                                   |
|-------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Data Task   | UDataTask | This is which data task the task needs to check for before completing itself. For example, the data task could be PickupItem.                                                 |
| Argument    | string    | This is which argument when the data task is completed that the task needs to be checked for. For example, the data task could be PickupItem and the argument would be Apple. |
| Retroactive | bool      | Whether the task should look at previously completed nodes before completing this. Useful if you want to skip a task if the player has already done it.                       |

## Go To Location

A very common node which allows you to complete an objective when the player arrives at a destination using the location vector. You can customize how often it checks the distance to save performance.

### Properties

| Name                   | Type   | Description                                                                                                                                                                                           |
|------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Goal Location          | vector | This is the vector location that the player needs to reach to complete the task.                                                                                                                      |
| Distance Tolerance     | float  | This is how close or far away the player needs to get to the goal location.                                                                                                                           |
| Retroactive            | bool   | Whether the task should look at previously completed nodes before completing this. Useful if you want to skip a task if the player has already done it.                                               |
| Friendly Location Name | string | The location name that will display on the UI for the player. For example, The House would display on the UI as Go to The House.                                                                      |
| Goal Actor Class       | AActor | If you don’t want to use the fixed goal location, you can provide a goal actor class and a goal actor tag (see below) to track instead. Useful for moving targets.                                    |
| Goal Actor Tag         | string | The tag of the actor you are trying to track. Useful if you have a generic class that applies to multiple instances.                                                                                  |
| Invert                 | bool   | By default, the task will wait for the player to arrive at the location. However, you may have scenarios where the player needs to get away from a location. You can use this to change this setting. |
| Add Waypoint?          | bool   | Whether Narratives built in Waypoint be added to the actor's location so the player can track them on screen.                                                                                         |

## Complete Quest

A unique one that has its place, this task allows you to complete an objective when you complete another quest. An example could be a door quest which requires you to get 3 keys. To get each key, requires you to do a quest. The door quest would be made up of 3 Complete Quest tasks.

### Properties

| Name          | Type                   | Description                                                                                                   |
|---------------|------------------------|---------------------------------------------------------------------------------------------------------------|
| Quest         | [UQuest](../../quests) | This is the quest in which the task needs to be checked to complete the task.                                      |
