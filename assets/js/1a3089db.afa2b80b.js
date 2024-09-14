"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[3123],{95697:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>i});var r=t(74848),o=t(28453);const i=[];function a(e){const n={admonition:"admonition",img:"img",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Before we can move on, we need to create a custom PlayerController."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"If you already have a custom PlayerController, you can skip this page."})}),"\n",(0,r.jsxs)(n.p,{children:["Simply right-click in your Content Drawer, select Blueprint Class and choose ",(0,r.jsx)(n.strong,{children:"Player Controller"}),". We will name this ",(0,r.jsx)(n.strong,{children:"BP_PlayerController"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"player-controller-pick-parent-class.jpg",src:t(17538).A+"",width:"814",height:"555"})}),"\n",(0,r.jsxs)(n.p,{children:["Now open the ",(0,r.jsx)(n.strong,{children:"BP_ThirdPersonGameMode"})," and set the Player Controller class to your newly created ",(0,r.jsx)(n.strong,{children:"BP_PlayerController"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"setting-player-controller.jpg",src:t(50725).A+"",width:"1188",height:"704"})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},43187:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(74848),o=t(28453),i=t(95697);const a={sidebar_label:"Player Controller",sidebar_position:3},l="Player Controller",s={id:"inventory/installation/player-controller",title:"Player Controller",description:"Usage",source:"@site/docs/inventory/installation/player-controller.md",sourceDirName:"inventory/installation",slug:"/inventory/installation/player-controller",permalink:"/narrative-documentation/inventory/installation/player-controller",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Player Controller",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Player State",permalink:"/narrative-documentation/inventory/installation/player-state"},next:{title:"UI",permalink:"/narrative-documentation/inventory/installation/ui"}},c={},d=[...i.RM,{value:"Usage",id:"usage",level:2}];function p(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"player-controller",children:"Player Controller"})}),"\n","\n",(0,r.jsx)(i.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["To add the inventory you need to first have completed the ",(0,r.jsx)(n.a,{href:"/narrative-documentation/inventory/installation/common-ui",children:"Common UI HUD setup"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Now, you just need to call ",(0,r.jsx)(n.strong,{children:"OpenMenu"})," from a key press, passing the ",(0,r.jsx)(n.strong,{children:"WBP_Inventory"})," option."]}),"\n",(0,r.jsx)("iframe",{src:"https://blueprintue.com/render/0gwv5q0-/",width:"100%",height:"400",scrolling:"no",allowfullscreen:!0}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Do not call ",(0,r.jsx)(n.strong,{children:"CreateWidget"})," on this widget. It will bypass the CommonUI framework causing functionality not to work."]})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},17538:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/player-controller-pick-parent-class-10a474452c2b995097baa9020e564d02.jpg"},50725:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/setting-player-controller-cd60f1a82e78d0cf37dcbda79176a182.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(96540);const o={},i=r.createContext(o);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);