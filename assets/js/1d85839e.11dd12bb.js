/*! For license information please see 1d85839e.11dd12bb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[645861],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},15185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});n(827378);var o=n(603905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"cli",title:"TechDocs CLI",description:"TechDocs CLI - a utility command line interface for managing TechDocs sites in Backstage."},c=void 0,l={unversionedId:"features/techdocs/cli",id:"features/techdocs/cli",title:"TechDocs CLI",description:"TechDocs CLI - a utility command line interface for managing TechDocs sites in Backstage.",source:"@site/../docs/features/techdocs/cli.md",sourceDirName:"features/techdocs",slug:"/features/techdocs/cli",permalink:"/docs/features/techdocs/cli",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/techdocs/cli.md",tags:[],version:"current",frontMatter:{id:"cli",title:"TechDocs CLI",description:"TechDocs CLI - a utility command line interface for managing TechDocs sites in Backstage."},sidebar:"docs",previous:{title:"Configuring CI/CD to generate and publish TechDocs sites",permalink:"/docs/features/techdocs/configuring-ci-cd"},next:{title:"How-To guides",permalink:"/docs/features/techdocs/how-to-guides"}},p={},u=[{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Preview TechDocs site locally in a Backstage like environment",id:"preview-techdocs-site-locally-in-a-backstage-like-environment",level:3},{value:"Generate TechDocs site from a documentation project",id:"generate-techdocs-site-from-a-documentation-project",level:3},{value:"Publish generated TechDocs sites",id:"publish-generated-techdocs-sites",level:3},{value:"Publishing from behind a proxy",id:"publishing-from-behind-a-proxy",level:4},{value:"Migrate content for case-insensitive access",id:"migrate-content-for-case-insensitive-access",level:3},{value:"Authentication",id:"authentication",level:4},{value:"Development",id:"development",level:2}],d={toc:u};function h(e){var{components:t}=e,s=i(e,["components"]);return(0,o.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},d,s),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Utility command line interface for managing TechDocs sites in\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage"},"Backstage"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/techdocs/"},"https://backstage.io/docs/features/techdocs/")),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Supports local development/preview of a TechDocs site in a Backstage app."),(0,o.kt)("li",{parentName:"ul"},"Supports generation and publishing of a documentation site in a CI/CD\nworkflow.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"techdocs-cli --help\nUsage: techdocs-cli [options] [command]\n\nOptions:\n  -V, --version             output the version number\n  -h, --help                display help for command\n\nCommands:\n  generate|build [options]  Generate TechDocs documentation site using mkdocs.\n  publish [options]         Publish generated TechDocs site to an external storage AWS S3,\n                            Google GCS, etc.\n  serve:mkdocs [options]    Serve a documentation project locally using mkdocs serve.\n  serve [options]           Serve a documentation project locally in a Backstage app-like\n                            environment\n  help [command]            display help for command\n")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"You can always use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/npm/npx"},(0,o.kt)("inlineCode",{parentName:"a"},"npx"))," to run the latest version\nof ",(0,o.kt)("inlineCode",{parentName:"p"},"techdocs-cli")," -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @techdocs/cli [command]\n")),(0,o.kt)("p",null,"Or you can install it using ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@techdocs/cli"},"npm")," -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @techdocs/cli\ntechdocs-cli [command]\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"preview-techdocs-site-locally-in-a-backstage-like-environment"},"Preview TechDocs site locally in a Backstage like environment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"techdocs-cli serve\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A preview of techdocs-cli serve command",src:n(726541).Z,width:"1918",height:"1136"})),(0,o.kt)("p",null,"By default, Docker and\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/backstage/techdocs-container"},"techdocs-container")," is used to\nmake sure all the dependencies are installed. However, Docker can be disabled\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-docker")," flag."),(0,o.kt)("p",null,"The command starts two local servers - an MkDocs preview server on port 8000 and\na Backstage app server on port 3000. The Backstage app has a custom TechDocs API\nimplementation, which uses the MkDocs preview server as a proxy to fetch the\ngenerated documentation files and assets."),(0,o.kt)("p",null,"Backstage instances might differ from the provided preview app in appearance and\nbehavior. To preview documentation with a different app, use\n",(0,o.kt)("inlineCode",{parentName:"p"},"--preview-app-bundle-path")," with a path to the bundle of the app to use instead.\nTypically, a ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," directory."),(0,o.kt)("p",null,"NOTE: When using a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"techdocs")," docker image, make sure the entry point is\nalso ",(0,o.kt)("inlineCode",{parentName:"p"},'ENTRYPOINT ["mkdocs"]')," or override with ",(0,o.kt)("inlineCode",{parentName:"p"},"--docker-entrypoint"),"."),(0,o.kt)("p",null,"Command reference:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Usage: techdocs-cli serve [options]\n\nServe a documentation project locally in a Backstage app-like environment\n\nOptions:\n  -i, --docker-image <DOCKER_IMAGE>           The mkdocs docker container to use (default: "spotify/techdocs")\n  --docker-entrypoint <DOCKER_ENTRYPOINT>     Override the image entrypoint\n  --docker-option <DOCKER_OPTION...>          Extra options to pass to the docker run command, e.g. "--add-host=internal.host:192.168.11.12"\n                                              (can be added multiple times).\n  --no-docker                                 Do not use Docker, use MkDocs executable in current user environment.\n  --mkdocs-port <PORT>                        Port for MkDocs server to use (default: "8000")\n  --preview-app-bundle-path <PATH_TO_BUNDLE>  Preview documentation using a web app other than the included one.\n  --preview-app-port <PORT>                   Port where the preview will be served.\n                                              Can only be used with "--preview-app-bundle-path". (default: "3000")\n  -v --verbose                                Enable verbose output. (default: false)\n  -h, --help                                  display help for command\n')),(0,o.kt)("h3",{id:"generate-techdocs-site-from-a-documentation-project"},"Generate TechDocs site from a documentation project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"techdocs-cli generate\n")),(0,o.kt)("p",null,"Alias: ",(0,o.kt)("inlineCode",{parentName:"p"},"techdocs-cli build")),(0,o.kt)("p",null,"The generate command uses the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/tree/master/plugins/techdocs-node"},(0,o.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-techdocs-node")),"\npackage from Backstage for consistency. A Backstage app can also generate and\npublish TechDocs sites if ",(0,o.kt)("inlineCode",{parentName:"p"},"techdocs.builder")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"'local'")," in\n",(0,o.kt)("inlineCode",{parentName:"p"},"app-config.yaml"),". See\n",(0,o.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/techdocs/configuration"},"configuration reference"),"."),(0,o.kt)("p",null,"By default, this command uses Docker and\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/backstage/techdocs-container"},"techdocs-container")," to make\nsure all the dependencies are installed. But it can be disabled using\n",(0,o.kt)("inlineCode",{parentName:"p"},"--no-docker")," flag."),(0,o.kt)("p",null,"Command reference:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'techdocs-cli generate --help\nUsage: techdocs-cli generate|build [options]\n\nGenerate TechDocs documentation site using MkDocs.\n\nOptions:\n  --source-dir <PATH>             Source directory containing mkdocs.yml and docs/ directory. (default: ".")\n  --output-dir <PATH>             Output directory containing generated TechDocs site. (default: "./site/")\n  --docker-image <DOCKER_IMAGE>   The mkdocs docker container to use (default: "spotify/techdocs:v1.0.3")\n  --no-pull                       Do not pull the latest docker image\n  --no-docker                     Do not use Docker, use MkDocs executable and plugins in current user environment.\n  --techdocs-ref <HOST_TYPE:URL>  The repository hosting documentation source files e.g.\n                                  url:https://ghe.mycompany.net.com/org/repo.\n                                  This value is same as the backstage.io/techdocs-ref annotation of the corresponding\n                                  Backstage entity.\n                                  It is completely fine to skip this as it is only being used to set repo_url in mkdocs.yml\n                                  if not found.\n  --etag <ETAG>                   A unique identifier for the prepared tree e.g. commit SHA. If provided it will be stored\n                                  in techdocs_metadata.json.\n  --omitTechdocsCoreMkdocsPlugin  An option to disable automatic addition of techdocs-core plugin to the mkdocs.yaml files.\n                                  Defaults to false, which means that the techdocs-core plugin is always added to the mkdocs file.\n  --legacyCopyReadmeMdToIndexMd   Attempt to ensure an index.md exists falling back to using <docs-dir>/README.md or README.md\n                                  in case a default <docs-dir>/index.md is not provided. (default: false)\n  -v --verbose                    Enable verbose output. (default: false)\n  -h, --help                      display help for command\n')),(0,o.kt)("h3",{id:"publish-generated-techdocs-sites"},"Publish generated TechDocs sites"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"techdocs-cli publish --publisher-type <awsS3|googleGcs|azureBlobStorage> --storage-name <bucket/container name> --entity <namespace/kind/name>\n")),(0,o.kt)("p",null,"After generating a TechDocs site using ",(0,o.kt)("inlineCode",{parentName:"p"},"techdocs-cli generate"),", use the publish\ncommand to upload the static generated files on a cloud storage (AWS/GCS) bucket\nor (Azure) container which your Backstage app can read from."),(0,o.kt)("p",null,"The value for ",(0,o.kt)("inlineCode",{parentName:"p"},"--entity")," must be the Backstage entity which the generated\nTechDocs site belongs to. You can find the values in your Entity's\n",(0,o.kt)("inlineCode",{parentName:"p"},"catalog-info.yaml")," file. If namespace is missing in the ",(0,o.kt)("inlineCode",{parentName:"p"},"catalog-info.yaml"),",\nuse ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),". The directory structure used in the storage bucket is\n",(0,o.kt)("inlineCode",{parentName:"p"},"namespace/kind/name/<files>"),"."),(0,o.kt)("p",null,"Note that the values are case-sensitive. An example for ",(0,o.kt)("inlineCode",{parentName:"p"},"--entity")," is\n",(0,o.kt)("inlineCode",{parentName:"p"},"default/Component/<entityName>"),"."),(0,o.kt)("p",null,"Command reference:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Usage: techdocs-cli publish [options]\n\nPublish generated TechDocs site to an external storage AWS S3, Google GCS, etc.\n\nOptions:\n  --publisher-type <TYPE>                                       (Required always) awsS3 | googleGcs | azureBlobStorage | openStackSwift - same as techdocs.publisher.type in Backstage app-config.yaml\n  --storage-name <BUCKET/CONTAINER NAME>                        (Required always) In case of AWS/GCS, use the bucket name. In case of Azure, use container name. Same as\n                                                                techdocs.publisher.[TYPE].bucketName\n  --entity <NAMESPACE/KIND/NAME>                                (Required always) Entity uid separated by / in namespace/kind/name order (case-sensitive). Example: default/Component/myEntity\n  --legacyUseCaseSensitiveTripletPaths                          Publishes objects with cased entity triplet prefix when set (e.g. namespace/Kind/name). Only use if your TechDocs backend is configured\n                                                                the same way. (default: false)\n  --azureAccountName <AZURE ACCOUNT NAME>                       (Required for Azure) specify when --publisher-type azureBlobStorage\n  --azureAccountKey <AZURE ACCOUNT KEY>                         Azure Storage Account key to use for authentication. If not specified, you must set AZURE_TENANT_ID, AZURE_CLIENT_ID &\n                                                                AZURE_CLIENT_SECRET as environment variables.\n  --awsRoleArn <AWS ROLE ARN>                                   Optional AWS ARN of role to be assumed.\n  --awsEndpoint <AWS ENDPOINT>                                  Optional AWS endpoint to send requests to.\n  --awsProxy <HTTPS Proxy>                                      Optional Proxy to use for AWS requests.\n  --awsS3sse <AWS SSE>                                          Optional AWS S3 Server Side Encryption.\n  --awsS3ForcePathStyle                                         Optional AWS S3 option to force path style.\n  --awsBucketRootPath <AWS BUCKET ROOT PATH>                    Optional sub-directory to store files in Amazon S3\n  --osCredentialId <OPENSTACK SWIFT APPLICATION CREDENTIAL ID>  (Required for OpenStack) specify when --publisher-type openStackSwift\n  --osSecret <OPENSTACK SWIFT APPLICATION CREDENTIAL SECRET>    (Required for OpenStack) specify when --publisher-type openStackSwift\n  --osAuthUrl <OPENSTACK SWIFT AUTHURL>                         (Required for OpenStack) specify when --publisher-type openStackSwift\n  --osSwiftUrl <OPENSTACK SWIFT SWIFTURL>                       (Required for OpenStack) specify when --publisher-type openStackSwift\n  --gcsBucketRootPath <GCS BUCKET ROOT PATH>                    Optional sub-directory to store files in Google cloud storage\n  --directory <PATH>                                            Path of the directory containing generated files to publish (default: "./site/")\n  -h, --help                                                    display help for command\n')),(0,o.kt)("h4",{id:"publishing-from-behind-a-proxy"},"Publishing from behind a proxy"),(0,o.kt)("p",null,"For users attempting to publish TechDocs content behind a proxy, the TechDocs CLI leverages ",(0,o.kt)("inlineCode",{parentName:"p"},"global-agent")," to navigate the proxy to successfully connect to that location. To enable ",(0,o.kt)("inlineCode",{parentName:"p"},"global-agent"),", the following variables need to be set prior to running the techdocs-cli command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export GLOBAL_AGENT_HTTPS_PROXY=${HTTP_PROXY}\nexport GLOBAL_AGENT_NO_PROXY=${NO_PROXY}\n")),(0,o.kt)("h3",{id:"migrate-content-for-case-insensitive-access"},"Migrate content for case-insensitive access"),(0,o.kt)("p",null,"Prior to the beta version of TechDocs (",(0,o.kt)("inlineCode",{parentName:"p"},"v[0.11.0]"),"), TechDocs were stored in\nobject storage using a case-sensitive entity triplet (e.g.\n",(0,o.kt)("inlineCode",{parentName:"p"},"default/API/name/index.html"),"). This resulted in a limitation where that exact\ncase was required in the Backstage URL in order to read/render TechDocs content.\nAs of ",(0,o.kt)("inlineCode",{parentName:"p"},"v[0.11.0]")," of the TechDocs plugin, any case is allowed in the URL (e.g.\n",(0,o.kt)("inlineCode",{parentName:"p"},"default/api/name"),"), matching the behavior of the Catalog plugin."),(0,o.kt)("p",null,"Backstage instances created with TechDocs ",(0,o.kt)("inlineCode",{parentName:"p"},"v[0.11.0]")," or later do not need this\ncommand. However, when upgrading to this version from an older version of\nTechDocs, the ",(0,o.kt)("inlineCode",{parentName:"p"},"migrate")," command can be used prior to deployment to ensure docs\nremain accessible without having to rebuild all docs."),(0,o.kt)("p",null,"Prior to upgrading to ",(0,o.kt)("inlineCode",{parentName:"p"},"v[0.11.0]")," or greater, run this command to copy all\nassets to their lower-case triplet equivalents like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"techdocs-cli migrate --publisher-type <awsS3|googleGcs|azureBlobStorage> --storage-name <bucket/container name> --verbose\n")),(0,o.kt)("p",null,"Once migrated and the upgraded version of the Backstage plugin has been\ndeployed, you can clean up the legacy, case-sensitive triplet files by\nre-running the command with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--removeOriginal")," flag passed, which ",(0,o.kt)("em",{parentName:"p"},"moves"),"\n(rather than copies) the files. Note: this deletes files and is therefore a\ndestructive operation that should performed with caution."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"techdocs-cli migrate --publisher-type <awsS3|googleGcs|azureBlobStorage> --storage-name <bucket/container name> --removeOriginal --verbose\n")),(0,o.kt)("p",null,"Afterward, update your TechDocs CLI to ",(0,o.kt)("inlineCode",{parentName:"p"},"v[0.7.0]")," to ensure further publishing\nhappens using a lower-case entity triplet."),(0,o.kt)("p",null,"Note: arguments for this command largely match those of the ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," command,\ndepending on your chosen storage provider. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"techdocs-cli migrate --help")," for\ndetails."),(0,o.kt)("h4",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"You need to make sure that your environment is able to authenticate with the\ntarget cloud provider. ",(0,o.kt)("inlineCode",{parentName:"p"},"techdocs-cli")," uses the official Node.js clients provided\nby AWS (v3), Google Cloud and Azure. You can authenticate using environment\nvariables and/or by other means (",(0,o.kt)("inlineCode",{parentName:"p"},"~/.aws/credentials"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.config/gcloud")," etc.)"),(0,o.kt)("p",null,"Refer to the Authentication section of the following documentation depending\nupon your cloud storage provider -"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://backstage.io/docs/features/techdocs/using-cloud-storage#configuring-google-gcs-bucket-with-techdocs"},"Google Cloud Storage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://backstage.io/docs/features/techdocs/using-cloud-storage#configuring-aws-s3-bucket-with-techdocs"},"AWS S3")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://backstage.io/docs/features/techdocs/using-cloud-storage#configuring-azure-blob-storage-container-with-techdocs"},"Azure Blob Storage"))),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("p",null,"You are welcome to contribute to TechDocs CLI to improve it and support new\nfeatures! See the project\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/main/src/packages/techdocs-cli/README.md"},"README"),"\nfor more information."))}h.isMDXComponent=!0},726541:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/techdocs-cli-serve-preview-aa54f38162b18cee2747ce73121b0588.png"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(a){return!1}}()?Object.assign:function(e,r){for(var i,s,c=a(e),l=1;l<arguments.length;l++){for(var p in i=Object(arguments[l]))n.call(i,p)&&(c[p]=i[p]);if(t){s=t(i);for(var u=0;u<s.length;u++)o.call(i,s[u])&&(c[s[u]]=i[s[u]])}}return c}},541535:(e,t,n)=>{var o=n(862525),a=60103,r=60106;var i=60109,s=60110,c=60112;var l=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),r=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),s=u("react.context"),c=u("react.forward_ref"),u("react.suspense"),l=u("react.memo"),p=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function g(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}function k(){}function b(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=g.prototype;var y=b.prototype=new k;y.constructor=b,o(y,g.prototype),y.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var o,r={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,o)&&!O.hasOwnProperty(o)&&(r[o]=t[o]);var c=arguments.length-2;if(1===c)r.children=n;else if(1<c){for(var l=Array(c),p=0;p<c;p++)l[p]=arguments[p+2];r.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===r[o]&&(r[o]=c[o]);return{$$typeof:a,type:e,key:i,ref:s,props:r,_owner:v.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var S=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,n,o,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case r:c=!0}}if(c)return i=i(c=e),e=""===o?"."+C(c,0):o,Array.isArray(i)?(n="",null!=e&&(n=e.replace(S,"$&/")+"/"),A(i,t,n,"",(function(e){return e}))):null!=i&&(T(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(S,"$&/")+"/")+e)),t.push(i)),1;if(c=0,o=""===o?".":o+":",Array.isArray(e))for(var l=0;l<e.length;l++){var p=o+C(s=e[l],l);c+=A(s,t,n,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),l=0;!(s=e.next()).done;)c+=A(s=s.value,t,n,p=o+C(s,l++),i);else if("object"===s)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function P(e,t,n){if(null==e)return e;var o=[],a=0;return A(e,o,"","",(function(e){return t.call(n,e,a++)})),o}function D(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function j(){var e=E.current;if(null===e)throw Error(h(321));return e}},827378:(e,t,n)=>{n(541535)}}]);