---
sidebar_label: 'F.A.Qs'
---

import React from 'react';

# Frequently Asked Questions

<div className="cardContainer">
<div>
    <h3>How to keep cursor after any menu close?</h3>
    <p>Please see the guide [here](./keep-cursor-after-menu-close).</p>
</div>
<div>
    <h3>I have an existing Common UI setup, what do I do?</h3>
    <p>You will need to combine the Input Data Tables and either rebind your existing one or the Narrative Widgets.</p>
</div>
<div>
    <h3>How to remove the action buttons at the bottom of dialogue?</h3>
    <p>Open `WBP_NarrativeHUD` and set its Visibility property to **Collapsed**.</p>
</div>
<div>
    <h3>Why do I have to install a separate plugin just to use my Narrative products UI?</h3>
    <p>It allows us to do some amazing stuff we couldn't otherwise:</p>
    <ul>
        <li>You can now use any gamepad you like with Narrative UI's since we're using Common UI</li>
        <li>You can change the styling of every single Narrative UI in your game by changing a single asset instead of spending hours manually changing them all individually</li>
        <li>UI changes and bug fixes we make do will be applied across all Narrative products</li>
        <li>It keeps your packaged game size smaller since all fonts and icons are stored in 1 plugin rather than having a bunch of duplicates</li>
    </ul>
</div>
</div>