(self["webpackChunknikolism"]=self["webpackChunknikolism"]||[]).push([[709,68],{3462:(e,t,n)=>{"use strict";n.d(t,{SZ:()=>a,HB:()=>o,of:()=>i});const o=Object.freeze([{id:"NegotiationsA",themes:["negotiations"]},{id:"NegotiationsB",themes:["negotiations"]},{id:"NegotiationsC",themes:["negotiations"]},{id:"TransparencyA",themes:["transparency","negotiations"]},{id:"PashinyanOnAliyevA",themes:["aliyev"]},{id:"PashinyanOnAliyevB",themes:["aliyev"]},{id:"CorruptionA",themes:["corruption"]},{id:"JudicialIndependanceA",themes:["judicialIndependance"]},{id:"MilitaryA",themes:["military"]},{id:"MilitaryB",themes:["military"]},{id:"ViolenceA",themes:["violence"]},{id:"ViolenceB",themes:["violence"]},{id:"MediaA",themes:["media"]},{id:"MediaB",themes:["media"]}]),i=Object.freeze(o.map((e=>e.id))),a=Object.freeze([{name:"All",value:"all"},{name:"Negotiations",value:"negotiations"},{name:"Transparency",value:"transparency"},{name:"Pashinyan on Aliyev",value:"aliyev"},{name:"Corruption",value:"corruption"},{name:"Judicial Independance",value:"judicialIndependance"},{name:"Military",value:"military"},{name:"Violence",value:"violence"},{name:"Media",value:"media"}])},7068:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var o=n(3673);const i={class:"fit row wrap justify-center items-start content-start q-mb-md"},a=(0,o.Uk)(" To suggest a new video please "),s=(0,o._)("a",{href:"https://github.com/nikolism/nikolism.github.io/issues"},"go here",-1),r=(0,o.Uk)(" and provide a link to the Youtube video and also indicate the start and end time you have in mind. If you have a transcription or translation of what is being said you may provide that as well. Specifying the context (when, where, what was going on at the time) and providing your observations and opinion on the video is helpful. If you do not have a Github account, you can "),l=(0,o._)("a",{href:"https://www.reddit.com/r/NikolismExplained/"},"create a Reddit post",-1),c=(0,o.Uk)(" instead. ");function d(e,t,n,d,u,m){const p=(0,o.up)("q-card");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(p,{class:"col-sm-12 q-pa-md"},{default:(0,o.w5)((()=>[a,s,r,l,c])),_:1})])}const u={setup(){return{}}};var m=n(4260),p=n(151),v=n(7518),h=n.n(v);const y=(0,m.Z)(u,[["render",d]]),g=y;h()(u,"components",{QCard:p.Z})},8709:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>D});var o=n(3673);const i={class:"q-pa-md"},a={class:"row q-mb-md q-col-gutter-md"};function s(e,t,n,s,r,l){const c=(0,o.up)("CategorySelector"),d=(0,o.up)("Instructions"),u=(0,o.up)("HowToHelp");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(c,{categories:s.categories,onCategorySelected:s.handleCategorySelected},null,8,["categories","onCategorySelected"]),s.showInstructions?((0,o.wg)(),(0,o.j4)(d,{key:0})):(0,o.kq)("",!0),(0,o._)("div",a,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.slideIdsToShow,(e=>((0,o.wg)(),(0,o.j4)((0,o.LL)(s.contentComponents[e]),{key:e})))),128))]),s.showHowToHelp?((0,o.wg)(),(0,o.j4)(u,{key:1})):(0,o.kq)("",!0)])}n(71);var r=n(1959),l=n(2323);function c(e,t,n,i,a,s){const r=(0,o.up)("q-item-label"),c=(0,o.up)("q-item-section"),d=(0,o.up)("q-item"),u=(0,o.up)("q-list"),m=(0,o.up)("q-btn-dropdown"),p=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(m,{icon:"category",color:"primary",label:"Select a Category",class:"q-mb-md col-12"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.dropDownOptions,(e=>(0,o.wy)(((0,o.wg)(),(0,o.j4)(d,{key:e.value,clickable:"",onClick:t=>i.categorySelected(e.value)},{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[p]]))),128))])),_:1})])),_:1})}const d={props:{categories:{required:!0,type:Object}},emits:["categorySelected"],setup(e,{emit:t}){const n=e=>{t("categorySelected",e)};return{dropDownOptions:(0,r.SU)(e.categories),categorySelected:n}}};var u=n(4260),m=n(6305),p=n(7011),v=n(3414),h=n(2035),y=n(2350),g=n(677),w=n(7518),f=n.n(w);const k=(0,u.Z)(d,[["render",c]]),C=k;f()(d,"components",{QBtnDropdown:m.Z,QList:p.Z,QItem:v.Z,QItemSection:h.Z,QItemLabel:y.Z}),f()(d,"directives",{ClosePopup:g.Z});var b=n(7068);const A={class:"fit row wrap justify-center items-start content-start q-mb-md"},q=(0,o.Uk)(" Choose a category above to filter content. ");function S(e,t,n,i,a,s){const r=(0,o.up)("q-card");return(0,o.wg)(),(0,o.iD)("div",A,[(0,o.Wm)(r,{class:"col-sm-12 q-pa-md"},{default:(0,o.w5)((()=>[q])),_:1})])}const I={setup(){return{}}};var B=n(151);const H=(0,u.Z)(I,[["render",S]]),j=H;f()(I,"components",{QCard:B.Z});var O=n(3462);const Z={components:{CategorySelector:C,HowToHelp:b["default"],Instructions:j},setup(){const e=(0,r.iH)(O.HB.map((e=>e["id"]))),t=(0,r.Fl)((()=>e.value.length==O.HB.length)),i=(0,r.Fl)((()=>0!=e.value.length)),a=O.HB,s=O.SZ,l=t=>{var n;n="all"==t?a:a.filter((e=>e.themes.includes(t))),e.value=n.map((e=>e["id"]))},c=(0,r.Fl)((()=>{const e={};return a.forEach((t=>{console.log(t),e[t.id]=(0,o.RC)((()=>n(9974)("./"+t.id+".vue")))})),e}));return{slides:a,categories:s,handleCategorySelected:l,slideIdsToShow:e,showInstructions:t,showHowToHelp:i,contentComponents:c}}},_=(0,u.Z)(Z,[["render",s]]),D=_},9974:(e,t,n)=>{var o={"./CorruptionA.vue":[4653,736,653],"./JudicialIndependanceA.vue":[7873,736,873],"./MediaA.vue":[2132,736,132],"./MediaB.vue":[5813,736,813],"./MilitaryA.vue":[5774,736,774],"./MilitaryB.vue":[1936,736,936],"./NegotiationsA.vue":[5522,736,522],"./NegotiationsB.vue":[7611,736,611],"./NegotiationsC.vue":[6612,736,612],"./PashinyanOnAliyevA.vue":[8162,736,162],"./PashinyanOnAliyevB.vue":[5588,736,588],"./TransparencyA.vue":[8230,736,230],"./VideoDisplay.vue":[8638,736,638],"./ViolenceA.vue":[9410,736,410],"./ViolenceB.vue":[7903,736,903]};function i(e){if(!n.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((()=>n(i)))}i.keys=()=>Object.keys(o),i.id=9974,e.exports=i}}]);