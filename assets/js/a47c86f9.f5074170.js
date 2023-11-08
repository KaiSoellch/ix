"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49725],{30876:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(2784);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(a),d=i,v=p["".concat(s,".").concat(d)]||p[d]||c[d]||r;return a?n.createElement(v,l(l({ref:t},m),{},{components:a})):n.createElement(v,l({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},63483:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(2784),i=a(731);function r(e){var t,a,r,l,o,s,u,m;return n.createElement("div",{className:"row with--border"},n.createElement("div",{className:"col-sm-6"},n.createElement("div",{className:"ApiTable__Name"},null==e||null==(t=e.attribute)?void 0:t.name,null==e||null==(a=e.attribute)||null==(r=a.tags)?void 0:r.filter((e=>"since"===e.type)).map((t=>{var a;return n.createElement(i.h,{message:t.message,key:`Tag_Since_${null==e||null==(a=e.attribute)?void 0:a.name}`})})),null==e||null==(l=e.attribute)||null==(o=l.tags)?void 0:o.filter((e=>"deprecated"===e.type)).map((t=>{var a;return n.createElement(i.Q,{message:t.message,key:`Tag_Deprecated_${null==e||null==(a=e.attribute)?void 0:a.name}`})})))),n.createElement("div",{className:"col-sm-6"},n.createElement("div",{className:"ApiTable__Content"},n.createElement("span",{className:"Attribute__Description"},null==e||null==(s=e.attribute)?void 0:s.description),n.createElement("div",{className:"container-fluid"},null==e||null==(u=e.attribute)||null==(m=u.definition)?void 0:m.filter((e=>void 0!==e.value)).map((e=>n.createElement("div",{className:"row Attribute",key:e.name},n.createElement("div",{className:"col-auto Attribute__Name"},e.name,":"),n.createElement("code",{className:"col-auto Attribute__Value"},e.value))))))))}const l=function(e){var t;return n.createElement("div",{className:"container-fluid ApiTable"},n.createElement("div",{className:"row with--border"},n.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Name"),n.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Description and specifications")),null==e||null==(t=e.attributes)?void 0:t.map((e=>n.createElement(r,{attribute:e,key:e.name}))))}},731:(e,t,a)=>{a.d(t,{Q:()=>i,h:()=>r});var n=a(2784);function i(e){return n.createElement("div",{className:"ApiTableTag"},n.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),n.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function r(e){return n.createElement("div",{className:"ApiTableTag"},n.createElement("div",{className:"Tag"},"Since ",e.message))}},42374:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=a(7896),i=(a(2784),a(30876)),r=a(63483);const l={},o=void 0,s={unversionedId:"auto-generated/ix-menu/props",id:"auto-generated/ix-menu/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-menu/props.md",sourceDirName:"auto-generated/ix-menu",slug:"/auto-generated/ix-menu/props",permalink:"/docs/auto-generated/ix-menu/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-menu/props.md",tags:[],version:"current",frontMatter:{}},u={},m=[],c={toc:m};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{attributes:[{name:"applicationDescription",description:"Should only be set if you use ix-menu standalone",definition:[{name:"Attribute",value:"application-description"},{name:"Type",value:"string"},{name:"Default",value:"''"}],tags:[]},{name:"applicationName",description:"Should only be set if you use ix-menu standalone",definition:[{name:"Attribute",value:"application-name"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"enableMapExpand",description:"Internal",definition:[{name:"Attribute",value:"enable-map-expand"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"enableSettings",description:"Is settings tab is visible",definition:[{name:"Attribute",value:"enable-settings"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[]},{name:"enableToggleTheme",description:"Show toggle between light and dark variant. Only if the provided theme have implemented both!",definition:[{name:"Attribute",value:"enable-toggle-theme"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"expand",description:"",definition:[{name:"Attribute",value:"expand"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"i18nCollapse",description:"",definition:[{name:"Attribute",value:"i-1-8n-collapse"},{name:"Type",value:"string"},{name:"Default",value:"'Collapse'"}],tags:[]},{name:"i18nExpand",description:"",definition:[{name:"Attribute",value:"i-1-8n-expand"},{name:"Type",value:"string"},{name:"Default",value:"' Expand'"}],tags:[]},{name:"i18nExpandSidebar",description:"Accessibility i18n label for the burger menu of the sidebar",definition:[{name:"Attribute",value:"i-1-8n-expand-sidebar"},{name:"Type",value:"string"},{name:"Default",value:"'Expand sidebar'"}],tags:[]},{name:"i18nLegal",description:"",definition:[{name:"Attribute",value:"i-1-8n-legal"},{name:"Type",value:"string"},{name:"Default",value:"'About & legal information'"}],tags:[]},{name:"i18nSettings",description:"",definition:[{name:"Attribute",value:"i-1-8n-settings"},{name:"Type",value:"string"},{name:"Default",value:"'Settings'"}],tags:[]},{name:"i18nToggleTheme",description:"",definition:[{name:"Attribute",value:"i-1-8n-toggle-theme"},{name:"Type",value:"string"},{name:"Default",value:"'Toggle theme'"}],tags:[]},{name:"maxVisibleMenuItems",description:"Maximum number of menu items to show in case enough vertical space is available.\nExtra menu items will be collapsed to 'show more' menu item.",definition:[{name:"Attribute",value:"max-visible-menu-items"},{name:"Type",value:"number"},{name:"Default",value:"9"}],tags:[{type:"deprecated",message:"- Has no effect on component. Will get removed with next major release (v3)"}]},{name:"pinned",description:"Menu stays pinned to the left",definition:[{name:"Attribute",value:"pinned"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"showAbout",description:"Is about tab visible",definition:[{name:"Attribute",value:"show-about"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"showSettings",description:"Is settings tab visible",definition:[{name:"Attribute",value:"show-settings"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]}],mdxType:"ApiTable"}))}p.isMDXComponent=!0}}]);