---
sidebar_label: 'Functions'
---

# Functions

## Play Tagged Dialogue

Attempts to play a tagged dialogue using the provided tag.

This function:
- Searches the Tagged Dialogue Set for a matching tag
- Validates cooldown, distance, and tag restrictions
- Attempts to play the dialogue if allowed

#### Inputs

| Name                | Type         | Description                                       |
|---------------------|--------------|---------------------------------------------------|
| Tag                 | FGameplayTag | The tag identifying which dialogue to play        |
| Dialogue Instigator | AActor       | The actor responsible for triggering the dialogue |

#### Output

| Name         | Type | Description                                      |
|--------------|------|--------------------------------------------------|
| Return Value | bool | Whether a tagged dialogue successfully played    |

---

## Execute Play Tagged Dialogue

Executes a specific tagged dialogue.

This function is **Blueprint overridable**, allowing you to:
- Implement custom dialogue selection logic
- Add AI behavior or animations before playing
- Override how tagged dialogues are actually started

#### Inputs

| Name                | Type            | Description                                       |
|---------------------|-----------------|---------------------------------------------------|
| Dialogue            | FTaggedDialogue | The tagged dialogue to attempt to play            |
| Dialogue Instigator | AActor          | The actor responsible for triggering the dialogue |

#### Output

| Name         | Type | Description                                      |
|--------------|------|--------------------------------------------------|
| Return Value | bool | Whether the dialogue was successfully executed   |

:::note

This function is called internally by **Play Tagged Dialogue**.

Override this function if you want full control over how tagged dialogues are played.

:::

---

## Cooldowns

The Tagged Dialogue Component internally tracks when dialogues were last played.

Each dialogue tag has its own cooldown timer to prevent repetition.

Cooldown data is stored per actor.

---

## Common Use Cases

- NPC greetings
- Combat taunts
- Investigation barks
- Ambient chatter
- Reactive dialogue

Tagged Dialogue is ideal for **non-critical narrative moments** that add life and personality to the world without interrupting gameplay.

---
