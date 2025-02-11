---
sidebar_label: 'Custom Dialogue Shots'
sidebar_position: 1
---

# Custom Dialogue Shots

Narrative provides a [bunch of dialogue shots](./shots.md) you can use to get the shot you want. 

However, sometimes this just won’t work for your needs. You may need something specific or different. This is where the power of the sequencer comes in.

You can add your own custom sequences to get the exact shot you want.

## Level Sequence Asset

This shot is used when you want to use a custom sequence asset you have created. Really useful for cutscene-based dialogue.

![shots-level-sequence-asset.webp](//img/dialogue/shots/shots-level-sequence-asset.webp)

## Named binding error / warning

When creating your own custom shots, if you have a camera within the shot it's common to receive a warning regarding a named binding.

`Warning: Attempted to find a named binding that did not exist [Dialogue Name]`

This is easily resolved by right-clicking on your Cinecam in the sequencer, and adding a tag of:
```ini
Cinecam
```
This tag is important as it allows Narrative to locate the correct camera and add any specific features, aim it in the right location and apply any transitions required.
