---
sidebar_label: 'Interactable'
sidebar_position: 0
---

# Interactable

**Interactables** are components that you add to actors to give them interactable functionality.

For example, if you add the interactable 'Interactable_ItemPickup' that actor will now allow you to pick up an item.

## Creation

To start creating a new interaction right click in the **Content Drawer** -> **Blueprint Class** -> **Narrative Interactable**.

There is an example of a custom interaction for a [Door here](../door-example.md).

## Activate / Deactivate

It is common to disable and enable an **interactable** item depending on your games state. For example a character holding an item might not be able to pick things up, or they might not have unlocked the right ability just yet.

This can easily be toggled using Unreal's built in Activate and Deactivate events.

![interactable_Activatedeactivate.webp](//img/interaction/interactable_Activatedeactivate.webp)

## Chaining interactable components

You can also link multiple Interaction components together to cause a chain reaction. 

Either call [activate / deactivate](../index.md#activate--deactivate) on the **interactable**, or adjust the properties of the **interactable**.

## Multiplayer

Interactables are fully replicated right out of the box. Make sure any variables you use are replicated to make it work.

There is an example in the [door example](../door-example.md#multiplayer) where we replicate the door.

## Focused Overlay Material

By default, when an item is interactable, Narrative will apply a material to indicate its intractability. This however can be set to anything you require or cleared out to simply be ignored.

:::note

It is good [accessibility practice](https://www.accessibilitychecker.org/blog/video-game-accessibility-gaming-for-all/) to have an option to highlight interaction items for people who require further assistance.

:::

:::warning

It has been discovered that in Unreal 5.0, 5.1 and 5.2 that overlay materials do not work on meshes that have Nanite enabled. You can get around this by creating a decal instead of an overlay material but this works in Unreal 5.3 onwards.

:::

## Interaction Properties

| Name                   | Type               | Description                                                                          |
|------------------------|--------------------|--------------------------------------------------------------------------------------|
| InteractionTime        | float              | The time the player must hold the interact key to interact with this object.         |
| InteractionDistance    | float              | The max distance the player can be away from this actor to interact.                 |
| InteractableNameText   | FText              | The name that will be shown when the player looks at the interactable.               |
| InteractableActionText | FText              | The verb that describes how the interaction works (e.g., "Sit", "Eat", "Light").     |
| FocusedOverlayMaterial | UMaterialInterface | A material to draw over any mesh components when this interactable is focused.       |
