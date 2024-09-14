---
sidebar_label: 'Community Tasks'
---

# Community Tasks

Narrative features a bunch of generic tasks that can be used by the vast majority of users. However, at some point you will need to create your own task.

It's really easy to do but here are some tasks created by the community that will be useful from time to time.

## Go To Location Trigger

The default [GoToLocation task](./defaulttasks.md#go-to-location) is often enough for an objective to be met. 

However, sometimes you may need the player to reach a very specific location such as a door or location which has a custom shape. 

The GoToLocation task measures the player's distance meaning being next to the door would also complete it.

The GoToLocationTrigger is a custom task you can create by creating a blueprint trigger and adding an Event Dispatcher when it overlaps.

Your new Narrative task connects to this event dispatcher to complete the task when the player overlaps. 

It gives you more fine-grain control over specifically where the player has to go.

### Blueprint

<iframe src="https://blueprintue.com/render/kfmufs5c/" width="100%" height="400" scrolling="no" allowfullscreen></iframe>