var Ft=Object.defineProperty,bt=Object.defineProperties;var yt=Object.getOwnPropertyDescriptors;var Ie=Object.getOwnPropertySymbols;var Bt=Object.prototype.hasOwnProperty,Dt=Object.prototype.propertyIsEnumerable;var Le=(u,a,d)=>a in u?Ft(u,a,{enumerable:!0,configurable:!0,writable:!0,value:d}):u[a]=d,V=(u,a)=>{for(var d in a||(a={}))Bt.call(a,d)&&Le(u,d,a[d]);if(Ie)for(var d of Ie(a))Dt.call(a,d)&&Le(u,d,a[d]);return u},I=(u,a)=>bt(u,yt(a));import{_ as M,b as Ne}from"./index.51a1eb25.js";/* empty css              *//* empty css              *//* empty css              */import{d as Y,e as y,c as K,aL as Oe,be as gt,C as B,D as L,aI as e,aH as t,u as f,aE as A,aN as s,aO as R,aF as U,bf as Se,aK as ie,aJ as re,G as Q,ba as ht,bb as xt,aV as N,aW as Et,bl as Ct,b8 as At,b3 as wt,b4 as Vt,bg as kt,bi as Ut,bh as It,bt as Lt,bq as qe,bu as St,bn as zt,bv as $t,bw as Pt,bx as Tt,by as Rt,bz as Nt,b9 as Ot,bA as qt,bk as Mt,br as Yt,aT as jt,r as ae,bm as oe,bo as le,bB as Zt,bC as Ht}from"./arco.f15df757.js";import{f as Gt,h as j}from"./vue.b7a8a9c1.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{h as Jt,j as Kt,k as Wt,l as Qt,m as Xt,n as eu,o as tu,p as uu,r as au,t as ou,u as lu,v as nu,w as su}from"./custom.0ffb62ba.js";import{u as X}from"./loading.c87df9c1.js";import{s as du}from"./customernum.1eea9bff.js";/* empty css              *//* empty css              */import"./chart.3ce5fa7c.js";const Me="3.7.2",iu=Me,ru=typeof atob=="function",cu=typeof btoa=="function",Z=typeof Buffer=="function",ze=typeof TextDecoder=="function"?new TextDecoder:void 0,$e=typeof TextEncoder=="function"?new TextEncoder:void 0,_u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",W=Array.prototype.slice.call(_u),te=(u=>{let a={};return u.forEach((d,r)=>a[d]=r),a})(W),pu=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,C=String.fromCharCode.bind(String),Pe=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):(u,a=d=>d)=>new Uint8Array(Array.prototype.slice.call(u,0).map(a)),Ye=u=>u.replace(/=/g,"").replace(/[+\/]/g,a=>a=="+"?"-":"_"),je=u=>u.replace(/[^A-Za-z0-9\+\/]/g,""),Ze=u=>{let a,d,r,F,c="";const E=u.length%3;for(let m=0;m<u.length;){if((d=u.charCodeAt(m++))>255||(r=u.charCodeAt(m++))>255||(F=u.charCodeAt(m++))>255)throw new TypeError("invalid character found");a=d<<16|r<<8|F,c+=W[a>>18&63]+W[a>>12&63]+W[a>>6&63]+W[a&63]}return E?c.slice(0,E-3)+"===".substring(E):c},pe=cu?u=>btoa(u):Z?u=>Buffer.from(u,"binary").toString("base64"):Ze,ce=Z?u=>Buffer.from(u).toString("base64"):u=>{let d=[];for(let r=0,F=u.length;r<F;r+=4096)d.push(C.apply(null,u.subarray(r,r+4096)));return pe(d.join(""))},ue=(u,a=!1)=>a?Ye(ce(u)):ce(u),mu=u=>{if(u.length<2){var a=u.charCodeAt(0);return a<128?u:a<2048?C(192|a>>>6)+C(128|a&63):C(224|a>>>12&15)+C(128|a>>>6&63)+C(128|a&63)}else{var a=65536+(u.charCodeAt(0)-55296)*1024+(u.charCodeAt(1)-56320);return C(240|a>>>18&7)+C(128|a>>>12&63)+C(128|a>>>6&63)+C(128|a&63)}},fu=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,He=u=>u.replace(fu,mu),Te=Z?u=>Buffer.from(u,"utf8").toString("base64"):$e?u=>ce($e.encode(u)):u=>pe(He(u)),q=(u,a=!1)=>a?Ye(Te(u)):Te(u),Re=u=>q(u,!0),vu=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,Fu=u=>{switch(u.length){case 4:var a=(7&u.charCodeAt(0))<<18|(63&u.charCodeAt(1))<<12|(63&u.charCodeAt(2))<<6|63&u.charCodeAt(3),d=a-65536;return C((d>>>10)+55296)+C((d&1023)+56320);case 3:return C((15&u.charCodeAt(0))<<12|(63&u.charCodeAt(1))<<6|63&u.charCodeAt(2));default:return C((31&u.charCodeAt(0))<<6|63&u.charCodeAt(1))}},Ge=u=>u.replace(vu,Fu),Je=u=>{if(u=u.replace(/\s+/g,""),!pu.test(u))throw new TypeError("malformed base64.");u+="==".slice(2-(u.length&3));let a,d="",r,F;for(let c=0;c<u.length;)a=te[u.charAt(c++)]<<18|te[u.charAt(c++)]<<12|(r=te[u.charAt(c++)])<<6|(F=te[u.charAt(c++)]),d+=r===64?C(a>>16&255):F===64?C(a>>16&255,a>>8&255):C(a>>16&255,a>>8&255,a&255);return d},me=ru?u=>atob(je(u)):Z?u=>Buffer.from(u,"base64").toString("binary"):Je,Ke=Z?u=>Pe(Buffer.from(u,"base64")):u=>Pe(me(u),a=>a.charCodeAt(0)),We=u=>Ke(Qe(u)),bu=Z?u=>Buffer.from(u,"base64").toString("utf8"):ze?u=>ze.decode(Ke(u)):u=>Ge(me(u)),Qe=u=>je(u.replace(/[-_]/g,a=>a=="-"?"+":"/")),_e=u=>bu(Qe(u)),yu=u=>{if(typeof u!="string")return!1;const a=u.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(a)||!/[^\s0-9a-zA-Z\-_]/.test(a)},Xe=u=>({value:u,enumerable:!1,writable:!0,configurable:!0}),et=function(){const u=(a,d)=>Object.defineProperty(String.prototype,a,Xe(d));u("fromBase64",function(){return _e(this)}),u("toBase64",function(a){return q(this,a)}),u("toBase64URI",function(){return q(this,!0)}),u("toBase64URL",function(){return q(this,!0)}),u("toUint8Array",function(){return We(this)})},tt=function(){const u=(a,d)=>Object.defineProperty(Uint8Array.prototype,a,Xe(d));u("toBase64",function(a){return ue(this,a)}),u("toBase64URI",function(){return ue(this,!0)}),u("toBase64URL",function(){return ue(this,!0)})},Bu=()=>{et(),tt()},Du={version:Me,VERSION:iu,atob:me,atobPolyfill:Je,btoa:pe,btoaPolyfill:Ze,fromBase64:_e,toBase64:q,encode:q,encodeURI:Re,encodeURL:Re,utob:He,btou:Ge,decode:_e,isValid:yu,fromUint8Array:ue,toUint8Array:We,extendString:et,extendUint8Array:tt,extendBuiltins:Bu};const ne=u=>(ht("data-v-50b54ade"),u=u(),xt(),u),gu={class:"container baseinfo"},hu=s(" \u4E2A\u4EBA\u4FE1\u606F "),xu=s("\u79FB\u5165\u516C\u6D77"),Eu=s("\u6DFB\u52A0\u65E5\u7A0B"),Cu=s("\u6DFB\u52A0\u56DE\u6B3E"),Au=s("\u8BBE\u4E3A\u65E0\u6548"),wu=ne(()=>Q("br",null,null,-1)),Vu=s(" \u8DDF\u8FDB\u8BB0\u5F55 "),ku=s(" \u5BA2\u6237\u4FE1\u606F "),Uu=s("\u5143"),Iu=s("\u7537"),Lu=s("\u5973"),Su=s("\u5C81"),zu=s("\u672A\u5A5A"),$u=s("\u5DF2\u5A5A"),Pu=s("\u79BB\u5F02"),Tu=s("\u4E07\u5143"),Ru=s("\u672A\u77E5"),Nu=s("\u65E0\u623F"),Ou=s("\u672C\u5730\u623F"),qu=s("\u5916\u5730\u623F"),Mu=s("\u672A\u77E5"),Yu=s("\u6709\u8F66"),ju=s("\u65E0\u8F66"),Zu=s("\u672A\u77E5"),Hu=s("\u6709\u4FDD\u5355"),Gu=s("\u65E0\u4FDD\u5355"),Ju=s("\u672A\u77E5"),Ku=s("\u6709"),Wu=s("\u65E0"),Qu=s("\u672A\u77E5"),Xu=s("\u6709\u516C\u79EF\u91D1"),ea=s("\u65E0\u516C\u79EF\u91D1"),ta=s("\u672A\u77E5"),ua=s("\u6709\u793E\u4FDD"),aa=s("\u65E0\u793E\u4FDD"),oa=s("\u672A\u77E5"),la=s("\u65E0\u903E\u671F"),na=s("\u6709\u903E\u671F"),sa={class:"actions"},da=s(" \u8FD4\u56DE "),ia=s(" \u63D0\u4EA4 "),ra=s(" \u63D0\u4EA4\u5E76\u8DDF\u8FDB\u4E0B\u4E00\u4E2A "),ca=s(" \u5F85\u529E\u65E5\u7A0B "),_a=s("\u6DFB\u52A0\u65E5\u7A0B"),pa=s(" \xA0 "),ma=s(" \xA0 "),fa=s(" \xA0 "),va=ne(()=>Q("br",null,null,-1)),Fa=ne(()=>Q("br",null,null,-1)),ba=ne(()=>Q("br",null,null,-1)),ya=s("\u4FDD\u5B58"),Ba=s(" \u6DFB\u52A0\u56DE\u6B3E "),Da=s("\u5143"),ga=s("%"),ha=s("\u5143"),xa=s("\u5143"),Ea=s("\u4FDD\u5B58"),Ca=Y({__name:"base-info",props:{activekey:{required:!0}},setup(u){const a=y(),d=y(),r=Ne(),F=y(!1),c=y(!1),E=Gt(),m=j(),n=y({}),k=y(),p=y([{type:1}]),b=y(m.params.id),{loading:_,setLoading:S}=X(),D=y({hetong:"",amount:"",quanzheng:"",date:"",product_id:"",agency_fee:"",remark:"",realmoney:"",cost:""}),fe=y([]),ve=()=>{D.value.realmoney=D.value.amount*D.value.agency_fee/100},ut=K(()=>n.value.important===0?"\u6807\u8BB0\u91CD\u8981":"\u53D6\u6D88\u91CD\u8981"),at=K(()=>n.value.important===0?"\u786E\u8BA4\u5C06\u5F53\u524D\u5BA2\u6237\u6807\u8BB0\u91CD\u8981\u4E48?":"\u786E\u8BA4\u53D6\u6D88\u5F53\u524D\u5BA2\u6237\u7684\u91CD\u8981\u6807\u8BB0\u4E48?"),ot=K(()=>n.value.lock===0?"\u9501\u5B9A\u5BA2\u6237":"\u89E3\u9501\u5BA2\u6237"),lt=K(()=>n.value.lock===0?"\u786E\u8BA4\u9501\u5B9A\u5F53\u524D\u5BA2\u6237\u4E48?":"\u786E\u8BA4\u89E3\u9501\u5F53\u524D\u5BA2\u6237\u4E48?");y(!1);const Fe=y([]),be=y([]),ye=y([]),Be=y([]),De=y([]);(async()=>{try{const{data:i}=await Jt(b.value);b.value!==""&&b.value!==void 0&&(n.value=i.customInfo),n.value.notices=[],Be.value=i.workList,be.value=i.followStatusList,ye.value=i.starList,Fe.value=i.cityList,De.value=i.noticesList,fe.value=i.productList,a.value=i.logList,document.title=[i.customInfo.id,i.customInfo.name].join(" - ")}catch(i){console.log(i)}finally{}})();const nt=async()=>{try{let i=0;n.value.important===0&&(i=1),await Kt(n.value.id,i),N.success({content:"\u64CD\u4F5C\u6210\u529F",duration:5*1e3}),n.value.important=i}catch(i){console.log(i)}},st=async()=>{try{let i=0;n.value.lock===0&&(i=1),await Wt(n.value.id,i),N.success({content:"\u64CD\u4F5C\u6210\u529F",duration:5*1e3}),n.value.lock=i}catch(i){console.log(i)}},dt=async()=>{try{await Qt(n.value.id),N.success({content:"\u64CD\u4F5C\u6210\u529F",duration:5*1e3}),E.push({name:"CustomerList"})}catch(i){console.log(i)}},it=async()=>{F.value=!0,d.value=[];try{const{data:i}=await Xt(n.value.id);d.value=i.list}catch(i){console.log(i)}},rt=async()=>{try{const{data:i}=await eu(n.value.id,p.value);F.value=!1,N.success({content:"\u64CD\u4F5C\u6210\u529F",duration:5*1e3}),p.value=[],p.value=[{type:1}]}catch(i){console.log(i)}},ct=async()=>{c.value=!0},_t=async()=>{try{const{data:i}=await tu(n.value.id,D.value);c.value=!1,N.success({content:"\u64CD\u4F5C\u6210\u529F",duration:5*1e3}),D.value={hetong:"",amount:"",quanzheng:"",date:"",product_id:"",agency_fee:"",remark:"",realmoney:"",cost:""}}catch(i){console.log(i)}},pt=async()=>{try{const{data:i}=await uu(n.value.id,"0");N.success({content:"\u64CD\u4F5C\u6210\u529F",duration:5*1e3}),E.push({name:"CustomerList"})}catch(i){console.log(i)}},ge=K(function(){const i=Du.decode(m.params.allIds).split("-");let l="";for(let x=0;x<i.length;x+=1)if(i[x]===m.params.id&&x<i.length-1){l=i[x+1];break}return l}),mt=()=>{E.push({name:m.name,params:{id:ge.value,allIds:m.params.allIds}})},he=async i=>{var l;try{if(await((l=k.value)==null?void 0:l.validate()))return;const{data:H}=await au(n.value);n.value.notices=[],N.success({content:"\u64CD\u4F5C\u6210\u529F",duration:3*1e3}),du(),i?setTimeout(function(){window.opener=null,window.open("","_self"),window.close()},500):mt()}catch{}finally{}};return(i,l)=>{const x=Et,H=Ct,G=At,$=wt,v=Vt,h=kt,w=Ut,z=It,xe=Lt,se=qe,de=St,Ee=zt,Ce=$t,Ae=Pt,J=Tt,g=Rt,P=Nt,we=Ot,Ve=qt,ft=Oe("icon-close"),vt=Mt,ke=Yt,ee=jt,Ue=gt("permission");return B(),L("div",gu,[e(we,{ref_key:"formRef",ref:k,model:n.value,"label-align":"right","auto-label-width":"",disabled:f(m).name=="CustomerPreview"},{default:t(()=>[e(G,{direction:"vertical",size:16},{default:t(()=>[e(w,{gutter:10},{default:t(()=>[e(h,{span:14},{default:t(()=>[e(se,{class:"general-card"},{title:t(()=>[hu]),extra:t(()=>[(f(m).name=="CustomerFollow"||f(m).name=="CustomerEdit")&&b.value!==""&&b.value!==void 0?(B(),A(G,{key:0,style:{"margin-left":"20px"}},{default:t(()=>[f(r).$state.buttonPermission.includes("CustomerImportant")?(B(),A(H,{key:0,content:f(at),"ok-text":"\u786E\u8BA4","cancel-text":"\u53D6\u6D88",onOk:l[0]||(l[0]=o=>nt())},{default:t(()=>[e(x,{type:"primary",size:"mini"},{default:t(()=>[s(R(f(ut)),1)]),_:1})]),_:1},8,["content"])):U("",!0),f(r).$state.buttonPermission.includes("CustomerLock")?(B(),A(H,{key:1,content:f(lt),"ok-text":"\u786E\u8BA4","cancel-text":"\u53D6\u6D88",onOk:l[1]||(l[1]=o=>st())},{default:t(()=>[e(x,{type:"primary",size:"mini"},{default:t(()=>[s(R(f(ot)),1)]),_:1})]),_:1},8,["content"])):U("",!0),f(r).$state.buttonPermission.includes("CustomerGiveup")?(B(),A(H,{key:2,content:"\u786E\u8BA4\u5C06\u5BA2\u6237\u79FB\u5165\u516C\u6D77\u4E48\uFF1F","ok-text":"\u786E\u8BA4","cancel-text":"\u53D6\u6D88",onOk:l[2]||(l[2]=o=>dt())},{default:t(()=>[e(x,{type:"primary",size:"mini"},{default:t(()=>[xu]),_:1})]),_:1})):U("",!0),Se((B(),A(x,{type:"primary",size:"mini",onClick:it},{default:t(()=>[Eu]),_:1})),[[Ue,["CustomerAddNotice"]]]),Se((B(),A(x,{type:"primary",size:"mini",onClick:ct},{default:t(()=>[Cu]),_:1})),[[Ue,["CustomerAddBack"]]]),f(r).$state.buttonPermission.includes("CustomerLahei")&&n.value.status=="1"?(B(),A(H,{key:3,content:"\u786E\u8BA4\u5C06\u5BA2\u6237\u8BBE\u4E3A\u65E0\u6548\uFF1F","ok-text":"\u786E\u8BA4","cancel-text":"\u53D6\u6D88",onOk:l[3]||(l[3]=o=>pt())},{default:t(()=>[e(x,{type:"primary",size:"mini"},{default:t(()=>[Au]),_:1})]),_:1})):U("",!0)]),_:1})):U("",!0)]),default:t(()=>[e(w,null,{default:t(()=>[e(h,{span:12},{default:t(()=>[e(v,{label:"\u5BA2\u6237\u59D3\u540D",field:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D"}]},{default:t(()=>[e($,{modelValue:n.value.name,"onUpdate:modelValue":l[4]||(l[4]=o=>n.value.name=o),placeholder:"\u8BF7\u8F93\u5165\u5BA2\u6237\u59D3\u540D"},null,8,["modelValue"])]),_:1})]),_:1}),e(h,{span:12},{default:t(()=>[e(v,{label:"\xA0\xA0\u8054\u7CFB\u7535\u8BDD",field:"mobile",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD"}]},{default:t(()=>[e($,{modelValue:n.value.mobile,"onUpdate:modelValue":l[5]||(l[5]=o=>n.value.mobile=o),placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD",disabled:f(m).params.id>0&&!f(r).$state.buttonPermission.includes("CustomerEditMobile")},null,8,["modelValue","disabled"])]),_:1})]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(h,{span:12,width:100},{default:t(()=>[e(v,{label:"\u8DDF\u8FDB\u72B6\u6001"},{default:t(()=>[e(z,{placeholder:"\u8BF7\u9009\u62E9\u8DDF\u8FDB\u72B6\u6001",modelValue:n.value.follow_status,"onUpdate:modelValue":l[6]||(l[6]=o=>n.value.follow_status=o),options:be.value,"allow-clear":""},null,8,["modelValue","options"])]),_:1})]),_:1}),e(h,{span:12},{default:t(()=>[e(v,{label:"\u661F\u7EA7\u8BC4\u5206"},{default:t(()=>[e(z,{placeholder:"\u8BF7\u9009\u62E9\u661F\u7EA7\u8BC4\u5206",modelValue:n.value.star,"onUpdate:modelValue":l[7]||(l[7]=o=>n.value.star=o),options:ye.value,"allow-clear":""},null,8,["modelValue","options"])]),_:1})]),_:1}),e(h,{span:24},{default:t(()=>[e(v,{label:"\u8DDF\u8FDB\u5907\u6CE8"},{default:t(()=>[e(xe,{modelValue:n.value.remark,"onUpdate:modelValue":l[8]||(l[8]=o=>n.value.remark=o),placeholder:"\u8BF7\u8F93\u5165\u8DDF\u8FDB\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),wu,e(se,{class:"general-card","body-style":{"overflow-y":"scroll","margin-top":"20"}},{title:t(()=>[Vu]),default:t(()=>[e(Ae,null,{default:t(()=>[(B(!0),L(ie,null,re(a.value,(o,T)=>(B(),A(Ce,{label:o.day,lineType:"dashed",key:T},{default:t(()=>[e(de,{type:"secondary",style:{fontSize:"12px",marginTop:"4px","line-height":"28px"}},{default:t(()=>[s(R(T+1)+" \xA0 ",1)]),_:2},1024),e(Ee,{size:"small",color:o.color},{default:t(()=>[s(R(o.type),1)]),_:2},1032,["color"]),e(de,{type:"secondary",style:{fontSize:"12px",marginTop:"4px","line-height":"28px"}},{default:t(()=>[s(" \xA0 "+R(o.remark),1)]),_:2},1024)]),_:2},1032,["label"]))),128))]),_:1})]),_:1})]),_:1}),e(h,{span:10},{default:t(()=>[e(se,{class:"general-card"},{title:t(()=>[ku]),default:t(()=>[e(w,null,{default:t(()=>[e(h,{span:12},{default:t(()=>[e(v,{label:"\u7533\u8BF7\u91D1\u989D"},{default:t(()=>[e($,{modelValue:n.value.amount,"onUpdate:modelValue":l[9]||(l[9]=o=>n.value.amount=o),placeholder:"\u8BF7\u8F93\u5165\u7533\u8BF7\u91D1\u989D"},{append:t(()=>[Uu]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(h,{span:12},{default:t(()=>[e(v,{label:"\u5BA2\u6237\u6027\u522B"},{default:t(()=>[e(z,{placeholder:"\u8BF7\u9009\u62E9\u5BA2\u6237\u6027\u522B",modelValue:n.value.sex,"onUpdate:modelValue":l[10]||(l[10]=o=>n.value.sex=o),"allow-clear":""},{default:t(()=>[e(J,{value:1},{default:t(()=>[Iu]),_:1}),e(J,{value:2},{default:t(()=>[Lu]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(h,{span:12},{default:t(()=>[e(v,{label:"\u5BA2\u6237\u5E74\u9F84"},{default:t(()=>[e($,{modelValue:n.value.age,"onUpdate:modelValue":l[11]||(l[11]=o=>n.value.age=o),placeholder:"\u8BF7\u8F93\u5165\u5BA2\u6237\u5E74\u9F84"},{append:t(()=>[Su]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(h,{span:12},{default:t(()=>[e(v,{label:"\u5A5A\u59FB\u72B6\u51B5"},{default:t(()=>[e(z,{placeholder:"\u8BF7\u9009\u62E9\u5A5A\u59FB\u72B6\u51B5",modelValue:n.value.marry,"onUpdate:modelValue":l[12]||(l[12]=o=>n.value.marry=o),"allow-clear":""},{default:t(()=>[e(J,{value:1},{default:t(()=>[zu]),_:1}),e(J,{value:2},{default:t(()=>[$u]),_:1}),e(J,{value:3},{default:t(()=>[Pu]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(h,{span:12},{default:t(()=>[e(v,{label:"\u804C\u4E1A\u8EAB\u4EFD"},{default:t(()=>[e(z,{placeholder:"\u8BF7\u9009\u62E9\u804C\u4E1A\u8EAB\u4EFD",modelValue:n.value.work,"onUpdate:modelValue":l[13]||(l[13]=o=>n.value.work=o),options:Be.value,"allow-clear":""},null,8,["modelValue","options"])]),_:1})]),_:1}),e(h,{span:12},{default:t(()=>[e(v,{label:"\u5E74\u6536\u5165"},{default:t(()=>[e($,{modelValue:n.value.income,"onUpdate:modelValue":l[14]||(l[14]=o=>n.value.income=o),placeholder:"\u8BF7\u8F93\u5165\u5E74\u6536\u5165"},{append:t(()=>[Tu]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(h,{span:12},{default:t(()=>[e(v,{label:"\u7533\u8BF7\u57CE\u5E02"},{default:t(()=>[e(z,{modelValue:n.value.city,"onUpdate:modelValue":l[15]||(l[15]=o=>n.value.city=o),options:Fe.value,placeholder:"\u8BF7\u9009\u62E9\u57CE\u5E02","allow-clear":""},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(h,{span:24},{default:t(()=>[e(v,{label:"\u623F\u4EA7\u4FE1\u606F"},{default:t(()=>[e(P,{type:"button",modelValue:n.value.house,"onUpdate:modelValue":l[16]||(l[16]=o=>n.value.house=o)},{default:t(()=>[e(g,{value:0},{default:t(()=>[Ru]),_:1}),e(g,{value:1},{default:t(()=>[Nu]),_:1}),e(g,{value:2},{default:t(()=>[Ou]),_:1}),e(g,{value:3},{default:t(()=>[qu]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(h,{span:24},{default:t(()=>[e(v,{label:"\u8F66\u8F86\u4FE1\u606F"},{default:t(()=>[e(P,{type:"button",modelValue:n.value.car,"onUpdate:modelValue":l[17]||(l[17]=o=>n.value.car=o)},{default:t(()=>[e(g,{value:0},{default:t(()=>[Mu]),_:1}),e(g,{value:2},{default:t(()=>[Yu]),_:1}),e(g,{value:1},{default:t(()=>[ju]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(h,{span:24},{default:t(()=>[e(v,{label:"\u4FDD\u5355\u4FE1\u606F"},{default:t(()=>[e(P,{type:"button",modelValue:n.value.policy,"onUpdate:modelValue":l[18]||(l[18]=o=>n.value.policy=o)},{default:t(()=>[e(g,{value:0},{default:t(()=>[Zu]),_:1}),e(g,{value:2},{default:t(()=>[Hu]),_:1}),e(g,{value:1},{default:t(()=>[Gu]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(h,{span:24},{default:t(()=>[e(v,{label:"\u6253\u5361\u5DE5\u8D44"},{default:t(()=>[e(P,{type:"button",modelValue:n.value.wage,"onUpdate:modelValue":l[19]||(l[19]=o=>n.value.wage=o)},{default:t(()=>[e(g,{value:0},{default:t(()=>[Ju]),_:1}),e(g,{value:2},{default:t(()=>[Ku]),_:1}),e(g,{value:1},{default:t(()=>[Wu]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(h,{span:24},{default:t(()=>[e(v,{label:"\u516C\u79EF\u91D1\u4FE1\u606F"},{default:t(()=>[e(P,{type:"button",modelValue:n.value.funds,"onUpdate:modelValue":l[20]||(l[20]=o=>n.value.funds=o)},{default:t(()=>[e(g,{value:0},{default:t(()=>[Qu]),_:1}),e(g,{value:2},{default:t(()=>[Xu]),_:1}),e(g,{value:1},{default:t(()=>[ea]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(h,{span:24},{default:t(()=>[e(v,{label:"\u793E\u4FDD\u4FE1\u606F"},{default:t(()=>[e(P,{type:"button",modelValue:n.value.insurance,"onUpdate:modelValue":l[21]||(l[21]=o=>n.value.insurance=o)},{default:t(()=>[e(g,{value:0},{default:t(()=>[ta]),_:1}),e(g,{value:2},{default:t(()=>[ua]),_:1}),e(g,{value:1},{default:t(()=>[aa]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(w,null,{default:t(()=>[e(h,{span:24},{default:t(()=>[e(v,{label:"\u4FE1\u7528\u60C5\u51B5"},{default:t(()=>[e(P,{type:"button",modelValue:n.value.credit,"onUpdate:modelValue":l[22]||(l[22]=o=>n.value.credit=o)},{default:t(()=>[e(g,{value:0},{default:t(()=>[oa]),_:1}),e(g,{value:1},{default:t(()=>[la]),_:1}),e(g,{value:2},{default:t(()=>[na]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model","disabled"]),Q("div",sa,[e(G,null,{default:t(()=>[e(x,{onClick:l[23]||(l[23]=o=>f(E).back())},{default:t(()=>[da]),_:1}),(u.activekey==1||u.activekey==null)&&f(m).name!="CustomerPreview"?(B(),A(x,{key:0,type:"primary",loading:f(_),onClick:l[24]||(l[24]=o=>he(!0))},{default:t(()=>[ia]),_:1},8,["loading"])):U("",!0),(u.activekey==1||u.activekey==null)&&f(m).name=="CustomerFollow"&&f(ge)!=""?(B(),A(x,{key:1,type:"primary",loading:f(_),onClick:l[25]||(l[25]=o=>he(!1))},{default:t(()=>[ra]),_:1},8,["loading"])):U("",!0)]),_:1})]),e(ke,{visible:F.value,"onUpdate:visible":l[28]||(l[28]=o=>F.value=o),width:700,footer:!1},{title:t(()=>[ca]),default:t(()=>[e(G,{size:10,direction:"vertical"},{default:t(()=>[e(x,{size:"mini",onClick:l[26]||(l[26]=o=>p.value.push({date:"",type:1,remark:""}))},{default:t(()=>[_a]),_:1}),(B(!0),L(ie,null,re(p.value,(o,T)=>(B(),A(G,{size:2,key:T},{default:t(()=>[e(Ve,{"show-time":"",format:"YYYY-MM-DD HH:mm:ss",style:{width:"200px"},modelValue:o.date,"onUpdate:modelValue":O=>o.date=O},null,8,["modelValue","onUpdate:modelValue"]),pa,e(z,{placeholder:"\u8BF7\u9009\u62E9\u8DDF\u8FDB\u72B6\u6001",modelValue:o.type,"onUpdate:modelValue":O=>o.type=O,options:De.value,"allow-clear":""},null,8,["modelValue","onUpdate:modelValue","options"]),ma,e($,{modelValue:o.remark,"onUpdate:modelValue":O=>o.remark=O,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",style:{width:"300px"}},null,8,["modelValue","onUpdate:modelValue"]),fa,e(ft,{onClick:O=>{p.value.splice(T,1)}},null,8,["onClick"])]),_:2},1024))),128))]),_:1}),va,Fa,e(Ae,{direction:"horizontal"},{default:t(()=>[(B(!0),L(ie,null,re(d.value,(o,T)=>(B(),A(Ce,{label:o.day,lineType:"dashed",key:T},{default:t(()=>[e(Ee,{size:"small",color:o.color},{default:t(()=>[s(R(o.type),1)]),_:2},1032,["color"]),ba,e(de,{type:"secondary",style:{fontSize:"12px",marginTop:"4px","line-height":"28px"}},{default:t(()=>[s(R(o.remark),1)]),_:2},1024)]),_:2},1032,["label"]))),128))]),_:1}),e(vt),e(x,{type:"primary",onClick:l[27]||(l[27]=o=>rt())},{default:t(()=>[ya]),_:1})]),_:1},8,["visible"]),e(ke,{visible:c.value,"onUpdate:visible":l[37]||(l[37]=o=>c.value=o),width:700,footer:!1},{title:t(()=>[Ba]),default:t(()=>[e(we,{model:D.value},{default:t(()=>[e(v,{field:"date",label:"\u653E\u6B3E\u65F6\u95F4"},{default:t(()=>[e(Ve,{"show-time":"",format:"YYYY-MM-DD HH:mm:ss",modelValue:D.value.date,"onUpdate:modelValue":l[29]||(l[29]=o=>D.value.date=o)},null,8,["modelValue"])]),_:1}),e(v,{field:"amount",label:"\u653E\u6B3E\u91D1\u989D"},{default:t(()=>[e(ee,{modelValue:D.value.amount,"onUpdate:modelValue":l[30]||(l[30]=o=>D.value.amount=o),placeholder:"\u8BF7\u8F93\u5165\u653E\u6B3E\u91D1\u989D","hide-button":"",onChange:ve},{append:t(()=>[Da]),_:1},8,["modelValue"])]),_:1}),e(v,{field:"agency_fee",label:"\u70B9\u4F4D(%)"},{default:t(()=>[e(ee,{modelValue:D.value.agency_fee,"onUpdate:modelValue":l[31]||(l[31]=o=>D.value.agency_fee=o),placeholder:"\u8BF7\u8F93\u5165\u70B9\u4F4D","hide-button":"",onChange:ve},{append:t(()=>[ga]),_:1},8,["modelValue"])]),_:1}),e(v,{field:"agency_fee",label:"\u5B9E\u9645\u521B\u6536"},{default:t(()=>[e(ee,{modelValue:D.value.realmoney,"onUpdate:modelValue":l[32]||(l[32]=o=>D.value.realmoney=o),placeholder:"","hide-button":""},{append:t(()=>[ha]),_:1},8,["modelValue"])]),_:1}),e(v,{field:"cost",label:"\u6210\u672C\u8D39\u7528"},{default:t(()=>[e(ee,{modelValue:D.value.cost,"onUpdate:modelValue":l[33]||(l[33]=o=>D.value.cost=o),placeholder:"\u8BF7\u8F93\u5165\u6210\u672C\u8D39\u7528","hide-button":""},{append:t(()=>[xa]),_:1},8,["modelValue"])]),_:1}),e(v,{field:"hetong",label:"\u5408\u540C\u7F16\u53F7"},{default:t(()=>[e($,{modelValue:D.value.hetong,"onUpdate:modelValue":l[34]||(l[34]=o=>D.value.hetong=o),placeholder:"\u8BF7\u8F93\u5165\u5408\u540C\u7F16\u53F7","hide-button":""},null,8,["modelValue"])]),_:1}),e(v,{field:"product_id",label:"\u4EA7\u54C1"},{default:t(()=>[e(z,{modelValue:D.value.product_id,"onUpdate:modelValue":l[35]||(l[35]=o=>D.value.product_id=o),placeholder:"\u5168\u9009\u62E9\u4EA7\u54C1","hide-button":"",options:fe.value},null,8,["modelValue","options"])]),_:1}),e(v,{label:"\u5907\u6CE8"},{default:t(()=>[e(xe,{modelValue:D.value.remark,"onUpdate:modelValue":l[36]||(l[36]=o=>D.value.remark=o),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1}),e(v,null,{default:t(()=>[e(x,{type:"primary",onClick:_t},{default:t(()=>[Ea]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])])}}});var Aa=M(Ca,[["__scopeId","data-v-50b54ade"]]);const wa={class:"container baseinfo"},Va=Y({__name:"assign-list",setup(u){const{loading:a,setLoading:d}=X(!0),r=y([]),F={current:1,pageSize:20},c=ae(V({},F)),E=j(),m=y(E.params.id),n=async p=>{d(!0);try{const{data:b}=await ou(I(V({},p),{customId:m.value}));r.value=b.list,c.current=p.current,c.total=b.total}catch{}finally{d(!1)}},k=p=>{n(I(V({},F),{current:p}))};return n({current:1,pageSize:20}),(p,b)=>{const _=oe,S=le;return B(),L("div",wa,[e(S,{"row-key":"id",loading:f(a),pagination:c,data:r.value,bordered:!1,"label-align":"center",onPageChange:k},{columns:t(()=>[e(_,{title:"\u8BB0\u5F55id","data-index":"id",width:80}),e(_,{title:"\u6D41\u8F6C\u884C\u4E3A","data-index":"type",width:100}),e(_,{title:"\u63A5\u624B\u65F6\u95F4","data-index":"create_time",width:100}),e(_,{title:"\u6D41\u8F6C\u524D\u8DDF\u8FDB\u4EBA","data-index":"old_user",width:180}),e(_,{title:"\u6D41\u8F6C\u540E\u8DDF\u8FDB\u4EBA","data-index":"new_user",width:100}),e(_,{title:"\u64CD\u4F5C\u4EBA","data-index":"oper_user",width:120})]),_:1},8,["loading","pagination","data"])])}}});var ka=M(Va,[["__scopeId","data-v-ab9cf67e"]]);const Ua={class:"container baseinfo"},Ia=Y({__name:"follow-list",setup(u){const{loading:a,setLoading:d}=X(!0),r=y([]),F={current:1,pageSize:20},c=ae(V({},F)),E=j(),m=y(E.params.id),n=async p=>{d(!0);try{const{data:b}=await lu(I(V({},p),{customId:m.value}));r.value=b.list,c.current=p.current,c.total=b.total}catch{}finally{d(!1)}},k=p=>{n(I(V({},F),{current:p}))};return n({current:1,pageSize:20}),(p,b)=>{const _=oe,S=le;return B(),L("div",Ua,[e(S,{"row-key":"id",loading:f(a),pagination:c,data:r.value,bordered:!1,"label-align":"center",onPageChange:k},{columns:t(()=>[e(_,{title:"\u8BB0\u5F55id","data-index":"id",width:80}),e(_,{title:"\u8DDF\u8FDB\u65F6\u95F4","data-index":"create_time",width:180}),e(_,{title:"\u8DDF\u8FDB\u4EBA","data-index":"oper_user",width:180}),e(_,{title:"\u8DDF\u8FDB\u524D\u72B6\u6001","data-index":"old_status",width:180}),e(_,{title:"\u8DDF\u8FDB\u540E\u72B6\u6001","data-index":"new_status",width:180}),e(_,{title:"\u5907\u6CE8\u4FE1\u606F","data-index":"remark"})]),_:1},8,["loading","pagination","data"])])}}});var La=M(Ia,[["__scopeId","data-v-e2e726a0"]]);const Sa={class:"container baseinfo"},za=Y({__name:"star-list",setup(u){const{loading:a,setLoading:d}=X(!0),r=y([]),F={current:1,pageSize:20},c=ae(V({},F)),E=j(),m=y(E.params.id),n=async p=>{d(!0);try{const{data:b}=await nu(I(V({},p),{customId:m.value}));r.value=b.list,c.current=p.current,c.total=b.total}catch{}finally{d(!1)}},k=p=>{n(I(V({},F),{current:p}))};return n({current:1,pageSize:20}),(p,b)=>{const _=oe,S=le;return B(),L("div",Sa,[e(S,{"row-key":"id",loading:f(a),pagination:c,data:r.value,bordered:!1,"label-align":"center",onPageChange:k},{columns:t(()=>[e(_,{title:"\u8BB0\u5F55id","data-index":"id",width:80}),e(_,{title:"\u65E7\u661F\u7EA7","data-index":"old_value",width:180}),e(_,{title:"\u65B0\u661F\u7EA7","data-index":"new_value",width:100}),e(_,{title:"\u64CD\u4F5C\u4EBA","data-index":"oper_user",width:120}),e(_,{title:"\u65F6\u95F4","data-index":"create_time",width:180})]),_:1},8,["loading","pagination","data"])])}}});var $a=M(za,[["__scopeId","data-v-838e3fc2"]]);const Pa={class:"container baseinfo"},Ta=Y({__name:"back-list",setup(u){const{loading:a,setLoading:d}=X(!0),r=y([]),F={current:1,pageSize:20},c=ae(V({},F)),E=j(),m=y(E.params.id),n=async p=>{d(!0);try{const{data:b}=await su(I(V({},p),{customId:m.value}));r.value=b.list,c.current=p.current,c.total=b.total}catch{}finally{d(!1)}},k=p=>{n(I(V({},F),{current:p}))};return n({current:1,pageSize:20}),(p,b)=>{const _=oe,S=le;return B(),L("div",Pa,[e(S,{"row-key":"id",loading:f(a),pagination:c,data:r.value,bordered:!1,"label-align":"center",onPageChange:k},{columns:t(()=>[e(_,{title:"\u8BB0\u5F55id","data-index":"id",width:80}),e(_,{title:"\u7533\u8BF7\u91D1\u989D","data-index":"apply_amount",width:100}),e(_,{title:"\u7533\u8BF7\u65F6\u95F4","data-index":"apply_date",width:180}),e(_,{title:"\u653E\u6B3E\u91D1\u989D","data-index":"amount",width:100}),e(_,{title:"\u653E\u6B3E\u65F6\u95F4","data-index":"date",width:180}),e(_,{title:"\u70B9\u4F4D","data-index":"fee",width:100}),e(_,{title:"\u5B9E\u9645\u521B\u6536","data-index":"real_amount",width:100}),e(_,{title:"\u72B6\u6001","data-index":"status",width:100}),e(_,{title:"\u5907\u6CE8","data-index":"remark"}),e(_,{title:"\u64CD\u4F5C\u4EBA","data-index":"oper_user",width:120})]),_:1},8,["loading","pagination","data"])])}}});var Ra=M(Ta,[["__scopeId","data-v-a7a396cc"]]);const Na={class:"container"},Oa=Y({__name:"edit",setup(u){const a=j(),d=Ne(),r=y();return(F,c)=>{const E=Oe("Breadcrumb"),m=Zt,n=Ht,k=qe;return B(),L("div",Na,[e(E,{items:["menu.customer","menu.customer.genjin",f(a).params.id?(f(a).name=="CustomerPreview"?"\u67E5\u770B":"\u7F16\u8F91")+"\u5BA2\u6237(id-"+f(a).params.id+")":"\u5F55\u5165\u5BA2\u6237"]},null,8,["items"]),e(k,{class:"general-card"},{default:t(()=>[e(n,{"active-key":r.value,"onUpdate:active-key":c[0]||(c[0]=p=>r.value=p)},{default:t(()=>[e(m,{key:"1",title:"\u57FA\u672C\u4FE1\u606F"},{default:t(()=>[e(Aa,{activekey:r.value},null,8,["activekey"])]),_:1}),f(d).$state.buttonPermission.includes("CustomerFollowList")?(B(),A(m,{key:"2",title:"\u5386\u53F2\u8DDF\u8FDB\u8BB0\u5F55","destroy-on-hide":"","lazy-load":!1},{default:t(()=>[e(La)]),_:1})):U("",!0),f(d).$state.buttonPermission.includes("CustomerAssignList")?(B(),A(m,{key:"3",title:"\u5BA2\u6237\u6D41\u8F6C\u8BB0\u5F55","lazy-load":"","destroy-on-hide":""},{default:t(()=>[e(ka)]),_:1})):U("",!0),f(d).$state.buttonPermission.includes("CustomerStarList")?(B(),A(m,{key:"4",title:"\u661F\u7EA7\u53D8\u5316","lazy-load":"","destroy-on-hide":""},{default:t(()=>[e($a)]),_:1})):U("",!0),f(d).$state.buttonPermission.includes("CustomerBackList")?(B(),A(m,{key:"5",title:"\u56DE\u6B3E\u60C5\u51B5","lazy-load":"","destroy-on-hide":""},{default:t(()=>[e(Ra)]),_:1})):U("",!0)]),_:1},8,["active-key"])]),_:1})])}}});var Fo=M(Oa,[["__scopeId","data-v-562a5caf"]]);export{Fo as default};