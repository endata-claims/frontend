(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[64],{1282:function(e,n,t){"use strict";t.r(n);var a=t(123),o=t(25),l=t(0),i=t.n(l),r=t(136),c=t.n(r),u=t(56),m=t(763),s=function(){return i.a.createElement("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},i.a.createElement(m.a,{style:{margin:"0 auto",display:"block"}}))},d=t(1271),p=t(764),v=t(1272),f=t(781),h=t.n(f),g=t(546),E=t.n(g),b=t(782),y=t.n(b),k=t(7),C=t(1266),R=t(1264),j=t(131),O=t(121),x=function(e){var n=e.routes,t=e.activeRoute,a=Object(k.a)(e,["routes","activeRoute"]),o=P();return i.a.createElement(C.a,Object.assign({color:"inherit",variant:"text",size:"large"},a),n.map((function(e,n){var a=e.label,l=e.icon,r=e.path,c=e.href;return i.a.createElement(R.a,{key:n,component:c?"a":O.b,href:c,to:r,startIcon:l,color:"inherit",className:t===n?o.activeRoute:""},a)})))},P=Object(j.a)({activeRoute:{background:"rgba(0,0,0, 0.3)"}}),_=t(219),z=t(762),S=t(717),L=t(1267),U=t(779),I=t.n(U),T=function(e){var n=Object(u.f)().push,t=i.a.useState(null),a=Object(_.a)(t,2),o=a[0],l=a[1],r=function(){return l(null)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(z.a,Object.assign({onClick:function(e){return l(e.currentTarget)},color:"inherit"},e),i.a.createElement(I.a,null)),i.a.createElement(S.a,{anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:r},i.a.createElement(L.a,{onClick:function(){r(),localStorage.clear(),n("/user/login")}},"Logout")))},w=t(1269),N=t(1268),B=t(1270),D=t(766),F=t(780),M=t.n(F),W=t(45),q=t.n(W),A=t(230);function J(){var e=Object(o.a)(["\n  query Communicationmenu {\n    communications: claimCommuications(\n      first: 2\n      where: {\n        boxes: Inbox\n        acknowledged: false\n      }\n    ) {\n      totalCount\n      edges {\n        node {\n          id\n          claimRef\n          message\n        }\n      }\n    }\n  }\n"]);return J=function(){return e},e}q()(J());var H=function(e){var n,t,a,o,l=Object(u.f)().push,r=i.a.useState(null),c=Object(_.a)(r,2),m=c[0],s=c[1],d=function(){return s(null)},p=Object(A.z)(),v=p.data,f=p.loading;return i.a.createElement(i.a.Fragment,null,i.a.createElement(z.a,Object.assign({onClick:function(e){return s(e.currentTarget)},color:"inherit",disabled:f},e),i.a.createElement(w.a,{color:"secondary",max:99,badgeContent:null===v||void 0===v?void 0:null===(n=v.communications)||void 0===n?void 0:n.totalCount},i.a.createElement(M.a,null))),i.a.createElement(S.a,{anchorEl:m,keepMounted:!0,open:Boolean(m),onClose:d,PaperProps:{style:{minWidth:200,maxWidth:350}}},i.a.createElement(N.a,{tabIndex:-1},i.a.createElement(B.a,{primary:"Communication Tasks"})),i.a.createElement(D.a,null),null===v||void 0===v?void 0:null===(t=v.communications)||void 0===t?void 0:null===(a=t.edges)||void 0===a?void 0:a.map((function(e){var n=e.node,t=n.id,a=n.claimRef,o=n.message;return i.a.createElement(N.a,{key:t,component:L.a,button:!0,onClick:function(){return function(e){d(),l("/app/claims/".concat(e,"/communications"))}(t)}},i.a.createElement(B.a,{primary:a,secondary:o}))})),i.a.createElement(D.a,null),i.a.createElement(N.a,{style:{padding:16}},i.a.createElement(B.a,null,"Total: ",null===v||void 0===v?void 0:null===(o=v.communications)||void 0===o?void 0:o.totalCount),i.a.createElement(R.a,{variant:"outlined",color:"primary",style:{marginLeft:8},onClick:function(){d(),l("/app/communicationtasks")}},"See more..."))))},K=[{label:"Dashboard",path:"/app/dashboard",icon:i.a.createElement(h.a,null)},{label:"Claims",path:"/app/claims",icon:i.a.createElement(E.a,null)},{label:"Reports",path:"/app/reports",icon:i.a.createElement(y.a,null),href:"https://reports.claims.endataclaims.com/"}],G=function(e){var n=e.logo,t=e.companyLogo,a=e.accessPaths,o=Object(u.g)().pathname,l=K.filter((function(e){return a.includes(e.path)})),r=l.findIndex((function(e){return o.includes(e.path)}));return i.a.createElement(d.a,{position:"sticky"},i.a.createElement(p.a,{maxWidth:"lg"},i.a.createElement(v.a,{style:{minHeight:48,height:48}},i.a.createElement("div",{style:{marginRight:"auto"}},t&&i.a.createElement("img",{src:t,alt:"ENData Claims",style:{marginRight:8}}),i.a.createElement(x,{routes:l,activeRoute:r})),i.a.createElement("div",{style:{marginLeft:"auto"}},a.includes("/app/communicationtasks")&&i.a.createElement(H,{style:{marginRight:8}}),i.a.createElement(T,null),n&&i.a.createElement("img",{src:n,alt:"ENData Claims"})))))},Q=t(16);function V(){var e=Object(o.a)(["\n  query AppRoot {\n    currentUser {\n      _appRoutes @client\n      _rootRoute @client\n      _customisation @client {\n        alias\n        favicon\n        logo\n        companyLogo\n      }\n    }\n  }\n"]);return V=function(){return e},e}Object(Q.a)(V());n.default=function(){var e,n,t,a,o,l=Object(u.f)(),r=l.push,m=l.location.pathname;localStorage.ACCESS_TOKEN||r("/user/signin");var d=Object(A.l)(),p=d.data,v=d.loading,f=X({appRoutes:null===p||void 0===p?void 0:null===(e=p.currentUser)||void 0===e?void 0:e._appRoutes}),h=null===p||void 0===p?void 0:null===(n=p.currentUser)||void 0===n?void 0:n._rootRoute;i.a.useEffect((function(){var e=m.split("/").filter((function(e){return e}));h&&e.length<2&&r(h)}),[m,h,r]);var g=null===p||void 0===p?void 0:null===(t=p.currentUser)||void 0===t?void 0:t._customisation;return v||!(null===p||void 0===p?void 0:null===(a=p.currentUser)||void 0===a?void 0:a._appRoutes)?i.a.createElement(s,null):i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("title",null,null===g||void 0===g?void 0:g.alias),(null===g||void 0===g?void 0:g.favicon)&&i.a.createElement("link",{id:"favicon",rel:"icon",type:"image/x-icon",href:g.favicon})),i.a.createElement(G,{logo:null===g||void 0===g?void 0:g.logo,companyLogo:null===g||void 0===g?void 0:g.companyLogo,accessPaths:null===p||void 0===p?void 0:null===(o=p.currentUser)||void 0===o?void 0:o._appRoutes}),i.a.createElement(i.a.Suspense,{fallback:null},i.a.createElement(u.c,null,f&&f.map((function(e){return i.a.createElement(u.a,Object.assign({key:e.path},e))})))))};var X=function(e){var n=e.appRoutes,o=i.a.useMemo((function(){return[{exact:!1,path:"/app/dashboard",component:i.a.lazy((function(){return Promise.all([t.e(8),t.e(4),t.e(7),t.e(36),t.e(68)]).then(t.bind(null,1279))}))},{exact:!1,path:"/app/claims/add",component:i.a.lazy((function(){return Promise.all([t.e(2),t.e(0),t.e(5),t.e(1),t.e(69)]).then(t.bind(null,1280))}))},{exact:!1,path:"/app/claims/:id",component:i.a.lazy((function(){return Promise.all([t.e(2),t.e(5),t.e(8),t.e(13),t.e(70)]).then(t.bind(null,1285))}))},{exact:!1,path:"/app/claims",component:i.a.lazy((function(){return Promise.all([t.e(2),t.e(8),t.e(4),t.e(55),t.e(73)]).then(t.bind(null,1283))}))},{exact:!1,path:"/app/communicationtasks",component:i.a.lazy((function(){return Promise.all([t.e(2),t.e(5),t.e(8),t.e(4),t.e(72)]).then(t.bind(null,1286))}))}]}),[]),l=n?o.filter((function(e){return Boolean(n.filter((function(n){return e.path.includes(n)})).length)})):[];return[].concat(Object(a.a)(l),[{exact:!0,path:"*",component:i.a.lazy((function(){return t.e(86).then(t.bind(null,783))}))}])}}}]);
//# sourceMappingURL=64.03d4cd3a.chunk.js.map