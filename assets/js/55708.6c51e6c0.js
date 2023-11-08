"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[55708],{55708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(7896),s=(n(2784),n(30876));const r={},i=void 0,o={unversionedId:"auto-generated/previews/react/tabs",id:"auto-generated/previews/react/tabs",title:"tabs",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/tabs.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/tabs",permalink:"/docs/auto-generated/previews/react/tabs",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/tabs.md",tags:[],version:"current",frontMatter:{}},c={},d=[],l={toc:d};function b(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxTabItem, IxTabs } from '@siemens/ix-react';\nimport React, { useState } from 'react';\n\nexport default () => {\n  const [selectedTab, setSelectedTab] = useState(0);\n\n  const changeTab = (tabId: number) => setSelectedTab(tabId);\n\n  return (\n    <div\n      style={{\n        display: 'block',\n        position: 'relative',\n        width: '100%',\n      }}\n    >\n      <IxTabs selected={selectedTab}>\n        <IxTabItem onClick={() => changeTab(0)}>Tab 1</IxTabItem>\n        <IxTabItem onClick={() => changeTab(1)}>Tab 2</IxTabItem>\n        <IxTabItem onClick={() => changeTab(2)}>Tab 3</IxTabItem>\n      </IxTabs>\n      {selectedTab === 0 ? <div>Content 1</div> : null}\n      {selectedTab === 1 ? <div>Content 2</div> : null}\n      {selectedTab === 2 ? <div>Content 3</div> : null}\n    </div>\n  );\n};\n\n")))}b.isMDXComponent=!0}}]);