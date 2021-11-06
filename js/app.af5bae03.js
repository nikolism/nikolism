(()=>{"use strict";var e={2318:(e,r,t)=>{var n=t(8880),o=t(2466),i=t(3673);function a(e,r,t,n,o,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}const l=(0,i.aZ)({name:"App"});var s=t(4260);const u=(0,s.Z)(l,[["render",a]]),c=u;var p=t(7083),d=t(9582);t(71);const f=[{path:"/",component:()=>Promise.all([t.e(736),t.e(695)]).then(t.bind(t,3695)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(971)]).then(t.bind(t,8971))}]},{path:"/single-slide/:slideId",name:"single-slide",component:()=>Promise.all([t.e(736),t.e(695)]).then(t.bind(t,3695)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(191)]).then(t.bind(t,2191))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(193)]).then(t.bind(t,2193))}],h=f,m=(0,p.BC)((function(){const e=d.r5,r=(0,d.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:e("")});return r}));async function v(e,r){const t="function"===typeof m?await m({}):m,n=e(c);return n.use(o.Z,r),{app:n,router:t}}const b={config:{}};async function g({app:e,router:r}){e.use(r),e.mount("#q-app")}v(n.ri,b).then(g)}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.m=e,(()=>{var e=[];t.O=(r,n,o,i)=>{if(!n){var a=1/0;for(c=0;c<e.length;c++){for(var[n,o,i]=e[c],l=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(t.O).every((e=>t.O[e](n[s])))?n.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(c--,1);var u=o();void 0!==u&&(r=u)}}return r}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,o,i]}})(),(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(r,{a:r}),r}})(),(()=>{t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,n)=>(t.f[n](e,r),r)),[]))})(),(()=>{t.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{64:"9738b92a",191:"ffb83425",193:"61638595",695:"b3273198",971:"e7b9ba2f"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"31d6cfe0",736:"4cff7528"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={},r="nikolism:";t.l=(n,o,i,a)=>{if(e[n])e[n].push(o);else{var l,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var p=u[c];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==r+i){l=p;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",r+i),l.src=n),e[n]=[o];var d=(r,t)=>{l.onerror=l.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(t))),r)return r(t)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p=""})(),(()=>{var e={143:0};t.f.j=(r,n)=>{var o=t.o(e,r)?e[r]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise(((t,n)=>o=e[r]=[t,n]));n.push(o[2]=i);var a=t.p+t.u(r),l=new Error,s=n=>{if(t.o(e,r)&&(o=e[r],0!==o&&(e[r]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+r+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,o[1](l)}};t.l(a,s,"chunk-"+r,r)}},t.O.j=r=>0===e[r];var r=(r,n)=>{var o,i,[a,l,s]=n,u=0;if(a.some((r=>0!==e[r]))){for(o in l)t.o(l,o)&&(t.m[o]=l[o]);if(s)var c=s(t)}for(r&&r(n);u<a.length;u++)i=a[u],t.o(e,i)&&e[i]&&e[i][0](),e[a[u]]=0;return t.O(c)},n=self["webpackChunknikolism"]=self["webpackChunknikolism"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var n=t.O(void 0,[736],(()=>t(2318)));n=t.O(n)})();