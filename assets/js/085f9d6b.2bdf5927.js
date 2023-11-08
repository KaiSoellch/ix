"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[74038,52544],{30876:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},52544:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=t(7896),o=(t(2784),t(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/vue/input-search",id:"auto-generated/previews/vue/input-search",title:"input-search",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/input-search.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/input-search",permalink:"/docs/auto-generated/previews/vue/input-search",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/input-search.md",tags:[],version:"current",frontMatter:{}},u={},p=[],s={toc:p};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script setup lang="ts">\nimport { IxIcon, IxIconButton, IxInputGroup } from \'@siemens/ix-vue\';\nimport { ref } from \'vue\';\n\nconst text = ref(\'\');\n\nfunction clearInput() {\n  text.value = \'\';\n}\n<\/script>\n\n<template>\n  <form className="needs-validation m-2">\n    <IxInputGroup>\n      <span slot="input-start">\n        <IxIcon name="search" size="16"></IxIcon>\n      </span>\n      <input\n        id="input-string"\n        type="string"\n\n        v-model="text"\n      />\n      <span slot="input-end">\n        <IxIconButton\n          @click="clearInput"\n          id="clear-button"\n          icon="clear"\n          ghost\n          size="16"\n          :style="[text === \'\' ? { display: \'none\' } : { display: \'block\' }]"\n        ></IxIconButton>\n      </span>\n    </IxInputGroup>\n  </form>\n</template>\n\n')))}l.isMDXComponent=!0}}]);