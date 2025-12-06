---
sidebar_label: '3.6.0 Code Changes'
---

# 3.6.0 Code Changes

:::note

Some files simply have been reordered, but functionally, they make no difference. These changes have **not** been included.

:::

### DialogueAssetFactory.cpp

```cpp title="/NarrativeDialogueEditor/Private/DialogueAssetFactory.cpp" showLineNumbers

...

// removed-start
        //Generally we would never want the parent classes speakers to inherit down into child classes
        DialogueCDO->Speakers.Empty();
// removed-end
// added-start
        ////Generally we would never want the parent classes speakers to inherit down into child classes
        //DialogueCDO->Speakers.Empty();
// added-end

// removed-start
        FString NameString = DialogueBP->GetFName().ToString();
// removed-end
// added-start
        //FString NameString = DialogueBP->GetFName().ToString();
// added-end

// removed-start
        //Add the Default Speaker to the dialogue 
        FSpeakerInfo DefaultSpeaker;
        int32 UnderscoreIndex = -1;
// removed-end
// added-start
        ////Add the Default Speaker to the dialogue 
        //FSpeakerInfo DefaultSpeaker;
        //int32 UnderscoreIndex = -1;
// added-end

// removed-start
        if (NameString.FindChar(TCHAR('_'), UnderscoreIndex))
        {
            //remove D_SpeakerName prefix 
            DefaultSpeaker.SpeakerID = FName(NameString.RightChop(UnderscoreIndex + 1));
        }
        else
        {
            DefaultSpeaker.SpeakerID = FName(NameString);
        }
// removed-end
// added-start
        //if (NameString.FindChar(TCHAR('_'), UnderscoreIndex))
        //{
        //	//remove D_SpeakerName prefix 
        //	DefaultSpeaker.SpeakerID = FName(NameString.RightChop(UnderscoreIndex + 1));
        //}
        //else
        //{
        //	DefaultSpeaker.SpeakerID = FName(NameString);
        //}
// added-end

...

// removed-start
        DialogueCDO->Speakers.Add(DefaultSpeaker);
// removed-end
// added-start
        //DialogueCDO->Speakers.Add(DefaultSpeaker);
// added-end
    }
}



```

### DialogueGraphSchema.h

```cpp title="/NarrativeDialogueEditor/Private/DialogueGraphSchema.h" showLineNumbers

...

/** Template of node we want to create */
UPROPERTY()
// removed-start
class UDialogueGraphNode* NodeTemplate;
// removed-end
// added-start
TObjectPtr<class UDialogueGraphNode> NodeTemplate;
// added-end

...



```

### DialogueGraphNode_NPC.cpp

```cpp title="/NarrativeDialogueEditor/Private/DialogueGraphNode_NPC.cpp" showLineNumbers

...

    {
        if (UDialogueNode_NPC* NPCNode = Cast<UDialogueNode_NPC>(DialogueNode))
        {
// removed-start
            return DialogueCDO->GetSpeaker(NPCNode->SpeakerID).NodeColor;
// removed-end
// added-start
            return DialogueCDO->GetSpeaker(NPCNode->GetSpeakerID()).NodeColor;
// added-end

...

// removed-start
            return FText::FromName(DialogueCDO->GetSpeaker(NPCNode->SpeakerID).SpeakerID);
// removed-end
// added-start
            return FText::FromName(DialogueCDO->GetSpeaker(NPCNode->GetSpeakerID()).SpeakerID);
// added-end
        }
    }
}


```

### DialogueEditorDetails.cpp

```cpp title="/NarrativeDialogueEditor/Private/DialogueEditorDetails.cpp" showLineNumbers

#include "DialogueEditorDetails.h"
#include "DetailLayoutBuilder.h"
#include "Dialogue.h"
// added-start
#include "DialogueSM.h"
// added-end

...

// removed-start
#include "DialogueSM.h"
// removed-end
#include "Widgets/Input/SComboBox.h"
#include "IPropertyUtilities.h"


...

// removed-start
            return FText::FromName(NPCNode->SpeakerID);
// removed-end
// added-start
            return FText::FromName(NPCNode->GetSpeakerID());
// added-end
        }
    }
}

...

// removed-start
            NPCNode->SpeakerID = FName(NewSelection->ToString());
// removed-end
// added-start
            NPCNode->SetSpeakerID(FName(NewSelection->ToString()));
// added-end
        }
    }
}

...

// removed-start

        if (UDialogueBlueprint* DialogueBP = Cast<UDialogueBlueprint>(NPCNode->OwningDialogue->GetOuter()))
        {
            if (UDialogue* DialogueCDO = Cast<UDialogue>(DialogueBP->GeneratedClass->GetDefaultObject()))
            {

                for (const auto& Speaker : DialogueCDO->Speakers)
                {
                    SpeakersList.Add(MakeShareable(new FText(FText::FromName(Speaker.SpeakerID))));

                    if (Speaker.SpeakerID == NPCNode->SpeakerID)
                    {
                        SelectedItem = SpeakersList.Last();
                    }
                }

                FText RowText = LOCTEXT("SpeakerIDLabel", "Speaker");

                //Add a button to make the quest designer more simplified 
                FDetailWidgetRow& Row = Category.AddCustomRow(GroupLabel)
                    .NameContent()
                    [
                        SNew(STextBlock)
                        .Font(FCoreStyle::GetDefaultFontStyle("Regular", 8))
                    .Text(RowText)
                    ]
                .ValueContent()
                    [
                        SNew(SComboBox<TSharedPtr<FText>>)
                        .OptionsSource(&SpeakersList)
                    .OnSelectionChanged(this, &FDialogueEditorDetails::OnSelectionChanged)
                    .InitiallySelectedItem(SelectedItem)
                    .OnGenerateWidget_Lambda([](TSharedPtr<FText> Option)
                        {
                            return SNew(STextBlock)
                                .Font(FCoreStyle::GetDefaultFontStyle("Regular", 8))
                                .Text(*Option);
                        })
                    [
                        SNew(STextBlock)
                        .Font(FCoreStyle::GetDefaultFontStyle("Regular", 8))
                            .Text(this, &FDialogueEditorDetails::GetSpeakerText)
                    ]
                    ];
            }
        }
// removed-end
    }
// removed-start
    //else if (UDialogue* DialogueCDO = Cast<UDialogue>(EditedObjects[0]))
    //{
    //	//Add a button to make the quest designer more simplified 
    //	Category.AddCustomRow(GroupLabel)
    //		.ValueContent()
    //		[
    //			SNew(SButton)
    //			.ButtonStyle(FAppStyle::Get(), "RoundButton")
    //		.OnClicked(this, &FDialogueEditorDetails::SetTransformsFromActorSelection)
    //		[
    //			SNew(STextBlock)
    //			.Font(IDetailLayoutBuilder::GetDetailFontBold())
    //			.ToolTipText(LOCTEXT("SetSpeakerTransformsTooltip", "")
    //			LOCTEXT("SetSpeakerTransforms", "Set Speaker Transforms From Selection"))
    //		]
    //		];
    //}
// removed-end
}
}

...

// removed-start
#undef LOCTEXT_NAMESPACE// removed-end
// added-start
#undef LOCTEXT_NAMESPACE
// added-end


```

### DialogueGraphSchema.cpp

```cpp title="/NarrativeDialogueEditor/Private/DialogueGraphSchema.cpp" showLineNumbers

#include "Framework/Commands/UIAction.h"
#include "Framework/MultiBox/MultiBoxBuilder.h"
#include "EdGraphNode_Comment.h"
// removed-start
#include "IDialogueEditor.h"
// removed-end

...

// removed-start
#include "Toolkits/ToolkitManager.h"
// removed-end
#include "DialogueConnectionDrawingPolicy.h"
#include "DialogueGraph.h"
// removed-start
#include "GraphEditorActions.h"
#include "Framework/Commands/GenericCommands.h"
#include "DialogueEditorCommands.h"
#include "AssetRegistry/AssetRegistryModule.h"
#include "DialogueSM.h"
// removed-end
#include "DialogueGraphNode_NPC.h"
// added-start
#include "Dialogue.h"
#include "DialogueSM.h"
// added-end

...

// removed-start
            NPCNode->SpeakerID = SpeakerInfo.SpeakerID;
// removed-end
// added-start
            NPCNode->SetSpeakerID(SpeakerInfo.GetSpeakerID());
// added-end
        }
    }


...

// removed-start
#undef LOCTEXT_NAMESPACE// removed-end
// added-start
#undef LOCTEXT_NAMESPACE
// added-end


```

### DialogueGraph.cpp

```cpp title="/NarrativeDialogueEditor/Private/DialogueGraph.cpp" showLineNumbers


#include "DialogueGraph.h"
#include "Dialogue.h"
// added-start
#include "NarrativeFunctionLibrary.h"
#include "NarrativeComponent.h"
#include "DialogueSM.h"
#include "QuestSM.h"
// added-end

...

// removed-start
#include "QuestSM.h"
// removed-end
#include "Editor/UnrealEd/Public/Editor.h"
// removed-start
#include "NarrativeFunctionLibrary.h"
#include "NarrativeComponent.h"
#include <DialogueSM.h>
// removed-end
#include "DialogueGraphNode_Player.h"
#include "DialogueEditorSettings.h"

...

// removed-start
            if (DialogueCDO->Speakers.IsValidIndex(0))
            {
                RootNode->Line.Text = FText::Format(LOCTEXT("DefaultRootNodeText", "Hi there, i'm {0}."), FText::FromString(DialogueCDO->Speakers[0].SpeakerID.ToString()));
                RootNode->SpeakerID = DialogueCDO->Speakers[0].SpeakerID;
            }
// removed-end
// added-start
            //if (DialogueCDO->Speakers.IsValidIndex(0))
            //{
            //	RootNode->Line.Text = FText::Format(LOCTEXT("DefaultRootNodeText", "Hi there, i'm {0}."), FText::FromString(DialogueCDO->Speakers[0].SpeakerID.ToString()));
            //	RootNode->SpeakerID = DialogueCDO->Speakers[0].SpeakerID;
            //}
// added-end

            DialogueAsset->DialogueTemplate->RootDialogue = RootNode;
        }


```

### DialogueConnectionDrawingPolicy.cpp

```cpp title="/NarrativeDialogueEditor/Private/DialogueConnectionDrawingPolicy.cpp" showLineNumbers


#include "DialogueConnectionDrawingPolicy.h"
#include "QuestSM.h"
// added-start
#include "NarrativeDialogueSettings.h"
// added-end

...

// removed-start
#include "NarrativeDialogueSettings.h"
// removed-end
#include "DialogueEditorSettings.h"




```

### DialogueGraphEditor.cpp

```cpp title="/NarrativeDialogueEditor/Private/DialogueGraphEditor.cpp" showLineNumbers

...

void FDialogueGraphEditor::Dialogue_PasteNodesHere(const FVector2D& Location)
{
// removed-start

// removed-end

...

// removed-start
return;
// removed-end
// added-start
// return;
// added-end

TSharedPtr<SGraphEditor> CurrentGraphEditor = FocusedGraphEdPtr.Pin();
if (!CurrentGraphEditor.IsValid())
// added-start
// Disabled Node copy + paste and keeping text based until further testing can happen
// added-end

...

// removed-start
TSet<UEdGraphNode*> PastedNodes;
FEdGraphUtilities::ImportNodesFromText(DialogueGraph, TextToImport, /*out*/ PastedNodes);

if (PastedNodes.Num())
{
    for (TSet<UEdGraphNode*>::TIterator It(PastedNodes); It; ++It)
    {
        UEdGraphNode* PasteNode = *It;
        UDialogueGraphNode* PasteDialogueNode = Cast<UDialogueGraphNode>(PasteNode);


        if (PasteNode && PasteDialogueNode)
        {
            // Select the newly pasted stuff
            CurrentGraphEditor->SetNodeSelection(PasteNode, true);

            PasteNode->NodePosX += 400.f;
            PasteNode->NodePosY += 400.f;

            PasteNode->SnapToGrid(16);

            // Give new node a different Guid from the old one
            PasteNode->CreateNewGuid();

            //New dialogue graph node will point to old dialouenode, duplicate a new one for our new node
            UDialogueNode* DupNode = Cast<UDialogueNode>(StaticDuplicateObject(PasteDialogueNode->DialogueNode, PasteDialogueNode->DialogueNode->GetOuter()));

            //StaticDuplicateObject won't have assigned a unique ID, grab a unique one
            DupNode->EnsureUniqueID();

            PasteDialogueNode->DialogueNode = DupNode;
        }
    }

    //Now that everything has been pasted, iterate a second time to rebuild the new nodes connections 
    for (TSet<UEdGraphNode*>::TIterator It(PastedNodes); It; ++It)
    {
        UEdGraphNode* PasteNode = *It;
        UDialogueGraphNode* PasteDialogueNode = Cast<UDialogueGraphNode>(PasteNode);

        //Dialogue nodes connections will still be outdated, update these to the new connections
        DialogueGraph->NodeAdded(PasteDialogueNode);
        DialogueGraph->PinRewired(PasteDialogueNode, PasteDialogueNode->GetOutputPin());
    }

}
else
{
// removed-end
// added-start
// TSet<UEdGraphNode*> PastedNodes;
// FEdGraphUtilities::ImportNodesFromText(DialogueGraph, TextToImport, /*out*/ PastedNodes);

// if (PastedNodes.Num())
// {
// 	for (TSet<UEdGraphNode*>::TIterator It(PastedNodes); It; ++It)
// 	{
// 		UEdGraphNode* PasteNode = *It;
// 		UDialogueGraphNode* PasteDialogueNode = Cast<UDialogueGraphNode>(PasteNode);
//
//
// 		if (PasteNode && PasteDialogueNode)
// 		{
// 			// Select the newly pasted stuff
// 			CurrentGraphEditor->SetNodeSelection(PasteNode, true);
//
// 			PasteNode->NodePosX += 400.f;
// 			PasteNode->NodePosY += 400.f;
//
// 			PasteNode->SnapToGrid(16);
//
// 			// Give new node a different Guid from the old one
// 			PasteNode->CreateNewGuid();
//
// 			//New dialogue graph node will point to old dialouenode, duplicate a new one for our new node
// 			UDialogueNode* DupNode = Cast<UDialogueNode>(StaticDuplicateObject(PasteDialogueNode->DialogueNode, PasteDialogueNode->DialogueNode->GetOuter()));
//
// 			//StaticDuplicateObject won't have assigned a unique ID, grab a unique one
// 			DupNode->EnsureUniqueID();
//
// 			PasteDialogueNode->DialogueNode = DupNode;
// 		}
// 	}
//
// 	//Now that everything has been pasted, iterate a second time to rebuild the new nodes connections 
// 	for (TSet<UEdGraphNode*>::TIterator It(PastedNodes); It; ++It)
// 	{
// 		UEdGraphNode* PasteNode = *It;
// 		UDialogueGraphNode* PasteDialogueNode = Cast<UDialogueGraphNode>(PasteNode);
//
// 		//Dialogue nodes connections will still be outdated, update these to the new connections
// 		DialogueGraph->NodeAdded(PasteDialogueNode);
// 		DialogueGraph->PinRewired(PasteDialogueNode, PasteDialogueNode->GetOutputPin());
// 	}
//
// }
// else
// {
// added-end
    /*
    We may be trying to paste from narrative dialogue markup.
    

...

// removed-start


// removed-end
// added-start
            
// added-end
            FDialogueSchemaAction_NewNode AddNewNode;
            UDialogueGraphNode* Node;
            UClass* DialogueNodeClass = SpeakerID.Equals("Player", ESearchCase::IgnoreCase) ? UDialogueGraphNode_Player::StaticClass() : UDialogueGraphNode_NPC::StaticClass();

...

// removed-start
                    NPCNode->SpeakerID = FName(SpeakerID);
// removed-end
// added-start
                    NPCNode->SetSpeakerID(FName(SpeakerID));
// added-end
                }
            }


...

// removed-start
}
// removed-end
// added-start
// } // else end bracket
// added-end

// Update UI
CurrentGraphEditor->NotifyGraphChanged();
// added-start
    .IsEditable(bGraphIsEditable)
// added-end

...

// removed-start
#undef LOCTEXT_NAMESPACE// removed-end
// added-start
#undef LOCTEXT_NAMESPACE
// added-end


```

### DialogueBlueprintCompiler.cpp

```cpp title="/NarrativeDialogueEditor/Private/DialogueBlueprintCompiler.cpp" showLineNumbers

...

#include "DialogueBlueprintCompiler.h"
#include "DialogueBlueprintGeneratedClass.h"
// removed-start
#include "DialogueGraphSchema.h"
// removed-end
// added-start
#include "DialogueGraphSchema.h"
// added-end

...



```

### QuestGraphSchema.h

```cpp title="/NarrativeQuestEditor/Private/QuestGraphSchema.h" showLineNumbers

...

/** Template of node we want to create */
UPROPERTY()
// removed-start
class UQuestGraphNode* NodeTemplate;
// removed-end
// added-start
TObjectPtr<class UQuestGraphNode> NodeTemplate;
// added-end

...



```

### QuestGraphSchema.cpp

```cpp title="/NarrativeQuestEditor/Private/QuestGraphSchema.cpp" showLineNumbers

...

#include "QuestSM.h"
#include "Quest.h"
#include "QuestGraphEditor.h"
// added-start
#include <Engine/ObjectLibrary.h>
#include "QuestEditorSettings.h"
// added-end

...

// removed-start
    //Todo optimize by caching these
    FAssetRegistryModule& AssetRegistryModule = FModuleManager::LoadModuleChecked<FAssetRegistryModule>("AssetRegistry");
// removed-end
    FCategorizedGraphActionListBuilder ActionMainCategory("Now the player needs to...");

// added-start
    //No need to cache this as once library loads the classes once they will be very quick to load next time 
    auto ItemLibrary = UObjectLibrary::CreateLibrary(UNarrativeTask::StaticClass(), true, GIsEditor);

    TArray<FString> Paths;

    if (const UQuestEditorSettings* Settings = GetDefault<UQuestEditorSettings>())
    {
        Paths = Settings->QuestTaskSearchPaths;
    }

    ItemLibrary->LoadBlueprintsFromPaths(Paths);

    TArray<UClass*> Subclasses;
    ItemLibrary->GetObjects<UClass>(Subclasses);

// added-end
    if (UQuestBlueprint* const QuestAsset = Cast<UQuestBlueprint>(ContextMenuBuilder.CurrentGraph->GetOuter()))

...

// removed-start
        TArray<UClass*> Subclasses;
        GetDerivedClasses(UNarrativeTask::StaticClass(), Subclasses);
    
// removed-end
        FCategorizedGraphActionListBuilder Title("NEXT THE PLAYER HAS TO:");
        ActionMainCategory.Append(Title);



```

### QuestAssetFactory.cpp

```cpp title="/NarrativeQuestEditor/Private/QuestAssetFactory.cpp" showLineNumbers

...

#include "Editor/ClassViewer/Public/ClassViewerFilter.h"
#include "QuestBlueprint.h"
#include "Kismet2/SClassPickerDialog.h"
// added-start
#include "Kismet2/KismetEditorUtilities.h"
// added-end

...

// removed-start
#include "Kismet2/KismetEditorUtilities.h"
// removed-end
#include "Quest.h"
#include "BlueprintEditorSettings.h"
#include "QuestEditorSettings.h"


```

### NarrativeQuestEditorModule.cpp

```cpp title="/NarrativeQuestEditor/Private/NarrativeQuestEditorModule.cpp" showLineNumbers

...

#include "QuestEditorDetails.h"
#include "QuestEditorSettings.h"
#include "NarrativeQuestSettings.h"
// added-start
#include "QuestTask.h"
// added-end

...

// removed-start
#include "QuestTask.h"
// removed-end

DEFINE_LOG_CATEGORY(LogNarrativeQuestEditor);



```

### QuestEditorSettings.cpp

```cpp title="/NarrativeQuestEditor/Private/QuestEditorSettings.cpp" showLineNumbers

...

    DefaultQuestWidgetClass = QuestNodeUserWidgetFinder.Class;
}

// added-start
QuestTaskSearchPaths.Add("/Narrative/DefaultTasks/");	
QuestTaskSearchPaths.Add("/NarrativeInventory/Narrative3/Tasks/");
QuestTaskSearchPaths.Add("/NarrativeNavigator/Narrative3/Tasks/");	
QuestTaskSearchPaths.Add("/NarrativeInteraction/Integrations/Narrative3/");
QuestTaskSearchPaths.Add("/Game/Blueprints/Tasks/");
QuestTaskSearchPaths.Add("/Game/Blueprints/Narrative/Tasks/");
QuestTaskSearchPaths.Add("/Game/Narrative/Tasks/");

// added-end

...



```

### QuestBlueprintCompiler.cpp

```cpp title="/NarrativeQuestEditor/Private/QuestBlueprintCompiler.cpp" showLineNumbers

...

#include "QuestBlueprintCompiler.h"
#include "QuestBlueprintGeneratedClass.h"
// removed-start
#include "QuestGraphSchema.h"
// removed-end
// added-start
#include "QuestGraphSchema.h"
// added-end

...



```

### SQuestGraphNode.cpp

```cpp title="/NarrativeQuestEditor/Private/SQuestGraphNode.cpp" showLineNumbers

...

return FAppStyle::Get().GetBrush(TEXT("Graph.StateNode.Body"));
}

// removed-start
#undef LOCTEXT_NAMESPACE// removed-end
// added-start
#undef LOCTEXT_NAMESPACE
// added-end


```

### QuestGraphEditor.cpp

```cpp title="/NarrativeQuestEditor/Private/QuestGraphEditor.cpp" showLineNumbers

...

return false;

// If any of the nodes can be duplicated then we should allow copying
// removed-start
/*const FGraphPanelSelectionSet SelectedNodes = GetSelectedNodes();
for (FGraphPanelSelectionSet::TConstIterator SelectedIter(SelectedNodes); SelectedIter; ++SelectedIter)
{
    UEdGraphNode* Node = Cast<UEdGraphNode>(*SelectedIter);
    if (Node && Node->CanDuplicateNode())
    {
        return true;
    }
}

return false;*/
// removed-end
// added-start
//const FGraphPanelSelectionSet SelectedNodes = GetSelectedNodes();
//for (FGraphPanelSelectionSet::TConstIterator SelectedIter(SelectedNodes); SelectedIter; ++SelectedIter)
//{
//	UEdGraphNode* Node = Cast<UEdGraphNode>(*SelectedIter);
//	if (Node && Node->CanDuplicateNode())
//	{
//		return true;
//	}
//}

//return false;
// added-end
// added-start
    .IsEditable(bGraphIsEditable)
// added-end

...



```

### QuestEditorSettings.h

```cpp title="/NarrativeQuestEditor/Private/QuestEditorSettings.h" showLineNumbers

...

public:

UQuestEditorSettings();
// added-start

//All the folders the quest editor searches in to find your quest tasks. 
UPROPERTY(EditAnywhere, config, Category = "Quests", meta = (RelativeToGameContentDir))
TArray<FString> QuestTaskSearchPaths;
// added-end

...



```

### DialogueAsset.cpp

```cpp title="/Narrative/Private/DialogueAsset.cpp" showLineNumbers

...

Dialogue = CreateDefaultSubobject<UDialogue>(TEXT("Dialogue"));

//Any dialogues created prior to the speakers update need a speaker added 
// removed-start
if (Dialogue->Speakers.Num() == 0)
{
    FSpeakerInfo DefaultSpeaker;
    DefaultSpeaker.SpeakerID = GetFName();
    Dialogue->Speakers.Add(DefaultSpeaker);
}
// removed-end
// added-start
//if (Dialogue->Speakers.Num() == 0)
//{
//	FSpeakerInfo DefaultSpeaker;
//	DefaultSpeaker.SpeakerID = GetFName();
//	Dialogue->Speakers.Add(DefaultSpeaker);
//}
// added-end

...



```

### DialogueBlueprintGeneratedClass.cpp

```cpp title="/Narrative/Private/DialogueBlueprintGeneratedClass.cpp" showLineNumbers

#include "DialogueBlueprintGeneratedClass.h"
#include "Dialogue.h"
// removed-start
#include <DialogueSM.h>
// removed-end
// added-start
#include "DialogueSM.h"
// added-end

...



```

### Quest.cpp

```cpp title="/Narrative/Private/Quest.cpp" showLineNumbers

...

#include "Quest.h"
#include "NarrativeDataTask.h"
#include "QuestSM.h"
// removed-start
#include "Net/UnrealNetwork.h"
#include "GameFramework/PlayerController.h"
// removed-end
// added-start
#include "GameFramework/PlayerController.h"
#include "Net/UnrealNetwork.h"
// added-end
// added-start
bTracked = true; 
// added-end
// added-start
BPPreQuestStarted(this);

// added-end
// added-start
void UQuest::SetTracked(const bool bNewTracked)
{
if (bNewTracked != bTracked)
{
    bTracked = bNewTracked;
    
    BPOnTrackedChanged(this, bTracked);
}
}

// added-end

...

// removed-start
    //Finally, activate our new state, therefore activating its branches allowing us to take one to progress through the quest 
// removed-end
// added-start
    //We dont call delegate updates when loading, as delegates are typically just for UI updates and things 
    if (!OwningComp->bIsLoading)
    {
        //Fire delegates because we're about to activate the current state. This can actually cause another state change, which will cause delegates to fire in the wrong order. 
        BPOnQuestNewState(this, NewState);

        if (OwningComp)
        {
            OwningComp->OnQuestNewState.Broadcast(this, NewState);
        }

        QuestNewState.Broadcast(this, CurrentState);
    }

    //Finally, activate our new state, therefore activating its branches allowing us to take one to progress through the quest. 
// added-end
    CurrentState->Activate();

// removed-start
    //If we're loading quests back in off disk we don't want to broadcast any progress or anything
    if (OwningComp->bIsLoading)
    {
        return;
    }

    //Fire off delegates 
    BPOnQuestNewState(this, NewState);

    if (OwningComp)
    {
        OwningComp->OnQuestNewState.Broadcast(this, NewState);
    }

    QuestNewState.Broadcast(this, CurrentState);
// removed-end
}

...

// removed-start
BPOnQuestFailed(this, QuestFailedMessage);

QuestFailed.Broadcast(this, QuestFailedMessage);

if (OwningComp)
{
// removed-end
// added-start
if (OwningComp && !OwningComp->bIsLoading)
{
    BPOnQuestFailed(this, QuestFailedMessage);

    QuestFailed.Broadcast(this, QuestFailedMessage);

// added-end
    OwningComp->OnQuestFailed.Broadcast(this, QuestFailedMessage);
}


...

// removed-start
BPOnQuestSucceeded(this, QuestSucceededMessage);

QuestSucceeded.Broadcast(this, QuestSucceededMessage);

if (OwningComp)
{
// removed-end
// added-start
if (OwningComp && !OwningComp->bIsLoading)
{
    BPOnQuestSucceeded(this, QuestSucceededMessage);

    QuestSucceeded.Broadcast(this, QuestSucceededMessage);

// added-end
    OwningComp->OnQuestSucceeded.Broadcast(this, QuestSucceededMessage);
}



```

### DialogueSM.cpp

```cpp title="/Narrative/Private/DialogueSM.cpp" showLineNumbers

#include "Dialogue.h"
#include "NarrativeComponent.h"
#include "NarrativeCondition.h"
// added-start
#include "NarrativeDialogueSettings.h"
#include "NarrativePartyComponent.h"
// added-end

...

// removed-start
#include "NarrativeDialogueSettings.h"
// removed-end
#include "LevelSequencePlayer.h"
#include "LevelSequenceActor.h"
#include "Sound/SoundBase.h"
// removed-start
#include "NarrativePartyComponent.h"
// removed-end

...

// removed-start
TArray<class UDialogueNode_NPC*> UDialogueNode::GetNPCReplies(APlayerController* OwningController, APawn* OwningPawn, class UNarrativeComponent* NarrativeComponent)
{
TArray<class UDialogueNode_NPC*> ValidReplies;

for (auto& NPCReply : NPCReplies)
// removed-end
// added-start
class UDialogueNode_NPC* UDialogueNode::GetFirstValidNPCReply(APlayerController* OwningController, APawn* OwningPawn, class UNarrativeComponent* NarrativeComponent)
{
TArray<class UDialogueNode_NPC*> RepliesToCheck = NPCReplies;

if (const UNarrativeDialogueSettings* DialogueSettings = GetDefault<UNarrativeDialogueSettings>())
{
    //Sort the replies by their Y position in the graph
    RepliesToCheck.Sort([DialogueSettings](const UDialogueNode_NPC& NodeA, const UDialogueNode_NPC& NodeB) {
        return DialogueSettings->bEnableVerticalWiring ? NodeA.NodePos.X < NodeB.NodePos.X : NodeA.NodePos.Y < NodeB.NodePos.Y;
        });
}

for (auto& NPCReply : RepliesToCheck)
// added-end
{
    if (NPCReply->AreConditionsMet(OwningPawn, OwningController, NarrativeComponent))
    {
// removed-start
        ValidReplies.Add(NPCReply);
    }
}

return ValidReplies;
// removed-end
// added-start
        return NPCReply;
    }
}

return nullptr;
// added-end

...

// removed-start
    Prefix = NPCNode->SpeakerID.ToString();
// removed-end
// added-start
    Prefix = NPCNode->GetSpeakerID().ToString();
// added-end
}
else
{

...

// removed-start
    return HintText;
// removed-end
// added-start
    // Replace string variables on the hint text
    FText newHintText = HintText;
    InDialogue->ReplaceStringVariables(this, Line, newHintText);
    return newHintText;
// added-end
}

FText TextToUse = FText::GetEmpty();
// added-start
// Replace string variables on the hint text
InDialogue->ReplaceStringVariables(this, Line, TextToUse);

// added-end

...



```

### QuestSM.cpp

```cpp title="/Narrative/Private/QuestSM.cpp" showLineNumbers

...

for (auto& MyTask : QuestTasks)
{
// removed-start
    if (!MyTask->IsComplete())
// removed-end
// added-start
    if (MyTask && !MyTask->IsComplete())
// added-end

...

// removed-start
#undef LOCTEXT_NAMESPACE// removed-end
// added-start
#undef LOCTEXT_NAMESPACE
// added-end


```

### NarrativePartyComponent.cpp

```cpp title="/Narrative/Private/NarrativePartyComponent.cpp" showLineNumbers

...

DOREPLIFETIME(UNarrativePartyComponent, PartyMemberStates);
}

// removed-start
bool UNarrativePartyComponent::BeginDialogue(TSubclassOf<class UDialogue> DialogueClass, FName StartFromID /*= NAME_None*/)
// removed-end
// added-start
bool UNarrativePartyComponent::BeginDialogue(TSubclassOf<class UDialogue> DialogueClass, const FDialoguePlayParams PlayParams)
// added-end

...

// removed-start
    if (SetCurrentDialogue(DialogueClass, StartFromID))
// removed-end
// added-start
    if (SetCurrentDialogue(DialogueClass, PlayParams))
// added-end
    {
        OnDialogueBegan.Broadcast(CurrentDialogue);


...

// removed-start
}
// removed-end
// added-start
}// added-end


```

### Dialogue.cpp

```cpp title="/Narrative/Private/Dialogue.cpp" showLineNumbers

// Copyright Narrative Tools 2022. 

#include "Dialogue.h"
// removed-start
#include "Net/UnrealNetwork.h"
#include "UObject/ConstructorHelpers.h"
// removed-end
// added-start
#include "NarrativeDialogueSettings.h"
// added-end
// added-start
#include "NarrativeDialogueSequence.h"
#include "NarrativePartyComponent.h"
#include "UObject/ConstructorHelpers.h"
// added-end

...

// removed-start
#include "NarrativeDialogueSettings.h"
#include "Camera/CameraActor.h"
// removed-end
#include "Camera/CameraShakeBase.h"
// removed-start
#include "CineCameraActor.h"
#include "CineCameraComponent.h"
#include "NarrativeDefaultCinecam.h"
// removed-end
#include "Sound/SoundBase.h"
// removed-start
#include <Camera/CameraShakeBase.h>
// removed-end
#include <EngineUtils.h>
// removed-start
#include <Kismet/KismetMathLibrary.h>
#include <DefaultLevelSequenceInstanceData.h>
#include "NarrativeDialogueSequence.h"
#include "NarrativePartyComponent.h"
// removed-end
// added-start
Priority = 0;
PlayerAutoAdjustTransform = FTransform(FRotator(0.f, 180.f, 0.f), FVector(200.f, 0.f, 0.f));
// added-end

...

// removed-start
bool UDialogue::Initialize(class UNarrativeComponent* InitializingComp, FName StartFromID)
// removed-end
// added-start
bool UDialogue::Initialize(class UNarrativeComponent* InitializingComp, const FDialoguePlayParams InPlayParams)
// added-end
{
if (!HasAnyFlags(RF_ClassDefaultObject))
{

...

// removed-start
        UDialogueNode_NPC* StartDialogue = StartFromID.IsNone() ? RootDialogue : GetNPCReplyByID(StartFromID);

        if (!StartDialogue && !StartFromID.IsNone())
        {
            UE_LOG(LogNarrative, Warning, TEXT("UDialogue::Initialize could not find Start node with StartFromID: %s. Falling back to root node."), *StartFromID.ToString());
            StartDialogue = RootDialogue;
// removed-end
// added-start

        UDialogueNode_NPC* StartDialogue = InPlayParams.StartFromID.IsNone() ? RootDialogue : GetNPCReplyByID(InPlayParams.StartFromID);

        if (!StartDialogue && !InPlayParams.StartFromID.IsNone())
        {
            //UE_LOG(LogNarrative, Warning, TEXT("UDialogue::Initialize could not find Start node with StartFromID: %s. Falling back to root node."), *StartFromID.ToString());
            return false;
            //StartDialogue = RootDialogue;
// added-end
        }

        //Initialize all the data required to begin the dialogue 
// added-start
            PlayParams = InPlayParams;
            
// added-end

...

// removed-start
if (DialogueSequencePlayer)
{
    DialogueSequencePlayer->Destroy();
}

// removed-end
OwningComp = nullptr; 
DefaultDialogueShot = nullptr;


...

// removed-start
if (PlayerSpeakerInfo.SpeakerID != NAME_PlayerSpeakerID)
// removed-end
// added-start
for (auto& Speaker : Speakers)
// added-end
{
    PlayerSpeakerInfo.SpeakerID = NAME_PlayerSpeakerID;
}

...

// removed-start
for (int32 i = 0; i < PartySpeakerInfo.Num(); ++i)
{
    if (PartySpeakerInfo.IsValidIndex(i))
    {
        PartySpeakerInfo[i].SpeakerID = FName(FString::Printf(TEXT("PartyMember%d"), i));
    }
}

//If a designer clears the speakers always ensure at least one is added 
if (Speakers.Num() == 0)
{
    FSpeakerInfo DefaultSpeaker;
    DefaultSpeaker.SpeakerID = GetFName();
    Speakers.Add(DefaultSpeaker);
}

//If any NPC replies don't have a valid speaker set to the first speaker
for (auto& Node : NPCReplies)
{
    if (Node)
    {
        bool bSpeakerNotFound = true;

        for (auto& Speaker : Speakers)
        {
            if (Speaker.SpeakerID == Node->SpeakerID)
            {
                bSpeakerNotFound = false;
            }
        }

        if (bSpeakerNotFound)
        {
            Node->SpeakerID = Speakers[0].SpeakerID;
        }
    }
}
// removed-end
// added-start
//If any NPC replies don't have a valid speaker set to the first speaker TODO this is broken - figure out why 
//for (auto& Node : NPCReplies)
//{
//	if (Node)
//	{
//		bool bSpeakerNotFound = true;

//		for (auto& Speaker : Speakers)
//		{
//			if (Speaker.SpeakerID == Node->SpeakerID)
//			{
//				bSpeakerNotFound = false;
//			}
//		}

//		if (bSpeakerNotFound)
//		{
//			Node->SpeakerID = Speakers[0].SpeakerID;
//		}
//	}
//}
// added-end
}

void UDialogue::PreEditChange(FEditPropertyChain& PropertyAboutToChange)

...

// removed-start
    if (Speaker.SpeakerID == SpeakerID)
// removed-end
// added-start
    if (Speaker.GetSpeakerID() == SpeakerID)
// added-end
    {
        return Speaker;
    }

...

// removed-start
    if (DialogueSequencePlayer && DialogueSequencePlayer->SequencePlayer)
    {
        DialogueSequencePlayer->SequencePlayer->OnFinished.RemoveAll(this);
// removed-end
// added-start
    if (DialogueSequencePlayer)
    {
        if (ULevelSequencePlayer* SP = DialogueSequencePlayer->GetSequencePlayer())
        {
            SP->OnFinished.RemoveAll(this);
        }
// added-end
    }

    if (CurrentNode->IsA<UDialogueNode_NPC>())

...

// removed-start
        if (DialogueSequencePlayer && DialogueSequencePlayer->SequencePlayer)
        {
            DialogueSequencePlayer->SequencePlayer->OnFinished.RemoveAll(this);
// removed-end
// added-start
        if (DialogueSequencePlayer)
        {
            if (ULevelSequencePlayer* SP = DialogueSequencePlayer->GetSequencePlayer())
            {
                SP->OnFinished.RemoveAll(this);
            }
// added-end
        }

        if (GetWorld())
// added-start
InitSpeakerAvatars();

if (bAdjustPlayerTransform)
{
    AdjustPlayerTransform();
}

// added-end
// added-start
            {
// added-end

...

// removed-start
        }
    }
}

InitSpeakerAvatars();
// removed-end
// added-start
            }
        }
    }
}
// added-end

if (OwningController && OwningController->IsLocalPlayerController())
{

...

// removed-start
        //Track spawned avatars
        SpeakerAvatars.Add(Speaker.SpeakerID, SpeakerActor);
        Speaker.SpeakerAvatarTransform = SpeakerActor->GetActorTransform(); 
// removed-end
// added-start
        if (IsValid(SpeakerActor))
        {			
            //Track spawned avatars
            SpeakerAvatars.Add(Speaker.GetSpeakerID(), SpeakerActor);
            Speaker.SpeakerAvatarTransform = SpeakerActor->GetActorTransform();
        }
// added-end
    }
}


...

// removed-start
if (UNarrativePartyComponent* OwningParty = Cast<UNarrativePartyComponent>(OwningComp))
{
    TArray<APlayerState*> PartyMembers = OwningParty->GetPartyMemberStates();

    for (int32 i = 0; i < PartyMembers.Num(); ++i)
    {
        if (!PartySpeakerInfo.IsValidIndex(i))
        {
            FPlayerSpeakerInfo NewSpeaker;
            NewSpeaker.SpeakerID = FName(FString::Printf(TEXT("PartyMember%d"), i));
            PartySpeakerInfo.Add(NewSpeaker);
        }

        if (PartySpeakerInfo.IsValidIndex(i) && PartyMembers.IsValidIndex(i))
        {
            FPlayerSpeakerInfo& MemberSpeakerInfo = PartySpeakerInfo[i];

            if (APlayerState* PartyMember = PartyMembers[i])
            {
                AActor* SpeakerActor = LinkSpeakerAvatar(MemberSpeakerInfo);

                //Fallback to speaker actors pawn if can't link
                if (!SpeakerActor)
                {
                    SpeakerActor = PartyMember->GetPawn();
                }

                if (SpeakerActor)
                {
                    /*There has to be a nicer way to construct an FName from a int but I sure couldnt find it!
                    Instead of caching speaker avatars via ID, for parties we use the players playerID which is unique.
                    This gives us a nice convenient way to map someones PlayerState to their Players avatar */
                    const FName Name_PID = FName(FString::Printf(TEXT("%d"), PartyMember->GetPlayerId()));

                    MemberSpeakerInfo.SpeakerID = Name_PID;

                    SpeakerAvatars.Add(MemberSpeakerInfo.SpeakerID, SpeakerActor);

                    //Hide the party members pawn; we've spawned them an avatar 
                    if (APawn* PawnOwner = PartyMember->GetPawn())
                    {
                        //Store our local pawn in the playerspeakerinfo and the existing systems will just treat it like our solo player 
                        if (PawnOwner->IsLocallyControlled())
                        {
                            SpeakerAvatars.Add(PlayerSpeakerInfo.SpeakerID, SpeakerActor);
                        }

                        //If we're using a speaker avatar for this player, we want to hide their pawn
                        if (SpeakerActor != PartyMember->GetPawn())
                        {
                            PawnOwner->SetActorHiddenInGame(true);
                        }
                    }
                }
            }
        }
    }
}
else //spawn solo players avatar in 
{
    //Spawn the players speaker avatar in, or just use the players pawn as their avatar if one isn't set
    if (AActor* SpeakerActor = LinkSpeakerAvatar(PlayerSpeakerInfo))
    {
        SpeakerAvatars.Add(PlayerSpeakerInfo.SpeakerID, SpeakerActor);
        PlayerSpeakerInfo.SpeakerAvatarTransform = SpeakerActor->GetActorTransform();

        //By default if the player has a speaker avatar in the world we'll hide their pawn
        if (OwningPawn && SpeakerActor != OwningPawn)
        {
            OwningPawn->SetActorHiddenInGame(true);
        }
    }
    else if (!OwningPawn)
    {
        UE_LOG(LogNarrative, Warning, TEXT("Narrative wasn't able to find the avatar for the player, as a SpeakerAvatarClass wasn't set, no actors with tag 'Player' were found, and OwningPawn was invalid."));
    }
}
// removed-end
// added-start
//if (UNarrativePartyComponent* OwningParty = Cast<UNarrativePartyComponent>(OwningComp))
//{
//	TArray<APlayerState*> PartyMembers = OwningParty->GetPartyMemberStates();

//	for (int32 i = 0; i < PartyMembers.Num(); ++i)
//	{
//		if (!PartySpeakerInfo.IsValidIndex(i))
//		{
//			FPlayerSpeakerInfo NewSpeaker;
//			//NewSpeaker.SpeakerID = FName(FString::Printf(TEXT("PartyMember%d"), i));
//			PartySpeakerInfo.Add(NewSpeaker);
//		}

//		if (PartySpeakerInfo.IsValidIndex(i) && PartyMembers.IsValidIndex(i))
//		{
//			FPlayerSpeakerInfo& MemberSpeakerInfo = PartySpeakerInfo[i];

//			if (APlayerState* PartyMember = PartyMembers[i])
//			{
//				AActor* SpeakerActor = LinkSpeakerAvatar(MemberSpeakerInfo);

//				//Fallback to speaker actors pawn if can't link
//				if (!SpeakerActor)
//				{
//					SpeakerActor = PartyMember->GetPawn();
//				}

//				if (SpeakerActor)
//				{
//					/*There has to be a nicer way to construct an FName from a int but I sure couldnt find it!
//					Instead of caching speaker avatars via ID, for parties we use the players playerID which is unique.
//					This gives us a nice convenient way to map someones PlayerState to their Players avatar */
//					const FName Name_PID = FName(FString::Printf(TEXT("%d"), PartyMember->GetPlayerId()));

//					MemberSpeakerInfo.SpeakerID = Name_PID;

//					SpeakerAvatars.Add(MemberSpeakerInfo.SpeakerID, SpeakerActor);

//					//Hide the party members pawn; we've spawned them an avatar 
//					if (APawn* PawnOwner = PartyMember->GetPawn())
//					{
//						//Store our local pawn in the playerspeakerinfo and the existing systems will just treat it like our solo player 
//						if (PawnOwner->IsLocallyControlled())
//						{
//							SpeakerAvatars.Add(PlayerSpeakerInfo.SpeakerID, SpeakerActor);
//						}

//						//If we're using a speaker avatar for this player, we want to hide their pawn
//						if (SpeakerActor != PartyMember->GetPawn())
//						{
//							PawnOwner->SetActorHiddenInGame(true);
//						}
//					}
//				}
//			}
//		}
//	}
//}
//else //spawn solo players avatar in 
//{
// 
// 
// 

//Spawn the players speaker avatar in, or just use the players pawn as their avatar if one isn't set
if (AActor* SpeakerActor = LinkSpeakerAvatar(PlayerSpeakerInfo))
{
    SpeakerAvatars.Add(PlayerSpeakerInfo.GetSpeakerID(), SpeakerActor);
    PlayerSpeakerInfo.SpeakerAvatarTransform = SpeakerActor->GetActorTransform();

    //By default if the player has a speaker avatar in the world we'll hide their pawn
    if (OwningPawn && SpeakerActor != OwningPawn)
    {
        OwningPawn->SetActorHiddenInGame(true);
    }
}
else if (!OwningPawn)
{
    UE_LOG(LogNarrative, Warning, TEXT("Narrative wasn't able to find the avatar for the player, as a SpeakerAvatarClass wasn't set, no actors with tag 'Player' were found, and OwningPawn was invalid."));
}

//}
// added-end
}



...

// removed-start
    if (AActor* SpeakerAvatar = GetAvatar(Speaker.SpeakerID))
// removed-end
// added-start
    if (AActor* SpeakerAvatar = GetAvatar(Speaker.GetSpeakerID()))
// added-end
    {
        DestroySpeakerAvatar(Speaker, SpeakerAvatar);
    }

...

// removed-start
    if (AActor* SpeakerAvatar = GetAvatar(PartySpeaker.SpeakerID))
// removed-end
// added-start
    if (AActor* SpeakerAvatar = GetAvatar(PartySpeaker.GetSpeakerID()))
// added-end
    {
        DestroySpeakerAvatar(PartySpeaker, SpeakerAvatar);
    }

...

// removed-start
if (DialogueSequencePlayer && DialogueSequencePlayer->SequencePlayer)
{
    DialogueSequencePlayer->SequencePlayer->Stop();
// removed-end
// added-start
if (DialogueSequencePlayer)
{
    if (ULevelSequencePlayer* SP = DialogueSequencePlayer->GetSequencePlayer())
    {
        SP->Stop();
    }

// added-end
    DialogueSequencePlayer->Destroy();
}
// added-start

// added-end
if (OwningPawn)
// added-start
        bool bWantsAutoSelect = bFreeMovement;

// added-end

...

// removed-start
            if ((bFreeMovement || DialogueSettings->bAutoSelectSingleResponse) && AvailableResponses.Num() == 1)
            {
                OwningComp->TrySelectDialogueOption(AvailableResponses.Last());
                return;
            }
        }
// removed-end
// added-start
            if (DialogueSettings->bAutoSelectSingleResponse && AvailableResponses.Num() == 1)
            {
                bWantsAutoSelect = true; 
            }
        }

// added-end

        //If a response is autoselect, select it and early out 
        for (auto& AvailableResponse : AvailableResponses)

...

// removed-start
            if (AvailableResponse && AvailableResponse->IsAutoSelect())
// removed-end
// added-start
            if (AvailableResponse && (AvailableResponse->IsAutoSelect() || bWantsAutoSelect))
// added-end
            {
                OwningComp->TrySelectDialogueOption(AvailableResponse);
                return;

...

// removed-start
    if (SpeakerAvatars.Contains(CurrentSpeaker.SpeakerID))
    {
        ListeningActor = SpeakerAvatars[CurrentSpeaker.SpeakerID];
// removed-end
// added-start
    if (SpeakerAvatars.Contains(CurrentSpeaker.GetSpeakerID()))
    {
        ListeningActor = SpeakerAvatars[CurrentSpeaker.GetSpeakerID()];
// added-end
    }

    /*

...

// removed-start
    CurrentSpeaker = GetSpeaker(NPCReply->SpeakerID);
// removed-end
// added-start
    CurrentSpeaker = GetSpeaker(NPCReply->GetSpeakerID());
// added-end

    ProcessNodeEvents(NPCReply, true);


...

// removed-start
if (SpeakerAvatars.Contains(PlayerSpeakerInfo.SpeakerID))
{
    return SpeakerAvatars[PlayerSpeakerInfo.SpeakerID];
// removed-end
// added-start
if (SpeakerAvatars.Contains(PlayerSpeakerInfo.GetSpeakerID()))
{
    return SpeakerAvatars[PlayerSpeakerInfo.GetSpeakerID()];
// added-end
}
else
{

...

// removed-start
            UDialogueNode_NPC* NextReply = nullptr;

            for (auto& NextNPCReply : PlayerNode->NPCReplies)
            {
                if (NextNPCReply && NextNPCReply->AreConditionsMet(OwningPawn, OwningController, OwningComp))
                {
                    NextReply = NextNPCReply;
                    break;
                }
            }
// removed-end
// added-start
            UDialogueNode_NPC* NextReply = PlayerNode->GetFirstValidNPCReply(OwningController, OwningPawn, OwningComp);
// added-end

            //If we can generate more dialogue from the reply that was selected, do so, otherwise exit dialogue 
            if (GenerateDialogueChunk(NextReply))

...

// removed-start
AActor* SpawnedActor = Info.SpeakerID == PlayerSpeakerInfo.SpeakerID ? OwningPawn : nullptr;

if (!Info.SpeakerID.IsNone())
{
    if (!SpeakerAvatars.Contains(Info.SpeakerID) && IsValid(Info.SpeakerAvatarClass))
// removed-end
// added-start
AActor* SpawnedActor = Info.GetSpeakerID() == PlayerSpeakerInfo.GetSpeakerID() ? OwningPawn : nullptr;

if (!Info.GetSpeakerID().IsNone())
{
    if (!SpeakerAvatars.Contains(Info.GetSpeakerID()) && IsValid(Info.SpeakerAvatarClass))
// added-end
    {
        FActorSpawnParameters SpawnParams;
        SpawnParams.bNoFail = true;

...

// removed-start
            if (Actor && Actor->ActorHasTag(Info.SpeakerID))
// removed-end
// added-start
            if (Actor && Actor->ActorHasTag(Info.GetSpeakerID()))
// added-end
            {
                FoundActors.Add(Actor);
            }

...

// removed-start
        DialogueAudio = UGameplayStatics::SpawnSoundAtLocation(OwningComp, Line.DialogueSound, Speaker->GetActorLocation(), Speaker->GetActorForwardVector().Rotation());
// removed-end
// added-start
        //DialogueAudio = UGameplayStatics::SpawnSoundAtLocation(OwningComp, Line.DialogueSound, Speaker->GetActorLocation(), Speaker->GetActorForwardVector().Rotation(), 1.f, 1.f, 0.f, DialogueSoundAttenuation);
        DialogueAudio = UGameplayStatics::SpawnSoundAttached(Line.DialogueSound, Speaker->GetRootComponent(), NAME_None, FVector::ZeroVector, EAttachLocation::SnapToTarget, false, 1.f, 1.f, 0.f, DialogueSoundAttenuation);
// added-end
    }
    else //Else just play 2D audio 
    {
// added-start
        else // If there is no shot to play, we should end any previously playing one 
        {
            StopDialogueSequence();
        }
// added-end

...

// removed-start
if (SpeakerAvatars.Contains(SpeakerInfo.SpeakerID))
{
    SpeakingActor = *SpeakerAvatars.Find(SpeakerInfo.SpeakerID);
// removed-end
// added-start
if (SpeakerAvatars.Contains(SpeakerInfo.GetSpeakerID()))
{
    SpeakingActor = *SpeakerAvatars.Find(SpeakerInfo.GetSpeakerID());
// added-end
}

PlayDialogueNode(NPCReply, LineToPlay, SpeakerInfo, SpeakingActor, ListeningActor);

...

// removed-start
    ListeningActor = GetAvatar(CurrentSpeaker.SpeakerID);
// removed-end
// added-start
    ListeningActor = GetAvatar(CurrentSpeaker.GetSpeakerID());
// added-end
}

PlayDialogueNode(PlayerReply, Line, PlayerSpeakerInfo, SpeakingActor, ListeningActor);
// added-start
    // if the lines text is empty, return a duration of 0
    if (Line.Text.IsEmptyOrWhitespace())
    {
        return 0.f;
    }

// added-end
// added-start
}

void UDialogue::AdjustPlayerTransform_Implementation()
{
//Only adjust for 1 on 1 dialogue 
if (Speakers.Num() == 1 && Speakers.IsValidIndex(0))
{
    if (OwningPawn && OwningController)
    {
        const FTransform PlayerDesiredTransform = PlayerAutoAdjustTransform * Speakers[0].SpeakerAvatarTransform;

        OwningPawn->TeleportTo(PlayerDesiredTransform.GetLocation(), PlayerDesiredTransform.GetRotation().Rotator());
        OwningController->SetControlRotation(PlayerDesiredTransform.GetRotation().Rotator());
    }
}
// added-end

...

// removed-start
    if (DialogueSequencePlayer && DialogueSequencePlayer->SequencePlayer)
    {
        DialogueSequencePlayer->SequencePlayer->OnFinished.RemoveAll(this);

        Sequence->BeginPlaySequence(DialogueSequencePlayer, this, Speaker, Listener);

        if (CurrentDialogueSequence)
        {
            CurrentDialogueSequence->EndSequence();
        }

        CurrentDialogueSequence = Sequence;

        if (CurrentLine.Duration == ELineDuration::LD_WhenSequenceEnds)
        {
            DialogueSequencePlayer->SequencePlayer->OnFinished.AddDynamic(this, &UDialogue::EndCurrentLine);
// removed-end
// added-start
    if (DialogueSequencePlayer)
    {
        if (ULevelSequencePlayer* SP = DialogueSequencePlayer->GetSequencePlayer())
        {
            SP->OnFinished.RemoveAll(this);

            if (CurrentDialogueSequence)
            {
                CurrentDialogueSequence->EndSequence();
            }

            Sequence->BeginPlaySequence(DialogueSequencePlayer, this, Speaker, Listener);

            CurrentDialogueSequence = Sequence;

            if (CurrentLine.Duration == ELineDuration::LD_WhenSequenceEnds)
            {
                SP->OnFinished.AddDynamic(this, &UDialogue::EndCurrentLine);
            }
// added-end
        }
    }


...

// removed-start
    if (DialogueSequencePlayer && DialogueSequencePlayer->SequencePlayer)
    {
        DialogueSequencePlayer->SequencePlayer->Stop();

        /*
        If your pawn has a dialogue avatar, narrative hides your pawn as you wouldn't want it to show up in a dialogue.
        However a UE5 bug - Stop() will re-show player pawn even if it was already hidden - we want to keep it hidden*/
        if (OwningPawn && GetPlayerAvatar() != OwningPawn)
        {
            OwningPawn->SetActorHiddenInGame(true);
        }
    }
}
}
// removed-end
// added-start
    if (DialogueSequencePlayer)
    {
        if (ULevelSequencePlayer* SP = DialogueSequencePlayer->GetSequencePlayer())
        {
            if (CurrentDialogueSequence)
            {
                CurrentDialogueSequence->EndSequence();
            }

            SP->Stop();

            /*
            If your pawn has a dialogue avatar, narrative hides your pawn as you wouldn't want it to show up in a dialogue.
            However a UE5 bug - Stop() will re-show player pawn even if it was already hidden - we want to keep it hidden*/
            if (OwningPawn && GetPlayerAvatar() != OwningPawn)
            {
                OwningPawn->SetActorHiddenInGame(true);
            }
        }
    }
}
}
// added-end


```

### QuestBlueprintGeneratedClass.cpp

```cpp title="/Narrative/Private/QuestBlueprintGeneratedClass.cpp" showLineNumbers

#include "QuestBlueprintGeneratedClass.h"
#include "Quest.h"
// removed-start
#include <QuestSM.h>
// removed-end
// added-start
#include "QuestSM.h"
// added-end

...



```

### QuestTask.cpp

```cpp title="/Narrative/Private/QuestTask.cpp" showLineNumbers

#include "Quest.h"
#include "NarrativeComponent.h"
#include <TimerManager.h>
// removed-start

// removed-end

...

// removed-start
    /*If we're loading OwningComp may be invalid as BeginTask hasnt cached it yet.
    //If we're just loading a save, set the progress but don't bother updating any quest stuff except
// removed-end
// added-start
    /*
    //If we're loading a save, set the progress but don't bother updating any quest stuff except
// added-end
    //for on the current state (this is why we also check bIsActive)*/
// removed-start
    if (OwningComp->bIsLoading && !bIsActive)
// removed-end
// added-start
    if (OwningComp->bIsLoading)
// added-end
    {
        CurrentProgress = FMath::Clamp(NewProgress, 0, RequiredQuantity);
// added-start
if (!DescriptionOverride.IsEmptyOrWhitespace())
{
    return DescriptionOverride;
}
  
// added-end

...

// removed-start
#undef LOCTEXT_NAMESPACE// removed-end
// added-start
#undef LOCTEXT_NAMESPACE
// added-end


```

### NarrativeNodeBase.cpp

```cpp title="/Narrative/Private/NarrativeNodeBase.cpp" showLineNumbers

...

    return;
}

// added-start
const bool bIsLoading = NarrativeComponent->bIsLoading;

// added-end

...

// removed-start
    if (Event && (Event->EventRuntime == Runtime || Event->EventRuntime == EEventRuntime::Both))
// removed-end
// added-start
    if (Event)
// added-end
    {
// removed-start
        TArray<UNarrativeComponent*> CompsToExecute;
// removed-end
// added-start
        const bool bShouldFire = (!bIsLoading || Event->bRefireOnLoad ) && (Event->EventRuntime == Runtime || Event->EventRuntime == EEventRuntime::Both);
// added-end

// removed-start
        if (UNarrativePartyComponent* PartyComp = Cast<UNarrativePartyComponent>(NarrativeComponent))
// removed-end
// added-start
        if (bShouldFire)
// added-end
        {
// removed-start
            if (Event->PartyEventPolicy == EPartyEventPolicy::AllPartyMembers)
// removed-end
// added-start
            TArray<UNarrativeComponent*> CompsToExecute;

            if (UNarrativePartyComponent* PartyComp = Cast<UNarrativePartyComponent>(NarrativeComponent))
// added-end

...

// removed-start
                CompsToExecute.Append(PartyComp->GetPartyMembers());
// removed-end
// added-start
                if (Event->PartyEventPolicy == EPartyEventPolicy::AllPartyMembers)
                {
                    CompsToExecute.Append(PartyComp->GetPartyMembers());
                }
                else if (Event->PartyEventPolicy == EPartyEventPolicy::PartyLeader)
                {
                    CompsToExecute.Add(PartyComp->GetPartyLeader());
                }
                else if (Event->PartyEventPolicy == EPartyEventPolicy::Party)
                {
                    CompsToExecute.Add(PartyComp);
                }
// added-end
            }
// removed-start
            else if (Event->PartyEventPolicy == EPartyEventPolicy::PartyLeader)
// removed-end
// added-start
            else
// added-end
            {
// removed-start
                CompsToExecute.Add(PartyComp->GetPartyLeader());
// removed-end
// added-start
                CompsToExecute.Add(NarrativeComponent);
// added-end
            }
// removed-start
            else if (Event->PartyEventPolicy == EPartyEventPolicy::Party)
// removed-end
// added-start

            for (auto& Comp : CompsToExecute)
// added-end

...

// removed-start
                CompsToExecute.Add(PartyComp);
// removed-end
// added-start
                Event->ExecuteEvent(Comp->GetOwningPawn(), Comp->GetOwningController(), Comp);
// added-end
            }
        }
// removed-start
        else
        {
            CompsToExecute.Add(NarrativeComponent);
        }

        for (auto& Comp : CompsToExecute)
        {
            Event->ExecuteEvent(Comp->GetOwningPawn(), Comp->GetOwningController(), Comp);
        }

// removed-end
    }

...



```

### NarrativeDialogueSequence.cpp

```cpp title="/Narrative/Private/NarrativeDialogueSequence.cpp" showLineNumbers

...

#include "NarrativeDialogueSequence.h"
// added-start
#include "Dialogue.h"
// added-end

...

// removed-start
#include "Dialogue.h"
#include <Engine/TargetPoint.h>
// removed-end

static const FName NAME_AnchorTag("Anchor");
static const FName NAME_CinecamTag("Cinecam");

...

// removed-start
if ((LookAtTrackingSettings.bUpdateTrackingEveryFrame || FocusTrackingSettings.bUpdateTrackingEveryFrame) && Dialogue.IsValid() && SequenceActor.IsValid() && SequenceActor->SequencePlayer)
// removed-end
// added-start
if ((LookAtTrackingSettings.bUpdateTrackingEveryFrame || FocusTrackingSettings.bUpdateTrackingEveryFrame) && Dialogue.IsValid() && SequenceActor.IsValid())
// added-end
{
    if (Cinecam.IsValid())
    {

...

// removed-start
    InSequenceActor->SequencePlayer->Stop();
// removed-end
// added-start
    if (InSequenceActor)
    {
        if (ULevelSequencePlayer* SP = InSequenceActor->GetSequencePlayer())
        {
            //Commented this out as in packaged builds starting the new sequence would cause another stop to be called which caused a crash in UE's sequence player 
            //SP->Stop();
        }
    }
// added-end

    AnchorActor = NewAnchorActor;
    LookAtActor = NewLookAtActor;

...

// removed-start
void UNarrativeDialogueSequence::EndSequence()
{	
//No longer required, moved everything over to weak ptrs 
//Speaker = nullptr;
//Listener = nullptr;
//AnchorActor = nullptr;
//LookAtActor = nullptr;
//Dialogue = nullptr;
//SequenceActor = nullptr;
//Cinecam = nullptr;
// removed-end
// added-start
void UNarrativeDialogueSequence::EndSequence_Implementation()
{

// added-end
}

void UNarrativeDialogueSequence::PlaySequence_Implementation()

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
// removed-end
// added-start
        if (ULevelSequencePlayer* SP = SequenceActor->GetSequencePlayer())
// added-end
        {
            SequenceActor->bOverrideInstanceData = AnchorOriginRule != EAnchorOriginRule::AOR_Disabled;


...

// removed-start
            SequenceActor->SequencePlayer->Play();
// removed-end
// added-start

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

### NarrativeFunctionLibrary.cpp

```cpp title="/Narrative/Private/NarrativeFunctionLibrary.cpp" showLineNumbers

...

#include "NarrativeFunctionLibrary.h"
// removed-start
#include "Kismet/GameplayStatics.h"
// removed-end
// added-start
#include "Kismet/GameplayStatics.h"
// added-end

...



```

### NarrativeComponent.cpp

```cpp title="/Narrative/Private/NarrativeComponent.cpp" showLineNumbers

...

#include "Quest.h"
#include "NarrativeDataTask.h"
#include "QuestSM.h"
// added-start
#include "DialogueSM.h"
#include "Dialogue.h"
#include "NarrativeCondition.h"
#include "NarrativeEvent.h"
#include "NarrativeDialogueSettings.h"
#include "QuestTask.h"
// added-end

...

// removed-start
#include "DialogueSM.h"
#include "Dialogue.h"
#include "NarrativeCondition.h"
#include "NarrativeEvent.h"
#include "NarrativeDialogueSettings.h"
#include "QuestTask.h"
// removed-end

DEFINE_LOG_CATEGORY(LogNarrative);
// removed-start

static TAutoConsoleVariable<bool> CVarShowQuestUpdates(
TEXT("narrative.ShowQuestUpdates"),
false,
TEXT("Show updates to any of our quests on screen.\n")
);
// removed-end


...

// removed-start
bool UNarrativeComponent::HasDialogueAvailable(TSubclassOf<class UDialogue> DialogueClass, FName StartFromID /*= NAME_None*/)
// removed-end
// added-start
bool UNarrativeComponent::HasDialogueAvailable(TSubclassOf<class UDialogue> DialogueClass, const FDialoguePlayParams PlayParams)
// added-end
{
if (IsValid(DialogueClass))
{
// removed-start
    return MakeDialogueInstance(DialogueClass, StartFromID) != nullptr;
}

return false;
}

bool UNarrativeComponent::SetCurrentDialogue(TSubclassOf<class UDialogue> Dialogue, FName StartFromID /*= NAME_None*/)
// removed-end
// added-start
    return MakeDialogueInstance(DialogueClass, PlayParams) != nullptr;
}

return false;
}

bool UNarrativeComponent::SetCurrentDialogue(TSubclassOf<class UDialogue> Dialogue, const FDialoguePlayParams PlayParams)
// added-end
// added-start
        //Check that our CurrentDialogue's priority isn't lower than the new one
        if (UDialogue* NewDialogue = Dialogue->GetDefaultObject<UDialogue>())
        {
            const int32 NewPriority = PlayParams.Priority != -1 ? PlayParams.Priority : NewDialogue->Priority;

            if (NewPriority > CurrentDialogue->Priority)
            {
                return false; 
            }
        }

// added-end

...

// removed-start
    CurrentDialogue = MakeDialogueInstance(Dialogue, StartFromID);
// removed-end
// added-start
    CurrentDialogue = MakeDialogueInstance(Dialogue, PlayParams);
// added-end

    return CurrentDialogue != nullptr;
}

...

// removed-start
bool UNarrativeComponent::BeginDialogue(TSubclassOf<class UDialogue> DialogueClass, FName StartFromID)
// removed-end
// added-start
bool UNarrativeComponent::BeginDialogue(TSubclassOf<class UDialogue> DialogueClass, const FDialoguePlayParams PlayParams)
// added-end
{
if (HasAuthority())
{

...

// removed-start
    if (SetCurrentDialogue(DialogueClass, StartFromID))
// removed-end
// added-start
    if (SetCurrentDialogue(DialogueClass, PlayParams))
// added-end
    {
        OnDialogueBegan.Broadcast(CurrentDialogue);

// added-start
        {
// added-end
// added-start
        }
// added-end

...

// removed-start
        check(bSelected);
// removed-end
// added-start
        if (!bSelected)
        {
            UE_LOG(LogTemp, Warning, TEXT("SelectDialogueOption returned false for option %s"), *GetNameSafe(Option));
        }
        //check(bSelected);
// added-end
    }
}
}

...

// removed-start
class UDialogue* UNarrativeComponent::MakeDialogueInstance(TSubclassOf<class UDialogue> DialogueClass, FName StartFromID /*= NAME_None*/)
// removed-end
// added-start
class UDialogue* UNarrativeComponent::MakeDialogueInstance(TSubclassOf<class UDialogue> DialogueClass, const FDialoguePlayParams PlayParams)
// added-end
{
if (IsValid(DialogueClass))
{

...

// removed-start
        if (NewDialogue->Initialize(this, StartFromID))
// removed-end
// added-start
        if (NewDialogue->Initialize(this, PlayParams))
// added-end
        {
            return NewDialogue;
        }

...

// removed-start
//void UNarrativeComponent::OnRep_CurrentDialogue()
//{
//	FString RoleString = HasAuthority() ? "Server" : "Client";
//
//	UE_LOG(LogTemp, Warning, TEXT("dialogue %s started on %s"), *GetNameSafe(CurrentDialogue), *RoleString);
//}
//
//void UNarrativeComponent::OnRep_QuestList()
//{
//	FString RoleString = HasAuthority() ? "Server"  : "Client";
//
//	for (auto& Quest : QuestList)
//	{
//		UE_LOG(LogTemp, Warning, TEXT("Quest on %s: %s"), *RoleString, *GetNameSafe(Quest));
//	}
//}

// removed-end
bool UNarrativeComponent::IsQuestValid(const UQuest* Quest, FString& OutError)
{



```

### NarrativeEvent.cpp

```cpp title="/Narrative/Private/NarrativeEvent.cpp" showLineNumbers

...

#include "NarrativeEvent.h"


// removed-start
bool UNarrativeEvent::ExecuteEvent_Implementation(APawn* Pawn, APlayerController* Controller, class UNarrativeComponent* NarrativeComponent)
// removed-end
// added-start
UNarrativeEvent::UNarrativeEvent(const FObjectInitializer& ObjectInitializer) : Super(ObjectInitializer)
// added-end

...

// removed-start
return true;
// removed-end
// added-start
bRefireOnLoad = true; 
}

void UNarrativeEvent::ExecuteEvent_Implementation(APawn* Pawn, APlayerController* Controller, class UNarrativeComponent* NarrativeComponent)
{

// added-end
}

FString UNarrativeEvent::GetGraphDisplayText_Implementation()


```

### Dialogue.h

```cpp title="/Narrative/Public/Dialogue.h" showLineNumbers

#include "UObject/NoExportTypes.h"
#include "LevelSequencePlayer.h"
#include "DialogueSM.h"
// removed-start
#include <MovieSceneSequencePlayer.h>
// removed-end
// added-start
#include "MovieSceneSequencePlayer.h"
// added-end

...

// removed-start
    SpeakerName = FText::GetEmpty();
// removed-end
    NodeColor = FLinearColor(0.036161, 0.115986,0.265625, 1.000000);

    DefaultSpeakerShot = nullptr;
// added-start
    bIsPlayer = false;
// added-end

...

// removed-start

// removed-end
// added-start

FName GetSpeakerID() const { return SpeakerID; };

public:

UPROPERTY()
bool bIsPlayer;

// added-end
};

/**Special speaker type created for the player*/
// added-start

    bIsPlayer = true;
// added-end
// added-start
};


USTRUCT(BlueprintType)
struct NARRATIVE_API FDialoguePlayParams
{
GENERATED_BODY()

FDialoguePlayParams()
{
    StartFromID = NAME_None;
    Priority = -1;
};

//The ID the dialogue should start playing from, if empty will play from root node. 
UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Play Params")
FName StartFromID;

//The priority we want to play this dialogue at. -1 means use the dialogues default priority. 
UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Play Params")
int32 Priority;
// added-end

...

// removed-start
virtual bool Initialize(class UNarrativeComponent* InitializingComp, FName StartFromID);
// removed-end
// added-start
virtual bool Initialize(class UNarrativeComponent* InitializingComp, const FDialoguePlayParams PlayParams);
// added-end
virtual void Deinitialize();

virtual void DuplicateAndInitializeFromDialogue(UDialogue* DialogueTemplate);
// added-start
//Priority. Lower values are more important. If a dialogue attempts to play with a higher priority it will be discarded. 
UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Configuration")
int32 Priority;

// added-end
// added-start
/*
* If enabled, we'll adjust the player to be at PlayerAutoAdjustTransform relative to the other speaker. Only used in 1 on 1 dialogue. 
*/
UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Adjustment")
bool bAdjustPlayerTransform;

//In 1-on-1 dialogue, we can automatically adjust your players position so they stand the desired amount of units away. 
UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Adjustment", meta = (EditCondition="bAdjustPlayerTransform", EditConditionHides))
FTransform PlayerAutoAdjustTransform;

// added-end
// added-start

//The attenuation to use for dialogue lines
UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Audio")
class USoundAttenuation* DialogueSoundAttenuation;
// added-end
// added-start
* Auto-adjust the player in 1-on-1 dialogue so we're standing in front of them even if we started talking in a different location 
*/
UFUNCTION(BlueprintNativeEvent, Category = "Dialogue")
void AdjustPlayerTransform();
virtual void AdjustPlayerTransform_Implementation();

/**
// added-end
// added-start

//Play params passed into us 
UPROPERTY()
FDialoguePlayParams PlayParams;
// added-end

...

// removed-start
};
// removed-end
// added-start
};// added-end


```

### NarrativeEvent.h

```cpp title="/Narrative/Public/NarrativeEvent.h" showLineNumbers

...

public:

// added-start
UNarrativeEvent(const FObjectInitializer& ObjectInitializer);

// added-end
// added-start
When the game loads back in, should we fire this event off again?

For example, if we used a GiveXP event to give the player 500XP when we get to a certain quest state, this should be false.
Since XP is saved already, quitting and reloading would grant 500XP on top of the previous amount, which is not what we want. 

On the other hand, since NPC behavior isn't saved to disk, we want this to be true for all NPC behavior events - this way when your
quest reloads it properly refires the event so your NPCs are ready to go when you come back to your game. 
*/
UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Event")
bool bRefireOnLoad;

/**
// added-end

...

// removed-start
bool ExecuteEvent(APawn* Pawn, APlayerController* Controller, class UNarrativeComponent* NarrativeComponent);
virtual bool ExecuteEvent_Implementation(APawn* Pawn, APlayerController* Controller, class UNarrativeComponent* NarrativeComponent);
// removed-end
// added-start
void ExecuteEvent(APawn* Pawn, APlayerController* Controller, class UNarrativeComponent* NarrativeComponent);
virtual void ExecuteEvent_Implementation(APawn* Pawn, APlayerController* Controller, class UNarrativeComponent* NarrativeComponent);
// added-end

/**Define the text that will show up on a node if this event is added to it */
UFUNCTION(BlueprintNativeEvent, BlueprintCallable, Category = "Event")


```

### DialogueSM.h

```cpp title="/Narrative/Public/DialogueSM.h" showLineNumbers

...

#endif

// removed-start
TArray<class UDialogueNode_NPC*> GetNPCReplies(APlayerController* OwningController, APawn* OwningPawn, class UNarrativeComponent* NarrativeComponent);
// removed-end
// added-start
class UDialogueNode_NPC* GetFirstValidNPCReply(APlayerController* OwningController, APawn* OwningPawn, class UNarrativeComponent* NarrativeComponent);
// added-end
// added-start

UFUNCTION(BlueprintCallable, Category = "NPC Dialogue Node")
FName GetSpeakerID() const {return SpeakerID;}; 

void SetSpeakerID(const FName& NewID) { SpeakerID = NewID; };

//Sequence to play when player is selecting their reply after this shot has played 
UPROPERTY(EditAnywhere, Instanced, BlueprintReadOnly, Category = "Details - NPC Dialogue Node")
class UNarrativeDialogueSequence* SelectingReplyShot;

/**Grab this NPC node, appending all follow up responses to that node. Since multiple NPC replies can be linked together, 
we need to grab the chain of replies the NPC has to say. */
TArray<class UDialogueNode_NPC*> GetReplyChain(APlayerController* OwningController, APawn* OwningPawn, class UNarrativeComponent* NarrativeComponent);

protected:
// added-end

...

// removed-start

//Sequence to play when player is selecting their reply after this shot has played 
UPROPERTY(EditAnywhere, Instanced, BlueprintReadOnly, Category = "Details - NPC Dialogue Node")
class UNarrativeDialogueSequence* SelectingReplyShot;

/**Grab this NPC node, appending all follow up responses to that node. Since multiple NPC replies can be linked together, 
we need to grab the chain of replies the NPC has to say. */
TArray<class UDialogueNode_NPC*> GetReplyChain(APlayerController* OwningController, APawn* OwningPawn, class UNarrativeComponent* NarrativeComponent);
// removed-end

};



```

### Quest.h

```cpp title="/Narrative/Public/Quest.h" showLineNumbers

...

protected:

// added-start
//Called before tasks are ready - a good place to set up data tasks depend on 
UFUNCTION(BlueprintImplementableEvent, meta = (DisplayName="Pre Quest Started"))
    void BPPreQuestStarted(const UQuest* Quest);

// added-end

...

// removed-start
void BPOnQuestTaskProgressChanged(const UQuest* Quest, const UNarrativeTask* Task, const class UQuestBranch* Step, int32 CurrentProgress, int32 RequiredProgress);
// removed-end
// added-start
    void BPOnQuestTaskProgressChanged(const UQuest* Quest, const UNarrativeTask* Task, const class UQuestBranch* Step, int32 CurrentProgress, int32 RequiredProgress);
// added-end

UFUNCTION()
    void OnQuestTaskCompleted(const UNarrativeTask* Task, const class UQuestBranch* Branch);
// added-start

//Tell the quest that it is tracked - by default this will enable the quests navigation markers. 
UFUNCTION(BlueprintCallable, Category = "Quest")
virtual void SetTracked(const bool bNewTracked);

UFUNCTION(BlueprintImplementableEvent, meta = (DisplayName = "On Tracked Changed"))
void BPOnTrackedChanged(const UQuest* Quest, const bool bNewTracked);
// added-end
// added-start

//Whether or not the quest is marked as tracked. Use this to show or hide a quest 
UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Quest Details")
bool bTracked;
// added-end
// added-start
UFUNCTION(BlueprintPure, Category = "Quests")
FORCEINLINE bool IsTracked() const { return bTracked;};

// added-end

...



```

### QuestTask.h

```cpp title="/Narrative/Public/QuestTask.h" showLineNumbers

...

public:

// removed-start
/**Highly recommended to implement this function! It lets you autogenerate task descriptions that the editor UI and narrative UI will use,
// removed-end
// added-start
/** Implement this if you want to autogenerate task descriptions that the editor UI and narrative UI will use,
// added-end

...

// removed-start
/** Optional special version of GetTaskDescription that is used for displaying info the editor nodes. 
If you don't implement this function the nodes will just use GetTaskDescription instead. */
// removed-end
// added-start
/** Optional special version of GetTaskDescription that is used for displaying info the editor nodes,
but won't be used for ingame descriptions. */
// added-end
UFUNCTION(BlueprintNativeEvent, BlueprintCallable, Category = "Editor")
FText GetTaskNodeDescription() const;
virtual FText GetTaskNodeDescription_Implementation() const;


```

### DialogueBlueprintGeneratedClass.h

```cpp title="/Narrative/Public/DialogueBlueprintGeneratedClass.h" showLineNumbers

...

#include "CoreMinimal.h"
#include "Engine/BlueprintGeneratedClass.h"
// added-start
#include "UObject/Package.h"
// added-end

...



```

### NarrativePartyComponent.h

```cpp title="/Narrative/Public/NarrativePartyComponent.h" showLineNumbers

...

public:

// removed-start
virtual bool BeginDialogue(TSubclassOf<class UDialogue> Dialogue, FName StartFromID = NAME_None) override;
// removed-end
// added-start
virtual bool BeginDialogue(TSubclassOf<class UDialogue> Dialogue, const FDialoguePlayParams PlayParams = FDialoguePlayParams()) override;
// added-end

...

// removed-start
};
// removed-end
// added-start
};// added-end


```

### NarrativeComponent.h

```cpp title="/Narrative/Public/NarrativeComponent.h" showLineNumbers

...

#include "CoreMinimal.h"
#include "UObject/TextProperty.h" //Fixes a build error complaining about incomplete type UTextProperty
#include "Components/ActorComponent.h"
// removed-start

// removed-end

...

// removed-start

// removed-end
//Narrative makes a point to expose everything via delegates so your game can update your UI, or do whatever it needs to do when an update happens. 

//General

...

// removed-start

// removed-end
public:

UFUNCTION(BlueprintPure, Category = "Narrative")

...

// removed-start
virtual bool HasDialogueAvailable(TSubclassOf<class UDialogue> Dialogue, FName StartFromID = NAME_None);
// removed-end
// added-start
virtual bool HasDialogueAvailable(TSubclassOf<class UDialogue> Dialogue, const FDialoguePlayParams PlayParams = FDialoguePlayParams());
// added-end

/**Sets CurrentDialogue to the given dialogue class, cleaning up our existing dialogue if one is going. Won't actually begin playing the dialogue. */
// removed-start
virtual bool SetCurrentDialogue(TSubclassOf<class UDialogue> Dialogue, FName StartFromID = NAME_None);
// removed-end
// added-start
virtual bool SetCurrentDialogue(TSubclassOf<class UDialogue> Dialogue, const FDialoguePlayParams PlayParams = FDialoguePlayParams());
// added-end


...

// removed-start
virtual bool BeginDialogue(TSubclassOf<class UDialogue> Dialogue, FName StartFromID = NAME_None);
// removed-end
// added-start
virtual bool BeginDialogue(TSubclassOf<class UDialogue> Dialogue, const FDialoguePlayParams PlayParams = FDialoguePlayParams());
// added-end

/**Used by the server to tell client to start dialogue. Also sends the initial chunk*/
UFUNCTION(Client, Reliable, Category = "Dialogues")

...

// removed-start
virtual class UDialogue* MakeDialogueInstance(TSubclassOf<class UDialogue> DialogueClass, FName StartFromID = NAME_None);
// removed-end
// added-start
virtual class UDialogue* MakeDialogueInstance(TSubclassOf<class UDialogue> DialogueClass, const FDialoguePlayParams PlayParams = FDialoguePlayParams());
// added-end


public:

...

// removed-start
};
// removed-end
// added-start
};// added-end


```

### NarrativeDialogueSequence.h

```cpp title="/Narrative/Public/NarrativeDialogueSequence.h" showLineNumbers

...

    UNarrativeDialogueSequence();

// added-start

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
    }


// added-end

...

// removed-start
    virtual void EndSequence();
// removed-end

    FORCEINLINE TArray<class ULevelSequence*> GetSequenceAssets() const { return SequenceAssets;}
    FORCEINLINE FMovieSceneSequencePlaybackSettings GetPlaybackSettings() const {return PlaybackSettings;}
// added-start

    //Called before the shot is stopped and its sequence player is de-initialized. 
    UFUNCTION(BlueprintCallable, BlueprintImplementableEvent, Category = "Dialogue Sequence")
    void OnStop();

    /** Plays the level sequence. Pretty rare you'd ever want to override this in BP but the option is there! */
    UFUNCTION(BlueprintNativeEvent, BlueprintCallable, Category = "Dialogue Sequence")
    void EndSequence();
    virtual void EndSequence_Implementation();
// added-end

...

```