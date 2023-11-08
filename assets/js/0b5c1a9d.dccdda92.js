"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23778,97610],{30876:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(t),m=o,w=s["".concat(p,".").concat(m)]||s[m]||l[m]||a;return t?r.createElement(w,c(c({ref:n},u),{},{components:t})):r.createElement(w,c({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=s;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var d=2;d<a;d++)c[d]=t[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},97610:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=t(7896),o=(t(2784),t(30876));const a={},c=void 0,i={unversionedId:"auto-generated/previews/react/dropdown-button",id:"auto-generated/previews/react/dropdown-button",title:"dropdown-button",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/dropdown-button.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/dropdown-button",permalink:"/docs/auto-generated/previews/react/dropdown-button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/dropdown-button.md",tags:[],version:"current",frontMatter:{}},p={},d=[],u={toc:d};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxDropdownButton, IxDropdownItem } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <>\n      <IxDropdownButton label="Dropdown" variant="primary" icon="checkboxes">\n        <IxDropdownItem label="Item 1"></IxDropdownItem>\n        <IxDropdownItem label="Item 2"></IxDropdownItem>\n      </IxDropdownButton>\n      <IxDropdownButton\n        label="Dropdown"\n        variant="primary"\n        outline\n        icon="checkboxes"\n      >\n        <IxDropdownItem label="Item 1"></IxDropdownItem>\n        <IxDropdownItem label="Item 2"></IxDropdownItem>\n      </IxDropdownButton>\n      <IxDropdownButton\n        label="Dropdown"\n        variant="primary"\n        ghost\n        icon="checkboxes"\n      >\n        <IxDropdownItem label="Item 1"></IxDropdownItem>\n        <IxDropdownItem label="Item 2"></IxDropdownItem>\n      </IxDropdownButton>\n      <IxDropdownButton\n        label="Dropdown"\n        variant="primary"\n        disabled\n        icon="checkboxes"\n      ></IxDropdownButton>\n    </>\n  );\n};\n\n')))}l.isMDXComponent=!0}}]);