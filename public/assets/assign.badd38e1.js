import{c as t}from"./index.b69ae5d8.js";function e(s,i){return t.post("/api/operate/assign/edit",{id:s,config:i})}function a(){return t.get("/api/operate/assign/config",{})}function o(s){return t.post("/api/operate/assign/editrule",{rule:s})}export{a as g,o as s,e as u};