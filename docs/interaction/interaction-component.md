---
sidebar_label: 'Interaction component'
sidebar_position: 1
---

# Interaction component

Interaction is a full interactive component that lets you interact with actors in the world. From starting dialogue to opening chests.

[Interactables](./interactables) are components that you add to actors to give interactable functionality.

For example, if you add the interactable, [Interactable_ItemPickup](./interactables/default-interactables.md#item-pickup) that actor will now allow you to pick up an item.

The **Interaction** component is the driver that checks for all **Interactables**.

## Activate / Deactivate

It is common to disable and enable an **interaction** component depending on your games state. For example a character during a cutscene will not want to interact with anything.

This can easily be toggled using Unreal's built in Activate and Deactivate events.

![interaction_activate.png](/img/interaction/interaction_activate.png)

## Changing keys

By default, Narrative Interaction is set up to use the Gamepad Face Button Left (Square / X) or the E key. You can easily change these to match your exact requirements.

Inside the **NarrativeCommonUI** plugin folder there is a **CommonUIInputAction** asset called **DT_NarrativeInputActions**.

![narrative-interaction-component-changingkeys.jpg](/img/interaction/narrative-interaction-component-changingkeys.jpg)

Open this up and find the name of the key you wish to change. In this case, the Interact row name is going to handle the interact option. Select it and you can set the keyboard and gamepad input types.

![narrative-interaction-component-changingkeys-datatable.jpg](/img/interaction/narrative-interaction-component-changingkeys-datatable.jpg)

## Properties

| Name                         | Type  | Description                                                                                                   |
|------------------------------|-------|---------------------------------------------------------------------------------------------------------------|
| RemainingInteractTime        | float | The amount of time remaining before interaction completes on the current interactable. Stored per interactor. |
| InteractionCheckFrequency    | float | How often, in seconds, to check for an interactable object. Set to zero to check every tick.                  |
| InteractionCheckDistance     | float | The maximum distance for tracing when checking if the player is looking at an interactable object.            |
| InteractionCheckSphereRadius | float | If greater than zero, a sphere trace will be used instead of a line trace for interaction checks.             |
