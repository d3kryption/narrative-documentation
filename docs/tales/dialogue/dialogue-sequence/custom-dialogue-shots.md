---
sidebar_label: 'Custom Dialogue Shots'
sidebar_position: 1
---

# Custom Dialogue Shots

Narrative provides a [bunch of dialogue shots](./shots.md) you can use to get the shot you want. 

However, sometimes this just won’t work for your needs. You may need something specific or different. This is where the power of the sequencer comes in.

You can add your own custom sequences to get the exact shot you want.

## Level Sequence

When you want to use a custom sequence without any Narrative control.

<video autoPlay muted loop playsinline width="100%">
  <source src="/img/pro/level-sequence-player-shot-v1.mp4" type="video/mp4"/>
  <source src="/img/pro/level-sequence-player-shot-v1.mov" type="video/mov"/>
  Your browser does not support the video tag.
</video>

## Narrative Dialogue Sequence

When you want to use a custom sequence but let Narrative control its features.

<video autoPlay muted loop playsinline width="100%">
  <source src="/img/dialogue/shots/narrative-level-sequence-player-shot-v1.mp4" type="video/mp4"/>
  <source src="/img/dialogue/shots/narrative-level-sequence-player-shot-v1.mov" type="video/mov"/>
  Your browser does not support the video tag.
</video>

## Named binding error / warning

When creating your own custom shots, if you have a camera within the shot it's common to receive a warning regarding a named binding.

`Warning: Attempted to find a named binding that did not exist [Dialogue Name]`

This is easily resolved by right-clicking on your Cinecam in the sequencer, and adding a tag of:
```ini
Cinecam
```
This tag is important as it allows Narrative to locate the correct camera and add any specific features, aim it in the right location and apply any transitions required.
