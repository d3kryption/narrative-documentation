---
sidebar_label: 'Inputs'
sidebar_position: 3
---

# Inputs

In order to control the interaction, you need to tell Narrative Interact when to start an interaction.

The most common method of starting interactions is using an input to tell Narrative Interact to start.

Add a new InputAction to handle the keypress. Connect the Started exec pin to the **[Begin Interact](../interactables/functions.md#on-begin-interact)** function from the Narrative Interaction component.

Next connect the Completed exit pin to the **[End Interact](../interactables/functions.md#on-end-interact)** function on from the Narrative Interaction component.

<iframe src="https://blueprintue.com/render/xscfe8cf/" width="100%" height="400" scrolling="no" allowfullscreen></iframe>

:::note

It's important to connect the EndInteract function otherwise Narrative Interaction will think you are holding the interact down.

:::