"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51524,96443,32285,98311,78461,55899],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77942:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(37949),r=n(90077),i=n(37614),o=n(2784),s=n(90943);function l(e){const t=(0,i.Z)(),[n]=(0,o.useState)(!1),l=(0,r.Z)("/"),[c,p]=(0,o.useState)(""),[d,u]=(0,o.useState)((0,s.V)(t)),{preferredVersion:m}=(0,a.J)();return(0,o.useEffect)((()=>{const t=null==m?void 0:m.name;p(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,null==m?void 0:m.name,e.name]),(0,o.useLayoutEffect)((()=>{const e=()=>{let e=(0,s.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),u(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),o.createElement(o.Fragment,null,n?o.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==m?void 0:m.name):o.createElement("iframe",{src:`${c}?theme=${e.theme?e.theme:d}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},30024:(e,t,n)=>{n.d(t,{Z:()=>M});var a,r=n(7267),i=n(90077),o=n(55061),s=n(2784);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}const c=e=>{let{title:t,titleId:n,...r}=e;return s.createElement("svg",l({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},r),t?s.createElement("title",{id:n},t):null,a||(a=s.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var p;function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}const u=e=>{let{title:t,titleId:n,...a}=e;return s.createElement("svg",d({style:{transform:"scale(1)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},a),t?s.createElement("title",{id:n},t):null,p||(p=s.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var m=n(77942);let g;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.PREVIEW="preview"}(g||(g={}));var f=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],h={clickToLoad:function(e){return x("ctl",e)},devToolsHeight:function(e){return k("devtoolsheight",e)},forceEmbedLayout:function(e){return x("embed",e)},hideDevTools:function(e){return x("hidedevtools",e)},hideExplorer:function(e){return x("hideExplorer",e)},hideNavigation:function(e){return x("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return k("terminalHeight",e)},theme:function(e){return b("theme",["light","dark"],e)},view:function(e){return b("view",["preview","editor"],e)}};function v(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&h.hasOwnProperty(t)?h[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function x(e,t){return!0===t?e+"=1":""}function k(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function b(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function w(e,t){return""+y(t)+e+v(t)}function y(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function E(e){return e&&!1===e.newWindow?"_self":"_blank"}function N(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function C(e){if(!f.includes(e.template)){var t=f.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,a=document.createElement("form");return a.method="POST",a.setAttribute("style","display:none!important;"),a.appendChild(N("project[title]",e.title)),a.appendChild(N("project[description]",e.description)),a.appendChild(N("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a.appendChild(N("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&a.appendChild(N("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&a.appendChild(N("project[files]["+t+"]",e.files[t]))})),a}var T=function(e,t){!function(e,t){var n=C(e);n.action=w("/run",t),n.target=E(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)};const j="https://github.com/siemens/ix/tree/main/packages";function O(e){let{name:t,framework:n}=e;const a=function(e){let{name:t,framework:n}=e;return n===g.ANGULAR?`${j}/angular-test-app/src/preview-examples/${t}.ts`:n===g.JAVASCRIPT?`${j}/html-test-app/src/preview-examples/${t}.html`:n===g.REACT?`${j}/react-test-app/src/preview-examples/${t}.tsx`:void 0}({framework:n,name:t});window.open(a,"_blank")}async function A(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function P(e){let{name:t,framework:n,files:a,baseUrl:r}=e;const i=await async function(e,t,n){const a=[];return(await A(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{a.push({filename:n[t],sourceCode:e})})),a}(r,n,a);return n===g.REACT?async function(e,t){const[n,a,r,i,o]=await A([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[s]=t,l={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;l[`src/${t}`]=n})),T({template:"node",title:"iX React App",description:"iX react playground",files:{...l,"public/index.html":a,"src/index.tsx":r,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${s.filename.substring(0,s.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":i,"tsconfig.json":o,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${s.filename}`})}(r,i):n===g.ANGULAR?async function(e,t,n){const[a,r,i,o,s,l,c,p,d,u,m]=await A([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),g=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&g.push(t)}));const f=`\n    ${g.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${g.map(((e,t)=>`COMPONENT_${t},`))}\n    ];\n  `,h={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;h[`src/app/${t}`]=n})),T({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":f,"src/app/app.component.css":a,"src/app/app.component.html":r,"src/app/app.component.ts":i,"src/app/app.module.ts":o,"src/index.html":s,"src/main.ts":l,"src/styles.css":c,"angular.json":p,"package.json":d,"tsconfig.app.json":u,"tsconfig.json":m,...h}},{openFile:`src/app/${t}.ts`})}(r,t,i):n===g.JAVASCRIPT?async function(e,t){const[n,a,r,i]=await A([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[o,...s]=t,l={};s.forEach((e=>{l[`src/${e.filename}`]=e.sourceCode})),T({template:"node",title:"iX html app",description:"iX html playground",files:{...l,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",o.sourceCode),"src/main.js":a,"package.json":r,"vite.config.ts":i}},{openFile:["src/index.html"]})}(r,i):void 0}function _(e){let{name:t,framework:n}=e;return s.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>O({name:t,framework:n})},s.createElement(c,null))}function $(e){let{name:t,files:n,framework:a,baseUrl:r}=e;return s.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>P({name:t,files:n,framework:a,baseUrl:r})},s.createElement(u,null))}function D(e){const[t,n]=(0,s.useState)(e.files[0].filename);return s.createElement(s.Fragment,null,s.createElement(o.Vp,null,e.files.map((e=>{e.node;return s.createElement(o.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const a=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return a?s.createElement(a,null):null}())}function M(e){let{name:t,height:n,noMargin:a,theme:l,frameworks:c,availableFrameworks:p}=e;const{pathname:d}=(0,r.TH)(),u=(0,i.Z)("/"),[f,h]=(0,s.useState)(!0),[v,x]=(0,s.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||g.PREVIEW}(p)),[k,b]=(0,s.useState)();(0,s.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(d+t)),[t,d]);(0,s.useEffect)((()=>{const e={};c&&(Object.keys(c).forEach((n=>{if("function"==typeof c[n]){let a=t;n===g.REACT&&(a=a.concat(".tsx")),n===g.JAVASCRIPT&&(a=a.concat(".html")),n===g.ANGULAR&&(a=a.concat(".ts")),e[n]=[{filename:a,node:c[n]({})}]}"object"==typeof c[n]&&(e[n]||(e[n]=[]),Object.keys(c[n]).forEach((t=>{e[n].push({filename:t,node:c[n][t]})})))})),b(e))}),[c,b]);const w=e=>{x(e)};function y(e){return p?0===p.length||p.includes(e):Object.keys(c).some((t=>t===e))}return s.createElement("div",{className:"Playground"},f?s.createElement(s.Fragment,null,s.createElement("div",{className:"Playground__Toolbar Location__Bottom"},s.createElement(o.Vp,null,s.createElement(o.t3,{selected:v===g.PREVIEW,onClick:()=>w(g.PREVIEW)},"Preview"),y(g.ANGULAR)?s.createElement(o.t3,{selected:v===g.ANGULAR,onClick:()=>w(g.ANGULAR)},"Angular"):null,y(g.REACT)?s.createElement(o.t3,{selected:v===g.REACT,onClick:()=>w(g.REACT)},"React"):null,y(g.JAVASCRIPT)?s.createElement(o.t3,{selected:v===g.JAVASCRIPT,onClick:()=>w(g.JAVASCRIPT)},"JavaScript"):null),s.createElement("div",{className:"Playground__Toolbar__Actions"},v!==g.PREVIEW?s.createElement(s.Fragment,null,s.createElement(_,{name:t,framework:v}),s.createElement($,{name:t,framework:v,baseUrl:u,files:k?v===g.PREVIEW?[]:k[v].map((e=>e.filename)):[]})):null)),function(){if(v===g.PREVIEW)return s.createElement(m.Z,{name:t,height:n,noMargin:a,theme:l});if(!k||!k[v])return null;if(1===k[v].length){const[{node:e}]=k[v];return e}return s.createElement(D,{files:k[v]})}()):null)}},19231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/ix-expanding-search/events",id:"auto-generated/ix-expanding-search/events",title:"events",description:"| Name       | Description                   | Type        |",source:"@site/docs/auto-generated/ix-expanding-search/events.md",sourceDirName:"auto-generated/ix-expanding-search",slug:"/auto-generated/ix-expanding-search/events",permalink:"/version-dev/docs/auto-generated/ix-expanding-search/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-expanding-search/events.md",tags:[],version:"current",frontMatter:{}},l={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"valueChange"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Value changed"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))))}d.isMDXComponent=!0},77330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/ix-expanding-search/props",id:"auto-generated/ix-expanding-search/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-expanding-search/props.md",sourceDirName:"auto-generated/ix-expanding-search",slug:"/auto-generated/ix-expanding-search/props",permalink:"/version-dev/docs/auto-generated/ix-expanding-search/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-expanding-search/props.md",tags:[],version:"current",frontMatter:{}},l={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"icon"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Search icon"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"icon")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'search'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"placeholder"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Placeholder text"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"placeholder")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'Enter text here'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Default value"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"''"))))))}d.isMDXComponent=!0},21658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/angular/expanding-search.ts",id:"auto-generated/previews/angular/expanding-search.ts",title:"expanding-search.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/expanding-search.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/expanding-search.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/expanding-search.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/expanding-search.ts.md",tags:[],version:"current",frontMatter:{}},l={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  template: `\n    <ix-expanding-search placeholder=\"Search...\"></ix-expanding-search>\n  `,\n})\nexport default class ExpandingSearch {}\n")))}d.isMDXComponent=!0},71761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/react/expanding-search",id:"auto-generated/previews/react/expanding-search",title:"expanding-search",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/expanding-search.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/expanding-search",permalink:"/version-dev/docs/auto-generated/previews/react/expanding-search",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/expanding-search.md",tags:[],version:"current",frontMatter:{}},l={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IxExpandingSearch } from '@siemens/ix-react';\nimport React from 'react';\n\nexport default () => {\n  return <IxExpandingSearch placeholder=\"Search...\"></IxExpandingSearch>;\n};\n")))}d.isMDXComponent=!0},64538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/web-component/expanding-search",id:"auto-generated/previews/web-component/expanding-search",title:"expanding-search",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/expanding-search.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/expanding-search",permalink:"/version-dev/docs/auto-generated/previews/web-component/expanding-search",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/expanding-search.md",tags:[],version:"current",frontMatter:{}},l={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ix-expanding-search placeholder="Search..."></ix-expanding-search>\n')))}d.isMDXComponent=!0},50214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>v,frontMatter:()=>d,metadata:()=>m,toc:()=>f});var a=n(7896),r=(n(2784),n(30876)),i=n(30024),o=n(77330),s=n(19231),l=n(64538),c=n(71761),p=n(21658);const d={},u="Expanding search",m={unversionedId:"controls/expanding-search",id:"controls/expanding-search",title:"Expanding search",description:"Usage",source:"@site/docs/controls/expanding-search.md",sourceDirName:"controls",slug:"/controls/expanding-search",permalink:"/version-dev/docs/controls/expanding-search",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/expanding-search.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Event list",permalink:"/version-dev/docs/controls/event-list"},next:{title:"Flip",permalink:"/version-dev/docs/controls/flip"}},g={},f=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}],h={toc:f};function v(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"expanding-search"},"Expanding search"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(i.Z,{name:"expanding-search",height:"4rem",frameworks:{react:c.default,angular:p.default,javascript:l.default},mdxType:"Playground"}),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(o.default,{mdxType:"Props"}),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)(s.default,{mdxType:"Events"}))}v.isMDXComponent=!0}}]);