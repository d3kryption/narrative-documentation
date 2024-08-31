---
sidebar_label: 'Door example continued'
sidebar_position: 1
---

# Door example continued

In this instance, we are going to tell it to open and close the door. Create a boolean to store the state of the door called Open?.

![door-example-variables.jpg](/img/interaction/door-example-variables.jpg)

Now select the **NarrativeInteractable** component then override the **OnInteract** event.

Reverse the state of the Open variable by adding a NOT then setting the open variable.

![door-example-not-open.jpg](/img/interaction/door-example-not-open.jpg)

After this, drag in the **NarrativeInteractable** and choose **Set Interactable Action Text** to set the text from Open to Close depending on the doors state.

![door-example-interaction-set.jpg](/img/interaction/door-example-interaction-set.jpg)

From the New Action Text we will make a select node that will choose the Open or Closed text depending on the boolean Open.

![door-example-interaction-select.jpg](/img/interaction/door-example-interaction-select.jpg)

Next add a branch afterward to check the state.

![door-example-interaction-branch.jpg](/img/interaction/door-example-interaction-branch.jpg)

Next we are going to add a small timeline to control the door. Connect the true to play, then the false to reverse.

![door-example-interaction-timeline.jpg](/img/interaction/door-example-interaction-timeline.jpg)

Double-click the timeline to start editing it. From the track button add a float track.

Right click and add a keyframe. Set it's time to 0 and value to 0. Next Right click again adding another keyframe but this time set its time to 1 and value to 1.

![door-example-keyframes.jpg](/img/interaction/door-example-keyframes.jpg)

Go back to the Event Graph then drag your DoorMesh into your graph and choose **SetRelativeRotation**.

![door-example-interaction-set-rotation.jpg](/img/interaction/door-example-interaction-set-rotation.jpg)

Right-click the rotator and choose split struct pin. Drag from the OpenDoor float of the timeline and choose multiply. Set this to the angle that the door will open to so set it to 90 then connect the multiply node to the Z (yaw) of the rotation.

![door-example-interaction-connection.jpg](/img/interaction/door-example-interaction-connection.jpg)