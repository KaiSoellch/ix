"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97150],{30876:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>s});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),p=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),s=r,b=m["".concat(d,".").concat(s)]||m[s]||u[s]||i;return n?o.createElement(b,a(a({ref:t},l),{},{components:n})):o.createElement(b,a({ref:t},l))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var o=n(7896),r=(n(2784),n(30876));const i={},a=void 0,c={unversionedId:"auto-generated/previews/web-component/dropdown-button-icon",id:"auto-generated/previews/web-component/dropdown-button-icon",title:"dropdown-button-icon",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/dropdown-button-icon.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/dropdown-button-icon",permalink:"/version-dev/docs/auto-generated/previews/web-component/dropdown-button-icon",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/dropdown-button-icon.md",tags:[],version:"current",frontMatter:{}},d={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="example">\n  <ix-dropdown-button label="" variant="Primary" icon="checkboxes">\n    <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n    <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n  </ix-dropdown-button>\n  <ix-dropdown-button label="" variant="Primary" outline icon="checkboxes">\n    <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n    <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n  </ix-dropdown-button>\n  <ix-dropdown-button label="" variant="Primary" ghost icon="checkboxes">\n    <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n    <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n  </ix-dropdown-button>\n  <ix-dropdown-button label="" variant="Primary" disabled icon="checkboxes">\n  </ix-dropdown-button>\n</div>\n')))}u.isMDXComponent=!0}}]);