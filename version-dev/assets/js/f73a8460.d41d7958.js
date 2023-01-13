"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97809,27094,77326,27465,60577,18074,38711],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,g=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82009:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(2784),r=n(6277);const o="tabItem_OMyP";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},1112:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7896),r=n(2784),o=n(6277),i=n(89741),l=n(42244),s=n(78963),c=n(24126);const u="tabList_M0Dn",d="tabItem_ysIP";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:p,groupId:g,className:f}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,l.l)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,s.U)(),[N,E]=(0,r.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=g){const e=w[g];null!=e&&e!==N&&b.some((t=>t.value===e))&&E(e)}const T=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==N&&(C(t),E(a),null!=g&&y(g,String(a)))},A=e=>{var t;let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},f)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:A,onClick:T},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function p(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},77942:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(37949),r=n(90077),o=n(37614),i=n(2784),l=n(90943);function s(e){const t=(0,o.Z)(),[n]=(0,i.useState)(!1),s=(0,r.Z)("/"),[c,u]=(0,i.useState)(""),[d,m]=(0,i.useState)((0,l.V)(t)),{preferredVersion:p}=(0,a.J)();return(0,i.useEffect)((()=>{const t=null==p?void 0:p.name;u(void 0===t||"current"===t?s+`webcomponent-examples/dist/preview-examples/${e.name}.html`:s+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[s,null==p?void 0:p.name,e.name]),(0,i.useLayoutEffect)((()=>{const e=()=>{let e=(0,l.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),i.createElement(i.Fragment,null,n?i.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==p?void 0:p.name):i.createElement("iframe",{src:`${c}?theme=${e.theme?e.theme:d}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},30024:(e,t,n)=>{n.d(t,{Z:()=>L});var a,r=n(7267),o=n(90077),i=n(55061),l=n(2784);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}const c=e=>{let{title:t,titleId:n,...r}=e;return l.createElement("svg",s({style:{transform:"scale(2)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},r),t?l.createElement("title",{id:n},t):null,a||(a=l.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var u;function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}const m=e=>{let{title:t,titleId:n,...a}=e;return l.createElement("svg",d({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},a),t?l.createElement("title",{id:n},t):null,u||(u=l.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var p=n(77942);let g;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript"}(g||(g={}));var f=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],v={clickToLoad:function(e){return h("ctl",e)},devToolsHeight:function(e){return k("devtoolsheight",e)},forceEmbedLayout:function(e){return h("embed",e)},hideDevTools:function(e){return h("hidedevtools",e)},hideExplorer:function(e){return h("hideExplorer",e)},hideNavigation:function(e){return h("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return k("terminalHeight",e)},theme:function(e){return w("theme",["light","dark"],e)},view:function(e){return w("view",["preview","editor"],e)}};function b(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&v.hasOwnProperty(t)?v[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function h(e,t){return!0===t?e+"=1":""}function k(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function w(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function y(e,t){return""+N(t)+e+b(t)}function N(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function E(e){return e&&!1===e.newWindow?"_self":"_blank"}function x(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function C(e){if(!f.includes(e.template)){var t=f.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,a=document.createElement("form");return a.method="POST",a.setAttribute("style","display:none!important;"),a.appendChild(x("project[title]",e.title)),a.appendChild(x("project[description]",e.description)),a.appendChild(x("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a.appendChild(x("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&a.appendChild(x("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&a.appendChild(x("project[files]["+t+"]",e.files[t]))})),a}var T=function(e,t){!function(e,t){var n=C(e);n.action=y("/run",t),n.target=E(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)};const A="https://github.com/siemens/ix/tree/main/packages";function _(e){let{name:t,framework:n}=e;const a=function(e){let{name:t,framework:n}=e;return n===g.ANGULAR?`${A}/angular-test-app/src/preview-examples/${t}.ts`:n===g.JAVASCRIPT?`${A}/html-test-app/src/preview-examples/${t}.html`:n===g.REACT?`${A}/react-test-app/src/preview-examples/${t}.tsx`:void 0}({framework:n,name:t});window.open(a,"_blank")}async function j(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function O(e){let{name:t,framework:n,files:a,baseUrl:r}=e;const o=await async function(e,t,n){const a=[];return(await j(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{a.push({filename:n[t],sourceCode:e})})),a}(r,n,a);return n===g.REACT?async function(e,t){const[n,a,r,o,i]=await j([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[l]=t,s={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;s[`src/${t}`]=n})),T({template:"node",title:"iX React App",description:"iX react playground",files:{...s,"public/index.html":a,"src/index.tsx":r,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${l.filename.substring(0,l.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":o,"tsconfig.json":i,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${l.filename}`})}(r,o):n===g.ANGULAR?async function(e,t,n){const[a,r,o,i,l,s,c,u,d,m,p]=await j([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),g=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&g.push(t)}));const f=`\n    ${g.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${g.map(((e,t)=>`COMPONENT_${t},`))}\n    ];\n  `,v={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;v[`src/app/${t}`]=n})),T({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":f,"src/app/app.component.css":a,"src/app/app.component.html":r,"src/app/app.component.ts":o,"src/app/app.module.ts":i,"src/index.html":l,"src/main.ts":s,"src/styles.css":c,"angular.json":u,"package.json":d,"tsconfig.app.json":m,"tsconfig.json":p,...v}},{openFile:`src/app/${t}.ts`})}(r,t,o):n===g.JAVASCRIPT?async function(e,t){const[n,a,r,o]=await j([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[i,...l]=t,s={};l.forEach((e=>{s[`src/${e.filename}`]=e.sourceCode})),T({template:"node",title:"iX html app",description:"iX html playground",files:{...s,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",i.sourceCode),"src/main.js":a,"package.json":r,"vite.config.ts":o}},{openFile:["src/index.html"]})}(r,o):void 0}function P(e){let{name:t,framework:n}=e;return l.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>_({name:t,framework:n})},l.createElement(c,null))}function $(e){let{name:t,files:n,framework:a,baseUrl:r}=e;return l.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>O({name:t,files:n,framework:a,baseUrl:r})},l.createElement(m,null))}function D(e){let{onClick:t,showCode:n}=e;return l.createElement("ix-button",{onClick:t,ghost:!0},n?"Hide Code":"Show Code")}function M(e){const[t,n]=(0,l.useState)(e.files[0].filename);return l.createElement(l.Fragment,null,l.createElement(i.Vp,null,e.files.map((e=>{e.node;return l.createElement(i.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const a=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return a?l.createElement(a,null):null}())}function L(e){let{name:t,height:n,noMargin:a,theme:s,frameworks:c,hideInitalCodePreview:u,availableFrameworks:d}=e;const{pathname:m}=(0,r.TH)(),f=(0,o.Z)("/"),[v,b]=(0,l.useState)(!u),[h,k]=(0,l.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||g.ANGULAR}(d)),[w,y]=(0,l.useState)();(0,l.useEffect)((()=>{const e=function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(m),t=localStorage.getItem(e);var n;t&&((n=t)===g.ANGULAR||n===g.JAVASCRIPT||n===g.REACT)&&k(t)}),[]),(0,l.useEffect)((()=>{const e={};Object.keys(c).forEach((n=>{if("function"==typeof c[n]){let a=t;n===g.REACT&&(a=a.concat(".tsx")),n===g.JAVASCRIPT&&(a=a.concat(".html")),n===g.ANGULAR&&(a=a.concat(".ts")),e[n]=[{filename:a,node:c[n]({})}]}"object"==typeof c[n]&&(e[n]||(e[n]=[]),Object.keys(c[n]).forEach((t=>{e[n].push({filename:t,node:c[n][t]})})))})),y(e)}),[c,y]);const N=e=>{k(e),m&&localStorage.setItem(`docusaurus.playground${m.replace(/\//g,".")}`,e)};function E(e){return!d||(0===d.length||d.includes(e))}return l.createElement("div",{className:"Playground"},l.createElement("div",{className:"Playground__Toolbar Location__Top"},l.createElement("div",{className:"Playground__Toolbar__Actions"},l.createElement(D,{onClick:()=>b(!v),showCode:v}))),l.createElement(p.Z,{name:t,height:n,noMargin:a,theme:s}),v?l.createElement(l.Fragment,null,l.createElement("div",{className:"Playground__Toolbar Location__Bottom"},E(g.ANGULAR)?l.createElement(i._h,{className:"Playground__Framework__Button",ghost:h!==g.ANGULAR,onClick:()=>N(g.ANGULAR)},"Angular"):null,E(g.REACT)?l.createElement(i._h,{className:"Playground__Framework__Button",ghost:h!==g.REACT,onClick:()=>N(g.REACT)},"React"):null,E(g.JAVASCRIPT)?l.createElement(i._h,{className:"Playground__Framework__Button",ghost:h!==g.JAVASCRIPT,onClick:()=>N(g.JAVASCRIPT)},"JavaScript"):null,l.createElement("div",{className:"Playground__Toolbar__Actions"},l.createElement(P,{name:t,framework:h}),l.createElement($,{name:t,framework:h,baseUrl:f,files:w?w[h].map((e=>e.filename)):[]}))),function(){if(!w||!w[h])return null;if(1===w[h].length){const[{node:e}]=w[h];return e}return l.createElement(M,{files:w[h]})}()):null)}},64176:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(82009),r=n(1112),o=n(2784),i=n(77942);const l={angular:1,react:2,javascript:3,preview:4};function s(e){const t=e.children??[],n=Array.isArray(t)?t:[t];return o.createElement(r.Z,{groupId:e.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Components"}].filter((e=>n.map((e=>e.props.value)).includes(e.value)))],defaultValue:"preview"},[o.createElement(a.Z,{value:"preview",key:"preview"},o.createElement(i.Z,{name:e.name,height:e.height,noMargin:e.noMargin})),...n].sort(((e,t)=>l[e.props.value]-l[t.props.value])))}},95396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/ix-blind/events",id:"auto-generated/ix-blind/events",title:"events",description:"| Name       | Description                   | Type        |",source:"@site/docs/auto-generated/ix-blind/events.md",sourceDirName:"auto-generated/ix-blind",slug:"/auto-generated/ix-blind/events",permalink:"/version-dev/docs/auto-generated/ix-blind/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-blind/events.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"collapsedChange"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Collapsed state changed"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))))))}d.isMDXComponent=!0},25741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/ix-blind/props",id:"auto-generated/ix-blind/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-blind/props.md",sourceDirName:"auto-generated/ix-blind",slug:"/auto-generated/ix-blind/props",permalink:"/version-dev/docs/auto-generated/ix-blind/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-blind/props.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"collapsed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Collapsed state"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"collapsed")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Label of blind"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))))}d.isMDXComponent=!0},42421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/angular/blind.html",id:"auto-generated/previews/angular/blind.html",title:"blind.html",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/blind.html.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/blind.html",permalink:"/version-dev/docs/auto-generated/previews/angular/blind.html",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/blind.html.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ix-blind label="Example">\n  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita\n  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem\n  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod\n  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At\n  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd\n  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n</ix-blind>\n')))}d.isMDXComponent=!0},33960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/angular/blind.ts",id:"auto-generated/previews/angular/blind.ts",title:"blind.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/blind.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/blind.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/blind.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/blind.ts.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './blind.html',\n})\nexport default class Blind {}\n")))}d.isMDXComponent=!0},82174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/react/blind",id:"auto-generated/previews/react/blind",title:"blind",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/blind.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/blind",permalink:"/version-dev/docs/auto-generated/previews/react/blind",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/blind.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IxBlind } from '@siemens/ix-react';\nimport React from 'react';\n\nexport default () => {\n  return (\n    <IxBlind label=\"Example\">\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor\n      sit amet.\n    </IxBlind>\n  );\n};\n")))}d.isMDXComponent=!0},84175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/web-component/blind",id:"auto-generated/previews/web-component/blind",title:"blind",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/blind.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/blind",permalink:"/version-dev/docs/auto-generated/previews/web-component/blind",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/blind.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ix-blind label="Example">\n  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n  amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n  diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor\n  sit amet.\n</ix-blind>\n')))}d.isMDXComponent=!0},54748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>h,frontMatter:()=>m,metadata:()=>g,toc:()=>v});var a=n(7896),r=(n(2784),n(30876)),o=(n(82009),n(64176),n(25741)),i=n(95396),l=n(84175),s=n(82174),c=n(33960),u=n(42421),d=n(30024);const m={},p="Blind",g={unversionedId:"controls/blind",id:"controls/blind",title:"Blind",description:"Usage",source:"@site/docs/controls/blind.md",sourceDirName:"controls",slug:"/controls/blind",permalink:"/version-dev/docs/controls/blind",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/blind.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Popover news",permalink:"/version-dev/docs/controls/navigation/popover-news"},next:{title:"Breadcrumb",permalink:"/version-dev/docs/controls/breadcrumb"}},f={},v=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}],b={toc:v};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blind"},"Blind"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(d.Z,{name:"blind",height:"16rem",frameworks:{react:s.default,angular:{"blind.html":u.default,"blind.ts":c.default},javascript:l.default},mdxType:"Playground"}),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(o.default,{mdxType:"Props"}),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)(i.default,{mdxType:"Events"}))}h.isMDXComponent=!0}}]);