---
sidebar_label: 'Narrative HUD'
---

# Narrative HUD

To enable Narrative Common UI to add menus to your screen, you need to add the new widgets to an existing HUD widget.

### Adding to an **existing** HUD
If you already have a HUD setup you can add Narrative’s widgets to it.

Open your HUD up and add two widgets to the **WBP_NarrativeHUD** and **BP_Narrative3Overlay**. Make sure these are anchored to full screen.

![CreatingNarrativeHUD.png](/img/common-ui/CreatingNarrativeHUD.png)

### Creating a **new** HUD

If you don’t have your own HUD, go to the Content Drawer, right click and select Widget Blueprint.

![CreatingNarrativeHUD.png](/img/common-ui/CreatingNarrativeHUD.png)

Select User Widget and click Create. Name this WBP_HUD.

![UserWidget.png](/img/common-ui/UserWidget.png)

Open this up and add two widgets to the **WBP_NarrativeHUD** and **BP_Narrative3Overlay**. Make sure these are anchored to full screen.

![HUDCreation.png](/img/common-ui/HUDCreation.png)

Now open your PlayerController and on event begin play, create your HUD.

![CreatingNarrativeHUD.png](/img/common-ui/CreatingNarrativeHUD.png)Docs wil

Make sure you promote it to a variable so you can reuse it later.