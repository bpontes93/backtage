/*! For license information please see f9861757.f6b0f218.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[152853],{248006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var r=n(824246),o=n(511151);const c={id:"plugin-catalog-backend.catalogprocessingengine",title:"CatalogProcessingEngine",description:"API reference for CatalogProcessingEngine"},a=void 0,i={unversionedId:"reference/plugin-catalog-backend.catalogprocessingengine",id:"reference/plugin-catalog-backend.catalogprocessingengine",title:"CatalogProcessingEngine",description:"API reference for CatalogProcessingEngine",source:"@site/../docs/reference/plugin-catalog-backend.catalogprocessingengine.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend.catalogprocessingengine",permalink:"/docs/reference/plugin-catalog-backend.catalogprocessingengine",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend.catalogprocessingengine.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend.catalogprocessingengine",title:"CatalogProcessingEngine",description:"API reference for CatalogProcessingEngine"}},s={},u=[{value:"Methods",id:"methods",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-backend"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessingengine",children:(0,r.jsx)(t.code,{children:"CatalogProcessingEngine"})})]}),"\n",(0,r.jsx)(t.p,{children:"Represents the engine that drives the processing loops. Some backend instances may choose to not call start, if they focus only on API interactions."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.b,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export interface CatalogProcessingEngine \n"})}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessingengine.start",children:"start()"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessingengine.stop",children:"stop()"})}),(0,r.jsx)(t.td,{})]})]})]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,a,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var u in c=Object(arguments[s]))n.call(c,u)&&(i[u]=c[u]);if(t){a=t(c);for(var l=0;l<a.length;l++)r.call(c,a[l])&&(i[a[l]]=c[a[l]])}}return i}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),t.Fragment=c("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,c={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:c,_owner:a.current}}t.jsx=u,t.jsxs=u},541535:(e,t,n)=>{var r=n(862525),o=60103,c=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,i=60110,s=60112;t.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),c=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),a=f("react.provider"),i=f("react.context"),s=f("react.forward_ref"),t.Suspense=f("react.suspense"),u=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||g}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var m=v.prototype=new b;m.constructor=v,r(m,y.prototype),m.isPureReactComponent=!0;var j={current:null},_=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,c={},a=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)_.call(t,r)&&!k.hasOwnProperty(r)&&(c[r]=t[r]);var s=arguments.length-2;if(1===s)c.children=n;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];c.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===c[r]&&(c[r]=s[r]);return{$$typeof:o,type:e,key:a,ref:i,props:c,_owner:j.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,n,r,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case c:s=!0}}if(s)return a=a(s=e),e=""===r?"."+C(s,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(w,"$&/")+"/"),E(a,t,n,"",(function(e){return e}))):null!=a&&(O(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(w,"$&/")+"/")+e)),t.push(a)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=r+C(i=e[u],u);s+=E(i,t,n,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(i=e.next()).done;)s+=E(i=i.value,t,n,l=r+C(i,u++),a);else if("object"===i)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function P(e,t,n){if(null==e)return e;var r=[],o=0;return E(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(d(321));return e}var I={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},t.Component=y,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error(d(267,e));var c=r({},e.props),a=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)_.call(t,l)&&!k.hasOwnProperty(l)&&(c[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)c.children=n;else if(1<l){u=Array(l);for(var f=0;f<l;f++)u[f]=arguments[f+2];c.children=u}return{$$typeof:o,type:e.type,key:a,ref:i,props:c,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:S}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return $().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,n){return $().useReducer(e,t,n)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>c});var r=n(667294);const o=r.createContext({});function c(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||a:c(e),r.createElement(o.Provider,{value:i},t)}}}]);