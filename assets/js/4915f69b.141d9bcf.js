"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[7645],{96980:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(74848),r=a(28453);const i={sidebar_label:"Dialogue"},s="Dialogue",o={id:"pro/dialogue/index",title:"Dialogue",description:"Dialogue is a feature rich core system that allows you to create complex AAA dialogue with ease.",source:"@site/docs/pro/dialogue/index.md",sourceDirName:"pro/dialogue",slug:"/pro/dialogue/",permalink:"/narrative-documentation/pro/dialogue/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Dialogue"},sidebar:"tutorialSidebar",previous:{title:"Default Conditions",permalink:"/narrative-documentation/pro/conditions/default-conditions"},next:{title:"Speakers",permalink:"/narrative-documentation/pro/dialogue/speakers"}},d={},l=[{value:"Creation",id:"creation",level:2},{value:"Tabs",id:"tabs",level:3},{value:"Class Defaults",id:"class-defaults",level:3},{value:"Dialogue Properties",id:"dialogue-properties",level:3},{value:"Copy and pasting",id:"copy-and-pasting",level:2},{value:"Player Name",id:"player-name",level:2},{value:"Comments",id:"comments",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"dialogue",children:"Dialogue"})}),"\n",(0,n.jsx)(t.p,{children:"Dialogue is a feature rich core system that allows you to create complex AAA dialogue with ease."}),"\n",(0,n.jsx)(t.p,{children:"You can adjust anything from speakers, cameras, text, audio, sequences with a bunch of easy to understand settings."}),"\n",(0,n.jsx)(t.h2,{id:"creation",children:"Creation"}),"\n",(0,n.jsxs)(t.p,{children:["Create a new dialogue by right-clicking in the ",(0,n.jsx)(t.strong,{children:"Content Drawer"})," -> ",(0,n.jsx)(t.strong,{children:"Narrative"})," -> ",(0,n.jsx)(t.strong,{children:"Dialogue"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"creation-new-dialogue.png",src:a(69414).A+"",width:"851",height:"341"})}),"\n",(0,n.jsx)(t.h3,{id:"tabs",children:"Tabs"}),"\n",(0,n.jsxs)(t.p,{children:["Here you will see two tabs. The ",(0,n.jsx)(t.strong,{children:"Dialogue Graph"})," and the ",(0,n.jsx)(t.strong,{children:"Event Graph"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"The Event Graph"})," is where you can overwrite dialogue functions and add additional code to make your dialogue perform how you want."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"The Dialogue Graph"})," is how you build up the dialogue with ",(0,n.jsx)(t.strong,{children:"dialogue nodes"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"dialogue-graph.png",src:a(5550).A+"",width:"423",height:"108"})}),"\n",(0,n.jsx)(t.h3,{id:"class-defaults",children:"Class Defaults"}),"\n",(0,n.jsxs)(t.p,{children:["Click the ",(0,n.jsx)(t.strong,{children:"Class Defaults"})," button at the top, and we can now populate the ",(0,n.jsx)(t.strong,{children:"Dialogues default settings"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"creation-default-settings-class.png",src:a(83043).A+"",width:"752",height:"97"})}),"\n",(0,n.jsx)(t.p,{children:"The class defaults give you access to modify how your dialogue will work. It lets you change the speakers in the dialogue, camera settings, character settings and more."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"creation-default-settings.png",src:a(29252).A+"",width:"615",height:"964"})}),"\n",(0,n.jsx)(t.h3,{id:"dialogue-properties",children:"Dialogue Properties"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Speakers"}),(0,n.jsxs)(t.td,{children:["TArray<",(0,n.jsx)(t.a,{href:"/narrative-documentation/pro/dialogue/speakers",children:"FSpeakerInfo"}),">"]}),(0,n.jsx)(t.td,{children:"All the NPC speakers in this dialogue."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"PlayerSpeakerInfo"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/narrative-documentation/pro/dialogue/speakers#player-speakers",children:"FPlayerSpeakerInfo"})}),(0,n.jsx)(t.td,{children:"The speaker info for our player."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"PartySpeakerInfo"}),(0,n.jsxs)(t.td,{children:["TArray<",(0,n.jsx)(t.a,{href:"/narrative-documentation/pro/dialogue/speakers#player-speakers",children:"FPlayerSpeakerInfo"}),">"]}),(0,n.jsx)(t.td,{children:"For parties, each player in the party gets their own speaker info."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bFreeMovement"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"If true, narrative UI won't show mouse cursor and set input mode to UI. You'll still be able to control your player."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bCanBeExited"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"If false, default UI will disallow closing of the dialogue with ESC. You need to wait for it to end."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bAutoRotateSpeakers"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"If enabled, narrative will automatically rotate the speakers to face whoever is currently talking."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bAutoStopMovement"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Automatically stop the characters' movement when the dialogue begins to line up the camera shot correctly."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Priority"}),(0,n.jsx)(t.td,{children:"int32"}),(0,n.jsx)(t.td,{children:"Priority. Lower values are more important. If a dialogue attempts to play with a higher priority, it will be discarded."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DefaultHeadBoneName"}),(0,n.jsx)(t.td,{children:"FName"}),(0,n.jsx)(t.td,{children:'By default, Narrative will aim the camera at the bone named "head". If your head bone has a different name, input it here.'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DialogueBlendOutTime"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Time to blend back into the player's camera after the dialogue ends."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"PlayerAutoAdjustTransform"}),(0,n.jsx)(t.td,{children:"FTransform"}),(0,n.jsx)(t.td,{children:"In 1-on-1 dialogue, automatically adjusts the player's position so they stand the desired amount of units away."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bAdjustPlayerTransform"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"If enabled, we'll adjust the player to be at PlayerAutoAdjustTransform relative to the other speaker. Only used in 1-on-1 dialogue."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DialogueCameraShake"}),(0,n.jsxs)(t.td,{children:["TSubclassOf<",(0,n.jsx)(t.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Camera/UCameraShakeBase",children:"UCameraShakeBase"}),">"]}),(0,n.jsx)(t.td,{children:"Camera shake the dialogue camera will play."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DialogueSoundAttenuation"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/USoundAttenuation",children:"USoundAttenuation"})}),(0,n.jsx)(t.td,{children:"The attenuation to use for dialogue lines."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DefaultDialogueShot"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"./dialogue-sequence",children:"UNarrativeDialogueSequence"})}),(0,n.jsx)(t.td,{children:"If a shot, its speaker, etc., doesn't have a shot, the dialogue will use this one as a default."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"copy-and-pasting",children:"Copy and pasting"}),"\n",(0,n.jsx)(t.p,{children:"Dialogue can be a time-consuming task to write and often, writers will not use Unreal to write the story and script. Narrative supports a copy-and-paste standard to help create dialogue faster."}),"\n",(0,n.jsx)(t.p,{children:"You can create Dialogue simply by copying the speaker ID and text in the following format."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"SpeakerID: Text\n"})}),"\n",(0,n.jsx)(t.p,{children:"For example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Reubs: Hey! Welcome to Narrative\nDan: Thanks!\nPlayer: Who is Dan?\nReubs: Everyone knows Dan! You just need to decrypt it...\n"})}),"\n",(0,n.jsx)(t.p,{children:"Narrative will take this and automatically create the speakers if they do not exist, create all the nodes and joint them the best it can."}),"\n",(0,n.jsx)(t.p,{children:"Narrative does not let you import from Excel files, CSV\u2019s or any other media."}),"\n",(0,n.jsxs)(t.admonition,{type:"warning",children:[(0,n.jsx)(t.p,{children:"Copying and pasting dialogue nodes have been disabled until further notice."}),(0,n.jsx)(t.p,{children:"It was causing corruption in assets and until it can be resolved up to the high Narrative standard, it has been removed."})]}),"\n",(0,n.jsx)(t.h2,{id:"player-name",children:"Player Name"}),"\n",(0,n.jsxs)(t.p,{children:["Narrative Pro allows you to set a default name for your player. Simply go to ",(0,n.jsx)(t.strong,{children:"Edit"})," -> ",(0,n.jsx)(t.strong,{children:"Project Settings"})," -> ",(0,n.jsx)(t.strong,{children:"Narrative Pro"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Set the ",(0,n.jsx)(t.code,{children:"Default Username"})," to the name you want for the player."]}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.p,{children:"If you want to use the default username, leave this blank, and it will load the platform name (steam username, PlayStation PSN)"}),(0,n.jsxs)(t.p,{children:["You can also override this using the ",(0,n.jsx)(t.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/BlueprintAPI/Game/ChangeName?application_version=5.4",children:"ChangeName"})," node."]})]}),"\n",(0,n.jsx)(t.h2,{id:"comments",children:"Comments"}),"\n",(0,n.jsx)(t.p,{children:"You can add Unreal's comments around your dialogue to organise them or make them easier to debug at a glance."}),"\n",(0,n.jsxs)(t.p,{children:["Simply highlight your dialogue nodes and hit the ",(0,n.jsx)(t.strong,{children:"C"})," key to add the comment."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"dialogue-comments.png",src:a(65918).A+"",width:"515",height:"882"})})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},83043:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/creation-default-settings-class-07d339e590c8e7c7d66d6a2ba8334863.png"},29252:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/creation-default-settings-d12a8a28ff2b85a4bbab5270f1fd3f91.png"},69414:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/creation-new-dialogue-36317359cafe7f8615cfad662df33bb4.png"},65918:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/dialogue-comments-1ac4e02105f54037581004ff7ea2f6fa.png"},5550:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/dialogue-graph-40d6447920270486faf0aeaf836495cc.png"},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>o});var n=a(96540);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);