var q=Object.defineProperty,R=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var D=(n,a,o)=>a in n?q(n,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[a]=o,c=(n,a)=>{for(var o in a||(a={}))j.call(a,o)&&D(n,o,a[o]);if(C)for(var o of C(a))H.call(a,o)&&D(n,o,a[o]);return n},g=(n,a)=>R(n,U(a));import{_ as O}from"./index.51a1eb25.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{d as W,e as k,r as $,aL as b,C as h,D as G,aI as e,aH as t,u as J,aN as B,aO as K,aE as Q,aF as X,b3 as Y,b4 as Z,bg as ee,bj as te,bi as ae,b9 as oe,bk as ne,aW as le,b8 as se,bm as ie,bo as ue,bq as re}from"./arco.f15df757.js";import{u as ce}from"./loading.c87df9c1.js";import{a as _e,s as de}from"./dashboard.1ecfe025.js";import"./chart.3ce5fa7c.js";import"./vue.b7a8a9c1.js";const me={class:"container"},pe=B(" \u67E5\u8BE2 "),fe=B(" \u5DF2\u8BFB"),ge=W({__name:"list",setup(n){const{loading:a,setLoading:o}=ce(!0),v=k([]),u=k({name:"",time:[]}),d={current:1,pageSize:20},m=$(c({},d)),p=async(r={current:1,pageSize:20})=>{o(!0);try{const{data:s}=await _e(r);v.value=s.list,m.current=r.current,m.total=s.total}catch{}finally{o(!1)}},y=()=>{p(g(c(c({},d),u.value),{"time[]":u.value.time}))},w=r=>{p(g(c({},d),{current:r}))};async function V(r){await de({ids:[r]}),y()}return p(),(r,s)=>{const E=b("Breadcrumb"),A=Y,x=Z,_=ee,N=te,f=ae,S=oe,I=ne,L=b("icon-search"),F=le,z=se,i=ie,M=b("icon-eye"),P=ue,T=re;return h(),G("div",me,[e(E,{items:["menu.system.notice"]},null,8,["items"]),e(T,{class:"general-card",style:{"padding-top":"30px"}},{default:t(()=>[e(f,null,{default:t(()=>[e(_,{flex:1},{default:t(()=>[e(S,{model:u.value,"label-col-props":{span:7},"wrapper-col-props":{span:17},"label-align":"left"},{default:t(()=>[e(f,{gutter:16},{default:t(()=>[e(_,{span:8},{default:t(()=>[e(x,{field:"name",label:"\u5BA2\u6237\u540D\u79F0"},{default:t(()=>[e(A,{modelValue:u.value.name,"onUpdate:modelValue":s[0]||(s[0]=l=>u.value.name=l),placeholder:"\u8BF7\u8F93\u5165\u5BA2\u6237\u540D\u79F0"},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{span:10},{default:t(()=>[e(x,{field:"status",label:"\u63D0\u9192\u65F6\u95F4"},{default:t(()=>[e(N,{modelValue:u.value.time,"onUpdate:modelValue":s[1]||(s[1]=l=>u.value.time=l),style:{width:"100%"},"show-time":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),e(I,{style:{"margin-top":"0"}}),e(f,{style:{"margin-bottom":"16px"}},{default:t(()=>[e(_,{span:16},{default:t(()=>[e(z,null,{default:t(()=>[e(F,{type:"primary",onClick:y},{icon:t(()=>[e(L)]),default:t(()=>[pe]),_:1})]),_:1})]),_:1})]),_:1}),e(P,{"row-key":"id",loading:J(a),pagination:m,data:v.value,bordered:!1,"label-align":"center",onPageChange:w},{columns:t(()=>[e(i,{title:"id","data-index":"id"}),e(i,{title:"\u5BA2\u6237\u59D3\u540D","data-index":"name"}),e(i,{title:"\u65E5\u7A0B\u7C7B\u578B","data-index":"type"}),e(i,{title:"\u5907\u6CE8","data-index":"remark"}),e(i,{title:"\u63D0\u9192\u65F6\u95F4","data-index":"time"}),e(i,{title:"\u72B6\u6001","data-index":"is_read"},{cell:t(({record:l})=>[B(K(l.is_read==1?"\u5DF2\u8BFB":"\u672A\u8BFB"),1)]),_:1}),e(i,{title:"\u521B\u5EFA\u65F6\u95F4","data-index":"create_time"}),e(i,{title:"\u64CD\u4F5C","data-index":"operations"},{cell:t(({record:l})=>[l.is_read==0&&l.can_read==1?(h(),Q(F,{key:0,type:"text",size:"small",onClick:be=>V(l.id)},{default:t(()=>[e(M),fe]),_:2},1032,["onClick"])):X("",!0)]),_:1})]),_:1},8,["loading","pagination","data"])]),_:1})])}}});var Te=O(ge,[["__scopeId","data-v-f77e32a8"]]);export{Te as default};