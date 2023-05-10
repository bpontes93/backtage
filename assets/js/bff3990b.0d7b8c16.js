/*! For license information please see bff3990b.0d7b8c16.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[620559],{644922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(824246),o=n(511151);const a={id:"well-known-relations",title:"Well-known Relations between Catalog Entities",sidebar_label:"Well-known Relations",description:"Documentation that lists a number of well known Relations, that have defined semantics. They can be attached to catalog entities and consumed by plugins as needed."},s=void 0,i={unversionedId:"features/software-catalog/well-known-relations",id:"features/software-catalog/well-known-relations",title:"Well-known Relations between Catalog Entities",description:"Documentation that lists a number of well known Relations, that have defined semantics. They can be attached to catalog entities and consumed by plugins as needed.",source:"@site/../docs/features/software-catalog/well-known-relations.md",sourceDirName:"features/software-catalog",slug:"/features/software-catalog/well-known-relations",permalink:"/docs/features/software-catalog/well-known-relations",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-catalog/well-known-relations.md",tags:[],version:"current",frontMatter:{id:"well-known-relations",title:"Well-known Relations between Catalog Entities",sidebar_label:"Well-known Relations",description:"Documentation that lists a number of well known Relations, that have defined semantics. They can be attached to catalog entities and consumed by plugins as needed."},sidebar:"docs",previous:{title:"Well-known Annotations",permalink:"/docs/features/software-catalog/well-known-annotations"},next:{title:"Well-known Statuses",permalink:"/docs/features/software-catalog/well-known-statuses"}},c={},l=[{value:"Relations",id:"relations",level:2},{value:"<code>ownedBy</code> and <code>ownerOf</code>",id:"ownedby-and-ownerof",level:3},{value:"<code>providesApi</code> and <code>apiProvidedBy</code>",id:"providesapi-and-apiprovidedby",level:3},{value:"<code>consumesApi</code> and <code>apiConsumedBy</code>",id:"consumesapi-and-apiconsumedby",level:3},{value:"<code>dependsOn</code> and <code>dependencyOf</code>",id:"dependson-and-dependencyof",level:3},{value:"<code>parentOf</code> and <code>childOf</code>",id:"parentof-and-childof",level:3},{value:"<code>memberOf</code> and <code>hasMember</code>",id:"memberof-and-hasmember",level:3},{value:"<code>partOf</code> and <code>hasPart</code>",id:"partof-and-haspart",level:3}];function d(e){const t=Object.assign({p:"p",a:"a",h2:"h2",em:"em",code:"code",h3:"h3"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["This section lists a number of well known\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#common-to-all-kinds-relations",children:"entity relation types"}),",\nthat have defined semantics. They can be attached to catalog entities and\nconsumed by plugins as needed."]}),"\n",(0,r.jsxs)(t.p,{children:["If you are looking to extend the set of relations, see\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/extending-the-model",children:"Extending the model"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"relations",children:"Relations"}),"\n",(0,r.jsx)(t.p,{children:"This is a (non-exhaustive) list of relations that are known to be in active use."}),"\n",(0,r.jsxs)(t.p,{children:["Each relation has a ",(0,r.jsx)(t.em,{children:"source"})," (implicitly: the entity that holds the relation), a\n",(0,r.jsx)(t.em,{children:"target"})," (the entity to which the source has a relation), and a ",(0,r.jsx)(t.em,{children:"type"})," that\ntells what relation the source has with the target. The relation is directional;\nthere are commonly pairs of relation types and the entity at the other end will\nhave the opposite relation in the opposite direction (e.g. when querying for\n",(0,r.jsx)(t.code,{children:"A"}),", you will see ",(0,r.jsx)(t.code,{children:"A.ownedBy.B"}),", and when querying ",(0,r.jsx)(t.code,{children:"B"}),", you will see\n",(0,r.jsx)(t.code,{children:"B.ownerOf.A"}),")."]}),"\n",(0,r.jsxs)(t.h3,{id:"ownedby-and-ownerof",children:[(0,r.jsx)(t.code,{children:"ownedBy"})," and ",(0,r.jsx)(t.code,{children:"ownerOf"})]}),"\n",(0,r.jsxs)(t.p,{children:["An ownership relation where the owner is usually an organizational entity\n(",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-user",children:"User"})," or\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-group",children:"Group"}),"), and the other entity can be anything."]}),"\n",(0,r.jsx)(t.p,{children:"In Backstage, the owner of an entity is the singular entity (commonly a team)\nthat bears ultimate responsibility for the entity, and has the authority and\ncapability to develop and maintain it. They will be the point of contact if\nsomething goes wrong, or if features are to be requested. The main purpose of\nthis relation is for display purposes in Backstage, so that people looking at\ncatalog entities can get an understanding of to whom this entity belongs. It is\nnot to be used by automated processes to for example assign authorization in\nruntime systems. There may be others that also develop or otherwise touch the\nentity, but there will always be one ultimate owner."}),"\n",(0,r.jsxs)(t.p,{children:["This relation is commonly generated based on ",(0,r.jsx)(t.code,{children:"spec.owner"})," of the owned entity,\nwhere present."]}),"\n",(0,r.jsxs)(t.h3,{id:"providesapi-and-apiprovidedby",children:[(0,r.jsx)(t.code,{children:"providesApi"})," and ",(0,r.jsx)(t.code,{children:"apiProvidedBy"})]}),"\n",(0,r.jsxs)(t.p,{children:["A relation with an ",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-api",children:"API"})," entity, typically from a\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-component",children:"Component"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"These relations express that a component exposes an API - meaning that it hosts\ncallable endpoints from which you can consume that API."}),"\n",(0,r.jsxs)(t.p,{children:["This relation is commonly generated based on ",(0,r.jsx)(t.code,{children:"spec.providesApis"})," of the\ncomponent or system in question."]}),"\n",(0,r.jsxs)(t.h3,{id:"consumesapi-and-apiconsumedby",children:[(0,r.jsx)(t.code,{children:"consumesApi"})," and ",(0,r.jsx)(t.code,{children:"apiConsumedBy"})]}),"\n",(0,r.jsxs)(t.p,{children:["A relation with an ",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-api",children:"API"})," entity, typically from a\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-component",children:"Component"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"These relations express that a component consumes an API - meaning that it\ndepends on endpoints of the API."}),"\n",(0,r.jsxs)(t.p,{children:["This relation is commonly generated based on ",(0,r.jsx)(t.code,{children:"spec.consumesApis"})," of the\ncomponent or system in question."]}),"\n",(0,r.jsxs)(t.h3,{id:"dependson-and-dependencyof",children:[(0,r.jsx)(t.code,{children:"dependsOn"})," and ",(0,r.jsx)(t.code,{children:"dependencyOf"})]}),"\n",(0,r.jsx)(t.p,{children:"A relation denoting a dependency on another entity."}),"\n",(0,r.jsx)(t.p,{children:"This relation is a general expression of being in need of that other entity for\nan entity to function. It can for example be used to express that a website\ncomponent needs a library component as part of its build, or that a service\ncomponent uses a persistent storage resource."}),"\n",(0,r.jsxs)(t.p,{children:["This relation is commonly generated based on ",(0,r.jsx)(t.code,{children:"spec.dependsOn"})," of the component\nor resource in question."]}),"\n",(0,r.jsxs)(t.h3,{id:"parentof-and-childof",children:[(0,r.jsx)(t.code,{children:"parentOf"})," and ",(0,r.jsx)(t.code,{children:"childOf"})]}),"\n",(0,r.jsxs)(t.p,{children:["A parent/child relation to build up a tree, used for example to describe the\norganizational structure between ",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-group",children:"Groups"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["This relation is commonly based on ",(0,r.jsx)(t.code,{children:"spec.parent"})," and/or ",(0,r.jsx)(t.code,{children:"spec.children"}),"."]}),"\n",(0,r.jsxs)(t.h3,{id:"memberof-and-hasmember",children:[(0,r.jsx)(t.code,{children:"memberOf"})," and ",(0,r.jsx)(t.code,{children:"hasMember"})]}),"\n",(0,r.jsxs)(t.p,{children:["A membership relation, typically for ",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-user",children:"Users"})," in\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-group",children:"Groups"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["This relation is commonly based on ",(0,r.jsx)(t.code,{children:"spec.memberOf"}),"."]}),"\n",(0,r.jsxs)(t.h3,{id:"partof-and-haspart",children:[(0,r.jsx)(t.code,{children:"partOf"})," and ",(0,r.jsx)(t.code,{children:"hasPart"})]}),"\n",(0,r.jsxs)(t.p,{children:["A relation with a ",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-domain",children:"Domain"}),",\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-system",children:"System"})," or\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-component",children:"Component"})," entity, typically from a\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-component",children:"Component"}),",\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-api",children:"API"}),", or\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-system",children:"System"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"These relations express that a component belongs to a larger component; a\ncomponent, API or resource belongs to a system; or that a system is grouped\nunder a domain."}),"\n",(0,r.jsxs)(t.p,{children:["This relation is commonly based on ",(0,r.jsx)(t.code,{children:"spec.system"})," or ",(0,r.jsx)(t.code,{children:"spec.domain"}),"."]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var a,s,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in a=Object(arguments[c]))n.call(a,l)&&(i[l]=a[l]);if(t){s=t(a);for(var d=0;d<s.length;d++)r.call(a,s[d])&&(i[s[d]]=a[s[d]])}}return i}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:d,props:a,_owner:s.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,i=60110,c=60112;t.Suspense=60113;var l=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),a=u("react.portal"),t.Fragment=u("react.fragment"),t.StrictMode=u("react.strict_mode"),t.Profiler=u("react.profiler"),s=u("react.provider"),i=u("react.context"),c=u("react.forward_ref"),t.Suspense=u("react.suspense"),l=u("react.memo"),d=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function w(){}function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=y.prototype;var b=g.prototype=new w;b.constructor=g,r(b,y.prototype),b.isPureReactComponent=!0;var j={current:null},x=Object.prototype.hasOwnProperty,v={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,a={},s=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)x.call(t,r)&&!v.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];a.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:s,ref:i,props:a,_owner:j.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,n,r,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return s=s(c=e),e=""===r?"."+C(c,0):r,Array.isArray(s)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),A(s,t,n,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(O,"$&/")+"/")+e)),t.push(s)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var d=r+C(i=e[l],l);c+=A(i,t,n,d,s)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(i=e.next()).done;)c+=A(i=i.value,t,n,d=r+C(i,l++),s);else if("object"===i)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function P(e,t,n){if(null==e)return e;var r=[],o=0;return A(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function R(){var e=E.current;if(null===e)throw Error(p(321));return e}var T={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(p(143));return e}},t.Component=y,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var a=r({},e.props),s=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=j.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)x.call(t,d)&&!v.hasOwnProperty(d)&&(a[d]=void 0===t[d]&&void 0!==l?l[d]:t[d])}var d=arguments.length-2;if(1===d)a.children=n;else if(1<d){l=Array(d);for(var u=0;u<d;u++)l[u]=arguments[u+2];a.children=l}return{$$typeof:o,type:e.type,key:s,ref:i,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:S}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>a});var r=n(667294);const o=r.createContext({});function a(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||s:a(e),r.createElement(o.Provider,{value:i},t)}}}]);