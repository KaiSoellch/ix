"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17481],{46703:(e,t,i)=>{function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e,t,i){return e(i={path:t,exports:{},require:function(e,t){return o()}},i.exports),i.exports}function o(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}i.d(t,{a:()=>o,c:()=>n,g:()=>r})},17481:(e,t,i)=>{i.r(t),i.d(t,{ix_tree:()=>a,ix_tree_item:()=>h});var r=i(60598),n=i(46703);var o=(0,n.c)((function(e,t){e.exports=function(){function e(t,i,r){function o(a,h){if(!i[a]){if(!t[a]){var l="function"==typeof n.a&&n.a;if(!h&&l)return l(a,!0);if(s)return s(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var d=i[a]={exports:{}};t[a][0].call(d.exports,(function(e){return o(t[a][1][e]||e)}),d,d.exports,e,t,i,r)}return i[a].exports}for(var s="function"==typeof n.a&&n.a,a=0;a<r.length;a++)o(r[a]);return o}return e}()({1:[function(e,t,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}();function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s={width:"100%",height:"100%"},a=function(e){return Number(e)==Number(e)},h="classList"in document.documentElement?function(e,t){e.classList.add(t)}:function(e,t){var i=e.getAttribute("class")||"";e.setAttribute("class",i+" "+t)},l=function(){function e(t,i){var r=this;o(this,e),this._config={},this._lastRepaint=null,this._maxElementHeight=e.getMaxBrowserHeight(),this.refresh(t,i);var n=this._config;!function e(){var t=r._getScrollPosition(),i=r._lastRepaint;if(r._renderAnimationFrame=window.requestAnimationFrame(e),t!==i){var o=i?t-i:0;if(!i||o<0||o>r._averageHeight){var s=r._renderChunk();r._lastRepaint=t,!1!==s&&"function"==typeof n.afterRender&&n.afterRender()}}}()}return r(e,null,[{key:"create",value:function(t,i){return new e(t,i)}},{key:"mergeStyle",value:function(e,t){for(var i in t)e.style[i]!==t[i]&&(e.style[i]=t[i])}},{key:"getMaxBrowserHeight",value:function(){var t=document.createElement("div"),i=document.createElement("div");e.mergeStyle(t,{position:"absolute",height:"1px",opacity:0}),e.mergeStyle(i,{height:"1e7px"}),t.appendChild(i),document.body.appendChild(t);var r=i.offsetHeight;return document.body.removeChild(t),r}}]),r(e,[{key:"destroy",value:function(){window.cancelAnimationFrame(this._renderAnimationFrame)}},{key:"refresh",value:function(t,i){var r;if(Object.assign(this._config,s,i),!t||1!==t.nodeType)throw new Error("HyperList requires a valid DOM Node container");this._element=t;var o=this._config,h=this._scroller||o.scroller||document.createElement(o.scrollerTagName||"tr");if("boolean"!=typeof o.useFragment&&(this._config.useFragment=!0),!o.generate)throw new Error("Missing required `generate` function");if(!a(o.total))throw new Error("Invalid required `total` value, expected number");if(!Array.isArray(o.itemHeight)&&!a(o.itemHeight))throw new Error("\n        Invalid required `itemHeight` value, expected number or array\n      ".trim());a(o.itemHeight)?this._itemHeights=Array(o.total).fill(o.itemHeight):this._itemHeights=o.itemHeight,Object.keys(s).filter((function(e){return e in o})).forEach((function(e){var t=o[e],i=a(t);if(t&&"string"!=typeof t&&"number"!=typeof t)throw new Error("Invalid optional `"+e+"`, expected string or number");i&&(o[e]=t+"px")}));var l=Boolean(o.horizontal),c=o[l?"width":"height"];if(c){var d=a(c),u=!d&&"%"===c.slice(-1),m=d?c:parseInt(c.replace(/px|%/,""),10),g=window[l?"innerWidth":"innerHeight"];this._containerSize=u?g*m/100:a(c)?c:m}var p=o.scrollContainer,f=o.itemHeight*o.total,v=this._maxElementHeight;f>v&&console.warn(["HyperList: The maximum element height",v+"px has","been exceeded; please reduce your item height."].join(" "));var x={width:""+o.width,height:p?f+"px":""+o.height,overflow:p?"none":"auto",position:"relative"};e.mergeStyle(t,x),p&&e.mergeStyle(o.scrollContainer,{overflow:"auto"});var _=(n(r={opacity:"0",position:"absolute"},l?"height":"width","1px"),n(r,l?"width":"height",f+"px"),r);e.mergeStyle(h,_),this._scroller||t.appendChild(h);var y=this._computeScrollPadding();this._scrollPaddingBottom=y.bottom,this._scrollPaddingTop=y.top,this._scroller=h,this._scrollHeight=this._computeScrollHeight(),this._itemPositions=this._itemPositions||Array(o.total).fill(0),this._computePositions(0),this._renderChunk(null!==this._lastRepaint),"function"==typeof o.afterRender&&o.afterRender()}},{key:"_getRow",value:function(t){var i=this._config,r=i.generate(t),o=r.height;if(void 0!==o&&a(o)?(r=r.element,o!==this._itemHeights[t]&&(this._itemHeights[t]=o,this._computePositions(t),this._scrollHeight=this._computeScrollHeight(t))):o=this._itemHeights[t],!r||1!==r.nodeType)throw new Error("Generator did not return a DOM Node for index: "+t);h(r,i.rowClassName||"vrow");var s=this._itemPositions[t]+this._scrollPaddingTop;return e.mergeStyle(r,n({position:"absolute"},i.horizontal?"left":"top",s+"px")),r}},{key:"_getScrollPosition",value:function(){var e=this._config;return"function"==typeof e.overrideScrollPosition?e.overrideScrollPosition():this._element[e.horizontal?"scrollLeft":"scrollTop"]}},{key:"_renderChunk",value:function(e){var t=this._config,i=this._element,r=this._getScrollPosition(),n=t.total,o=t.reverse?this._getReverseFrom(r):this._getFrom(r)-1;if((o<0||o-this._screenItemsLen<0)&&(o=0),!e&&this._lastFrom===o)return!1;this._lastFrom=o;var s=o+this._cachedItemsLen;(s>n||s+this._cachedItemsLen>n)&&(s=n);var a=t.useFragment?document.createDocumentFragment():[],h=this._scroller;a[t.useFragment?"appendChild":"push"](h);for(var l=o;l<s;l++){var c=this._getRow(l);a[t.useFragment?"appendChild":"push"](c)}if(t.applyPatch)return t.applyPatch(i,a);i.innerHTML="",i.appendChild(a)}},{key:"_computePositions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=this._config,i=t.total,r=t.reverse;e<1&&!r&&(e=1);for(var n=e;n<i;n++)r?0===n?this._itemPositions[0]=this._scrollHeight-this._itemHeights[0]:this._itemPositions[n]=this._itemPositions[n-1]-this._itemHeights[n]:this._itemPositions[n]=this._itemHeights[n-1]+this._itemPositions[n-1]}},{key:"_computeScrollHeight",value:function(){var t,i=this,r=this._config,o=Boolean(r.horizontal),s=r.total,a=this._itemHeights.reduce((function(e,t){return e+t}),0)+this._scrollPaddingBottom+this._scrollPaddingTop;e.mergeStyle(this._scroller,(n(t={opacity:0,position:"absolute",top:"0px"},o?"height":"width","1px"),n(t,o?"width":"height",a+"px"),t));var h=this._itemHeights.slice(0).sort((function(e,t){return e-t})),l=Math.floor(s/2),c=s%2==0?(h[l]+h[l-1])/2:h[l],d=o?"clientWidth":"clientHeight",u=r.scrollContainer?r.scrollContainer:this._element,m=u[d]?u[d]:this._containerSize;return this._screenItemsLen=Math.ceil(m/c),this._containerSize=m,this._cachedItemsLen=Math.max(this._cachedItemsLen||0,3*this._screenItemsLen),this._averageHeight=c,r.reverse&&window.requestAnimationFrame((function(){o?i._element.scrollLeft=a:i._element.scrollTop=a})),a}},{key:"_computeScrollPadding",value:function(){var e=this._config,t=Boolean(e.horizontal),i=e.reverse,r=window.getComputedStyle(this._element),n=function(e){var t=r.getPropertyValue("padding-"+e);return parseInt(t,10)||0};return t&&i?{bottom:n("left"),top:n("right")}:t?{bottom:n("right"),top:n("left")}:i?{bottom:n("top"),top:n("bottom")}:{bottom:n("bottom"),top:n("top")}}},{key:"_getFrom",value:function(e){for(var t=0;this._itemPositions[t]<e;)t++;return t}},{key:"_getReverseFrom",value:function(e){for(var t=this._config.total-1;t>0&&this._itemPositions[t]<e+this._containerSize;)t--;return t}}]),e}();i.default=l,t.exports=i.default},{}]},{},[1])(1)}));const s=(0,n.g)(o),a=class{constructor(e){(0,r.r)(this,e),this.contextChange=(0,r.c)(this,"contextChange",7),this.nodeRemoved=(0,r.c)(this,"nodeRemoved",7),this.toggleListener=new Map,this.itemClickListener=new Map,this.updates=new Map,this.root=void 0,this.model=void 0,this.renderItem=void 0,this.context={}}getVirtualizerOptions(){const e=this.buildTreeList(this.model[this.root]);return{itemHeight:32,total:e.length,generate:t=>{const i=e[t],r=this.host.querySelector(`[data-tree-node-id="${i.id}"]`),n=this.getContext(i.id);if(r){if(r.hasChildren=i.hasChildren,r.context=Object.assign({},n),this.updates.has(i.id)){this.updates.get(i.id)(i,Object.assign({},this.context))}return r}const o=e=>{this.updates.set(i.id,e)};let s=null;this.renderItem&&(s=this.renderItem(t,i,e,Object.assign({},this.context),o)),null===s&&(s=function(e,t,i){const r=document.createElement("ix-tree-item");return r.hasChildren=e.hasChildren,r.context=t,r.text=e.data.name,i((e=>{r.text=e.data.name})),r}(i,n,o));const a=s;if(a.setAttribute("data-tree-node-id",i.id),a.style.paddingLeft=i.level+"rem",a.style.paddingRight="1rem",!this.itemClickListener.has(a)){const e=e=>{e.preventDefault(),e.stopPropagation(),Object.values(this.context).forEach((e=>e.isSelected=!1));const t=this.getContext(i.id);t.isSelected=!0,this.setContext(i.id,t)};a.addEventListener("itemClick",e),this.itemClickListener.set(a,e)}if(i.hasChildren&&!this.toggleListener.has(a)){const r=r=>{r.preventDefault(),r.stopPropagation();const n=this.getContext(e[t].id);n.isExpanded=!n.isExpanded,this.setContext(i.id,n)};a.addEventListener("toggle",r),this.toggleListener.set(a,r)}return a}}}setContext(e,t){this.context=Object.assign(Object.assign({},this.context),{[e]:t}),this.contextChange.emit(this.context)}getContext(e){return this.context?(this.context[e]||(this.context[e]={isExpanded:!1,isSelected:!1}),this.context[e]):{isExpanded:!1,isSelected:!1}}buildTreeList(e,t){void 0===t&&(t=0);const i=[];if(null==e?void 0:e.hasChildren){const r=t+1;e.children.forEach((e=>{const n=this.model[e],o=this.getContext(e);i.push(Object.assign(Object.assign({},n),{level:t})),n.hasChildren&&o.isExpanded&&i.push(...this.buildTreeList(n,r))}))}return i}componentDidLoad(){const e=this.getVirtualizerOptions();this.hyperlist=new s(this.host,e),this.observer=new MutationObserver((e=>{let t=[];e.forEach((e=>{t=[...t,...Array.from(e.removedNodes)],e.addedNodes.forEach((e=>{const i=t.indexOf(e);i>=0&&t.splice(i,1)}))})),this.nodeRemoved.emit(t)})),this.observer.observe(this.host,{childList:!0})}componentWillRender(){this.refreshList()}disconnectedCallback(){this.hyperlist.destroy(),this.observer.disconnect()}modelChange(){this.refreshList()}refreshList(){this.hyperlist&&this.hyperlist.refresh(this.host,this.getVirtualizerOptions())}render(){return(0,r.h)(r.H,null,(0,r.h)("slot",null))}get host(){return(0,r.g)(this)}static get watchers(){return{model:["modelChange"]}}};a.style=".sc-ix-tree-h{display:block}";const h=class{constructor(e){(0,r.r)(this,e),this.toggle=(0,r.c)(this,"toggle",7),this.itemClick=(0,r.c)(this,"itemClick",7),this.text=void 0,this.hasChildren=void 0,this.context=void 0}render(){var e,t,i;return(0,r.h)(r.H,{class:{selected:null===(e=this.context)||void 0===e?void 0:e.isSelected}},(0,r.h)("div",{class:"icon-toggle-container",onClick:e=>{e.preventDefault(),this.toggle.emit()}},this.hasChildren?(0,r.h)("ix-icon",{name:"chevron-right",size:"16",class:{"icon-toggle-down":null===(t=this.context)||void 0===t?void 0:t.isExpanded},color:"color-"+((null===(i=this.context)||void 0===i?void 0:i.isExpanded)?"primary":"std-text")}):null),(0,r.h)("div",{class:"tree-node-container",onClick:e=>{e.preventDefault(),this.itemClick.emit()}},this.text,(0,r.h)("slot",null)))}};h.style=".sc-ix-tree-item-h{display:flex;align-items:center;height:32px;width:100%;cursor:pointer}.sc-ix-tree-item-h:not(.disabled):not(:disabled):not(.selected).hover,.sc-ix-tree-item-h:not(.disabled):not(:disabled):not(.selected):hover{background-color:var(--theme-tree-item--background--hover)}.sc-ix-tree-item-h:not(.disabled):not(:disabled):not(.selected).active,.sc-ix-tree-item-h:not(.disabled):not(:disabled):not(.selected):active{background-color:var(--theme-tree-item--background--active)}.selected.sc-ix-tree-item-h{background-color:var(--theme-tree-item--background--selected)}.selected.hover.sc-ix-tree-item-h,.selected.sc-ix-tree-item-h:hover{background-color:var(--theme-tree-item--background--selected-hover)}.selected.active.sc-ix-tree-item-h,.selected.sc-ix-tree-item-h:active{background-color:var(--theme-tree-item--background--selected-active)}.sc-ix-tree-item-h .tree-node-container.sc-ix-tree-item{display:flex;align-items:center;height:2rem;flex-grow:1;align-items:center}.sc-ix-tree-item-h .icon-toggle-container.sc-ix-tree-item{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem}.sc-ix-tree-item-h .icon-toggle-container.sc-ix-tree-item ix-icon.sc-ix-tree-item{transition:transform 150ms ease-in-out}.sc-ix-tree-item-h .icon-toggle-container.sc-ix-tree-item ix-icon.icon-toggle-down.sc-ix-tree-item{transform:rotate(90deg)}"}}]);