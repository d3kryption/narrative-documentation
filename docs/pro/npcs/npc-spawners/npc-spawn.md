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

## Data Asset Properties

| Name                         | Type                                             | Description                                                                                                                                                       |
|------------------------------|--------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| UntetherDistance             | float                                            | NPCs within this range of the player wont get despawned; we'll instead tether them to the player                                                                  |
| bDontSpawnIfPreviouslyKilled | bool                                             | The name of this NPC. Will be used for the interaction and navigation markers.                                                                                    |
| NPCToSpawn                   | TObjectPtr\<class [NPCDefinition](../index.md)\> | The NPC we want the spawn to spawn in                                                                                                                             |
| SpawnParams                  | FNPCSpawnParams                                  | Optional spawn params we can use in the spawning process                                                                                                          |
| OptionalGoal                 | TObjectPtr\<UNPCGoalItem\>                       | Optional goal to assign to the NPC when it spawns in                                                                                                              |
| NPCSaveGUID                  | FGuid                                            | The save GUID to assign to the NPC, so that its stats, items, etc are saved. You only need to set this if the NPC is non-unique and you actually want it to save. |
| bWasKilled                   | bool                                             | Whether the NPC this spawn created has been killed in the past. If they were we shouldn't spawn them                                                              |
| bTetheredToPlayer            | bool                                             | Whether the NPC was tethered to the player                                                                                                                        |
