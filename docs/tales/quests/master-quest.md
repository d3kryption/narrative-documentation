---
sidebar_label: 'Master Quest'
---

# Master Quest

A master quest is a middleware blueprint that sits in between the C++ Quest and the quest asset you create.

It allows you to create variables, functions and bulk change all quest assets that inherit from it.

![master-quest-plan.webp](/img/quests/master-quest-plan.webp)

### Creating a new master quest

Start by creating a new **Quest** asset and call it something like `QB_QuestMaster`.

Now go to **Edit** -> **Project Settings** -> **Narrative Quests (Editor)**.

Set the **Default Quest Class** to your new `QB_QuestMaster`. 

![master-quest-project-settings.webp](/img/quests/master-quest-project-settings.webp)

Any new Quests you create will now inherit from this new master quest.

### Updating existing quests

You may have created some quests before creating a master quest.

It's easy to update them to use the new Master Quest.

Simply open your Quest, click **Class Settings** then set the Parent class to your new Master Quest.

![master-quest-parent.webp](/img/quests/master-quest-parent.webp)

### Interface

When adding new variables or functions to your Master Quest, it is common to use them in Events, Conditions and other quest code.

To save casting each time, its good practice to add an interface that returns your new variables.

Start by creating a new interface by right-clicking in your **Content Drawer** -> **Blueprint** ->  Blueprint Interface. Name it something like **BPI_MasterQuest**

Create functions inside the interface that return any custom variables you want to get.

![show-ui-interface.webp](/img/quests/show-ui-interface.webp)

Now open your **QB_MasterQuest** -> Class Settings -> Implemented Interfaces. Now add your new interface.

![master-quest-interface.webp](/img/quests/master-quest-interface.webp)