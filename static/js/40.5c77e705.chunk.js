(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[40,15,47],{222:function(e,t,n){"use strict";var a=n(120),r=n(7),i=n(0),o=n.n(i),l=n(196),c=n(1235),u=n(131);t.a=function(e){var t=e.title,n=e.children,a=e.loading,i=Object(r.a)(e,["title","children","loading"]),u=s({});return o.a.createElement(o.a.Fragment,null,t&&o.a.createElement("div",{className:u.paperTitle},t),o.a.createElement(l.a,Object.assign({className:u.paperContent},i),a&&o.a.createElement("div",{style:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},o.a.createElement(c.a,null)),!a&&n))};var s=Object(u.a)((function(e){return{paperTitle:Object(a.a)({},e.mixins.gutters(),{background:e.palette.primary.main,color:e.palette.primary.contrastText,borderRadius:"8px 8px 0 0",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),fontSize:"1rem",fontWeight:800}),paperContent:Object(a.a)({},e.mixins.gutters(),{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)})}}))},224:function(e,t,n){"use strict";n.r(t);var a=n(120),r=n(218),i=n(0),o=n.n(i),l=n(390),c=n(467),u=n(468),s=n(588),d=n(510),m=n(391),p=n(131),v=n(219);t.default=function(e){var t=e.name,n=e.label,i=e.options,p=e.disabled,g=void 0!==p&&p,b=e.readOnly,h=void 0!==b&&b,O=e.display,y=void 0===O?"grid":O,j=e.color,x=void 0===j?"primary":j,E=e.maxHeight,w=void 0===E?"100%":E,N=f(),S=Object(v.f)().isSubmitting,T=Object(v.e)(t),k=Object(r.a)(T,3),C=k[0],R=k[1],I=k[2].setValue,J=R.error,B=R.touched,Q=Boolean(B&&J),q=C.value,F=JSON.stringify(q),H=JSON.stringify(i),M=o.a.useMemo((function(){return null===i||void 0===i?void 0:i.map((function(e){var t=e.label,n=e.value;return{label:t,id:n,value:q.includes(n)}}))}),[F,H]);return o.a.createElement("div",{style:{maxHeight:w,overflow:"auto"}},o.a.createElement(l.a,{component:"fieldset",className:N.root,error:Q,disabled:S||g||h},o.a.createElement(c.a,{component:"legend",className:N.label},n),o.a.createElement(u.a,{row:!0,className:N.root,style:{display:y}},null===i||void 0===i?void 0:i.map((function(e){var t=e.label,n=e.value;return o.a.createElement(s.a,{key:n,label:t,control:o.a.createElement(d.a,Object.assign({},C,{value:n,checked:q.includes(n),onChange:function(){return function(e){var t=M.map((function(t){return t.id===e?Object(a.a)({},t,{value:!t.value}):t})).filter((function(e){return e.value})).map((function(e){return e.id}));I(t)}(n)},disabled:S||g||h,color:x}))})}))),Q&&o.a.createElement(m.a,{className:N.helperText},String(J))))};var f=Object(p.a)({root:{width:"100%",alignItems:"center",justifyContent:"center"},label:{transform:"scale(0.75)"},switch:{marginLeft:"calc(50% - 31px)"},helperText:{marginLeft:14,marginRight:14}})},240:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(0),i=n.n(r),o=n(756),l=n(221);t.default=function(e){var t=e.unMountOn,n=e.xs,r=void 0===n?3:n,c=e.component,u=void 0===c?l.default:c,s=Object(a.a)(e,["unMountOn","xs","component"]);return i.a.createElement(o.a,{item:!0,xs:r,key:s.name},!t&&i.a.createElement(u,Object.assign({},s,{variant:"outlined",fullWidth:!0})))}},397:function(e,t,n){"use strict";n.r(t);var a=n(25),r=n(0),i=n.n(r),o=n(222),l=n(756),c=n(240),u=n(224),s=n(16);function d(){var e=Object(a.a)(["\n  fragment JobInfo_QuotingRestorerCardFragment on Query {\n    quotingRestorers: claimFilterOptions(where: $whereQuotingRestorer) {\n      label: name\n      value\n    }\n  }\n"]);return d=function(){return e},e}Object(s.a)(d()),t.default=function(e){var t,n=e.optionData,a=e.claim,r=null===n||void 0===n?void 0:null===(t=n.quotingRestorers)||void 0===t?void 0:t.filter((function(e){var t,n;return(null===e||void 0===e?void 0:e.value)!=(null===a||void 0===a?void 0:null===(t=a.restoration)||void 0===t?void 0:null===(n=t.scopingSupplier)||void 0===n?void 0:n.companyId)}));return i.a.createElement(o.a,{title:"Quoting Builders"},i.a.createElement(l.a,{container:!0,spacing:3},[{xs:12,component:u.default,name:"portfolios[2].quotingSupplierIds",options:r,maxHeight:"12rem"}].map(c.default)))}}}]);
//# sourceMappingURL=40.5c77e705.chunk.js.map