---
sidebar_label: 'Default Conditions'
sidebar_position: 0
---

# Default Conditions

Narrative comes with a bunch of default conditions to help kickstart your game.

## Has Completed Data Task

This condition allows you to check if a Narrative Data Task has been completed to enter this node.

Using Narrative’s Data Tasks you can complete them simply by providing the task and the argument. You also have the option to provide a quantity if you want to only check if the data task has been completed a number of times.

### Properties

| Name     | Type                    | Description                                                       |
|----------|-------------------------|-------------------------------------------------------------------|
| Task     | [UDataTask](./index.md) | This is the data task in which the task will be completed.        |
| Argument | FName                   | The value that is assigned against the data task to be completed. |
| Quantity | int                     | The number of data task completions to check for.                 |

## Is Quest At State

This condition allows you to check if a specified quest has arrived at a specific state.

Simply provide the Quest you want to check and the state ID in which it must have arrived.

:::note

That this condition checks if the quest is currently AT a current state. Not if a past state has been completed.

:::

### Properties

| Name  | Type                | Description                                  |
|-------|---------------------|----------------------------------------------|
| Quest | [UQuest](../quests) | The quest that needs to be checked.          |
| State | Name                | The quest state ID that needs to be checked. |

## Is Quest Failed

This condition checks if a quest has ever reached the failed state.

Simply provide the Quest you want to check.

:::note

That a quest will only retain a failed state whilst it has not been forgotten or restarted.

:::

### Properties

| Name  | Type                | Description                         |
|-------|---------------------|-------------------------------------|
| Quest | [UQuest](../quests) | The quest that needs to be checked. |

## Is Quest In Progress

This condition checks if a quest is currently in progress. This means it has not reached a success or failed state.

Simply provide the Quest you want to check.

### Properties

| Name  | Type                | Description                         |
|-------|---------------------|-------------------------------------|
| Quest | [UQuest](../quests) | The quest that needs to be checked. |

## Is Quest Started or Finished

This condition checks if a quest has currently started or finished. This means it has been encountered and started at least once at any state.

Simply provide the Quest you want to check.

### Properties

| Name  | Type                | Description                         |
|-------|---------------------|-------------------------------------|
| Quest | [UQuest](../quests) | The quest that needs to be checked. |

## Is Quest Succeeded

This condition checks if a quest has ever reached the success state.

Simply provide the Quest you want to check.

### Properties

| Name  | Type                | Description                         |
|-------|---------------------|-------------------------------------|
| Quest | [UQuest](../quests) | The quest that needs to be checked. |

:::note

That a quest will only retain a success state whilst it has not been forgotten or restarted.

:::
