var Et=Object.defineProperty,Ct=Object.defineProperties;var xt=Object.getOwnPropertyDescriptors;var Se=Object.getOwnPropertySymbols;var At=Object.prototype.hasOwnProperty,Vt=Object.prototype.propertyIsEnumerable;var $e=(u,l,i)=>l in u?Et(u,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):u[l]=i,w=(u,l)=>{for(var i in l||(l={}))At.call(l,i)&&$e(u,i,l[i]);if(Se)for(var i of Se(l))Vt.call(l,i)&&$e(u,i,l[i]);return u},L=(u,l)=>Ct(u,xt(l));import{_ as Y,b as Me}from"./index.b69ae5d8.js";/* empty css              *//* empty css              *//* empty css              */import{d as j,e as F,c as W,aL as Ye,be as wt,C as B,D as S,aI as e,aH as t,u as m,aE as A,bf as ae,aN as s,aO as q,aF as k,aK as me,aJ as fe,G as X,ba as kt,bb as Ut,aV as T,aW as zt,bl as It,b8 as Lt,b3 as St,b4 as $t,bg as Pt,bi as Tt,bh as Rt,bu as Nt,br as je,bo as Ot,bm as qt,bv as Mt,bw as Yt,bx as jt,by as Zt,bz as Ht,b9 as Gt,bA as Jt,bk as Kt,bs as Wt,aT as Qt,r as ne,bn as se,bp as de,bB as Xt,bC as eu}from"./arco.2630271b.js";import{f as tu,h as Z}from"./vue.566aa562.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{h as Pe,j as uu,k as au,l as ou,m as lu,n as nu,o as su,p as du,r as iu,t as ru,u as cu,v as _u,w as pu,x as mu}from"./custom.5e6725b2.js";import{u as ee}from"./loading.d26cebd8.js";import{s as fu}from"./customernum.892a0c1c.js";/* empty css              *//* empty css              */import"./chart.4c1dd9de.js";const Ze="3.7.2",vu=Ze,Fu=typeof atob=="function",Bu=typeof btoa=="function",H=typeof Buffer=="function",Te=typeof TextDecoder=="function"?new TextDecoder:void 0,Re=typeof TextEncoder=="function"?new TextEncoder:void 0,bu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",Q=Array.prototype.slice.call(bu),oe=(u=>{let l={};return u.forEach((i,c)=>l[i]=c),l})(Q),yu=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,V=String.fromCharCode.bind(String),Ne=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):(u,l=i=>i)=>new Uint8Array(Array.prototype.slice.call(u,0).map(l)),He=u=>u.replace(/=/g,"").replace(/[+\/]/g,l=>l=="+"?"-":"_"),Ge=u=>u.replace(/[^A-Za-z0-9\+\/]/g,""),Je=u=>{let l,i,c,y,_="";const x=u.length%3;for(let g=0;g<u.length;){if((i=u.charCodeAt(g++))>255||(c=u.charCodeAt(g++))>255||(y=u.charCodeAt(g++))>255)throw new TypeError("invalid character found");l=i<<16|c<<8|y,_+=Q[l>>18&63]+Q[l>>12&63]+Q[l>>6&63]+Q[l&63]}return x?_.slice(0,x-3)+"===".substring(x):_},Be=Bu?u=>btoa(u):H?u=>Buffer.from(u,"binary").toString("base64"):Je,ve=H?u=>Buffer.from(u).toString("base64"):u=>{let i=[];for(let c=0,y=u.length;c<y;c+=4096)i.push(V.apply(null,u.subarray(c,c+4096)));return Be(i.join(""))},le=(u,l=!1)=>l?He(ve(u)):ve(u),Du=u=>{if(u.length<2){var l=u.charCodeAt(0);return l<128?u:l<2048?V(192|l>>>6)+V(128|l&63):V(224|l>>>12&15)+V(128|l>>>6&63)+V(128|l&63)}else{var l=65536+(u.charCodeAt(0)-55296)*1024+(u.charCodeAt(1)-56320);return V(240|l>>>18&7)+V(128|l>>>12&63)+V(128|l>>>6&63)+V(128|l&63)}},gu=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,Ke=u=>u.replace(gu,Du),Oe=H?u=>Buffer.from(u,"utf8").toString("base64"):Re?u=>ve(Re.encode(u)):u=>Be(Ke(u)),M=(u,l=!1)=>l?He(Oe(u)):Oe(u),qe=u=>M(u,!0),hu=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,Eu=u=>{switch(u.length){case 4:var l=(7&u.charCodeAt(0))<<18|(63&u.charCodeAt(1))<<12|(63&u.charCodeAt(2))<<6|63&u.charCodeAt(3),i=l-65536;return V((i>>>10)+55296)+V((i&1023)+56320);case 3:return V((15&u.charCodeAt(0))<<12|(63&u.charCodeAt(1))<<6|63&u.charCodeAt(2));default:return V((31&u.charCodeAt(0))<<6|63&u.charCodeAt(1))}},We=u=>u.replace(hu,Eu),Qe=u=>{if(u=u.replace(/\s+/g,""),!yu.test(u))throw new TypeError("malformed base64.");u+="==".slice(2-(u.length&3));let l,i="",c,y;for(let _=0;_<u.length;)l=oe[u.charAt(_++)]<<18|oe[u.charAt(_++)]<<12|(c=oe[u.charAt(_++)])<<6|(y=oe[u.charAt(_++)]),i+=c===64?V(l>>16&255):y===64?V(l>>16&255,l>>8&255):V(l>>16&255,l>>8&255,l&255);return i},be=Fu?u=>atob(Ge(u)):H?u=>Buffer.from(u,"base64").toString("binary"):Qe,Xe=H?u=>Ne(Buffer.from(u,"base64")):u=>Ne(be(u),l=>l.charCodeAt(0)),et=u=>Xe(tt(u)),Cu=H?u=>Buffer.from(u,"base64").toString("utf8"):Te?u=>Te.decode(Xe(u)):u=>We(be(u)),tt=u=>Ge(u.replace(/[-_]/g,l=>l=="-"?"+":"/")),Fe=u=>Cu(tt(u)),xu=u=>{if(typeof u!="string")return!1;const l=u.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(l)||!/[^\s0-9a-zA-Z\-_]/.test(l)},ut=u=>({value:u,enumerable:!1,writable:!0,configurable:!0}),at=function(){const u=(l,i)=>Object.defineProperty(String.prototype,l,ut(i));u("fromBase64",function(){return Fe(this)}),u("toBase64",function(l){return M(this,l)}),u("toBase64URI",function(){return M(this,!0)}),u("toBase64URL",function(){return M(this,!0)}),u("toUint8Array",function(){return et(this)})},ot=function(){const u=(l,i)=>Object.defineProperty(Uint8Array.prototype,l,ut(i));u("toBase64",function(l){return le(this,l)}),u("toBase64URI",function(){return le(this,!0)}),u("toBase64URL",function(){return le(this,!0)})},Au=()=>{at(),ot()},Vu={version:Ze,VERSION:vu,atob:be,atobPolyfill:Qe,btoa:Be,btoaPolyfill:Je,fromBase64:Fe,toBase64:M,encode:M,encodeURI:qe,encodeURL:qe,utob:Ke,btou:We,decode:Fe,isValid:xu,fromUint8Array:le,toUint8Array:et,extendString:at,extendUint8Array:ot,extendBuiltins:Au};const ie=u=>(kt("data-v-0b467336"),u=u(),Ut(),u),wu={class:"container baseinfo"},ku=s(" \u4E2A\u4EBA\u4FE1\u606F "),Uu=s("\u8F6C\u4ECB\u7ECD"),zu=s("\u4E3B\u7BA1\u70B9\u8BC4"),Iu=s("\u79FB\u5165\u516C\u6D77"),Lu=s("\u6DFB\u52A0\u65E5\u7A0B"),Su=s("\u6DFB\u52A0\u56DE\u6B3E"),$u=s("\u8BBE\u4E3A\u65E0\u6548"),Pu=s(" \u8DDF\u8FDB\u8BB0\u5F55 "),Tu=ie(()=>X("br",null,null,-1)),Ru=s(" \u5BA2\u6237\u4FE1\u606F "),Nu=s("\u5143"),Ou=s("\u7537"),qu=s("\u5973"),Mu=s("\u5C81"),Yu=s("\u672A\u5A5A"),ju=s("\u5DF2\u5A5A"),Zu=s("\u79BB\u5F02"),Hu=s("\u4E07\u5143"),Gu=s("\u672A\u77E5"),Ju=s("\u65E0\u623F"),Ku=s("\u672C\u5730\u623F"),Wu=s("\u5916\u5730\u623F"),Qu=s("\u672A\u77E5"),Xu=s("\u6709\u8F66"),ea=s("\u65E0\u8F66"),ta=s("\u672A\u77E5"),ua=s("\u6709\u4FDD\u5355"),aa=s("\u65E0\u4FDD\u5355"),oa=s("\u672A\u77E5"),la=s("\u6709"),na=s("\u65E0"),sa=s("\u672A\u77E5"),da=s("\u6709\u516C\u79EF\u91D1"),ia=s("\u65E0\u516C\u79EF\u91D1"),ra=s("\u672A\u77E5"),ca=s("\u6709\u793E\u4FDD"),_a=s("\u65E0\u793E\u4FDD"),pa=s("\u672A\u77E5"),ma=s("\u65E0\u903E\u671F"),fa=s("\u6709\u903E\u671F"),va=s("\u65E0\u903E\u671F"),Fa=s("\u5386\u53F2\u6709\u903E\u671F"),Ba=s("\u5F53\u524D\u6709\u903E\u671F"),ba=s("\u4E25\u91CD\u903E\u671F"),ya=s("\u4E0D\u786E\u5B9A"),Da=s("\u77E5\u6653"),ga=s("\u4E0D\u77E5\u6653"),ha={class:"actions"},Ea=s(" \u8FD4\u56DE "),Ca=s(" \u63D0\u4EA4 "),xa=s(" \u63D0\u4EA4\u5E76\u8DDF\u8FDB\u4E0B\u4E00\u4E2A "),Aa=s(" \u5F85\u529E\u65E5\u7A0B "),Va=s("\u6DFB\u52A0\u65E5\u7A0B"),wa=s(" \xA0 "),ka=s(" \xA0 "),Ua=s(" \xA0 "),za=ie(()=>X("br",null,null,-1)),Ia=ie(()=>X("br",null,null,-1)),La=ie(()=>X("br",null,null,-1)),Sa=s("\u4FDD\u5B58"),$a=s(" \u6DFB\u52A0\u56DE\u6B3E "),Pa=s("\u5143"),Ta=s("%"),Ra=s("\u5143"),Na=s("\u5143"),Oa=s("\u4FDD\u5B58"),qa=s(" \u4E3B\u7BA1\u70B9\u8BC4 "),Ma=s("\u4FDD\u5B58"),Ya=j({__name:"base-info",props:{activekey:{required:!0}},setup(u){const l=F(),i=F(),c=Me(),y=F(!1),_=F(!1),x=F(!1),g=tu(),f=Z(),n=F({}),v=F(),b=F([{type:1}]),r=F(f.params.id),{loading:U,setLoading:no}=ee(),h=F({hetong:"",amount:"",quanzheng:"",date:"",product_id:"",agency_fee:"",remark:"",realmoney:"",cost:""}),G=F({remark:""}),ye=()=>{h.value.realmoney=h.value.amount*h.value.agency_fee/100},lt=W(()=>n.value.important===0?"\u6807\u8BB0\u91CD\u8981":"\u53D6\u6D88\u91CD\u8981"),nt=W(()=>n.value.important===0?"\u786E\u8BA4\u5C06\u5F53\u524D\u5BA2\u6237\u6807\u8BB0\u91CD\u8981\u4E48?":"\u786E\u8BA4\u53D6\u6D88\u5F53\u524D\u5BA2\u6237\u7684\u91CD\u8981\u6807\u8BB0\u4E48?"),st=W(()=>n.value.lock===0?"\u9501\u5B9A\u5BA2\u6237":"\u89E3\u9501\u5BA2\u6237"),dt=W(()=>n.value.lock===0?"\u786E\u8BA4\u9501\u5B9A\u5F53\u524D\u5BA2\u6237\u4E48?":"\u786E\u8BA4\u89E3\u9501\u5F53\u524D\u5BA2\u6237\u4E48?");F(!1);const De=F([]),ge=F([]),he=F([]),Ee=F([]),Ce=F([]),xe=F([]),Ae=F([]);(async()=>{try{const{data:d}=await Pe(r.value);r.value!==""&&r.value!==void 0&&(n.value=d.customInfo),n.value.notices=[],Ee.value=d.workList,ge.value=d.followStatusList,he.value=d.starList,De.value=d.cityList,Ce.value=d.noticesList,xe.value=d.quanzhengList,Ae.value=d.productList,l.value=d.logList,r.value!==""&&r.value!==void 0?document.title=[d.customInfo.id,d.customInfo.name].join(" - "):f.params.introid!==""&&f.params.introid!==void 0&&(document.title=["\u8F6C\u4ECB\u7ECD",f.params.introname].join(" - "))}catch(d){console.log(d)}finally{}})();const it=async()=>{try{let d=0;n.value.important===0&&(d=1),await uu(n.value.id,d),T.success({content:"\u64CD\u4F5C\u6210\u529F",duration:5*1e3}),n.value.important=d}catch(d){console.log(d)}},rt=async()=>{try{let d=0;n.value.lock===0&&(d=1),await au(n.value.id,d),T.success({content:"\u64CD\u4F5C\u6210\u529F",duration:5*1e3}),n.value.lock=d}catch(d){console.log(d)}},ct=async()=>{try{await ou(n.value.id),T.success({content:"\u64CD\u4F5C\u6210\u529F",duration:5*1e3}),g.push({name:"CustomerList"})}catch(d){console.log(d)}},_t=async()=>{y.value=!0,i.value=[];try{const{data:d}=await lu(n.value.id);i.value=d.list}catch(d){console.log(d)}},pt=async()=>{try{const{data:d}=await nu(n.value.id,b.value);y.value=!1,T.success({content:"\u64CD\u4F5C\u6210\u529F",duration:5*1e3}),b.value=[],b.value=[{type:1}]}catch(d){console.log(d)}},mt=async()=>{_.value=!0},ft=async()=>{x.value=!0},vt=async()=>{try{const{data:d}=await su(n.value.id,h.value);_.value=!1,T.success({content:"\u64CD\u4F5C\u6210\u529F",duration:5*1e3}),h.value={hetong:"",amount:"",quanzheng:"",date:"",product_id:"",agency_fee:"",remark:"",realmoney:"",cost:""}}catch(d){console.log(d)}},Ft=async()=>{const{data:d}=await Pe(r.value);l.value=d.logList},Bt=async()=>{try{const{data:d}=await du(n.value.id,G.value);_.value=!1,T.success({content:"\u64CD\u4F5C\u6210\u529F",duration:5*1e3}),G.value.remark="",x.value=!1,Ft()}catch(d){console.log(d)}},bt=async()=>{try{const{data:d}=await iu(n.value.id,"0");T.success({content:"\u64CD\u4F5C\u6210\u529F",duration:5*1e3}),g.push({name:"CustomerList"})}catch(d){console.log(d)}},yt=d=>{g.push({name:"CustomerEdit",params:{introid:d,introname:n.value.name}})},Ve=W(function(){const d=Vu.decode(f.params.allIds).split("-");let a="";for(let E=0;E<d.length;E+=1)if(d[E]===f.params.id&&E<d.length-1){a=d[E+1];break}return a}),Dt=()=>{g.push({name:f.name,params:{id:Ve.value,allIds:f.params.allIds}})},we=async d=>{var a;try{if(await((a=v.value)==null?void 0:a.validate()))return;f.params.introid!==""&&f.params.introid!==void 0&&(n.value.introid=f.params.introid);const{data:J}=await ru(n.value);n.value.notices=[],T.success({content:"\u64CD\u4F5C\u6210\u529F",duration:2*1e3}),fu(),d?setTimeout(function(){window.opener=null,window.open("","_self"),window.close()},500):Dt()}catch{}finally{}};return(d,a)=>{const E=zt,J=It,K=Lt,R=St,p=$t,C=Pt,$=Tt,z=Rt,re=Nt,ce=je,ke=Ot,Ue=qt,ze=Mt,Ie=Yt,I=jt,D=Zt,P=Ht,_e=Gt,Le=Jt,gt=Ye("icon-close"),ht=Kt,pe=Wt,te=Qt,ue=wt("permission");return B(),S("div",wu,[e(_e,{ref_key:"formRef",ref:v,model:n.value,"label-align":"right","auto-label-width":"",disabled:m(f).name=="CustomerPreview"},{default:t(()=>[e(K,{direction:"vertical",size:16},{default:t(()=>[e($,{gutter:10},{default:t(()=>[e(C,{span:16},{default:t(()=>[e(ce,{class:"general-card"},{title:t(()=>[ku]),extra:t(()=>[(m(f).name=="CustomerFollow"||m(f).name=="CustomerEdit")&&r.value!==""&&r.value!==void 0?(B(),A(K,{key:0,style:{"margin-left":"20px"}},{default:t(()=>[ae((B(),A(E,{type:"primary",size:"mini",onClick:a[0]||(a[0]=o=>yt(r.value))},{default:t(()=>[Uu]),_:1})),[[ue,["CustomerIntro"]]]),ae((B(),A(E,{type:"primary",size:"mini",onClick:a[1]||(a[1]=o=>ft())},{default:t(()=>[zu]),_:1})),[[ue,["CustomerDianping"]]]),m(c).$state.buttonPermission.includes("CustomerImportant")?(B(),A(J,{key:0,content:m(nt),"ok-text":"\u786E\u8BA4","cancel-text":"\u53D6\u6D88",onOk:a[2]||(a[2]=o=>it())},{default:t(()=>[e(E,{type:"primary",size:"mini"},{default:t(()=>[s(q(m(lt)),1)]),_:1})]),_:1},8,["content"])):k("",!0),m(c).$state.buttonPermission.includes("CustomerLock")?(B(),A(J,{key:1,content:m(dt),"ok-text":"\u786E\u8BA4","cancel-text":"\u53D6\u6D88",onOk:a[3]||(a[3]=o=>rt())},{default:t(()=>[e(E,{type:"primary",size:"mini"},{default:t(()=>[s(q(m(st)),1)]),_:1})]),_:1},8,["content"])):k("",!0),m(c).$state.buttonPermission.includes("CustomerGiveup")?(B(),A(J,{key:2,content:"\u786E\u8BA4\u5C06\u5BA2\u6237\u79FB\u5165\u516C\u6D77\u4E48\uFF1F","ok-text":"\u786E\u8BA4","cancel-text":"\u53D6\u6D88",onOk:a[4]||(a[4]=o=>ct())},{default:t(()=>[e(E,{type:"primary",size:"mini"},{default:t(()=>[Iu]),_:1})]),_:1})):k("",!0),ae((B(),A(E,{type:"primary",size:"mini",onClick:_t},{default:t(()=>[Lu]),_:1})),[[ue,["CustomerAddNotice"]]]),ae((B(),A(E,{type:"primary",size:"mini",onClick:mt},{default:t(()=>[Su]),_:1})),[[ue,["CustomerAddBack"]]]),m(c).$state.buttonPermission.includes("CustomerLahei")&&n.value.status=="1"?(B(),A(J,{key:3,content:"\u786E\u8BA4\u5C06\u5BA2\u6237\u8BBE\u4E3A\u65E0\u6548\uFF1F","ok-text":"\u786E\u8BA4","cancel-text":"\u53D6\u6D88",onOk:a[5]||(a[5]=o=>bt())},{default:t(()=>[e(E,{type:"primary",size:"mini"},{default:t(()=>[$u]),_:1})]),_:1})):k("",!0)]),_:1})):k("",!0)]),default:t(()=>[e($,null,{default:t(()=>[e(C,{span:12},{default:t(()=>[e(p,{label:"\u5BA2\u6237\u59D3\u540D",field:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D"}]},{default:t(()=>[e(R,{modelValue:n.value.name,"onUpdate:modelValue":a[6]||(a[6]=o=>n.value.name=o),placeholder:"\u8BF7\u8F93\u5165\u5BA2\u6237\u59D3\u540D"},null,8,["modelValue"])]),_:1})]),_:1}),e(C,{span:12},{default:t(()=>[e(p,{label:"\xA0\xA0\u8054\u7CFB\u7535\u8BDD",field:"mobile",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD"}]},{default:t(()=>[e(R,{modelValue:n.value.mobile,"onUpdate:modelValue":a[7]||(a[7]=o=>n.value.mobile=o),placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD",disabled:m(f).params.id>0&&!m(c).$state.buttonPermission.includes("CustomerEditMobile")},null,8,["modelValue","disabled"])]),_:1})]),_:1})]),_:1}),e($,null,{default:t(()=>[e(C,{span:12,width:100},{default:t(()=>[e(p,{label:"\u8DDF\u8FDB\u72B6\u6001"},{default:t(()=>[e(z,{modelValue:n.value.follow_status,"onUpdate:modelValue":a[8]||(a[8]=o=>n.value.follow_status=o),placeholder:"\u8BF7\u9009\u62E9\u8DDF\u8FDB\u72B6\u6001",options:ge.value,"allow-clear":""},null,8,["modelValue","options"])]),_:1})]),_:1}),e(C,{span:12},{default:t(()=>[e(p,{label:"\u661F\u7EA7\u8BC4\u5206"},{default:t(()=>[e(z,{modelValue:n.value.star,"onUpdate:modelValue":a[9]||(a[9]=o=>n.value.star=o),placeholder:"\u8BF7\u9009\u62E9\u661F\u7EA7\u8BC4\u5206",options:he.value,"allow-clear":""},null,8,["modelValue","options"])]),_:1})]),_:1}),e(C,{span:24},{default:t(()=>[e(p,{label:"\u8DDF\u8FDB\u5907\u6CE8"},{default:t(()=>[e(re,{modelValue:n.value.remark,"onUpdate:modelValue":a[10]||(a[10]=o=>n.value.remark=o),placeholder:"\u8BF7\u8F93\u5165\u8DDF\u8FDB\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(C,{span:8},{default:t(()=>[e(ce,{class:"general-card","body-style":{height:"205px","overflow-y":"scroll"}},{title:t(()=>[Pu]),default:t(()=>[e(Ie,null,{default:t(()=>[(B(!0),S(me,null,fe(l.value,(o,N)=>(B(),A(ze,{key:N,label:o.day,"line-type":"dashed"},{default:t(()=>[e(ke,{size:"small",color:o.color},{default:t(()=>[s(q(o.type),1)]),_:2},1032,["color"]),Tu,e(Ue,{type:"secondary",style:{fontSize:"12px",marginTop:"4px","line-height":"28px"}},{default:t(()=>[s(q(o.remark),1)]),_:2},1024)]),_:2},1032,["label"]))),128))]),_:1})]),_:1})]),_:1})]),_:1}),e(ce,{class:"general-card"},{title:t(()=>[Ru]),default:t(()=>[e($,null,{default:t(()=>[e(C,{span:8},{default:t(()=>[e(p,{label:"\u7533\u8BF7\u91D1\u989D"},{default:t(()=>[e(R,{modelValue:n.value.amount,"onUpdate:modelValue":a[11]||(a[11]=o=>n.value.amount=o),placeholder:"\u8BF7\u8F93\u5165\u7533\u8BF7\u91D1\u989D"},{append:t(()=>[Nu]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(C,{span:8},{default:t(()=>[e(p,{label:"\u5BA2\u6237\u6027\u522B"},{default:t(()=>[e(z,{modelValue:n.value.sex,"onUpdate:modelValue":a[12]||(a[12]=o=>n.value.sex=o),placeholder:"\u8BF7\u9009\u62E9\u5BA2\u6237\u6027\u522B","allow-clear":""},{default:t(()=>[e(I,{value:1},{default:t(()=>[Ou]),_:1}),e(I,{value:2},{default:t(()=>[qu]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(C,{span:8},{default:t(()=>[e(p,{label:"\u5BA2\u6237\u5E74\u9F84"},{default:t(()=>[e(R,{modelValue:n.value.age,"onUpdate:modelValue":a[13]||(a[13]=o=>n.value.age=o),placeholder:"\u8BF7\u8F93\u5165\u5BA2\u6237\u5E74\u9F84"},{append:t(()=>[Mu]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e($,null,{default:t(()=>[e(C,{span:8},{default:t(()=>[e(p,{label:"\u5A5A\u59FB\u72B6\u51B5"},{default:t(()=>[e(z,{modelValue:n.value.marry,"onUpdate:modelValue":a[14]||(a[14]=o=>n.value.marry=o),placeholder:"\u8BF7\u9009\u62E9\u5A5A\u59FB\u72B6\u51B5","allow-clear":""},{default:t(()=>[e(I,{value:1},{default:t(()=>[Yu]),_:1}),e(I,{value:2},{default:t(()=>[ju]),_:1}),e(I,{value:3},{default:t(()=>[Zu]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(C,{span:8},{default:t(()=>[e(p,{label:"\u804C\u4E1A\u8EAB\u4EFD"},{default:t(()=>[e(z,{modelValue:n.value.work,"onUpdate:modelValue":a[15]||(a[15]=o=>n.value.work=o),placeholder:"\u8BF7\u9009\u62E9\u804C\u4E1A\u8EAB\u4EFD",options:Ee.value,"allow-clear":""},null,8,["modelValue","options"])]),_:1})]),_:1}),e(C,{span:8},{default:t(()=>[e(p,{label:"\u5E74\u6536\u5165"},{default:t(()=>[e(R,{modelValue:n.value.income,"onUpdate:modelValue":a[16]||(a[16]=o=>n.value.income=o),placeholder:"\u8BF7\u8F93\u5165\u5E74\u6536\u5165"},{append:t(()=>[Hu]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e($,null,{default:t(()=>[e(C,{span:8},{default:t(()=>[e(p,{label:"\u7533\u8BF7\u57CE\u5E02"},{default:t(()=>[e(z,{modelValue:n.value.city,"onUpdate:modelValue":a[17]||(a[17]=o=>n.value.city=o),options:De.value,placeholder:"\u8BF7\u9009\u62E9\u57CE\u5E02","allow-clear":""},null,8,["modelValue","options"])]),_:1})]),_:1}),e(C,{span:8},{default:t(()=>[e(p,{label:"\u623F\u4EA7\u4FE1\u606F"},{default:t(()=>[e(P,{modelValue:n.value.house,"onUpdate:modelValue":a[18]||(a[18]=o=>n.value.house=o),type:"button"},{default:t(()=>[e(D,{value:0},{default:t(()=>[Gu]),_:1}),e(D,{value:1},{default:t(()=>[Ju]),_:1}),e(D,{value:2},{default:t(()=>[Ku]),_:1}),e(D,{value:3},{default:t(()=>[Wu]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(C,{span:8},{default:t(()=>[e(p,{label:"\u8F66\u8F86\u4FE1\u606F"},{default:t(()=>[e(P,{modelValue:n.value.car,"onUpdate:modelValue":a[19]||(a[19]=o=>n.value.car=o),type:"button"},{default:t(()=>[e(D,{value:0},{default:t(()=>[Qu]),_:1}),e(D,{value:2},{default:t(()=>[Xu]),_:1}),e(D,{value:1},{default:t(()=>[ea]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e($,null,{default:t(()=>[e(C,{span:8},{default:t(()=>[e(p,{label:"\u4FDD\u5355\u4FE1\u606F"},{default:t(()=>[e(P,{modelValue:n.value.policy,"onUpdate:modelValue":a[20]||(a[20]=o=>n.value.policy=o),type:"button"},{default:t(()=>[e(D,{value:0},{default:t(()=>[ta]),_:1}),e(D,{value:2},{default:t(()=>[ua]),_:1}),e(D,{value:1},{default:t(()=>[aa]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(C,{span:8},{default:t(()=>[e(p,{label:"\u6253\u5361\u5DE5\u8D44"},{default:t(()=>[e(P,{modelValue:n.value.wage,"onUpdate:modelValue":a[21]||(a[21]=o=>n.value.wage=o),type:"button"},{default:t(()=>[e(D,{value:0},{default:t(()=>[oa]),_:1}),e(D,{value:2},{default:t(()=>[la]),_:1}),e(D,{value:1},{default:t(()=>[na]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(C,{span:8},{default:t(()=>[e(p,{label:"\u516C\u79EF\u91D1\u4FE1\u606F"},{default:t(()=>[e(P,{modelValue:n.value.funds,"onUpdate:modelValue":a[22]||(a[22]=o=>n.value.funds=o),type:"button"},{default:t(()=>[e(D,{value:0},{default:t(()=>[sa]),_:1}),e(D,{value:2},{default:t(()=>[da]),_:1}),e(D,{value:1},{default:t(()=>[ia]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e($,null,{default:t(()=>[e(C,{span:8},{default:t(()=>[e(p,{label:"\u793E\u4FDD\u4FE1\u606F"},{default:t(()=>[e(P,{modelValue:n.value.insurance,"onUpdate:modelValue":a[23]||(a[23]=o=>n.value.insurance=o),type:"button"},{default:t(()=>[e(D,{value:0},{default:t(()=>[ra]),_:1}),e(D,{value:2},{default:t(()=>[ca]),_:1}),e(D,{value:1},{default:t(()=>[_a]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(C,{span:8},{default:t(()=>[e(p,{label:"\u4FE1\u7528\u60C5\u51B5"},{default:t(()=>[e(P,{modelValue:n.value.credit,"onUpdate:modelValue":a[24]||(a[24]=o=>n.value.credit=o),type:"button"},{default:t(()=>[e(D,{value:0},{default:t(()=>[pa]),_:1}),e(D,{value:1},{default:t(()=>[ma]),_:1}),e(D,{value:2},{default:t(()=>[fa]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(C,{span:8},{default:t(()=>[e(p,{label:"\u4FE1\u7528\u8BE6\u60C5"},{default:t(()=>[e(z,{modelValue:n.value.credit_detail,"onUpdate:modelValue":a[25]||(a[25]=o=>n.value.credit_detail=o),placeholder:"\u8BF7\u9009\u62E9\u4FE1\u7528\u8BE6\u60C5","allow-clear":""},{default:t(()=>[e(I,{value:1},{default:t(()=>[va]),_:1}),e(I,{value:2},{default:t(()=>[Fa]),_:1}),e(I,{value:3},{default:t(()=>[Ba]),_:1}),e(I,{value:4},{default:t(()=>[ba]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(C,{span:8},{default:t(()=>[e(p,{label:"\u5BB6\u4EBA\u662F\u5426\u77E5\u6653"},{default:t(()=>[e(P,{modelValue:n.value.family,"onUpdate:modelValue":a[26]||(a[26]=o=>n.value.family=o),type:"button"},{default:t(()=>[e(D,{value:0},{default:t(()=>[ya]),_:1}),e(D,{value:1},{default:t(()=>[Da]),_:1}),e(D,{value:2},{default:t(()=>[ga]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model","disabled"]),X("div",ha,[e(K,null,{default:t(()=>[e(E,{onClick:a[27]||(a[27]=o=>m(g).back())},{default:t(()=>[Ea]),_:1}),(u.activekey==1||u.activekey==null)&&m(f).name!="CustomerPreview"?(B(),A(E,{key:0,type:"primary",loading:m(U),onClick:a[28]||(a[28]=o=>we(!0))},{default:t(()=>[Ca]),_:1},8,["loading"])):k("",!0),(u.activekey==1||u.activekey==null)&&m(f).name=="CustomerFollow"&&m(Ve)!=""?(B(),A(E,{key:1,type:"primary",loading:m(U),onClick:a[29]||(a[29]=o=>we(!1))},{default:t(()=>[xa]),_:1},8,["loading"])):k("",!0)]),_:1})]),e(pe,{visible:y.value,"onUpdate:visible":a[32]||(a[32]=o=>y.value=o),width:700,footer:!1},{title:t(()=>[Aa]),default:t(()=>[e(K,{size:10,direction:"vertical"},{default:t(()=>[e(E,{size:"mini",onClick:a[30]||(a[30]=o=>b.value.push({date:"",type:1,remark:""}))},{default:t(()=>[Va]),_:1}),(B(!0),S(me,null,fe(b.value,(o,N)=>(B(),A(K,{key:N,size:2},{default:t(()=>[e(Le,{modelValue:o.date,"onUpdate:modelValue":O=>o.date=O,"show-time":"",format:"YYYY-MM-DD HH:mm:ss",style:{width:"200px"}},null,8,["modelValue","onUpdate:modelValue"]),wa,e(z,{modelValue:o.type,"onUpdate:modelValue":O=>o.type=O,placeholder:"\u8BF7\u9009\u62E9\u8DDF\u8FDB\u72B6\u6001",options:Ce.value,"allow-clear":""},null,8,["modelValue","onUpdate:modelValue","options"]),ka,e(R,{modelValue:o.remark,"onUpdate:modelValue":O=>o.remark=O,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",style:{width:"300px"}},null,8,["modelValue","onUpdate:modelValue"]),Ua,e(gt,{onClick:O=>b.value.splice(N,1)},null,8,["onClick"])]),_:2},1024))),128))]),_:1}),za,Ia,e(Ie,{direction:"horizontal"},{default:t(()=>[(B(!0),S(me,null,fe(i.value,(o,N)=>(B(),A(ze,{key:N,label:o.day,"line-type":"dashed"},{default:t(()=>[e(ke,{size:"small",color:o.color},{default:t(()=>[s(q(o.type),1)]),_:2},1032,["color"]),La,e(Ue,{type:"secondary",style:{fontSize:"12px",marginTop:"4px","line-height":"28px"}},{default:t(()=>[s(q(o.remark),1)]),_:2},1024)]),_:2},1032,["label"]))),128))]),_:1}),e(ht),e(E,{type:"primary",onClick:a[31]||(a[31]=o=>pt())},{default:t(()=>[Sa]),_:1})]),_:1},8,["visible"]),e(pe,{visible:_.value,"onUpdate:visible":a[42]||(a[42]=o=>_.value=o),width:700,footer:!1},{title:t(()=>[$a]),default:t(()=>[e(_e,{model:h.value},{default:t(()=>[e(p,{field:"date",label:"\u653E\u6B3E\u65F6\u95F4"},{default:t(()=>[e(Le,{modelValue:h.value.date,"onUpdate:modelValue":a[33]||(a[33]=o=>h.value.date=o),"show-time":"",format:"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]),_:1}),e(p,{field:"amount",label:"\u653E\u6B3E\u91D1\u989D"},{default:t(()=>[e(te,{modelValue:h.value.amount,"onUpdate:modelValue":a[34]||(a[34]=o=>h.value.amount=o),placeholder:"\u8BF7\u8F93\u5165\u653E\u6B3E\u91D1\u989D","hide-button":"",onChange:ye},{append:t(()=>[Pa]),_:1},8,["modelValue"])]),_:1}),e(p,{field:"agency_fee",label:"\u70B9\u4F4D(%)"},{default:t(()=>[e(te,{modelValue:h.value.agency_fee,"onUpdate:modelValue":a[35]||(a[35]=o=>h.value.agency_fee=o),placeholder:"\u8BF7\u8F93\u5165\u70B9\u4F4D","hide-button":"",onChange:ye},{append:t(()=>[Ta]),_:1},8,["modelValue"])]),_:1}),e(p,{field:"agency_fee",label:"\u5B9E\u9645\u521B\u6536"},{default:t(()=>[e(te,{modelValue:h.value.realmoney,"onUpdate:modelValue":a[36]||(a[36]=o=>h.value.realmoney=o),placeholder:"","hide-button":""},{append:t(()=>[Ra]),_:1},8,["modelValue"])]),_:1}),e(p,{field:"cost",label:"\u6210\u672C\u8D39\u7528"},{default:t(()=>[e(te,{modelValue:h.value.cost,"onUpdate:modelValue":a[37]||(a[37]=o=>h.value.cost=o),placeholder:"\u8BF7\u8F93\u5165\u6210\u672C\u8D39\u7528","hide-button":""},{append:t(()=>[Na]),_:1},8,["modelValue"])]),_:1}),e(p,{field:"hetong",label:"\u5408\u540C\u7F16\u53F7"},{default:t(()=>[e(R,{modelValue:h.value.hetong,"onUpdate:modelValue":a[38]||(a[38]=o=>h.value.hetong=o),placeholder:"\u8BF7\u8F93\u5165\u5408\u540C\u7F16\u53F7","hide-button":""},null,8,["modelValue"])]),_:1}),e(p,{field:"product_id",label:"\u4EA7\u54C1"},{default:t(()=>[e(z,{modelValue:h.value.product_id,"onUpdate:modelValue":a[39]||(a[39]=o=>h.value.product_id=o),placeholder:"\u5168\u9009\u62E9\u4EA7\u54C1","hide-button":"",options:Ae.value},null,8,["modelValue","options"])]),_:1}),e(p,{field:"quanzheng",label:"\u6743\u8BC1"},{default:t(()=>[e(z,{modelValue:h.value.quanzheng,"onUpdate:modelValue":a[40]||(a[40]=o=>h.value.quanzheng=o),options:xe.value,placeholder:"\u8BF7\u9009\u62E9\u6743\u8BC1","allow-clear":""},null,8,["modelValue","options"])]),_:1}),e(p,{label:"\u5907\u6CE8"},{default:t(()=>[e(re,{modelValue:h.value.remark,"onUpdate:modelValue":a[41]||(a[41]=o=>h.value.remark=o),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1}),e(p,null,{default:t(()=>[e(E,{type:"primary",onClick:vt},{default:t(()=>[Oa]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"]),e(pe,{visible:x.value,"onUpdate:visible":a[44]||(a[44]=o=>x.value=o),width:500,footer:!1},{title:t(()=>[qa]),default:t(()=>[e(_e,{model:G.value},{default:t(()=>[e(p,{label:"\u70B9\u8BC4"},{default:t(()=>[e(re,{modelValue:G.value.remark,"onUpdate:modelValue":a[43]||(a[43]=o=>G.value.remark=o),placeholder:"\u8BF7\u8F93\u5165\u70B9\u8BC4\u5185\u5BB9","auto-size":!0,style:{height:"100px"}},null,8,["modelValue"])]),_:1}),e(p,null,{default:t(()=>[e(E,{type:"primary",onClick:Bt},{default:t(()=>[Ma]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"])])}}});var ja=Y(Ya,[["__scopeId","data-v-0b467336"]]);const Za={class:"container baseinfo"},Ha=j({__name:"assign-list",setup(u){const{loading:l,setLoading:i}=ee(!0),c=F([]),y={current:1,pageSize:20},_=ne(w({},y)),x=Z(),g=F(x.params.id),f=async v=>{i(!0);try{const{data:b}=await cu(L(w({},v),{customId:g.value}));c.value=b.list,_.current=v.current,_.total=b.total}catch{}finally{i(!1)}},n=v=>{f(L(w({},y),{current:v}))};return f({current:1,pageSize:20}),(v,b)=>{const r=se,U=de;return B(),S("div",Za,[e(U,{"row-key":"id",loading:m(l),pagination:_,data:c.value,bordered:!1,"label-align":"center",onPageChange:n},{columns:t(()=>[e(r,{title:"\u8BB0\u5F55id","data-index":"id",width:80}),e(r,{title:"\u6D41\u8F6C\u884C\u4E3A","data-index":"type",width:100}),e(r,{title:"\u63A5\u624B\u65F6\u95F4","data-index":"create_time",width:100}),e(r,{title:"\u6D41\u8F6C\u524D\u8DDF\u8FDB\u4EBA","data-index":"old_user",width:180}),e(r,{title:"\u6D41\u8F6C\u540E\u8DDF\u8FDB\u4EBA","data-index":"new_user",width:100}),e(r,{title:"\u64CD\u4F5C\u4EBA","data-index":"oper_user",width:120})]),_:1},8,["loading","pagination","data"])])}}});var Ga=Y(Ha,[["__scopeId","data-v-ab9cf67e"]]);const Ja={class:"container baseinfo"},Ka=j({__name:"follow-list",setup(u){const{loading:l,setLoading:i}=ee(!0),c=F([]),y={current:1,pageSize:20},_=ne(w({},y)),x=Z(),g=F(x.params.id),f=async v=>{i(!0);try{const{data:b}=await _u(L(w({},v),{customId:g.value}));c.value=b.list,_.current=v.current,_.total=b.total}catch{}finally{i(!1)}},n=v=>{f(L(w({},y),{current:v}))};return f({current:1,pageSize:20}),(v,b)=>{const r=se,U=de;return B(),S("div",Ja,[e(U,{"row-key":"id",loading:m(l),pagination:_,data:c.value,bordered:!1,"label-align":"center",onPageChange:n},{columns:t(()=>[e(r,{title:"\u8BB0\u5F55id","data-index":"id",width:80}),e(r,{title:"\u8DDF\u8FDB\u65F6\u95F4","data-index":"create_time",width:180}),e(r,{title:"\u8DDF\u8FDB\u4EBA","data-index":"oper_user",width:180}),e(r,{title:"\u8DDF\u8FDB\u524D\u72B6\u6001","data-index":"old_status",width:180}),e(r,{title:"\u8DDF\u8FDB\u540E\u72B6\u6001","data-index":"new_status",width:180}),e(r,{title:"\u5907\u6CE8\u4FE1\u606F","data-index":"remark"})]),_:1},8,["loading","pagination","data"])])}}});var Wa=Y(Ka,[["__scopeId","data-v-e2e726a0"]]);const Qa={class:"container baseinfo"},Xa=j({__name:"star-list",setup(u){const{loading:l,setLoading:i}=ee(!0),c=F([]),y={current:1,pageSize:20},_=ne(w({},y)),x=Z(),g=F(x.params.id),f=async v=>{i(!0);try{const{data:b}=await pu(L(w({},v),{customId:g.value}));c.value=b.list,_.current=v.current,_.total=b.total}catch{}finally{i(!1)}},n=v=>{f(L(w({},y),{current:v}))};return f({current:1,pageSize:20}),(v,b)=>{const r=se,U=de;return B(),S("div",Qa,[e(U,{"row-key":"id",loading:m(l),pagination:_,data:c.value,bordered:!1,"label-align":"center",onPageChange:n},{columns:t(()=>[e(r,{title:"\u8BB0\u5F55id","data-index":"id",width:80}),e(r,{title:"\u65E7\u661F\u7EA7","data-index":"old_value",width:180}),e(r,{title:"\u65B0\u661F\u7EA7","data-index":"new_value",width:100}),e(r,{title:"\u64CD\u4F5C\u4EBA","data-index":"oper_user",width:120}),e(r,{title:"\u65F6\u95F4","data-index":"create_time",width:180})]),_:1},8,["loading","pagination","data"])])}}});var eo=Y(Xa,[["__scopeId","data-v-838e3fc2"]]);const to={class:"container baseinfo"},uo=j({__name:"back-list",setup(u){const{loading:l,setLoading:i}=ee(!0),c=F([]),y={current:1,pageSize:20},_=ne(w({},y)),x=Z(),g=F(x.params.id),f=async v=>{i(!0);try{const{data:b}=await mu(L(w({},v),{customId:g.value}));c.value=b.list,_.current=v.current,_.total=b.total}catch{}finally{i(!1)}},n=v=>{f(L(w({},y),{current:v}))};return f({current:1,pageSize:20}),(v,b)=>{const r=se,U=de;return B(),S("div",to,[e(U,{"row-key":"id",loading:m(l),pagination:_,data:c.value,bordered:!1,"label-align":"center",onPageChange:n},{columns:t(()=>[e(r,{title:"\u8BB0\u5F55id","data-index":"id",width:80}),e(r,{title:"\u7533\u8BF7\u91D1\u989D","data-index":"apply_amount",width:100}),e(r,{title:"\u7533\u8BF7\u65F6\u95F4","data-index":"apply_date",width:180}),e(r,{title:"\u653E\u6B3E\u91D1\u989D","data-index":"amount",width:100}),e(r,{title:"\u653E\u6B3E\u65F6\u95F4","data-index":"date",width:180}),e(r,{title:"\u70B9\u4F4D","data-index":"fee",width:100}),e(r,{title:"\u6210\u672C\u8D39\u7528","data-index":"cost",width:100}),e(r,{title:"\u72B6\u6001","data-index":"status",width:100}),e(r,{title:"\u5B9E\u9645\u521B\u6536","data-index":"real_amount",width:100}),e(r,{title:"\u5907\u6CE8","data-index":"remark"}),e(r,{title:"\u64CD\u4F5C\u4EBA","data-index":"oper_user",width:120})]),_:1},8,["loading","pagination","data"])])}}});var ao=Y(uo,[["__scopeId","data-v-433194ac"]]);const oo={class:"container"},lo=j({__name:"edit",setup(u){const l=Z(),i=Me(),c=F();return(y,_)=>{const x=Ye("Breadcrumb"),g=Xt,f=eu,n=je;return B(),S("div",oo,[e(x,{items:["menu.customer","menu.customer.genjin",m(l).params.id?(m(l).name=="CustomerPreview"?"\u67E5\u770B":"\u7F16\u8F91")+"\u5BA2\u6237(id-"+m(l).params.id+")":m(l).params.introid?"\u8F6C\u4ECB\u7ECD("+m(l).params.introname+")":"\u5F55\u5165\u5BA2\u6237"]},null,8,["items"]),e(n,{class:"general-card"},{default:t(()=>[e(f,{"active-key":c.value,"onUpdate:active-key":_[0]||(_[0]=v=>c.value=v)},{default:t(()=>[e(g,{key:"1",title:"\u57FA\u672C\u4FE1\u606F"},{default:t(()=>[e(ja,{activekey:c.value},null,8,["activekey"])]),_:1}),m(i).$state.buttonPermission.includes("CustomerFollowList")?(B(),A(g,{key:"2",title:"\u5386\u53F2\u8DDF\u8FDB\u8BB0\u5F55","destroy-on-hide":"","lazy-load":!1},{default:t(()=>[e(Wa)]),_:1})):k("",!0),m(i).$state.buttonPermission.includes("CustomerAssignList")?(B(),A(g,{key:"3",title:"\u5BA2\u6237\u6D41\u8F6C\u8BB0\u5F55","lazy-load":"","destroy-on-hide":""},{default:t(()=>[e(Ga)]),_:1})):k("",!0),m(i).$state.buttonPermission.includes("CustomerStarList")?(B(),A(g,{key:"4",title:"\u661F\u7EA7\u53D8\u5316","lazy-load":"","destroy-on-hide":""},{default:t(()=>[e(eo)]),_:1})):k("",!0),m(i).$state.buttonPermission.includes("CustomerBackList")?(B(),A(g,{key:"5",title:"\u56DE\u6B3E\u60C5\u51B5","lazy-load":"","destroy-on-hide":""},{default:t(()=>[e(ao)]),_:1})):k("",!0)]),_:1},8,["active-key"])]),_:1})])}}});var Po=Y(lo,[["__scopeId","data-v-f16256e6"]]);export{Po as default};
