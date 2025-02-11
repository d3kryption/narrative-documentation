---
sidebar_label: 'Character Appearance'
---

# Character Appearance

The Character Appearance is a data asset that allows you to define how a character looks.

It lets you state all the meshes, materials, morph targets and grooms that build it up.

The appearance asset has been built in a way that whether you use modular or combined characters, simply adding the Meshes Key (gameplay tag) to the mesh, Narrative will find the correct mesh.

![character-appearence-dataasset.webp](//img/inventory/character-appearence-dataasset.webp)

## Properties

| Variable Name   | Type                                                                                                     | Description                                                                 |
|-----------------|----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| Form Tag        | FGameplayTag                                                                                             | Tag representing the form selected in the character creator (race, gender). |
| Unarmed Anim BP | TSubclassOf\<UAnimInstance\>                                                                             | The animation blueprint to use when the character is unarmed.               |
| Meshes          | TMap\<FGameplayTag, [FCharacterCreatorAttribute](./character-appearance.md#fcharactercreatorattribute)\> | Map of mesh attributes for specific slots.                                  |
| Grooms          | TMap\<FGameplayTag, [FCharacterCreatorAttribute](./character-appearance.md#fcharactercreatorattribute)\> | Map of groom attributes for specific slots.                                 |
| Morphs          | TArray\<FCreatorMeshMorph\>                                                                              | Morph targets to apply to the mesh.                                         |
| Scalar Values   | TMap\<FGameplayTag, float\>                                                                              | Global scalar values that morphs and meshes can reference.                  |
| Vector Values   | TMap\<FGameplayTag, FLinearColor\>                                                                       | Global vector values that morphs and meshes can reference.                  |

## FCharacterCreatorAttribute

| Variable Name     | Type                                                                             | Description                                                    |
|-------------------|----------------------------------------------------------------------------------|----------------------------------------------------------------|
| Mesh              | TObjectPtr\<USkeletalMesh\>                                                      | The skeletal mesh to apply to the character.                   |
| b Use Leader Pose | bool                                                                             | Indicates if the mesh should follow the leader pose component. |
| Mesh Materials    | TArray\<[FCreatorMeshMaterial](./character-appearance.md#fcreatormeshmaterial)\> | Materials to apply to the mesh, including parameter overrides. |
| Morphs Array      | TArray\<FCharacterCreatorAttribute Morph\>                                       | Array of morph attributes for character customization.         |

## FCreatorMeshMaterial

| Variable Name | Type                   | Description                                            |
|---------------|------------------------|--------------------------------------------------------|
| Material      | TObjectPtr\<Material\> | The skeletal mesh to apply to the character.           |
| Scalar Tag ID | FGameplayTag           | Tag to retrieve scalar values for material parameters. |
| Vector Tag ID | FGameplayTag           | Tag to retrieve vector values for material parameters. |
