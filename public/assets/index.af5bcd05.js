import{_ as y,s as b,d as x}from"./index.b69ae5d8.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{d as h,e as l,aL as D,C,D as w,aI as e,aH as a,G as i,aN as B,aV as V,b3 as F,b4 as k,aW as I,br as N,b8 as L,b9 as S}from"./arco.2630271b.js";import{u as R}from"./loading.d26cebd8.js";import"./chart.4c1dd9de.js";import"./vue.566aa562.js";const z={class:"container"},E={class:"wrapper"},G={class:"wrapper"},H=B(" \u4FDD\u5B58 "),M=h({__name:"index",setup(T){const _=l({}),{setLoading:s}=R(!1),t=l({ip:""}),d=async()=>{s(!0);try{await b(t.value),V.success({content:"\u64CD\u4F5C\u6210\u529F",duration:5*1e3})}catch{}finally{s(!1)}};return(async()=>{try{const{data:o}=await x();t.value=o}catch{}finally{}})(),(o,n)=>{const p=D("Breadcrumb"),m=F,r=k,u=I,c=N,f=L,v=S;return C(),w("div",z,[e(p,{items:["menu.system.setting"]},null,8,["items"]),e(c,{class:"general-card",style:{"padding-top":"30px"}},{default:a(()=>[i("div",E,[e(v,{ref_key:"formRef",ref:_,model:t.value,"label-align":"right","auto-label-width":""},{default:a(()=>[e(f,{direction:"vertical",size:16},{default:a(()=>[e(c,{class:"general-card"},{default:a(()=>[i("div",G,[e(r,{field:"ip",label:"ip\u767D\u540D\u5355:"},{default:a(()=>[e(m,{modelValue:t.value.ip,"onUpdate:modelValue":n[0]||(n[0]=g=>t.value.ip=g),"allow-clear":""},null,8,["modelValue"])]),_:1}),e(r,null,{default:a(()=>[e(u,{type:"primary",onClick:d},{default:a(()=>[H]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1},8,["model"])])]),_:1})])}}});var Y=y(M,[["__scopeId","data-v-78e13321"]]);export{Y as default};