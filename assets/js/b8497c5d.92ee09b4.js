"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[47282,13050],{30876:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},13050:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=t(7896),a=(t(2784),t(30876));const o={},i=void 0,c={unversionedId:"auto-generated/previews/angular/input-search.ts",id:"auto-generated/previews/angular/input-search.ts",title:"input-search.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/input-search.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/input-search.ts",permalink:"/docs/auto-generated/previews/angular/input-search.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/input-search.ts.md",tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p};function l(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <form class="needs-validation m-2">\n      <ix-input-group>\n        <span slot="input-start">\n          <ix-icon name="search" size="16"></ix-icon>\n        </span>\n        <input\n          ng-init="verifyStart()"\n          [(ngModel)]="customSearch"\n          name="input"\n          (keyup)="onKey($event)"\n          id="input-string"\n          type="string"\n        />\n        <span slot="input-end">\n          <ix-icon-button\n            (click)="clearInput()"\n            id="clear-button"\n            icon="clear"\n            ghost="{true}"\n            size="16"\n            [style.display]="display"\n          ></ix-icon-button>\n        </span>\n      </ix-input-group>\n    </form>\n  `,\n})\nexport default class Input {\n  customSearch = \'\';\n  display = \'none\';\n\n  public ngOnInit(): void {\n    if (this.customSearch !== \'\') {\n      this.display = \'block\';\n    }\n  }\n\n  clearInput() {\n    this.customSearch = \'\';\n    this.display = \'none\';\n  }\n\n  onKey(event: any) {\n    event.target.value === \'\'\n      ? (this.display = \'none\')\n      : (this.display = \'block\');\n  }\n}\n\n')))}l.isMDXComponent=!0}}]);