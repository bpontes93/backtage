"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[694368],{891858:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ke});var r=n(667294),a=n(386010),o=n(789712),l=n(565319),c=n(353605),i=n(625682),s=n(592210),u=n(306379),d=n(358010);const m={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function b(){const{shown:e,scrollToTop:t}=function({threshold:e}){const[t,n]=(0,r.useState)(!1),a=(0,r.useRef)(!1),{startScroll:o,cancelScroll:l}=(0,u.Ct)();return(0,u.RF)((({scrollY:t},r)=>{const o=null==r?void 0:r.scrollY;o&&(a.current?a.current=!1:t>=o?(l(),n(!1)):t<e?n(!1):t+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,d.S)((e=>{e.location.hash&&(a.current=!0,n(!1))})),{shown:t,scrollToTop:()=>o(0)}}({threshold:300});return r.createElement("button",{"aria-label":(0,s.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,a.Z)("clean-btn",l.k.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var p=n(616550),f=n(424683),h=n(986016),g=n(949572);function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){return r.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const E={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function k({onClick:e}){return r.createElement("button",{type:"button",title:(0,s.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,s.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,a.Z)("button button--secondary button--outline",E.collapseSidebarButton),onClick:e},r.createElement(y,{className:E.collapseSidebarButtonIcon}))}var O=n(864738),S=n(337806);const _=Symbol("EmptyContext"),C=r.createContext(_);function I({children:e}){const[t,n]=(0,r.useState)(null),a=(0,r.useMemo)((()=>({expandedItem:t,setExpandedItem:n})),[t]);return r.createElement(C.Provider,{value:a},e)}var w=n(952647),j=n(287275),x=n(931984),P=n(430358);function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function B({categoryLabel:e,onClick:t}){return r.createElement("button",{"aria-label":(0,s.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:e}),type:"button",className:"clean-btn menu__caret",onClick:t})}function Z(e){var{item:t,onItemClick:n,activePath:o,level:i,index:s}=e,u=T(e,["item","onItemClick","activePath","level","index"]);const{items:d,label:m,collapsible:b,className:p,href:f}=t,{docs:{sidebar:{autoCollapseCategories:g}}}=(0,h.L)(),v=function(e){const t=(0,P.Z)();return(0,r.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,c.LM)(e):void 0),[e,t])}(t),y=(0,c._F)(t,o),E=(0,j.Mg)(f,o),{collapsed:k,setCollapsed:O}=(0,w.u)({initialState:()=>!!b&&(!y&&t.collapsed)}),{expandedItem:I,setExpandedItem:Z}=function(){const e=(0,r.useContext)(C);if(e===_)throw new S.i6("DocSidebarItemsExpandedStateProvider");return e}(),L=(e=!k)=>{Z(e?null:s),O(e)};return function({isActive:e,collapsed:t,updateCollapsed:n}){const a=(0,S.D9)(e);(0,r.useEffect)((()=>{e&&!a&&t&&n(!1)}),[e,a,t,n])}({isActive:y,collapsed:k,updateCollapsed:L}),(0,r.useEffect)((()=>{b&&null!=I&&I!==s&&g&&O(!0)}),[b,I,s,O,g]),r.createElement("li",{className:(0,a.Z)(l.k.docs.docSidebarItemCategory,l.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":k},p)},r.createElement("div",{className:(0,a.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":E})},r.createElement(x.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){N(e,t,n[t])}))}return e}({className:(0,a.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!f&&b,"menu__link--active":y}),onClick:b?e=>{null==n||n(t),f?L(!1):(e.preventDefault(),L())}:()=>{null==n||n(t)},"aria-current":E?"page":void 0,"aria-expanded":b?!k:void 0,href:b?null!=v?v:"#":v},u),m),f&&b&&r.createElement(B,{categoryLabel:m,onClick:e=>{e.preventDefault(),L()}})),r.createElement(w.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},r.createElement(J,{items:d,tabIndex:k?-1:0,onItemClick:n,activePath:o,level:i+1})))}var L=n(847785),A=n(340379);const H={menuExternalLink:"menuExternalLink_NmtK"};function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function W(e){var{item:t,onItemClick:n,activePath:o,level:i,index:s}=e,u=D(e,["item","onItemClick","activePath","level","index"]);const{href:d,label:m,className:b,autoAddBaseUrl:p}=t,f=(0,c._F)(t,o),h=(0,L.Z)(d);return r.createElement("li",{className:(0,a.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:m},r.createElement(x.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){M(e,t,n[t])}))}return e}({className:(0,a.Z)("menu__link",!h&&H.menuExternalLink,{"menu__link--active":f}),autoAddBaseUrl:p,"aria-current":f?"page":void 0,to:d},h&&{onClick:n?()=>n(t):void 0},u),m,!h&&r.createElement(A.Z,null)))}const R={menuHtmlItem:"menuHtmlItem_M9Kj"};function F({item:e,level:t,index:n}){const{value:o,defaultStyle:c,className:i}=e;return r.createElement("li",{className:(0,a.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(t),c&&[R.menuHtmlItem,"menu__list-item"],i),key:n,dangerouslySetInnerHTML:{__html:o}})}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){V(e,t,n[t])}))}return e}function K(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Y(e){var{item:t}=e,n=K(e,["item"]);switch(t.type){case"category":return r.createElement(Z,U({item:t},n));case"html":return r.createElement(F,U({item:t},n));default:return r.createElement(W,U({item:t},n))}}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function q(e){var{items:t}=e,n=G(e,["items"]);const a=(0,c.f)(t,n.activePath);return r.createElement(I,null,a.map(((e,t)=>r.createElement(Y,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){z(e,t,n[t])}))}return e}({key:t,item:e,index:t},n)))))}const J=(0,r.memo)(q),Q={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function X({path:e,sidebar:t,className:n}){const o=function(){const{isActive:e}=(0,O.nT)(),[t,n]=(0,r.useState)(e);return(0,u.RF)((({scrollY:t})=>{e&&n(0===t)}),[e]),e&&t}();return r.createElement("nav",{"aria-label":(0,s.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,a.Z)("menu thin-scrollbar",Q.menu,o&&Q.menuWithAnnouncementBar,n)},r.createElement("ul",{className:(0,a.Z)(l.k.docs.docSidebarMenu,"menu__list")},r.createElement(J,{items:t,activePath:e,level:1})))}const $="sidebar_njMd",ee="sidebarWithHideableNavbar_wUlq",te="sidebarHidden_VK0M",ne="sidebarLogo_isFc";function re({path:e,sidebar:t,onCollapse:n,isHidden:o}){const{navbar:{hideOnScroll:l},docs:{sidebar:{hideable:c}}}=(0,h.L)();return r.createElement("div",{className:(0,a.Z)($,l&&ee,o&&te)},l&&r.createElement(g.Z,{tabIndex:-1,className:ne}),r.createElement(X,{path:e,sidebar:t}),c&&r.createElement(k,{onClick:n}))}const ae=r.memo(re);var oe=n(636847),le=n(57796);const ce=({sidebar:e,path:t})=>{const n=(0,le.e)();return r.createElement("ul",{className:(0,a.Z)(l.k.docs.docSidebarMenu,"menu__list")},r.createElement(J,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1}))};function ie(e){return r.createElement(oe.Zo,{component:ce,props:e})}const se=r.memo(ie);function ue(e){const t=(0,f.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(ae,e),a&&r.createElement(se,e))}const de={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function me({toggleSidebar:e}){return r.createElement("div",{className:de.expandButton,title:(0,s.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,s.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e},r.createElement(y,{className:de.expandButtonIcon}))}const be={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function pe({children:e}){const t=(0,i.V)();var n;return r.createElement(r.Fragment,{key:null!==(n=null==t?void 0:t.name)&&void 0!==n?n:"noSidebar"},e)}function fe({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:n}){const{pathname:o}=(0,p.TH)(),[c,i]=(0,r.useState)(!1),s=(0,r.useCallback)((()=>{c&&i(!1),n((e=>!e))}),[n,c]);return r.createElement("aside",{className:(0,a.Z)(l.k.docs.docSidebarContainer,be.docSidebarContainer,t&&be.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(be.docSidebarContainer)&&t&&i(!0)}},r.createElement(pe,null,r.createElement("div",{className:(0,a.Z)(be.sidebarViewport,c&&be.sidebarViewportHidden)},r.createElement(ue,{sidebar:e,path:o,onCollapse:s,isHidden:c}),c&&r.createElement(me,{toggleSidebar:s}))))}const he={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function ge({hiddenSidebarContainer:e,children:t}){const n=(0,i.V)();return r.createElement("main",{className:(0,a.Z)(he.docMainContainer,(e||!n)&&he.docMainContainerEnhanced)},r.createElement("div",{className:(0,a.Z)("container padding-top--md padding-bottom--lg",he.docItemWrapper,e&&he.docItemWrapperEnhanced)},t))}const ve={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function ye({children:e}){const t=(0,i.V)(),[n,a]=(0,r.useState)(!1);return r.createElement("div",{className:ve.docsWrapper},r.createElement(b,null),r.createElement("div",{className:ve.docRoot},t&&r.createElement(fe,{sidebar:t.items,hiddenSidebarContainer:n,setHiddenSidebarContainer:a}),r.createElement(ge,{hiddenSidebarContainer:n},e)))}var Ee=n(240146);function ke(e){const t=(0,c.SN)(e);if(!t)return r.createElement(Ee.Z,null);const{docElement:n,sidebarName:s,sidebarItems:u}=t;return r.createElement(o.FG,{className:(0,a.Z)(l.k.page.docsDocPage)},r.createElement(i.b,{name:s,items:u},r.createElement(ye,null,n)))}},240146:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(667294),a=n(386010),o=n(592210),l=n(524999);function c({className:e}){return r.createElement("main",{className:(0,a.Z)("container margin-vert--xl",e)},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement(l.Z,{as:"h1",className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);