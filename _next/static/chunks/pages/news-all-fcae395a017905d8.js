(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3551],{96907:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news-all",function(){return n(84284)}])},56080:function(e,t,n){"use strict";var s=n(5121),i=n(6840);(0,n(60471).O)(),t.Z={get_data_event:async()=>{let e={method:"get",url:"".concat(i.Z.apiURL,"/api/v3/user/data_event"),headers:{"Content-Type":"application/json"}};return await (0,s.Z)(e)},post_data_event:async e=>{let t={method:"post",url:"".concat(i.Z.apiURL,"/api/v3/user/postdata_event"),headers:{"Content-Type":"application/json"},data:e};return await (0,s.Z)(t)},post_noconfrimemail:async()=>{let e={method:"get",url:"".concat(i.Z.apiURL,"/api/v3/user/noconfrimemail"),headers:{"Content-Type":"application/json"}};return await (0,s.Z)(e)},post_confrimemail:async e=>{let t={method:"post",url:"".concat(i.Z.apiURL,"/api/v3/user/confrimemail"),headers:{"Content-Type":"application/json"},data:e};return await (0,s.Z)(t)}}},84284:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return news_all}});var s=n(85893),i=n(41664),a=n.n(i),r=n(34460),l=n(11163),notice=e=>((0,l.useRouter)(),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{className:"board-list list",children:(0,s.jsxs)("table",{children:[(0,s.jsxs)("colgroup",{children:[(0,s.jsx)("col",{className:"time"}),(0,s.jsx)("col",{className:"category"}),(0,s.jsx)("col",{className:"subject"})]}),(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"d-none",children:[(0,s.jsx)("th",{className:"time",children:"Date"}),(0,s.jsx)("th",{className:"category",children:"Type"}),(0,s.jsx)("th",{className:"subject",children:"Name"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"time",children:(0,s.jsx)("time",{className:"time-dash",children:"04-09-2023"})}),(0,s.jsx)("td",{className:"category",children:(0,s.jsx)("span",{className:"board-category item",children:"อัพเดท"})}),(0,s.jsx)("td",{className:"subject",children:(0,s.jsx)("div",{className:"board-subject",children:(0,s.jsxs)("a",{href:"#",children:[(0,s.jsx)("span",{className:"indicate"}),(0,s.jsx)("span",{className:"text",children:"รายการอัพเดทประจำสัปดาห์ วันที่ 19 กันยายน 2566"})]})})})]})})]})})})),News_event=e=>((0,l.useRouter)(),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{className:"board-list list",children:(0,s.jsxs)("table",{children:[(0,s.jsxs)("colgroup",{children:[(0,s.jsx)("col",{className:"time"}),(0,s.jsx)("col",{className:"category"}),(0,s.jsx)("col",{className:"subject"})]}),(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"d-none",children:[(0,s.jsx)("th",{className:"time",children:"Date"}),(0,s.jsx)("th",{className:"category",children:"Type"}),(0,s.jsx)("th",{className:"subject",children:"Name"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"time",children:(0,s.jsx)("time",{className:"time-dash",children:"04-09-2023"})}),(0,s.jsx)("td",{className:"category",children:(0,s.jsx)("span",{className:"board-category item",children:"EVENT"})}),(0,s.jsx)("td",{className:"subject",children:(0,s.jsx)("div",{className:"board-subject",children:(0,s.jsxs)("a",{href:"#",children:[(0,s.jsx)("span",{className:"indicate"}),(0,s.jsx)("span",{className:"text",children:"รายการอัพเดทประจำสัปดาห์ วันที่ 19 กันยายน 2566"})]})})})]})})]})})})),o=n(30381);n(14395),o.locale("th");var promotion=e=>{var t,n;let{data:i}=e,a=(0,l.useRouter)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"table-responsive",style:{borderRadius:"8px",height:"600px",overflowX:"auto"},children:(0,s.jsxs)("table",{className:"table align-middle mb-0 w-100",style:{borderRadius:"8px",background:"#000",border:"unset"},children:[(0,s.jsx)("thead",{className:"table-light p-2 text-center",children:(0,s.jsxs)("tr",{className:"p-2 ",children:[(0,s.jsx)("th",{scope:"col",style:{width:"15%"}}),(0,s.jsx)("th",{scope:"col",style:{width:"35%"}}),(0,s.jsx)("th",{scope:"col",style:{width:"1%"}}),(0,s.jsx)("th",{scope:"col",style:{width:"30%"},children:(0,s.jsx)("h4",{children:"โปรโมชั่น"})}),(0,s.jsx)("th",{scope:"col"}),(0,s.jsx)("th",{scope:"col"}),(0,s.jsx)("th",{scope:"col",style:{width:"12%"}})]})}),(0,s.jsx)("tbody",{className:"text-center p-5",children:(null==i?void 0:null===(t=i.data)||void 0===t?void 0:t.promotion)&&(null==i?void 0:null===(n=i.data)||void 0===n?void 0:n.promotion.map((e,t)=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("tr",{onClick:()=>a.push("/product-detail-3?provider=".concat(e.id)),style:{cursor:"pointer"},title:e.text_event2,children:[(0,s.jsxs)("td",{className:" me-2",children:[(0,s.jsx)("i",{className:"fa fa-clock-o",children:" "})," ",(0,s.jsxs)("small",{children:[null==e.strart_date?"ช่วงกิจกรรม":o(e.strart_date).format("ll")," -"]})," ",(0,s.jsx)("br",{}),(0,s.jsx)("small",{children:null==e.end_date?"เปิดแล้ว":o(e.end_date).format("ll")})]}),(0,s.jsx)("td",{children:(0,s.jsx)("small",{className:"text-truncate d-inline-block",style:{fontSize:"13px ",width:"350px"},children:e.text_event2})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{className:"text-success",children:e.name_event}),(0,s.jsx)("td",{style:{width:"1%"}}),(0,s.jsx)("td",{style:{width:"1%"}}),(0,s.jsx)("td",{children:(0,s.jsx)("div",{className:"d-flex gap-2 align-items-center",children:(0,s.jsx)("div",{className:"flex-shrink-0",children:(0,s.jsx)("img",{src:"https://shop-rohan.auto-studios.com".concat(e.img_event_1),width:64,height:64,className:"avatar-xs rounded-circle"})})})})]},t)})))}),(0,s.jsx)("tfoot",{className:"table-light",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{colSpan:6}),(0,s.jsx)("td",{})]})})]})})})},c=n(56080),d=n(67294),h=n(50042),news_all=e=>{let t=(0,l.useRouter)(),[n,i]=(0,d.useState)(!1);(0,d.useEffect)(()=>{let e=(0,h.LP)();e?i(!0):i(!1),data_api()},[]);let data_api=()=>{c.Z.get_data_event().then(e=>{!0==e.data.success&&(getFriendListToCreateSocketRoom(),u({data:e.data.data}))}).catch(e=>{})},getFriendListToCreateSocketRoom=()=>{c.Z.get_data_event().then(e=>{!0==e.data.success&&console.log(e.data.data)}).catch(e=>{})},[o,u]=(0,d.useReducer)((e,t)=>({...e,...t}),{data:[]});return(0,s.jsx)(s.Fragment,{children:n?(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)("div",{className:"tf-section-2 product-detail",children:(0,s.jsx)("div",{className:"themesflat-container",children:(0,s.jsx)("div",{className:"row-",children:(0,s.jsx)("div",{className:"wrapper-content-create",children:(0,s.jsx)("div",{className:"widget-tabs relative",children:(0,s.jsx)("div",{classname:"widget-content-tab mb-5 default",id:"layout",children:(0,s.jsx)("section",{id:"content",children:(0,s.jsx)("div",{id:"board",children:(0,s.jsx)("section",{className:"section board-list",children:(0,s.jsxs)("div",{className:"section-wrap",children:[(0,s.jsxs)("section",{className:"page-header",children:[(0,s.jsxs)("header",{className:"page-info",children:[(0,s.jsxs)("h1",{className:"name me-3",children:[(0,s.jsx)("i",{className:"fa fa-bookmark me-1"}),"notice"==t.query.page&&"อัพเดท"||"event"==t.query.page&&"กิจกรรม"||"promotion"==t.query.page&&"โปรโมชั่น"]}),(0,s.jsx)("aside",{className:"breadcrumbs",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(a(),{href:"/",children:"Home"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{children:"News"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{className:"on",href:"#",children:"notice"==t.query.page&&"อัพเดท"||"event"==t.query.page&&"กิจกรรม"||"promotion"==t.query.page&&"โปรโมชั่น"})})]})})]}),(0,s.jsx)("nav",{className:"page-category-menu",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(a(),{className:"notice"==t.query.page?"on":"off",href:"/news-all?page=notice",children:"อัพเดท"})}),(0,s.jsx)("li",{children:(0,s.jsx)(a(),{className:"event"==t.query.page?"on":"off",href:"/news-all?page=event",children:"กิจกรรม"})}),(0,s.jsx)("li",{children:(0,s.jsx)(a(),{className:"promotion"==t.query.page?"on":"off",href:"/news-all?page=promotion",children:"โปรโมชั่น"})})]})})]}),(0,s.jsx)("br",{}),"notice"==t.query.page&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(notice,{})}),"event"==t.query.page&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(News_event,{})}),"promotion"==t.query.page&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(promotion,{data:o})})]})})})})})})})})})})]}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.Z,{children:(0,s.jsx)("div",{className:"tf-section-2 product-detail",children:(0,s.jsx)("div",{className:"themesflat-container",children:(0,s.jsx)("div",{className:"row-",children:(0,s.jsx)("div",{className:"wrapper-content-create",children:(0,s.jsx)("div",{className:"widget-tabs relative",children:(0,s.jsx)("div",{classname:"widget-content-tab mb-5 default",id:"layout",children:(0,s.jsx)("section",{id:"content",children:(0,s.jsx)("div",{id:"board",children:(0,s.jsx)("section",{className:"section board-list",children:(0,s.jsxs)("div",{className:"section-wrap",children:[(0,s.jsxs)("section",{className:"page-header",children:[(0,s.jsxs)("header",{className:"page-info",children:[(0,s.jsxs)("h1",{className:"name me-3",children:[(0,s.jsx)("i",{className:"fa fa-bookmark me-1"}),"notice"==t.query.page&&"อัพเดท"||"event"==t.query.page&&"กิจกรรม"||"promotion"==t.query.page&&"โปรโมชั่น"]}),(0,s.jsx)("aside",{className:"breadcrumbs",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(a(),{href:"/",children:"Home"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{children:"News"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{className:"on",href:"#",children:"notice"==t.query.page&&"อัพเดท"||"event"==t.query.page&&"กิจกรรม"||"promotion"==t.query.page&&"โปรโมชั่น"})})]})})]}),(0,s.jsx)("nav",{className:"page-category-menu",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(a(),{className:"notice"==t.query.page?"on":"off",href:"/news-all?page=notice",children:"อัพเดท"})}),(0,s.jsx)("li",{children:(0,s.jsx)(a(),{className:"event"==t.query.page?"on":"off",href:"/news-all?page=event",children:"กิจกรรม"})}),(0,s.jsx)("li",{children:(0,s.jsx)(a(),{className:"promotion"==t.query.page?"on":"off",href:"/news-all?page=promotion",children:"โปรโมชั่น"})})]})})]}),(0,s.jsx)("br",{}),"notice"==t.query.page&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(notice,{})}),"event"==t.query.page&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(News_event,{})}),"promotion"==t.query.page&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(promotion,{data:o})})]})})})})})})})})})})})})})}},65541:function(){(function(){var e,t,n,s,i,bind=function(e,t){return function(){return e.apply(t,arguments)}},a=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return -1};t=function(){function Util(){}return Util.prototype.extend=function(e,t){var n,s;for(n in t)s=t[n],null==e[n]&&(e[n]=s);return e},Util.prototype.isMobile=function(e){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)},Util.prototype.createEvent=function(e,t,n,s){var i;return null==t&&(t=!1),null==n&&(n=!1),null==s&&(s=null),null!=document.createEvent?(i=document.createEvent("CustomEvent")).initCustomEvent(e,t,n,s):null!=document.createEventObject?(i=document.createEventObject()).eventType=e:i.eventName=e,i},Util.prototype.emitEvent=function(e,t){return null!=e.dispatchEvent?e.dispatchEvent(t):t in(null!=e)?e[t]():"on"+t in(null!=e)?e["on"+t]():void 0},Util.prototype.addEvent=function(e,t,n){return null!=e.addEventListener?e.addEventListener(t,n,!1):null!=e.attachEvent?e.attachEvent("on"+t,n):e[t]=n},Util.prototype.removeEvent=function(e,t,n){return null!=e.removeEventListener?e.removeEventListener(t,n,!1):null!=e.detachEvent?e.detachEvent("on"+t,n):delete e[t]},Util.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},Util}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function WeakMap(){this.keys=[],this.values=[]}return WeakMap.prototype.get=function(e){var t,n,s,i;for(i=this.keys,t=n=0,s=i.length;n<s;t=++n)if(i[t]===e)return this.values[t]},WeakMap.prototype.set=function(e,t){var n,s,i,a;for(a=this.keys,n=s=0,i=a.length;s<i;n=++s)if(a[n]===e){this.values[n]=t;return}return this.keys.push(e),this.values.push(t)},WeakMap}()),e=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(e=function(){function MutationObserver(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return MutationObserver.notSupported=!0,MutationObserver.prototype.observe=function(){},MutationObserver}()),s=this.getComputedStyle||function(e,t){return this.getPropertyValue=function(t){var n;return"float"===t&&(t="styleFloat"),i.test(t)&&t.replace(i,function(e,t){return t.toUpperCase()}),(null!=(n=e.currentStyle)?n[t]:void 0)||null},this},i=/(\-([a-z]){1})/g,this.WOW=function(){function WOW(e){null==e&&(e={}),this.scrollCallback=bind(this.scrollCallback,this),this.scrollHandler=bind(this.scrollHandler,this),this.resetAnimation=bind(this.resetAnimation,this),this.start=bind(this.start,this),this.scrolled=!0,this.config=this.util().extend(e,this.defaults),null!=e.scrollContainer&&(this.config.scrollContainer=document.querySelector(e.scrollContainer)),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return WOW.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},WOW.prototype.init=function(){var e;return this.element=window.document.documentElement,"interactive"===(e=document.readyState)||"complete"===e?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},WOW.prototype.start=function(){var t,n,s,i,a;if(this.stopped=!1,this.boxes=(function(){var e,n,s,i;for(e=0,s=this.element.querySelectorAll("."+this.config.boxClass),i=[],n=s.length;e<n;e++)t=s[e],i.push(t);return i}).call(this),this.all=(function(){var e,n,s,i;for(e=0,s=this.boxes,i=[],n=s.length;e<n;e++)t=s[e],i.push(t);return i}).call(this),this.boxes.length){if(this.disabled())this.resetStyle();else for(n=0,s=(i=this.boxes).length;n<s;n++)t=i[n],this.applyStyle(t,!0)}if(this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live)return new e((a=this,function(e){var t,n,s,i,r;for(t=0,r=[],n=e.length;t<n;t++)i=e[t],r.push((function(){var e,t,n,a;for(e=0,n=i.addedNodes||[],a=[],t=n.length;e<t;e++)s=n[e],a.push(this.doSync(s));return a}).call(a));return r})).observe(document.body,{childList:!0,subtree:!0})},WOW.prototype.stop=function(){if(this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval)return clearInterval(this.interval)},WOW.prototype.sync=function(t){if(e.notSupported)return this.doSync(this.element)},WOW.prototype.doSync=function(e){var t,n,s,i,r;if(null==e&&(e=this.element),1===e.nodeType){for(n=0,i=(e=e.parentNode||e).querySelectorAll("."+this.config.boxClass),r=[],s=i.length;n<s;n++)t=i[n],0>a.call(this.all,t)?(this.boxes.push(t),this.all.push(t),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(t,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},WOW.prototype.show=function(e){return this.applyStyle(e),e.className=e.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(e),this.util().emitEvent(e,this.wowEvent),this.util().addEvent(e,"animationend",this.resetAnimation),this.util().addEvent(e,"oanimationend",this.resetAnimation),this.util().addEvent(e,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(e,"MSAnimationEnd",this.resetAnimation),e},WOW.prototype.applyStyle=function(e,t){var n,s,i,a;return s=e.getAttribute("data-wow-duration"),n=e.getAttribute("data-wow-delay"),i=e.getAttribute("data-wow-iteration"),this.animate((a=this,function(){return a.customStyle(e,t,s,n,i)}))},WOW.prototype.animate="requestAnimationFrame"in window?function(e){return window.requestAnimationFrame(e)}:function(e){return e()},WOW.prototype.resetStyle=function(){var e,t,n,s,i;for(t=0,s=this.boxes,i=[],n=s.length;t<n;t++)e=s[t],i.push(e.style.visibility="visible");return i},WOW.prototype.resetAnimation=function(e){var t;if(e.type.toLowerCase().indexOf("animationend")>=0)return(t=e.target||e.srcElement).className=t.className.replace(this.config.animateClass,"").trim()},WOW.prototype.customStyle=function(e,t,n,s,i){return t&&this.cacheAnimationName(e),e.style.visibility=t?"hidden":"visible",n&&this.vendorSet(e.style,{animationDuration:n}),s&&this.vendorSet(e.style,{animationDelay:s}),i&&this.vendorSet(e.style,{animationIterationCount:i}),this.vendorSet(e.style,{animationName:t?"none":this.cachedAnimationName(e)}),e},WOW.prototype.vendors=["moz","webkit"],WOW.prototype.vendorSet=function(e,t){var n,s,i,a;for(n in s=[],t)i=t[n],e[""+n]=i,s.push((function(){var t,s,r,l;for(t=0,r=this.vendors,l=[],s=r.length;t<s;t++)a=r[t],l.push(e[""+a+n.charAt(0).toUpperCase()+n.substr(1)]=i);return l}).call(this));return s},WOW.prototype.vendorCSS=function(e,t){var n,i,a,r,l,o;for(n=0,r=(l=s(e)).getPropertyCSSValue(t),i=(a=this.vendors).length;n<i;n++)o=a[n],r=r||l.getPropertyCSSValue("-"+o+"-"+t);return r},WOW.prototype.animationName=function(e){var t;try{t=this.vendorCSS(e,"animation-name").cssText}catch(n){t=s(e).getPropertyValue("animation-name")}return"none"===t?"":t},WOW.prototype.cacheAnimationName=function(e){return this.animationNameCache.set(e,this.animationName(e))},WOW.prototype.cachedAnimationName=function(e){return this.animationNameCache.get(e)},WOW.prototype.scrollHandler=function(){return this.scrolled=!0},WOW.prototype.scrollCallback=function(){var e;if(this.scrolled&&(this.scrolled=!1,this.boxes=(function(){var t,n,s,i;for(t=0,s=this.boxes,i=[],n=s.length;t<n;t++)if(e=s[t]){if(this.isVisible(e)){this.show(e);continue}i.push(e)}return i}).call(this),!(this.boxes.length||this.config.live)))return this.stop()},WOW.prototype.offsetTop=function(e){for(var t;void 0===e.offsetTop;)e=e.parentNode;for(t=e.offsetTop;e=e.offsetParent;)t+=e.offsetTop;return t},WOW.prototype.isVisible=function(e){var t,n,s,i,a;return n=e.getAttribute("data-wow-offset")||this.config.offset,i=(a=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset)+Math.min(this.element.clientHeight,this.util().innerHeight())-n,t=(s=this.offsetTop(e))+e.clientHeight,s<=i&&t>=a},WOW.prototype.util=function(){return null!=this._util?this._util:this._util=new t},WOW.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},WOW}()}).call(this)}},function(e){e.O(0,[1450,4885,5121,1664,510,5265,4460,9774,2888,179],function(){return e(e.s=96907)}),_N_E=e.O()}]);