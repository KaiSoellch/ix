"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26973],{30876:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var o=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),p=r,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||a;return t?o.createElement(f,l(l({ref:n},d),{},{components:t})):o.createElement(f,l({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},69874:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=t(7896),r=(t(2784),t(30876));const a={},l=void 0,i={unversionedId:"auto-generated/previews/angular/modal.ts",id:"auto-generated/previews/angular/modal.ts",title:"modal.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/modal.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/modal.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/modal.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/modal.ts.md",tags:[],version:"current",frontMatter:{}},s={},c=[],d={toc:c};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component, TemplateRef, ViewChild } from \'@angular/core\';\nimport { ModalService } from \'@siemens/ix-angular\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-button (click)="openModal()">Show modal</ix-button>\n\n    <ng-template #customModal let-modal>\n      <div>\n        <div class="modal-header">\n          Message headline\n          <ix-icon-button\n            data-button-close\n            ghost\n            icon="close"\n            class="dismiss-modal"\n            (click)="modal.dismiss(\'dismiss\')"\n          ></ix-icon-button>\n        </div>\n        <div class="modal-body">Message text lorem ipsum: {{ modal.data }}</div>\n        <div class="modal-footer">\n          <ix-button\n            outline\n            class="dismiss-modal"\n            (click)="modal.dismiss(\'dismiss\')"\n          >\n            Cancel\n          </ix-button>\n          <ix-button class="close-modal" (click)="modal.close(\'okay\')">\n            OK\n          </ix-button>\n        </div>\n      </div>\n    </ng-template>\n  `,\n})\nexport default class Modal {\n  @ViewChild(\'customModal\', { read: TemplateRef })\n  customModalRef!: TemplateRef<any>;\n\n  constructor(private readonly modalService: ModalService) {}\n\n  async openModal() {\n    const instance = await this.modalService.open({\n      content: this.customModalRef,\n      title: \'\',\n      data: \'Some data\',\n    });\n\n    instance.onClose.on((a) => {\n      console.log(a);\n    });\n\n    instance.htmlElement.addEventListener(\n      \'keydown\',\n      (keyboardEvent: KeyboardEvent) => {\n        console.log(keyboardEvent.key);\n      }\n    );\n  }\n}\n')))}m.isMDXComponent=!0}}]);