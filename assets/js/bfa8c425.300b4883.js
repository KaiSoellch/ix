"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96577,12757],{30876:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>I});var o=n(2784);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function y(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=o.createContext({}),l=function(e){var r=o.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},c=function(e){var r=l(e.components);return o.createElement(i.Provider,{value:r},e.children)},x={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},s=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,c=y(e,["components","mdxType","originalType","parentName"]),s=l(n),I=t,d=s["".concat(i,".").concat(I)]||s[I]||x[I]||a;return n?o.createElement(d,p(p({ref:r},c),{},{components:n})):o.createElement(d,p({ref:r},c))}));function I(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,p=new Array(a);p[0]=s;var y={};for(var i in r)hasOwnProperty.call(r,i)&&(y[i]=r[i]);y.originalType=e,y.mdxType="string"==typeof e?e:t,p[1]=y;for(var l=2;l<a;l++)p[l]=n[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},12757:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>x,frontMatter:()=>a,metadata:()=>y,toc:()=>l});var o=n(7896),t=(n(2784),n(30876));const a={},p=void 0,y={unversionedId:"auto-generated/previews/react/grid",id:"auto-generated/previews/react/grid",title:"grid",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/grid.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/grid",permalink:"/docs/auto-generated/previews/react/grid",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/grid.md",tags:[],version:"current",frontMatter:{}},i={},l=[],c={toc:l};function x(e){let{components:r,...n}=e;return(0,t.kt)("wrapper",(0,o.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxCol, IxLayoutGrid, IxRow, IxTypography } from \'@siemens/ix-react\';\nimport React from \'react\';\n// Example styling for documentation\nimport \'./styles/grid.css\';\n\nexport default () => {\n  return (\n    <>\n      <IxLayoutGrid className={\'ExampleGrid\'}>\n        <IxRow>\n          <IxCol>\n            <IxTypography format="display">1</IxTypography>\n          </IxCol>\n          <IxCol>\n            <IxTypography format="display">2</IxTypography>\n          </IxCol>\n          <IxCol>\n            <IxTypography format="display">3</IxTypography>\n          </IxCol>\n          <IxCol>\n            <IxTypography format="display">4</IxTypography>\n          </IxCol>\n          <IxCol>\n            <IxTypography format="display">5</IxTypography>\n          </IxCol>\n          <IxCol>\n            <IxTypography format="display">6</IxTypography>\n          </IxCol>\n        </IxRow>\n      </IxLayoutGrid>\n\n      <IxLayoutGrid className={\'ExampleGrid\'}>\n        <IxRow>\n          <IxCol>\n            <IxTypography format="display">1</IxTypography>\n          </IxCol>\n          <IxCol>\n            <IxTypography format="display">2</IxTypography>\n          </IxCol>\n          <IxCol>\n            <IxTypography format="display">3</IxTypography>\n          </IxCol>\n          <IxCol>\n            <IxTypography format="display">4</IxTypography>\n          </IxCol>\n          <IxCol>\n            <IxTypography format="display">5</IxTypography>\n          </IxCol>\n          <IxCol>\n            <IxTypography format="display">6</IxTypography>\n          </IxCol>\n          <IxCol>\n            <IxTypography format="display">7</IxTypography>\n          </IxCol>\n          <IxCol>\n            <IxTypography format="display">8</IxTypography>\n          </IxCol>\n          <IxCol>\n            <IxTypography format="display">9</IxTypography>\n          </IxCol>\n          <IxCol>\n            <IxTypography format="display">10</IxTypography>\n          </IxCol>\n          <IxCol>\n            <IxTypography format="display">11</IxTypography>\n          </IxCol>\n          <IxCol>\n            <IxTypography format="display">12</IxTypography>\n          </IxCol>\n        </IxRow>\n      </IxLayoutGrid>\n    </>\n  );\n};\n\n')))}x.isMDXComponent=!0}}]);