"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19108],{19108:(t,e,i)=>{i.r(e),i.d(e,{ix_tabs:()=>s});var o=i(60598);let r=window.innerWidth;const s=class{constructor(t){(0,o.r)(this,t),this.clickAction={timeout:null,isClick:!0},this.small=!1,this.rounded=!1,this.selected=0,this.layout="auto",this.placement="bottom",this.totalItems=0,this.currentScrollAmount=0,this.scrollAmount=100,this.scrollActionAmount=0}onWindowResize(){if(this.totalItems=0,this.totalItems=this.getTabs().length,0===r)return r=window.innerWidth;this.move(r-window.innerWidth),r=window.innerWidth}getTabs(){return Array.from(this.hostElement.querySelectorAll("ix-tab-item"))}getTab(t){return this.getTabs()[t]}getTabsWrapper(){return this.hostElement.getElementsByClassName("items-content")[0]}showArrows(){try{const t=this.getTabsWrapper();return t.scrollWidth>Math.ceil(t.getBoundingClientRect().width)&&"auto"===this.layout}catch(t){return!1}}showPreviousArrow(){try{return this.showArrows()&&this.scrollActionAmount<0}catch(t){return!1}}showNextArrow(){try{const t=this.getTabsWrapper(),e=t.getBoundingClientRect();return this.showArrows()&&this.scrollActionAmount>-1*(t.scrollWidth-e.width)&&window.innerWidth<=t.scrollWidth}catch(t){return!1}}getArrowStyle(t){return{opacity:t?"1":"0",zIndex:t?"1":"-1"}}move(t,e){void 0===e&&(e=!1);const i=this.getTabsWrapper(),o=-1*(i.scrollWidth-i.getBoundingClientRect().width),r=[`transform: translateX(${t=(t=this.currentScrollAmount+t)>0?0:t<o?o:t}px);`,e?"transition: all ease-in-out 400ms;":""].join("");i.setAttribute("style",r),e?this.currentScrollAmount=this.scrollActionAmount=t:this.scrollActionAmount=t}moveTabToView(t){if(!this.showArrows())return;const e=-1*this.getTab(t).getBoundingClientRect().x;this.move(e,!0)}setSelected(t){this.selected=t}clickTab(t){this.dragStop()||(this.setSelected(t),this.moveTabToView(t))}dragStart(t,e){if(!this.showArrows())return;if(e.button>0)return;this.clickAction.timeout=null===this.clickAction.timeout?setTimeout((()=>this.clickAction.isClick=!1),300):null;const i=parseFloat(window.getComputedStyle(t).left),o=e.clientX,r=t=>this.dragMove(t,i,o);window.addEventListener("mouseup",(()=>{window.removeEventListener("mousemove",r,!1),this.dragStop()})),window.addEventListener("mousemove",r,!1)}dragMove(t,e,i){this.move(t.clientX+e-i)}dragStop(){return clearTimeout(this.clickAction.timeout),this.clickAction.timeout=null,!this.clickAction.isClick&&(this.currentScrollAmount=this.scrollActionAmount,this.clickAction.isClick=!0,!0)}componentDidRender(){const t=this.getTabs();this.totalItems=t.length,t.forEach(((t,e)=>{this.small&&t.setAttribute("small","true"),this.rounded&&t.setAttribute("rounded","true"),t.setAttribute("layout",this.layout),t.setAttribute("selected",e===this.selected?"true":"false"),t.setAttribute("placement",this.placement)}))}componentDidLoad(){this.getTabs().forEach(((t,e)=>{null!==t.getAttribute("disabled")||t.addEventListener("click",(()=>this.clickTab(e))),t.addEventListener("mousedown",(e=>this.dragStart(t,e)))}))}render(){return(0,o.h)(o.H,null,(0,o.h)("div",{class:"overflow-shadow",style:this.getArrowStyle(this.showPreviousArrow())}),(0,o.h)("div",{class:"arrow",style:this.getArrowStyle(this.showPreviousArrow()),onClick:()=>this.move(this.scrollAmount,!0)},(0,o.h)("span",{class:"glyph glyph-chevron-left-small"})),(0,o.h)("div",{class:"tab-items"},(0,o.h)("div",{class:"items-content"},(0,o.h)("slot",null))),(0,o.h)("div",{class:"overflow-shadow right",style:this.getArrowStyle(this.showNextArrow())}),(0,o.h)("div",{class:"arrow right",style:this.getArrowStyle(this.showNextArrow()),onClick:()=>this.move(-this.scrollAmount,!0)},(0,o.h)("span",{class:"glyph glyph-chevron-right-small"})))}get hostElement(){return(0,o.g)(this)}};s.style="ix-tabs{width:auto;display:flex;align-items:center;position:relative}ix-tabs .tab-items{overflow:hidden;scroll-behavior:smooth}ix-tabs .tab-items .items-content{display:flex;align-items:center}ix-tabs .arrow{position:absolute;display:flex;align-items:center;justify-content:center;width:32px;height:32px;top:0;bottom:0;left:0;margin:auto 0;border-radius:4px;color:var(--theme-btn-invisible-primary--color);background-color:var(--theme-btn-invisible-primary--background);z-index:2}ix-tabs .arrow:hover{color:var(--theme-btn-invisible-primary--color--hover);background-color:var(--theme-btn-invisible-primary--background--hover)}ix-tabs .arrow:active{color:var(--theme-btn-invisible-primary--color--active);background-color:var(--theme-btn-invisible-primary--background--active)}ix-tabs .arrow.right{left:auto;right:0}ix-tabs .overflow-shadow{width:50px;height:40px;position:absolute;left:0;top:0;background:linear-gradient(90deg, var(--theme-color-1) 50%, transparent);z-index:1}ix-tabs .overflow-shadow.right{left:auto;right:0;background:linear-gradient(90deg, transparent, var(--theme-color-1) 50%)}"}}]);