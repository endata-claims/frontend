(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[15],{224:function(e,a,t){"use strict";t.r(a);var n=t(120),r=t(218),l=t(0),i=t.n(l),o=t(390),c=t(467),u=t(468),s=t(588),d=t(510),m=t(391),v=t(131),f=t(219);a.default=function(e){var a=e.name,t=e.label,l=e.options,v=e.disabled,p=void 0!==v&&v,g=e.readOnly,h=void 0!==g&&g,y=e.display,O=void 0===y?"grid":y,j=e.color,E=void 0===j?"primary":j,w=e.maxHeight,N=void 0===w?"100%":w,x=b(),k=Object(f.f)().isSubmitting,J=Object(f.e)(a),S=Object(r.a)(J,3),C=S[0],H=S[1],L=S[2].setValue,T=H.error,B=H.touched,I=Boolean(B&&T),M=C.value,R=JSON.stringify(M),V=JSON.stringify(l),q=i.a.useMemo((function(){return null===l||void 0===l?void 0:l.map((function(e){var a=e.label,t=e.value;return{label:a,id:t,value:M.includes(t)}}))}),[R,V]);return i.a.createElement("div",{style:{maxHeight:N,overflow:"auto"}},i.a.createElement(o.a,{component:"fieldset",className:x.root,error:I,disabled:k||p||h},i.a.createElement(c.a,{component:"legend",className:x.label},t),i.a.createElement(u.a,{row:!0,className:x.root,style:{display:O}},null===l||void 0===l?void 0:l.map((function(e){var a=e.label,t=e.value;return i.a.createElement(s.a,{key:t,label:a,control:i.a.createElement(d.a,Object.assign({},C,{value:t,checked:M.includes(t),onChange:function(){return function(e){var a=q.map((function(a){return a.id===e?Object(n.a)({},a,{value:!a.value}):a})).filter((function(e){return e.value})).map((function(e){return e.id}));L(a)}(t)},disabled:k||p||h,color:E}))})}))),I&&i.a.createElement(m.a,{className:x.helperText},String(T))))};var b=Object(v.a)({root:{width:"100%",alignItems:"center",justifyContent:"center"},label:{transform:"scale(0.75)"},switch:{marginLeft:"calc(50% - 31px)"},helperText:{marginLeft:14,marginRight:14}})}}]);
//# sourceMappingURL=15.0d6da6b4.chunk.js.map