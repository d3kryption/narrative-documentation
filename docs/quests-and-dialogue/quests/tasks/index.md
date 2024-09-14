---
sidebar_label: 'Tasks'
sidebar_position: 2
---

# Tasks

Tasks are objectives within your quest. Things that the player needs to accomplish in order to complete the current branch.

A branch can contain multiple tasks which all need to be completed before the branch can move to the next state.

Narrative comes with a bunch of pre-defined [tasks](./index.md) to help you build your game.

Narrative has two main types of tasks, a blueprint based task that allows you to combine all your task code into a single asset and data assets.

## Blueprint tasks

Blueprint tasks are Blueprint based assets that allow you to add all the logic required into a single asset.

It will be one of the most common assets created and reused. Common examples are KillEnemy - where you provide some reference to the enemy and it auto completes when the enemy has died.

### Creation

Create a new blueprint task by right-clicking in the **Content Drawer** -> **Narrative** -> **Task**.

You then call `AddProgress` or `CompleteTask` when you want to update the task. Upon reaching the required quantity, the task will call EndTask and finish.

### Task Properties

Each task has the below default properties. You can easily add extra variables to capture the data you require.

| Name                | Type                                                                                | Description                                                                   |
|---------------------|-------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| RequiredQuantity    | int32                                                                               | The number of times the task needs to be completed before the quest updates.  |
| DescriptionOverride | FText                                                                               | Override the auto-generated description of the task with a custom one.        |
| bOptional           | bool                                                                                | Whether or not this task is optional.                                         |
| bHidden             | bool                                                                                | Check this box to hide this task in the narrative UI.                         |
| TickInterval        | float                                                                               | Defines how often the task should tick. Set to 0 to disable ticking.          |
| CurrentProgress     | int32                                                                               | The current progress this task has made.                                      |
| OwningComp          | [UNarrativeComponent](../../tales-component)                                        | The narrative component that owns this task.                                  |
| OwningPawn          | APawn                                                                               | The pawn that owns this task.                                                 |
| OwningController    | APlayerController                                                                   | The player controller that owns this task.                                    |
| OwningQuest         | [UQuest](../../quests)                                                              | The quest that owns this task.                                                |

## Data tasks

Data tasks are a sub-set of tasks which allows you to complete a task from an existing blueprint.

Useful for when you are using another plugin or existing logic that you need to complete a task.

:::note

Data tasks simply complete a pre-defined Task called [Complete Narrative Data Task](defaulttasks.md#complete-narrative-data-task)

:::

### Creation

Create a new data task by right-clicking in the **Content Drawer** -> **Narrative** -> **Data Task**.

You then call **CompleteNarrativeDataTask** when you want to update the task.

## Using tasks

Tasks once setup are super easy to use.

Simply select or create a [branch](../branches.md) then populate the tasks array with your task.

![quest-tasks.png](/img/quests/quest-tasks.png)