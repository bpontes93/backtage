/*! For license information please see fbb29eb3.3bf4123a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[477661],{400459:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=r(824246),a=r(511151);const o={id:"plugin-catalog-backend-module-ldap",title:"@backstage/plugin-catalog-backend-module-ldap",description:"API Reference for @backstage/plugin-catalog-backend-module-ldap"},i=void 0,s={unversionedId:"reference/plugin-catalog-backend-module-ldap",id:"reference/plugin-catalog-backend-module-ldap",title:"@backstage/plugin-catalog-backend-module-ldap",description:"API Reference for @backstage/plugin-catalog-backend-module-ldap",source:"@site/../docs/reference/plugin-catalog-backend-module-ldap.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-ldap",permalink:"/docs/reference/plugin-catalog-backend-module-ldap",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-ldap.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-ldap",title:"@backstage/plugin-catalog-backend-module-ldap",description:"API Reference for @backstage/plugin-catalog-backend-module-ldap"}},l={},c=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function d(e){const n=Object.assign({p:"p",a:"a",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-catalog-backend-module-ldap"})})]}),"\n",(0,t.jsx)(n.p,{children:"A Backstage catalog backend module that helps integrate towards LDAP"}),"\n",(0,t.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Class"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldapclient",children:"LdapClient"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.p,{children:["Basic wrapper for the ",(0,t.jsx)(n.code,{children:"ldapjs"})," library."]}),(0,t.jsx)(n.p,{children:"Helps out with promisifying calls, paging, binding etc."})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovider",children:"LdapOrgEntityProvider"})}),(0,t.jsx)(n.td,{children:"Reads user and group entries out of an LDAP service, and provides them as User and Group entities for the catalog."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgreaderprocessor",children:"LdapOrgReaderProcessor"})}),(0,t.jsx)(n.td,{children:"Extracts teams and users out of an LDAP server."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Function"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.defaultgrouptransformer",children:"defaultGroupTransformer(vendor, config, entry)"})}),(0,t.jsx)(n.td,{children:"The default implementation of the transformation from an LDAP entry to a Group entity."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.defaultusertransformer",children:"defaultUserTransformer(vendor, config, entry)"})}),(0,t.jsx)(n.td,{children:"The default implementation of the transformation from an LDAP entry to a User entity."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.mapstringattr",children:"mapStringAttr(entry, vendor, attributeName, setter)"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.p,{children:"Maps a single-valued attribute to a consumer."}),(0,t.jsx)(n.p,{children:"This helper can be useful when implementing a user or group transformer."})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.readldapconfig",children:"readLdapConfig(config)"})}),(0,t.jsx)(n.td,{children:"Parses configuration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.readldaporg",children:"readLdapOrg(client, userConfig, groupConfig, options)"})}),(0,t.jsx)(n.td,{children:"Reads users and groups out of an LDAP provider."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Interface"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovideroptions",children:"LdapOrgEntityProviderOptions"})}),(0,t.jsxs)(n.td,{children:["Options for ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovider",children:"LdapOrgEntityProvider"}),"."]})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldap_dn_annotation",children:"LDAP_DN_ANNOTATION"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.p,{children:"The name of an entity annotation, that references the DN of the LDAP object it was ingested from."}),(0,t.jsx)(n.p,{children:"The DN is the fully qualified name that identifies the item; for example, for an item with the DN uid=john,ou=people,ou=spotify,dc=spotify,dc=net the generated entity would have this annotation, with that full string as its value."})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldap_rdn_annotation",children:"LDAP_RDN_ANNOTATION"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.p,{children:"The name of an entity annotation, that references the RDN of the LDAP object it was ingested from."}),(0,t.jsx)(n.p,{children:'The RDN is the name of the leftmost attribute that identifies the item; for example, for an item with the fully qualified DN uid=john,ou=people,ou=spotify,dc=spotify,dc=net the generated entity would have this annotation, with the value "john".'})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldap_uuid_annotation",children:"LDAP_UUID_ANNOTATION"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.p,{children:"The name of an entity annotation, that references the UUID of the LDAP object it was ingested from."}),(0,t.jsx)(n.p,{children:"The UUID is the globally unique ID that identifies the item; for example, for an item with the UUID 76ef928a-b251-1037-9840-d78227f36a7e, the generated entity would have this annotation, with that full string as its value."})]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type Alias"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.bindconfig",children:"BindConfig"})}),(0,t.jsx)(n.td,{children:"The settings to use for the a command."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.groupconfig",children:"GroupConfig"})}),(0,t.jsx)(n.td,{children:"The settings that govern the reading and interpretation of groups."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.grouptransformer",children:"GroupTransformer"})}),(0,t.jsx)(n.td,{children:"Customize the ingested Group entity"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldapproviderconfig",children:"LdapProviderConfig"})}),(0,t.jsx)(n.td,{children:"The configuration parameters for a single LDAP provider."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldapvendor",children:"LdapVendor"})}),(0,t.jsx)(n.td,{children:"An LDAP Vendor handles unique nuances between different vendors."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.tlsconfig",children:"TLSConfig"})}),(0,t.jsx)(n.td,{children:"TLS settings"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.userconfig",children:"UserConfig"})}),(0,t.jsx)(n.td,{children:"The settings that govern the reading and interpretation of users."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.usertransformer",children:"UserTransformer"})}),(0,t.jsx)(n.td,{children:"Customize the ingested User entity"})]})]})]})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(a){return!1}}()?Object.assign:function(e,a){for(var o,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))r.call(o,c)&&(s[c]=o[c]);if(n){i=n(o);for(var d=0;d<i.length;d++)t.call(o,i[d])&&(s[i[d]]=o[i[d]])}}return s}},371426:(e,n,r)=>{r(862525);var t=r(827378),a=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),n.Fragment=o("react.fragment")}var i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,o={},c=null,d=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,t)&&!l.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:a,type:e,key:c,ref:d,props:o,_owner:i.current}}n.jsx=c,n.jsxs=c},541535:(e,n,r)=>{var t=r(862525),a=60103,o=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var i=60109,s=60110,l=60112;n.Suspense=60113;var c=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),o=u("react.portal"),n.Fragment=u("react.fragment"),n.StrictMode=u("react.strict_mode"),n.Profiler=u("react.profiler"),i=u("react.provider"),s=u("react.context"),l=u("react.forward_ref"),n.Suspense=u("react.suspense"),c=u("react.memo"),d=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,n,r){this.props=e,this.context=n,this.refs=g,this.updater=r||p}function x(){}function m(e,n,r){this.props=e,this.context=n,this.refs=g,this.updater=r||p}j.prototype.isReactComponent={},j.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,n,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=j.prototype;var y=m.prototype=new x;y.constructor=m,t(y,j.prototype),y.isPureReactComponent=!0;var b={current:null},v=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function _(e,n,r){var t,o={},i=null,s=null;if(null!=n)for(t in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(i=""+n.key),n)v.call(n,t)&&!k.hasOwnProperty(t)&&(o[t]=n[t]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];o.children=c}if(e&&e.defaultProps)for(t in l=e.defaultProps)void 0===o[t]&&(o[t]=l[t]);return{$$typeof:a,type:e,key:i,ref:s,props:o,_owner:b.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var O=/\/+/g;function P(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function C(e,n,r,t,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return i=i(l=e),e=""===t?"."+P(l,0):t,Array.isArray(i)?(r="",null!=e&&(r=e.replace(O,"$&/")+"/"),C(i,n,r,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,n){return{$$typeof:a,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+e)),n.push(i)),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var c=0;c<e.length;c++){var d=t+P(s=e[c],c);l+=C(s,n,r,d,i)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),c=0;!(s=e.next()).done;)l+=C(s=s.value,n,r,d=t+P(s,c++),i);else if("object"===s)throw n=""+e,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return l}function A(e,n,r){if(null==e)return e;var t=[],a=0;return C(e,t,"","",(function(e){return n.call(r,e,a++)})),t}function D(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function S(){var e=T.current;if(null===e)throw Error(h(321));return e}var E={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:t};n.Children={map:A,forEach:function(e,n,r){A(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return A(e,(function(){n++})),n},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(h(143));return e}},n.Component=j,n.PureComponent=m,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E,n.cloneElement=function(e,n,r){if(null==e)throw Error(h(267,e));var o=t({},e.props),i=e.key,s=e.ref,l=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,l=b.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in n)v.call(n,d)&&!k.hasOwnProperty(d)&&(o[d]=void 0===n[d]&&void 0!==c?c[d]:n[d])}var d=arguments.length-2;if(1===d)o.children=r;else if(1<d){c=Array(d);for(var u=0;u<d;u++)c[u]=arguments[u+2];o.children=c}return{$$typeof:a,type:e.type,key:i,ref:s,props:o,_owner:l}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:s,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},n.createElement=_,n.createFactory=function(e){var n=_.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=w,n.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:D}},n.memo=function(e,n){return{$$typeof:c,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return S().useCallback(e,n)},n.useContext=function(e,n){return S().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return S().useEffect(e,n)},n.useImperativeHandle=function(e,n,r){return S().useImperativeHandle(e,n,r)},n.useLayoutEffect=function(e,n){return S().useLayoutEffect(e,n)},n.useMemo=function(e,n){return S().useMemo(e,n)},n.useReducer=function(e,n,r){return S().useReducer(e,n,r)},n.useRef=function(e){return S().useRef(e)},n.useState=function(e){return S().useState(e)},n.version="17.0.2"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Zo:()=>s,ah:()=>o});var t=r(667294);const a=t.createContext({});function o(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function s({components:e,children:n,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||i:o(e),t.createElement(a.Provider,{value:s},n)}}}]);