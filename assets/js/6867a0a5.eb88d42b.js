/*! For license information please see 6867a0a5.eb88d42b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[258420],{688898:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>u,toc:()=>i});var t=n(824246),o=n(511151);const c={id:"core-components.dependencygraphtypes.renderlabelfunction",title:"DependencyGraphTypes.RenderLabelFunction",description:"API reference for DependencyGraphTypes.RenderLabelFunction"},a=void 0,u={unversionedId:"reference/core-components.dependencygraphtypes.renderlabelfunction",id:"reference/core-components.dependencygraphtypes.renderlabelfunction",title:"DependencyGraphTypes.RenderLabelFunction",description:"API reference for DependencyGraphTypes.RenderLabelFunction",source:"@site/../docs/reference/core-components.dependencygraphtypes.renderlabelfunction.md",sourceDirName:"reference",slug:"/reference/core-components.dependencygraphtypes.renderlabelfunction",permalink:"/docs/reference/core-components.dependencygraphtypes.renderlabelfunction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-components.dependencygraphtypes.renderlabelfunction.md",tags:[],version:"current",frontMatter:{id:"core-components.dependencygraphtypes.renderlabelfunction",title:"DependencyGraphTypes.RenderLabelFunction",description:"API reference for DependencyGraphTypes.RenderLabelFunction"}},s={},i=[];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-components",children:(0,t.jsx)(r.code,{children:"@backstage/core-components"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-components.dependencygraphtypes",children:(0,t.jsx)(r.code,{children:"DependencyGraphTypes"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-components.dependencygraphtypes.renderlabelfunction",children:(0,t.jsx)(r.code,{children:"RenderLabelFunction"})})]}),"\n",(0,t.jsx)(r.p,{children:"Custom React component for edge labels"}),"\n",(0,t.jsx)(r.p,{children:"Signature:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"type RenderLabelFunction<T = {}> = (props: RenderLabelProps<T>) => React.ReactNode;\n"})}),"\n",(0,t.jsxs)(r.p,{children:["References:"," ",(0,t.jsx)(r.a,{href:"/docs/reference/core-components.dependencygraphtypes.renderlabelprops",children:"RenderLabelProps"})]})]})}const p=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(f,e)})):f(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,a,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var i in c=Object(arguments[s]))n.call(c,i)&&(u[i]=c[i]);if(r){a=r(c);for(var f=0;f<a.length;f++)t.call(c,a[f])&&(u[a[f]]=c[a[f]])}}return u}},371426:(e,r,n)=>{n(862525);var t=n(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r.Fragment=c("react.fragment")}var a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,n){var t,c={},i=null,f=null;for(t in void 0!==n&&(i=""+n),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(f=r.ref),r)u.call(r,t)&&!s.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:o,type:e,key:i,ref:f,props:c,_owner:a.current}}r.jsx=i,r.jsxs=i},541535:(e,r,n)=>{var t=n(862525),o=60103,c=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var a=60109,u=60110,s=60112;r.Suspense=60113;var i=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),c=p("react.portal"),r.Fragment=p("react.fragment"),r.StrictMode=p("react.strict_mode"),r.Profiler=p("react.profiler"),a=p("react.provider"),u=p("react.context"),s=p("react.forward_ref"),r.Suspense=p("react.suspense"),i=p("react.memo"),f=p("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,r,n){this.props=e,this.context=r,this.refs=h,this.updater=n||y}function b(){}function v(e,r,n){this.props=e,this.context=r,this.refs=h,this.updater=n||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var g=v.prototype=new b;g.constructor=v,t(g,m.prototype),g.isPureReactComponent=!0;var _={current:null},j=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function R(e,r,n){var t,c={},a=null,u=null;if(null!=r)for(t in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(a=""+r.key),r)j.call(r,t)&&!O.hasOwnProperty(t)&&(c[t]=r[t]);var s=arguments.length-2;if(1===s)c.children=n;else if(1<s){for(var i=Array(s),f=0;f<s;f++)i[f]=arguments[f+2];c.children=i}if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===c[t]&&(c[t]=s[t]);return{$$typeof:o,type:e,key:a,ref:u,props:c,_owner:_.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function x(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,n,t,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s=!1;if(null===e)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case c:s=!0}}if(s)return a=a(s=e),e=""===t?"."+x(s,0):t,Array.isArray(a)?(n="",null!=e&&(n=e.replace(w,"$&/")+"/"),S(a,r,n,"",(function(e){return e}))):null!=a&&(k(a)&&(a=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(w,"$&/")+"/")+e)),r.push(a)),1;if(s=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var f=t+x(u=e[i],i);s+=S(u,r,n,f,a)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),i=0;!(u=e.next()).done;)s+=S(u=u.value,r,n,f=t+x(u,i++),a);else if("object"===u)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return s}function C(e,r,n){if(null==e)return e;var t=[],o=0;return S(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(d(321));return e}var F={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:C,forEach:function(e,r,n){C(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(d(143));return e}},r.Component=m,r.PureComponent=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,r.cloneElement=function(e,r,n){if(null==e)throw Error(d(267,e));var c=t({},e.props),a=e.key,u=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,s=_.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(f in r)j.call(r,f)&&!O.hasOwnProperty(f)&&(c[f]=void 0===r[f]&&void 0!==i?i[f]:r[f])}var f=arguments.length-2;if(1===f)c.children=n;else if(1<f){i=Array(f);for(var p=0;p<f;p++)i[p]=arguments[p+2];c.children=i}return{$$typeof:o,type:e.type,key:a,ref:u,props:c,_owner:s}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:u,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},r.createElement=R,r.createFactory=function(e){var r=R.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=k,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:E}},r.memo=function(e,r){return{$$typeof:i,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return $().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,n){return $().useReducer(e,r,n)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>u,ah:()=>c});var t=n(667294);const o=t.createContext({});function c(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const a={};function u({components:e,children:r,disableParentContext:n}){let u;return u=n?"function"==typeof e?e({}):e||a:c(e),t.createElement(o.Provider,{value:u},r)}}}]);