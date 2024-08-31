---
sidebar_label: 'Narrative HUD'
---

# Narrative HUD

To enable Narrative Common UI to add menus to your screen, you need to add the new widgets to an existing HUD widget.

### Adding to an **existing** HUD
If you already have a HUD setup you can add Narrative’s widgets to it.

Open your HUD up and add two widgets to the **WBP_NarrativeHUD** and **BP_Narrative3Overlay**. Make sure these are anchored to full screen.

![CreatingNarrativeHUD.jpg](/img/common-ui/CreatingNarrativeHUD.jpg)

### Creating a **new** HUD

If you don’t have your own HUD, go to the Content Drawer, right click and select Widget Blueprint.

![CreatingNarrativeHUD.jpg](/img/common-ui/CreatingNarrativeHUD.jpg)

Select User Widget and click Create. Name this WBP_HUD.

![UserWidget.jpg](/img/common-ui/UserWidget.jpg)

Open this up and add two widgets to the **WBP_NarrativeHUD** and **BP_Narrative3Overlay**. Make sure these are anchored to full screen.

![HUDCreation.jpg](/img/common-ui/HUDCreation.jpg)

Now open your PlayerController and on event begin play, create your HUD.

![CreatingNarrativeHUD.jpg](/img/common-ui/CreatingNarrativeHUD.jpg)Docs wil

Make sure you promote it to a variable so you can reuse it later.