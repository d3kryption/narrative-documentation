---
sidebar_label: 'Notifications'
---

# Notifications

Narrative Pro has a builtin Notification system to allow you to update the player when things change.

The notification system comes with a sound and a widget.

The widget is called `WBP_NarrativeHUDNotification` and is located inside `/Plugins/NarrativePro/NarrativeCommonUI/Widgets`.

![notifications.webp](//img/pro/notifications/notifications.webp)

## Sound

To change the sound the notification system uses, you can either replace the Sound Wave or modify the widget.

### Sound wave

The sound wave is called `S_NotificationSound` and is located in `/Plugins/NarrativePro/NarrativeCommonUI/Audio`

### Widget

However, you may want to change how the sound plays, randomise or other reasons. For this, open the widget `WBP_NarrativeHUDNotification` located inside `/Plugins/NarrativePro/NarrativeCommonUI/Widgets`.

Then on Construct, modify the **PlaySound2D**.