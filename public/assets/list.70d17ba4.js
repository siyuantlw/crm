var J=Object.defineProperty,K=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var D=(n,a,o)=>a in n?J(n,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[a]=o,m=(n,a)=>{for(var o in a||(a={}))X.call(a,o)&&D(n,o,a[o]);if(k)for(var o of k(a))Y.call(a,o)&&D(n,o,a[o]);return n},T=(n,a)=>K(n,Q(a));import{_ as Z,b as ee}from"./index.51a1eb25.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{d as te,e as w,r as ae,aL as c,be as oe,C as _,D as ne,aI as e,aH as t,bf as x,aE as f,u as $,aF as se,aN as p,b3 as ie,b4 as ue,bg as le,bi as ce,b9 as re,bk as me,aW as _e,b8 as pe,bm as de,bl as fe,bo as be,bq as ve}from"./arco.f15df757.js";import{u as ye}from"./loading.c87df9c1.js";import{i as Fe,j as ge}from"./system.4b0c3e9e.js";import"./chart.3ce5fa7c.js";import"./vue.b7a8a9c1.js";const Ee={class:"container"},xe=p(" \u67E5\u8BE2 "),Be=p(" \u65B0\u589E "),Ce=p(" \u67E5\u770B"),he=p(" \u7F16\u8F91 "),ke=p(" \u5220\u9664 "),De=te({__name:"list",setup(n){const{loading:a,setLoading:o}=ye(!0),B=w([]),d=w({name:""}),b={current:1,pageSize:20},v=ae(m({},b)),A=ee(),y=async(s={current:1,pageSize:20})=>{o(!0);try{const{data:i}=await Fe(s);B.value=i.list,v.current=s.current,v.total=i.total}catch{}finally{o(!1)}},C=()=>{y(m(m({},b),d.value))},V=s=>{y(T(m({},b),{current:s}))},z=s=>{try{ge(s),C()}catch{}finally{o(!1)}};return y(),(s,i)=>{const S=c("Breadcrumb"),I=ie,L=ue,F=le,g=ce,N=re,P=me,q=c("icon-search"),r=_e,O=c("icon-plus"),j=pe,u=de,H=c("icon-eye"),M=c("icon-edit"),R=c("icon-delete"),U=fe,W=be,G=ve,E=oe("permission");return _(),ne("div",Ee,[e(S,{items:["menu.system","menu.system.team"]},null,8,["items"]),e(G,{class:"general-card",style:{"padding-top":"30px"}},{default:t(()=>[e(g,null,{default:t(()=>[e(F,{flex:1},{default:t(()=>[e(N,{model:d.value,"label-col-props":{span:7},"wrapper-col-props":{span:17},"label-align":"left"},{default:t(()=>[e(g,{gutter:16},{default:t(()=>[e(F,{span:8},{default:t(()=>[e(L,{field:"name",label:"\u56E2\u961F\u540D\u79F0"},{default:t(()=>[e(I,{modelValue:d.value.name,"onUpdate:modelValue":i[0]||(i[0]=l=>d.value.name=l),placeholder:"\u8BF7\u8F93\u5165\u56E2\u961F\u540D\u79F0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),e(P,{style:{"margin-top":"0"}}),e(g,{style:{"margin-bottom":"16px"}},{default:t(()=>[e(F,{span:16},{default:t(()=>[e(j,null,{default:t(()=>[e(r,{type:"primary",onClick:C},{icon:t(()=>[e(q)]),default:t(()=>[xe]),_:1}),x((_(),f(r,{type:"primary",onClick:i[1]||(i[1]=l=>s.$router.push({name:"Teamedit"})),status:"success"},{icon:t(()=>[e(O)]),default:t(()=>[Be]),_:1})),[[E,["Teamedit"]]])]),_:1})]),_:1})]),_:1}),e(W,{"row-key":"id",loading:$(a),pagination:v,data:B.value,bordered:!1,"label-align":"center",onPageChange:V},{columns:t(()=>[e(u,{title:"\u56E2\u961Fid","data-index":"id"}),e(u,{title:"\u56E2\u961F\u540D\u79F0","data-index":"name"}),e(u,{title:"\u56E2\u961F\u4E3B\u7BA1","data-index":"manager"}),e(u,{title:"\u56E2\u961F\u4EBA\u6570","data-index":"usercount"}),e(u,{title:"\u521B\u5EFA\u65F6\u95F4","data-index":"create_time"}),e(u,{title:"\u64CD\u4F5C","data-index":"operations"},{cell:t(({record:l})=>[x((_(),f(r,{type:"text",size:"small",onClick:h=>s.$router.push({name:"Teampreview",params:{id:l.id}})},{default:t(()=>[e(H),Ce]),_:2},1032,["onClick"])),[[E,["Teampreview"]]]),x((_(),f(r,{type:"text",size:"small",onClick:h=>s.$router.push({name:"Teamedit",params:{id:l.id}})},{default:t(()=>[e(M),he]),_:2},1032,["onClick"])),[[E,["Teamedit"]]]),$(A).$state.buttonPermission.includes("Teamdel")?(_(),f(U,{key:0,content:"\u786E\u8BA4\u5220\u9664\u8BE5\u56E2\u961F\u4E48\uFF1F","ok-text":"\u786E\u8BA4","cancel-text":"\u53D6\u6D88",onOk:h=>z(l.id)},{default:t(()=>[e(r,{type:"text",size:"small"},{default:t(()=>[e(R),ke]),_:1})]),_:2},1032,["onOk"])):se("",!0)]),_:1})]),_:1},8,["loading","pagination","data"])]),_:1})])}}});var Ge=Z(De,[["__scopeId","data-v-1c00bcb5"]]);export{Ge as default};