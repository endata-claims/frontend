(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[11,20,57,58,59,62,63,88],{222:function(e,n,t){"use strict";t.r(n);var a=t(120),i=t(7),l=t(0),o=t.n(l),r=t(220),u=t(254),c=t(281);n.default=function(e){var n=e.variant,t=void 0===n?"standard":n,l=e.startAdornment,d=e.endAdornment,s=Object(i.a)(e,["variant","startAdornment","endAdornment"]);return o.a.createElement(r.a,Object.assign({component:u.a},s,{variant:"dialog",clearable:!0,inputVariant:t,format:"dd/MM/yyyy",placeholder:"DD/MM/YYYY",InputProps:Object(a.a)({},s.InputProps,{startAdornment:l?o.a.createElement(c.a,{position:"start"},l):null,endAdornment:d?o.a.createElement(c.a,{position:"end"},d):null})}))}},282:function(e,n,t){"use strict";var a=t(7),i=t(0),l=t.n(i),o=t(763),r=t(1264),u=t(196),c=t(1274),d=t(1275),s=t(1276),m=t(1277),v=t(1278),p=t(1279),f=t(131),b=t(349),g=function(e){var n,t=e.columns,a=e.data,i=e.totalCount,o=e.onRowClick,f=e.onScroll,g=e.renderRowSubComponent,E=h({}),y=l.a.useMemo((function(){return null===t||void 0===t?void 0:t.filter((function(e){return!1===e.show})).map((function(e){var n=e.accessor,t=e.id;return t||n}))}),[t]),C=Object(b.b)({columns:t,data:a,initialState:{hiddenColumns:y}},b.a),O=C.getTableProps,j=C.getTableBodyProps,w=C.headerGroups,I=C.rows,A=C.prepareRow,k=C.columns;return l.a.createElement(l.a.Fragment,null,i&&0!==i?l.a.createElement(r.a,{variant:"subtitle1"},"Found ",i):null,l.a.createElement(u.a,{className:E.paper},l.a.createElement(c.a,{className:E.tableContainer,onScroll:f},l.a.createElement(d.a,Object.assign({stickyHeader:!0},O()),l.a.createElement(s.a,null,w.map((function(e){return l.a.createElement(m.a,e.getHeaderGroupProps(),e.headers.map((function(e){return l.a.createElement(v.a,Object.assign({},e.getHeaderProps(),{className:E.tableHeaderCell}),e.render("Header"))})))}))),l.a.createElement(p.a,j(),I.length?I.map((function(e){A(e);var n=e.isExpanded;return l.a.createElement(l.a.Fragment,{key:e.id},l.a.createElement(m.a,Object.assign({onClick:o?function(){return o(e)}:function(){},className:E.tableRow},e.getRowProps()),e.cells.map((function(e){return l.a.createElement(v.a,Object.assign({},e.getCellProps(),{className:E.tableBodyCell}),void 0!==e.value?e.render("Cell"):"-")}))),n&&l.a.createElement(m.a,null,l.a.createElement(v.a,{colSpan:k.length},g({row:e}))))})):l.a.createElement(m.a,null,l.a.createElement(v.a,{colSpan:null!==(n=null===k||void 0===k?void 0:k.length)&&void 0!==n?n:4},"No item found")))))))};n.a=function(e){var n=e.loading,t=e.loadingMore,i=e.data,r=Object(a.a)(e,["loading","loadingMore","data"]),u=h({}),c=l.a.useMemo((function(){return l.a.createElement("div",{style:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement(o.a,null))}),[]);return n?l.a.createElement("div",{className:u.container},c):i?l.a.createElement("div",{className:u.container},t?l.a.createElement("div",{style:{position:"absolute",top:33,bottom:0,left:0,right:0,zIndex:10,background:"rgba(255, 255, 255, 0.5)"}},c):null,l.a.createElement(g,Object.assign({},r,{data:i}))):null};var h=Object(f.a)((function(e){return{container:{position:"relative",height:"calc(100% - 28px)",padding:2},paper:{height:"100%"},tableContainer:{maxHeight:"100%"},tableHeaderCell:{background:e.palette.primary.main,color:e.palette.primary.contrastText,padding:e.spacing(.5),textAlign:"center",minWidth:150,borderLeft:"1px solid #fff",borderRight:"1px solid #fff"},tableBodyCell:{textAlign:"center",padding:e.spacing(1)},tableRow:{"&:nth-child(even)":{background:e.palette.grey[100]},"&:hover":{background:e.palette.grey[300]},flexWrap:"nowrap"}}}))},366:function(e,n,t){"use strict";var a=t(7),i=t(0),l=t.n(i),o=t(763),r=t(196),u=t(1265),c=t(337);n.a=function(e){var n=e.loading,t=e.actions,i=e.body,d=Object(c.b)().nextStep;return n?l.a.createElement("div",{style:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement(o.a,null)):l.a.createElement("div",{className:"tab-layout",style:{height:"100%",marginTop:8}},l.a.createElement(r.a,{style:{padding:8,display:"flex",marginBottom:4}},l.a.createElement(u.a,{variant:"outlined",color:"primary",size:"large",onClick:d.open},"Next Step"),l.a.createElement("div",{style:{flexGrow:1}}),t.map((function(e,n){var t=e.label,i=e.unMountOn,o=e.children,r=Object(a.a)(e,["label","unMountOn","children"]);return i?null:l.a.createElement(u.a,Object.assign({key:n,style:{marginRight:8},size:"large",color:"primary",variant:"outlined"},r),t,o)}))),i)}},415:function(e,n,t){"use strict";t.r(n);var a=t(25),i=t(0),l=t.n(i),o=t(282),r=t(16),u=t(252);function c(){var e=Object(a.a)(["\n  fragment JobNoteListFragment on ClaimNote {\n    portfolioType\n    logDate\n    private\n    _privacy @client\n    message\n    user {\n      userName\n      company { companyName }\n    }\n  }\n"]);return c=function(){return e},e}Object(r.a)(c());n.default=function(e){var n,t,a=e.data,i=e.loading,r=l.a.useMemo((function(){return[{Header:"Date",accessor:"logDate",Cell:function(e){var n=e.cell.row.original;return l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(u.a,{portfolio:n.portfolioType}),n.logDate)}},{Header:"Company",accessor:"user.company.companyName"},{Header:"User",accessor:"user.userName"},{Header:"Privacy",accessor:"_privacy"},{Header:"Note",accessor:"message"}]}),[]),c=null===a||void 0===a?void 0:null===(n=a.claimNotes)||void 0===n?void 0:null===(t=n.edges)||void 0===t?void 0:t.map((function(e){return null===e||void 0===e?void 0:e.node}));return l.a.createElement(o.a,{loading:i,columns:r,data:c})}},416:function(e,n,t){"use strict";t.r(n);var a=t(11),i=t.n(a),l=t(20),o=t(219),r=t(25),u=t(0),c=t.n(u),d=t(122),s=t(1265),m=t(16),v=t(230),p=t(243);function f(){var e=Object(r.a)(["\n  mutation InitCall($id: ID!) {\n    claimInitialCall(where: { id: $id }) {\n      success\n      messages\n    }\n  }\n"]);return f=function(){return e},e}Object(m.a)(f());n.default=function(e){var n,t,a,r,u,m,f,b,g,h,E,y,C,O,j,w,I,A,k,M,x,D=e.claim,S=Object(p.b)(),N=null===S||void 0===S?void 0:null===(n=S.me)||void 0===n?void 0:n.userType,J=c.a.useMemo((function(){return"Builder"===N}),[N]),R=c.a.useMemo((function(){return"Restorer"===N}),[N]),$=null===D||void 0===D?void 0:null===(t=D.claimJob)||void 0===t?void 0:null===(a=t.building)||void 0===a?void 0:a.jobSuppliers,P=null===D||void 0===D?void 0:null===(r=D.claimJob)||void 0===r?void 0:null===(u=r.restoration)||void 0===u?void 0:u.jobSuppliers,T=J&&!($&&(null===(m=$[0])||void 0===m?void 0:m.quote))||R&&!(P&&(null===(f=P[0])||void 0===f?void 0:f.quote)),W=J&&!(null===D||void 0===D?void 0:null===(b=D.claimJob)||void 0===b?void 0:null===(g=b.building)||void 0===g?void 0:null===(h=g.progress)||void 0===h?void 0:h.initialCallMade)&&[11,34].includes(null!==(E=null===D||void 0===D?void 0:null===(y=D.claimJob)||void 0===y?void 0:null===(C=y.building)||void 0===C?void 0:null===(O=C.claimStatus)||void 0===O?void 0:O.statusId)&&void 0!==E?E:-1)||R&&!(null===D||void 0===D?void 0:null===(j=D.claimJob)||void 0===j?void 0:null===(w=j.restoration)||void 0===w?void 0:null===(I=w.progress)||void 0===I?void 0:I.initialCallMade)&&[11,34].includes(null!==(A=null===D||void 0===D?void 0:null===(k=D.claimJob)||void 0===k?void 0:null===(M=k.restoration)||void 0===M?void 0:null===(x=M.claimStatus)||void 0===x?void 0:x.statusId)&&void 0!==A?A:-1),B=Object(d.useSnackbar)(),F=B.enqueueSnackbar,q=B.closeSnackbar,H=Object(v.D)(),_=Object(o.a)(H,1)[0],V=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{color:"secondary",onClick:Object(l.a)(i.a.mark((function n(){var t,a,l,o,r,u;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(null===S||void 0===S?void 0:null===(t=S.claim)||void 0===t?void 0:t.id)){n.next=9;break}return n.next=3,_({variables:{id:S.claim.id}});case 3:u=n.sent,q(e),null===u||void 0===u||null===(a=u.data)||void 0===a||null===(l=a.claimInitialCall)||void 0===l||l.messages.forEach((function(e){return F(e)})),(null===u||void 0===u?void 0:null===(o=u.data)||void 0===o?void 0:null===(r=o.claimInitialCall)||void 0===r?void 0:r.success)&&S.claimDetailsRefetch(),n.next=10;break;case 9:console.log("claim meta error");case 10:case"end":return n.stop()}}),n)})))},"Call Made"),c.a.createElement(s.a,{color:"primary",onClick:function(){return q(e)}},"Not yet"))};return{isDisabledInitialCall:T,isDisplayInitialCall:W,handleInitialCallMade:function(){F("Please confirm that initial call has been made",{persist:!0,action:V})}}}},417:function(e,n,t){"use strict";t.r(n);var a=t(11),i=t.n(a),l=t(20),o=t(219),r=t(25),u=t(0),c=t.n(u),d=t(243),s=t(716),m=t(966),v=t(609),p=t(765),f=t(610),b=t(1265),g=t(220),h=t(222),E=t(16),y=t(230),C=t(122);function O(){var e=Object(r.a)(["\n  mutation AppointmentMade($id: ID!, $input: AppointmentInput!) {\n    claimMakeAppointment(\n      where: { id: $id }\n      input: $input\n    ) {\n      success\n      messages\n    }\n  }\n"]);return O=function(){return e},e}Object(E.a)(O()),n.default=function(e){var n,t,a,r,u,E,O,j,w=e.claim,I=Object(d.b)(),A=null===I||void 0===I?void 0:null===(n=I.me)||void 0===n?void 0:n.userType,k=c.a.useMemo((function(){return"Builder"===A}),[A]),M=c.a.useMemo((function(){return"Restorer"===A}),[A]),x=k&&(null===w||void 0===w?void 0:null===(t=w.claimJob)||void 0===t?void 0:null===(a=t.building)||void 0===a?void 0:null===(r=a.progress)||void 0===r?void 0:r.initialCallMade)&&!w.claimJob.building.progress.appointmentBooked||M&&(null===w||void 0===w?void 0:null===(u=w.claimJob)||void 0===u?void 0:null===(E=u.restoration)||void 0===E?void 0:null===(O=E.progress)||void 0===O?void 0:O.initialCallMade)&&!(null===(j=w.claimJob.restoration)||void 0===j?void 0:j.progress.appointmentBooked),D=c.a.useState(!1),S=Object(o.a)(D,2),N=S[0],J=S[1],R=function(){return J(!1)},$=Object(y.m)(),P=Object(o.a)($,1)[0],T=Object(C.useSnackbar)().enqueueSnackbar;return{isDisplayApointmentMade:x,handleAppointmentMade:function(){return J(!0)},ApointmentMadeDialog:function(){return c.a.createElement(s.a,{open:N,onClose:R,PaperProps:{style:{minWidth:"40%",maxWidth:"65%"}}},c.a.createElement(g.c,{initialValues:{appointmentDate:new Date},onSubmit:function(){var e=Object(l.a)(i.a.mark((function e(n){var t,a,l,o,r,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===I||void 0===I?void 0:null===(t=I.claim)||void 0===t?void 0:t.id)){e.next=8;break}return e.next=3,P({variables:{id:I.claim.id,input:n}});case 3:null===(u=e.sent)||void 0===u||null===(a=u.data)||void 0===a||null===(l=a.claimMakeAppointment)||void 0===l||l.messages.forEach((function(e){return T(e)})),(null===u||void 0===u?void 0:null===(o=u.data)||void 0===o?void 0:null===(r=o.claimMakeAppointment)||void 0===r?void 0:r.success)&&I.claimDetailsRefetch(),e.next=9;break;case 8:console.log("claim meta error");case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},(function(e){var n=e.isSubmitting;return c.a.createElement(g.b,null,c.a.createElement(m.a,null,"Appointment Made"),c.a.createElement(v.a,null,c.a.createElement(p.a,{container:!0},c.a.createElement(p.a,{item:!0,xs:12},c.a.createElement(h.default,{name:"appointmentDate",label:"Appointment Date",variant:"outlined",fullWidth:!0})))),c.a.createElement(f.a,null,c.a.createElement(b.a,{onClick:R,disabled:n},"Cancel"),c.a.createElement(b.a,{type:"submit",color:"primary",disabled:n},"Make appointment")))})))}}}},418:function(e,n,t){"use strict";t.r(n);var a=t(11),i=t.n(a),l=t(20),o=t(219),r=t(25),u=t(0),c=t.n(u),d=t(243),s=t(716),m=t(966),v=t(609),p=t(610),f=t(1265),b=t(220),g=t(222),h=t(16),E=t(230),y=t(122);function C(){var e=Object(r.a)(["\n  mutation ChangeAppointment($id: ID!, $input: AppointmentInput!) {\n    claimMakeAppointment(\n      where: { id: $id }\n      input: $input\n    ) {\n      success\n      messages\n    }\n  }\n"]);return C=function(){return e},e}Object(h.a)(C()),n.default=function(e){var n,t,a,r,u,h,C,O,j,w,I,A,k,M,x,D,S,N=e.claim,J=Object(d.b)(),R=null===J||void 0===J?void 0:null===(n=J.me)||void 0===n?void 0:n.userType,$=c.a.useMemo((function(){return"Builder"===R}),[R]),P=c.a.useMemo((function(){return"Restorer"===R}),[R]),T=(null===J||void 0===J?void 0:null===(t=J.user)||void 0===t?void 0:null===(a=t.company)||void 0===a?void 0:a.companyId)!==($?null===N||void 0===N?void 0:null===(r=N.claimJob)||void 0===r?void 0:null===(u=r.building)||void 0===u?void 0:null===(h=u.scopingSupplier)||void 0===h?void 0:h.companyId:P?null===N||void 0===N?void 0:null===(C=N.claimJob)||void 0===C?void 0:null===(O=C.restoration)||void 0===O?void 0:null===(j=O.scopingSupplier)||void 0===j?void 0:j.companyId:""),W=$&&!T&&[1,37].includes(null!==(w=null===N||void 0===N?void 0:null===(I=N.claimJob)||void 0===I?void 0:null===(A=I.building)||void 0===A?void 0:null===(k=A.claimStatus)||void 0===k?void 0:k.statusId)&&void 0!==w?w:-1)||P&&!T&&[1,37].includes(null!==(M=null===N||void 0===N?void 0:null===(x=N.claimJob)||void 0===x?void 0:null===(D=x.restoration)||void 0===D?void 0:null===(S=D.claimStatus)||void 0===S?void 0:S.statusId)&&void 0!==M?M:-1),B=c.a.useState(!1),F=Object(o.a)(B,2),q=F[0],H=F[1],_=function(){return H(!1)},V=Object(E.p)(),z=Object(o.a)(V,1)[0],G=Object(y.useSnackbar)().enqueueSnackbar;return{isDisplayChangeAppointment:W,handleChangeAppointment:function(){return H(!0)},ChangeApointmentDialog:function(){return c.a.createElement(s.a,{open:q,onClose:_,PaperProps:{style:{minWidth:"40%",maxWidth:"65%"}}},c.a.createElement(b.c,{initialValues:{appointmentDate:new Date},onSubmit:function(){var e=Object(l.a)(i.a.mark((function e(n){var t,a,l,o,r,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===J||void 0===J?void 0:null===(t=J.claim)||void 0===t?void 0:t.id)){e.next=8;break}return e.next=3,z({variables:{id:J.claim.id,input:n}});case 3:null===(u=e.sent)||void 0===u||null===(a=u.data)||void 0===a||null===(l=a.claimMakeAppointment)||void 0===l||l.messages.forEach((function(e){return G(e)})),(null===u||void 0===u?void 0:null===(o=u.data)||void 0===o?void 0:null===(r=o.claimMakeAppointment)||void 0===r?void 0:r.success)&&J.claimDetailsRefetch(),e.next=9;break;case 8:console.log("claim meta error");case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},(function(e){var n=e.isSubmitting;return c.a.createElement(b.b,null,c.a.createElement(m.a,null,"Change Appointment"),c.a.createElement(v.a,null,c.a.createElement(g.default,{name:"appointmentDate",label:"Appointment Date",variant:"outlined",fullWidth:!0})),c.a.createElement(p.a,null,c.a.createElement(f.a,{onClick:_,disabled:n},"Cancel"),c.a.createElement(f.a,{type:"submit",color:"primary",disabled:n},"Make appointment")))})))}}}},419:function(e,n,t){"use strict";t.r(n);var a=t(11),i=t.n(a),l=t(20),o=t(25),r=t(219),u=t(0),c=t.n(u),d=t(716),s=t(966),m=t(609),v=t(765),p=t(610),f=t(1265),b=t(1264),g=t(763),h=t(243),E=t(252),y=t(16),C=t(230),O=t(122),j=t(220),w=t(221),I=t(223);function A(){var e=Object(o.a)(['\n  mutation CancelAwaitingInfo($where: ENDataPortfolioKey!) {\n    claimCancelAwaitingInfo(where: $where) {\n      success\n      messages\n    }\n  }\n  mutation AddAwaitingInfo($input: AwaitingInfoClaimInputType!, $where: ENDataPortfolioKey!) {\n    claimAwaitingInfo(input: $input, where: $where) {\n      success\n      messages\n    }\n  }\n  query AwaitingInfoForm($portfolios: [PortfolioType]) {\n    claimFilterOptions(where: {\n      subject: "awaitingInfoReasons"\n      portfolios: $portfolios\n    }) {\n      label: name\n      value\n    }\n  }\n']);return A=function(){return e},e}n.default=function(e){var n,t,a,i,l,o,u,b=e.claim,g=Object(h.b)(),y=null===b||void 0===b?void 0:null===(n=b.claimJob)||void 0===n?void 0:n.actions.find((function(e){return"CLAIM_AWAITING_INFO"===(null===e||void 0===e?void 0:e.actionType)})),C=null!==(t=null===y||void 0===y?void 0:y.isDisplay)&&void 0!==t&&t,O=null!==(a=null===y||void 0===y?void 0:y.isDisabled)&&void 0!==a&&a,j=c.a.useState(!1),w=Object(r.a)(j,2),I=w[0],A=w[1],M=function(){return A(!1)},x="Administrator"===(null===g||void 0===g?void 0:null===(i=g.me)||void 0===i?void 0:i.userType)?null===g||void 0===g?void 0:null===(l=g.claim)||void 0===l?void 0:l._portfolios:null===g||void 0===g?void 0:null===(o=g.claim)||void 0===o?void 0:null===(u=o._portfolios)||void 0===u?void 0:u.filter((function(e){var n,t,a;return"Building"===e&&"Builder"===(null===g||void 0===g?void 0:null===(n=g.me)||void 0===n?void 0:n.userType)||("Restoration"===e&&"Restorer"===(null===g||void 0===g?void 0:null===(t=g.me)||void 0===t?void 0:t.userType)||("Contents"===e&&"ContentSupplier"===(null===g||void 0===g?void 0:null===(a=g.me)||void 0===a?void 0:a.userType)||void 0))}));return{isDisplayAwaitingInfo:C,isDisabledAwaitingInfo:O,handleAwaitingInfo:function(){return A(!0)},AwaitingInfoDialog:function(){return c.a.createElement(d.a,{open:I,onClose:M,PaperProps:{style:{minWidth:"40%",maxWidth:"65%"}}},c.a.createElement(s.a,null,"Awaiting Info"),c.a.createElement(m.a,null,c.a.createElement(v.a,{container:!0,spacing:2},null===x||void 0===x?void 0:x.map((function(e){var n,t=(null===b||void 0===b?void 0:b.claimJob)?null===b||void 0===b?void 0:b.claimJob[e.toLowerCase()].claimStatus.statusId:-1;return c.a.createElement(v.a,{item:!0,xs:!0,key:e},c.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginBottom:16}},c.a.createElement(E.a,{portfolio:e,style:{fontSize:"2rem"}})),c.a.createElement(k,{claimId:null===b||void 0===b?void 0:null===(n=b.claimJob)||void 0===n?void 0:n.id,portfolio:e,status:t,handleClose:M,handleRefresh:null===g||void 0===g?void 0:g.claimDetailsRefetch}))})))),c.a.createElement(p.a,null,c.a.createElement(f.a,{onClick:M},"Close")))}}},Object(y.a)(A());var k=function(e){var n=e.claimId,t=e.portfolio,a=e.status,o=e.handleClose,u=e.handleRefresh,d=Object(O.useSnackbar)().enqueueSnackbar,s=Object(C.o)(),m=Object(r.a)(s,1)[0];if(11===a)return c.a.createElement(b.a,{variant:"body1",style:{textAlign:"center"}},"Claim finalised");var v=function(){var e=Object(l.a)(i.a.mark((function e(){var a,l,r,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m({variables:{where:{id:n,portfolioType:t}}});case 2:s=e.sent,null===(a=s.data)||void 0===a||null===(l=a.claimCancelAwaitingInfo)||void 0===l||l.messages.forEach((function(e){return d(e)})),(null===(r=s.data)||void 0===r?void 0:null===(c=r.claimCancelAwaitingInfo)||void 0===c?void 0:c.success)&&(o(),u());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return 33===a||102===a&&"Contents"===t?c.a.createElement(f.a,{variant:"outlined",color:"primary",onClick:v},"Cancel Awaiting Info"):c.a.createElement(M,{claimId:n,portfolio:t,handleClose:o,handleRefresh:u})},M=function(e){var n=e.claimId,t=e.portfolio,a=e.handleClose,o=e.handleRefresh,u=Object(O.useSnackbar)().enqueueSnackbar,d=Object(C.n)({variables:{portfolios:[t]}}),s=d.data,m=d.loading,p=Object(C.d)(),b=Object(r.a)(p,1)[0];if(m||!s)return c.a.createElement(g.a,null);var h=s.claimFilterOptions;return c.a.createElement(j.c,{initialValues:{awaitingInfoReasonId:"",note:""},onSubmit:function(){var e=Object(l.a)(i.a.mark((function e(l){var r,c,d,s,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b({variables:{where:{id:n,portfolioType:t},input:l}});case 2:m=e.sent,null===(r=m.data)||void 0===r||null===(c=r.claimAwaitingInfo)||void 0===c||c.messages.forEach((function(e){return u(e)})),(null===(d=m.data)||void 0===d?void 0:null===(s=d.claimAwaitingInfo)||void 0===s?void 0:s.success)&&(a(),o());case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},(function(e){var n=e.isSubmitting;return c.a.createElement(j.b,null,c.a.createElement(v.a,{container:!0,spacing:2},c.a.createElement(v.a,{item:!0,xs:12},c.a.createElement(I.default,{label:"Reason",name:"awaitingInfoReasonId",required:!0,options:h,variant:"outlined",fullWidth:!0})),c.a.createElement(v.a,{item:!0,xs:12},c.a.createElement(w.default,{label:"Additional Notes",name:"note",variant:"outlined",fullWidth:!0})),c.a.createElement(v.a,{item:!0,xs:12},c.a.createElement(f.a,{variant:"contained",color:"primary",fullWidth:!0,type:"submit",disabled:n},"Wait for info"))))}))}},441:function(e,n,t){"use strict";t.r(n);var a=t(219),i=t(25),l=t(0),o=t.n(l),r=t(765),u=t(366),c=t(492),d=t(243),s=function(e){var n,t=e.setPortfolio,a=Object(d.b)(),i=null===a||void 0===a?void 0:null===(n=a.claim)||void 0===n?void 0:n._portfolios;return i?o.a.createElement(m,{portfolios:i,setPortfolio:t}):null},m=function(e){var n=e.portfolios,t=e.setPortfolio,i=o.a.useState(n[0]),l=Object(a.a)(i,2),r=l[0],u=l[1];return o.a.useEffect((function(){t(r)}),[r,t]),o.a.createElement(c.a,{portfolios:n,value:r,setValue:u})},v=t(415),p=t(416),f=t(417),b=t(418),g=t(230),h=t(16),E=t(337),y=t(419);function C(){var e=Object(i.a)(["\n  query JobNotes($where: ClaimItemFilter, $first: Int, $after: String) {\n    claimNotes(where: $where, first: $first, after: $after) {\n      edges {\n        node {\n          id\n          ...JobNoteListFragment\n        }\n      }\n    }\n  }\n  fragment JobNotesFragment on ClaimJob {\n    actions {\n      actionType\n      name\n      isDisplay\n      isDisabled\n    }\n    building {\n      progress { initialCallMade appointmentBooked }\n      claimStatus { statusId }\n      jobSuppliers { quote { id }}\n    }\n    restoration {\n      progress { initialCallMade appointmentBooked }\n      claimStatus { statusId }\n      jobSuppliers { quote { id }}\n    }\n  }\n"]);return C=function(){return e},e}Object(h.a)(C());n.default=function(e){var n=e.claimId,t=e.data,i=Object(E.b)().addJobNote,l=o.a.useState(),c=Object(a.a)(l,2),d=c[0],m=c[1],h=!n||!d,C=Object(g.G)({variables:{first:1e3,after:null,where:{claimId:n,portfolios:[d]}},skip:h}),O=C.data,j=C.loading,w=Object(p.default)({claim:t}),I=w.isDisplayInitialCall,A=w.isDisabledInitialCall,k=w.handleInitialCallMade,M=Object(f.default)({claim:t}),x=M.isDisplayApointmentMade,D=M.handleAppointmentMade,S=M.ApointmentMadeDialog,N=Object(b.default)({claim:t}),J=N.isDisplayChangeAppointment,R=N.handleChangeAppointment,$=N.ChangeApointmentDialog,P=Object(y.default)({claim:t}),T=P.isDisplayAwaitingInfo,W=P.isDisabledAwaitingInfo,B=P.handleAwaitingInfo,F=P.AwaitingInfoDialog;return o.a.createElement(o.a.Fragment,null,o.a.createElement(S,null),o.a.createElement($,null),o.a.createElement(F,null),o.a.createElement(u.a,{actions:[{label:"Initial Call Made",disabled:A,unMountOn:!I,onClick:k},{label:"Appointment Made",unMountOn:!x,onClick:D},{label:"Change Appointment",unMountOn:!J,onClick:R},{label:"Awaiting Info",disabled:W,unMountOn:!T,onClick:B},{label:"New Job Note",onClick:function(){return i&&i.toggle()}}],body:o.a.createElement(r.a,{container:!0,spacing:1,style:{marginTop:4},alignItems:"flex-start"},o.a.createElement(r.a,{item:!0},o.a.createElement(s,{setPortfolio:m})),o.a.createElement(r.a,{item:!0,xs:!0},o.a.createElement(v.default,{data:O,loading:j||h})))}))}},492:function(e,n,t){"use strict";var a=t(0),i=t.n(a),l=t(196),o=t(1265),r=t(252);n.a=function(e){var n=e.portfolios,t=e.value,a=e.setValue;return i.a.createElement(l.a,{style:{display:"flex",flexDirection:"column",padding:4}},n.map((function(e){return i.a.createElement(o.a,{key:e,style:{margin:0,marginBottom:4,minWidth:50,width:50},variant:t===e?"contained":"text",onClick:function(){return a(e)}},i.a.createElement(r.a,{portfolio:e,style:{margin:0,fontSize:"1.5rem"}}))})))}}}]);
//# sourceMappingURL=11.4c186154.chunk.js.map