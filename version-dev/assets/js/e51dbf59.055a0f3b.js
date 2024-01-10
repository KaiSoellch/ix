"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39543,95946],{30876:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=s(t),m=o,f=l["".concat(d,".").concat(m)]||l[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=l;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},95946:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(7896),o=(t(2784),t(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/react/date-dropdown-user-range",id:"auto-generated/previews/react/date-dropdown-user-range",title:"date-dropdown-user-range",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/date-dropdown-user-range.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/date-dropdown-user-range",permalink:"/version-dev/docs/auto-generated/previews/react/date-dropdown-user-range",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/date-dropdown-user-range.md",tags:[],version:"current",frontMatter:{}},d={},s=[],p={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { DateDropdownOption } from '@siemens/ix';\nimport { IxDateDropdown } from '@siemens/ix-react';\nimport React from 'react';\n\nconst today = new Date().toLocaleDateString('en-US', {\n  year: 'numeric',\n  month: '2-digit',\n  day: '2-digit',\n});\n\nconst lastSevenDays = new Date(\n  new Date().getTime() - 7 * 24 * 60 * 60 * 1000\n).toLocaleDateString('en-US', {\n  year: 'numeric',\n  month: '2-digit',\n  day: '2-digit',\n});\n\nconst dateRangeOptions: DateDropdownOption[] = [\n  {\n    id: 'last-7',\n    label: 'Last 7 days',\n    from: lastSevenDays,\n    to: today,\n  },\n  {\n    id: 'today',\n    label: 'Today',\n    from: today,\n    to: today,\n  },\n];\n\nexport default () => {\n  return (\n    <IxDateDropdown\n      dateRangeOptions={dateRangeOptions}\n      date-range-id=\"last-7\"\n      format=\"LL/dd/yyyy\"\n    />\n  );\n};\n\n")))}u.isMDXComponent=!0}}]);