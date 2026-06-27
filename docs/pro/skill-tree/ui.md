---
sidebar_label: 'UI'
---

# UI

The UI for the skill tree is called `W_NarrativeMenu_Skills`. 

![SkillTree_UIWidget.webp](//img/pro/skill-trees/SkillTree_UIWidget.webp)

### How it works

The first part of the code initializes the skill tree, cleans anything up, then loops over all the skill tree skills.

That creates a `WBP_SkillButton` for the base skills.

It then loops over all the perks for each skill and creates further `WBP_SkillButton`'s for each perk.