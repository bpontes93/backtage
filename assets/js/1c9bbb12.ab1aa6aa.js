/*! For license information please see 1c9bbb12.ab1aa6aa.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[189277],{603905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>b});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),a=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},f=function(e){var r=a(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=a(t),d=o,b=p["".concat(l,".").concat(d)]||p[d]||s[d]||i;return t?n.createElement(b,u(u({ref:r},f),{},{components:t})):n.createElement(b,u({ref:r},f))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,u=new Array(i);u[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[p]="string"==typeof e?e:o,u[1]=c;for(var a=2;a<i;a++)u[a]=t[a];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},501015:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>s,frontMatter:()=>u,metadata:()=>l,toc:()=>f});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const u={id:"plugin-cloudbuild.cloudbuildapiref",title:"cloudbuildApiRef",description:"API reference for cloudbuildApiRef"},c=void 0,l={unversionedId:"reference/plugin-cloudbuild.cloudbuildapiref",id:"reference/plugin-cloudbuild.cloudbuildapiref",title:"cloudbuildApiRef",description:"API reference for cloudbuildApiRef",source:"@site/../docs/reference/plugin-cloudbuild.cloudbuildapiref.md",sourceDirName:"reference",slug:"/reference/plugin-cloudbuild.cloudbuildapiref",permalink:"/docs/reference/plugin-cloudbuild.cloudbuildapiref",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-cloudbuild.cloudbuildapiref.md",tags:[],version:"current",frontMatter:{id:"plugin-cloudbuild.cloudbuildapiref",title:"cloudbuildApiRef",description:"API reference for cloudbuildApiRef"}},a={},f=[],p={toc:f};function s(e){var{components:r}=e,t=i(e,["components"]);return(0,n.kt)("wrapper",o({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-cloudbuild"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-cloudbuild"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-cloudbuild.cloudbuildapiref"}),(0,n.kt)("inlineCode",{parentName:"a"},"cloudbuildApiRef"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),'cloudbuildApiRef: import("@backstage/core-plugin-api").ApiRef<CloudbuildApi>\n')))}s.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var u,c,l=o(e),a=1;a<arguments.length;a++){for(var f in u=Object(arguments[a]))t.call(u,f)&&(l[f]=u[f]);if(r){c=r(u);for(var p=0;p<c.length;p++)n.call(u,c[p])&&(l[c[p]]=u[c[p]])}}return l}},541535:(e,r,t)=>{var n=t(862525),o=60103,i=60106;var u=60109,c=60110,l=60112;var a=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),i=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),u=p("react.provider"),c=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),a=p("react.memo"),f=p("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||b}function g(){}function v(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||b}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var h=v.prototype=new g;h.constructor=v,n(h,m.prototype),h.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,i={},u=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(u=""+r.key),r)j.call(r,n)&&!k.hasOwnProperty(n)&&(i[n]=r[n]);var l=arguments.length-2;if(1===l)i.children=t;else if(1<l){for(var a=Array(l),f=0;f<l;f++)a[f]=arguments[f+2];i.children=a}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===i[n]&&(i[n]=l[n]);return{$$typeof:o,type:e,key:u,ref:c,props:i,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function S(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function A(e,r,t,n,u){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case i:l=!0}}if(l)return u=u(l=e),e=""===n?"."+S(l,0):n,Array.isArray(u)?(t="",null!=e&&(t=e.replace(_,"$&/")+"/"),A(u,r,t,"",(function(e){return e}))):null!=u&&(P(u)&&(u=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,t+(!u.key||l&&l.key===u.key?"":(""+u.key).replace(_,"$&/")+"/")+e)),r.push(u)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var a=0;a<e.length;a++){var f=n+S(c=e[a],a);l+=A(c,r,t,f,u)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),a=0;!(c=e.next()).done;)l+=A(c=c.value,r,t,f=n+S(c,a++),u);else if("object"===c)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return l}function E(e,r,t){if(null==e)return e;var n=[],o=0;return A(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function x(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function R(){var e=C.current;if(null===e)throw Error(d(321));return e}},827378:(e,r,t)=>{t(541535)}}]);