---
sidebar_label: 'Project Settings'
sidebar_position: 1
---

# Project Settings

In order to make Narrative Pro work, we need to change some settings on the project. Sadly we cannot do this directly from the plugin for you, but it's easy to do.

## Download

For ease, the config files have been included in the plugin.

Go into `Resources/IniSetups/Replace` and **CUT** (CTRL+X) all files in here.

Paste them inside your projects **Config** folder replacing all other files. You will have to restart Unreal.

![downloadconfigs.webp](//img/pro/Installation/project-settings/downloadconfigs.webp)

:::note

These config files should work in most instances. If they don't, try going through the manual configuration below.

:::

## Merging

If you are merging NarrativePro in with an existing project, you can go into the `Resources/IniSetups/Add` and copy those lines in each file, into your config files.

![adding-ini-files.webp](/img/pro/Installation/project-settings/adding-ini-files.webp)

## Loading

You can now open the project.

You will see a completely black screen. Just go to `Windows -> World Partition -> World Partition Editor`.

Highlight a chunk of the map, right click and choose **Load Region from Selection**.