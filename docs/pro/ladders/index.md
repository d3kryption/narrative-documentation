---
sidebar_label: 'Ladders'
---

# Ladders

Linked video: [Tutorial: Creating Ladders in Narrative Pro](https://www.youtube.com/watch?v=fIaR7SGL01E)

Narrative Pro features a complete ladder package system for creating and managing ladders.

<video autoPlay muted loop playsinline width="100%">
  <source src="/img/pro/ladders/ladders.mp4" type="video/mp4"/>
  Your browser does not support the video tag.
</video>

## Usage

Drag the **BP_Ladder** blueprint into the scene and position it where you want. The root of the ladder is configured at ground level.

![ladder_bpclass.webp](//img/pro/ladders/ladder_bpclass.webp)

![ladder_world.webp](//img/pro/ladders/ladder_world.webp)

Configure the number of Ladder [Rungs](https://en.wikipedia.org/wiki/Ladder) to make it extend to the height of your climbing area.

![ladder_rungs.webp](//img/pro/ladders/ladder_rungs.webp)

### Locations

Sometimes your terrain may not be flat, so you can adjust the ladder's get on / off locations by modifying the transforms.

:::note

If you don't position the locations correctly (get on / off transform, get off floor / off top transforms) the animations can glitch out and look odd.

If you see some warping through meshes or into the ground, move you locations around.

:::

![ladder_top_location.webp](//img/pro/ladders/ladder_top_location.webp)

![ladder_bottom_locations.webp](//img/pro/ladders/ladder_bottom_locations.webp)

## NPCs

NPC's have been set up to automatically use ladders when they need to get to an area.

Ladders use custom NavLinks in order to join the base and top of a ladder. 

When an NPC arrives at a NavLink, the custom code starts telling them to climb the ladder exactly how the player does.

<video autoPlay muted loop playsinline width="100%">
  <source src="/img/pro/ladders/npc_ladders.mp4" type="video/mp4"/>
  Your browser does not support the video tag.
</video>

## How it works

Ladders are built up via a blueprint (**BP_Ladder**) using mesh instances to extend the ladder.

Each ladder has a start and end sphere collision component to detect if the player walks into or near the top of a ladder.

The player also fires a trace to detect the ladder when jumping into it.

When detected, a motion warp activates connecting the player to the ladder and activating the climbing mode.

As the player moves up / down, the system moves the player up and down each ladder segment.