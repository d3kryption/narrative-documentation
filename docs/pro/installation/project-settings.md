---
sidebar_label: 'Project Settings'
sidebar_position: 1
---

# Project Settings

In order to make Narrative Pro work, we need to change some settings on the project. Sadly we cannot do this directly from the plugin for you, but it's easy to do.

# Download

For ease, you can download the config files here:

[Config Files](/img/pro/Installation/NarrativeProConfig.zip)

Extract them inside your projects **Config** folder replacing all other files. You will have to restart Unreal.

![downloadconfigs.webp](/img/pro/Installation/project-settings/downloadconfigs.webp)

:::note

These config files should work in most instances. If they don't, try going through the manual configuration below.

:::

# Manual

Go to **Edit** -> **Project Settings**

![editprojectsettings.webp](/img/pro/Installation/project-settings/editprojectsettings.webp)

:::warning

The settings we are about to set **must** be named the **exact** same name we state here. Functionality will not work if you don't name it the same.

:::

## Collision

:::note

You must enter the collision profiles in the correct order. You **will** run into issues if they are mixed up.

:::

Go to **Engine** -> **Collision**

![engine-collision.webp](/img/pro/Installation/project-settings/engine-collision.webp)

Click **New Trace Channel...**

![new-trace-channel.webp](/img/pro/Installation/project-settings/new-trace-channel.webp)

Set a new channel called:

```ini
NarrativeInteraction
```

and the Default Response to **Ignore** then click **Accept**

![new-trace-channel-interaction.webp](/img/pro/Installation/project-settings/new-trace-channel-interaction.webp)

Set another new channel called:

```ini
NarrativeWeapon
```

and the Default Response to **Block** then click **Accept**

![new-trace-channel-weapon.webp](/img/pro/Installation/project-settings/new-trace-channel-weapon.webp)

## Surface Types

Go to **Engine** -> **Physics** -> **Physical Surface**

Add a surface type into **SurfaceType1** called:

```ini
Character
```

Then add another surface type into **SurfaceType1** called:

```ini
Concrete
```

![surface-types.webp](/img/pro/Installation/project-settings/surface-types.webp)

## Game Settings

Go to **Engine** -> **General Settings** -> **Default Classes**

Under **Advanced** set the **Game User Settings Class** to `NarrativeGameUserSettings`

![gameusersettings.webp](/img/pro/Installation/project-settings/gameusersettings.webp)

## Asset Manager

Go to **Engine** -> **General Settings** -> **Default Classes**

Under **Advanced** set the **Asset Manager Class** to `NarrativeAssetManager`

![assetmanagerclass.webp](/img/pro/Installation/project-settings/assetmanagerclass.webp)

## Common UI

Go to **Engine** -> **General Settings** -> **Default Classes**

Set the **Game Viewport Client Class** to `CommonGameViewportClient`

![ViewportChange.webp](/img/common-ui/ViewportChange.webp)

### Input settings

Go to **Game** -> **Common Input Settings** -> **Input**

Inside the **Platform Input** for each platform you want to support, open up the sub menu and set **Default Gamepad Name** to be:

```ini
Generic
```

Then set the **Controller Data** for each device you want to support.

![commoninputsettings.webp](/img/pro/Installation/project-settings/commoninputsettings.webp)

## Audio

Go to **Engine** -> **Audio** -> **Audio**

### Sound Classes

Set the **Default Sound Class** and the **Default Media Sound Class** to `Master`

:::note

Make sure you set the **Master** that belongs inside **NarrativePro**. Do **not** use the **Master** inside **Engine**

**Correct:**

![goodmastersoundclass.webp](/img/pro/Installation/project-settings/goodmastersoundclass.webp)

**Incorrect:**

![badmastersoundclass.webp](/img/pro/Installation/project-settings/badmastersoundclass.webp)

:::

### Sound Mix

Set the **Default Base Sound Mix** to `MasterMix`

![mastermix.webp](/img/pro/Installation/project-settings/mastermix.webp)

## Game Instance

Go to **Project** -> **Maps & Modes** -> **Game Instance**

Set the **Game Instance Class** to `NarrativeGameInstance`

![gameinstance.webp](/img/pro/Installation/project-settings/gameinstance.webp)

## Default Maps

Go to **Project** -> **Maps & Modes** -> **Default Maps**

Set the **Editor Startup Map** to `DemoMap` and set the **Game Default Map** to `MainMenu`

![defaultmaps.webp](/img/pro/Installation/project-settings/defaultmaps.webp)

## Default GameMode

Go to **Project** -> **Maps & Modes** -> **Default GameMode**

Set the **Default GameMode** to `BP_NarrativeGameMode`

