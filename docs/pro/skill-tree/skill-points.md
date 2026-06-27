---
sidebar_label: 'Skill Points'
---

# Skill Points

If you are using the Skill Tree, you can use Skill Points to increase your skill level by buying [perks](./adding-new-perks.md).

There are a few ways to gain skill points.

1. When levelling up your character, you will gain 1 skill point per level. (Inside the player character, Listen for Level Change event)
![SkillTree_SkillPoints_ListenForLevel.webp](//img/pro/skill-trees/SkillTree_SkillPoints_ListenForLevel.webp)

2. You can grant the player a skill point by using the [Narrative Event](../events/index.md) `Skill Tree Gain Skill Point` event

3. You can manually call the `Give Skill Points` function on the [Skill Tree Component](./index.md)
![SkillTree_AddPerk_GiveSkillPoints.webp](//img/pro/skill-trees/SkillTree_AddPerk_GiveSkillPoints.webp)