var A=Object.defineProperty,I=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var B=(n,a,o)=>a in n?A(n,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[a]=o,w=(n,a)=>{for(var o in a||(a={}))L.call(a,o)&&B(n,o,a[o]);if(b)for(var o of b(a))U.call(a,o)&&B(n,o,a[o]);return n},k=(n,a)=>I(n,N(a));import{b as V}from"./index.51a1eb25.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{d as P,e as r,r as q,aL as G,C as _,D as H,aI as e,aH as c,aE as g,aF as y,aN as d,aO as m,u as O,G as C,bm as R,bn as j,bo as J}from"./arco.f15df757.js";import{u as K}from"./loading.c87df9c1.js";import{x as M}from"./custom.0ffb62ba.js";import{h as Q}from"./vue.b7a8a9c1.js";import"./chart.3ce5fa7c.js";const W=C("br",null,null,-1),X=C("br",null,null,-1),dt=P({__name:"channelDetail",setup(n,{expose:a}){V();const o=Q();r(),r("");const T=r("");r([]),r("success");const u=r({star:"",channel:"",status:"",timeType:"",time:[],followUserId:""}),{loading:S,setLoading:F}=K(!0),v=r([]),x={current:1,pageSize:5},h=q(w({},x)),E=async(i={current:1,pageSize:5,type:o.name})=>{F(!0);try{const{data:s}=await M({star:u.value.star,channel:u.value.channel,followUserId:u.value.followUserId,followStatus:u.value.status,timeType:u.value.timeType,"times[]":u.value.time,current:i.current,pageSize:i.pageSize,type:i.type});T.value=s.title,v.value=s.list,h.current=i.current,h.total=s.total}catch{}finally{F(!1)}},z=i=>{E(k(w({},x),{current:i,type:o.name}))};return a({fetchDataAll:(i,s,t,f,p,D)=>{u.value.channel=i,u.value.star=s,u.value.status=t,u.value.timeType=f,u.value.time=p,u.value.followUserId=D,console.log(u.value),E()}}),(i,s)=>{const t=R,f=G("icon-lock"),p=j,D=J;return _(),H("div",null,[e(D,{"row-key":"id",loading:O(S),pagination:h,data:v.value,bordered:!1,"label-align":"center",onPageChange:z},{columns:c(()=>[e(t,{title:"id","data-index":"id",width:80}),e(t,{title:"\u59D3\u540D","data-index":"name",width:100},{cell:c(({record:l})=>[l.lock==1?(_(),g(f,{key:0,style:{"margin-right":"5px"}})):y("",!0),d(m(l.name),1)]),_:1}),e(t,{title:"\u8DDF\u8FDB\u72B6\u6001","data-index":"follow_status",width:100},{cell:c(({record:l})=>[l.fstatuscolor?(_(),g(p,{key:0,color:l.fstatuscolor},{default:c(()=>[d(m(l.follow_status),1)]),_:2},1032,["color"])):y("",!0)]),_:1}),e(t,{title:"\u5E74\u9F84","data-index":"age",width:60}),e(t,{title:"\u57CE\u5E02","data-index":"city",width:60}),e(t,{title:"\u7533\u8BF7\u91D1\u989D","data-index":"amount",width:90}),e(t,{title:"\u8D44\u8D28","data-index":"zizhi",width:160}),e(t,{title:"\u661F\u7EA7",width:60},{cell:c(({record:l})=>[l.starcolor?(_(),g(p,{key:0,color:l.starcolor},{default:c(()=>[d(m(l.star),1)]),_:2},1032,["color"])):y("",!0)]),_:1}),e(t,{title:"\u8DDF\u8FDB\u5907\u6CE8","data-index":"remark",width:200}),e(t,{title:"\u5206\u914D\u540E\u672A\u8DDF\u8FDB\u65F6\u95F4","data-index":"notFollowTime",width:145}),e(t,{title:"\u8DDF\u8FDB/\u5206\u914D/\u7533\u8BF7\u65F6\u95F4",width:180},{cell:c(({record:l})=>[d(m(l.follow_time)+" ",1),W,d(" "+m(l.assign_time)+" ",1),X,d(" "+m(l.apply_time),1)]),_:1}),e(t,{title:"\u8DDF\u8FDB\u987E\u95EE","data-index":"follow_user",width:90}),e(t,{title:"\u6570\u636E\u6765\u6E90","data-index":"source",width:90}),e(t,{title:"\u5BA2\u6237\u6765\u6E90","data-index":"user_from",width:90})]),_:1},8,["loading","pagination","data"])])}}});export{dt as default};
