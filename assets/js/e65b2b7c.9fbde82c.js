/*! For license information please see e65b2b7c.9fbde82c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[414075],{299862:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=t(824246),o=t(511151);const s={id:"plugin-octopus-deploy.octopusdeployclient.getreleaseprogression",title:"OctopusDeployClient.getReleaseProgression()",description:"API reference for OctopusDeployClient.getReleaseProgression()"},c=void 0,i={unversionedId:"reference/plugin-octopus-deploy.octopusdeployclient.getreleaseprogression",id:"reference/plugin-octopus-deploy.octopusdeployclient.getreleaseprogression",title:"OctopusDeployClient.getReleaseProgression()",description:"API reference for OctopusDeployClient.getReleaseProgression()",source:"@site/../docs/reference/plugin-octopus-deploy.octopusdeployclient.getreleaseprogression.md",sourceDirName:"reference",slug:"/reference/plugin-octopus-deploy.octopusdeployclient.getreleaseprogression",permalink:"/docs/reference/plugin-octopus-deploy.octopusdeployclient.getreleaseprogression",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-octopus-deploy.octopusdeployclient.getreleaseprogression.md",tags:[],version:"current",frontMatter:{id:"plugin-octopus-deploy.octopusdeployclient.getreleaseprogression",title:"OctopusDeployClient.getReleaseProgression()",description:"API reference for OctopusDeployClient.getReleaseProgression()"}},u={},l=[{value:"Parameters",id:"parameters",level:2}];function a(e){const r=Object.assign({p:"p",a:"a",code:"code",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-octopus-deploy",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-octopus-deploy"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-octopus-deploy.octopusdeployclient",children:(0,n.jsx)(r.code,{children:"OctopusDeployClient"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-octopus-deploy.octopusdeployclient.getreleaseprogression",children:(0,n.jsx)(r.code,{children:"getReleaseProgression"})})]}),"\n",(0,n.jsx)(r.p,{children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"getReleaseProgression(opts: {\n        projectReference: ProjectReference;\n        releaseHistoryCount: number;\n    }): Promise<OctopusProgression>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"opts"}),(0,n.jsxs)(r.td,{children:["{ projectReference: ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-octopus-deploy.projectreference",children:"ProjectReference"}),"; releaseHistoryCount: number; }"]}),(0,n.jsx)(r.td,{})]})})]}),"\n",(0,n.jsx)(r.p,{children:"Returns:"}),"\n",(0,n.jsxs)(r.p,{children:["Promise<",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-octopus-deploy.octopusprogression",children:"OctopusProgression"}),">"]})]})}const p=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var s,c,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var l in s=Object(arguments[u]))t.call(s,l)&&(i[l]=s[l]);if(r){c=r(s);for(var a=0;a<c.length;a++)n.call(s,c[a])&&(i[c[a]]=s[c[a]])}}return i}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),r.Fragment=s("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,s={},l=null,a=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)i.call(r,n)&&!u.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:l,ref:a,props:s,_owner:c.current}}r.jsx=l,r.jsxs=l},541535:(e,r,t)=>{var n=t(862525),o=60103,s=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var c=60109,i=60110,u=60112;r.Suspense=60113;var l=60115,a=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),s=p("react.portal"),r.Fragment=p("react.fragment"),r.StrictMode=p("react.strict_mode"),r.Profiler=p("react.profiler"),c=p("react.provider"),i=p("react.context"),u=p("react.forward_ref"),r.Suspense=p("react.suspense"),l=p("react.memo"),a=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}function m(){}function v(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=g.prototype;var j=v.prototype=new m;j.constructor=v,n(j,g.prototype),j.isPureReactComponent=!0;var b={current:null},_=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function x(e,r,t){var n,s={},c=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(c=""+r.key),r)_.call(r,n)&&!O.hasOwnProperty(n)&&(s[n]=r[n]);var u=arguments.length-2;if(1===u)s.children=t;else if(1<u){for(var l=Array(u),a=0;a<u;a++)l[a]=arguments[a+2];s.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===s[n]&&(s[n]=u[n]);return{$$typeof:o,type:e,key:c,ref:i,props:s,_owner:b.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function k(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function w(e,r,t,n,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case s:u=!0}}if(u)return c=c(u=e),e=""===n?"."+k(u,0):n,Array.isArray(c)?(t="",null!=e&&(t=e.replace(C,"$&/")+"/"),w(c,r,t,"",(function(e){return e}))):null!=c&&(P(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,t+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(C,"$&/")+"/")+e)),r.push(c)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var a=n+k(i=e[l],l);u+=w(i,r,t,a,c)}else if(a=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof a)for(e=a.call(e),l=0;!(i=e.next()).done;)u+=w(i=i.value,r,t,a=n+k(i,l++),c);else if("object"===i)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return u}function R(e,r,t){if(null==e)return e;var n=[],o=0;return w(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function S(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function $(){var e=E.current;if(null===e)throw Error(d(321));return e}var D={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:R,forEach:function(e,r,t){R(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return R(e,(function(){r++})),r},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error(d(143));return e}},r.Component=g,r.PureComponent=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var s=n({},e.props),c=e.key,i=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,u=b.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in r)_.call(r,a)&&!O.hasOwnProperty(a)&&(s[a]=void 0===r[a]&&void 0!==l?l[a]:r[a])}var a=arguments.length-2;if(1===a)s.children=t;else if(1<a){l=Array(a);for(var p=0;p<a;p++)l[p]=arguments[p+2];s.children=l}return{$$typeof:o,type:e.type,key:c,ref:i,props:s,_owner:u}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:i,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=x,r.createFactory=function(e){var r=x.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:u,render:e}},r.isValidElement=P,r.lazy=function(e){return{$$typeof:a,_payload:{_status:-1,_result:e},_init:S}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>i,ah:()=>s});var n=t(667294);const o=n.createContext({});function s(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function i({components:e,children:r,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||c:s(e),n.createElement(o.Provider,{value:i},r)}}}]);