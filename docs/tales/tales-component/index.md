---
sidebar_label: 'Narrative Component'
sidebar_position: 1
---

# Narrative Component

The Narrative component is the core driver for the Dialogue and Quest system.

Adding this to your PlayerController, PlayerPawn or an appropriate actor will allow you to use Quests and Dialogue in your game.

:::note

It is a common misconception that you need a Narrative component PER [dialogue](../dialogue) or per [quest](../quests).

This is not true. You need 1 Narrative component per group of players.

1 for Single player.

1 for Multi-player if coop or multiple if Mass-Multiplayer games.

:::