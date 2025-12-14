---
sidebar_label: 'Functions'
---

# Functions

Dialogue contains a bunch of functions to help you use dialogue in any way you need.

## Adjust Player Transform

Adjusts the player's position in one-on-one dialogues.

![dialogue-adjust-player-transform.webp](//img/dialogue/functions/dialogue-adjust-player-transform.webp)

## Can Skip Dialogue

Returns whether skipping is allowed for the current dialogue.

This function determines if the dialogue **as a whole** permits skipping, regardless of the current line.

It is commonly used to:
- Globally disable skipping for important conversations
- Control skip behavior for cinematic or story-critical dialogue
- Gate UI controls such as *Skip* or *Fast Forward*

![dialogue-can-skip-dialogue.png](//img/dialogue/functions/dialogue-can-skip-dialogue.png)

#### Output

| Name         | Type | Description                                   |
|--------------|------|-----------------------------------------------|
| Return Value | bool | Whether dialogue skipping is allowed.         |

:::note

This function is evaluated **in addition to** per-line skip checks.

For a line to be skippable:
- `CanSkipDialogue` must return `true`
- `CanSkipCurrentLine` must also return `true`

:::



## Get Speaker Head Location

Returns the location of the actor's head, where the dialogue camera will aim.

![dialogue-get-speaker-head-location.webp](//img/dialogue/functions/dialogue-get-speaker-head-location.webp)


#### Inputs

| Name  | Type    | Description                                       |
|-------|---------|---------------------------------------------------|
| Actor | AActor* | The actor whose head location is being retrieved. |

#### Output

| Name | Type    | Description                       |
|------|---------|-----------------------------------|
| -    | FVector | The location of the actor's head. |


## Tick Dialogue

Called every tick to update the dialogue.

![dialogue-tick-dialogue.webp](//img/dialogue/functions/dialogue-tick-dialogue.webp)

#### Inputs

| Name      | Type  | Description                            |
|-----------|-------|----------------------------------------|
| DeltaTime | float | The time elapsed since the last frame. |

## Link Speaker Avatar

Links a dialogue speaker to a Speaker Avatar actor.

Narrative uses Speaker Avatars to determine:
- Where to point the camera
- Which actor should play animations
- Who dialogue lines are associated with in the world

This function attempts to resolve the correct avatar for a speaker using the following order:

1. **Spawn an actor** if the speaker has an `AvatarActorClass` set
2. **Find an existing actor** in the world with the speaker’s `SpeakerID` set as a tag
3. **Fallback behavior**
    - NPC speakers → `DefaultNPCAvatar`
    - Player speakers → The player’s Pawn

If none of these methods succeed, no avatar will be linked.

:::note
If this default behavior does not suit your game, you can **override this function** in Blueprint or C++ to implement custom avatar resolution.
:::

![dialogue-link-speaker-avatar.png](//img/dialogue/functions/dialogue-link-speaker-avatar.png)

#### Inputs

| Name | Type         | Description                                                               |
|-----:|--------------|---------------------------------------------------------------------------|
| Info | FSpeakerInfo | Information about the speaker being linked, including ID and avatar data. |
|  Idx | int32        | The index of the speaker within the dialogue’s speaker list.              |

#### Output

| Name         | Type    | Description                                                  |
|--------------|---------|--------------------------------------------------------------|
| Return Value | AActor* | The actor linked as the Speaker Avatar, or `null` if none.   |

:::note

Speaker Avatars are cached after linking and reused throughout the dialogue.

Overriding this function allows for:
- Custom spawn logic
- Dynamic actor selection
- Integration with existing NPC systems

:::


## Destroy Speaker Avatar

Removes a speaker avatar from the world.

![dialogue-destroy-speaker-avatar.webp](//img/dialogue/functions/dialogue-destroy-speaker-avatar.webp)

#### Inputs

| Name          | Type         | Description                    |
|---------------|--------------|--------------------------------|
| Info          | FSpeakerInfo | The speaker information.       |
| SpeakerAvatar | AActor*      | The speaker avatar to destroy. |

## Play Dialogue Animation

Plays a dialogue animation on the given speaker.

![dialogue-play-dialogue-animation.webp](//img/dialogue/functions/dialogue-play-dialogue-animation.webp)

#### Inputs

| Name     | Type           | Description                     |
|----------|----------------|---------------------------------|
| Node     | UDialogueNode* | The dialogue node.              |
| Line     | FDialogueLine  | The dialogue line being spoken. |
| Speaker  | AActor*        | The speaker's avatar.           |
| Listener | AActor*        | The listener's avatar.          |

## Stop Dialogue Animation

Stops any currently playing dialogue animations.

![dialogue-stop-dialogue-animation.webp](//img/dialogue/functions/dialogue-stop-dialogue-animation.webp)

## Play Dialogue Sound

Plays a dialogue sound.

![dialogue-play-dialogue-sound.webp](//img/dialogue/functions/dialogue-play-dialogue-sound.webp)

#### Inputs

| Name     | Type          | Description                     |
|----------|---------------|---------------------------------|
| Line     | FDialogueLine | The dialogue line being spoken. |
| Speaker  | AActor*       | The speaker's avatar.           |
| Listener | AActor*       | The listener's avatar.          |

## Play Dialogue Node

Plays a dialogue node with audio, animations, and camera updates.

![dialogue-play-dialogue-node.webp](//img/dialogue/functions/dialogue-play-dialogue-node.webp)

#### Inputs

| Name          | Type           | Description                     |
|---------------|----------------|---------------------------------|
| Node          | UDialogueNode* | The dialogue node.              |
| Line          | FDialogueLine  | The dialogue line being spoken. |
| Speaker       | FSpeakerInfo   | The speaker information.        |
| SpeakerActor  | AActor*        | The speaker's avatar.           |
| ListenerActor | AActor*        | The listener's avatar.          |

## Finish Dialogue Node

Stops the dialogue node, ending any playing audio or animations.

![dialogue-finish-dialogue-node.webp](//img/dialogue/functions/dialogue-finish-dialogue-node.webp)

#### Inputs

| Name          | Type           | Description                     |
|---------------|----------------|---------------------------------|
| Node          | UDialogueNode* | The dialogue node.              |
| Line          | FDialogueLine  | The dialogue line being spoken. |
| Speaker       | FSpeakerInfo   | The speaker information.        |
| SpeakerActor  | AActor*        | The speaker's avatar.           |
| ListenerActor | AActor*        | The listener's avatar.          |

## Play NPC Dialogue

Plays an NPC's dialogue with audio, animations, and cinematic shots.

![dialogue-play-npc-dialogue.webp](//img/dialogue/functions/dialogue-play-npc-dialogue.webp)

#### Inputs

| Name     | Type               | Description                     |
|----------|--------------------|---------------------------------|
| NPCReply | UDialogueNode_NPC* | The NPC's dialogue node.        |
| Line     | FDialogueLine      | The dialogue line being spoken. |
| Speaker  | FSpeakerInfo       | The speaker information.        |

## Play Player Dialogue

Plays the player's dialogue with audio, animations, and cinematic shots.

![dialogue-play-player-dialogue.webp](//img/dialogue/functions/dialogue-play-player-dialogue.webp)

#### Inputs

| Name        | Type                  | Description                     |
|-------------|-----------------------|---------------------------------|
| PlayerReply | UDialogueNode_Player* | The player's dialogue node.     |
| Line        | FDialogueLine         | The dialogue line being spoken. |

## Get Line Duration

Returns how long the dialogue system should wait before moving to the next line.

![dialogue-get-line-duration.webp](//img/dialogue/functions/dialogue-get-line-duration.webp)

#### Inputs

| Name | Type           | Description                     |
|------|----------------|---------------------------------|
| Node | UDialogueNode* | The dialogue node.              |
| Line | FDialogueLine  | The dialogue line being spoken. |

#### Output

| Name | Type  | Description                          |
|------|-------|--------------------------------------|
| -    | float | The duration of the line in seconds. |

## Get String Variable

Resolves a variable name within a dialogue line.

![dialogue-get-string-variable.webp](//img/dialogue/functions/dialogue-get-string-variable.webp)

#### Inputs

| Name         | Type           | Description                          |
|--------------|----------------|--------------------------------------|
| Node         | UDialogueNode* | The dialogue node.                   |
| Line         | FDialogueLine  | The dialogue line being spoken.      |
| VariableName | FString        | The name of the variable to resolve. |

#### Output

| Name | Type    | Description                |
|------|---------|----------------------------|
| -    | FString | The resolved string value. |