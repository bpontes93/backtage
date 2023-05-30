/*! For license information please see 22086a78.d510fd80.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[508681],{724738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(824246),o=n(511151);const a={id:"installation",title:"Datadog RUM Installation",sidebar_label:"Installation",description:"Adding Datadog Real User Monitoring (RUM) to Your App"},i=void 0,s={unversionedId:"integrations/datadog-rum/installation",id:"integrations/datadog-rum/installation",title:"Datadog RUM Installation",description:"Adding Datadog Real User Monitoring (RUM) to Your App",source:"@site/../docs/integrations/datadog-rum/installation.md",sourceDirName:"integrations/datadog-rum",slug:"/integrations/datadog-rum/installation",permalink:"/docs/integrations/datadog-rum/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/datadog-rum/installation.md",tags:[],version:"current",frontMatter:{id:"installation",title:"Datadog RUM Installation",sidebar_label:"Installation",description:"Adding Datadog Real User Monitoring (RUM) to Your App"},sidebar:"docs",previous:{title:"Discovery",permalink:"/docs/integrations/bitbucketServer/discovery"},next:{title:"Locations",permalink:"/docs/integrations/gerrit/locations"}},c={},u=[];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",pre:"pre",ul:"ul",li:"li"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Datadog Real User Monitoring (RUM) allows you to visualize and analyze the\nreal-time performance and user journeys of your application's individual users.\nThis is an option to profile and monitor the user experience of your Backstage\ninstallation."}),"\n",(0,r.jsxs)(t.p,{children:["There is a basic ",(0,r.jsx)(t.a,{href:"https://docs.datadoghq.com/real_user_monitoring/",children:"Datadog RUM"}),"\nintegration built into Backstage. You can enable it by adding the following to\nyour ",(0,r.jsx)(t.code,{children:"app-config.yaml"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"app:\n  datadogRum:\n    clientToken: '123456789'\n    applicationId: qwerty\n  #   site: datadoghq.eu\n  #   env: 'staging'\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If your ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/e0506af8fc54074a160fb91c83d6cae8172d3bb3/app-config.yaml#L5",children:(0,r.jsx)(t.code,{children:"app-config.yaml"})})," file does not have this configuration, you may have to adjust your ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/e0506af8fc54074a160fb91c83d6cae8172d3bb3/packages/app/public/index.html#L69",children:(0,r.jsx)(t.code,{children:"packages/app/public/index.html"})})," to include the Datadog RUM ",(0,r.jsx)(t.code,{children:"init()"})," section manually."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"clientToken"})," and ",(0,r.jsx)(t.code,{children:"applicationId"})," are generated from the Datadog RUM page\nfollowing\n",(0,r.jsx)(t.a,{href:"https://docs.datadoghq.com/real_user_monitoring/browser/",children:"these instructions"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"There are two optional arguments:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"site"}),": The Datadog site of your organization; defaults to ",(0,r.jsx)(t.code,{children:"datadoghq.com"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"env"}),": The application environment for Datadog events (no default)"]}),"\n"]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var a,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var u in a=Object(arguments[c]))n.call(a,u)&&(s[u]=a[u]);if(t){i=t(a);for(var l=0;l<i.length;l++)r.call(a,i[l])&&(s[i[l]]=a[i[l]])}}return s}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,a={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:a,_owner:i.current}}t.jsx=u,t.jsxs=u},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,s=60110,c=60112;t.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),i=f("react.provider"),s=f("react.context"),c=f("react.forward_ref"),t.Suspense=f("react.suspense"),u=f("react.memo"),l=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}function m(){}function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=g.prototype;var v=b.prototype=new m;v.constructor=b,r(v,g.prototype),v.isPureReactComponent=!0;var _={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,a={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,r)&&!k.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:_.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var R=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===r?"."+O(c,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(R,"$&/")+"/"),S(i,t,n,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(R,"$&/")+"/")+e)),t.push(i)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=r+O(s=e[u],u);c+=S(s,t,n,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)c+=S(s=s.value,t,n,l=r+O(s,u++),i);else if("object"===s)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function C(e,t,n){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function U(){var e=$.current;if(null===e)throw Error(p(321));return e}var M={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(p(143));return e}},t.Component=g,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var a=r({},e.props),i=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=_.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)j.call(t,l)&&!k.hasOwnProperty(l)&&(a[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){u=Array(l);for(var f=0;f<l;f++)u[f]=arguments[f+2];a.children=u}return{$$typeof:o,type:e.type,key:i,ref:s,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return U().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,n){return U().useReducer(e,t,n)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>a});var r=n(667294);const o=r.createContext({});function a(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||i:a(e),r.createElement(o.Provider,{value:s},t)}}}]);