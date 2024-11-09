---
sidebar_label: 'Parties'
---

# Parties

Narrative Tales comes fully replicated out of the box ready for you to create multiplayer games.

The Party system is a child class of the [Narrative Component](../tales-component/index.md) with the system built to take the into account the party component.

It is mainly used for multiplayer games whether local or networked. Single player games will normally have no use for this.

## Getting started

The Party Component should be added to an actor that all players have access to (whether remote or local).

A common place is the game state since this will be available to all players. 

Another option is to create a replicated actor and add the Narrative Party component to it.

