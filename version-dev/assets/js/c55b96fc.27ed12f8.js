"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[63434],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,v=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63483:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(2784),r=n(731);function o(e){var t,n,o,i,l,s,c,u;return a.createElement("div",{className:"row with--border"},a.createElement("div",{className:"col-sm-6"},a.createElement("div",{className:"ApiTable__Name"},null==e||null==(t=e.attribute)?void 0:t.name,null==e||null==(n=e.attribute)||null==(o=n.tags)?void 0:o.filter((e=>"since"===e.type)).map((t=>{var n;return a.createElement(r.h,{message:t.message,key:`Tag_Since_${null==e||null==(n=e.attribute)?void 0:n.name}`})})),null==e||null==(i=e.attribute)||null==(l=i.tags)?void 0:l.filter((e=>"deprecated"===e.type)).map((t=>{var n;return a.createElement(r.Q,{message:t.message,key:`Tag_Deprecated_${null==e||null==(n=e.attribute)?void 0:n.name}`})})))),a.createElement("div",{className:"col-sm-6"},a.createElement("div",{className:"ApiTable__Content"},a.createElement("span",{className:"Attribute__Description"},null==e||null==(s=e.attribute)?void 0:s.description),a.createElement("div",{className:"container-fluid"},null==e||null==(c=e.attribute)||null==(u=c.definition)?void 0:u.filter((e=>void 0!==e.value)).map((e=>a.createElement("div",{className:"row Attribute",key:e.name},a.createElement("div",{className:"col-auto Attribute__Name"},e.name,":"),a.createElement("code",{className:"col-auto Attribute__Value"},e.value))))))))}const i=function(e){var t;return a.createElement("div",{className:"container-fluid ApiTable"},a.createElement("div",{className:"row with--border"},a.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Name"),a.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Description and specifications")),null==e||null==(t=e.attributes)?void 0:t.map((e=>a.createElement(o,{attribute:e,key:e.name}))))}},731:(e,t,n)=>{n.d(t,{Q:()=>r,h:()=>o});var a=n(2784);function r(e){return a.createElement("div",{className:"ApiTableTag"},a.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),a.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function o(e){return a.createElement("div",{className:"ApiTableTag"},a.createElement("div",{className:"Tag"},"Since ",e.message))}},61662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7896),r=(n(2784),n(30876)),o=n(63483);const i={},l=void 0,s={unversionedId:"auto-generated/ix-dropdown-button/props",id:"auto-generated/ix-dropdown-button/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-dropdown-button/props.md",sourceDirName:"auto-generated/ix-dropdown-button",slug:"/auto-generated/ix-dropdown-button/props",permalink:"/version-dev/docs/auto-generated/ix-dropdown-button/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-dropdown-button/props.md",tags:[],version:"current",frontMatter:{}},c={},u=[],m={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{attributes:[{name:"closeBehavior",description:"Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown.",definition:[{name:"Attribute",value:"close-behavior"},{name:"Type",value:'"both" \uff5c "inside" \uff5c "outside" \uff5c boolean'},{name:"Default",value:"'both'"}],tags:[{type:"since",message:"2.1.0"}]},{name:"disabled",description:"Disable button",definition:[{name:"Attribute",value:"disabled"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"ghost",description:"Button with no background or outline",definition:[{name:"Attribute",value:"ghost"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"icon",description:"Button icon",definition:[{name:"Attribute",value:"icon"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"label",description:"Set label",definition:[{name:"Attribute",value:"label"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"outline",description:"Outline button",definition:[{name:"Attribute",value:"outline"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"placement",description:"Placement of the dropdown",definition:[{name:"Attribute",value:"placement"},{name:"Type",value:'"bottom-end" \uff5c "bottom-start" \uff5c "left-end" \uff5c "left-start" \uff5c "right-end" \uff5c "right-start" \uff5c "top-end" \uff5c "top-start"'},{name:"Default"}],tags:[{type:"since",message:"2.0.0"}]},{name:"variant",description:"Button variant",definition:[{name:"Attribute",value:"variant"},{name:"Type",value:'"primary" \uff5c "secondary"'},{name:"Default",value:"'primary'"}],tags:[]}],mdxType:"ApiTable"}))}d.isMDXComponent=!0}}]);