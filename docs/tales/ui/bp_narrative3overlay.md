---
sidebar_label: 'BP_Narrative3Overlay'
---

# BP_Narrative3Overlay

The BP_Narrative3Overlay handles all UI that does not affect the players input. Anything that does not require the player to interact with the system.

The widget is built from two sections; **TaskBox** and **CurrentDialogueLine**.

## Quests

The quests section starts within the **TaskBox** VerticalBox.

### Quest Updated Subtext

The **QuestUpdatedSubtext** is a TextBlock which shows the current quest state. Updated, Started, Failed or Succeeded.

![quest-updated-subtext.webp](//img/quests-and-dialogue/ui/bp_narrative3overlay/quest-updated-subtext.webp)

### Quest Updated Text

The **Quest Updated Text** is a TextBlock which shows the current quest name that you set in the [Class Defaults](../quests/index.md#class-defaults).

![quest-updated-text.webp](//img/quests-and-dialogue/ui/bp_narrative3overlay/quest-updated-text.webp)

### BranchesBox

The **BranchesBox** it a VerticalBox that is populated with [BP_QuestBranch's](./bp_questbranch.md).

## Dialogue

### CurrentDialogueLine

The dialogue section handles rendering the spoken text not the [PlayerOptions](./w_narrativemenu_dialogue.md).

![dialogue-speaker-text.webp](//img/quests-and-dialogue/ui/bp_narrative3overlay/dialogue-speaker-text.webp)