/*! For license information please see 44ea5464.79f4e9b9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[529489],{845094:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var n=t(824246),o=t(511151);const c={id:"plugin-catalog-backend.placeholderresolverresolveurl",title:"PlaceholderResolverResolveUrl",description:"API reference for PlaceholderResolverResolveUrl"},l=void 0,a={unversionedId:"reference/plugin-catalog-backend.placeholderresolverresolveurl",id:"reference/plugin-catalog-backend.placeholderresolverresolveurl",title:"PlaceholderResolverResolveUrl",description:"API reference for PlaceholderResolverResolveUrl",source:"@site/../docs/reference/plugin-catalog-backend.placeholderresolverresolveurl.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend.placeholderresolverresolveurl",permalink:"/docs/reference/plugin-catalog-backend.placeholderresolverresolveurl",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend.placeholderresolverresolveurl.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend.placeholderresolverresolveurl",title:"PlaceholderResolverResolveUrl",description:"API reference for PlaceholderResolverResolveUrl"}},u={},s=[];function i(e){const r=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-catalog-backend"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend.placeholderresolverresolveurl",children:(0,n.jsx)(r.code,{children:"PlaceholderResolverResolveUrl"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.b,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type PlaceholderResolverResolveUrl = (url: string, base: string) => string;\n"})})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(i,e)})):i(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,l,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var s in c=Object(arguments[u]))t.call(c,s)&&(a[s]=c[s]);if(r){l=r(c);for(var i=0;i<l.length;i++)n.call(c,l[i])&&(a[l[i]]=c[l[i]])}}return a}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r.Fragment=c("react.fragment")}var l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,c={},s=null,i=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(i=r.ref),r)a.call(r,n)&&!u.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:i,props:c,_owner:l.current}}r.jsx=s,r.jsxs=s},541535:(e,r,t)=>{var n=t(862525),o=60103,c=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var l=60109,a=60110,u=60112;r.Suspense=60113;var s=60115,i=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),c=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),l=f("react.provider"),a=f("react.context"),u=f("react.forward_ref"),r.Suspense=f("react.suspense"),s=f("react.memo"),i=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function h(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||y}function g(){}function b(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=h.prototype;var m=b.prototype=new g;m.constructor=b,n(m,h.prototype),m.isPureReactComponent=!0;var _={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function R(e,r,t){var n,c={},l=null,a=null;if(null!=r)for(n in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(l=""+r.key),r)j.call(r,n)&&!k.hasOwnProperty(n)&&(c[n]=r[n]);var u=arguments.length-2;if(1===u)c.children=t;else if(1<u){for(var s=Array(u),i=0;i<u;i++)s[i]=arguments[i+2];c.children=s}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===c[n]&&(c[n]=u[n]);return{$$typeof:o,type:e,key:l,ref:a,props:c,_owner:_.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function P(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,l){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case c:u=!0}}if(u)return l=l(u=e),e=""===n?"."+P(u,0):n,Array.isArray(l)?(t="",null!=e&&(t=e.replace(w,"$&/")+"/"),S(l,r,t,"",(function(e){return e}))):null!=l&&(O(l)&&(l=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(l,t+(!l.key||u&&u.key===l.key?"":(""+l.key).replace(w,"$&/")+"/")+e)),r.push(l)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var i=n+P(a=e[s],s);u+=S(a,r,t,i,l)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),s=0;!(a=e.next()).done;)u+=S(a=a.value,r,t,i=n+P(a,s++),l);else if("object"===a)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return u}function x(e,r,t){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function $(){var e=E.current;if(null===e)throw Error(d(321));return e}var U={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:x,forEach:function(e,r,t){x(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return x(e,(function(){r++})),r},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},r.Component=h,r.PureComponent=b,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var c=n({},e.props),l=e.key,a=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,u=_.current),void 0!==r.key&&(l=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(i in r)j.call(r,i)&&!k.hasOwnProperty(i)&&(c[i]=void 0===r[i]&&void 0!==s?s[i]:r[i])}var i=arguments.length-2;if(1===i)c.children=t;else if(1<i){s=Array(i);for(var f=0;f<i;f++)s[f]=arguments[f+2];c.children=s}return{$$typeof:o,type:e.type,key:l,ref:a,props:c,_owner:u}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:a,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},r.createElement=R,r.createFactory=function(e){var r=R.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:u,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:i,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:s,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>a,ah:()=>c});var n=t(667294);const o=n.createContext({});function c(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const l={};function a({components:e,children:r,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||l:c(e),n.createElement(o.Provider,{value:a},r)}}}]);