---
sidebar_label: 'W_NarrativeMenu_QuestJournal'
---

# W_NarrativeMenu_QuestJournal

The quest journal widget is built up with a series of **ScrollBoxes** which use a series of [BP_QuestJournalQuest](./bp_questjournalquest.md) and [BP_QuestBranch](./bp_questbranch.md) to display information.

## Text_ActiveQuestCount

This is a **TextBlock** which displays the current quantity of active (not closed, not failed, not-started) quests.

![active-quests.webp](//img/quests-and-dialogue/ui/w_narrativemenu_questjournal/active-quests.webp)

## ActiveQuestsBox

This **ScrollBox** lists all quests as [BP_QuestJournalQuest](./bp_questjournalquest.md) widgets listing all the current quantity of active (not closed, not failed, not-started) quests.

![active-quests-list.webp](//img/quests-and-dialogue/ui/w_narrativemenu_questjournal/active-quests-list.webp)

## Text_FinishedQuestCount

This is a **TextBlock** which displays the current quantity of finished quests (closed, failed) quests.

![inactive-quests.webp](//img/quests-and-dialogue/ui/w_narrativemenu_questjournal/inactive-quests.webp)

## FinishedQuestsBox

This **ScrollBox** lists all quests as [BP_QuestJournalQuest](./bp_questjournalquest.md) widgets listing all the current complete (closed, failed) quests.

## QuestTitle

This **TextBlock** shows the selected quests title.

![quest-title.webp](//img/quests-and-dialogue/ui/w_narrativemenu_questjournal/quest-title.webp)

# Vertical Box

This widget lists all the tasks for the selected quest using the [BP_QuestBranch](./bp_questbranch.md) to display information.

![task-list.webp](//img/quests-and-dialogue/ui/w_narrativemenu_questjournal/task-list.webp)