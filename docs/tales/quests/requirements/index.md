---
sidebar_label: 'Quest Requirements'
---

# Quest Requirements

As of Narrative [Tales 3.7.0](../../changelog/index.md#version-370), Quests now have a feature called "Requirements".

These are blueprints that you can dynamically add to your quests to automatically fail if the player doesn't meet the requirements.

Common use cases include:

- If the player wonders too far from a specific NPC - fail the quest.
- If the player exits their vehicle - jump to a specific quest state
- If an NPC dies - fail the quest.

## Creation

To create a new requirement, create a new blueprint class type of `Quest Requirement`.

![quest-requirement-creation.png](//img/quests/quest-requirements/quest-requirement-creation.png)

The requirement doesn't need to return anything, just control the flow of the quest.

## Usage

Using a quest requirement is simple. When you want to start applying the requirement, add an event or double click your node, then call the [Quest Add Requirement](../../quests/functions.md#add-quest-requirement) function.

Since the quest requirement is a blueprint object, you can create an instanced quest requirement type to populate it.

![instanced-quest-requirement.png](//img/quests/quest-requirements/instanced-quest-requirement.png)

![stay-near-actor-variables.png](//img/quests/quest-requirements/stay-near-actor-variables.png)

### Adding

Here is an example of the quest requirement Stay Near Actor being added to a quest:

![quest-requirement-usage-adding.png](//img/quests/quest-requirements/quest-requirement-usage-adding.png)

### Removing

Then removing it upon its use being no longer needed:

![quest-requirement-usage-removing.png](//img/quests/quest-requirements/quest-requirement-usage-removing.png)