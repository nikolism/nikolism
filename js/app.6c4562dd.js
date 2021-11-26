(()=>{"use strict";var e={2318:(e,t,r)=>{var n=r(8880),o=r(9592),a=r(3673);function i(e,t,r,n,o,i){const c=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(c)}const c=(0,a.aZ)({name:"App"});var l=r(4260);const s=(0,l.Z)(c,[["render",i]]),d=s;var u=r(7083),f=r(9582);r(71);const p=[{path:"/",component:()=>Promise.all([r.e(736),r.e(695)]).then(r.bind(r,3695)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(64),r.e(669)]).then(r.bind(r,2669))}]},{path:"/single-slide/:slideId",name:"single-slide",component:()=>Promise.all([r.e(736),r.e(695)]).then(r.bind(r,3695)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(64),r.e(365)]).then(r.bind(r,1365))}]},{path:"/category/:categoryId",name:"category",component:()=>Promise.all([r.e(736),r.e(695)]).then(r.bind(r,3695)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(64),r.e(679)]).then(r.bind(r,2679))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(193)]).then(r.bind(r,2193))}],b=p,h=(0,u.BC)((function(){const e=f.r5,t=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:b,history:e("")});return t}));async function m(e,t){const r="function"===typeof h?await h({}):h,n=e(d);return n.use(o.Z,t),{app:n,router:r}}var v=r(6417),g=r(8229);const y={config:{},plugins:{Notify:v.Z,Meta:g.ZP}};async function k({app:e,router:t}){e.use(t),e.mount("#q-app")}m(n.ri,y).then(k)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(d=0;d<e.length;d++){for(var[n,o,a]=e[d],c=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(c=!1,a<i&&(i=a));if(c){e.splice(d--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{7:"e803cab1",64:"122ad25c",94:"11612eec",119:"4a315cbf",132:"af1d6384",133:"5ca4ff9c",134:"f1de50a4",162:"89e0d055",180:"0d0388af",193:"43423a39",230:"986a2a7b",365:"273353af",384:"fe1b4f1f",410:"c13eb89a",522:"0ba1606d",585:"f31e69e9",611:"965bf8a1",612:"e961d837",651:"8f121a0e",653:"b53b41ef",669:"265b42e0",679:"d58d2fcb",695:"6c7db553",774:"8f7b6205",813:"b65e239e",873:"079b7834",903:"cb1ae3ec",936:"f3712f47"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"31d6cfe0",736:"4cff7528"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="nikolism:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var c,l;if(void 0!==a)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var u=s[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){c=u;break}}c||(l=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.setAttribute("data-webpack",t+a),c.src=n),e[n]=[o];var f=(t,r)=>{c.onerror=c.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),l&&document.head.appendChild(c)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),c=new Error,l=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,c,l]=n,s=0;if(i.some((t=>0!==e[t]))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(l)var d=l(r)}for(t&&t(n);s<i.length;s++)a=i[s],r.o(e,a)&&e[a]&&e[a][0](),e[i[s]]=0;return r.O(d)},n=self["webpackChunknikolism"]=self["webpackChunknikolism"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(2318)));n=r.O(n)})();