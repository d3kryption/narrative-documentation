---
sidebar_label: 'Functions'
sidebar_position: 0
---

# Functions

## Activated

If this item is activatable, this will be called when the item is activated

## Can Be Removed

Allows you to define whether the item can be dropped, nice for if you want to implement special quest items that cannot be dropped for example

## Can Use

Allows you to define whether the item can be used or not.

## Deactivated

If this item is activatable, this will be called when the item is deactivated

## Get Parsed Description

Return the description, with any string variables parsed out

## Get Raw Description

Return the description - allows BPs to override this in case you want automatically dynamically generated descriptions based on the items properties.

## Get String Variable

Allows you to use variables in your items description, ie Hello Item Name. Simply override this function, then check the value of variable name and return whatever value you like!

## Mark Dirty For Replication

Mark the object as needing replication. We must call this internally after modifying any replicated properties

## On Use

Called when the item is used. This is implemented in Blueprint.

## Set Active

Set the active status of the item. The item will be activated or deactivated based on the value of **bNewActive**. If **bForce** is true, the item will be set to active or inactive regardless of current state.
