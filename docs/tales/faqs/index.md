---
sidebar_label: 'F.A.Qs'
---

import React from 'react';

# Frequently Asked Questions

<div className="cardContainer">
<div>
    <h3>How to show dialogue text while player picks an option?</h3>
    <p>Please see the guide [here](./show-dialogue-text-while-player-selection).</p>
</div>
<div>
    <h3>Does Tales support dynamic quests?</h3>
    <p>Yes and no depending on how you want it to work. You can randomise quantities, objectives built in tasks, but you cannot randomise which tasks that build up a quest.</p>
</div>
<div>
    <h3>Does Tales support dynamic dialogue?</h3>
    <p>Yes and no depending on how you want it to work. You can randomise text or add variables inside dialogue, but you cannot dynamically add new nodes.</p>
</div>
<div>
    <h3>Does Tales come with any lip sync tools?</h3>
    <p>No. You need to use external tools such as Nvidia Omniverse or LiveLink to record the lip sync animations, then use Tales to play it along-side the audio.</p>
</div>
<div>
    <h3>Does Tales support integration with XX inventory?</h3>
    <p>Most inventory systems can be integrated with Tales.</p>
    <p>The basic things you need to create are:</p>
    <ul>
        <li>[Narrative Event](../events/index.md) to Add items from the inventory</li>
        <li>[Narrative Event](../events/index.md) to Remove items from the inventory</li>
        <li>[Narrative Condition](../conditions/index.md) to Check if an item exists in the inventory</li>
        <li>[Narrative Task](../quests/tasks/index.md) to check the inventory for when an item is added</li>
    </ul>
</div>
</div>