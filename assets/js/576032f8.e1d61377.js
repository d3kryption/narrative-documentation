"use strict";(self.webpackChunknarrative_docs=self.webpackChunknarrative_docs||[]).push([[4176],{94449:(i,o,n)=>{n.r(o),n.d(o,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var a=n(74848),e=n(28453);const t={sidebar_label:"Animations"},s="Animations",d={id:"quests-and-dialogue/dialogue/dialogue-nodes/animations",title:"Animations",description:"Each dialogue node contains two variables for playing animations on your characters: Body Animation and Facial Animation.",source:"@site/docs/quests-and-dialogue/dialogue/dialogue-nodes/animations.md",sourceDirName:"quests-and-dialogue/dialogue/dialogue-nodes",slug:"/quests-and-dialogue/dialogue/dialogue-nodes/animations",permalink:"/narrative-documentation/quests-and-dialogue/dialogue/dialogue-nodes/animations",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Animations"},sidebar:"tutorialSidebar",previous:{title:"Dialogue Nodes",permalink:"/narrative-documentation/quests-and-dialogue/dialogue/dialogue-nodes/"},next:{title:"Audio",permalink:"/narrative-documentation/quests-and-dialogue/dialogue/dialogue-nodes/audio"}},r={},l=[{value:"Setup",id:"setup",level:2},{value:"Facial animation",id:"facial-animation",level:3},{value:"Body animation",id:"body-animation",level:3},{value:"Animation Blueprint changes",id:"animation-blueprint-changes",level:2},{value:"Animations still not working",id:"animations-still-not-working",level:2}];function c(i){const o={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,e.R)(),...i.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.header,{children:(0,a.jsx)(o.h1,{id:"animations",children:"Animations"})}),"\n",(0,a.jsxs)(o.p,{children:["Each dialogue node contains two variables for playing animations on your characters: ",(0,a.jsx)(o.strong,{children:"Body Animation"})," and ",(0,a.jsx)(o.strong,{children:"Facial Animation"}),"."]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"dialogue-animations.png",src:n(13482).A+"",width:"554",height:"127"})}),"\n",(0,a.jsx)(o.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsx)(o.p,{children:"To play animations on the correct skeletal meshes you need to add a tag to the correct body-part so Narrative knows where to play the animation."}),"\n",(0,a.jsx)(o.h3,{id:"facial-animation",children:"Facial animation"}),"\n",(0,a.jsx)(o.p,{children:"To set up the facial skeletal meshes, find your skeletal mesh component that will play your facial animation. Add an component tag of:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-ini",children:"Face\n"})}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"dialogue-animation-face-tag.png",src:n(6664).A+"",width:"500",height:"332"})}),"\n",(0,a.jsxs)(o.admonition,{type:"note",children:[(0,a.jsx)(o.p,{children:"Narrative follows the Unreal standard of facial animations only moving the face bones / shape keys. The neck should not be part of this animation."}),(0,a.jsx)(o.p,{children:"If you need to change this behaviour, you will need to modify your Animation Blueprint to support this."})]}),"\n",(0,a.jsx)(o.h3,{id:"body-animation",children:"Body animation"}),"\n",(0,a.jsx)(o.p,{children:"To set up the Body skeletal meshes, find your skeletal mesh component that will play your body animation. Add an component tag of:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-ini",children:"Body\n"})}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"dialogue-animation-body-tag.png",src:n(98403).A+"",width:"500",height:"332"})}),"\n",(0,a.jsx)(o.h2,{id:"animation-blueprint-changes",children:"Animation Blueprint changes"}),"\n",(0,a.jsx)(o.p,{children:"By default Unreal does not play Animation Montages on default skeletal meshes."}),"\n",(0,a.jsxs)(o.p,{children:["Create an Animation Blueprint by Right-clicking in your ",(0,a.jsx)(o.strong,{children:"Content Drawer"})," -> ",(0,a.jsx)(o.strong,{children:"Animation"})," -> ",(0,a.jsx)(o.strong,{children:"Animation Blueprint"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["Open the ",(0,a.jsx)(o.strong,{children:"AnimGraph"})," and add a DefaultSlot node at some stage of the animation."]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"dialogue-animation-blueprint-defualtslot.png",src:n(20023).A+"",width:"510",height:"265"})}),"\n",(0,a.jsx)(o.admonition,{type:"note",children:(0,a.jsx)(o.p,{children:"Most of the time it's safe to add right before the Output pose, so it overwrites all animations with the montage you want to play."})}),"\n",(0,a.jsx)(o.h2,{id:"animations-still-not-working",children:"Animations still not working"}),"\n",(0,a.jsx)(o.p,{children:"If the animations still don't work after setting the tag and animation blueprint, make sure the montage you are using is supported by your character."}),"\n",(0,a.jsx)(o.p,{children:"You can accidentally select unsupported animations and not warn you about it."})]})}function h(i={}){const{wrapper:o}={...(0,e.R)(),...i.components};return o?(0,a.jsx)(o,{...i,children:(0,a.jsx)(c,{...i})}):c(i)}},20023:(i,o,n)=>{n.d(o,{A:()=>a});const a=n.p+"assets/images/dialogue-animation-blueprint-defualtslot-500ce3c76e6f5259216a8e93579eb0d0.png"},98403:(i,o,n)=>{n.d(o,{A:()=>a});const a=n.p+"assets/images/dialogue-animation-body-tag-da1efbf692d22109e4c08e9e6f787eb4.png"},6664:(i,o,n)=>{n.d(o,{A:()=>a});const a=n.p+"assets/images/dialogue-animation-face-tag-c3d9c89f9b484e127400da66db5c6777.png"},13482:(i,o,n)=>{n.d(o,{A:()=>a});const a="data:image/png;base64,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"},28453:(i,o,n)=>{n.d(o,{R:()=>s,x:()=>d});var a=n(96540);const e={},t=a.createContext(e);function s(i){const o=a.useContext(t);return a.useMemo((function(){return"function"==typeof i?i(o):{...o,...i}}),[o,i])}function d(i){let o;return o=i.disableParentContext?"function"==typeof i.components?i.components(e):i.components||e:s(i.components),a.createElement(t.Provider,{value:o},i.children)}}}]);