(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2197],{20394:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(26131)}])},26131:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Custom404}});var i=n(85893),o=n(34460),r=n(41664),s=n.n(r);function Custom404(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o.Z,{headerStyle:1,footerStyle:1,children:(0,i.jsxs)("div",{className:"section-404-page relative",children:[(0,i.jsxs)("div",{className:"content",children:["4",(0,i.jsx)("span",{className:"tf-color",children:"0"}),"4"]}),(0,i.jsx)("h2",{children:"Oh no... We lost this page"}),(0,i.jsxs)("p",{children:["We searched everywhere but couldn’t find what you’re looking for. ",(0,i.jsx)("br",{}),"Let’s find a better place for you to go."]}),(0,i.jsxs)(s(),{href:"/",className:"tf-button w320 style-1 h50",children:["Back to home",(0,i.jsx)("i",{className:"icon-arrow-up-right2"})]})]})})})}},65541:function(){(function(){var t,e,n,i,o,bind=function(t,e){return function(){return t.apply(e,arguments)}},r=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return -1};e=function(){function Util(){}return Util.prototype.extend=function(t,e){var n,i;for(n in e)i=e[n],null==t[n]&&(t[n]=i);return t},Util.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},Util.prototype.createEvent=function(t,e,n,i){var o;return null==e&&(e=!1),null==n&&(n=!1),null==i&&(i=null),null!=document.createEvent?(o=document.createEvent("CustomEvent")).initCustomEvent(t,e,n,i):null!=document.createEventObject?(o=document.createEventObject()).eventType=t:o.eventName=t,o},Util.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},Util.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},Util.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},Util.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},Util}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function WeakMap(){this.keys=[],this.values=[]}return WeakMap.prototype.get=function(t){var e,n,i,o;for(o=this.keys,e=n=0,i=o.length;n<i;e=++n)if(o[e]===t)return this.values[e]},WeakMap.prototype.set=function(t,e){var n,i,o,r;for(r=this.keys,n=i=0,o=r.length;i<o;n=++i)if(r[n]===t){this.values[n]=e;return}return this.keys.push(t),this.values.push(e)},WeakMap}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function MutationObserver(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return MutationObserver.notSupported=!0,MutationObserver.prototype.observe=function(){},MutationObserver}()),i=this.getComputedStyle||function(t,e){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),o.test(e)&&e.replace(o,function(t,e){return e.toUpperCase()}),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},o=/(\-([a-z]){1})/g,this.WOW=function(){function WOW(t){null==t&&(t={}),this.scrollCallback=bind(this.scrollCallback,this),this.scrollHandler=bind(this.scrollHandler,this),this.resetAnimation=bind(this.resetAnimation,this),this.start=bind(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return WOW.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},WOW.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},WOW.prototype.start=function(){var e,n,i,o,r;if(this.stopped=!1,this.boxes=(function(){var t,n,i,o;for(t=0,i=this.element.querySelectorAll("."+this.config.boxClass),o=[],n=i.length;t<n;t++)e=i[t],o.push(e);return o}).call(this),this.all=(function(){var t,n,i,o;for(t=0,i=this.boxes,o=[],n=i.length;t<n;t++)e=i[t],o.push(e);return o}).call(this),this.boxes.length){if(this.disabled())this.resetStyle();else for(n=0,i=(o=this.boxes).length;n<i;n++)e=o[n],this.applyStyle(e,!0)}if(this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live)return new t((r=this,function(t){var e,n,i,o,s;for(e=0,s=[],n=t.length;e<n;e++)o=t[e],s.push((function(){var t,e,n,r;for(t=0,n=o.addedNodes||[],r=[],e=n.length;t<e;t++)i=n[t],r.push(this.doSync(i));return r}).call(r));return s})).observe(document.body,{childList:!0,subtree:!0})},WOW.prototype.stop=function(){if(this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval)return clearInterval(this.interval)},WOW.prototype.sync=function(e){if(t.notSupported)return this.doSync(this.element)},WOW.prototype.doSync=function(t){var e,n,i,o,s;if(null==t&&(t=this.element),1===t.nodeType){for(n=0,o=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass),s=[],i=o.length;n<i;n++)e=o[n],0>r.call(this.all,e)?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),s.push(this.scrolled=!0)):s.push(void 0);return s}},WOW.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},WOW.prototype.applyStyle=function(t,e){var n,i,o,r;return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),this.animate((r=this,function(){return r.customStyle(t,e,i,n,o)}))},WOW.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},WOW.prototype.resetStyle=function(){var t,e,n,i,o;for(e=0,i=this.boxes,o=[],n=i.length;e<n;e++)t=i[e],o.push(t.style.visibility="visible");return o},WOW.prototype.resetAnimation=function(t){var e;if(t.type.toLowerCase().indexOf("animationend")>=0)return(e=t.target||t.srcElement).className=e.className.replace(this.config.animateClass,"").trim()},WOW.prototype.customStyle=function(t,e,n,i,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},WOW.prototype.vendors=["moz","webkit"],WOW.prototype.vendorSet=function(t,e){var n,i,o,r;for(n in i=[],e)o=e[n],t[""+n]=o,i.push((function(){var e,i,s,l;for(e=0,s=this.vendors,l=[],i=s.length;e<i;e++)r=s[e],l.push(t[""+r+n.charAt(0).toUpperCase()+n.substr(1)]=o);return l}).call(this));return i},WOW.prototype.vendorCSS=function(t,e){var n,o,r,s,l,a;for(n=0,s=(l=i(t)).getPropertyCSSValue(e),o=(r=this.vendors).length;n<o;n++)a=r[n],s=s||l.getPropertyCSSValue("-"+a+"-"+e);return s},WOW.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=i(t).getPropertyValue("animation-name")}return"none"===e?"":e},WOW.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},WOW.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},WOW.prototype.scrollHandler=function(){return this.scrolled=!0},WOW.prototype.scrollCallback=function(){var t;if(this.scrolled&&(this.scrolled=!1,this.boxes=(function(){var e,n,i,o;for(e=0,i=this.boxes,o=[],n=i.length;e<n;e++)if(t=i[e]){if(this.isVisible(t)){this.show(t);continue}o.push(t)}return o}).call(this),!(this.boxes.length||this.config.live)))return this.stop()},WOW.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},WOW.prototype.isVisible=function(t){var e,n,i,o,r;return n=t.getAttribute("data-wow-offset")||this.config.offset,o=(r=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset)+Math.min(this.element.clientHeight,this.util().innerHeight())-n,e=(i=this.offsetTop(t))+t.clientHeight,i<=o&&e>=r},WOW.prototype.util=function(){return null!=this._util?this._util:this._util=new e},WOW.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},WOW}()}).call(this)}},function(t){t.O(0,[5121,1664,510,3362,4460,9774,2888,179],function(){return t(t.s=20394)}),_N_E=t.O()}]);