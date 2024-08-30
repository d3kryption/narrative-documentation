---
sidebar_label: 'Installation'
---

# Installation

To get started, you need to download the Narrative Common UI from the Epic Marketplace and you can install it to the engine (default) or move it into your project's Plugins folder (you may have to create this folder).

Make sure to enable the Narrative Common UI plugin by going to edit->Plugins, and checking the box next to Narrative Common UI. (you may have to restart Unreal)

![InstalledPlugins](/img/common-ui/InstalledPlugins.png)

Then close Unreal and open your projects folder and navigate to the config folder. You should see your games' DefaultGame.ini file.

![DefaultGameIni.png](/img/common-ui/DefaultGameIni.png)

In your DefaultGame.ini, add the following sections and save.

```ini
[/Script/CommonInput.CommonInputSettings]
InputData=/NarrativeCommonUI/ControllerData/BP_NarrativeInputData.BP_NarrativeInputData_C

[CommonInputPlatformSettings_Windows CommonInputPlatformSettings]
DefaultInputType=MouseAndKeyboard
bSupportsMouseAndKeyboard=True
bSupportsTouch=False
bSupportsGamepad=True
DefaultGamepadName=Generic
bCanChangeGamepadType=True
+ControllerData=/NarrativeCommonUI/ControllerData/ControllerData_PC_Keyboard.ControllerData_PC_Keyboard_C
+ControllerData=/NarrativeCommonUI/ControllerData/ControllerData_PC_Gamepad_Xbox.ControllerData_PC_Gamepad_Xbox_C
```

Your DefaultGame.ini should now look something like this.

![ViewportChange.png](/img/common-ui/ViewportChange.png)

Start your project and go to edit then Project Settings and search for a viewport. Find the Game Viewport Client Class set it to be “CommonUI viewport client”.

