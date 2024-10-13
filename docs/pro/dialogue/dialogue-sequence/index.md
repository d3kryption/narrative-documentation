---
sidebar_label: 'Dialogue Sequence'
---

# Dialogue Sequence

Encapsulates a Level Sequence, along with all extra data needed to play that level sequence in the context of a dialogue

## Shots

Narrative comes packaged with many [built-in shots](./shots.md) for you to use.

## Properties

| Name                    | Type                                  | Description                                                                                                                                                        |
|-------------------------|---------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FriendlyShotName        | FText                                 | A dev friendly name.                                                                                                                                               |
| SequenceAssets          | TArray\<ULevelSequence\>              | The sequences to use - one will be selected at random.                                                                                                             |
| PlaybackSettings        | FMovieSceneSequencePlaybackSettings   | Controls the playback settings for the sequence.                                                                                                                   |
| CropSettings            | FPlateCropSettings                    | Controls the crop settings.                                                                                                                                        |
| bShouldRestart          | uint32                                | If narrative tries playing this sequence but it already started playing it from an earlier node, should we restart the shot or just let the existing one continue? |
| AnchorOriginRule        | EAnchorOriginRule                     | Sequence origin will be relative to the selected item.                                                                                                             |
| AnchorOriginNudge       | FVector                               | Allows you to nudge the shot upwards, downwards, etc. Extra offset applied to shot transform. Applied in speakers transform space.                                 |
| AnchorRotationRule      | EAnchorRotationRule                   | Sequence rotation will be relative to the selected item.                                                                                                           |
| AnchorAvatarCustomID    | FName                                 | If AnchorAvatar is custom, this is the ID of the avatar to use as the override.                                                                                    |
| bUse180DegreeRule       | bool                                  | Force the player and all other speakers to be on opposite sides of the screen using Y-axis movement and Yaw.                                                       |
| UnitsY180DegreeRule     | float                                 | If using 180 degree rule, how many degrees of yaw to push the shots in either direction.                                                                           |
| DegreesYaw180DegreeRule | float                                 | If using 180 degree rule, how many degrees of yaw to push the shots in either direction.                                                                           |
| LookAtTrackingSettings  | FShotTrackingSettings                 | What avatar should the camera track on if this is enabled.                                                                                                         |
| FocusTrackingSettings   | FShotTrackingSettings                 | What avatar should the camera focus on if this is enabled.                                                                                                         |
| bDrawDebugFocusPoint    | bool                                  | If true, the camera will draw a box showing the focus point.                                                                                                       |
| Speaker                 | TWeakObjectPtr\<AActor\>              | The speaker actor for the dialogue sequence.                                                                                                                       |
| Listener                | TWeakObjectPtr\<AActor\>              | The listener actor for the dialogue sequence.                                                                                                                      |
| AnchorActor             | TWeakObjectPtr\<AActor\>              | The anchor actor for the sequence.                                                                                                                                 |
| LookAtActor             | TWeakObjectPtr\<AActor\>              | The actor to look at for the sequence.                                                                                                                             |
| FocusActor              | TWeakObjectPtr\<AActor\>              | The actor to focus on for the sequence.                                                                                                                            |
| SequenceActor           | TWeakObjectPtr\<ALevelSequenceActor\> | The sequence actor associated with this dialogue sequence.                                                                                                         |
| Cinecam                 | TWeakObjectPtr\<ACineCameraActor\>    | The cinecam spawned in by the sequence.                                                                                                                            |
| Dialogue                | TWeakObjectPtr[UDialogue](./index.md) | The dialogue object associated with this sequence.                                                                                                                 |
