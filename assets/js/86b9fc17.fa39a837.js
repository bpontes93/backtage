/*! For license information please see 86b9fc17.fa39a837.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[574275],{894225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(824246),o=n(511151);const r={id:"journey",title:"Future developer journey",description:"This document describes a possible journey of a future Backstage"},i=void 0,s={unversionedId:"tutorials/journey",id:"tutorials/journey",title:"Future developer journey",description:"This document describes a possible journey of a future Backstage",source:"@site/../docs/tutorials/journey.md",sourceDirName:"tutorials",slug:"/tutorials/journey",permalink:"/docs/tutorials/journey",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/tutorials/journey.md",tags:[],version:"current",frontMatter:{id:"journey",title:"Future developer journey",description:"This document describes a possible journey of a future Backstage"},sidebar:"docs",previous:{title:"Deprecations",permalink:"/docs/api/deprecations"},next:{title:"Adding Custom Plugin to Existing Monorepo App",permalink:"/docs/tutorials/quickstart-app-plugin"}},c={},l=[];function h(e){const t=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",em:"em",h1:"h1",code:"code",pre:"pre",a:"a"},(0,o.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["This document describes a possible journey of a ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.em,{children:"future"})})," Backstage plugin\ndeveloper as they build a plugin that touches many different aspects of a\nBackstage. The story invents many new things that are not part of Backstage\ntoday, but are things that I'm suggesting we should add as long term or north\nstar goals. The idea is to discuss what parts of the story makes sense to aim\nfor, and what we'd want to do differently or not at all. The \"chapters\" are\nnumbered to make it a bit easier to comment on parts of the story."]}),"\n"]}),"\n",(0,a.jsx)(t.h1,{id:"the-protagonist",children:"The Protagonist"}),"\n",(0,a.jsx)(t.p,{children:"Sam is an experienced developer that has worked with Backstage for a while, and\nknows the best practices and tools available to build plugins. Sam also likes\nmusic and wants to have a theme tune for every service in Backstage."}),"\n",(0,a.jsx)(t.h1,{id:"the-end",children:"The End"}),"\n",(0,a.jsx)(t.p,{children:"Sam built a Spotify plugin for Backstage that allows service owners to define a\ntheme tune for their service. The theme tune plays whenever a user visits the\nservice page in Backstage. The plugin is published to npm and available for any\norganization to easily install and add to their Backstage installation."}),"\n",(0,a.jsx)(t.h1,{id:"1-a-new-plugin",children:"1. A New Plugin"}),"\n",(0,a.jsxs)(t.p,{children:["Sam chooses to develop this plugin in a standalone project and creates a new\nplugin using ",(0,a.jsx)(t.code,{children:"npx @backstage/cli new --select plugin"}),", which detects that it's not\nbeing run in an existing project and therefore creates a separate plugin repo."]}),"\n",(0,a.jsxs)(t.p,{children:["Spinning up the frontend with ",(0,a.jsx)(t.code,{children:"yarn start"}),", Sam goes to work with getting the\nbase functionality of a Spotify web player going. By installing a couple of\ndependencies and whipping together a nice UI, the player is pretty much done."]}),"\n",(0,a.jsx)(t.h1,{id:"2-the-auth-menace",children:"2. The Auth Menace"}),"\n",(0,a.jsxs)(t.p,{children:["Sam realizes users need to be authenticated towards the Spotify API to be able\nto play music, and Backstage doesn't support Spotify login yet. Sam adds the\n",(0,a.jsx)(t.code,{children:"@backstage/plugin-auth-backend"})," as local development middleware in the project,\nand provides the necessary wrapping logic and configuration for the\n",(0,a.jsx)(t.code,{children:"passport-spotify"})," strategy. The Spotify auth provider is now available in the\nlocal development backend, and by adding a frontend ",(0,a.jsx)(t.code,{children:"SpotifyAuth"})," Utility API\nthat implements the ",(0,a.jsx)(t.code,{children:"OAuthApi"})," type, it's now working in the frontend too."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const spotifyAuthApiRef = createApiRef<OAuthApi>({\n  id: 'core.auth.spotify',\n});\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Sam realizes that Spotify auth might be useful to others, and that it would be\nmore convenient if it was a part of the Backstage Core. After submitting and\nmerging a Pull Request with the additions to the\n",(0,a.jsx)(t.code,{children:"@backstage/plugin-auth-backend"})," and ",(0,a.jsx)(t.code,{children:"@backstage/core-plugin-api"})," packages,\nSpotify auth is now available for everyone to use. Since the Backstage Core team\nalso adds it to the public demo server, Sam can now get rid of it in the local\nsetup and rely on the shared development auth providers instead."]}),"\n",(0,a.jsxs)(t.p,{children:["The only thing left now is making sure that users of the plugin provide Spotify\nauth in the app. Sam ensures this by adding ",(0,a.jsx)(t.code,{children:"spotifyAuthApiRef"})," to the plugin's\nlist of required APIs, as well as listing it in the requirements section in the\nREADME."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-md",children:"## Requirements\n\nThis plugin requires the following APIs to function:\n\n- `spotifyAuthApiRef` from `@@backstage/core-plugin-api@^1.1.0`\n"})}),"\n",(0,a.jsx)(t.h1,{id:"3-the-catalog-awakens",children:"3. The Catalog Awakens"}),"\n",(0,a.jsxs)(t.p,{children:["Sam now has a working player and a method for users to log in to listen to\nmusic, but the goal is to provide theme songs for services. Sam adds this\nfunctionality by defining a new metadata annotation called\n",(0,a.jsx)(t.code,{children:"sam.wise/spotify-track-id"}),". The annotation's value is a Spotify track ID and\ncan be defined in a component like this:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"apiVersion: backstage.io/v1\nkind: Component\nmetadata:\n  name: my-component\n  annotations:\n    sam.wise/spotify-track-id: '4uLU6hMCjMI75M1A2tKUQC'\nspec:\n  type: service\n"})}),"\n",(0,a.jsx)(t.p,{children:"Sam creates a JSON schema that documents the annotation and allows it to be used\nin validation and documentation for organizations that choose to adopt the\nplugin."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "sam.wise/spotify-track-id": {\n    "$id": "https://raw.githubusercontent.com/sam/backstage-spotify-theme/master/annotation.json#/sam.wise/spotify-track-id",\n    "type": "string",\n    "title": "Spotify Track Annotation",\n    "description": "Spotify track ID to associated with the entity",\n    "examples": ["4uLU6hMCjMI75M1A2tKUQC"]\n  }\n}\n'})}),"\n",(0,a.jsx)(t.h1,{id:"4-the-rise-of-widgets",children:"4. The Rise of Widgets"}),"\n",(0,a.jsx)(t.p,{children:"Sam also wraps the music player in an entity page widget. This allows anyone\nthat wants to use the plugin to add the player to any of their entity layout\ntemplates, which will make it show up for every entity of that kind."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"export const PlayerWidget = plugin.createEntityWidget({\n  component: WebPlayer,\n  locations: ['header', 'card', 'footer'],\n  cardSize: [2, 4],\n});\n"})}),"\n",(0,a.jsx)(t.p,{children:"The widget receives information about the entity in whose page it's being\nembedded, which makes it simple to grab the track id from the annotations and\nhook up the player."}),"\n",(0,a.jsx)(t.p,{children:"Sam also modifies the standalone plugin development setup to include this new\nwidget inside a basic entity page, adding it to a couple of different places\nwhere users of the plugin may want to put the player, just to make sure they all\nwork."}),"\n",(0,a.jsx)(t.h1,{id:"5-the-first-user",children:"5. The First User"}),"\n",(0,a.jsxs)(t.p,{children:["At this point the only things that anyone that wants to use Sam's plugin needs\nto do are to add\n",(0,a.jsx)(t.a,{href:"https://raw.githubusercontent.com/sam/backstage-spotify-theme/master/annotation.json#/sam.wise/spotify-track-id",children:"https://raw.githubusercontent.com/sam/backstage-spotify-theme/master/annotation.json#/sam.wise/spotify-track-id"}),"\nto their catalog schema, import and add the ",(0,a.jsx)(t.code,{children:"PlayerWidget"})," on the desired entity\ntemplate pages, and make sure they're providing Spotify auth."]}),"\n",(0,a.jsx)(t.p,{children:'Sam soon sees the first "Used by" show up on GitHub, and feedback starts rolling\nin. Users really like the plugin, and some a requesting the possibility to\nselect a theme tune when creating a new component. Sam jumps on the idea and\nadds a new creation hook that is exported by the plugin. The hook can be\ninstalled either in a single, all, or component templates that match a label. It\nadds a field as a part of the component creation process with a nice search box\nthat allows users to search for a track that they want to use as the theme tune.'}),"\n",(0,a.jsx)(t.h1,{id:"6-return-to-the-repo",children:"6. Return to the Repo"}),"\n",(0,a.jsxs)(t.p,{children:["Sam is pretty content at this point, but would like to make it easier for users\nto change the track after creation, preferable using the same search box that\nwas made for the creation form. By adding an edit button to the ",(0,a.jsx)(t.code,{children:"PlayerWidget"}),",\nand a nice empty state, Sam is able to provide the appropriate hooks in the GUI\nto open up a search dialog."]}),"\n",(0,a.jsxs)(t.p,{children:["To save the selected track, Sam uses the ",(0,a.jsx)(t.code,{children:"RepoApi"})," to suggest a change to the\nentity definition file. This will create a Pull Request for organizations that\nuse GitHub, a Merge Request for users of GitLab, and so on."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const repoApi = useApi(repoApiRef);\nconst alertApi = useApi(alertApiRef);\n\nconst onSave = async () => {\n  const { url } = await repoApi.createChangeRequest({\n    title: `Change theme tune to ${track.title} by ${track.artist}`,\n    changes: [\n      {\n        path: entityYamlPath,\n        content: newEntityYamlContent,\n      },\n    ],\n  });\n\n  alertApi.post({ message: `Requested change, ${url}` });\n};\n"})}),"\n",(0,a.jsx)(t.p,{children:"Now it's much simpler for users to change the theme tune, as they no longer need\nto go look up a track ID and edit a YAML file. Instead, they can now stay inside\nBackstage and search for the track and request the change from there. In\naddition, the requested change can be reviewed by the regular process of each\norganization."}),"\n",(0,a.jsx)(t.h1,{id:"7-the-user-strikes-back",children:"7. The User Strikes Back"}),"\n",(0,a.jsx)(t.p,{children:"Sam's plugin is pretty popular at this point, and has been picked up and used by\nmany organizations. But some users start voicing concerns that they have too\nmany different hand-crafted annotations in their entity descriptions, and would\nlike to be able to avoid some of them. They really like the theme tunes though,\nand wish they could keep them without having to put them in the entity\ndescription, even if that means it won't go through the regular source control\nreview process."}),"\n",(0,a.jsxs)(t.p,{children:["One day Sam receives a Pull Request for the plugin. It adds an option to use the\nDatabase provided by ",(0,a.jsx)(t.code,{children:"@backstage/backend-common"})," to store the track ID. It's all\npackaged into a new backend plugin that will also extend the catalog backend\nwith schema and functionality to automatically load the value of the\n",(0,a.jsx)(t.code,{children:"sam.wise/spotify-track-id"})," annotation from the backend plugin and database. The\nbackend plugin also extends the common GraphQL schema with a mutation that\nupdates the track ID in the database."]}),"\n",(0,a.jsxs)(t.p,{children:["On the frontend the Pull Request doesn't change much. It defines the save action\nthe was previously using the ",(0,a.jsx)(t.code,{children:"RepoApi"})," in its own API."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"type ThemeTuneStorageApi = {\n  save(entity: Entity, trackId: string): Promise<void>;\n};\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The plugin also provides two different implementations of the API, one that uses\nthe old behavior of the ",(0,a.jsx)(t.code,{children:"RepoApi"}),", and a new one that calls the ",(0,a.jsx)(t.code,{children:"GraphQL"})," API.\nThe new API relies on the ",(0,a.jsx)(t.code,{children:"IdentityApi"})," as a mechanism for authorizing changes,\ninstead of source control reviews. The ",(0,a.jsx)(t.code,{children:"IdentityApi"})," provides a token that is\nincluded in the request to the backend, which then must match the owner of the\ncomponent for which the user is trying to change the theme tune."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Author breaking the 4th wall here. I actually think every GraphQL request\nshould include the ID token of the user, but invented a reason to include it\nhere anyway."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The API is selected based on a configuration parameter for the plugin, but\ndefaults to the original ",(0,a.jsx)(t.code,{children:"RepoApi"})," behavior."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"if (config.getBoolean('storeTrackInDatabase')) {\n  return new GraphQLThemeTuneStore(graphqlClient, identityApi, alertApi);\n} else {\n  return new RepoThemeTuneStore(repoApi, alertApi);\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:'Sam is amazed by the pure awesomeness of this change, replies with a "\ud83d\udc4d" and\nhits merge.'}),"\n",(0,a.jsx)(t.h1,{id:"8-attack-of-the-clones",children:"8. Attack of the Clones"}),"\n",(0,a.jsxs)(t.p,{children:["Sam just released v1.8.4 of the plugin, and at this point it's so popular that a\ncouple of other plugins have started depending on the\n",(0,a.jsx)(t.code,{children:"sam.wise/spotify-track-id"})," annotation. One such plugin being the\n",(0,a.jsx)(t.code,{children:"spotify-album-art"})," plugin that can display the album art of the theme tune as\nthe background of the entity header. Sam thinks it's all pretty cool, but\ndoesn't like that the annotation that was once an internal concern of the plugin\nis now becoming a standard in the community."]}),"\n",(0,a.jsxs)(t.p,{children:["In order to standardize the annotation in Backstage, Sam submits a Pull Request\nto the Backstage Core repo. The request suggests a new well-known metadata\nannotation called ",(0,a.jsx)(t.code,{children:"spotify.com/track-id"}),", with the same schema definition as\nSam's label, and refers to Sam's own plugin and the ",(0,a.jsx)(t.code,{children:"spotify-album-art"})," plugin\nas existing usages. The Backstage maintainers merge the Pull Request, after\nchecking with the folks over at Spotify that they're cool with the annotation,\nand faffing about over some minor grammar mistake in the annotation description."]}),"\n",(0,a.jsxs)(t.p,{children:["With the annotation now available inside Backstage Core, Sam releases v2 of the\nplugin, which uses the new annotation. It can still consume the old annotation\nfor backwards compatibility, but new users of the plugin no longer need to add\nthe\n",(0,a.jsx)(t.a,{href:"https://raw.githubusercontent.com/sam/backstage-spotify-theme/master/annotation.json#/sam.wise/spotify-track-id",children:"https://raw.githubusercontent.com/sam/backstage-spotify-theme/master/annotation.json#/sam.wise/spotify-track-id"}),"\nextension to their catalog schema, as it's now part of the core schema. The new\nrelease of Sam's plugin specifies a dependency on Backstage with a minimum\nversion set to the same release as the one were the annotation was added to the\ncore schema."]}),"\n",(0,a.jsx)(t.h1,{id:"9-revenge-of-the-sam",children:"9. Revenge of the Sam"}),"\n",(0,a.jsx)(t.p,{children:"Sam, now in full control of all theme tunes in Backstage, releases v2.0.1, which\nswitches all tracks to 4uLU6hMCjMI75M1A2tKUQC. Sam wanted to do something more\nnefarious, but since Backstage sandboxes sensitive actions and is mostly\nread-only with strict CSP, Sam's hands were tied."})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var r,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in r=Object(arguments[c]))n.call(r,l)&&(s[l]=r[l]);if(t){i=t(r);for(var h=0;h<i.length;h++)a.call(r,i[h])&&(s[i[h]]=r[i[h]])}}return s}},371426:(e,t,n)=>{n(862525);var a=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;o=r("react.element"),t.Fragment=r("react.fragment")}var i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var a,r={},l=null,h=null;for(a in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)s.call(t,a)&&!c.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:o,type:e,key:l,ref:h,props:r,_owner:i.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var a=n(862525),o=60103,r=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,s=60110,c=60112;t.Suspense=60113;var l=60115,h=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),r=u("react.portal"),t.Fragment=u("react.fragment"),t.StrictMode=u("react.strict_mode"),t.Profiler=u("react.profiler"),i=u("react.provider"),s=u("react.context"),c=u("react.forward_ref"),t.Suspense=u("react.suspense"),l=u("react.memo"),h=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=g.prototype;var w=b.prototype=new y;w.constructor=b,a(w,g.prototype),w.isPureReactComponent=!0;var k={current:null},j=Object.prototype.hasOwnProperty,v={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var a,r={},i=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,a)&&!v.hasOwnProperty(a)&&(r[a]=t[a]);var c=arguments.length-2;if(1===c)r.children=n;else if(1<c){for(var l=Array(c),h=0;h<c;h++)l[h]=arguments[h+2];r.children=l}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===r[a]&&(r[a]=c[a]);return{$$typeof:o,type:e,key:i,ref:s,props:r,_owner:k.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var A=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,n,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case r:c=!0}}if(c)return i=i(c=e),e=""===a?"."+_(c,0):a,Array.isArray(i)?(n="",null!=e&&(n=e.replace(A,"$&/")+"/"),R(i,t,n,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(A,"$&/")+"/")+e)),t.push(i)),1;if(c=0,a=""===a?".":a+":",Array.isArray(e))for(var l=0;l<e.length;l++){var h=a+_(s=e[l],l);c+=R(s,t,n,h,i)}else if(h=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof h)for(e=h.call(e),l=0;!(s=e.next()).done;)c+=R(s=s.value,t,n,h=a+_(s,l++),i);else if("object"===s)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function T(e,t,n){if(null==e)return e;var a=[],o=0;return R(e,a,"","",(function(e){return t.call(n,e,o++)})),a}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function I(){var e=P.current;if(null===e)throw Error(p(321));return e}var O={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:a};t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(p(143));return e}},t.Component=g,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var r=a({},e.props),i=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(h in t)j.call(t,h)&&!v.hasOwnProperty(h)&&(r[h]=void 0===t[h]&&void 0!==l?l[h]:t[h])}var h=arguments.length-2;if(1===h)r.children=n;else if(1<h){l=Array(h);for(var u=0;u<h;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:o,type:e.type,key:i,ref:s,props:r,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:C}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return I().useCallback(e,t)},t.useContext=function(e,t){return I().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return I().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return I().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return I().useLayoutEffect(e,t)},t.useMemo=function(e,t){return I().useMemo(e,t)},t.useReducer=function(e,t,n){return I().useReducer(e,t,n)},t.useRef=function(e){return I().useRef(e)},t.useState=function(e){return I().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>r});var a=n(667294);const o=a.createContext({});function r(e){const t=a.useContext(o);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||i:r(e),a.createElement(o.Provider,{value:s},t)}}}]);