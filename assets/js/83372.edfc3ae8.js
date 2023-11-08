"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83372],{75459:(e,t,n)=>{n.d(t,{a:()=>r,b:()=>a});const r=e=>e?"true":"false",a=function(e,t){void 0===t&&(t=[]);const n={};return i.forEach((r=>{if(e.hasAttribute(r)){null===e.getAttribute(r)||t.includes(r)||(n[r]=e.getAttribute(r),e.removeAttribute(r))}})),n},i=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"]},10161:(e,t,n)=>{n.d(t,{a:()=>ae});var r={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},a={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},i=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],o={CSS:{},springs:{}};function u(e,t,n){return Math.min(Math.max(e,t),n)}function s(e,t){return e.indexOf(t)>-1}function l(e,t){return e.apply(null,t)}var c={arr:function(e){return Array.isArray(e)},obj:function(e){return s(Object.prototype.toString.call(e),"Object")},pth:function(e){return c.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||c.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return c.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return c.hex(e)||c.rgb(e)||c.hsl(e)},key:function(e){return!r.hasOwnProperty(e)&&!a.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function d(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map((function(e){return parseFloat(e)})):[]}function f(e,t){var n=d(e),r=u(c.und(n[0])?1:n[0],.1,100),a=u(c.und(n[1])?100:n[1],.1,100),i=u(c.und(n[2])?10:n[2],.1,100),s=u(c.und(n[3])?0:n[3],.1,100),l=Math.sqrt(a/r),f=i/(2*Math.sqrt(a*r)),h=f<1?l*Math.sqrt(1-f*f):0,p=f<1?(f*l-s)/h:-s+l;function m(e){var n=t?t*e/1e3:e;return n=f<1?Math.exp(-n*f*l)*(1*Math.cos(h*n)+p*Math.sin(h*n)):(1+p*n)*Math.exp(-n*l),0===e||1===e?e:1-n}return t?m:function(){var t=o.springs[e];if(t)return t;for(var n=1/6,r=0,a=0;;)if(1===m(r+=n)){if(++a>=16)break}else a=0;var i=r*n*1e3;return o.springs[e]=i,i}}function h(e){return void 0===e&&(e=10),function(t){return Math.ceil(u(t,1e-6,1)*e)*(1/e)}}var p,m,g=function(){var e=.1;function t(e,t){return 1-3*t+3*e}function n(e,t){return 3*t-6*e}function r(e){return 3*e}function a(e,a,i){return((t(a,i)*e+n(a,i))*e+r(a))*e}function i(e,a,i){return 3*t(a,i)*e*e+2*n(a,i)*e+r(a)}return function(t,n,r,o){if(0<=t&&t<=1&&0<=r&&r<=1){var u=new Float32Array(11);if(t!==n||r!==o)for(var s=0;s<11;++s)u[s]=a(s*e,t,r);return function(e){return t===n&&r===o||0===e||1===e?e:a(l(e),n,o)}}function l(n){for(var o=0,s=1;10!==s&&u[s]<=n;++s)o+=e;--s;var l=o+(n-u[s])/(u[s+1]-u[s])*e,c=i(l,t,r);return c>=.001?function(e,t,n,r){for(var o=0;o<4;++o){var u=i(t,n,r);if(0===u)return t;t-=(a(t,n,r)-e)/u}return t}(n,l,t,r):0===c?l:function(e,t,n,r,i){var o,u,s=0;do{(o=a(u=t+(n-t)/2,r,i)-e)>0?n=u:t=u}while(Math.abs(o)>1e-7&&++s<10);return u}(n,o,o+e,t,r)}}}(),v=(p={linear:function(){return function(e){return e}}},m={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=u(e,1,10),r=u(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(e,t){m[e]=function(){return function(e){return Math.pow(e,t+2)}}})),Object.keys(m).forEach((function(e){var t=m[e];p["easeIn"+e]=t,p["easeOut"+e]=function(e,n){return function(r){return 1-t(e,n)(1-r)}},p["easeInOut"+e]=function(e,n){return function(r){return r<.5?t(e,n)(2*r)/2:1-t(e,n)(-2*r+2)/2}},p["easeOutIn"+e]=function(e,n){return function(r){return r<.5?(1-t(e,n)(1-2*r))/2:(t(e,n)(2*r-1)+1)/2}}})),p);function y(e,t){if(c.fnc(e))return e;var n=e.split("(")[0],r=v[n],a=d(e);switch(n){case"spring":return f(e,t);case"cubicBezier":return l(g,a);case"steps":return l(h,a);default:return l(r,a)}}function b(e){try{return document.querySelectorAll(e)}catch(t){return}}function x(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,a=[],i=0;i<n;i++)if(i in e){var o=e[i];t.call(r,o,i,e)&&a.push(o)}return a}function w(e){return e.reduce((function(e,t){return e.concat(c.arr(t)?w(t):t)}),[])}function M(e){return c.arr(e)?e:(c.str(e)&&(e=b(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function k(e,t){return e.some((function(e){return e===t}))}function C(e){var t={};for(var n in e)t[n]=e[n];return t}function O(e,t){var n=C(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function D(e,t){var n=C(e);for(var r in t)n[r]=c.und(e[r])?t[r]:e[r];return n}function I(e){return c.rgb(e)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t=e))?"rgba("+n[1]+",1)":t:c.hex(e)?function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,r){return t+t+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(e):c.hsl(e)?function(e){var t,n,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),i=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,s=a[4]||1;function l(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==o)t=n=r=u;else{var c=u<.5?u*(1+o):u+o-u*o,d=2*u-c;t=l(d,c,i+1/3),n=l(d,c,i),r=l(d,c,i-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+s+")"}(e):void 0;var t,n}function A(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function B(e,t){return c.fnc(e)?e(t.target,t.id,t.total):e}function P(e,t){return e.getAttribute(t)}function T(e,t,n){if(k([n,"deg","rad","turn"],A(t)))return t;var r=o.CSS[t+n];if(!c.und(r))return r;var a=document.createElement(e.tagName),i=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;i.appendChild(a),a.style.position="absolute",a.style.width=100+n;var u=100/a.offsetWidth;i.removeChild(a);var s=u*parseFloat(t);return o.CSS[t+n]=s,s}function E(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?T(e,a,n):a}}function S(e,t){return c.dom(e)&&!c.inp(e)&&(!c.nil(P(e,t))||c.svg(e)&&e[t])?"attribute":c.dom(e)&&k(i,t)?"transform":c.dom(e)&&"transform"!==t&&E(e,t)?"css":null!=e[t]?"object":void 0}function N(e){if(c.dom(e)){for(var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;t=r.exec(n);)a.set(t[1],t[2]);return a}}function F(e,t,n,r){var a=s(t,"scale")?1:0+function(e){return s(e,"translate")||"perspective"===e?"px":s(e,"rotate")||s(e,"skew")?"deg":void 0}(t),i=N(e).get(t)||a;return n&&(n.transforms.list.set(t,i),n.transforms.last=t),r?T(e,i,r):i}function L(e,t,n,r){switch(S(e,t)){case"transform":return F(e,t,r,n);case"css":return E(e,t,n);case"attribute":return P(e,t);default:return e[t]||0}}function z(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=A(e)||0,a=parseFloat(t),i=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return a+i+r;case"-":return a-i+r;case"*":return a*i+r}}function q(e,t){if(c.col(e))return I(e);if(/\s/g.test(e))return e;var n=A(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function j(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function H(e){for(var t,n=e.points,r=0,a=0;a<n.numberOfItems;a++){var i=n.getItem(a);a>0&&(r+=j(t,i)),t=i}return r}function X(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*P(e,"r")}(e);case"rect":return function(e){return 2*P(e,"width")+2*P(e,"height")}(e);case"line":return function(e){return j({x:P(e,"x1"),y:P(e,"y1")},{x:P(e,"x2"),y:P(e,"y2")})}(e);case"polyline":return H(e);case"polygon":return function(e){var t=e.points;return H(e)+j(t.getItem(t.numberOfItems-1),t.getItem(0))}(e)}}function Y(e,t){var n=t||{},r=n.el||function(e){for(var t=e.parentNode;c.svg(t)&&c.svg(t.parentNode);)t=t.parentNode;return t}(e),a=r.getBoundingClientRect(),i=P(r,"viewBox"),o=a.width,u=a.height,s=n.viewBox||(i?i.split(" "):[0,0,o,u]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:o,h:u,vW:s[2],vH:s[3]}}function $(e,t,n){function r(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var a=Y(e.el,e.svg),i=r(),o=r(-1),u=r(1),s=n?1:a.w/a.vW,l=n?1:a.h/a.vH;switch(e.property){case"x":return(i.x-a.x)*s;case"y":return(i.y-a.y)*l;case"angle":return 180*Math.atan2(u.y-o.y,u.x-o.x)/Math.PI}}function V(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=q(c.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:c.str(e)||t?r.split(n):[]}}function W(e){return x(e?w(c.arr(e)?e.map(M):M(e)):[],(function(e,t,n){return n.indexOf(e)===t}))}function Z(e){var t=W(e);return t.map((function(e,n){return{target:e,id:n,total:t.length,transforms:{list:N(e)}}}))}function G(e,t){var n=C(t);if(/^spring/.test(n.easing)&&(n.duration=f(n.easing)),c.arr(e)){var r=e.length;2===r&&!c.obj(e[0])?e={value:e}:c.fnc(t.duration)||(n.duration=t.duration/r)}var a=c.arr(e)?e:[e];return a.map((function(e,n){var r=c.obj(e)&&!c.pth(e)?e:{value:e};return c.und(r.delay)&&(r.delay=n?0:t.delay),c.und(r.endDelay)&&(r.endDelay=n===a.length-1?t.endDelay:0),r})).map((function(e){return D(e,n)}))}function Q(e,t){var n=[],r=t.keyframes;for(var a in r&&(t=D(function(e){for(var t=x(w(e.map((function(e){return Object.keys(e)}))),(function(e){return c.key(e)})).reduce((function(e,t){return e.indexOf(t)<0&&e.push(t),e}),[]),n={},r=function(r){var a=t[r];n[a]=e.map((function(e){var t={};for(var n in e)c.key(n)?n==a&&(t.value=e[n]):t[n]=e[n];return t}))},a=0;a<t.length;a++)r(a);return n}(r),t)),t)c.key(a)&&n.push({name:a,tweens:G(t[a],e)});return n}function R(e,t){var n;return e.tweens.map((function(r){var a=function(e,t){var n={};for(var r in e){var a=B(e[r],t);c.arr(a)&&1===(a=a.map((function(e){return B(e,t)}))).length&&(a=a[0]),n[r]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,t),i=a.value,o=c.arr(i)?i[1]:i,u=A(o),s=L(t.target,e.name,u,t),l=n?n.to.original:s,d=c.arr(i)?i[0]:l,f=A(d)||A(s),h=u||f;return c.und(o)&&(o=l),a.from=V(d,h),a.to=V(z(o,d),h),a.start=n?n.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=y(a.easing,a.duration),a.isPath=c.pth(i),a.isPathTargetInsideSVG=a.isPath&&c.svg(t.target),a.isColor=c.col(a.from.original),a.isColor&&(a.round=1),n=a,a}))}var _={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,a){if(r.list.set(t,n),t===r.last||a){var i="";r.list.forEach((function(e,t){i+=t+"("+e+") "})),e.style.transform=i}}};function J(e,t){Z(e).forEach((function(e){for(var n in t){var r=B(t[n],e),a=e.target,i=A(r),o=L(a,n,i,e),u=z(q(r,i||A(o)),o),s=S(a,n);_[s](a,n,u,e.transforms,!0)}}))}function K(e,t){return x(w(e.map((function(e){return t.map((function(t){return function(e,t){var n=S(e.target,t.name);if(n){var r=R(t,e),a=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(e,t)}))}))),(function(e){return!c.und(e)}))}function U(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):t.duration,a.delay=n?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):t.delay,a.endDelay=n?a.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):t.endDelay,a}var ee=0;var te=[],ne=function(){var e;function t(n){for(var r=te.length,a=0;a<r;){var i=te[a];i.paused?(te.splice(a,1),r--):(i.tick(n),a++)}e=a>0?requestAnimationFrame(t):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){ae.suspendWhenDocumentHidden&&(re()?e=cancelAnimationFrame(e):(te.forEach((function(e){return e._onDocumentVisibility()})),ne()))})),function(){e||re()&&ae.suspendWhenDocumentHidden||!(te.length>0)||(e=requestAnimationFrame(t))}}();function re(){return!!document&&document.hidden}function ae(e){void 0===e&&(e={});var t,n=0,i=0,o=0,s=0,l=null;function c(e){var t=window.Promise&&new Promise((function(e){return l=e}));return e.finished=t,t}var d=function(e){var t=O(r,e),n=O(a,e),i=Q(n,e),o=Z(e.targets),u=K(o,i),s=U(u,n),l=ee;return ee++,D(t,{id:l,children:[],animatables:o,animations:u,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}(e);function f(){var e=d.direction;"alternate"!==e&&(d.direction="normal"!==e?"normal":"reverse"),d.reversed=!d.reversed,t.forEach((function(e){return e.reversed=d.reversed}))}function h(e){return d.reversed?d.duration-e:e}function p(){n=0,i=h(d.currentTime)*(1/ae.speed)}function m(e,t){t&&t.seek(e-t.timelineOffset)}function g(e){for(var t=0,n=d.animations,r=n.length;t<r;){var a=n[t],i=a.animatable,o=a.tweens,s=o.length-1,l=o[s];s&&(l=x(o,(function(t){return e<t.end}))[0]||l);for(var c=u(e-l.start-l.delay,0,l.duration)/l.duration,f=isNaN(c)?1:l.easing(c),h=l.to.strings,p=l.round,m=[],g=l.to.numbers.length,v=void 0,y=0;y<g;y++){var b=void 0,w=l.to.numbers[y],M=l.from.numbers[y]||0;b=l.isPath?$(l.value,f*w,l.isPathTargetInsideSVG):M+f*(w-M),p&&(l.isColor&&y>2||(b=Math.round(b*p)/p)),m.push(b)}var k=h.length;if(k){v=h[0];for(var C=0;C<k;C++){var O=h[C+1],D=m[C];isNaN(D)||(v+=O?D+O:D+" ")}}else v=m[0];_[a.type](i.target,a.property,v,i.transforms),a.currentValue=v,t++}}function v(e){d[e]&&!d.passThrough&&d[e](d)}function y(e){var r=d.duration,a=d.delay,p=r-d.endDelay,y=h(e);d.progress=u(y/r*100,0,100),d.reversePlayback=y<d.currentTime,t&&function(e){if(d.reversePlayback)for(var n=s;n--;)m(e,t[n]);else for(var r=0;r<s;r++)m(e,t[r])}(y),!d.began&&d.currentTime>0&&(d.began=!0,v("begin")),!d.loopBegan&&d.currentTime>0&&(d.loopBegan=!0,v("loopBegin")),y<=a&&0!==d.currentTime&&g(0),(y>=p&&d.currentTime!==r||!r)&&g(r),y>a&&y<p?(d.changeBegan||(d.changeBegan=!0,d.changeCompleted=!1,v("changeBegin")),v("change"),g(y)):d.changeBegan&&(d.changeCompleted=!0,d.changeBegan=!1,v("changeComplete")),d.currentTime=u(y,0,r),d.began&&v("update"),e>=r&&(i=0,d.remaining&&!0!==d.remaining&&d.remaining--,d.remaining?(n=o,v("loopComplete"),d.loopBegan=!1,"alternate"===d.direction&&f()):(d.paused=!0,d.completed||(d.completed=!0,v("loopComplete"),v("complete"),!d.passThrough&&"Promise"in window&&(l(),c(d)))))}return c(d),d.reset=function(){var e=d.direction;d.passThrough=!1,d.currentTime=0,d.progress=0,d.paused=!0,d.began=!1,d.loopBegan=!1,d.changeBegan=!1,d.completed=!1,d.changeCompleted=!1,d.reversePlayback=!1,d.reversed="reverse"===e,d.remaining=d.loop,t=d.children;for(var n=s=t.length;n--;)d.children[n].reset();(d.reversed&&!0!==d.loop||"alternate"===e&&1===d.loop)&&d.remaining++,g(d.reversed?d.duration:0)},d._onDocumentVisibility=p,d.set=function(e,t){return J(e,t),d},d.tick=function(e){o=e,n||(n=o),y((o+(i-n))*ae.speed)},d.seek=function(e){y(h(e))},d.pause=function(){d.paused=!0,p()},d.play=function(){d.paused&&(d.completed&&d.reset(),d.paused=!1,te.push(d),p(),ne())},d.reverse=function(){f(),d.completed=!d.reversed,p()},d.restart=function(){d.reset(),d.play()},d.remove=function(e){oe(W(e),d)},d.reset(),d.autoplay&&d.play(),d}function ie(e,t){for(var n=t.length;n--;)k(e,t[n].animatable.target)&&t.splice(n,1)}function oe(e,t){var n=t.animations,r=t.children;ie(e,n);for(var a=r.length;a--;){var i=r[a],o=i.animations;ie(e,o),o.length||i.children.length||r.splice(a,1)}n.length||r.length||t.pause()}ae.version="3.2.1",ae.speed=1,ae.suspendWhenDocumentHidden=!0,ae.running=te,ae.remove=function(e){for(var t=W(e),n=te.length;n--;){oe(t,te[n])}},ae.get=L,ae.set=J,ae.convertPx=T,ae.path=function(e,t){var n=c.str(e)?b(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:Y(n),totalLength:X(n)*(r/100)}}},ae.setDashoffset=function(e){var t=X(e);return e.setAttribute("stroke-dasharray",t),t},ae.stagger=function(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?y(t.easing):null,a=t.grid,i=t.axis,o=t.from||0,u="first"===o,s="center"===o,l="last"===o,d=c.arr(e),f=d?parseFloat(e[0]):parseFloat(e),h=d?parseFloat(e[1]):0,p=A(d?e[1]:e)||0,m=t.start||0+(d?f:0),g=[],v=0;return function(e,t,c){if(u&&(o=0),s&&(o=(c-1)/2),l&&(o=c-1),!g.length){for(var y=0;y<c;y++){if(a){var b=s?(a[0]-1)/2:o%a[0],x=s?(a[1]-1)/2:Math.floor(o/a[0]),w=b-y%a[0],M=x-Math.floor(y/a[0]),k=Math.sqrt(w*w+M*M);"x"===i&&(k=-w),"y"===i&&(k=-M),g.push(k)}else g.push(Math.abs(o-y));v=Math.max.apply(Math,g)}r&&(g=g.map((function(e){return r(e/v)*v}))),"reverse"===n&&(g=g.map((function(e){return i?e<0?-1*e:-e:Math.abs(v-e)})))}return m+(d?(h-f)/v:f)*(Math.round(100*g[t])/100)+p}},ae.timeline=function(e){void 0===e&&(e={});var t=ae(e);return t.duration=0,t.add=function(n,r){var i=te.indexOf(t),o=t.children;function u(e){e.passThrough=!0}i>-1&&te.splice(i,1);for(var s=0;s<o.length;s++)u(o[s]);var l=D(n,O(a,e));l.targets=l.targets||e.targets;var d=t.duration;l.autoplay=!1,l.direction=t.direction,l.timelineOffset=c.und(r)?d:z(r,d),u(t),t.seek(l.timelineOffset);var f=ae(l);u(f),o.push(f);var h=U(o,e);return t.delay=h.delay,t.endDelay=h.endDelay,t.duration=h.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},ae.easing=y,ae.penner=v,ae.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},83372:(e,t,n)=>{n.r(t),n.d(t,{ix_modal:()=>u});var r=n(8823),a=n(10161),i=n(75459),o=n(56624);const u=class{constructor(e){(0,r.r)(this,e),this.dialogClose=(0,r.c)(this,"dialogClose",7),this.dialogDismiss=(0,r.c)(this,"dialogDismiss",7),this.ariaAttributes={},this.size="360",this.animation=!0,this.backdrop=!0,this.closeOnBackdropClick=!1,this.beforeDismiss=void 0,this.centered=!1,this.keyboard=!0}get dialog(){return this.hostElement.shadowRoot.querySelector("dialog")}slideInModal(){const e=this.animation?o.A.mediumTime:0;let t=this.centered?"-50%":40;(0,a.a)({targets:this.dialog,duration:e,opacity:[0,1],translateY:[0,t],translateX:["-50%","-50%"],easing:"easeOutSine"})}slideOutModal(e){const t=this.animation?o.A.mediumTime:0;let n=this.centered?"-50%":40;(0,a.a)({targets:this.dialog,duration:t,opacity:[1,0],translateY:[n,0],translateX:["-50%","-50%"],easing:"easeInSine",complete:()=>{e&&e()}})}onModalClick(e){const t=this.dialog.getBoundingClientRect();!(t.top<=e.clientY&&e.clientY<=t.top+t.height&&t.left<=e.clientX&&e.clientX<=t.left+t.width)&&this.closeOnBackdropClick&&this.dismissModal()}async showModal(){setTimeout((()=>this.dialog.showModal()))}async dismissModal(e){let t=!0;void 0!==this.beforeDismiss&&(t=await this.beforeDismiss(e)),t&&this.slideOutModal((()=>{this.dialog.close(JSON.stringify({type:"dismiss",reason:e},null,2)),this.dialogDismiss.emit(e)}))}async closeModal(e){this.slideOutModal((()=>{this.dialog.close(JSON.stringify({type:"close",reason:e},null,2)),this.dialogClose.emit(e)}))}componentDidLoad(){this.slideInModal()}componentWillLoad(){this.ariaAttributes=(0,i.b)(this.hostElement)}render(){return(0,r.h)(r.H,{class:{"no-backdrop":!1===this.backdrop,"align-center":this.centered}},(0,r.h)("div",{class:"dialog-backdrop"},(0,r.h)("dialog",{"aria-modal":(0,i.a)(!0),"aria-describedby":this.ariaAttributes["aria-describedby"],"aria-labelledby":this.ariaAttributes["aria-labelledby"],class:{modal:!0,[`modal-size-${this.size}`]:!0},onKeyDown:e=>{"Escape"===e.key&&!1===this.keyboard&&e.preventDefault()},onClick:e=>this.onModalClick(e),onCancel:e=>{e.preventDefault(),this.dismissModal()}},(0,r.h)("slot",null))))}get hostElement(){return(0,r.g)(this)}};u.style="::backdrop{--ix-dialog-backdrop:var(--theme-color-lightbox, #0000008c)}:focus-visible{outline:none !important}:host dialog{margin:0;left:50%}:host dialog::backdrop{-webkit-backdrop-filter:blur(2.7182817459px);backdrop-filter:blur(2.7182817459px)}:host .modal{display:flex;flex-direction:column;position:relative;border:none;border-radius:var(--theme-default-border-radius);background:var(--theme-modal--background);box-shadow:var(--theme-shadow-4);color:var(--theme-color-std-text);overflow:visible;max-height:80vh;pointer-events:all}:host .modal-size-360{width:22.5rem}:host .modal-size-480{width:30rem}:host .modal-size-600{width:37.5rem}:host .modal-size-720{width:45rem}:host .modal-size-840{width:52.5rem}:host .modal-size-full-width{width:95%}:host .modal-size-full-screen{left:0px !important;top:0px !important;transform:none !important;width:calc(100% - 28px);min-width:calc(100% - 28px);max-width:calc(100% - 28px);height:calc(100% - 28px);min-height:calc(100% - 28px);max-height:calc(100% - 28px)}:host .dialog-backdrop{display:block;position:fixed;width:100vw;height:100vh;top:0px;left:0px;pointer-events:none}:host ::slotted(ix-modal-footer){margin-top:auto}:host(.align-center) dialog{margin:0;left:50%;top:50%}:host(.no-backdrop) dialog::backdrop{background-color:transparent !important;-webkit-backdrop-filter:none !important;backdrop-filter:none !important}:host(.with-icon) ::slotted(ix-modal-footer),:host(.with-icon) ::slotted(ix-modal-content){margin-left:2.5rem}"}}]);