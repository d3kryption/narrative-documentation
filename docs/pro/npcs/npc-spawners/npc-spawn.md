---
sidebar_label: 'NPC Spawn'
---

# NPC Spawn

The NPC spawn is a child actor of the [NPC Spawner](./index.md).

It handles the properties of which actor to spawn, where and what they do.

![npc-spawn.webp](//img/pro/npcs/npc-spawners/npc-spawn.webp)

## Creating a new NPC spawn

To create a new NPC spawn, select the [NPC Spawner](./index.md) that will control it and click the Create NPC Spawn button.

![npc-spawn-button.webp](?/img/pro/npcs/npc-spawners/npc-spawn-button.webp)

Now, in the list of children for this Spawner, you will see your new capsule for your spawn.

![npc-spawn-new.webp](//img/pro/npcs/npc-spawners/npc-spawn-new.webp)

## NPC Spawn Properties

| Name                         | Type                                             | Description                                                                                                                                                       |
|------------------------------|--------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| UntetherDistance             | float                                            | NPCs within this range of the player wont get despawned; we'll instead tether them to the player                                                                  |
| bDontSpawnIfPreviouslyKilled | bool                                             | The name of this NPC. Will be used for the interaction and navigation markers.                                                                                    |
| NPCToSpawn                   | TObjectPtr\<class [NPCDefinition](../index.md)\> | The NPC we want the spawn to spawn in                                                                                                                             |
| SpawnParams                  | [FNPCSpawnParams](npc-spawn.md#npc-spawn-params) | Optional spawn params we can use in the spawning process                                                                                                          |
| OptionalGoal                 | TObjectPtr\<UNPCGoalItem\>                       | Optional goal to assign to the NPC when it spawns in                                                                                                              |
| NPCSaveGUID                  | FGuid                                            | The save GUID to assign to the NPC, so that its stats, items, etc are saved. You only need to set this if the NPC is non-unique and you actually want it to save. |
| bWasKilled                   | bool                                             | Whether the NPC this spawn created has been killed in the past. If they were we shouldn't spawn them                                                              |
| bTetheredToPlayer            | bool                                             | Whether the NPC was tethered to the player                                                                                                                        |


## NPC Spawn Params

This struct defines optional overrides to control how an NPC should be spawned. It supports selectively overriding various attributes like name, level, appearance, item loadout, and more.

| Property Name                   | Type                                        | Description                                                                                                                |
|---------------------------------|---------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| bOverride_NPCName               | `uint8` (bitfield)                          | Whether to override the default NPC name.                                                                                  |
| NPCName                         | `FText`                                     | The name to give the NPC if `bOverride_NPCName` is enabled.                                                                |
| bOverride_LevelRange            | `uint8` (bitfield)                          | Whether to override the default NPC level range.                                                                           |
| MinLevel                        | `int32`                                     | The minimum level the NPC can spawn at, if `bOverride_LevelRange` is enabled.                                              |
| MaxLevel                        | `int32`                                     | The maximum level the NPC can spawn at, if `bOverride_LevelRange` is enabled.                                              |
| bOverride_DefaultFactions       | `uint8` (bitfield)                          | Whether to override the NPC's default factions.                                                                            |
| DefaultFactions                 | `FGameplayTagContainer`                     | The factions this NPC should belong to by default if `bOverride_DefaultFactions` is enabled.                               |
| bOverride_DefaultOwnedTags      | `uint8` (bitfield)                          | Whether to override the tags the NPC owns by default.                                                                      |
| DefaultOwnedTags                | `FGameplayTagContainer`                     | Tags the NPC will have on spawn (e.g., `State.Invulnerable` or `LockMovement`) if `bOverride_DefaultOwnedTags` is enabled. |
| bOverride_ActivityConfiguration | `uint8` (bitfield)                          | Whether to override the default activity configuration.                                                                    |
| ActivityConfiguration           | `TSoftObjectPtr<UNPCActivityConfiguration>` | The activity configuration that defines the NPC's behavior and schedule, if `bOverride_ActivityConfiguration` is enabled.  |
| bOverride_DefaultItemLoadout    | `uint8` (bitfield)                          | Whether to override the default items the NPC spawns with.                                                                 |
| DefaultItemLoadout              | `TArray<FLootTableRoll>`                    | The items to give the NPC at spawn if `bOverride_DefaultItemLoadout` is enabled.                                           |
| bOverride_DefaultAppearance     | `uint8` (bitfield)                          | Whether to override the NPC's default appearance.                                                                          |
| DefaultAppearance               | `TSoftObjectPtr<UCharacterAppearanceBase>`  | The visual appearance of the NPC if `bOverride_DefaultAppearance` is enabled.                                              |
| bOverride_TriggerSets           | `uint8` (bitfield)                          | Whether to override the trigger sets assigned to the NPC.                                                                  |
| TriggerSets                     | `TArray<TSoftObjectPtr<UTriggerSet>>`       | A list of trigger sets the NPC should use if `bOverride_TriggerSets` is enabled.                                           |
