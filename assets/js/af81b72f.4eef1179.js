/*! For license information please see af81b72f.4eef1179.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[714158],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),g=o,d=p["".concat(l,".").concat(g)]||p[g]||f[g]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},227510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});n(827378);var r=n(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"index",title:"Intro to plugins",description:"Documentation on Introduction to Plugins"},u=void 0,l={unversionedId:"plugins/index",id:"plugins/index",title:"Intro to plugins",description:"Documentation on Introduction to Plugins",source:"@site/../docs/plugins/index.md",sourceDirName:"plugins",slug:"/plugins/",permalink:"/docs/plugins/",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Intro to plugins",description:"Documentation on Introduction to Plugins"},sidebar:"docs",previous:{title:"Org Data",permalink:"/docs/integrations/ldap/org"},next:{title:"Existing plugins",permalink:"/docs/plugins/existing-plugins"}},s={},c=[{value:"Creating a plugin",id:"creating-a-plugin",level:2},{value:"Suggesting a plugin",id:"suggesting-a-plugin",level:2},{value:"Integrate into the Software Catalog",id:"integrate-into-the-software-catalog",level:2}],p={toc:c};function f(e){var{components:t}=e,i=a(e,["components"]);return(0,r.kt)("wrapper",o({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Backstage is a single-page application composed of a set of plugins."),(0,r.kt)("p",null,"Our goal for the plugin ecosystem is that the definition of a plugin is flexible\nenough to allow you to expose pretty much any kind of infrastructure or software\ndevelopment tool as a plugin in Backstage. By following strong\n",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/dls/design"}),"design guidelines")," we ensure the overall user experience\nstays consistent between plugins."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"plugin",src:n(242914).Z,width:"1552",height:"989"})),(0,r.kt)("h2",o({},{id:"creating-a-plugin"}),"Creating a plugin"),(0,r.kt)("p",null,"To create a plugin, follow the steps outlined ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/plugins/create-a-plugin"}),"here"),"."),(0,r.kt)("h2",o({},{id:"suggesting-a-plugin"}),"Suggesting a plugin"),(0,r.kt)("p",null,"If you start developing a plugin that you aim to release as open source, we\nsuggest that you create a\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/backstage/backstage/issues/new?labels=plugin&template=plugin_template.md&title=%5BPlugin%5D+THE+PLUGIN+NAME"}),"new Issue"),".\nThis helps the community know what plugins are in development."),(0,r.kt)("p",null,"You can also use this process if you have an idea for a good plugin but you hope\nthat someone else will pick up the work."),(0,r.kt)("h2",o({},{id:"integrate-into-the-software-catalog"}),"Integrate into the Software Catalog"),(0,r.kt)("p",null,'If your plugin isn\'t supposed to live as a standalone page, but rather needs to\nbe presented as a part of a Software Catalog (e.g. a separate tab or a card on\nan "Overview" tab), then check out\n',(0,r.kt)("a",o({parentName:"p"},{href:"/docs/plugins/integrating-plugin-into-software-catalog"}),"the instruction")," on how to do it."))}f.isMDXComponent=!0},242914:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/my-plugin_screenshot-f22dc7520c6896fbaeeff8f717227c1b.png"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,u,l=o(e),s=1;s<arguments.length;s++){for(var c in i=Object(arguments[s]))n.call(i,c)&&(l[c]=i[c]);if(t){u=t(i);for(var p=0;p<u.length;p++)r.call(i,u[p])&&(l[u[p]]=i[u[p]])}}return l}},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;var i=60109,u=60110,l=60112;var s=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),u=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),s=p("react.memo"),c=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||d}function m(){}function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var v=b.prototype=new m;v.constructor=b,r(v,h.prototype),v.isPureReactComponent=!0;var w={current:null},O=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,a={},i=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,r)&&!k.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];a.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:i,ref:u,props:a,_owner:w.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var x=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,n,r,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var l=!1;if(null===e)l=!0;else switch(u){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return i=i(l=e),e=""===r?"."+S(l,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(x,"$&/")+"/"),_(i,t,n,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(x,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var c=r+S(u=e[s],s);l+=_(u,t,n,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),s=0;!(u=e.next()).done;)l+=_(u=u.value,t,n,c=r+S(u,s++),i);else if("object"===u)throw t=""+e,Error(g(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function E(e,t,n){if(null==e)return e;var r=[],o=0;return _(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var I={current:null};function D(){var e=I.current;if(null===e)throw Error(g(321));return e}},827378:(e,t,n)=>{n(541535)}}]);