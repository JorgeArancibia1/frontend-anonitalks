(this.webpackJsonpanonitalks=this.webpackJsonpanonitalks||[]).push([[0],{73:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n(0),c=n(26),o=n.n(c),s=n(6),i=n(21),l=n(45),u=n(4),p="[auth] Finish checking login state",j="[auth] Login",d="[auth] Logout",b="[posts] Posts loaded",m="[post] Send post",f="[post] Update post",O="[post] Delete post",h="[modal] Open modal",x="[modal] Close modal",v="[post] postId",g="[post] cleanPost",y="[form] sendForm",k={checking:!0},w=n(24),N=n(46),E=n.n(N),C=function(t,e){var n=E.a.findIndex(t.posts,{id:e.id});return t.posts.splice(n,1,e)},S={posts:[],post:{id:"",title:"",content:""}},_={selectedPost:{},openModal:!1,type:"create"},P={title:"",content:""},T=Object(i.c)({auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return Object(u.a)(Object(u.a)({},t),{},{checking:!1},e.payload);case p:return Object(u.a)(Object(u.a)({},t),{},{checking:!1});case d:return{checking:!1};default:return t}},posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return Object(u.a)(Object(u.a)({},t),{},{posts:e.payload});case m:return Object(u.a)(Object(u.a)({},t.posts),{},{posts:[].concat(Object(w.a)(t.posts),[e.payload])});case O:var n=t.posts.filter((function(t){t.id,e.payload}));return Object(u.a)(Object(u.a)({},t),{},{posts:n});case f:return Object(u.a)(Object(u.a)({},t),{},{posts:C(t,e.payload)});case v:case g:return Object(u.a)(Object(u.a)({},t),{},{post:e.payload});default:return t}},modal:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case h:return Object(u.a)(Object(u.a)({},t),{},{selectedPost:e.payload.content,type:e.payload.type,openModal:!0});case x:return Object(u.a)(Object(u.a)({},t),{},{selectedPost:{},type:"create",openModal:!1});default:return t}},form:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y:return Object(u.a)(Object(u.a)({},t),{},{title:e.payload.title,content:e.payload.content});default:return t}}}),L="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,A=Object(i.e)(T,L(Object(i.a)(l.a))),I=n(19),D=n(5),M=n(11),z=n.n(M),G=n(18),J=n(10),R=n.n(J),U="https://mern-anonitalks.herokuapp.com/api",B=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(U,"/").concat(t);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(e)})},F=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(U,"/").concat(t),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(e)})},q=function(){return{type:p}},X=function(t){return{type:j,payload:t}},H=function(){return{type:d}},V=n(32),K=function(t){var e=t.isAuthenticated,n=t.component,r=Object(V.a)(t,["isAuthenticated","component"]);return Object(a.jsx)(D.b,Object(u.a)(Object(u.a)({},r),{},{component:function(t){return e?Object(a.jsx)(D.a,{to:"/"}):Object(a.jsx)(n,Object(u.a)({},t))}}))},Q=function(t){var e=t.isAuthenticated,n=t.component,r=Object(V.a)(t,["isAuthenticated","component"]);return Object(a.jsx)(D.b,Object(u.a)(Object(u.a)({},r),{},{component:function(t){return e?Object(a.jsx)(n,Object(u.a)({},t)):Object(a.jsx)(D.a,{to:"/login"})}}))},W=n(9),Y=n(16),Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object(r.useState)(t),n=Object(W.a)(e,2),a=n[0],c=n[1],o=function(){c(t)},s=function(t){var e=t.target;c(Object(u.a)(Object(u.a)({},a),{},Object(Y.a)({},e.name,e.value)))};return[a,s,o]},$=function(){var t=Object(s.b)();return Object(a.jsx)("div",{className:"container-nav",children:Object(a.jsxs)("li",{className:"nav-list pt-2",children:[Object(a.jsx)("ul",{children:"Home"}),Object(a.jsx)("ul",{children:"Chat"}),Object(a.jsx)("ul",{children:"Sobre la p\xe1gina"}),Object(a.jsx)("button",{className:"buttonout",type:"button",onClick:function(){t((function(t){localStorage.clear(),t(H())}))},children:"Logout"})]})})},tt=function(t){var e=t.type,n=void 0===e?"create":e,a=t.content;return{type:h,payload:{type:n,content:void 0===a?{title:"",content:""}:a}}},et=function(){return{type:x}},nt=function(){return function(){var t=Object(G.a)(z.a.mark((function t(e){var n,a,r;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F("posts");case 3:return n=t.sent,t.next=6,n.json();case 6:return a=t.sent,r=a.posts,t.abrupt("return",e({type:b,payload:r}));case 11:t.prev=11,t.t0=t.catch(0),R.a.fire("Error",t.t0,"error");case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},at=function(t){var e=t.user,n=t.title,r=t.content,c=t.id,o=Object(s.b)();return Object(a.jsxs)("div",{className:"container-card mb-1",children:[Object(a.jsxs)("div",{className:"header-card",children:[Object(a.jsxs)("h3",{className:"user mb-3",children:["@",e]}),Object(a.jsx)("span",{className:"title",children:n})]}),Object(a.jsx)("div",{className:"content-container mb-3",children:Object(a.jsx)("p",{className:"content mt-4",children:r})}),Object(a.jsxs)("div",{className:"container-buttons",children:[Object(a.jsx)("button",{className:"standard-button",type:"button",onClick:function(){o(function(t){return function(){var e=Object(G.a)(z.a.mark((function e(n){var a,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F("posts/".concat(t),{},"DELETE");case 3:return a=e.sent,e.next=6,a.json();case 6:(r=e.sent).ok?(n({type:O,payload:t}),R.a.fire("Listo!","Post Borrado!","success"),n(nt())):R.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),R.a.fire("Error",e.t0,"error");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()}(c))},children:"Eliminar"}),Object(a.jsx)("button",{className:"standard-button",type:"button",onClick:function(){o(tt({type:"update",content:{id:c,title:n,content:r}}))},children:"Actualizar"})]})]})};at.defaultProps={user:"User",title:"Title",content:"content"};var rt=n(39),ct=n.n(rt),ot=n(47),st=n.n(ot),it=n(91),lt=function(t){var e=t.title,n=t.content,c=t.id,o=void 0===c?"":c,i=t.type,l=Object(s.b)(),p=Object(r.useState)({title:"",content:"",id:""}),j=Object(W.a)(p,2),d=j[0],b=j[1];Object(r.useEffect)((function(){b(Object(u.a)(Object(u.a)({},d),{},{title:e,content:n,id:o}))}),[]);var O=function(t){var e=t.target;b(Object(u.a)(Object(u.a)({},d),{},Object(Y.a)({},e.name,e.value)))},h=function(t){t.preventDefault(),"create"===i?l(function(t){var e=t.title,n=t.content;return function(){var t=Object(G.a)(z.a.mark((function t(a){var r,c,o;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F("posts",{title:e,content:n},"POST");case 3:return r=t.sent,t.next=6,r.json();case 6:c=t.sent,o=c.post,c.ok?(a({type:m,payload:o}),R.a.fire("Listo!","Post Agregado!","success"),a(et()),a(nt())):(R.a.fire("Error",c.errors.title.msg,"error"),R.a.fire("Error",c.errors.content.msg,"error")),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),R.a.fire("Error",t.t0,"error");case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(d)):"update"===i&&l(function(t){var e=t.title,n=t.content,a=t.id;return function(){var t=Object(G.a)(z.a.mark((function t(r){var c,o,s;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F("posts/".concat(a),{title:e,content:n,id:a},"PUT");case 3:return c=t.sent,t.next=6,c.json();case 6:o=t.sent,s={title:e,content:n,id:a},o.ok?(r({type:f,payload:s}),R.a.fire("Listo!","Post Actualizado!","success"),r(et()),r(nt())):R.a.fire("Error",o.msg,"error"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),R.a.fire("Error",t.t0,"error");case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(d))};return Object(a.jsxs)("form",{onSubmit:function(t){return h(t)},className:"container",children:[Object(a.jsx)("input",{className:"inTitle",placeholder:"T\xedtulo del post",type:"text",name:"title",autoComplete:"off",value:d.title,onChange:function(t){return O(t)}}),Object(a.jsx)("br",{}),Object(a.jsx)("textarea",{type:"text",className:"text-content",placeholder:"Escribe tu post aqui.",name:"content",autoComplete:"off",value:d.content,onChange:function(t){return O(t)}}),Object(a.jsx)("input",{type:"submit",className:"mgy center pointer",value:"create"===i?"Postear":"Actualizar"})]})};ct.a.setAppElement("#root");var ut=function(){var t=Object(s.b)(),e=Object(s.c)((function(t){return t.modal})),n=e.openModal,r=e.type,c=e.selectedPost,o=function(){return t(et())};return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(ct.a,{isOpen:n,onRequestClose:o,closeTimeoutMS:200,className:"modal text-right",overlayClassName:"modal-fondo",children:[Object(a.jsx)(it.a,{"aria-label":"delete",onClick:o,children:Object(a.jsx)(st.a,{fontSize:"small"})}),"create"===r?Object(a.jsx)(lt,{title:c.title,content:c.content,type:"create"}):Object(a.jsx)(lt,{title:c.title,content:c.content,id:c.id,type:"update"})]})})},pt=[{layout:"inicio-sesion",hasLogged:!1,routes:[{exact:!0,path:"/login",component:function(){var t=Object(s.b)(),e=Z({lemail:"jorge@gmail.com",lpassword:"123456"}),n=Object(W.a)(e,2),r=n[0],c=n[1],o=r.lemail,i=r.lpassword;return Object(a.jsx)("div",{className:"container-home",children:Object(a.jsxs)("div",{className:"container-title-form",children:[Object(a.jsx)("img",{className:"title-anonitalks",src:"https://res.cloudinary.com/initial-cloud/image/upload/c_scale,h_48,w_225/v1604950450/anonitalks_ro0daj.jpg",alt:""}),Object(a.jsxs)("form",{className:"form-home",onSubmit:function(e){var n,a;e.preventDefault(),t((n=o,a=i,function(){var t=Object(G.a)(z.a.mark((function t(e){var r,c;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B("auth",{email:n,password:a},"POST");case 2:return r=t.sent,t.next=5,r.json();case 5:(c=t.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),e(X({uid:c.uid,name:c.name}))):R.a.fire("Error",c.msg,"error");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},children:[Object(a.jsx)("h2",{className:"title-login",children:"Login"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{className:"input-name",type:"text",placeholder:"Email",name:"lemail",autoComplete:"off",value:o,onChange:c}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{className:"input-password",type:"password",placeholder:"Password",name:"lpassword",autoComplete:"off",value:i,onChange:c}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{className:"login-button",type:"submit",value:"Entrar"}),Object(a.jsx)("br",{}),Object(a.jsx)(I.b,{to:"/signup",children:"Sign up"})]})]})})}},{exact:!0,path:"/signup",component:function(){var t=Object(s.b)(),e=Z({rname:"jorge",remail:"jorge@gmail.com",rpassword1:"123456",rpassword2:"123456"}),n=Object(W.a)(e,2),r=n[0],c=n[1],o=r.rname,i=r.remail,l=r.rpassword1,u=r.rpassword2;return Object(a.jsx)("div",{className:"container-home",children:Object(a.jsxs)("div",{className:"container-title-form",children:[Object(a.jsx)("img",{className:"title-anonitalks",src:"https://res.cloudinary.com/initial-cloud/image/upload/c_scale,h_48,w_225/v1604950450/anonitalks_ro0daj.jpg",alt:""}),Object(a.jsxs)("form",{className:"form-home",onSubmit:function(e){if(e.preventDefault(),l!==u)return R.a.fire("Error","Las contrase\xf1as deben ser iguales","error");var n,a,r;t((n=o,a=i,r=l,function(){var t=Object(G.a)(z.a.mark((function t(e){var c,o;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B("auth/new",{name:n,email:a,password:r},"POST");case 2:return c=t.sent,t.next=5,c.json();case 5:(o=t.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),e(X({uid:o.uid,name:o.name}))):R.a.fire("Error",o.msg,"error");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},children:[Object(a.jsx)("h2",{className:"title-login",children:"Register"}),Object(a.jsx)("input",{type:"text",placeholder:"Name",name:"rname",className:"",autoComplete:"off",value:o,onChange:c}),Object(a.jsx)("input",{type:"text",placeholder:"Email",name:"remail",className:"",autoComplete:"off",value:i,onChange:c}),Object(a.jsx)("input",{type:"password",placeholder:"Password",name:"rpassword1",className:"",autoComplete:"off",value:l,onChange:c}),Object(a.jsx)("input",{type:"password",placeholder:"Confirm password",name:"rpassword2",className:"",autoComplete:"off",value:u,onChange:c}),Object(a.jsx)("input",{type:"submit",className:"login-button",value:"Register"}),Object(a.jsx)(I.b,{className:"mt-2",to:"/login",children:"Back to Login"})]})]})})}}]},{layout:"app",hasLogged:!0,routes:[{exact:!0,path:"/",component:function(){var t=Object(s.b)(),e=Object(s.c)((function(t){return t.posts})).posts;Object(r.useEffect)((function(){t(nt())}),[t]);return Object(a.jsxs)("div",{children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("img",{className:"title-anonitalks-home",src:"https://res.cloudinary.com/initial-cloud/image/upload/c_scale,h_48,w_225/v1604950450/anonitalks_ro0daj.jpg",alt:""}),Object(a.jsx)($,{})]}),Object(a.jsx)("hr",{}),Object(a.jsx)("button",{className:"standard-button m-4",onClick:function(){return t(tt({}))},children:"Agregar post"}),Object(a.jsx)("center",{children:e.map((function(t){return Object(a.jsx)(at,Object(u.a)(Object(u.a)({},t),{},{user:t.user.name}),t.id)}))}),Object(a.jsx)(ut,{})]})}}]}],jt=function(){var t=Object(s.b)(),e=Object(s.c)((function(t){return t.auth})),n=e.checking,c=e.uid;return Object(r.useEffect)((function(){t(function(){var t=Object(G.a)(z.a.mark((function t(e){var n,a;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F("auth/renew");case 2:return n=t.sent,t.next=5,n.json();case 5:(a=t.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),e(X({uid:a.uid,name:a.name}))):e(q());case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[t]),n?Object(a.jsx)("h5",{children:"Espere..."}):Object(a.jsx)(I.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(D.d,{children:[pt.map((function(t){var e=t.hasLogged?Q:K;return t.routes.map((function(t){return Object(a.jsx)(e,{path:t.path,exact:t.exact,isAuthenticated:!!c,component:t.component},t.path)}))})),Object(a.jsx)(D.a,{to:"/login"})]})})})},dt=(n(73),function(){return Object(a.jsx)(s.a,{store:A,children:Object(a.jsx)(jt,{})})});o.a.render(Object(a.jsx)(dt,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.bf45b1cd.chunk.js.map