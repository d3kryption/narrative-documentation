---
sidebar_label: 'Character Creator'
---

# Character Creator

Narrative Pro comes packaged with a full Character Creator system to allow you to create characters in your game.

It uses mesh replacements, material changes, grooms and morph targets (shape keys).

![character_creator.webp](//img/pro/demo-map/character_creator.webp)

![character_creator_2.webp](//img/pro/demo-map/character_creator_2.webp)

## Access

You can access the Character Creator by:

- Navigating to the **CharacterCreator** level (such as in dialogue or a blueprint overlap)
- Entering the pause menu and selecting the **CharacterCreator**
- Starting a new game with the editor menu

## Adding a new color

To add a new color to a material, make sure to create the material with a Vector color parameter that changes its tint.

Create a material instance and set the Material in the [appearance asset](../inventory/items/equipment/character-appearance.md).

Now open the VectorParams of the material and set a gameplay tag and the name of the Parameter.

The gameplay tag is so you can group colors. E.g. `Narrative.CharacterCreator.Vectors.PrimaryColor`.

Now any other material using this tag, will have the same color when its changed.

For example, if you want the same skin colour across body parts, the same armor color, team color, all of this can be set just by using the same tag.

![cc_vectorparams_color.webp](//img/pro/character-creator/cc_vectorparams_color.webp)

Inside the VectorValues property, set the tag and the default color. This now globally stores the color against this tag.

![cc_vectorparams_values.webp](//img/pro/character-creator/cc_vectorparams_values.webp)