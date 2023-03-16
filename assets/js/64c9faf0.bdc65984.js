"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[505125],{603905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>g});var n=a(667294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(a),h=r,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(g,i(i({ref:e},c),{},{components:a})):n.createElement(g,i({ref:e},c))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},64732:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});a(667294);var n=a(603905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const i={title:"How to enable authentication in Backstage using Passport",author:"Lee Mills, Spotify",authorURL:"https://github.com/leemills83",authorImageURL:"https://avatars1.githubusercontent.com/u/1236238?s=460&v=4"},s=void 0,l={permalink:"/blog/2020/07/01/how-to-enable-authentication-in-backstage-using-passport",source:"@site/blog/2020-07-01-how-to-enable-authentication-in-backstage-using-passport.md",title:"How to enable authentication in Backstage using Passport",description:"auth-landing-page",date:"2020-07-01T00:00:00.000Z",formattedDate:"July 1, 2020",tags:[],readingTime:2.01,hasTruncateMarker:!0,authors:[{name:"Lee Mills, Spotify",url:"https://github.com/leemills83",imageURL:"https://avatars1.githubusercontent.com/u/1236238?s=460&v=4"}],frontMatter:{title:"How to enable authentication in Backstage using Passport",author:"Lee Mills, Spotify",authorURL:"https://github.com/leemills83",authorImageURL:"https://avatars1.githubusercontent.com/u/1236238?s=460&v=4"},prevItem:{title:"Announcing Backstage Software Templates",permalink:"/blog/2020/08/05/announcing-backstage-software-templates"},nextItem:{title:"Backstage Service Catalog released in alpha",permalink:"/blog/2020/06/22/backstage-service-catalog-alpha"}},p={authorsImageUrls:[void 0]},c=[{value:"What is Passport?",id:"what-is-passport",level:2},{value:"Using authentication in Backstage",id:"using-authentication-in-backstage",level:2},{value:"Ready to get started by adding your chosen provider and implementation?",id:"ready-to-get-started-by-adding-your-chosen-provider-and-implementation",level:2},{value:"Interested in contributing to the next steps for authentication?",id:"interested-in-contributing-to-the-next-steps-for-authentication",level:2}],u={toc:c};function d(t){var{components:e}=t,i=o(t,["components"]);return(0,n.kt)("wrapper",r({},u,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"auth-landing-page",src:a(897781).Z,width:"1548",height:"622"})),(0,n.kt)("p",null,"Getting authentication right is important. It helps keep your platform safe, it\u2019s one of the first things users will interact with, and there are many different authentication providers to support. To this end, we chose to use ",(0,n.kt)("a",r({parentName:"p"},{href:"http://www.passportjs.org/"}),"Passport")," to provide an easy-to-use, out-of-the-box experience that can be extended to your own, pre-existing authentication providers (known as strategies). The Auth APIs in Backstage serve two purposes: identify the user and provide a way for plugins to request access to third-party services on behalf of the user. We\u2019ve already implemented Google and GitHub authentication to provide examples and to get you started."),(0,n.kt)("h2",r({},{id:"what-is-passport"}),"What is Passport?"),(0,n.kt)("p",null,(0,n.kt)("a",r({parentName:"p"},{href:"http://www.passportjs.org/"}),"Passport")," is Express-compatible authentication middleware for Node.js that provides access to over 500 authentication providers, covering everything from Google, Facebook, and Twitter to generic OAuth, SAML, and local. Check out all of the currently available ",(0,n.kt)("a",r({parentName:"p"},{href:"http://www.passportjs.org/"}),"strategies listed on the Passport site"),"."),(0,n.kt)("p",null,"Passport has allowed us to leverage an existing open-source authentication framework that will, in turn, give users the freedom to add and extend alternative authentication strategies to their instance of Backstage."),(0,n.kt)("h2",r({},{id:"using-authentication-in-backstage"}),"Using authentication in Backstage"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"auth-landing-page",src:a(764454).Z,width:"206",height:"185"})),(0,n.kt)("p",null,"First, check out the provided Google and GitHub implementations! ",(0,n.kt)("a",r({parentName:"p"},{href:"https://backstage.io/blog/2020/04/30/how-to-quickly-set-up-backstage"}),"Spin up a local copy of Backstage")," along with our example-backend. You can find more documentation on setting up the example backend ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/tree/master/packages/backend"}),"here"),", but be sure to include the relevant client IDs and secrets when running ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn start"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),"AUTH_GOOGLE_CLIENT_ID=x AUTH_GOOGLE_CLIENT_SECRET=x AUTH_GITHUB_CLIENT_ID=x AUTH_GITHUB_CLIENT_SECRET=x SENTRY_TOKEN=x LOG_LEVEL=debug yarn start\n")),(0,n.kt)("p",null,"You can find the implementation for these strategies along with a lightweight proof-of-concept implementation for SAML authentication at ",(0,n.kt)("inlineCode",{parentName:"p"},"<root>/plugins/auth-backend/src/providers"),"."),(0,n.kt)("h2",r({},{id:"ready-to-get-started-by-adding-your-chosen-provider-and-implementation"}),"Ready to get started by adding your chosen provider and implementation?"),(0,n.kt)("p",null,"Getting started is really straightforward, and can be broadly broken down into five steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the ",(0,n.kt)("a",r({parentName:"li"},{href:"http://www.passportjs.org/"}),"Passport-based provider package that best suits your needs"),"."),(0,n.kt)("li",{parentName:"ol"},"Add a new provider to ",(0,n.kt)("inlineCode",{parentName:"li"},"plugins/auth-backend/src/providers/")),(0,n.kt)("li",{parentName:"ol"},"Implement the provider, extending the suitable framework, if needed."),(0,n.kt)("li",{parentName:"ol"},"Add the provider to the backend."),(0,n.kt)("li",{parentName:"ol"},"Add a frontend Auth Utility API.")),(0,n.kt)("p",null,"For full details, take a look at our ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/auth/add-auth-provider"}),"\u201cAdding authentication providers\u201d documentation")," and at the ",(0,n.kt)("a",r({parentName:"p"},{href:"http://www.passportjs.org/docs/"}),"excellent documentation")," provided by Passport."),(0,n.kt)("h2",r({},{id:"interested-in-contributing-to-the-next-steps-for-authentication"}),"Interested in contributing to the next steps for authentication?"),(0,n.kt)("p",null,"We\u2019ve already seen both GitLab and Okta contributions from the community \u2014 and we\u2019re thinking about a few more providers we\u2019d like to add to Backstage, too. You can find those, and other authentication-related issues, in our repository by filtering with the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/issues?q=is%3Aissue+is%3Aopen+label%3Aauth"}),"auth label"),"."))}d.isMDXComponent=!0},897781:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/auth-landing-36c55882496255abe67830e1ea6db2ea.png"},764454:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/auth-sidebar-7757b6f66cada94c378abb527b01859a.png"}}]);