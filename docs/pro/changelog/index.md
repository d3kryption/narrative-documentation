---
sidebar_label: 'Changelog'
---

# Changelog

## Version 2.0.1

### Features
- Added conditions to dialogue node texts
- Added FPS mode
- Added FreeMovement, StopMovement, Speakers, NonUniqueNPCs properties to DialoguePlayParams
- Added more activities
- Added motion matching with GASP
- Added new demo map
- Added new inventory function to add item from a loot table
- Added new NarrativeCharacterVisual to the Characters to easily get each visual aspects (meshes)
- Added NPC Spawners demo map
- Added setup config ini files to Resources folder
- Added the new [Gameplay Camera](https://dev.epicgames.com/documentation/en-us/unreal-engine/gameplay-camera-system-quick-start)
- Added weapon attachments
- Moved GameplayHUD to variable inside PlayerController
- Optimised NarrativePlayer meshes. It will now spawn in the extra components instead.
- Re-organised C++ code for cleaner implementation
- Removed Goals replaced with GoalItems
- Removed Settlements
- Replaced NPC Sub System with CharacterSubSystem
- Updated combat
- Updated Navigator utility to feature stopping, generation POI's and Deleting map tiles


### Bugfixes/Misc
- Fixed bug with build errors
- Fixed bug with combat T posing
- Removed build breaking data table
- Updated PlayCutscene function to fix but with input not resetting during dialogue
- Renamed Gameplay to GameplayHUD on player controller
- Renamed NarrativeComponent to TalesComponent