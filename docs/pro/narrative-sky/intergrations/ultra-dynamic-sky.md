---
sidebar_label: 'Ultra Dynamic Sky (UDS)'
---

# Ultra Dynamic Sky (UDS)

:::note

This update is only available in UDS version **8.6** and above due to some functions not being available.

:::

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/GT4OS-tgK9k?si=p2FTfRcvspRDE88h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Replacement

Start by installing and dragging UDS into your world and deleting **Narrative Sky**.

### Time of Day Animation

Open the **Ultra_Dynamic_Sky** blueprint and open the function **Time of Day Animation**.

In order to allow Narrative to control the time of day, you can modify the function to look like the below. This way, any events called to the Narrative Narrative Sky system will affect UDS.

<iframe src="https://blueprintue.com/render/rpmqzy3i/" width="100%" height="400" scrolling="no" allowfullscreen></iframe>

:::warning

Make sure you use the Narrative - Get Time of Day function. Not the UDS one.

:::

### UDS Weather saving

We need to allow UDS Weather to be saved. Open **Ultra_Dynamic_Weather** and add the interface for saving, [Narrative Savable Actor](../../saving/index.md).

![savable-actor.webp](//img/pro/narrative-sky/intergrations/savable-actor.webp)

Now open the construction script, and add the **Create Save Guid** function, then promote the **Out Guid** to a variable.  

![create-save-guid.webp](//img/pro/narrative-sky/intergrations/create-save-guid.webp)

Go into the Interfaces section and search for the **GetActorGuid** function. Connect your new **Out Guid** variable.

![uds-weather-guid.webp](//img/pro/narrative-sky/intergrations/uds-weather-guid.webp)

Finally, to save the weather, select the **Weather** variable from the variables section, then inside the **Details** panel, under **Advanced** tick **Save Game**.

![uds-weather-savegame.webp](//img/pro/narrative-sky/intergrations/uds-weather-savegame.webp)

### Events

Whilst the integration is technically done, you can further integrate UDS by adding a Narrative Event to change the weather.

Create a new [NarrativeEvent](../../events/index.md) called `NE_SetWeather` then add the below code to the ExecuteEvent.

<iframe src="https://blueprintue.com/render/f_sk9qtb/" width="100%" height="400" scrolling="no" allowfullscreen></iframe>