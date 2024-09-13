---
sidebar_label: 'Loading'
---

# Loading

## Disable auto load

To disable the autoloading when you spawn into a world, you can modify the C++ file:

```
Plugins/NarrativePro/Source/NarrativeSaveSystem/Private/Subsystems/NarrativeSaveSubsystem.cpp
```

Inside the function `OnWorldBeginPlay`, remove or comment out the line 

```

SlotString = "NarrativeSave0";

```

## C++

```
Plugins/NarrativePro/Source/NarrativeSaveSystem/Private/Subsystems/NarrativeSaveSubsystem.cpp
```