"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62314],{62314:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(7896),o=(t(2784),t(30876));const r={},u=void 0,i={unversionedId:"auto-generated/previews/react/about-and-legal",id:"auto-generated/previews/react/about-and-legal",title:"about-and-legal",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/about-and-legal.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/about-and-legal",permalink:"/version-dev/docs/auto-generated/previews/react/about-and-legal",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/about-and-legal.md",tags:[],version:"current",frontMatter:{}},s={},c=[],l={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport {\n  IxApplication,\n  IxApplicationHeader,\n  IxMenu,\n  IxMenuAbout,\n  IxMenuAboutItem,\n} from \'@siemens/ix-react\';\nimport React, { useLayoutEffect, useRef } from \'react\';\n\nexport default () => {\n  const ref = useRef<HTMLIxMenuElement>(null);\n\n  useLayoutEffect(() => {\n    const element = ref.current;\n    if (element) {\n      element.toggleAbout(true);\n    }\n  }, []);\n\n  return (\n    <IxApplication>\n      <IxApplicationHeader>\n        <div className="placeholder-logo" slot="logo"></div>\n      </IxApplicationHeader>\n      <IxMenu ref={ref}>\n        <IxMenuAbout>\n          <IxMenuAboutItem label="Tab 1">Content 1</IxMenuAboutItem>\n          <IxMenuAboutItem label="Tab 2">Content 2</IxMenuAboutItem>\n        </IxMenuAbout>\n      </IxMenu>\n    </IxApplication>\n  );\n};\n\n')))}d.isMDXComponent=!0}}]);