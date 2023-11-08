"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82802],{82802:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=t(7896),r=(t(2784),t(30876));const i={},s=void 0,o={unversionedId:"auto-generated/previews/angular/tree.ts",id:"auto-generated/previews/angular/tree.ts",title:"tree.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/tree.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/tree.ts",permalink:"/docs/auto-generated/previews/angular/tree.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/tree.ts.md",tags:[],version:"current",frontMatter:{}},l={},d=[],m={toc:d};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from '@angular/core';\nimport { TreeModel } from '@siemens/ix';\n\n@Component({\n  selector: 'app-example',\n  styles: [\n    `\n      .example {\n        display: block;\n        position: relative;\n        height: 32rem;\n        width: 100%;\n      }\n    `,\n  ],\n  template: `<div class=\"example\">\n    <ix-tree root=\"root\" [model]=\"model\"></ix-tree>\n  </div>`,\n})\nexport default class Tree {\n  model: TreeModel<{\n    name: string;\n  }> = {\n    root: {\n      id: 'root',\n      data: {\n        name: '',\n      },\n      hasChildren: true,\n      children: ['sample'],\n    },\n    sample: {\n      id: 'sample',\n      data: {\n        name: 'Sample',\n      },\n      hasChildren: true,\n      children: ['sample-child-1', 'sample-child-2'],\n    },\n    'sample-child-1': {\n      id: 'sample-child-1',\n      data: {\n        name: 'Sample Child 1',\n      },\n      hasChildren: false,\n      children: [],\n    },\n    'sample-child-2': {\n      id: 'sample-child-2',\n      data: {\n        name: 'Sample Child 2',\n      },\n      hasChildren: false,\n      children: [],\n    },\n  };\n}\n\n")))}p.isMDXComponent=!0}}]);