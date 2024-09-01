---
sidebar_label: 'Speakers'
---

# Speakers

Speakers are the people who are part of your dialogue. 

They don't have to speak and can just be visible, or they can have fully interactive dialogue.

:::note

The player does not count as a speaker, but they are included in [player speakers](./player-speaker.md). 

:::

## Speaker Properties

| Name                   | Type                               | Description                                                                                                                                 |
|------------------------|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| NPCDataAsset           | [UNPCDefinition](../npcs/index.md) | The speakers NPC data asset - if this is set to something, we'll use the NPC subsystem to grab this speaker.                                |
| DefaultSpeakerShot     | UNarrativeDialogueSequence         | Sequence to use whenever this speaker is talking (will be overridden by shot set on line).                                                  |
| SpeakerAvatarClass     | TSubclassOf\<AActor\>              | Set this to a valid actor class if you want narrative to automatically spawn your speaker avatar in, and destroy it when the dialogue ends. |
| SpeakerAvatarTransform | FTransform                         | The transform for the SpeakerActor that gets spawned in, if one is set. (world location)                                                    |
| NodeColor              | FLinearColor                       | Custom node colour for this NPC in the graph.                                                                                               |
| SpeakerID              | FName                              | The name of this speaker. This is driven by the NPC Data Assets ID.                                                                         |
 