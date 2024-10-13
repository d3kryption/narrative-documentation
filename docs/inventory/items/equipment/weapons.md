---
sidebar_label: 'Weapons'
---

# Weapons

## Properties

| Property Name                     | Type                         | Description                                                     |
|-----------------------------------|------------------------------|-----------------------------------------------------------------|
| WeaponAnimLayer                   | TSubclassOf\<UAnimInstance\> | Anim BP we'll apply to the owner when the weapon is unholstered |
| WeaponVisualClass                 | TSubclassOf\<AActor\>        | Weapon visual actor to spawn                                    |
| WeaponVisualAttachBone            | FName                        | Weapon visual bone to attach to                                 |
| WeaponVisualHolsteredAttachBone   | FName                        | Weapon visual bone to attach to for holstered state             |
| WeaponVisualAttachOffset          | FTransform                   | Weapon visual offset from attach                                |
| WeaponVisualHolsteredAttachOffset | FTransform                   | Weapon visual offset from attach for holster                    |
| AttackDamage                      | float                        | Base damage this weapon should do                               |
| RequiredAmmo                      | TSoftClassPtr\<UAmmoItem\>   | Ammo item class for this weapon                                 |
| ClipSize                          | int32                        | The amount of ammo loaded into the clip of the weapon           |
| AmmoInClip                        | int32                        | The amount of ammo currently in the clip                        |
| TraceData                         | FCombatTraceData             | Weapon trace distance when doing a hitscan                      |
| BashTraceData                     | FCombatTraceData             | Weapon trace distance when doing a weapon bash                  |


## Functions

## Can Fire

Check if the weapon can fire.

## Is Holstered

Check if the weapon is holstered.

## Reload

Update the ammo in our clip.

## Wants Reload

Check if the weapon wants to reload.
