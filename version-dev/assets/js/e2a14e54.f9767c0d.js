"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51882],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||c;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7635:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=r(7896),o=(r(2784),r(30876));const c={},a=void 0,i={unversionedId:"auto-generated/previews/react/theme-switcher",id:"auto-generated/previews/react/theme-switcher",title:"theme-switcher",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/theme-switcher.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/theme-switcher",permalink:"/version-dev/docs/auto-generated/previews/react/theme-switcher",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/theme-switcher.md",tags:[],version:"current",frontMatter:{}},l={},s=[],u={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nimport { themeSwitcher } from \'@siemens/ix\';\nimport { IxButton, IxSelect, IxSelectItem } from \'@siemens/ix-react\';\nimport React from \'react\';\nexport default () => {\n  return (\n    <>\n      <IxButton className="mb-2" onClick={() => themeSwitcher.toggleMode()}>\n        Toggle mode\n      </IxButton>\n      <IxSelect\n        onItemSelectionChange={({ detail: [theme] }) => {\n          themeSwitcher.setTheme(theme);\n        }}\n        placeholder="Select a theme"\n      >\n        <IxSelectItem\n          label="Classic light"\n          value="theme-classic-light"\n        ></IxSelectItem>\n        <IxSelectItem\n          label="Classic dark"\n          value="theme-classic-dark"\n        ></IxSelectItem>\n      </IxSelect>\n    </>\n  );\n};\n')))}m.isMDXComponent=!0}}]);