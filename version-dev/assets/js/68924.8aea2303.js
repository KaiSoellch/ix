"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68924],{68924:(o,e,t)=>{t.r(e),t.d(e,{ix_expanding_search:()=>n});var r=t(92398);const n=class{expandInput(){setTimeout(this.focusTextInput,300),this.expanded=!0}collapseInput(){!this.isFieldChanged&&this.expanded&&(this.expanded=!1)}clearInput(){this.value="",this.isFieldChanged=!1}onChange(o){this.value=o.target.value,this.isFieldChanged&&""===this.value?this.isFieldChanged=!1:this.isFieldChanged=!0,this.valueChange.emit(this.value)}constructor(o){(0,r.r)(this,o),this.valueChange=(0,r.c)(this,"valueChange",7),this.icon="search",this.placeholder="Enter text here",this.value="",this.fullWidth=!1,this.isFieldChanged=!1,this.expanded=!1,this.hasFocus=!1,this.focusTextInput=this.focusTextInput.bind(this)}focusTextInput(){var o;null===(o=this.textInput)||void 0===o||o.focus()}clearClicked(){var o;this.clearInput(),null===(o=this.textInput)||void 0===o||o.focus(),this.valueChange.emit(this.value)}render(){return(0,r.h)(r.H,{key:"6a2588f177ecc33a8e9fe105d1e6d1bdb474acd7",class:{expanded:this.expanded,"right-position":this.expanded,fullWidth:this.fullWidth}},(0,r.h)("ix-icon-button",{key:"d70a207d4a7eb845f79db17633055160826ac8f5",size:this.expanded?"16":"24",icon:this.icon,ghost:!0,variant:"primary","data-testid":"button",onClick:()=>this.expandInput(),tabindex:this.expanded?-1:0,color:this.hasFocus?"input-search-icon--color--focus":void 0,class:{"btn-search":!0,"btn-search--expanded":this.expanded}}),(0,r.h)("div",{key:"41906509762b7fa32c4e5454f12e7f0a24c1745d",class:{expanded:this.expanded,fullWidth:this.fullWidth,collapsed:!this.expanded,"disable-pointer":!this.expanded,"input-container":!0},"data-testid":"input-wrapper"},(0,r.h)("input",{key:"448b100091d8b754500c11dd9075ce1d9f9eacf7",class:{"form-control":!0,input:this.expanded,"disable-pointer":!this.expanded,"opacity-before":!this.expanded,"opacity-after":this.expanded},ref:o=>this.textInput=o,"data-testid":"input",placeholder:this.placeholder,type:"text",value:this.value,onBlur:()=>{this.collapseInput(),this.hasFocus=!1},onFocus:()=>this.hasFocus=!0,onInput:o=>this.onChange(o),tabindex:this.expanded?0:-1}),this.isFieldChanged?(0,r.h)("ix-icon-button",{class:"btn-clear",icon:"clear",ghost:!0,size:"16","data-testid":"clear-button",onClick:()=>this.clearClicked()}):null))}};n.style=".form-control,.form-control-plaintext{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);color:var(--theme-input--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:var(--theme-input--border-radius);height:2rem;min-height:2rem;min-width:2rem;background-color:var(--theme-input--background);border:solid 1px var(--theme-input--border-color);box-shadow:var(--theme-input--box-shadow);padding-inline-start:0.5rem;padding-inline-end:0.5rem}.form-control::-moz-placeholder,.form-control-plaintext::-moz-placeholder{color:var(--theme-input-hint--color)}.form-control::placeholder,.form-control-plaintext::placeholder{color:var(--theme-input-hint--color)}.form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled),.form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}.form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled),.form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}.form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,.form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover);cursor:auto}.form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,.form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover);cursor:auto}.form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible,.form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline-offset:var(--theme-input--focus--outline-offset);box-shadow:var(--theme-input--box-shadow);outline:1px solid var(--theme-color-focus-bdr)}.form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible,.form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline-offset:var(--theme-input--focus--outline-offset);box-shadow:var(--theme-input--box-shadow);outline:1px solid var(--theme-color-focus-bdr)}.form-control:focus-visible{color:var(--theme-input--color)}.form-control[type=number]{text-align:right}.form-control[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}.form-control.readonly,.form-control[readonly]{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem}.form-control:-moz-read-only{box-shadow:none !important;outline:none !important;border-color:var(--theme-input--border-color);cursor:default !important}.form-control:read-only,.form-control[readonly],.form-control[readOnly],.form-control.readonly{box-shadow:none !important;outline:none !important;border-color:var(--theme-input--border-color);cursor:default !important}.form-control:read-only::-moz-placeholder,.form-control[readonly]::-moz-placeholder,.form-control[readOnly]::-moz-placeholder,.form-control.readonly::-moz-placeholder{color:transparent}.form-control:-moz-read-only::placeholder{color:transparent}.form-control:read-only::placeholder,.form-control[readonly]::placeholder,.form-control[readOnly]::placeholder,.form-control.readonly::placeholder{color:transparent}.form-control:disabled,.form-control.disabled{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem;color:var(--theme-color-weak-text);border-color:var(--theme-input--border-color-bottom--disabled)}.form-control:disabled::-moz-placeholder,.form-control.disabled::-moz-placeholder{color:transparent}.form-control:disabled::placeholder,.form-control.disabled::placeholder{color:transparent}.form-control-plaintext{outline:0}.form-group{position:relative}.input-wrapper{display:flex;position:relative;align-items:center;flex-wrap:nowrap}.input-wrapper>.glyph{display:block;position:absolute;margin-inline-start:0.312rem;color:var(--theme-color-std-text)}.input-wrapper>input{padding-inline-start:2.2rem}select.form-control{padding:0 0.312rem}textarea.form-control{padding:0.375rem 0.5rem}input.disabled,input:disabled{color:var(--theme-input--color--disabled)}input:-moz-read-only{cursor:default}input:read-only,input.readonly{cursor:default}:host{display:inline-flex;width:auto;height:2rem;align-items:center;justify-content:space-between;position:relative;}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .input-container{transition:all 0.3s ease-in-out}:host input{box-shadow:var(--theme-input--box-shadow);cursor:auto !important;width:100%}:host .expanded{width:11.5625rem}:host .expanded.fullWidth{width:100%}:host .collapsed{width:1.5rem;border:none}:host .btn-search-icon{align-self:center;margin:auto;position:relative}:host .btn-search{display:flex;max-width:2rem;max-height:2rem;border-radius:var(--theme-input--border-radius);transition:all 0.15s ease-in-out;z-index:1;align-items:center;position:relative;border:none}:host .btn-search:not(.disabled):not(:disabled){cursor:pointer}:host .btn-search:not(.disabled):not(:disabled):hover{border-color:transparent}:host .btn-search:not(.disabled):not(:disabled){cursor:pointer}:host .btn-search:not(.disabled):not(:disabled):active,:host .btn-search:not(.disabled):not(:disabled).active{border-color:transparent}:host .btn-search:not(.disabled):not(:disabled):focus-visible{outline:none}:host .btn-search:not(.disabled):not(:disabled):focus-visible{outline:var(--focus--border-color);outline-width:1px;outline-style:solid}:host .btn-search.btn-search--expanded{margin-left:0.25rem;pointer-events:none}:host .btn-search:active{width:2rem;height:2rem;border-radius:var(--theme-input--border-radius);border:var(--theme-std-bdr-1) !important}:host .input-container{display:flex;position:absolute;align-items:center;flex-wrap:nowrap}:host .btn-clear{position:absolute;border-radius:var(--theme-input--border-radius);right:0px;margin-right:0.25rem}:host .input{padding-left:2rem !important;padding-right:2.5rem !important}:host .opacity-before{opacity:0}:host .opacity-after{opacity:1}:host(.right-position){width:11.5625rem !important}:host(.right-position.fullWidth){width:100% !important}:host(.right-position.fullWidth) .fullWidth{width:100% !important}"}}]);