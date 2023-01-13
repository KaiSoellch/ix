"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71871,67003,81501,66570,504,2491],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77942:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(37949),a=n(90077),i=n(37614),o=n(2784),l=n(90943);function s(e){const t=(0,i.Z)(),[n]=(0,o.useState)(!1),s=(0,a.Z)("/"),[c,u]=(0,o.useState)(""),[d,m]=(0,o.useState)((0,l.V)(t)),{preferredVersion:p}=(0,r.J)();return(0,o.useEffect)((()=>{const t=null==p?void 0:p.name;u(void 0===t||"current"===t?s+`webcomponent-examples/dist/preview-examples/${e.name}.html`:s+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[s,null==p?void 0:p.name,e.name]),(0,o.useLayoutEffect)((()=>{const e=()=>{let e=(0,l.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),o.createElement(o.Fragment,null,n?o.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==p?void 0:p.name):o.createElement("iframe",{src:`${c}?theme=${e.theme?e.theme:d}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},30024:(e,t,n)=>{n.d(t,{Z:()=>D});var r,a=n(7267),i=n(90077),o=n(55061),l=n(2784);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}const c=e=>{let{title:t,titleId:n,...a}=e;return l.createElement("svg",s({style:{transform:"scale(2)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},a),t?l.createElement("title",{id:n},t):null,r||(r=l.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var u;function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}const m=e=>{let{title:t,titleId:n,...r}=e;return l.createElement("svg",d({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},r),t?l.createElement("title",{id:n},t):null,u||(u=l.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var p=n(77942);let f;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript"}(f||(f={}));var g=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],v={clickToLoad:function(e){return x("ctl",e)},devToolsHeight:function(e){return b("devtoolsheight",e)},forceEmbedLayout:function(e){return x("embed",e)},hideDevTools:function(e){return x("hidedevtools",e)},hideExplorer:function(e){return x("hideExplorer",e)},hideNavigation:function(e){return x("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return b("terminalHeight",e)},theme:function(e){return w("theme",["light","dark"],e)},view:function(e){return w("view",["preview","editor"],e)}};function h(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&v.hasOwnProperty(t)?v[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function x(e,t){return!0===t?e+"=1":""}function b(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function w(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function y(e,t){return""+k(t)+e+h(t)}function k(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function E(e){return e&&!1===e.newWindow?"_self":"_blank"}function C(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function T(e){if(!g.includes(e.template)){var t=g.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,r=document.createElement("form");return r.method="POST",r.setAttribute("style","display:none!important;"),r.appendChild(C("project[title]",e.title)),r.appendChild(C("project[description]",e.description)),r.appendChild(C("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):r.appendChild(C("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&r.appendChild(C("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&r.appendChild(C("project[files]["+t+"]",e.files[t]))})),r}var N=function(e,t){!function(e,t){var n=T(e);n.action=y("/run",t),n.target=E(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)};const j="https://github.com/siemens/ix/tree/main/packages";function A(e){let{name:t,framework:n}=e;const r=function(e){let{name:t,framework:n}=e;return n===f.ANGULAR?`${j}/angular-test-app/src/preview-examples/${t}.ts`:n===f.JAVASCRIPT?`${j}/html-test-app/src/preview-examples/${t}.html`:n===f.REACT?`${j}/react-test-app/src/preview-examples/${t}.tsx`:void 0}({framework:n,name:t});window.open(r,"_blank")}async function O(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function _(e){let{name:t,framework:n,files:r,baseUrl:a}=e;const i=await async function(e,t,n){const r=[];return(await O(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{r.push({filename:n[t],sourceCode:e})})),r}(a,n,r);return n===f.REACT?async function(e,t){const[n,r,a,i,o]=await O([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[l]=t,s={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;s[`src/${t}`]=n})),N({template:"node",title:"iX React App",description:"iX react playground",files:{...s,"public/index.html":r,"src/index.tsx":a,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${l.filename.substring(0,l.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":i,"tsconfig.json":o,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${l.filename}`})}(a,i):n===f.ANGULAR?async function(e,t,n){const[r,a,i,o,l,s,c,u,d,m,p]=await O([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),f=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&f.push(t)}));const g=`\n    ${f.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${f.map(((e,t)=>`COMPONENT_${t},`))}\n    ];\n  `,v={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;v[`src/app/${t}`]=n})),N({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":g,"src/app/app.component.css":r,"src/app/app.component.html":a,"src/app/app.component.ts":i,"src/app/app.module.ts":o,"src/index.html":l,"src/main.ts":s,"src/styles.css":c,"angular.json":u,"package.json":d,"tsconfig.app.json":m,"tsconfig.json":p,...v}},{openFile:`src/app/${t}.ts`})}(a,t,i):n===f.JAVASCRIPT?async function(e,t){const[n,r,a,i]=await O([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[o,...l]=t,s={};l.forEach((e=>{s[`src/${e.filename}`]=e.sourceCode})),N({template:"node",title:"iX html app",description:"iX html playground",files:{...s,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",o.sourceCode),"src/main.js":r,"package.json":a,"vite.config.ts":i}},{openFile:["src/index.html"]})}(a,i):void 0}function I(e){let{name:t,framework:n}=e;return l.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>A({name:t,framework:n})},l.createElement(c,null))}function $(e){let{name:t,files:n,framework:r,baseUrl:a}=e;return l.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>_({name:t,files:n,framework:r,baseUrl:a})},l.createElement(m,null))}function P(e){let{onClick:t,showCode:n}=e;return l.createElement("ix-button",{onClick:t,ghost:!0},n?"Hide Code":"Show Code")}function M(e){const[t,n]=(0,l.useState)(e.files[0].filename);return l.createElement(l.Fragment,null,l.createElement(o.Vp,null,e.files.map((e=>{e.node;return l.createElement(o.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const r=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return r?l.createElement(r,null):null}())}function D(e){let{name:t,height:n,noMargin:r,theme:s,frameworks:c,hideInitalCodePreview:u,availableFrameworks:d}=e;const{pathname:m}=(0,a.TH)(),g=(0,i.Z)("/"),[v,h]=(0,l.useState)(!u),[x,b]=(0,l.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||f.ANGULAR}(d)),[w,y]=(0,l.useState)();(0,l.useEffect)((()=>{const e=function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(m),t=localStorage.getItem(e);var n;t&&((n=t)===f.ANGULAR||n===f.JAVASCRIPT||n===f.REACT)&&b(t)}),[]),(0,l.useEffect)((()=>{const e={};Object.keys(c).forEach((n=>{if("function"==typeof c[n]){let r=t;n===f.REACT&&(r=r.concat(".tsx")),n===f.JAVASCRIPT&&(r=r.concat(".html")),n===f.ANGULAR&&(r=r.concat(".ts")),e[n]=[{filename:r,node:c[n]({})}]}"object"==typeof c[n]&&(e[n]||(e[n]=[]),Object.keys(c[n]).forEach((t=>{e[n].push({filename:t,node:c[n][t]})})))})),y(e)}),[c,y]);const k=e=>{b(e),m&&localStorage.setItem(`docusaurus.playground${m.replace(/\//g,".")}`,e)};function E(e){return!d||(0===d.length||d.includes(e))}return l.createElement("div",{className:"Playground"},l.createElement("div",{className:"Playground__Toolbar Location__Top"},l.createElement("div",{className:"Playground__Toolbar__Actions"},l.createElement(P,{onClick:()=>h(!v),showCode:v}))),l.createElement(p.Z,{name:t,height:n,noMargin:r,theme:s}),v?l.createElement(l.Fragment,null,l.createElement("div",{className:"Playground__Toolbar Location__Bottom"},E(f.ANGULAR)?l.createElement(o._h,{className:"Playground__Framework__Button",ghost:x!==f.ANGULAR,onClick:()=>k(f.ANGULAR)},"Angular"):null,E(f.REACT)?l.createElement(o._h,{className:"Playground__Framework__Button",ghost:x!==f.REACT,onClick:()=>k(f.REACT)},"React"):null,E(f.JAVASCRIPT)?l.createElement(o._h,{className:"Playground__Framework__Button",ghost:x!==f.JAVASCRIPT,onClick:()=>k(f.JAVASCRIPT)},"JavaScript"):null,l.createElement("div",{className:"Playground__Toolbar__Actions"},l.createElement(I,{name:t,framework:x}),l.createElement($,{name:t,framework:x,baseUrl:g,files:w?w[x].map((e=>e.filename)):[]}))),function(){if(!w||!w[x])return null;if(1===w[x].length){const[{node:e}]=w[x];return e}return l.createElement(M,{files:w[x]})}()):null)}},29603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/ix-tile/events",id:"auto-generated/ix-tile/events",title:"events",description:"No events available for this component.",source:"@site/docs/auto-generated/ix-tile/events.md",sourceDirName:"auto-generated/ix-tile",slug:"/auto-generated/ix-tile/events",permalink:"/version-dev/docs/auto-generated/ix-tile/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-tile/events.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No events available for this component."))}d.isMDXComponent=!0},95960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/ix-tile/props",id:"auto-generated/ix-tile/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-tile/props.md",sourceDirName:"auto-generated/ix-tile",slug:"/auto-generated/ix-tile/props",permalink:"/version-dev/docs/auto-generated/ix-tile/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-tile/props.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"size"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"Api__Table"},(0,a.kt)("div",null,"Size of the tile - one of 'small', 'medium' or 'large'"),(0,a.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"size")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"big" \uff5c "medium" \uff5c "small"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'medium'"))))))}d.isMDXComponent=!0},66243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/angular/tile.ts",id:"auto-generated/previews/angular/tile.ts",title:"tile.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/tile.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/tile.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/tile.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/tile.ts.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-tile size="small">92.8 \xb0C</ix-tile>\n\n    <ix-tile size="medium" class="mr-1">\n      <div slot="header">Tile header</div>\n      <div class="text-l">92.8 \xb0C</div>\n    </ix-tile>\n\n    <ix-tile size="big">\n      <div\n        class="d-flex flex-grow-1 align-items-center justify-content-between"\n        slot="header"\n      >\n        Tile header\n        <ix-icon-button ghost icon="context-menu"></ix-icon-button>\n      </div>\n      <div slot="subheader">Temperature</div>\n      <div\n        style="\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        align-items: flex-end;\n        justify-content: space-between;\n      "\n      >\n        <span>92.8 \xb0C</span>\n      </div>\n      <div\n        class="d-flex h-100 align-items-center justify-content-end"\n        slot="footer"\n      >\n        <ix-button ghost slot="footer">\n          <ix-icon name="chevron-right-small"></ix-icon>Details\n        </ix-button>\n      </div>\n    </ix-tile>\n  `,\n})\nexport default class Tile {}\n')))}d.isMDXComponent=!0},88185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/react/tile",id:"auto-generated/previews/react/tile",title:"tile",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/tile.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/tile",permalink:"/version-dev/docs/auto-generated/previews/react/tile",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/tile.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { IxButton, IxIcon, IxIconButton, IxTile } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <div className="example">\n      <IxTile size="small">92.8 \xb0C</IxTile>\n\n      <IxTile size="medium" className="mr-1">\n        <div slot="header">Tile header</div>\n        <div className="text-l">92.8 \xb0C</div>\n      </IxTile>\n\n      <IxTile size="big">\n        <div\n          className="d-flex flex-grow-1 align-items-center justify-content-between"\n          slot="header"\n        >\n          Tile header\n          <IxIconButton ghost icon="context-menu"></IxIconButton>\n        </div>\n        <div slot="subheader">Temperature</div>\n        <div\n          style={{\n            display: \'flex\',\n            flexDirection: \'column\',\n            height: \'100%\',\n            alignItems: \'flex-end\',\n            justifyContent: \'space-between\',\n          }}\n        >\n          <span>92.8 \xb0C</span>\n        </div>\n        <div\n          className="d-flex h-100 align-items-center justify-content-end"\n          slot="footer"\n        >\n          <IxButton ghost slot="footer">\n            <IxIcon name="chevron-right-small"></IxIcon>Details\n          </IxButton>\n        </div>\n      </IxTile>\n    </div>\n  );\n};\n')))}d.isMDXComponent=!0},90191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/web-component/tile",id:"auto-generated/previews/web-component/tile",title:"tile",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/tile.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/tile",permalink:"/version-dev/docs/auto-generated/previews/web-component/tile",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/tile.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ix-tile size="small">92.8 \xb0C</ix-tile>\n\n<ix-tile size="medium" class="mr-1">\n  <div slot="header">Tile header</div>\n  <div class="text-l">92.8 \xb0C</div>\n</ix-tile>\n\n<ix-tile size="big">\n  <div\n    class="d-flex flex-grow-1 align-items-center justify-content-between"\n    slot="header"\n  >\n    Tile header\n    <ix-icon-button ghost icon="context-menu"></ix-icon-button>\n  </div>\n  <div slot="subheader">Temperature</div>\n  <div\n    style="\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n      align-items: flex-end;\n      justify-content: space-between;\n    "\n  >\n    <span>92.8 \xb0C</span>\n  </div>\n  <div\n    class="d-flex h-100 align-items-center justify-content-end"\n    slot="footer"\n  >\n    <ix-button ghost slot="footer">\n      <ix-icon name="chevron-right-small"></ix-icon>Details\n    </ix-button>\n  </div>\n</ix-tile>\n')))}d.isMDXComponent=!0},61065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>h,frontMatter:()=>d,metadata:()=>p,toc:()=>g});var r=n(7896),a=(n(2784),n(30876)),i=n(30024),o=n(95960),l=n(29603),s=n(90191),c=n(88185),u=n(66243);const d={},m="Tile",p={unversionedId:"controls/tile",id:"controls/tile",title:"Tile",description:"Usage",source:"@site/docs/controls/tile.md",sourceDirName:"controls",slug:"/controls/tile",permalink:"/version-dev/docs/controls/tile",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/tile.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Text area",permalink:"/version-dev/docs/controls/textarea"},next:{title:"Time picker",permalink:"/version-dev/docs/controls/time-picker"}},f={},g=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}],v={toc:g};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tile"},"Tile"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(i.Z,{name:"tile",height:"22rem",frameworks:{react:c.default,angular:u.default,javascript:s.default},mdxType:"Playground"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)(o.default,{mdxType:"Props"}),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)(l.default,{mdxType:"Events"}))}h.isMDXComponent=!0}}]);