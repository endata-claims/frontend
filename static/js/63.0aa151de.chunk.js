(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[63],{416:function(i,l,n){"use strict";n.r(l);var o=n(11),a=n.n(o),e=n(20),d=n(219),t=n(25),u=n(0),v=n.n(u),r=n(122),c=n(1265),s=n(16),m=n(230),b=n(243);function f(){var i=Object(t.a)(["\n  mutation InitCall($id: ID!) {\n    claimInitialCall(where: { id: $id }) {\n      success\n      messages\n    }\n  }\n"]);return f=function(){return i},i}Object(s.a)(f());l.default=function(i){var l,n,o,t,u,s,f,p,C,h,k,I,g,j,J,O,S,M,w,y,D,x=i.claim,E=Object(b.b)(),q=null===E||void 0===E?void 0:null===(l=E.me)||void 0===l?void 0:l.userType,R=v.a.useMemo((function(){return"Builder"===q}),[q]),$=v.a.useMemo((function(){return"Restorer"===q}),[q]),B=null===x||void 0===x?void 0:null===(n=x.claimJob)||void 0===n?void 0:null===(o=n.building)||void 0===o?void 0:o.jobSuppliers,F=null===x||void 0===x?void 0:null===(t=x.claimJob)||void 0===t?void 0:null===(u=t.restoration)||void 0===u?void 0:u.jobSuppliers,N=R&&!(B&&(null===(s=B[0])||void 0===s?void 0:s.quote))||$&&!(F&&(null===(f=F[0])||void 0===f?void 0:f.quote)),P=R&&!(null===x||void 0===x?void 0:null===(p=x.claimJob)||void 0===p?void 0:null===(C=p.building)||void 0===C?void 0:null===(h=C.progress)||void 0===h?void 0:h.initialCallMade)&&[11,34].includes(null!==(k=null===x||void 0===x?void 0:null===(I=x.claimJob)||void 0===I?void 0:null===(g=I.building)||void 0===g?void 0:null===(j=g.claimStatus)||void 0===j?void 0:j.statusId)&&void 0!==k?k:-1)||$&&!(null===x||void 0===x?void 0:null===(J=x.claimJob)||void 0===J?void 0:null===(O=J.restoration)||void 0===O?void 0:null===(S=O.progress)||void 0===S?void 0:S.initialCallMade)&&[11,34].includes(null!==(M=null===x||void 0===x?void 0:null===(w=x.claimJob)||void 0===w?void 0:null===(y=w.restoration)||void 0===y?void 0:null===(D=y.claimStatus)||void 0===D?void 0:D.statusId)&&void 0!==M?M:-1),T=Object(r.useSnackbar)(),z=T.enqueueSnackbar,A=T.closeSnackbar,G=Object(m.D)(),H=Object(d.a)(G,1)[0],K=function(i){return v.a.createElement(v.a.Fragment,null,v.a.createElement(c.a,{color:"secondary",onClick:Object(e.a)(a.a.mark((function l(){var n,o,e,d,t,u;return a.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(!(null===E||void 0===E?void 0:null===(n=E.claim)||void 0===n?void 0:n.id)){l.next=9;break}return l.next=3,H({variables:{id:E.claim.id}});case 3:u=l.sent,A(i),null===u||void 0===u||null===(o=u.data)||void 0===o||null===(e=o.claimInitialCall)||void 0===e||e.messages.forEach((function(i){return z(i)})),(null===u||void 0===u?void 0:null===(d=u.data)||void 0===d?void 0:null===(t=d.claimInitialCall)||void 0===t?void 0:t.success)&&E.claimDetailsRefetch(),l.next=10;break;case 9:console.log("claim meta error");case 10:case"end":return l.stop()}}),l)})))},"Call Made"),v.a.createElement(c.a,{color:"primary",onClick:function(){return A(i)}},"Not yet"))};return{isDisabledInitialCall:N,isDisplayInitialCall:P,handleInitialCallMade:function(){z("Please confirm that initial call has been made",{persist:!0,action:K})}}}}}]);
//# sourceMappingURL=63.0aa151de.chunk.js.map