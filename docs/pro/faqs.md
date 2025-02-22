---
sidebar_label: 'F.A.Qs'
---

import React from 'react';

# Frequently Asked Questions

<div className="cardContainer">
<div>
    <h3>How difficult is it to change the general UI font?</h3>
    <p>Narrative Pro has theme files you can customize that everything reads from.</p>
</div>

<div>
    <h3>How difficult is it to prevent characters from getting damage during a cinematic?</h3>
    <p>You can just apply the gameplay tag of <code>Narrative.State.Invulnerable</code> at the start of dialogue, then remove it at the end.</p>
</div>

<div>
    <h3>Is it possible to implement XYZ plugin?</h3>
    <p>Any plugin can be implemented, but it comes down to conflicting code/C++ classes. It's bad practice to have plugin-specific names, so all code names are generic. The best thing to do is try the plugin and make any modifications if required.</p>
</div>

<div>
    <h3>Is it possible to set up an in-game companion (e.g., a dog getting you resources)?</h3>
    <p>Yes, this is fully possible with minor tweaks. There is a demo of this in the [quick start video](https://youtu.be/KCAqvnYe7_Y?si=GO8ERoe4PhOwD6fi&t=1048).</p>
</div>

<div>
    <h3>Can we make unskippable cinematics?</h3>
    <p>Dialogue cinematics: Yes. You can just untick [Can Skip](./dialogue/index.md) in the class defaults.<br/>
Standard Unreal sequences: By default, Unreal doesn't have a skip function, but they are easy enough to add.</p>
</div>

<div>
    <h3>Is bow combat easy to implement?</h3>
    <p>The existing combat setup takes roughly 10 minutes, and it comes with basic combat. For new combat types, you would need to create new animations, new gameplay abilities, and link them up.</p>
</div>

<div>
    <h3>Are quest items easy to flag?</h3>
    <p>You define a new [NarrativeItem](./inventory/items/) and populate it with your details. Then, use the [NarrativeTask](./quests/tasks) to check for the [inventory](./inventory) picking it up.</p>
</div>

<div>
    <h3>Does the AI contain patrolling abilities?</h3>
    <p>Patrolling does not exist just yet, but it's super easy to add with a behavior tree and an array of patrol points.</p>
</div>

<div>
    <h3>Is it possible to create timer-based quests?</h3>
    <p>You simply create a timer, render it to the UI (in your HUD). If you complete the objective -> task complete; stop the timer. If the timer finishes -> task failed.</p>
</div>

<div>
    <h3>Are extra animations easy to implement?</h3>
    <p>It's all stored within an animation blueprint. Your new animations need to be retargeted, then replace or create a new animation blueprint.</p>
</div>

<div>
    <h3>Is it modular?</h3>
    <p>It depends on which parts you want to modify. Some features are built into the core of Narrative Pro, while others are designed to be easily modified.</p>
</div>

<div>
    <h3>Does it have in-game mounts?</h3>
    <p>No mount support just yet.</p>
</div>

<div>
    <h3>Does it support UE procedural animations?</h3>
    <p>Narrative Pro uses standard Unreal Animation tools. You can easily modify it to do what you need.</p>
</div>

<div>
    <h3>How hard is it to implement new abilities? (Like “this enhanced input opens up the paraglide” etc.)</h3>
    <p>It's using the standard [Gameplay Ability System (GAS)](https://dev.epicgames.com/documentation/en-us/unreal-engine/gameplay-ability-system-for-unreal-engine). So if you add a new ability and code it in, it should be able to be bound to a key and work.</p>
</div>

<div>
    <h3>Does it have built-in endgame screens, initial menus, etc.?</h3>
    <p>Narrative Pro includes</p>
    <ul>
        <li>Pause screen (save, load, delete)</li>
        <li>Main menu (settings, play, load, quit)</li>
        <li>In-game menus (inventory, world map, skill tree)</li>
        <li>Loading screens</li>
        <li>Fast travel screens</li>
    </ul>
</div>

<div>
    <h3>What are the main benefits over the super-good frameworks you can find on the market (e.g., ACF)?</h3>
    <p>Narrative Pro is built using the same high-standard Narrative technology. It's highly flexible, customizable, and powerful. It is almost fully replicated from the ground up and built on top of standard Unreal technology, making it easily adaptable.</p>
</div>

<div>
    <h3>Does it have input mapping?</h3>
    <p>Not yet, no. It's driven via a data table at this moment in time because Common UI didn't support the enhanced input system until 5.2 and is only just out of experimental in 5.3.</p>
</div>

<div>
    <h3>Does it support quick saves?</h3>
    <p>Saves can be activated via the menu, but binding this to a key should be easy.</p>
</div>

<div>
    <h3>Can main/secondary quests be defined in the settings?</h3>
    <p>Yes, you can define the quest state by adding a basic enum to track it.</p>
</div>

<div>
    <h3>Is it possible to define battle music?</h3>
    <p>Yes, the game features an easy-to-use music system for changing music in places.</p>
</div>

<div>
    <h3>Is it possible to get NPCs to die (for development)?</h3>
    <p>Just apply large amounts of damage to the NPC via the CheatManager or ability.</p>
</div>

<div>
    <h3>Can you get the main character/NPC to talk during combats?</h3>
    <p>Yes, this is already built in. Simply call [BeginDialogue](./tales-component/functions.md#begin-dialogue) at specific events, timer, after a specific ability, etc.</p>
</div>

<div>
    <h3>Is enemy characters’ AI easy to upgrade?</h3>
    <p>They are using behavior trees, so you can either modify them or stop using them in favor of another plugin.</p>
</div>

<div>
    <h3>Can you change the audio mode in the settings (e.g., for a 5.1 surround setup)?</h3>
    <p>Custom audio classes have been added that override all audio settings. If you modify these, you should be able to achieve what you need.</p>
</div>

<div>
    <h3>Can you control single graphical parameters via the framework (such as ray tracing on/off, shadows, etc.)?</h3>
    <p>Basic video settings like resolution are already added. Adding others is easy enough to do.</p>
</div>

<div>
    <h3>Does this framework support level streaming?</h3>
    <p>The plugin uses world partition for most of the fast jumping ([Navigator fast travel](./navigator)) or the long-distance loading/unloading ([settlements](./settlements)).</p>
</div>

<div>
    <h3>What if I want a chest opening animation instead of getting immediately to the Inventory UI?</h3>
    <p>You simply need to create a custom [Narrative Interaction](./interaction) that interacts with the chest -> freezes the player -> tells it to open -> once it's opened -> open the [inventory](./inventory).</p>
</div>

<div>
    <h3>Is the framework already optimized to run open-world adventures?</h3>
    <p>There are a bunch of optimizations built in to load and unload [settlements](./settlements) (areas, bandit camps, etc.). It's also built on World partition which should hide and show from distances as well.</p>
</div>
</div>
`