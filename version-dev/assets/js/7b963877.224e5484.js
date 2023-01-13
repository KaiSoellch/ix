"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46613,31144,59992,94768,82719,45730,94127,1312,21258],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77942:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(37949),a=n(90077),o=n(37614),i=n(2784),s=n(90943);function l(e){const t=(0,o.Z)(),[n]=(0,i.useState)(!1),l=(0,a.Z)("/"),[c,p]=(0,i.useState)(""),[u,d]=(0,i.useState)((0,s.V)(t)),{preferredVersion:m}=(0,r.J)();return(0,i.useEffect)((()=>{const t=null==m?void 0:m.name;p(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,null==m?void 0:m.name,e.name]),(0,i.useLayoutEffect)((()=>{const e=()=>{let e=(0,s.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),d(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),i.createElement(i.Fragment,null,n?i.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==m?void 0:m.name):i.createElement("iframe",{src:`${c}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},30024:(e,t,n)=>{n.d(t,{Z:()=>D});var r,a=n(7267),o=n(90077),i=n(55061),s=n(2784);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const c=e=>{let{title:t,titleId:n,...a}=e;return s.createElement("svg",l({style:{transform:"scale(2)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},a),t?s.createElement("title",{id:n},t):null,r||(r=s.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var p;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}const d=e=>{let{title:t,titleId:n,...r}=e;return s.createElement("svg",u({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},r),t?s.createElement("title",{id:n},t):null,p||(p=s.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var m=n(77942);let g;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript"}(g||(g={}));var f=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],v={clickToLoad:function(e){return w("ctl",e)},devToolsHeight:function(e){return k("devtoolsheight",e)},forceEmbedLayout:function(e){return w("embed",e)},hideDevTools:function(e){return w("hidedevtools",e)},hideExplorer:function(e){return w("hideExplorer",e)},hideNavigation:function(e){return w("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return k("terminalHeight",e)},theme:function(e){return b("theme",["light","dark"],e)},view:function(e){return b("view",["preview","editor"],e)}};function h(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&v.hasOwnProperty(t)?v[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function w(e,t){return!0===t?e+"=1":""}function k(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function b(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function y(e,t){return""+x(t)+e+h(t)}function x(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function N(e){return e&&!1===e.newWindow?"_self":"_blank"}function E(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function C(e){if(!f.includes(e.template)){var t=f.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,r=document.createElement("form");return r.method="POST",r.setAttribute("style","display:none!important;"),r.appendChild(E("project[title]",e.title)),r.appendChild(E("project[description]",e.description)),r.appendChild(E("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):r.appendChild(E("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&r.appendChild(E("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&r.appendChild(E("project[files]["+t+"]",e.files[t]))})),r}var T=function(e,t){!function(e,t){var n=C(e);n.action=y("/run",t),n.target=N(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)};const A="https://github.com/siemens/ix/tree/main/packages";function j(e){let{name:t,framework:n}=e;const r=function(e){let{name:t,framework:n}=e;return n===g.ANGULAR?`${A}/angular-test-app/src/preview-examples/${t}.ts`:n===g.JAVASCRIPT?`${A}/html-test-app/src/preview-examples/${t}.html`:n===g.REACT?`${A}/react-test-app/src/preview-examples/${t}.tsx`:void 0}({framework:n,name:t});window.open(r,"_blank")}async function _(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function O(e){let{name:t,framework:n,files:r,baseUrl:a}=e;const o=await async function(e,t,n){const r=[];return(await _(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{r.push({filename:n[t],sourceCode:e})})),r}(a,n,r);return n===g.REACT?async function(e,t){const[n,r,a,o,i]=await _([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[s]=t,l={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;l[`src/${t}`]=n})),T({template:"node",title:"iX React App",description:"iX react playground",files:{...l,"public/index.html":r,"src/index.tsx":a,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${s.filename.substring(0,s.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":o,"tsconfig.json":i,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${s.filename}`})}(a,o):n===g.ANGULAR?async function(e,t,n){const[r,a,o,i,s,l,c,p,u,d,m]=await _([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),g=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&g.push(t)}));const f=`\n    ${g.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${g.map(((e,t)=>`COMPONENT_${t},`))}\n    ];\n  `,v={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;v[`src/app/${t}`]=n})),T({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":f,"src/app/app.component.css":r,"src/app/app.component.html":a,"src/app/app.component.ts":o,"src/app/app.module.ts":i,"src/index.html":s,"src/main.ts":l,"src/styles.css":c,"angular.json":p,"package.json":u,"tsconfig.app.json":d,"tsconfig.json":m,...v}},{openFile:`src/app/${t}.ts`})}(a,t,o):n===g.JAVASCRIPT?async function(e,t){const[n,r,a,o]=await _([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[i,...s]=t,l={};s.forEach((e=>{l[`src/${e.filename}`]=e.sourceCode})),T({template:"node",title:"iX html app",description:"iX html playground",files:{...l,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",i.sourceCode),"src/main.js":r,"package.json":a,"vite.config.ts":o}},{openFile:["src/index.html"]})}(a,o):void 0}function M(e){let{name:t,framework:n}=e;return s.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>j({name:t,framework:n})},s.createElement(c,null))}function P(e){let{name:t,files:n,framework:r,baseUrl:a}=e;return s.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>O({name:t,files:n,framework:r,baseUrl:a})},s.createElement(d,null))}function $(e){let{onClick:t,showCode:n}=e;return s.createElement("ix-button",{onClick:t,ghost:!0},n?"Hide Code":"Show Code")}function S(e){const[t,n]=(0,s.useState)(e.files[0].filename);return s.createElement(s.Fragment,null,s.createElement(i.Vp,null,e.files.map((e=>{e.node;return s.createElement(i.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const r=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return r?s.createElement(r,null):null}())}function D(e){let{name:t,height:n,noMargin:r,theme:l,frameworks:c,hideInitalCodePreview:p,availableFrameworks:u}=e;const{pathname:d}=(0,a.TH)(),f=(0,o.Z)("/"),[v,h]=(0,s.useState)(!p),[w,k]=(0,s.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||g.ANGULAR}(u)),[b,y]=(0,s.useState)();(0,s.useEffect)((()=>{const e=function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(d),t=localStorage.getItem(e);var n;t&&((n=t)===g.ANGULAR||n===g.JAVASCRIPT||n===g.REACT)&&k(t)}),[]),(0,s.useEffect)((()=>{const e={};Object.keys(c).forEach((n=>{if("function"==typeof c[n]){let r=t;n===g.REACT&&(r=r.concat(".tsx")),n===g.JAVASCRIPT&&(r=r.concat(".html")),n===g.ANGULAR&&(r=r.concat(".ts")),e[n]=[{filename:r,node:c[n]({})}]}"object"==typeof c[n]&&(e[n]||(e[n]=[]),Object.keys(c[n]).forEach((t=>{e[n].push({filename:t,node:c[n][t]})})))})),y(e)}),[c,y]);const x=e=>{k(e),d&&localStorage.setItem(`docusaurus.playground${d.replace(/\//g,".")}`,e)};function N(e){return!u||(0===u.length||u.includes(e))}return s.createElement("div",{className:"Playground"},s.createElement("div",{className:"Playground__Toolbar Location__Top"},s.createElement("div",{className:"Playground__Toolbar__Actions"},s.createElement($,{onClick:()=>h(!v),showCode:v}))),s.createElement(m.Z,{name:t,height:n,noMargin:r,theme:l}),v?s.createElement(s.Fragment,null,s.createElement("div",{className:"Playground__Toolbar Location__Bottom"},N(g.ANGULAR)?s.createElement(i._h,{className:"Playground__Framework__Button",ghost:w!==g.ANGULAR,onClick:()=>x(g.ANGULAR)},"Angular"):null,N(g.REACT)?s.createElement(i._h,{className:"Playground__Framework__Button",ghost:w!==g.REACT,onClick:()=>x(g.REACT)},"React"):null,N(g.JAVASCRIPT)?s.createElement(i._h,{className:"Playground__Framework__Button",ghost:w!==g.JAVASCRIPT,onClick:()=>x(g.JAVASCRIPT)},"JavaScript"):null,s.createElement("div",{className:"Playground__Toolbar__Actions"},s.createElement(M,{name:t,framework:w}),s.createElement(P,{name:t,framework:w,baseUrl:f,files:b?b[w].map((e=>e.filename)):[]}))),function(){if(!b||!b[w])return null;if(1===b[w].length){const[{node:e}]=b[w];return e}return s.createElement(S,{files:b[w]})}()):null)}},68747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/ix-spinner/events",id:"auto-generated/ix-spinner/events",title:"events",description:"No events available for this component.",source:"@site/docs/auto-generated/ix-spinner/events.md",sourceDirName:"auto-generated/ix-spinner",slug:"/auto-generated/ix-spinner/events",permalink:"/version-dev/docs/auto-generated/ix-spinner/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-spinner/events.md",tags:[],version:"current",frontMatter:{}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No events available for this component."))}u.isMDXComponent=!0},75396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/ix-spinner/props",id:"auto-generated/ix-spinner/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-spinner/props.md",sourceDirName:"auto-generated/ix-spinner",slug:"/auto-generated/ix-spinner/props",permalink:"/version-dev/docs/auto-generated/ix-spinner/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-spinner/props.md",tags:[],version:"current",frontMatter:{}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"size"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"Api__Table"},(0,a.kt)("div",null,"Size of spinner"),(0,a.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"size")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"large" \uff5c "medium"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'medium'"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"variant"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"Api__Table"},(0,a.kt)("div",null,"Variant of spinner"),(0,a.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"variant")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"primary" \uff5c "secondary" \uff5c "sencodary"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'secondary'"))))))}u.isMDXComponent=!0},14386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/angular/spinner-large.ts",id:"auto-generated/previews/angular/spinner-large.ts",title:"spinner-large.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/spinner-large.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/spinner-large.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/spinner-large.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/spinner-large.ts.md",tags:[],version:"current",frontMatter:{}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  template: ` <ix-spinner size=\"large\"></ix-spinner> `,\n})\nexport default class SpinnerLarge {}\n")))}u.isMDXComponent=!0},42268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/angular/spinner.ts",id:"auto-generated/previews/angular/spinner.ts",title:"spinner.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/spinner.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/spinner.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/spinner.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/spinner.ts.md",tags:[],version:"current",frontMatter:{}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  template: ` <ix-spinner></ix-spinner> `,\n})\nexport default class Spinner {}\n")))}u.isMDXComponent=!0},85479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/react/spinner-large",id:"auto-generated/previews/react/spinner-large",title:"spinner-large",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/spinner-large.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/spinner-large",permalink:"/version-dev/docs/auto-generated/previews/react/spinner-large",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/spinner-large.md",tags:[],version:"current",frontMatter:{}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IxSpinner } from '@siemens/ix-react';\nimport React from 'react';\n\nexport default () => {\n  return <IxSpinner size=\"large\"></IxSpinner>;\n};\n")))}u.isMDXComponent=!0},1194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/react/spinner",id:"auto-generated/previews/react/spinner",title:"spinner",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/spinner.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/spinner",permalink:"/version-dev/docs/auto-generated/previews/react/spinner",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/spinner.md",tags:[],version:"current",frontMatter:{}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IxSpinner } from '@siemens/ix-react';\nimport React from 'react';\n\nexport default () => {\n  return <IxSpinner></IxSpinner>;\n};\n")))}u.isMDXComponent=!0},40824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/web-component/spinner-large",id:"auto-generated/previews/web-component/spinner-large",title:"spinner-large",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/spinner-large.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/spinner-large",permalink:"/version-dev/docs/auto-generated/previews/web-component/spinner-large",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/spinner-large.md",tags:[],version:"current",frontMatter:{}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ix-spinner size="large"></ix-spinner>\n')))}u.isMDXComponent=!0},73047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/web-component/spinner",id:"auto-generated/previews/web-component/spinner",title:"spinner",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/spinner.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/spinner",permalink:"/version-dev/docs/auto-generated/previews/web-component/spinner",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/spinner.md",tags:[],version:"current",frontMatter:{}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<ix-spinner></ix-spinner>\n")))}u.isMDXComponent=!0},17844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>b,frontMatter:()=>g,metadata:()=>v,toc:()=>w});var r=n(7896),a=(n(2784),n(30876)),o=n(30024),i=n(75396),s=n(68747),l=n(73047),c=n(40824),p=n(1194),u=n(85479),d=n(42268),m=n(14386);const g={},f="Spinner",v={unversionedId:"controls/spinner",id:"controls/spinner",title:"Spinner",description:"Usage",source:"@site/docs/controls/spinner.md",sourceDirName:"controls",slug:"/controls/spinner",permalink:"/version-dev/docs/controls/spinner",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/spinner.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Select",permalink:"/version-dev/docs/controls/select"},next:{title:"Split button",permalink:"/version-dev/docs/controls/split-button"}},h={},w=[{value:"Usage",id:"usage",level:2},{value:"Large",id:"large",level:3},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}],k={toc:w};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spinner"},"Spinner"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(o.Z,{name:"spinner",height:"5rem",frameworks:{react:p.default,angular:d.default,javascript:l.default},mdxType:"Playground"}),(0,a.kt)("h3",{id:"large"},"Large"),(0,a.kt)(o.Z,{name:"spinner-large",height:"16rem",hideInitalCodePreview:!0,frameworks:{react:m.default,angular:u.default,javascript:c.default},mdxType:"Playground"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)(i.default,{mdxType:"Props"}),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)(s.default,{mdxType:"Events"}))}b.isMDXComponent=!0}}]);