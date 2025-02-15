---
sidebar_label: 'NPC Chunking'
---

# NPC Chunking

A performance boosting measure that is used in Narrative Tales is the NPC chunking feature.

It pre-determines what nodes need to be run at the start of an NPC's node, so it has less code to run when running each node. 

Take the below dialogue from the fictional game just made up: `Halo: but you are just a trooper`  

![npc-chunking-dialogue.webp](//img/dialogue/npc-chunking/npc-chunking-dialogue.webp)

Normally a dialogue system would run each node individually, as and when it needs to. Running the conditions on the fly.

However, with NPC Chunking, all the conditions are pre-determined at the start and almost groups the nodes together.

This has no impact on camera shots, events, or code - that will all still run when the individual node does.

But conditionally, Narrative no longer has to check each node trying to find the correct path to take. It's all pre-determined.

Take the below image. Instead of running conditions for 7 nodes each time. Narrative chunks together the NPC nodes and only runs conditions 3 times.

![npc-chunking-dialogue-show.webp](//img/dialogue/npc-chunking/npc-chunking-dialogue-show.webp)

In this example, the performance gains are minimal however, if you have a more complicated dialogue with many nodes that all have conditions on, this can be quite a time saver.

## Potential issues

The vast majority of the time, this will not impact you nor be an issue. 

However, in some instances, since all the conditions are run at the start of a chunk, any events that run or changes in gameplay cannot be re-checked mid-chunk.

Meaning in the dialogue below, a quest is granted on the first node. but a condition is running on the third node checking if that quest is active.

This condition will return false since the conditions were all checked at the start.

![npc-chunking-issues.webp](//img/dialogue/npc-chunking/npc-chunking-issues.webp)

A quick fix to get around this is to simply add a "breaker" node in the form of an empty player node which will chunk the first two nodes, then the player node will run, then it will re-chunk the next nodes making the condition - check real time.

![npc-chunking-issues-fix.webp](//img/dialogue/npc-chunking/npc-chunking-issues-fix.webp)
