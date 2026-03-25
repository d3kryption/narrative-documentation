---
sidebar_label: '3.7.2 Code Changes'
---

# 3.7.2 Code Changes

### Narrative.uplugin

```cpp title="/Narrative/Narrative.uplugin" showLineNumbers

...

// removed-start
	"VersionName": "3.7.0",
// removed-end
// added-start
	"VersionName": "3.7.2",
// added-end

...

```

### NC_HasCompletedDataTask.uasset

- **UPDATED (asset)**


### W_NarrativeMenu_Dialogue.uasset

- **UPDATED (asset)**


### BP_Narrative3Overlay.uasset

- **UPDATED (asset)**


### Dialogue.cpp

```cpp title="/Narrative/Source/Narrative/Private/Dialogue.cpp" showLineNumbers

    if (OwningPawn->GetDistanceTo(SpeakerAvatar) > EndDialogueDist)
    {
// added-start
        // Clean up dialogue
        if (DialogueAudio)
        {
            DialogueAudio->Stop();
        }

        StopDialogueAnimation();

        SetPartyCurrentSpeaker(nullptr);
        
// added-end

...



```

### DialogueSM.cpp

```cpp title="/Narrative/Source/Narrative/Private/DialogueSM.cpp" showLineNumbers

 			//TODO consolidate the Character checking stuff into UNarrativeConditions as we're violating dont repeat yourself here - dialogue node base has something similar to this 
 			for (auto& Cond : LineToCheck.Conditions)
 			{
// added-start
				// Stop crashes when condition doesn't exist
				if (Cond)
				{
// added-end

...
					bAllConditionsPass = false;
					break;
					
					if (Cond->CheckCondition(OwningComponent->GetOwningPawn(), OwningComponent->GetOwningController(), OwningComponent) == Cond->bNot)
					{
						bAllConditionsPass = false;
						break;
					}
// added-start
                    }
// added-end
        }
    }
 


```

### NarrativeTaskManager.cpp

```cpp title="/Narrative/Source/Narrative/Private/NarrativeTaskManager.cpp" showLineNumbers

 {
 	Super::Initialize(Collection);
 
// added-start
	FAssetRegistryModule& AssetRegistryModule = FModuleManager::LoadModuleChecked<FAssetRegistryModule>("AssetRegistry");

	// Bind to the asset registry module loading to allow standalone, pie and package to all find assets
	AssetRegistryModule.Get().OnFilesLoaded().AddUObject(this, &UNarrativeTaskManager::CacheNarrativeTasks);

	// Also try immediately (works for PIE and packaged)
// added-end
// added-start
	if (NarrativeTaskMap.Num() > 0)
	{
		return; // Already cached, no need to re-run the logic
	}
// added-end

...



```