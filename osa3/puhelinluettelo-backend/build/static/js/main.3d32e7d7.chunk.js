(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{20:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),r=n.n(a),u=n(14),i=n.n(u),o=(n(20),n(3)),s=n(4),d=n.n(s),l="/api/persons",b={getAll:function(){return d.a.get(l).then((function(e){return e.data}))},add:function(e){return d.a.put(l,e).then((function(e){return e.data}))},update:function(e,t){return d.a.put("".concat(l,"/").concat(e),t).then((function(e){return e.data}))},remove:function(e){return d.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))}},j=function(e){var t=e.message,n=e.type;return Object(c.jsx)("div",{className:"notification ".concat(n),children:Object(c.jsx)("span",{children:t})})},h=function(e){var t=e.text,n=e.value,a=e.handleChange,r=e.type;return Object(c.jsx)("div",{children:Object(c.jsxs)("label",{children:[Object(c.jsx)("span",{children:t}),Object(c.jsx)("input",{type:r,value:n,onChange:a})]})})},f=function(e){var t=e.inputs,n=e.handleSubmit,a=e.heading,r=e.submitText;return Object(c.jsxs)("form",{onSubmit:n,children:[Object(c.jsx)("h2",{children:a}),t.map((function(e,t){return Object(c.jsx)(h,{type:e.type,text:e.text,value:e.value,handleChange:e.handleChange},t)})),n&&Object(c.jsx)("button",{type:"submit",children:r})]})},m=function(e){var t=e.name,n=e.number,a=e.id,r=e.clickHandler;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:n}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{onClick:function(){return r(a)},children:"Remove"})})]})},p=function(e){var t=e.phonenumbers,n=e.clickHandler;return Object(c.jsx)("table",{children:Object(c.jsx)("tbody",{children:t.map((function(e){return Object(c.jsx)(m,{name:e.name,number:e.number,id:e.id,clickHandler:n},e.name)}))})})},O=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],u=Object(a.useState)(""),i=Object(o.a)(u,2),s=i[0],d=i[1],l=Object(a.useState)(""),h=Object(o.a)(l,2),m=h[0],O=h[1],x=Object(a.useState)(""),v=Object(o.a)(x,2),g=v[0],y=v[1],w=Object(a.useState)(""),C=Object(o.a)(w,2),S=C[0],k=C[1],A=Object(a.useState)(""),H=Object(o.a)(A,2),I=H[0],T=H[1],D=function(e){var t=e.message,n=e.type;k(t),T(n),setTimeout((function(){k(null),T(null)}),5e3)},E=function(){b.getAll().then((function(e){r(e)}))};Object(a.useEffect)((function(){E()}),[]);var F=function(e,t){b.update(e.id,t).then((function(t){r(n.map((function(n){return n.id===e.id?t:n}))),D({message:"Updated number for ".concat(e.name),type:"success"}),d(""),O("")})).catch((function(t){D({message:"Info for ".concat(e.name," had been deleted before update"),type:"error"}),E()}))},J=g?n.filter((function(e){return e.name.toLowerCase().includes(g)})):n;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(j,{message:S,type:I}),Object(c.jsx)(f,{heading:"Filter",inputs:[{type:"text",text:"filter shown with",value:g,handleChange:function(e){y(e.target.value.toLowerCase())}}]}),Object(c.jsx)(f,{heading:"Add new",handleSubmit:function(e){e.preventDefault();var t,c={name:s,number:m},a=(t=s,n.find((function(e){return e.name===t})));if(a)return F(a,c);b.add(c).then((function(e){r(n.concat(e)),D({message:"Added a new number for ".concat(s),type:"success"}),d(""),O("")})).catch((function(e){D({message:"Failed to add info for ".concat(s),type:"error"}),E()}))},submitText:"add",inputs:[{type:"text",text:"name:",value:s,handleChange:function(e){d(e.target.value)}},{type:"tel",text:"number:",value:m,handleChange:function(e){O(e.target.value)}}]}),Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)(p,{phonenumbers:J,clickHandler:function(e){var t=n.find((function(t){return t.id===e}));window.confirm("Do you really want to remove the person from phonebook?")&&b.remove(e).then((function(){D({message:"Removed ".concat(t.name,"'s number"),type:"success"}),E()})).catch((function(e){D({message:"Information of ".concat(t.name," had already been removed"),type:"error"}),E()}))}})]})};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.3d32e7d7.chunk.js.map