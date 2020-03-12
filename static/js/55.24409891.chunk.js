(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[55,67],{1267:function(e,t,a){"use strict";a.r(t);var n=a(120),r=a(218),i=a(25),o=a(0),l=a.n(o),c=a(45),s=a.n(c),d=a(333),u=a(371),m=a(196),p=a(756),f=a(16);function v(){var e=Object(i.a)(["\n  fragment CommunicationHeaderFragment on FilterInput {\n    id\n    type\n    label\n    name\n    options {\n      group\n      label\n      value: id\n    }\n  }\n"]);return v=function(){return e},e}Object(f.a)(v());var b=function(e){var t=e.loading,a=e.filters,n=e.setFilterValues;return l.a.createElement(m.a,{style:{padding:16}},l.a.createElement(u.a,{loading:t,firstRowFilters:6,filters:a,filterRender:function(e,t,a){return l.a.createElement(p.a,{key:a,item:!0,xs:2},l.a.createElement(e,Object.assign({},t,{fullWidth:!0,variant:"outlined"})))},onChange:function(e){return n(e)}}))},g=a(11),h=a.n(g),E=a(7),y=a(20),j=a(1248),x=a(56),O=a(339),C=a(266),k=a(1238),w=a(696),S=a(939),N=a(589),P=a(590),R=a(1237),F=a(951),I=a.n(F),W=a(952),M=a.n(W),T=a(953),B=a.n(T),D=a(124),A=a(219),H=a(221),L=a(223),$=a(244);function _(){var e=Object(i.a)(["\n  mutation CommunicationActionReply($input: ClaimCommunicationCreate!) {\n    createClaimCommunication(input: $input) {\n      messages\n      success\n    }\n  }\n"]);return _=function(){return e},e}function q(){var e=Object(i.a)(["\n  mutation CommunicationActionAcknowledge($where: ENDataPortfolioKey!) {\n    claimCommunicationAcknoledge(where: $where){\n      messages\n      success\n    }\n  }\n"]);return q=function(){return e},e}s()(q()),s()(_());var z=function(e){var t=Object(D.useSnackbar)().enqueueSnackbar,a=l.a.useState(!1),n=Object(r.a)(a,2),i=n[0],o=n[1],c=Object($.r)(),s=Object(r.a)(c,1)[0],d=function(){var a=Object(y.a)(h.a.mark((function a(n){var r,i,l,c,d,u,m;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.stopPropagation(),l=e.data,c=l.communicationId,d=l.portfolioType,a.next=4,s({variables:{where:{id:c,portfolioType:d}}});case 4:u=a.sent,m=u.data,t(null===m||void 0===m?void 0:null===(r=m.claimCommunicationAcknoledge)||void 0===r?void 0:r.messages[0]),(null===m||void 0===m?void 0:null===(i=m.claimCommunicationAcknoledge)||void 0===i?void 0:i.success)&&o(!0);case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),u=l.a.useState(!1),m=Object(r.a)(u,2),p=m[0],f=m[1];return l.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement(k.a,{onClick:function(e){e.stopPropagation(),f(!0)}},l.a.createElement(I.a,null)),l.a.createElement(K,Object.assign({},e,{open:p,handleClose:function(e){e&&e.stopPropagation(),f(!1)}})),l.a.createElement(k.a,{onClick:d},i?l.a.createElement(M.a,null):l.a.createElement(B.a,null)))},K=function(e){var t=e.open,a=e.handleClose,n=e.data,i=Object(D.useSnackbar)().enqueueSnackbar,o=Object($.s)(),c=Object(r.a)(o,1)[0];return l.a.createElement(A.c,{initialValues:{claimId:n.claimId,receiverCompanyId:n.senderCompanyId,receiverRole:n.senderRole,message:"",private:!0},validate:function(e){if(!e.message)return{message:"Please write something"}},onSubmit:function(){var e=Object(y.a)(h.a.mark((function e(t,n){var r,o,l,s,d;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=n.setSubmitting,e.next=3,c({variables:{input:t}});case 3:s=e.sent,d=s.data,l(!1),i(null===d||void 0===d?void 0:null===(r=d.createClaimCommunication)||void 0===r?void 0:r.messages[0]),(null===d||void 0===d?void 0:null===(o=d.createClaimCommunication)||void 0===o?void 0:o.success)&&a();case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var r=e.isSubmitting,i=e.handleSubmit;return l.a.createElement(A.b,null,l.a.createElement(w.a,{open:t,onClose:a,PaperProps:{style:{minWidth:"50%"}}},l.a.createElement(S.a,{onClick:function(e){return e.stopPropagation()}},"Reply"),l.a.createElement(N.a,{onClick:function(e){return e.stopPropagation()}},l.a.createElement(p.a,{container:!0,spacing:2},[{xs:4,label:"Ins Ref#",value:n.claimRef},{xs:4,label:"Sender",value:n.senderName},{xs:4,label:"Company",value:n.senderCompanyName},{xs:12,label:"Message",value:n.message}].map((function(e){var t=e.xs,a=Object(E.a)(e,["xs"]);return l.a.createElement(p.a,{item:!0,xs:t,key:a.label},"here")})),l.a.createElement(p.a,{item:!0,xs:12},l.a.createElement(L.default,{label:"Privacy",name:"private"})),l.a.createElement(p.a,{item:!0,xs:12},l.a.createElement(H.default,{label:"Message",name:"message",multiline:!0,rows:8,rowsMax:12,variant:"outlined",fullWidth:!0,onScroll:function(e){return e.stopPropagation()}})))),l.a.createElement(P.a,{onClick:function(e){return e.stopPropagation()}},l.a.createElement(R.a,{color:"primary",onClick:a,disabled:r},"Close"),l.a.createElement(R.a,{variant:"contained",color:"primary",disabled:r,onClick:function(){var e=Object(y.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.stopPropagation(),i();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},"Reply"))))}))};function V(){var e=Object(i.a)(["\n  fragment ClaimCommunicationBody on ClaimCommunication {\n    id\n    claimId\n    portfolioType\n\n    claimRef\n    sendDate\n    senderName\n    senderCompanyName\n    message\n\n    senderCompanyId\n    senderRole\n    communicationId\n  }\n"]);return V=function(){return e},e}s()(V());var U=function(e){var t,a,n,i=e.data,o=e.loading,c=e.onLoadMore,s=Object(x.f)().push,d=l.a.useMemo((function(){return[{Header:"Type",accessor:"portfolioType",Cell:function(e){var t=e.cell,a=t.value,n=t.row,r=[a];return l.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement("span",{style:{marginRight:8,fontWeight:600}},n.index+1),r.map((function(e){return l.a.createElement(C.a,{key:e,portfolio:e})})))}},{Header:"Ins Ref #",accessor:"claimRef"},{Header:"Date",accessor:"sendDate"},{Header:"Sender",accessor:"senderName"},{Header:"Company",accessor:"senderCompanyName"},{Header:"Message",accessor:"message"},{Header:"Actions",id:"actions",accessor:"id",Cell:function(e){var t=e.cell.row.original;return l.a.createElement(z,{data:t})}}]}),[]),u=null===i||void 0===i?void 0:null===(t=i.claimCommunications)||void 0===t?void 0:null===(a=t.edges)||void 0===a?void 0:a.map((function(e){return null===e||void 0===e?void 0:e.node})),m=l.a.useState(!1),p=Object(r.a)(m,2),f=p[0],v=p[1],b=l.a.useState(0),g=Object(r.a)(b,2),k=g[0],w=g[1],S=function(){var e=Object(y.a)(h.a.mark((function e(t){var a,n,r,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target,n=a.scrollTop,r=a.offsetHeight,i=a.scrollHeight,Object(E.a)(t,["target"]),0===k&&w(r),k!==r&&0!==k){e.next=4;break}return e.abrupt("return",null);case 4:if(w(r),150,!(i-(n+r-5)<150)||f){e.next=12;break}return v(!0),e.next=11,c();case 11:v(!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(j.a,{maxWidth:"xl",style:{position:"relative",height:"calc(100% - 88px - 16px)"}},l.a.createElement(O.a,{loading:o,loadingMore:f,columns:d,data:u,totalCount:null===i||void 0===i?void 0:null===(n=i.claimCommunications)||void 0===n?void 0:n.totalCount,onRowClick:function(e){var t=e.original.id;s("/app/claims/".concat(t,"/communications"))},onScroll:S}))},Y=a(340);function G(){var e=Object(i.a)(['\n  query CommunicationsData($first: Int, $after: String, $where: CommunicationFilter) {\n    claimCommunications: claimCommuications(\n      first: $first\n      after: $after\n      where: $where\n    ) @connection(key: "claimCommunications", filter: ["where"]) {\n      totalCount\n      edges {\n        node {\n          ...ClaimCommunicationBody\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n']);return G=function(){return e},e}function J(){var e=Object(i.a)(["\n  query CommunicationListFilters {\n    currentUser {\n      communicationFilters {\n        ...CommunicationHeaderFragment\n      }\n    }\n  }\n"]);return J=function(){return e},e}s()(J()),s()(G());t.default=function(){var e,t=Object($.t)(),a=t.data,i=t.loading,o=l.a.useState(),c=Object(r.a)(o,2),s=c[0],u=c[1],m=null===a||void 0===a?void 0:null===(e=a.currentUser)||void 0===e?void 0:e.communicationFilters,p=JSON.stringify(m),f=l.a.useMemo((function(){return null===m||void 0===m?void 0:m.map((function(e){var t,a=null===e||void 0===e?void 0:null===(t=e.type)||void 0===t?void 0:t.split("_"),i=Object(r.a)(a,2),o=i[0],l=i[1];return Object(n.a)({},e,{type:o,multiple:!!l})}))}),[p]),v=s&&Object.fromEntries(Object.entries(s).filter((function(e){var t=Object(r.a)(e,2);t[0];return t[1]}))),g=Object(n.a)({},v,{acknowledged:!1,boxes:[$.a.Inbox]}),h=Object($.v)({variables:{where:g,first:20,after:null},skip:i}),E=h.data,y=h.loading,j=h.fetchMore;return l.a.createElement(d.a,{header:l.a.createElement(b,{filters:f,setFilterValues:u,loading:i}),body:l.a.createElement(U,{data:E,loading:y,onLoadMore:function(){var e;return Object(Y.a)({fetchMore:j,where:g,first:20,pageInfo:null===E||void 0===E?void 0:null===(e=E.claimCommunications)||void 0===e?void 0:e.pageInfo,root:"claimCommunications"})}})})}},221:function(e,t,a){"use strict";a.r(t);var n=a(120),r=a(7),i=a(0),o=a.n(i),l=a(219),c=a(285),s=a(1235),d=a(291),u=function(){return o.a.createElement(d.a,{position:"end"},o.a.createElement(s.a,{style:{marginRight:16,width:30,height:30}}))};t.default=function(e){var t=e.startAdornment,a=e.endAdornment,i=e.InputProps,s=e.required,m=e.validate,p=e.disabled,f=e.loading,v=void 0!==f&&f,b=Object(r.a)(e,["startAdornment","endAdornment","InputProps","required","validate","disabled","loading"]),g=v||p;return o.a.createElement(l.a,Object.assign({component:c.b},b,{disabled:g,required:!g&&s,InputProps:Object(n.a)({},i,{startAdornment:t?o.a.createElement(d.a,{position:"start"},t):null,endAdornment:v?o.a.createElement(u,null):a?o.a.createElement(d.a,{position:"end"},a):null}),validate:function(e){return g||!s||e||0==e?m?m(e):void 0:"Required!"}}))}},223:function(e,t,a){"use strict";a.r(t);var n=a(218),r=a(7),i=a(0),o=a.n(i),l=a(390),c=a(467),s=a(468),d=a(588),u=a(930),m=a(391),p=a(131),f=a(219);t.default=function(e){var t=e.label,a=e.onLabel,i=void 0===a?"Yes":a,p=e.offLabel,b=void 0===p?"No":p,g=e.disabled,h=void 0!==g&&g,E=e.readOnly,y=void 0!==E&&E,j=(e.fullWidth,Object(r.a)(e,["label","onLabel","offLabel","disabled","readOnly","fullWidth"])),x=Object(f.f)().isSubmitting,O=v(),C=Object(f.e)(j.name),k=Object(n.a)(C,3),w=k[0],S=k[1],N=k[2],P=S.error,R=S.touched,F=Boolean(R&&P);return o.a.createElement(l.a,{component:"fieldset",className:O.root,error:F},o.a.createElement(c.a,{component:"legend",className:O.label},t),o.a.createElement(s.a,{row:!0,className:O.root},o.a.createElement(d.a,{labelPlacement:"end",className:O.root,label:w.value?i:b,control:o.a.createElement(u.a,Object.assign({color:"primary"},j,{disabled:x||h||y,checked:w.value,onClick:function(e){return N.setValue(!w.value)}}))})),F&&o.a.createElement(m.a,{className:O.helperText},String(P)))};var v=Object(p.a)({root:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},label:{transform:"scale(0.75)"},switch:{marginLeft:"calc(50% - 31px)"},helperText:{marginLeft:14,marginRight:14}})},266:function(e,t,a){"use strict";var n=a(120),r=a(7),i=a(0),o=a.n(i),l=a(317),c=a.n(l),s=a(376),d=a.n(s),u=a(377),m=a.n(u);t.a=function(e){var t=e.portfolio,a=e.style,i=Object(r.a)(e,["portfolio","style"]);return"Building"===t?o.a.createElement(c.a,Object.assign({style:Object(n.a)({},a,{color:"#0f5b78"})},i)):"Contents"===t?o.a.createElement(d.a,Object.assign({style:Object(n.a)({},a,{color:"green"})},i)):"Restoration"===t?o.a.createElement(m.a,Object.assign({style:Object(n.a)({},a,{color:"#d0a11e"})},i)):null}},291:function(e,t,a){"use strict";var n=a(2),r=a(7),i=a(0),o=a.n(i),l=(a(12),a(24)),c=a(1245),s=a(19),d=a(238),u=o.a.forwardRef((function(e,t){var a=e.children,i=e.classes,s=e.className,u=e.component,m=void 0===u?"div":u,p=e.disablePointerEvents,f=void 0!==p&&p,v=e.disableTypography,b=void 0!==v&&v,g=e.position,h=e.variant,E=Object(r.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),y=Object(d.b)()||{},j=h;return h&&y.variant,y&&!j&&(j=y.variant),o.a.createElement(d.a.Provider,{value:null},o.a.createElement(m,Object(n.a)({className:Object(l.a)(i.root,s,f&&i.disablePointerEvents,y.hiddenLabel&&i.hiddenLabel,"filled"===j&&i.filled,{start:i.positionStart,end:i.positionEnd}[g],"dense"===y.margin&&i.marginDense),ref:t},E),"string"!==typeof a||b?a:o.a.createElement(c.a,{color:"textSecondary"},a)))}));t.a=Object(s.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(u)},333:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1235);t.a=function(e){var t=e.header,a=e.body;return e.loading?r.a.createElement("div",{style:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(i.a,null)):r.a.createElement("div",{className:"report-layout",style:{height:"calc(100% - 48px)"}},t,a)}},336:function(e,t,a){var n={"./CheckboxField":[234,59],"./CheckboxGroupField":[224,57],"./ComboBoxField":[226,2,1,44,62],"./DateField":[227,2,0,11,71],"./DateTimeField":[235,2,0,11,72],"./EditorField":[229,3,61],"./FileField":[233,2,4,73],"./InfoField":[228,2,4,63],"./SearchField":[239,2,64],"./SelectField":[225,2,4,65],"./SwitchField":[223,60],"./TextAreaField":[231,2,4,66],"./TextField":[221,2,4,67],"./TimeField":[236,2,0,11,74]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=336,e.exports=r},339:function(e,t,a){"use strict";var n=a(7),r=a(0),i=a.n(r),o=a(1235),l=a(1245),c=a(196),s=a(1250),d=a(1251),u=a(1252),m=a(1253),p=a(1254),f=a(1255),v=a(131),b=a(432),g=function(e){var t,a=e.columns,n=e.data,r=e.totalCount,o=e.onRowClick,v=e.onScroll,g=e.renderRowSubComponent,E=h({}),y=i.a.useMemo((function(){return null===a||void 0===a?void 0:a.filter((function(e){return!1===e.show})).map((function(e){var t=e.accessor,a=e.id;return a||t}))}),[a]),j=Object(b.b)({columns:a,data:n,initialState:{hiddenColumns:y}},b.a),x=j.getTableProps,O=j.getTableBodyProps,C=j.headerGroups,k=j.rows,w=j.prepareRow,S=j.columns;return i.a.createElement(i.a.Fragment,null,r&&0!==r?i.a.createElement(l.a,{variant:"subtitle1"},"Found ",r):null,i.a.createElement(c.a,{className:E.paper},i.a.createElement(s.a,{className:E.tableContainer,onScroll:v},i.a.createElement(d.a,Object.assign({stickyHeader:!0},x()),i.a.createElement(u.a,null,C.map((function(e){return i.a.createElement(m.a,e.getHeaderGroupProps(),e.headers.map((function(e){return i.a.createElement(p.a,Object.assign({},e.getHeaderProps(),{className:E.tableHeaderCell}),e.render("Header"))})))}))),i.a.createElement(f.a,O(),k.length?k.map((function(e){w(e);var t=e.isExpanded;return i.a.createElement(i.a.Fragment,{key:e.id},i.a.createElement(m.a,Object.assign({onClick:o?function(){return o(e)}:function(){},className:E.tableRow},e.getRowProps()),e.cells.map((function(e){return i.a.createElement(p.a,Object.assign({},e.getCellProps(),{className:E.tableBodyCell}),void 0!==e.value?e.render("Cell"):"-")}))),t&&i.a.createElement(m.a,null,i.a.createElement(p.a,{colSpan:S.length},g({row:e}))))})):i.a.createElement(m.a,null,i.a.createElement(p.a,{colSpan:null!==(t=null===S||void 0===S?void 0:S.length)&&void 0!==t?t:4},"No item found")))))))};t.a=function(e){var t=e.loading,a=e.loadingMore,r=e.data,l=Object(n.a)(e,["loading","loadingMore","data"]),c=h({}),s=i.a.useMemo((function(){return i.a.createElement("div",{style:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement(o.a,null))}),[]);return t?i.a.createElement("div",{className:c.container},s):r?i.a.createElement("div",{className:c.container},a?i.a.createElement("div",{style:{position:"absolute",top:33,bottom:0,left:0,right:0,zIndex:10,background:"rgba(255, 255, 255, 0.5)"}},s):null,i.a.createElement(g,Object.assign({},l,{data:r}))):null};var h=Object(v.a)((function(e){return{container:{position:"relative",height:"calc(100% - 28px)",padding:2},paper:{height:"100%"},tableContainer:{maxHeight:"100%"},tableHeaderCell:{background:e.palette.primary.main,color:e.palette.primary.contrastText,padding:e.spacing(.5),textAlign:"center",minWidth:150},tableBodyCell:{textAlign:"center",padding:e.spacing(1)},tableRow:{"&:nth-child(even)":{background:e.palette.grey[100]},"&:hover":{background:e.palette.grey[300]},flexWrap:"nowrap"}}}))},340:function(e,t,a){"use strict";var n=a(13),r=a(122);t.a=function(e){var t=e.where,a=e.first,i=e.pageInfo,o=e.root;return(0,e.fetchMore)({variables:{where:t,first:a,after:i.endCursor},updateQuery:function(e,t){var a,i,l,c,s,d=e,u=t.fetchMoreResult,m=null===(a=d[o])||void 0===a?void 0:a.edges,p=u?null===(i=u[o])||void 0===i?void 0:i.edges:[],f=u?null===(l=u[o])||void 0===l?void 0:l.pageInfo:void 0,v=null===(c=d[o])||void 0===c?void 0:c.__typename,b=u?null===(s=u[o])||void 0===s?void 0:s.totalCount:void 0;return(null===p||void 0===p?void 0:p.length)&&m?Object(n.a)({},o,{__typename:v,totalCount:b,edges:[].concat(Object(r.a)(m),Object(r.a)(p)),pageInfo:f}):e}})}},371:function(e,t,a){"use strict";var n=a(218),r=a(7),i=a(0),o=a.n(i),l=a(219),c=function(e){var t=e.type,n=Object(r.a)(e,["type"]),i=o.a.useMemo((function(){return o.a.lazy((function(){return a(336)("./".concat(t,"Field"))}))}),[t]);return i?o.a.createElement(i,n):null},s=function(e){return o.a.createElement(o.a.Suspense,{fallback:null},o.a.createElement(c,e))},d=a(1235),u=a(756),m=a(133),p=a(1238),f=a(338),v=a.n(f),b=a(337),g=a.n(b),h=a(430),E=a.n(h),y=a(431),j=a.n(y),x=(t.a=function(e){var t=e.filters,a=e.loading,n=e.onChange,i=Object(r.a)(e,["filters","loading","onChange"]);if(a)return o.a.createElement("div",{style:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},o.a.createElement(d.a,null));if(!t)return null;var c=t?O(t):{};return o.a.createElement(l.c,{initialValues:c,validate:function(e){e&&n&&n(e)},onSubmit:function(e){}},(function(e){var a=e.values;return o.a.createElement(x,Object.assign({filters:t,values:a},i))}))},function(e){var t=e.filters,a=e.filterRender,r=e.firstRowFilters,i=void 0===r?6:r,c=e.SubView,d=o.a.useState(!1),f=Object(n.a)(d,2),b=f[0],h=f[1],y=o.a.useState(!1),x=Object(n.a)(y,2),O=x[0],C=x[1];if(!t)return null;var k=t.slice(0,i),w=t.slice(i),S=function(e,t){return a?a(s,e,t):o.a.createElement(s,Object.assign({key:e.name},e))};return o.a.createElement(l.b,{style:{width:"100%"}},o.a.createElement(u.a,{container:!0,justify:"center",alignItems:"flex-start"},o.a.createElement(u.a,{item:!0,xs:!0,container:!0},O?o.a.createElement(o.a.Fragment,null,c):o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{container:!0,spacing:2},k.map(S)),w.length?o.a.createElement(m.a,{in:b,timeout:"auto",unmountOnExit:!0,style:{width:"100%"}},o.a.createElement(u.a,{container:!0,spacing:2,style:{marginTop:8}},w.map((function(e,t){return S(e,t+i)})))):null)),o.a.createElement(u.a,{item:!0,container:!0,direction:"column",alignItems:"center",style:{width:88,padding:8}},o.a.createElement(u.a,{item:!0,xs:!0},c&&o.a.createElement(p.a,{style:{padding:6,marginLeft:"auto"},onClick:function(){return C((function(e){return!e}))}},O?o.a.createElement(E.a,null):o.a.createElement(j.a,null))),o.a.createElement(u.a,{item:!0,xs:!0},!O&&w.length?o.a.createElement(p.a,{onClick:function(){return h((function(e){return!e}))},style:{padding:6,marginLeft:"auto"}},b?o.a.createElement(g.a,null):o.a.createElement(v.a,null)):null))))}),O=function(e){return e.reduce((function(e,t){var a=(t.type,"");return e[t.name]=a,e}),{})}},589:function(e,t,a){"use strict";var n=a(2),r=a(7),i=a(0),o=a.n(i),l=(a(12),a(24)),c=a(19),s=o.a.forwardRef((function(e,t){var a=e.classes,i=e.className,c=e.dividers,s=void 0!==c&&c,d=Object(r.a)(e,["classes","className","dividers"]);return o.a.createElement("div",Object(n.a)({className:Object(l.a)(a.root,i,s&&a.dividers),ref:t},d))}));t.a=Object(c.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(s)},590:function(e,t,a){"use strict";var n=a(2),r=a(7),i=a(0),o=a.n(i),l=(a(12),a(24)),c=a(19),s=o.a.forwardRef((function(e,t){var a=e.disableSpacing,i=void 0!==a&&a,c=e.classes,s=e.className,d=Object(r.a)(e,["disableSpacing","classes","className"]);return o.a.createElement("div",Object(n.a)({className:Object(l.a)(c.root,s,!i&&c.spacing),ref:t},d))}));t.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(s)},696:function(e,t,a){"use strict";var n=a(2),r=a(7),i=a(13),o=a(0),l=a.n(o),c=(a(12),a(24)),s=a(19),d=a(61),u=a(1269),m=a(147),p=a(29),f=a(54),v=a(33),b=a(52),g={entering:{opacity:1},entered:{opacity:1}},h={enter:p.b.enteringScreen,exit:p.b.leavingScreen},E=l.a.forwardRef((function(e,t){var a=e.children,i=e.in,o=e.onEnter,c=e.onExit,s=e.style,d=e.timeout,u=void 0===d?h:d,p=Object(r.a)(e,["children","in","onEnter","onExit","style","timeout"]),E=Object(f.a)(),y=Object(b.a)(a.ref,t);return l.a.createElement(m.a,Object(n.a)({appear:!0,in:i,onEnter:function(e,t){Object(v.b)(e);var a=Object(v.a)({style:s,timeout:u},{mode:"enter"});e.style.webkitTransition=E.transitions.create("opacity",a),e.style.transition=E.transitions.create("opacity",a),o&&o(e,t)},onExit:function(e){var t=Object(v.a)({style:s,timeout:u},{mode:"exit"});e.style.webkitTransition=E.transitions.create("opacity",t),e.style.transition=E.transitions.create("opacity",t),c&&c(e)},timeout:u},p),(function(e,t){return l.a.cloneElement(a,Object(n.a)({style:Object(n.a)({opacity:0,visibility:"exited"!==e||i?void 0:"hidden"},g[e],{},s,{},a.props.style),ref:y},t))}))})),y=l.a.forwardRef((function(e,t){var a=e.children,i=e.classes,o=e.className,s=e.invisible,d=void 0!==s&&s,u=e.open,m=e.transitionDuration,p=Object(r.a)(e,["children","classes","className","invisible","open","transitionDuration"]);return l.a.createElement(E,Object(n.a)({in:u,timeout:m},p),l.a.createElement("div",{className:Object(c.a)(i.root,o,d&&i.invisible),"aria-hidden":!0,ref:t},a))})),j=Object(s.a)({root:{zIndex:-1,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},{name:"MuiBackdrop"})(y),x=a(196),O={enter:p.b.enteringScreen,exit:p.b.leavingScreen},C=l.a.forwardRef((function(e,t){var a=e.BackdropProps,i=e.children,o=e.classes,s=e.className,m=e.disableBackdropClick,p=void 0!==m&&m,f=e.disableEscapeKeyDown,v=void 0!==f&&f,b=e.fullScreen,g=void 0!==b&&b,h=e.fullWidth,y=void 0!==h&&h,C=e.maxWidth,k=void 0===C?"sm":C,w=e.onBackdropClick,S=e.onClose,N=e.onEnter,P=e.onEntered,R=e.onEntering,F=e.onEscapeKeyDown,I=e.onExit,W=e.onExited,M=e.onExiting,T=e.open,B=e.PaperComponent,D=void 0===B?x.a:B,A=e.PaperProps,H=void 0===A?{}:A,L=e.scroll,$=void 0===L?"paper":L,_=e.TransitionComponent,q=void 0===_?E:_,z=e.transitionDuration,K=void 0===z?O:z,V=e.TransitionProps,U=e["aria-describedby"],Y=e["aria-labelledby"],G=Object(r.a)(e,["BackdropProps","children","classes","className","disableBackdropClick","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","onEnter","onEntered","onEntering","onEscapeKeyDown","onExit","onExited","onExiting","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps","aria-describedby","aria-labelledby"]),J=l.a.useRef();return l.a.createElement(u.a,Object(n.a)({className:Object(c.a)(o.root,s),BackdropComponent:j,BackdropProps:Object(n.a)({transitionDuration:K},a),closeAfterTransition:!0,disableBackdropClick:p,disableEscapeKeyDown:v,onEscapeKeyDown:F,onClose:S,open:T,ref:t},G),l.a.createElement(q,Object(n.a)({appear:!0,in:T,timeout:K,onEnter:N,onEntering:R,onEntered:P,onExit:I,onExiting:M,onExited:W,role:"none presentation"},V),l.a.createElement("div",{className:Object(c.a)(o.container,o["scroll".concat(Object(d.a)($))]),onClick:function(e){e.target===e.currentTarget&&e.target===J.current&&(J.current=null,w&&w(e),!p&&S&&S(e,"backdropClick"))},onMouseDown:function(e){J.current=e.target}},l.a.createElement(D,Object(n.a)({elevation:24,role:"dialog","aria-describedby":U,"aria-labelledby":Y},H,{className:Object(c.a)(o.paper,o["paperScroll".concat(Object(d.a)($))],o["paperWidth".concat(Object(d.a)(String(k)))],H.className,g&&o.paperFullScreen,y&&o.paperFullWidth)}),i))))}));t.a=Object(s.a)((function(e){return{root:{"@media print":{position:"absolute !important"}},scrollPaper:{display:"flex",justifyContent:"center",alignItems:"center"},scrollBody:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}},container:{height:"100%","@media print":{height:"auto"},outline:0},paper:{margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},paperScrollPaper:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},paperScrollBody:{display:"inline-block",verticalAlign:"middle",textAlign:"left"},paperWidthFalse:{maxWidth:"calc(100% - 64px)"},paperWidthXs:{maxWidth:Math.max(e.breakpoints.values.xs,444),"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})},paperWidthSm:{maxWidth:e.breakpoints.values.sm,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.sm+64),{maxWidth:"calc(100% - 64px)"})},paperWidthMd:{maxWidth:e.breakpoints.values.md,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.md+64),{maxWidth:"calc(100% - 64px)"})},paperWidthLg:{maxWidth:e.breakpoints.values.lg,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.lg+64),{maxWidth:"calc(100% - 64px)"})},paperWidthXl:{maxWidth:e.breakpoints.values.xl,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.xl+64),{maxWidth:"calc(100% - 64px)"})},paperFullWidth:{width:"calc(100% - 64px)"},paperFullScreen:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,"&$paperScrollBody":{margin:0,maxWidth:"100%"}}}}),{name:"MuiDialog"})(C)},939:function(e,t,a){"use strict";var n=a(2),r=a(7),i=a(0),o=a.n(i),l=(a(12),a(24)),c=a(19),s=a(1245),d=o.a.forwardRef((function(e,t){var a=e.children,i=e.classes,c=e.className,d=e.disableTypography,u=void 0!==d&&d,m=Object(r.a)(e,["children","classes","className","disableTypography"]);return o.a.createElement("div",Object(n.a)({className:Object(l.a)(i.root,c),ref:t},m),u?a:o.a.createElement(s.a,{component:"h2",variant:"h6"},a))}));t.a=Object(c.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(d)},951:function(e,t,a){"use strict";var n=a(217);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=(0,n(a(220)).default)(r.default.createElement("path",{d:"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"}),"Reply");t.default=i},952:function(e,t,a){"use strict";var n=a(217);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=(0,n(a(220)).default)(r.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle");t.default=i},953:function(e,t,a){"use strict";var n=a(217);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=(0,n(a(220)).default)(r.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked");t.default=i}}]);
//# sourceMappingURL=55.24409891.chunk.js.map