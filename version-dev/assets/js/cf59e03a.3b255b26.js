"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17753,11801,87958,18810,96034,75484,52085,16930,66549,61823,61198,27655,28728],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77942:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(37949),a=n(90077),o=n(37614),i=n(2784),s=n(90943);function c(e){const t=(0,o.Z)(),[n]=(0,i.useState)(!1),c=(0,a.Z)("/"),[l,p]=(0,i.useState)(""),[u,d]=(0,i.useState)((0,s.V)(t)),{preferredVersion:m}=(0,r.J)();return(0,i.useEffect)((()=>{const t=null==m?void 0:m.name;p(void 0===t||"current"===t?c+`webcomponent-examples/dist/preview-examples/${e.name}.html`:c+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[c,null==m?void 0:m.name,e.name]),(0,i.useLayoutEffect)((()=>{const e=()=>{let e=(0,s.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),d(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),i.createElement(i.Fragment,null,n?i.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==m?void 0:m.name):i.createElement("iframe",{src:`${l}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},30024:(e,t,n)=>{n.d(t,{Z:()=>A});var r,a=n(7267),o=n(90077),i=n(55061),s=n(2784);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}const l=e=>{let{title:t,titleId:n,...a}=e;return s.createElement("svg",c({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},a),t?s.createElement("title",{id:n},t):null,r||(r=s.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var p;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}const d=e=>{let{title:t,titleId:n,...r}=e;return s.createElement("svg",u({style:{transform:"scale(1)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},r),t?s.createElement("title",{id:n},t):null,p||(p=s.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var m=n(77942);let f;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.PREVIEW="preview"}(f||(f={}));var g=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],v={clickToLoad:function(e){return h("ctl",e)},devToolsHeight:function(e){return b("devtoolsheight",e)},forceEmbedLayout:function(e){return h("embed",e)},hideDevTools:function(e){return h("hidedevtools",e)},hideExplorer:function(e){return h("hideExplorer",e)},hideNavigation:function(e){return h("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return b("terminalHeight",e)},theme:function(e){return y("theme",["light","dark"],e)},view:function(e){return y("view",["preview","editor"],e)}};function w(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&v.hasOwnProperty(t)?v[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function h(e,t){return!0===t?e+"=1":""}function b(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function y(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function x(e,t){return""+k(t)+e+w(t)}function k(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function E(e){return e&&!1===e.newWindow?"_self":"_blank"}function C(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function N(e){if(!g.includes(e.template)){var t=g.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,r=document.createElement("form");return r.method="POST",r.setAttribute("style","display:none!important;"),r.appendChild(C("project[title]",e.title)),r.appendChild(C("project[description]",e.description)),r.appendChild(C("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):r.appendChild(C("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&r.appendChild(C("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&r.appendChild(C("project[files]["+t+"]",e.files[t]))})),r}var M=function(e,t){!function(e,t){var n=N(e);n.action=x("/run",t),n.target=E(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)};const T="https://github.com/siemens/ix/tree/main/packages";function j(e){let{name:t,framework:n}=e;const r=function(e){let{name:t,framework:n}=e;return n===f.ANGULAR?`${T}/angular-test-app/src/preview-examples/${t}.ts`:n===f.JAVASCRIPT?`${T}/html-test-app/src/preview-examples/${t}.html`:n===f.REACT?`${T}/react-test-app/src/preview-examples/${t}.tsx`:void 0}({framework:n,name:t});window.open(r,"_blank")}async function O(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function I(e){let{name:t,framework:n,files:r,baseUrl:a}=e;const o=await async function(e,t,n){const r=[];return(await O(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{r.push({filename:n[t],sourceCode:e})})),r}(a,n,r);return n===f.REACT?async function(e,t){const[n,r,a,o,i]=await O([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[s]=t,c={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;c[`src/${t}`]=n})),M({template:"node",title:"iX React App",description:"iX react playground",files:{...c,"public/index.html":r,"src/index.tsx":a,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${s.filename.substring(0,s.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":o,"tsconfig.json":i,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${s.filename}`})}(a,o):n===f.ANGULAR?async function(e,t,n){const[r,a,o,i,s,c,l,p,u,d,m]=await O([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),f=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&f.push(t)}));const g=`\n    ${f.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${f.map(((e,t)=>`COMPONENT_${t},`))}\n    ];\n  `,v={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;v[`src/app/${t}`]=n})),M({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":g,"src/app/app.component.css":r,"src/app/app.component.html":a,"src/app/app.component.ts":o,"src/app/app.module.ts":i,"src/index.html":s,"src/main.ts":c,"src/styles.css":l,"angular.json":p,"package.json":u,"tsconfig.app.json":d,"tsconfig.json":m,...v}},{openFile:`src/app/${t}.ts`})}(a,t,o):n===f.JAVASCRIPT?async function(e,t){const[n,r,a,o]=await O([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[i,...s]=t,c={};s.forEach((e=>{c[`src/${e.filename}`]=e.sourceCode})),M({template:"node",title:"iX html app",description:"iX html playground",files:{...c,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",i.sourceCode),"src/main.js":r,"package.json":a,"vite.config.ts":o}},{openFile:["src/index.html"]})}(a,o):void 0}function P(e){let{name:t,framework:n}=e;return s.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>j({name:t,framework:n})},s.createElement(l,null))}function D(e){let{name:t,files:n,framework:r,baseUrl:a}=e;return s.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>I({name:t,files:n,framework:r,baseUrl:a})},s.createElement(d,null))}function $(e){const[t,n]=(0,s.useState)(e.files[0].filename);return s.createElement(s.Fragment,null,s.createElement(i.Vp,null,e.files.map((e=>{e.node;return s.createElement(i.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const r=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return r?s.createElement(r,null):null}())}function A(e){let{name:t,height:n,noMargin:r,theme:c,frameworks:l,availableFrameworks:p}=e;const{pathname:u}=(0,a.TH)(),d=(0,o.Z)("/"),[g,v]=(0,s.useState)(!0),[w,h]=(0,s.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||f.PREVIEW}(p)),[b,y]=(0,s.useState)();(0,s.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(u+t)),[t,u]);(0,s.useEffect)((()=>{const e={};l&&(Object.keys(l).forEach((n=>{if("function"==typeof l[n]){let r=t;n===f.REACT&&(r=r.concat(".tsx")),n===f.JAVASCRIPT&&(r=r.concat(".html")),n===f.ANGULAR&&(r=r.concat(".ts")),e[n]=[{filename:r,node:l[n]({})}]}"object"==typeof l[n]&&(e[n]||(e[n]=[]),Object.keys(l[n]).forEach((t=>{e[n].push({filename:t,node:l[n][t]})})))})),y(e))}),[l,y]);const x=e=>{h(e)};function k(e){return p?0===p.length||p.includes(e):Object.keys(l).some((t=>t===e))}return s.createElement("div",{className:"Playground"},g?s.createElement(s.Fragment,null,s.createElement("div",{className:"Playground__Toolbar Location__Bottom"},s.createElement(i.Vp,null,s.createElement(i.t3,{selected:w===f.PREVIEW,onClick:()=>x(f.PREVIEW)},"Preview"),k(f.ANGULAR)?s.createElement(i.t3,{selected:w===f.ANGULAR,onClick:()=>x(f.ANGULAR)},"Angular"):null,k(f.REACT)?s.createElement(i.t3,{selected:w===f.REACT,onClick:()=>x(f.REACT)},"React"):null,k(f.JAVASCRIPT)?s.createElement(i.t3,{selected:w===f.JAVASCRIPT,onClick:()=>x(f.JAVASCRIPT)},"JavaScript"):null),s.createElement("div",{className:"Playground__Toolbar__Actions"},w!==f.PREVIEW?s.createElement(s.Fragment,null,s.createElement(P,{name:t,framework:w}),s.createElement(D,{name:t,framework:w,baseUrl:d,files:b?w===f.PREVIEW?[]:b[w].map((e=>e.filename)):[]})):null)),function(){if(w===f.PREVIEW)return s.createElement(m.Z,{name:t,height:n,noMargin:r,theme:c});if(!b||!b[w])return null;if(1===b[w].length){const[{node:e}]=b[w];return e}return s.createElement($,{files:b[w]})}()):null)}},44787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/angular/input-disabled.ts",id:"auto-generated/previews/angular/input-disabled.ts",title:"input-disabled.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/input-disabled.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/input-disabled.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/input-disabled.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/input-disabled.ts.md",tags:[],version:"current",frontMatter:{}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <form class="needs-validation m-2">\n      <input\n        class="form-control"\n        defaultValue="Some example text"\n        placeholder="Enter text here"\n        type="text"\n        disabled\n      />\n    </form>\n  `,\n})\nexport default class InputDisabled {}\n')))}u.isMDXComponent=!0},23778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/angular/input-readonly.ts",id:"auto-generated/previews/angular/input-readonly.ts",title:"input-readonly.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/input-readonly.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/input-readonly.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/input-readonly.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/input-readonly.ts.md",tags:[],version:"current",frontMatter:{}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <form class="needs-validation m-2">\n      <input\n        class="form-control"\n        defaultValue="Some example text"\n        placeholder="Enter text here"\n        type="text"\n        readonly\n      />\n    </form>\n  `,\n})\nexport default class InputReadonly {}\n')))}u.isMDXComponent=!0},80008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/angular/input-with-icon.ts",id:"auto-generated/previews/angular/input-with-icon.ts",title:"input-with-icon.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/input-with-icon.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/input-with-icon.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/input-with-icon.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/input-with-icon.ts.md",tags:[],version:"current",frontMatter:{}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <form class="needs-validation m-2">\n      <ix-input-group>\n        <span slot="input-start">Price</span>\n        <input type="number" class="form-control" />\n        <span slot="input-end">.00</span>\n        <span slot="input-end">$</span>\n      </ix-input-group>\n    </form>\n  `,\n})\nexport default class InputWithIcon {}\n')))}u.isMDXComponent=!0},52708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/angular/input.ts",id:"auto-generated/previews/angular/input.ts",title:"input.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/input.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/input.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/input.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/input.ts.md",tags:[],version:"current",frontMatter:{}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <form class="needs-validation m-2">\n      <input\n        class="form-control"\n        defaultValue="Some example text"\n        placeholder="Enter text here"\n        type="text"\n      />\n    </form>\n  `,\n})\nexport default class Input {}\n')))}u.isMDXComponent=!0},20838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/react/input-disabled",id:"auto-generated/previews/react/input-disabled",title:"input-disabled",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/input-disabled.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/input-disabled",permalink:"/version-dev/docs/auto-generated/previews/react/input-disabled",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/input-disabled.md",tags:[],version:"current",frontMatter:{}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\n\nexport default () => {\n  return (\n    <form className="needs-validation m-2">\n      <input\n        className="form-control"\n        defaultValue="Some example text"\n        placeholder="Enter text here"\n        type="text"\n        disabled\n      />\n    </form>\n  );\n};\n')))}u.isMDXComponent=!0},66628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/react/input-readonly",id:"auto-generated/previews/react/input-readonly",title:"input-readonly",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/input-readonly.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/input-readonly",permalink:"/version-dev/docs/auto-generated/previews/react/input-readonly",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/input-readonly.md",tags:[],version:"current",frontMatter:{}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\n\nexport default () => {\n  return (\n    <form className="needs-validation m-2">\n      <input\n        className="form-control"\n        defaultValue="Some example text"\n        placeholder="Enter text here"\n        type="text"\n        readOnly\n      />\n    </form>\n  );\n};\n')))}u.isMDXComponent=!0},70658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/react/input-with-icon",id:"auto-generated/previews/react/input-with-icon",title:"input-with-icon",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/input-with-icon.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/input-with-icon",permalink:"/version-dev/docs/auto-generated/previews/react/input-with-icon",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/input-with-icon.md",tags:[],version:"current",frontMatter:{}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { IxInputGroup } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <form className="needs-validation m-2">\n      <IxInputGroup>\n        <span slot="input-start">Price</span>\n        <input type="number" className="form-control" />\n        <span slot="input-end">.00</span>\n        <span slot="input-end">$</span>\n      </IxInputGroup>\n    </form>\n  );\n};\n')))}u.isMDXComponent=!0},15030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/react/input",id:"auto-generated/previews/react/input",title:"input",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/input.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/input",permalink:"/version-dev/docs/auto-generated/previews/react/input",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/input.md",tags:[],version:"current",frontMatter:{}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\n\nexport default () => {\n  return (\n    <form className="needs-validation m-2">\n      <input\n        className="form-control"\n        defaultValue="Some example text"\n        placeholder="Enter text here"\n        type="text"\n      />\n    </form>\n  );\n};\n')))}u.isMDXComponent=!0},35296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/web-component/input-disabled",id:"auto-generated/previews/web-component/input-disabled",title:"input-disabled",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/input-disabled.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/input-disabled",permalink:"/version-dev/docs/auto-generated/previews/web-component/input-disabled",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/input-disabled.md",tags:[],version:"current",frontMatter:{}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form class="needs-validation m-2">\n  <input\n    class="form-control"\n    defaultValue="Some example text"\n    placeholder="Enter text here"\n    type="text"\n    disabled\n  />\n</form>\n')))}u.isMDXComponent=!0},90613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/web-component/input-readonly",id:"auto-generated/previews/web-component/input-readonly",title:"input-readonly",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/input-readonly.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/input-readonly",permalink:"/version-dev/docs/auto-generated/previews/web-component/input-readonly",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/input-readonly.md",tags:[],version:"current",frontMatter:{}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form class="needs-validation m-2">\n  <input\n    class="form-control"\n    defaultValue="Some example text"\n    placeholder="Enter text here"\n    type="text"\n    readonly\n  />\n</form>\n')))}u.isMDXComponent=!0},80375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/web-component/input-with-icon",id:"auto-generated/previews/web-component/input-with-icon",title:"input-with-icon",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/input-with-icon.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/input-with-icon",permalink:"/version-dev/docs/auto-generated/previews/web-component/input-with-icon",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/input-with-icon.md",tags:[],version:"current",frontMatter:{}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form class="needs-validation m-2">\n  <ix-input-group>\n    <span slot="input-start">Price</span>\n    <input type="number" class="form-control" />\n    <span slot="input-end">.00</span>\n    <span slot="input-end">$</span>\n  </ix-input-group>\n</form>\n')))}u.isMDXComponent=!0},12599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/web-component/input",id:"auto-generated/previews/web-component/input",title:"input",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/input.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/input",permalink:"/version-dev/docs/auto-generated/previews/web-component/input",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/input.md",tags:[],version:"current",frontMatter:{}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form class="needs-validation m-2">\n  <input\n    class="form-control"\n    defaultValue="Some example text"\n    placeholder="Enter text here"\n    type="text"\n  />\n</form>\n')))}u.isMDXComponent=!0},11717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>b,default:()=>C,frontMatter:()=>h,metadata:()=>y,toc:()=>k});var r=n(7896),a=(n(2784),n(30876)),o=n(30024),i=n(12599),s=n(35296),c=n(90613),l=n(80375),p=n(15030),u=n(20838),d=n(66628),m=n(70658),f=n(52708),g=n(44787),v=n(23778),w=n(80008);const h={},b="Input",y={unversionedId:"controls/input",id:"controls/input",title:"Input",description:"Usage",source:"@site/docs/controls/input.md",sourceDirName:"controls",slug:"/controls/input",permalink:"/version-dev/docs/controls/input",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/input.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"HTML table",permalink:"/version-dev/docs/controls/html-grid"},next:{title:"KPI",permalink:"/version-dev/docs/controls/kpi"}},x={},k=[{value:"Usage",id:"usage",level:2},{value:"Disabled",id:"disabled",level:3},{value:"Readonly",id:"readonly",level:3},{value:"with Icon",id:"with-icon",level:3}],E={toc:k};function C(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"input"},"Input"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(o.Z,{name:"input",frameworks:{react:p.default,angular:f.default,javascript:i.default},mdxType:"Playground"}),(0,a.kt)("h3",{id:"disabled"},"Disabled"),(0,a.kt)(o.Z,{name:"input-disabled",hideInitalCodePreview:!0,frameworks:{react:u.default,angular:g.default,javascript:s.default},mdxType:"Playground"}),(0,a.kt)("h3",{id:"readonly"},"Readonly"),(0,a.kt)(o.Z,{name:"input-readonly",hideInitalCodePreview:!0,frameworks:{react:d.default,angular:v.default,javascript:c.default},mdxType:"Playground"}),(0,a.kt)("h3",{id:"with-icon"},"with Icon"),(0,a.kt)(o.Z,{name:"input-with-icon",hideInitalCodePreview:!0,frameworks:{react:m.default,angular:w.default,javascript:l.default},mdxType:"Playground"}))}C.isMDXComponent=!0}}]);