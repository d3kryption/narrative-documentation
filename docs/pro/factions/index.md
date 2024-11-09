---
sidebar_label: 'Factions'
---

# Factions

Factions is a feature which allows you to assign NPC's to specific groups with their own behaviors and logic towards other factions.

For example, you could have the high ranking gang of the **Tunnel Snakes** with their legions of members (_three_) and they can be set to aggressive against the Brotherhood.

## Usage

## Game State

The game state controls all alliances between all factions. It allows you to set which factions are friendly, neutral or hostel to one another.

![gamestate-faction.webp](//img/factions/gamestate-faction.webp)

## ENarrativeFactionID Properties

| Enumerator Name | Description                                                                                              |
|-----------------|----------------------------------------------------------------------------------------------------------|
| None            | Represents a person without an affiliation.                                                              |
| Bandits         | Example faction. Represents characters affiliated with bandits. Can be edited in `NarrativeArsenal.h`.   |
| Heroes          | Example faction. Represents characters affiliated with heroes. Can be edited in `NarrativeArsenal.h`.    |
| Civilians       | Example faction. Represents characters affiliated with civilians. Can be edited in `NarrativeArsenal.h`. |
| Soldiers        | Example faction. Represents characters affiliated with soldiers. Can be edited in `NarrativeArsenal.h`.  |


## ETeamAttitude Properties

| Enumerator Name | Description                                 |
|-----------------|---------------------------------------------|
| Friendly        | Represents an attitude that is friendly.    |
| Neutral         | Represents an attitude that is neutral.     |
| Hostile         | Represents an attitude that is hostile.     |
