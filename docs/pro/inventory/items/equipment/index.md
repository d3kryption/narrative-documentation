---
sidebar_label: 'Equipment'
---

# Equipment

The equipment component is the component to use if you would like to attach items directly to your characters. Used for armor, weapons or any other styles of equipment you would want to use.

## Usage

To start using the equipment component, simply add the equipment component to your character that requires equipable items.

![equipment-component.png](/img/inventory/equipment-component.png)

Typically, equipping items works best if your mesh is split into multiple segments. Commonly the split is Feet, Legs, Body and Face.

We need to tell the equipment component where to spawn each item once it's equipped.

Inside your event BeginPlay, drag the equipment component in and choose the Initialize function. Connect your leader pose to the Leader Pose Component property.

:::note

If you are using a split mesh, you will have set a leader pose that all other meshes will follow. Typically this is an empty Mesh actor or a body.

:::

:::note

Earlier versions of Unreal Engine called the Leader Pose the Master Pose.

:::

![equipment-init.png](/img/inventory/equipment-init.png)

Finally, you need to tell the equipment which meshes are bound to which equipment slots. Drag out from the Clothing Meshes property and choose Make Map.

Now for each equipable slot you have, set the key to the slot type and the mesh to the value.

In this example, we have added a torso, legs and feet equipable slots.

![equipnment-map.png](/img/inventory/equipnment-map.png)

## Auto equip

Equitable items when added to an inventory have built in code that automatically equips them when added. 

This is done via the function [Should use on add](./functions.md#should-use-on-add)
