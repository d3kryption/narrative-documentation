---
sidebar_label: 'Character Appearance'
---

# Character Appearance

The Character Appearance is a data asset that allows you to define how an NPC looks.

It lets you state all the meshes, materials and Grooms that build it up.

![character-appearence-dataasset.png](..%2F..%2F..%2F..%2F..%2Fstatic%2Fimg%2Finventory%2Fcharacter-appearence-dataasset.png)

## Properties

| Variable Name           | Type                             | Description                                             |
|-------------------------|----------------------------------|---------------------------------------------------------|
| Base Mesh Override      | USkeletalMesh*                   | The base character mesh to override, defaults to Manny. |
| Head Mesh               | USkeletalMesh*                   | The skeletal mesh for the character's head.             |
| Head Mesh Materials     | TArray\<UMaterialInterface*\>    | The materials applied to the head mesh.                 |
| Torso Mesh              | USkeletalMesh*                   | The skeletal mesh for the character's torso.            |
| Torso Mesh Materials    | TArray\<UMaterialInterface*\>    | The materials applied to the torso mesh.                |
| Legs Mesh               | USkeletalMesh*                   | The skeletal mesh for the character's legs.             |
| Legs Mesh Materials     | TArray\<UMaterialInterface*\>    | The materials applied to the legs mesh.                 |
| Feet Mesh               | USkeletalMesh*                   | The skeletal mesh for the character's feet.             |
| Feet Mesh Materials     | TArray\<UMaterialInterface*\>    | The materials applied to the feet mesh.                 |
| Body Mesh               | USkeletalMesh*                   | The skeletal mesh for the character's body.             |
| Body Mesh Materials     | TArray\<UMaterialInterface*\>    | The materials applied to the body mesh.                 |
| Helmet Mesh             | USkeletalMesh*                   | The skeletal mesh for the character's helmet.           |
| Helmet Mesh Materials   | TArray\<UMaterialInterface*\>    | The materials applied to the helmet mesh.               |
| Hair Groom              | TObjectPtr\<UGroomAsset\>        | The groom asset for the character's hair.               |
| Hair Groom Binding      | TObjectPtr\<UGroomBindingAsset\> | The groom binding asset for the character's hair.       |
| Beard Groom             | TObjectPtr\<UGroomAsset\>        | The groom asset for the character's beard.              |
| Beard Groom Binding     | TObjectPtr\<UGroomBindingAsset\> | The groom binding asset for the character's beard.      |
| Fuzz Groom              | TObjectPtr\<UGroomAsset\>        | The groom asset for any facial fuzz on the character.   |
| Fuzz Groom Binding      | TObjectPtr\<UGroomBindingAsset\> | The groom binding asset for the facial fuzz.            |
| Moustache Groom         | TObjectPtr\<UGroomAsset\>        | The groom asset for the character's moustache.          |
| Moustache Groom Binding | TObjectPtr\<UGroomBindingAsset\> | The groom binding asset for the character's moustache.  |
| Eyebrow Groom           | TObjectPtr\<UGroomAsset\>        | The groom asset for the character's eyebrows.           |
| Eyebrow Groom Binding   | TObjectPtr\<UGroomBindingAsset\> | The groom binding asset for the character's eyebrows.   |
| Eyelash Groom           | TObjectPtr\<UGroomAsset\>        | The groom asset for the character's eyelashes.          |
| Eyelash Groom Binding   | TObjectPtr\<UGroomBindingAsset\> | The groom binding asset for the character's eyelashes.  |
