"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60593],{56960:(e,t,n)=>{n.d(t,{a:()=>r,b:()=>i,g:()=>a});const r=e=>e?"true":"false",a=e=>{if(!e)return"Unknown";if((e=>{if(!e)return!1;let t;try{t=new URL(e)}catch(n){return!1}return"http:"===t.protocol||"https:"===t.protocol})(e))return"Unknown";if((t=e)&&"string"==typeof t&&t.startsWith("data:image/svg+xml"))return"Unknown";var t;const n=e.replace("-filled","").split("-").map((e=>{const t=e.trim(),n=t.replace(/\d+/g,"");return 0===n.length?t:n})).map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ");return 0===n.length?"Unknown":n},i=function(e,t){void 0===t&&(t=[]);const n={};return o.forEach((r=>{if(e.hasAttribute(r)){null===e.getAttribute(r)||t.includes(r)||(n[r]=e.getAttribute(r),e.removeAttribute(r))}})),n},o=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"]},10161:(e,t,n)=>{n.d(t,{a:()=>ae});var r={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},a={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},i=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],o={CSS:{},springs:{}};function l(e,t,n){return Math.min(Math.max(e,t),n)}function d(e,t){return e.indexOf(t)>-1}function s(e,t){return e.apply(null,t)}var c={arr:function(e){return Array.isArray(e)},obj:function(e){return d(Object.prototype.toString.call(e),"Object")},pth:function(e){return c.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||c.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return c.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return c.hex(e)||c.rgb(e)||c.hsl(e)},key:function(e){return!r.hasOwnProperty(e)&&!a.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function u(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map((function(e){return parseFloat(e)})):[]}function h(e,t){var n=u(e),r=l(c.und(n[0])?1:n[0],.1,100),a=l(c.und(n[1])?100:n[1],.1,100),i=l(c.und(n[2])?10:n[2],.1,100),d=l(c.und(n[3])?0:n[3],.1,100),s=Math.sqrt(a/r),h=i/(2*Math.sqrt(a*r)),b=h<1?s*Math.sqrt(1-h*h):0,f=h<1?(h*s-d)/b:-d+s;function v(e){var n=t?t*e/1e3:e;return n=h<1?Math.exp(-n*h*s)*(1*Math.cos(b*n)+f*Math.sin(b*n)):(1+f*n)*Math.exp(-n*s),0===e||1===e?e:1-n}return t?v:function(){var t=o.springs[e];if(t)return t;for(var n=1/6,r=0,a=0;;)if(1===v(r+=n)){if(++a>=16)break}else a=0;var i=r*n*1e3;return o.springs[e]=i,i}}function b(e){return void 0===e&&(e=10),function(t){return Math.ceil(l(t,1e-6,1)*e)*(1/e)}}var f,v,p=function(){var e=.1;function t(e,t){return 1-3*t+3*e}function n(e,t){return 3*t-6*e}function r(e){return 3*e}function a(e,a,i){return((t(a,i)*e+n(a,i))*e+r(a))*e}function i(e,a,i){return 3*t(a,i)*e*e+2*n(a,i)*e+r(a)}return function(t,n,r,o){if(0<=t&&t<=1&&0<=r&&r<=1){var l=new Float32Array(11);if(t!==n||r!==o)for(var d=0;d<11;++d)l[d]=a(d*e,t,r);return function(e){return t===n&&r===o||0===e||1===e?e:a(s(e),n,o)}}function s(n){for(var o=0,d=1;10!==d&&l[d]<=n;++d)o+=e;--d;var s=o+(n-l[d])/(l[d+1]-l[d])*e,c=i(s,t,r);return c>=.001?function(e,t,n,r){for(var o=0;o<4;++o){var l=i(t,n,r);if(0===l)return t;t-=(a(t,n,r)-e)/l}return t}(n,s,t,r):0===c?s:function(e,t,n,r,i){var o,l,d=0;do{(o=a(l=t+(n-t)/2,r,i)-e)>0?n=l:t=l}while(Math.abs(o)>1e-7&&++d<10);return l}(n,o,o+e,t,r)}}}(),g=(f={linear:function(){return function(e){return e}}},v={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=l(e,1,10),r=l(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(e,t){v[e]=function(){return function(e){return Math.pow(e,t+2)}}})),Object.keys(v).forEach((function(e){var t=v[e];f["easeIn"+e]=t,f["easeOut"+e]=function(e,n){return function(r){return 1-t(e,n)(1-r)}},f["easeInOut"+e]=function(e,n){return function(r){return r<.5?t(e,n)(2*r)/2:1-t(e,n)(-2*r+2)/2}},f["easeOutIn"+e]=function(e,n){return function(r){return r<.5?(1-t(e,n)(1-2*r))/2:(t(e,n)(2*r-1)+1)/2}}})),f);function m(e,t){if(c.fnc(e))return e;var n=e.split("(")[0],r=g[n],a=u(e);switch(n){case"spring":return h(e,t);case"cubicBezier":return s(p,a);case"steps":return s(b,a);default:return s(r,a)}}function y(e){try{return document.querySelectorAll(e)}catch(t){return}}function w(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,a=[],i=0;i<n;i++)if(i in e){var o=e[i];t.call(r,o,i,e)&&a.push(o)}return a}function k(e){return e.reduce((function(e,t){return e.concat(c.arr(t)?k(t):t)}),[])}function x(e){return c.arr(e)?e:(c.str(e)&&(e=y(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function M(e,t){return e.some((function(e){return e===t}))}function C(e){var t={};for(var n in e)t[n]=e[n];return t}function I(e,t){var n=C(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function O(e,t){var n=C(e);for(var r in t)n[r]=c.und(e[r])?t[r]:e[r];return n}function D(e){return c.rgb(e)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t=e))?"rgba("+n[1]+",1)":t:c.hex(e)?function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,r){return t+t+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(e):c.hsl(e)?function(e){var t,n,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),i=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,l=parseInt(a[3],10)/100,d=a[4]||1;function s(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==o)t=n=r=l;else{var c=l<.5?l*(1+o):l+o-l*o,u=2*l-c;t=s(u,c,i+1/3),n=s(u,c,i),r=s(u,c,i-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+d+")"}(e):void 0;var t,n}function P(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function B(e,t){return c.fnc(e)?e(t.target,t.id,t.total):e}function A(e,t){return e.getAttribute(t)}function T(e,t,n){if(M([n,"deg","rad","turn"],P(t)))return t;var r=o.CSS[t+n];if(!c.und(r))return r;var a=document.createElement(e.tagName),i=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;i.appendChild(a),a.style.position="absolute",a.style.width=100+n;var l=100/a.offsetWidth;i.removeChild(a);var d=l*parseFloat(t);return o.CSS[t+n]=d,d}function E(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?T(e,a,n):a}}function S(e,t){return c.dom(e)&&!c.inp(e)&&(!c.nil(A(e,t))||c.svg(e)&&e[t])?"attribute":c.dom(e)&&M(i,t)?"transform":c.dom(e)&&"transform"!==t&&E(e,t)?"css":null!=e[t]?"object":void 0}function F(e){if(c.dom(e)){for(var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;t=r.exec(n);)a.set(t[1],t[2]);return a}}function $(e,t,n,r){var a=d(t,"scale")?1:0+function(e){return d(e,"translate")||"perspective"===e?"px":d(e,"rotate")||d(e,"skew")?"deg":void 0}(t),i=F(e).get(t)||a;return n&&(n.transforms.list.set(t,i),n.transforms.last=t),r?T(e,i,r):i}function L(e,t,n,r){switch(S(e,t)){case"transform":return $(e,t,r,n);case"css":return E(e,t,n);case"attribute":return A(e,t);default:return e[t]||0}}function N(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=P(e)||0,a=parseFloat(t),i=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return a+i+r;case"-":return a-i+r;case"*":return a*i+r}}function j(e,t){if(c.col(e))return D(e);if(/\s/g.test(e))return e;var n=P(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function q(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function H(e){for(var t,n=e.points,r=0,a=0;a<n.numberOfItems;a++){var i=n.getItem(a);a>0&&(r+=q(t,i)),t=i}return r}function R(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*A(e,"r")}(e);case"rect":return function(e){return 2*A(e,"width")+2*A(e,"height")}(e);case"line":return function(e){return q({x:A(e,"x1"),y:A(e,"y1")},{x:A(e,"x2"),y:A(e,"y2")})}(e);case"polyline":return H(e);case"polygon":return function(e){var t=e.points;return H(e)+q(t.getItem(t.numberOfItems-1),t.getItem(0))}(e)}}function V(e,t){var n=t||{},r=n.el||function(e){for(var t=e.parentNode;c.svg(t)&&c.svg(t.parentNode);)t=t.parentNode;return t}(e),a=r.getBoundingClientRect(),i=A(r,"viewBox"),o=a.width,l=a.height,d=n.viewBox||(i?i.split(" "):[0,0,o,l]);return{el:r,viewBox:d,x:d[0]/1,y:d[1]/1,w:o,h:l,vW:d[2],vH:d[3]}}function W(e,t,n){function r(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var a=V(e.el,e.svg),i=r(),o=r(-1),l=r(1),d=n?1:a.w/a.vW,s=n?1:a.h/a.vH;switch(e.property){case"x":return(i.x-a.x)*d;case"y":return(i.y-a.y)*s;case"angle":return 180*Math.atan2(l.y-o.y,l.x-o.x)/Math.PI}}function U(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=j(c.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:c.str(e)||t?r.split(n):[]}}function Z(e){return w(e?k(c.arr(e)?e.map(x):x(e)):[],(function(e,t,n){return n.indexOf(e)===t}))}function z(e){var t=Z(e);return t.map((function(e,n){return{target:e,id:n,total:t.length,transforms:{list:F(e)}}}))}function X(e,t){var n=C(t);if(/^spring/.test(n.easing)&&(n.duration=h(n.easing)),c.arr(e)){var r=e.length;2===r&&!c.obj(e[0])?e={value:e}:c.fnc(t.duration)||(n.duration=t.duration/r)}var a=c.arr(e)?e:[e];return a.map((function(e,n){var r=c.obj(e)&&!c.pth(e)?e:{value:e};return c.und(r.delay)&&(r.delay=n?0:t.delay),c.und(r.endDelay)&&(r.endDelay=n===a.length-1?t.endDelay:0),r})).map((function(e){return O(e,n)}))}function Y(e,t){var n=[],r=t.keyframes;for(var a in r&&(t=O(function(e){for(var t=w(k(e.map((function(e){return Object.keys(e)}))),(function(e){return c.key(e)})).reduce((function(e,t){return e.indexOf(t)<0&&e.push(t),e}),[]),n={},r=function(r){var a=t[r];n[a]=e.map((function(e){var t={};for(var n in e)c.key(n)?n==a&&(t.value=e[n]):t[n]=e[n];return t}))},a=0;a<t.length;a++)r(a);return n}(r),t)),t)c.key(a)&&n.push({name:a,tweens:X(t[a],e)});return n}function G(e,t){var n;return e.tweens.map((function(r){var a=function(e,t){var n={};for(var r in e){var a=B(e[r],t);c.arr(a)&&1===(a=a.map((function(e){return B(e,t)}))).length&&(a=a[0]),n[r]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,t),i=a.value,o=c.arr(i)?i[1]:i,l=P(o),d=L(t.target,e.name,l,t),s=n?n.to.original:d,u=c.arr(i)?i[0]:s,h=P(u)||P(d),b=l||h;return c.und(o)&&(o=s),a.from=U(u,b),a.to=U(N(o,u),b),a.start=n?n.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=m(a.easing,a.duration),a.isPath=c.pth(i),a.isPathTargetInsideSVG=a.isPath&&c.svg(t.target),a.isColor=c.col(a.from.original),a.isColor&&(a.round=1),n=a,a}))}var Q={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,a){if(r.list.set(t,n),t===r.last||a){var i="";r.list.forEach((function(e,t){i+=t+"("+e+") "})),e.style.transform=i}}};function _(e,t){z(e).forEach((function(e){for(var n in t){var r=B(t[n],e),a=e.target,i=P(r),o=L(a,n,i,e),l=N(j(r,i||P(o)),o),d=S(a,n);Q[d](a,n,l,e.transforms,!0)}}))}function J(e,t){return w(k(e.map((function(e){return t.map((function(t){return function(e,t){var n=S(e.target,t.name);if(n){var r=G(t,e),a=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(e,t)}))}))),(function(e){return!c.und(e)}))}function K(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):t.duration,a.delay=n?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):t.delay,a.endDelay=n?a.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):t.endDelay,a}var ee=0;var te=[],ne=function(){var e;function t(n){for(var r=te.length,a=0;a<r;){var i=te[a];i.paused?(te.splice(a,1),r--):(i.tick(n),a++)}e=a>0?requestAnimationFrame(t):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){ae.suspendWhenDocumentHidden&&(re()?e=cancelAnimationFrame(e):(te.forEach((function(e){return e._onDocumentVisibility()})),ne()))})),function(){e||re()&&ae.suspendWhenDocumentHidden||!(te.length>0)||(e=requestAnimationFrame(t))}}();function re(){return!!document&&document.hidden}function ae(e){void 0===e&&(e={});var t,n=0,i=0,o=0,d=0,s=null;function c(e){var t=window.Promise&&new Promise((function(e){return s=e}));return e.finished=t,t}var u=function(e){var t=I(r,e),n=I(a,e),i=Y(n,e),o=z(e.targets),l=J(o,i),d=K(l,n),s=ee;return ee++,O(t,{id:s,children:[],animatables:o,animations:l,duration:d.duration,delay:d.delay,endDelay:d.endDelay})}(e);function h(){var e=u.direction;"alternate"!==e&&(u.direction="normal"!==e?"normal":"reverse"),u.reversed=!u.reversed,t.forEach((function(e){return e.reversed=u.reversed}))}function b(e){return u.reversed?u.duration-e:e}function f(){n=0,i=b(u.currentTime)*(1/ae.speed)}function v(e,t){t&&t.seek(e-t.timelineOffset)}function p(e){for(var t=0,n=u.animations,r=n.length;t<r;){var a=n[t],i=a.animatable,o=a.tweens,d=o.length-1,s=o[d];d&&(s=w(o,(function(t){return e<t.end}))[0]||s);for(var c=l(e-s.start-s.delay,0,s.duration)/s.duration,h=isNaN(c)?1:s.easing(c),b=s.to.strings,f=s.round,v=[],p=s.to.numbers.length,g=void 0,m=0;m<p;m++){var y=void 0,k=s.to.numbers[m],x=s.from.numbers[m]||0;y=s.isPath?W(s.value,h*k,s.isPathTargetInsideSVG):x+h*(k-x),f&&(s.isColor&&m>2||(y=Math.round(y*f)/f)),v.push(y)}var M=b.length;if(M){g=b[0];for(var C=0;C<M;C++){var I=b[C+1],O=v[C];isNaN(O)||(g+=I?O+I:O+" ")}}else g=v[0];Q[a.type](i.target,a.property,g,i.transforms),a.currentValue=g,t++}}function g(e){u[e]&&!u.passThrough&&u[e](u)}function m(e){var r=u.duration,a=u.delay,f=r-u.endDelay,m=b(e);u.progress=l(m/r*100,0,100),u.reversePlayback=m<u.currentTime,t&&function(e){if(u.reversePlayback)for(var n=d;n--;)v(e,t[n]);else for(var r=0;r<d;r++)v(e,t[r])}(m),!u.began&&u.currentTime>0&&(u.began=!0,g("begin")),!u.loopBegan&&u.currentTime>0&&(u.loopBegan=!0,g("loopBegin")),m<=a&&0!==u.currentTime&&p(0),(m>=f&&u.currentTime!==r||!r)&&p(r),m>a&&m<f?(u.changeBegan||(u.changeBegan=!0,u.changeCompleted=!1,g("changeBegin")),g("change"),p(m)):u.changeBegan&&(u.changeCompleted=!0,u.changeBegan=!1,g("changeComplete")),u.currentTime=l(m,0,r),u.began&&g("update"),e>=r&&(i=0,u.remaining&&!0!==u.remaining&&u.remaining--,u.remaining?(n=o,g("loopComplete"),u.loopBegan=!1,"alternate"===u.direction&&h()):(u.paused=!0,u.completed||(u.completed=!0,g("loopComplete"),g("complete"),!u.passThrough&&"Promise"in window&&(s(),c(u)))))}return c(u),u.reset=function(){var e=u.direction;u.passThrough=!1,u.currentTime=0,u.progress=0,u.paused=!0,u.began=!1,u.loopBegan=!1,u.changeBegan=!1,u.completed=!1,u.changeCompleted=!1,u.reversePlayback=!1,u.reversed="reverse"===e,u.remaining=u.loop,t=u.children;for(var n=d=t.length;n--;)u.children[n].reset();(u.reversed&&!0!==u.loop||"alternate"===e&&1===u.loop)&&u.remaining++,p(u.reversed?u.duration:0)},u._onDocumentVisibility=f,u.set=function(e,t){return _(e,t),u},u.tick=function(e){o=e,n||(n=o),m((o+(i-n))*ae.speed)},u.seek=function(e){m(b(e))},u.pause=function(){u.paused=!0,f()},u.play=function(){u.paused&&(u.completed&&u.reset(),u.paused=!1,te.push(u),f(),ne())},u.reverse=function(){h(),u.completed=!u.reversed,f()},u.restart=function(){u.reset(),u.play()},u.remove=function(e){oe(Z(e),u)},u.reset(),u.autoplay&&u.play(),u}function ie(e,t){for(var n=t.length;n--;)M(e,t[n].animatable.target)&&t.splice(n,1)}function oe(e,t){var n=t.animations,r=t.children;ie(e,n);for(var a=r.length;a--;){var i=r[a],o=i.animations;ie(e,o),o.length||i.children.length||r.splice(a,1)}n.length||r.length||t.pause()}ae.version="3.2.1",ae.speed=1,ae.suspendWhenDocumentHidden=!0,ae.running=te,ae.remove=function(e){for(var t=Z(e),n=te.length;n--;){oe(t,te[n])}},ae.get=L,ae.set=_,ae.convertPx=T,ae.path=function(e,t){var n=c.str(e)?y(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:V(n),totalLength:R(n)*(r/100)}}},ae.setDashoffset=function(e){var t=R(e);return e.setAttribute("stroke-dasharray",t),t},ae.stagger=function(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?m(t.easing):null,a=t.grid,i=t.axis,o=t.from||0,l="first"===o,d="center"===o,s="last"===o,u=c.arr(e),h=u?parseFloat(e[0]):parseFloat(e),b=u?parseFloat(e[1]):0,f=P(u?e[1]:e)||0,v=t.start||0+(u?h:0),p=[],g=0;return function(e,t,c){if(l&&(o=0),d&&(o=(c-1)/2),s&&(o=c-1),!p.length){for(var m=0;m<c;m++){if(a){var y=d?(a[0]-1)/2:o%a[0],w=d?(a[1]-1)/2:Math.floor(o/a[0]),k=y-m%a[0],x=w-Math.floor(m/a[0]),M=Math.sqrt(k*k+x*x);"x"===i&&(M=-k),"y"===i&&(M=-x),p.push(M)}else p.push(Math.abs(o-m));g=Math.max.apply(Math,p)}r&&(p=p.map((function(e){return r(e/g)*g}))),"reverse"===n&&(p=p.map((function(e){return i?e<0?-1*e:-e:Math.abs(g-e)})))}return v+(u?(b-h)/g:h)*(Math.round(100*p[t])/100)+f}},ae.timeline=function(e){void 0===e&&(e={});var t=ae(e);return t.duration=0,t.add=function(n,r){var i=te.indexOf(t),o=t.children;function l(e){e.passThrough=!0}i>-1&&te.splice(i,1);for(var d=0;d<o.length;d++)l(o[d]);var s=O(n,I(a,e));s.targets=s.targets||e.targets;var u=t.duration;s.autoplay=!1,s.direction=t.direction,s.timelineOffset=c.und(r)?u:N(r,u),l(t),t.seek(s.timelineOffset);var h=ae(s);l(h),o.push(h);var b=K(o,e);return t.delay=b.delay,t.endDelay=b.endDelay,t.duration=b.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},ae.easing=m,ae.penner=g,ae.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},60593:(e,t,n)=>{n.r(t),n.d(t,{ix_blind:()=>l});var r=n(53484),a=n(10161),i=n(56960);let o=0;const l=class{constructor(e){(0,r.r)(this,e),this.collapsedChange=(0,r.c)(this,"collapsedChange",7),this.blindId=++o,this.collapsed=!1,this.label=void 0,this.sublabel=void 0,this.icon=void 0,this.variant="insight"}onHeaderClick(){this.collapsed=!this.collapsed,this.collapsedChange.emit(this.collapsed)}componentDidLoad(){this.animateCollapse(this.collapsed)}get content(){return this.hostElement.shadowRoot.querySelector(".blind-content")}animation(e){this.animateCollapse(e)}animateCollapse(e){e?this.rotateChevronRight():this.rotateChevronDown()}rotateChevronDown(){(0,a.a)({targets:this.chevronRef,duration:150,easing:"easeInOutSine",rotateZ:90}),(0,a.a)({targets:this.content,duration:150,easing:"easeInOutSine",opacity:1})}rotateChevronRight(){(0,a.a)({targets:this.chevronRef,duration:150,easing:"easeInOutSine",rotateZ:0}),(0,a.a)({targets:this.content,duration:150,easing:"easeInOutSine",opacity:0})}render(){return(0,r.h)(r.H,{class:{[`blind-${this.variant}`]:!0}},(0,r.h)("div",{class:"blind-header-wrapper"},(0,r.h)("div",{class:"blind-header-content"},(0,r.h)("ix-icon",{class:"collapse-icon",name:"chevron-right-small",color:"insight"===this.variant||"outline"===this.variant?"color-primary":`color-${this.variant}--contrast`,ref:e=>this.chevronRef=e}),(0,r.h)("div",{class:"blind-header-title",id:`ix-blind-header-title-${this.blindId}`},void 0!==this.label?(0,r.h)(r.F,null,this.icon&&(0,r.h)("ix-icon",{class:"blind-header-title-icon",name:this.icon,color:"insight"===this.variant||"outline"===this.variant?"color-std-text":`color-${this.variant}--contrast`}),(0,r.h)("div",{class:"blind-header-title-row"},(0,r.h)("div",{class:"blind-header-title-col"},(0,r.h)("ix-typography",{title:this.label,format:"label-lg",bold:!0},(0,r.h)("div",{class:"blind-header-title-label",title:this.label},this.label))),this.sublabel&&(0,r.h)("div",{class:"blind-header-title-col"},(0,r.h)("ix-typography",{title:this.sublabel},(0,r.h)("div",{class:"blind-header-title-sublabel"},this.sublabel)))),(0,r.h)("div",{class:"header-actions"},(0,r.h)("slot",{name:"header-actions"}))):null)),(0,r.h)("button",{class:{"blind-header":!0,[`blind-${this.variant}`]:!0,closed:this.collapsed},type:"button","aria-labelledby":`ix-blind-header-title-${this.blindId}`,"aria-controls":`ix-blind-content-section-${this.blindId}`,"aria-expanded":(0,i.a)(!this.collapsed),onClick:()=>this.onHeaderClick()},(0,r.h)("slot",{name:"custom-header"}))),(0,r.h)("section",{id:`ix-blind-content-section-${this.blindId}`,"aria-labelledby":`ix-blind-header-title-${this.blindId}`},(0,r.h)("div",{class:{"blind-content":!0,hide:this.collapsed}},this.collapsed?null:(0,r.h)("slot",null))))}get hostElement(){return(0,r.g)(this)}static get watchers(){return{collapsed:["animation"]}}};l.style=":host{display:flex;flex-direction:column;border-radius:var(--theme-blind--border-radius);overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .blind-header-wrapper{display:block;position:relative;width:100%;min-height:3rem;height:3rem;overflow:hidden}:host .blind-header-content{display:flex;position:relative;align-items:center;justify-content:flex-start;width:100%;height:100%;z-index:1;pointer-events:none;padding-left:0.5rem}:host .blind-header-title{display:flex;position:relative;align-items:center;flex-grow:1;flex-shrink:0;margin-right:1rem}:host .blind-header{all:unset;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;position:absolute;top:0px;left:0px;pointer-events:all;padding-left:2.5rem;min-height:3rem;height:3rem;width:calc(100% - 2 * var(--theme-blind--border-thickness));border:solid var(--theme-blind--border-thickness) transparent;border-radius:var(--theme-blind--border-radius) var(--theme-blind--border-radius) 0 0;cursor:pointer}:host .blind-header:not(.disabled):not(:disabled):focus-visible{border-color:var(--theme-color-focus-bdr);outline:none}:host .blind-header-title-icon,:host .collapse-icon{margin-right:0.5rem}:host .blind-header-title-row{display:flex;flex-grow:1}:host .blind-header-title-col{flex-grow:1;flex-basis:0;display:inline-flex;align-items:center;min-width:0}:host .blind-header-title-col:not(:first-of-type){justify-content:flex-end}:host ix-typography{flex-grow:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .blind-header-title-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-inline-end:0.5rem}:host .blind-header-title-sublabel{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-inline:0.5rem}:host .blind-header-title{display:flex;align-items:center;flex-grow:1;height:100%;min-width:0}:host .blind-header-labels{display:inline-flex;flex-grow:1;min-width:0}:host .blind-content{display:block;padding:1rem;transition-property:padding;transition-duration:150ms;transition-timing-function:ease-in}:host .blind-content.hide{max-height:0;padding-top:0px;padding-bottom:0px}:host .header-actions{pointer-events:all}:host(.blind-alarm){background-color:var(--theme-blind-base--background)}:host(.blind-alarm) .blind-header{background-color:var(--theme-color-alarm)}:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-alarm--hover)}:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-alarm--active)}:host(.blind-alarm) .blind-header-title-label,:host(.blind-alarm) .blind-header-title-sublabel{color:var(--theme-color-alarm--contrast)}:host(.blind-critical){background-color:var(--theme-blind-base--background)}:host(.blind-critical) .blind-header{background-color:var(--theme-color-critical)}:host(.blind-critical) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-critical) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-critical--hover)}:host(.blind-critical) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-critical) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-critical) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-critical--active)}:host(.blind-critical) .blind-header-title-label,:host(.blind-critical) .blind-header-title-sublabel{color:var(--theme-color-critical--contrast)}:host(.blind-info){background-color:var(--theme-blind-base--background)}:host(.blind-info) .blind-header{background-color:var(--theme-color-info)}:host(.blind-info) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-info) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-info--hover)}:host(.blind-info) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-info) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-info) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-info--active)}:host(.blind-info) .blind-header-title-label,:host(.blind-info) .blind-header-title-sublabel{color:var(--theme-color-info--contrast)}:host(.blind-insight){background-color:var(--theme-blind-base--background)}:host(.blind-insight) .blind-header{background-color:var(--theme-color-insight)}:host(.blind-insight) .blind-header:not(.disabled):not(:disabled).hover,:host(.blind-insight) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}:host(.blind-insight) .blind-header:not(.disabled):not(:disabled).active,:host(.blind-insight) .blind-header:not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}:host(.blind-insight) .blind-header-title-label{color:var(--theme-color-std-text)}:host(.blind-insight) .blind-header-title-sublabel{color:var(--theme-color-soft-text)}:host(.blind-neutral){background-color:var(--theme-blind-base--background)}:host(.blind-neutral) .blind-header{background-color:var(--theme-color-neutral)}:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-neutral--hover)}:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-neutral--active)}:host(.blind-neutral) .blind-header-title-label,:host(.blind-neutral) .blind-header-title-sublabel{color:var(--theme-color-neutral--contrast)}:host(.blind-notification){background-color:var(--theme-blind-base--background)}:host(.blind-notification) .blind-header{background-color:var(--theme-color-notification)}:host(.blind-notification) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-notification) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-notification--hover)}:host(.blind-notification) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-notification) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-notification) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-notification--active)}:host(.blind-notification) .blind-header-title-label,:host(.blind-notification) .blind-header-title-sublabel{color:var(--theme-color-notification--contrast)}:host(.blind-success){background-color:var(--theme-blind-base--background)}:host(.blind-success) .blind-header{background-color:var(--theme-color-success)}:host(.blind-success) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-success) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-success--hover)}:host(.blind-success) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-success) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-success) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-success--active)}:host(.blind-success) .blind-header-title-label,:host(.blind-success) .blind-header-title-sublabel{color:var(--theme-color-success--contrast)}:host(.blind-warning){background-color:var(--theme-blind-base--background)}:host(.blind-warning) .blind-header{background-color:var(--theme-color-warning)}:host(.blind-warning) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-warning) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-warning--hover)}:host(.blind-warning) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-warning) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-warning) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-warning--active)}:host(.blind-warning) .blind-header-title-label,:host(.blind-warning) .blind-header-title-sublabel{color:var(--theme-color-warning--contrast)}:host(.blind-primary){background-color:var(--theme-blind-base--background)}:host(.blind-primary) .blind-header{background-color:var(--theme-color-primary)}:host(.blind-primary) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-primary) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-primary--hover)}:host(.blind-primary) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-primary) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-primary) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-primary--active)}:host(.blind-primary) .blind-header-title-label,:host(.blind-primary) .blind-header-title-sublabel{color:var(--theme-color-primary--contrast)}:host(.blind-outline){border:solid var(--theme-blind--border-thickness) var(--theme-blind-base--border-color);border-color:var(--theme-color-soft-bdr)}:host(.blind-outline) .blind-header{background-color:var(--theme-color-ghost)}:host(.blind-outline) .blind-header:not(.disabled):not(:disabled).hover,:host(.blind-outline) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}:host(.blind-outline) .blind-header:not(.disabled):not(:disabled).active,:host(.blind-outline) .blind-header:not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}:host(.blind-outline) .blind-header-title-label{color:var(--theme-color-std-text)}:host(.blind-outline) .blind-header-title-sublabel{color:var(--theme-color-soft-text)}"}}]);