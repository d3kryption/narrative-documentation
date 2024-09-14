"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[564],{2727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var r=n(74848),i=n(28453);const o={sidebar_label:"Inventory Component",sidebar_position:1},s="Inventory Component",d={id:"inventory/inventory-component/index",title:"Inventory Component",description:"The Inventory component is the core component to allow the player to use the Inventory system.",source:"@site/docs/inventory/inventory-component/index.md",sourceDirName:"inventory/inventory-component",slug:"/inventory/inventory-component/",permalink:"/narrative-documentation/inventory/inventory-component/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Inventory Component",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"UI",permalink:"/narrative-documentation/inventory/installation/ui"},next:{title:"Functions",permalink:"/narrative-documentation/inventory/inventory-component/functions"}},a={},h=[{value:"Getting the inventory",id:"getting-the-inventory",level:2},{value:"Get Narrative Inventory From Target",id:"get-narrative-inventory-from-target",level:3},{value:"Inventory Component",id:"inventory-component-1",level:3},{value:"Saving &amp; Loading",id:"saving--loading",level:2},{value:"Properties",id:"properties",level:2},{value:"FItemWithQuantity Properties",id:"fitemwithquantity-properties",level:3}];function l(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"inventory-component",children:"Inventory Component"})}),"\n",(0,r.jsx)(t.p,{children:"The Inventory component is the core component to allow the player to use the Inventory system."}),"\n",(0,r.jsx)(t.p,{children:"It allows the player to use their own inventory, equipment, trading or shops."}),"\n",(0,r.jsx)(t.h2,{id:"getting-the-inventory",children:"Getting the inventory"}),"\n",(0,r.jsx)(t.p,{children:"There are multiple ways to get the inventory to what best suits the position you are in."}),"\n",(0,r.jsx)(t.h3,{id:"get-narrative-inventory-from-target",children:"Get Narrative Inventory From Target"}),"\n",(0,r.jsx)(t.p,{children:"This node will be the most common method of getting the inventory. Simply drag from your actor and choose GetNarrativeInventoryFromTarget. This will give you the inventory from whichever target you are interacting with. Whether it's the chest you are looking at via the line trace or the shopkeeper you are trading with via the dialogue."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"inventory-component-from-target.png",src:n(32068).A+"",width:"324",height:"93"})}),"\n",(0,r.jsx)(t.h3,{id:"inventory-component-1",children:"Inventory Component"}),"\n",(0,r.jsx)(t.p,{children:"On some occasions you will have direct access to the inventory component. For example, you could be at a vendor trying to buy and sell items but you could put some code that randomizes the inventory of the shopkeeper. This will most likely sit in the shop giving you direct access to the component."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"inventory-component.png",src:n(18057).A+"",width:"253",height:"109"})}),"\n",(0,r.jsx)(t.h2,{id:"saving--loading",children:"Saving & Loading"}),"\n",(0,r.jsx)(t.p,{children:"Inventory automatically comes with a save and load feature to allow you to save inventories and states."}),"\n",(0,r.jsxs)(t.p,{children:["To start saving & loading, you can call the Save or Load functions from the ",(0,r.jsx)(t.strong,{children:"Inventory"})," component."]}),"\n",(0,r.jsx)(t.p,{children:"In this example, we save and load when we press the 1 and 2 keys."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"save-load.png",src:n(97575).A+"",width:"791",height:"508"})}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.p,{children:["Unlike other plugins, there is no central Inventory manager. You need to call Save / Load on ",(0,r.jsx)(t.strong,{children:"every"})," inventory component you want to save / load."]}),(0,r.jsx)(t.p,{children:"You may not want some inventories to save / load when the game resets."})]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"InventoryFriendlyName"}),(0,r.jsx)(t.td,{children:"FText"}),(0,r.jsx)(t.td,{children:"The name of this inventory"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"WeightCapacity"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"The maximum weight the inventory can hold"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Capacity"}),(0,r.jsx)(t.td,{children:"int32"}),(0,r.jsx)(t.td,{children:"The maximum number of items the inventory can hold"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Items"}),(0,r.jsxs)(t.td,{children:["TArray<",(0,r.jsx)(t.a,{href:"../items",children:"UNarrativeItem"}),">"]}),(0,r.jsx)(t.td,{children:"The items currently in our inventory"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Currency"}),(0,r.jsx)(t.td,{children:"int32"}),(0,r.jsx)(t.td,{children:"The amount of currency our player has"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DefaultItemTables"}),(0,r.jsxs)(t.td,{children:["TArray<",(0,r.jsx)(t.a,{href:"/narrative-documentation/inventory/loot-tables",children:"FLootTableRoll"}),">"]}),(0,r.jsx)(t.td,{children:"Loot table used to generate inventory items"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bGaveDefaultItems"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Whether default items have been given"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bIsVendor"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Whether the inventory is treated as a vendor"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"BuyItemPct"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"The percentage of item's value we'll buy for"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SellItemPct"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"The percentage of item's value we'll sell for"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"fitemwithquantity-properties",children:"FItemWithQuantity Properties"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Item"}),(0,r.jsxs)(t.td,{children:["TSoftClassPtr<",(0,r.jsx)(t.a,{href:"../items",children:"UNarrativeItem"}),">"]}),(0,r.jsx)(t.td,{children:"The item class"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Quantity"}),(0,r.jsx)(t.td,{children:"int32"}),(0,r.jsx)(t.td,{children:"The quantity of the item"})]})]})]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},32068:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/inventory-component-from-target-ebedfe2f1e40879a7038272a92f499b7.png"},18057:(e,t,n)=>{n.d(t,{A:()=>r});const r="data:image/png;base64,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"},97575:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/save-load-ede5392b7e4f738ac3367bb703c5ae3a.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var r=n(96540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);