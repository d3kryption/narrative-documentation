---
sidebar_label: 'Focused Overlay Material'
sidebar_position: 1
---

# Focused Overlay Material

By default, when an item is interactable, Narrative will make it lerp a color to indicate its intractability. This however can be set to anything you require or cleared out to simply be ignored.

:::note

It is good [accessibility practice](https://www.accessibilitychecker.org/blog/video-game-accessibility-gaming-for-all/) to have an option to highlight interaction items for people who require further assistance.

:::

:::warning

It has been discovered that in Unreal 5.0, 5.1 and 5.2 that overlay materials do not work on meshes that have Nanite enabled. You can get around this by creating a decal instead of an overlay material but this works in Unreal 5.3 onwards.

:::