---
sidebar_label: 'Chaining interactable components'
sidebar_position: 1
---

# Chaining interactable components

You can also link multiple Interaction components together to cause a chain reaction. In this example, we will deactivate the door interactable component by default, then have a new blueprint class for a button that will unlock the door.

Start by deactivating the door interactable component then create your new button blueprint class just like you did for the Door example continued.

Next, create a variable of type BP_Door to link to the correct door.

![chaining-interactable-components-variable.jpg](/img/interaction/chaining-interactable-components-variable.jpg)

Then add a Narrative interactable component. Add the event On Interacted, get the door and then the doors interactable and set the unlocked property to true.

![chaining-interactable-components-on-interacted-event.jpg](/img/interaction/chaining-interactable-components-on-interacted-event.jpg)

Now when you run up to the door, it will be locked by default.

![chaining-interactable-components-door.jpg](/img/interaction/chaining-interactable-components-door.jpg)

But when you interact with the button.

![chaining-interactable-components-unlock.jpg](/img/interaction/chaining-interactable-components-unlock.jpg)

The door will now be unlocked.

![chaining-interactable-components-unlocked.jpg](/img/interaction/chaining-interactable-components-unlocked.jpg)