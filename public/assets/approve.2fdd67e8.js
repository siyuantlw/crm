import{c as o}from"./index.b69ae5d8.js";function s(i){return o.get("/api/approve/list",{params:i})}function c(i){return o.post("/api/approve/cancel",{id:i})}function t(i,r){return o.post("/api/approve/pass",{id:i,status:r})}function a(i){return o.post("/api/approve/view",{id:i})}export{c,a as g,t as p,s as q};
