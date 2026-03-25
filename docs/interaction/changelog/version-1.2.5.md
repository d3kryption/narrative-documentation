---
sidebar_label: '1.2.5 Code Changes'
---

# 1.2.5 Code Changes

### NarrativeInteraction.uplugin

```cpp title="/NarrativeInteraction/NarrativeInteraction.uplugin" showLineNumbers

...

// removed-start
	"VersionName": "1.2.4",
// removed-end
// added-start
	"VersionName": "1.2.5",
// added-end

...


```

### InteractableComponent.h

```cpp title="/NarrativeInteraction/Source/NarrativeInteraction/Public/InteractableComponent.h" showLineNumbers

...

 	bool CanInteract(class APawn* Interactor, class UNarrativeInteractionComponent* InteractionComp, FText& OutErrorText);
 	virtual bool CanInteract_Implementation(class APawn* Interactor, class UNarrativeInteractionComponent* InteractionComp, FText& OutErrorText);
 
// removed-start
protected:
// removed-end
// added-start
public:
// added-end

...



```