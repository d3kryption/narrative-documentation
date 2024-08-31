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

![downloadconfigs.png](/img/pro/Installation/project-settings/downloadconfigs.png)

:::note

These config files should work in most instances. If they don't, try going through the manual configuration below.

:::

# Manual

Go to **Edit** -> **Project Settings**

![editprojectsettings.png](/img/pro/Installation/project-settings/editprojectsettings.png)

:::warning

The settings we are about to set **must** be named the **exact** same name we state here. Functionality will not work if you don't name it the same.

:::

## Collision

Go to **Engine** -> **Collision**

![engine-collision.png](/img/pro/Installation/project-settings/engine-collision.png)

Click **New Trace Channel...**

![new-trace-channel.png](/img/pro/Installation/project-settings/new-trace-channel.png)

Set a new channel called:

```ini
NarrativeInteraction
```

and the Default Response to **Ignore** then click **Accept**

![new-trace-channel-interaction.png](/img/pro/Installation/project-settings/new-trace-channel-interaction.png)

Set another new channel called:

```ini
NarrativeWeapon
```

and the Default Response to **Block** then click **Accept**

![new-trace-channel-weapon.png](/img/pro/Installation/project-settings/new-trace-channel-weapon.png)

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

![surface-types.png](/img/pro/Installation/project-settings/surface-types.png)

## Game Settings

Go to **Engine** -> **General Settings** -> **Default Classes**

Under **Advanced** set the **Game User Settings Class** to `NarrativeGameUserSettings`

![gameusersettings.png](/img/pro/Installation/project-settings/gameusersettings.png)

## Asset Manager

Go to **Engine** -> **General Settings** -> **Default Classes**

Under **Advanced** set the **Asset Manager Class** to `NarrativeAssetManager`

![assetmanagerclass.png](/img/pro/Installation/project-settings/assetmanagerclass.png)

## Game Instance

Go to **Engine** -> **Project - Maps & Modes** -> **Game Instance**

Set the **Game Instance Class** to `NarrativeGameInstance`

![gameinstance.png](/img/pro/Installation/project-settings/gameinstance.png)

## Default Maps

Go to **Engine** -> **Project - Maps & Modes** -> **Default Maps**

Set the **Editor Startup Map** to `DemoMap` and set the **Game Default Map** to `MainMenu`

![defaultmaps.png](/img/pro/Installation/project-settings/defaultmaps.png)

## Common UI

Go to **Engine** -> **General Settings** -> **Default Classes**

Set the **Game Viewport Client Class** to `CommonGameViewportClient`

![ViewportChange.jpg](/img/common-ui/ViewportChange.jpg)

### Input settings

Go to **Game** -> **Common Input Settings** -> **Input**

Inside the **Platform Input** for each platform you want to support, open up the sub menu and set **Default Gamepad Name** to be:

```ini
Generic
```

Then set the **Controller Data** for each device you want to support.

![commoninputsettings.png](/img/pro/Installation/project-settings/commoninputsettings.png)

## Audio

Go to **Engine** -> **Audio** -> **Audio**

### Sound Classes

Set the **Default Sound Class** and the **Default Media Sound Class** to `Master`

:::note

Make sure you set the **Master** that belongs inside **NarrativePro**. Do **not** use the **Master** inside **Engine**

**Correct:**

![goodmastersoundclass.png](/img/pro/Installation/project-settings/goodmastersoundclass.png)

**Incorrect:**

![badmastersoundclass.png](/img/pro/Installation/project-settings/badmastersoundclass.png)

:::

### Sound Mix

Set the **Default Base Sound Mix** to `MasterMix`

![mastermix.png](/img/pro/Installation/project-settings/mastermix.png)