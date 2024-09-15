---
sidebar_label: 'States'
sidebar_position: 0
---

# States

Narrative has 3 states you can use to create quests. 

The player will be presented with 1 or more tasks but at least one must be completed to move to the next state.

States must be connected to a branch and cannot be connected to other states.

![quest-state.webp](/img/quests/quest-state.webp)

## Quest Start

This is a locked state that is automatically added to your quest. It is the start of every quest. 

It does not have any input, it always exists and cannot be deleted. Only one can exist per quest.

![state-quest-start.webp](/img/quests/state-quest-start.webp)

## Quest State

The most common state. Most quests will have multiple states to guide the player along the quest and is used after every branch. 

It has 1 input node to come from a [branch](./branches.md) and 1 output node to connect to one or more [branches](./branches.md).

![state-state.webp](/img/quests/state-state.webp)

## Quest Success

This state is used when you want to mark a quest as **successfully complete**. 

Once this state has been reached, the quest will no longer action any other tasks without you forgetting the quest and restarting it.

![state-success.webp](/img/quests/state-success.webp)

## Quest Failure

This state is used when you want to mark a quest as **failed**. 

Any task can set the quests progress to the failed state whether they have passed the task or not. 

This means you can create tasks to fail such as a task to **Reach the castle before Reubs does** which tells the quest to either go to the Success state or Fail state depending on the outcome.

![state-quest-fail.webp](/img/quests/state-quest-fail.webp)

## State Properties

| Name              | Type                                            | Description                                                                                                                                    |
|-------------------|-------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| ID                | FText                                           | The unique ID of the state. Used for saving the quests position.                                                                               |
| Description       | FText                                           | The description of the current state. Used more so as a overview of the current position.                                                      |
| OnEnteredFuncName | bool                                            | Whether or not the state has has any additional function code bound to it.                                                                     |
| Conditions        | TArray\<[UNarrativeCondition](../conditions/)\> | Conditions are functions that run before this node is pending selection and contain boolean returns that allow this node to be run or ignored. |
| Events            | TArray\<[UNarrativeEvent](../events)\>          | Events are functions that can run at specific states on [quests](./index.md) & [dialogue](../dialogue).                                        |
| Branches          | TArray\<[UQuestBranch](./branches.md)\>         | Whether this branch is hidden from the player on the UI. Useful for hidden quest options in the quest logic.                                   |
| StateNodeType     | [EStateNodeType](./states.md)                   | The state to go to if this branch is taken. The branch is ignored if this is null.                                                             |


:::note

Quest conditions currently do not work. You can archive the same result using [branches](./branches.md).

It has been left here since there is a discussion in the community to whether it should be made available or not.

:::

### EStateNodeType

| Enum Value | Description                                                                                               |
|------------|-----------------------------------------------------------------------------------------------------------|
| Regular    | This is a regular state. Upon reaching it, the quest will be considered still in progress.                |
| Success    | The quest will be completed when this state is reached.                                                   |
| Failure    | The quest will be failed when this state is reached.                                                      |