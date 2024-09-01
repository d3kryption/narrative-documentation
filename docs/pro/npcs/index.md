---
sidebar_label: 'NPCs'
---

# NPCs

Narrative Pro has a new NPC Subsystem which handles the spawning, creation, finding and all properties for NPCs.

All NPC details are stored as data assets, then spawned and managed by the Subsystem.

![npc-data-assets.png](..%2F..%2F..%2Fstatic%2Fimg%2Fpro%2Fnpcs%2Fnpc-data-assets.png)

## Creating a new NPC

To create a new NPC, Narrative Pro comes packaged with a data asset type called ``.

Open Your **Content Drawer** -> Go to the folder where you want to store **NPC Data Assets** -> Right Click -> **Miscellaneous** -> **Data Asset**

![npc-new-data-asset.png](..%2F..%2F..%2Fstatic%2Fimg%2Fpro%2Fnpcs%2Fnpc-new-data-asset.png)

Select `NPCDefinition` and name it after your NPC. It will automatically populate some of the information based on the file name.

![npc-new-data-asset-autofill.png](..%2F..%2F..%2Fstatic%2Fimg%2Fpro%2Fnpcs%2Fnpc-new-data-asset-autofill.png)

## Spawning an NPC

Using the NPC Manager you can spawn NPCs by getting the **Narrative NPC Subsystem** -> **Spawn NPC**

![npc-spawning.png](..%2F..%2F..%2Fstatic%2Fimg%2Fpro%2Fnpcs%2Fnpc-spawning.png)

Another method of spawning NPC's into the world is to use [Settlements](../settlements)


## Data Asset Properties

| Name                    | Type                                                          | Description                                                                                                                                                                                                 |
|-------------------------|---------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| NPCID                   | FName                                                         | FName ID for this NPC                                                                                                                                                                                       |
| NPCName                 | FText                                                         | The name of this NPC. Will be used for the interaction and navigation markers.                                                                                                                              |
| Faction                 | ObjectPtr\<class [UFactionDefinition](../factions/index.md)\> | The NPC's faction, if one applies.                                                                                                                                                                          |
| bAllowMultipleInstances | bool                                                          | Is this NPC unique, or can we spawn multiple of them? Main characters, for example, generally only want a max of one spawned at a time, whilst a generic bandit might have as many instances as we want.    |
| bInvulnerable           | bool                                                          | If true, we'll apply the Narrative.State.Invulnerable tag to this NPC by default - it can be removed if needed.                                                                                             |
| UniqueNPCGUID           | FGuid                                                         | If this NPC is unique, we'll use this as the NPC's save system GUID. Since there is only one unique GUID defined here, this will nicely guarantee unique NPCs only ever have 1 save record created per NPC. |
| NPCClassPath            | TSoftClassPtr\<[ANarrativeNPCCharacter](./index.md)\>         | The default class to create when spawning this NPC.                                                                                                                                                         |
| Dialogue                | TSoftClassPtr\<[UDialogue](../dialogue/index.md)\>            | The dialogue that should play when we interact with this NPC.                                                                                                                                               |
| TaggedDialogues         | TArray\<[FTaggedDialogue](../dialogue/tagged-dialogue.md)\>   | The NPC's tagged dialogues; these are essentially dialogue, usually free movement that can be kicked off via a tag "TaggedDialogue.Taunt, TaggedDialogue.Greet, etc."                                       |
| bIsVendor               | bool                                                          | Whether this NPC's inventory should be a vendor inventory.                                                                                                                                                  |
| TradingCurrency         | int32                                                         | Default currency this character should have in their inventory.                                                                                                                                             |
| TradingItemLoadout      | TArray\<[FLootTableRoll](../inventory/loot-tables.md)\>       | The items we should grant the character by default.                                                                                                                                                         |
| ShopFriendlyName        | FText                                                         | The name of the vendor's shop, if this NPC is a vendor.                                                                                                                                                     |
