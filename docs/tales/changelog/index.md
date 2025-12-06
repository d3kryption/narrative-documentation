---
sidebar_label: 'Changelog'
---

# Changelog

## Version 3.7.0

You can see the [code changes](./version-3.7.0.md) here.

### Features
- Added ability to load in the middle of quest dialogue
- Added bool to auto select if only reply instead of showing 1 reply
- Added BoundLevelSequence to automatically add NPCs
- Added BPT_FollowNPCToLocation task
- Added conditions to lines as well as nodes
- Added conditions to Narrative Events
- Added DialogueStarted/OnDialogueEnd delegate (for dialogue debugger)
- Added end dialogue distance for when characters are walking away / free movement
- Added FailQuest node to instantly fail the quest
- Added function for OnQuestPostLoad
- Added GetCurrentNode function to dialogue
- Added GetDialogueText function to return soundwave subtitles if they exist for node ID
- Added int to LinkSpeakerAvatar to return specific speakers from the array
- Added OnActivate/OnDeactivate function to NarrativeEvents
- Added output bool to TryExitDialogue
- Added PlayParams to dialogue with unskippable, freemovement and stop movement overrides
- Added priority to dialogue for multiple dialogue files
- Added QuestDialogue to hold quest specific dialogue
- Added QuestRequirements to quests
- Added reason to ExitDialogue
- Added override to CanSkipDialogue for specific cases
- Added StayNearActor quest requirement
- Added TaggedDialogue with TaggedDialougeComponent
- Added track button to quest journal
- Added gameplay tags to speakers for state updates
- Added editor button to quests to return QuestDialogue class
- Converted sounds, animations to pointers instead of hard references
- Dialogue input key selections
- Updated default node ID when generating new nodes
- Updated to Unreal 5.7

### Bugfixes
- Added checks around broken states / branches to stop crashes
- Added fix for copy and pasting nodes (Dialogue + Quests)
- Added fix to dialogue comments
- Blocked copying / duplicating root nodes
- Fixed a bunch of variable clean ups for better memory management
- Fixed bug where avatars would spawn in and player wouldn't stop movement
- Fixed bug where freemovement would autostop - shouldn't really happen
- Fixed bug with camera positioning on dialogue nodes
- Fixed call to EndDialogue after sequence stops to prevent camera glitches
- Fixed head rotation for different height based characters
- Fixed missing transaction flags on nodes
- Fixed quest journal text not wrapping description.
- Fixed vertical wiring offset


## Version 3.6.0

You can see the [code changes](./version-3.6.0.md) here.

### Features
- Replaced StartFromID with Params (StartFromID & Priority)
- Optimised a bunch of blueprints
- Using soft classes instead of hard references in C++
- Unused return bool removed from Narrative Events
- Tidied up UI blueprint code
- Added Set/Get speaker code to C++
- Added PreQuestStarted event that runs before BeginQuest runs
- Added SetTracked function to track / untrack quests
- OnTrackedChanged event added to Quests
- Refire event on load bool
- Added dialogue priority to block lower priority dialogue from starting
- Added player adjust transform to stop the player from moving
- Added Sound attenuation to chagne how sound is played
- Updatedsequence player to new GetSequencePlayer
- Cleaned up unused C++ references
- Removed default text / speaker
- Hints now use GetStringVariable
- Default Quest and Dialogue trigger blueprints
- Quest task search paths added to editor settings for faster searching (editor only)
- Updated to Unreal 5.5

### Bugfixes/Misc
- Fixed events running on load everytime
- Fixed UI running on load
- Fixed bug with replicated dialogue crashing
- Fixed crashing sequencer stop on built games
- Fixed NE_CompleteDataTask data type bug
- Removed old OneOffShot task
- Fixed a bunch of old redirectors
- Party component will now use the UI

## Version 3.5.0

### Features
- Narrative moves to CommonUI, meaning you'll get amazing controller support for dialogues
- Barlow font being set back to Roboto, meaning people trying to use other languages like chinese or russian will have their languages supported properly
- Speakers now have a localizable FText display name, instead of using the Speaker ID
- Dialogue TEXT copy and paste has been added back in (fixed in Narrative 3.5.1)

### Bugfixes/Misc
- Waypoints being removed - do not upgrade if you want to keep these (or keep a copy so you can add them back in if you need them)
- Saving will no longer broadcast to the UI. It will load in the background only
- Conditions which stop dialogue from running will no longer crash
- Query Journal task panel will now scroll when many tasks are present
- Server based dialogue will no longer crash clients when dialogue is conditioned
- Jumping in and out of dialogue will no longer freeze the player responses
- Back-linking on a player node with no text no longer crashes Narrative