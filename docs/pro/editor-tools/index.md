---
sidebar_label: 'Editor Tools'
---

# Editor Tools

## Console Commands / Cheat Manager

Using the inbuilt (albeit badly named) [Cheat Manager](https://benui.ca/unreal/cheatmanager/) you can create **editor only** commands to help speed up dev.

Narrative Pro comes featured with some built in commands to help speed up dev.

### Give Currency

The give currency command allows you to add a specific currency amount to the player.

![cheatmanager-givecurrency.webp](/img/pro/editor-tools/cheatmanager-givecurrency.webp)

#### Inputs

| Name        | Type                                   | Description                                                                                 |
|-------------|----------------------------------------|---------------------------------------------------------------------------------------------|
| Currency    | int32                                  | The amount of currency to give.                                                             |

### Give Skill Points

The give skill points command allows you to add a specific skill point amount to the player.

![cheatmanager-giveskillpoints.webp](/img/pro/editor-tools/cheatmanager-giveskillpoints.webp)

#### Inputs

| Name   | Type                                   | Description                         |
|--------|----------------------------------------|-------------------------------------|
| Points | int32                                  | The amount of skill points to give. |

## C++

```
Plugins/NarrativePro/Source/NarrativeArsenal/Public/UnrealFramework/NarrativeCheatManager.h
```