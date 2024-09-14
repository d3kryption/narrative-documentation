---
sidebar_label: 'Speakers'
sidebar_position: 0
---

# Speakers

Speakers are the people who are part of your dialogue. 

They don't have to speak and can just be visible, or they can have fully interactive dialogue.

:::note

The player does not count as a speaker. Instead, they are included in [Player Speakers](./speakers.md#player-speakers). 

:::

### Speaker Properties

| Name                   | Type                                                         | Description                                                                                                                                 |
|------------------------|--------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| NPCDataAsset           | [UNPCDefinition](../npcs/index.md)                           | The speakers NPC data asset - if this is set to something, we'll use the NPC subsystem to grab this speaker.                                |
| DefaultSpeakerShot     | [UNarrativeDialogueSequence](../dialogue/dialogue-sequence/) | Sequence to use whenever this speaker is talking (will be overridden by shot set on line).                                                  |
| SpeakerAvatarClass     | TSubclassOf\<AActor\>                                        | Set this to a valid actor class if you want narrative to automatically spawn your speaker avatar in, and destroy it when the dialogue ends. |
| SpeakerAvatarTransform | FTransform                                                   | The transform for the SpeakerActor that gets spawned in, if one is set. (world location)                                                    |
| NodeColor              | FLinearColor                                                 | Custom node colour for this NPC in the graph.                                                                                               |
| SpeakerID              | FName                                                        | The name of this speaker. This is driven by the NPC Data Assets ID.                                                                         |

## Player Speakers

Player Speakers are the users who are part of the dialogue. This can include the primary player, or [the party](../parties).

They don't have to speak and can just be visible, or they can have fully interactive dialogue.

### Properties

Player Speakers inherit from the base [Speakers](./speakers.md) class

| Name               | Type                                                         | Description                                                                          |
|--------------------|--------------------------------------------------------------|--------------------------------------------------------------------------------------|
| SelectingReplyShot | [UNarrativeDialogueSequence](../dialogue/dialogue-sequence/) | Sequence to play when player is selecting their reply, overrides SelectingReplyShot. |
 