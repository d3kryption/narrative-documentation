"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[2875],{12250:(e,t,n)=>{n.d(t,{Ay:()=>d,RM:()=>s});var i=n(74848),r=n(28453);const s=[];function a(e){const t={admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"If you already have an existing HUD, add the below widgets to that. It's much better for performance than having multiple HUD's rendering."})})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},3092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=n(74848),r=n(28453),s=n(12250);const a={sidebar_label:"UI",sidebar_position:3},d="UI",o={id:"navigator/installation/ui",title:"UI",description:"Narrative Navigator comes with several UI widgets to handle displaying the navigation info to the player. It can be added to your existing UI to keep it nice and clean.",source:"@site/docs/navigator/installation/ui.md",sourceDirName:"navigator/installation",slug:"/navigator/installation/ui",permalink:"/narrative-documentation/navigator/installation/ui",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"UI",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Player Controller",permalink:"/narrative-documentation/navigator/installation/player-controller"},next:{title:"Navigator Component",permalink:"/narrative-documentation/navigator/navigator-component"}},l={},c=[{value:"Creating your HUD",id:"creating-your-hud",level:2},...s.RM,{value:"Navigator Widgets",id:"navigator-widgets",level:3},{value:"Compass",id:"compass",level:4},{value:"Minimap",id:"minimap",level:4},{value:"World map",id:"world-map",level:4},{value:"Screen Space markers",id:"screen-space-markers",level:4},{value:"HUD display",id:"hud-display",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"ui",children:"UI"})}),"\n",(0,i.jsx)(t.p,{children:"Narrative Navigator comes with several UI widgets to handle displaying the navigation info to the player. It can be added to your existing UI to keep it nice and clean."}),"\n",(0,i.jsx)(t.h2,{id:"creating-your-hud",children:"Creating your HUD"}),"\n",(0,i.jsxs)(t.p,{children:["To set up a simple HUD, open your ",(0,i.jsx)(t.strong,{children:"Content Drawer"}),", right click -> ",(0,i.jsx)(t.strong,{children:"user interface"})," -> ",(0,i.jsx)(t.strong,{children:"Widget Blueprint"})," and name this ",(0,i.jsx)(t.code,{children:"WBP_HUD"}),"."]}),"\n",(0,i.jsx)(s.Ay,{}),"\n",(0,i.jsxs)(t.p,{children:["Open the HUD and add the ",(0,i.jsx)(t.a,{href:"./ui#navigator-widgets",children:"widgets"})," you require."]}),"\n",(0,i.jsx)(t.h3,{id:"navigator-widgets",children:"Navigator Widgets"}),"\n",(0,i.jsx)(t.p,{children:"Navigator comes with a series of widgets that you can use to customise your experience. These will be covered in more detail later in the docs."}),"\n",(0,i.jsx)(t.h4,{id:"compass",children:"Compass"}),"\n",(0,i.jsx)(t.p,{children:"This is the compass that sits normally at the top or bottom of the screen. Used as a replacement for a map by showing you what's in the direction you are facing."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"compass.png",src:n(69384).A+"",width:"721",height:"135"})}),"\n",(0,i.jsxs)(t.p,{children:["Add the widget ",(0,i.jsx)(t.strong,{children:"WBP_Navigator_Compass"}),". Some good default details are:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Anchors"}),(0,i.jsx)(t.td,{children:"0.5, 0, 0.5, 0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Position X"}),(0,i.jsx)(t.td,{children:"0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Position Y"}),(0,i.jsx)(t.td,{children:"0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Size X"}),(0,i.jsx)(t.td,{children:"600"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Size Y"}),(0,i.jsx)(t.td,{children:"60"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Alignment"}),(0,i.jsx)(t.td,{children:"0.5, 0"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"minimap",children:"Minimap"}),"\n",(0,i.jsx)(t.p,{children:"This is the minimap that sits in the corner and gives the player a map surrounding their location."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"minimap.png",src:n(9773).A+"",width:"453",height:"397"})}),"\n",(0,i.jsxs)(t.p,{children:["Add the widget ",(0,i.jsx)(t.strong,{children:"WBP_Navigator_Map_Minimap"}),". Some good default details are:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Anchors"}),(0,i.jsx)(t.td,{children:"1, 1, 1, 1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Position X"}),(0,i.jsx)(t.td,{children:"0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Position Y"}),(0,i.jsx)(t.td,{children:"0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Size X"}),(0,i.jsx)(t.td,{children:"250"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Size Y"}),(0,i.jsx)(t.td,{children:"250"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Alignment"}),(0,i.jsx)(t.td,{children:"1, 1"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"world-map",children:"World map"}),"\n",(0,i.jsx)(t.p,{children:"This is the world map widget that gives players access to view the entire map. It is not commonly added to the HUD but instead using the OpenMenu option via a key press instead."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"introduction.png",src:n(91774).A+"",width:"2555",height:"1440"})}),"\n",(0,i.jsx)(t.p,{children:"You do not need to add this as a widget. We will open this via an event later."}),"\n",(0,i.jsx)(t.h4,{id:"screen-space-markers",children:"Screen Space markers"}),"\n",(0,i.jsx)(t.p,{children:"Screen space markers are the visible markers on screen in the player's viewport. They show in the 3d world."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"screen-space-markers.png",src:n(70453).A+"",width:"502",height:"443"})}),"\n",(0,i.jsxs)(t.p,{children:["Add the widget ",(0,i.jsx)(t.strong,{children:"WBP_Navigator_ScreenSpaceMarkers"}),". This needs to be set to full screen and lowest priority order (put it at the top of your Hierarchy list)."]}),"\n",(0,i.jsx)(t.h3,{id:"hud-display",children:"HUD display"}),"\n",(0,i.jsxs)(t.p,{children:["Finally, go back into your ",(0,i.jsx)(t.a,{href:"/narrative-documentation/navigator/installation/player-controller",children:"Player Controller"}),", and on begin play, create the widget, promote it to a variable then add it to the viewport."]}),"\n",(0,i.jsx)("iframe",{src:"https://blueprintue.com/render/zpfvq3f1/",width:"100%",height:"400",scrolling:"no",allowfullscreen:!0})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},69384:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/compass-6c31f52a2ca67a09173b6084f474109d.png"},91774:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/introduction-9365babcb20094d421c97ad4d565c4f6.png"},9773:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/minimap-b98f881f923862d35604ebda16246b13.png"},70453:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/screen-space-markers-0b37f061b3a40084c90553d345a21d65.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var i=n(96540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);