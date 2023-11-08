"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80027],{80027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,s={unversionedId:"auto-generated/previews/react/kpi",id:"auto-generated/previews/react/kpi",title:"kpi",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/kpi.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/kpi",permalink:"/docs/auto-generated/previews/react/kpi",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/kpi.md",tags:[],version:"current",frontMatter:{}},p={},c=[],l={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxKpi } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <div className="example">\n      <IxKpi label="Motor speed" value="Nominal"></IxKpi>\n      <IxKpi label="Motor speed" value="{122.6}" unit="rpm"></IxKpi>\n      <IxKpi label="Motor speed" value="{122.6}" state="alarm"></IxKpi>\n      <IxKpi label="Motor speed" value="{122.6}" state="warning"></IxKpi>\n\n      <IxKpi label="Motor speed" value="Nominal" orientation="vertical"></IxKpi>\n      <IxKpi\n        label="Motor speed"\n        value="{122.6}"\n        unit="rpm"\n        state="alarm"\n        orientation="vertical"\n      ></IxKpi>\n    </div>\n  );\n};\n\n')))}d.isMDXComponent=!0}}]);