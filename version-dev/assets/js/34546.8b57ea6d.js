"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34546],{34546:(e,t,o)=>{o.r(t),o.d(t,{ix_menu_about:()=>i});var s=o(92398);const i=class{constructor(e){(0,s.r)(this,e),this.close=(0,s.c)(this,"close",7),this.activeTabLabel=void 0,this.label="About & legal information",this.show=!1,this.labels=[]}get aboutItems(){return Array.from(this.el.querySelectorAll("ix-menu-about-item"))}setTab(e){this.activeTabLabel=e,this.aboutItems.forEach((e=>{e.style.display="none",e.label===this.activeTabLabel&&(e.style.display="block")}))}componentWillLoad(){this.aboutItems.length&&this.setTab(this.activeTabLabel||this.aboutItems[0].label)}componentDidLoad(){(0,s.f)(this.el)}componentWillRender(){this.updateLabels()}updateLabels(){this.labels=this.aboutItems.map((e=>e.label))}watchActiveTabLabel(e){setTimeout((()=>this.setTab(e)))}getSelectedTabIndex(e){const t=this.aboutItems.find((t=>t.label===e));return this.aboutItems.indexOf(t)}getTabItems(){return this.aboutItems.map((e=>{let{label:t}=e;return(0,s.h)("ix-tab-item",{class:{active:t===this.activeTabLabel},onClick:()=>this.setTab(t)},t)}))}render(){return(0,s.h)(s.H,{key:"7001e478726514ba90ae4095882c4c73d8333e1d",slot:"ix-menu-about",class:{show:this.show}},(0,s.h)("div",{key:"9d2d9deda3ae10fd0c3732ff7a32ace8f5074c89",class:"about-header"},(0,s.h)("h2",{key:"b1ddcb77eb135ff7706985403bf29dae0a941ade",class:"text-h2"},this.label),(0,s.h)("ix-icon-button",{key:"7ecaba5605fa6133e719dbc8a799ddaeaa700981",ghost:!0,size:"24",icon:"close",onClick:e=>this.close.emit({name:"ix-menu-about",nativeEvent:e})})),(0,s.h)("ix-tabs",{key:"3a82d3bf4b270e29e1b25f94e0a60af026e14950",selected:this.getSelectedTabIndex(this.activeTabLabel)},this.getTabItems()),(0,s.h)("div",{key:"43c70d034b979bfce2fdcdc62069791ed39d461b",class:"about-items"},(0,s.h)("slot",{key:"74a6faf6f30a2f9a036d527fbf8c5e5ab3c8cfd8"})))}get el(){return(0,s.g)(this)}static get watchers(){return{activeTabLabel:["watchActiveTabLabel"]}}};i.style=".text-xs{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a{color:var(--theme-color-primary)}:host{display:block;background-color:var(--theme-nav-overlay--background);padding:0.75rem 1rem 1rem 2rem;flex-grow:1;position:absolute;width:100%;height:100%}:host .about-header{display:flex;justify-content:space-between;flex-direction:row;align-items:center;height:2rem;margin-bottom:0.5rem}:host .about-header h2{color:var(--theme-nav-overlay-header--color);margin-bottom:1rem}:host ix-tabs{margin-bottom:1.5rem}:host ix-menu-about-item{display:none}"}}]);