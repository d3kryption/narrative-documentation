---
sidebar_label: 'Tagged Dialogue Component'
---

# Tagged Dialogue Component

The Tagged Dialogue Component is a specific component that goes onto the NPCs. It simply stores and handles playing the tagged dialogue.

## Usage

When you want to trigger a tagged dialogue, you can use the `TaggedDialogue` component and call PlayTaggedDialogue passing the dialogue tag.

![tagged-dialogue-usage.png](//img/dialogue/tagged-dialogue/tagged-dialogue-usage.png)

The dialogue instigator is the actor that contains the [NarrativeComponent](../../tales-component/index.md) so It's typically just the player.