"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[6364],{40054:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var s=a(74848),n=a(28453);const i={sidebar_label:"Gameplay Effect Items"},r="Gameplay Effect Items",l={id:"pro/inventory/items/gameplay-effect-items",title:"Gameplay Effect Items",description:"Gameplay Effect Items are regular Narrative Items that are intended to work for GAS abilities granting effects to the character who picks it up.",source:"@site/docs/pro/inventory/items/gameplay-effect-items.md",sourceDirName:"pro/inventory/items",slug:"/pro/inventory/items/gameplay-effect-items",permalink:"/pro/inventory/items/gameplay-effect-items",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Gameplay Effect Items"},sidebar:"tutorialSidebar",previous:{title:"Weapons",permalink:"/pro/inventory/items/equipment/weapons"},next:{title:"Loot Tables",permalink:"/pro/inventory/loot-tables"}},c={},o=[{value:"Creation",id:"creation",level:2},{value:"Increasing health",id:"increasing-health",level:2},{value:"Decreasing health over time",id:"decreasing-health-over-time",level:2},{value:"Properties",id:"properties",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"gameplay-effect-items",children:"Gameplay Effect Items"})}),"\n",(0,s.jsxs)(t.p,{children:["Gameplay Effect Items are regular Narrative Items that are intended to work for ",(0,s.jsx)(t.a,{href:"../../abilities",children:"GAS abilities"})," granting effects to the character who picks it up."]}),"\n",(0,s.jsx)(t.h2,{id:"creation",children:"Creation"}),"\n",(0,s.jsxs)(t.p,{children:["Right-click in the ",(0,s.jsx)(t.strong,{children:"Content Drawer"})," -> ",(0,s.jsx)(t.strong,{children:"Narrative"})," -> ",(0,s.jsx)(t.strong,{children:"Narrative Items"})," -> ",(0,s.jsx)(t.strong,{children:"Gameplay Effect Item"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"gameplay-effect-items.webp",src:a(33299).A+"",width:"976",height:"427"})}),"\n",(0,s.jsxs)(t.p,{children:["Now you can choose what ",(0,s.jsx)(t.a,{href:"/pro/abilities/gameplay-effects",children:"gameplay effect"})," and values you want to apply."]}),"\n",(0,s.jsx)(t.h2,{id:"increasing-health",children:"Increasing health"}),"\n",(0,s.jsx)(t.p,{children:"A common use for a gameplay effect item is to have an item that heals the player."}),"\n",(0,s.jsxs)(t.p,{children:["You can set the Gameplay Effect Class to ",(0,s.jsx)(t.a,{href:"/pro/abilities/gameplay-effects#item-gameplay-effect",children:"GE_ItemGameplayEffect"})," then set a singular Caller Value to the gameplay tag ",(0,s.jsx)(t.code,{children:"SetByCaller.Health"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Finally, set the value to the amount of health you want to increase."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"increasing-health",src:a(58688).A+"",width:"866",height:"242"})}),"\n",(0,s.jsx)(t.h2,{id:"decreasing-health-over-time",children:"Decreasing health over time"}),"\n",(0,s.jsx)(t.p,{children:"Another common example would be decreasing health over time. Such as a poison like effect."}),"\n",(0,s.jsxs)(t.p,{children:["For this, you can set the Gameplay Effect Class to ",(0,s.jsx)(t.a,{href:"/pro/abilities/gameplay-effects#item-gameplay-effect",children:"GE_ItemGameplayEffect"})," then set two Caller Value."]}),"\n",(0,s.jsxs)(t.p,{children:["The first has a gameplay tag ",(0,s.jsx)(t.code,{children:"SetByCaller.Health"})," and a value of how much you want to decrease."]}),"\n",(0,s.jsxs)(t.p,{children:["The second  has a gameplay tag ",(0,s.jsx)(t.code,{children:"SetByCaller.Duration"})," and a value of how long (in seconds) you want it to last."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"decreasing-health-over-time",src:a(77647).A+"",width:"1358",height:"368"})}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"GameplayEffectClass"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/gameplay-effects-for-the-gameplay-ability-system-in-unreal-engine",children:"GameplayEffect"})}),(0,s.jsx)(t.td,{children:"The class of the gameplay effect to apply. This is an instant effect that overrides certain character attributes."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SetByCallerValues"}),(0,s.jsx)(t.td,{children:"TMap<FGameplayTag, float>"}),(0,s.jsx)(t.td,{children:'A map of tags and their corresponding values, used for specifying "SetByCaller" attributes in gameplay effects.'})]})]})]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},33299:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/gameplay-effect-items-06feb86aebaa14b88a3abc72ff01bb69.webp"},77647:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/decreasing-health-over-time-e00b4f4a736a097bdc8f44255200dc1e.bin"},58688:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/increasing-health-0e15cd335d2321825d524e0ebdf46dae.bin"},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>l});var s=a(96540);const n={},i=s.createContext(n);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);