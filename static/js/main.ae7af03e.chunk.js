(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={messageWrapper:"Message_messageWrapper__x2wIN",messageBody:"Message_messageBody__1MA9d",messageName:"Message_messageName__2ozsl",message:"Message_message__3WgbT",time:"Message_time__19Jbm",avatar:"Message_avatar__3cEz3"}},,,,,,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__1i7dV",errorInput:"SuperInputText_errorInput__2uc2L",error:"SuperInputText_error__2PDqp"}},function(e,a,t){e.exports={blue:"HW4_blue__2oM8-",column:"HW4_column__2nduD"}},function(e,a,t){e.exports={default:"SuperButton_default__2rpI3",red:"SuperButton_red__1DmbM"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2vZFA",spanClassName:"SuperCheckbox_spanClassName__1GWz1"}},,,,,,,function(e,a,t){e.exports={App:"App_App__NXyba"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__209Ka",error:"Greeting_error__3sUda"}},,,function(e,a,t){e.exports=t(37)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),c=t.n(l),u=(t(31),t(22)),o=t.n(u);var s=function(){return r.a.createElement("div",null,"// add NavLinks")};var m=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},i=t(5),d=t.n(i);var E=function(e){return r.a.createElement("div",{className:d.a.messageWrapper},r.a.createElement("div",{className:d.a.avatar},r.a.createElement("img",{src:e.avatar,alt:"avatar",height:"50",width:"50"})),r.a.createElement("div",{className:d.a.messageBody},r.a.createElement("div",null,r.a.createElement("div",{className:d.a.messageName},e.name),r.a.createElement("div",{className:d.a.message},e.message)),r.a.createElement("div",{className:d.a.time},e.time)))},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Some Name",f="some text",v="22:00";var _=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(E,{avatar:p,name:h,message:f,time:v}),r.a.createElement("hr",null),r.a.createElement("hr",null))},b=t(3);var g=function(e){return r.a.createElement("div",null,e.affair.name,r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var C=function(e){var a=e.data.map((function(a){return r.a.createElement(g,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},k=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var N=function(){var e=Object(n.useState)(k),a=Object(b.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),u=Object(b.a)(c,2),o=u[0],s=u[1],m=function(e,a){return"all"===a?e:"high"===a||"low"===a||"middle"===a?e.filter((function(e){return e.priority===a})):e}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(C,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=t(25),x=t(23),O=t.n(x),y=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,u=O.a.error;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:l?"":u}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c))},w=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(b.a)(l,2),u=c[0],o=c[1],s=Object(n.useState)(""),m=Object(b.a)(s,2),i=m[0],d=m[1],E=a.length;return r.a.createElement(y,{name:u,setNameCallback:function(e){o(e.currentTarget.value)},addUser:function(){""===u?d("please enter your name!"):(o(""),t(u),alert("Hello  ".concat(u,"!")),d(""))},error:i,totalUsers:E})},S=t(39);var A=function(){var e=Object(n.useState)([]),a=Object(b.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(w,{users:t,addUserCallback:function(e){var a={_id:Object(S.a)(),name:e};l([a].concat(Object(j.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=t(6),I=t(12),M=t.n(I),W=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,u=e.className,o=e.spanClassName,s=Object(T.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),m="".concat(M.a.error," ").concat(o||""),i="".concat(M.a.errorInput," ").concat(u);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:i},s)),c&&r.a.createElement("span",{className:m},c))},B=t(13),F=t.n(B),P=t(14),U=t.n(P),H=function(e){var a=e.red,t=e.className,n=Object(T.a)(e,["red","className"]),l="".concat(a?U.a.red:U.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},G=t(15),J=t.n(G),K=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(T.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),u="".concat(J.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:u},c)),l&&r.a.createElement("span",{className:J.a.spanClassName},l))};var z=function(){var e=Object(n.useState)(""),a=Object(b.a)(e,2),t=a[0],l=a[1],c=t?"":"error",u=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),s=Object(b.a)(o,2),m=s[0],i=s[1],d=Object(n.useState)(!1),E=Object(b.a)(d,2),p=E[0],h=E[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:F.a.column},r.a.createElement(W,{value:t,onChangeText:l,onEnter:u,error:c,className:F.a.blue}),r.a.createElement(H,{red:!0,onClick:u},"enter "),r.a.createElement(K,{checked:m,onChangeChecked:i},"some text "),r.a.createElement(K,{checked:p,onChange:function(e){return h(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var D=function(){return r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement(N,null),r.a.createElement(A,null),r.a.createElement(z,null))},L=t(1);var X=function(){return r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement(N,null),r.a.createElement(A,null),r.a.createElement(z,null))};var q=function(){return r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement(N,null),r.a.createElement(A,null),r.a.createElement(z,null))},Z="/pre-junior",R="/junior",V="/juniorPlus";var Y=function(){return r.a.createElement("div",null,r.a.createElement(L.d,null,r.a.createElement(L.b,{path:"/",exact:!0,render:function(){return r.a.createElement(L.a,{to:Z})}}),r.a.createElement(L.b,{path:Z,render:function(){return r.a.createElement(D,null)}}),r.a.createElement(L.b,{path:"/",exact:!0,render:function(){return r.a.createElement(L.a,{to:R})}}),r.a.createElement(L.b,{path:R,render:function(){return r.a.createElement(q,null)}}),r.a.createElement(L.b,{path:"/",exact:!0,render:function(){return r.a.createElement(L.a,{to:V})}}),r.a.createElement(L.b,{path:V,render:function(){return r.a.createElement(X,null)}}),r.a.createElement(L.b,{render:function(){return r.a.createElement(m,null)}})))},$=t(11);var Q=function(){return r.a.createElement("div",null,r.a.createElement($.a,null,r.a.createElement(s,null),r.a.createElement(Y,null)))};var ee=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[26,1,2]]]);
//# sourceMappingURL=main.ae7af03e.chunk.js.map