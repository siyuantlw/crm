import{_ as h}from"./index.51a1eb25.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{d as E,e as l,aL as T,C as V,D as x,aI as e,u,aH as t,G as C,aN as v,b3 as I,b4 as k,bh as L,aW as N,b8 as R,b9 as U,bq as S}from"./arco.f15df757.js";import{f as q,h as A}from"./vue.b7a8a9c1.js";import{u as $}from"./loading.c87df9c1.js";import{k as G,m as H}from"./system.4b0c3e9e.js";import"./chart.3ce5fa7c.js";const W={class:"container"},j={class:"wrapper"},z=v(" \u4FDD\u5B58 "),J=v(" \u8FD4\u56DE "),K=E({__name:"edit",setup(M){const b=q(),o=A(),i=l(),{loading:O,setLoading:p}=$(!1),s=l({}),c=l(),m=l(o.params.id),F=async()=>{var a;if(!await((a=i.value)==null?void 0:a.validate())){p(!0);try{await G(s.value),b.push({name:"Team"})}catch{}finally{p(!1)}}};return(async()=>{try{const{data:n}=await H(m.value);c.value=n.allUserListSelect,m.value!==""&&m.value!==void 0&&(s.value=n.teamInfo)}catch{}finally{}})(),(n,a)=>{const _=T("Breadcrumb"),D=I,d=k,y=L,f=N,B=R,g=U,w=S;return V(),x("div",W,[e(_,{items:["menu.system","menu.system.team",u(o).params.id?(u(o).name=="Teampreview"?"\u67E5\u770B":"\u7F16\u8F91")+"\u56E2\u961F(id-"+u(o).params.id+")":"\u65B0\u589E\u56E2\u961F"]},null,8,["items"]),e(w,{class:"general-card",style:{"padding-top":"30px"}},{default:t(()=>[C("div",j,[e(g,{ref_key:"formRef",ref:i,model:s.value,class:"form","label-col-props":{span:4},"wrapper-col-props":{span:18}},{default:t(()=>[e(d,{field:"name",label:"\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0"}]},{default:t(()=>[e(D,{modelValue:s.value.name,"onUpdate:modelValue":a[0]||(a[0]=r=>s.value.name=r),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",disabled:u(o).name=="Teampreview"},null,8,["modelValue","disabled"])]),_:1}),e(d,{field:"manager",label:"\u8D1F\u8D23\u4EBA"},{default:t(()=>[e(y,{modelValue:s.value.manager_id,"onUpdate:modelValue":a[1]||(a[1]=r=>s.value.manager_id=r),options:c.value,placeholder:"\u8BF7\u8F93\u5165\u56E2\u961F\u8D1F\u8D23\u4EBA","allow-clear":"",disabled:u(o).name=="Teampreview"},null,8,["modelValue","options","disabled"])]),_:1}),e(d,null,{default:t(()=>[e(B,null,{default:t(()=>[e(f,{type:"primary",onClick:F,disabled:u(o).name=="Teampreview"},{default:t(()=>[z]),_:1},8,["disabled"]),e(f,{onClick:a[2]||(a[2]=r=>n.$router.push({name:"Team"}))},{default:t(()=>[J]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])])]),_:1})])}}});var me=h(K,[["__scopeId","data-v-3969b80a"]]);export{me as default};
