"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34377],{34377:(o,t,e)=>{e.r(t),e.d(t,{ix_modal_header:()=>i});var s=e(8823);const i=class{constructor(o){(0,s.r)(this,o),this.closeClick=(0,s.c)(this,"closeClick",7),this.hideClose=!1,this.icon=void 0,this.iconColor=void 0}onIconChange(o){this.parentDialog&&(o?this.parentDialog.classList.add("with-icon"):this.parentDialog.classList.remove("with-icon"))}componentDidLoad(){this.parentDialog=this.hostElement.closest("ix-modal"),this.onIconChange(this.icon)}onCloseClick(o){this.closeClick.emit(o).defaultPrevented||o.defaultPrevented||this.parentDialog.dismissModal()}render(){return(0,s.h)(s.H,null,this.icon?(0,s.h)("ix-icon",{class:"modal-icon",name:this.icon,color:this.iconColor}):null,(0,s.h)("ix-typography",{variant:"default-title"},(0,s.h)("slot",null)),this.hideClose?null:(0,s.h)("ix-icon-button",{onClick:o=>this.onCloseClick(o),ghost:!0,icon:"close",class:"modal-close"}))}get hostElement(){return(0,s.g)(this)}static get watchers(){return{icon:["onIconChange"]}}};i.style=":host{display:flex;padding:2px 16px 16px 10px;align-items:center;align-self:stretch}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .modal-close{margin-left:auto;margin-right:-20px}:host .modal-icon{margin-right:1rem}"}}]);