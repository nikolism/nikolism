"use strict";(self["webpackChunknikolism"]=self["webpackChunknikolism"]||[]).push([[708],{9708:(e,t,o)=>{o.r(t),o.d(t,{default:()=>U});var n=o(3673);const s={class:"q-pa-md"};function l(e,t,o,l,i,a){const r=(0,n.up)("CategorySelector"),c=(0,n.up)("NegotiationsA"),u=(0,n.up)("NegotiationsB"),d=(0,n.up)("NegotiationsC"),p=(0,n.up)("TransparencyA"),w=(0,n.up)("PashinyanOnAliyevA"),g=(0,n.up)("PashinyanOnAliyevB"),y=(0,n.up)("CorruptionA"),k=(0,n.up)("Instructions"),m=(0,n.up)("HowToHelp");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(r,{categories:l.categories,onCategorySelected:l.handleCategorySelected},null,8,["categories","onCategorySelected"]),l.slideIdsToShow.includes("NegotiationsA")?((0,n.wg)(),(0,n.j4)(c,{key:0})):(0,n.kq)("",!0),l.slideIdsToShow.includes("NegotiationsB")?((0,n.wg)(),(0,n.j4)(u,{key:1})):(0,n.kq)("",!0),l.slideIdsToShow.includes("NegotiationsC")?((0,n.wg)(),(0,n.j4)(d,{key:2})):(0,n.kq)("",!0),l.slideIdsToShow.includes("TransparencyA")?((0,n.wg)(),(0,n.j4)(p,{key:3})):(0,n.kq)("",!0),l.slideIdsToShow.includes("PashinyanOnAliyevA")?((0,n.wg)(),(0,n.j4)(w,{key:4})):(0,n.kq)("",!0),l.slideIdsToShow.includes("PashinyanOnAliyevB")?((0,n.wg)(),(0,n.j4)(g,{key:5})):(0,n.kq)("",!0),l.slideIdsToShow.includes("CorruptionA")?((0,n.wg)(),(0,n.j4)(y,{key:6})):(0,n.kq)("",!0),l.showInstructions?((0,n.wg)(),(0,n.j4)(k,{key:7})):(0,n.kq)("",!0),l.showHowToHelp?((0,n.wg)(),(0,n.j4)(m,{key:8})):(0,n.kq)("",!0)])}var i=o(1959),a=o(2323);function r(e,t,o,s,l,i){const r=(0,n.up)("q-item-label"),c=(0,n.up)("q-item-section"),u=(0,n.up)("q-item"),d=(0,n.up)("q-list"),p=(0,n.up)("q-btn-dropdown"),w=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.j4)(p,{icon:"category",color:"primary",label:"Select a Category",class:"q-mb-md col-12"},{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.dropDownOptions,(e=>(0,n.wy)(((0,n.wg)(),(0,n.j4)(u,{key:e.value,clickable:"",onClick:t=>s.categorySelected(e.value)},{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(e.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[w]]))),128))])),_:1})])),_:1})}const c={props:{categories:{required:!0,type:Object}},emits:["categorySelected"],setup(e,{emit:t}){const o=e=>{console.log(e),t("categorySelected",e)};return{dropDownOptions:(0,i.SU)(e.categories),categorySelected:o}}};var u=o(4260),d=o(6305),p=o(7011),w=o(3414),g=o(2035),y=o(2350),k=o(677),m=o(7518),h=o.n(m);const f=(0,u.Z)(c,[["render",r]]),v=f;h()(c,"components",{QBtnDropdown:d.Z,QList:p.Z,QItem:w.Z,QItemSection:g.Z,QItemLabel:y.Z}),h()(c,"directives",{ClosePopup:k.Z});var S=o(5522),q=o(6005),C=o(8839),A=o(8230),I=o(8162),T=o(5588),j=o(6728),b=o(9081);const H={class:"fit row wrap justify-center items-start content-start q-mb-md"},Z=(0,n.Uk)(" Choose a category above to see matching videos. ");function N(e,t,o,s,l,i){const a=(0,n.up)("q-card");return(0,n.wg)(),(0,n.iD)("div",H,[(0,n.Wm)(a,{class:"q-pa-md",style:{width:"95%"}},{default:(0,n.w5)((()=>[Z])),_:1})])}const O={setup(){return{}}};var B=o(151);const P=(0,u.Z)(O,[["render",N]]),Q=P;h()(O,"components",{QCard:B.Z});var D=o(3462);const _={components:{CategorySelector:v,NegotiationsA:S["default"],NegotiationsB:q["default"],NegotiationsC:C["default"],TransparencyA:A["default"],PashinyanOnAliyevA:I["default"],PashinyanOnAliyevB:T["default"],CorruptionA:j["default"],HowToHelp:b["default"],Instructions:Q},setup(){const e=(0,i.iH)([]),t=(0,i.Fl)((()=>0==e.value.length)),o=(0,i.Fl)((()=>0!=e.value.length)),n=D.HB,s=D.SZ,l=t=>{var o;o="all"==t?n:n.filter((e=>e.themes.includes(t))),e.value=o.map((e=>e["id"]))};return{slides:n,categories:s,handleCategorySelected:l,slideIdsToShow:e,showInstructions:t,showHowToHelp:o}}},W=(0,u.Z)(_,[["render",l]]),U=W}}]);