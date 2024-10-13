---
sidebar_label: 'Functions'
sidebar_position: 0
---

# Functions

An Interactable component contains a bunch of functions to help you use dialogue in any way you need.

If you import the [Interactable Component](./index.md), you can view the list of functions supported.

## Interact action text

To set the interaction text, select the **NarrativeInteractable** component and set its **Interactable Action Text**.

This value can be changed at runtime to display the correct action for your needs. In this example, while we are opening our door, we use the node Set Interactable **Action Text** to set the text to Open / Close depending on the door's state.

![interact-action-text-set.webp](/img/interaction/interaction-action-text-set.webp)

![interaction-action-text-view.webp](/img/interaction/interaction-action-text-view.webp)

Now walking up to the custom door will show the user they can interact with it by pressing the specified keys.

## Interact text

To set the interact text, select the **NarrativeInteractable** component and set its **Interactable Name Text**.

![interaction_setactiontext.webp](/img/interaction/interaction_setactiontext.webp)

## On Interact

This function is the actual interaction with the object. Often controlled by the actor itself, but for common reusable templates such as doors opening or starting chest looting, you can add the functionality generically here instead.

## On End Interact

This function is fired after the interaction has stopped. Whether it's gone through on interact or canceled by Can Interact.

## On Begin Interact

This function is used when the user first attempts to interact with the interactable actor. At this point, the actor has not been interacted with. It has simply initiated the interaction. Next it will check the Can Interact and if it's true, it will move to On Interact.

## Can Interact

This event allows you to set up if an actor is available to be interacted with or not. By default, all actors can be interacted with as long as they have the interaction component. In this example, we override this function and check if the user has a Keycard in their Narrative Inventory.

![functions-can-interact-returnnode.webp](/img/interaction/functions-can-interact-returnnode.webp)

![functions-can-interact-preview.webp](/img/interaction/functions-can-interact-preview.webp)

## Async Physics Tick

This is the default Unreal function for actors. It allows you to choose what happens when the physics engine calculates the next tick frame. It is similar to the Tick event.
