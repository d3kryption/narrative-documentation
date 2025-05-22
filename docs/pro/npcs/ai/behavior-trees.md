---
sidebar_label: 'Behavior Trees'
---

# Behavior Trees

The utility AI tasks can use any AI logic you wish to use. By default, Narrative Pro uses Behavior Trees since they are the most common ones in Unreal.

There are a bunch included to allow you to customise what each NPC will do at any given time.

## BT_Idle

This is the idle state for the NPC. They will holster their weapon and stand idle.

## BT_InvestigateSound

This is the tree used when the NPC hears a sound and needs to investigate it. This isn't used in Combat or with friendly [factions](../../factions).

## BT_ReturnToSettlement

This tree simply tells the NPC to walk back to their assigned [settlement](../../settlements).

The code also contains logic for when the settlement hasn't been [loaded](../../settlements/settlement-loaders.md) by making the NPC walk in the direction then teleporting there if the player is far enough away.

## BT_GoToLocation

This tree tells the NPC to walk to specific location.

## BT_GoToLocation_StayWithPlayer

Very similar to the [BT_GoToLocation](./behavior-trees.md#bt_gotolocation) tree, but this NPC will stand idle and wait for the player to catch up.

## BT_FollowPlayer

This tree tells the NPC to follow the player. Its commonly used when the NPC has been assigned as a [follower](../followers.md) which controls them fast traveling with the player.

## BT_Attack

This tree is the key to AI combat. The AI has many states it goes through to take weapons out, start shooting / attacking, trying to find cover, seeking the enemy and returning to base once lost / complete.

# Why not state trees?

[State Trees](https://dev.epicgames.com/documentation/en-us/unreal-engine/state-tree-in-unreal-engine) are a great tool inside Unreal and many prefer them for writing AI.

However, at the time of writing, State Trees are not documented as much as Behavior Trees and are still fairly new with some bugs making them some-times difficult to work with.

If you prefer to use State Trees you can convert most of Narratives AI over to it and use them instead.