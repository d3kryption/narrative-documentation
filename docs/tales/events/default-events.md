---
sidebar_label: 'Default Events'
sidebar_position: 0
---

# Default Events

Narrative contains a bunch of existing events for you to use to create your game. These events are commonly used ones in most games and integrations with other plugins.

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

## Forget Quest

Often you may need to remove progress from a quest. This may be if you return to the NPC and ask to repeat it or the user may have failed the quest.

### Properties

| Name        | Type                | Description                                   |
|-------------|---------------------|-----------------------------------------------|
| Quest       | [UQuest](../quests) | This is the quest that needs to be restarted. |


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


## Restart Quest

This event allows you to restart a quest directly from a node. Removing all progress and starting again from the beginning.

Simply provide the Quest and the ID of the node you wish to start from.

### Properties

| Name        | Type                | Description                                                                    |
|-------------|---------------------|--------------------------------------------------------------------------------|
| Quest       | [UQuest](../quests) | This is the quest that needs to be restarted.                                  |
| StartFromID | FName               | The ID the quest should start playing from, if empty will play from root node. |

