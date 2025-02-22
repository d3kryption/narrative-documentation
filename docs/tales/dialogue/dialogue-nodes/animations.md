---
sidebar_label: 'Animations'
---

# Animations

Each dialogue node contains two variables for playing animations on your characters: **Body Animation** and **Facial Animation**.

![dialogue-animations.webp](//img/dialogue/line/dialogue-animations.webp)

## Setup

To play animations on the correct skeletal meshes you need to add a tag to the correct body-part so Narrative knows where to play the animation.

:::note

Some meshes do not have a split between the face and body. See [Single mesh animations](./animations.md#single-mesh-animations) for a workaround.

:::

### Facial animation

To set up the facial skeletal meshes, find your skeletal mesh component that will play your facial animation. Add an component tag of:

```ini
Face
``` 
![dialogue-animation-face-tag.webp](//img/dialogue/line/dialogue-animation-face-tag.webp)

:::note

Narrative follows the Unreal standard of facial animations only moving the face bones / shape keys. The neck should not be part of this animation.

If you need to change this behaviour, you will need to modify your Animation Blueprint to support this.

:::

### Body animation

To set up the Body skeletal meshes, find your skeletal mesh component that will play your body animation. Add an component tag of:

```ini
Body
``` 

![dialogue-animation-body-tag.webp](//img/dialogue/line/dialogue-animation-body-tag.webp)

## Animation Blueprint changes

By default Unreal does not play Animation Montages on default skeletal meshes. 

Create an Animation Blueprint by Right-clicking in your **Content Drawer** -> **Animation** -> **Animation Blueprint**.

Open the **AnimGraph** and add a DefaultSlot node at some stage of the animation.

![dialogue-animation-blueprint-defualtslot.webp](//img/dialogue/line/dialogue-animation-blueprint-defualtslot.webp)

:::note

Most of the time it's safe to add right before the Output pose, so it overwrites all animations with the montage you want to play. 

:::

## Animations still not working

If the animations still don't work after setting the tag and animation blueprint, make sure the montage you are using is supported by your character.

You can accidentally select unsupported animations and not warn you about it.

## Single mesh animations

To play multiple animations on a single mesh, you need to set up [Animation Slots](https://dev.epicgames.com/documentation/en-us/unreal-engine/animation-slots-in-unreal-engine).

Animation Slots allow you to specify on animations, which bones they affect instead of changing the entire meshes bones.

### Animation slot setup

Open up your facial animation and set up a new animation slot called **HeadSlot** from the **anim slot manager**.

![animation-slot-manager-new-slot](https://d1iv7db44yhgxn.cloudfront.net/documentation/images/3b70aebe-3107-4d02-a559-1ec0ba630619/create1.png)

Now open your animation montage and set teh **Montage DefaultGroup** to your new Animation slot. (we are using UpperBody here)

![animation-slot-manager-usage](https://d1iv7db44yhgxn.cloudfront.net/documentation/images/824c8fc2-06ec-451d-a355-1f020d55ff98/montage1.png)

### Animation blueprint setup

Modify your animation blueprint to make the Facial animation slot play after the default slot (used for the body).

![animation-slot-animation-blueprint](https://d1iv7db44yhgxn.cloudfront.net/documentation/images/4626e771-3829-4f7d-bcbe-dca901a5a341/usage2.png)

Make sure to set it to your new Facial slot.

### Playing both animations

Finally, we need to tell Narrative to play both animations on the same mesh. 

By default, Narrative stops any existing montages then plays the one that is required. This functionality won't work, but it can be overridden.

Open your [master dialogue](../master-dialogue.md) and override the [PlayDialogueAnimation](../functions.md#play-dialogue-animation) function.

Get access to your speakers mesh, then play both facial and body montages on this mesh. 

<iframe src="https://blueprintue.com/render/v2vdcyzu/" width="100%" height="400" scrolling="no" allowfullscreen></iframe>

If you have set up your animation slots correctly, it should play both animations. 