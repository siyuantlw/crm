import{c as t,q as r}from"./index.b69ae5d8.js";function i(){return t.get("/api/user/dashboard")}function n(e){return t.get("/api/message/list",{params:e,paramsSerializer:a=>r.stringify(a)})}function u(e){return t.post("/api/message/read",e)}export{n as a,i as q,u as s};
