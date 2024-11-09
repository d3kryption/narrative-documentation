---
sidebar_label: 'NPC text while player selects'
---

import React from 'react';

# Keep cursor after any menu close

To make the cursor stay visible and active when existing a menu, you need to modify a single widget to allow it. (Commonly used in top-down games)

Open the widget **WBP_NarrativeMenu**.WBP_NarrativeMenu

Inside the **Destruct** event, it will hide the cursor then set the input mode to **Game Only**.

Modify this so it shows the cursor then sets the input mode to **Game and UI**. 

### Old code

![keep-cursor-after-menu-close-old.webp](/img/common-ui/faqs/keep-cursor-after-menu-close-old.webp)

### New code

![keep-cursor-after-menu-close-new.webp](/img/common-ui/faqs/keep-cursor-after-menu-close-new.webp)