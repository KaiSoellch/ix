"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[93865],{30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),b=o,d=m["".concat(u,".").concat(b)]||m[b]||l[b]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/web-component/button-text-icon",id:"auto-generated/previews/web-component/button-text-icon",title:"button-text-icon",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/button-text-icon.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/button-text-icon",permalink:"/version-dev/docs/auto-generated/previews/web-component/button-text-icon",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/button-text-icon.md",tags:[],version:"current",frontMatter:{}},u={},p=[],s={toc:p};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n  <ix-button class="m-1" variant="Primary">\n    <ix-icon name="star"></ix-icon>Button\n  </ix-button>\n  <ix-button class="m-1" variant="Secondary">\n    <ix-icon name="star"></ix-icon>Button\n  </ix-button>\n  <ix-button class="m-1" outline>\n    <ix-icon name="star"></ix-icon>Button\n  </ix-button>\n  <ix-button class="m-1" ghost>\n    <ix-icon name="star"></ix-icon>Button\n  </ix-button>\n</div>\n')))}l.isMDXComponent=!0}}]);