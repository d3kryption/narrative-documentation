"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[3985],{54632:(e,t,a)=>{a.d(t,{Ay:()=>I,RM:()=>C});var r=a(74848),n=a(28453),s=a(53863),o=a(4823),i=a(29458),d=a(37399);function c({type:e}){const t={div:"div",span:"span",...(0,n.R)()};switch(e.toLowerCase()){case"feature":return(0,r.jsxs)(t.div,{className:"avatar__type feature",children:[(0,r.jsx)(d.In,{icon:"ic:round-star",height:"20"}),(0,r.jsx)(t.span,{children:"Feature"})]});case"misc":return(0,r.jsxs)(t.div,{className:"avatar__type misc",children:[(0,r.jsx)(d.In,{icon:"fa6-solid:box-open",height:"20"}),(0,r.jsx)(t.span,{children:"Misc"})]});case"bugfix":return(0,r.jsxs)(t.div,{className:"avatar__type bugfix",children:[(0,r.jsx)(d.In,{icon:"mdi:bug",height:"20"}),(0,r.jsx)(t.span,{children:"Bug fix"})]})}}function u({items:e}){const t={li:"li",ul:"ul",...(0,n.R)()};return e?(0,r.jsx)(t.ul,{className:"desc-list",children:e.map(((e,a)=>(0,r.jsx)(t.li,{children:e},a)))}):""}function l(e){return(0,r.jsxs)(s.A,{children:[(0,r.jsx)(o.A,{children:(0,r.jsx)("div",{className:"avatar avatar--vertical",children:(0,r.jsxs)("div",{className:"avatar__intro card-header",children:[(0,r.jsx)("div",{className:"avatar__name",children:(0,r.jsx)("label",{children:e.item.name})}),(0,r.jsx)(c,{type:e.item.type})]})})}),(0,r.jsxs)(i.A,{style:{backgroundColor:"black",color:"silver"},className:"padding-vert--md",textAlign:"left",children:[e.item.desc,(0,r.jsx)(u,{items:e.item.descList})]})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}function p({data:e}){let t=[];return e.forEach(((e,a)=>{t.push((0,r.jsx)(m,{item:e},a))})),t}function y(e){return(0,r.jsx)(p,{data:e.data})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(y,{...e})}):y(e)}var v=a(96540),g=a(34164);function f(e){let{children:t,className:a,style:n}=e;return(0,r.jsx)("div",{className:"container center columns",children:(0,r.jsx)("div",{className:(0,g.A)("row",a),style:n,children:t})})}function b(e){let{header:t,children:a,className:n,style:s}=e;return(0,r.jsxs)("div",{className:(0,g.A)("col column",n),style:s,children:[(0,r.jsx)("div",{children:(0,r.jsx)("h2",{children:t})}),(0,r.jsx)("div",{className:"column-children",children:a})]})}const w=JSON.parse('[{"product":["Tales"],"year":2025,"quarter":1,"type":"Feature","name":"Improved dialogue camera","desc":"A new camera system will be implemented making dialogue cameras far easier and higher quality."},{"product":["Tales"],"year":2025,"quarter":1,"type":"Feature","name":"Product rename - Tales","desc":"The Narrative Quests & Dialogues product will be renamed to Narrative Tales."},{"product":["Tales"],"year":2024,"quarter":4,"type":"Feature","name":"3.6.0 release","desc":"Quests & Dialogue version 3.6.0 major release.","descList":["Added PreQuestStarted event that runs before BeginQuest runs","Added Set/Get speaker code to C++","Added SetTracked function to track / untrack quests","Added Sound attenuation to change how sound is played","Added back in cross platform support","Added dialogue priority to block lower priority dialogue from starting","Added gameplay tags","Added player adjust transform to stop the player from moving","Cleaned up unused C++ references","Go to location task now accepts just a tag","Hint texts will now use GetStringVariable","Keyboard movement in dialogue now fixed","Optimised a bunch of blueprints","Refire event on load bool","Removed InputMode: UI only warning","Replaced StartFromID with Params","Tidied up UI blueprint code","Unused return bool removed from Narrative Events","UpdatedSequence player to new GetSequencePlayer","Using soft classes instead of hard references in C++"]},{"product":["Tales"],"year":2024,"quarter":4,"type":"Bugfix","name":"Events will not run on load","desc":"When loading a save game, events will now no longer run on each node."},{"product":["Tales"],"year":2024,"quarter":4,"type":"Feature","name":"Event loading option","desc":"When loading a save game, events now have the option to choose whether they load every time or not."},{"product":["Inventory"],"year":2024,"quarter":4,"type":"Feature","name":"2.0.0 release","desc":"Inventory version 2.0.0 major release."},{"product":["Inventory"],"year":2024,"quarter":4,"type":"Feature","name":"Loot Tables","desc":"Loot tables added for better item management."},{"product":["Inventory"],"year":2024,"quarter":4,"type":"Feature","name":"Data Asset for Narrative Item Collections","desc":"Added DataAsset to bundle items."},{"product":["Inventory"],"year":2024,"quarter":4,"type":"Feature","name":"Soft References for Items","desc":"Soft references now used for items."},{"product":["Inventory"],"year":2024,"quarter":4,"type":"Feature","name":"Give Default Items Function","desc":"New function to give default items."},{"product":["Inventory"],"year":2024,"quarter":4,"type":"Feature","name":"Equip and Unequip Montages","desc":"Added equip/unequip montages."},{"product":["Inventory"],"year":2024,"quarter":4,"type":"Feature","name":"Loot Source on End Looting","desc":"Added loot source on end looting."},{"product":["Inventory"],"year":2024,"quarter":4,"type":"Feature","name":"Gameplay Tags for Narrative Items","desc":"Added gameplay tags to items."},{"product":["Inventory"],"year":2024,"quarter":4,"type":"Feature","name":"Item Stats Struct","desc":"Updated ItemStats to a struct."},{"product":["Inventory"],"year":2024,"quarter":4,"type":"Feature","name":"Description Override in Blueprints","desc":"Blueprints can now override description."},{"product":["Inventory"],"year":2024,"quarter":4,"type":"Feature","name":"Auto-Use Item","desc":"Added bool to auto-use items."},{"product":["Inventory"],"year":2024,"quarter":4,"type":"Feature","name":"Set Inventory Name Function","desc":"New function to set inventory name."},{"product":["Inventory"],"year":2024,"quarter":4,"type":"Feature","name":"Throwable Weapon Slot","desc":"Added throwable weapon slot."},{"product":["Inventory"],"year":2024,"quarter":4,"type":"Feature","name":"Use Sound for Narrative Items","desc":"Added sound when items are used."},{"product":["Inventory"],"year":2024,"quarter":4,"type":"Feature","name":"Vendor Inventory Merge","desc":"Merged vendor and regular inventories."},{"product":["Inventory"],"year":2024,"quarter":4,"type":"Bugfix","name":"BPC_HasItem Soft Classes","desc":"Updated BPC_HasItem to use soft classes."},{"product":["Inventory"],"year":2024,"quarter":4,"type":"Bugfix","name":"Interactable_Loot_Locked Soft References","desc":"Updated Interactable_Loot_Locked soft references."},{"product":["Inventory"],"year":2024,"quarter":4,"type":"Bugfix","name":"Interactable_Loot Soft References","desc":"Updated Interactable_Loot soft references."},{"product":["Inventory"],"year":2024,"quarter":4,"type":"Bugfix","name":"Redirector Fixes","desc":"Fixed several redirectors."},{"product":["Inventory"],"year":2024,"quarter":4,"type":"Bugfix","name":"Vendor Equippable Items Fix","desc":"Vendors won\'t show equipped items."},{"product":["Inventory"],"year":2024,"quarter":4,"type":"Bugfix","name":"Inventory Save Fail","desc":"Inventory now returns false if save fails."},{"product":["Inventory"],"year":2024,"quarter":4,"type":"Misc","name":"Hotbar Delay Note","desc":"Hotbar delayed; not ready yet."},{"product":["Navigator"],"year":2024,"quarter":4,"type":"Feature","name":"Layered map tiles","desc":"Levels can now contain multiple map tiles."},{"product":["Navigator"],"year":2024,"quarter":4,"type":"Bugfix","name":"NT_GoToPointOInterest task","desc":"NT_GoToPointOInterest was re-written to be more efficient."},{"product":["Navigator"],"year":2024,"quarter":4,"type":"Bugfix","name":"Controller fixes","desc":"More fixes for controllers in world map."},{"product":["Inventory"],"year":2025,"quarter":1,"type":"Bugfix","name":"Equipment Cloth Physics","desc":"Cloth Physics will now show in the inventory screen."},{"product":["Inventory"],"year":2025,"quarter":2,"type":"Feature","name":"Hotbar","desc":"Inventory hotbar for quick switching equipment / items."},{"product":["Inventory"],"year":2025,"quarter":1,"type":"Feature","name":"Remove single item function","desc":"A function to remove a single item with a quantity."},{"product":["Interaction"],"year":2024,"quarter":4,"type":"Bugfix","name":"All interactions will be checked","desc":"When finding an interaction, every interaction will be checked rather than skipping at the first one."},{"product":["Pro"],"year":2024,"quarter":4,"type":"Feature","name":"1.1 release","desc":"Pro version 1.1.0 major release.","descList":["Radial Menus will now be included with the plugin.","Save Metadata has been added, and save slots show additional details like username and location.","Settings menu has gamepad support, FOV slider, and more improvements.","Numerous bugfixes make the plugin more stable.","Factions now use Gameplay Tags instead of a C++ Enum/Data Asset.","NPC Subsystem now caches both Player and NPC characters for quick access.","Narrative Events allow defining targets for flexible inventory operations.","Conditions allow targets, so conditions work for NPCs and Characters.","Events/Conditions can target NPCs, Players, or Both.","Character Definitions have been improved, and the Game Mode assigns player definitions for multiplayer.","NPC Definitions support random levels and scalable attributes.","Character Definitions now include OwnedTags for setting character states.","Characters will now focus less on Metahuman\'s structures and instead be more generic.","Character Creator is customizable with options for clothing, hair, morph targets, and more.","Premade characters are included with the Character Creator.","Character Creator allows mesh customization and morph targets.","Character Creator supports Metahuman groom assets.","Character Info option allows setting username in creator menu.","Game creation can load the character creator at different points.","Time of Day system has been added.","Time of Day system includes a skybox that updates lighting.","Time of Day settings are configurable in Project Settings.","Async nodes allow scripting items like alarms with Time of Day events.","Advance Time node allows RPG-like wait feature.","Combat updates include Attack Tokens, Combat UI, and Magic Weapons.","Magic weapons now include effects and visuals for different weapon types.","Melee Combat includes out-of-the-box animations.","Weapon slots support has been added with Gameplay Tags.","A weapon wheel is added to manage multiple weapon slots.","Combat UI improvements add damage numbers and health bars.","AI improvements include NPC Activities for saved blackboard states.","NPC Activities manage saved blackboard and behavior tree states.","NPC Schedules allow time-based NPC activities.","Settlement Schedules define activities for groups of NPCs.","Inventory Quick Use menu allows quick access to favorited items.","Inventory items are now automatically saved with specified variables."]},{"product":["Pro"],"year":2024,"quarter":4,"type":"Feature","name":"Radial Menus","desc":"Radial Menus are now included with the plugin. We\'ll be shipping two - a Weapon Wheel and a Quick Use Wheel, and users can create their own."},{"product":["Pro"],"year":2024,"quarter":4,"type":"Feature","name":"Save Metadata","desc":"Save Metadata has been added. Save slots now show additional details such as username, in-game location, and time of save."},{"product":["Pro"],"year":2024,"quarter":4,"type":"Feature","name":"Settings Menu","desc":"Settings menu has been improved with gamepad support, an FOV slider, and more enhancements."},{"product":["Pro"],"year":2024,"quarter":4,"type":"Bugfix","name":"Bugfixes","desc":"Numerous bugfixes have been implemented, making the plugin more stable."},{"product":["Pro"],"year":2024,"quarter":4,"type":"Feature","name":"Factions","desc":"Factions now use Gameplay Tags instead of a C++ Enum/Data Asset, making them lightweight and easier to manage."},{"product":["Pro"],"year":2024,"quarter":4,"type":"Feature","name":"NPC Subsystem","desc":"The NPC Subsystem caches Player and NPC characters for quick access, and may be renamed to Character Subsystem in future updates."},{"product":["Pro - Narrative Events / Conditions"],"year":2024,"quarter":4,"type":"Feature","name":"Targeting","desc":"Events and Conditions now allow defining a target, enabling actions like AddItemToInventory and checks like HasItem or HasCurrency to apply to both NPCs and Characters."},{"product":["Pro - Narrative Events / Conditions"],"year":2024,"quarter":4,"type":"Feature","name":"Target Specification","desc":"Events and Conditions can specify whether they should target NPCs, Players, or Both, and the targets dropdown menu adjusts accordingly."},{"product":["Pro - Narrative Events / Conditions"],"year":2024,"quarter":4,"type":"Feature","name":"Flexible Application","desc":"Narrative Events and Conditions are now more flexible, allowing consistent application of game logic across different target types."},{"product":["Pro"],"year":2024,"quarter":4,"type":"Feature","name":"Events - Target","desc":"Narrative Events now allow targeting, enabling events like AddItemToInventory for both NPCs and Characters."},{"product":["Pro"],"year":2024,"quarter":4,"type":"Feature","name":"Conditions - Target","desc":"Conditions can now specify targets, so conditions like HasItem and HasCurrency apply to NPCs and Characters."},{"product":["Pro - Character Creator"],"year":2024,"quarter":4,"type":"Feature","name":"Character Creator","desc":"Character Creator is now available with customizable options including clothing, hair, material parameters, morph targets, and more."},{"product":["Pro - Character Creator"],"year":2024,"quarter":4,"type":"Feature","name":"Included Assets","desc":"No need to import Metahumans - we include a premade male and female character with items and morphs."},{"product":["Pro - Character Creator"],"year":2024,"quarter":4,"type":"Feature","name":"Mesh Options","desc":"Mesh options in the Character Creator are configurable with custom material parameters and morph targets."},{"product":["Pro - Character Creator"],"year":2024,"quarter":4,"type":"Feature","name":"Grooms","desc":"Character Creator now supports Metahuman groom assets for added customization."},{"product":["Pro - Character Creator"],"year":2024,"quarter":4,"type":"Feature","name":"Character Info","desc":"The Character Info option in the creator allows setting a username directly from the creator menu."},{"product":["Pro - Character Creator"],"year":2024,"quarter":4,"type":"Feature","name":"Launching","desc":"Settings allow control over whether the Character Creator loads at the start or after an intro cinematic."},{"product":["Pro - Time of Day"],"year":2024,"quarter":4,"type":"Feature","name":"Overview","desc":"Time of Day system has been added to the plugin."},{"product":["Pro - Time of Day"],"year":2024,"quarter":4,"type":"Feature","name":"Sky","desc":"The Time of Day system includes a skybox (BP_NarrativeSky) that updates lighting based on time. An Ultra Dynamic Sky swap video is available."},{"product":["Pro - Time of Day"],"year":2024,"quarter":4,"type":"Feature","name":"Time","desc":"Time of Day settings are configurable in Project Settings, allowing day/night length, sunset/rise times, and more."},{"product":["Pro - Time of Day"],"year":2024,"quarter":4,"type":"Feature","name":"Scripting","desc":"Async nodes allow scripting items like alarms, streetlamps, and other events tied to Time of Day."},{"product":["Pro - Time of Day"],"year":2024,"quarter":4,"type":"Feature","name":"Advance Time","desc":"The Advance Time node adds an RPG-like \'Wait\' feature, adjusting the game\'s time."},{"product":["Pro - Combat"],"year":2024,"quarter":4,"type":"Feature","name":"Overview","desc":"Combat system updates include Attack Tokens, Combat UI, Magic Weapons, and more."},{"product":["Pro - Combat"],"year":2024,"quarter":4,"type":"Feature","name":"Magic Weapons","desc":"Magic weapons include new visuals for weapon types like wands, with lightning and fireball effects."},{"product":["Pro - Combat"],"year":2024,"quarter":4,"type":"Feature","name":"Melee Combat","desc":"Melee Combat now includes out-of-the-box animations, eliminating the need for additional melee assets."},{"product":["Pro - Combat"],"year":2024,"quarter":4,"type":"Feature","name":"Weapon Slots","desc":"Weapon slots now use Gameplay Tags, allowing easy expansion without C++ changes."},{"product":["Pro - Combat"],"year":2024,"quarter":4,"type":"Feature","name":"Weapon Wheel","desc":"A procedurally generated weapon wheel allows switching between multiple weapon slots seamlessly."},{"product":["Pro - Combat"],"year":2024,"quarter":4,"type":"Feature","name":"Combat UI","desc":"Combat UI improvements include damage numbers and health bars, with toggling options in project settings."},{"product":["Pro - AI"],"year":2024,"quarter":4,"type":"Feature","name":"Overview","desc":"Massive improvements to AI, including NPC Activities that save blackboard and behavior tree state."},{"product":["Pro - AI"],"year":2024,"quarter":4,"type":"Feature","name":"Activities","desc":"NPC Activities manage behavior serialization, automatically saving and loading blackboard and tree states."},{"product":["Pro - AI"],"year":2024,"quarter":4,"type":"Feature","name":"NPC Schedules","desc":"NPC Schedules use the Time of Day system for timed activities, like NPC sleep and work cycles."},{"product":["Pro - AI"],"year":2024,"quarter":4,"type":"Feature","name":"Settlement Schedules","desc":"Schedules can define group activities at the settlement level, synchronizing NPC interactions."},{"product":["Pro - Inventory"],"year":2024,"quarter":4,"type":"Feature","name":"Quick Use","desc":"Favorited items can now be quickly accessed via the Quick Use Radial menu."},{"product":["Pro - Inventory"],"year":2024,"quarter":4,"type":"Feature","name":"Save Metadata","desc":"Inventory items are now automatically saved with specified variables, maintaining save persistence."},{"product":["Pro","Tales","Inventory","Common UI","Navigator","Interaction"],"year":2024,"quarter":4,"type":"Misc","name":"Unreal 5.5 release","desc":"This product will now be updated to support Unreal 5.5."},{"product":["Common UI"],"year":2024,"quarter":4,"type":"Bugfix","name":"Missing images","desc":"The missing images T_vingette and T_Mark will be fixed."}]');function x(e){const t={a:"a",div:"div",li:"li",option:"option",p:"p",select:"select",ul:"ul",...(0,n.R)()};const a=function(){let e=[{product:"Pro",subTabs:[]},{product:"Interaction",subTabs:[]},{product:"Inventory",subTabs:[]},{product:"Tales",subTabs:[],oldName:"Tales (Quests & Dialogue)"},{product:"Navigator",subTabs:[]},{product:"Common UI",subTabs:[]}];return w?.forEach((t=>{t.product.forEach((t=>{const a=t.split(" - ")[0];let r;if(-1!==t.indexOf("-"))return r=e.find((e=>e.product===a)),void(r?r.subTabs.includes(t)||r.subTabs.push(t):e.push({product:a,subTabs:[t]}));r=e.find((e=>e.product===t)),r||e.push({product:t,subTabs:[]})}))})),e=e.map((e=>(e.subTabs&&(e.subTabs=e.subTabs.sort(((e,t)=>e>t?1:-1))),e))).sort(((e,t)=>e.product>t.product?1:-1)),e}(),[s,o]=(0,v.useState)(a[0].product);function i({index:e,row:a}){return(0,r.jsx)(t.li,{className:"tabs__item "+(s===a.product?"tabs__item--active":""),onClick:()=>o(a.product),children:a.oldName??a.product},e)}function d({index:e,row:a}){const[n,i]=(0,v.useState)(s===a.product||a.subTabs.includes(s)?s:a.product);function d(e){o(e),i(e)}return(0,r.jsxs)(t.li,{className:"tabs__item padding-0 "+(s===a.product||a.subTabs.includes(s)?"tabs__item--active":""),children:[(0,r.jsx)(t.div,{className:"tab-select-group",onClick:()=>d(a.product),children:s===a.product||a.subTabs.includes(s)?s:n}),(0,r.jsxs)(t.div,{className:"select-wrapper",children:[(0,r.jsx)(t.div,{className:"select-div"}),(0,r.jsxs)(t.select,{defaultValue:n,onChange:e=>d(e.target.selectedOptions[0].value),children:[(0,r.jsx)(t.option,{value:a.product,onClick:()=>d(a.product),children:a.product}),a.subTabs.map(((e,a)=>(0,r.jsx)(t.option,{className:"tabs__item",value:e,onClick:()=>d(e),children:e},a)))]})]})]},e)}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.ul,{className:"tabs",children:a.map(((e,t)=>!e.subTabs.length&&(0,r.jsx)(i,{index:t,row:e},t)||e.subTabs.length&&(0,r.jsx)(d,{index:t,row:e},t)))}),(0,r.jsx)(t.div,{children:function(e,a){let n=[],s=!1;return e.forEach(((e,t)=>{const o=w?.filter((t=>t.product.includes(a)&&t.year===e.year&&t.quarter===e.quarter)),i=!!o.length;i&&(s=!0);const d=i?(0,r.jsx)(h,{data:o}):"No updates planned at the moment.";n.push((0,r.jsx)(b,{className:"text--left",header:e.header,children:d},t))})),s?(0,r.jsx)(f,{children:n}):(0,r.jsxs)(t.div,{children:[(0,r.jsx)(t.p,{children:"No planned work for this module."}),(0,r.jsxs)(t.p,{children:["Feel free to recommend ideas in the ",(0,r.jsx)(t.a,{href:"https://discord.gg/qyVJmpQ2Pn",children:"Discord"}),"!"]})]})}(e.columns,s)},s)]})}const C=[];function q(e){return(0,r.jsx)(x,{columns:e.columns})}function I(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(q,{...e})}):q(e)}},55670:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>v,frontMatter:()=>u,metadata:()=>m,toc:()=>y});var r=a(74848),n=a(28453),s=a(54632);function o(e){const t=[];for(let a=1;a<5;a++)t.push({quarter:a,year:e,header:`Q${a} - ${e}`});return t}const i=[...s.RM];function d(e){return(0,r.jsx)(s.Ay,{columns:o(e.year)})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}const u={sidebar_label:"2024",hide_table_of_contents:!0},l="Roadmap",m={id:"roadmap/2024",title:"Roadmap",description:"",source:"@site/docs/roadmap/2024.md",sourceDirName:"roadmap",slug:"/roadmap/2024",permalink:"/roadmap/2024",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"2024",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Roadmap",permalink:"/roadmap/"},next:{title:"Tales (Quests & Dialogue)",permalink:"/tales/"}},p={},y=[...i];function h(e){const t={h1:"h1",header:"header",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"roadmap",children:"Roadmap"})}),"\n","\n",(0,r.jsx)(c,{year:2024})]})}function v(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},29458:(e,t,a)=>{a.d(t,{A:()=>s});a(96540);var r=a(34164),n=a(74848);const s=e=>{let{className:t,style:a,children:s,textAlign:o,variant:i,italic:d=!1,noDecoration:c=!1,transform:u,breakWord:l=!1,truncate:m=!1,weight:p}=e;const y=o?`text--${o}`:"",h=i?`text--${i}`:"",v=d?"text--italic":"",g=c?"text-no-decoration":"",f=u?`text--${u}`:"",b=l?"text--break":"",w=m?"text--truncate":"",x=p?`text--${p}`:"";return(0,n.jsx)("div",{className:(0,r.A)("card__body",t,y,f,h,v,g,b,w,x),style:a,children:s})}},4823:(e,t,a)=>{a.d(t,{A:()=>s});a(96540);var r=a(34164),n=a(74848);const s=e=>{let{className:t,style:a,children:s,textAlign:o,variant:i,italic:d=!1,noDecoration:c=!1,transform:u,breakWord:l=!1,truncate:m=!1,weight:p}=e;const y=o?`text--${o}`:"",h=i?`text--${i}`:"",v=d?"text--italic":"",g=c?"text-no-decoration":"",f=u?`text--${u}`:"",b=l?"text--break":"",w=m?"text--truncate":"",x=p?`text--${p}`:"";return(0,n.jsx)("div",{className:(0,r.A)("card__header",t,y,f,h,v,g,b,w,x),style:a,children:s})}},53863:(e,t,a)=>{a.d(t,{A:()=>s});a(96540);var r=a(34164),n=a(74848);const s=e=>{let{className:t,style:a,children:s,shadow:o}=e;const i=o?`item shadow--${o}`:"";return(0,n.jsx)("div",{className:(0,r.A)("card",t,i),style:a,children:s})}}}]);