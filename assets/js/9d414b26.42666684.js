/*! For license information please see 9d414b26.42666684.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[946407],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),d=o,y=s["".concat(c,".").concat(d)]||s[d]||f[d]||a;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27365:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"plugin-explore-backend.staticexploretoolprovider",title:"StaticExploreToolProvider",description:"API reference for StaticExploreToolProvider"},i=void 0,c={unversionedId:"reference/plugin-explore-backend.staticexploretoolprovider",id:"reference/plugin-explore-backend.staticexploretoolprovider",title:"StaticExploreToolProvider",description:"API reference for StaticExploreToolProvider",source:"@site/../docs/reference/plugin-explore-backend.staticexploretoolprovider.md",sourceDirName:"reference",slug:"/reference/plugin-explore-backend.staticexploretoolprovider",permalink:"/docs/reference/plugin-explore-backend.staticexploretoolprovider",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-explore-backend.staticexploretoolprovider.md",tags:[],version:"current",frontMatter:{id:"plugin-explore-backend.staticexploretoolprovider",title:"StaticExploreToolProvider",description:"API reference for StaticExploreToolProvider"}},p={},u=[{value:"Methods",id:"methods",level:2}],s={toc:u};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-explore-backend"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-explore-backend"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-explore-backend.staticexploretoolprovider"}),(0,n.kt)("inlineCode",{parentName:"a"},"StaticExploreToolProvider"))),(0,n.kt)("p",null,"A basic ExploreToolProvider implementation using static data."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"class StaticExploreToolProvider implements ExploreToolProvider \n")),(0,n.kt)("b",null,"Implements:")," [ExploreToolProvider](/docs/reference/plugin-explore-backend.exploretoolprovider)",(0,n.kt)("h2",o({},{id:"methods"}),"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Method"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-explore-backend.staticexploretoolprovider.fromdata"}),"fromData(tools)")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-explore-backend.staticexploretoolprovider.gettools"}),"getTools(request)")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var l,i,c=o(e),p=1;p<arguments.length;p++){for(var u in l=Object(arguments[p]))r.call(l,u)&&(c[u]=l[u]);if(t){i=t(l);for(var s=0;s<i.length;s++)n.call(l,i[s])&&(c[i[s]]=l[i[s]])}}return c}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var l=60109,i=60110,c=60112;var p=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),a=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),l=s("react.provider"),i=s("react.context"),c=s("react.forward_ref"),s("react.suspense"),p=s("react.memo"),u=s("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function v(){}function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var h=g.prototype=new v;h.constructor=g,n(h,b.prototype),h.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,a={},l=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)O.call(t,n)&&!x.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var p=Array(c),u=0;u<c;u++)p[u]=arguments[u+2];a.children=p}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:o,type:e,key:l,ref:i,props:a,_owner:k.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function N(e,t,r,n,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return l=l(c=e),e=""===n?"."+S(c,0):n,Array.isArray(l)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),N(l,t,r,"",(function(e){return e}))):null!=l&&(w(l)&&(l=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,r+(!l.key||c&&c.key===l.key?"":(""+l.key).replace(P,"$&/")+"/")+e)),t.push(l)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var p=0;p<e.length;p++){var u=n+S(i=e[p],p);c+=N(i,t,r,u,l)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),p=0;!(i=e.next()).done;)c+=N(i=i.value,t,r,u=n+S(i,p++),l);else if("object"===i)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function E(e,t,r){if(null==e)return e;var n=[],o=0;return N(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function _(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function C(){var e=T.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,r)=>{r(541535)}}]);