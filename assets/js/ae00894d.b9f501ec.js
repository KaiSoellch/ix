"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11235,7893],{30876:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=l(n),g=a,d=s["".concat(u,".").concat(g)]||s[g]||p[g]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,c={unversionedId:"auto-generated/previews/angular/menu-category.html",id:"auto-generated/previews/angular/menu-category.html",title:"menu-category.html",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/menu-category.html.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/menu-category.html",permalink:"/docs/auto-generated/previews/angular/menu-category.html",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/menu-category.html.md",tags:[],version:"current",frontMatter:{}},u={},l=[],m={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ix-basic-navigation>\n  <ix-menu>\n    <ix-menu-item home icon="home">Home</ix-menu-item>\n    <ix-menu-item icon="globe">Normal Tab</ix-menu-item>\n    <ix-menu-category label="Top level Category" icon="rocket">\n      <ix-menu-item icon="globe">Nested Tab</ix-menu-item>\n      <ix-menu-item icon="globe">Nested Tab</ix-menu-item>\n    </ix-menu-category>\n  </ix-menu>\n</ix-basic-navigation>\n\n')))}p.isMDXComponent=!0}}]);