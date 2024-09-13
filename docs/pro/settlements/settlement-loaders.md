---
sidebar_label: 'Settlement Loader'
---

# Settlement Loader

The Settlement Loader is an actor that handles the loading and optimisation of a Settlement. 

It links into [World Partition](https://dev.epicgames.com/documentation/en-us/unreal-engine/world-partition-in-unreal-engine) to receive updates when chunks are de-spawning/spawning.

## Adding a new Settlement Loader

Adding a new Settlement Loader is as simple as dragging in the Settlement Loader actor into the world. 

![loader-actor.png](/img/pro/settlements/loader/loader-actor.png)

![loader-actor-place.png](/img/pro/settlements/loader/loader-actor-place.png)

Then populating the **Settlement to Load** with the Gameplay tag from your [Settlement](../settlements/index.md).

![loader-gameplaytag.png](/img/pro/settlements/loader/loader-gameplaytag.png)

## Loading

When your player arrives near the Settlement Loader, it will spawn in as part of [World Partition](https://dev.epicgames.com/documentation/en-us/unreal-engine/world-partition-in-unreal-engine).

[Settlement base actors](../settlements/index.md) are always loaded in, but the Settlement Loader will take care of de-spawning the NPC's to keep it lightweight.

The reason [Settlement base actors](../settlements/index.md) are always loaded in is to allow the player or AI to find their locations on the map, path finding or for quests.

## Settlement Loader Properties

| Name             | Type                                                                                                                                                     | Description                                                                        |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| SettlementToLoad | [FGameplayTag](https://dev.epicgames.com/documentation/en-us/unreal-engine/using-gameplay-tags-in-unreal-engine)                                         | The gameplay tag that determines which settlement to load.                         |
| SpriteComponent  | TObjectPtr\<class [UBillboardComponent](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Components/UBillboardComponent)\> | A pointer to the billboard component used for visual representation in the editor. |

## Discoverable Settlements

Some settlements you will want to be discoverable by the player, so they can fast travel, return or have markers on their maps.

Settlement Loaders contain collision code to enable this functionality, and it's really easy to set up.

Select your Settlement Loaders and add a type of collision. This can be a sphere, box or anything.

![settlement-loaders-collision.png](/img/pro/settlements/loader/settlement-loaders-collision.png)

Set your CollisionProfile to either **OverlapOnlyPawn** or a custom channel where only Pawns trigger the collision.

![settlement-loaders-collision-setting.png](/img/pro/settlements/loader/settlement-loaders-collision-setting.png)

:::warning

Be careful what you set the overlap to. Anything that overlaps will trigger the discovery. You don't want your camera or stray bullets triggering it.

:::

Another optional feature is to check **Use Attach Parent Bound** under Rendering. This will automatically scale the collision to the size of the settlement.

![use-attach-parent-bound.png](..%2F..%2F..%2Fstatic%2Fimg%2Fpro%2Fsettlements%2Floader%2Fuse-attach-parent-bound.png)

Now walking into the settlements radius will discover the location. 

![settlement-discovered.png](..%2F..%2F..%2Fstatic%2Fimg%2Fpro%2Fsettlements%2Floader%2Fsettlement-discovered.png)

### Fast travelling not working

Sometimes your fast travel to discovered settlements may not work. This normally is caused by the Player not being able to fit at Settlement spawn location without collision issues.

Try dragging the settlement up from the ground so the player can spawn. 

![fast-travelling-not-working.png](..%2F..%2F..%2Fstatic%2Fimg%2Fpro%2Fsettlements%2Floader%2Ffast-travelling-not-working.png)

:::note

You may ask why Narrative doesn't automatically move the player. This could cause issues spawning the player inside buildings or locations they are not meant to be but the collision fits. 

It was left in, so it can be purposely placed in the right location.

:::