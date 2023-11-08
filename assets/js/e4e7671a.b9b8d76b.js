"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15687,22276],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(n),m=o,w=s["".concat(p,".").concat(m)]||s[m]||l[m]||a;return n?r.createElement(w,c(c({ref:t},u),{},{components:n})):r.createElement(w,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var d=2;d<a;d++)c[d]=n[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(7896),o=(n(2784),n(30876));const a={},c=void 0,i={unversionedId:"auto-generated/previews/react/dropdown-button-icon",id:"auto-generated/previews/react/dropdown-button-icon",title:"dropdown-button-icon",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/dropdown-button-icon.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/dropdown-button-icon",permalink:"/docs/auto-generated/previews/react/dropdown-button-icon",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/dropdown-button-icon.md",tags:[],version:"current",frontMatter:{}},p={},d=[],u={toc:d};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxDropdownButton, IxDropdownItem } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <>\n      <IxDropdownButton label="" variant="primary" icon="checkboxes">\n        <IxDropdownItem label="Item 1"></IxDropdownItem>\n        <IxDropdownItem label="Item 2"></IxDropdownItem>\n      </IxDropdownButton>\n      <IxDropdownButton label="" variant="primary" outline icon="checkboxes">\n        <IxDropdownItem label="Item 1"></IxDropdownItem>\n        <IxDropdownItem label="Item 2"></IxDropdownItem>\n      </IxDropdownButton>\n      <IxDropdownButton label="" variant="primary" ghost icon="checkboxes">\n        <IxDropdownItem label="Item 1"></IxDropdownItem>\n        <IxDropdownItem label="Item 2"></IxDropdownItem>\n      </IxDropdownButton>\n      <IxDropdownButton\n        label=""\n        variant="primary"\n        disabled\n        icon="checkboxes"\n      ></IxDropdownButton>\n    </>\n  );\n};\n\n')))}l.isMDXComponent=!0}}]);