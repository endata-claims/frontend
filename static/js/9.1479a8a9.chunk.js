(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[9,16,17,18,20,21,33,34,37,38,39,40,41,47,72],{222:function(e,n,t){"use strict";var l=t(120),a=t(7),o=t(0),i=t.n(o),r=t(196),d=t(746),s=t(131);n.a=function(e){var n=e.title,t=e.children,l=e.loading,o=Object(a.a)(e,["title","children","loading"]),s=u({});return i.a.createElement(i.a.Fragment,null,n&&i.a.createElement("div",{className:s.paperTitle},n),i.a.createElement(r.a,Object.assign({className:s.paperContent},o),l&&i.a.createElement("div",{style:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement(d.a,null)),!l&&t))};var u=Object(s.a)((function(e){return{paperTitle:Object(l.a)({},e.mixins.gutters(),{background:e.palette.primary.main,color:e.palette.primary.contrastText,borderRadius:"8px 8px 0 0",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),fontSize:"1rem",fontWeight:800}),paperContent:Object(l.a)({},e.mixins.gutters(),{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)})}}))},224:function(e,n,t){"use strict";t.r(n);var l=t(120),a=t(218),o=t(0),i=t.n(o),r=t(383),d=t(433),s=t(435),u=t(528),c=t(515),m=t(384),v=t(131),p=t(220);n.default=function(e){var n=e.name,t=e.label,o=e.options,v=e.disabled,b=void 0!==v&&v,g=e.readOnly,y=void 0!==g&&g,h=e.display,E=void 0===h?"grid":h,O=e.color,C=void 0===O?"primary":O,x=e.maxHeight,A=void 0===x?"100%":x,I=f(),j=Object(p.f)().isSubmitting,S=Object(p.e)(n),D=Object(a.a)(S,3),T=D[0],N=D[1],P=D[2].setValue,M=N.error,L=N.touched,w=Boolean(L&&M),_=T.value,R=JSON.stringify(_),k=JSON.stringify(o),V=i.a.useMemo((function(){return null===o||void 0===o?void 0:o.map((function(e){var n=e.label,t=e.value;return{label:n,id:t,value:_.includes(t)}}))}),[R,k]);return i.a.createElement("div",{style:{maxHeight:A,overflow:"auto"}},i.a.createElement(r.a,{component:"fieldset",className:I.root,error:w,disabled:j||b||y},i.a.createElement(d.a,{component:"legend",className:I.label},t),i.a.createElement(s.a,{row:!0,className:I.root,style:{display:E}},null===o||void 0===o?void 0:o.map((function(e){var n=e.label,t=e.value;return i.a.createElement(u.a,{key:t,label:n,control:i.a.createElement(c.a,Object.assign({},T,{value:t,checked:_.includes(t),onChange:function(){return function(e){var n=V.map((function(n){return n.id===e?Object(l.a)({},n,{value:!n.value}):n})).filter((function(e){return e.value})).map((function(e){return e.id}));P(n)}(t)},disabled:j||b||y,color:C}))})}))),w&&i.a.createElement(m.a,{className:I.helperText},String(M))))};var f=Object(v.a)({root:{width:"100%",alignItems:"center",justifyContent:"center"},label:{transform:"scale(0.75)"},switch:{marginLeft:"calc(50% - 31px)"},helperText:{marginLeft:14,marginRight:14}})},226:function(e,n,t){"use strict";t.r(n);var l=t(120),a=t(218),o=t(7),i=t(0),r=t.n(i),d=t(220),s=t(1265),u=t(746),c=t(1242),m=t(515),v=t(307),p=t.n(v),f=t(308),b=t.n(f);n.default=function(e){var n=e.options,t=void 0===n?[]:n,i=e.name,v=e.multiple,f=void 0!==v&&v,g=e.disabled,y=e.readOnly,h=e.fullWidth,E=e.loading,O=e.startAdornment,C=Object(o.a)(e,["options","name","multiple","disabled","readOnly","fullWidth","loading","startAdornment"]),x=Object(d.f)().isSubmitting,A=Object(d.e)(i),I=Object(a.a)(A,3),j=I[0],S=I[1],D=I[2],T=r.a.useState(""),N=Object(a.a)(T,2),P=N[0],M=N[1],L=j.value,w=JSON.stringify(t);r.a.useEffect((function(){if(t&&t.length){var e=f?t.filter((function(e){return L.includes(e.value)})):t.find((function(e){return e.value==L}));M(e)}}),[L,f,w]);var _=S.error,R=S.touched,k=Boolean(R&&_);return r.a.createElement(s.a,Object.assign({},C,{value:P,onChange:function(e,n){if(!n)return D.setValue("");var t=f?n.map((function(e){return e.value})):n.value;D.setValue(t)},disabled:E||g||y||x,multiple:f,disableCloseOnSelect:f,filterSelectedOptions:!f,options:t,getOptionLabel:function(e){return e.label||""},groupBy:function(e){return e.group},renderInput:function(e){var n=f?e.InputProps.startAdornment:O||null,t=E?r.a.createElement(u.a,{style:{width:30,height:30}}):e.InputProps.endAdornment;return r.a.createElement(c.a,Object.assign({error:k,helperText:k?_:null,fullWidth:h},C,e,{InputProps:Object(l.a)({},e.InputProps,{style:{flexWrap:"nowrap"},startAdornment:n,endAdornment:t})}))},renderTags:function(e){var n=e.map((function(e){return e.label})).join(", ");return r.a.createElement("p",{style:{margin:0,paddingLeft:6,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},n)},renderOption:function(e,n){var t=n.selected;return r.a.createElement(r.a.Fragment,{key:e.value},f&&r.a.createElement(m.a,{icon:r.a.createElement(p.a,{fontSize:"small"}),checkedIcon:r.a.createElement(b.a,{fontSize:"small"}),style:{marginRight:8},checked:t}),e.label)}}))}},227:function(e,n,t){"use strict";t.r(n);var l=t(120),a=t(7),o=t(0),i=t.n(o),r=t(220),d=t(260),s=t(281);n.default=function(e){var n=e.variant,t=e.startAdornment,o=e.endAdornment,u=Object(a.a)(e,["variant","startAdornment","endAdornment"]);return i.a.createElement(r.a,Object.assign({component:d.a},u,{variant:"inline",inputVariant:n,format:"dd/MM/yyyy",placeholder:"DD/MM/YYYY",InputProps:Object(l.a)({},u.InputProps,{startAdornment:t?i.a.createElement(s.a,{position:"start"},t):null,endAdornment:o?i.a.createElement(s.a,{position:"end"},o):null})}))}},228:function(e,n,t){"use strict";t.r(n);var l=t(120),a=t(7),o=t(0),i=t.n(o),r=t(221),d=t(131);n.default=function(e){var n=e.InputProps,t=e.rowsMax,o=void 0===t?3:t,d=e.className,u=(e.variant,Object(a.a)(e,["InputProps","rowsMax","className","variant"])),c=s();return i.a.createElement(r.default,Object.assign({},u,{className:"".concat(d," ").concat(c.root),multiline:!0,rowsMax:o,InputProps:Object(l.a)({},n,{readOnly:!0}),InputLabelProps:{shrink:!0}}))};var s=Object(d.a)({root:{"& .MuiInput-underline:before":{borderBottom:"none"}}})},229:function(e,n,t){"use strict";t.r(n);var l=t(218),a=t(7),o=t(0),i=t.n(o),r=t(220),d=t(311),s=t.n(d),u=t(383),c=t(384);n.default=function(e){var n=e.name,t=e.label,o=e.placeholder,d=e.disabled,m=Object(a.a)(e,["name","label","placeholder","disabled"]),v=Object(r.f)().isSubmitting,p=Object(r.e)(n),f=Object(l.a)(p,3),b=f[0],g=f[1],y=f[2],h=g.error,E=g.touched,O=Boolean(E&&h),C=b.value?s.a.createValueFromString(b.value,"html"):s.a.createEmptyValue(),x=i.a.useState(C),A=Object(l.a)(x,2),I=A[0],j=A[1];return i.a.createElement(u.a,{error:O,style:{width:"100%"},id:b.name},i.a.createElement(s.a,Object.assign({},m,{disabled:d||v,placeholder:o||t,toolbarConfig:{display:["INLINE_STYLE_BUTTONS","BLOCK_TYPE_BUTTONS","BLOCK_TYPE_DROPDOWN","HISTORY_BUTTONS"],INLINE_STYLE_BUTTONS:[{label:"Bold",style:"BOLD",className:"custom-css-class"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"}],BLOCK_TYPE_DROPDOWN:[{label:"Normal",style:"unstyled"},{label:"Heading Large",style:"header-one"},{label:"Heading Medium",style:"header-two"},{label:"Heading Small",style:"header-three"}],BLOCK_TYPE_BUTTONS:[{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"}]},value:I,onChange:function(e){j(e),y.setValue(e.toString("html")),y.setTouched(!0)}})),O&&i.a.createElement(c.a,{style:{marginLeft:14,marginRight:14}},h))}},240:function(e,n,t){"use strict";t.r(n);var l=t(7),a=t(0),o=t.n(a),i=t(748),r=t(221);n.default=function(e){var n=e.unMountOn,t=e.xs,a=void 0===t?3:t,d=e.component,s=void 0===d?r.default:d,u=Object(l.a)(e,["unMountOn","xs","component"]);return o.a.createElement(i.a,{item:!0,xs:a,key:u.name},!n&&o.a.createElement(s,Object.assign({},u,{variant:"outlined",fullWidth:!0})))}},294:function(e,n,t){"use strict";var l=t(217);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=l(t(0)),o=(0,l(t(219)).default)(a.default.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");n.default=o},295:function(e,n,t){"use strict";var l=t(217);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=l(t(0)),o=(0,l(t(219)).default)(a.default.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"LocationOn");n.default=o},296:function(e,n,t){"use strict";var l=t(217);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=l(t(0)),o=(0,l(t(219)).default)(a.default.createElement("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"Phone");n.default=o},309:function(e,n,t){"use strict";var l=t(7),a=t(0),o=t.n(a),i=t(310),r=t(359),d=t.n(r),s=t(221);n.a=function(e){var n=e.fixedDecimal,t=e.decimalScale,a=e.format,i=e.allowNegative,r=Object(l.a)(e,["fixedDecimal","decimalScale","format","allowNegative"]);return o.a.createElement(s.default,Object.assign({},r,{startAdornment:o.a.createElement(d.a,null),InputProps:{inputComponent:u,inputProps:{autoComplete:"disabled_auto_complete",fixedDecimal:n,decimalScale:t,format:a,allowNegative:i}}}))};var u=function(e){var n=e.fixedDecimal,t=void 0===n||n,a=e.decimalScale,r=void 0===a?2:a,d=e.allowNegative,s=void 0===d||d,u=e.inputRef,c=e.onChange,m=e.name,v=Object(l.a)(e,["fixedDecimal","decimalScale","allowNegative","inputRef","onChange","name"]);return o.a.createElement(i.a,Object.assign({},v,{allowNegative:s,decimalScale:r,fixedDecimalScale:t,name:m,getInputRef:u,onValueChange:function(e){c({target:{name:m,value:e.floatValue}})}}))}},356:function(e,n,t){"use strict";var l=t(217);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=l(t(0)),o=(0,l(t(219)).default)(a.default.createElement("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"}),"School");n.default=o},358:function(e,n,t){"use strict";var l=t(7),a=t(0),o=t.n(a),i=t(221),r=/^[A-Za-z0-9]+$/;n.a=function(e){var n=e.validate,t=Object(l.a)(e,["validate"]);return o.a.createElement(i.default,Object.assign({},t,{validate:function(e){return e&&!r.test(e)?"Invalid reference number":n?n(e):void 0}}))}},360:function(e,n,t){"use strict";var l=t(217);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=l(t(0)),o=(0,l(t(219)).default)(a.default.createElement("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link");n.default=o},361:function(e,n,t){"use strict";var l=t(217);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=l(t(0)),o=(0,l(t(219)).default)(a.default.createElement("path",{d:"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"}),"Face");n.default=o},398:function(e,n,t){"use strict";t.r(n);var l=t(0),a=t.n(l),o=t(222),i=t(748),r=t(240),d=t(229);n.default=function(){return a.a.createElement(o.a,{title:"Claim Description"},a.a.createElement(i.a,{container:!0,spacing:3},[{xs:12,component:d.default,name:"claimDescription"}].map(r.default)))}},399:function(e,n,t){"use strict";t.r(n);var l=t(25),a=t(0),o=t.n(a),i=t(222),r=t(748),d=t(240),s=t(228),u=t(227),c=t(226),m=t(358),v=t(223),p=t(309),f=t(476),b=t.n(f),g=t(360),y=t.n(g),h=t(361),E=t.n(h),O=t(16),C=t(255);function x(){var e=Object(l.a)(["\n  fragment JobInfo_ClaimDetailsCardMetaFragment on ClaimJob {\n    hasContents\n    insurer {\n      contentsref\n      quickrepair\n      policyTypeSuppliersView\n      policyCoverSuppliersView\n      enableMultipleRisks\n      additionalRefNo\n      useInternalAssessor\n      cm2nd\n    }\n\n    building { toCollectExcess excessValue }\n    contents { toCollectExcess excessValue }\n    restoration { toCollectExcess excessValue }\n  }\n"]);return x=function(){return e},e}function A(){var e=Object(l.a)(["\n  fragment JobInfo_ClaimDetailsCardFragment on Query {\n    managers: claimFilterOptions(where: $managersWhere) {\n      label: name\n      value\n    }\n    externalAdjusters: claimFilterOptions(where: $externalAdjustersWhere) {\n      label: name\n      value\n    }\n    eventTypes: claimFilterOptions(where: $eventTypeWhere) {\n      label: name\n      value\n    }\n    catCodes: claimFilterOptions(where: $catCodesWhere) {\n      label: name\n      value\n    }\n    policyTypes: claimFilterOptions(where: $policyTypesWhere) {\n      label: name\n      value\n    }\n    policyCovers: claimFilterOptions(where: $policyCoversWhere) {\n      label: name\n      value\n    }\n    internalAssessors: claimFilterOptions(where: $internalAssessorsWhere) {\n      label: name\n      value\n    }\n  }\n"]);return A=function(){return e},e}Object(O.a)(A()),Object(O.a)(x()),n.default=function(e){var n,t,l,a,f,g,h,O,x,A,I,j,S,D,T,N,P,M,L,w,_,R,k,V,F=e.optionData,q=Object(C.b)(),J=null!==(null===q||void 0===q?void 0:null===(n=q.claim)||void 0===n?void 0:null===(t=n.building)||void 0===t?void 0:t.toCollectExcess),B=null!==(null===q||void 0===q?void 0:null===(l=q.claim)||void 0===l?void 0:null===(a=l.contents)||void 0===a?void 0:a.toCollectExcess),z=null!==(null===q||void 0===q?void 0:null===(f=q.claim)||void 0===f?void 0:null===(g=f.restoration)||void 0===g?void 0:g.toCollectExcess);return o.a.createElement(i.a,{title:"Claim Details"},o.a.createElement(r.a,{container:!0,spacing:3},[{component:s.default,label:"Insurance Company",name:"meta.insurance"},{component:u.default,label:"Incident Date",name:"incidentDate",required:!0,maxDate:new Date},{component:c.default,label:"Case Manager",name:"casemanagerId",required:!0,options:null===F||void 0===F?void 0:F.managers},{component:c.default,label:"External Loss Adjusting Firm",name:"externalLossAdjusterId",options:null===F||void 0===F?void 0:F.externalAdjusters,startAdornment:o.a.createElement(b.a,null)},{component:m.a,label:"Insurance Ref #",name:"refNumber",required:!0,startAdornment:o.a.createElement(y.a,null)},{component:m.a,label:"Contents Ref #",name:"contentsRefNum",startAdornment:o.a.createElement(y.a,null),unMountOn:!(null===q||void 0===q?void 0:null===(h=q.claim)||void 0===h?void 0:null===(O=h.insurer)||void 0===O?void 0:O.contentsref)||!(null===q||void 0===q?void 0:null===(x=q.claim)||void 0===x?void 0:x.hasContents)},{component:s.default,label:"Builder Allocated",name:"meta.builderAllocated"},{component:s.default,label:"Restorer Allocated",name:"meta.restorerAllocated"},{component:s.default,label:"FNOL",name:"meta.fnol"},{component:v.default,label:"Scope & Repair (Quick Repair)",name:"hold",unMountOn:!(null===q||void 0===q?void 0:null===(A=q.claim)||void 0===A?void 0:null===(I=A.insurer)||void 0===I?void 0:I.quickrepair)},{xs:2,component:v.default,label:"Builder Collect Excess",name:"portfolios[0].toCollectExcess",disabled:!J},{xs:2,component:p.a,label:"Excess",name:"portfolios[0].excessValue",disabled:!J,required:J,fixedDecimal:!1,decimalScale:0,format:"#########"},{xs:2,component:p.a,label:"Sum Insured",name:"portfolios[0].sumInsured",disabled:!J,required:J,fixedDecimal:!1,decimalScale:0,format:"#########"},{component:c.default,label:"Event Type",name:"eventTypeId",options:null===F||void 0===F?void 0:F.eventTypes,required:!0},{component:c.default,label:"Catastrophe Code",name:"catCodeId",options:null===F||void 0===F?void 0:F.catCodes,required:!0},{xs:2,component:v.default,label:"Contents Provider Collect Excess",name:"portfolios[1].toCollectExcess",disabled:!B},{xs:2,component:p.a,label:"Excess",name:"portfolios[1].excessValue",required:B,disabled:!B,fixedDecimal:!1,decimalScale:0,format:"#########"},{xs:2,component:p.a,label:"Sum Insured",name:"portfolios[1].sumInsured",required:B,disabled:!B,fixedDecimal:!1,decimalScale:0,format:"#########"},{component:c.default,label:"Distributor",name:"policyTypeId",options:null===F||void 0===F?void 0:F.policyTypes,required:!0,unMountOn:!(null===q||void 0===q?void 0:null===(j=q.claim)||void 0===j?void 0:null===(S=j.insurer)||void 0===S?void 0:S.policyTypeSuppliersView)},{component:c.default,label:"PDS Reference",name:"policyCoverId",options:null===F||void 0===F?void 0:F.policyCovers,required:!0,unMountOn:!(null===q||void 0===q?void 0:null===(D=q.claim)||void 0===D?void 0:null===(T=D.insurer)||void 0===T?void 0:T.policyCoverSuppliersView)},{xs:2,component:v.default,label:"Restorer Collect Excess",name:"portfolios[2].toCollectExcess",disabled:!z},{xs:2,component:p.a,label:"Excess",name:"portfolios[2].excessValue",required:z,disabled:!z,fixedDecimal:!1,decimalScale:0,format:"#########"},{xs:2,component:p.a,label:"Sum Insured",name:"portfolios[2].sumInsured",required:z,disabled:!z,fixedDecimal:!1,decimalScale:0,format:"#########"},{label:"Risk Name",name:"riskname",unMountOn:!(null===q||void 0===q?void 0:null===(N=q.claim)||void 0===N?void 0:null===(P=N.insurer)||void 0===P?void 0:P.enableMultipleRisks),startAdornment:o.a.createElement(E.a,null)},{label:"Additional Ref #",name:"additionalRefNumber",unMountOn:!(null===q||void 0===q?void 0:null===(M=q.claim)||void 0===M?void 0:null===(L=M.insurer)||void 0===L?void 0:L.additionalRefNo),startAdornment:o.a.createElement(y.a,null)},{component:c.default,label:"Specialist Review",name:"homeAssessorId",options:null===F||void 0===F?void 0:F.internalAssessors,unMountOn:!(null===q||void 0===q?void 0:null===(w=q.claim)||void 0===w?void 0:null===(_=w.insurer)||void 0===_?void 0:_.useInternalAssessor)},{component:c.default,label:"BC/ BRC/ Loss Adjuster",name:"brcId",options:null===F||void 0===F?void 0:F.managers,unMountOn:!(null===q||void 0===q?void 0:null===(R=q.claim)||void 0===R?void 0:null===(k=R.insurer)||void 0===k?void 0:k.cm2nd)||"Administrator"!==(null===(V=q.me)||void 0===V?void 0:V.userType)}].map(d.default)))}},400:function(e,n,t){"use strict";t.r(n);var l=t(7),a=t(25),o=t(0),i=t.n(o),r=t(222),d=t(748),s=t(1247),u=t(255),c=t(240),m=t(223),v=t(225),p=t(356),f=t.n(p),b=t(294),g=t.n(b),y=t(477),h=t.n(y),E=t(295),O=t.n(E),C=t(296),x=t.n(C),A=t(478),I=t.n(A),j=t(16),S=t(220);function D(){var e=Object(a.a)(["\n  fragment JobInfo_CustomerInfoCardMetaFragment on ClaimJob {\n    insurer {\n      setupcustomerlogin\n      removeHabitableAsbestos\n      hideCategoryOfClaim\n    }\n    actions {\n      actionType\n      isDisplay\n      isDisabled\n    }\n  }\n"]);return D=function(){return e},e}Object(j.a)(D()),n.default=function(e){var n,t,a,o,p,b,y,E,C,A,j,D=e.optionData,T=Object(u.b)(),N=null===T||void 0===T?void 0:null===(n=T.claim)||void 0===n?void 0:null===(t=n.actions)||void 0===t?void 0:t.find((function(e){return"CLAIM_CASH_SETTLE"===(null===e||void 0===e?void 0:e.actionType)})),P=Object(S.f)().isSubmitting;return i.a.createElement(r.a,{title:"Customer & Property Information"},i.a.createElement(d.a,{container:!0,spacing:3},[{label:"Salutations",name:"insuredSalutation",startAdornment:i.a.createElement(f.a,null)},{label:"Customer",name:"insuredName",required:!0,startAdornment:i.a.createElement(g.a,null)},{xs:6,label:"Customer Email",name:"insuredEmail",startAdornment:i.a.createElement(h.a,null)},{xs:6,label:"Property/Risk Address",name:"riskAddressLine1",required:!0,startAdornment:i.a.createElement(O.a,null)},{xs:2,component:m.default,label:"Customer Login?",name:"requireCustomLogin",unMountOn:1!==(null===T||void 0===T?void 0:null===(a=T.claim)||void 0===a?void 0:null===(o=a.insurer)||void 0===o?void 0:o.setupcustomerlogin)},{xs:4,label:"Customer Login?",name:"customLoginEmail",placeholder:"e.g. Email Address",unMountOn:1!==(null===T||void 0===T?void 0:null===(p=T.claim)||void 0===p?void 0:null===(b=p.insurer)||void 0===b?void 0:b.setupcustomerlogin),startAdornment:i.a.createElement(h.a,null)},{xs:2,label:"Suburb",name:"riskAddressSuburb",required:!0,startAdornment:i.a.createElement(O.a,null)},{xs:2,component:v.default,label:"State",name:"riskAddressState",options:null===D||void 0===D?void 0:D._states,required:!0,startAdornment:i.a.createElement(O.a,null)},{xs:2,label:"Postcode",name:"riskAddressPostcode",required:!0,startAdornment:i.a.createElement(O.a,null)},{component:m.default,label:"Home Habitable?",name:"habitableProperty",unMountOn:null===T||void 0===T?void 0:null===(y=T.claim)||void 0===y?void 0:null===(E=y.insurer)||void 0===E?void 0:E.removeHabitableAsbestos},{component:v.default,label:"Category of Claim",name:"category",options:null===D||void 0===D?void 0:D._claimCategories,unMountOn:null===T||void 0===T?void 0:null===(C=T.claim)||void 0===C?void 0:null===(A=C.insurer)||void 0===A?void 0:A.hideCategoryOfClaim},{label:"Phone 1",name:"insuredPhone1",required:!0,startAdornment:i.a.createElement(x.a,null)},{label:"Phone 2",name:"insuredPhone2",startAdornment:i.a.createElement(x.a,null)}].map(c.default),[{label:"Finalise Claim",unMountOn:"Administrator"!==(null===T||void 0===T?void 0:null===(j=T.me)||void 0===j?void 0:j.userType),onClick:function(){console.log("open finallize claim")},startIcon:i.a.createElement(I.a,null)},{label:"Cash settle",startIcon:i.a.createElement(I.a,null),unMountOn:!(null===N||void 0===N?void 0:N.isDisplay),disabled:null===N||void 0===N?void 0:N.isDisabled,onClick:function(){console.log("open cash settle")}},{xs:2}].map((function(e){e.xs;var n=e.label,t=e.disabled,a=Object(l.a)(e,["xs","label","disabled"]);return i.a.createElement(d.a,{item:!0,xs:2,style:{display:"flex"}},n&&i.a.createElement(s.a,Object.assign({variant:"outlined",color:"primary",fullWidth:!0,disabled:t||P},a),n))})),[{label:"Phone 3",name:"insuredPhone3",startAdornment:i.a.createElement(x.a,null)},{label:"Fax",name:"insuredFax",startAdornment:i.a.createElement(x.a,null)}].map(c.default)))}},401:function(e,n,t){"use strict";t.r(n);var l=t(0),a=t.n(l),o=t(222),i=t(748),r=t(1247),d=t(240),s=t(225),u=t(295),c=t.n(u),m=t(479),v=t.n(m),p=t(255),f=t(220);n.default=function(e){var n,t=e.optionData,l=Object(f.f)(),u=l.values,m=l.setFieldValue,b=l.isSubmitting,g=u,y=Object(p.b)();return a.a.createElement(o.a,{title:"Postal Address"},a.a.createElement(i.a,{container:!0,spacing:3},[{xs:8,label:"Postal Address",name:"postalAddressLine1",startAdornment:a.a.createElement(c.a,null)}].map(d.default),a.a.createElement(i.a,{item:!0,xs:4,style:{display:"flex"}},"Administrator"===(null===y||void 0===y?void 0:null===(n=y.me)||void 0===n?void 0:n.userType)&&a.a.createElement(r.a,{variant:"outlined",color:"primary",fullWidth:!0,startIcon:a.a.createElement(v.a,null),onClick:function(){m("postalAddressLine1",g.riskAddressLine1,!1),m("postalAddressSuburb",g.riskAddressSuburb,!1),m("postalAddressState",g.riskAddressState,!1),m("postalAddressPostcode",g.riskAddressPostcode,!1)},disabled:b},"Same Address")),[{xs:4,label:"Suburb",name:"postalAddressSuburb",startAdornment:a.a.createElement(c.a,null)},{xs:4,component:s.default,label:"State",name:"postalAddressState",options:null===t||void 0===t?void 0:t._states,startAdornment:a.a.createElement(c.a,null)},{xs:4,label:"Postcode",name:"postalAddressPostcode",startAdornment:a.a.createElement(c.a,null)}].map(d.default)))}},402:function(e,n,t){"use strict";t.r(n);var l=t(25),a=t(0),o=t.n(a),i=t(222),r=t(748),d=t(240),s=t(224),u=t(16);function c(){var e=Object(l.a)(["\n  fragment JobInfo_QuotingBuilderCardFragment on Query {\n    quotingBuilders: claimFilterOptions(where: $whereQuotingBuilder) {\n      label: name\n      value\n    }\n  }\n"]);return c=function(){return e},e}Object(u.a)(c()),n.default=function(e){var n,t=e.optionData,l=e.claim,a=null===t||void 0===t?void 0:null===(n=t.quotingBuilders)||void 0===n?void 0:n.filter((function(e){var n,t;return(null===e||void 0===e?void 0:e.value)!=(null===l||void 0===l?void 0:null===(n=l.building)||void 0===n?void 0:null===(t=n.scopingSupplier)||void 0===t?void 0:t.companyId)}));return o.a.createElement(i.a,{title:"Quoting Builders"},o.a.createElement(r.a,{container:!0,spacing:3},[{xs:12,component:s.default,name:"portfolios[0].quotingSupplierIds",options:a,maxHeight:"12rem"}].map(d.default)))}},403:function(e,n,t){"use strict";t.r(n);var l=t(25),a=t(0),o=t.n(a),i=t(222),r=t(748),d=t(240),s=t(224),u=t(16);function c(){var e=Object(l.a)(["\n  fragment JobInfo_QuotingRestorerCardFragment on Query {\n    quotingRestorers: claimFilterOptions(where: $whereQuotingRestorer) {\n      label: name\n      value\n    }\n  }\n"]);return c=function(){return e},e}Object(u.a)(c()),n.default=function(e){var n,t=e.optionData,l=e.claim,a=null===t||void 0===t?void 0:null===(n=t.quotingRestorers)||void 0===n?void 0:n.filter((function(e){var n,t;return(null===e||void 0===e?void 0:e.value)!=(null===l||void 0===l?void 0:null===(n=l.restoration)||void 0===n?void 0:null===(t=n.scopingSupplier)||void 0===t?void 0:t.companyId)}));return o.a.createElement(i.a,{title:"Quoting Builders"},o.a.createElement(r.a,{container:!0,spacing:3},[{xs:12,component:s.default,name:"portfolios[2].quotingSupplierIds",options:a,maxHeight:"12rem"}].map(d.default)))}},404:function(e,n,t){"use strict";t.r(n);var l=t(0),a=t.n(l),o=t(222),i=t(748),r=t(240),d=t(294),s=t.n(d),u=t(296),c=t.n(u);n.default=function(){return a.a.createElement(o.a,{title:"Tenant Information"},a.a.createElement(i.a,{container:!0,spacing:3},[{xs:8,label:"Tenant Name",name:"tenantName",startAdornment:a.a.createElement(s.a,null)}].map(r.default),a.a.createElement(i.a,{item:!0,xs:4}),[{xs:4,label:"Phone 1",name:"tenantPhone1",startAdornment:a.a.createElement(c.a,null)},{xs:4,label:"Phone 2",name:"tenantPhone2",startAdornment:a.a.createElement(c.a,null)},{xs:4,label:"Phone 3",name:"tenantPhone3",startAdornment:a.a.createElement(c.a,null)}].map(r.default)))}},405:function(e,n,t){"use strict";t.r(n);var l=t(11),a=t.n(l),o=t(7),i=t(20),r=t(218),d=t(25),s=t(0),u=t.n(s),c=t(146),m=t(16),v=t(480),p=t(746),f=t(748),b=t(220),g=t(243),y=t(399),h=t(400),E=t(401),O=t(404),C=t(398),x=t(402),A=t(403),I=t(255),j=t(124);function S(){var e=Object(d.a)(["\n  mutation JobInfoTabUpdate($input: ClaimJobInput!, $where: ENDataEntityKey!) {\n    updateClaimJob(input: $input, where: $where) {\n      success\n      messages\n      fieldErrors {\n        fieldName\n        level\n        message\n      }\n    }\n  }\n"]);return S=function(){return e},e}function D(){var e=Object(d.a)(["\n  query JobInfo(\n    $managersWhere: ClaimJobFilter\n    $externalAdjustersWhere: ClaimJobFilter\n    $eventTypeWhere: ClaimJobFilter\n    $catCodesWhere: ClaimJobFilter\n    $policyTypesWhere: ClaimJobFilter\n    $policyCoversWhere: ClaimJobFilter\n    $internalAssessorsWhere: ClaimJobFilter\n    $whereQuotingBuilder: ClaimJobFilter\n    $whereQuotingRestorer: ClaimJobFilter\n  ) {\n    ...JobInfo_ClaimDetailsCardFragment\n    ...JobInfo_QuotingBuilderCardFragment\n    ...JobInfo_QuotingRestorerCardFragment\n    _states @client {\n      label @client\n      value @client\n    }\n    _claimCategories @client {\n      label @client\n      value @client\n    }\n  }\n"]);return D=function(){return e},e}function T(){var e=Object(d.a)(["\n  fragment JobInfoTabFragment on ClaimJob {\n    id\n    insurer { companyId companyName }\n    incidentDetail { incidentDate }\n    caseManager { managerId }\n    externalLossAdjuster { companyId }\n    refNumber\n    contentsRefNum\n    # FNOL\n    lodgeDate\n    # Hold\n    incidentDetail { hold }\n    incidentDetail { eventType { eventTypeId } }\n    incidentDetail { cATCode { cATCodeId } }\n    # portfolio\n    building { toCollectExcess excessValue sumInsured }\n    contents { toCollectExcess excessValue sumInsured }\n    restoration { toCollectExcess excessValue sumInsured }\n    policyType { policyTypeId }\n    policyCover { policyCoverId }\n    riskname\n    additionalRefNumber\n    homeAssessor { assesorId }\n    brc { managerId }\n    building {\n      authorisedSupplier { companyName }\n      scopingSupplier { companyId companyName }\n      jobSuppliers {\n        supplier { companyId companyName }\n        quote { supplier { companyId companyName } }\n      }\n    }\n    _allocatedBuilder @client\n    restoration {\n      authorisedSupplier { companyName }\n      scopingSupplier { companyId companyName }\n      jobSuppliers {\n        supplier { companyId companyName }\n        quote { supplier { companyId companyName } }\n      }\n    }\n    _allocatedRestorer @client\n\n    insured {\n      salutation name email\n      phone1 phone2 phone3 fax\n      postalAddress {\n        line1 line2 suburb state postcode\n      }\n    }\n    incidentDetail {\n      riskAddress { line1 line2 suburb state postcode }\n      habitableProperty\n      category\n    }\n    requireCustomLogin\n    customLoginEmail\n\n    tenantDetails { name phone1 phone2 phone3 }\n\n    claimDescription\n  }\n"]);return T=function(){return e},e}Object(m.a)(T()),Object(m.a)(D()),Object(m.a)(S()),n.default=function(e){var n,t,l,d,s,m,S,D,T,N,P,M,L,w,_,R,k,V,F,q,J,B,z,W,$,H,Q,Y,U,K,G,Z,X,ee,ne,te,le,ae,oe,ie,re,de,se,ue,ce,me,ve,pe,fe,be,ge,ye,he,Ee,Oe,Ce,xe=e.data,Ae=e.loading,Ie=Object(g.z)(),je=Object(r.a)(Ie,1)[0],Se=Object(I.b)(),De=Object(j.useSnackbar)().enqueueSnackbar,Te=String(null!==(n=null===xe||void 0===xe?void 0:null===(t=xe.claimJob)||void 0===t?void 0:null===(l=t.insurer)||void 0===l?void 0:l.companyId)&&void 0!==n?n:0),Ne=Object(g.y)({variables:{managersWhere:{subject:"managers",insurers:[Te]},externalAdjustersWhere:{subject:"adjusters",insurers:[Te]},eventTypeWhere:{subject:"eventTypes",insurers:[Te]},catCodesWhere:{subject:"catCodes",insurers:[Te]},policyTypesWhere:{subject:"policyTypes",insurers:[Te]},policyCoversWhere:{subject:"policyCovers",insurers:[Te]},internalAssessorsWhere:{subject:"internalAssessors",insurers:[Te]},whereQuotingBuilder:{subject:"suppliers",portfolios:[g.b.Building],insurers:[Te],postcode:null===xe||void 0===xe?void 0:null===(d=xe.claimJob)||void 0===d?void 0:null===(s=d.incidentDetail)||void 0===s?void 0:null===(m=s.riskAddress)||void 0===m?void 0:m.postcode},whereQuotingRestorer:{subject:"suppliers",portfolios:[g.b.Restoration],insurers:[Te],postcode:null===xe||void 0===xe?void 0:null===(S=xe.claimJob)||void 0===S?void 0:null===(D=S.incidentDetail)||void 0===D?void 0:null===(T=D.riskAddress)||void 0===T?void 0:T.postcode}}}).data;if(Ae||!xe)return u.a.createElement(p.a,null);var Pe=xe.claimJob,Me=null===Pe||void 0===Pe?void 0:null===(N=Pe.incidentDetail)||void 0===N?void 0:N.riskAddress,Le=null===Pe||void 0===Pe?void 0:null===(P=Pe.insured)||void 0===P?void 0:P.postalAddress;return u.a.createElement(b.c,{initialValues:{meta:{insurance:null===Pe||void 0===Pe?void 0:null===(M=Pe.insurer)||void 0===M?void 0:M.companyName,builderAllocated:null===Pe||void 0===Pe?void 0:Pe._allocatedBuilder,restorerAllocated:null===Pe||void 0===Pe?void 0:Pe._allocatedRestorer,fnol:null===Pe||void 0===Pe?void 0:Pe.lodgeDate},portfolios:[{portfolioType:"Building",toCollectExcess:null!==(L=null===Pe||void 0===Pe?void 0:null===(w=Pe.building)||void 0===w?void 0:w.toCollectExcess)&&void 0!==L?L:null,excessValue:null!==(_=null===Pe||void 0===Pe?void 0:null===(R=Pe.building)||void 0===R?void 0:R.excessValue)&&void 0!==_?_:0,sumInsured:null!==(k=null===Pe||void 0===Pe?void 0:null===(V=Pe.building)||void 0===V?void 0:V.sumInsured)&&void 0!==k?k:0,quotingSupplierIds:[]},{portfolioType:"Contents",toCollectExcess:null!==(F=null===Pe||void 0===Pe?void 0:null===(q=Pe.contents)||void 0===q?void 0:q.toCollectExcess)&&void 0!==F?F:null,excessValue:null!==(J=null===Pe||void 0===Pe?void 0:null===(B=Pe.contents)||void 0===B?void 0:B.excessValue)&&void 0!==J?J:0,sumInsured:null!==(z=null===Pe||void 0===Pe?void 0:null===(W=Pe.contents)||void 0===W?void 0:W.sumInsured)&&void 0!==z?z:0},{portfolioType:"Restoration",toCollectExcess:null!==($=null===Pe||void 0===Pe?void 0:null===(H=Pe.restoration)||void 0===H?void 0:H.toCollectExcess)&&void 0!==$?$:null,excessValue:null!==(Q=null===Pe||void 0===Pe?void 0:null===(Y=Pe.restoration)||void 0===Y?void 0:Y.excessValue)&&void 0!==Q?Q:0,sumInsured:null!==(U=null===Pe||void 0===Pe?void 0:null===(K=Pe.restoration)||void 0===K?void 0:K.sumInsured)&&void 0!==U?U:0,quotingSupplierIds:[]}],incidentDate:Object(c.a)(null===Pe||void 0===Pe?void 0:null===(G=Pe.incidentDetail)||void 0===G?void 0:G.incidentDate,"dd/MM/yyyy",new Date),casemanagerId:null===Pe||void 0===Pe?void 0:null===(Z=Pe.caseManager)||void 0===Z?void 0:Z.managerId,externalLossAdjusterId:null===Pe||void 0===Pe?void 0:null===(X=Pe.externalLossAdjuster)||void 0===X?void 0:X.companyId,refNumber:null===Pe||void 0===Pe?void 0:Pe.refNumber,contentsRefNum:null===Pe||void 0===Pe?void 0:Pe.contentsRefNum,hold:null===Pe||void 0===Pe?void 0:null===(ee=Pe.incidentDetail)||void 0===ee?void 0:ee.hold,eventTypeId:null===Pe||void 0===Pe?void 0:null===(ne=Pe.incidentDetail)||void 0===ne?void 0:null===(te=ne.eventType)||void 0===te?void 0:te.eventTypeId,catCodeId:null===Pe||void 0===Pe?void 0:null===(le=Pe.incidentDetail)||void 0===le?void 0:null===(ae=le.cATCode)||void 0===ae?void 0:ae.cATCodeId,policyTypeId:null===Pe||void 0===Pe?void 0:null===(oe=Pe.policyType)||void 0===oe?void 0:oe.policyTypeId,policyCoverId:null===Pe||void 0===Pe?void 0:null===(ie=Pe.policyCover)||void 0===ie?void 0:ie.policyCoverId,riskname:null===Pe||void 0===Pe?void 0:Pe.riskname,additionalRefNumber:null===Pe||void 0===Pe?void 0:Pe.additionalRefNumber,homeAssessorId:null===Pe||void 0===Pe?void 0:null===(re=Pe.homeAssessor)||void 0===re?void 0:re.assesorId,brcId:null===Pe||void 0===Pe?void 0:null===(de=Pe.brc)||void 0===de?void 0:de.managerId,insuredSalutation:null===Pe||void 0===Pe?void 0:null===(se=Pe.insured)||void 0===se?void 0:se.salutation,insuredName:null===Pe||void 0===Pe?void 0:null===(ue=Pe.insured)||void 0===ue?void 0:ue.name,insuredEmail:null===Pe||void 0===Pe?void 0:null===(ce=Pe.insured)||void 0===ce?void 0:ce.email,riskAddressLine1:"".concat(null===Me||void 0===Me?void 0:Me.line1).concat((null===Me||void 0===Me?void 0:Me.line2)?", ".concat(null===Me||void 0===Me?void 0:Me.line2):""),requireCustomLogin:null===Pe||void 0===Pe?void 0:Pe.requireCustomLogin,customLoginEmail:null===Pe||void 0===Pe?void 0:Pe.customLoginEmail,riskAddressSuburb:null===Me||void 0===Me?void 0:Me.suburb,riskAddressState:null===Me||void 0===Me?void 0:Me.state,riskAddressPostcode:null===Me||void 0===Me?void 0:Me.postcode,habitableProperty:null===Pe||void 0===Pe?void 0:null===(me=Pe.incidentDetail)||void 0===me?void 0:me.habitableProperty,category:null===Pe||void 0===Pe?void 0:null===(ve=Pe.incidentDetail)||void 0===ve?void 0:ve.category,insuredPhone1:null===Pe||void 0===Pe?void 0:null===(pe=Pe.insured)||void 0===pe?void 0:pe.phone1,insuredPhone2:null===Pe||void 0===Pe?void 0:null===(fe=Pe.insured)||void 0===fe?void 0:fe.phone2,insuredPhone3:null===Pe||void 0===Pe?void 0:null===(be=Pe.insured)||void 0===be?void 0:be.phone3,insuredFax:null===Pe||void 0===Pe?void 0:null===(ge=Pe.insured)||void 0===ge?void 0:ge.fax,postalAddressLine1:"".concat(null!==(ye=null===Le||void 0===Le?void 0:Le.line1)&&void 0!==ye?ye:"").concat((null===Le||void 0===Le?void 0:Le.line2)?", ".concat(null===Le||void 0===Le?void 0:Le.line2):""),postalAddressSuburb:null===Le||void 0===Le?void 0:Le.suburb,postalAddressState:null===Le||void 0===Le?void 0:Le.state,postalAddressPostcode:null===Le||void 0===Le?void 0:Le.postcode,tenantName:null===Pe||void 0===Pe?void 0:null===(he=Pe.tenantDetails)||void 0===he?void 0:he.name,tenantPhone1:null===Pe||void 0===Pe?void 0:null===(Ee=Pe.tenantDetails)||void 0===Ee?void 0:Ee.phone1,tenantPhone2:null===Pe||void 0===Pe?void 0:null===(Oe=Pe.tenantDetails)||void 0===Oe?void 0:Oe.phone2,tenantPhone3:null===Pe||void 0===Pe?void 0:null===(Ce=Pe.tenantDetails)||void 0===Ce?void 0:Ce.phone3,claimDescription:(null===Pe||void 0===Pe?void 0:Pe.claimDescription)||""},onSubmit:function(){var e=Object(i.a)(a.a.mark((function e(n){var t,l,i,r,d,s,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=function(e){e.meta;return Object(o.a)(e,["meta"])}(n),s={where:{id:null===Pe||void 0===Pe?void 0:Pe.id},input:d},e.next=4,je({variables:s});case 4:u=e.sent,(null===(t=u.data)||void 0===t?void 0:null===(l=t.updateClaimJob)||void 0===l?void 0:l.messages)&&De(u.data.updateClaimJob.messages[0]),(null===(i=u.data)||void 0===i?void 0:null===(r=i.updateClaimJob)||void 0===r?void 0:r.success)&&(null===Se||void 0===Se||Se.claimDetailsRefetch());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},u.a.createElement(b.b,null,u.a.createElement(v.a,{actions:[{label:"Save",type:"submit"}],body:u.a.createElement(f.a,{container:!0,spacing:1},[{card:u.a.createElement(y.default,{optionData:Ne})},{card:u.a.createElement(h.default,{optionData:Ne})},{xs:6,card:u.a.createElement(E.default,{optionData:Ne})},{xs:6,card:u.a.createElement(O.default,null)},{card:u.a.createElement(C.default,null)},{xs:6,card:u.a.createElement(x.default,{claim:Pe,optionData:Ne})},{xs:6,card:u.a.createElement(A.default,{claim:Pe,optionData:Ne})}].map((function(e){var n=e.xs,t=void 0===n?12:n,l=e.card;return u.a.createElement(f.a,{item:!0,xs:t},l)})))})))}},476:function(e,n,t){"use strict";var l=t(217);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=l(t(0)),o=(0,l(t(219)).default)(a.default.createElement("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"}),"AssignmentInd");n.default=o},477:function(e,n,t){"use strict";var l=t(217);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=l(t(0)),o=(0,l(t(219)).default)(a.default.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),"Email");n.default=o},478:function(e,n,t){"use strict";var l=t(217);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=l(t(0)),o=(0,l(t(219)).default)(a.default.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");n.default=o},479:function(e,n,t){"use strict";var l=t(217);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=l(t(0)),o=(0,l(t(219)).default)(a.default.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"}),"FileCopy");n.default=o},480:function(e,n,t){"use strict";var l=t(7),a=t(0),o=t.n(a),i=t(746),r=t(196),d=t(1247),s=t(421);n.a=function(e){var n=e.loading,t=e.actions,a=e.body,u=Object(s.b)().nextStep;return n?o.a.createElement("div",{style:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},o.a.createElement(i.a,null)):o.a.createElement("div",{className:"tab-layout",style:{height:"100%",marginTop:8}},o.a.createElement(r.a,{style:{padding:8,display:"flex",marginBottom:4}},o.a.createElement(d.a,{variant:"outlined",color:"primary",size:"large",onClick:u.open},"Next Step"),o.a.createElement("div",{style:{flexGrow:1}}),t.map((function(e,n){var t=e.label,a=Object(l.a)(e,["label"]);return o.a.createElement(d.a,Object.assign({key:n,style:{marginRight:8},size:"large",color:"primary",variant:"outlined"},a),t)}))),a)}}}]);
//# sourceMappingURL=9.1479a8a9.chunk.js.map