---
sidebar_label: 'Quest Design'
---

# Quest Design

When creating quests in a game, it's important to consider the design approach, as this can greatly simplify the game's development process.

There are two main methods for creating quests: **Self-contained quests** and **Decentralized quests**.

Most games will have actors (such as NPCs or objects) that load in and out during quests. This is particularly common in open-world games, but it's also applicable to many other types of games. For example, in *Grand Theft Auto: San Andreas*, you can enter and exit quests at will, with quest-specific actors only becoming available when the quest starts and specific conditions are met. Some quests even change the game world or grant abilities that can be used later.

## Decentralized Quests

Decentralized quests are the most common and often the faster method to implement. In this approach:

- Each item or NPC is manually placed into the world.
- Actors destroy themselves when the quest is completed or reaches a certain state.
- This approach allows for quick setup and provides a better visualization of how the quest is laid out in the game world.

### Disadvantages of Decentralized Quests

- **Repeatability and Load Times**: If a player fails a quest or wants to repeat it from a quest selection screen, all actors need to be reloaded or respawned. This increases load times.
- **Initial Loading Delays**: When a level first loads, every quest-based actor must check its own state. As the number of actors increases, this can lead to delays.

Decentralized quests are often found in games with a linear story structure, like *Tomb Raider*, where jumping between quests is less of an issue.

## Self-contained Quests

Self-contained quests take a different approach where the quest itself handles the spawning and despawning of the necessary actors. Games like *Grand Theft Auto: San Andreas* or *The Elder Scrolls V: Skyrim* use this method. For example, you may arrive at a location that is empty or locked until a specific quest is active.

### Advantages of Self-contained Quests

- **Optimized Load Times**: Since items and NPCs are only spawned or despawned when a quest starts or ends, load times are reduced.
- **Easy Quest Selection**: The lifespan of each actor is controlled by the quest, making it easy to manage quest selection screens. You can simply call "Begin Quest" and have everything ready.

### Disadvantages of Self-contained Quests

- **Less Artist-Friendly**: Because the quest graph controls the actor's lifespan, you can't just browse the world to place actors. The process involves placing an actor in the world, copying its location, rotation, and other details, and then adding the corresponding narrative event with the necessary details.

## Summary

Both methodologies—decentralized and self-contained quests—are viable for quest design. Consider how you want your game to function and plan your design early to avoid complications later on.
