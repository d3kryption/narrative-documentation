---
sidebar_label: '2.0.0 Code Changes'
---

# 2.0.0 Code Changes

### NarrativeEquipment.Build.cs

```cpp title="NarrativeEquipment/NarrativeEquipment.Build.cs" showLineNumbers
PublicDependencyModuleNames.AddRange(
    new string[]
    {
       "Core",
       // added-start
       "NarrativeInventory",
       "GameplayTags"
       // added-end
       // ... add other public dependencies that you statically link with here ...
   }
);
```

### InventoryComponent.cpp

```cpp title="NarrativeInventory/Private/InventoryComponent.cpp" showLineNumbers
UNarrativeInventoryComponent::UNarrativeInventoryComponent(const FObjectInitializer& ObjectInitializer) : Super(ObjectInitializer)
{
	SetIsReplicatedByDefault(true);

	WeightCapacity = 100.f;
	Capacity = 50;

   // added-start
	BuyItemPct = 0.5f;
	SellItemPct = 2.f;

	bGaveDefaultItems = false; 
   // added-end
}

...

bool UNarrativeInventoryComponent::UseItem(class UNarrativeItem* Item)
{
   // added-start
	if (!IsValid(Item))
	{
		return false;
	}
   // added-end

	if (GetOwnerRole() < ROLE_Authority)
	{
		ServerUseItem(Item);
	}
}

...

// added-start
void UNarrativeInventoryComponent::TryAddFromLootTable(FLootTableRoll LootTable, TArray<FItemAddResult>& OutItemAddResults)
{
	if (LootTable.CanRoll())
	{
		const TArray<FName> AllRows = LootTable.TableToRoll->GetRowNames();

		for (int32 i = 0; i < LootTable.NumRolls; ++i)
		{
			if (FMath::FRand() <= LootTable.Chance)
			{
				const FName RandomRowName = AllRows[FMath::RandRange(0, AllRows.Num() - 1)];
				const FString ContextString = "LootRoll";

				//Grab a row from the loot table, and if it passes, grant the item
				if (FLootTableRow* Row = LootTable.TableToRoll->FindRow<FLootTableRow>(RandomRowName, ContextString))
				{
					if (FMath::FRand() <= Row->Chance)
					{

						//Grant the items and item collections 
						for (FItemWithQuantity& ItemToGive : Row->ItemsToGrant)
						{
							OutItemAddResults.Add(TryAddItemFromClass(ItemToGive.Item.LoadSynchronous(), ItemToGive.Quantity));
						}

						for (auto& Collection : Row->ItemCollectionsToGrant)
						{
							if (IsValid(Collection))
							{
								for (auto& Item : Collection->Items)
								{
									if (!Item.Item.IsNull() && Item.Quantity > 0)
									{
										OutItemAddResults.Add(TryAddItemFromClass(Item.Item.LoadSynchronous(), Item.Quantity));
									}
								}
							}
						}

						for (auto& Subtable : Row->SubTablesToRoll)
						{
							//Make sure the subtable we're about to roll isn't the same table we're already rolling, as that would cause an infinite loop 
							if (Subtable.TableToRoll != LootTable.TableToRoll)
							{
								TryAddFromLootTable(Subtable, OutItemAddResults);
							}
						}
					}
				}
			}
		}
	}
}

void UNarrativeInventoryComponent::SetInventoryFriendlyName(const FText& Name)
{
	InventoryFriendlyName = Name;
}

void UNarrativeInventoryComponent::SetIsVendor(const bool bNewIsVendor)
{
	bIsVendor = bNewIsVendor;
}

void UNarrativeInventoryComponent::GiveDefaultItems()
{
	if (!bGaveDefaultItems && GetOwnerRole() >= ROLE_Authority)
	{
		TArray<FItemAddResult> Results;

		/**TODO. This will cause a pretty big hitch because we're using LoadSyncronous on the items. We instead are going to want 
		to modify TryAddFromLootTable to instead async load all the item soft refs and callback when they are ready to be added. */
		for (auto& DefaultItemTable : DefaultItemTables)
		{
			TryAddFromLootTable(DefaultItemTable, Results);
		}

		//This is marked SaveGame, ensuring inventories are granted their items only once ever, even across multiple sessions. 
		bGaveDefaultItems = true;
	}
}

int32 UNarrativeInventoryComponent::GetBuyPrice_Implementation(TSubclassOf<class UNarrativeItem> Item, int32 Quantity /*= 1*/) const
{
	if (IsValid(Item))
	{
		if (const UNarrativeItem* ItemCDO = GetDefault<UNarrativeItem>(Item))
		{
			return FMath::CeilToInt((ItemCDO->BaseValue * BuyItemPct) * Quantity);
		}
	}
	return 0;
}

int32 UNarrativeInventoryComponent::GetSellPrice_Implementation(TSubclassOf<class UNarrativeItem> Item, int32 Quantity /*= 1*/) const
{
	if (IsValid(Item))
	{
		if (const UNarrativeItem* ItemCDO = GetDefault<UNarrativeItem>(Item))
		{
			return FMath::CeilToInt((ItemCDO->BaseValue * SellItemPct) * Quantity);
		}
	}

	return INT_MAX;
}
// added-end

...

// removed-start
FItemAddResult UNarrativeInventoryComponent::TryAddItemFromClass(TSubclassOf<class UNarrativeItem> ItemClass, const int32 Quantity /*=1*/)
// removed-end
// added-start
FItemAddResult UNarrativeInventoryComponent::TryAddItemFromClass(TSubclassOf<class UNarrativeItem> ItemClass, const int32 Quantity /*=1*/, const bool bCheckAutoUse/*=false*/)
// added-end

...

if (AddResult.AmountGiven > 0)
{
    OnItemAdded.Broadcast(AddResult);
}

// added-start
if (bCheckAutoUse)
{
    for (auto& Stack : AddResult.Stacks)
    {
        if (Stack->ShouldUseOnAdd())
        {
            UseItem(Stack);
        }
    }
}
// added-end

...

// removed-start
bool UNarrativeInventoryComponent::HasItem(TSubclassOf <class UNarrativeItem> ItemClass, const int32 Quantity /*= 1*/, const bool bCheckVisibility/*= false*/) const
{
	if (IsValid(ItemClass))
	{
		if (UNarrativeItem* ItemCDO = ItemClass->GetDefaultObject<UNarrativeItem>())
		{
			if (ItemCDO->bStackable)
			{
				//if the item is stackable we can just check the stack quantity
				if (UNarrativeItem* ItemToFind = FindItemByClass(ItemClass))
				{
					if (!bCheckVisibility || ItemToFind->ShouldShowInInventory())
					{
						return ItemToFind->GetQuantity() >= Quantity;
					}
				}
			}//For non stackable items get all of them and check quantity	
			else return FindItemsByClass(ItemClass, bCheckVisibility).Num() >= Quantity;
		}
	}

	return false;
}
// removed-end

// added-start
bool UNarrativeInventoryComponent::HasItem(TSoftClassPtr<class UNarrativeItem> ItemClass, const int32 Quantity /*= 1*/, const bool bCheckVisibility/*= false*/) const
{
	if (!ItemClass.IsNull())
	{	
		//Todo re-write this, it needs to iterate the inventory and find all items with quantity 
		if (UNarrativeItem* ItemToFind = FindItemByClass(ItemClass))
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	return false;
}
// added-end

...

// removed-start
bool UNarrativeInventoryComponent::AllowLootItem(class UNarrativeInventoryComponent* Taker, TSubclassOf <class UNarrativeItem> ItemClass, const int32 Quantity, FText& ErrorText)  const
// removed-end
// added-start
bool UNarrativeInventoryComponent::AllowLootItem(class UNarrativeInventoryComponent* Taker, TSubclassOf<class UNarrativeItem> ItemClass, const int32 Quantity, FText& ErrorText)  const
// added-end

...

// removed-start
const bool bShopHasItem = HasItem(ItemClass, Quantity);
// removed-end
// added-start
const bool bShopHasItem = HasItem(TSoftClassPtr<UNarrativeItem>(ItemClass), Quantity);
// added-end

...

// removed-start
return bTakerHasSpace && bShopHasItem;
// removed-end
// added-start
const bool bWeHaveCurrency = !bIsVendor || GetCurrency() >= GetBuyPrice(ItemClass, Quantity);

if (!bWeHaveCurrency)
{
    ErrorText = LOCTEXT("AllowStoreItem_NotEnoughMoney", "The shop doesn't have enough money to complete the trade.");
}

return bWeHaveSpace && bStorerHasItem && bWeHaveCurrency;
// added-end

...

// removed-start
if (UNarrativeItem* Item = FindItemByClass(ItemClass))
// removed-end
// added-start
if (UNarrativeItem* Item = FindItemByClass(TSoftClassPtr<UNarrativeItem>(ItemClass)))
// added-end

...

// added-start
    if (bIsVendor && Taker)
    {
        const int32 TransactionPrice = GetSellPrice(ItemClass, AddResult.AmountGiven);

        //We sold an item, need to remove cash from taker and store in our inventory 
        Taker->AddCurrency(-TransactionPrice);
        AddCurrency(TransactionPrice);
    }
// added-end
}

return AddResult;

...

if (Storer)
{
    //Store the item in our inventory
    // removed-start
    const FItemAddResult AddResult = TryAddItemFromClass(ItemClass);
    // removed-end
    // added-start
    const FItemAddResult AddResult = TryAddItemFromClass(ItemClass, Quantity);
    // added-end

...

if (AddResult.AmountGiven > 0)
{
    // removed-start
    if (UNarrativeItem* Item = Storer->FindItemByClass(ItemClass))
    // removed-end
    // added-start
    if (UNarrativeItem* Item = Storer->FindItemByClass(TSoftClassPtr<UNarrativeItem>(ItemClass)))
    // added-end
    {
        //However much of the item we managed to store, remove from the storers inventory

...

// added-start
    if (bIsVendor && Storer)
    {
        const int32 TransactionPrice = GetBuyPrice(ItemClass, AddResult.AmountGiven);

        //We sold an item, need to remove cash from taker and store in our inventory 
        Storer->AddCurrency(TransactionPrice);
        AddCurrency(-TransactionPrice);
    }
    // added-end
}

return AddResult;

...

// removed-start
UNarrativeItem* UNarrativeInventoryComponent::FindItemByClass(TSubclassOf<class UNarrativeItem> ItemClass, const bool bCheckVisibility/*= false*/) const
// removed-end
// added-start
UNarrativeItem* UNarrativeInventoryComponent::FindItemByClass(TSoftClassPtr<class UNarrativeItem> ItemClass, const bool bCheckVisibility/*= false*/) const
// added-end

...

TArray<UNarrativeItem*> UNarrativeInventoryComponent::FindItemsByClass(TSubclassOf<class UNarrativeItem> ItemClass, const bool bCheckVisibility/*= false*/) const
// added-start
TArray<UNarrativeItem*> UNarrativeInventoryComponent::FindItemsOfClass(TSubclassOf<class UNarrativeItem> ItemClass, const bool bCheckVisibility/*= false*/) const
// added-end

...

//Figure out how many of a given item we can add 
if (const UNarrativeItem* ItemCDO = GetDefault<UNarrativeItem>(ItemClass))
{
    // added-start
    if (Items.Num() >= GetCapacity())
    {
        NoSpaceReason = LOCTEXT("NoSpaceReason_CapacitySpace", "You don't have any inventory slots left for this item.");
        return 0;
    }
// added-end

...

// removed-start
if (UNarrativeItem* ExistingItem = FindItemByClass(ItemClass))
// removed-end
// added-start
if (UNarrativeItem* ExistingItem = FindItemByClass(TSoftClassPtr<UNarrativeItem>(ItemClass)))
// added-end

...

InventorySave->SavedCurrency = Currency;

// added-start
// Clear previously saved items to ensure we're saving the current state.
InventorySave->SavedItems.Empty();
// added-end

for (auto& Item : Items)

...

// removed-start
return true;
// removed-end
// added-start
return false;
// added-end

...

bool UNarrativeInventoryComponent::Load(const FString& SaveName /*= "NarrativeInventorySaveData"*/, const int32 Slot /*= 0*/)
{
    // removed-start
    if (!UGameplayStatics::DoesSaveGameExist(SaveName, 0))
    // removed-end
    // added-start
    if (!UGameplayStatics::DoesSaveGameExist(SaveName, Slot))
    // added-end
    {
        return false;
    }

    // added-start
	//Deactivate any active items we currently have 
	for (auto& Item : Items)
	{
		if (Item->bActive)
		{
			Item->SetActive(false, true);
		}
	}
    // added-end

...

// removed-start
check(AddResult.CreatedStacks.Num() && AddResult.CreatedStacks.IsValidIndex(0));
// removed-end
// added-start
check(AddResult.Stacks.Num() && AddResult.Stacks.IsValidIndex(0));
// added-end

...

// removed-start
if (UNarrativeItem* AddedItem = AddResult.CreatedStacks[0])
// removed-end
// added-start
if (UNarrativeItem* AddedItem = AddResult.Stacks[0])
// added-end

...

void UNarrativeInventoryComponent::BeginPlay()
{
	Super::BeginPlay();

	OwnerPC = GetOwningController();
    // removed-start
	for (auto& Item : DefaultItems)
	{
		if (Item)
		{
			TryAddItemFromClass(Item->GetClass(), Item->GetQuantity());
		}
	}

	DefaultItems.Empty();
	// removed-end
}

...

// removed-start
OnEndLooting.Broadcast();
// removed-end
// added-start
OnEndLooting.Broadcast(LootSource);
// added-end

...

//Top up any existing stacks with the add amount, stopping if we ran out of items to give 
// removed-start
for (auto& Stack : FindItemsByClass(ItemClass))
// removed-end
// added-start
for (auto& Stack : FindItemsOfClass(ItemClass))
// added-end

...

//UE_LOG(LogTemp, Warning, TEXT("Adding %s adding %d to existing stack"), *ItemCDO->DisplayName.ToString(), AmountGiven);
LeftToAdd -= AmountGiven;

// added-start
AddResult.Stacks.Add(Stack);
// added-end

...

if (UNarrativeItem* NewItem = AddItem(ItemClass, MaxStackSize))
{
// removed-start
    AddResult.CreatedStacks.Add(NewItem);
// removed-end
// added-start
    AddResult.Stacks.Add(NewItem);
// added-end
}

...

if (UNarrativeItem* NewItem = AddItem(ItemClass, Remainder))
{
// removed-start
    AddResult.CreatedStacks.Add(NewItem);
// removed-end
// added-start
    AddResult.Stacks.Add(NewItem);
// added-end
}

...

        ServerRequestLootItem(ItemToLoot, Quantity);
        return true;
    }
    
    // removed-start
    LootSource->PerformLootItem(this, ItemToLoot->GetClass(), Quantity);
    // removed-end
    // added-start
    LootSource->PerformLootItem(this, ItemToLoot->GetClass(), Quantity);
    // added-end
    return true;
}
```

### InventoryFunctionLibrary.cpp

```cpp title="NarrativeInventory/Private/InventoryFunctionLibrary.cpp" showLineNumbers
	//Try player state, then pawn, then controller 
    // removed-start
	if (APawn* OwningPawn = Cast<APawn>(Target))
    // removed-end
    // added-start
	if (const APawn* OwningPawn = Cast<APawn>(Target))
    // added-end
	{
	    // removed-start
		if (OwningPawn->GetPlayerState())
		{
			return OwningPawn->GetPlayerState()->FindComponentByClass<UNarrativeInventoryComponent>();
		}
		// removed-end
		// added-start
                if (const APlayerState* PlayerState = OwningPawn->GetPlayerState<APlayerState>())
		{
			if (UNarrativeInventoryComponent* InventoryComp = PlayerState->FindComponentByClass<UNarrativeInventoryComponent>())
			{
				return InventoryComp;
			}
		}
		// added-end

        // removed-start
		if (OwningPawn->GetController())
		{
			return OwningPawn->GetController()->FindComponentByClass<UNarrativeInventoryComponent>();
		}
		// removed-end
		// added-start
                if (const AController* OwningController = OwningPawn->GetController())
		{
			if (UNarrativeInventoryComponent* InventoryComp = OwningController->FindComponentByClass<UNarrativeInventoryComponent>())
			{
				return InventoryComp;
			}
		}
		// added-end
	}

	//Same for controller based target 
	// removed-start
	if (APlayerController* OwningController = Cast<APlayerController>(Target))
    // removed-end
    // added-start
	else if (const APlayerController* OwningController = Cast<APlayerController>(Target))
    // added-end
	{
		if (OwningController->GetPawn())
		{
		    // removed-start
			if (OwningController->GetPlayerState<APlayerState>())
			{
				return OwningController->GetPlayerState<APlayerState>()->FindComponentByClass<UNarrativeInventoryComponent>();
			}
            // removed-end
            // added-start
			if (const APlayerState* PlayerState = OwningController->GetPlayerState<APlayerState>())
			{
				if (UNarrativeInventoryComponent* InventoryComp = PlayerState->FindComponentByClass<UNarrativeInventoryComponent>())
				{
					return InventoryComp;
				}
			}
			// added-end

			return OwningController->GetPawn()->FindComponentByClass<UNarrativeInventoryComponent>();
		}
	}

	return nullptr;
}
```

### NarrativeItem.cpp

```cpp title="NarrativeInventory/Private/NarrativeItem.cpp" showLineNumbers
#define LOCTEXT_NAMESPACE "Item"

// added-start
#define ItemStat_DisplayName "DisplayName"
#define ItemStat_Weight "Weight"
#define ItemStat_Quantity "Quantity"
#define ItemStat_RechargeDuration "RechargeDuration"
#define ItemStat_StackWeight "StackWeight"
#define ItemStat_MaxStackSize "MaxStackSize"
#define ItemStat_BaseValue "BaseValue"
// added-end

...

		DisplayName = FText::FromString(NameString);
	}

    // removed-start
	Stats.Add("Weight");
	Stats.Add("Quantity");
    // removed-end
    // added-start
	Stats.Add(FNarrativeItemStat(LOCTEXT("WeightStatDisplayText", "Weight"), ItemStat_Weight));
	Stats.Add(FNarrativeItemStat(LOCTEXT("QuantityStatDisplayText", "Quantity"), ItemStat_Quantity));
    // added-end
}

...

// removed-start
void UNarrativeItem::SetActive(const bool bNewActive)
{
	if (CanActivate() && bNewActive != bActive)
	{
		bActive = bNewActive;
		OnRep_bActive(!bActive);
		MarkDirtyForReplication();
	}
}
// removed-end
// added-start
void UNarrativeItem::SetActive(const bool bNewActive, const bool bForce)
{
	if (bCanActivate)
	{
		if (bNewActive != bActive || bForce)
		{
			bActive = bNewActive;
			OnRep_bActive(!bActive);
			MarkDirtyForReplication();
		}
	}
}
// added-end

...

// added-start
FText UNarrativeItem::GetRawDescription_Implementation()
{
	return Description;
}

bool UNarrativeItem::ShouldUseOnAdd_Implementation() const
{
	return false;
}
// added-end

...

bool UNarrativeItem::ShouldShowInInventory_Implementation() const
{
    // added-start
	//By default, don't show vendors equipped items in their store  
	if (OwningInventory && OwningInventory->bIsVendor)
	{
		if (bActive)
		{
			return false; 
		}
	}
    // added-end

	return true;
}

...

FString UNarrativeItem::GetStringVariable_Implementation(const FString& VariableName)
{
	//Overriable in BP in case you want to add more 
    // removed-start
	if (VariableName == "Display Name")
    // removed-end
    // added-start
	if (VariableName == ItemStat_DisplayName)
    // added-end
    
...

    // removed-start
	else if (VariableName == "Weight")
    // removed-end
    // added-start
	else if (VariableName == ItemStat_Weight)
    // added-end
    
...

    // removed-start
	else if (VariableName == "Recharge Duration")
    // removed-end
    // added-start
	else if (VariableName == ItemStat_RechargeDuration)
    // added-end
    
...

    // removed-start
	else if (VariableName == "Stack Weight")
    // removed-end
    // added-start
	else if (VariableName == ItemStat_StackWeight)
    // added-end
    
...

    // removed-start
	else if (VariableName == "Quantity")
    // removed-end
    // added-start
	else if (VariableName == ItemStat_Quantity)
    // added-end
    
...

    // removed-start
	else if (VariableName == "Max Stack Size")
    // removed-end
    // added-start
	else if (VariableName == ItemStat_MaxStackSize)
    // added-end
	    
...

    // removed-start
	else if (VariableName == "BaseValue")
    // removed-end
    // added-start
	else if (VariableName == ItemStat_BaseValue)
    // added-end
    
...

	return FString();
}
```

### VendorInventoryComponent.cpp

This file can be deleted.

### VendorInventoryComponent.h

This file can be deleted.

### InventoryComponent.h

```cpp title="NarrativeInventory/public/InventoryComponent.h" showLineNumbers
// removed-start
#include "Components/ActorComponent.h"
// added-start
#include <Engine/DataTable.h>
#include <Engine/DataAsset.h>
// added-end

...

// removed-start
TArray<class UNarrativeItem*> CreatedStacks = {};
// removed-end
// added-start
TArray<class UNarrativeItem*> Stacks = {};
// added-end

...

// removed-start
AddedSomeResult.CreatedStacks = InItems;
// removed-end
// added-start
AddedSomeResult.Stacks = InItems;
// added-end

...

// removed-start
AddAllResult.CreatedStacks = InItems;
// removed-end
// added-start
AddAllResult.Stacks = InItems;
// added-end

...

// removed-start
DECLARE_DYNAMIC_MULTICAST_DELEGATE(FOnEndLooting);
// removed-end
// added-start
DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnEndLooting, class UNarrativeInventoryComponent*, LootSource);
// added-end

...

// added-start
//Just a nice way of defining an item along with some amount of the item 
USTRUCT(BlueprintType)
struct FItemWithQuantity
{
	GENERATED_BODY()

public:

	FItemWithQuantity()
	{
		Item = nullptr;
		Quantity = 1;
	};

	UPROPERTY(BlueprintReadOnly, EditDefaultsOnly, Category = "Item")
	TSoftClassPtr<class UNarrativeItem> Item;

	UPROPERTY(BlueprintReadOnly, EditDefaultsOnly, Category = "Item")
	int32 Quantity;
};

/**
 * Data asset with a collection of items. Useful for grouping things together like armor sets, weapon sets, etc. 
 */
UCLASS()
class NARRATIVEINVENTORY_API UItemCollection : public UDataAsset
{
	GENERATED_BODY()
	
public:

	UItemCollection()
	{

	};

	//The items to grant if this row is given to the inventory
	UPROPERTY(EditAnywhere, Category = "Loot Table Row")
	TArray<FItemWithQuantity> Items;

};

//Defines a roll of a loot table 
USTRUCT(BlueprintType)
struct FLootTableRoll
{
	GENERATED_BODY()
public:

	FLootTableRoll()
	{
		NumRolls = 1;
		Chance = 1.f;
	}


	//The items to grant if this row is given to the inventory 
	UPROPERTY(EditAnywhere, Category = "Loot Table Row", meta = (RequiredAssetDataTags = "RowStructure=/Script/NarrativeInventory.LootTableRow"))
	TObjectPtr<UDataTable> TableToRoll;

	//The number of times we should roll the table 
	UPROPERTY(EditAnywhere, Category = "Loot Table Row", meta = (ClampMin = 0, ClampMax = 100))
	int32 NumRolls;

	//The chance of each roll succeeding 
	UPROPERTY(EditAnywhere, Category = "Loot Table Row", meta = (ClampMin=0.0, ClampMax=1.0))
	float Chance;

	bool CanRoll() const
	{
		return IsValid(TableToRoll) && NumRolls > 0 && Chance > 0.f;
	}

};

//Defines a row in a loot table
USTRUCT(BlueprintType)
struct FLootTableRow : public FTableRowBase
{
	GENERATED_BODY()
public:

	FLootTableRow()
	{
		Chance = 1.f;
	}

	//The items to grant if this row is given to the inventory
	UPROPERTY(EditAnywhere, Category = "Loot Table Row")
	TArray<FItemWithQuantity> ItemsToGrant;

	//Item collections to grant
	UPROPERTY(EditAnywhere, Category = "Loot Table Row")
	TArray<TObjectPtr<UItemCollection>> ItemCollectionsToGrant;

	//Subloot tables that this loot table will roll 
	UPROPERTY(EditAnywhere, Category = "Loot Table Row")
	TArray<struct FLootTableRoll> SubTablesToRoll;

	//The chance this row will actually be given if selected 
	UPROPERTY(EditAnywhere, Category = "Loot Table Row", meta = (ClampMin=0.0, ClampMax=1.0))
	float Chance;
};

// added-end

...

// added-start
/**Add an item to our inventory using a loot table instead of an item class. Current loads the granted items syncrounously and may cause hitching depending on how heavy the item is. */
UFUNCTION(BlueprintCallable, Category = "Inventory")
virtual void TryAddFromLootTable(FLootTableRoll LootTable, TArray<FItemAddResult>& OutItemAddResults);
	
UFUNCTION(BlueprintCallable, Category = "Inventory")
void SetInventoryFriendlyName(const FText& Name);

UFUNCTION(BlueprintCallable, Category = "Inventory")
void SetIsVendor(const bool bNewIsVendor);
// added-end

...

// removed-start
virtual FItemAddResult TryAddItemFromClass(TSubclassOf<class UNarrativeItem> ItemClass, const int32 Quantity = 1);
// removed-end
// added-start
virtual FItemAddResult TryAddItemFromClass(TSubclassOf<class UNarrativeItem> ItemClass, const int32 Quantity = 1, const bool bCheckAutoUse=true);
// added-end
	
...

// removed-start
virtual bool HasItem(TSubclassOf <class UNarrativeItem> ItemClass, const int32 Quantity = 1, const bool bCheckVisibility = false) const;
// removed-end
// added-start
virtual bool HasItem(TSoftClassPtr<class UNarrativeItem> ItemClass, const int32 Quantity = 1, const bool bCheckVisibility = false) const;
// added-end
	
...

// removed-start
virtual bool AllowLootItem(class UNarrativeInventoryComponent* Taker, TSubclassOf <class UNarrativeItem> ItemClass, const int32 Quantity, FText& ErrorText) const;
// removed-end
// added-start
virtual bool AllowLootItem(class UNarrativeInventoryComponent* Taker, TSubclassOf<class UNarrativeItem> ItemClass, const int32 Quantity, FText& ErrorText) const;
// added-end
	
...
	
// removed-start
virtual bool AllowStoreItem(class UNarrativeInventoryComponent* Storer, TSubclassOf <class UNarrativeItem> ItemClass, const int32 Quantity, FText& ErrorText) const;
// removed-end
// added-start
virtual bool AllowStoreItem(class UNarrativeInventoryComponent* Storer, TSubclassOf<class UNarrativeItem> ItemClass, const int32 Quantity, FText& ErrorText) const;
// added-end
	
...

// removed-start
UNarrativeItem* FindItemByClass(TSubclassOf<class UNarrativeItem> ItemClass, const bool bCheckVisibility = false) const;
// removed-end
// added-start
UNarrativeItem* FindItemByClass(TSoftClassPtr<class UNarrativeItem> ItemClass, const bool bCheckVisibility = false) const;
// added-end
	
...
	
// removed-start
TArray<UNarrativeItem*> FindItemsByClass(TSubclassOf<class UNarrativeItem> ItemClass, const bool bCheckVisibility = false) const;
// removed-end
// added-start
TArray<UNarrativeItem*> FindItemsOfClass(TSubclassOf<class UNarrativeItem> ItemClass, const bool bCheckVisibility = false) const;
// added-end

...

// removed-start
/**Items that should be put in our inventory on BeginPlay */
UPROPERTY(EditDefaultsOnly, Instanced, Category = "Inventory")
TArray<class UNarrativeItem*> DefaultItems;
// removed-end
// added-start
/**Items that should be put in our inventory on BeginPlay. We savegame this as to only add the items once.  */
UPROPERTY(EditDefaultsOnly, Category = "Inventory")
TArray<FItemWithQuantity> DefaultItems;

/** Loot table we'll use to generate this inventories items. */
UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Inventory")
TArray<FLootTableRoll> DefaultItemTables;

/** Nice way to ensure we don't give default items multiple times.  */
UPROPERTY(SaveGame, BlueprintReadOnly, Category = "Inventory")
bool bGaveDefaultItems;

/** If true, this inventory will be treated as a vendor, meaning taking/giving items will check you/the vendor has enough currency, and will 
give you/the vendor the currency when the taking/giving occurs also. */
UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Inventory")
bool bIsVendor;

//The percentage of the items value we'll buy items for if we're a vendor. 
UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Vendor Settings")
float BuyItemPct;

//The percentage of the items value we'll sell items for 
UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Vendor Settings")
float SellItemPct;
// added-end

...

//Internal, non-BP exposed add item function. Don't call this directly, use TryAddItem(), or TryAddItemFromClass() instead.
virtual FItemAddResult TryAddItem_Internal(TSubclassOf<class UNarrativeItem> ItemClass, const int32 Quantity = 1);

// added-start
public:

	/** Instead of calling this automatically on beginplay we let designers call this when they like.  */
	UFUNCTION(BlueprintCallable, Category = "Inventory")
	virtual void GiveDefaultItems();

	/**Sets our loot source. Only the server can call this for obvious reasons! */
	UFUNCTION(BlueprintCallable, BlueprintAuthorityOnly, Category = "Inventory")
	virtual void SetLootSource(class UNarrativeInventoryComponent* NewLootSource);

protected:
// added-end

...

// removed-start
/**Sets our loot source. Only the server can call this for obvious reasons! */
UFUNCTION(BlueprintCallable, BlueprintAuthorityOnly, Category = "Inventory")
virtual void SetLootSource(class UNarrativeInventoryComponent* NewLootSource);
// removed-end

...

// added-start
/**
* Return the price we'll buy the given item for
*/
UFUNCTION(BlueprintNativeEvent, BlueprintPure, Category = "Item")
int32 GetBuyPrice(TSubclassOf<class UNarrativeItem> Item, int32 Quantity = 1) const;
virtual int32 GetBuyPrice_Implementation(TSubclassOf<class UNarrativeItem> Item, int32 Quantity = 1) const;

/**
* Return the price we'll sell the given item for
*/
UFUNCTION(BlueprintNativeEvent, BlueprintPure, Category = "Item")
int32 GetSellPrice(TSubclassOf<class UNarrativeItem> Item, int32 Quantity = 1) const;
virtual int32 GetSellPrice_Implementation(TSubclassOf<class UNarrativeItem> Item, int32 Quantity = 1) const;
// added-end

```

### InventoryComponent.h

```cpp title="NarrativeInventory/public/InventoryFunctionLibrary.h" showLineNumbers
	GENERATED_BODY()
// added-start
public:
// added-end
	/**
	* Find the inventory component from the supplied target object. 

```

### NarrativeItem.h

```cpp title="NarrativeInventory/public/NarrativeItem.h" showLineNumbers
#include "InventoryComponent.h"
// added-start
#include <GameplayTagContainer.h>
// added-end
#include "NarrativeItem.generated.h"

DECLARE_DYNAMIC_MULTICAST_DELEGATE(FOnItemModified);

// added-start
//A stat that can be shown in the item preview window
USTRUCT(BlueprintType)
struct FNarrativeItemStat
{
	GENERATED_BODY()

	FNarrativeItemStat(const FText& InStatDisplayName, const FString& InStringVariable) : StatDisplayName(InStatDisplayName), StringVariable(InStringVariable)
	{

	}

	FNarrativeItemStat()
	{
		StatDisplayName = NSLOCTEXT("NarrativeItemStat", "StatDisplayName", "Stat Display Name");
		StringVariable = FString();
	};

	//The stats display name.
	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Item Stat")
	FText StatDisplayName;

	//The backing string variable for the stat - implemented using GetStringVariable function that can be overriden in Blueprints! 
	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Item Stat")
	FString StringVariable;
};
// added-end

...

// added-start
/**The use sound for the item*/
UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category = "Item")
TObjectPtr<class USoundBase> UseSound;

/**Any gameplay tags we wish to give this item*/
UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category = "Item")
FGameplayTagContainer ItemTags;

/**
* Define whether the item should automatically use itself when added to our inventory.
*/
UFUNCTION(BlueprintNativeEvent, BlueprintPure, Category = "Item")
bool ShouldUseOnAdd() const;
virtual bool ShouldUseOnAdd_Implementation() const;
// added-end
	
...

/**Some items might need to be activatable. Check this box if you want the item to be able to activate. 
Activating will mean different things for different item types, for example clothing being activated would
// removed-start
mean it equips to the player. 
// removed-end
// added-start
mean it equips to the player - you define this using the Activate and Deactivate() functions. 
// added-end

...

// removed-start
TArray<FString> Stats;
// removed-end
// added-start
TArray<FNarrativeItemStat> Stats;
// added-end

...

// removed-start
void SetActive(const bool bNewActive);
// removed-end
// added-start
void SetActive(const bool bNewActive, const bool bForce=false);
// added-end

...

// removed-start
/**Return the description with none of the string variables parsed*/
UFUNCTION(BlueprintPure, Category = "Item")
FORCEINLINE FText GetRawDescription() const {return Description;}
// removed-end
// added-start
/**Return the description - allows BPs to override this in case you want automatically dynamically generated descriptions based on the items properties. */
UFUNCTION(BlueprintNativeEvent, BlueprintPure, Category = "Item")
FText GetRawDescription();
virtual FText GetRawDescription_Implementation();
// added-end

...

// removed-start
/**
* Allows you to define whether or not the item can be activated
*/
UFUNCTION(BlueprintNativeEvent, BlueprintPure, Category = "Item")
bool CanActivate() const;
virtual bool CanActivate_Implementation() const;
// removed-end

```

### NarrativeInventory.Build.cs

```cpp title="NarrativeInventory/NarrativeInventory.Build.cs" showLineNumbers
PublicDependencyModuleNames.AddRange(
    new string[]
    {
        "UMG",
       // added-start
        "GameplayTags",
        "CommonUI"
       // added-end
       // ... add other public dependencies that you statically link with here ...
   }
);
```

### NarrativeInventoryEditorModule.cpp

```cpp title="NarrativeInventory/Private/NarrativeInventoryEditorModule.cpp" showLineNumbers
#include "AssetTypeActions_NarrativeItem.h"
// added-start
#include "AssetTypeActions_ItemCollection.h"
// added-end

...

NarrativeItemTypeActions = NarrativeItemTypeAction;
// added-start
AssetToolsModule.RegisterAssetTypeActions(NarrativeItemTypeAction.ToSharedRef());

TSharedPtr<FAssetTypeActions_ItemCollection> NarrativeItemCollectionTypeAction = MakeShareable(new FAssetTypeActions_ItemCollection(GameAssetCategory));
NarrativeItemCollectionTypeActions = NarrativeItemCollectionTypeAction;
// added-end
AssetToolsModule.RegisterAssetTypeActions(NarrativeItemTypeAction.ToSharedRef());
```

### NarrativeInventoryEditorModule.h

```cpp title="NarrativeInventory/Public/NarrativeInventoryEditorModule.h" showLineNumbers
TSharedPtr<class FAssetTypeActions_Base> NarrativeItemTypeActions;
// added-start
TSharedPtr<class FAssetTypeActions_Base> NarrativeItemCollectionTypeActions;
// added-end
```