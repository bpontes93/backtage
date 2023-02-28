/*! For license information please see 3251bf79.4423988d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[535914],{603905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>h});var n=r(667294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),u=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=u(r),f=a,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(h,i(i({ref:e},s),{},{components:r})):n.createElement(h,i({ref:e},s))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[p]="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},584461:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});r(827378);var n=r(603905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const i={id:"integration-react.scmauth",title:"ScmAuth",description:"API reference for ScmAuth"},l=void 0,c={unversionedId:"reference/integration-react.scmauth",id:"reference/integration-react.scmauth",title:"ScmAuth",description:"API reference for ScmAuth",source:"@site/../docs/reference/integration-react.scmauth.md",sourceDirName:"reference",slug:"/reference/integration-react.scmauth",permalink:"/docs/reference/integration-react.scmauth",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/integration-react.scmauth.md",tags:[],version:"current",frontMatter:{id:"integration-react.scmauth",title:"ScmAuth",description:"API reference for ScmAuth"}},u={},s=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2}],p={toc:s};function d(t){var{components:e}=t,r=o(t,["components"]);return(0,n.kt)("wrapper",a({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/integration-react"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/integration-react"))," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/integration-react.scmauth"}),(0,n.kt)("inlineCode",{parentName:"a"},"ScmAuth"))),(0,n.kt)("p",null,"An implementation of the ScmAuthApi that merges together OAuthApi instances to form a single instance that can handles authentication for multiple providers."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class ScmAuth implements ScmAuthApi \n")),(0,n.kt)("b",null,"Implements:")," [ScmAuthApi](/docs/reference/integration-react.scmauthapi)",(0,n.kt)("h2",a({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"// Supports authentication towards both public GitHub and GHE:\ncreateApiFactory({\n  api: scmAuthApiRef,\n  deps: {\n    gheAuthApi: gheAuthApiRef,\n    githubAuthApi: githubAuthApiRef,\n  },\n  factory: ({ githubAuthApi, gheAuthApi }) =>\n    ScmAuth.merge(\n      ScmAuth.forGithub(githubAuthApi),\n      ScmAuth.forGithub(gheAuthApi, {\n        host: 'ghe.example.com',\n      }),\n    )\n})\n")),(0,n.kt)("h2",a({},{id:"methods"}),"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Method"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/integration-react.scmauth.createdefaultapifactory"}),"createDefaultApiFactory()")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Creates an API factory that enables auth for each of the default SCM providers.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/integration-react.scmauth.forauthapi"}),"forAuthApi(authApi, options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Creates a general purpose ScmAuth instance with a custom scope mapping.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/integration-react.scmauth.forazure"}),"forAzure(microsoftAuthApi, options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("p",null,"Creates a new ScmAuth instance that handles authentication towards Azure."),(0,n.kt)("p",null,"The host option determines which URLs that are handled by this instance and defaults to ",(0,n.kt)("code",null,"dev.azure.com"),"."),(0,n.kt)("p",null,"The default scopes are:"),(0,n.kt)("p",null,(0,n.kt)("code",null,"vso.build vso.code vso.graph vso.project vso.profile")),(0,n.kt)("p",null,"If the additional ",(0,n.kt)("code",null,"repoWrite")," permission is requested, these scopes are added:"),(0,n.kt)("p",null,(0,n.kt)("code",null,"vso.code_manage")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/integration-react.scmauth.forbitbucket"}),"forBitbucket(bitbucketAuthApi, options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("p",null,"Creates a new ScmAuth instance that handles authentication towards Bitbucket."),(0,n.kt)("p",null,"The host option determines which URLs that are handled by this instance and defaults to ",(0,n.kt)("code",null,"bitbucket.org"),"."),(0,n.kt)("p",null,"The default scopes are:"),(0,n.kt)("p",null,(0,n.kt)("code",null,"account team pullrequest snippet issue")),(0,n.kt)("p",null,"If the additional ",(0,n.kt)("code",null,"repoWrite")," permission is requested, these scopes are added:"),(0,n.kt)("p",null,(0,n.kt)("code",null,"pullrequest:write snippet:write issue:write")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/integration-react.scmauth.forgithub"}),"forGithub(githubAuthApi, options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("p",null,"Creates a new ScmAuth instance that handles authentication towards GitHub."),(0,n.kt)("p",null,"The host option determines which URLs that are handled by this instance and defaults to ",(0,n.kt)("code",null,"github.com"),"."),(0,n.kt)("p",null,"The default scopes are:"),(0,n.kt)("p",null,(0,n.kt)("code",null,"repo read:org read:user")),(0,n.kt)("p",null,"If the additional ",(0,n.kt)("code",null,"repoWrite")," permission is requested, these scopes are added:"),(0,n.kt)("p",null,(0,n.kt)("code",null,"gist")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/integration-react.scmauth.forgitlab"}),"forGitlab(gitlabAuthApi, options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("p",null,"Creates a new ScmAuth instance that handles authentication towards GitLab."),(0,n.kt)("p",null,"The host option determines which URLs that are handled by this instance and defaults to ",(0,n.kt)("code",null,"gitlab.com"),"."),(0,n.kt)("p",null,"The default scopes are:"),(0,n.kt)("p",null,(0,n.kt)("code",null,"read_user read_api read_repository")),(0,n.kt)("p",null,"If the additional ",(0,n.kt)("code",null,"repoWrite")," permission is requested, these scopes are added:"),(0,n.kt)("p",null,(0,n.kt)("code",null,"write_repository api")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/integration-react.scmauth.getcredentials"}),"getCredentials(options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Fetches credentials for the given resource.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/integration-react.scmauth.isurlsupported"}),"isUrlSupported(url)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Checks whether the implementation is able to provide authentication for the given URL.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/integration-react.scmauth.merge"}),"merge(providers)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Merges together multiple ScmAuth instances into one that routes requests to the correct instance based on the URL.")))))}d.isMDXComponent=!0},862525:t=>{var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(t,o){for(var i,l,c=a(t),u=1;u<arguments.length;u++){for(var s in i=Object(arguments[u]))r.call(i,s)&&(c[s]=i[s]);if(e){l=e(i);for(var p=0;p<l.length;p++)n.call(i,l[p])&&(c[l[p]]=i[l[p]])}}return c}},541535:(t,e,r)=>{var n=r(862525),a=60103,o=60106;var i=60109,l=60110,c=60112;var u=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),l=p("react.context"),c=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),s=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function k(t,e,r){this.props=t,this.context=e,this.refs=m,this.updater=r||h}function g(){}function y(t,e,r){this.props=t,this.context=e,this.refs=m,this.updater=r||h}k.prototype.isReactComponent={},k.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error(f(85));this.updater.enqueueSetState(this,t,e,"setState")},k.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},g.prototype=k.prototype;var b=y.prototype=new g;b.constructor=y,n(b,k.prototype),b.isPureReactComponent=!0;var v={current:null},A=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function w(t,e,r){var n,o={},i=null,l=null;if(null!=e)for(n in void 0!==e.ref&&(l=e.ref),void 0!==e.key&&(i=""+e.key),e)A.call(e,n)&&!N.hasOwnProperty(n)&&(o[n]=e[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var u=Array(c),s=0;s<c;s++)u[s]=arguments[s+2];o.children=u}if(t&&t.defaultProps)for(n in c=t.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:a,type:t,key:i,ref:l,props:o,_owner:v.current}}function O(t){return"object"==typeof t&&null!==t&&t.$$typeof===a}var j=/\/+/g;function S(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function _(t,e,r,n,i){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case a:case o:c=!0}}if(c)return i=i(c=t),t=""===n?"."+S(c,0):n,Array.isArray(i)?(r="",null!=t&&(r=t.replace(j,"$&/")+"/"),_(i,e,r,"",(function(t){return t}))):null!=i&&(O(i)&&(i=function(t,e){return{$$typeof:a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(j,"$&/")+"/")+t)),e.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=n+S(l=t[u],u);c+=_(l,e,r,s,i)}else if(s=function(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=d&&t[d]||t["@@iterator"])?t:null}(t),"function"==typeof s)for(t=s.call(t),u=0;!(l=t.next()).done;)c+=_(l=l.value,e,r,s=n+S(l,u++),i);else if("object"===l)throw e=""+t,Error(f(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e));return c}function P(t,e,r){if(null==t)return t;var n=[],a=0;return _(t,n,"","",(function(t){return e.call(r,t,a++)})),n}function C(t){if(-1===t._status){var e=t._result;e=e(),t._status=0,t._result=e,e.then((function(e){0===t._status&&(e=e.default,t._status=1,t._result=e)}),(function(e){0===t._status&&(t._status=2,t._result=e)}))}if(1===t._status)return t._result;throw t._result}var x={current:null};function E(){var t=x.current;if(null===t)throw Error(f(321));return t}},827378:(t,e,r)=>{r(541535)}}]);