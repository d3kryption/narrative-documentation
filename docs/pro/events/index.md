---
sidebar_label: 'Events'
---

# Events

Events are a powerful tool that truly makes Narrative suit your game's requirements. Narrative is a framework that lets you expand upon its features and Events are one of the key ways to do it.

They are small portions of code (mainly generic and reusable, but they can also be specific) that allow you to run code from any node across Narrative; be it [Quests](../quests) or [Dialogue](../dialogue).

- Need a quest to start when you select a dialogue option? Add an event.
- Need to give an item to your player after finishing a quest? Add an event.
- Need to spawn an NPC, set their AI behavior, or give them a weapon? Add 3 events!

:::note

A key thing to remember with Events is to **always make it return**. If you don’t it can cause issues with Narrative waiting for the event to finish.

:::

You also have the option to select whether an event runs at the start, end or both (start and end) of a node. Useful for running the event before a dialogue or task or after. 

For example, a dialogue node saying “Thank you for helping me. The priceless red jewel is in the red bandit camp” - then adding the quest instead of adding the quest before they have even spoken.

## Using Events

To use an event, simply select the node (quest or dialogue) and in the details screen, add as many events to your Events list as you require.

![events.webp](//img/pro/events/events.webp)

## Default Events

Narrative comes with a bunch of [default events](./default-events) to help kickstart your game.

## Creating Events

It is very common to create your own events to implement logic. This could be to interface with other plugins or to do something unique for your game.

Creating Events are really easy. Create a new event by right-clicking in the **Content Drawer** -> **Narrative** -> **Event**.

Simply override `ExecuteEvent` and action your request.

## Properties

| Name               | Type                                              | Description                                                                                              |
|--------------------|---------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| Refire On Load     | bool                                              | When the game loads back in, should we fire this event off again.                                        |
| Event Runtime      | [EEventRuntime](./index.md#eeventruntime)         | Defines when the event should be executed.                                                               |
| Party Event Policy | [EPartyEventPolicy](./index.md#epartyeventpolicy) | Defines how events should be executed when the dialogue is playing as a party. Ignore if not in a party. |

### EEventRuntime

| Enum Value | Description                                                                        |
|------------|------------------------------------------------------------------------------------|
| Start      | Execute the event at the start.                                                    |
| End        | Execute the event at the end.                                                      |
| Both       | Run the event at both start and end. This means your event will be executed twice. |

### EPartyEventPolicy

| Enum Value      | Display Name      | Description                                                                                                                                                |
|-----------------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Party           | Party             | The event is run on the party itself. Use this if you want the event to affect the party in some way, e.g., to begin a quest for all members in the party. |
| AllPartyMembers | All Party Members | The event is run on every party member. For example, if your event gave the player a reward, every member in the party would receive the reward.           |
| PartyLeader     | Party Leader      | The event is run on the party leader. For example, if your event gave the player a reward, only the party leader would receive the reward.                 |
