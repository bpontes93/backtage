/*! For license information please see bbbbc1d4.4e3b0abd.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[338319],{610629:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(824246),o=r(511151);const i={id:"provider",title:"Microsoft Azure Authentication Provider",sidebar_label:"Azure",description:"Adding Microsoft Azure as an authentication provider in Backstage"},a=void 0,c={unversionedId:"auth/microsoft/provider",id:"auth/microsoft/provider",title:"Microsoft Azure Authentication Provider",description:"Adding Microsoft Azure as an authentication provider in Backstage",source:"@site/../docs/auth/microsoft/provider.md",sourceDirName:"auth/microsoft",slug:"/auth/microsoft/provider",permalink:"/docs/auth/microsoft/provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/microsoft/provider.md",tags:[],version:"current",frontMatter:{id:"provider",title:"Microsoft Azure Authentication Provider",sidebar_label:"Azure",description:"Adding Microsoft Azure as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"Atlassian",permalink:"/docs/auth/atlassian/provider"},next:{title:"Azure Easy Auth",permalink:"/docs/auth/microsoft/easy-auth"}},s={},u=[{value:"Create an App Registration on Azure",id:"create-an-app-registration-on-azure",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Outbound Network Access",id:"outbound-network-access",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2}];function l(e){const t=Object.assign({p:"p",code:"code",h2:"h2",ol:"ol",li:"li",a:"a",ul:"ul",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The Backstage ",(0,n.jsx)(t.code,{children:"core-plugin-api"})," package comes with a Microsoft authentication\nprovider that can authenticate users using Azure OAuth."]}),"\n",(0,n.jsx)(t.h2,{id:"create-an-app-registration-on-azure",children:"Create an App Registration on Azure"}),"\n",(0,n.jsx)(t.p,{children:"To support Azure authentication, you must create an App Registration:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Log in to the ",(0,n.jsx)(t.a,{href:"https://portal.azure.com/",children:"Azure Portal"})]}),"\n",(0,n.jsxs)(t.li,{children:["Create an\n",(0,n.jsx)(t.a,{href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview",children:"Active Directory Tenant"}),",\nif one does not yet exist"]}),"\n",(0,n.jsxs)(t.li,{children:["Navigate to\n",(0,n.jsx)(t.a,{href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps",children:"Azure Active Directory > App Registrations"})]}),"\n",(0,n.jsxs)(t.li,{children:["Register an application\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Name: Backstage (or your custom app name)"}),"\n",(0,n.jsxs)(t.li,{children:["Redirect URI: Web >\n",(0,n.jsx)(t.code,{children:"http://localhost:7007/api/auth/microsoft/handler/frame"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Navigate to ",(0,n.jsx)(t.strong,{children:"Certificates & secrets > New client secret"})," to create a secret"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(t.p,{children:["The provider configuration can then be added to your ",(0,n.jsx)(t.code,{children:"app-config.yaml"})," under the\nroot ",(0,n.jsx)(t.code,{children:"auth"})," configuration:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"auth:\n  environment: development\n  providers:\n    microsoft:\n      development:\n        clientId: ${AUTH_MICROSOFT_CLIENT_ID}\n        clientSecret: ${AUTH_MICROSOFT_CLIENT_SECRET}\n        tenantId: ${AUTH_MICROSOFT_TENANT_ID}\n"})}),"\n",(0,n.jsx)(t.p,{children:"The Microsoft provider is a structure with three configuration keys:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"clientId"}),": Application (client) ID, found on App Registration > Overview"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"clientSecret"}),": Secret, found on App Registration > Certificates & secrets"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"tenantId"}),": Directory (tenant) ID, found on App Registration > Overview"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"outbound-network-access",children:"Outbound Network Access"}),"\n",(0,n.jsx)(t.p,{children:"If your environment has restrictions on outgoing access (e.g. through\nfirewall rules), make sure your Backstage backend has access to the following\nhosts:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"login.microsoftonline.com"}),", to get and exchange authorization codes and access\ntokens"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"graph.microsoft.com"}),", to fetch user profile information (as seen\nin ",(0,n.jsx)(t.a,{href:"https://github.com/seanfisher/passport-microsoft/blob/0456aa9bce05579c18e77f51330176eb26373658/lib/strategy.js#L93-L95",children:"this source\ncode"}),").\nIf this host is unreachable, users may see an ",(0,n.jsx)(t.code,{children:"Authentication failed, failed to fetch user profile"})," error when they attempt to log in."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"adding-the-provider-to-the-backstage-frontend",children:"Adding the provider to the Backstage frontend"}),"\n",(0,n.jsxs)(t.p,{children:["To add the provider to the frontend, add the ",(0,n.jsx)(t.code,{children:"microsoftAuthApiRef"})," reference and\n",(0,n.jsx)(t.code,{children:"SignInPage"})," component as shown in\n",(0,n.jsx)(t.a,{href:"/docs/auth/#adding-the-provider-to-the-sign-in-page",children:"Adding the provider to the sign-in page"}),"."]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var u in i=Object(arguments[s]))r.call(i,u)&&(c[u]=i[u]);if(t){a=t(i);for(var l=0;l<a.length;l++)n.call(i,a[l])&&(c[a[l]]=i[a[l]])}}return c}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,i={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,n)&&!s.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:l,props:i,_owner:a.current}}t.jsx=u,t.jsxs=u},541535:(e,t,r)=>{var n=r(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,c=60110,s=60112;t.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),a=f("react.provider"),c=f("react.context"),s=f("react.forward_ref"),t.Suspense=f("react.suspense"),u=f("react.memo"),l=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}function g(){}function m(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var j=m.prototype=new g;j.constructor=m,n(j,v.prototype),j.isPureReactComponent=!0;var b={current:null},_=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,r){var n,i={},a=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)_.call(t,n)&&!x.hasOwnProperty(n)&&(i[n]=t[n]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:o,type:e,key:a,ref:c,props:i,_owner:b.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case i:s=!0}}if(s)return a=a(s=e),e=""===n?"."+O(s,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(w,"$&/")+"/"),C(a,t,r,"",(function(e){return e}))):null!=a&&(k(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(w,"$&/")+"/")+e)),t.push(a)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=n+O(c=e[u],u);s+=C(c,t,r,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(c=e.next()).done;)s+=C(c=c.value,t,r,l=n+O(c,u++),a);else if("object"===c)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function R(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function I(){var e=E.current;if(null===e)throw Error(p(321));return e}var P={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:R,forEach:function(e,t,r){R(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(p(143));return e}},t.Component=v,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,r){if(null==e)throw Error(p(267,e));var i=n({},e.props),a=e.key,c=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,s=b.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)_.call(t,l)&&!x.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){u=Array(l);for(var f=0;f<l;f++)u[f]=arguments[f+2];i.children=u}return{$$typeof:o,type:e.type,key:a,ref:c,props:i,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=A,t.createFactory=function(e){var t=A.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:S}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return I().useCallback(e,t)},t.useContext=function(e,t){return I().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return I().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return I().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return I().useLayoutEffect(e,t)},t.useMemo=function(e,t){return I().useMemo(e,t)},t.useReducer=function(e,t,r){return I().useReducer(e,t,r)},t.useRef=function(e){return I().useRef(e)},t.useState=function(e){return I().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>c,ah:()=>i});var n=r(667294);const o=n.createContext({});function i(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function c({components:e,children:t,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||a:i(e),n.createElement(o.Provider,{value:c},t)}}}]);