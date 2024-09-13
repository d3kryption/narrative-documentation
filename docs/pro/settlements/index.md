---
sidebar_label: 'Settlements'
---

# Settlements

Narrative Pro introduces the new Settlements system which allows you to manage entire towns, cities, villages, areas of your world. 

It automatically takes care of unloading and loading to keep the game optimised. 

## Adding a new Settlement

To add a new Settlement search your actors toolbox for `Settlement`. Drag this into your world where you want your area to be managed.

![settlements-new.png](/img/pro/settlements/settlements-new.png)

:::note

You can enable the **Place Actors** panel by going to **Window** -> **Place Actors**

:::

![settlements-new-placed.png](/img/pro/settlements/settlements-new-placed.png)

In the details panel, generate a new **Settlement GUID**. This is the unique id that the [save manager](../saving/index.md) will use as a reference. 

![settlements-new-guid.png](/img/pro/settlements/settlements-new-guid.png)

All Settlements require a Gameplay Tag in order to function. This helps connect actors back to the Settlement they belong to.

![settlements-new-tag.png](/img/pro/settlements/settlements-new-tag.png)

You can also set up this settlement as a [point of interest](../navigator/points-of-interest.md) that can be discoverable.

![settlements-new-POI.png](/img/pro/settlements/settlements-new-POI.png)

Populate the **Settlement Display Name** which will be visible in the world, [points of interest](../navigator/points-of-interest.md) and [world map](../ui/navigator/worldmap.md).

![settlements-new-displayname.png](/img/pro/settlements/settlements-new-displayname.png)

### Spawns

The spawns property defines which NPC's spawn from this area. 

:::note

An NPC can spawn in a settlement but move anywhere in the world if you want.

This is just what spawns them and who they belong to if you send them back home for instance.

:::

Simply populate the `NPC To Spawn` with the [NPC data asset](../npcs/index.md) you want to spawn.

![spawns.png](/img/pro/settlements/spawns.png)

You can then position this transform from the Settlement root. Simply click the diamond shape icon and move it.

![settlements-spawns-transform-premove.png](/img/pro/settlements/settlements-spawns-transform-premove.png)

![settlements-spawns-transform-postmove.png](/img/pro/settlements/settlements-spawns-transform-postmove.png)

:::note

You can also set a fixed position using the SpawnTransform property. (world location)

:::

### Spawns Properties

| Name              | Type                                                                                                             | Description                                                                                                                                                       |
|-------------------|------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| bDisabled         | bool                                                                                                             | Whether or not the spawn is disabled. Enemies that have been killed will disable their spawn if bRememberIfKilled is true.                                        |
| SpawnID           | FGuid                                                                                                            | Used internally by settlements to identify which spawn is which.                                                                                                  |
| SpawnTag          | [FGameplayTag](https://dev.epicgames.com/documentation/en-us/unreal-engine/using-gameplay-tags-in-unreal-engine) | Optional tag, can be used to grab the spawn to modify it later (for example to change the spawned NPC).                                                           |
| NPCToSpawn        | TObjectPtr\<class [UNPCDefinition](../npcs/index.md)\>                                                           | The NPC we want the spawn to spawn in.                                                                                                                            |
| SpawnTransform    | FTransform                                                                                                       | Where we'll spawn the NPC.                                                                                                                                        |
| bRememberIfKilled | bool                                                                                                             | Whether the spawn should deactivate itself once its enemy is killed, or whether we should respawn.                                                                |
| SpawnedNPC        | TWeakObjectPtr\<class [ANarrativeNPCCharacter](../npcs/index.md)\>                                               | A pointer to the NPC, provided they are currently spawned in.                                                                                                     |
| bReleased         | bool                                                                                                             | Whether the spawn has released the NPC or not. If true, the NPC has been detached from this spawn and no longer owns it. We also won't spawn it when we activate. |

## Settlement Loaders

Finally, add in a [Settlement Loader](./settlement-loaders.md) to load your Settlement into the world.

## Discovering Settlements

You may want to have a Settlement act like a discoverable location. You can easily do this on the [Settlment Loader](./settlement-loaders.md#discoverable-settlements). 