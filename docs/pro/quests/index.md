---
sidebar_label: 'Quests'
---

# Quests

Quests is a large part of the Narrative framework. It allows you to create rich, content filled quests with minimal work.

## Creation

Create a new quest by right-clicking in the **Content Drawer** -> **Narrative** -> **Quest**.

![quest-creation.png](/img/quests/quest-creation.png)

### Tabs

Here you will see two tabs. The **Quest Graph** and the **Event Graph**.

**The Event Graph** is where you can overwrite quest functions and add additional code to make your quest perform how you want.

**The Quest Graph** is how you build up the quest with [quest branches](./branches.md) and [quest states](./states).

![quest-tabs.png](/img/quests/quest-tabs.png)

### Class Defaults

Click the **Class Defaults** button at the top, and we can now populate the **Quests default settings**.

![creation-default-settings-class.png](/img/dialogue/creation-default-settings-class.png)

The class defaults give you access to modify how your quest will work. It lets you change the quest title in the quest and more.

![quest-defaults.png](/img/quests/quest-defaults.png)

### Quest Properties

| Name              | Type                  | Description                                                                                                                                                                                                                                  |
|-------------------|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| QuestName         | FText                 | The name of the quest.                                                                                                                                                                                                                       |
| QuestDescription  | FText                 | The description of the overhaul quest, different to objectives.                                                                                                                                                                              |
| Tracked           | bool                  | Whether or not the quest is marked as tracked. If tracked the navigation markers will be added, otherwise these will be hidden.                                                                                                              |
| InheritableStates | TArray\<UQuestState\> | Inherited quest [states](./states.md). E.g. your parent quest could have a state called **RanOutOfTime** and that way any child quests could inherit the **RanOutOfTime** state instead of having to manually have one added to every quest. |

## Quest Logic

Understanding how quests work is the key to making AAA quests in no-time.

In Narrative, quests are made up of [branches](./branches.md) and [states](./states.md).

**States** are points within your quest where you are waiting for the player to complete the next task.

**Branches** are the tasks within your quest that you need to complete. A quest can have multiple branches connected to a single **state**.

Each quest will start with a State - the [QuestStart](./states.md#quest-start), a series of **branches** and connected **states**, and then it will end with a **State** the [QuestSuccess](./states.md#quest-success) or [QuestFailure](./states.md#quest-failure)

![quest-logic-1.png](/img/quests/quest-logic-1.png)

A state can also have multiple branches to create different paths in the quest. We will explore this more later.

![quest-logic-2.png](/img/quests/quest-logic-2.png)

:::note

A common description is to think of **states** as rooms and **branches** as doors.

You enter the room (**state**) and wait. You then pick a door (**branch**) and go through it which is you completing the task.

![quest-logic-3.png](/img/quests/quest-logic-3.png)

:::
## Begin Quest

The main function to start quests is the **Begin Quest** function built into the [Narrative Component](../tales-component).

![quests-beginquest.png](/img/quests/quests-beginquest.png)

## Comments

You can add Unreal's comments around your quests to organise them or make them easier to debug at a glance.

Simply highlight your quest nodes and hit the **C** key to add the comment.

![quest-comments.png](/img/quests/quest-comments.png)

## Copy and pasting

:::warning

Copying and pasting quest nodes have been disabled until further notice.

It was causing corruption in assets and until it can be resolved up to the high Narrative standard, it has been removed.

:::