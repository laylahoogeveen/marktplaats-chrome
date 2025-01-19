import{w as Q,S as he,a as me,d as Y,s as be,B as ie,q as A,r as M,v as ge,t as pe,u as r,x as u,z as we,g as s,h as o,k as fe,l as e,A as ve,D as G,T as J,I as ke,G as xe,o as de,J as ye,K as _e,n as Se}from"./index-6IyzZcjP.js";import{g as Pe,b as Be}from"./chrome-dev-DjaDa6xy.js";const K=Q(!1),N=Q(!1),F=Q(!1),H=Q(!1),V=async()=>{const a=await Pe();K.set(a.showDagtopper),N.set(a.showSponsored),F.set(a.showWebshops),H.set(a.showBlockedSellers??!1)},z=async(a,t)=>{await Be(a,t),await V()},n="src/pages/popup/Popup.svelte";function ue(a){let t;const p={c:function(){t=r("span"),t.textContent="Lijst weergeven",s(t,"class","text-white"),o(t,n,107,6,4321)},m:function(l,b){fe(l,t,b)},p:Se,d:function(l){l&&de(t)}};return Y("SvelteRegisterBlock",{block:p,id:ue.name,type:"slot",source:'(93:4) <Button variant=\\"secondary\\" on:click=\\"{navigateToOptionsPage}\\" size=\\"md\\">',ctx:a}),p}function X(a){let t,p,i,l,b,g,I,C,k,h,m,d,O,S,L,c,Z,P,B,w,ee,R,te,W,ae,$,D,v,se,q,re,E,oe,j,x,y,U,ne;x=new ie({props:{variant:"secondary",size:"md",$$slots:{default:[ue]},$$scope:{ctx:a}},$$inline:!0}),x.$on("click",a[8]);const le={c:function(){t=r("div"),p=r("div"),i=r("label"),l=r("input"),b=u(),g=r("div"),I=u(),C=r("span"),C.textContent="Toon topadvertenties",k=u(),h=r("div"),m=r("label"),d=r("input"),O=u(),S=r("div"),L=u(),c=r("span"),c.textContent="Toon dagtoppers",Z=u(),P=r("div"),B=r("label"),w=r("input"),ee=u(),R=r("div"),te=u(),W=r("span"),W.textContent="Toon webshops",ae=u(),$=r("div"),D=r("label"),v=r("input"),se=u(),q=r("div"),re=u(),E=r("span"),E.textContent="Toon geblokkeerde verkopers",oe=u(),j=r("div"),we(x.$$.fragment),s(l,"type","checkbox"),l.value="",s(l,"class","sr-only peer"),l.checked=a[3],o(l,n,47,6,1145),s(g,"class","self-stretch w-11 h-6 bg-gray peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[white] after:border-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondary"),o(g,n,54,6,1316),s(i,"class","relative inline-flex items-center cursor-pointer"),o(i,n,46,4,1074),s(C,"class","ml-3 text-sm font-medium text-text min-w-max"),o(C,n,58,4,1730),s(p,"class","gap-2 flex"),o(p,n,45,2,1045),s(d,"type","checkbox"),d.value="",s(d,"class","sr-only peer"),d.checked=a[1],o(d,n,62,6,1928),s(S,"class","self-stretch w-11 h-6 bg-gray peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[white] after:border-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondary"),o(S,n,69,6,2099),s(m,"class","relative inline-flex items-center cursor-pointer"),o(m,n,61,4,1857),s(c,"class","ml-3 text-sm font-medium text-text min-w-max"),o(c,n,73,4,2513),s(h,"class","gap-2 flex"),o(h,n,60,2,1828),s(w,"type","checkbox"),w.value="",s(w,"class","sr-only peer"),w.checked=a[2],o(w,n,77,6,2706),s(R,"class","self-stretch w-11 h-6 bg-gray peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[white] after:border-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondary"),o(R,n,84,6,2874),s(B,"class","relative inline-flex items-center cursor-pointer"),o(B,n,76,4,2635),s(W,"class","ml-3 text-sm font-medium text-text min-w-max"),o(W,n,88,4,3288),s(P,"class","gap-2 flex"),o(P,n,75,2,2606),s(v,"type","checkbox"),v.value="",s(v,"class","sr-only peer"),v.checked=a[0],o(v,n,92,6,3479),s(q,"class","self-stretch w-11 h-6 bg-gray peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[white] after:border-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondary"),o(q,n,99,6,3660),s(D,"class","relative inline-flex items-center cursor-pointer"),o(D,n,91,4,3408),s(E,"class","ml-3 text-sm font-medium text-text min-w-max"),o(E,n,103,4,4074),s($,"class","gap-2 flex"),o($,n,90,2,3379),s(j,"class","gap-2 py-2 flex items-center justify-center"),o(j,n,105,2,4179),s(t,"class","flex flex-col gap-2 p-3 text-primary w-[300px]"),o(t,n,44,0,982)},l:function(f){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(f,_){fe(f,t,_),e(t,p),e(p,i),e(i,l),e(i,b),e(i,g),e(p,I),e(p,C),e(t,k),e(t,h),e(h,m),e(m,d),e(m,O),e(m,S),e(h,L),e(h,c),e(t,Z),e(t,P),e(P,B),e(B,w),e(B,ee),e(B,R),e(P,te),e(P,W),e(t,ae),e(t,$),e($,D),e(D,v),e(D,se),e(D,q),e($,re),e($,E),e(t,oe),e(t,j),ve(x,j,null),y=!0,U||(ne=[G(l,"change",a[4],!1,!1,!1,!1),G(d,"change",a[6],!1,!1,!1,!1),G(w,"change",a[5],!1,!1,!1,!1),G(v,"change",a[7],!1,!1,!1,!1)],U=!0)},p:function(f,[_]){(!y||_&8)&&J(l,"checked",f[3]),(!y||_&2)&&J(d,"checked",f[1]),(!y||_&4)&&J(w,"checked",f[2]),(!y||_&1)&&J(v,"checked",f[0]);const ce={};_&1024&&(ce.$$scope={dirty:_,ctx:f}),x.$set(ce)},i:function(f){y||(ke(x.$$.fragment,f),y=!0)},o:function(f){xe(x.$$.fragment,f),y=!1},d:function(f){f&&de(t),ye(x),U=!1,_e(ne)}};return Y("SvelteRegisterBlock",{block:le,id:X.name,type:"component",source:"",ctx:a}),le}function $e(a,t,p){let i,l,b,g;A(H,"showBlockedSellers"),M(a,H,c=>p(0,i=c)),A(K,"showDagtopper"),M(a,K,c=>p(1,l=c)),A(F,"showWebshops"),M(a,F,c=>p(2,b=c)),A(N,"showSponsored"),M(a,N,c=>p(3,g=c));let{$$slots:I={},$$scope:C}=t;ge("Popup",I,[]),pe(async()=>{await V()});const k=async()=>{await chrome.tabs.reload()},h=()=>{z("showSponsored",!g),k()},m=()=>{z("showWebshops",!b),k()},d=()=>{z("showDagtopper",!l),k()},O=()=>{z("showBlockedSellers",!i),k()},S=()=>{chrome.runtime.openOptionsPage()},L=[];return Object.keys(t).forEach(c=>{!~L.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<Popup> was created with unknown prop '${c}'`)}),a.$capture_state=()=>({onMount:pe,Button:ie,showBlockedSellers:H,showDagtopper:K,showSponsored:N,showWebshops:F,updateAndSyncPreferences:V,updatePreferenceInPopup:z,refreshPage:k,handleSponsoredSubmit:h,handleWebshopSubmit:m,handleDagtopperSubmit:d,handleBlockedSellersSubmit:O,navigateToOptionsPage:S,$showBlockedSellers:i,$showDagtopper:l,$showWebshops:b,$showSponsored:g}),[i,l,b,g,h,m,d,O,S]}class De extends he{constructor(t){super(t),me(this,t,$e,X,be,{}),Y("SvelteRegisterComponent",{component:this,tagName:"Popup",options:t,id:X.name})}}const Ce=document.getElementById("app");async function Te(){new De({target:Ce})}document.addEventListener("DOMContentLoaded",Te);
