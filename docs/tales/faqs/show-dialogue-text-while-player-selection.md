---
sidebar_label: 'NPC text while player selects'
---

import React from 'react';

# Show dialogue text while player selects

To make the NPC's text show when the player is selecting an option, open `BP_Narrative3Overlay` -> `OnNPCDialogueLineFinished`.

Disconnect the **SetText** node so it does not empty the **CurrentDialogueLine** when the NPC is finished speaking.

![show-dialogue-text-while-player-selection](/img/quests-and-dialogue/show-dialogue-text-while-player-selection.webp)