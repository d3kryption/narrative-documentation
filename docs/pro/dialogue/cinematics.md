---
sidebar_label: 'Cinematics'
---

# Cinematics

Linked video: [ Tutorial: How to Create Cinematic Dialogue in Narrative Pro ](https://www.youtube.com/watch?v=zMRhtlOe0HQ)

Narrative Dialogue can be used to create complex cinematic style cutscenes with dialogues all by using the built-in Unreal Sequencer tool.

Narrative features Sequencer additions to make it easier to create cinematic style cutscenes.

Firstly, create a new or open your existing sequencer.

## Player Controller

Narrative's Player Controller is expanded to give the sequencer extra control over the characters.

With your sequencer open, drag your player controller into the sequencers actor list panel. This will spawn a Dynamic controller in the world.

Next, right-click the controller and choose Convert to -> replaceable actor.

Finally, right-click the controller and choose Add binding tag -> **PlayerController**.

This will allow Narrative to replace the sequencer when it runs with the actual player controller.

![cinematics-playercontroller.webp](//img/dialogue/cinematics/cinematics-playercontroller.webp)

## Input control

Narrative contains a custom sequencer track that lets you stop and start when the player has control of their characters.

This is useful when you want to take or release input at specific times during your cinematic.  

On your [PlayerController track](./cinematics.md#player-controller)

![cinematics-playercontroller-inputtrack.webp](//img/dialogue/cinematics/cinematics-playercontroller-inputtrack.webp)

Adding a keyframe to this track will allow you to control when the player has input control during your cinematic. 

Add the track, then right-click and choose properties.

Here you can set which input settings you want t oset such as blocking just input, look movements or blocking both.

![cinematics-playercontroller-inputtrack-inputsettings.webp](//img/dialogue/cinematics/cinematics-playercontroller-inputtrack-inputsettings.webp)

## Gameplay Tag Track

The gameplay tag track allows you to set and remove gameplay tags directly to your characters. This allows you to change their states during cinematics.

Some examples of this could be telling characters to unequip weapons, abiltiies, or forcing them into a certain state such as walking.

![cinematics-playercontroller-gameplaytagtrack.webp](//img/dialogue/cinematics/cinematics-playercontroller-gameplaytagtrack.webp)

## Dialogue Track

This track is used to add dialogue options onto the screen for the players to select.

![cinematics-dialogue-track.webp](//img/dialogue/cinematics/cinematics-dialogue-track.webp)

Add the dialogue track and add a keyframe to it. You can now right-click on it and choose its dialogue options to select which options are available and which sequence it takes you to. 

![cinematics-dialogue-track-settings.webp](//img/dialogue/cinematics/cinematics-dialogue-track-settings.webp)