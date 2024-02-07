"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91168],{91168:(e,t,o)=>{o.r(t),o.d(t,{ix_group:()=>d});var r=o(92398),i=o(90450),s=o(83557);const d=class{constructor(e){(0,r.r)(this,e),this.selectGroup=(0,r.c)(this,"selectGroup",7),this.selectItem=(0,r.c)(this,"selectItem",7),this.collapsedChanged=(0,r.c)(this,"collapsedChanged",7),this.suppressHeaderSelection=!1,this.header=void 0,this.subHeader=void 0,this.collapsed=!0,this.selected=void 0,this.index=void 0,this.expandOnHeaderClick=!1,this.itemSelected=!1,this.dropdownTriggerRef=void 0,this.slotSize=this.groupItems.length,this.footerVisible=!1}get dropdownItems(){return Array.from(this.hostElement.querySelectorAll("ix-group-dropdown-item"))}get groupItems(){return Array.from(this.hostElement.querySelectorAll("ix-group-item:not(.footer)"))}get groupContent(){return this.hostElement.shadowRoot.querySelector(".group-content")}onExpandClick(e){this.collapsed=!this.collapsed,this.collapsedChanged.emit(this.collapsed),e.stopPropagation()}onHeaderClick(e){this.setGroupSelection(!this.selected),this.suppressHeaderSelection&&this.onExpandClick(e)}onItemClick(e){e===this.index?(this.index=void 0,this.selectItem.emit(void 0)):(this.index=e,this.selectItem.emit(e)),this.index>=0?this.itemSelected=!0:this.itemSelected=!1,this.setGroupSelection(!1)}setGroupSelection(e){this.suppressHeaderSelection||(this.selected=e,this.selectGroup.emit(this.selected))}onSlotChange(){const e=this.hostElement.shadowRoot.querySelector('slot[name="footer"]');e&&(this.footerVisible=(0,s.h)(e))}componentWillRender(){this.groupItems.forEach(((e,t)=>{if(!0===this.selected)return e.selected=!1,this.index=void 0,void(this.itemSelected=!1);e.selected=t===this.index,e.index=t}))}componentDidLoad(){this.observer=(0,i.c)((()=>{this.slotSize=this.groupItems.length})),this.observer.observe(this.groupContent,{childList:!0}),this.groupContent.addEventListener("selectedChanged",(e=>{this.onItemClick(e.detail.index)}))}disconnectedCallback(){this.observer&&this.observer.disconnect()}render(){return(0,r.h)(r.H,{key:"6d8986232547202ffb9a8c313da0caf93f539141"},(0,r.h)("div",{key:"75055f717873cc7559ac46338238ce45f559e101",class:{"group-header":!0,expand:!this.collapsed,selected:this.selected},tabindex:"0"},(0,r.h)("div",{key:"90fae1c7d1d73bad05afcab18298ae1856d47a8b",class:"group-header-clickable",onClick:e=>this.onHeaderClick(e)},(0,r.h)("div",{key:"749dd04abc52c844fe5ea8f243a8bbb5f34fc521",class:{"group-header-selection-indicator":!0,"group-header-selection-indicator-item-selected":this.itemSelected}}),(0,r.h)("div",{key:"2efe4fbc7c5c7a8f5a5808ff07743550eb43a4f0",class:"btn-expand-header"},(0,r.h)("ix-icon",{key:"3e08fe52c44f2a60a78f492abfbf7f85ffd66bc1",class:{hidden:0===this.slotSize},name:this.collapsed?"chevron-right-small":"chevron-down-small",onClick:e=>this.onExpandClick(e)})),(0,r.h)("div",{key:"81601a7e95c8822518f8b6b7680ecb9c4184df00",class:"group-header-content"},this.header?(0,r.h)("div",{class:"group-header-props-container"},(0,r.h)("div",{class:"group-header-title"},(0,r.h)("span",{title:this.header},this.header)),(0,r.h)("div",{class:"group-subheader",title:this.subHeader},this.subHeader)):null,(0,r.h)("slot",{key:"df2265d16964f6fd5f4792a1e155bacb58c0ce27",name:"header"}))),(0,r.h)("ix-group-context-menu",{key:"472d6e652727b7551472e4c413aefb56542afc2f"},(0,r.h)("slot",{key:"8248aae2b3bee97136df00531348740408d3468c",name:"dropdown"}))),(0,r.h)("div",{key:"73d3dfc90a55c0ae5919abcd358c0cc868963848",class:{"group-content":!0}},this.collapsed?null:(0,r.h)(r.F,null,(0,r.h)("slot",null),(0,r.h)("ix-group-item",{suppressSelection:!0,focusable:!1,class:{footer:!0,"footer-visible":this.footerVisible}},(0,r.h)("slot",{name:"footer",onSlotchange:()=>this.onSlotChange()})))))}get hostElement(){return(0,r.g)(this)}};d.style=":host{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-direction:column;position:relative;max-width:19.75rem;border-color:var(--theme-group-item--border-color)}:host .group-header{height:4rem;min-height:4rem;max-height:4rem;border-radius:var(--theme-group--border-radius) var(--theme-group--border-radius) 0 0;display:flex;background-color:var(--theme-group-item--background);color:var(--theme-group-header--color);cursor:pointer}:host .group-header:not(.disabled):not(:disabled){cursor:pointer}:host .group-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-group-item--background--hover)}:host .group-header:not(.disabled):not(:disabled):hover.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header:not(.disabled):not(:disabled){cursor:pointer}:host .group-header:not(.disabled):not(:disabled):active,:host .group-header:not(.disabled):not(:disabled).active{background-color:var(--theme-group-item--background--active)}:host .group-header:not(.disabled):not(:disabled):active.selected,:host .group-header:not(.disabled):not(:disabled).active.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header:not(.disabled):not(:disabled):focus-visible{border:1px solid var(--theme-color-focus-bdr);border-radius:var(--theme-default-border-radius) var(--theme-default-border-radius) 0px 0px;outline:none}:host .group-header.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header.selected .group-header-selection-indicator{background-color:var(--theme-group-item-indicator--background--selected)}:host .group-header .group-header-selection-indicator{background-color:var(--theme-color-input--focus)}:host .group-header .group-header-selection-indicator.group-header-selection-indicator-item-selected{background-color:var(--theme-group-item-indicator--background--selected)}:host .group-header-clickable{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;width:100%;min-width:0}:host .group-header-selection-indicator{width:0.25rem;border-top-left-radius:var(--theme-group--border-radius)}:host .group-header-content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-direction:row;justify-content:space-between;min-width:0;flex-grow:1;flex-basis:0;padding:0.5rem;padding-left:0}:host .group-header-content .group-header-props-container{width:100%}:host .group-header-content .group-header-title{display:flex;align-items:center;font-size:1rem;font-weight:700;height:1.5rem}:host .group-header-content .group-header-title>*{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;padding-right:0}:host .group-header-content .group-subheader{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:1.25rem;font-size:0.875rem;color:var(--theme-group-subheader--color)}:host .expand-icon{padding:0.125rem 0.437rem;color:var(--theme-color-std-text)}:host .btn-expand-header{margin:0.5rem;margin-inline-end:0.25rem;min-width:1.5rem}:host .group-content{display:flex;flex-direction:column;gap:1px;margin-top:1px}:host .footer{visibility:collapse;height:auto;min-height:0}:host .footer-visible{visibility:visible}:host .hidden{display:none}"},90450:(e,t,o)=>{o.d(t,{c:()=>r});const r=e=>new MutationObserver(e)},83557:(e,t,o)=>{function r(e,t){return t?t.closest(e)||r(e,t.getRootNode().host):null}function i(e){return e.assignedElements({flatten:!0})}function s(e){return!!e&&0!==e.assignedElements({flatten:!0}).length}function d(e,t){return e?e instanceof ShadowRoot?d(e.host,t):e instanceof HTMLElement&&e.matches(t)?e:d(e.parentNode,t):null}o.d(t,{a:()=>d,c:()=>r,g:()=>i,h:()=>s})}}]);