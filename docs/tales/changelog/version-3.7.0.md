---
sidebar_label: '3.7.0 Code Changes'
---

# 3.7.0 Code Changes



### Narrative.uplugin

```cpp title="/Narrative/Narrative.uplugin" showLineNumbers

 {
 	"FileVersion": 3,
 	"Version": 3,
// removed-start
	"VersionName": "3.6.1",
// removed-end
// added-start
	"VersionName": "3.7.0",
// added-end

...

// removed-start
	"SupportURL": "mailto:contact@reubs.io",
// removed-end
// added-start
	"SupportURL": "mailto:contact@narrativetools.io",
// added-end
 	"EngineVersion": "5.1.0",
 	"CanContainContent": true,
 	"Installed": false,
// added-start
			],
			"Dependencies": [
				"GameplayTags"
// added-end
// added-start
		},
		{
			"Name": "NarrativePreEditor",
			"Type": "Editor",
			"LoadingPhase": "PreDefault"
// added-end

...
```

### NarrativeDialogueEditor.Build.cs

```cpp title="/Narrative/Source/NarrativeDialogueEditor/NarrativeDialogueEditor.Build.cs" showLineNumbers
 using UnrealBuildTool;
 
// added-start
                "BlueprintGraph",
                "GraphEditor",
                "GameplayTags",
// added-end

...

// removed-start
                "UMG"
            }
// removed-end
// added-start
                "UMG",
                "ToolMenus", "NarrativePreEditor"
			}
// added-end
 			);
```

### DialogueBlueprint.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Public/DialogueBlueprint.cpp" showLineNumbers

 #include "DialogueBlueprint.h"

...

// removed-start
#include "DialogueSM.h"
// removed-end
 #include "DialogueBlueprintGeneratedClass.h"
 
 UDialogueBlueprint::UDialogueBlueprint()


```

### IDialogueEditor.h

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Public/IDialogueEditor.h" showLineNumbers
#pragma once
 
...

// removed-start
};// removed-end
// added-start
	// called when the dialogue icon is clicked on
	virtual void JumpOrAddDialogueNode(FName NodeID) = 0;
	
};
// added-end


```

### DialogueBlueprint.h

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Public/DialogueBlueprint.h" showLineNumbers
#pragma once
 
...

// removed-start
	virtual bool CanAlwaysRecompileWhilePlayingInEditor() const override { return true; }
// removed-end
// added-start
	virtual bool CanAlwaysRecompileWhilePlayingInEditor() const override { return false; }
// added-end
 
 	virtual void PostLoad() override;
 	virtual bool IsValidForBytecodeOnlyRecompile() const override { return false; }


```

### DialogueEditorModes.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueEditorModes.cpp" showLineNumbers
#include "DialogueEditorModes.h"
// removed-start
#include "DialogueEditorTabs.h"
#include "DialogueEditorToolbar.h"
#include "DialogueEditorDetails.h"
// removed-end
 #include "DialogueEditorTabFactories.h"
// removed-start
#include "BlueprintEditorTabs.h"
// removed-end

...



```

### DialogueGraphNode_NPC.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueGraphNode_NPC.cpp" showLineNumbers
 #include "DialogueGraphNode_NPC.h"
// removed-start
#include "DialogueGraph.h"
// removed-end
 #include "EdGraph/EdGraphSchema.h"

...



```

### DialogueGraphEditor.h

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueGraphEditor.h" showLineNumbers
#pragma once
 
...

// removed-start
#include "UObject/NoExportTypes.h"
// removed-end
 #include "Misc/NotifyHook.h"
 #include "EditorUndoClient.h"
 #include "Widgets/SWidget.h"
// added-start
	void SwitchToQuestAsset();
	bool CanSwitchToQuestAsset();

// added-end

...

// removed-start
	/** Check to see if we can create a new state node */
	bool CanCreateNewState() const;

	/** Check to see if we can create a new action node */
	bool CanCreateNewAction() const;

	/** Create the menu used to make a new state node */
	TSharedRef<SWidget> HandleCreateNewStateMenu() const;

	/** Create the menu used to make a new action node */
	TSharedRef<SWidget> HandleCreateNewActionMenu() const;

	/** Handler for when a node class is picked */
	void HandleNewNodeClassPicked(UClass* InClass) const;

// removed-end
 	virtual void OnCreateComment() override;
 
// added-start
	// adds new nodes to the graph from given assets
	void AddNodesFromAssets(const TArray<FAssetData>& Assets, const FVector2D& GraphPosition, UEdGraph* DestinationGraph, UEdGraphNode* SelectedNode) const;

	void SetGraphEditable(const bool Editable);
	bool IsGraphEditable() const;

	/* IDialogueEditor */
	virtual void JumpOrAddDialogueNode(FName NodeID) override;
	/* IDialogueEditor */
	
// added-end
 protected:
// added-start

	void OnBeginPIE(bool bSimulating);
	void OnEndPIE(bool bSimulating);
// added-end
// added-start


#if WITH_EDITORONLY_DATA
	/// debugger instance for this graph
	TSharedPtr<class FDialogueDebugger> Debugger;
#endif
// added-end

...



```

### DialogueEditorSettings.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueEditorSettings.cpp" showLineNumbers
 
 #include "DialogueEditorSettings.h"


```

### DialogueConnectionDrawingPolicy.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueConnectionDrawingPolicy.cpp" showLineNumbers
 #include "DialogueConnectionDrawingPolicy.h"
// removed-start
#include "QuestSM.h"
// removed-end
 #include "NarrativeDialogueSettings.h"
// removed-start
#include "DialogueGraphNode_NPC.h"
// removed-end
// added-start
#if ENGINE_MAJOR_VERSION == 5 && ENGINE_MINOR_VERSION >= 6
using FGraphLocationType = FVector2f;
#else
using FGraphLocationType = FVector2D;
#endif
// added-end

...

// removed-start
FVector2D FDialogueGraphConnectionDrawingPolicy::ComputeSplineTangent(const FVector2D& Start, const FVector2D& End) const
// removed-end
// added-start
FGraphLocationType FDialogueGraphConnectionDrawingPolicy::ComputeSplineTangent(const FGraphLocationType& Start, const FGraphLocationType& End) const
// added-end
 {
 
 	if (const UNarrativeDialogueSettings* DialogueSettings = GetDefault<UNarrativeDialogueSettings>())

...

// removed-start
		const FVector2D DeltaPos = End - Start;
// removed-end
// added-start
		const FGraphLocationType DeltaPos = End - Start;
// added-end
 		const bool bGoingForward = DialogueSettings->bEnableVerticalWiring ? DeltaPos.Y >= 0.f : DeltaPos.X >= 0.0f;
 
 		if (const UDialogueEditorSettings* DialogueEditorSettings = GetDefault<UDialogueEditorSettings>())

...

// removed-start
				return Result.GetRotated(90.f);
// removed-end
// added-start
				return FGraphLocationType(Result.GetRotated(90.f));
// added-end
 			}
 			else
 			{
// removed-start
				return Result;
// removed-end
// added-start
				return FGraphLocationType(Result);
// added-end

...

// removed-start
void FDialogueGraphConnectionDrawingPolicy::DrawConnection(int32 LayerId, const FVector2D& Start, const FVector2D& End, const FConnectionParams& Params)
// removed-end
// added-start
void FDialogueGraphConnectionDrawingPolicy::DrawConnection(int32 LayerId, const FGraphLocationType& Start, const FGraphLocationType& End, const FConnectionParams& Params)
// added-end
 {
 	if (const UNarrativeDialogueSettings* DialogueSettings = GetDefault<UNarrativeDialogueSettings>())
 	{

...

// removed-start
			FVector2D Halfway = (Start + End) / 2;
// removed-end
// added-start
			FGraphLocationType Halfway = (Start + End) / 2;
// added-end
 
 			if (DialogueSettings->bEnableVerticalWiring)
 			{

...

// removed-start
				FVector2D ArrowPoint = Halfway - ArrowRadius * 2.f;
// removed-end
// added-start
				FGraphLocationType ArrowPoint = Halfway - ArrowRadius * 2.f;
// added-end
 
 				const float Angle = DialogueSettings->bEnableVerticalWiring ? -HALF_PI : PI;
 

...

// removed-start
					TOptional<FVector2D>(),
// removed-end
// added-start
					TOptional<FGraphLocationType>(),
// added-end
 					FSlateDrawElement::RelativeToElement,
 					Params.WireColor
 				);

...

// removed-start
			//Pivot for wires isnt correct so shift it, kinda hacky but works so meh
			if (DialogueSettings->bEnableVerticalWiring)
			{
				FConnectionDrawingPolicy::DrawConnection(LayerId, Start - FVector2D(12.f * ZoomFactor, 0.f), End + FVector2D(16.f * ZoomFactor, 0.f), Params);
			}
			else
			{
				FConnectionDrawingPolicy::DrawConnection(LayerId, Start, End, Params);
			}
// removed-end
// added-start
			FConnectionDrawingPolicy::DrawConnection(LayerId, Start, End, Params);
// added-end
 		}
 	}
 
// added-start


void FDialogueGraphConnectionDrawingPolicy::DrawPreviewConnector(const FGeometry& PinGeometry, const FGraphLocationType& StartPoint, const FGraphLocationType& EndPoint, UEdGraphPin* Pin)
{
	bool bDrawVerticalWiring = false;

	if (const UNarrativeDialogueSettings* DialogueSettings = GetDefault<UNarrativeDialogueSettings>())
	{
		 bDrawVerticalWiring = DialogueSettings->bEnableVerticalWiring;
	}

	FGraphLocationType AdjustedStartPoint = StartPoint;

	if (bDrawVerticalWiring)
	{
		AdjustedStartPoint.X -= PinGeometry.GetDrawSize().X / 2;
		AdjustedStartPoint.Y -= PinGeometry.GetDrawSize().Y / 2;
	}
	
	FConnectionDrawingPolicy::DrawPreviewConnector(PinGeometry, AdjustedStartPoint, EndPoint, Pin);
}

void FDialogueGraphConnectionDrawingPolicy::DrawSplineWithArrow(const FGeometry& StartGeom, const FGeometry& EndGeom, const FConnectionParams& Params)
{
	bool bDrawVerticalWiring = false;

	if (const UNarrativeDialogueSettings* DialogueSettings = GetDefault<UNarrativeDialogueSettings>())
	{
		 bDrawVerticalWiring = DialogueSettings->bEnableVerticalWiring;
	}

	if (bDrawVerticalWiring)
	{

		const FGraphLocationType StartPoint = FNarrativeGeometryHelper::HorizontalBottomOf(StartGeom);
		const FGraphLocationType EndPoint = FNarrativeGeometryHelper::HorizontalTopOf(EndGeom);

		FConnectionDrawingPolicy::DrawSplineWithArrow(StartPoint, EndPoint, Params);
	}
	else
	{
		//@TODO: These values should be pushed into the Slate style, they are compensating for a bit of
		// empty space inside of the pin brush images.
		const float StartFudgeX = 4.0f;
		const float EndFudgeX = 4.0f;
		const FGraphLocationType StartPoint = FGeometryHelper::VerticalMiddleRightOf(StartGeom) - FVector2D(StartFudgeX, 0.0f);
		const FGraphLocationType EndPoint = FGeometryHelper::VerticalMiddleLeftOf(EndGeom) - FVector2D(ArrowRadius.X - EndFudgeX, 0);

		FConnectionDrawingPolicy::DrawSplineWithArrow(StartPoint, EndPoint, Params);
	}
}

...

// added-end


```

### NarrativeDialogueEditorModule.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/NarrativeDialogueEditorModule.cpp" showLineNumbers
 #include "NarrativeDialogueEditorModule.h"
 #include "IDialogueEditor.h"

...

// removed-start
#include "DialogueEditorDetails.h"
// removed-end
 #include "DialogueEditorSettings.h"
 #include "NarrativeDialogueSettings.h"
 #include "EdGraphUtilities.h"

...

// removed-start
#include "ISettingsSection.h"
#include "ISettingsContainer.h"
#include <ISettingsCategory.h>
// removed-end
 #include "KismetCompiler.h"
 #include "Engine/World.h"
 #include "DialogueBlueprintCompiler.h"
// added-start
#include "NodeSelector/DialogueNodeSelectorPropertyCustomization.h"
#include "NodeSelector/GraphPin_DialogueNodeSelector.h"
// added-end

...

// removed-start


// removed-end
 void FNarrativeDialogueEditorModule::StartupModule()
 {
 	FDialogueEditorStyle::Initialize();
// added-start
	
	FEdGraphUtilities::RegisterVisualPinFactory(MakeShared<FPinFactoryDialogueNodeSelector>());
// added-end

...

// removed-start
	PropertyModule.RegisterCustomClassLayout("DialogueNode_NPC", FOnGetDetailCustomizationInstance::CreateStatic(&FDialogueEditorDetails::MakeInstance));
	PropertyModule.RegisterCustomClassLayout("DialogueNode_Player", FOnGetDetailCustomizationInstance::CreateStatic(&FDialogueEditorDetails::MakeInstance));
// removed-end
// added-start
	//PropertyModule.RegisterCustomClassLayout("DialogueNode_NPC", FOnGetDetailCustomizationInstance::CreateStatic(&FDialogueEditorDetails::MakeInstance));
	//PropertyModule.RegisterCustomClassLayout("DialogueNode_Player", FOnGetDetailCustomizationInstance::CreateStatic(&FDialogueEditorDetails::MakeInstance));
// added-end
 	//PropertyModule.RegisterCustomPropertyTypeLayout("SpeakerSelector", FOnGetPropertyTypeCustomizationInstance::CreateStatic(&FSpeakerSelectorCustomization::MakeInstance));
// added-start

	// Register custom property layout for FDialogueNodeSelector
	PropertyModule.RegisterCustomPropertyTypeLayout(
		"DialogueNodeSelector",
		FOnGetPropertyTypeCustomizationInstance::CreateStatic(&FDialogueNodeSelectorPropertyTypeCustomization::MakeInstance)
	);
	
// added-end
 	PropertyModule.NotifyCustomizationModuleChanged();
 
// added-start

	PropertyModule.UnregisterCustomPropertyTypeLayout("DialogueNodeSelector");

	FEdGraphUtilities::UnregisterVisualPinFactory(MakeShared<FPinFactoryDialogueNodeSelector>());
// added-end

...

// removed-start
IMPLEMENT_MODULE(FNarrativeDialogueEditorModule, NarrativeDialogueEditor)// removed-end
// added-start
IMPLEMENT_MODULE(FNarrativeDialogueEditorModule, NarrativeDialogueEditor)
// added-end


```

### DialogueEditorSettings.h

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueEditorSettings.h" showLineNumbers
#pragma once
 
...

// removed-start
#include "UObject/NoExportTypes.h"
// removed-end
 #include "DialogueEditorSettings.generated.h"
 
 /**


```

### DialogueGraphNode.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueGraphNode.cpp" showLineNumbers
 #include "DialogueGraphNode.h"
 #include "DialogueGraph.h"


```

### DialogueEditorToolbar.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueEditorToolbar.cpp" showLineNumbers
 #include "DialogueEditorToolbar.h"
 #include "Misc/Attribute.h"

...

// removed-start
#include "EditorStyleSet.h"
// removed-end
 #include "Framework/MultiBox/MultiBoxBuilder.h"
 #include "DialogueGraphEditor.h"
 #include "WorkflowOrientedApp/SModeWidget.h"
// removed-start
#include "DialogueEditorCommands.h"
// removed-end

...



```

### DialogueBlueprintCompiler.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueBlueprintCompiler.cpp" showLineNumbers
 
 #include "DialogueBlueprintCompiler.h"


```

### DialogueGraphSchema.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueGraphSchema.cpp" showLineNumbers
 #include "DialogueGraphSchema.h"
 #include "DialogueGraphNode_Root.h"
// added-start
#include "Sound/SoundBase.h"
// added-end

...

// removed-start

void UDialogueGraphSchema::SetNodePosition(UEdGraphNode* Node, const FVector2D& Position) const
// removed-end
// added-start
#if ENGINE_MAJOR_VERSION == 5 && ENGINE_MINOR_VERSION >= 6
using FGraphLocationType = FVector2f;
#else
using FGraphLocationType = FVector2D;
#endif

void UDialogueGraphSchema::SetNodePosition(UEdGraphNode* Node, const FGraphLocationType& Position) const
// added-end
 {
 	Super::SetNodePosition(Node, Position);
 
// added-start
#if ENGINE_MAJOR_VERSION == 5 && ENGINE_MINOR_VERSION >= 6
			// Graph API gives FVector2f → convert to FVector2D for your data
			DNode->DialogueNode->NodePos = FVector2D(Position);
#else
			// Pre-5.6 NodePos already matches type
// added-end
// added-start
#endif
// added-end
// added-start
void UDialogueGraphSchema::BreakPinLinks(UEdGraphPin& TargetPin, bool bSendsNodeNotifcation) const
{
	const FScopedTransaction Transaction(NSLOCTEXT("DialogueGraphSchema", "DialogueGraphSchema_BreakPinLinks", "Break Pin Links"));
	
	Super::BreakPinLinks(TargetPin, bSendsNodeNotifcation);
}

void UDialogueGraphSchema::DroppedAssetsOnGraph(const TArray<FAssetData>& Assets, const FVector2D& GraphPosition, UEdGraph* Graph) const
{
	UAssetEditorSubsystem* AssetEditorSubsystem = GEditor? GEditor->GetEditorSubsystem<UAssetEditorSubsystem>() : nullptr;
	if (!AssetEditorSubsystem)
	{
		return;
	}
	
	if (FDialogueGraphEditor* DialogueGraphEditor = static_cast<FDialogueGraphEditor*>(AssetEditorSubsystem->FindEditorForAsset(Graph->GetOuter(), true)))
	{
		DialogueGraphEditor->AddNodesFromAssets(Assets, GraphPosition, Graph, nullptr);
	}
}

void UDialogueGraphSchema::DroppedAssetsOnNode(const TArray<FAssetData>& Assets, const FVector2D& GraphPosition, UEdGraphNode* Node) const
{
	UAssetEditorSubsystem* AssetEditorSubsystem = GEditor? GEditor->GetEditorSubsystem<UAssetEditorSubsystem>() : nullptr;
	if (!AssetEditorSubsystem)
	{
		return;
	}
	
	UEdGraph* Graph = Node->GetGraph();
	if (FDialogueGraphEditor* DialogueGraphEditor = static_cast<FDialogueGraphEditor*>(AssetEditorSubsystem->FindEditorForAsset(Graph->GetOuter(), true)))
	{
		DialogueGraphEditor->AddNodesFromAssets(Assets, GraphPosition, Graph, Node);
	}
}

void UDialogueGraphSchema::DroppedAssetsOnPin(const TArray<FAssetData>& Assets, const FVector2D& GraphPosition, UEdGraphPin* Pin) const
{
	UAssetEditorSubsystem* AssetEditorSubsystem = GEditor? GEditor->GetEditorSubsystem<UAssetEditorSubsystem>() : nullptr;
	if (!AssetEditorSubsystem)
	{
		return;
	}

	UEdGraph* Graph = Pin->GetOwningNode()->GetGraph();
	if (FDialogueGraphEditor* DialogueGraphEditor = static_cast<FDialogueGraphEditor*>(AssetEditorSubsystem->FindEditorForAsset(Graph->GetOuter(), true)))
	{
		DialogueGraphEditor->AddNodesFromAssets(Assets, GraphPosition, Graph, Pin->GetOwningNode());
	}
}

void UDialogueGraphSchema::GetAssetsGraphHoverMessage(const TArray<FAssetData>& Assets, const UEdGraph* HoverGraph, FString& OutTooltipText, bool& OutOkIcon) const
{
	GetHoverMessage(Assets, OutTooltipText, OutOkIcon);
}

void UDialogueGraphSchema::GetAssetsNodeHoverMessage(const TArray<FAssetData>& Assets, const UEdGraphNode* HoverNode, FString& OutTooltipText, bool& OutOkIcon) const
{
	GetHoverMessage(Assets, OutTooltipText, OutOkIcon);
}

void UDialogueGraphSchema::GetAssetsPinHoverMessage(const TArray<FAssetData>& Assets, const UEdGraphPin* HoverPin, FString& OutTooltipText, bool& OutOkIcon) const
{
	GetHoverMessage(Assets, OutTooltipText, OutOkIcon);
}

// added-end
// added-start
void UDialogueGraphSchema::GetHoverMessage(const TArray<struct FAssetData>& Assets, FString& OutTooltipText, bool& OutOkIcon) const 
{
	int32 NumSoundWaves = 0;
	for (const FAssetData& Asset : Assets)
	{
		if (UObject* AssetObject = Asset.GetAsset(); AssetObject && AssetObject->IsA<USoundBase>())
		{
			NumSoundWaves++;
		}
	}

	if (NumSoundWaves > 0)
	{
		OutOkIcon = true;
		OutTooltipText = NumSoundWaves > 1? "Create nodes using sound waves." : "Create node using sound wave.";
	}
}

// added-end

...



```

### DialogueAssetFactory.h

- **REMOVED**

### DialogueEditorTabFactories.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueEditorTabFactories.cpp" showLineNumbers
 #include "DialogueEditorTabFactories.h"
 #include "DialogueBlueprint.h"

...

// removed-start
#include "EditorStyleSet.h"
// removed-end
 #include "Engine/Blueprint.h"
 #include "DialogueEditorStyle.h"
 #include "DialogueGraphEditor.h"


```

### AssetTypeActions_DialogueBlueprint.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/AssetTypeActions_DialogueBlueprint.cpp" showLineNumbers
 
 #include "AssetTypeActions_DialogueBlueprint.h"


```

### DialogueGraph.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueGraph.cpp" showLineNumbers
 #include "DialogueGraph.h"
 #include "Dialogue.h"
// removed-start
#include "NarrativeFunctionLibrary.h"
#include "NarrativeComponent.h"
// removed-end
// added-start
#include "GraphEditAction.h"
// added-end

...

// removed-start
#undef LOCTEXT_NAMESPACE // removed-end
// added-start
#undef LOCTEXT_NAMESPACE 
// added-end


```

### DialogueEditorDetails.h

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueEditorDetails.h" showLineNumbers
 #pragma once
 
// added-start
#include "IDetailChildrenBuilder.h"
#include "IDetailPropertyRow.h"
#include "PropertyHandle.h"
// added-end

...



```

### DialogueEditorTabs.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueEditorTabs.cpp" showLineNumbers
 #include "DialogueEditorTabs.h"
 


```

### DialogueEditorDetails.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueEditorDetails.cpp" showLineNumbers
 #include "DialogueEditorDetails.h"
 #include "DetailLayoutBuilder.h"

...

// removed-start
#include "DialogueBlueprint.h"
#include "DetailCategoryBuilder.h"
#include "DetailWidgetRow.h"
// removed-end
 #include "Widgets/Input/SComboBox.h"
// removed-start
#include "IPropertyUtilities.h"
// removed-end
// added-start
#include "PropertyHandle.h"
// added-end
 
 #define LOCTEXT_NAMESPACE "DialogueEditorDetails"

...



```

### DialogueGraphEditor.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueGraphEditor.cpp" showLineNumbers
 #include "DialogueGraphEditor.h"
 #include "NarrativeDialogueEditorModule.h"
// added-start

#include "DialogueDebugger.h"
#include "DialogueEditorStyle.h"
// added-end
// added-start
#include "SNodePanel.h"
// added-end
// added-start
#include "Sound/SoundBase.h"
// added-end
// added-start
	FEditorDelegates::BeginPIE.RemoveAll(this);
	FEditorDelegates::EndPIE.RemoveAll(this);

	SetGraphEditable(true);
	
// added-end
// added-start
void FDialogueGraphEditor::SwitchToQuestAsset()
{
	if (!DialogueBlueprint)
	{
		return;
	}
	
	UDialogue* Dialogue = Cast<UDialogue>(DialogueBlueprint->GeneratedClass.GetDefaultObject());
	
#if ENGINE_MAJOR_VERSION == 5 && ENGINE_MINOR_VERSION >= 2
	if (GEditor)
	{
		UAssetEditorSubsystem* AssetEditorSubsystem = GEditor->GetEditorSubsystem<UAssetEditorSubsystem>();
		if (AssetEditorSubsystem && Dialogue)
		{
			AssetEditorSubsystem->OpenEditorForAsset(UBlueprint::GetBlueprintFromClass(Dialogue->EditorLinkedQuest));
		}
	}
#else
	// UE 5.1 fallback (AssetEditorSubsystem does not exist)
	if (GEditor)
	{
		GEditor->EditObject(Dialogue->EditorLinkedQuest);
	}
#endif
}

bool FDialogueGraphEditor::CanSwitchToQuestAsset()
{
	if (!DialogueBlueprint)
	{
		return false;
	}
	
	UDialogue* Dialogue = Cast<UDialogue>(DialogueBlueprint->GeneratedClass.GetDefaultObject());
	return Dialogue? Dialogue->EditorLinkedQuest != nullptr : false;
}

// added-end
// added-start
	// dialogue assets cannot be edited during PIE
	FEditorDelegates::BeginPIE.AddRaw(this, &FDialogueGraphEditor::OnBeginPIE);
	FEditorDelegates::EndPIE.AddRaw(this, &FDialogueGraphEditor::OnEndPIE);
	
// added-end
// added-start
	// create a debugger instance before binding commands
	Debugger = MakeShareable(new FDialogueDebugger);
	
// added-end

...

// removed-start
	//BindCommands();
// removed-end
 	RegisterMenus();
// removed-start

// removed-end
// added-start
	
// added-end
 	CreateInternalWidgets();
 
// added-start
	// setup debugger
	Debugger->Setup(DialogueBlueprint, SharedThis(this));

	if (UToolMenu* EditorToolbar = UToolMenus::Get()->FindMenu("AssetEditor.Dialogue Editor.Toolbar.DialogueEditor"))
	{
		Debugger->RegisterDebuggerToolbar(EditorToolbar);

		FToolMenuSection& Section = EditorToolbar->AddSection("EditQuestAsset", FText::GetEmpty(), {"Debugging", EToolMenuInsertType::After});
		Section.AddEntry(FToolMenuEntry::InitToolBarButton(
			FDialogueEditorCommands::Get().OpenLinkedQuest,
			LOCTEXT("DialogueGraphEditor_EditQuest", "Edit Quest"),
			LOCTEXT("DialogueGraphEditor_EditQuest_ToolTip", "When A quest has this Dialogue Asset class is selected, this will switch to that quest."),
			FSlateIcon(FDialogueEditorStyle::GetStyleSetName(), "DialogueEditor.QuestIcon"))
		);
	}

// added-end
// added-start
	
	if (!FDialogueDebugger::IsPIENotSimulating())
	{
		SetGraphEditable(false);
	}
// added-end
// added-start

		ToolkitCommands->MapAction(
		FDialogueEditorCommands::Get().OpenLinkedQuest,
		FExecuteAction::CreateSP(this, &FDialogueGraphEditor::SwitchToQuestAsset),
		FCanExecuteAction::CreateSP(this, &FDialogueGraphEditor::CanSwitchToQuestAsset));
// added-end
// added-start
			// walk nodes to be pasted, and accumulate their position 
			FVector2D AvgNodePosition(0.0f, 0.0f);
			for (TSet<UEdGraphNode*>::TIterator It(PastedNodes); It; ++It)
			{
				UEdGraphNode* Node = *It;
				AvgNodePosition.X += Node->NodePosX;
				AvgNodePosition.Y += Node->NodePosY;
			}
			// average the accumulated node positions
			float InvNumNodes = 1.0f / static_cast<float>(PastedNodes.Num());
			AvgNodePosition.X *= InvNumNodes;
			AvgNodePosition.Y *= InvNumNodes;
			
// added-end

...

// removed-start
					PasteNode->NodePosX += 100.f;
					PasteNode->NodePosY += 100.f;

					PasteNode->SnapToGrid(16);
// removed-end
// added-start
					// set new paste node position, accounting for selected nodes average position
					PasteNode->NodePosX = static_cast<int32>((PasteNode->NodePosX - AvgNodePosition.X) + GraphLocation.X);
					PasteNode->NodePosY = static_cast<int32>((PasteNode->NodePosY - AvgNodePosition.Y) + GraphLocation.Y);

					PasteNode->SnapToGrid(SNodePanel::GetSnapGridSize());
// added-end
 
 					// Give new node a different Guid from the old one
 					PasteNode->CreateNewGuid();
// added-start

	FDialogueEditorCommands::Register();
	
	if (Debugger)
	{
		Debugger->BindCommands(ToolkitCommands);
	}
// added-end
// added-start
	// read only
	if (!IsGraphEditable())
	{
		return;
	}
	
// added-end
// added-start
						const FScopedTransaction Transaction(NSLOCTEXT("DialogueGraphEditor", "DialogueGraphEditor_EventFromNode", "Create event for node"));
						DialogueBlueprint->Modify();
						
// added-end
// added-start
void FDialogueGraphEditor::AddNodesFromAssets(const TArray<FAssetData>& Assets, const FVector2D& GraphPosition, UEdGraph* DestinationGraph, UEdGraphNode* SelectedNode) const
{
	if (Assets.IsEmpty() || !DestinationGraph || !GEditor)
	{
		return;
	}

	TSharedPtr<SGraphEditor> FocusedGraph = FocusedGraphEdPtr.Pin();
	if (!FocusedGraph.IsValid())
	{
		return;
	}

	// get dialogue
	UDialogue* Dialogue = GetDialogueAsset()? Cast<UDialogue>(GetDialogueAsset()->GeneratedClass->GetDefaultObject()) : nullptr;
		
	const FScopedTransaction Transaction(NSLOCTEXT("FDialogueGraphEditor", "FDialogueGraphEditor_NodeFromAssets", "Create nodes from assets"));
	DestinationGraph->Modify();

	// pin to connect to
	UEdGraphPin* ConnectedPin = SelectedNode? SelectedNode->FindPin(NAME_None, EGPD_Output) : nullptr;

	FocusedGraph->ClearSelectionSet();
	
	FVector2D NewNodePos = GraphPosition;
	for (const FAssetData& Asset : Assets)
	{
		// currently sound waves are only supported
		if (USoundBase* SoundWave = Cast<USoundBase>(Asset.GetAsset()))
		{			
			// check if there is a speaker in the asset name
			const FString WavName = SoundWave->GetFName().ToString();
			const FSpeakerInfo* Speaker = Dialogue->Speakers.FindByPredicate([&WavName](const FSpeakerInfo& SpeakerInfo)
			{
				return WavName.Contains(SpeakerInfo.SpeakerID.ToString());
			});

			// create new graph node
			const UClass* NodeClass = (Speaker && Speaker->bIsPlayer) || WavName.Contains("Player")? UDialogueGraphNode_Player::StaticClass() : UDialogueGraphNode_NPC::StaticClass();
			UDialogueGraphNode* NewGraphNode = NewObject<UDialogueGraphNode>(DestinationGraph, NodeClass);
			if (!NewGraphNode)
			{
				continue;
			}

			FDialogueSchemaAction_NewNode AddNewNode;
			AddNewNode.NodeTemplate = NewGraphNode;

			// create node and assign sound wave
			AddNewNode.PerformAction(DestinationGraph, ConnectedPin, NewNodePos);
			NewGraphNode->DialogueNode->Line.DialogueSound = SoundWave;

			// offset next node position
			NewNodePos.X += 500.0f;

			// when node is a npc node, set the speaker to the found speaker if any
			if (UDialogueNode_NPC* NPCNode = Cast<UDialogueNode_NPC>(NewGraphNode->DialogueNode))
			{
				FName SpeakerID = Dialogue->Speakers.IsValidIndex(0)? Dialogue->Speakers[0].SpeakerID : NAME_None;

				if (Speaker)
				{
					SpeakerID = Speaker->SpeakerID;
				}

				NPCNode->SetSpeakerID(SpeakerID);
			}

			// generate an id
			NewGraphNode->DialogueNode->GenerateIDFromText();
			
			DestinationGraph->NotifyGraphChanged();
			
			// add new node to selection
			FocusedGraph->SetNodeSelection(NewGraphNode, true);
			
			GetDialogueAsset()->PostEditChange();
			GetDialogueAsset()->MarkPackageDirty();
			
		}
	}
}

void FDialogueGraphEditor::SetGraphEditable(const bool Editable)
{
	if (IsValid(DialogueBlueprint) && IsValid(DialogueBlueprint->DialogueGraph))
	{
		DialogueBlueprint->DialogueGraph->bEditable = Editable;
	}
}

bool FDialogueGraphEditor::IsGraphEditable() const
{
	return IsValid(DialogueBlueprint) && IsValid(DialogueBlueprint->DialogueGraph)? DialogueBlueprint->DialogueGraph->bEditable : false;
}

void FDialogueGraphEditor::JumpOrAddDialogueNode(FName NodeID)
{
	// get dialogue
	UDialogue* Dialogue = GetDialogueAsset()? Cast<UDialogue>(GetDialogueAsset()->GeneratedClass->GetDefaultObject()) : nullptr;
	UEdGraph* DestinationGraph = Dialogue? GetDialogueAsset()->DialogueGraph : nullptr;
	if (!DestinationGraph)
	{
		return;
	}

	// check if a node with the state ID already exists
	TObjectPtr<UEdGraphNode>* ExistingNode = DialogueBlueprint->DialogueGraph->Nodes.FindByPredicate([this, &NodeID](const UEdGraphNode* Node)
	{
		const UDialogueGraphNode* DialogueNode = Cast<UDialogueGraphNode>(Node);
		return DialogueNode? DialogueNode->DialogueNode->GetID() == NodeID : false;
	});

	// when no existing node was found, create a new one
	if (!ExistingNode)
	{
		const FScopedTransaction Transaction(NSLOCTEXT("FDialogueGraphEditor", "FDialogueGraphEditor_NewNodeFromQuest", "Create node from Quest State"));
		DialogueBlueprint->Modify();
		DestinationGraph->Modify();
	
		// create new graph node
		UDialogueGraphNode* NewGraphNode = NewObject<UDialogueGraphNode>(DestinationGraph, UDialogueGraphNode_NPC::StaticClass());
		if (!NewGraphNode)
		{
			return;
		}

		FDialogueSchemaAction_NewNode AddNewNode;
		AddNewNode.NodeTemplate = NewGraphNode;

		// create node
		AddNewNode.PerformAction(DestinationGraph, nullptr, {});

		// set NPC speaker
		if (UDialogueNode_NPC* NPCNode = Cast<UDialogueNode_NPC>(NewGraphNode->DialogueNode))
		{
			const FName SpeakerID = Dialogue->Speakers.IsValidIndex(0)? Dialogue->Speakers[0].SpeakerID : NAME_None;
			NPCNode->SetSpeakerID(SpeakerID);
		}
		
		// generate an id
		NewGraphNode->DialogueNode->SetID(NodeID);
		
		DestinationGraph->NotifyGraphChanged();
						
		GetDialogueAsset()->PostEditChange();
		GetDialogueAsset()->MarkPackageDirty();
		
		JumpToNode(NewGraphNode);
	}
	else
	{
		JumpToNode(*ExistingNode);
	}
}

void FDialogueGraphEditor::OnBeginPIE(bool bSimulating)
{
	SetGraphEditable(false);
}

void FDialogueGraphEditor::OnEndPIE(bool bSimulating)
{
	SetGraphEditable(true);
}

// added-end

...

// removed-start

	CreateDialogueCommandList();
// removed-end
 
 	SGraphEditor::FGraphEditorEvents InEvents;
 	InEvents.OnSelectionChanged = SGraphEditor::FOnSelectionChanged::CreateSP(this, &FDialogueGraphEditor::OnSelectedNodesChanged);

...

// removed-start

// removed-end
 void FDialogueGraphEditor::ExtendToolbar()
 {
 


```

### SDialogueGraphNode.h

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/SDialogueGraphNode.h" showLineNumbers
 #pragma once
 
// added-start
	EVisibility GetActiveStateImageVisibility() const;

// added-end

...



```

### DialogueGraphNode_Root.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueGraphNode_Root.cpp" showLineNumbers
 #include "DialogueGraphNode_Root.h"
 #include "DialogueEditorTypes.h"
// removed-start
#include "DialogueEditorSettings.h"
// removed-end

...



```

### DialogueGraphSchema.h

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueGraphSchema.h" showLineNumbers
#pragma once
 
...

// removed-start
	virtual void SetNodePosition(UEdGraphNode* Node, const FVector2D& Position) const;
// removed-end
// added-start
#if ENGINE_MAJOR_VERSION == 5 && ENGINE_MINOR_VERSION >= 6
	virtual void SetNodePosition(UEdGraphNode* Node, const FVector2f& GraphLocation) const;
#else
	virtual void SetNodePosition(UEdGraphNode* Node, const FVector2D& GraphLocation) const;
#endif
// added-end
 	virtual EGraphType GetGraphType(const UEdGraph* TestEdGraph) const;
// added-start
	virtual void BreakPinLinks(UEdGraphPin& TargetPin, bool bSendsNodeNotifcation) const override;
	virtual void DroppedAssetsOnGraph(const TArray<FAssetData>& Assets, const FVector2D& GraphPosition, UEdGraph* Graph) const override;
	virtual void DroppedAssetsOnNode(const TArray<FAssetData>& Assets, const FVector2D& GraphPosition, UEdGraphNode* Node) const override;
	virtual void DroppedAssetsOnPin(const TArray<FAssetData>& Assets, const FVector2D& GraphPosition, UEdGraphPin* Pin) const override;
	virtual void GetAssetsGraphHoverMessage(const TArray<FAssetData>& Assets, const UEdGraph* HoverGraph, FString& OutTooltipText, bool& OutOkIcon) const override;
	virtual void GetAssetsNodeHoverMessage(const TArray<FAssetData>& Assets, const UEdGraphNode* HoverNode, FString& OutTooltipText, bool& OutOkIcon) const override;
	virtual void GetAssetsPinHoverMessage(const TArray<FAssetData>& Assets, const UEdGraphPin* HoverPin, FString& OutTooltipText, bool& OutOkIcon) const override;
// added-end
 	//~ End EdGraphSchema Interface
 
// added-start
	
	void GetHoverMessage(const TArray<FAssetData>& Assets, FString& OutTooltipText, bool& OutOkIcon) const;
// added-end

...



```

### AssetTypeActions_DialogueAsset.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/AssetTypeActions_DialogueAsset.cpp" showLineNumbers
 
 #include "AssetTypeActions_DialogueAsset.h"
// removed-start
#include "DialogueGraphEditor.h"
// removed-end

...



```

### DialogueGraph.h

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueGraph.h" showLineNumbers
#pragma once
 
...

// removed-start
#include "GraphEditAction.h"
// removed-end
 #include "DialogueGraph.generated.h"
 
 class UDialogueGraphNode;


```

### DialogueEditorCommands.h

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueEditorCommands.h" showLineNumbers
 #pragma once
 
// added-start
	// jumps to the current active node
	TSharedPtr<FUICommandInfo> JumpToActiveNode;
	
	// When A quest has this Dialogue Asset class is selected, this will switch to that quest.
	TSharedPtr<FUICommandInfo> OpenLinkedQuest;

// added-end

...



```

### DialogueGraphNode_Player.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueGraphNode_Player.cpp" showLineNumbers
 #include "DialogueGraphNode_Player.h"
// removed-start
#include "DialogueGraph.h"
// removed-end
 #include "EdGraph/EdGraphSchema.h"

...

// removed-start
#include "DialogueSM.h"
#include "Dialogue.h"
#include "DialogueGraphNode.h"
// removed-end
 #include "DialogueEditorSettings.h"
 
 #define LOCTEXT_NAMESPACE "DialogueGraphNode_Player"


```

### DialogueConnectionDrawingPolicy.h

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueConnectionDrawingPolicy.h" showLineNumbers
 #pragma once
 
// added-start

class FNarrativeGeometryHelper
{

public: 
#if ENGINE_MAJOR_VERSION == 5 && ENGINE_MINOR_VERSION >= 6
	static FVector2f HorizontalBottomOf(const FGeometry& SomeGeometry)
	{
		const FVector2f GeometryDrawSize = SomeGeometry.GetDrawSize();
		return FVector2f(
			SomeGeometry.AbsolutePosition.X + (GeometryDrawSize.X / 2.f),
			SomeGeometry.AbsolutePosition.Y + GeometryDrawSize.Y);
	};

	static FVector2f HorizontalTopOf(const FGeometry& SomeGeometry)
	{
		const FVector2f GeometryDrawSize = SomeGeometry.GetDrawSize();
		return FVector2f(
			SomeGeometry.AbsolutePosition.X + (GeometryDrawSize.X / 2.f),
			SomeGeometry.AbsolutePosition.Y);
	};
#else
	static FVector2d HorizontalBottomOf(const FGeometry& SomeGeometry)
	{
		const FVector2d GeometryDrawSize = SomeGeometry.GetDrawSize();
		return FVector2d(
			SomeGeometry.AbsolutePosition.X + (GeometryDrawSize.X / 2.f),
			SomeGeometry.AbsolutePosition.Y + GeometryDrawSize.Y);
	};

	static FVector2d HorizontalTopOf(const FGeometry& SomeGeometry)
	{
		const FVector2d GeometryDrawSize = SomeGeometry.GetDrawSize();
		return FVector2d(
			SomeGeometry.AbsolutePosition.X + (GeometryDrawSize.X / 2.f),
			SomeGeometry.AbsolutePosition.Y);
	};
#endif

};
// added-end

...

// removed-start
	virtual FVector2D ComputeSplineTangent(const FVector2D& Start, const FVector2D& End) const override;
// removed-end
 	void DetermineWiringStyle(UEdGraphPin* OutputPin, UEdGraphPin* InputPin, /*inout*/ FConnectionParams& Params);
// removed-start
	virtual void DrawConnection(int32 LayerId, const FVector2D& Start, const FVector2D& End, const FConnectionParams& Params) override;
// removed-end
// added-start

#if ENGINE_MAJOR_VERSION == 5 && ENGINE_MINOR_VERSION >= 6
	using FGraphLocationType = FVector2f;
#else
	using FGraphLocationType = FVector2D;
#endif
	
	virtual FGraphLocationType ComputeSplineTangent(const FGraphLocationType& Start, const FGraphLocationType& End) const override;
	virtual void DrawConnection(int32 LayerId, const FGraphLocationType& Start, const FGraphLocationType& End, const FConnectionParams& Params) override;
	virtual void DrawPreviewConnector(const FGeometry& PinGeometry, const FGraphLocationType& StartPoint, const FGraphLocationType& EndPoint, UEdGraphPin* Pin) override;

	virtual void DrawSplineWithArrow(const FGeometry& StartGeom, const FGeometry& EndGeom, const FConnectionParams& Params);
// added-end
 
 	const FSlateBrush* BacklinkImage;

...

// removed-start
};// removed-end
// added-start
};
// added-end


```

### DialogueEditorStyle.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueEditorStyle.cpp" showLineNumbers
 #include "DialogueEditorStyle.h"
 #include "Styling/SlateStyle.h"
// added-start
	// edit quest asset icon
	StyleSet->Set(FName(TEXT("DialogueEditor.QuestIcon")), new IMAGE_BRUSH("Quest", FVector2D(64.f, 64.f)));

// added-end

...



```

### DialogueNodeUserWidget.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueNodeUserWidget.cpp" showLineNumbers 
 #include "DialogueNodeUserWidget.h"
// removed-start
#include <Components/VerticalBox.h>
#include <Components/Overlay.h>
#include <Components/VerticalBoxSlot.h>
#include <Blueprint/WidgetTree.h>
// removed-end

...



```

### DialogueEditorCommands.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueEditorCommands.cpp" showLineNumbers
 #include "DialogueEditorCommands.h"
 #include "DialogueEditorStyle.h"
// added-start
	UI_COMMAND(JumpToActiveNode, "Jump To Active Node", "Jumps to the active node.", EUserInterfaceActionType::Button, FInputChord());
	UI_COMMAND(OpenLinkedQuest, "Edit Quest", "open connected quest.", EUserInterfaceActionType::Button, FInputChord());
// added-end

...

// removed-start
#undef LOCTEXT_NAMESPACE // removed-end
// added-start
#undef LOCTEXT_NAMESPACE 
// added-end


```

### SDialogueGraphPin.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/SDialogueGraphPin.cpp" showLineNumbers
 
 
 #include "SDialogueGraphPin.h"


```

### DialogueAssetFactory.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueAssetFactory.cpp" showLineNumbers
 
 #include "DialogueAssetFactory.h"

...

// removed-start
#include "BlueprintEditorSettings.h"
#include "DialogueGraph.h"
#include "DialogueGraphSchema.h"
#include "Kismet2/BlueprintEditorUtils.h"
// removed-end
 #include "DialogueEditorSettings.h"
 
 #define LOCTEXT_NAMESPACE "DialogueAssetFactory"


```

### DialogueEditorModes.h

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueEditorModes.h" showLineNumbers
#pragma once
 
...

// removed-start
#include "WorkflowOrientedApp/ApplicationMode.h"
// removed-end
 #include "BlueprintEditorModes.h"
 
 /** Application mode for main behavior tree editing mode */


```

### DialogueGraphNode.h

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueGraphNode.h" showLineNumbers
#pragma once
 
...

// removed-start
		class UK2Node_CustomEvent* OnPlayedCustomNode;
// removed-end
// added-start
	class UK2Node_CustomEvent* OnPlayedCustomNode;
// added-end
 
 	UFUNCTION()
// removed-start
		void OnStartedOrFinished(UDialogueNode* Node, bool bStarted);
// removed-end
// added-start
	void OnStartedOrFinished(UDialogueNode* Node, bool bStarted);

	uint8 bActiveNode : 1;
// added-end
 

...



```

### DialogueEditorTypes.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/DialogueEditorTypes.cpp" showLineNumbers
 #include "DialogueEditorTypes.h"
 


```

### SDialogueGraphNode.cpp

```cpp title="/Narrative/Source/NarrativeDialogueEditor/Private/SDialogueGraphNode.cpp" showLineNumbers
 #include "SDialogueGraphNode.h"
 #include "DialogueGraphNode.h"

...

// removed-start
#include "DialogueGraph.h"
// removed-end
 #include "SGraphPanel.h"
 #include "ScopedTransaction.h"
 #include "DialogueSM.h"

...

// removed-start
#include "DialogueEditorStyle.h"
// removed-end
 #include "DialogueEditorSettings.h"
 #include <Blueprint/UserWidget.h>
 #include "Components/VerticalBox.h"
// removed-start
#include <Slate/SObjectWidget.h>
// removed-end
// added-start
#include "DialogueDebugger.h"
// added-end
// added-start
				
				// dialogue widget
// added-end

...

// removed-start
			[
				DialogueNodeWidgetRef.ToSharedRef()
			]
// removed-end
// added-start
				[
					DialogueNodeWidgetRef.ToSharedRef()
				]

				// debugger overlay
				+ SOverlay::Slot()
				[
					SNew(SImage)
					.Image(FAppStyle::GetBrush(TEXT("Graph.Node.DiffHighlight")))
					// yellow
					.ColorAndOpacity(FLinearColor(0.0f, 1.0f, 0.0f, 0.75f))
					.Visibility_Raw(this, &SDialogueGraphNode::GetActiveStateImageVisibility)
				]
// added-end
 			];
 	}
 	else // Old style yucky slate ones
// added-start
EVisibility SDialogueGraphNode::GetActiveStateImageVisibility() const
{
	const UDialogueGraphNode* DialogueGraphNode = Cast<UDialogueGraphNode>(GraphNode);
	return DialogueGraphNode && DialogueGraphNode->bActiveNode? EVisibility::HitTestInvisible : EVisibility::Collapsed;
}

// added-end

...

// removed-start
#undef LOCTEXT_NAMESPACE// removed-end
// added-start
#undef LOCTEXT_NAMESPACE
// added-end


```

### NarrativeQuestEditor.Build.cs

```cpp title="/Narrative/Source/NarrativeQuestEditor/NarrativeQuestEditor.Build.cs" showLineNumbers
 using UnrealBuildTool;
 
// added-start
                "GameplayTags",
// added-end

...

// removed-start
                "UMG"
// removed-end
// added-start
                "UMG",
                "ToolMenus", 
                "NarrativeDialogueEditor", "NarrativePreEditor" // NOTE: here for quick creating dialogue nodes from quest states
// added-end
             }
 			);
 		


```

### QuestBlueprint.h

```cpp title="/Narrative/Source/NarrativeQuestEditor/Public/QuestBlueprint.h" showLineNumbers
 #pragma once
 


```

### QuestNodeUserWidget.h

```cpp title="/Narrative/Source/NarrativeQuestEditor/Public/QuestNodeUserWidget.h" showLineNumbers protected:
 
// added-start
	UFUNCTION(BlueprintCallable, Category="Dialogue", meta=(DevelopmentOnly))
	void AddOrJumpToMatchingDialogueNode();
	
	UFUNCTION(BlueprintCallable, Category="Dialogue", meta=(DevelopmentOnly))
	bool DoesMatchingDialogueNodeExist();

// added-end

...



```

### QuestGraphSchema.h

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestGraphSchema.h" showLineNumbers
 #pragma once
 
// added-start
	virtual void BreakPinLinks(UEdGraphPin& TargetPin, bool bSendsNodeNotifcation) const override;
// added-end

...



```

### QuestGraphNode.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestGraphNode.cpp" showLineNumbers
 #include "QuestGraphNode.h"
 #include "QuestGraph.h"


```

### AssetTypeActions_NarrativeQuestTask.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/AssetTypeActions_NarrativeQuestTask.cpp" showLineNumbers
 #include "AssetTypeActions_NarrativeQuestTask.h"
// removed-start
#include "NarrativeDataTask.h"
// removed-end
 #include "NarrativeCondition.h"

...

// removed-start
#include "QuestTask.h"
// removed-end
 #include "NarrativeQuestTaskBlueprint.h"
 #include <Factories/BlueprintFactory.h>
 


```

### QuestGraphNode_Action.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestGraphNode_Action.cpp" showLineNumbers
 #include "QuestGraphNode_Action.h"
 #include "QuestEditorTypes.h"


```

### AssetTypeActions_QuestAction.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/AssetTypeActions_QuestAction.cpp" showLineNumbers
 #include "AssetTypeActions_QuestAction.h"
 #include "NarrativeDataTask.h"


```

### K2Node_CompleteNarrativeTask.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/K2Node_CompleteNarrativeTask.cpp" showLineNumbers
 
 #include "K2Node_CompleteNarrativeTask.h"
// removed-start
#include "EdGraphSchema_K2_Actions.h"
// removed-end

...

// removed-start
#include "BlueprintActionMenuBuilder.h"
// removed-end
 #include "NarrativeFunctionLibrary.h"
 #include "NarrativeComponent.h"
 #include "NarrativeDataTask.h"
// added-start
#include "K2Node_CallFunction.h"
// added-end

...



```

### QuestAssetFactory.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestAssetFactory.cpp" showLineNumbers
 #include "QuestAssetFactory.h"
 #include "Editor/ClassViewer/Public/ClassViewerModule.h"

...

// removed-start
#include "Kismet2/SClassPickerDialog.h"
// removed-end
 #include "Kismet2/KismetEditorUtilities.h"
 #include "QuestBlueprintGeneratedClass.h"
 #include "Quest.h"
// removed-start
#include "BlueprintEditorSettings.h"
// removed-end

...

// removed-start
#include "QuestGraph.h"
#include "QuestGraphSchema.h"
#include "Kismet2/BlueprintEditorUtils.h"
// removed-end
 
 #define LOCTEXT_NAMESPACE "QuestAssetFactory"
 


```

### QuestGraph.h

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestGraph.h" showLineNumbers
#pragma once
 
...

// removed-start
#include "GraphEditAction.h"
// removed-end
 #include "QuestGraph.generated.h"
 
 class UQuestGraphNode;
// added-start
	virtual bool Modify(bool bAlwaysMarkDirty = true) override;
// added-end
// added-start
	
	UQuestNode* DuplicateNode(const UQuestNode* OldNode);
// added-end

...



```

### QuestGraphNode_Root.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestGraphNode_Root.cpp" showLineNumbers
 #include "QuestGraphNode_Root.h"
 #include "QuestEditorTypes.h"


```

### QuestConnectionDrawingPolicy.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestConnectionDrawingPolicy.cpp" showLineNumbers
 #include "QuestConnectionDrawingPolicy.h"
 #include "QuestGraphNode_Action.h"


```

### QuestEditorTabs.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestEditorTabs.cpp" showLineNumbers
 #include "QuestEditorTabs.h"
 


```

### QuestActionFactory.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestActionFactory.cpp" showLineNumbers
 #include "QuestActionFactory.h"
 #include "NarrativeDataTask.h"


```

### QuestBlueprintCompiler.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestBlueprintCompiler.cpp" showLineNumbers
 
 #include "QuestBlueprintCompiler.h"
// added-start
void FQuestBlueprintCompilerContext::CreateClassVariablesFromBlueprint()
{
	Super::CreateClassVariablesFromBlueprint();


}

// added-end

...

// removed-start
		}
// removed-end
// added-start
		} 
// added-end
 
 		FixAbandonedQuestTemplate(QuestBP);
 

...

// removed-start
#undef LOCTEXT_NAMESPACE// removed-end
// added-start
#undef LOCTEXT_NAMESPACE
// added-end


```

### QuestEditorSettings.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestEditorSettings.cpp" showLineNumbers
 
 #include "QuestEditorSettings.h"


```

### QuestEditorCommands.h

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestEditorCommands.h" showLineNumbers
 #pragma once
 
// added-start
	// jumps to the current active node
	TSharedPtr<FUICommandInfo> JumpToActiveNode;

	// When A Dialogue Asset class is selected for this quest, this will switch to that dialogue.
	TSharedPtr<FUICommandInfo> OpenQuestDialogue;

// added-end

...



```

### SQuestGraphNode.h

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/SQuestGraphNode.h" showLineNumbers
 #pragma once
 
// added-start
	EVisibility GetActiveStateImageVisibility() const;
// added-end

...



```

### QuestEditorModes.h

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestEditorModes.h" showLineNumbers
#pragma once
 
...

// removed-start
#include "WorkflowOrientedApp/ApplicationMode.h"
// removed-end
 #include "BlueprintEditorModes.h"
 
 /** Application mode for main behavior tree editing mode */


```

### QuestEditorCommands.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestEditorCommands.cpp" showLineNumbers
 #include "QuestEditorCommands.h"
 #include "QuestEditorStyle.h"
// added-start
	UI_COMMAND(JumpToActiveNode, "Jump To Active Node", "Jumps to the active node.", EUserInterfaceActionType::Button, FInputChord());
	UI_COMMAND(OpenQuestDialogue, "Edit Quest", "Opens Quest Dialogue", EUserInterfaceActionType::Button, FInputChord());
// added-end

...

// removed-start
#undef LOCTEXT_NAMESPACE // removed-end
// added-start
#undef LOCTEXT_NAMESPACE 
// added-end


```

### QuestGraphEditor.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestGraphEditor.cpp" showLineNumbers
 #include "QuestGraphEditor.h"
 #include "NarrativeQuestEditorModule.h"

...

// removed-start
#include "GraphEditorActions.h"
// removed-end
 #include "Framework/Commands/GenericCommands.h"
 #include "QuestGraphNode.h"
 #include "Widgets/Layout/SBorder.h"

...

// removed-start
#include <SKismetInspector.h>
// removed-end
 #include "Kismet2/DebuggerCommands.h"
 #include "EdGraphSchema_K2_Actions.h"
 #include "K2Node_CustomEvent.h"
// added-start
#include "QuestDebugger.h"
#include "QuestEditorStyle.h"
#include "SNodePanel.h"
// added-end

...

// removed-start
static const FString NarrativeHelpURL("http://www.google.com");
// removed-end
// added-start
static const FString NarrativeHelpURL("https://docs.narrativetools.io/tales/");
// added-end
 
 FQuestGraphEditor::FQuestGraphEditor()
 {
// added-start
	FEditorDelegates::BeginPIE.RemoveAll(this);
	FEditorDelegates::EndPIE.RemoveAll(this);
	
// added-end
// added-start
	// kept separate from debugger because regardless of a debugger, quest assets cannot be edited during PIE 
	FEditorDelegates::BeginPIE.AddRaw(this, &FQuestGraphEditor::OnBeginPIE);
	FEditorDelegates::EndPIE.AddRaw(this, &FQuestGraphEditor::OnEndPIE);
	
// added-end
// added-start
	// create a debugger instance before binding commands
	Debugger = MakeShareable(new FQuestDebugger);

// added-end

...

// removed-start


// removed-end
// added-start
	
// added-end
 	CreateDefaultCommands();
// removed-start
	//BindCommands();
// removed-end
 	RegisterMenus();
 

...

// removed-start


// removed-end
// added-start
		
	// setup debugger
	Debugger->Setup(QuestBlueprint, SharedThis(this));
	
	if (UToolMenu* EditorToolbar = UToolMenus::Get()->FindMenu("AssetEditor.Quest Editor.Toolbar.QuestEditor"))
	{
		// TODO: update this to use ui commands so that it isn't global just like the edit dialogue asset
		Debugger->RegisterDebuggerToolbar(EditorToolbar);

		// add dialogue asset button
		FToolMenuSection& Section = EditorToolbar->AddSection("EditDialogueAsset", FText::GetEmpty(), {"Debugging", EToolMenuInsertType::After});
		Section.AddEntry(FToolMenuEntry::InitToolBarButton(
			FQuestEditorCommands::Get().OpenQuestDialogue,
			LOCTEXT("QuestGraphEditor_EditDialogue", "Edit Dialogue"),
			LOCTEXT("QuestGraphEditor_EditDialogue_ToolTip", "When A Dialogue Asset class is selected for this quest, this will switch to that dialogue."),
			FSlateIcon(FQuestEditorStyle::GetStyleSetName(), "QuestEditor.DialogueIcon"))
		);
	}
	
	SetGraphEditable(FQuestDebugger::IsPIENotSimulating());
	
// added-end
 	//Load all Quest Tasks into memory since we need them for editing quests 
 	FAssetRegistryModule& AssetRegistryModule = FModuleManager::LoadModuleChecked<FAssetRegistryModule>("AssetRegistry");
 	TArray<FAssetData> AssetData;

...

// removed-start
					CommentAction.PerformAction(Graph, NULL, GraphEditor->GetPasteLocation());
// removed-end
// added-start
#if ENGINE_MAJOR_VERSION == 5 && ENGINE_MINOR_VERSION >= 6
					CommentAction.PerformAction(Graph, nullptr, GraphEditor->GetPasteLocation2f());
#else
					CommentAction.PerformAction(Graph, nullptr, GraphEditor->GetPasteLocation());
#endif
// added-end
 				}
 
 			}

...

// removed-start

	// Do not allow root or PT nodes to be copied
// removed-end
// added-start
	// Do not allow root or PT nodes to be copied.
// added-end
 	const FGraphPanelSelectionSet SelectedNodes = GetSelectedNodes();
 	for (FGraphPanelSelectionSet::TConstIterator SelectedIter(SelectedNodes); SelectedIter; ++SelectedIter)
 	{
// added-start
			FNotificationInfo Info(NSLOCTEXT("QuestGraphEditor", "RootAndPersistantNodesCopyWarning", "Root and PersistentTask nodes can not be copied!"));
			Info.ExpireDuration = 3.0f;
			Info.bUseLargeFont = false;
			Info.Image = FCoreStyle::Get().GetBrush(TEXT("MessageLog.Warning"));
			TSharedPtr<SNotificationItem> Notification = FSlateNotificationManager::Get().AddNotification(Info);
			if (Notification.IsValid())
			{
				Notification->SetCompletionState(SNotificationItem::CS_None);
			}
// added-end

...

// removed-start
{
	if (UQuestGraph* DGraph = Cast<UQuestGraph>(DestinationGraph))
	{
		//Pasting quest nodes has caused more trouble than it has been worth - uncomment at your own risk! 
		//Quest_PasteNodesHere(Location);
// removed-end
// added-start
{	
	if (UQuestGraph* QuestGraph = Cast<UQuestGraph>(DestinationGraph))
	{
		// Undo/Redo support
		const FScopedTransaction Transaction(FGenericCommands::Get().Paste->GetDescription());
		TSharedPtr<SGraphEditor> CurrentGraphEditor = FocusedGraphEdPtr.Pin();
		
		if (!CurrentGraphEditor.IsValid())
		{
			return;
		}

		QuestGraph->Modify();

		UQuestGraphNode* SelectedParent = NULL;
		bool bHasMultipleNodesSelected = false;

		const FGraphPanelSelectionSet SelectedNodes = GetSelectedNodes();

		// Clear the selection set (newly pasted stuff will be selected)
		CurrentGraphEditor->ClearSelectionSet();

		// Grab the text to paste from the clipboard.
		FString TextToImport;
		FPlatformApplicationMisc::ClipboardPaste(TextToImport);

		// Import the nodes
		TSet<UEdGraphNode*> PastedNodes;
		FEdGraphUtilities::ImportNodesFromText(QuestGraph, TextToImport, /*out*/ PastedNodes);

		// walk nodes to be pasted, and accumulate their position 
		FVector2D AvgNodePosition(0.0f, 0.0f);
		for (TSet<UEdGraphNode*>::TIterator It(PastedNodes); It; ++It)
		{
			UEdGraphNode* Node = *It;
			AvgNodePosition.X += Node->NodePosX;
			AvgNodePosition.Y += Node->NodePosY;
		}
		// average the accumulated node positions
		float InvNumNodes = 1.0f / static_cast<float>(PastedNodes.Num());
		AvgNodePosition.X *= InvNumNodes;
		AvgNodePosition.Y *= InvNumNodes;

		for (TSet<UEdGraphNode*>::TIterator It(PastedNodes); It; ++It)
		{
			UEdGraphNode* PasteNode = *It;

			// node is null, skip and remove it
			if (!PasteNode)
			{
				It.RemoveCurrent();
				continue;
			}

			// set new paste node position, accounting for selected nodes average position
			PasteNode->NodePosX = static_cast<int32>((PasteNode->NodePosX - AvgNodePosition.X) + GraphLocation.X);
			PasteNode->NodePosY = static_cast<int32>((PasteNode->NodePosY - AvgNodePosition.Y) + GraphLocation.Y);

			PasteNode->SnapToGrid(SNodePanel::GetSnapGridSize());

			// Give new node a different Guid from the old one
			PasteNode->CreateNewGuid();

			// update if node is a quest node
			if (UQuestGraphNode* PasteQuestNode = Cast<UQuestGraphNode>(PasteNode))
			{
				// New Quest graph node will point to old quest node, duplicate a new one for our new node
				UQuestNode* DupNode = QuestGraph->DuplicateNode(PasteQuestNode->QuestNode);
				
				// update the paste node with the newly created node
				PasteQuestNode->QuestNode = DupNode;

				// remove old on entered node
				PasteQuestNode->OnEnteredCustomNode = nullptr;
			}

			// Select the newly pasted stuff
			CurrentGraphEditor->SetNodeSelection(PasteNode, true);
		}

		//Now that everything has been pasted, iterate a second time to rebuild the new nodes connections 
		for (TSet<UEdGraphNode*>::TIterator It(PastedNodes); It; ++It)
		{
			UEdGraphNode* PasteNode = *It;

			// although the node exists, we need to ensure that it is set up and actually added to the underlying quest
			QuestGraph->NodeAdded(PasteNode);

			// we only want to rewire nodes that can be, comment nodes cannot be for example
			if (UQuestGraphNode* PasteQuestNode = Cast<UQuestGraphNode>(PasteNode))
			{
				// check that we aren't trying to wire a node output when none should exist.
				UQuestGraphNode_State* FromState = Cast<UQuestGraphNode_State>(PasteNode);
				if (UQuestState* NodeQuestState = FromState ? FromState->State : nullptr)
				{
					switch (NodeQuestState->StateNodeType)
					{
					case EStateNodeType::Failure: // fallthrough
					case EStateNodeType::Success: continue;
					default: break;
					}
				}

				//Quest nodes connections will still be outdated, update these to the new connections
				QuestGraph->PinRewired(PasteQuestNode, PasteQuestNode->GetOutputPin());
			}
		}

		// Update UI
		CurrentGraphEditor->NotifyGraphChanged();
		if (UObject* GraphOwner = QuestGraph->GetOuter())
		{
			GraphOwner->PostEditChange();
			GraphOwner->MarkPackageDirty();
		}
// added-end
 	}
 	else
 	{
// removed-start
#if ENGINE_MAJOR_VERSION == 5 && ENGINE_MINOR_VERSION >= 6
		FVector2f Location = FVector2f(GraphLocation); // Handles FVector2f
		FBlueprintEditor::PasteNodesHere(DestinationGraph, Location);
#else
		FVector2D Location = FVector2D(GraphLocation); // Handles FVector2D
		FBlueprintEditor::PasteNodesHere(DestinationGraph, Location);
#endif
	}
}

void FQuestGraphEditor::Quest_SelectAllNodes()
// removed-end
// added-start
		FBlueprintEditor::PasteNodesHere(DestinationGraph, GraphLocation);
	}
}

/*void FQuestGraphEditor::Quest_SelectAllNodes()
// added-end

...

// removed-start
}

bool FQuestGraphEditor::Quest_CanSelectAllNodes() const
// removed-end
// added-start
}*/

/*bool FQuestGraphEditor::Quest_CanSelectAllNodes() const
// added-end
 {
 	return true;
// removed-start
}

void FQuestGraphEditor::Quest_DeleteSelectedNodes()
// removed-end
// added-start
}*/

/*void FQuestGraphEditor::Quest_DeleteSelectedNodes()
// added-end
 {

...

// removed-start
}

bool FQuestGraphEditor::Quest_CanDeleteNodes() const
// removed-end
// added-start
}*/

/*bool FQuestGraphEditor::Quest_CanDeleteNodes() const
// added-end
 {
 	// If any of the nodes can be deleted then we should allow deleting
 	const FGraphPanelSelectionSet SelectedNodes = GetSelectedNodes();

...

// removed-start
}

void FQuestGraphEditor::Quest_DeleteSelectedDuplicatableNodes()
// removed-end
// added-start
}*/

/*void FQuestGraphEditor::Quest_DeleteSelectedDuplicatableNodes()
// added-end
 {
 	TSharedPtr<SGraphEditor> CurrentGraphEditor = UpdateGraphEdPtr.Pin();
 	if (!CurrentGraphEditor.IsValid())

...

// removed-start
}

void FQuestGraphEditor::Quest_CutSelectedNodes()
// removed-end
// added-start
}*/

/*void FQuestGraphEditor::Quest_CutSelectedNodes()
// added-end
 {
 	CopySelectedNodes();
 	DeleteSelectedDuplicatableNodes();
// removed-start
}

bool FQuestGraphEditor::Quest_CanCutNodes() const
// removed-end
// added-start
}*/

/*bool FQuestGraphEditor::Quest_CanCutNodes() const
// added-end

...

// removed-start
}

void FQuestGraphEditor::Quest_CopySelectedNodes()
// removed-end
// added-start
}*/

/*void FQuestGraphEditor::Quest_CopySelectedNodes()
// added-end
 {
 	// Export the selected nodes and place the text on the clipboard
 	FGraphPanelSelectionSet SelectedNodes = GetSelectedNodes();

...

// removed-start
}

bool FQuestGraphEditor::Quest_CanCopyNodes() const
// removed-end
// added-start
}*/

/*bool FQuestGraphEditor::Quest_CanCopyNodes() const
// added-end
 {
 
 	//Copying nodes is disabled for now

...

// removed-start
}

void FQuestGraphEditor::Quest_PasteNodes()
// removed-end
// added-start
}*/

/*void FQuestGraphEditor::Quest_PasteNodes()
// added-end
 {
 
 	if (TSharedPtr<SGraphEditor> CurrentGraphEditor = UpdateGraphEdPtr.Pin())

...

// removed-start
}

void FQuestGraphEditor::Quest_PasteNodesHere(const FVector2D& Location)
// removed-end
// added-start
}*/

/*void FQuestGraphEditor::Quest_PasteNodesHere(const FVector2D& Location)
// added-end
 {
 	TSharedPtr<SGraphEditor> CurrentGraphEditor = FocusedGraphEdPtr.Pin();
 	if (!CurrentGraphEditor.IsValid())

...

// removed-start
	FEdGraphUtilities::ImportNodesFromText(QuestGraph, TextToImport, /*out*/ PastedNodes);
// removed-end
// added-start
	FEdGraphUtilities::ImportNodesFromText(QuestGraph, TextToImport, out PastedNodes);
// added-end
 
 	for (TSet<UEdGraphNode*>::TIterator It(PastedNodes); It; ++It)
 	{

...

// removed-start
}

bool FQuestGraphEditor::Quest_CanPasteNodes() const
// removed-end
// added-start
}*/

/*bool FQuestGraphEditor::Quest_CanPasteNodes() const
// added-end
 {
 	//Pasting nodes is disabled for now
 	return false;

...

// removed-start
}

void FQuestGraphEditor::Quest_DuplicateNodes()
// removed-end
// added-start
}*/

/*void FQuestGraphEditor::Quest_DuplicateNodes()
// added-end
 {
 	CopySelectedNodes();
 	PasteNodes();
// removed-start
}

bool FQuestGraphEditor::Quest_CanDuplicateNodes() const
// removed-end
// added-start
}*/

/*bool FQuestGraphEditor::Quest_CanDuplicateNodes() const
// added-end

...

// removed-start
}

void FQuestGraphEditor::Quest_CreateComment()
// removed-end
// added-start
}*/

/*void FQuestGraphEditor::Quest_CreateComment()
// added-end
 {
 	TSharedPtr<SGraphEditor> GraphEditor = UpdateGraphEdPtr.Pin();
 	if (GraphEditor.IsValid())

...

// removed-start
}

bool FQuestGraphEditor::Quest_CanCreateComment() const
// removed-end
// added-start
}*/

/*bool FQuestGraphEditor::Quest_CanCreateComment() const
// added-end
 {
 	return true;
// removed-start
}
// removed-end
// added-start
}*/
// added-end
 
// added-start
}

void FQuestGraphEditor::SwitchToDialogueAsset()
{
	if (!QuestBlueprint)
	{
		return;
	}
	
	UQuest* Quest = Cast<UQuest>(QuestBlueprint->GeneratedClass.GetDefaultObject());
	
#if ENGINE_MAJOR_VERSION == 5 && ENGINE_MINOR_VERSION >= 2
	if (GEditor)
	{
		UAssetEditorSubsystem* AssetEditorSubsystem = GEditor->GetEditorSubsystem<UAssetEditorSubsystem>();
		if (AssetEditorSubsystem && Quest)
		{
			AssetEditorSubsystem->OpenEditorForAsset(UBlueprint::GetBlueprintFromClass(Quest->GetQuestDialogueClass()));
		}
	}
#else
	// UE 5.1 fallback (AssetEditorSubsystem does not exist)
	if (GEditor)
	{
		GEditor->EditObject(Quest->GetQuestDialogueClass());
	}
#endif
}

bool FQuestGraphEditor::CanSwitchToDialogueAsset()
{
	if (!QuestBlueprint)
	{
		return false;
	}
	
	UQuest* Quest = Cast<UQuest>(QuestBlueprint->GeneratedClass.GetDefaultObject());
	return Quest? Quest->GetQuestDialogueClass() != nullptr : false;
// added-end

...

// removed-start

// removed-end
// added-start
	
	ToolkitCommands->MapAction(FQuestEditorCommands::Get().OpenQuestDialogue,
		FExecuteAction::CreateSP(this, &FQuestGraphEditor::SwitchToDialogueAsset),
		FCanExecuteAction::CreateSP(this, &FQuestGraphEditor::CanSwitchToDialogueAsset));

	if (Debugger.IsValid())
	{
		Debugger->BindCommands(ToolkitCommands);
	}
	
// added-end
 	FBlueprintEditor::CreateDefaultCommands();
 }
 
// added-start
	// read only 
	if (!IsGraphEditable())
	{
		return;
	}
	
// added-end
// added-start
					const FScopedTransaction Transaction(NSLOCTEXT("QuestGraphEditor", "QuestGraphEditor_EventFromNode", "Create event for node"));
					QuestBlueprint->Modify();
					
// added-end
// added-start
void FQuestGraphEditor::SetGraphEditable(const bool Editable)
{
	if (IsValid(QuestBlueprint) && IsValid(QuestBlueprint->QuestGraph))
	{
		QuestBlueprint->QuestGraph->bEditable = Editable;
	}
}

bool FQuestGraphEditor::IsGraphEditable() const
{
	const UEdGraph* EdGraph = IsValid(QuestBlueprint) ? QuestBlueprint->QuestGraph : nullptr;
	return EdGraph? EdGraph->bEditable : false;
}

// added-end

...

// removed-start

#undef LOCTEXT_NAMESPACE// removed-end
// added-start
void FQuestGraphEditor::OnBeginPIE(bool bSimulating)
{
	SetGraphEditable(false);
}

void FQuestGraphEditor::OnEndPIE(bool bSimulating)
{
	SetGraphEditable(true);
}

#undef LOCTEXT_NAMESPACE
// added-end


```

### QuestEditorTabFactories.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestEditorTabFactories.cpp" showLineNumbers
 #include "QuestEditorTabFactories.h"
 #include "QuestBlueprint.h"

...

// removed-start
#include "EditorStyleSet.h"
// removed-end
 #include "Engine/Blueprint.h"
 #include "QuestEditorStyle.h"
  
// added-start
#if ENGINE_MAJOR_VERSION == 5 && ENGINE_MINOR_VERSION >= 6
using FGraphLocationType = FVector2f;
#else
using FGraphLocationType = FVector2D;
#endif

// added-end

...

// removed-start
	FVector2D ViewLocation;
// removed-end
// added-start
	FGraphLocationType ViewLocation;
// added-end
 	float ZoomAmount;
 	GraphEditor->GetViewLocation(ViewLocation, ZoomAmount);
 

...

// removed-start
#undef LOCTEXT_NAMESPACE// removed-end
// added-start
#undef LOCTEXT_NAMESPACE
// added-end


```

### QuestGraph.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestGraph.cpp" showLineNumbers
 #include "QuestGraph.h"
// added-start

#include "GraphEditAction.h"
// added-end
 #include "Quest.h"

...

// removed-start
#include "NarrativeFunctionLibrary.h"
#include "NarrativeDataTask.h"
// removed-end
 #include "NarrativeComponent.h"
 #include "QuestEditorSettings.h"
 
// added-start

bool UQuestGraph::Modify(bool bAlwaysMarkDirty)
{
	const bool bSavedToTransactionBuffer = Super::Modify(bAlwaysMarkDirty);

	if (UQuestBlueprint* QuestAsset = Cast<UQuestBlueprint>(GetOuter()))
	{
		// we are changing the quest template too
		if (QuestAsset->QuestTemplate)
		{
			QuestAsset->QuestTemplate->Modify(true);
		}
	}
	return bSavedToTransactionBuffer;
}
// added-end

...

// removed-start
	UQuest* Quest = QuestAsset->QuestTemplate;

// removed-end
 	//If we rewired a pin, we need to update the quest nodes to match the graph nodes
// removed-start
	if (Quest)
// removed-end
// added-start
	if (UQuest* Quest = QuestAsset? QuestAsset->QuestTemplate : nullptr)
// added-end
 	{
 		if (Pin->Direction == EEdGraphPinDirection::EGPD_Output)

...

// removed-start

// removed-end
 	UQuestBlueprint* QuestAsset = CastChecked<UQuestBlueprint>(GetOuter());
 	UQuest* Quest = QuestAsset->QuestTemplate;
 

...

// removed-start
		}
// removed-end
// added-start
			return;
		}

		// node quest is the correct state
		if (StateNode->State != StateNode->QuestNode)
		{
			StateNode->State = Cast<UQuestState>(StateNode->QuestNode);
		}
		Quest->AddState(StateNode->State);
// added-end
 	}
 	else if (UQuestGraphNode_Action* ActionNode = Cast<UQuestGraphNode_Action>(AddedNode))
 	{
// removed-start
		if (!ActionNode->Branch)
// removed-end
// added-start
		// if the branch is null then a new one is needed
		const bool bBranchIsNull = ActionNode->Branch == nullptr;
		if (bBranchIsNull)
// added-end

...

// removed-start
		}
		else
		{
			//Node already has a branch set, was probably created from context menu 
			if (ActionNode->Branch)
			{
				Quest->AddBranch(ActionNode->Branch);

				//Use rename to fix a bug where old outer wasnt being set properly
				ActionNode->Branch->Rename(nullptr, Quest);
			}
		}
	}
// removed-end
// added-start
			return;
		}

		// node quest is the correct branch
		if (ActionNode->Branch != ActionNode->QuestNode)
		{
			ActionNode->Branch = Cast<UQuestBranch>(ActionNode->QuestNode);
		}

		//Use rename to fix a bug where old outer wasn't being set properly
		ActionNode->Branch->Rename(nullptr, Quest);
		Quest->AddBranch(ActionNode->Branch);
	}
}

UQuestNode* UQuestGraph::DuplicateNode(const UQuestNode* OldNode)
{
	if (OldNode)
	{
		if (UQuestBlueprint* QuestAsset = Cast<UQuestBlueprint>(GetOuter()); QuestAsset && QuestAsset->QuestTemplate)
		{
			UQuestNode* DupNode = DuplicateObject<UQuestNode>(OldNode, OldNode->GetOuter());
			DupNode->EnsureUniqueID();

			// clear event name
			DupNode->OnEnteredFuncName = NAME_None;
			
			return DupNode;
		}
	}

	return nullptr;
// added-end
 }
 
 void UQuestGraph::PIEStarted(bool bIsSimulating)


```

### QuestGraphNode_Failure.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestGraphNode_Failure.cpp" showLineNumbers
 #include "QuestGraphNode_Failure.h"
 #include "QuestEditorSettings.h"


```

### K2Node_CompleteNarrativeTask.h

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/K2Node_CompleteNarrativeTask.h" showLineNumbers
#pragma once
 
...

// removed-start
#include "K2Node_CallFunction.h"
// removed-end
 #include "K2Node_CompleteNarrativeTask.generated.h"
 
 /**


```

### QuestGraphNode_Success.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestGraphNode_Success.cpp" showLineNumbers
 #include "QuestGraphNode_Success.h"
 #include "QuestEditorSettings.h"


```

### AssetTypeActions_QuestAsset.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/AssetTypeActions_QuestAsset.cpp" showLineNumbers
 #include "AssetTypeActions_QuestAsset.h"
 #include "QuestBlueprint.h"

...

// removed-start
#include "QuestAssetFactory.h"
// removed-end
 #include <Engine/BlueprintCore.h>
// removed-start
#include <Animation/AnimBlueprint.h>
// removed-end
 
 #define LOCTEXT_NAMESPACE "AssetTypeActions"

...



```

### QuestGraphEditor.h

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestGraphEditor.h" showLineNumbers
#pragma once
 
...

// removed-start
#include "UObject/NoExportTypes.h"
// removed-end
 #include "Misc/NotifyHook.h"
 #include "EditorUndoClient.h"
 #include "Widgets/SWidget.h"
// added-start

// added-end

...

// removed-start
	
	//Not all of these are used yet
	void Quest_SelectAllNodes();
	bool Quest_CanSelectAllNodes() const;
	void Quest_DeleteSelectedNodes();
	bool Quest_CanDeleteNodes() const;
	void Quest_DeleteSelectedDuplicatableNodes();
	void Quest_CutSelectedNodes();
	bool Quest_CanCutNodes() const;
	void Quest_CopySelectedNodes();
	bool Quest_CanCopyNodes() const;
	void Quest_PasteNodes();
	void Quest_PasteNodesHere(const FVector2D& Location);
	bool Quest_CanPasteNodes() const;
	void Quest_DuplicateNodes();
	bool Quest_CanDuplicateNodes() const;
	void Quest_CreateComment();
	bool Quest_CanCreateComment() const;
// removed-end
 
// added-start
	//none of these are used anymore
	//void Quest_SelectAllNodes();
	//bool Quest_CanSelectAllNodes() const;
	//void Quest_DeleteSelectedNodes();
	//bool Quest_CanDeleteNodes() const;
	//void Quest_DeleteSelectedDuplicatableNodes();
	//void Quest_CutSelectedNodes();
	//bool Quest_CanCutNodes() const;
	//void Quest_CopySelectedNodes();
	//bool Quest_CanCopyNodes() const;
	//void Quest_PasteNodes();
	//void Quest_PasteNodesHere(const FVector2D& Location);
	//bool Quest_CanPasteNodes() const;
	//void Quest_DuplicateNodes();
	//bool Quest_CanDuplicateNodes() const;
	//void Quest_CreateComment();
	//bool Quest_CanCreateComment() const;
// added-end
 
 	void OnWorldChange(UWorld* World, EMapChangeType MapChangeType);
// removed-start

// removed-end
// added-start
	
	void SwitchToDialogueAsset();
	bool CanSwitchToDialogueAsset();
// added-end
// added-start
	void SetGraphEditable(const bool Editable);
	bool IsGraphEditable() const;

// added-end
// added-start
	void OnBeginPIE(bool bSimulating);
	void OnEndPIE(bool bSimulating);
	
// added-end
// added-start
	/// debugger instance for this graph
	TSharedPtr<class FQuestDebugger> Debugger;
	
// added-end

...



```

### SQuestGraphNode.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/SQuestGraphNode.cpp" showLineNumbers
 #include "SQuestGraphNode.h"
 #include "QuestGraphNode.h"

...

// removed-start
#include "QuestGraph.h"
// removed-end
 #include "SGraphPanel.h"
 #include "ScopedTransaction.h"
 #include "QuestSM.h"
// removed-start
#include "QuestEditorStyle.h"
// removed-end

...

// removed-start
#include "QuestGraphNode_State.h"
// removed-end
 #include "NarrativeEvent.h"
 #include "QuestEditorSettings.h"
 #include <Blueprint/UserWidget.h>

...

// removed-start
#include <Slate/SObjectWidget.h>
// removed-end
 #include "QuestNodeUserWidget.h"
 #include "QuestBlueprint.h"
 

...

// removed-start
				+ SOverlay::Slot()
			[
				QuestNodeWidgetRef.ToSharedRef()
			]
// removed-end
// added-start
				
				// quest node widget
				+SOverlay::Slot()
				[
					QuestNodeWidgetRef.ToSharedRef()
				]

				// debugger overlay
				+SOverlay::Slot()
				[
					SNew(SImage)
					.Image(FAppStyle::GetBrush(TEXT("Graph.Node.DiffHighlight")))
					// yellow
					.ColorAndOpacity(FLinearColor(0.0f, 1.0f, 0.0f, 0.75f))
					.Visibility_Raw(this, &SQuestGraphNode::GetActiveStateImageVisibility)
				]
// added-end
 			];
 	}
 	else // Old style yucky slate ones

...

// removed-start

// removed-end
 	if (UQuestGraphNode* QuestGraphNode = Cast<UQuestGraphNode>(GraphNode))
 	{
 		return QuestGraphNode->GetGraphNodeColor();
// added-start
}

EVisibility SQuestGraphNode::GetActiveStateImageVisibility() const
{
	const UQuestGraphNode* QuestGraphNode = Cast<UQuestGraphNode>(GraphNode);
	return QuestGraphNode && QuestGraphNode->bActiveNode? EVisibility::HitTestInvisible : EVisibility::Collapsed;
// added-end

...



```

### QuestGraphNode_PersistentTasks.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestGraphNode_PersistentTasks.cpp" showLineNumbers
 #include "QuestGraphNode_PersistentTasks.h"
 #include "QuestEditorTypes.h"

...

// removed-start
#include "QuestSM.h"
// removed-end
 
 void UQuestGraphNode_PersistentTasks::AllocateDefaultPins()
 {


```

### NarrativeQuestEditorModule.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/NarrativeQuestEditorModule.cpp" showLineNumbers
 #include "NarrativeQuestEditorModule.h"
 #include "IQuestEditor.h"

...

// removed-start
#include "QuestTask.h"
// removed-end
 #include "EdGraphUtilities.h"
 #include "SQuestGraphNode.h"
 #include "QuestGraphNode.h"

...

// removed-start
#include "ISettingsSection.h"
#include "ISettingsContainer.h"
#include <ISettingsCategory.h>
// removed-end
 #include "KismetCompiler.h"
 #include "QuestBlueprintCompiler.h"
// removed-start
#include <AssetRegistry/AssetRegistryModule.h>
// removed-end
// added-start

#include "NodeSelector/GraphPin_QuestNodeSelector.h"
#include "NodeSelector/QuestNodeSelectorPropertyCustomization.h"
// added-end
 #include "UObject/CoreRedirects.h"
// added-start
	FEdGraphUtilities::RegisterVisualPinFactory(MakeShared<FPinFactoryQuestNodeSelector>());

// added-end
// added-start

	// Register custom property layout for FQuestStateSelector
	PropertyModule.RegisterCustomPropertyTypeLayout(
		"QuestStateSelector",
		FOnGetPropertyTypeCustomizationInstance::CreateStatic(&FQuestStateSelectorPropertyTypeCustomization::MakeInstance)
	);

	// Register custom property layout for FQuestBranchSelector
	PropertyModule.RegisterCustomPropertyTypeLayout(
		"QuestBranchSelector",
		FOnGetPropertyTypeCustomizationInstance::CreateStatic(&FQuestBranchSelectorPropertyTypeCustomization::MakeInstance)
	);
	
// added-end
// added-start
		
		PropertyModule.UnregisterCustomPropertyTypeLayout("DialogueNodeSelector");

// added-end
// added-start

	FEdGraphUtilities::UnregisterVisualPinFactory(MakeShared<FPinFactoryQuestNodeSelector>());
// added-end

...

// removed-start
IMPLEMENT_MODULE(FNarrativeQuestEditorModule, NarrativeQuestEditor)// removed-end
// added-start
IMPLEMENT_MODULE(FNarrativeQuestEditorModule, NarrativeQuestEditor)
// added-end


```

### QuestEditorDetails.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestEditorDetails.cpp" showLineNumbers
 #include "QuestEditorDetails.h"
 #include "DetailLayoutBuilder.h"
// removed-start
#include "DetailWidgetRow.h"
// removed-end

...

// removed-start
#include "Quest.h"
#include "QuestBlueprint.h"
#include "DetailCategoryBuilder.h"
#include "NarrativeDataTask.h"
// removed-end
// added-start
#include "PropertyHandle.h"
// added-end
 
 #define LOCTEXT_NAMESPACE "QuestEditorDetails"
 


```

### QuestEditorModes.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestEditorModes.cpp" showLineNumbers
 #include "QuestEditorModes.h"
// removed-start
#include "QuestEditorTabs.h"
// removed-end
 #include "QuestEditorToolbar.h"
// removed-start
#include "QuestEditorDetails.h"
// removed-end

...

// removed-start
#include "BlueprintEditorTabs.h"
// removed-end
 
 #define LOCTEXT_NAMESPACE "QuestGraphApplicationMode"
 


```

### QuestEditorSettings.h

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestEditorSettings.h" showLineNumbers
#pragma once
 
...

// removed-start
#include "UObject/NoExportTypes.h"
// removed-end
 #include "QuestEditorSettings.generated.h"
 
 /**


```

### QuestGraphNode_State.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestGraphNode_State.cpp" showLineNumbers
 #include "QuestGraphNode_State.h"
 #include "QuestEditorTypes.h"


```

### QuestEditorStyle.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestEditorStyle.cpp" showLineNumbers
 #include "QuestEditorStyle.h"
 #include "Styling/SlateStyle.h"

...

// removed-start
	StyleSet->Set(FName(TEXT("ClassThumbnail.NarrativePartyComponent")), new IMAGE_BRUSH("NarrativePartyLogo", FVector2D(64, 64)));
	StyleSet->Set(FName(TEXT("ClassIcon.NarrativePartyComponent")), new IMAGE_BRUSH("NarrativePartyLogo", FVector2D(16, 16)));
// removed-end
// added-start
	StyleSet->Set(FName(TEXT("ClassThumbnail.NarrativeTalesPartyComponent")), new IMAGE_BRUSH("NarrativePartyLogo", FVector2D(64, 64)));
	StyleSet->Set(FName(TEXT("ClassIcon.NarrativeTalesPartyComponent")), new IMAGE_BRUSH("NarrativePartyLogo", FVector2D(16, 16)));
// added-end
 
 	//Toolbar buttons
 	StyleSet->Set(FName(TEXT("QuestEditor.Common.ShowQuestDetails")), new IMAGE_BRUSH("QuestEditor/Icons/ShowQuestDetails_40x", FVector2D(40.f, 40.f)));
// added-start
	StyleSet->Set(FName(TEXT("QuestEditor.DialogueIcon")), new IMAGE_BRUSH("Dialogue", FVector2D(64.f, 64.f)));
// added-end

...



```

### QuestGraphNode.h

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestGraphNode.h" showLineNumbers
 #pragma once
 
// added-start
class FQuestGraphEditor;
// added-end
// added-start

	UQuestGraphNode()
	: ParentNode(nullptr), QuestNode(nullptr), OnEnteredCustomNode(nullptr), bActiveNode(false)
	{}
// added-end

...

// removed-start
	virtual FLinearColor GetGraphNodeColor() const { return FLinearColor(0.15f, 0.15f, 0.15f); };

// removed-end
// added-start
	virtual FLinearColor GetGraphNodeColor() const { return FLinearColor(0.15f, 0.15f, 0.15f); }
	virtual FLinearColor GetGraphBorderNodeColor() const { return bActiveNode? FLinearColor::Yellow : FLinearColor::Transparent; }
	
	uint8 bActiveNode : 1;
// added-end
 
 };


```

### QuestEditorTypes.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestEditorTypes.cpp" showLineNumbers
 #include "QuestEditorTypes.h"
 


```

### QuestBlueprintCompiler.h

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestBlueprintCompiler.h" showLineNumbers
 #pragma once
 
// added-start
#include "QuestSM.h"
// added-end
// added-start
	virtual void CreateClassVariablesFromBlueprint() override;
// added-end
// added-start
	// Map of properties created for states; to aid in debug data generation
	TMap<UQuestState*, FProperty*> StateToMemberVariableMap;

// added-end

...



```

### QuestEditorToolbar.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestEditorToolbar.cpp" showLineNumbers
 #include "QuestEditorToolbar.h"
 #include "Misc/Attribute.h"

...

// removed-start
#include "EditorStyleSet.h"
// removed-end
 #include "Framework/MultiBox/MultiBoxBuilder.h"
 #include "QuestGraphEditor.h"
 #include "WorkflowOrientedApp/SModeWidget.h"


```

### QuestNodeUserWidget.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestNodeUserWidget.cpp" showLineNumbers

 //  Copyright Narrative Tools 2022.
// removed-start

// removed-end
 
 #include "QuestNodeUserWidget.h"
// added-start
#include "DialogueBlueprint.h"
#include "IDialogueEditor.h"
#include "Dialogue.h"
#include "Quest.h"
// added-end
// added-start

void UQuestNodeUserWidget::AddOrJumpToMatchingDialogueNode()
{
	UAssetEditorSubsystem* AssetEditorSubsystem = GEditor->GetEditorSubsystem<UAssetEditorSubsystem>();
	UBlueprint* DialogueBP = UBlueprint::GetBlueprintFromClass(Quest->GetQuestDialogueClass());
	if (AssetEditorSubsystem && DialogueBP)
	{
		// find or open graph editor for bp
		IDialogueEditor* DialogueEditor = static_cast<IDialogueEditor*>(AssetEditorSubsystem->FindEditorForAsset(DialogueBP, true));
		if (!DialogueEditor)
		{
			AssetEditorSubsystem->OpenEditorForAsset(DialogueBP);
			DialogueEditor = static_cast<IDialogueEditor*>(AssetEditorSubsystem->FindEditorForAsset(DialogueBP, true));
		}
		
		if (DialogueEditor)
		{
			DialogueEditor->JumpOrAddDialogueNode(Node->GetID());
		}
	}
}

bool UQuestNodeUserWidget::DoesMatchingDialogueNodeExist()
{
	const FName NodeID = Node->GetID();
	if (UDialogueBlueprint* DialogueBP = Quest? Cast<UDialogueBlueprint>(UBlueprint::GetBlueprintFromClass(Quest->GetQuestDialogueClass())) : nullptr)
	{
		return DialogueBP->DialogueTemplate->GetNodes().FindByPredicate([&NodeID](UDialogueNode* DialogueNode)
		{
			return DialogueNode->GetID() == NodeID;
		}) != nullptr;
	}

	return false;
}

...

// added-end


```

### QuestGraphSchema.cpp

```cpp title="/Narrative/Source/NarrativeQuestEditor/Private/QuestGraphSchema.cpp" showLineNumbers
 #include "QuestGraphSchema.h"
 #include "QuestGraphNode_Root.h"

...

// removed-start
#include "IQuestEditor.h"
// removed-end
 #include "QuestBlueprint.h"
// removed-start
#include "Toolkits/ToolkitManager.h"
// removed-end
 #include "QuestConnectionDrawingPolicy.h"
 #include "QuestGraph.h"
// removed-start
#include "GraphEditorActions.h"
#include "Framework/Commands/GenericCommands.h"
#include "QuestEditorCommands.h"
#include "AssetRegistry/AssetRegistryModule.h"
#include "NarrativeDataTask.h"
// removed-end

...

// removed-start
					FCategorizedGraphActionListBuilder ActionCategoryBuilder("Tasks: " + TaskCategory);

					TSharedPtr<FQuestSchemaAction_NewNode> AddAction = UQuestGraphSchema::AddNewNodeAction(ActionCategoryBuilder, FText::GetEmpty(), FText::FromString(TaskDescription), FText::FromString(TaskDescription));

					AddAction->UpdateSearchData(FText::FromString(TaskName), FText::FromString(TaskDescription), FText::GetEmpty(), FText::GetEmpty());
// removed-end
// added-start
					FString Category = "Tasks: " + TaskCategory;
					FCategorizedGraphActionListBuilder ActionCategoryBuilder(Category);

					TSharedPtr<FQuestSchemaAction_NewNode> AddAction = UQuestGraphSchema::AddNewNodeAction(ActionCategoryBuilder, FText::GetEmpty(), FText::FromString(TaskName), FText::FromString(TaskDescription));

					//AddAction->UpdateSearchData(FText::FromString(TaskName), FText::FromString(TaskDescription), FText::GetEmpty(), FText::GetEmpty());
// added-end
 					//AddAction->TaskClass = QuestTaskClass;
 
 					UQuestGraphNode_Action* Node = NewObject<UQuestGraphNode_Action>(ContextMenuBuilder.OwnerOfTemporaries, UQuestGraphNode_Action::StaticClass());
// added-start
void UQuestGraphSchema::BreakPinLinks(UEdGraphPin& TargetPin, bool bSendsNodeNotifcation) const
{
	const FScopedTransaction Transaction(NSLOCTEXT("QuestGraphSchema", "QuestGraphSchema_BreakPinLinks", "Break Pin Links"));
	
	Super::BreakPinLinks(TargetPin, bSendsNodeNotifcation);
}

// added-end

...

// removed-start
#undef LOCTEXT_NAMESPACE// removed-end
// added-start
#undef LOCTEXT_NAMESPACE
// added-end


```

### Narrative.Build.cs

```cpp title="/Narrative/Source/Narrative/Narrative.Build.cs" showLineNumbers
 using UnrealBuildTool;
 
// added-start
                "GameplayTags"
// added-end

...



```

### Narrative.h

```cpp title="/Narrative/Source/Narrative/Public/Narrative.h" showLineNumbers
#pragma once
 
...

// removed-start

DECLARE_LOG_CATEGORY_EXTERN(LogNarrativeRuntime, All, All);
// removed-end
 
 //Runtime module for narrative 
 class FNarrativeModule : public IModuleInterface


```

### NarrativeQuestSettings.h

```cpp title="/Narrative/Source/Narrative/Public/NarrativeQuestSettings.h" showLineNumbers

// removed-start
// Fill out your copyright notice in the Description page of Project Settings.
// removed-end
// added-start
// Copyright Narrative Tools 2025. 
// added-end
 
 #pragma once
 

...

// removed-start
#include "UObject/NoExportTypes.h"
// removed-end
 #include "NarrativeQuestSettings.generated.h"
 
 /**


```

### Quest.h

```cpp title="/Narrative/Source/Narrative/Public/Quest.h" showLineNumbers
#pragma once
 
...

// removed-start
#include "UObject/NoExportTypes.h"
// removed-end
 #include "QuestSM.h"
 #include "QuestTask.h"
 #include "Quest.generated.h"
// added-start
class UDialogue;
// added-end
// added-start
DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnQuestPostLoad, const UQuest*, Quest);
// added-end
// added-start
class UQuest; 

//Allows blueprints to define instanced quest requirements. 
USTRUCT(BlueprintType)
struct NARRATIVE_API FInstancedQuestRequirement
{
	GENERATED_BODY()


	FInstancedQuestRequirement(){};

	//The instanced goal
	UPROPERTY(Instanced, EditAnywhere, BlueprintReadOnly, Category = "Requirement")
	TObjectPtr<UQuestRequirement> Requirement;

};

/** Quest Requirements can be added/removed by quests at any time to define requirements the player needs to adhere to.
For example, you could add a 'Stay Near Actor' requirement that specifies we need to stay near a certain NPC or the quest fails. 
Another example might be a 'Keep NPC Alive' requirement that fails the quest if a certain NPC dies. */
UCLASS(abstract, Blueprintable, BlueprintType, EditInlineNew)
class NARRATIVE_API UQuestRequirement : public UObject
{

	GENERATED_BODY()

protected:

	friend class UQuest; 

	UQuestRequirement();


	// Allows the Object to get a valid UWorld from it's outer.
	virtual UWorld* GetWorld() const override
	{
		if (HasAllFlags(RF_ClassDefaultObject))
		{
			// If we are a CDO, we must return nullptr instead of calling Outer->GetWorld() to fool UObject::ImplementsGetWorld.
			return nullptr;
		}

		UObject* Outer = GetOuter();

		while (Outer)
		{
			UWorld* World = Outer->GetWorld();
			if (World)
			{
				return World;
			}

			Outer = Outer->GetOuter();
		}

		return nullptr;
	};

	//Called when this requirement is added to the quest. 
	UFUNCTION(BlueprintNativeEvent, Category = "Requirement")
	void OnAdded(UQuest* Quest);
	virtual void OnAdded_Implementation(UQuest* Quest);

	//Called when this requirement is removed from the quest. 
	UFUNCTION(BlueprintNativeEvent, Category = "Requirement")
	void OnRemoved(UQuest* Quest);
	virtual void OnRemoved_Implementation(UQuest* Quest);

public:

	//Get the quest that owns this requirement.  
	UFUNCTION(BlueprintPure, Category = "Requirement")
	virtual UQuest* GetOwningQuest() const;

};

// added-end

...

// removed-start

// removed-end
 protected:
// added-start

#if WITH_EDITOR
	virtual void PostLoad() override;
	virtual void PreEditChange(FProperty* PropertyAboutToChange) override;
	virtual void PostEditChangeProperty(struct FPropertyChangedEvent& PropertyChangedEvent) override;
	void UpdateDialogueConnection();

#endif
	
	//Called when the quest is loaded back in from disk
	UFUNCTION(BlueprintImplementableEvent, meta = (DisplayName="On Quest Post Load"))
	void BPQuestPostLoad();

	//Called when the quest is loaded back in from disk - allows you to set any quest state back up 
	virtual void QuestPostLoad();
// added-end
 
 	//Called before tasks are ready - a good place to set up data tasks depend on 

...

// removed-start
		void BPPreQuestStarted(const UQuest* Quest);
// removed-end
// added-start
	void BPPreQuestStarted(const UQuest* Quest);
// added-end
 
 	UFUNCTION(BlueprintImplementableEvent, meta = (DisplayName="On Quest Started"))
// removed-start
		void BPOnQuestStarted(const UQuest* Quest);

	UFUNCTION()
		void FailQuest(FText QuestFailedMessage);
// removed-end
// added-start
	void BPOnQuestStarted(const UQuest* Quest);

	UFUNCTION(BlueprintCallable, Category = "Quests")
	virtual void FailQuest(FText QuestFailedMessage);
// added-end
 

...

// removed-start
		void BPOnQuestFailed(const UQuest* Quest, const FText& QuestFailedMessage);
// removed-end
// added-start
	void BPOnQuestFailed(const UQuest* Quest, const FText& QuestFailedMessage);
// added-end
 
 	/**Manually set the quest as succeeded. You'll need to provide some text for the UI as theres no node  the quest, you're manually succeeding it.*/
// removed-start
	UFUNCTION()
		void SucceedQuest(FText QuestSucceededMessage);
// removed-end
// added-start
	UFUNCTION(BlueprintCallable, Category = "Quests")
	virtual void SucceedQuest(FText QuestSucceededMessage);
// added-end
 

...

// removed-start
		void OnQuestTaskProgressChanged(const UNarrativeTask* Task, const class UQuestBranch* Step, int32 CurrentProgress, int32 RequiredProgress);
// removed-end
// added-start
	virtual void OnQuestTaskProgressChanged(const UNarrativeTask* Task, const class UQuestBranch* Step, int32 CurrentProgress, int32 RequiredProgress);
// added-end
 
 	UFUNCTION(BlueprintImplementableEvent, meta = (DisplayName = "On Quest Objective Progress Made"))
// removed-start
		void BPOnQuestTaskProgressChanged(const UQuest* Quest, const UNarrativeTask* Task, const class UQuestBranch* Step, int32 CurrentProgress, int32 RequiredProgress);
// removed-end
// added-start
	void BPOnQuestTaskProgressChanged(const UQuest* Quest, const UNarrativeTask* Task, const class UQuestBranch* Step, int32 CurrentProgress, int32 RequiredProgress);
// added-end
 

...

// removed-start
		void OnQuestBranchCompleted(const class UQuestBranch* Branch);
// removed-end
// added-start
	virtual void OnQuestBranchCompleted(const class UQuestBranch* Branch);
// added-end
 
 	UFUNCTION(BlueprintImplementableEvent, meta = (DisplayName = "On Branch Taken"))
 		void BPOnQuestBranchCompleted(const UQuest* Quest, const class UQuestBranch* Branch);

...

// removed-start

// removed-end
// added-start
	
// added-end
 	virtual void EnterState_Internal(UQuestState* NewState);
 	virtual void TakeBranch(UQuestBranch* Branch);
 

...

// removed-start


// removed-end
// added-start
	
// added-end
 	virtual void BeginQuest(const FName& OptionalStartFromID = NAME_None);
 
// added-start
	void HandleBeginDialogue();
	
// added-end
 	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Quest Details")
// added-start

	// A dialogue asset holding all dialogue from the quest. 
	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category="Dialogue")
	TSubclassOf<UDialogue> QuestDialogue;

private:
	
#if WITH_EDITORONLY_DATA

	// use to check if the QuestDialogue was cleared and to know what it was to remove refs 
	UPROPERTY()
	TSubclassOf<UDialogue> LastQuestDialogue;
	
#endif

protected:
	
	// if true, the quest dialogue will resume when you load back into the game
	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category="Dialogue")
	bool bResumeDialogueAfterLoad;
// added-end
// added-start
	//Holds all the quest requirements 
	UPROPERTY()
	TArray<TObjectPtr<UQuestRequirement>> QuestRequirements;

// added-end

...

// removed-start
		FOnQuestStarted QuestStarted;
// removed-end
// added-start
	FOnQuestStarted QuestStarted;

	/**Called when the quest has been loaded back in.*/
	UPROPERTY(BlueprintAssignable, Category = "Quests")
	FOnQuestPostLoad OnQuestPostLoad;
// added-end
 
 	/**Called when a quest is forgotten.*/
 	UPROPERTY(BlueprintAssignable, Category = "Quests")
// removed-start
		FOnQuestForgotten QuestForgotten;
// removed-end
// added-start
	FOnQuestForgotten QuestForgotten;
// added-end

...

// removed-start
	UFUNCTION(BlueprintNativeEvent, BlueprintCallable, Category = "Dialogue")
// removed-end
// added-start
	UFUNCTION(BlueprintNativeEvent, BlueprintCallable, Category = "Quest")
// added-end
 	AActor* SpawnQuestActor(TSubclassOf<class AActor> ActorClass, const FTransform& ActorTransform);
 	virtual AActor* SpawnQuestActor_Implementation(TSubclassOf<class AActor> ActorClass, const FTransform& ActorTransform);
 
// added-start
	/* Add a requirement to the quest. */
	UFUNCTION(BlueprintNativeEvent, BlueprintCallable, Category = "Quest")
	void AddQuestRequirement(UQuestRequirement* Requirement);
	virtual void AddQuestRequirement_Implementation(UQuestRequirement* Requirement);

	/* Remove a requirement from the quest. */
	UFUNCTION(BlueprintNativeEvent, BlueprintCallable, Category = "Quest")
	void RemoveQuestRequirement(UQuestRequirement* Requirement);
	virtual void RemoveQuestRequirement_Implementation(UQuestRequirement* Requirement);

// added-end

...

// removed-start
	TArray<class APlayerController*> GetGroupMembers() const; 

// removed-end
// added-start
	TArray<class APlayerController*> GetGroupMembers() const;

	TSubclassOf<UDialogue> GetQuestDialogueClass() { return QuestDialogue; }
// added-end
 };
// added-start

struct NARRATIVE_API FQuestDelegates final
{

	DECLARE_MULTICAST_DELEGATE_ThreeParams(FOnQuestStartedSignature, UNarrativeComponent*, UQuest*, const FName& OptionalStartFromID);
	DECLARE_MULTICAST_DELEGATE_TwoParams(FOnQuestEndSignature, UNarrativeComponent*, UQuest*);
	
	// called when a quest starts
	static FOnQuestStartedSignature OnQuestStarted;
	
	// called when a quest ends
	static FOnQuestEndSignature OnQuestEnd;
};
// added-end


```

### NarrativeEvent.h

```cpp title="/Narrative/Source/Narrative/Public/NarrativeEvent.h" showLineNumbers
#pragma once
 
...

// removed-start
#include "UObject/NoExportTypes.h"
// removed-end
 #include "NarrativeEvent.generated.h"
 
 
// added-start
	/**
	This event will only fire if the following conditions are met 
	*/
	UPROPERTY(EditAnywhere, BlueprintReadOnly, Instanced, Category = "Events & Conditions")
	TArray<class UNarrativeCondition*> Conditions;

// added-end

...

// removed-start
	void ExecuteEvent(APawn* Pawn, APlayerController* Controller, class UNarrativeComponent* NarrativeComponent);
	virtual void ExecuteEvent_Implementation(APawn* Pawn, APlayerController* Controller, class UNarrativeComponent* NarrativeComponent);
// removed-end
// added-start
	void OnActivate(APawn* Target, APlayerController* Controller, class UNarrativeComponent* NarrativeComponent);
	virtual void OnActivate_Implementation(APawn* Target, APlayerController* Controller, class UNarrativeComponent* NarrativeComponent);

	UFUNCTION(BlueprintNativeEvent, Category = "Event")
	void OnDeactivate(APawn* Target, APlayerController* Controller, class UNarrativeComponent* NarrativeComponent);
	virtual void OnDeactivate_Implementation(APawn* Target, APlayerController* Controller, class UNarrativeComponent* NarrativeComponent);

	/**Execute the event.
	@param Target this is the target that the event was specified to run on. 
	*/
	UFUNCTION(BlueprintNativeEvent, Category = "Event")
	void ExecuteEvent(APawn* Target, APlayerController* Controller, class UNarrativeComponent* NarrativeComponent);
	virtual void ExecuteEvent_Implementation(APawn* Target, APlayerController* Controller, class UNarrativeComponent* NarrativeComponent);
// added-end
 
 	/**Define the text that will show up on a node if this event is added to it */
 	UFUNCTION(BlueprintNativeEvent, BlueprintCallable, Category = "Event")
// added-start
	
	//Check if all the conditions are met on this quest/dialogue node
	UFUNCTION(BlueprintCallable, Category = "Events & Conditions")
	bool AreConditionsMet(APawn* Pawn, APlayerController* Controller, class UNarrativeComponent* NarrativeComponent);
// added-end

...



```

### NarrativeDialogueSequence.h

```cpp title="/Narrative/Source/Narrative/Public/NarrativeDialogueSequence.h" showLineNumbers
#pragma once
 
...

// removed-start
#include "UObject/NoExportTypes.h"
// removed-end
 #include "LevelSequencePlayer.h"
// removed-start
#include "DialogueSM.h"
// removed-end
 #include <MovieSceneSequencePlayer.h>
 #include <CineCameraSettings.h>

...



```

### NarrativeComponent.h

```cpp title="/Narrative/Source/Narrative/Public/NarrativeComponent.h" showLineNumbers
#pragma once
 
...

// removed-start
DECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams(FOnDialogueFinished, class UDialogue*, Dialogue, const bool, bStartingNewDialogue);
// removed-end
// added-start
DECLARE_DYNAMIC_MULTICAST_DELEGATE_ThreeParams(FOnDialogueFinished, class UDialogue*, Dialogue, const bool, bStartingNewDialogue, const EExitDialogueReason, Reason);
// added-end
 DECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams(FDialogueOptionSelected, class UDialogue*, Dialogue, class UDialogueNode_Player*, PlayerReply);
 DECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams(FDialogueRepliesAvailable, class UDialogue*, Dialogue, const TArray<UDialogueNode_Player*>&, PlayerReplies);
 DECLARE_DYNAMIC_MULTICAST_DELEGATE_FourParams(FNPCDialogueLineStarted, class UDialogue*, Dialogue, class UDialogueNode_NPC*, Node, const FDialogueLine&, DialogueLine, const FSpeakerInfo&, Speaker);

...

// removed-start
UCLASS( ClassGroup=(Narrative), DisplayName = "Narrative Component", meta=(BlueprintSpawnableComponent) )
// removed-end
// added-start
UCLASS( ClassGroup=(Narrative), DisplayName = "Narrative Tales Component", meta=(BlueprintSpawnableComponent) )
// added-end
 class NARRATIVE_API UNarrativeComponent : public UActorComponent
 {
 	GENERATED_BODY()
// added-start

	/*A map of every narrative task the player has ever completed, where the key is the amount of times the action has been completed
	a TMap means we can very efficiently track large numbers of actions, such as shooting where the player may shoot a gun thousands of times */
	UPROPERTY(EditAnywhere, SaveGame, Category = "Quests")
	TMap<FString, int32> MasterTaskList;
// added-end

...

// removed-start
	/*A map of every narrative task the player has ever completed, where the key is the amount of times the action has been completed
	a TMap means we can very efficiently track large numbers of actions, such as shooting where the player may shoot a gun thousands of times
	
	*/
	UPROPERTY(EditAnywhere, Category = "Quests")
	TMap<FString, int32> MasterTaskList;

// removed-end
 	//We set this flag to true during loading so we don't broadcast any quest update delegates as we load quests back in
 	bool bIsLoading;
 
// added-start
	virtual void DialogueRepliesAvailable(class UDialogue* Dialogue, const TArray<UDialogueNode_Player*>& PlayerReplies);

	UFUNCTION()
	virtual void DialogueLineStarted(class UDialogue* Dialogue, UDialogueNode* Node, const FDialogueLine& DialogueLine);

	UFUNCTION()
	virtual void DialogueLineFinished(class UDialogue* Dialogue, UDialogueNode* Node, const FDialogueLine& DialogueLine);

	UFUNCTION()
	virtual void DialogueBegan(class UDialogue* Dialogue);

	UFUNCTION()
	virtual void DialogueFinished(class UDialogue* Dialogue, const bool bStartingNewDialogue, const EExitDialogueReason Reason);

	UFUNCTION()
// added-end

...

// removed-start
	UFUNCTION()
	virtual void DialogueRepliesAvailable(class UDialogue* Dialogue, const TArray<UDialogueNode_Player*>& PlayerReplies);

	UFUNCTION()
	virtual void DialogueLineStarted(class UDialogue* Dialogue, UDialogueNode* Node, const FDialogueLine& DialogueLine);

	UFUNCTION()
	virtual void DialogueLineFinished(class UDialogue* Dialogue, UDialogueNode* Node, const FDialogueLine& DialogueLine);

	UFUNCTION()
	virtual void DialogueBegan(class UDialogue* Dialogue);

	UFUNCTION()
	virtual void DialogueFinished(class UDialogue* Dialogue, const bool bStartingNewDialogue);
// removed-end
 
 
 public:

...

// removed-start
	virtual void ClientExitDialogue();
// removed-end
// added-start
	virtual void ClientExitDialogue(const EExitDialogueReason Reason);
// added-end
 
 	/**Used by the server to tell client to end dialogue*/
 	UFUNCTION(Client, Reliable, Category = "Dialogues")
// removed-start
	virtual void ClientExitPartyDialogue();
// removed-end
// added-start
	virtual void ClientExitPartyDialogue(const EExitDialogueReason Reason);
// added-end

...

// removed-start
	virtual void TryExitDialogue();
// removed-end
// added-start
	virtual bool TryExitDialogue(const EExitDialogueReason Reason);
// added-end
 
 	/**Exit the dialogue, will never fail*/
// removed-start
	virtual void ExitDialogue();
// removed-end
// added-start
	virtual void ExitDialogue(const EExitDialogueReason Reason);
// added-end
 

...

// removed-start
	virtual void ServerTryExitDialogue();
// removed-end
// added-start
	virtual void ServerTryExitDialogue(const EExitDialogueReason Reason);
// added-end
 
 	/**Return true if we're in a dialogue 
 

...

// removed-start



};// removed-end
// added-start
};
// added-end


```

### NarrativeCondition.h

```cpp title="/Narrative/Source/Narrative/Public/NarrativeCondition.h" showLineNumbers
#pragma once
 
...

// removed-start
#include "UObject/NoExportTypes.h"
// removed-end
 #include "NarrativeCondition.generated.h"
 
 //How do we handle running this condition on a party dialogue?


```

### QuestTask.h

```cpp title="/Narrative/Source/Narrative/Public/QuestTask.h" showLineNumbers

 #pragma once
 
 #include "CoreMinimal.h"
// removed-start
#include "UObject/NoExportTypes.h"
// removed-end

...

// removed-start
 * Tasks are blueprints that manage a task for the player to complete. This is mostly used by the quest editor. 
// removed-end
// added-start
 * Tasks are blueprints that manage a task for the player to complete. This is mostly used by the quest system  
// added-end
  * This is different from Data Tasks which are just data assets: a TaskName and Argument, ie "FindItem:Sword", 
  * 
  * A good example is the GoToLocation task that comes with narrative, which checks if the player has reached a goal location. This type


```

### NarrativeDefaultCinecam.h

```cpp title="/Narrative/Source/Narrative/Public/NarrativeDefaultCinecam.h" showLineNumbers

// removed-start
// Fill out your copyright notice in the Description page of Project Settings.
// removed-end
// added-start
// Copyright Narrative Tools 2025. 
// added-end
 
 #pragma once
 


```

### NarrativePartyComponent.h

```cpp title="/Narrative/Source/Narrative/Public/NarrativePartyComponent.h" showLineNumbers
#pragma once
 
...

// removed-start
	virtual void ExitDialogue() override;
// removed-end
// added-start
	virtual void ExitDialogue(const EExitDialogueReason Reason);
// added-end
 
 	/**Parties dont have owning controllers or pawns so we iterate our party members and find them that way*/
 	virtual APawn* GetOwningPawn() const override;


```

### Dialogue.h

```cpp title="/Narrative/Source/Narrative/Public/Dialogue.h" showLineNumbers
#pragma once
 
...

// removed-start
#include "UObject/NoExportTypes.h"
// removed-end
 #include "LevelSequencePlayer.h"
 #include "DialogueSM.h"
// removed-start
#include "MovieSceneSequencePlayer.h"
// removed-end
// added-start
#include <Misc/Optional.h>
#include <GameplayTagContainer.h>
// added-end
 #include "Dialogue.generated.h"
// added-start

class UQuest;
//The reason why a dialogue ended. 
UENUM(BlueprintType)
enum class EExitDialogueReason : uint8
{
	EDR_NoLines,
	EDR_PlayerExited,
	EDR_TooFarAway,
	EDR_NewDialogueStarted,
	EDR_StoppedByCinematic
};
// added-end
// added-start

		OwnedTags.AddTag(FGameplayTag::RequestGameplayTag("Narrative.State.DialogueControlled", false));
// added-end
// added-start
	
	//Tags to apply to this speaker for the duration of the dialogue 
	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Speaker Details")
	FGameplayTagContainer OwnedTags;
// added-end
// added-start
		bOverride_bFreeMovement = false;
		bFreeMovement = true; 
		bOverride_bStopMovement = false;
		bStopMovement = false;
		bOverride_bUnskippable = false;
		bUnskippable = false; 
// added-end

...

// removed-start
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Play Params")
// removed-end
// added-start
	UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category = "Play Params")
// added-end
 	FName StartFromID;
 
 	//The priority we want to play this dialogue at. -1 means use the dialogues default priority. 
// removed-start
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Play Params")
// removed-end
// added-start
	UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category = "Play Params")
// added-end
// added-start

	UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category = Overrides, meta = (PinHiddenByDefault, InlineEditConditionToggle))
	uint32 bOverride_bFreeMovement : 1;

	//Do we want the dialogue to be free movement? 
	UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category = "Play Params", meta = (editcondition = "bOverride_bFreeMovement"))
	bool bFreeMovement;

	UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category = Overrides, meta = (PinHiddenByDefault, InlineEditConditionToggle))
	uint32 bOverride_bStopMovement : 1;

	//Do we want the dialogue to stop the characters in it from moving when it begins? 
	UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category = "Play Params", meta = (editcondition = "bOverride_bStopMovement"))
	bool bStopMovement;
	
	UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category = Overrides, meta = (PinHiddenByDefault, InlineEditConditionToggle))
	uint32 bOverride_bUnskippable : 1;

	//Whether we want to allow the player to skip lines in this dialogue. 
	UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category = "Play Params", meta = (editcondition = "bOverride_bUnskippable"))
	bool bUnskippable;
// added-end

...

// removed-start
	bool IsNameStableForNetworking() const override { return true; };
// removed-end
// added-start
	bool IsNameStableForNetworking() const override { return true; }
// added-end
 	bool IsSupportedForNetworking() const override { return true; };
 
 	#if WITH_EDITOR
// added-start
	virtual void PostLoad() override;
// added-end
// added-start

	UDialogueNode* GetCurrentNode() { return CurrentNode; }
// added-end
// added-start
	// if > 0, Dialogue will auto-end if player goes greater than this distance from any speaker in the dialgue. 
	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Configuration")
	float EndDialogueDist;

	//If true, the player won't be able to skip lines in this dialogue. 
	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Configuration")
	bool bUnskippable;

// added-end

...

// removed-start
	UPROPERTY()
// removed-end
// added-start
	UPROPERTY(VisibleAnywhere, Category = "Debug")
// added-end
 	class UDialogueNode_NPC* RootDialogue;
 
 	//Holds all of the npc replies in the dialogue
// removed-start
	UPROPERTY()
// removed-end
// added-start
	UPROPERTY(VisibleAnywhere, Category = "Debug")
// added-end

...

// removed-start
	UPROPERTY()
// removed-end
// added-start
	UPROPERTY(VisibleAnywhere, Category = "Debug")
// added-end
 	TArray<class UDialogueNode_Player*> PlayerReplies;
 
 	//Ends the current dialogue line 
// added-start

	/*
	* Return whether or not we can skip lines in this dialogue or not
	*/
	UFUNCTION(BlueprintNativeEvent, BlueprintCallable, Category = "Dialogue")
	bool CanSkipDialogue() const;
	virtual bool CanSkipDialogue_Implementation() const;
// added-end

...

// removed-start
	AActor* LinkSpeakerAvatar(const FSpeakerInfo& Info);
	virtual AActor* LinkSpeakerAvatar_Implementation(const FSpeakerInfo& Info);
// removed-end
// added-start
	AActor* LinkSpeakerAvatar(const FSpeakerInfo& Info, const int32 Idx);
	virtual AActor* LinkSpeakerAvatar_Implementation(const FSpeakerInfo& Info, const int32 Idx);
// added-end
 	
 	/*
 	* Clean up a given actor from the world

...

// removed-start
	virtual void ExitDialogue();
// removed-end
// added-start
	virtual void ExitDialogue(const EExitDialogueReason Reason);
// added-end
 
 	UFUNCTION()
 	virtual void BlendingOutFinished();
// added-start
	
#if WITH_EDITORONLY_DATA

	// editor only ref to quest that directly uses this dialogue.
	UPROPERTY()
	TSubclassOf<UQuest> EditorLinkedQuest;

#endif
// added-end

...

// removed-start
};// removed-end
// added-start
};

struct NARRATIVE_API FDialogueDelegates final
{
	DECLARE_MULTICAST_DELEGATE_ThreeParams(FOnDialogueStartedSignature, UNarrativeComponent*, UDialogue*, const FName& OptionalStartFromID);
	DECLARE_MULTICAST_DELEGATE_TwoParams(FOnDialogueEndSignature, UNarrativeComponent*, UDialogue*);
	
	// called when a dialogue starts
	static FOnDialogueStartedSignature OnDialogueStarted;
	
	// called when a dialogue ends
	static FOnDialogueEndSignature OnDialogueEnd;
};
// added-end


```

### NarrativeNodeBase.h

```cpp title="/Narrative/Source/Narrative/Public/NarrativeNodeBase.h" showLineNumbers
#pragma once
 
...

// removed-start
#include "UObject/NoExportTypes.h"
// removed-end
 #include "NarrativeEvent.h"
 #include "NarrativeNodeBase.generated.h"
 


```

### NarrativeDialogueSettings.h

```cpp title="/Narrative/Source/Narrative/Public/NarrativeDialogueSettings.h" showLineNumbers
#pragma once
 
...

// removed-start
#include "UObject/NoExportTypes.h"
// removed-end
 #include "NarrativeDialogueSettings.generated.h"
 
 /**


```

### NarrativeFunctionLibrary.h

```cpp title="/Narrative/Source/Narrative/Public/NarrativeFunctionLibrary.h" showLineNumbers
 #pragma once
 
// added-start
#include "NarrativeNodeSelector.h"
// added-end
// added-start
	/* dialogue selector */
	// makes a dialogue node selector, guaranteeing the use of the node selection list
	UFUNCTION(BlueprintCallable, BlueprintPure, Category = "Narrative", meta=(Keywords="Dialogue Make Selector"))
	static FDialogueNodeSelector MakeDialogueNodeSelector(FDialogueNodeSelector Selector);
	
	// makes a dialogue node selector from a specific node ID
	UFUNCTION(BlueprintCallable, BlueprintPure, Category = "Narrative", meta=(CompactNodeTitle="From ID", Keywords="Dialogue Make From ID Selector"))
	static FDialogueNodeSelector MakeDialogueNodeSelectorFromID(FName NodeID);
	
	// takes a dialogue selector, and get the node ID from it
	UFUNCTION(BlueprintCallable, BlueprintPure, Category = "Narrative", meta=(CompactNodeTitle="Get ID", Keywords="Dialogue Get ID Selector"))
	static void BreakDialogueNodeSelector(const FDialogueNodeSelector& Selector, FName& NodeID);

	// Gets the node ID for a given dialogue node selector
	UFUNCTION(BlueprintPure, DisplayName="Dialogue Node Selector To Name", Category = "Utilities", meta=(CompactNodeTitle = "->", BlueprintThreadSafe, BlueprintAutocast))
	static FName Conv_DialogueNodeSelectorToName(const FDialogueNodeSelector& Selector);

	// Gets a dialogue node selector from a given node ID
	UFUNCTION(BlueprintPure, DisplayName="Name To Dialogue Node Selector", Category = "Utilities", meta=(CompactNodeTitle = "->", BlueprintThreadSafe, BlueprintAutocast))
	static FDialogueNodeSelector Conv_NameToDialogueNodeSelector(const FName& NodeID);
	/* dialogue selector */
	
	/* quest state selector */
	// makes a quest node selector, guaranteeing the use of the node selection list
	UFUNCTION(BlueprintCallable, BlueprintPure, Category = "Narrative", meta=(Keywords="Quest Make Selector"))
	static FQuestStateSelector MakeQuestStateSelector(FQuestStateSelector Selector);
	
	// makes a quest state selector from a specific node ID
	UFUNCTION(BlueprintCallable, BlueprintPure, Category = "Narrative", meta=(CompactNodeTitle="From ID", Keywords="Quest Make From ID Selector"))
	static FQuestStateSelector MakeQuestStateSelectorFromID(FName NodeID);
	
	// takes a quest state selector, and get the node ID from it
	UFUNCTION(BlueprintCallable, BlueprintPure, Category = "Narrative", meta=(CompactNodeTitle="Get ID", Keywords="Quest Get ID Selector"))
	static void BreakQuestStateSelector(const FQuestStateSelector& Selector, FName& NodeID);

	// Gets the state ID for a given quest node selector
	UFUNCTION(BlueprintPure, DisplayName="Quest State Selector To Name", Category = "Utilities", meta=(CompactNodeTitle = "->", BlueprintThreadSafe, BlueprintAutocast))
	static FName Conv_QuestStateSelectorToName(const FQuestStateSelector& Selector);

	// Gets a quest state selector from a given node ID
	UFUNCTION(BlueprintPure, DisplayName="Name To Quest State Selector", Category = "Utilities", meta=(CompactNodeTitle = "->", BlueprintThreadSafe, BlueprintAutocast))
	static FQuestStateSelector Conv_NameToQuestStateSelector(const FName& NodeID);
	/* quest state selector */

	/* quest branch selector */
	// makes a quest branch selector, guaranteeing the use of the node selection list
	UFUNCTION(BlueprintCallable, BlueprintPure, Category = "Narrative", meta=(Keywords="Quest Make Selector"))
	static FQuestBranchSelector MakeQuestBranchSelector(FQuestBranchSelector Selector);
	
	// makes a quest branch selector from a specific node ID
	UFUNCTION(BlueprintCallable, BlueprintPure, Category = "Narrative", meta=(CompactNodeTitle="From ID", Keywords="Quest Make From ID Selector"))
	static FQuestBranchSelector MakeQuestBranchSelectorFromID(FName NodeID);
	
	// takes a quest branch selector, and get the node ID from it
	UFUNCTION(BlueprintCallable, BlueprintPure, Category = "Narrative", meta=(CompactNodeTitle="Get ID", Keywords="Quest Get ID Selector"))
	static void BreakQuestBranchSelector(const FQuestBranchSelector& Selector, FName& NodeID);

	// Gets the branch ID for a given quest node selector
	UFUNCTION(BlueprintPure, DisplayName="Quest Branch Selector To Name", Category = "Utilities", meta=(CompactNodeTitle = "->", BlueprintThreadSafe, BlueprintAutocast))
	static FName Conv_QuestBranchSelectorToName(const FQuestBranchSelector& Selector);

	// Gets a quest branch selector from a given node ID
	UFUNCTION(BlueprintPure, DisplayName="Name To Quest Branch Selector", Category = "Utilities", meta=(CompactNodeTitle = "->", BlueprintThreadSafe, BlueprintAutocast))
	static FQuestBranchSelector Conv_NameToQuestBranchSelector(const FName& NodeID);
	/* quest branch selector */
	
// added-end

...



```

### DialogueSM.h

```cpp title="/Narrative/Source/Narrative/Public/DialogueSM.h" showLineNumbers
#pragma once
 
...

// removed-start
#include "MovieSceneSequencePlayer.h"
// removed-end
 #include "DialogueSM.generated.h"
 
 DECLARE_DYNAMIC_MULTICAST_DELEGATE(FOnDialogueNodeFinishedPlaying);

...

// removed-start
		FacialAnimation = nullptr;
// removed-end
 		DialogueSound = nullptr;
 		DialogueMontage = nullptr;
// added-start
		FacialAnimation = nullptr;
// added-end
 		Shot = nullptr;

...

// removed-start
	class USoundBase* DialogueSound;
// removed-end
// added-start
	TObjectPtr<class USoundBase> DialogueSound;
// added-end
 
 	/**
 	Narrative will play this montage on the first skeletalmeshcomponent found on your speaker with the tag "Body" added to it.

...

// removed-start
	class UAnimMontage* DialogueMontage;
// removed-end
// added-start
	TObjectPtr<class UAnimMontage> DialogueMontage;
// added-end
 
 	/**
 	Narrative will play this montage on the first skeletalmeshcomponent found on your speaker with the tag "Face" added to it. 

...

// removed-start
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Dialogue Line")
	class UAnimMontage* FacialAnimation;
// removed-end
// added-start
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Dialogue Line", meta = (DisplayName = "Facial Animation"))
	TObjectPtr<class UAnimMontage> FacialAnimation;
// added-end
 
 	/**
 	* Shot to play for this line. Overrides speaker shot if one is set 

...

// removed-start
	class UNarrativeDialogueSequence* Shot;
// removed-end
// added-start
	TObjectPtr<class UNarrativeDialogueSequence> Shot;

	/**
	* Optional conditions the line must pass for it to be selected 
	*/
	UPROPERTY(EditAnywhere, Instanced, BlueprintReadWrite, Category = "Dialogue Line")
	TArray<TObjectPtr<class UNarrativeCondition>> Conditions;
// added-end
 };
 
 /**Base class for states and branches in the Dialogues state machine*/
// added-start
	 //Returns a line with all conditions passing 
// added-end
// added-start
public:
 	
// added-end
// added-start

 	UFUNCTION(BlueprintCallable, Category="DialogueNode")
 	FText GetDialogueText() const;
// added-end
// added-start
	FORCEINLINE bool IsAutoSelectIfOnlyReply() const { return bAutoSelectIfOnlyReply || IsRoutingNode(); };
// added-end

...

// removed-start
};// removed-end
// added-start

	/**If true, this dialogue option will be automatically selected if it is the only reply available. */
	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Details - Player Dialogue Node")
	bool bAutoSelectIfOnlyReply = true;
};
// added-end


```

### QuestTask.cpp

```cpp title="/Narrative/Source/Narrative/Private/QuestTask.cpp" showLineNumbers

 #include "Quest.h"
 #include "NarrativeComponent.h"
 #include <TimerManager.h>
// added-start
#include <GameFramework/PlayerController.h>
#include "UObject/ConstructorHelpers.h"
// added-end

...



```

### DialogueBlueprintGeneratedClass.cpp

```cpp title="/Narrative/Source/Narrative/Private/DialogueBlueprintGeneratedClass.cpp" showLineNumbers
 #include "DialogueBlueprintGeneratedClass.h"
 #include "Dialogue.h"
// removed-start
#include "DialogueSM.h"
// removed-end

...



```

### NarrativeDialogueSequence.cpp

```cpp title="/Narrative/Source/Narrative/Private/NarrativeDialogueSequence.cpp" showLineNumbers
 
 #include "NarrativeDialogueSequence.h"

...

// removed-start
		if (SelectedSequence)
// removed-end
// added-start
		if (SelectedSequence && SequenceActor.IsValid())
// added-end
 		{
 			SequenceActor->PlaybackSettings = PlaybackSettings;
 			SequenceActor->SetSequence(SelectedSequence);

...

// removed-start
			if (SequenceActor->SequencePlayer)
			{
				SequenceActor->bOverrideInstanceData = AnchorOriginRule != EAnchorOriginRule::AOR_Disabled;

				if (UDefaultLevelSequenceInstanceData* InstanceData = Cast<UDefaultLevelSequenceInstanceData>(SequenceActor->DefaultInstanceData))
				{
					InstanceData->TransformOrigin = AnchorOriginRule != EAnchorOriginRule::AOR_Disabled ? GetShotAnchorTransform() : FTransform();
				}

				SequenceActor->SequencePlayer->Play();
// removed-end
// added-start
			if (ULevelSequencePlayer* SP = SequenceActor->GetSequencePlayer())
			{
				SP->Stop();
				SP->SetPlaybackPosition(FMovieSceneSequencePlaybackParams(0, EUpdatePositionMethod::Jump));
			}

			SequenceActor->bOverrideInstanceData = AnchorOriginRule != EAnchorOriginRule::AOR_Disabled;

			if (UDefaultLevelSequenceInstanceData* InstanceData = Cast<UDefaultLevelSequenceInstanceData>(SequenceActor->DefaultInstanceData))
			{
				InstanceData->TransformOrigin = AnchorOriginRule != EAnchorOriginRule::AOR_Disabled ? GetShotAnchorTransform() : FTransform();
			}

			SequenceActor->PlaybackSettings = PlaybackSettings;
			SequenceActor->SetSequence(SelectedSequence);

			if (ULevelSequencePlayer* SP = SequenceActor->GetSequencePlayer())
			{
				SP->Play();
// added-end
 
 				//Go in, and tell the cinecam to focus/track the speaker 
// removed-start
				for (auto& BoundObject : SequenceActor->SequencePlayer->GetBoundObjects(SequenceActor->FindNamedBinding(NAME_CinecamTag)))
// removed-end
// added-start
				for (auto& BoundObject : SP->GetBoundObjects(SequenceActor->FindNamedBinding(NAME_CinecamTag)))
// added-end
 				{

...



```

### NarrativeCondition.cpp

```cpp title="/Narrative/Source/Narrative/Private/NarrativeCondition.cpp" showLineNumbers
 
 #include "NarrativeCondition.h"


```

### NarrativeDataTask.cpp

```cpp title="/Narrative/Source/Narrative/Private/NarrativeDataTask.cpp" showLineNumbers
 #include "NarrativeDataTask.h"
 


```

### DialogueSM.cpp

```cpp title="/Narrative/Source/Narrative/Private/DialogueSM.cpp" showLineNumbers
 #include "DialogueSM.h"
 #include "Dialogue.h"

...

// removed-start
#include "NarrativePartyComponent.h"
// removed-end
 #include "Animation/AnimInstance.h"
// removed-start
#include "Components/AudioComponent.h"
// removed-end
 #include "Components/SkeletalMeshComponent.h"
// removed-start
#include "GameFramework/Character.h"
// removed-end
 #include "TimerManager.h"
// removed-start
#include "Kismet/GameplayStatics.h"
#include "LevelSequencePlayer.h"
#include "LevelSequenceActor.h"
// removed-end
// added-start
#include "Sound/SoundWave.h"

// added-end

...

// removed-start
	FDialogueLine NewLine = Line;

	//Construct the line instead of adding it as a member as to not break dialogues made pre 2.2
	if (AlternativeLines.Num())
	{
		TArray<FDialogueLine> AllLines = AlternativeLines;
		AllLines.Add(Line);
		NewLine = AllLines[FMath::RandRange(0, AllLines.Num() - 1)];
// removed-end
// added-start
	FDialogueLine NewLine;

	TArray<FDialogueLine> AllLines = AlternativeLines;
	AllLines.Add(Line);

	TArray<FDialogueLine> AllPassingLines;

	if (OwningComponent)
	{
		for (auto& LineToCheck : AllLines)
		{
			bool bAllConditionsPass = true;

			//TODO consolidate the Character checking stuff into UNarrativeConditions as we're violating dont repeat yourself here - dialogue node base has something similar to this 
			for (auto& Cond : LineToCheck.Conditions)
			{
				if (Cond->CheckCondition(OwningComponent->GetOwningPawn(), OwningComponent->GetOwningController(), OwningComponent) == Cond->bNot)
				{
					bAllConditionsPass = false;
					break;
				}
			}

			if (bAllConditionsPass)
			{
				AllPassingLines.Add(LineToCheck);
			}
		}
	}

	//Randomly select a valid dialogue line 
	if (AllPassingLines.Num())
	{
		NewLine = AllPassingLines[FMath::RandRange(0, AllPassingLines.Num() - 1)];
// added-end
 	}
 
 	if (NewLine.Duration == ELineDuration::LD_Default)
// added-start
FText UDialogueNode::GetDialogueText() const
{
	FText LineText = Line.Text.IsEmpty()? FText::GetEmpty() : Line.Text;

	// if text is empty, check the sound wave if there are dialogue lines.
	const USoundWave* LineSound = Cast<USoundWave>(Line.DialogueSound);
	if (LineSound && LineSound->SupportsSubtitles() && LineText.IsEmpty())
	{
		// append each text item
		FString Str;
		for (const FSubtitleCue& SubtitleCue : LineSound->Subtitles)
		{
			Str.Append(SubtitleCue.Text.ToString() + ". ");
		}
			
		LineText = FText::FromString(Str);
	}
	
	return LineText;
}

// added-end

...

// removed-start
	if (PropertyChangedEvent.MemberProperty)
	{ 
		//If we changed the ID, make sure it doesn't conflict with any other IDs in the Dialogue
		if (PropertyChangedEvent.MemberProperty->GetFName() == GET_MEMBER_NAME_CHECKED(FDialogueLine, Text))
		{
			FString DialogueAssetName = "";

			if (UDialogue* Dialogue = Cast<UDialogue>(GetOuter()))
			{
				if (UObject* DialogueBP = Cast<UObject>(Dialogue->GetOuter()))
				{
					DialogueAssetName = DialogueBP->GetFName().ToString();
				}
			}

			//Only autogenerate the ID if an ID hasn't been assigned yet 
			if (HasDefaultID())
			{
				GenerateIDFromText();
			}
// removed-end
// added-start
	const FName PropertyName = (PropertyChangedEvent.Property != nullptr) ? PropertyChangedEvent.Property->GetFName() : NAME_None;
	
	//If we changed the ID, make sure it doesn't conflict with any other IDs in the Dialogue
	if (PropertyName == GET_MEMBER_NAME_CHECKED(FDialogueLine, Text))
	{
		FString DialogueAssetName = "";

		if (UDialogue* Dialogue = Cast<UDialogue>(GetOuter()))
		{
			if (UObject* DialogueBP = Cast<UObject>(Dialogue->GetOuter()))
			{
				DialogueAssetName = DialogueBP->GetFName().ToString();
			}
		}
		
		//Only autogenerate the ID if an ID hasn't been assigned yet 
		if (HasDefaultID())
		{
			GenerateIDFromText();
// added-end
 		}
 	}
 }

...

// removed-start
	FString TextString = Line.Text.ToString();
// removed-end
// added-start
	FString TextString = GetDialogueText().ToString();
// added-end
 
 	TArray<FString> ContentArray;
 	FString ContentString = "";
// added-start

		if (Dialogue->RootDialogue == this)
		{
			FinalString.Append("_Root");
		}
// added-end
// added-start
	const FString DefaultNodeID = DialogueAssetName + "_" + GetName();
	const FString DefaultRootNodeID = DialogueAssetName + "_Root";
	
// added-end

...

// removed-start
	return (ID.ToString() == DialogueAssetName + "_" + GetName());
// removed-end
// added-start
	return ID.ToString() == DefaultNodeID || ID.ToString() == DefaultRootNodeID || ID.IsNone();
// added-end
 }
 
 #endif

...

// removed-start
#undef LOCTEXT_NAMESPACE// removed-end
// added-start
#undef LOCTEXT_NAMESPACE
// added-end


```

### NarrativeNodeBase.cpp

```cpp title="/Narrative/Source/Narrative/Private/NarrativeNodeBase.cpp" showLineNumbers
 
 #include "NarrativeNodeBase.h"

...

// removed-start
					Event->ExecuteEvent(Comp->GetOwningPawn(), Comp->GetOwningController(), Comp);
// removed-end
// added-start
					if (Event->AreConditionsMet(Pawn, Controller, NarrativeComponent))
					{
						Event->OnActivate(Comp->GetOwningPawn(), Comp->GetOwningController(), Comp); //execute event
						Event->OnDeactivate(Comp->GetOwningPawn(), Comp->GetOwningController(), Comp); //deactivate event
					}
// added-end
 				}
 			}
 		}

...

// removed-start

// removed-end
 	if (!NarrativeComponent)
 	{
 		UE_LOG(LogNarrative, Warning, TEXT("Tried running conditions on node %s but Narrative Comp was null."), *GetNameSafe(this));


```

### Narrative.cpp

```cpp title="/Narrative/Source/Narrative/Private/Narrative.cpp" showLineNumbers
 #include "Narrative.h"
 
// removed-start
DEFINE_LOG_CATEGORY(LogNarrativeRuntime);
// removed-end
// added-start
#include "GameplayTagsManager.h"
#include "NarrativeGameplayTags.h"
// added-end

...

// removed-start
	UE_LOG(LogNarrativeRuntime, Log, TEXT("Narrative Runtime loaded."));
// removed-end
// added-start
	// This code will execute after your module is loaded into memory; the exact timing is specified in the .uplugin file per-module

	FNarrativeGameplayTags::Get().InitializeNativeTags();
	UGameplayTagsManager::Get().DoneAddingNativeTags(); 
	
// added-end
 }
 
 void FNarrativeModule::ShutdownModule()

...

// removed-start
	UE_LOG(LogNarrativeRuntime, Log, TEXT("Narrative Runtime unloaded."));
// removed-end
// added-start
	
// added-end
 }
 
 #undef LOCTEXT_NAMESPACE

...

// removed-start
IMPLEMENT_MODULE(FNarrativeModule, Narrative)// removed-end
// added-start
IMPLEMENT_MODULE(FNarrativeModule, Narrative)
// added-end


```

### NarrativeComponent.cpp

```cpp title="/Narrative/Source/Narrative/Private/NarrativeComponent.cpp" showLineNumbers
 #include "NarrativeComponent.h"
 #include "NarrativePartyComponent.h"

...

// removed-start
#include "NarrativeCondition.h"
#include "NarrativeEvent.h"
#include "NarrativeDialogueSettings.h"
// removed-end
 #include "QuestTask.h"
 #include "Engine/Engine.h"
 #include "Kismet/GameplayStatics.h"

...

// removed-start
#include "Engine/ActorChannel.h"
// removed-end
 
 DEFINE_LOG_CATEGORY(LogNarrative);
 
// added-start

// added-end

...

// removed-start
			OnDialogueFinished.Broadcast(CurrentDialogue, true);
// removed-end
// added-start
			OnDialogueFinished.Broadcast(CurrentDialogue, true, EExitDialogueReason::EDR_NewDialogueStarted);
// added-end
 
 			CurrentDialogue->Deinitialize();
 			CurrentDialogue = nullptr;
// added-start
				// notify external listeners
				FDialogueDelegates::OnDialogueStarted.Broadcast(this, CurrentDialogue, PlayParams.StartFromID);
				
// added-end

...

// removed-start
void UNarrativeComponent::ClientExitDialogue_Implementation()
// removed-end
// added-start
void UNarrativeComponent::ClientExitDialogue_Implementation(const EExitDialogueReason Reason)
// added-end
 {
 	if (CurrentDialogue)
 	{
// removed-start
		OnDialogueFinished.Broadcast(CurrentDialogue, false);
// removed-end
// added-start
		OnDialogueFinished.Broadcast(CurrentDialogue, false, Reason);
// added-end

...

// removed-start
void UNarrativeComponent::ClientExitPartyDialogue_Implementation()
// removed-end
// added-start
void UNarrativeComponent::ClientExitPartyDialogue_Implementation(const EExitDialogueReason Reason)
// added-end
 {
 	if (PartyComponent)
 	{
// removed-start
		PartyComponent->ClientExitDialogue();
// removed-end
// added-start
		PartyComponent->ClientExitDialogue(Reason);
// added-end

...

// removed-start
void UNarrativeComponent::TryExitDialogue()
// removed-end
// added-start
bool UNarrativeComponent::TryExitDialogue(const EExitDialogueReason Reason)
// added-end
 {
 	if (CurrentDialogue && CurrentDialogue->bCanBeExited)
 	{

...

// removed-start
				CurrentDialogue->OwningComp->ExitDialogue();
// removed-end
// added-start
				CurrentDialogue->OwningComp->ExitDialogue(Reason);
// added-end
 			}
 		}
 		else

...

// removed-start
			ServerTryExitDialogue();
		}
	}
}

void UNarrativeComponent::ExitDialogue()
// removed-end
// added-start
			ServerTryExitDialogue(Reason);
		}

		if (!CurrentDialogue)
		{
			return true; 
		}
	}

	return false; 
}

void UNarrativeComponent::ExitDialogue(const EExitDialogueReason Reason)
// added-end
 {
 	if (HasAuthority())
 	{
// removed-start
		ClientExitDialogue();
	}
}

void UNarrativeComponent::ServerTryExitDialogue_Implementation()
{
	TryExitDialogue();
// removed-end
// added-start
		ClientExitDialogue(Reason);
	}
}

void UNarrativeComponent::ServerTryExitDialogue_Implementation(const EExitDialogueReason Reason)
{
	TryExitDialogue(Reason);
// added-end

...

// removed-start
void UNarrativeComponent::BeginSave(FString SaveName)
{
	UE_LOG(LogNarrative, Verbose, TEXT("Begun saving using save name: %s"), *SaveName);
}

void UNarrativeComponent::BeginLoad(FString SaveName)
{
	UE_LOG(LogNarrative, Verbose, TEXT("Begun loading using save name: %s"), *SaveName);
}

void UNarrativeComponent::SaveComplete(FString SaveName)
{
	UE_LOG(LogNarrative, Verbose, TEXT("Save complete for save name: %s"), *SaveName);
}

void UNarrativeComponent::LoadComplete(FString SaveName)
{
	UE_LOG(LogNarrative, Verbose, TEXT("Load complete for save name: %s"), *SaveName);
}

// removed-end
 void UNarrativeComponent::DialogueRepliesAvailable(class UDialogue* Dialogue, const TArray<UDialogueNode_Player*>& PlayerReplies)
 {
 

...

// removed-start
void UNarrativeComponent::DialogueFinished(UDialogue* Dialogue, const bool bStartingNewDialogue)
// removed-end
// added-start
void UNarrativeComponent::DialogueFinished(UDialogue* Dialogue, const bool bStartingNewDialogue, const EExitDialogueReason Reason)
// added-end
 {
 
 }
// added-start
}

void UNarrativeComponent::BeginSave(FString SaveName)
{
	UE_LOG(LogNarrative, Verbose, TEXT("Begun saving using save name: %s"), *SaveName);
}

void UNarrativeComponent::BeginLoad(FString SaveName)
{
	UE_LOG(LogNarrative, Verbose, TEXT("Begun loading using save name: %s"), *SaveName);
}

void UNarrativeComponent::SaveComplete(FString SaveName)
{
	UE_LOG(LogNarrative, Verbose, TEXT("Save complete for save name: %s"), *SaveName);
}

void UNarrativeComponent::LoadComplete(FString SaveName)
{
	UE_LOG(LogNarrative, Verbose, TEXT("Load complete for save name: %s"), *SaveName);
// added-end
// added-start

			BegunQuest->QuestPostLoad();
// added-end
// added-start


...

// added-end


```

### NarrativeEvent.cpp

```cpp title="/Narrative/Source/Narrative/Private/NarrativeEvent.cpp" showLineNumbers
 
 #include "NarrativeEvent.h"
// added-start

#include "NarrativeComponent.h"
#include "NarrativeCondition.h"
#include "NarrativePartyComponent.h"
#include "Chaos/PBDSuspensionConstraintData.h"
// added-end
// added-start
}

void UNarrativeEvent::OnActivate_Implementation(APawn* Target, APlayerController* Controller, class UNarrativeComponent* NarrativeComponent)
{
	ExecuteEvent(Target, Controller, NarrativeComponent);
}

void UNarrativeEvent::OnDeactivate_Implementation(APawn* Target, APlayerController* Controller, class UNarrativeComponent* NarrativeComponent)
{

// added-end
// added-start

bool UNarrativeEvent::AreConditionsMet(APawn* Pawn, APlayerController* Controller, class UNarrativeComponent* NarrativeComponent)
{

	if (!NarrativeComponent)
	{
		UE_LOG(LogNarrative, Warning, TEXT("Tried running conditions on node %s but Narrative Comp was null."), *GetNameSafe(this));
		return false;
	}
	  
	//Ensure all conditions are met
	for (auto& Cond : Conditions)
	{	
		if (Cond)
		{
			//We're running a condition on a party! Figure out who we need to run the condition on
			if (UNarrativePartyComponent* PartyComp = Cast<UNarrativePartyComponent>(NarrativeComponent))
			{
				TArray<UNarrativeComponent*> ComponentsToCheck;

				UE_LOG(LogNarrative, Warning, TEXT("Running on party..."));
				//We need to check everyone in the party
				if (Cond->PartyConditionPolicy == EPartyConditionPolicy::AllPlayersPass || Cond->PartyConditionPolicy == EPartyConditionPolicy::AnyPlayerPasses)
				{
					ComponentsToCheck.Append(PartyComp->GetPartyMembers());
				}//We need to check the party leader
				else if (Cond->PartyConditionPolicy == EPartyConditionPolicy::PartyLeaderPasses)
				{
					ComponentsToCheck.Add(PartyComp->GetPartyLeader());
				}
				else if (Cond->PartyConditionPolicy == EPartyConditionPolicy::PartyPasses)
				{
					ComponentsToCheck.Add(PartyComp);
				}

				bool bAnyonePassed = false;

				//If any of our comps to check fail, return false 
				for (auto& ComponentToCheck : ComponentsToCheck)
				{	
					const bool bConditionPassed = Cond && Cond->CheckCondition(ComponentToCheck->GetOwningPawn(), ComponentToCheck->GetOwningController(), ComponentToCheck) != Cond->bNot;
					FString CondString = bConditionPassed ? "passed" : "failed";

					if (bConditionPassed)
					{
						//We'll check the next condition since someone passed
						if (Cond->PartyConditionPolicy == EPartyConditionPolicy::AnyPlayerPasses)
						{
							bAnyonePassed = true;
							break;
						}
					}
					else
					{
						if (Cond->PartyConditionPolicy != EPartyConditionPolicy::AnyPlayerPasses)
						{
							return false;
						}
					}

					UE_LOG(LogNarrative, Warning, TEXT("Checking %s event condition, and they: %s"), *GetNameSafe(ComponentToCheck), *CondString);
				}

				//If we didn't break, no players passed 
				if (!bAnyonePassed && Cond->PartyConditionPolicy == EPartyConditionPolicy::AnyPlayerPasses)
				{
					return false;
				}

			}
			else
			{
				if (Cond && Cond->CheckCondition(Pawn, Controller, NarrativeComponent) == Cond->bNot)
				{
					return false;
				}
			}

		}
	}

	return true;
}

...

// added-end


```

### NarrativePartyComponent.cpp

```cpp title="/Narrative/Source/Narrative/Private/NarrativePartyComponent.cpp" showLineNumbers
 
 #include "NarrativePartyComponent.h"

...

// removed-start
void UNarrativePartyComponent::ExitDialogue()
// removed-end
// added-start
void UNarrativePartyComponent::ExitDialogue(const EExitDialogueReason Reason)
// added-end
 {
 	if (HasAuthority())
 	{

...

// removed-start
				GroupMemberComp->ClientExitPartyDialogue();
// removed-end
// added-start
				GroupMemberComp->ClientExitPartyDialogue(Reason);
// added-end
 			}
 		}
 
// removed-start
		ClientExitDialogue();
// removed-end
// added-start
		ClientExitDialogue(Reason);
// added-end

...

// removed-start
}// removed-end
// added-start
}
// added-end


```

### NarrativeDialogueSettings.cpp

```cpp title="/Narrative/Source/Narrative/Private/NarrativeDialogueSettings.cpp" showLineNumbers
 #include "NarrativeDialogueSettings.h"
 


```

### QuestBlueprintGeneratedClass.cpp

```cpp title="/Narrative/Source/Narrative/Private/QuestBlueprintGeneratedClass.cpp" showLineNumbers
 
 #include "QuestBlueprintGeneratedClass.h"

...

// removed-start
#include "QuestSM.h"
// removed-end
 
 void UQuestBlueprintGeneratedClass::InitializeQuest(class UQuest* Quest)
 {


```

### NarrativeSaveGame.cpp

```cpp title="/Narrative/Source/Narrative/Private/NarrativeSaveGame.cpp" showLineNumbers
 
 #include "NarrativeSaveGame.h"


```

### QuestSM.cpp

```cpp title="/Narrative/Source/Narrative/Private/QuestSM.cpp" showLineNumbers
 #include "QuestSM.h"
 #include "Quest.h"

...

// removed-start
#include "NarrativeDataTask.h"
// removed-end
 #include "NarrativeComponent.h"
// removed-start
#include "NarrativeQuestSettings.h"
// removed-end
 #include "QuestTask.h"
 

...

// removed-start
	if (OwningQuest)
// removed-end
// added-start
	if (OwningQuest && OwningQuest->GetQuestCompletion() == EQuestCompletion::QC_Started)
// added-end
 	{
 		struct SOnEnteredStruct
 		{


```

### NarrativeTaskManager.cpp

```cpp title="/Narrative/Source/Narrative/Private/NarrativeTaskManager.cpp" showLineNumbers
 
 #include "NarrativeTaskManager.h"


```

### NarrativeDefaultCinecam.cpp

```cpp title="/Narrative/Source/Narrative/Private/NarrativeDefaultCinecam.cpp" showLineNumbers

// removed-start
// Fill out your copyright notice in the Description page of Project Settings.
// removed-end
// added-start
// Copyright Narrative Tools 2025. 
// added-end
 
 
 #include "NarrativeDefaultCinecam.h"


```

### NarrativeFunctionLibrary.cpp

```cpp title="/Narrative/Source/Narrative/Private/NarrativeFunctionLibrary.cpp" showLineNumbers
 
 #include "NarrativeFunctionLibrary.h"
// added-start

#include "NarrativeNodeSelector.h"
// added-end
// added-start

FDialogueNodeSelector UNarrativeFunctionLibrary::MakeDialogueNodeSelector(FDialogueNodeSelector Selector)
{
	return Selector;
}

FDialogueNodeSelector UNarrativeFunctionLibrary::MakeDialogueNodeSelectorFromID(FName NodeID)
{
	FDialogueNodeSelector Sel;
	Sel.NodeID = NodeID;
	Sel.Asset = nullptr;
	return Sel;
}

void UNarrativeFunctionLibrary::BreakDialogueNodeSelector(const FDialogueNodeSelector& Selector, FName& NodeID)
{
	NodeID = Selector.NodeID;
}

FName UNarrativeFunctionLibrary::Conv_DialogueNodeSelectorToName(const FDialogueNodeSelector& Selector)
{
	return Selector.NodeID;
}

FDialogueNodeSelector UNarrativeFunctionLibrary::Conv_NameToDialogueNodeSelector(const FName& NodeID)
{
	FDialogueNodeSelector Sel;
	Sel.NodeID = NodeID;
	return Sel;
}

FQuestStateSelector UNarrativeFunctionLibrary::MakeQuestStateSelector(FQuestStateSelector Selector)
{
	return Selector;
}

FQuestStateSelector UNarrativeFunctionLibrary::MakeQuestStateSelectorFromID(FName NodeID)
{
	FQuestStateSelector Sel;
	Sel.NodeID = NodeID;
	Sel.Asset = nullptr;
	return Sel;
}

void UNarrativeFunctionLibrary::BreakQuestStateSelector(const FQuestStateSelector& Selector, FName& NodeID)
{
	NodeID = Selector.NodeID;
}

FName UNarrativeFunctionLibrary::Conv_QuestStateSelectorToName(const FQuestStateSelector& Selector)
{
	return Selector.NodeID;
}

FQuestStateSelector UNarrativeFunctionLibrary::Conv_NameToQuestStateSelector(const FName& NodeID)
{
	FQuestStateSelector Sel;
	Sel.NodeID = NodeID;
	return Sel;
}

FQuestBranchSelector UNarrativeFunctionLibrary::MakeQuestBranchSelector(FQuestBranchSelector Selector)
{
	return Selector;
}

FQuestBranchSelector UNarrativeFunctionLibrary::MakeQuestBranchSelectorFromID(FName NodeID)
{
	FQuestBranchSelector Sel;
	Sel.NodeID = NodeID;
	Sel.Asset = nullptr;
	return Sel;
}

void UNarrativeFunctionLibrary::BreakQuestBranchSelector(const FQuestBranchSelector& Selector, FName& NodeID)
{
	NodeID = Selector.NodeID;
}

FName UNarrativeFunctionLibrary::Conv_QuestBranchSelectorToName(const FQuestBranchSelector& Selector)
{
	return Selector.NodeID;
}

FQuestBranchSelector UNarrativeFunctionLibrary::Conv_NameToQuestBranchSelector(const FName& NodeID)
{
	FQuestBranchSelector Sel;
	Sel.NodeID = NodeID;
	return Sel;
}

...

// added-end


```

### Quest.cpp

```cpp title="/Narrative/Source/Narrative/Private/Quest.cpp" showLineNumbers
 #include "Quest.h"
// removed-start
#include "NarrativeDataTask.h"
// removed-end
 #include "QuestSM.h"

...

// removed-start
#include "NarrativeEvent.h"
// removed-end
 #include "NarrativeComponent.h"
// removed-start
#include "NarrativeFunctionLibrary.h"
// removed-end
 #include "NarrativePartyComponent.h"
// removed-start
#include "GameFramework/PlayerController.h"
#include "Net/UnrealNetwork.h"
// removed-end
// added-start
#include <GameFramework/PlayerController.h>

FQuestDelegates::FOnQuestStartedSignature FQuestDelegates::OnQuestStarted;
FQuestDelegates::FOnQuestEndSignature FQuestDelegates::OnQuestEnd;
// added-end
 
// added-start
	bResumeDialogueAfterLoad = true; 
// added-end
// added-start

	for (auto& Req : QuestRequirements)
	{
		if (Req)
		{
			Req->OnRemoved(this);
		}
	}

	QuestRequirements.Empty();
// added-end
// added-start
		// notify other listening objects
		FQuestDelegates::OnQuestStarted.Broadcast(OwningComp, this, QuestStartID);
		
// added-end
// added-start
	}
}

void UQuest::HandleBeginDialogue()
{
	if (!QuestDialogue || !OwningComp)
	{
		return;
	}
	
	FDialoguePlayParams PlayParams;
	PlayParams.bOverride_bFreeMovement = true; 
	PlayParams.bFreeMovement = true;
	PlayParams.bOverride_bUnskippable = true;
	PlayParams.bUnskippable = true; 
	PlayParams.StartFromID = CurrentState ? CurrentState->GetID() : NAME_None;
	if (OwningComp->HasDialogueAvailable(QuestDialogue, PlayParams))
	{
		OwningComp->BeginDialogue(QuestDialogue, PlayParams);
// added-end
// added-start

		if (!OwningComp->bIsLoading)
		{
			HandleBeginDialogue();
		}
// added-end

...

// removed-start
		if (State->GetID() == ID)
// removed-end
// added-start
		if (State && State->GetID() == ID)
// added-end
 		{
 			return State;
 		}

...

// removed-start
		if (Branch->GetID() == ID)
// removed-end
// added-start
		if (Branch && Branch->GetID() == ID)
// added-end
 		{
 			return Branch;
 		}
// added-start
#if WITH_EDITOR
void UQuest::PostLoad()
{
	// fix missing transaction flag on nodes
	for (UQuestNode* Node : GetNodes())
	{
		Node->SetFlags(RF_Transactional);
	}

	// fix dialogue connection
	UpdateDialogueConnection();
	
	Super::PostLoad();
}

void UQuest::PreEditChange(FProperty* PropertyAboutToChange)
{
	const FName PropertyName = (PropertyAboutToChange != nullptr) ? PropertyAboutToChange->GetFName() : NAME_None;

	// update quest asset
	if (PropertyName == GET_MEMBER_NAME_CHECKED(UQuest, QuestDialogue))
	{
		LastQuestDialogue = QuestDialogue;
	}
	
	Super::PreEditChange(PropertyAboutToChange);
}

void UQuest::PostEditChangeProperty(FPropertyChangedEvent& PropertyChangedEvent)
{
	const FName PropertyName = (PropertyChangedEvent.Property != nullptr) ? PropertyChangedEvent.Property->GetFName() : NAME_None;

	// update last dialogue connected quest
	if (PropertyName == GET_MEMBER_NAME_CHECKED(UQuest, QuestDialogue))
	{
		UpdateDialogueConnection();
	}
	
	Super::PostEditChangeProperty(PropertyChangedEvent);
}

void UQuest::UpdateDialogueConnection()
{
	if (UDialogue* LastDialogue = Cast<UDialogue>(LastQuestDialogue.GetDefaultObject()))
	{
		// remove connected quest ref
		if (LastDialogue->EditorLinkedQuest == GetClass()->GetDefaultObject()->GetClass())
		{
			LastDialogue->Modify();
			LastDialogue->EditorLinkedQuest = nullptr;
			LastDialogue->MarkPackageDirty();
		}
		LastQuestDialogue = nullptr;
	}

	// update new dialogue connected quest
	if (UDialogue* NewDialogue = Cast<UDialogue>(QuestDialogue.GetDefaultObject()))
	{
		// set connected quest ref
		if (NewDialogue->EditorLinkedQuest == nullptr)
		{
			NewDialogue->Modify();
			NewDialogue->EditorLinkedQuest = GetClass()->GetDefaultObject()->GetClass();
			NewDialogue->MarkPackageDirty();
		}
	}
}
#endif

void UQuest::QuestPostLoad()
{
	if (bResumeDialogueAfterLoad && QuestCompletion == EQuestCompletion::QC_Started)
	{
		HandleBeginDialogue();
	}
	
	BPQuestPostLoad();
	OnQuestPostLoad.Broadcast(this);
}

// added-end
// added-start
		// notify listeners this quest has ended 
		FQuestDelegates::OnQuestEnd.Broadcast(OwningComp, this);
		
// added-end
// added-start
		// notify listeners this quest has ended 
		FQuestDelegates::OnQuestEnd.Broadcast(OwningComp, this);
		
// added-end
// added-start

		QuestDialogue = nullptr;
// added-end
// added-start
}

void UQuest::AddQuestRequirement_Implementation(UQuestRequirement* Requirement)
{
	if (!QuestRequirements.Contains(Requirement))
	{
		QuestRequirements.Add(Requirement);
		Requirement->OnAdded(this);
	}
}

void UQuest::RemoveQuestRequirement_Implementation(UQuestRequirement* Requirement)
{
	if (QuestRequirements.Contains(Requirement))
	{
		QuestRequirements.Remove(Requirement);
		Requirement->OnRemoved(this);
	}
// added-end
// added-start

UQuestRequirement::UQuestRequirement()
{

}

void UQuestRequirement::OnAdded_Implementation(UQuest* Quest)
{

}

void UQuestRequirement::OnRemoved_Implementation(UQuest* Quest)
{

}

UQuest* UQuestRequirement::GetOwningQuest() const
{
	return Cast<UQuest>(GetOuter());
}

...

// added-end


```

### NarrativeQuestSettings.cpp

```cpp title="/Narrative/Source/Narrative/Private/NarrativeQuestSettings.cpp" showLineNumbers

// removed-start
// Fill out your copyright notice in the Description page of Project Settings.
// removed-end
// added-start
// Copyright Narrative Tools 2025. 
// added-end
 
 
 #include "NarrativeQuestSettings.h"

...

// removed-start
}// removed-end
// added-start
}
// added-end


```

### Dialogue.cpp

```cpp title="/Narrative/Source/Narrative/Private/Dialogue.cpp" showLineNumbers
 #include "Dialogue.h"
 #include "NarrativeDialogueSettings.h"
// added-start

// added-end
// added-start

FDialogueDelegates::FOnDialogueStartedSignature FDialogueDelegates::OnDialogueStarted;
FDialogueDelegates::FOnDialogueEndSignature FDialogueDelegates::OnDialogueEnd;
// added-end
// added-start
	bUnskippable = false;
// added-end
// added-start
	EndDialogueDist = -1.f; 
// added-end
// added-start
				if (PlayParams.Priority > -1)
				{
					Priority = PlayParams.Priority;
				}

// added-end
// added-start
				if (PlayParams.bOverride_bUnskippable)
				{
					bFreeMovement = PlayParams.bUnskippable;
				}

				if (PlayParams.bOverride_bFreeMovement)
				{
					bFreeMovement = PlayParams.bFreeMovement;
				}

				if (PlayParams.bOverride_bStopMovement)
				{
					bAutoStopMovement = PlayParams.bStopMovement;
				}

// added-end
// added-start
	StopDialogueSequence();

// added-end

...

// removed-start

	StopDialogueSequence();
// removed-end
 
 	if (DialogueAudio)
 	{
// added-start
void UDialogue::PostLoad()
{
	// fix missing transaction flag on nodes
	for (UDialogueNode* Node : GetNodes())
	{
		Node->SetFlags(RF_Transactional);
	}
	
	Super::PostLoad();
}

// added-end

...

// removed-start
void UDialogue::ExitDialogue()
// removed-end
// added-start
void UDialogue::ExitDialogue(const EExitDialogueReason Reason)
// added-end
 {
 	if (OwningComp)
 	{
// removed-start
		OwningComp->ExitDialogue();
// removed-end
// added-start
		OwningComp->ExitDialogue(Reason);
// added-end
// added-start

	if (EndDialogueDist > 0.f && OwningPawn)
	{
		for (auto& Speaker : Speakers)
		{
			if (SpeakerAvatars.Contains(Speaker.GetSpeakerID()))
			{
				if (AActor* SpeakerAvatar = *SpeakerAvatars.Find(Speaker.GetSpeakerID()))
				{
					if (OwningPawn->GetDistanceTo(SpeakerAvatar) > EndDialogueDist)
					{
						OwningComp->ExitDialogue(EExitDialogueReason::EDR_TooFarAway);
					}
				}
			}
		}
	}

}

bool UDialogue::CanSkipDialogue_Implementation() const
{
	return !bUnskippable;
// added-end

...

// removed-start

	InitSpeakerAvatars();

	if (bAdjustPlayerTransform)
	{
		AdjustPlayerTransform();
	}
// removed-end
 
 	OldViewTarget = OwningController ? OwningController->GetViewTarget() : nullptr;
 

...

// removed-start
		if (bAutoStopMovement)
// removed-end
// added-start
		//Free movement shouldnt autostop 
		if (bAutoStopMovement && !bFreeMovement)
// added-end
 		{
 			if (const ACharacter* PlayerChar = Cast<ACharacter>(OwningPawn))
 			{
// added-start
	}

	InitSpeakerAvatars();

	if (bAdjustPlayerTransform)
	{
		AdjustPlayerTransform();
// added-end
// added-start
	int32 Idx = 0;

// added-end

...

// removed-start
		if (AActor* SpeakerActor = LinkSpeakerAvatar(Speaker))
// removed-end
// added-start
		if (AActor* SpeakerActor = LinkSpeakerAvatar(Speaker, Idx))
// added-end
 		{
 			if (IsValid(SpeakerActor))
 			{			
// added-start

			++Idx;
// added-end

...

// removed-start
	if (AActor* SpeakerActor = LinkSpeakerAvatar(PlayerSpeakerInfo))
// removed-end
// added-start
	if (AActor* SpeakerActor = LinkSpeakerAvatar(PlayerSpeakerInfo, -1))
// added-end
 	{
 		SpeakerAvatars.Add(PlayerSpeakerInfo.GetSpeakerID(), SpeakerActor);
 		PlayerSpeakerInfo.SpeakerAvatarTransform = SpeakerActor->GetActorTransform();
// added-start

	// notify listeners that this dialogue has ended
	FDialogueDelegates::OnDialogueEnd.Broadcast(OwningComp, this);
	
// added-end

...

// removed-start
			bool bWantsAutoSelect = bFreeMovement;
// removed-end
// added-start
			bool bWantsAutoSelect = false; //bFreeMovement;
// added-end
 
 			if (const UNarrativeDialogueSettings* DialogueSettings = GetDefault<UNarrativeDialogueSettings>())
 			{
// removed-start
				if (DialogueSettings->bAutoSelectSingleResponse && AvailableResponses.Num() == 1)
// removed-end
// added-start
				if (DialogueSettings->bAutoSelectSingleResponse || (AvailableResponses.Num() == 1 && AvailableResponses.IsValidIndex(0) && AvailableResponses[0]->IsAutoSelectIfOnlyReply()))
// added-end

...

// removed-start

// removed-end
 
 			//If a response is autoselect, select it and early out 
 			for (auto& AvailableResponse : AvailableResponses)

...

// removed-start
		ExitDialogue();
// removed-end
// added-start
		ExitDialogue(EExitDialogueReason::EDR_NoLines);
// added-end
 	}
 }
 

...

// removed-start
	
	FVector EyesLoc;
// removed-end
// added-start

	//We want the head bone, but not where the head bone is as that moves around. We want the default offset the head bone is normally at. Even this is technically not perfect as this is the t-pose 
	FVector EyesLoc = FVector::ZeroVector;
// added-end
 	FRotator EyesRot;
// added-start

// added-end
 	Actor->GetActorEyesViewPoint(EyesLoc, EyesRot);
 
// removed-start
	const bool bIsChar = Actor->IsA<ACharacter>();

// removed-end
// added-start
	//Head is located at a different height per character, lets find it... 
// added-end

...

// removed-start
				EyesLoc = SkelMesh->GetBoneLocation(DefaultHeadBoneName);
				//EyesLoc.Z = SkelMesh->GetBoneLocation(DefaultHeadBoneName).Z;
				break;
// removed-end
// added-start
				EyesLoc.Z = SkelMesh->GetBoneLocation(DefaultHeadBoneName).Z;
// added-end
 			}
 		}
 	}

...

// removed-start
					ExitDialogue();
// removed-end
// added-start
					ExitDialogue(EExitDialogueReason::EDR_NoLines);
// added-end
 					return;
 				}
 

...

// removed-start
					ExitDialogue();
// removed-end
// added-start
					ExitDialogue(EExitDialogueReason::EDR_NoLines);
// added-end
 				}
 			}
 		}

...

// removed-start
AActor* UDialogue::LinkSpeakerAvatar_Implementation(const FSpeakerInfo& Info)
// removed-end
// added-start
AActor* UDialogue::LinkSpeakerAvatar_Implementation(const FSpeakerInfo& Info, const int32 Idx)
// added-end
 {
 	//Default to using the OwningPawn, or DefaultNPCAvatar, unless something else can be found... 
 	AActor* SpawnedActor = Info.GetSpeakerID() == PlayerSpeakerInfo.GetSpeakerID() ? OwningPawn : nullptr;


```

### DialogueAsset.cpp

```cpp title="/Narrative/Source/Narrative/Private/DialogueAsset.cpp" showLineNumbers

 #include "DialogueAsset.h"


```

### W_NarrativeMenu_Dialogue.uasset

- **UPDATED (asset)**


### WBP_NarrativeButton_DialogueOption.uasset

- **UPDATED (asset)**


### BP_Narrative3Overlay.uasset

- **UPDATED (asset)**


### W_NarrativeMenu_QuestJournal.uasset

- **UPDATED (asset)**


### NE_BeginQuest.uasset

- **UPDATED (asset)**


### NE_BeginDialogue.uasset

- **REMOVED**


### BPT_FinishDialogue.uasset

- **UPDATED (asset)**


### BPT_PlayDialogueNode.uasset

- **UPDATED (asset)**


### BPT_GoToLocation.uasset

- **UPDATED (asset)**