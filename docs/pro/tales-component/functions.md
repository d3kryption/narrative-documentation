---
sidebar_label: 'Functions'
---

# Functions

## Get Narrative Component

When you want to start any [dialogue](../dialogue) or [quest](../quests), you need to get hold of the Tales component.

This component is the driver that handles all [dialogue](../dialogue) or [quests](../quests).

This function will attempt to load the component from the target passed into it (self by default), then the owning controller then the pawn.

![get-narrative-component.png](..%2F..%2F..%2Fstatic%2Fimg%2Fnarrative-component%2Fget-narrative-component.png)

:::note

Under the hood, this function simply calls **Get Narrative Component From Target** passing in [GetPlayerController](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Kismet/UGameplayStatics/GetPlayerController).

If you are working in a multi-player environment with multiple Narrative components, use [Get Narrative Component From Target](#get-narrative-component-from-target) instead.

:::

### Output

| Name         | Type                                  | Description                                 |
|--------------|---------------------------------------|---------------------------------------------|
| Return Value | [UTalesComponent](../Tales-component) | The Narrative component found on the actor. |

## Get Narrative Component From Target

Another method of getting hold of the [tales component](../Tales-component).

This function allows you to specify which target you want to get the [Tales Component](../Tales-component) from.

![get-narrative-component-from-target.png](..%2F..%2F..%2Fstatic%2Fimg%2Fnarrative-component%2Fget-narrative-component-from-target.png)

:::note

This function is more useful for multiplayer games when you have multiple [Tales Components](../Tales-component). 

If you are working in a single player environment, [GetNarrativeComponent](#get-narrative-component) is sufficient.

:::

### Inputs

| Name   | Type   | Description                                                             |
|--------|--------|-------------------------------------------------------------------------|
| Target | AActor | The actor to try and find the [tales component](../Tales-component) on. |

### Output

| Name         | Type                                  | Description                                 |
|--------------|---------------------------------------|---------------------------------------------|
| Return Value | [UTalesComponent](../Tales-component) | The Narrative component found on the actor. |
