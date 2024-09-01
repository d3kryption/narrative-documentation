---
sidebar_label: 'F.A.Qs'
---

# F.A.Qs

## 1) How difficult is to change the general UI font?

   Narrative Pro has theme files you can customise that everything reads from.

## 2) How difficult is to prevent characters to get damage during cinematic?

   You can just apply the gameplay tag of `Narrative.State.Invulnerable` on the start of dialogue then remove it on end.

## 3) Is it possible to implement XYZ plugin?

   Any plugin can be implemented, but it comes down to conflicting code / C++ classes. Its bad practice to have plugin specific names so all code names are generic. Best thing to do is try the plugin, make any modifications if required.

## 4) Is it possible to set up an in-game companion (ex. a dog getting you resources)

   Yup this is all fully possible with minor tweaks. There is a demo of this one the [quick start video](https://youtu.be/KCAqvnYe7_Y?si=GO8ERoe4PhOwD6fi&t=1048).

## 5) Can we make unskippable cinematics?

   Dialogue cinematics - yes. You can just untick [can skip](./dialogue/index.md) in the class defaults.
   Standard Unreal sequences, Unreal - by default - doesn't have a skip function, but they are easy enough to add in.

## 6) Is bow combat easy to implement?

   The existing combat: takes roughly 10 minutes setting up the plugin, and it comes with basic combat.
   As for new combat, it would be creating new animations, new gameplay abilities and linking it up.

## 7) Are quest items easy to flag?

   You define a new [NarrativeItem](./inventory/items.md) and populate it with your details. Then use the [NarrativeTask](./quests/tasks) to check for the [inventory](./inventory) picking it up.

## 8) Does the AI contain patrolling abilities?

   Patrolling I does not exist just yet, but it's super easy to add with a behavior tree and an array of patrol points.

## 9) Is it possible to create timer based quests?

   You simply create a timer, render it to the UI (in your HUD)
   if you complete the objective -> task complete stop the timer
   if the timer finishes -> task failed

## 10) Are extra animations easy to implement?

   It's all stored within an animation blueprint. Your new animations need to be retargeted them then replace or create a new animation blueprint.

## 11) Is it modular?

    It depends on which parts you want to modify. Some of the features are built into the core of Narrative Pro. Others have been designed to be easily modified.

## 12) Does it have an in-game mounts?

    No mount support just yet.

## 13) Does it support UE procedural animations?

    Narrative Pro just uses standard Unreal Animation tools. You can easily modify it to do what you need.

## 14) Does it have built-in endgame screens, initial menus etc?

    Narrative Pro has:
    - Pause screen (save, load, delete)
    - Main menu (settings, play, load, quit)
    - In game menus (inventory, world map, skill tree)
    - Loading screens
    - Fast travel screens

## 15) What are the main benefits over the super-good frameworks you can find on the market (ex. ACF)?

    Narrative Pro is built using the same high standard Narrative technology that you (may) have used before. Highly flexible, customisable and powerful.
    Its almost fully replicated from the ground up (so no mid-development bodges trying to make it work).
    It's also built on top of standard Unreal technology, so it can easily be adapted for your game.

## 16) How hard is to implement new abilities? (Like “this enhanced input opens up the paraglide” etc)

    It's using the standard [Gameplay Ability System(gas)](https://dev.epicgames.com/documentation/en-us/unreal-engine/gameplay-ability-system-for-unreal-engine).
    So if you add a new ability and code it in, it should be able to be bound to a key and work.

## 17) Does it have input mapping?

    Not yet no. It's drive via a data table at this moment in time. Mainly because Common UI didn't support enhanced input system until 5.2 and is only just out of experimental in 5.3.

## 18) Does it support quick saves?

    Saves can be activated via the menu but binding this to a key should be easy.

## 19) Can main/secondary quests be defined in the settings?

    Yes you can define the quests state by adding a basic enum to track.

## 20) Is it possible to define battle music:

    Yes the game features an easy-to-use music system for changing music in places.

## 21) Is it possible to get NPCs to die (for development)?

    Just apply large amounts of damage to the NPC via the CheatManager or ability.

## 22) Can you get the main char / npc to talk during combats?

    Yes this is already built in. Simply calling [BeginDialogue](./dialogue/functions.md#begin-dialogue) at specific events, timer, after a specific ability etc...

## 23) Is enemy characters’ AI easy to upgrade?

    They are using behavior trees, so you can either modify them, or stop using them for another plugin.

## 24) Can you change audio mode in the settings (what if I created an entire 5.1 surround setup with my audio technicians?)

    Custom audio classes have been added that override all audio settings. If you modify these you should be able to achieve what you need.

## 25) Can you control single graphical parameters via framework (such as ray tracing on/off, shadows etc...)

    Basic video settings have already been added such as resolution etc... Adding others is easy enough to do.

## 26) Does this framework support level streaming?

    The plugin uses world partition for most of the fast jumping ([Navigator fast travel](./navigator)) or the long distance loading / unloading ([settlements](./settlements))

## 27) What if I want a chest opening animation instead of getting immediately to the Inventory UI?

    You simply need to create a custom [Narrative Interaction](./interaction) that interacts with the chest -> freezes the player -> tells it to open -> once its opened -> open the [inventory](./inventory).

## 28) Is the framework already optimized to run open world adventures?

    There are a bunch of optimizations built in to load and unload [settlements](./settlements) (areas, bandit camps etc..)
    It's also built on World partition which should hide and show from distances as well.