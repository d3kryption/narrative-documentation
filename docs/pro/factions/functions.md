---
sidebar_label: 'Functions'
---

# Functions

The Factions system features a bunch of functions that allow you to get or set the state of factions.

## Get Faction Attitude By Faction

Allows you to get the current relationship of two factions.

![get-faction-attitude-towrads-faction.webp](//img/pro/factions/get-faction-attitude-towrads-faction.webp)

### Inputs

| Name           | Type        | Description                      |
|----------------|-------------|----------------------------------|
| Source Faction | GameplayTag | The source faction gameplay tag. |
| Target Faction | GameplayTag | The target faction gameplay tag. |

### Outputs

| Name             | Type                                                 | Description                |
|------------------|------------------------------------------------------|----------------------------|
| Faction Attitude | [ETeamAttitude](./index.md#eteamattitude-properties) | The faction attitude enum. |

## Get Factions Attitude By Faction (multiple)

Allows you to get the current relationship of multiple factions at once.

![get-faction-attitudes-towrads-faction.webp](//img/pro/factions/get-faction-attitudes-towrads-faction.webp)

### Inputs

| Name            | Type                 | Description                                  |
|-----------------|----------------------|----------------------------------------------|
| Source Factions | GameplayTagContainer | The source factions gameplay tags container. |
| Target Factions | GameplayTagContainer | The target factions gameplay tags container. |

### Outputs

| Name             | Type                                                 | Description                |
|------------------|------------------------------------------------------|----------------------------|
| Faction Attitude | [ETeamAttitude](./index.md#eteamattitude-properties) | The faction attitude enum. |

## Set Faction Attitude

Allows you to set the current relationship of a faction.

![set-faction-attitude.webp](//img/pro/factions/set-faction-attitude.webp)

### Inputs

| Name           | Type                                                 | Description                      |
|----------------|------------------------------------------------------|----------------------------------|
| Source Faction | GameplayTag                                          | The source faction gameplay tag. |
| Target Faction | GameplayTag                                          | The target faction gameplay tag. |
| New Attitude   | [ETeamAttitude](./index.md#eteamattitude-properties) | The new faction attitude.        |
