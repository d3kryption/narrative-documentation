---
sidebar_label: 'Saving'
---

# Saving

The saving system built into Narrative Pro features a full save and load system to load any actor you require in the game.

The save system has a function UI to allow you to create, save, load and delete save game files.

## Get the save system

When you are wanting to save or load, you can get the **Narrative Save Subsystem**. This gives you access to all the functions you need to handle saving.

![save-system.png](..%2F..%2F..%2Fstatic%2Fimg%2Fsaving%2Fsave-system.png)

## Save an actor

To save an actor using Narrative Pro is really easy.

Firstly, open your actors blueprint and add the interface: 

```
Narrative Savable Actor
```

Now you can populate a few main functions:

### Set Actor GUID

Each savable actor requires a unique ID in order to create this uniqueness. A [GUID](https://devblogs.microsoft.com/oldnewthing/20080627-00/?p=21823) is a datatype that can give us this randomness.

![saved-guid.png](..%2F..%2F..%2Fstatic%2Fimg%2Fsaving%2Fsaved-guid.png)

:::note

You will need to create the variable `SavedGuid`. It can be called anything, but you need to set it from the **Event SetActor GUID**

:::

### Get Actor GUID

Simply returns the GUID created above. Used to find the correct actor to load details into.

![load-guid.png](..%2F..%2F..%2Fstatic%2Fimg%2Fsaving%2Fload-guid.png)

### Load Single Actor

The **LoadSingleActor** function tells the **Narrative Save Subsystem** to [load](./loading.md) a specific actors' data. Commonly added to EventBeginPlay.

![load-single-actor.png](..%2F..%2F..%2Fstatic%2Fimg%2Fsaving%2Fload-single-actor.png)

### Save Single Actor

The **SingleSingleActor** function tells the **Narrative Save Subsystem** to save a specific actors' data. Commonly added to EventEndPlay.

![save-single-actor.png](..%2F..%2F..%2Fstatic%2Fimg%2Fsaving%2Fsave-single-actor.png)

## C++

```
Plugins/NarrativePro/Source/NarrativeSaveSystem/Private/Subsystems/NarrativeSaveSubsystem.cpp
```