"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91057,1879],{30876:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),p=a,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1879:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(7896),a=(t(2784),t(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/react/validation",id:"auto-generated/previews/react/validation",title:"validation",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/validation.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/validation",permalink:"/docs/auto-generated/previews/react/validation",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/validation.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n/*\n * COPYRIGHT (c) Siemens AG\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nimport {\n  IxButton,\n  IxCol,\n  IxLayoutGrid,\n  IxRow,\n  IxValidationTooltip,\n} from \'@siemens/ix-react\';\nimport React from \'react\';\nimport { useForm } from \'react-hook-form\';\n\nexport default () => {\n  const { register, handleSubmit, formState } = useForm({\n    defaultValues: {\n      firstName: undefined,\n      lastName: undefined,\n      userName: undefined,\n    },\n    shouldFocusError: false,\n    shouldUseNativeValidation: true,\n  });\n\n  const onSubmit = (data: any) => {\n    console.log(data);\n  };\n\n  return (\n    <>\n      <form\n        className={`needs-validation ${\n          formState.isSubmitted ? \'was-validated\' : \'\'\n        }`}\n        noValidate\n        onSubmit={handleSubmit(onSubmit)}\n      >\n        <IxLayoutGrid>\n          <IxRow>\n            <IxCol size="4">\n              <label htmlFor="validationCustom01">First name</label>\n              <input\n                type="text"\n                className={`${formState.errors.firstName ? \'is-invalid\' : \'\'}`}\n                id="validationCustom01"\n                {...register(\'firstName\', {\n                  required: true,\n                })}\n              />\n              <div className="invalid-feedback">\n                Please choose a first name.\n              </div>\n              <div className="valid-feedback">Looks good!</div>\n            </IxCol>\n          </IxRow>\n\n          <IxRow>\n            <IxCol size="4">\n              <label htmlFor="validationCustomUsername">Username</label>\n              <input\n                type="text"\n                className={`${formState.errors.userName ? \'is-invalid\' : \'\'}`}\n                id="validationCustomUsername"\n                aria-describedby="inputGroupPrepend"\n                {...register(\'userName\', {\n                  required: true,\n                })}\n              />\n              <div className="invalid-feedback">Please choose a username.</div>\n            </IxCol>\n          </IxRow>\n\n          <IxRow>\n            <IxCol size="4">\n              <IxValidationTooltip message="Error hint text">\n                <label htmlFor="validationCustom02">Last name</label>\n                <input\n                  type="text"\n                  className={`${formState.errors.lastName ? \'is-invalid\' : \'\'}`}\n                  id="validationCustom02"\n                  {...register(\'lastName\', {\n                    required: true,\n                  })}\n                />\n              </IxValidationTooltip>\n            </IxCol>\n          </IxRow>\n\n          <IxRow>\n            <IxCol>\n              <IxButton type="submit">Submit form</IxButton>\n            </IxCol>\n          </IxRow>\n        </IxLayoutGrid>\n      </form>\n    </>\n  );\n};\n\n')))}d.isMDXComponent=!0}}]);