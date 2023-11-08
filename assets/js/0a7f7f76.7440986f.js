"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78857,44108],{30876:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(t),u=a,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},44108:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(7896),a=(t(2784),t(30876));const o={},i=void 0,c={unversionedId:"auto-generated/previews/react/tree-custom",id:"auto-generated/previews/react/tree-custom",title:"tree-custom",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/tree-custom.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/tree-custom",permalink:"/docs/auto-generated/previews/react/tree-custom",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/tree-custom.md",tags:[],version:"current",frontMatter:{}},s={},l=[],d={toc:l};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { TreeContext, TreeModel } from '@siemens/ix';\nimport { IxButton, IxIcon, IxTree } from '@siemens/ix-react';\nimport React, { useState } from 'react';\n\ntype TreeData = {\n  name: string;\n  icon: string;\n};\n\nexport default () => {\n  const [context, setContext] = useState<TreeContext>();\n  const [model] = useState<TreeModel<TreeData>>({\n    root: {\n      id: 'root',\n      data: {\n        icon: '',\n        name: '',\n      },\n      hasChildren: true,\n      children: ['sample'],\n    },\n    sample: {\n      id: 'sample',\n      data: {\n        name: 'Sample',\n        icon: 'star',\n      },\n      hasChildren: true,\n      children: ['sample-child-1', 'sample-child-2'],\n    },\n    'sample-child-1': {\n      id: 'sample-child-1',\n      data: {\n        name: 'Sample Child 1',\n        icon: 'cut',\n      },\n      hasChildren: false,\n      children: [],\n    },\n    'sample-child-2': {\n      id: 'sample-child-2',\n      data: {\n        name: 'Sample Child 2',\n        icon: 'print',\n      },\n      hasChildren: false,\n      children: [],\n    },\n  });\n\n  function expandAndSelect() {\n    setContext({\n      sample: {\n        isExpanded: true,\n        isSelected: false,\n      },\n      'sample-child-2': {\n        isSelected: true,\n        isExpanded: false,\n      },\n    });\n  }\n\n  return (\n    <div\n      style={{\n        display: 'block',\n        position: 'relative',\n        width: '100%',\n        height: '40rem',\n      }}\n    >\n      <IxButton\n        onClick={expandAndSelect}\n        ghost\n        style={{ marginBottom: '2rem' }}\n      >\n        Expand Tree\n      </IxButton>\n      <IxTree\n        root=\"root\"\n        model={model}\n        context={context}\n        onContextChange={({ detail }) => {\n          setContext(detail);\n        }}\n        renderItem={(data: TreeData) => (\n          <div className=\"d-flex align-items-center\">\n            <IxIcon name={data.icon} size=\"16\" className=\"me-2\" /> {data.name}\n          </div>\n        )}\n      ></IxTree>\n    </div>\n  );\n};\n\n")))}p.isMDXComponent=!0}}]);