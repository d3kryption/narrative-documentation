---
sidebar_label: 'Weapons'
---

# Weapons

Weapons are types of Narrative Items you can create in your game. You have the option of selecting two options.

## Weapon Item

The Weapon Item is used for Melee weapons.

### Creation

To create a weapon item, you can **Right-Click** in your **Content Drawer** -> **Narrative** -> **Narrative Items** -> **Weapon Item**.

## Ranged Weapon Item

The Ranged weapon item type is used for anything that has ranged attacks such as Guns, Magic, Long distance weapons.

### Creation

To create a ranged weapon item, you can **Right-Click** in your **Content Drawer** -> **Blueprint Class** -> **Ranged Weapon Item**.

![ranged-weapon-items.png](..%2F..%2F..%2F..%2F..%2Fstatic%2Fimg%2Finventory%2Fweapons%2Franged-weapon-items.png)

## Properties

| Property Name                     | Type                                              | Description                                                     |
|-----------------------------------|---------------------------------------------------|-----------------------------------------------------------------|
| WeaponAnimLayer                   | TSubclassOf\<UAnimInstance\>                      | Anim BP we'll apply to the owner when the weapon is unholstered |
| WeaponVisualClass                 | TSubclassOf\<[BP_WeaponVisual](./weapon-visual)\> | Weapon visual actor to spawn                                    |
| WeaponVisualAttachBone            | FName                                             | Weapon visual bone to attach to                                 |
| WeaponVisualHolsteredAttachBone   | FName                                             | Weapon visual bone to attach to for holstered state             |
| WeaponVisualAttachOffset          | FTransform                                        | Weapon visual offset from attach                                |
| WeaponVisualHolsteredAttachOffset | FTransform                                        | Weapon visual offset from attach for holster                    |
| Config                            | [WeaponConfig](./weapons.md#config-properties)    | The configuration for the current weapon.                       |
| AttackDamage                      | float                                             | Base damage this weapon should do                               |
| RequiredAmmo                      | TSoftClassPtr\<UAmmoItem\>                        | Ammo item class for this weapon                                 |
| ClipSize                          | int32                                             | The amount of ammo loaded into the clip of the weapon           |
| AmmoInClip                        | int32                                             | The amount of ammo currently in the clip                        |
| TraceData                         | FCombatTraceData                                  | Weapon trace distance when doing a hitscan                      |
| BashTraceData                     | FCombatTraceData                                  | Weapon trace distance when doing a weapon bash                  |

## Config Properties
| Property Name     | Type     | Description                                                                        |
|-------------------|----------|------------------------------------------------------------------------------------|
| AutomaticFire     | bool     | Whether the weapon fires continuously when the attack button is held down.         |
| RateOfFire        | float    | The rate at which the weapon can fire, typically measured in rounds per minute.    |
| AttackDamage      | float    | The amount of damage the weapon deals with each attack.                            |
| RequiredAmmo      | AmmoType | The type of ammunition required for the weapon to fire.                            |
| ClipSize          | int      | The maximum number of rounds the weapon's clip can hold.                           |
| AmmoInClip        | int      | The current amount of ammunition loaded in the weapon's clip.                      |
| TraceDistance     | float    | The maximum distance the weapon can hit a target using hitscan or trace mechanics. |
| TraceRadius       | float    | The radius of the weapon's trace or hitscan for determining hit detection.         |
| BashTraceDistance | float    | The distance covered by the weapon during a melee bash attack.                     |
| BashTraceRadius   | float    | The radius of the weapon's trace during a melee bash attack for hit detection.     |


## Functions

## Can Fire

Check if the weapon can fire.

## Is Holstered

Check if the weapon is holstered.

## Reload

Update the ammo in our clip.

## Wants Reload

Check if the weapon wants to reload.
