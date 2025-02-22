---
sidebar_label: 'Show UI'
---

import {Icon} from '@iconify/react';

<div class="action-time">
    <Icon icon="mdi:clock-time-eight-outline" height="20"></Icon> Time required: 20 minutes
</div>

# Show UI

Show UI is a mod commonly used in games to completely hide a quest from any UI. Basically making it a completely hidden quest.

This is useful when creating sub-quests that run in the background of a main quest or creating game concepts such as Achievements or Trophies.

![quest-show-ui-usage.webp](/img/quests/quest-show-ui-usage.webp)

## Adding the boolean

There is two ways of adding the boolean. A blueprint only modification which takes a little more work or a C++ change.

### Blueprint

To add the blueprint boolean, create a [master quest](../quests/index.md#master-quest) then add a new boolean named `Show UI`.

![master-quest-show-ui-variable.webp](/img/quests/master-quest-show-ui-variable.webp)

Default this to true.

![master-quest-show-ui-variable-default.webp](/img/quests/master-quest-show-ui-variable-default.webp)

Now add a function into your [master quest interface](../quests/index.md#master-quest-interface) to return this boolean.

![show-ui-interface.webp](/img/quests/show-ui-interface.webp)

Finally, implement this interface function on your master quest, making it return the boolean.

![master-quest-show-ui-function.webp](/img/quests/master-quest-show-ui-function.webp)

![master-quest-show-ui-function-implimentation.webp](/img/quests/master-quest-show-ui-function-implimentation.webp)

### C++

To make the C++ changes, simply open the file `Quest.h`.

Inside the class `UQuest`, under the **Protected** subsection, add the code under the QuestDescription.

```cpp
UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Quest Details", meta = (MultiLine = true))
FText QuestDescription;
	
//Allows quests to be completely hidden from the UI
UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Quest Details")
bool bShowUI;
```

Finally, to add the default value, open `Quest.cpp` and add a default for the ShowUI boolean in the UQuest initialisation method.

```cpp
UQuest::UQuest()
{
	QuestName = FText::FromString("My New Quest");
	QuestDescription = FText::FromString("Enter a description for your quest here.");
	bTracked = true;
	bShowUI = true;
}
```

Finally compile your C++ and re-open Unreal to make the UI changes.

## Updating the UI

This section needs to be done whether you have added the C++ or Blueprint changes.

In order to make the UI hidden, we need to update the Quest widget to ignore any broadcasts that come from a quest with `Show UI` disabled.

Go into the plugins folder and open `BP_Narrative3Overlay`. Go into the **Graph**.

### Macro

To make this easier, we are going to create a **Macro** to check the **ShowUI** flag.

:::note

A macro is like a function, but it lets you add your own Execution (exec) pins to make custom nodes like the below.

![show-ui-macro.webp](/img/quests/mods/show-ui-macro.webp)

:::

Add a new Macro called **Should Show Update**, then on the Inputs, add two inputs.

- Named **Exec** with an **Exec** data type
- Named **Quest** with a **Quest** data type

Then add two outputs:

- Named **ShowUpdate** with an **Exec** data type
- Named **HideUpdate** with an **Exec** data type

![show-ui-macro-inputs.webp](/img/quests/mods/show-ui-macro-inputs.webp)

#### Blueprint

If you added the blueprint Show UI flag, drag off the quest node and call your **GetShowUI** interface call.

Connect this to a branch node.

Connect the **True** to **Show Update** of the Outputs, and the **False** to the **Hide Update**.

<iframe src="https://blueprintue.com/render/j1ejjk2v/" width="100%" height="400" scrolling="no" allowfullscreen></iframe>

#### C++

If you added the C++ flag, simply drag off the quest node and get the **bShowUI** node.

Connect this to a branch node.

Connect the **True** to **Show Update** of the Outputs, and the **False** to the **Hide Update**.

### UI Changes

Go into the function **Show Quest Update**. Right at the start, drag off the function and add the Macro **Should Show Update**.

Connect the quest into the Macro's quest then the **Show Update** to the remaining code.

<iframe src="https://blueprintue.com/render/4n5pv52x/" width="100%" height="400" scrolling="no" allowfullscreen></iframe>

Finally, make this same change to the following functions:

- OnQuestBranchCompleted
- OnQuestTaskCompleted
- OnQuestTaskProgressMade
- OnQuestSucceeded
- OnQuestFailed
- OnQuestStarted
- OnQuestNewState