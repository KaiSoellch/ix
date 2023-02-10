"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73441],{73441:(t,a,i)=>{i.r(a),i.d(a,{ix_animated_tab:()=>c,ix_animated_tabs:()=>d});var e=i(60598),s=i(10161),n=i(73707),o=i(53992);const c=class{constructor(t){(0,e.r)(this,t),this.icon=void 0,this.count=void 0}render(){return(0,e.h)(e.H,null,(0,e.h)("slot",null))}};c.style=".sc-ix-animated-tab-h{display:block;height:100%;width:100%;position:absolute}";const d=class{constructor(t){(0,e.r)(this,t),this.tabClick=(0,e.c)(this,"tabClick",7),this.easing="easeInOutSine",this.firstRender=!0,this.tabs=void 0,this.activeIndex=void 0,this.disableAnimations=!1,this.selectedIndex=0,this.tabPlacement="top"}onTabSelectionChange(t,a){this.updateTabAnimation(a,t)}onMouseDown(){this.activeIndex=void 0}get animatedTabs(){return Array.from(this.hostElement.querySelectorAll("ix-animated-tab"))}get tabsContainer(){return this.hostElement.querySelector(".tabs-container")}get contentContainer(){return this.hostElement.querySelector(".content-container")}componentWillLoad(){this.tabs=this.animatedTabs}componentDidLoad(){this.onTabSelectionChange(this.selectedIndex,-1),this.observer=new MutationObserver((()=>{this.tabs=this.animatedTabs})),this.observer.observe(this.contentContainer,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["count"]})}disconnectCallback(){var t;null===(t=this.observer)||void 0===t||t.disconnect()}isSelected(t){return this.tabs.indexOf(t)===this.selectedIndex}showTab(t){this.isSelected(t)&&t.classList.remove("d-none")}hideTab(t){this.isSelected(t)||t.classList.add("d-none")}slideOutLeft(t){this.disableAnimations?this.hideTab(t):(0,s.a)({targets:t,duration:n.A.mediumTime,opacity:[1,0],translateX:[0,"-100%"],easing:this.easing,complete:()=>{this.hideTab(t)}})}slideOutRight(t){this.disableAnimations?this.hideTab(t):(0,s.a)({targets:t,duration:n.A.mediumTime,opacity:[1,0],translateX:[0,"100%"],easing:this.easing,complete:()=>{this.hideTab(t)}})}slideInLeft(t){if(this.firstRender)return t.classList.remove("d-none"),void(this.firstRender=!1);this.disableAnimations?this.showTab(t):(0,s.a)({targets:t,duration:n.A.mediumTime,opacity:[0,1],translateX:["-100%",0],easing:this.easing,begin:()=>{this.showTab(t)}})}slideInRight(t){if(this.firstRender)return t.classList.remove("d-none"),void(this.firstRender=!1);this.disableAnimations?this.showTab(t):(0,s.a)({targets:t,duration:n.A.mediumTime,opacity:[0,1],translateX:["100%",0],easing:this.easing,begin:()=>{this.showTab(t)}})}updateTabAnimation(t,a){var i;null===(i=this.tabs)||void 0===i||i.forEach(((i,e)=>{e===t?e<a?this.slideOutLeft(i):e>a&&this.slideOutRight(i):e===a?e<t?this.slideInLeft(i):e>t&&this.slideInRight(i):i.classList.add("d-none")}))}onTabClick(t){this.selectedIndex=t,this.tabClick.emit(t)}onTabMouseDown(t){this.activeIndex=t}render(){return(0,e.h)(e.H,{class:{"flex-column-reverse":"bottom"===this.tabPlacement}},(0,e.h)("ul",{class:"tabs-container"},this.animatedTabs.map(((t,a)=>(0,e.h)("li",{class:{bottom:"bottom"===this.tabPlacement},onClick:()=>this.onTabClick(a),onMouseDown:()=>this.onTabMouseDown(a)},(0,e.h)("div",{class:{"tab-container":!0,selected:this.selectedIndex===a}},(0,e.h)("ix-icon",{name:t.icon}),t.count?(0,e.h)("span",{class:{count:!0,bottom:"bottom"===this.tabPlacement}},(0,o.c)(t.count)):"")))),(0,e.h)("div",{class:{"tab-active-underline":!0,bottom:"bottom"===this.tabPlacement},style:{"margin-left":`calc(${this.selectedIndex} * 5rem)`}})),(0,e.h)("div",{class:"content-container"},(0,e.h)("slot",null)))}get hostElement(){return(0,e.g)(this)}static get watchers(){return{selectedIndex:["onTabSelectionChange"]}}};d.style=".sc-ix-animated-tabs-h{--animate-duration:300ms;display:flex;flex-direction:column;align-items:center;height:100%;width:100%;position:relative}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs{display:flex;padding:0;margin:0;position:relative}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs{display:flex;justify-content:center;width:5rem;height:4.5rem;cursor:pointer;padding-top:0.625rem}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.bottom.sc-ix-animated-tabs{padding-top:0.875rem}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs{background:var(--theme-animated-tab-circle--background);border:solid 1px var(--theme-animated-tab-circle--border-color);display:flex;align-items:center;justify-content:center;border-radius:6.25rem;width:3rem;height:3rem;position:relative;transition:150ms}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs ix-icon.sc-ix-animated-tabs{color:var(--theme-animated-tab-icon--color) !important}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs:not(.disabled):not(:disabled):hover{background:var(--theme-animated-tab-circle--background--hover);border-color:var(--theme-animated-tab-circle--border-color--hover)}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs:not(.disabled):not(:disabled):hover ix-icon.sc-ix-animated-tabs{color:var(--theme-animated-tab-icon--color--hover) !important}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs:not(.disabled):not(:disabled):active{background:var(--theme-animated-tab-circle--background--active);border-color:var(--theme-animated-tab-circle--border-color--active)}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs:not(.disabled):not(:disabled):active ix-icon.sc-ix-animated-tabs{color:var(--theme-animated-tab-icon--color--active) !important}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.selected.sc-ix-animated-tabs{background:var(--theme-animated-tab-circle--background--selected);border-color:var(--theme-animated-tab-circle--border-color--selected) !important}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.selected.sc-ix-animated-tabs ix-icon.sc-ix-animated-tabs{color:var(--theme-animated-tab-icon--color--selected) !important}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.selected.sc-ix-animated-tabs .count.sc-ix-animated-tabs{border-color:var(--theme-tab-pill--border-color--selected) !important}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.disabled.sc-ix-animated-tabs ix-icon.sc-ix-animated-tabs,.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs:disabled ix-icon.sc-ix-animated-tabs{color:var(--theme-animated-tab-icon--color--disabled) !important}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs:not(.disabled):not(:disabled):focus-visible{border-color:var(--theme-focus--border-color) !important}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs .count.sc-ix-animated-tabs{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text);display:flex;align-items:center;height:1rem;position:absolute;background-color:var(--theme-pill-outline--background);bottom:-0.55rem;border:1px solid var(--theme-tab-pill--border-color);border-radius:6.25rem;color:var(--theme-pill-outline--color);padding:0 0.25rem;background:var(--theme-color-1);transition:150ms}.sc-ix-animated-tabs-h ul.sc-ix-animated-tabs li.sc-ix-animated-tabs .tab-container.sc-ix-animated-tabs .count.bottom.sc-ix-animated-tabs{top:-0.55rem}.sc-ix-animated-tabs-h .content-container.sc-ix-animated-tabs{display:flex;flex-direction:row;height:calc(100% - 4.5rem);width:100%;overflow-y:auto;overflow-x:hidden}.sc-ix-animated-tabs-h .tab-active-underline.sc-ix-animated-tabs{background-color:var(--theme-animated-tab-indicator--background--selected);height:0.125rem;width:5rem;margin-top:-0.125rem;transition:150ms;position:absolute;top:4.5rem}.sc-ix-animated-tabs-h .tab-active-underline.bottom.sc-ix-animated-tabs{top:0;margin-top:0}"},53992:(t,a,i)=>{i.d(a,{a:()=>e,c:()=>s});const e=t=>`${t/16}rem`,s=t=>{if(isNaN(t)||null==t)return"";let a="";return[{unit:"q",value:Math.pow(10,15)},{unit:"t",value:Math.pow(10,12)},{unit:"B",value:Math.pow(10,9)},{unit:"M",value:Math.pow(10,6)},{unit:"K",value:Math.pow(10,3)}].some((i=>{let e=Math.abs(t);return e>=i.value&&(e/=i.value,t=Math.round(10*e)/10,a=i.unit,!0)})),t+a}}}]);