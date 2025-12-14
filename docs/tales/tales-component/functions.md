---
sidebar_label: 'Functions'
---

# Functions

## Get Narrative Component

When you want to start any [dialogue](../dialogue) or [quest](../quests), you need to get hold of the Narrative component.

This component is the driver that handles all [dialogue](../dialogue) or [quests](../quests).

This function will attempt to load the component from the target passed into it (self by default), then the owning controller then the pawn.

![get-narrative-component.webp](//img/narrative-component/get-narrative-component.webp)

:::note

Under the hood, this function simply calls **Get Narrative Component From Target** passing in [GetPlayerController](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Kismet/UGameplayStatics/GetPlayerController).

If you are working in a multi-player environment with multiple Narrative components, use [Get Narrative Component From Target](#get-narrative-component-from-target) instead.

:::

#### Output

| Name         | Type                              | Description                                 |
|--------------|-----------------------------------|---------------------------------------------|
| Return Value | [UNarrativeComponent](./index.md) | The Narrative component found on the actor. |

## Get Narrative Component From Target

Another method of getting hold of the [Narrative component](./index.md).

This function allows you to specify which target you want to get the [Narrative Component](./index.md) from.

![get-narrative-component-from-target.webp](//img/narrative-component/get-narrative-component-from-target.webp)

:::note

This function is more useful for multiplayer games when you have multiple [Narrative Components](./index.md). 

If you are working in a single player environment, [GetNarrativeComponent](#get-narrative-component) is sufficient.

:::

#### Inputs

| Name   | Type   | Description                                                         |
|--------|--------|---------------------------------------------------------------------|
| Target | AActor | The actor to try and find the [Narrative component](./index.md) on. |

#### Output

| Name         | Type                              | Description                                 |
|--------------|-----------------------------------|---------------------------------------------|
| Return Value | [UNarrativeComponent](./index.md) | The Narrative component found on the actor. |

## Begin Dialogue

The most used function in the entire dialogue system.

This function tells Narrative to start the specified dialogue. It will return a bool if it can start or if it has failed for any reason (replication issues, no conditions passed)

![dialogue-begin-dialogue.webp](//img/dialogue/dialogue-begin-dialogue.webp)

#### Inputs

| Name        | Type                                   | Description                                                                                 |
|-------------|----------------------------------------|---------------------------------------------------------------------------------------------|
| Target      | [UTalesComponent](../tales-component)  | The Narrative component to try and start the dialogue on.                                   |
| Dialogue    | TSubclassOf\<[UDialogue](./index.md)\> | The dialogue class that you want to play.                                                   |
| StartFromID | FName                                  | The ID the dialogue should start playing from, if empty will play from root node.           |
| Priority    | int32                                  | The priority we want to play this dialogue at. -1 means use the dialogues default priority. |

#### Output

| Name         | Type | Description                            |
|--------------|------|----------------------------------------|
| Return Value | bool | Whether or not the dialogue has began. |

## Has Dialogue Available

Whilst creating dialogue it is common to have dialogue assets that are not used anymore due to conditions blocking all routes - and this is okay.

Sometimes you want to check if a dialogue can be started before calling BeginDialogue or to fulfil some condition.

The **HasDialogueAvailable** function executes the initialize method of the provided dialogue and does not start the dialogue.

This will return you a bool to whether calling BeginDialogue would successfully enter the dialogue.

![dialogue-has-dialogue-available.webp](//img/dialogue/dialogue-has-dialogue-available.webp)

#### Inputs

| Name        | Type                                   | Description                                                                                 |
|-------------|----------------------------------------|---------------------------------------------------------------------------------------------|
| Target      | [UTalesComponent](../tales-component)  | The Narrative component to try and start the dialogue on.                                   |
| Dialogue    | TSubclassOf\<[UDialogue](./index.md)\> | The dialogue class that you want to play.                                                   |
| StartFromID | FName                                  | The ID the dialogue should start playing from, if empty will play from root node.           |
| Priority    | int32                                  | The priority we want to play this dialogue at. -1 means use the dialogues default priority. |

#### Output

| Name         | Type | Description                            |
|--------------|------|----------------------------------------|
| Return Value | bool | Whether or not the dialogue can begin. |

## Try Exit Dialogue

Attempts to exit the currently playing dialogue.

This function performs an **authoritative check** to ensure the dialogue is allowed to exit before actually doing so.

This is useful when:
- The player attempts to manually exit a dialogue
- Dialogue flow depends on exit conditions
- You want to prevent exiting during critical moments

If the exit is not allowed, the dialogue will continue playing.

![try-exit-dialogue.png](//img/tales/functions/try-exit-dialogue.png)

#### Inputs

| Name   | Type                     | Description                                               |
|--------|--------------------------|-----------------------------------------------------------|
| Reason | EExitDialogueReason      | The reason the dialogue is attempting to exit.            |

#### Output

| Name         | Type | Description                                           |
|--------------|------|-------------------------------------------------------|
| Return Value | bool | Whether the dialogue was successfully exited.         |

:::note

This function performs internal validation before exiting the dialogue.

If you need to **forcefully exit** a dialogue without checks, use the appropriate low-level dialogue shutdown function instead.

:::
