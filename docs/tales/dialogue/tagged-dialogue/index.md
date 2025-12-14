---
sidebar_label: 'Tagged Dialogue'
---

# Tagged Dialogue

Tagged Dialogue is specific sections of dialogue that can be activated at sections via gameplay tags.

For example, when greeting someone or taunting, you can check if they have any tagged dialogue and execute it.

It makes a very generic framework with specific lines.

![tagged-dialogue.webp](//img/pro/dialogue/tagged-dialogue.webp)

## Setup

To create a new **Tagged Dialogue Set** data asset by right-clicking in the content drawer -> miscellaneous -> data asset.

Select **Tagged Dialogue Set**.

![tagged-dialogue-setup.png](//img/pro/dialogue/tagged-dialogue-setup.png)

Populate the **Tagged Dialogue** then add the TaggedDialogue component to the NPC.

![tagged-dialogue-component.png](//img/dialogue/tagged-dialogue/tagged-dialogue-component.png)

![tagged-dialogue-variable.png](//img/dialogue/tagged-dialogue/tagged-dialogue-variable.png)

## Properties

| Name         | Type                                                                                                                                | Description                                                                                                                                       |
|--------------|-------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Tag          | [FGameplayTag](https://dev.epicgames.com/documentation/en-us/unreal-engine/using-gameplay-tags-in-unreal-engine)                    | The tag that will kick off this dialogue.                                                                                                         |
| Dialogue     | [UDialogue](../index.md)                                                                                                            | The dialogue to begin.                                                                                                                            |
| Cooldown     | float                                                                                                                               | The amount of time we should cooldown before playing this dialogue again.                                                                         |
| MaxDistance  | float                                                                                                                               | Tagged dialogue wont play unless we're within this range from it                                                                                  |
| RequiredTags | [FGameplayTagContainer](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/GameplayTags/FGameplayTagContainer) | Tags that will be required for the NPC to begin this tagged dialogue                                                                              |
| BlockedTags  | [FGameplayTagContainer](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/GameplayTags/FGameplayTagContainer) | Tags that if owned by the NPC, will prevent this dialogue beginning. For example, we wouldn't want to greet a player if we were fighting someone. |