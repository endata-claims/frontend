(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[42,46],{222:function(e,n,i){"use strict";var t=i(120),a=i(7),l=i(0),d=i.n(l),r=i(196),o=i(746),s=i(131);n.a=function(e){var n=e.title,i=e.children,t=e.loading,l=Object(a.a)(e,["title","children","loading"]),s=c({});return d.a.createElement(d.a.Fragment,null,n&&d.a.createElement("div",{className:s.paperTitle},n),d.a.createElement(r.a,Object.assign({className:s.paperContent},l),t&&d.a.createElement("div",{style:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},d.a.createElement(o.a,null)),!t&&i))};var c=Object(s.a)((function(e){return{paperTitle:Object(t.a)({},e.mixins.gutters(),{background:e.palette.primary.main,color:e.palette.primary.contrastText,borderRadius:"8px 8px 0 0",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),fontSize:"1rem",fontWeight:800}),paperContent:Object(t.a)({},e.mixins.gutters(),{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)})}}))},264:function(e,n,i){"use strict";i.r(n);var t=i(7),a=i(0),l=i.n(a),d=i(748),r=i(283);n.default=function(e){var n=e.__typename,a=e.grid,o=(e.order,e.readOnly),s=Object(t.a)(e,["__typename","grid","order","readOnly"]),c=function(e){return l.a.createElement(d.a,{item:!0,xs:a},l.a.createElement(l.a.Suspense,{fallback:null},e))};if("GroupField"===n){var F=l.a.lazy((function(){return Promise.all([i.e(26),i.e(71)]).then(i.bind(null,298))}));return c(l.a.createElement(F,Object.assign({},s,{fullWidth:!0,disabled:o})))}if("InfoField"===n)return c(l.a.createElement(r.a,Object.assign({},s,{fullWidth:!0,disabled:o})));if("FileField"===n){var x=l.a.lazy((function(){return Promise.all([i.e(24),i.e(25),i.e(30)]).then(i.bind(null,315))}));return c(l.a.createElement(x,Object.assign({},s,{disabled:o})))}var m=l.a.useMemo((function(){return l.a.lazy((function(){return i(284)("./".concat(n))}))}),[n]);return c(l.a.createElement(m,Object.assign({},s,{fullWidth:!0,variant:"outlined",disabled:o})))}},284:function(e,n,i){var t={"./CheckboxField":[234,9,15],"./CheckboxField/":[234,9,15],"./CheckboxField/index":[234,9,15],"./CheckboxField/index.tsx":[234,9,15],"./CheckboxGroupField":[224,9,16],"./CheckboxGroupField/":[224,9,16],"./CheckboxGroupField/index":[224,9,16],"./CheckboxGroupField/index.tsx":[224,9,16],"./ComboBoxField":[226,9,1,17],"./ComboBoxField/":[226,9,1,17],"./ComboBoxField/ComboBoxField.stories":[271,9,1,45],"./ComboBoxField/ComboBoxField.stories.tsx":[271,9,1,45],"./ComboBoxField/index":[226,9,1,17],"./ComboBoxField/index.tsx":[226,9,1,17],"./DateField":[227,9,0,18],"./DateField/":[227,9,0,18],"./DateField/index":[227,9,0,18],"./DateField/index.tsx":[227,9,0,18],"./DateTimeField":[235,9,0,19],"./DateTimeField/":[235,9,0,19],"./DateTimeField/index":[235,9,0,19],"./DateTimeField/index.tsx":[235,9,0,19],"./EditorField":[229,9,3,20],"./EditorField/":[229,9,3,20],"./EditorField/index":[229,9,3,20],"./EditorField/index.tsx":[229,9,3,20],"./FileField":[233,9],"./FileField/":[233,9],"./FileField/index":[233,9],"./FileField/index.tsx":[233,9],"./Formik.stories":[277,9,0,1,3,5,32],"./Formik.stories.tsx":[277,9,0,1,3,5,32],"./InfoField":[228,9,21],"./InfoField/":[228,9,21],"./InfoField/index":[228,9,21],"./InfoField/index.tsx":[228,9,21],"./SearchField":[239,9,14],"./SearchField/":[239,9,14],"./SearchField/index":[239,9,14],"./SearchField/index.tsx":[239,9,14],"./SelectField":[225,9],"./SelectField/":[225,9],"./SelectField/__snapshots__/index.test.tsx.snap":[364,7,76],"./SelectField/index":[225,9],"./SelectField/index.test":[272,9,6,8,35],"./SelectField/index.test.tsx":[272,9,6,8,35],"./SelectField/index.tsx":[225,9],"./SwitchField":[223,9],"./SwitchField/":[223,9],"./SwitchField/index":[223,9],"./SwitchField/index.tsx":[223,9],"./TextAreaField":[231,9],"./TextAreaField/":[231,9],"./TextAreaField/index":[231,9],"./TextAreaField/index.tsx":[231,9],"./TextField":[221,9],"./TextField/":[221,9],"./TextField/__snapshots__/index.test.tsx.snap":[376,7,77],"./TextField/index":[221,9],"./TextField/index.test":[275,9,6,8,36],"./TextField/index.test.tsx":[275,9,6,8,36],"./TextField/index.tsx":[221,9],"./TimeField":[236,9,0,22],"./TimeField/":[236,9,0,22],"./TimeField/index":[236,9,0,22],"./TimeField/index.tsx":[236,9,0,22]};function a(e){if(!i.o(t,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=t[e],a=n[0];return Promise.all(n.slice(2).map(i.e)).then((function(){return i.t(a,n[1])}))}a.keys=function(){return Object.keys(t)},a.id=284,e.exports=a},329:function(e,n,i){"use strict";i.r(n);var t=i(7),a=i(25),l=i(0),d=i.n(l),r=i(131),o=i(222),s=i(748),c=i(264),F=i(16);function x(){var e=Object(a.a)(["\n  fragment FormCardFragment on Card {\n    id\n    grid\n    order\n    title\n    fields {\n      __typename\n      id\n      grid\n      order\n\n      label\n      ...on InfoField {\n        value\n      }\n      ...on TextField {\n        name\n      }\n      ...on TextAreaField {\n        name\n        rows\n        rowsMax\n      }\n      ...on SelectField {\n        name\n        options { label value }\n      }\n      ...on SwitchField {\n        name\n      }\n      ...on FileField {\n        name\n      }\n      ...on DateTimeField {\n        name\n      }\n      ... on GroupField {\n        name\n        fields {\n          __typename\n          order\n          grid\n          label\n          ...on InfoField {\n            value\n          }\n          ...on TextField {\n            name\n          }\n          ...on TextAreaField {\n            name\n            rows\n            rowsMax\n          }\n          ...on SelectField {\n            name\n            options { label value }\n          }\n          ...on SwitchField {\n            name\n          }\n          ...on FileField {\n            name\n          }\n          ...on DateTimeField {\n            name\n          }\n        }\n      }\n    }\n  }\n"]);return x=function(){return e},e}Object(F.a)(x()),n.default=function(e){var n=e.title,i=e.fields,a=e.readOnly,l=m();if(!i)return d.a.createElement(d.a.Fragment,null,"Empty card");var r=i.slice().sort((function(e,n){return e.order-n.order}));return d.a.createElement(o.a,{className:l.paper,title:n},d.a.createElement(s.a,{container:!0,direction:"row",spacing:2,className:l.fieldRoot},r.map((function(e){var n=e.id,i=e.grid,l=Object(t.a)(e,["id","grid"]);return d.a.createElement(s.a,{key:n,item:!0,xs:i},d.a.createElement(c.default,Object.assign({},l,{readOnly:a})))}))))};var m=Object(r.a)((function(e){return{paper:{padding:e.spacing(2)},fieldRoot:{marginTop:e.spacing()}}}))}}]);
//# sourceMappingURL=42.0e238285.chunk.js.map