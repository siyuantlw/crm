import{_ as H}from"./index.51a1eb25.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{d as L,e as f,aL as i,be as M,C as n,D as b,aI as e,aH as t,bf as r,aE as c,aN as l,aO as P,aF as w,b3 as W,b4 as j,bg as G,bh as J,bi as K,b9 as Q,bk as X,aW as Y,b8 as Z,bm as ee,bl as te,bo as ae,bq as ne}from"./arco.f15df757.js";import{g as oe,s as ue}from"./channel.8c8152ce.js";import"./chart.3ce5fa7c.js";import"./vue.b7a8a9c1.js";const le={class:"container"},se=l(" \u6E20\u9053\u5217\u8868 "),ie=l(" \u67E5\u8BE2 "),ce=l(" \u65B0\u589E "),_e={key:0,class:"circle"},pe={key:1,class:"circle pass"},me=l(" \u67E5\u770B"),re=l(" \u7F16\u8F91 "),de=l(" \u7ACB\u5373\u505C\u7528"),fe=l(" \u6062\u590D\u4F7F\u7528"),Ce=L({__name:"channel",setup(he){const V=f(),v=f([{id:"",type:"",config:"",token:"",name:"",remark:""}]),_=f({name:"",status:""}),$=f([{label:"\u6709\u6548",value:"1"},{label:"\u65E0\u6548",value:0}]),E=async()=>{try{const{data:o}=await oe(_.value);v.value=o.list}catch{}};E();const k=(o,u)=>{try{ue(o.id,u),o.status=u}catch{}finally{}};return(o,u)=>{const y=i("Breadcrumb"),A=W,F=j,d=G,O=J,C=K,x=Q,B=X,S=i("icon-search"),p=Y,z=i("icon-plus"),D=Z,s=ee,I=i("icon-eye"),N=i("icon-edit"),T=i("icon-lock"),g=te,R=i("icon-unlock"),U=ae,q=ne,m=M("permission");return n(),b("div",le,[e(y,{items:["menu.operate","menu.operate.channel"]},null,8,["items"]),e(x,{ref:"formRef",model:V.value,"label-align":"right","auto-label-width":""},{default:t(()=>[e(D,{direction:"vertical",size:16},{default:t(()=>[e(q,{class:"general-card"},{title:t(()=>[se]),default:t(()=>[e(C,null,{default:t(()=>[e(d,{flex:1},{default:t(()=>[e(x,{model:_.value,"label-col-props":{span:7},"wrapper-col-props":{span:17},"label-align":"left"},{default:t(()=>[e(C,{gutter:16},{default:t(()=>[e(d,{span:8},{default:t(()=>[e(F,{field:"name",label:"\u6E20\u9053\u540D\u79F0"},{default:t(()=>[e(A,{modelValue:_.value.name,"onUpdate:modelValue":u[0]||(u[0]=a=>_.value.name=a),placeholder:"\u8BF7\u8F93\u5165\u6E20\u9053\u540D\u79F0"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:8},{default:t(()=>[e(F,{field:"status",label:"\u6E20\u9053\u72B6\u6001"},{default:t(()=>[e(O,{modelValue:_.value.status,"onUpdate:modelValue":u[1]||(u[1]=a=>_.value.status=a),options:$.value,placeholder:"\u8BF7\u9009\u62E9\u6E20\u9053\u72B6\u6001","allow-clear":""},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(B,{style:{height:"38px"},direction:"vertical"})]),_:1}),e(B,{style:{"margin-top":"0"}}),e(C,{style:{"margin-bottom":"16px"}},{default:t(()=>[e(d,{span:16},{default:t(()=>[e(D,null,{default:t(()=>[e(p,{type:"primary",onClick:E},{icon:t(()=>[e(S)]),default:t(()=>[ie]),_:1}),r((n(),c(p,{type:"primary",onClick:u[2]||(u[2]=a=>o.$router.push({name:"ChannelEdit"})),status:"success"},{icon:t(()=>[e(z)]),default:t(()=>[ce]),_:1})),[[m,["ChannelEdit"]]])]),_:1})]),_:1})]),_:1}),e(U,{"row-key":"id",data:v.value,bordered:!1,"label-align":"center"},{columns:t(()=>[e(s,{title:"ID","data-index":"app_id"}),e(s,{title:"\u540D\u79F0","data-index":"name"}),e(s,{title:"\u6E20\u9053\u5C55\u793A\u540D\u79F0","data-index":"show_name"}),e(s,{title:"\u6E20\u9053\u6210\u672C(\u5143)","data-index":"cost"}),e(s,{title:"\u63A5\u5165\u65B9\u5F0F","data-index":"type"}),e(s,{title:"\u6E20\u9053\u72B6\u6001"},{cell:t(({record:a})=>[a.status==0?(n(),b("span",_e)):(n(),b("span",pe)),l(" "+P(a.status==0?"\u6682\u505C\u4F7F\u7528":"\u4F7F\u7528\u4E2D"),1)]),_:1}),e(s,{title:"\u64CD\u4F5C","data-index":"operations"},{cell:t(({record:a})=>[r((n(),c(p,{type:"text",size:"small",onClick:h=>o.$router.push({name:"ChannelView",params:{id:a.id}})},{default:t(()=>[e(I),me]),_:2},1032,["onClick"])),[[m,["ChannelView"]]]),r((n(),c(p,{type:"text",size:"small",onClick:h=>o.$router.push({name:"ChannelEdit",params:{id:a.id}})},{default:t(()=>[e(N),re]),_:2},1032,["onClick"])),[[m,["ChannelEdit"]]]),a.status==1?(n(),c(g,{key:0,content:"\u786E\u8BA4\u6267\u884C\u8BE5\u64CD\u4F5C\u4E48?","ok-text":"\u786E\u8BA4","cancel-text":"\u53D6\u6D88",onOk:h=>k(a,"0")},{default:t(()=>[r((n(),c(p,{type:"text",size:"small"},{default:t(()=>[e(T),de]),_:1})),[[m,["ChannelStatus"]]])]),_:2},1032,["onOk"])):w("",!0),a.status==0?(n(),c(g,{key:1,content:"\u786E\u8BA4\u6267\u884C\u8BE5\u64CD\u4F5C\u4E48?","ok-text":"\u786E\u8BA4","cancel-text":"\u53D6\u6D88",onOk:h=>k(a,"1")},{default:t(()=>[r((n(),c(p,{type:"text",size:"small"},{default:t(()=>[e(R),fe]),_:1})),[[m,["ChannelStatus"]]])]),_:2},1032,["onOk"])):w("",!0)]),_:1})]),_:1},8,["data"])]),_:1})]),_:1})]),_:1},8,["model"])])}}});var Ie=H(Ce,[["__scopeId","data-v-02f959f9"]]);export{Ie as default};