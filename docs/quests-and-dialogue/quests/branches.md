---
sidebar_label: 'Branches'
sidebar_position: 1
---

# Branches

Narrative's branch system is the decision points for quests.

If you want a linear quest where each objective is the only path you can take, then you will have a simple state / branch quest.

![quest-logic-1.png](/img/quests/quest-logic-1.png)

However, many games like to have non-linear quests where the player can pick from different objectives to change the quest.

![quest-logic-2.png](/img/quests/quest-logic-2.png)

A great example of linear vs non-linear quests.

## Linear Quest example

A linear quest would be a quest such as **Ryder** from Grand Theft Auto: San Andreas.

A quest where you follow a character to a shop. You purchase a new hair cut. You then proceed to purchase food from a shop.  

You then drive home. 

Straight forward, no multiple objectives - great for lore expansion and games that don't need to provide options to the player.

<iframe width="560" height="315" src="https://www.youtube.com/embed/LbqKA7cYCQM?si=rSPuevdKoNw7oZ3C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Non-linear Quest example

A non-linear quest example would be the opening quest from Elder Scrolls V: Skyrim.

The quest has different twists and objectives that the player can take.

An example is at some point in the quest, you have to choose which faction you want to go with. The Imperials or the Storm-cloaks.

Taking one of the paths completely changes the rest of that quest.

<iframe width="560" height="315" src="https://www.youtube.com/embed/MsmsmNBPUO4?si=cZ8m316pEryrfjX2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Tasks

Tasks are objectives within your quest. Things that the player needs to accomplish in order to complete the current branch.

A branch can contain multiple tasks which all need to be completed before the branch can move to the next state.

You can learn more about [Narrative Tasks](./tasks/index.md) here.

## Branch Properties

| Name              | Type                                            | Description                                                                                                                                    |
|-------------------|-------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| ID                | FText                                           | The unique ID of the state. Used for saving the quests position.                                                                               |
| Description       | FText                                           | The description of the current state. Used more so as a overview of the current position.                                                      |
| OnEnteredFuncName | bool                                            | Whether or not the state has has any additional function code bound to it. See [OnEnteredFuncName](./index.md#OnEnteredFuncName)               |
| Conditions        | TArray\<[UNarrativeCondition](../conditions/)\> | Conditions are functions that run before this node is pending selection and contain boolean returns that allow this node to be run or ignored. |
| Events            | TArray\<[UNarrativeEvent](../events)\>          | Events are functions that can run at specific states on [quests](./index.md) & [dialogue](../dialogue).                                        |
| QuestTasks        | TArray\<[UNarrativeTask](./tasks)\>             | Tasks needed to take this branch to its destination. Check Narrative/Content/DefaultTasks/ for examples and create custom tasks.               |
| bHidden           | bool                                            | Whether this branch is hidden from the player on the UI. Useful for hidden quest options in the quest logic.                                   |
| DestinationState  | [UQuestState](./states.md)                      | The state to go to if this branch is taken. The branch is ignored if this is null.                                                             |
