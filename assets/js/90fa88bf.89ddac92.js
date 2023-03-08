/*! For license information please see 90fa88bf.89ddac92.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[820303],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,d=c["".concat(u,".").concat(m)]||c[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},535084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>s});n(827378);var r=n(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"plugin-development",title:"Plugin Development",description:"Documentation on Plugin Development"},l=void 0,u={unversionedId:"plugins/plugin-development",id:"plugins/plugin-development",title:"Plugin Development",description:"Documentation on Plugin Development",source:"@site/../docs/plugins/plugin-development.md",sourceDirName:"plugins",slug:"/plugins/plugin-development",permalink:"/docs/plugins/plugin-development",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/plugin-development.md",tags:[],version:"current",frontMatter:{id:"plugin-development",title:"Plugin Development",description:"Documentation on Plugin Development"},sidebar:"docs",previous:{title:"Create a Backstage Plugin",permalink:"/docs/plugins/create-a-plugin"},next:{title:"Structure of a Plugin",permalink:"/docs/plugins/structure-of-a-plugin"}},p={},s=[{value:"Developing guidelines",id:"developing-guidelines",level:2},{value:"Plugin concepts / API",id:"plugin-concepts--api",level:2},{value:"Routing",id:"routing",level:3}],c={toc:s};function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Backstage plugins provide features to a Backstage App."),(0,r.kt)("p",null,"Each plugin is treated as a self-contained web app and can include almost any\ntype of content. Plugins all use a common set of platform APIs and reusable UI\ncomponents. Plugins can fetch data from external sources using the regular\nbrowser APIs or by depending on external modules to do the work."),(0,r.kt)("h2",o({},{id:"developing-guidelines"}),"Developing guidelines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Consider writing plugins in ",(0,r.kt)("inlineCode",{parentName:"li"},"TypeScript"),"."),(0,r.kt)("li",{parentName:"ul"},"Plan the directory structure of your plugin so that it becomes easy to manage."),(0,r.kt)("li",{parentName:"ul"},"Prefer using the ",(0,r.kt)("a",o({parentName:"li"},{href:"https://backstage.io/storybook"}),"Backstage components"),",\notherwise go with ",(0,r.kt)("a",o({parentName:"li"},{href:"https://material-ui.com/"}),"Material-UI"),"."),(0,r.kt)("li",{parentName:"ul"},"Check out the shared Backstage APIs before building a new one.")),(0,r.kt)("h2",o({},{id:"plugin-concepts--api"}),"Plugin concepts / API"),(0,r.kt)("h3",o({},{id:"routing"}),"Routing"),(0,r.kt)("p",null,"Each plugin can export routable extensions, which are then imported into the app\nand mounted at a path."),(0,r.kt)("p",null,"First you will need a ",(0,r.kt)("inlineCode",{parentName:"p"},"RouteRef")," instance to serve as the mount point of your\nextensions. This can be used within your own plugin to create a link to the\nextension page using ",(0,r.kt)("inlineCode",{parentName:"p"},"useRouteRef"),", as well as for other plugins to link to your\nextension."),(0,r.kt)("p",null,"It is best to place these in a separate top-level ",(0,r.kt)("inlineCode",{parentName:"p"},"src/routes.ts")," file, in order\nto avoid import cycles, for example like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"/* src/routes.ts */\nimport { createRouteRef } from '@backstage/core-plugin-api';\n\n// Note: This route ref is for internal use only, don't export it from the plugin\nexport const rootRouteRef = createRouteRef({\n  title: 'Example Page',\n});\n")),(0,r.kt)("p",null,"Now that we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"RouteRef"),", we import it into ",(0,r.kt)("inlineCode",{parentName:"p"},"src/plugin.ts"),", create our\nplugin instance with ",(0,r.kt)("inlineCode",{parentName:"p"},"createPlugin"),", as well as create and wrap our routable\nextension using ",(0,r.kt)("inlineCode",{parentName:"p"},"createRoutableExtension")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/core-plugin-api"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"/* src/plugin.ts */\nimport { createPlugin, createRouteRef } from '@backstage/core-plugin-api';\nimport ExampleComponent from './components/ExampleComponent';\n\n// Create a plugin instance and export this from your plugin package\nexport const examplePlugin = createPlugin({\n  id: 'example',\n  routes: {\n    root: rootRouteRef, // This is where the route ref should be exported for usage in the app\n  },\n});\n\n// This creates a routable extension, which are typically full pages of content.\n// Each extension should also be exported from your plugin package.\nexport const ExamplePage = examplePlugin.provide(\n  createRoutableExtension({\n    name: 'ExamplePage',\n    // The component needs to be lazy-loaded. It's what will actually be rendered in the end.\n    component: () =>\n      import('./components/ExampleComponent').then(m => m.ExampleComponent),\n    // This binds the extension to this route ref, which allows for routing within and across plugin extensions\n    mountPoint: rootRouteRef,\n  }),\n);\n")),(0,r.kt)("p",null,"This extension can then be imported and used in the app as follow, typically\nplaced within the top-level ",(0,r.kt)("inlineCode",{parentName:"p"},"<FlatRoutes>"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),'<Route route="/any-path" element={<ExamplePage />} />\n')))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,l,u=o(e),p=1;p<arguments.length;p++){for(var s in i=Object(arguments[p]))n.call(i,s)&&(u[s]=i[s]);if(t){l=t(i);for(var c=0;c<l.length;c++)r.call(i,l[c])&&(u[l[c]]=i[l[c]])}}return u}},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;var i=60109,l=60110,u=60112;var p=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),a=c("react.portal"),c("react.fragment"),c("react.strict_mode"),c("react.profiler"),i=c("react.provider"),l=c("react.context"),u=c("react.forward_ref"),c("react.suspense"),p=c("react.memo"),s=c("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||d}function h(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||d}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=y.prototype;var v=b.prototype=new h;v.constructor=b,r(v,y.prototype),v.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!O.hasOwnProperty(r)&&(a[r]=t[r]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var p=Array(u),s=0;s<u;s++)p[s]=arguments[s+2];a.children=p}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===a[r]&&(a[r]=u[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var j=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,n,r,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var u=!1;if(null===e)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return i=i(u=e),e=""===r?"."+C(u,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(j,"$&/")+"/"),E(i,t,n,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(j,"$&/")+"/")+e)),t.push(i)),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var p=0;p<e.length;p++){var s=r+C(l=e[p],p);u+=E(l,t,n,s,i)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),p=0;!(l=e.next()).done;)u+=E(l=l.value,t,n,s=r+C(l,p++),i);else if("object"===l)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function N(e,t,n){if(null==e)return e;var r=[],o=0;return E(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function R(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var _={current:null};function S(){var e=_.current;if(null===e)throw Error(m(321));return e}},827378:(e,t,n)=>{n(541535)}}]);