---
sidebar_label: 'Skill Tree'
---

# Skill Tree

Linked video: [Tutorial: Making Skill Trees in Narrative Pro](https://www.youtube.com/watch?v=Yiqe89OLP-g)

Narrative Pro features a fully functional Skill Tree system that allows you to create and manage skill trees for your actors. 

This system provides a flexible and customizable way to define and track skills, abilities, and upgrades for your characters and NPCs.

The built-in skill tree is based on games such as Skyrim or Fallout with branching skills.

![SkillTrees.webp](//img/pro/skill-trees/SkillTrees.webp)

:::note
**Skills** and **Perks** are different. A **skill** is a base group of abilities that can be upgraded with perks such as Strength, Speech, Sneak. They have also shown as tabs at the top of the skill tree UI.

A perk is the ability you gain from upgrading a skill such as Stronger melee, harder sight detection when in stealth, better barter.
:::

## Component

The skill tree component is located by default on the player state called the `Skill tree Component`.

![SkillTreeComponent.webp](//img/pro/skill-trees/SkillTreeComponent.webp)

The component stores the `Skill Tree Skills` in a custom array of Skills. 

These are your base skills such as Melee, Sneak, Speech.

![SkillTreeSkills.png](//img/pro/skill-trees/SkillTreeSkills.png)

Each of these skills store `Perks` which are the upgrades for that skill.

![SkillTreePerks.png](//img/pro/skill-trees/SkillTreePerks.png)

## Branched skills

These branched skills allow you to create complex skill trees with multiple paths and prerequisites. 

The `Linked To` field allows you to link perks together to lock perks behind other perks.

![SkillTreeLinkedTo.png](//img/pro/skill-trees/SkillTreeLinkedTo.png)

## Skill UI placement

You can manually specify where the skill UI should be placed in the widget by settings its `Perk Coords` field. Narrative will handle automatically linking the branching lines.

![SkillTreeUIPlacement.webp](//img/pro/skill-trees/SkillTreeUIPlacement.webp)

## Saving & Loading

The Skill Tree component is saved and loaded automatically when you save/load your game so you don't have to worry about manually sorting it.