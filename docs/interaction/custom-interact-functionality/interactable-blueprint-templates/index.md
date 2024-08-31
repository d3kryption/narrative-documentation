---
sidebar_label: 'Interactable Blueprint Templates'
sidebar_position: 1
---

# Interactable Blueprint Templates

It is very common to have template interactions available. For example, if you have 1 door in your game, chances are you may have many doors all working the same way. Remembering to copy all the correct setup values isn’t a good design pattern.

With this in mind, Narrative Interactable allows you to set up template classes based on the base Narrative Interactable class. In your Content Drawer simply right click and choose blueprint actor. Then select **NarrativeInteractableComponent** and name it what you require. In this example, we will name it **DoorInteractable**.

![interactable-blueprint-template-creating-new.jpg](/img/interaction/interactable-blueprint-template-creating-new.jpg)

![interactable-blueprint-template-creating-new-asset.jpg](/img/interaction/interactable-blueprint-template-creating-new-asset.jpg)

Now, instead of adding the **NarrativeInteractable** component to your actors, you can add your custom **DoorInteractable** which will have all your custom settings applied.

![interactable-blueprint-template-creating-new-assign.jpg](/img/interaction/interactable-blueprint-template-creating-new-assign.jpg)