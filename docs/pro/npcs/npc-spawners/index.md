---
sidebar_label: 'NPC Spawners'
---

# NPC Spawners

Narrative Pro has a new NPC Spawning system which handles the spawning of NPC's in the world.

It can be used for spawning in event driven enemies, quest driven, populating worlds or at the click of a button.

![npc-spawner.webp](//img/pro/npcs/npc-spawners/npc-spawner.webp)

## Creating a new Spawner

To create a new NPC spawner open the actor pallet and search for NPC Spawner.  

![new-npc-spawner.webp](//img/pro/npcs/npc-spawners/new-npc-spawner.webp)

Drag this into your world and place it roughly where you want the NPCs.

You can customise its properties such as the save GUID and activation on play.

When you are ready, open the [NPC Spawn](./npc-spawn.md) to choose where and what NPCs will spawn.

## Properties

| Name                 | Type  | Description                                                            |
|----------------------|-------|------------------------------------------------------------------------|
| SpawnerSaveGUID      | FGuid | The GUID that the save system uses to identify and save the settlement |
| bActivateOnBeginPlay | bool  | Whether the spawner is enabled or not.                                 |