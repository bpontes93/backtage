/*! For license information please see 70a198d6.dfa2d223.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[83364],{596829:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(824246),o=r(511151);const i={id:"provider",title:"OAuth 2 Proxy Provider",sidebar_label:"OAuth 2 Custom Proxy",description:"Adding OAuth2Proxy as an authentication provider in Backstage"},a=void 0,s={unversionedId:"auth/oauth2-proxy/provider",id:"auth/oauth2-proxy/provider",title:"OAuth 2 Proxy Provider",description:"Adding OAuth2Proxy as an authentication provider in Backstage",source:"@site/../docs/auth/oauth2-proxy/provider.md",sourceDirName:"auth/oauth2-proxy",slug:"/auth/oauth2-proxy/provider",permalink:"/docs/auth/oauth2-proxy/provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/oauth2-proxy/provider.md",tags:[],version:"current",frontMatter:{id:"provider",title:"OAuth 2 Proxy Provider",sidebar_label:"OAuth 2 Custom Proxy",description:"Adding OAuth2Proxy as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"Okta",permalink:"/docs/auth/okta/provider"},next:{title:"OneLogin",permalink:"/docs/auth/onelogin/provider"}},u={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2}];function l(e){const t=Object.assign({p:"p",code:"code",a:"a",h2:"h2",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The Backstage ",(0,n.jsx)(t.code,{children:"@backstage/plugin-auth-backend"})," package comes with an\n",(0,n.jsx)(t.code,{children:"oauth2Proxy"})," authentication provider that can authenticate users by using a\n",(0,n.jsx)(t.a,{href:"https://github.com/oauth2-proxy/oauth2-proxy",children:"oauth2-proxy"})," in front of an\nactual Backstage instance. This enables to reuse existing authentications within\na cluster. In general the ",(0,n.jsx)(t.code,{children:"oauth2-proxy"})," supports all OpenID Connect providers,\nfor more details check this\n",(0,n.jsx)(t.a,{href:"https://oauth2-proxy.github.io/oauth2-proxy/docs/configuration/oauth_provider",children:"list of supported providers"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(t.p,{children:["The provider configuration can be added to your ",(0,n.jsx)(t.code,{children:"app-config.yaml"})," under the root\n",(0,n.jsx)(t.code,{children:"auth"})," configuration:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"auth:\n  providers:\n    oauth2Proxy: {}\n"})}),"\n",(0,n.jsx)(t.p,{children:"Right now no configuration options are supported, but the empty object is needed\nto enable the provider in the auth backend."}),"\n",(0,n.jsxs)(t.p,{children:["To use the ",(0,n.jsx)(t.code,{children:"oauth2Proxy"})," provider you must also configure it with a sign-in resolver.\nFor more information about the sign-in process in general, see the\n",(0,n.jsx)(t.a,{href:"/docs/auth/identity-resolver",children:"Sign-in Identities and Resolvers"})," documentation."]}),"\n",(0,n.jsxs)(t.p,{children:["For the ",(0,n.jsx)(t.code,{children:"oauth2Proxy"})," provider, the sign-in result is quite different than other providers.\nBecause it's a proxy provider that can be configured to forward information through\narbitrary headers, the auth result simply just gives you access to the HTTP headers\nof the incoming request. Using these you can either extract the information directly,\nor grab ID or access tokens to look up additional information and/or validate the request."]}),"\n",(0,n.jsx)(t.p,{children:"A simple sign-in resolver might for example look like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"providerFactories: {\n  ...defaultAuthProviderFactories,\n  oauth2Proxy: providers.oauth2Proxy.create({\n    signIn: {\n      async resolver({ result }, ctx) {\n        const name = result.getHeader('x-forwarded-user');\n        if (!name) {\n          throw new Error('Request did not contain a user')\n        }\n        return ctx.signInWithCatalogUser({\n          entityRef: { name },\n        });\n      },\n    },\n  }),\n},\n"})}),"\n",(0,n.jsx)(t.h2,{id:"adding-the-provider-to-the-backstage-frontend",children:"Adding the provider to the Backstage frontend"}),"\n",(0,n.jsxs)(t.p,{children:["It is recommended to use the ",(0,n.jsx)(t.code,{children:"ProxiedSignInPage"})," for this provider, which is\ninstalled in ",(0,n.jsx)(t.code,{children:"packages/app/src/App.tsx"})," like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:"/* highlight-add-next-line */\nimport { ProxiedSignInPage } from '@backstage/core-components';\n\nconst app = createApp({\n  /* highlight-add-start */\n  components: {\n    SignInPage: props => (\n      <ProxiedSignInPage {...props} provider=\"oauth2Proxy\" />\n    ),\n  },\n  /* highlight-add-end */\n  // ..\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/docs/auth/#sign-in-with-proxy-providers",children:"Sign-In with Proxy Providers"})," for pointers on how to set up the sign-in page to also work smoothly for local development."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in i=Object(arguments[u]))r.call(i,c)&&(s[c]=i[c]);if(t){a=t(i);for(var l=0;l<a.length;l++)n.call(i,a[l])&&(s[a[l]]=i[a[l]])}}return s}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,i={},c=null,l=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!u.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:l,props:i,_owner:a.current}}t.jsx=c,t.jsxs=c},541535:(e,t,r)=>{var n=r(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,s=60110,u=60112;t.Suspense=60113;var c=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),i=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),a=d("react.provider"),s=d("react.context"),u=d("react.forward_ref"),t.Suspense=d("react.suspense"),c=d("react.memo"),l=d("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}function v(){}function m(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var x=m.prototype=new v;x.constructor=m,n(x,g.prototype),x.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n,i={},a=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,n)&&!_.hasOwnProperty(n)&&(i[n]=t[n]);var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];i.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===i[n]&&(i[n]=u[n]);return{$$typeof:o,type:e,key:a,ref:s,props:i,_owner:b.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case i:u=!0}}if(u)return a=a(u=e),e=""===n?"."+O(u,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(w,"$&/")+"/"),S(a,t,r,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(w,"$&/")+"/")+e)),t.push(a)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var l=n+O(s=e[c],c);u+=S(s,t,r,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(s=e.next()).done;)u+=S(s=s.value,t,r,l=n+O(s,c++),a);else if("object"===s)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function C(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function R(){var e=A.current;if(null===e)throw Error(f(321));return e}var $={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error(f(143));return e}},t.Component=g,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error(f(267,e));var i=n({},e.props),a=e.key,s=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,u=b.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)j.call(t,l)&&!_.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}return{$$typeof:o,type:e.type,key:a,ref:s,props:i,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return R().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,r){return R().useReducer(e,t,r)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>s,ah:()=>i});var n=r(667294);const o=n.createContext({});function i(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function s({components:e,children:t,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||a:i(e),n.createElement(o.Provider,{value:s},t)}}}]);