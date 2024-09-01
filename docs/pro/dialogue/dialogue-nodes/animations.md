---
sidebar_label: 'Animations'
---

# Animations

Each dialogue node contains two variables for playing animations on your characters: **Body Animation** and **Facial Animation**.

![dialogue-animations.png](/img/dialogue/line/dialogue-animations.png)

## Setup

To play animations on the correct skeletal meshes you need to add a tag to the correct body-part so Narrative knows where to play the animation.

### Facial animation

To set up the facial skeletal meshes, find your skeletal mesh component that will play your facial animation. Add an component tag of:

```ini
Face
``` 
![dialogue-animation-face-tag.png](/img/dialogue/line/dialogue-animation-face-tag.png)

:::note

Narrative follows the Unreal standard of facial animations only moving the face bones / shape keys. The neck should not be part of this animation.

If you need to change this behaviour, you will need to modify your Animation Blueprint to support this.

:::

### Body animation

To set up the Body skeletal meshes, find your skeletal mesh component that will play your body animation. Add an component tag of:

```ini
Body
``` 

![dialogue-animation-body-tag.png](/img/dialogue/line/dialogue-animation-body-tag.png)

## Animation Blueprint changes

By default Unreal does not play Animation Montages on default skeletal meshes. 

Create an Animation Blueprint by Right-clicking in your **Content Drawer** -> **Animation** -> **Animation Blueprint**.

Open the **AnimGraph** and add a DefaultSlot node at some stage of the animation.

![dialogue-animation-blueprint-defualtslot.png](/img/dialogue/line/dialogue-animation-blueprint-defualtslot.png)

:::note

Most of the time it's safe to add right before the Output pose, so it overwrites all animations with the montage you want to play. 

:::

## Animations still not working

If the animations still don't work after setting the tag and animation blueprint, make sure the montage you are using is supported by your character.

You can accidentally select unsupported animations and not warn you about it.