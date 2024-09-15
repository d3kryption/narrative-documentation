---
sidebar_label: 'Default Abilities'
---

# Default Abilities

Narrative Pro includes a bunch of gameplay abilities you can use in your game.

## Attack Base

The foundational ability for any kind of attack in the system. Other specific attack abilities, such as ranged or melee, inherit from this and build additional logic.

## Block

Allows the character to block incoming attacks, which can be used for unarmed combat, melee weapon defense, or shield-based defense.

## Crouch

This ability enables the character to crouch, reducing their visibility or allowing them to move through low areas.

## Death

This ability triggers when the character dies, handling things like animations, disabling controls, and triggering respawn or game-over logic.

## Dodge

Enables the character to quickly evade attacks by dodging in a specific direction.

## Hitscan Rifle

A specific implementation of the hitscan mechanic for rifles, simulating rapid fire or single-shot weapons by instantly checking for hits along a trace.

## Jump

Allows the character to jump, either as a single action or as part of more complex movement mechanics.

## Melee

A basic melee combat ability, used for any close-range attacks like punches, sword swings, or club strikes.

## Melee Attack Sword

A more specific melee attack ability for sword combat, which may include special attack animations, combo logic, or damage modifiers.

## Melee Attack Weapon Bash

This ability allows the character to perform a bash attack with their weapon, useful for stunning or pushing back enemies in close range.

## Reload

This ability reloads a ranged weapon, managing the clip size and ammo count.

## Toggle Weapon Holstered

Allows the player to toggle between holstering and unholstering their weapon, affecting how the character holds the weapon and interacts with the world.

## Weapon Aim

Grants the player the ability to aim down sights or target when holding a ranged weapon. This is typically toggled on and off depending on whether the character is aiming or not.

## Weapon Hit Scan

This ability is used for ranged weapons, firing a line trace from the equipped weapon to check if it hits any target within the specified range.
