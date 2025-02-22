---
sidebar_label: 'Node Breakdown'
---

# Node Breakdown

The dialogue node is the base node that contains all the details you want in the specific line and shot that is being played. Its generic and used for both the Player and NPCs lines.

![dialogue-node-created.webp](//img/dialogue/line/dialogue-node-created.webp)

![dialogue-line-base-id.webp](//img/dialogue/line/dialogue-line-base-id.webp)
![dialogue-line-base-details.webp](//img/dialogue/line/dialogue-line-base-details.webp)

## Dialogue Node Properties

| Name                | Type                                                                         | Description                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Line                | [FDialogueLine](../dialogue-nodes/node-breakdown.md#dialogue-line)           | The dialogue line associated with this node.                                                                                                   |
| AlternativeLines    | TArray\<[FDialogueLine](../dialogue-nodes/node-breakdown.md#dialogue-line)\> | If alternative lines are added in here, narrative will randomly select either the main line or one of the alternatives.                        |
| OnDialogueFinished  | FOnDialogueNodeFinishedPlaying                                               | Delegate that is called when the dialogue node finishes playing.                                                                               |
| PlayedLine          | [FDialogueLine](../dialogue-nodes/node-breakdown.md#dialogue-line)           | The last line the dialogue node played.                                                                                                        |
| NPCReplies          | TArray\<[UDialogueNode_NPC](./node-breakdown.md#npc-dialogue-line)\>         | Array of NPC replies for debugging purposes.                                                                                                   |
| PlayerReplies       | TArray\<[UDialogueNode_Player](./node-breakdown.md#player-dialogue-line)\>   | Array of player replies for debugging purposes.                                                                                                |
| OnPlayNodeFuncName  | FName                                                                        | Name of custom event to call when this node is reached.                                                                                        |
| DirectedAtSpeakerID | FName                                                                        | The ID of the speaker we are saying this line to. Can be left empty.                                                                           |
| bIsSkippable        | bool                                                                         | Should pressing the enter key allow this line to be skipped?                                                                                   |
| Conditions          | TArray\<[UNarrativeCondition](../../conditions/index.md)\>                   | Conditions are functions that run before this node is pending selection and contain boolean returns that allow this node to be run or ignored. |
| Events              | TArray\<[UNarrativeEvents](../../events/index.md)\>                          | Events are functions that can run at specific states on [quests](../../quests) & [dialogue](../../dialogue).                                   |

## Dialogue Line

The dialogue line is the text, audio, camera and settings you want in the specific line that is being played.

These are seperated from the Node as during dialogue, you only need the base settings in order to process the shot making it more lightweight.

![dialogue-line-details.webp](//img/dialogue/line/dialogue-line-details.webp)

### Properties

| Name                    | Type                                               | Description                                                                                                                       |
|-------------------------|----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| Text                    | FText                                              | The text for this dialogue node.                                                                                                  |
| Duration                | ELineDuration                                      | The duration the line should play for.                                                                                            |
| DurationSecondsOverride | float                                              | The overridden seconds the line should play for.                                                                                  |
| DialogueSound           | USoundBase                                         | If a dialogue sound is selected, narrative will automatically play the sound for you in 3D space, at the location of the speaker. |
| DialogueMontage         | UAnimMontage                                       | Narrative will play this montage on the first skeletal mesh component found on your speaker with the tag "Body" added to it.      |
| FacialAnimation         | UAnimMontage                                       | Narrative will play this montage on the first skeletal mesh component found on your speaker with the tag "Face" added to it.      |
| Shot                    | [UNarrativeDialogueSequence](../dialogue-sequence) | Shot to play for this line. Overrides speaker shot if one is set.                                                                 |


## NPC Dialogue Line

The line class is the standard for all dialogue nodes. This class inherits from it and adds extra variables.

NPC's have specific extra fields for added functionality that the player does not need.

![dialogue-line-npc.webp](//img/dialogue/line/dialogue-line-npc.webp)

### Properties

| Name               | Type                                               | Description                                                                                                           |
|--------------------|----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| SelectingReplyShot | [UNarrativeDialogueSequence](../dialogue-sequence) | The [UNarrativeDialogueSequence](../dialogue-sequence) that will be used while the user is selecting a player option. |


## Player Dialogue Line

The line class is the standard for all dialogue nodes. This class inherits from it and adds extra variables.

Player's have specific extra fields for added functionality that the NPC does not need.

![dialogue-line-player.webp](//img/dialogue/line/dialogue-line-player.webp)

### Properties

| Name        | Type  | Description                                                                                                                                                               |
|-------------|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OptionText  | FText | The shortened text to display for dialogue option when it shows up in the list of available responses. If left empty narrative will just use the main text.               |
| HintText    | FText | Optional hint text after the option text, ie (Lie, Persuade, Begin Quest) If left empty narrative will see if events have hint text.                                      |
| bAutoSelect | bool  | If true, this dialogue option will be automatically selected instead of the player having to select it from the UI as long as all [conditions](../../conditions) are met. |

