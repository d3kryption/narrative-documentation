---
sidebar_label: 'Parties'
---

# Parties

Narrative Tales comes fully replicated out of the box ready for you to create multiplayer games.

The Party system is a child class of the [Narrative Component](../tales-component/index.md) with the system built to take the into account the party component.

It is mainly used for multiplayer games whether local or networked. Single player games will normally have no use for this.

Using the Party System will allow you to combine players dialogue and quests so they all can work together to compile or view them at the side time.

## Getting started

The Party Component should be added to an actor that all players have access to (whether remote or local).

A common place is the game state since this will be available to all players. 

Another option is to create a replicated actor and add the Narrative Party component to it.

![game-state-parties.webp](//img/quests-and-dialogue/parties/game-state-parties.webp)

### Adding players to the party

Depending on how your game works, you may require different means of adding players into their selected party.

The most common example is to add all players to the same party by using the GameMode function `Handle Starting New Player`.

From this function, you can get access to the GameState then the Narrative Party component. Finally calling AddPartyMember.

:::note

It is important to call `Handle Starting New Player's` parent function otherwise the game will not properly initialise.

:::

<iframe src="https://blueprintue.com/render/pt7x6qon/" width="100%" height="400" scrolling="no" allowfullscreen></iframe>

#### Party Leader

The first member added to the party will be granted the title of Party Leader. This is used when assigning quests, dialogue and other options controlled by the party leader.