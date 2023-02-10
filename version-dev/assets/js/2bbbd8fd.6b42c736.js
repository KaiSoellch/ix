"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56684,95901,20938,88504,42847,56591,15936,88096],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=i,g=d["".concat(c,".").concat(p)]||d[p]||m[p]||r;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77942:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(37949),i=n(90077),r=n(37614),o=n(2784),s=n(90943);function c(e){const t=(0,r.Z)(),[n]=(0,o.useState)(!1),c=(0,i.Z)("/"),[l,u]=(0,o.useState)(""),[m,d]=(0,o.useState)((0,s.V)(t)),{preferredVersion:p}=(0,a.J)();return(0,o.useEffect)((()=>{const t=null==p?void 0:p.name;u(void 0===t||"current"===t?c+`webcomponent-examples/dist/preview-examples/${e.name}.html`:c+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[c,null==p?void 0:p.name,e.name]),(0,o.useLayoutEffect)((()=>{const e=()=>{let e=(0,s.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),d(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),o.createElement(o.Fragment,null,n?o.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==p?void 0:p.name):o.createElement("iframe",{src:`${l}?theme=${e.theme?e.theme:m}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},30024:(e,t,n)=>{n.d(t,{Z:()=>D});var a,i=n(7267),r=n(90077),o=n(55061),s=n(2784);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}const l=e=>{let{title:t,titleId:n,...i}=e;return s.createElement("svg",c({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},i),t?s.createElement("title",{id:n},t):null,a||(a=s.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var u;function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}const d=e=>{let{title:t,titleId:n,...a}=e;return s.createElement("svg",m({style:{transform:"scale(1)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},a),t?s.createElement("title",{id:n},t):null,u||(u=s.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var p=n(77942);let g;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.PREVIEW="preview"}(g||(g={}));var v=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],f={clickToLoad:function(e){return b("ctl",e)},devToolsHeight:function(e){return w("devtoolsheight",e)},forceEmbedLayout:function(e){return b("embed",e)},hideDevTools:function(e){return b("hidedevtools",e)},hideExplorer:function(e){return b("hideExplorer",e)},hideNavigation:function(e){return b("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return w("terminalHeight",e)},theme:function(e){return x("theme",["light","dark"],e)},view:function(e){return x("view",["preview","editor"],e)}};function h(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&f.hasOwnProperty(t)?f[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function b(e,t){return!0===t?e+"=1":""}function w(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function x(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function k(e,t){return""+y(t)+e+h(t)}function y(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function E(e){return e&&!1===e.newWindow?"_self":"_blank"}function N(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function I(e){if(!v.includes(e.template)){var t=v.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,a=document.createElement("form");return a.method="POST",a.setAttribute("style","display:none!important;"),a.appendChild(N("project[title]",e.title)),a.appendChild(N("project[description]",e.description)),a.appendChild(N("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a.appendChild(N("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&a.appendChild(N("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&a.appendChild(N("project[files]["+t+"]",e.files[t]))})),a}var C=function(e,t){!function(e,t){var n=I(e);n.action=k("/run",t),n.target=E(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)};const M="https://github.com/siemens/ix/tree/main/packages";function T(e){let{name:t,framework:n}=e;const a=function(e){let{name:t,framework:n}=e;return n===g.ANGULAR?`${M}/angular-test-app/src/preview-examples/${t}.ts`:n===g.JAVASCRIPT?`${M}/html-test-app/src/preview-examples/${t}.html`:n===g.REACT?`${M}/react-test-app/src/preview-examples/${t}.tsx`:void 0}({framework:n,name:t});window.open(a,"_blank")}async function j(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function O(e){let{name:t,framework:n,files:a,baseUrl:i}=e;const r=await async function(e,t,n){const a=[];return(await j(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{a.push({filename:n[t],sourceCode:e})})),a}(i,n,a);return n===g.REACT?async function(e,t){const[n,a,i,r,o]=await j([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[s]=t,c={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;c[`src/${t}`]=n})),C({template:"node",title:"iX React App",description:"iX react playground",files:{...c,"public/index.html":a,"src/index.tsx":i,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${s.filename.substring(0,s.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":r,"tsconfig.json":o,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${s.filename}`})}(i,r):n===g.ANGULAR?async function(e,t,n){const[a,i,r,o,s,c,l,u,m,d,p]=await j([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),g=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&g.push(t)}));const v=`\n    ${g.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${g.map(((e,t)=>`COMPONENT_${t},`))}\n    ];\n  `,f={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;f[`src/app/${t}`]=n})),C({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":v,"src/app/app.component.css":a,"src/app/app.component.html":i,"src/app/app.component.ts":r,"src/app/app.module.ts":o,"src/index.html":s,"src/main.ts":c,"src/styles.css":l,"angular.json":u,"package.json":m,"tsconfig.app.json":d,"tsconfig.json":p,...f}},{openFile:`src/app/${t}.ts`})}(i,t,r):n===g.JAVASCRIPT?async function(e,t){const[n,a,i,r]=await j([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[o,...s]=t,c={};s.forEach((e=>{c[`src/${e.filename}`]=e.sourceCode})),C({template:"node",title:"iX html app",description:"iX html playground",files:{...c,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",o.sourceCode),"src/main.js":a,"package.json":i,"vite.config.ts":r}},{openFile:["src/index.html"]})}(i,r):void 0}function A(e){let{name:t,framework:n}=e;return s.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>T({name:t,framework:n})},s.createElement(l,null))}function P(e){let{name:t,files:n,framework:a,baseUrl:i}=e;return s.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>O({name:t,files:n,framework:a,baseUrl:i})},s.createElement(d,null))}function $(e){const[t,n]=(0,s.useState)(e.files[0].filename);return s.createElement(s.Fragment,null,s.createElement(o.Vp,null,e.files.map((e=>{e.node;return s.createElement(o.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const a=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return a?s.createElement(a,null):null}())}function D(e){let{name:t,height:n,noMargin:a,theme:c,frameworks:l,availableFrameworks:u}=e;const{pathname:m}=(0,i.TH)(),d=(0,r.Z)("/"),[v,f]=(0,s.useState)(!0),[h,b]=(0,s.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||g.PREVIEW}(u)),[w,x]=(0,s.useState)();(0,s.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(m+t)),[t,m]);(0,s.useEffect)((()=>{const e={};l&&(Object.keys(l).forEach((n=>{if("function"==typeof l[n]){let a=t;n===g.REACT&&(a=a.concat(".tsx")),n===g.JAVASCRIPT&&(a=a.concat(".html")),n===g.ANGULAR&&(a=a.concat(".ts")),e[n]=[{filename:a,node:l[n]({})}]}"object"==typeof l[n]&&(e[n]||(e[n]=[]),Object.keys(l[n]).forEach((t=>{e[n].push({filename:t,node:l[n][t]})})))})),x(e))}),[l,x]);const k=e=>{b(e)};function y(e){return u?0===u.length||u.includes(e):Object.keys(l).some((t=>t===e))}return s.createElement("div",{className:"Playground"},v?s.createElement(s.Fragment,null,s.createElement("div",{className:"Playground__Toolbar Location__Bottom"},s.createElement(o.Vp,null,s.createElement(o.t3,{selected:h===g.PREVIEW,onClick:()=>k(g.PREVIEW)},"Preview"),y(g.ANGULAR)?s.createElement(o.t3,{selected:h===g.ANGULAR,onClick:()=>k(g.ANGULAR)},"Angular"):null,y(g.REACT)?s.createElement(o.t3,{selected:h===g.REACT,onClick:()=>k(g.REACT)},"React"):null,y(g.JAVASCRIPT)?s.createElement(o.t3,{selected:h===g.JAVASCRIPT,onClick:()=>k(g.JAVASCRIPT)},"JavaScript"):null),s.createElement("div",{className:"Playground__Toolbar__Actions"},h!==g.PREVIEW?s.createElement(s.Fragment,null,s.createElement(A,{name:t,framework:h}),s.createElement(P,{name:t,framework:h,baseUrl:d,files:w?h===g.PREVIEW?[]:w[h].map((e=>e.filename)):[]})):null)),function(){if(h===g.PREVIEW)return s.createElement(p.Z,{name:t,height:n,noMargin:a,theme:c});if(!w||!w[h])return null;if(1===w[h].length){const[{node:e}]=w[h];return e}return s.createElement($,{files:w[h]})}()):null)}},42662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,s={unversionedId:"auto-generated/ix-basic-navigation/props",id:"auto-generated/ix-basic-navigation/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-basic-navigation/props.md",sourceDirName:"auto-generated/ix-basic-navigation",slug:"/auto-generated/ix-basic-navigation/props",permalink:"/version-dev/docs/auto-generated/ix-basic-navigation/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-basic-navigation/props.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"applicationName"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{className:"Api__Table"},(0,i.kt)("div",null,"Application name"),(0,i.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"application-name")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hideHeader"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{className:"Api__Table"},(0,i.kt)("div",null,"Hide application header"),(0,i.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hide-header")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))))))}m.isMDXComponent=!0},93862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,s={unversionedId:"auto-generated/previews/angular/basic-navigation-without-header.ts",id:"auto-generated/previews/angular/basic-navigation-without-header.ts",title:"basic-navigation-without-header.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/basic-navigation-without-header.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/basic-navigation-without-header.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/basic-navigation-without-header.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/basic-navigation-without-header.ts.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  template: `\n    <ix-basic-navigation hideHeader>\n      <ix-menu>\n        <ix-menu-item>Item 1</ix-menu-item>\n        <ix-menu-item>Item 2</ix-menu-item>\n      </ix-menu>\n    </ix-basic-navigation>\n  `,\n})\nexport default class BasicNavigationWithOutHeader {}\n")))}m.isMDXComponent=!0},30059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,s={unversionedId:"auto-generated/previews/angular/basic-navigation.ts",id:"auto-generated/previews/angular/basic-navigation.ts",title:"basic-navigation.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/basic-navigation.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/basic-navigation.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/basic-navigation.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/basic-navigation.ts.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  template: `\n    <ix-basic-navigation>\n      <div class=\"placeholder-logo\" slot=\"logo\"></div>\n      <ix-menu>\n        <ix-menu-item>Item 1</ix-menu-item>\n        <ix-menu-item>Item 2</ix-menu-item>\n      </ix-menu>\n    </ix-basic-navigation>\n  `,\n})\nexport default class BasicNavigation {}\n")))}m.isMDXComponent=!0},89355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,s={unversionedId:"auto-generated/previews/react/basic-navigation-without-header",id:"auto-generated/previews/react/basic-navigation-without-header",title:"basic-navigation-without-header",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/basic-navigation-without-header.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/basic-navigation-without-header",permalink:"/version-dev/docs/auto-generated/previews/react/basic-navigation-without-header",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/basic-navigation-without-header.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IxBasicNavigation, IxMenu, IxMenuItem } from '@siemens/ix-react';\nimport React from 'react';\n\nexport default () => {\n  return (\n    <IxBasicNavigation hideHeader>\n      <IxMenu>\n        <IxMenuItem>Item 1</IxMenuItem>\n        <IxMenuItem>Item 2</IxMenuItem>\n      </IxMenu>\n    </IxBasicNavigation>\n  );\n};\n")))}m.isMDXComponent=!0},95008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,s={unversionedId:"auto-generated/previews/react/basic-navigation",id:"auto-generated/previews/react/basic-navigation",title:"basic-navigation",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/basic-navigation.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/basic-navigation",permalink:"/version-dev/docs/auto-generated/previews/react/basic-navigation",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/basic-navigation.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IxBasicNavigation, IxMenu, IxMenuItem } from '@siemens/ix-react';\nimport React from 'react';\n\nexport default () => {\n  return (\n    <IxBasicNavigation>\n      <div className=\"placeholder-logo\" slot=\"logo\"></div>\n      <IxMenu>\n        <IxMenuItem>Item 1</IxMenuItem>\n        <IxMenuItem>Item 2</IxMenuItem>\n      </IxMenu>\n    </IxBasicNavigation>\n  );\n};\n")))}m.isMDXComponent=!0},95535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,s={unversionedId:"auto-generated/previews/web-component/basic-navigation-without-header",id:"auto-generated/previews/web-component/basic-navigation-without-header",title:"basic-navigation-without-header",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/basic-navigation-without-header.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/basic-navigation-without-header",permalink:"/version-dev/docs/auto-generated/previews/web-component/basic-navigation-without-header",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/basic-navigation-without-header.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<ix-basic-navigation hide-header>\n  <ix-menu>\n    <ix-menu-item>Item 1</ix-menu-item>\n    <ix-menu-item>Item 2</ix-menu-item>\n  </ix-menu>\n</ix-basic-navigation>\n")))}m.isMDXComponent=!0},31748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,s={unversionedId:"auto-generated/previews/web-component/basic-navigation",id:"auto-generated/previews/web-component/basic-navigation",title:"basic-navigation",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/basic-navigation.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/basic-navigation",permalink:"/version-dev/docs/auto-generated/previews/web-component/basic-navigation",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/basic-navigation.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ix-basic-navigation application-name="Application name">\n  <div class="placeholder-logo" slot="logo"></div>\n  <ix-menu>\n    <ix-menu-item>Item 1</ix-menu-item>\n    <ix-menu-item>Item 2</ix-menu-item>\n  </ix-menu>\n</ix-basic-navigation>\n')))}m.isMDXComponent=!0},55247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>w,frontMatter:()=>p,metadata:()=>v,toc:()=>h});var a=n(7896),i=(n(2784),n(30876)),r=n(30024),o=n(42662),s=n(31748),c=n(95008),l=n(30059),u=n(95535),m=n(89355),d=n(93862);const p={sidebar_position:0,title:"Basic navigation"},g=void 0,v={unversionedId:"controls/navigation/basic-navigation",id:"controls/navigation/basic-navigation",title:"Basic navigation",description:"Usage",source:"@site/docs/controls/navigation/basic-navigation.md",sourceDirName:"controls/navigation",slug:"/controls/navigation/basic-navigation",permalink:"/version-dev/docs/controls/navigation/basic-navigation",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/navigation/basic-navigation.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Basic navigation"},sidebar:"mySidebar",previous:{title:"AG Grid",permalink:"/version-dev/docs/controls/grid/"},next:{title:"Navigation menu",permalink:"/version-dev/docs/controls/navigation/vertical-tabs"}},f={},h=[{value:"Usage",id:"usage",level:2},{value:"Default",id:"default",level:3},{value:"Without header",id:"without-header",level:3},{value:"ix-basic-navigation",id:"ix-basic-navigation",level:3},{value:"Props",id:"props",level:4}],b={toc:h};function w(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"default"},"Default"),(0,i.kt)(r.Z,{name:"basic-navigation",height:"30rem",noMargin:!0,frameworks:{react:c.default,angular:l.default,javascript:s.default},mdxType:"Playground"}),(0,i.kt)("h3",{id:"without-header"},"Without header"),(0,i.kt)(r.Z,{name:"basic-navigation-without-header",height:"30rem",noMargin:!0,hideInitalCodePreview:!0,frameworks:{react:m.default,angular:d.default,javascript:u.default},mdxType:"Playground"}),(0,i.kt)("h3",{id:"ix-basic-navigation"},"ix-basic-navigation"),(0,i.kt)("h4",{id:"props"},"Props"),(0,i.kt)(o.default,{mdxType:"Props"}))}w.isMDXComponent=!0}}]);