---
sidebar_label: 'Editor Tools'
---

# Editor Tools

## Console Commands / Cheat Manager

Using the inbuilt (albeit badly named) [Cheat Manager](https://benui.ca/unreal/cheatmanager/) you can create **editor only** commands to help speed up dev.

Narrative Pro comes featured with some built in commands to help speed up dev.

### Give Currency

The give currency command allows you to add a specific currency amount to the player.

![cheatmanager-givecurrency.webp](//img/pro/editor-tools/cheatmanager-givecurrency.webp)

#### Inputs

| Name        | Type                                   | Description                                                                                 |
|-------------|----------------------------------------|---------------------------------------------------------------------------------------------|
| Currency    | int32                                  | The amount of currency to give.                                                             |

### Give Skill Points

The give skill points command allows you to add a specific skill point amount to the player.

![cheatmanager-giveskillpoints.webp](//img/pro/editor-tools/cheatmanager-giveskillpoints.webp)

#### Inputs

| Name   | Type                                   | Description                         |
|--------|----------------------------------------|-------------------------------------|
| Points | int32                                  | The amount of skill points to give. |

### AdvanceTime

Allows you to skip time by an incremental amount. Useful for testing time or delayed actions.

![advance-time.webp](//img/pro/editor-tools/advance-time.webp)

#### Inputs

| Name | Type                                   | Description                                  |
|------|----------------------------------------|----------------------------------------------|
| Time | int32                                  | The amount of time to advance by in minutes. |

### ShowDebug - TimeOfDay

The show debug time of day command allows you to view [Narrative Sky](../narrative-sky/index.md) information in the editor.

![show-debug-time-of-day.webp](//img/pro/editor-tools/show-debug-time-of-day.webp)


## C++

```
Plugins/NarrativePro/Source/NarrativeArsenal/Public/UnrealFramework/NarrativeCheatManager.h
```