"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51095],{51095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=n(7896),s=(n(2784),n(30876));const i={},o=void 0,r={unversionedId:"auto-generated/previews/angular/tabs.ts",id:"auto-generated/previews/angular/tabs.ts",title:"tabs.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/tabs.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/tabs.ts",permalink:"/docs/auto-generated/previews/angular/tabs.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/tabs.ts.md",tags:[],version:"current",frontMatter:{}},c={},d=[],l={toc:d};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  styles: [\n    `\n      :host {\n        .example {\n          display: block;\n          position: relative;\n          width: 100%;\n        }\n      }\n    `,\n  ],\n  template: `\n    <div class="example">\n      <ix-tabs [selected]="selectedTab">\n        <ix-tab-item (click)="changeTab(0)">Tab 1</ix-tab-item>\n        <ix-tab-item (click)="changeTab(1)">Tab 2</ix-tab-item>\n        <ix-tab-item (click)="changeTab(2)">Tab 3</ix-tab-item>\n      </ix-tabs>\n      <div *ngIf="selectedTab === 0">Content Tab 1</div>\n      <div *ngIf="selectedTab === 1">Content Tab 2</div>\n      <div *ngIf="selectedTab === 2">Content Tab 3</div>\n    </div>\n  `,\n})\nexport default class Tabs {\n  selectedTab = 1;\n\n  changeTab(tabIndex: number) {\n    this.selectedTab = tabIndex;\n  }\n}\n\n')))}u.isMDXComponent=!0}}]);