---
sidebar_label: 'Custom interact functionality'
sidebar_position: 3
---

# Custom interact functionality

To start creating your own custom interactive functionality we need to create our own Blueprint. In this example we will create a basic door so right click in the content drawer and select the blueprint class called BP_Door.

Add a static mesh component and add a basic door frame, then another static mesh for the door.

![custom-interact-functionlaity.jpg](/img/interaction/custom-interact-functionlaity.jpg)

Finally, to make it interactable, you need to add the **NarrativeInteractable** component.