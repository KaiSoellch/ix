"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66362,90170],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7896),a=(n(2784),n(30876));const o={},c=void 0,i={unversionedId:"auto-generated/previews/vue/datepicker-locale",id:"auto-generated/previews/vue/datepicker-locale",title:"datepicker-locale",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/datepicker-locale.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/datepicker-locale",permalink:"/version-dev/docs/auto-generated/previews/vue/datepicker-locale",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/datepicker-locale.md",tags:[],version:"current",frontMatter:{}},l={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script setup lang="ts">\nimport { IxDatePicker, IxSelect, IxSelectItem } from \'@siemens/ix-vue\';\n<\/script>\n\n<script lang="ts">\nexport default {\n  data() {\n    return {\n      locale: \'de\'\n    }\n  },\n  methods: {\n    setLocale(\n      { detail: newLocale }: CustomEvent<string \uff5c string[]>\n    ) {\n      if (Array.isArray(newLocale)) {\n        return;\n      }\n\n      this.locale = newLocale;\n    }\n  },\n}\n<\/script>\n\n<template>\n  <span  style="margin-right: 1rem;">Language:</span>\n  <IxSelect\n    :value="locale"\n    @valueChange="setLocale"\n    style="margin: 1rem 0;"\n  >\n    <IxSelectItem label="de" value="de"></IxSelectItem>\n    <IxSelectItem label="en" value="en"></IxSelectItem>\n  </IxSelect>\n  <IxDatePicker v-bind:locale="locale" />\n</template>\n\n')))}p.isMDXComponent=!0}}]);