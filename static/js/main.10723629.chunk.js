(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),l=c(15),a=c.n(l),r=(c(22),c(3)),o=(c(23),c(17)),i=c(0),u=function(e){var t=e.setInputText,c=e.employees,s=e.setEmployees,n=e.inputText,l=e.setStatus;return Object(i.jsxs)("form",{children:[Object(i.jsx)("input",{value:n,onChange:function(e){t(e.target.value)},type:"text",className:"employee-input"}),Object(i.jsx)("button",{onClick:function(e){e.preventDefault(),s([].concat(Object(o.a)(c),[{text:n,completed:!1,id:1e3*Math.random()}])),t("")},className:"employee-button",type:"submit",children:Object(i.jsx)("i",{className:"fas fa-plus-square"})}),Object(i.jsx)("div",{className:"select",children:Object(i.jsxs)("select",{onChange:function(e){l(e.target.value)},name:"todos",className:"filter-employee",children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"completed",children:"Completed"})]})})]})},j=function(e){var t=e.employee;return Object(i.jsxs)("table",{class:"table is-bordered is-striped  is-hoverable is-fullwidth\r ",children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{title:"Photo",children:"Photo"}),Object(i.jsx)("th",{title:"First Name",children:"First Name"}),Object(i.jsx)("th",{title:"Last Name",children:"Last Name"}),Object(i.jsx)("th",{title:"Phone Number",children:"Phone Number"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("img",{src:t.picture.medium,alt:"employee"})}),Object(i.jsx)("td",{children:t.name.first}),Object(i.jsx)("td",{children:t.name.last}),Object(i.jsx)("td",{children:t.cell})]})]})},m=function(e){var t=e.employees,c=e.setEmployees,s=e.data;return Object(i.jsx)("div",{className:"employee-container",children:Object(i.jsx)("ul",{className:"employee-list",children:s.map((function(e){return Object(i.jsx)(j,{setEmployees:c,employees:t,employee:e,text:e.text},e.cell)}))})})},d=c(16),p=c.n(d),b=function(){return p.a.get("https://randomuser.me/api/?results=50")};var O=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],l=Object(s.useState)([]),a=Object(r.a)(l,2),o=a[0],j=a[1],d=Object(s.useState)("all"),p=Object(r.a)(d,2),O=p[0],h=p[1],f=Object(s.useState)([]),x=Object(r.a)(f,2),y=x[0],v=x[1],N=Object(s.useState)([]),g=Object(r.a)(N,2),S=g[0],E=g[1];Object(s.useEffect)((function(){J(),I()}),[]),Object(s.useEffect)((function(){w(),C()}),[o,O]);var I=function(){b().then((function(e){return E(e.data.results)})).catch((function(e){return console.log(e)}))},w=function(){switch(O){case"completed":v(o.filter((function(e){return!0===e.completed})));break;case"uncompleted":v(o.filter((function(e){return!1===e.completed})));default:v(o)}},C=function(){localStorage.setItem("employees",JSON.stringify(S))},J=function(){if(null===localStorage.getItem("employees"))localStorage.setItem("employees",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("employees"));j(e)}};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{children:Object(i.jsx)("h1",{children:"Employee Directory"})}),Object(i.jsx)(u,{inputText:c,employees:o,setEmployees:j,setInputText:n,setStatus:h,data:S,setData:E}),Object(i.jsx)(m,{setEmployees:j,employees:o,filteredEmployees:y,data:S.filter((function(e){return"".concat(e.name.first," ").concat(e.name.last).toLowerCase().includes(c.toLowerCase())})),setData:E})]})};a.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.10723629.chunk.js.map