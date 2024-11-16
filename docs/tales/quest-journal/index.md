---
sidebar_label: 'Quest Journal'
sidebar_position: 4
---

# Quest Journal

Narrative Tales features a fully functional Quest Journal to allow players to view all details about their quests.

Whether its past or present quests, the player has the option to view all the details and objectives that were failed or completed.

The Quest Journal contains a toggle for [Party Quests](../parties) too.

![quest-journal.webp](/img/quests/journal/quest-journal.webp)

## Setup

To use the Quest Journal, you need to have set up the [Common UI HUD](../../common-ui/installation/index.md) first.

Next, create an [Enhanced Input Action](https://dev.epicgames.com/documentation/en-us/unreal-engine/enhanced-input-in-unreal-engine) you want to use to show the journal.

Finally, call `OpenMenu` on your **NarrativeHUD** to show the QuestJournal.

<iframe src="https://blueprintue.com/render/5__ilcv2/" width="100%" height="400" scrolling="no" allowfullscreen></iframe>