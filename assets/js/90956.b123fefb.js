"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90956],{90956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7896),s=(n(2784),n(30876));const o={},r=void 0,i={unversionedId:"auto-generated/previews/angular/empty-state.ts",id:"auto-generated/previews/angular/empty-state.ts",title:"empty-state.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/empty-state.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/empty-state.ts",permalink:"/docs/auto-generated/previews/angular/empty-state.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/empty-state.ts.md",tags:[],version:"current",frontMatter:{}},c={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `<ix-empty-state\n    header="No elements available"\n    subHeader="Create an element first"\n    icon="add"\n    action="Create element"\n    (actionClick)="onActionClick($event)"\n  ></ix-empty-state>`,\n})\nexport default class EmptyState {\n  onActionClick(event: Event) {\n    console.log(event);\n  }\n}\n\n')))}u.isMDXComponent=!0}}]);