"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50489],{50489:(e,t,a)=>{a.r(t),a.d(t,{ix_upload:()=>s});var i=a(8823),l=a(88666);const s=class{get inputElement(){return this.hostElement.shadowRoot.querySelector("#upload-browser")}constructor(e){(0,i.r)(this,e),this.filesChanged=(0,i.c)(this,"filesChanged",7),this.accept=void 0,this.multiple=!1,this.multiline=!1,this.disabled=!1,this.state=l.U.SELECT_FILE,this.selectFileText="+ Drag files here or\u2026",this.loadingText="Checking files\u2026",this.uploadFailedText="Upload failed. Please try again.",this.uploadSuccessText="Upload successful",this.i18nUploadFile="Upload file\u2026",this.i18nUploadDisabled="File upload currently not possible.",this.isFileOver=!1}fileDropped(e){if(e.preventDefault(),this.disabled)return;const t=e.dataTransfer.files;this.isFileOver=!1,this.filesToUpload=this.convertToFileArray(t),this.filesChanged.emit(this.filesToUpload)}fileOver(e){this.state!==l.U.LOADING&&(e.preventDefault(),e.dataTransfer.dropEffect="move"),!this.multiple&&e.dataTransfer.items.length>1?(e.preventDefault(),e.stopPropagation(),e.dataTransfer.effectAllowed="none",e.dataTransfer.dropEffect="none"):this.isFileOver=!0}fileLeave(){this.isFileOver=!1}fileChangeEvent(e){this.disabled||(this.filesToUpload=this.convertToFileArray(e.target.files),this.filesChanged.emit(this.filesToUpload),this.inputElement.type="",this.inputElement.type="file")}convertToFileArray(e){let t=[];return t=e instanceof FileList?Array.from(e):[e],t}renderUploadState(){if(this.disabled)return(0,i.h)("span",{class:"state"},(0,i.h)("span",{class:"upload-text"},this.i18nUploadDisabled));switch(this.state){case l.U.SELECT_FILE:return(0,i.h)("span",{class:"state"},(0,i.h)("span",{class:"upload-text"},this.selectFileText));case l.U.LOADING:return(0,i.h)("span",{class:"state"},(0,i.h)("ix-spinner",{variant:"primary"}),(0,i.h)("span",{class:"upload-text"},this.loadingText));case l.U.UPLOAD_FAILED:return(0,i.h)("span",{class:"state"},(0,i.h)("i",{class:"glyph glyph-error"}),(0,i.h)("span",{class:"upload-text"},this.uploadFailedText));case l.U.UPLOAD_SUCCESSED:return(0,i.h)("span",{class:"state"},(0,i.h)("i",{class:"glyph glyph-success"}),(0,i.h)("span",{class:"upload-text"},this.uploadSuccessText));default:return""}}async setFilesToUpload(e){this.filesToUpload=e}render(){return(0,i.h)(i.H,null,(0,i.h)("div",{class:{"file-upload-area":!0,"file-over":this.state!==l.U.LOADING&&this.isFileOver,checking:this.state===l.U.LOADING,disabled:this.disabled,multiline:this.multiline},onDrop:e=>{this.state!==l.U.LOADING&&this.fileDropped(e)},onDragOver:e=>this.fileOver(e),onDragLeave:()=>this.fileLeave(),draggable:!this.disabled},this.renderUploadState(),(0,i.h)("div",null,(0,i.h)("input",{multiple:this.multiple,type:"file",class:"upload-browser",id:"upload-browser",onChange:e=>{this.fileChangeEvent(e)},accept:this.accept}),(0,i.h)("ix-button",{tabindex:"-1",outline:!0,onClick:()=>this.inputElement.click(),disabled:this.disabled||this.state===l.U.LOADING},this.i18nUploadFile))))}get hostElement(){return(0,i.g)(this)}};s.style=":host{display:block;min-height:4rem;height:4rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .file-upload-area{display:flex;flex-direction:row;align-items:center;justify-content:space-between;overflow:hidden;height:100%;width:100%;padding:1rem;border:1px dashed var(--theme-upload--border-color);border-radius:var(--theme-upload--border-radius);color:var(--theme-upload-text--color)}:host .file-upload-area.multiline{max-height:unset;height:auto}:host .file-upload-area.multiline .glyph{align-self:flex-start;margin-block-start:3px}:host .file-upload-area.multiline>div{align-self:flex-start}:host .file-upload-area:not(.multiline) .state,:host .file-upload-area:not(.multiline) .upload-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .file-upload-area:not(.disabled).file-over{border-color:var(--theme-upload--border-color--dragover);border-style:solid}:host .file-upload-area.checking{color:var(--theme-upload-text--color--checking);border-style:solid}:host .file-upload-area.disabled{border-style:solid;color:var(--theme-upload-text--color--disabled)}:host .file-upload-area ix-button{margin-inline-start:1rem}:host .file-upload-area .upload-browser{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}:host .file-upload-area .loader{margin:2.187rem auto;font-size:0.937rem;width:1rem;height:1rem;border-radius:50%;position:relative;text-indent:-9999em;animation:optimise-loading 1.1s infinite ease;transform:translateZ(0)}:host .file-upload-area .upload-filename{margin-bottom:1rem}:host .file-upload-area .state{display:flex;align-items:center}:host .file-upload-area .state>ix-spinner{margin-inline-end:0.5rem;height:1.5rem;width:1.5rem}:host .file-upload-area .state>i{margin-inline-end:0.5rem}:host .file-upload-area .state>i.glyph-error{color:var(--theme-color-alarm)}:host .file-upload-area .state>i.glyph-success{color:var(--theme-color-success)}:host(.disabled){pointer-events:none}"}}]);