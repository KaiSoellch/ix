"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85605],{85605:(t,o,e)=>{e.r(o),e.d(o,{ix_toast_container:()=>r});var s=e(8823),n=e(42951);const r=class{constructor(t){(0,s.r)(this,t),this.PREFIX_POSITION_CLASS="toast-container--",this.containerId="toast-container",this.containerClass="toast-container",this.position="bottom-right"}get hostContainer(){return document.getElementById(this.containerId)}componentDidLoad(){if(!document.getElementById(this.containerId)){const t=document.createElement("div");t.id=this.containerId,t.classList.add(this.containerClass),t.classList.add(`${this.PREFIX_POSITION_CLASS}${this.position}`),document.body.appendChild(t)}}onPositionChange(t,o){const e=document.getElementById(this.containerId);e.classList.remove(`${this.PREFIX_POSITION_CLASS}${o}`),e.classList.add(`${this.PREFIX_POSITION_CLASS}${t}`)}async showToast(t){var o,e;const s=document.createElement("ix-toast"),r=new n.T;function i(t){s.remove(),r.emit(t)}return s.toastTitle=t.title,s.type=t.type,s.autoClose=null===(o=t.autoClose)||void 0===o||o,s.autoCloseDelay=null!==(e=t.autoCloseDelay)&&void 0!==e?e:5e3,s.icon=t.icon,s.iconColor=t.iconColor,s.addEventListener("closeToast",(t=>{const{detail:o}=t;i(o)})),"string"==typeof t.message?s.innerText=t.message:s.appendChild(t.message),setTimeout((()=>{this.hostContainer.appendChild(s)})),{onClose:r,close:t=>{i(t)}}}render(){return(0,s.h)(s.H,{class:{"toast-container--bottom-right":"bottom-right"===this.position,"toast-container--top-right":"top-right"===this.position}})}static get watchers(){return{position:["onPositionChange"]}}};r.style=":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}#toast-container>:not(:last-child){margin-block-end:1rem}.toast-container{display:block;position:fixed}.toast-container--top-right{right:1rem;top:2rem}.toast-container--bottom-right{right:1rem;bottom:2rem}"}}]);