"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76405,57128],{30876:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,d=p["".concat(s,".").concat(h)]||p[h]||u[h]||a;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},57128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/angular/theme-switcher.ts",id:"auto-generated/previews/angular/theme-switcher.ts",title:"theme-switcher.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/theme-switcher.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/theme-switcher.ts",permalink:"/docs/auto-generated/previews/angular/theme-switcher.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/theme-switcher.ts.md",tags:[],version:"current",frontMatter:{}},s={},l=[],m={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nimport { Component } from '@angular/core';\nimport { themeSwitcher } from '@siemens/ix';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './theme-switcher.html',\n  styles: [\n    `\n      ix-col {\n        align-items: center;\n        height: 2.5rem;\n      }\n    `,\n  ],\n})\nexport default class ThemeSwitcherExample {\n  themes = ['theme-classic-light', 'theme-classic-dark'];\n  selectedTheme = this.themes[1];\n\n  constructor() {}\n\n  onItemSelectionChange(event: Event) {\n    const customEvent = event as CustomEvent<string \uff5c string[]>;\n    const newTheme = customEvent.detail[0];\n    themeSwitcher.setTheme(newTheme);\n    this.selectedTheme = newTheme;\n  }\n\n  toggleMode() {\n    themeSwitcher.toggleMode();\n  }\n\n  onSystemMode({ target }: Event) {\n    if ((target as HTMLInputElement).checked) {\n      themeSwitcher.setVariant();\n      return;\n    }\n\n    themeSwitcher.setTheme(this.selectedTheme);\n  }\n}\n\n")))}u.isMDXComponent=!0}}]);