(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[12,14,53,60],{224:function(e,n,t){"use strict";var i=t(120),a=t(7),r=t(0),l=t.n(r),d=t(196),o=t(763),c=t(131);n.a=function(e){var n=e.title,t=e.children,i=e.loading,r=Object(a.a)(e,["title","children","loading"]),c=u({});return l.a.createElement(l.a.Fragment,null,n&&l.a.createElement("div",{className:c.paperTitle},n),l.a.createElement(d.a,Object.assign({className:c.paperContent},r),i&&l.a.createElement("div",{style:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement(o.a,null)),!i&&t))};var u=Object(c.a)((function(e){return{paperTitle:Object(i.a)({},e.mixins.gutters(),{background:e.palette.primary.main,color:e.palette.primary.contrastText,borderRadius:"8px 8px 0 0",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),fontSize:"1rem",fontWeight:800}),paperContent:Object(i.a)({},e.mixins.gutters(),{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)})}}))},265:function(e,n,t){"use strict";t.r(n);var i=t(7),a=t(0),r=t.n(a),l=t(765),d=t(285);n.default=function(e){var n=e.__typename,a=e.grid,o=(e.order,e.readOnly),c=Object(i.a)(e,["__typename","grid","order","readOnly"]),u=function(e){return r.a.createElement(l.a,{item:!0,xs:a},r.a.createElement(r.a.Suspense,{fallback:null},e))};if("GroupField"===n){var s=r.a.lazy((function(){return Promise.all([t.e(38),t.e(87)]).then(t.bind(null,302))}));return u(r.a.createElement(s,Object.assign({},c,{fullWidth:!0,disabled:o})))}if("InfoField"===n)return u(r.a.createElement(d.a,Object.assign({},c,{fullWidth:!0,disabled:o})));if("FileField"===n){var m=r.a.lazy((function(){return Promise.all([t.e(36),t.e(37),t.e(41)]).then(t.bind(null,320))}));return u(r.a.createElement(m,Object.assign({},c,{disabled:o})))}var v=r.a.useMemo((function(){return r.a.lazy((function(){return t(286)("./".concat(n))}))}),[n]);return u(r.a.createElement(v,Object.assign({},c,{fullWidth:!0,variant:"outlined",disabled:o})))}},286:function(e,n,t){var i={"./CheckboxField":[235,9,17],"./CheckboxField/":[235,9,17],"./CheckboxField/index":[235,9,17],"./CheckboxField/index.tsx":[235,9,17],"./CheckboxGroupField":[226,9,18],"./CheckboxGroupField/":[226,9,18],"./CheckboxGroupField/index":[226,9,18],"./CheckboxGroupField/index.tsx":[226,9,18],"./ComboBoxField":[227,9,1,19],"./ComboBoxField/":[227,9,1,19],"./ComboBoxField/ComboBoxField.stories":[271,9,1,56],"./ComboBoxField/ComboBoxField.stories.tsx":[271,9,1,56],"./ComboBoxField/index":[227,9,1,19],"./ComboBoxField/index.tsx":[227,9,1,19],"./DateField":[222,9,0,20],"./DateField/":[222,9,0,20],"./DateField/index":[222,9,0,20],"./DateField/index.tsx":[222,9,0,20],"./DateTimeField":[236,9,0,21],"./DateTimeField/":[236,9,0,21],"./DateTimeField/index":[236,9,0,21],"./DateTimeField/index.tsx":[236,9,0,21],"./EditorField":[229,9,3,22],"./EditorField/":[229,9,3,22],"./EditorField/index":[229,9,3,22],"./EditorField/index.tsx":[229,9,3,22],"./FileField":[234,9],"./FileField/":[234,9],"./FileField/index":[234,9],"./FileField/index.tsx":[234,9],"./Formik.stories":[277,9,0,1,3,6,43],"./Formik.stories.tsx":[277,9,0,1,3,6,43],"./InfoField":[228,9,23],"./InfoField/":[228,9,23],"./InfoField/index":[228,9,23],"./InfoField/index.tsx":[228,9,23],"./SearchField":[240,9,16],"./SearchField/":[240,9,16],"./SearchField/index":[240,9,16],"./SearchField/index.tsx":[240,9,16],"./SelectField":[223,9],"./SelectField/":[223,9],"./SelectField/__snapshots__/index.test.tsx.snap":[369,7,92],"./SelectField/index":[223,9],"./SelectField/index.test":[272,9,7,9,46],"./SelectField/index.test.tsx":[272,9,7,9,46],"./SelectField/index.tsx":[223,9],"./SwitchField":[225,9],"./SwitchField/":[225,9],"./SwitchField/index":[225,9],"./SwitchField/index.tsx":[225,9],"./TextAreaField":[232,9],"./TextAreaField/":[232,9],"./TextAreaField/index":[232,9],"./TextAreaField/index.tsx":[232,9],"./TextField":[221,9],"./TextField/":[221,9],"./TextField/__snapshots__/index.test.tsx.snap":[381,7,93],"./TextField/index":[221,9],"./TextField/index.test":[275,9,7,9,47],"./TextField/index.test.tsx":[275,9,7,9,47],"./TextField/index.tsx":[221,9],"./TimeField":[237,9,0,24],"./TimeField/":[237,9,0,24],"./TimeField/index":[237,9,0,24],"./TimeField/index.tsx":[237,9,0,24]};function a(e){if(!t.o(i,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=i[e],a=n[0];return Promise.all(n.slice(2).map(t.e)).then((function(){return t.t(a,n[1])}))}a.keys=function(){return Object.keys(i)},a.id=286,e.exports=a},332:function(e,n,t){"use strict";t.r(n);var i=t(7),a=t(25),r=t(0),l=t.n(r),d=t(131),o=t(224),c=t(765),u=t(265),s=t(16);function m(){var e=Object(a.a)(["\n  fragment FormCardFragment on Card {\n    id\n    grid\n    order\n    title\n    fields {\n      __typename\n      id\n      grid\n      order\n\n      label\n      ...on InfoField {\n        value\n      }\n      ...on TextField {\n        name\n      }\n      ...on TextAreaField {\n        name\n        rows\n        rowsMax\n      }\n      ...on SelectField {\n        name\n        options { label value }\n      }\n      ...on SwitchField {\n        name\n      }\n      ...on FileField {\n        name\n      }\n      ...on DateTimeField {\n        name\n      }\n      ... on GroupField {\n        name\n        fields {\n          __typename\n          order\n          grid\n          label\n          ...on InfoField {\n            value\n          }\n          ...on TextField {\n            name\n          }\n          ...on TextAreaField {\n            name\n            rows\n            rowsMax\n          }\n          ...on SelectField {\n            name\n            options { label value }\n          }\n          ...on SwitchField {\n            name\n          }\n          ...on FileField {\n            name\n          }\n          ...on DateTimeField {\n            name\n          }\n        }\n      }\n    }\n  }\n"]);return m=function(){return e},e}Object(s.a)(m()),n.default=function(e){var n=e.title,t=e.fields,a=e.readOnly,r=v();if(!t)return l.a.createElement(l.a.Fragment,null,"Empty card");var d=t.slice().sort((function(e,n){return e.order-n.order}));return l.a.createElement(o.a,{className:r.paper,title:n},l.a.createElement(c.a,{container:!0,direction:"row",spacing:2,className:r.fieldRoot},d.map((function(e){var n=e.id,t=e.grid,r=Object(i.a)(e,["id","grid"]);return l.a.createElement(c.a,{key:n,item:!0,xs:t},l.a.createElement(u.default,Object.assign({},r,{readOnly:a})))}))))};var v=Object(d.a)((function(e){return{paper:{padding:e.spacing(2)},fieldRoot:{marginTop:e.spacing()}}}))},333:function(e,n,t){"use strict";t.r(n);var i=t(0),a=t.n(i),r=t(131),l=t(765),d=t(332);n.default=function(e){var n=e.cards,t=e.readOnly,i=o();if(!n)return null;var r=n.slice().sort((function(e,n){return e.order-n.order}));return a.a.createElement(l.a,{className:i.root,container:!0,spacing:2},r.map((function(e){var n=e.id,i=e.grid,r=e.title,o=e.fields;return a.a.createElement(l.a,{item:!0,xs:i,key:n},a.a.createElement(d.default,{title:r,fields:o,readOnly:t}))})))};var o=Object(r.a)({root:{marginTop:8,height:"calc(95% - 52px - 8px)",overflow:"auto"}})},366:function(e,n,t){"use strict";var i=t(7),a=t(0),r=t.n(a),l=t(763),d=t(196),o=t(1264),c=t(337);n.a=function(e){var n=e.loading,t=e.actions,a=e.body,u=Object(c.b)().nextStep;return n?r.a.createElement("div",{style:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(l.a,null)):r.a.createElement("div",{className:"tab-layout",style:{height:"100%",marginTop:8}},r.a.createElement(d.a,{style:{padding:8,display:"flex",marginBottom:4}},r.a.createElement(o.a,{variant:"outlined",color:"primary",size:"large",onClick:u.open},"Next Step"),r.a.createElement("div",{style:{flexGrow:1}}),t.map((function(e,n){var t=e.label,a=e.unMountOn,l=e.children,d=Object(i.a)(e,["label","unMountOn","children"]);return a?null:r.a.createElement(o.a,Object.assign({key:n,style:{marginRight:8},size:"large",color:"primary",variant:"outlined"},d),t,l)}))),a)}},367:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return l}));var i=t(13),a=t(120),r=function(e){return e.reduce((function(e,n){var t=l(n.fields);return Object(a.a)({},e,{},t)}),{})},l=function(e){return e.reduce((function(e,n){if(!n.name)return e;var t="SwitchField"!==n.__typename&&("DateTimeField"===n.__typename?new Date:"GroupField"===n.__typename?[]:"");return Object(a.a)({},e,Object(i.a)({},n.name,t))}),{})}},425:function(e,n,t){"use strict";t.r(n);var i=t(120),a=t(11),r=t.n(a),l=t(20),d=t(219),o=t(25),c=t(0),u=t.n(c),s=t(366),m=t(16),v=t(230),p=t(333),b=t(220),f=t(367),x=t(122),F=t(243);function g(){var e=Object(o.a)(["\n  fragment ReportTabFragment on ClaimJob {\n    id\n    reportForm {\n      title\n      cards {\n        id\n        ...FormCardFragment\n      }\n    }\n    reportData {\n      data\n      status\n    }\n  }\n  mutation SaveReport($claimId: ID!, $data: Json!) {\n    claimReportUpsert(claimId: $claimId, data: $data) {\n      id\n    }\n  }\n  mutation SubmitReport($claimId: ID!) {\n    claimReportSubmit(claimId: $claimId) {\n      id\n    }\n  }\n  mutation ResetReport($claimId: ID!) {\n    claimReportReset(claimId: $claimId) {\n      id\n    }\n  }\n"]);return g=function(){return e},e}Object(m.a)(g()),n.default=function(e){var n,t,a,o,c,m,g,h,O,y=e.data,E=e.loading;if(E)return u.a.createElement(u.a.Fragment,null,"Loading");var j=Object(x.useSnackbar)().enqueueSnackbar,T=Object(F.b)(),S=Object(v.L)(),k=Object(d.a)(S,1)[0],C=Object(v.N)(),w=Object(d.a)(C,1)[0],D=function(){var e=Object(l.a)(r.a.mark((function e(){var n,t,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===y||void 0===y?void 0:null===(n=y.claimJob)||void 0===n?void 0:n.id)){e.next=5;break}return e.next=3,w({variables:{claimId:y.claimJob.id}}).catch((function(e){return e}));case 3:(null===(i=e.sent)||void 0===i?void 0:null===(t=i.data)||void 0===t?void 0:t.claimReportSubmit.id)&&(j("Submitted"),null===T||void 0===T||T.claimDetailsRefetch());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=Object(v.K)(),R=Object(d.a)(I,1)[0],_=function(){var e=Object(l.a)(r.a.mark((function e(){var n,t,i,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===y||void 0===y?void 0:null===(n=y.claimJob)||void 0===n?void 0:n.id)){e.next=5;break}return e.next=3,R({variables:{claimId:y.claimJob.id}}).catch((function(e){return e}));case 3:(null===(a=e.sent)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:null===(i=t.claimReportReset)||void 0===i?void 0:i.id)&&(j("Reset"),null===T||void 0===T||T.claimDetailsRefetch());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=(null===y||void 0===y?void 0:null===(n=y.claimJob)||void 0===n?void 0:null===(t=n.reportForm)||void 0===t?void 0:t.cards)?Object(f.b)(y.claimJob.reportForm.cards):{},B=Boolean(null===y||void 0===y?void 0:null===(a=y.claimJob)||void 0===a?void 0:a.reportData),N="REPORTED"===(null===y||void 0===y?void 0:null===(o=y.claimJob)||void 0===o?void 0:null===(c=o.reportData)||void 0===c?void 0:c.status);return u.a.createElement(b.c,{initialValues:Object(i.a)({},J,{},null===y||void 0===y?void 0:null===(m=y.claimJob)||void 0===m?void 0:null===(g=m.reportData)||void 0===g?void 0:g.data),onSubmit:function(){var e=Object(l.a)(r.a.mark((function e(n){var t,i,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===y||void 0===y?void 0:null===(t=y.claimJob)||void 0===t?void 0:t.id)){e.next=5;break}return e.next=3,k({variables:{claimId:y.claimJob.id,data:n}}).catch((function(e){var n;return null===e||void 0===e?void 0:null===(n=e.graphQLErrors)||void 0===n?void 0:n.forEach((function(e){return j(e.message)}))}));case 3:(null===(a=e.sent)||void 0===a?void 0:null===(i=a.data)||void 0===i?void 0:i.claimReportUpsert.id)&&(j("Saved"),null===T||void 0===T||T.claimDetailsRefetch());case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},u.a.createElement(b.b,null,u.a.createElement(s.a,{loading:E,actions:[{label:"Reset",disabled:B&&!N,onClick:_},{label:"Submit",disabled:B&&N,onClick:D},{label:"Save",type:"submit",disabled:N}],body:u.a.createElement(p.default,{cards:null===y||void 0===y?void 0:null===(h=y.claimJob)||void 0===h?void 0:null===(O=h.reportForm)||void 0===O?void 0:O.cards,readOnly:N})})))}}}]);
//# sourceMappingURL=12.04e0ed5c.chunk.js.map