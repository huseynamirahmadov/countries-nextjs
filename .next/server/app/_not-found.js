(()=>{var e={};e.id=165,e.ids=[165],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},5985:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var s=r(482),n=r(9108),o=r(2563),i=r.n(o),a=r(8300),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8211)),"C:\\Users\\User\\Desktop\\next\\countries-nextjs\\app\\not-found.jsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,7624)),"C:\\Users\\User\\Desktop\\next\\countries-nextjs\\app\\layout.jsx"],loading:[()=>Promise.resolve().then(r.bind(r,8261)),"C:\\Users\\User\\Desktop\\next\\countries-nextjs\\app\\loading.jsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,8211)),"C:\\Users\\User\\Desktop\\next\\countries-nextjs\\app\\not-found.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=[],u="/_not-found",x={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/_not-found",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},639:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1476,23))},9501:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},5303:()=>{},7624:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p,metadata:()=>x});var s=r(5036),n=r(9138),o=r.n(n);r(2);var i=r(6274);let a=({region:e})=>s.jsx(i.default,{href:`/region/${e}`,children:s.jsx("button",{className:"border-2 border-black rounded-lg p-2",children:e})}),l=({children:e,route:t})=>s.jsx(i.default,{href:t,children:s.jsx("button",{className:"border-2 border-black rounded-lg p-2",children:e})}),d=({data:e})=>{let t=[...new Set(e.map(e=>e.region))];return s.jsx("div",{children:(0,s.jsxs)("div",{className:"flex justify-center items-center gap-4",children:[s.jsx(l,{route:"/",children:"All countries"}),t.map((e,t)=>s.jsx(a,{region:e},t))]})})},c=async()=>{let e=async()=>(await fetch("https://restcountries.com/v3.1/all")).json(),t=await e();return(0,s.jsxs)("header",{children:[s.jsx("h1",{className:"text-center py-4 font-bold text-red-600 text-3xl",children:"Countries App"}),s.jsx(d,{data:t})]})},u=()=>s.jsx("div",{className:"py-20 text-center font-bold text-3xl",children:"Footer"});r(7272);let x={title:"Countries App",description:"Generated by create next app"},p=({children:e})=>s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{className:o().className,children:[s.jsx(c,{}),e,s.jsx(u,{})]})})},8261:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(5036);r(2);let n=()=>s.jsx("div",{className:"py-60 text-center font-bold text-3xl",children:"Loading.."})},8211:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(5036);r(2);let n=()=>s.jsx("div",{children:"404 Not found"})},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(337);let n=e=>[{type:"image/x-icon",sizes:"256x256",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,177],()=>r(5985));module.exports=s})();