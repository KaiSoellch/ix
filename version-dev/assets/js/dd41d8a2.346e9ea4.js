"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14235,50023],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82009:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(2784),r=n(6277);const o="tabItem_OMyP";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},1112:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7896),r=n(2784),o=n(6277),s=n(89741),i=n(42244),l=n(78963),c=n(24126);const u="tabList_M0Dn",p="tabItem_ysIP";function m(e){var t;const{lazy:n,block:s,defaultValue:m,values:d,groupId:h,className:v}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,i.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:k}=(0,l.U)(),[E,x]=(0,r.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=h){const e=w[h];null!=e&&e!==E&&f.some((t=>t.value===e))&&x(e)}const N=e=>{const t=e.currentTarget,n=O.indexOf(t),a=f[n].value;a!==E&&(T(t),x(a),null!=h&&k(h,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},v)},f.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>O.push(e),onKeyDown:C,onClick:N},s,{className:(0,o.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":E===t})}),n??t)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function d(e){const t=(0,s.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},77942:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(37949),r=n(90077),o=n(37614),s=n(2784),i=n(90943);function l(e){const t=(0,o.Z)(),[n]=(0,s.useState)(!1),l=(0,r.Z)("/"),[c,u]=(0,s.useState)(""),[p,m]=(0,s.useState)((0,i.V)(t)),{preferredVersion:d}=(0,a.J)();return(0,s.useEffect)((()=>{const t=null==d?void 0:d.name;u(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,null==d?void 0:d.name,e.name]),(0,s.useLayoutEffect)((()=>{const e=()=>{let e=(0,i.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),s.createElement(s.Fragment,null,n?s.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==d?void 0:d.name):s.createElement("iframe",{src:`${c}?theme=${e.theme?e.theme:p}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},64176:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(82009),r=n(1112),o=n(2784),s=n(77942);const i={angular:1,react:2,javascript:3,preview:4};function l(e){const t=e.children??[],n=Array.isArray(t)?t:[t];return o.createElement(r.Z,{groupId:e.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Components"}].filter((e=>n.map((e=>e.props.value)).includes(e.value)))],defaultValue:"preview"},[o.createElement(a.Z,{value:"preview",key:"preview"},o.createElement(s.Z,{name:e.name,height:e.height,noMargin:e.noMargin})),...n].sort(((e,t)=>i[e.props.value]-i[t.props.value])))}},26401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7896),r=(n(2784),n(30876));const o={},s=void 0,i={unversionedId:"auto-generated/previews/web-component/echarts",id:"auto-generated/previews/web-component/echarts",title:"echarts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/echarts.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/echarts",permalink:"/version-dev/docs/auto-generated/previews/web-component/echarts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/echarts.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<div\n  id=\"main\"\n  style=\"display: block; position: relative; width: 100%; height: 40rem\"\n></div>\n<script type=\"module\">\n  import { registerTheme } from '@siemens/ix-echarts';\n\n  registerTheme(echarts);\n\n  var myChart = echarts.init(\n    document.querySelector('#main'),\n    window.demoTheme // brand-dark, brand-light, classic-dark or classic-light\n  );\n  // Draw the chart\n  myChart.setOption({\n    tooltip: {\n      trigger: 'axis',\n      axisPointer: {\n        type: 'shadow',\n      },\n    },\n    legend: {},\n    grid: {\n      left: '3%',\n      right: '4%',\n      bottom: '3%',\n      containLabel: true,\n    },\n    xAxis: [\n      {\n        type: 'category',\n        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],\n      },\n    ],\n    yAxis: [\n      {\n        type: 'value',\n      },\n    ],\n    series: [\n      {\n        name: 'Direct',\n        type: 'bar',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [320, 332, 301, 334, 390, 330, 320],\n      },\n      {\n        name: 'Email',\n        type: 'bar',\n        stack: 'Ad',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [120, 132, 101, 134, 90, 230, 210],\n      },\n      {\n        name: 'Union Ads',\n        type: 'bar',\n        stack: 'Ad',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [220, 182, 191, 234, 290, 330, 310],\n      },\n      {\n        name: 'Video Ads',\n        type: 'bar',\n        stack: 'Ad',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [150, 232, 201, 154, 190, 330, 410],\n      },\n      {\n        name: 'Search Engine',\n        type: 'bar',\n        data: [862, 1018, 964, 1026, 1679, 1600, 1570],\n        emphasis: {\n          focus: 'series',\n        },\n        markLine: {\n          lineStyle: {\n            type: 'dashed',\n          },\n          data: [[{ type: 'min' }, { type: 'max' }]],\n        },\n      },\n      {\n        name: 'Baidu',\n        type: 'bar',\n        barWidth: 5,\n        stack: 'Search Engine',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [620, 732, 701, 734, 1090, 1130, 1120],\n      },\n      {\n        name: 'Google',\n        type: 'bar',\n        stack: 'Search Engine',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [120, 132, 101, 134, 290, 230, 220],\n      },\n      {\n        name: 'Bing',\n        type: 'bar',\n        stack: 'Search Engine',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [60, 72, 71, 74, 190, 130, 110],\n      },\n      {\n        name: 'Others',\n        type: 'bar',\n        stack: 'Search Engine',\n        emphasis: {\n          focus: 'series',\n        },\n        data: [62, 82, 91, 84, 109, 110, 120],\n      },\n    ],\n  });\n<\/script>\n")))}p.isMDXComponent=!0},32625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var a=n(7896),r=(n(2784),n(30876)),o=n(82009),s=n(64176),i=n(26401);const l={},c="ECharts",u={unversionedId:"controls/charts/charts",id:"controls/charts/charts",title:"ECharts",description:"@siemens/ix does not provide a own chart implementation, but we can give you a",source:"@site/docs/controls/charts/charts.md",sourceDirName:"controls/charts",slug:"/controls/charts/",permalink:"/version-dev/docs/controls/charts/",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/charts/charts.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Category filter",permalink:"/version-dev/docs/controls/category-filter"},next:{title:"Checkbox",permalink:"/version-dev/docs/controls/checkbox"}},p={},m=[{value:"Theme",id:"theme",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:2}],d={toc:m};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"echarts"},"ECharts"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@siemens/ix")," does not provide a own chart implementation, but we can give you a\nnice recommendation ",(0,r.kt)("a",{parentName:"p",href:"https://echarts.apache.org/handbook/en/get-started/"},(0,r.kt)("inlineCode",{parentName:"a"},"echarts"))),(0,r.kt)("h2",{id:"theme"},"Theme"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"echarts")," provides the possiblity to implement own color designs for a chart instance. We from ",(0,r.kt)("inlineCode",{parentName:"p"},"@siemens/ix")," provide you two color sets ",(0,r.kt)("inlineCode",{parentName:"p"},"classic-dark")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"classic-light")),(0,r.kt)("p",null,"To keep the ",(0,r.kt)("inlineCode",{parentName:"p"},"@siemens/ix")," library as lightweight as possible you have to install a separate package called ",(0,r.kt)("inlineCode",{parentName:"p"},"@siemens/ix-echarts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save @siemens/ix-echarts\n")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Import the module once in your application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import '@siemens/ix-echarts';\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(s.Z,{name:"echarts",height:"42rem",mdxType:"Preview"},(0,r.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)(i.default,{mdxType:"SourceEcharts"}))))}h.isMDXComponent=!0}}]);