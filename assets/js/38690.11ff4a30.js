"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38690],{38690:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=t(7896),a=(t(2784),t(30876));const i={},u=void 0,l={unversionedId:"auto-generated/previews/vue/button-loading",id:"auto-generated/previews/vue/button-loading",title:"button-loading",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/button-loading.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/button-loading",permalink:"/docs/auto-generated/previews/vue/button-loading",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/button-loading.md",tags:[],version:"current",frontMatter:{}},r={},s=[],c={toc:s};function d(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script setup lang="ts">\nimport { IxButton, IxIconButton } from \'@siemens/ix-vue\';\nimport { ref } from \'vue\';\n\nlet toggle1 = ref(false);\nlet toggle2 = ref(false);\nlet toggle3 = ref(false);\n\nfunction load(value: string) {\n  if (value === \'1\') toggle1.value = true;\n  if (value === \'2\') toggle2.value = true;\n  if (value === \'3\') toggle3.value = true;\n\n  setTimeout(() => {\n    if (value === \'1\') toggle1.value = false;\n    if (value === \'2\') toggle2.value = false;\n    if (value === \'3\') toggle3.value = false;\n  }, 2500);\n}\n<\/script>\n\n<template>\n  <div>\n    <IxButton\n      :loading="toggle1"\n      @click="load(\'1\')"\n      class="m-1"\n      outline\n      variant="primary"\n    >\n      Button\n    </IxButton>\n    <IxButton\n      :loading="toggle2"\n      @click="load(\'2\')"\n      class="m-1"\n      outline\n      icon="star"\n      variant="primary"\n    >\n      Button\n    </IxButton>\n    <IxIconButton\n      :loading="toggle3"\n      @click="load(\'3\')"\n      class="m-1"\n      outline\n      icon="star"\n      variant="primary"\n    ></IxIconButton>\n    <IxButton loading class="m-1" outline variant="primary"> Button </IxButton>\n    <IxIconButton loading class="m-1" outline variant="primary"></IxIconButton>\n  </div>\n</template>\n\n')))}d.isMDXComponent=!0}}]);