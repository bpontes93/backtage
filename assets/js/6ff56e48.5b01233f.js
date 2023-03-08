/*! For license information please see 6ff56e48.5b01233f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[984785],{603905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(667294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),g=o,h=u["".concat(l,".").concat(g)]||u[g]||p[g]||i;return t?a.createElement(h,r(r({ref:n},d),{},{components:t})):a.createElement(h,r({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},58918:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});t(827378);var a=t(603905);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const r={id:"migrating",title:"Migrating your Backend to the New Backend System",sidebar_label:"Migration Guide",description:"How to migrate existing backends to the new backend system"},s=void 0,l={unversionedId:"backend-system/building-backends/migrating",id:"backend-system/building-backends/migrating",title:"Migrating your Backend to the New Backend System",description:"How to migrate existing backends to the new backend system",source:"@site/../docs/backend-system/building-backends/08-migrating.md",sourceDirName:"backend-system/building-backends",slug:"/backend-system/building-backends/migrating",permalink:"/docs/backend-system/building-backends/migrating",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/backend-system/building-backends/08-migrating.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"migrating",title:"Migrating your Backend to the New Backend System",sidebar_label:"Migration Guide",description:"How to migrate existing backends to the new backend system"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/backend-system/building-backends/index"},next:{title:"Overview",permalink:"/docs/backend-system/building-plugins-and-modules/index"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Overall Structure",id:"overall-structure",level:2},{value:"Migrating the Index File",id:"migrating-the-index-file",level:2},{value:"Handling Custom Environments",id:"handling-custom-environments",level:2},{value:"Cleaning Up the Plugins Folder",id:"cleaning-up-the-plugins-folder",level:2},{value:"The App Plugin",id:"the-app-plugin",level:3},{value:"The Catalog Plugin",id:"the-catalog-plugin",level:3},{value:"The Events Plugin",id:"the-events-plugin",level:3},{value:"The Scaffolder Plugin",id:"the-scaffolder-plugin",level:3}],u={toc:d};function p(e){var{components:n}=e,t=i(e,["components"]);return(0,a.kt)("wrapper",o({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"DISCLAIMER: The new backend system is in alpha, and still under active development. As such, it is not considered stable, and it is not recommended to migrate production backends to the new backend system until it has a stable release."))),(0,a.kt)("h2",o({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"This section describes how to migrate an existing Backstage backend service\npackage (typically in ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/backend"),") to use the new backend system."),(0,a.kt)("p",null,"One of the main benefits of the new backend system is that it abstracts away the\nway that plugins and their dependencies are wired up, leading to a significantly\nsimplified backend package that rarely if ever needs to change when plugins or\ntheir dependencies evolve. You generally don't have to convert all of your\ninternal plugins and support classes themselves to the backend system first -\nthe migration here will mostly deal with wiring and using compatibility wrappers\nwhere possible in the backend package itself. We hope that you will find that\nyou end up with a much smaller, easier to understand, and easier to maintain\npackage as a result of these steps, and then being able to ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/backend-system/building-plugins-and-modules/migrating"}),"migrate\nplugins")," as a separate\nendeavour later."),(0,a.kt)("h2",o({},{id:"overall-structure"}),"Overall Structure"),(0,a.kt)("p",null,"Your typical backend package has a few overall component parts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)("inlineCode",{parentName:"li"},"index.ts")," file that houses all of the creation and wiring together of all\nof the plugins and their dependencies"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"types.ts"),' file that defines the "environment", i.e. the various\ndependencies that get created by the backend and passed down into each plugin'),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"plugins")," folder which has one file for each plugin, e.g.\n",(0,a.kt)("inlineCode",{parentName:"li"},"plugins/catalog.ts"))),(0,a.kt)("p",null,"The index file has this overall shape:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"import todo from './plugins/todo'; // repeated for N plugins\n\nfunction makeCreateEnv(config: Config) {\n  return (plugin: string): PluginEnvironment => {\n    // ... build per-plugin environment\n  };\n}\n\nasync function main() {\n  // ... early init\n  const createEnv = makeCreateEnv(config);\n  const todoEnv = useHotMemoize(module, () => createEnv('todo')); // repeated for N plugins\n  const apiRouter = Router();\n  apiRouter.use('/todo', await todo(todoEnv)); // repeated for N plugins\n  // ... wire up and start http server\n}\n\nmodule.hot?.accept();\nmain().catch(...);\n")),(0,a.kt)("h2",o({},{id:"migrating-the-index-file"}),"Migrating the Index File"),(0,a.kt)("p",null,"This migration will try to leave the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," folder unchanged initially, first\nfocusing on removing the environment type and reducing the index file to its\nbare minimum. Then as a later step, we can reduce the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," folder bit by\nbit, replacing those files generally with one-liners in the index file instead."),(0,a.kt)("p",null,"Let's start by establishing the basis of your new index file. You may want to\ncomment out its old contents, or renaming the old file to ",(0,a.kt)("inlineCode",{parentName:"p"},"index.backup.ts")," for\nreference and making a new blank one to work on - whichever works best for you.\nThese are our new blank contents in the index file:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"// packages/backend/src/index.ts\nimport { createBackend } from '@backstage/backend-defaults';\n\nconst backend = createBackend();\nbackend.start();\n")),(0,a.kt)("p",null,"Note that the environment builder and the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," dance are entirely gone."),(0,a.kt)("p",null,"We'll also want to add some backend system packages as dependencies. Run the\nfollowing command:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"# from the repository root\nyarn add --cwd packages/backend @backstage/backend-defaults @backstage/backend-plugin-api\n")),(0,a.kt)("p",null,"You should now be able to start this up with the familiar ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn workspace\nbackend start")," command locally and seeing some logs scroll by. But it'll just be\na blank service with no real features added. So let's stop it with ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+C")," and\nreintroduce some plugins into the mix."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-diff"})," import { createBackend } from '@backstage/backend-defaults';\n+import { legacyPlugin } from '@backstage/backend-common';\n\n const backend = createBackend();\n+backend.add(legacyPlugin('todo', import('./plugins/todo')));\n backend.start();\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"todo")," plugin used above is just an example and you may not have it enabled\nin your own backend. Feel free to change it to some other plugin that you\nactually have in your ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," folder, for example\n",(0,a.kt)("inlineCode",{parentName:"p"},"backend.add(legacyPlugin('catalog', import('./plugins/catalog')))"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"legacyPlugin")," helper makes it easy to bridge the gap between the old-style\nplugin files and the new backend system. It ensures that the dependencies that\nyou used to have to declare by hand in your env are gathered behind the scenes,\nthen passes them into the relevant ",(0,a.kt)("inlineCode",{parentName:"p"},"createPlugin")," export function, and makes\nsure that the route handler it returns is passed into the HTTP router with the\ngiven prefix."),(0,a.kt)("h2",o({},{id:"handling-custom-environments"}),"Handling Custom Environments"),(0,a.kt)("p",null,"In the simple case, what we did above is sufficient, TypeScript is happy, and\nthe backend runs with the new feature. If they do, feel free to skip this entire\nsection, and deleting ",(0,a.kt)("inlineCode",{parentName:"p"},"types.ts"),"."),(0,a.kt)("p",null,"Sometimes though, type errors can be reported on the newly added line, saying\nthat parts of the ",(0,a.kt)("inlineCode",{parentName:"p"},"PluginEnvironment")," type do not match. This happens when the\nenvironment was changed from the defaults, perhaps with your own custom\nadditions. If this is the case in your installation, you still aren't out of\nluck - you can build a customized ",(0,a.kt)("inlineCode",{parentName:"p"},"legacyPlugin")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-diff"})," import { createBackend } from '@backstage/backend-defaults';\n-import { legacyPlugin } from '@backstage/backend-common';\n+import { makeLegacyPlugin, loggerToWinstonLogger } from '@backstage/backend-common';\n+import { coreServices } from '@backstage/backend-plugin-api';\n\n+const legacyPlugin = makeLegacyPlugin(\n+  {\n+    cache: coreServices.cache,\n+    config: coreServices.config,\n+    database: coreServices.database,\n+    discovery: coreServices.discovery,\n+    logger: coreServices.logger,\n+    permissions: coreServices.permissions,\n+    scheduler: coreServices.scheduler,\n+    tokenManager: coreServices.tokenManager,\n+    reader: coreServices.urlReader,\n+    identity: coreServices.identity,\n+    // ... and your own additions\n+  },\n+  {\n+    logger: log => loggerToWinstonLogger(log),\n+  },\n+);\n\n const backend = createBackend();\n backend.add(legacyPlugin('todo', import('./plugins/todo')));\n backend.start();\n")),(0,a.kt)("p",null,"The first argument to ",(0,a.kt)("inlineCode",{parentName:"p"},"makeLegacyPlugin")," is the mapping from environment keys to\nreferences to actual ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/backend-system/architecture/services"}),"backend system services"),'.\nThe second argument allows you to "tweak" the types of those services to\nsomething more fitting to your env. For example, you\'ll see that the logger\nservice API type was changed from the raw Winston logger of old, to a different,\ncustom API, so we use a helper function to transform that particular one.'),(0,a.kt)("p",null,"To make additions as mentioned above to the environment, you will start to get\ninto the weeds of how the backend system wiring works. You'll need to have a\nservice reference and a service factory that performs the actual creation of\nyour service. Please see ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/backend-system/architecture/services#defining-a-service"}),"the services\narticle")," to learn how to\ncreate a service ref and its default factory. You can place that code directly\nin the index file for now if you want, or near the actual implementation class\nin question."),(0,a.kt)("p",null,"In this example, we'll assume that your added environment field is named\n",(0,a.kt)("inlineCode",{parentName:"p"},"example"),", and the created ref is named ",(0,a.kt)("inlineCode",{parentName:"p"},"exampleServiceRef"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-diff"}),"+import { exampleServiceRef } from '<somewhere>'; // if the definition is elsewhere\n\n const legacyPlugin = makeLegacyPlugin(\n   {\n     // ... the above core services still go here\n+    example: exampleServiceRef\n   },\n   {\n     logger: log => loggerToWinstonLogger(log),\n   },\n );\n")),(0,a.kt)("p",null,"After this, your backend will know how to instantiate your thing on demand and\nplace it in the legacy plugin environment."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: If you happen to be dealing with a service ref that does NOT have a\ndefault implementation, but rather has a separate service factory, then you\nwill also need to import that factory and pass it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"services")," array\nargument of ",(0,a.kt)("inlineCode",{parentName:"p"},"createBackend"),".")),(0,a.kt)("h2",o({},{id:"cleaning-up-the-plugins-folder"}),"Cleaning Up the Plugins Folder"),(0,a.kt)("p",null,"For plugins that are private and your own, you can follow a ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/backend-system/building-plugins-and-modules/migrating"}),"dedicated migration\nguide")," as you see fit, at a\nlater time."),(0,a.kt)("p",null,"For third party backend plugins, in particular the larger core plugins that are\nmaintained by the Backstage maintainers, you may find that they have already\nbeen migrated to the new backend system. This section describes some specific\nsuch migrations you can make."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: For each of these, note that your backend still needs to have a\ndependency (e.g. in ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/backend/package.json"),") to those plugin packages,\nand they still need to be configured properly in your app-config. Those\nmechanisms still work just the same as they used to in the old backend system.")),(0,a.kt)("h3",o({},{id:"the-app-plugin"}),"The App Plugin"),(0,a.kt)("p",null,"The app backend plugin that serves the frontend from the backend can trivially\nbe used in its new form."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-diff"})," // packages/backend/src/index.ts\n+import { appPlugin } from '@backstage/plugin-app-backend';\n\n const backend = createBackend();\n+backend.add(appPlugin({ appPackageName: 'app' }));\n")),(0,a.kt)("p",null,"This is an example of how options can be passed into some backend plugins. The\napp plugin specifically needs to know the name of the package that holds the\nfrontend code. This is the ",(0,a.kt)("inlineCode",{parentName:"p"},'"name"')," field in that package's ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),",\ntypically found in your ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/app"),' folder. By default it\'s just plain "app".'),(0,a.kt)("p",null,"You should be able to delete the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins/app.ts")," file at this point."),(0,a.kt)("h3",o({},{id:"the-catalog-plugin"}),"The Catalog Plugin"),(0,a.kt)("p",null,"A basic installation of the catalog plugin looks as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-diff"})," // packages/backend/src/index.ts\n+import { catalogPlugin } from '@backstage/plugin-catalog-backend';\n+import { catalogModuleTemplateKind } from '@backstage/plugin-scaffolder-backend';\n\n const backend = createBackend();\n+backend.add(catalogPlugin());\n+backend.add(catalogModuleTemplateKind());\n")),(0,a.kt)("p",null,"Note that this also installs a module from the scaffolder, namely the one which\nenables the use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Template")," kind. In the unlikely event that you do not\nuse templates at all, you can remove those lines."),(0,a.kt)("p",null,"If you have other customizations made to ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins/catalog.ts"),", such as adding\ncustom processors or entity providers, read on. Otherwise, you should be able to\njust delete that file at this point."),(0,a.kt)("p",null,"You will use the ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/backend-system/architecture/extension-points"}),"extension points"),"\nmechanism to extend or tweak the functionality of the plugin. To do that,\nyou'll make your own bespoke ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/backend-system/architecture/modules"}),"module")," which\ndepends on the appropriate extension point and interacts with it."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-diff"})," // packages/backend/src/index.ts\n+import { catalogProcessingExtensionPoint } from '@backstage/plugin-catalog-node';\n+import { createBackendModule } from '@backstage/backend-plugin-api';\n\n+const catalogModuleCustomExtensions = createBackendModule({\n+  pluginId: 'catalog',  // name of the plugin that the module is targeting\n+  moduleId: 'customExtensions',\n+  register(env) {\n+    env.registerInit({\n+      deps: {\n+        catalog: catalogProcessingExtensionPoint,\n+        // ... and other dependencies as needed\n+      },\n+      init({ catalog /* ..., other dependencies */ }) {\n+        // Here you have the opportunity to interact with the extension\n+        // point before the plugin itself gets instantiated\n+        catalog.addEntityProvider(new MyEntityProvider()); // just an example\n+        catalog.addProcessor(new MyProcessor());           // just an example\n+      },\n+    });\n+  },\n+});\n\n const backend = createBackend();\n backend.add(catalogPlugin());\n backend.add(catalogModuleTemplateKind());\n+backend.add(catalogModuleCustomExtensions());\n")),(0,a.kt)("p",null,"This also requires that you have a dependency on the corresponding node package,\nif you didn't already have one."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"# from the repository root\nyarn add --cwd packages/backend @backstage/plugin-catalog-node\n")),(0,a.kt)("p",null,'Here we\'ve placed the module directly in the backend index file just to get\ngoing easily, but feel free to move it out to where it fits best. As you migrate\nyour entire plugin flora to the new backend system, you will probably make more\nand more of these modules as "first class" things, living right next to the\nimplementations that they represent, and being exported from there.'),(0,a.kt)("h3",o({},{id:"the-events-plugin"}),"The Events Plugin"),(0,a.kt)("p",null,"A basic installation of the events plugin looks as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-diff"})," // packages/backend/src/index.ts\n+import { eventsPlugin } from '@backstage/plugin-events-backend';\n\n const backend = createBackend();\n+backend.add(eventsPlugin());\n")),(0,a.kt)("p",null,"If you have other customizations made to ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins/events.ts"),", such as adding\ncustom subscribers, read on. Otherwise, you should be able to just delete that\nfile at this point."),(0,a.kt)("p",null,"You will use the ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/backend-system/architecture/extension-points"}),"extension points"),"\nmechanism to extend or tweak the functionality of the plugin. To do that,\nyou'll make your own bespoke ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/backend-system/architecture/modules"}),"module")," which\ndepends on the appropriate extension point and interacts with it."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-diff"})," // packages/backend/src/index.ts\n+import { eventsExtensionPoint } from '@backstage/plugin-events-node';\n+import { createBackendModule } from '@backstage/backend-plugin-api';\n\n+const eventsModuleCustomExtensions = createBackendModule({\n+  pluginId: 'events',  // name of the plugin that the module is targeting\n+  moduleId: 'customExtensions',\n+  register(env) {\n+    env.registerInit({\n+      deps: {\n+        events: eventsExtensionPoint,\n+        // ... and other dependencies as needed\n+      },\n+      init({ events /* ..., other dependencies */ }) {\n+        // Here you have the opportunity to interact with the extension\n+        // point before the plugin itself gets instantiated\n+        events.addSubscribers(new MySubscriber()); // just an example\n+      },\n+    });\n+  },\n+});\n\n const backend = createBackend();\n backend.add(eventsPlugin());\n+backend.add(eventsModuleCustomExtensions());\n")),(0,a.kt)("p",null,"This also requires that you have a dependency on the corresponding node package,\nif you didn't already have one."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"# from the repository root\nyarn add --cwd packages/backend @backstage/plugin-events-node\n")),(0,a.kt)("p",null,'Here we\'ve placed the module directly in the backend index file just to get\ngoing easily, but feel free to move it out to where it fits best. As you migrate\nyour entire plugin flora to the new backend system, you will probably make more\nand more of these modules as "first class" things, living right next to the\nimplementations that they represent, and being exported from there.'),(0,a.kt)("h3",o({},{id:"the-scaffolder-plugin"}),"The Scaffolder Plugin"),(0,a.kt)("p",null,"A basic installation of the scaffolder plugin looks as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-diff"})," // packages/backend/src/index.ts\n+import { scaffolderPlugin } from '@backstage/plugin-scaffolder-backend';\n\n const backend = createBackend();\n+backend.add(scaffolderPlugin());\n")),(0,a.kt)("p",null,"If you have other customizations made to ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins/scaffolder.ts"),", such as adding\ncustom actions, read on. Otherwise, you should be able to just delete that file\nat this point."),(0,a.kt)("p",null,"You will use the ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/backend-system/architecture/extension-points"}),"extension points"),"\nmechanism to extend or tweak the functionality of the plugin. To do that,\nyou'll make your own bespoke ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/backend-system/architecture/modules"}),"module")," which\ndepends on the appropriate extension point and interacts with it."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-diff"})," // packages/backend/src/index.ts\n+import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node';\n+import { createBackendModule } from '@backstage/backend-plugin-api';\n\n+const scaffolderModuleCustomExtensions = createBackendModule({\n+  pluginId: 'scaffolder',  // name of the plugin that the module is targeting\n+  moduleId: 'customExtensions',\n+  register(env) {\n+    env.registerInit({\n+      deps: {\n+        scaffolder: scaffolderActionsExtensionPoint,\n+        // ... and other dependencies as needed\n+      },\n+      init({ scaffolder /* ..., other dependencies */ }) {\n+        // Here you have the opportunity to interact with the extension\n+        // point before the plugin itself gets instantiated\n+        scaffolder.addActions(new MyAction()); // just an example\n+      },\n+    });\n+  },\n+});\n\n const backend = createBackend();\n backend.add(scaffolderPlugin());\n+backend.add(scaffolderModuleCustomExtensions());\n")),(0,a.kt)("p",null,"This also requires that you have a dependency on the corresponding node package,\nif you didn't already have one."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"# from the repository root\nyarn add --cwd packages/backend @backstage/plugin-scaffolder-node\n")),(0,a.kt)("p",null,'Here we\'ve placed the module directly in the backend index file just to get\ngoing easily, but feel free to move it out to where it fits best. As you migrate\nyour entire plugin flora to the new backend system, you will probably make more\nand more of these modules as "first class" things, living right next to the\nimplementations that they represent, and being exported from there.'))}p.isMDXComponent=!0},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var r,s,l=o(e),c=1;c<arguments.length;c++){for(var d in r=Object(arguments[c]))t.call(r,d)&&(l[d]=r[d]);if(n){s=n(r);for(var u=0;u<s.length;u++)a.call(r,s[u])&&(l[s[u]]=r[s[u]])}}return l}},541535:(e,n,t)=>{var a=t(862525),o=60103,i=60106;var r=60109,s=60110,l=60112;var c=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),i=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),r=u("react.provider"),s=u("react.context"),l=u("react.forward_ref"),u("react.suspense"),c=u("react.memo"),d=u("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function f(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||h}function k(){}function b(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||h}f.prototype.isReactComponent={},f.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,n,"setState")},f.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=f.prototype;var y=b.prototype=new k;y.constructor=b,a(y,f.prototype),y.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function x(e,n,t){var a,i={},r=null,s=null;if(null!=n)for(a in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(r=""+n.key),n)w.call(n,a)&&!N.hasOwnProperty(a)&&(i[a]=n[a]);var l=arguments.length-2;if(1===l)i.children=t;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===i[a]&&(i[a]=l[a]);return{$$typeof:o,type:e,key:r,ref:s,props:i,_owner:v.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function j(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function C(e,n,t,a,r){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case i:l=!0}}if(l)return r=r(l=e),e=""===a?"."+j(l,0):a,Array.isArray(r)?(t="",null!=e&&(t=e.replace(O,"$&/")+"/"),C(r,n,t,"",(function(e){return e}))):null!=r&&(P(r)&&(r=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(r,t+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(O,"$&/")+"/")+e)),n.push(r)),1;if(l=0,a=""===a?".":a+":",Array.isArray(e))for(var c=0;c<e.length;c++){var d=a+j(s=e[c],c);l+=C(s,n,t,d,r)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),c=0;!(s=e.next()).done;)l+=C(s=s.value,n,t,d=a+j(s,c++),r);else if("object"===s)throw n=""+e,Error(g(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return l}function T(e,n,t){if(null==e)return e;var a=[],o=0;return C(e,a,"","",(function(e){return n.call(t,e,o++)})),a}function E(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var S={current:null};function M(){var e=S.current;if(null===e)throw Error(g(321));return e}},827378:(e,n,t)=>{t(541535)}}]);