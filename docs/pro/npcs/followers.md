---
sidebar_label: 'Followers'
---

# Followers / Companions

Narrative Pro features an AI system that allows NPC's to follow the player and become followers or companions.

There are many ways to trigger this functionality. The common method being via the Event: 

[NPC Behavior - Start Following Player](../events/default-events.md#npc-behavior---start-following-player) added into [Dialogue](../dialogue) or [Quests](../quests).

Another method that you can use, is to start the [behavior tree](https://dev.epicgames.com/documentation/en-us/unreal-engine/behavior-tree-in-unreal-engine---quick-start-guide) yourself:

[BT_FollowPlayer](ai/index#bt_followplayer)

![bt-starting.webp](//img/pro/npcs/bt-starting.webp)