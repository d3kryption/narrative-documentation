---
sidebar_label: 'Functions'
---

# Functions

Quests define structured gameplay progression using states, branches, tasks, and requirements.

This page documents **only the functions and events that are exposed to Blueprints**, allowing designers to:
- Control quest flow
- React to quest state changes
- Track progress
- Implement custom requirements and behaviors

---

## Quest Completion State

Represents the current completion state of a quest.

| State       | Description                           |
|-------------|---------------------------------------|
| Not Started | Quest has not yet begun               |
| Started     | Quest is currently active             |
| Succeeded   | Quest has been completed successfully |
| Failed      | Quest has failed                      |

---

## Get State

Returns a quest state by ID.

#### Output

| Name         | Type        | Description                       |
|--------------|-------------|-----------------------------------|
| Return Value | UQuestState | The quest state with the given ID |

---

## Get Branch

Returns a quest branch by ID.

#### Output

| Name         | Type         | Description                        |
|--------------|--------------|------------------------------------|
| Return Value | UQuestBranch | The quest branch with the given ID |

---

## Get Quest Name

Returns the display name of the quest.

#### Output

| Name         | Type  | Description    |
|--------------|-------|----------------|
| Return Value | FText | The quest name |

---

## Get Quest Description

Returns the quest description.

#### Output

| Name         | Type  | Description           |
|--------------|-------|-----------------------|
| Return Value | FText | The quest description |

---

## Set Quest Name

Sets the display name of the quest.

#### Inputs

| Name     | Type  | Description        |
|----------|-------|--------------------|
| New Name | FText | The new quest name |

---

## Set Quest Description

Sets the quest description.

#### Inputs

| Name            | Type  | Description               |
|-----------------|-------|---------------------------|
| New Description | FText | The new quest description |

---

## Fail Quest

Marks the quest as failed.

This immediately transitions the quest into a failed state.

#### Inputs

| Name                 | Type  | Description                 |
|----------------------|-------|-----------------------------|
| Quest Failed Message | FText | Message shown to the player |

---

## Succeed Quest

Marks the quest as succeeded.

This is used when manually completing a quest outside of the quest graph.

#### Inputs

| Name                    | Type  | Description                 |
|-------------------------|-------|-----------------------------|
| Quest Succeeded Message | FText | Message shown to the player |

---

## Set Tracked

Sets whether the quest is tracked.

Tracked quests typically:
- Show navigation markers
- Appear prominently in the UI

#### Inputs

| Name    | Type | Description                         |
|---------|------|-------------------------------------|
| Tracked | bool | Whether the quest should be tracked |

---

## Enter State

Forces the quest to enter a specific state.

This bypasses normal branch logic and should be used carefully.

#### Inputs

| Name      | Type        | Description        |
|-----------|-------------|--------------------|
| New State | UQuestState | The state to enter |

---

## Spawn Quest Actor

Spawns an actor that is **owned and managed by the quest**.

When the quest ends, all spawned quest actors are automatically destroyed.

#### Inputs

| Name            | Type                  | Description          |
|-----------------|-----------------------|----------------------|
| Actor Class     | TSubclassOf\<AActor\> | Actor class to spawn |
| Actor Transform | FTransform            | Spawn transform      |

#### Output

| Name         | Type   | Description             |
|--------------|--------|-------------------------|
| Return Value | AActor | The spawned quest actor |

---

## Add Quest Requirement

Adds a requirement to the quest.

Requirements define constraints such as:
- Stay near an NPC
- Keep an NPC alive
- Maintain a condition or state

#### Inputs

| Name        | Type              | Description            |
|-------------|-------------------|------------------------|
| Requirement | UQuestRequirement | The requirement to add |

---

## Remove Quest Requirement

Removes a previously added quest requirement.

#### Inputs

| Name        | Type              | Description               |
|-------------|-------------------|---------------------------|
| Requirement | UQuestRequirement | The requirement to remove |

---

## Get Quest Start State

Returns the starting state of the quest.

#### Output

| Name         | Type        | Description             |
|--------------|-------------|-------------------------|
| Return Value | UQuestState | The quest’s start state |

---

## Get States

Returns all states in the quest.

#### Output

| Name         | Type                  | Description      |
|--------------|-----------------------|------------------|
| Return Value | TArray\<UQuestState\> | All quest states |

---

## Get Branches

Returns all branches in the quest.

#### Output

| Name         | Type                   | Description        |
|--------------|------------------------|--------------------|
| Return Value | TArray\<UQuestBranch\> | All quest branches |

---

## Get Nodes

Returns all quest nodes (states and branches).

#### Output

| Name         | Type                 | Description     |
|--------------|----------------------|-----------------|
| Return Value | TArray\<UQuestNode\> | All quest nodes |

---

## Get Quest Completion

Returns the quest’s current completion state.

#### Output

| Name         | Type             | Description                    |
|--------------|------------------|--------------------------------|
| Return Value | EQuestCompletion | Current quest completion state |

---

## Get Owning Controller

Returns the controller that owns this quest.

#### Output

| Name         | Type              | Description       |
|--------------|-------------------|-------------------|
| Return Value | APlayerController | Owning controller |

---

## Get Owning Pawn

Returns the pawn that owns this quest.

#### Output

| Name         | Type  | Description |
|--------------|-------|-------------|
| Return Value | APawn | Owning pawn |

---

## Get Owning Narrative Component

Returns the Narrative Component managing this quest.

#### Output

| Name         | Type                | Description                |
|--------------|---------------------|----------------------------|
| Return Value | UNarrativeComponent | Owning Narrative Component |

---

## Is Tracked

Returns whether the quest is currently tracked.

#### Output

| Name         | Type | Description                  |
|--------------|------|------------------------------|
| Return Value | bool | Whether the quest is tracked |

---

## Get Group Members

Returns all players participating in this quest.

- For shared quests: all group members
- For solo quests: the owning controller only

#### Output

| Name         | Type                        | Description   |
|--------------|-----------------------------|---------------|
| Return Value | TArray\<APlayerController\> | Group members |

---

# Blueprint Events

These events allow Blueprints to **react to quest lifecycle changes**.

---

## On Quest Post Load

Called when the quest is loaded from disk.

Use this to restore runtime-only state.

---

## Pre Quest Started

Called before the quest officially begins.

Useful for setting up dependent systems or data tasks.

---

## On Quest Started

Called when the quest starts.

---

## On Quest Failed

Called when the quest fails.

---

## On Quest Succeeded

Called when the quest succeeds.

---

## On Quest New State

Called when the quest enters a new state.

---

## On Quest Objective Progress Made

Called when a quest task makes progress.

---

## On Quest Task Completed

Called when a quest task is completed.

---

## On Branch Taken

Called when a quest branch is taken.

---

## On Tracked Changed

Called when the quest tracking state changes.

---
