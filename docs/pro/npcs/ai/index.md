---
sidebar_label: 'AI'
---

# AI

All NPC's AI is built using the Utility AI pattern. The tasks have been made using [Behavior Trees](https://dev.epicgames.com/documentation/en-us/unreal-engine/behavior-tree-in-unreal-engine---quick-start-guide).

The demo map has all of these behavior trees setup and working in some capacity to show them in action. 

## Utility AI

Utility AI is really simple. 

You assign your AI a series of tasks to execute. Anything from attacking, searching, moving, patrolling etc..

Each of these tasks is given a "score" of its probability / requirements to run. For example, the AI doesn't want to attack if there is nothing to attack, or, if the NPC is carrying a very important chicken.

These are given lower or no scores (0.0).

The higher the score, the more likely it's to be executed.

This gives the game a feel of decision-making where each task can have its score adjusted depending on the situation, NPC and anything else you want.

In the below example, when the AI starts, it will calculate the scores and run the task **Should Runaway** since it has the highest score of **0.9**.

![utility-ai.webp](//img/pro/npcs/ai/utility-ai.webp)