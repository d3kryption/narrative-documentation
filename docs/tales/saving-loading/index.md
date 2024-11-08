---
sidebar_label: 'Saving & Loading'
---

# Saving & Loading

Tales features full saving and loading functionality to make sure you can easily remember every dialogue option, selected dialogue choice or quest objective the player ever made in the game.

You call save/load on each [Narrative component](../tales-component/index.md) you need to save. 

## Saving

On single player games, you will normally have a single Narrative component.

To save a Narrative component, find a reference to the component then call the Save function.

![saving.webp](/img/quests-and-dialogue/saving/saving.webp)

### Inputs

| Name     | Type                | Description                                                                             |
|----------|---------------------|-----------------------------------------------------------------------------------------|
| Target   | Narrative Component | The [Narrative component](./index.md) to save.                                          |
| SaveName | String              | The name of the file you want to save to disk.                                          |
| Slot     | Int                 | The slot ID of the save file to use. (A save file can have multiple versions within it) |

:::note

When picking a SaveName, make sure to make it unique between players other saves or other players for multiplayer.

:::

### Saving Multiplayer

On multiplayer games, it's common to have a [Narrative component](../tales-component/index.md) per player. You need to save **EACH** component on the server.

Here is one of many methods you can do it using [Narrative Parties](../parties/index.md):

![saving-multiplayer.webp](/img/quests-and-dialogue/saving/saving-multiplayer.webp)

## Loading

To load a Narrative component, find a reference to the component then call the Load function.

![loading.webp](/img/quests-and-dialogue/saving/loading.webp)

### Inputs

| Name     | Type                | Description                                                                             |
|----------|---------------------|-----------------------------------------------------------------------------------------|
| Target   | Narrative Component | The [Narrative component](./index.md) to load into.                                     |
| SaveName | String              | The name of the file you want to load from disk.                                        |
| Slot     | Int                 | The slot ID of the save file to use. (A save file can have multiple versions within it) |


## Changing levels

Narrative only exists within the current level. It has been created this way for performance since you don't need the Narrative component loaded on every single level (main menu, credits etc...).

However, many games have multiple levels that the player can change between where the Narrative component needs to transport its data across.

There are a few common ways to do it displayed below.

### Level Transport Save

#### Method 1

One common method is to have a dedicated save file where you keep reusing the name, when you are transporting between levels.

![saving-level-change-method-1.webp](/img/quests-and-dialogue/saving/saving-level-change-method-1.webp)

Then simply load it on the [Level Blueprint](https://dev.epicgames.com/documentation/en-us/unreal-engine/level-blueprint-in-unreal-engine?application_version=5.4).
0
![loading-level-change-method-1.webp](/img/quests-and-dialogue/saving/loading-level-change-method-1.webp)

:::note

If you have multiplayer players changing levels, it will be better to save the temp save file based on the players name.

:::

#### Method 2

Another common method is to simply autosave Narrative like you would when you complete a game. Instead of having a temp save file you just re-use the main save file.