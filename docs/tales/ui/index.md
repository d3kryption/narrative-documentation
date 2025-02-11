---
sidebar_label: 'UI'
---

# UI

Narrative Tales contains a fully-function UI set up that you can modify to fit your games needs.

It is built up of reusable components with a balance of ease to use and functionality.

Below is a list of each section of the UI with links to the components that build them up.

## Quests

The quest info is displayed via the [BP_Narrative3Overlay](./bp_narrative3overlay.md#quests).

![quest-info.webp](//img/quests-and-dialogue/ui/quest-info.webp)

## Quest Journal

The quest journal has its own widget via the [W_NarrativeMenu_QuestJournal](./w_narrativemenu_questjournal.md)

![quest-journal.webp](//img/quests/journal/quest-journal.webp)

## NPC Dialogue

The NPC dialogue is displayed via the [BP_Narrative3Overlay](./bp_narrative3overlay.md#dialogue).

![npc-dialogue.webp](//img/quests-and-dialogue/ui/npc-dialogue.webp)

## Player Dialogue

The player dialogue has to take control of the players input so it uses a different widget to display the options. [W_NarrativeMenu_Dialogue](./w_narrativemenu_dialogue.md)

![player-options.webp](//img/quests-and-dialogue/ui/player-options.webp)

## Editor

The below section contains the widgets that create the editor widgets instead of gameplay ones.

You do not need to modify these for gameplay.

### Dialogue node

This widget handles all nodes within dialogue. [WBP_DefaultDialogueNode](./wbp_defaultdialoguenode.md)

![editor-dialogue-node.webp](//img/quests-and-dialogue/ui/editor-dialogue-node.webp)

### Quest node

This widget handles both QuestBranches and QuestStates. [WBP_DefaultQuestNode](./wbp_defaultquestnode.md)

![editor-quest-node.webp](//img/quests-and-dialogue/ui/editor-quest-node.webp)