(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[44,19,20,23,61,88],{222:function(e,n,t){"use strict";t.r(n);var a=t(120),l=t(7),o=t(0),i=t.n(o),r=t(220),s=t(254),d=t(281);n.default=function(e){var n=e.variant,t=void 0===n?"standard":n,o=e.startAdornment,c=e.endAdornment,u=Object(l.a)(e,["variant","startAdornment","endAdornment"]);return i.a.createElement(r.a,Object.assign({component:s.a},u,{variant:"dialog",clearable:!0,inputVariant:t,format:"dd/MM/yyyy",placeholder:"DD/MM/YYYY",InputProps:Object(a.a)({},u.InputProps,{startAdornment:o?i.a.createElement(d.a,{position:"start"},o):null,endAdornment:c?i.a.createElement(d.a,{position:"end"},c):null})}))}},224:function(e,n,t){"use strict";var a=t(120),l=t(7),o=t(0),i=t.n(o),r=t(196),s=t(763),d=t(131);n.a=function(e){var n=e.title,t=e.children,a=e.loading,o=Object(l.a)(e,["title","children","loading"]),d=c({});return i.a.createElement(i.a.Fragment,null,n&&i.a.createElement("div",{className:d.paperTitle},n),i.a.createElement(r.a,Object.assign({className:d.paperContent},o),a&&i.a.createElement("div",{style:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement(s.a,null)),!a&&t))};var c=Object(d.a)((function(e){return{paperTitle:Object(a.a)({},e.mixins.gutters(),{background:e.palette.primary.main,color:e.palette.primary.contrastText,borderRadius:"8px 8px 0 0",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),fontSize:"1rem",fontWeight:800}),paperContent:Object(a.a)({},e.mixins.gutters(),{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)})}}))},227:function(e,n,t){"use strict";t.r(n);var a=t(120),l=t(219),o=t(7),i=t(0),r=t.n(i),s=t(220),d=t(1282),c=t(763),u=t(1260),m=t(532),v=t(312),p=t.n(v),f=t(313),b=t.n(f);n.default=function(e){var n=e.options,t=void 0===n?[]:n,i=e.name,v=e.multiple,f=void 0!==v&&v,g=e.disabled,x=e.readOnly,O=e.fullWidth,h=e.loading,C=e.startAdornment,E=Object(o.a)(e,["options","name","multiple","disabled","readOnly","fullWidth","loading","startAdornment"]),y=Object(s.f)().isSubmitting,j=Object(s.e)(i),I=Object(l.a)(j,3),A=I[0],S=I[1],w=I[2],M=r.a.useState(""),D=Object(l.a)(M,2),R=D[0],N=D[1],T=A.value,V=JSON.stringify(t);r.a.useEffect((function(){if(t&&t.length){var e=f?t.filter((function(e){return T.includes(e.value)})):t.find((function(e){return e.value==T}));N(e)}}),[T,f,V]);var P=S.error,k=S.touched,q=Boolean(k&&P);return r.a.createElement(d.a,Object.assign({},E,{value:R,onChange:function(e,n){if(!n)return w.setValue("");var t=f?n.map((function(e){return e.value})):n.value;w.setValue(t)},disabled:h||g||x||y,multiple:f,disableCloseOnSelect:f,filterSelectedOptions:!f,options:t,getOptionLabel:function(e){return e.label||""},groupBy:function(e){return e.group},renderInput:function(e){var n=f?e.InputProps.startAdornment:C||null,t=h?r.a.createElement(c.a,{style:{width:30,height:30}}):e.InputProps.endAdornment;return r.a.createElement(u.a,Object.assign({error:q,helperText:q?P:null,fullWidth:O},E,e,{InputProps:Object(a.a)({},e.InputProps,{style:{flexWrap:"nowrap"},startAdornment:n,endAdornment:t})}))},renderTags:function(e){var n=e.map((function(e){return e.label})).join(", ");return r.a.createElement("p",{style:{margin:0,paddingLeft:6,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},n)},renderOption:function(e,n){var t=n.selected;return r.a.createElement(r.a.Fragment,{key:e.value},f&&r.a.createElement(m.a,{icon:r.a.createElement(p.a,{fontSize:"small"}),checkedIcon:r.a.createElement(b.a,{fontSize:"small"}),style:{marginRight:8},checked:t}),e.label)}}))}},228:function(e,n,t){"use strict";t.r(n);var a=t(120),l=t(7),o=t(0),i=t.n(o),r=t(221),s=t(131);n.default=function(e){var n=e.InputProps,t=e.rowsMax,o=void 0===t?3:t,s=e.className,c=(e.variant,Object(l.a)(e,["InputProps","rowsMax","className","variant"])),u=d();return i.a.createElement(r.default,Object.assign({},c,{className:"".concat(s," ").concat(u.root),multiline:!0,rowsMax:o,InputProps:Object(a.a)({},n,{readOnly:!0}),InputLabelProps:{shrink:!0}}))};var d=Object(s.a)({root:{"& .MuiInput-underline:before":{borderBottom:"none"}}})},241:function(e,n,t){"use strict";t.r(n);var a=t(7),l=t(0),o=t.n(l),i=t(765),r=t(221);n.default=function(e){var n=e.unMountOn,t=e.xs,l=void 0===t?3:t,s=e.component,d=void 0===s?r.default:s,c=Object(a.a)(e,["unMountOn","xs","component"]);return o.a.createElement(i.a,{item:!0,xs:l,key:c.name},!n&&o.a.createElement(d,Object.assign({},c,{variant:"outlined",fullWidth:!0})))}},314:function(e,n,t){"use strict";var a=t(7),l=t(0),o=t.n(l),i=t(315),r=t(363),s=t.n(r),d=t(221);n.a=function(e){var n=e.fixedDecimal,t=e.decimalScale,l=e.format,i=e.allowNegative,r=Object(a.a)(e,["fixedDecimal","decimalScale","format","allowNegative"]);return o.a.createElement(d.default,Object.assign({},r,{startAdornment:o.a.createElement(s.a,null),InputProps:{inputComponent:c,inputProps:{autoComplete:"disabled_auto_complete",fixedDecimal:n,decimalScale:t,format:l,allowNegative:i}}}))};var c=function(e){var n=e.fixedDecimal,t=void 0===n||n,l=e.decimalScale,r=void 0===l?2:l,s=e.allowNegative,d=void 0===s||s,c=e.inputRef,u=e.onChange,m=e.name,v=Object(a.a)(e,["fixedDecimal","decimalScale","allowNegative","inputRef","onChange","name"]);return o.a.createElement(i.a,Object.assign({},v,{allowNegative:d,decimalScale:r,fixedDecimalScale:t,name:m,getInputRef:c,onValueChange:function(e){u({target:{name:m,value:e.floatValue}})}}))}},362:function(e,n,t){"use strict";var a=t(7),l=t(0),o=t.n(l),i=t(221),r=/^[A-Za-z0-9]+$/;n.a=function(e){var n=e.validate,t=Object(a.a)(e,["validate"]);return o.a.createElement(i.default,Object.assign({},t,{validate:function(e){return e&&!r.test(e)?"Invalid reference number":n?n(e):void 0}}))}},364:function(e,n,t){"use strict";var a=t(217);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l=a(t(0)),o=(0,a(t(218)).default)(l.default.createElement("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link");n.default=o},365:function(e,n,t){"use strict";var a=t(217);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l=a(t(0)),o=(0,a(t(218)).default)(l.default.createElement("path",{d:"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"}),"Face");n.default=o},408:function(e,n,t){"use strict";t.r(n);var a=t(25),l=t(0),o=t.n(l),i=t(224),r=t(765),s=t(241),d=t(228),c=t(222),u=t(227),m=t(362),v=t(225),p=t(314),f=t(494),b=t.n(f),g=t(364),x=t.n(g),O=t(365),h=t.n(O),C=t(16),E=t(243);function y(){var e=Object(a.a)(["\n  fragment JobInfo_ClaimDetailsCardMetaFragment on ClaimJob {\n    hasContents\n    insurer {\n      contentsref\n      quickrepair\n      policyTypeSuppliersView\n      policyCoverSuppliersView\n      enableMultipleRisks\n      additionalRefNo\n      useInternalAssessor\n      cm2nd\n    }\n\n    building { toCollectExcess excessValue }\n    contents { toCollectExcess excessValue }\n    restoration { toCollectExcess excessValue }\n  }\n"]);return y=function(){return e},e}function j(){var e=Object(a.a)(["\n  fragment JobInfo_ClaimDetailsCardFragment on Query {\n    managers: claimFilterOptions(where: $managersWhere) {\n      label: name\n      value\n    }\n    externalAdjusters: claimFilterOptions(where: $externalAdjustersWhere) {\n      label: name\n      value\n    }\n    eventTypes: claimFilterOptions(where: $eventTypeWhere) {\n      label: name\n      value\n    }\n    catCodes: claimFilterOptions(where: $catCodesWhere) {\n      label: name\n      value\n    }\n    policyTypes: claimFilterOptions(where: $policyTypesWhere) {\n      label: name\n      value\n    }\n    policyCovers: claimFilterOptions(where: $policyCoversWhere) {\n      label: name\n      value\n    }\n    internalAssessors: claimFilterOptions(where: $internalAssessorsWhere) {\n      label: name\n      value\n    }\n  }\n"]);return j=function(){return e},e}Object(C.a)(j()),Object(C.a)(y()),n.default=function(e){var n,t,a,l,f,g,O,C,y,j,I,A,S,w,M,D,R,N,T,V,P,k,q,z,F=e.optionData,W=Object(E.b)(),_=null!==(null===W||void 0===W?void 0:null===(n=W.claim)||void 0===n?void 0:null===(t=n.building)||void 0===t?void 0:t.toCollectExcess),B=null!==(null===W||void 0===W?void 0:null===(a=W.claim)||void 0===a?void 0:null===(l=a.contents)||void 0===l?void 0:l.toCollectExcess),L=null!==(null===W||void 0===W?void 0:null===(f=W.claim)||void 0===f?void 0:null===(g=f.restoration)||void 0===g?void 0:g.toCollectExcess);return o.a.createElement(i.a,{title:"Claim Details"},o.a.createElement(r.a,{container:!0,spacing:3},[{component:d.default,label:"Insurance Company",name:"meta.insurance"},{component:c.default,label:"Incident Date",name:"incidentDate",required:!0,maxDate:new Date},{component:u.default,label:"Case Manager",name:"casemanagerId",required:!0,options:null===F||void 0===F?void 0:F.managers},{component:u.default,label:"External Loss Adjusting Firm",name:"externalLossAdjusterId",options:null===F||void 0===F?void 0:F.externalAdjusters,startAdornment:o.a.createElement(b.a,null)},{component:m.a,label:"Insurance Ref #",name:"refNumber",required:!0,startAdornment:o.a.createElement(x.a,null)},{component:m.a,label:"Contents Ref #",name:"contentsRefNum",startAdornment:o.a.createElement(x.a,null),unMountOn:!(null===W||void 0===W?void 0:null===(O=W.claim)||void 0===O?void 0:null===(C=O.insurer)||void 0===C?void 0:C.contentsref)||!(null===W||void 0===W?void 0:null===(y=W.claim)||void 0===y?void 0:y.hasContents)},{component:d.default,label:"Builder Allocated",name:"meta.builderAllocated"},{component:d.default,label:"Restorer Allocated",name:"meta.restorerAllocated"},{component:d.default,label:"FNOL",name:"meta.fnol"},{component:v.default,label:"Scope & Repair (Quick Repair)",name:"hold",unMountOn:!(null===W||void 0===W?void 0:null===(j=W.claim)||void 0===j?void 0:null===(I=j.insurer)||void 0===I?void 0:I.quickrepair)},{xs:2,component:v.default,label:"Builder Collect Excess",name:"portfolios[0].toCollectExcess",disabled:!_},{xs:2,component:p.a,label:"Excess",name:"portfolios[0].excessValue",disabled:!_,required:_,fixedDecimal:!1,decimalScale:0,format:"#########"},{xs:2,component:p.a,label:"Sum Insured",name:"portfolios[0].sumInsured",disabled:!_,required:_,fixedDecimal:!1,decimalScale:0,format:"#########"},{component:u.default,label:"Event Type",name:"eventTypeId",options:null===F||void 0===F?void 0:F.eventTypes,required:!0},{component:u.default,label:"Catastrophe Code",name:"catCodeId",options:null===F||void 0===F?void 0:F.catCodes,required:!0},{xs:2,component:v.default,label:"Contents Provider Collect Excess",name:"portfolios[1].toCollectExcess",disabled:!B},{xs:2,component:p.a,label:"Excess",name:"portfolios[1].excessValue",required:B,disabled:!B,fixedDecimal:!1,decimalScale:0,format:"#########"},{xs:2,component:p.a,label:"Sum Insured",name:"portfolios[1].sumInsured",required:B,disabled:!B,fixedDecimal:!1,decimalScale:0,format:"#########"},{component:u.default,label:"Distributor",name:"policyTypeId",options:null===F||void 0===F?void 0:F.policyTypes,required:!0,unMountOn:!(null===W||void 0===W?void 0:null===(A=W.claim)||void 0===A?void 0:null===(S=A.insurer)||void 0===S?void 0:S.policyTypeSuppliersView)},{component:u.default,label:"PDS Reference",name:"policyCoverId",options:null===F||void 0===F?void 0:F.policyCovers,required:!0,unMountOn:!(null===W||void 0===W?void 0:null===(w=W.claim)||void 0===w?void 0:null===(M=w.insurer)||void 0===M?void 0:M.policyCoverSuppliersView)},{xs:2,component:v.default,label:"Restorer Collect Excess",name:"portfolios[2].toCollectExcess",disabled:!L},{xs:2,component:p.a,label:"Excess",name:"portfolios[2].excessValue",required:L,disabled:!L,fixedDecimal:!1,decimalScale:0,format:"#########"},{xs:2,component:p.a,label:"Sum Insured",name:"portfolios[2].sumInsured",required:L,disabled:!L,fixedDecimal:!1,decimalScale:0,format:"#########"},{label:"Risk Name",name:"riskname",unMountOn:!(null===W||void 0===W?void 0:null===(D=W.claim)||void 0===D?void 0:null===(R=D.insurer)||void 0===R?void 0:R.enableMultipleRisks),startAdornment:o.a.createElement(h.a,null)},{label:"Additional Ref #",name:"additionalRefNumber",unMountOn:!(null===W||void 0===W?void 0:null===(N=W.claim)||void 0===N?void 0:null===(T=N.insurer)||void 0===T?void 0:T.additionalRefNo),startAdornment:o.a.createElement(x.a,null)},{component:u.default,label:"Specialist Review",name:"homeAssessorId",options:null===F||void 0===F?void 0:F.internalAssessors,unMountOn:!(null===W||void 0===W?void 0:null===(V=W.claim)||void 0===V?void 0:null===(P=V.insurer)||void 0===P?void 0:P.useInternalAssessor)},{component:u.default,label:"BC/ BRC/ Loss Adjuster",name:"brcId",options:null===F||void 0===F?void 0:F.managers,unMountOn:!(null===W||void 0===W?void 0:null===(k=W.claim)||void 0===k?void 0:null===(q=k.insurer)||void 0===q?void 0:q.cm2nd)||"Administrator"!==(null===(z=W.me)||void 0===z?void 0:z.userType)}].map(s.default)))}},494:function(e,n,t){"use strict";var a=t(217);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l=a(t(0)),o=(0,a(t(218)).default)(l.default.createElement("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"}),"AssignmentInd");n.default=o}}]);
//# sourceMappingURL=44.6d462f3b.chunk.js.map