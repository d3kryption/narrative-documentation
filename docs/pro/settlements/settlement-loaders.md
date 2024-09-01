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
