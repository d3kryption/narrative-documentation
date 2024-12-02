---
sidebar_label: 'Attachment'
---

# Attachment

In order for Pro to attach weapons to the character, specific sockets need to be setup in order for this to be done.

Below is the sockets that need to be created and their location within the Skeleton Tree.

:::note

Depending on how your character bones are rotated, the parents, locations and rotations here **may not work** for your specific character. You will have to make considerations for the sockets to work.

:::

## Sockets

| Socket Name         | Parent Bone | Location                        | Rotation                   | Scale                        | Usage                                     |
|---------------------|-------------|---------------------------------|----------------------------|------------------------------|-------------------------------------------|
| weapon_r            | hand_r      | X:0<br/>Y:0<br/>Z:0             | P:0<br/>Y:180<br/>R:0      | X:1<br/>Y:1<br/>Z:1          | The main attach point for the right hand. |
| weapon_l            | hand_l      | X:0<br/>Y:0<br/>Z:0             | P:0<br/>Y:180<br/>R:0      | X:1<br/>Y:1<br/>Z:1          | The main attach point for the left hand.  |
| weapon_r_muzzle     | hand_r      | X:0<br/>Y:0<br/>Z:0             | P:0<br/>Y:180<br/>R:0      | X:1<br/>Y:1<br/>Z:1          | Socket to attach muzzle flash to.         |
| WeaponAttach        | hand_r      | X:-5.9<br/>Y=2.86<br/>Z=-0.98   | P:0<br/>Y=90<br/>R=9.9     | X:1.25<br/>Y:1.25<br/>Z:1.25 | Alternative attach point for right hand.  |
| Socket_Holster      | pelvis      | X:4.37<br/>Y:-4.1<br/>Z:-19.5)  | P:-70<br/>Y=10.1<br/>R=100 | X:1.25<br/>Y:1.25<br/>Z:1.25 | Side arm attach point.                    |
| Socket_Holster_Back | spine_03    | X:-9.9<br/>Y=-17.7<br/>Z:-16.7) | P:0<br/>Y:100<br/>R:-30    | X:1.25<br/>Y:1.25<br/>Z:1.25 | Back attach point.                        |
| foot_l_Socket       | foot_l      | X:0<br/>Y:0<br/>Z:0             | P:0<br/>Y:0<br/>R:0        | X:1<br/>Y:1<br/>Z:1          | The main attach point for the left foot.  |
| foot_r_Socket       | foot_r      | X:0<br/>Y:0<br/>Z:0             | P:0<br/>Y:0<br/>R:0        | X:1<br/>Y:1<br/>Z:1          | The main attach point for the right foot. |

## Weapon positions

If your weapons are incorrectly positioned or not attached to the character, you need to set up the sockets above.