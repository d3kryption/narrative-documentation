---
sidebar_label: 'Player Controller'
sidebar_position: 1
---
# Player Controller

Before we can move on, we need to create a PlayerController. Simply right-click in your Content Drawer, select Blueprint Class and choose Player Controller. We will name this BP_PlayerController.

![Pick your parent class](/img/quests-and-dialogue/playercontroller.png)

Inside the BP_PlayerController, add the Narrative component. If you can’t find this, make sure the Narrative plugin is enabled above.

Now open the BP_ThirdPersonGameMode and set the Player Controller class to your newly created BP_PlayerController.

![Third person game mode](/img/quests-and-dialogue/thirdpersongamemode.png)

Now open your Player Controller and add the Narrative component to the components list.

![Components](/img/quests-and-dialogue/components.png)