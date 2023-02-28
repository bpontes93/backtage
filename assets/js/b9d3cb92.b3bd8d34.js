/*! For license information please see b9d3cb92.b3bd8d34.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[987536],{603905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var r=o(667294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(o),f=a,d=h["".concat(l,".").concat(f)]||h[f]||p[f]||n;return o?r.createElement(d,s(s({ref:t},u),{},{components:o})):r.createElement(d,s({ref:t},u))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,s=new Array(n);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<n;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},531949:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>u});o(827378);var r=o(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},a.apply(this,arguments)}function n(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const s={title:"Announcing the Backstage Search platform: a customizable search tool built just for you",author:"Emma Indal, Spotify",authorURL:"https://www.linkedin.com/in/emma-indal"},i=void 0,l={permalink:"/blog/2021/06/24/announcing-backstage-search-platform",source:"@site/../microsite/blog/2021-06-24-announcing-backstage-search-platform.md",title:"Announcing the Backstage Search platform: a customizable search tool built just for you",description:"Backstage Search platform",date:"2021-06-24T00:00:00.000Z",formattedDate:"June 24, 2021",tags:[],readingTime:6.815,hasTruncateMarker:!0,authors:[{name:"Emma Indal, Spotify",url:"https://www.linkedin.com/in/emma-indal"}],frontMatter:{title:"Announcing the Backstage Search platform: a customizable search tool built just for you",author:"Emma Indal, Spotify",authorURL:"https://www.linkedin.com/in/emma-indal"},prevItem:{title:"Software Templates is now in Beta",permalink:"/blog/2021/07/26/software-templates-are-now-in-beta"},nextItem:{title:"How Spotify is helping more companies adopt Backstage",permalink:"/blog/2021/06/22/spotify-backstage-is-growing"}},c={authorsImageUrls:[void 0]},u=[{value:"Search and explore",id:"search-and-explore",level:2},{value:"Rethinking search, inside and out",id:"rethinking-search-inside-and-out",level:2},{value:"Say hello to the Backstage Search platform",id:"say-hello-to-the-backstage-search-platform",level:2},{value:"Bring your own search engine",id:"bring-your-own-search-engine",level:3},{value:"Collators for easily indexing content from plugins and other sources",id:"collators-for-easily-indexing-content-from-plugins-and-other-sources",level:3},{value:"Composable search page experiences",id:"composable-search-page-experiences",level:3},{value:"Customize the look and feel of each search result",id:"customize-the-look-and-feel-of-each-search-result",level:3},{value:"Getting started with Backstage Search",id:"getting-started-with-backstage-search",level:2},{value:"What\u2019s next?",id:"whats-next",level:2}],h=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a({},t))},p=h("CustomResultListItem"),f=h("DefaultResultListItem"),d={toc:u};function g(e){var{components:t}=e,s=n(e,["components"]);return(0,r.kt)("wrapper",a({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Backstage Search platform",src:o(145077).Z,width:"8002",height:"4502"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TLDR;")," The new Backstage Search is now available in alpha, ready for you to start building on. A total rethinking of the core search feature in Backstage, it\u2019s more than just a box you type into \u2014 it\u2019s a mini platform all by itself. With its composable frontend and extensible backend, you can design and build the search tool that suits your organization\u2019s needs."),(0,r.kt)("p",null,"So, you don\u2019t just get an improved out-of-the-box experience for searching whatever is in your software catalog. You can also add support for searching other sources, too. Customize it the way you want and you can search your catalog, your plugins and docs \u2014 and even external sources, like Stack Overflow and Confluence \u2014 all at once, all right inside Backstage."),(0,r.kt)("p",null,"With one query, your teams can find exactly what they\u2019re looking for: anything and everything."),(0,r.kt)("h2",a({},{id:"search-and-explore"}),"Search and explore"),(0,r.kt)("p",null,"Being able to easily explore your ecosystem \u2014 to discover software, tools, documentation, and other valuable knowledge \u2014 is one of ",(0,r.kt)("a",a({parentName:"p"},{href:"https://backstage.io/blog/2021/05/20/adopting-backstage#three-jobs-create-manage-explore"}),"the three main jobs of Backstage"),". Teams should be able to find what other teams have already built, so they can reuse and contribute to components instead of unknowingly duplicating them. Data endpoints should be shared, not siloed away. Services and their APIs should be easily discoverable. Best practices and technical documentation should be easily found."),(0,r.kt)("p",null,"Along with the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://backstage.io/blog/2020/06/22/backstage-service-catalog-alpha"}),"Backstage Service Catalog"),", Backstage Search is essential to enabling this discoverability \u2014 allowing new hires and old hands alike to explore your infrastructure instead of getting lost inside it."),(0,r.kt)("p",null,"We also quickly realized that search looks different from organization to organization. Therefore, we built a search platform that lets you plug in your own search engine, index any information you like, or build a customized search page experience that fits your users\u2019 needs."),(0,r.kt)("p",null,"Since finding what you are looking for in Backstage is critical for success, we started by identifying the needs and goals of search."),(0,r.kt)("h2",a({},{id:"rethinking-search-inside-and-out"}),"Rethinking search, inside and out"),(0,r.kt)("p",null,"Spotify\u2019s internal version of Backstage has had some of the features of Backstage Search for a while, and open sourcing them has been top of mind since day one. But we didn\u2019t want to just port our internal version to the open source version. We wanted to take the opportunity to apply what we\u2019ve learned inside Spotify over the last year, address the needs we\u2019ve observed in the community, and ultimately open source not just a search feature but a search platform. We started the process by looking at the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://hbr.org/2016/09/know-your-customers-jobs-to-be-done"}),"jobs to be done"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Backstage Search platform",src:o(561442).Z,width:"8122",height:"2975"}),"\n",(0,r.kt)("em",{parentName:"p"},"A high-level overview of the process, identifying all the jobs of search.")),(0,r.kt)("p",null,"First, we looked at which jobs to be done belonged to the search plugin itself (e.g., \u201ccollect documents to index\u201d) and which belonged to the other plugins (e.g., \u201cformat documents for indexing\u201d), and then whether those jobs belonged to the frontend (\u201cdisplay results\u201d) or the backend (\u201cschedule indexing\u201d)."),(0,r.kt)("p",null,"Looking at all these various jobs, we defined four goals for the platform:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flexibility:")," Be search engine\u2013agnostic"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Simplicity:")," Make it easy for content owners to make their content searchable/discoverable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Control:")," Allow plugin developers to customize their search results components"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reusability:")," Offer reusable components/APIs that other devs can leverage")),(0,r.kt)("p",null,"Beginning our journey this way \u2014 by identifying the jobs to be done first, then defining the product goals from there \u2014 we could make sure that the search platform addressed real needs and improved the search experience for both users and plugin developers."),(0,r.kt)("p",null,"This approach not only created a better search tool for the open source community, but for Spotify, as well. So, instead of just open sourcing our internal version of search, we ended up with an even better solution \u2014 one that we can all use and build on together, both inside and outside Spotify."),(0,r.kt)("h2",a({},{id:"say-hello-to-the-backstage-search-platform"}),"Say hello to the Backstage Search platform"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Backstage Search platform",src:o(824867).Z,width:"1230",height:"681"})),(0,r.kt)("p",null,"We are now happy and proud to announce our alpha version of the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://backstage.io/docs/features/search/architecture"}),"Backstage Search Platform"),", featuring:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bring your own search engine (Flexibility)"),(0,r.kt)("li",{parentName:"ul"},"Collators for easily indexing content from plugins and other sources (Simplicity)"),(0,r.kt)("li",{parentName:"ul"},"Composable search page experiences (Control, Reusability)"),(0,r.kt)("li",{parentName:"ul"},"Customize the look and feel of each search result (Control, Reusability)")),(0,r.kt)("h3",a({},{id:"bring-your-own-search-engine"}),"Bring your own search engine"),(0,r.kt)("p",null,"By introducing a Search Integration Layer, we have been able to keep the query translation of the search term and filters close to the search engine itself. This makes our search backend less focused on how a set of terms and filters should be translated to fit a certain search engine interface and more focused on querying and retrieving results as well as collecting results to index."),(0,r.kt)("p",null,"With the Search Integration Layer, your organization can bring your search engine of choice to Backstage \u2014 instead of relying on Backstage to support a specific search engine that might not fit the needs of your organization, either today or in the future."),(0,r.kt)("p",null,"But that doesn\u2019t mean \u201cbatteries not included\u201d. The current version of Backstage Search ships with Lunr support built-in \u2014 and support for ElasticSearch is not very far off. And we hope the number of supported search engines will continue to grow with the community\u2019s help."),(0,r.kt)("h3",a({},{id:"collators-for-easily-indexing-content-from-plugins-and-other-sources"}),"Collators for easily indexing content from plugins and other sources"),(0,r.kt)("p",null,"Since Backstage\u2019s functionality comes from its plugins, we wanted the process of making plugin content searchable to be as frictionless as possible. Therefore we decided on a concept we call collators. Collators are responsible for collecting documents to index from a plugin. Your collators live inside your own plugin, but are registered in the Backstage app\u2019s search backend."),(0,r.kt)("p",null,"Collators can also be used to index external sources, like Stack Overflow and Confluence. You can watch a demo of how easy it is to extend search with collators ",(0,r.kt)("a",a({parentName:"p"},{href:"https://youtu.be/Z78FFaObTfk?t=339"}),"here"),"."),(0,r.kt)("h3",a({},{id:"composable-search-page-experiences"}),"Composable search page experiences"),(0,r.kt)("p",null,"Every engineering org has different needs \u2014 that is something we have definitely learned over the last year. Your software catalog might be set up differently than ours and therefore your needs for how search results look and how the search filters work will also differ."),(0,r.kt)("p",null,"That's why we have put effort into making your search page experience composable to your organization's needs. What do we mean by that? When you adopt Backstage and set up your app, you can set up \u2014 or, compose \u2014 your search page by using existing components or by creating your own custom ones."),(0,r.kt)("h3",a({},{id:"customize-the-look-and-feel-of-each-search-result"}),"Customize the look and feel of each search result"),(0,r.kt)("p",null,"A good example of the level of customization the platform allows is how list items are displayed in search results. A search result component can be a list, this list can consist of different list items (search results returned from the search engine) \u2014 but these list items could look different depending on what the search result returns in terms of its fields."),(0,r.kt)("p",null,"Let\u2019s say that for an entity returned from the software catalog maybe the most important information to show is the name, while a result returned from the TechDocs plugin should maybe show the text content as the most important information. This can be customized by creating ",(0,r.kt)(p,{mdxType:"CustomResultListItem"})," components (like TechDocsResultListItem or CatalogResultListItem or whatever list item component you want) and configuring them in the app."),(0,r.kt)("p",null,"If there is no need to customize your search result list items, the ",(0,r.kt)(f,{mdxType:"DefaultResultListItem"})," component is there for you to reuse."),(0,r.kt)("h2",a({},{id:"getting-started-with-backstage-search"}),"Getting started with Backstage Search"),(0,r.kt)("p",null,"We put together ",(0,r.kt)("a",a({parentName:"p"},{href:"https://backstage.io/docs/features/search/getting-started"}),"a getting started guide")," that provides two different ways to set up Backstage Search:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new app and get the most out of the search setup right out of the box, or"),(0,r.kt)("li",{parentName:"ul"},"Add the new Backstage Search setup to your existing Backstage app.")),(0,r.kt)("p",null,"Whichever situation you\u2019re in, we have you covered."),(0,r.kt)("h2",a({},{id:"whats-next"}),"What\u2019s next?"),(0,r.kt)("p",null,"We\u2019ve built the foundation for the Backstage Search platform, and we can't wait to see the exciting engines, collators, and components the community builds on the platform."),(0,r.kt)("p",null,"You can check out our ",(0,r.kt)("a",a({parentName:"p"},{href:"https://backstage.io/docs/features/search/search-overview#project-roadmap"}),"project roadmap")," in our search documentation or track the progress of our ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/backstage/backstage/milestone/27"}),"Beta milestone")," and ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/backstage/backstage/milestone/28"}),"GA milestone"),"."),(0,r.kt)("p",null,"For any questions, feedback or ideas about the Backstage Search platform, join us in the #search channel on ",(0,r.kt)("a",a({parentName:"p"},{href:"https://discord.gg/backstage-687207715902193673"}),"Discord"),"!"))}g.isMDXComponent=!0},145077:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/backstage-search-platform-a2c925e7e7fa9aa3cc6e1e24d01bce7d.png"},561442:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/jobs-to-be-done-017935cc673ca82e9d43760ab2acbcbf.png"},824867:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/search-results-7958b00b1c30bfeb3de84cb5707cf5da.png"},862525:e=>{var t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},o=0;o<10;o++)t["_"+String.fromCharCode(o)]=o;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,n){for(var s,i,l=a(e),c=1;c<arguments.length;c++){for(var u in s=Object(arguments[c]))o.call(s,u)&&(l[u]=s[u]);if(t){i=t(s);for(var h=0;h<i.length;h++)r.call(s,i[h])&&(l[i[h]]=s[i[h]])}}return l}},541535:(e,t,o)=>{var r=o(862525),a=60103,n=60106;var s=60109,i=60110,l=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var h=Symbol.for;a=h("react.element"),n=h("react.portal"),h("react.fragment"),h("react.strict_mode"),h("react.profiler"),s=h("react.provider"),i=h("react.context"),l=h("react.forward_ref"),h("react.suspense"),c=h("react.memo"),u=h("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)t+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,t,o){this.props=e,this.context=t,this.refs=g,this.updater=o||d}function y(){}function b(e,t,o){this.props=e,this.context=t,this.refs=g,this.updater=o||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var k=b.prototype=new y;k.constructor=b,r(k,m.prototype),k.isPureReactComponent=!0;var w={current:null},v=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,o){var r,n={},s=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)v.call(t,r)&&!j.hasOwnProperty(r)&&(n[r]=t[r]);var l=arguments.length-2;if(1===l)n.children=o;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];n.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===n[r]&&(n[r]=l[r]);return{$$typeof:a,type:e,key:s,ref:i,props:n,_owner:w.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var O=/\/+/g;function B(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,r,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case n:l=!0}}if(l)return s=s(l=e),e=""===r?"."+B(l,0):r,Array.isArray(s)?(o="",null!=e&&(o=e.replace(O,"$&/")+"/"),C(s,t,o,"",(function(e){return e}))):null!=s&&(x(s)&&(s=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(O,"$&/")+"/")+e)),t.push(s)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=r+B(i=e[c],c);l+=C(i,t,o,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(i=e.next()).done;)l+=C(i=i.value,t,o,u=r+B(i,c++),s);else if("object"===i)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function N(e,t,o){if(null==e)return e;var r=[],a=0;return C(e,r,"","",(function(e){return t.call(o,e,a++)})),r}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function _(){var e=T.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,o)=>{o(541535)}}]);