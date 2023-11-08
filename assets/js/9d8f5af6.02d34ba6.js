"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57335,81917],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},81917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/angular/theme-switcher.html",id:"auto-generated/previews/angular/theme-switcher.html",title:"theme-switcher.html",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/theme-switcher.html.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/theme-switcher.html",permalink:"/docs/auto-generated/previews/angular/theme-switcher.html",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/theme-switcher.html.md",tags:[],version:"current",frontMatter:{}},l={},s=[],u={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ix-layout-grid>\n  <ix-row>\n    <ix-col size="2">\n      <span>Light/Dark</span>\n    </ix-col>\n    <ix-col>\n      <ix-button (click)="toggleMode()">Toggle mode</ix-button>\n    </ix-col>\n  </ix-row>\n\n  <ix-row>\n    <ix-col size="2">Theme</ix-col>\n    <ix-col>\n      <ix-select\n        [value]="selectedTheme"\n        (itemSelectionChange)="onItemSelectionChange($event)"\n        placeholder="Select a theme"\n      >\n        <ix-select-item\n          *ngFor="let theme of themes"\n          [label]="theme"\n          [value]="theme"\n        ></ix-select-item>\n      </ix-select>\n    </ix-col>\n  </ix-row>\n\n  <ix-row>\n    <ix-col size="2">Use System</ix-col>\n    <ix-col>\n      <input type="checkbox" id="system" (change)="onSystemMode($event)" />\n      <label for="system"></label>\n    </ix-col>\n  </ix-row>\n</ix-layout-grid>\n\n')))}m.isMDXComponent=!0}}]);