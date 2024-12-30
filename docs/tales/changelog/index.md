---
sidebar_label: 'Changelog'
---

# Changelog

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