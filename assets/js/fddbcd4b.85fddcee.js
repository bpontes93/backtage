/*! For license information please see fddbcd4b.85fddcee.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[510740],{603905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>g});var n=r(667294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},f="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),f=p(r),d=a,g=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(g,i(i({ref:e},s),{},{components:r})):n.createElement(g,i({ref:e},s))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[f]="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},468579:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});r(827378);var n=r(603905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const i={id:"catalog-client.catalogapi",title:"CatalogApi",description:"API reference for CatalogApi"},l=void 0,c={unversionedId:"reference/catalog-client.catalogapi",id:"reference/catalog-client.catalogapi",title:"CatalogApi",description:"API reference for CatalogApi",source:"@site/../docs/reference/catalog-client.catalogapi.md",sourceDirName:"reference",slug:"/reference/catalog-client.catalogapi",permalink:"/docs/reference/catalog-client.catalogapi",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/catalog-client.catalogapi.md",tags:[],version:"current",frontMatter:{id:"catalog-client.catalogapi",title:"CatalogApi",description:"API reference for CatalogApi"}},p={},s=[{value:"Methods",id:"methods",level:2}],f={toc:s};function u(t){var{components:e}=t,r=o(t,["components"]);return(0,n.kt)("wrapper",a({},f,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/catalog-client"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/catalog-client"))," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/catalog-client.catalogapi"}),(0,n.kt)("inlineCode",{parentName:"a"},"CatalogApi"))),(0,n.kt)("p",null,"A client for interacting with the Backstage software catalog through its API."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"export interface CatalogApi \n")),(0,n.kt)("h2",a({},{id:"methods"}),"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Method"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogapi.addlocation"}),"addLocation(location, options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Registers a new location.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogapi.getentities"}),"getEntities(request, options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Lists catalog entities.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogapi.getentitiesbyrefs"}),"getEntitiesByRefs(request, options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Gets a batch of entities, by their entity refs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogapi.getentityancestors"}),"getEntityAncestors(request, options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Gets entity ancestor information, i.e. the hierarchy of parent entities whose processing resulted in a given entity appearing in the catalog.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogapi.getentitybyref"}),"getEntityByRef(entityRef, options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Gets a single entity from the catalog by its ref (kind, namespace, name) triplet.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogapi.getentityfacets"}),"getEntityFacets(request, options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Gets a summary of field facets of entities in the catalog.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogapi.getlocationbyid"}),"getLocationById(id, options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Gets a registered location by its ID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogapi.getlocationbyref"}),"getLocationByRef(locationRef, options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Gets a registered location by its ref.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogapi.queryentities"}),"queryEntities(request, options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Gets paginated entities from the catalog.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogapi.refreshentity"}),"refreshEntity(entityRef, options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Refreshes (marks for reprocessing) an entity in the catalog.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogapi.removeentitybyuid"}),"removeEntityByUid(uid, options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Removes a single entity from the catalog by entity UID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogapi.removelocationbyid"}),"removeLocationById(id, options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Removes a registered Location by its ID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogapi.validateentity"}),"validateEntity(entity, locationRef, options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Validate entity and its location.")))))}u.isMDXComponent=!0},862525:t=>{var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(t,o){for(var i,l,c=a(t),p=1;p<arguments.length;p++){for(var s in i=Object(arguments[p]))r.call(i,s)&&(c[s]=i[s]);if(e){l=e(i);for(var f=0;f<l.length;f++)n.call(i,l[f])&&(c[l[f]]=i[l[f]])}}return c}},541535:(t,e,r)=>{var n=r(862525),a=60103,o=60106;var i=60109,l=60110,c=60112;var p=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;a=f("react.element"),o=f("react.portal"),f("react.fragment"),f("react.strict_mode"),f("react.profiler"),i=f("react.provider"),l=f("react.context"),c=f("react.forward_ref"),f("react.suspense"),p=f("react.memo"),s=f("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function d(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(t,e,r){this.props=t,this.context=e,this.refs=y,this.updater=r||g}function b(){}function h(t,e,r){this.props=t,this.context=e,this.refs=y,this.updater=r||g}m.prototype.isReactComponent={},m.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error(d(85));this.updater.enqueueSetState(this,t,e,"setState")},m.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},b.prototype=m.prototype;var k=h.prototype=new b;k.constructor=h,n(k,m.prototype),k.isPureReactComponent=!0;var v={current:null},N=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(t,e,r){var n,o={},i=null,l=null;if(null!=e)for(n in void 0!==e.ref&&(l=e.ref),void 0!==e.key&&(i=""+e.key),e)N.call(e,n)&&!O.hasOwnProperty(n)&&(o[n]=e[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var p=Array(c),s=0;s<c;s++)p[s]=arguments[s+2];o.children=p}if(t&&t.defaultProps)for(n in c=t.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:a,type:t,key:i,ref:l,props:o,_owner:v.current}}function w(t){return"object"==typeof t&&null!==t&&t.$$typeof===a}var P=/\/+/g;function E(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function _(t,e,r,n,i){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case a:case o:c=!0}}if(c)return i=i(c=t),t=""===n?"."+E(c,0):n,Array.isArray(i)?(r="",null!=t&&(r=t.replace(P,"$&/")+"/"),_(i,e,r,"",(function(t){return t}))):null!=i&&(w(i)&&(i=function(t,e){return{$$typeof:a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+t)),e.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var p=0;p<t.length;p++){var s=n+E(l=t[p],p);c+=_(l,e,r,s,i)}else if(s=function(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=u&&t[u]||t["@@iterator"])?t:null}(t),"function"==typeof s)for(t=s.call(t),p=0;!(l=t.next()).done;)c+=_(l=l.value,e,r,s=n+E(l,p++),i);else if("object"===l)throw e=""+t,Error(d(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e));return c}function S(t,e,r){if(null==t)return t;var n=[],a=0;return _(t,n,"","",(function(t){return e.call(r,t,a++)})),n}function C(t){if(-1===t._status){var e=t._result;e=e(),t._status=0,t._result=e,e.then((function(e){0===t._status&&(e=e.default,t._status=1,t._result=e)}),(function(e){0===t._status&&(t._status=2,t._result=e)}))}if(1===t._status)return t._result;throw t._result}var A={current:null};function x(){var t=A.current;if(null===t)throw Error(d(321));return t}},827378:(t,e,r)=>{r(541535)}}]);