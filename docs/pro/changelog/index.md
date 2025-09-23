---
sidebar_label: 'Changelog'
---

# Changelog

## Version 2.2.0

### Features

- Aim sensitivity added to settings menu
- Blue play button now allows for quick-loading, shared saves feature for teams working on game projects together
- Cinematic improvements
- Climbing & Mantling added
- Experimental Carjacking, remove NPCs from vehicles
- Helicopter experimental vehicle
- Idle Breaks for firearms when idle for long enough
- Mass-driven pedestrian characters
- New animations for Rifle & Pistol
- Pro now uses First-Person Rendering introduced in 5.6
- Quest Blueprints can now have a linked dialogue to easily allow NPCs to say lines during a quest
- QuestNodeSelector & DialogueNodeSelector types now allow for easy node selection instead of manually typing FName IDs
- Ragdolling & Fall Damage (X is default ragdoll keybind)
- Randomization added to appearance assets
- Remappable keybinds
- Rifle Mesh Upgraded to much higher quality
- Separate Camera & Weapon FOV settings in video options
- Stabled First Person Camera setup
- Swimming, allow mantle out of swim
- Vehicles are now in, and are Player & NPC drivable - in-depth tutorial will be added
- Weapon Attachments - silencer, red dot, scope, and acog sight

### Bugfixes
- Saving now restores the level you saved in properly

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