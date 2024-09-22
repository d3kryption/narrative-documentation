---
sidebar_label: 'Creating new Abilities'
---

# Creating new Abilities

At some point you are going to want to create your own abilities for your game. This could be something to replace built in abilities, making a new plugin work or adding some functionality you want in your game.

Depending on what you want to do it can be an easy process.

The key thing to remember, is if you can code the functionality in Blueprints / C++, you can convert it to a Gameplay Ability.

## Creating new input

You might be able to re-use one of the existing keys in the game. If you are able to use an existing one, you can move to the [next step](./creating-new-abilities.md#creating-the-ability).

There are two methods of creating new input, C++ and Blueprints. C++ is the preferred method simply because it keeps everything inline. Both methods are completely okay to use so pick which you are comfortable with.

## C++ input

To add new input via C++, open the file `NarrativeArsenal.h`. 

Inside this file you will see an enum called `ENarrativeAbilityInputID`.

This stores a list of inputs available to GAS. Add a named input just below this line.

:::note

If you make the name generic instead of specific, you can reuse it in other areas if you need to. E.g. `Ability1` instead of `Fireball`.

:::

## Blueprint input

Adding input via Blueprints is different in a sense that you re-route how the ability is started.

Find your inputs folder and create a new [Enhanced Input Action](https://dev.epicgames.com/documentation/en-us/unreal-engine/enhanced-input-in-unreal-engine). 

Now find your Input Mapping Context and add your input into it, binding the keys that you want to use with it.

Open your player controller (or pawn depending on your games design), add your new input event into here.

Get the ability system component for this player then choose [TryActivateAbilityByClass](https://github.com/tranek/GASDocumentation?tab=readme-ov-file#concepts-ga-activating).

In the next steps, we will create the ability, you need to come back to this moment and update the class to your Ability.

## Creating the ability