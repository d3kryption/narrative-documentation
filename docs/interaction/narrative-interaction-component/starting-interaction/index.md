---
sidebar_label: 'Starting interaction'
sidebar_position: 2
---

# Starting interaction

When the component is added an actor, it will start sensing for intractable actors in the world. However, you need to tell the component to start the interaction if you want to activate it.

To start the activation, get the Narrative Interaction component and call the **BeginInteract** function.

It is also important to call End Interact on the release of your chosen key. Simply drag off the Narrative Interact component and choose the EndInteract function. This event makes sure any hold based interactions are taken care of.

![narrative-interaction-component-starting-interaction.jpg](/img/interaction/narrative-interaction-component-starting-interaction.jpg)

This will tell the Narrative Interact component to interact with whatever is currently in view.
