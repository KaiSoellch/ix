"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25393],{25393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var p=n(7896),r=(n(2784),n(30876));const s={},a=void 0,o={unversionedId:"auto-generated/previews/react/input-types",id:"auto-generated/previews/react/input-types",title:"input-types",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/input-types.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/input-types",permalink:"/docs/auto-generated/previews/react/input-types",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/input-types.md",tags:[],version:"current",frontMatter:{}},u={},i=[],c={toc:i};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,p.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxInputGroup } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <form className="needs-validation m-2">\n      <IxInputGroup>\n        <span slot="input-start">Text:</span>\n        <input placeholder="Enter text" type="text" />\n      </IxInputGroup>\n\n      <IxInputGroup>\n        <span slot="input-start">Number:</span>\n        <input type="number" />\n        <span slot="input-end">.00</span>\n        <span slot="input-end">$</span>\n      </IxInputGroup>\n\n      <IxInputGroup>\n        <span slot="input-start">Password:</span>\n        <input placeholder="Enter password" type="password" />\n      </IxInputGroup>\n\n      <IxInputGroup>\n        <span slot="input-start">Email:</span>\n        <input placeholder="example@domain.com" type="email" />\n      </IxInputGroup>\n\n      <IxInputGroup>\n        <span slot="input-start">Telephone:</span>\n        <input placeholder="111-111-111" type="tel" />\n      </IxInputGroup>\n    </form>\n  );\n};\n\n')))}d.isMDXComponent=!0}}]);