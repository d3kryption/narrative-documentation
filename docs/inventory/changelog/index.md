---
sidebar_label: 'Changelog'
---

# Changelog

## Version 2.0.1

### Features
- Updated to Unreal 5.5
- Narrative Quests & Dialogue 3.6 update integration
- 
### Bugfixes/Misc
- Fixed missing textures bug (T_Vignette, T_Marker)

## Version 2.0.0

You can see the [code changes](./version-2.0.0.md) here.

### Features
- Loot tables were added to replace the default items array allowing for much better item management
- Added DataAsset for Narrative Item Collections to bundle items
- Soft references are now used for items instead of hard references (better memory management)
- New GiveDefaultItems function added to Inventory
- Equip and unequip montages added to EquippableItems
- Added loot source to OnEndLooting
- Added gameplay tags to NarrativeItems
- Updated ItemStats from a string to a struct (statDisplayName, stringVariable)
- Added description override in blueprints to change the description on the fly
- Added bool to use the item as soon as it's added to the inventory
- Added function to set inventory name instead of variable
- Added throwable weapon slot
- Added UseSound to NarrativeItems to play a sound when used
- Vendor inventory and combined with regular inventory

### Bugfixes/Misc
- BPC_HasItem condition updated to use soft classes
- Interactable_Loot_Locked updated with soft references
- Interactable_Loot updated with soft references
- Fixed a bunch of redirectors
- Vendors won't show equipped items
- Inventory will now return false if save isn't found

### Notes:
- In the previous changelog it was mentioned that the Hotbar will be coming. We have delayed this as it just wasn't ready yet. Apologies for that.

## Version 1.7.0

### Features

-"How much would you like to drop/buy/sell/take/store?" modal dialog that opens, allowing gamepads and mouse/keyboard better control over how much of an item they want to drop
- On Gamepad, you'll now be able to scroll through an items description using the right thumbstick. This is useful for items with longer descriptions where the entire description doesn't fit inside the item inspector.
- Hotbar support
- GroomComponents (hair) will now render correct in the inventory window

### Bugfixes/Misc
-Fix issue where you could carry 1 more item than the capacity you had set in your Inventory Component****