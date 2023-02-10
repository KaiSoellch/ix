"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82073,36808,23337,38937,30128,7293,46978],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||r;return n?o.createElement(f,s(s({ref:t},u),{},{components:n})):o.createElement(f,s({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77942:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(37949),a=n(90077),r=n(37614),s=n(2784),i=n(90943);function c(e){const t=(0,r.Z)(),[n]=(0,s.useState)(!1),c=(0,a.Z)("/"),[l,u]=(0,s.useState)(""),[m,d]=(0,s.useState)((0,i.V)(t)),{preferredVersion:p}=(0,o.J)();return(0,s.useEffect)((()=>{const t=null==p?void 0:p.name;u(void 0===t||"current"===t?c+`webcomponent-examples/dist/preview-examples/${e.name}.html`:c+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[c,null==p?void 0:p.name,e.name]),(0,s.useLayoutEffect)((()=>{const e=()=>{let e=(0,i.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),d(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),s.createElement(s.Fragment,null,n?s.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==p?void 0:p.name):s.createElement("iframe",{src:`${l}?theme=${e.theme?e.theme:m}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},30024:(e,t,n)=>{n.d(t,{Z:()=>I});var o,a=n(7267),r=n(90077),s=n(55061),i=n(2784);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c.apply(this,arguments)}const l=e=>{let{title:t,titleId:n,...a}=e;return i.createElement("svg",c({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},a),t?i.createElement("title",{id:n},t):null,o||(o=i.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var u;function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},m.apply(this,arguments)}const d=e=>{let{title:t,titleId:n,...o}=e;return i.createElement("svg",m({style:{transform:"scale(1)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},o),t?i.createElement("title",{id:n},t):null,u||(u=i.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var p=n(77942);let f;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.PREVIEW="preview"}(f||(f={}));var g=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],v={clickToLoad:function(e){return h("ctl",e)},devToolsHeight:function(e){return b("devtoolsheight",e)},forceEmbedLayout:function(e){return h("embed",e)},hideDevTools:function(e){return h("hidedevtools",e)},hideExplorer:function(e){return h("hideExplorer",e)},hideNavigation:function(e){return h("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return b("terminalHeight",e)},theme:function(e){return y("theme",["light","dark"],e)},view:function(e){return y("view",["preview","editor"],e)}};function w(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&v.hasOwnProperty(t)?v[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function h(e,t){return!0===t?e+"=1":""}function b(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function y(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function x(e,t){return""+E(t)+e+w(t)}function E(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function k(e){return e&&!1===e.newWindow?"_self":"_blank"}function T(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function C(e){if(!g.includes(e.template)){var t=g.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,o=document.createElement("form");return o.method="POST",o.setAttribute("style","display:none!important;"),o.appendChild(T("project[title]",e.title)),o.appendChild(T("project[description]",e.description)),o.appendChild(T("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):o.appendChild(T("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&o.appendChild(T("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&o.appendChild(T("project[files]["+t+"]",e.files[t]))})),o}var j=function(e,t){!function(e,t){var n=C(e);n.action=x("/run",t),n.target=k(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)};const O="https://github.com/siemens/ix/tree/main/packages";function A(e){let{name:t,framework:n}=e;const o=function(e){let{name:t,framework:n}=e;return n===f.ANGULAR?`${O}/angular-test-app/src/preview-examples/${t}.ts`:n===f.JAVASCRIPT?`${O}/html-test-app/src/preview-examples/${t}.html`:n===f.REACT?`${O}/react-test-app/src/preview-examples/${t}.tsx`:void 0}({framework:n,name:t});window.open(o,"_blank")}async function M(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function N(e){let{name:t,framework:n,files:o,baseUrl:a}=e;const r=await async function(e,t,n){const o=[];return(await M(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{o.push({filename:n[t],sourceCode:e})})),o}(a,n,o);return n===f.REACT?async function(e,t){const[n,o,a,r,s]=await M([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[i]=t,c={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;c[`src/${t}`]=n})),j({template:"node",title:"iX React App",description:"iX react playground",files:{...c,"public/index.html":o,"src/index.tsx":a,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${i.filename.substring(0,i.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":r,"tsconfig.json":s,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${i.filename}`})}(a,r):n===f.ANGULAR?async function(e,t,n){const[o,a,r,s,i,c,l,u,m,d,p]=await M([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),f=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&f.push(t)}));const g=`\n    ${f.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${f.map(((e,t)=>`COMPONENT_${t},`))}\n    ];\n  `,v={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;v[`src/app/${t}`]=n})),j({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":g,"src/app/app.component.css":o,"src/app/app.component.html":a,"src/app/app.component.ts":r,"src/app/app.module.ts":s,"src/index.html":i,"src/main.ts":c,"src/styles.css":l,"angular.json":u,"package.json":m,"tsconfig.app.json":d,"tsconfig.json":p,...v}},{openFile:`src/app/${t}.ts`})}(a,t,r):n===f.JAVASCRIPT?async function(e,t){const[n,o,a,r]=await M([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[s,...i]=t,c={};i.forEach((e=>{c[`src/${e.filename}`]=e.sourceCode})),j({template:"node",title:"iX html app",description:"iX html playground",files:{...c,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",s.sourceCode),"src/main.js":o,"package.json":a,"vite.config.ts":r}},{openFile:["src/index.html"]})}(a,r):void 0}function R(e){let{name:t,framework:n}=e;return i.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>A({name:t,framework:n})},i.createElement(l,null))}function $(e){let{name:t,files:n,framework:o,baseUrl:a}=e;return i.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>N({name:t,files:n,framework:o,baseUrl:a})},i.createElement(d,null))}function P(e){const[t,n]=(0,i.useState)(e.files[0].filename);return i.createElement(i.Fragment,null,i.createElement(s.Vp,null,e.files.map((e=>{e.node;return i.createElement(s.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const o=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return o?i.createElement(o,null):null}())}function I(e){let{name:t,height:n,noMargin:o,theme:c,frameworks:l,availableFrameworks:u}=e;const{pathname:m}=(0,a.TH)(),d=(0,r.Z)("/"),[g,v]=(0,i.useState)(!0),[w,h]=(0,i.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||f.PREVIEW}(u)),[b,y]=(0,i.useState)();(0,i.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(m+t)),[t,m]);(0,i.useEffect)((()=>{const e={};l&&(Object.keys(l).forEach((n=>{if("function"==typeof l[n]){let o=t;n===f.REACT&&(o=o.concat(".tsx")),n===f.JAVASCRIPT&&(o=o.concat(".html")),n===f.ANGULAR&&(o=o.concat(".ts")),e[n]=[{filename:o,node:l[n]({})}]}"object"==typeof l[n]&&(e[n]||(e[n]=[]),Object.keys(l[n]).forEach((t=>{e[n].push({filename:t,node:l[n][t]})})))})),y(e))}),[l,y]);const x=e=>{h(e)};function E(e){return u?0===u.length||u.includes(e):Object.keys(l).some((t=>t===e))}return i.createElement("div",{className:"Playground"},g?i.createElement(i.Fragment,null,i.createElement("div",{className:"Playground__Toolbar Location__Bottom"},i.createElement(s.Vp,null,i.createElement(s.t3,{selected:w===f.PREVIEW,onClick:()=>x(f.PREVIEW)},"Preview"),E(f.ANGULAR)?i.createElement(s.t3,{selected:w===f.ANGULAR,onClick:()=>x(f.ANGULAR)},"Angular"):null,E(f.REACT)?i.createElement(s.t3,{selected:w===f.REACT,onClick:()=>x(f.REACT)},"React"):null,E(f.JAVASCRIPT)?i.createElement(s.t3,{selected:w===f.JAVASCRIPT,onClick:()=>x(f.JAVASCRIPT)},"JavaScript"):null),i.createElement("div",{className:"Playground__Toolbar__Actions"},w!==f.PREVIEW?i.createElement(i.Fragment,null,i.createElement(R,{name:t,framework:w}),i.createElement($,{name:t,framework:w,baseUrl:d,files:b?w===f.PREVIEW?[]:b[w].map((e=>e.filename)):[]})):null)),function(){if(w===f.PREVIEW)return i.createElement(p.Z,{name:t,height:n,noMargin:o,theme:c});if(!b||!b[w])return null;if(1===b[w].length){const[{node:e}]=b[w];return e}return i.createElement(P,{files:b[w]})}()):null)}},44225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(7896),a=(n(2784),n(30876));const r={},s=void 0,i={unversionedId:"auto-generated/previews/angular/toast-custom.ts",id:"auto-generated/previews/angular/toast-custom.ts",title:"toast-custom.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/toast-custom.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/toast-custom.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/toast-custom.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/toast-custom.ts.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component, TemplateRef, ViewChild } from '@angular/core';\nimport { ToastService } from '@siemens/ix-angular';\n\n@Component({\n  selector: 'app-example',\n  template: `\n    <div>\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n      amet.\n    </div>\n    <ix-button (click)=\"showToastMessage()\">Show Toast</ix-button>\n    <ng-template #customToast let-toast>\n      <div>\n        <div>Custom toast message</div>\n        <ix-button (click)=\"toast.close('Action')\">Action</ix-button>\n      </div>\n    </ng-template>\n  `,\n})\nexport default class ToastCustom {\n  @ViewChild('customToast', { read: TemplateRef })\n  customToastRef!: TemplateRef<any>;\n\n  constructor(private readonly toastService: ToastService) {}\n\n  async showToastMessage() {\n    this.toastService.show({\n      message: this.customToastRef,\n    });\n  }\n}\n")))}m.isMDXComponent=!0},53615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(7896),a=(n(2784),n(30876));const r={},s=void 0,i={unversionedId:"auto-generated/previews/angular/toast.ts",id:"auto-generated/previews/angular/toast.ts",title:"toast.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/toast.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/toast.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/toast.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/toast.ts.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component, TemplateRef, ViewChild } from '@angular/core';\nimport { ToastService } from '@siemens/ix-angular';\n\n@Component({\n  selector: 'app-example',\n  template: `\n    <div>\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n      amet.\n    </div>\n    <ix-button (click)=\"showToastMessage()\">Show Toast</ix-button>\n  `,\n})\nexport default class Toast {\n  @ViewChild('customToast', { read: TemplateRef })\n  customModalRef!: TemplateRef<any>;\n\n  constructor(private readonly toastService: ToastService) {}\n\n  async showToastMessage() {\n    this.toastService.show({\n      message: 'Hello World!',\n    });\n  }\n}\n")))}m.isMDXComponent=!0},15361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(7896),a=(n(2784),n(30876));const r={},s=void 0,i={unversionedId:"auto-generated/previews/react/toast-custom",id:"auto-generated/previews/react/toast-custom",title:"toast-custom",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/toast-custom.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/toast-custom",permalink:"/version-dev/docs/auto-generated/previews/react/toast-custom",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/toast-custom.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IxButton, showToast } from '@siemens/ix-react';\nimport React from 'react';\n\nfunction CustomToast() {\n  return (\n    <div>\n      <div>Custom toast message</div>\n      <IxButton>Action</IxButton>\n    </div>\n  );\n}\n\nexport default () => {\n  return (\n    <>\n      <IxButton\n        onClick={() => {\n          showToast({\n            message: <CustomToast></CustomToast>,\n          });\n        }}\n      >\n        Trigger toast\n      </IxButton>\n    </>\n  );\n};\n")))}m.isMDXComponent=!0},97512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(7896),a=(n(2784),n(30876));const r={},s=void 0,i={unversionedId:"auto-generated/previews/react/toast",id:"auto-generated/previews/react/toast",title:"toast",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/toast.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/toast",permalink:"/version-dev/docs/auto-generated/previews/react/toast",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/toast.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IxButton, showToast } from '@siemens/ix-react';\nimport React from 'react';\n\nexport default () => {\n  return (\n    <>\n      <IxButton\n        onClick={() => {\n          showToast({\n            message: 'My toast message!',\n          });\n        }}\n      >\n        Trigger toast\n      </IxButton>\n    </>\n  );\n};\n")))}m.isMDXComponent=!0},35760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(7896),a=(n(2784),n(30876));const r={},s=void 0,i={unversionedId:"auto-generated/previews/web-component/toast-custom",id:"auto-generated/previews/web-component/toast-custom",title:"toast-custom",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/toast-custom.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/toast-custom",permalink:"/version-dev/docs/auto-generated/previews/web-component/toast-custom",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/toast-custom.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<ix-toast-container></ix-toast-container>\n\n<ix-button id=\"toastButton\">Trigger toast</ix-button>\n\n<template id=\"custom-toast\">\n  <div>\n    <div>Custom toast message</div>\n    <ix-button>Action</ix-button>\n  </div>\n</template>\n\n<script type=\"module\">\n  import { toast } from '@siemens/ix';\n\n  (async function () {\n    await window.customElements.whenDefined('ix-toast-container');\n    document\n      .getElementById('toastButton')\n      .addEventListener('click', async () => {\n        const customModal = document.createElement('div');\n        const template = document.getElementById('custom-toast');\n        const templateContent = template.content;\n        customModal.appendChild(templateContent);\n\n        const instance = await toast({\n          message: customModal,\n        });\n\n        customModal\n          .querySelector('ix-button')\n          .addEventListener('click', () => {\n            instance.close();\n          });\n      });\n  })();\n<\/script>\n")))}m.isMDXComponent=!0},74962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(7896),a=(n(2784),n(30876));const r={},s=void 0,i={unversionedId:"auto-generated/previews/web-component/toast",id:"auto-generated/previews/web-component/toast",title:"toast",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/toast.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/toast",permalink:"/version-dev/docs/auto-generated/previews/web-component/toast",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/toast.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<ix-toast-container></ix-toast-container>\n\n<ix-button id=\"toastButton\">Trigger toast</ix-button>\n<script type=\"module\">\n  import { toast } from '@siemens/ix';\n\n  (async function () {\n    await window.customElements.whenDefined('ix-toast-container');\n    document.getElementById('toastButton').addEventListener('click', () => {\n      toast({\n        message: 'My toast message!',\n      });\n    });\n  })();\n<\/script>\n")))}m.isMDXComponent=!0},55971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>h,frontMatter:()=>d,metadata:()=>f,toc:()=>v});var o=n(7896),a=(n(2784),n(30876)),r=n(30024),s=n(74962),i=n(97512),c=n(53615),l=n(35760),u=n(44225),m=n(15361);const d={},p="Toast",f={unversionedId:"controls/toast",id:"controls/toast",title:"Toast",description:"<Playground",source:"@site/docs/controls/toast.md",sourceDirName:"controls",slug:"/controls/toast",permalink:"/version-dev/docs/controls/toast",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/toast.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Time picker",permalink:"/version-dev/docs/controls/time-picker"},next:{title:"Toggle",permalink:"/version-dev/docs/controls/toggle"}},g={},v=[{value:"Custom toast message",id:"custom-toast-message",level:2}],w={toc:v};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"toast"},"Toast"),(0,a.kt)(r.Z,{name:"toast",height:"18rem",frameworks:{react:i.default,angular:c.default,javascript:s.default},mdxType:"Playground"}),(0,a.kt)("h2",{id:"custom-toast-message"},"Custom toast message"),(0,a.kt)(r.Z,{name:"toast-custom",height:"18rem",hideInitalCodePreview:!0,frameworks:{react:m.default,angular:u.default,javascript:l.default},mdxType:"Playground"}))}h.isMDXComponent=!0}}]);