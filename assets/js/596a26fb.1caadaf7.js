"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[7678],{49732:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var n=t(74848),i=t(28453);const a={sidebar_label:"Quests",sidebar_position:3},r="Quests",d={id:"quests-and-dialogue/quests/index",title:"Quests",description:"Quests is a large part of the Narrative framework. It allows you to create rich, content filled quests with minimal work.",source:"@site/docs/quests-and-dialogue/quests/index.md",sourceDirName:"quests-and-dialogue/quests",slug:"/quests-and-dialogue/quests/",permalink:"/quests-and-dialogue/quests/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Quests",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Dialogue Warnings",permalink:"/quests-and-dialogue/dialogue/warnings"},next:{title:"States",permalink:"/quests-and-dialogue/quests/states"}},l={},h=[{value:"Creation",id:"creation",level:2},{value:"Tabs",id:"tabs",level:3},{value:"Class Defaults",id:"class-defaults",level:3},{value:"Quest Properties",id:"quest-properties",level:3},{value:"Quest Logic",id:"quest-logic",level:2},{value:"Begin Quest",id:"begin-quest",level:2},{value:"Comments",id:"comments",level:2},{value:"Copy and pasting",id:"copy-and-pasting",level:2}];function o(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"quests",children:"Quests"})}),"\n",(0,n.jsx)(s.p,{children:"Quests is a large part of the Narrative framework. It allows you to create rich, content filled quests with minimal work."}),"\n",(0,n.jsx)(s.h2,{id:"creation",children:"Creation"}),"\n",(0,n.jsxs)(s.p,{children:["Create a new quest by right-clicking in the ",(0,n.jsx)(s.strong,{children:"Content Drawer"})," -> ",(0,n.jsx)(s.strong,{children:"Narrative"})," -> ",(0,n.jsx)(s.strong,{children:"Quest"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"quest-creation.webp",src:t(27879).A+"",width:"1183",height:"658"})}),"\n",(0,n.jsx)(s.h3,{id:"tabs",children:"Tabs"}),"\n",(0,n.jsxs)(s.p,{children:["Here you will see two tabs. The ",(0,n.jsx)(s.strong,{children:"Quest Graph"})," and the ",(0,n.jsx)(s.strong,{children:"Event Graph"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"The Event Graph"})," is where you can overwrite quest functions and add additional code to make your quest perform how you want."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"The Quest Graph"})," is how you build up the quest with ",(0,n.jsx)(s.a,{href:"/quests-and-dialogue/quests/branches",children:"quest branches"})," and ",(0,n.jsx)(s.a,{href:"./states",children:"quest states"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"quest-tabs.webp",src:t(69478).A+"",width:"319",height:"74"})}),"\n",(0,n.jsx)(s.h3,{id:"class-defaults",children:"Class Defaults"}),"\n",(0,n.jsxs)(s.p,{children:["Click the ",(0,n.jsx)(s.strong,{children:"Class Defaults"})," button at the top, and we can now populate the ",(0,n.jsx)(s.strong,{children:"Quests default settings"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"creation-default-settings-class.webp",src:t(92552).A+"",width:"752",height:"97"})}),"\n",(0,n.jsx)(s.p,{children:"The class defaults give you access to modify how your quest will work. It lets you change the quest title in the quest and more."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"quest-defaults.webp",src:t(90240).A+"",width:"553",height:"302"})}),"\n",(0,n.jsx)(s.h3,{id:"quest-properties",children:"Quest Properties"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"QuestName"}),(0,n.jsx)(s.td,{children:"FText"}),(0,n.jsx)(s.td,{children:"The name of the quest."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"QuestDescription"}),(0,n.jsx)(s.td,{children:"FText"}),(0,n.jsx)(s.td,{children:"The description of the overhaul quest, different to objectives."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Tracked"}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"Whether or not the quest is marked as tracked. If tracked the navigation markers will be added, otherwise these will be hidden."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"InheritableStates"}),(0,n.jsx)(s.td,{children:"TArray<UQuestState>"}),(0,n.jsxs)(s.td,{children:["Inherited quest ",(0,n.jsx)(s.a,{href:"/quests-and-dialogue/quests/states",children:"states"}),". E.g. your parent quest could have a state called ",(0,n.jsx)(s.strong,{children:"RanOutOfTime"})," and that way any child quests could inherit the ",(0,n.jsx)(s.strong,{children:"RanOutOfTime"})," state instead of having to manually have one added to every quest."]})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"quest-logic",children:"Quest Logic"}),"\n",(0,n.jsx)(s.p,{children:"Understanding how quests work is the key to making AAA quests in no-time."}),"\n",(0,n.jsxs)(s.p,{children:["In Narrative, quests are made up of ",(0,n.jsx)(s.a,{href:"/quests-and-dialogue/quests/branches",children:"branches"})," and ",(0,n.jsx)(s.a,{href:"/quests-and-dialogue/quests/states",children:"states"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"States"})," are points within your quest where you are waiting for the player to complete the next task."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Branches"})," are the tasks within your quest that you need to complete. A quest can have multiple branches connected to a single ",(0,n.jsx)(s.strong,{children:"state"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Each quest will start with a State - the ",(0,n.jsx)(s.a,{href:"/quests-and-dialogue/quests/states#quest-start",children:"QuestStart"}),", a series of ",(0,n.jsx)(s.strong,{children:"branches"})," and connected ",(0,n.jsx)(s.strong,{children:"states"}),", and then it will end with a ",(0,n.jsx)(s.strong,{children:"State"})," the ",(0,n.jsx)(s.a,{href:"/quests-and-dialogue/quests/states#quest-success",children:"QuestSuccess"})," or ",(0,n.jsx)(s.a,{href:"/quests-and-dialogue/quests/states#quest-failure",children:"QuestFailure"})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"quest-logic-1.webp",src:t(98362).A+"",width:"1553",height:"207"})}),"\n",(0,n.jsx)(s.p,{children:"A state can also have multiple branches to create different paths in the quest. We will explore this more later."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"quest-logic-2.webp",src:t(20731).A+"",width:"1600",height:"362"})}),"\n",(0,n.jsxs)(s.admonition,{type:"note",children:[(0,n.jsxs)(s.p,{children:["A common description is to think of ",(0,n.jsx)(s.strong,{children:"states"})," as rooms and ",(0,n.jsx)(s.strong,{children:"branches"})," as doors."]}),(0,n.jsxs)(s.p,{children:["You enter the room (",(0,n.jsx)(s.strong,{children:"state"}),") and wait. You then pick a door (",(0,n.jsx)(s.strong,{children:"branch"}),") and go through it which is you completing the task."]}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"quest-logic-3.webp",src:t(66008).A+"",width:"500",height:"500"})})]}),"\n",(0,n.jsx)(s.h2,{id:"begin-quest",children:"Begin Quest"}),"\n",(0,n.jsxs)(s.p,{children:["The main function to start quests is the ",(0,n.jsx)(s.strong,{children:"Begin Quest"})," function built into the ",(0,n.jsx)(s.a,{href:"../tales-component",children:"Narrative Component"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"quests-beginquest.webp",src:t(54570).A+"",width:"833",height:"353"})}),"\n",(0,n.jsx)(s.h2,{id:"comments",children:"Comments"}),"\n",(0,n.jsx)(s.p,{children:"You can add Unreal's comments around your quests to organise them or make them easier to debug at a glance."}),"\n",(0,n.jsxs)(s.p,{children:["Simply highlight your quest nodes and hit the ",(0,n.jsx)(s.strong,{children:"C"})," key to add the comment."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"quest-comments.webp",src:t(92160).A+"",width:"1290",height:"255"})}),"\n",(0,n.jsx)(s.h2,{id:"copy-and-pasting",children:"Copy and pasting"}),"\n",(0,n.jsxs)(s.admonition,{type:"warning",children:[(0,n.jsx)(s.p,{children:"Copying and pasting quest nodes have been disabled until further notice."}),(0,n.jsx)(s.p,{children:"It was causing corruption in assets and until it can be resolved up to the high Narrative standard, it has been removed."})]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},92552:(e,s,t)=>{t.d(s,{A:()=>n});const n="data:image/webp;base64,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"},92160:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/quest-comments-20bb62a048869245f286316b606a0ae7.webp"},27879:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/quest-creation-7372ef577b01baee8cbc6addcad6c539.webp"},90240:(e,s,t)=>{t.d(s,{A:()=>n});const n="data:image/webp;base64,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"},98362:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/quest-logic-1-3ac4e32a82dd3107d4abdfa6d523d2b1.webp"},20731:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/quest-logic-2-4ea0629b05cb8acece903379299e9cbe.webp"},66008:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/quest-logic-3-571181a884a0b50e84221c8ebf6ccf6e.webp"},69478:(e,s,t)=>{t.d(s,{A:()=>n});const n="data:image/webp;base64,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"},54570:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/quests-beginquest-216b72a2b1754966e268acf9717d1c59.webp"},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>d});var n=t(96540);const i={},a=n.createContext(i);function r(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);