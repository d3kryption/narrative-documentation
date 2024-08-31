---
sidebar_label: 'Collision settings'
sidebar_position: 5
---

# Collision settings

Narrative Interaction works by firing a line trace from the center of the camera forward. This line trace is set to detect anything that is set to block Visibility Traces. 

Unfortunately, Unreal's default collision settings ignore Visibility Traces for Pawns. Fortunately it's an easy fix.

Open your Unreal Project and go to **Edit** -> **Project Settings**. Under **Engine** select **Collision**.

![engine-collision-settings.jpg](/img/interaction/engine-collision-settings.jpg)

Open **Preset** under **Trace Channels** and double click **Pawn**. On the row of **Visibility**, change the tick from the **Ignore** column to the **Block** column and click **accept**.

This will allow Narrative Interaction to now work with Pawns.
