"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20944],{20944:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=t(7896),o=(t(2784),t(30876));const r={},d=void 0,s={unversionedId:"auto-generated/previews/angular/date-dropdown-user-range.ts",id:"auto-generated/previews/angular/date-dropdown-user-range.ts",title:"date-dropdown-user-range.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/date-dropdown-user-range.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/date-dropdown-user-range.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/date-dropdown-user-range.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/date-dropdown-user-range.ts.md",tags:[],version:"current",frontMatter:{}},i={},u=[],p={toc:u};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from '@angular/core';\nimport { DateDropdownOption } from '@siemens/ix';\n\nconst today = new Date().toLocaleDateString('en-US', {\n  year: 'numeric',\n  month: '2-digit',\n  day: '2-digit',\n});\n\nconst lastSevenDays = new Date(\n  new Date().getTime() - 7 * 24 * 60 * 60 * 1000\n).toLocaleDateString('en-US', {\n  year: 'numeric',\n  month: '2-digit',\n  day: '2-digit',\n});\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './date-dropdown-user-range.html',\n})\nexport default class DateDropdownUserRange {\n  dateDropdownOptions: DateDropdownOption[] = [\n    {\n      id: 'last-7',\n      label: 'Last 7 days',\n      from: lastSevenDays,\n      to: today,\n    },\n    {\n      id: 'today',\n      label: 'Today',\n      from: today,\n      to: today,\n    },\n  ];\n}\n\n")))}c.isMDXComponent=!0}}]);