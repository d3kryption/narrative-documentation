---
sidebar_label: 'Master Dialogue'
---

# Master Dialogue

A Master Dialogue is a middleware blueprint that sits in between the C++ Dialogue and the dialogue asset you create.

It allows you to create variables, functions and bulk change all dialogue assets that inherit from it.

![master-dialogue-plan.webp](/img/dialogue/master-dialogue-plan.webp)

### Creating a new Master Dialogue

Start by creating a new **Dialogue** asset and call it something like `QB_DialogueMaster`.

Now go to **Edit** -> **Project Settings** -> **Narrative Dialogues (Editor)**.

Set the **Default Dialogue Class** to your new `QB_DialogueMaster`. 

![master-dialogue-project-settings.webp](/img/dialogue/master-dialogue-project-settings.webp)

Any new Dialogues you create will now inherit from this new Master Dialogue.

### Updating existing dialogue

You may have created some dialogue before creating a Master Dialogue.

It's easy to update them to use the new Master Dialogue.

Simply open your Dialogue, click **Class Settings** then set the Parent class to your new Master Dialogue.

![master-dialogue-parent.webp](/img/dialogue/master-dialogue-parent.webp)

### Interface

When adding new variables or functions to your Master Dialogue, it is common to use them in Events, Conditions and other dialogue code.

To save casting each time, its good practice to add an interface that returns your new variables.

Start by creating a new interface by right-clicking in your **Content Drawer** -> **Blueprint** ->  Blueprint Interface. Name it something like **BPI_MasterDialogue**

Create functions inside the interface that return any custom variables you want to get.

![master-dialogue-interface.webp](/img/dialogue/master-dialogue-interface.webp)

Now open your **QB_MasterDialogue** -> Class Settings -> Implemented Interfaces. Now add your new interface.

![master-dialogue-interface-implimentation.webp](/img/dialogue/master-dialogue-interface-implimentation.webp)