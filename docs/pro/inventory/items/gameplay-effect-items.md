---
sidebar_label: 'Gameplay Effect Items'
---

# Gameplay Effect Items

Gameplay Effect Items are regular Narrative Items that are intended to work for [GAS abilities](../../abilities) granting effects to the character who picks it up.

## Creation

Right-click in the **Content Drawer** -> **Narrative** -> **Narrative Items** -> **Gameplay Effect Item**.

![gameplay-effect-items.png](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Finventory%2Fgameplay-effect-items.png)

Now you can choose what [gameplay effect](../../abilities/gameplay-effects.md) and values you want to apply.

## Increasing health

A common use for a gameplay effect item is to have an item that heals the player.

You can set the Gameplay Effect Class to [GE_ItemGameplayEffect](../../abilities/gameplay-effects.md#item-gameplay-effect) then set a singular Caller Value to the gameplay tag `SetByCaller.Health`.

Finally, set the value to the amount of health you want to increase.

![increasing-health](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Finventory%2Fgameplay-effect-items%2Fincreasing-health)

## Decreasing health over time

Another common example would be decreasing health over time. Such as a poison like effect.

For this, you can set the Gameplay Effect Class to [GE_ItemGameplayEffect](../../abilities/gameplay-effects.md#item-gameplay-effect) then set two Caller Value.

The first has a gameplay tag `SetByCaller.Health` and a value of how much you want to decrease.

The second  has a gameplay tag `SetByCaller.Duration` and a value of how long (in seconds) you want it to last.

![decreasing-health-over-time](..%2F..%2F..%2F..%2Fstatic%2Fimg%2Finventory%2Fgameplay-effect-items%2Fdecreasing-health-over-time)

## Properties

| Name                | Type                                                                                                                                            | Description                                                                                                       |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| GameplayEffectClass | [GameplayEffect](https://dev.epicgames.com/documentation/en-us/unreal-engine/gameplay-effects-for-the-gameplay-ability-system-in-unreal-engine) | The class of the gameplay effect to apply. This is an instant effect that overrides certain character attributes. |
| SetByCallerValues   | TMap\<FGameplayTag, float\>                                                                                                                     | A map of tags and their corresponding values, used for specifying "SetByCaller" attributes in gameplay effects.   |
