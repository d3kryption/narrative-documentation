---
sidebar_label: 'Door example - multiplayer'
sidebar_position: 1
---

# Multiplayer

To set up the door example to work on a networked game firstly disconnect the Open set variable and the **Set Interaction Text** by ALT+Clicking on the arrow.

Select the open variable and set the **Replication** to be **RepNotify**.

![door-interaction-multiplayer-repnotify.jpg](/img/interaction/door-interaction-multiplayer-repnotify.jpg)

Next Create a custom event called **UpdateDoorState**.

Connect this to the Set Interaction Text.

![door-interaction-multiplayer-update-door-state.jpg](/img/interaction/door-interaction-multiplayer-update-door-state.jpg)

Override the OnRep_Open function and call your new **UpdateDoorState** event.

![door-interaction-multiplayer-onrepopen.jpg](/img/interaction/door-interaction-multiplayer-onrepopen.jpg)

Finally, open the class defaults for the interactable actor and choose Replicates in the details panel.

![door-interaction-multiplayer-replicates.jpg](/img/interaction/door-interaction-multiplayer-replicates.jpg)