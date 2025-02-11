---
sidebar_label: 'Project Settings'
sidebar_position: 1
---

# Project Settings

In order to make Narrative Pro work, we need to change some settings on the project. Sadly we cannot do this directly from the plugin for you, but it's easy to do.

# Download

For ease, you can download the config files here:

[Config Files](//img/pro/Installation/NarrativeProConfig.zip)

Extract them inside your projects **Config** folder replacing all other files. You will have to restart Unreal.

![downloadconfigs.webp](//img/pro/Installation/project-settings/downloadconfigs.webp)

:::note

These config files should work in most instances. If they don't, try going through the manual configuration below.

:::

# Manual

Go to **Edit** -> **Project Settings**

![editprojectsettings.webp](//img/pro/Installation/project-settings/editprojectsettings.webp)

:::warning

The settings we are about to set **must** be named the **exact** same name we state here. Functionality will not work if you don't name it the same.

:::

## Project -> Maps & Modes

Set the **Default GameMode** to `BP_NarrativeGameMode`

![default_gamemode.webp](//img/pro/Installation/default_gamemode.webp)

Set the **Editor Startup Map** to `DemoMap` and set the **Game Default Map** to `MainMenu`

![defaultmaps.webp](//img/pro/Installation/project-settings/defaultmaps.webp)

Set the **Game Instance Class** to `BP_NarrativeGameInstance`

![gameinstance.webp](//img/pro/Installation/project-settings/gameinstance.webp)


## Engine -> General Settings -> Asset Manager

Under **Advanced** set the **Asset Manager Class** to `NarrativeAssetManager`

![assetmanagerclass.webp](//img/pro/Installation/project-settings/assetmanagerclass.webp)

## Engine -> Collision

:::note

You must enter the collision profiles in the correct **order**. You **will** run into issues if they are mixed up.

:::

Click **New Trace Channel...**

![new-trace-channel.webp](//img/pro/Installation/project-settings/new-trace-channel.webp)

Set a new channel for each of the rows below:

| Name                 | Default Response | Description                                     |
|----------------------|------------------|-------------------------------------------------|
| NarrativeInteraction | Ignore           | Allows an actor to be detected as interactable. |
| NarrativeWeapon      | Block            | Allows weapons to detect actors.                |
| NarrativeClimbable   | Ignore           | Allows actors to receive climbing traces.       |

## Engine -> General Settings -> Common UI

Set the **Game Viewport Client Class** to `CommonGameViewportClient`

![ViewportChange.webp](//img/common-ui/ViewportChange.webp)

### Game -> Common Input Settings

Set the input data to be `BP_NarrativeInputData`.

Then inside the **Platform Input** for each platform you want to support, open up the sub menu and set **Default Gamepad Name** to be:

```ini
Generic
```

Then set the **Controller Data** for each device you want to support.

![commoninputsettings.webp](//img/pro/Installation/project-settings/commoninputsettings.webp)

## Engine -> Narrative - Save System

If you want to use Narratives built in CharacterCreator, set the Save Game Class to `NarrativeSaveWithCreatorData`.

Otherwise, leave this as `NarrativeSave`.

![save-game-class.webp](//img/pro/Installation/project-settings/save-game-class.webp)

## Engine -> Audio

### Sound Classes

Set the **Default Sound Class** and the **Default Media Sound Class** to `Narrative_Master`

![sound-class-masters.webp](//img/pro/Installation/project-settings/sound-class-masters.webp)

Set the **Default Base Sound Mix** to `Narrative_MasterMix`

![mastermix.webp](//img/pro/Installation/project-settings/mastermix.webp)


## Engine -> General Settings -> Default Classes -> Advanced

Set the **Game User Settings Class** to `NarrativeGameUserSettings`

![gameusersettings.webp](//img/pro/Installation/project-settings/gameusersettings.webp)


## Engine -> Physics -> Physical Surface

Add a surface type into **SurfaceType1** called:

```ini
Character
```

Then add another surface type into **SurfaceType2** called:

```ini
Concrete
```

![surface-types.webp](//img/pro/Installation/project-settings/surface-types.webp)

## Restart

With the above changes, you now need to restart your editor.