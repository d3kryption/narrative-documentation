---
sidebar_label: 'Errors'
---

# Errors

## Narrative Default UI has not been given a valid Narrative Component - UI will not work

This error is caused when the Narrative UI cannot find a valid Narrative component.

The code that triggers this is below:

<iframe src="https://blueprintue.com/render/9o4sq48_/" width="100%" height="400" scrolling="no" allowfullscreen></iframe>

This error is caused when the UI cannot find an existing Narrative component.

Common causes for this, are:

- You haven't added the [Narrative Component](./index.md) to your **Player Pawn** or **Player Controller**
- The Narrative UI is being created before the component exists (you spawn the UI, then spawn the player after-wards)
- You have added the [Narrative Component](./index.md) to more than 1 actor. This can cause it to glitch out (unless you are creating a Multiplayer game)

### Possible fixes

Add the below code to your **Player Controller** or your **Player Pawn**. Pressing the 1 key will search every actor in the scene telling you which ones have Narrative components.

If you are making a single player game and it prints out multiple actors, you need to remove any additional components.

<iframe src="https://blueprintue.com/render/ihrmxuxp/" width="100%" height="400" scrolling="no" allowfullscreen></iframe>