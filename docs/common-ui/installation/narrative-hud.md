---
sidebar_label: 'Narrative HUD'
---

# Narrative HUD

To enable Narrative Common UI to add menus to your screen, you need to add the new widgets to an existing HUD widget.

### Adding to an **existing** HUD
If you already have a HUD setup you can add Narrative’s widgets to it.

Open your HUD up and add two widgets to the **WBP_NarrativeHUD** and **BP_Narrative3Overlay**. Make sure these are anchored to full screen.

![CreatingNarrativeHUD.webp](/img/common-ui/CreatingNarrativeHUD.webp)

### Creating a **new** HUD

If you don’t have your own HUD, go to the Content Drawer, right click and select Widget Blueprint.

![CreatingNarrativeHUD.webp](/img/common-ui/CreatingNarrativeHUD.webp)

Select User Widget and click Create. Name this WBP_HUD.

![UserWidget.webp](/img/common-ui/UserWidget.webp)

Open this up and add two widgets to the **WBP_NarrativeHUD** and **BP_Narrative3Overlay**. Make sure these are anchored to full screen.

![HUDCreation.webp](/img/common-ui/HUDCreation.webp)

Now open your PlayerController and on event begin play, create your HUD.

![CreatingNarrativeHUD.webp](/img/common-ui/CreatingNarrativeHUD.webp)Docs wil

Make sure you promote it to a variable so you can reuse it later.