(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3862],{94184:function(e,t){var a;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var i=classNames.apply(null,a);i&&e.push(i)}}else if("object"===o){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):void 0!==(a=(function(){return classNames}).apply(t,[]))&&(e.exports=a)}()},82844:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/comfrimemail",function(){return a(52583)}])},50042:function(e,t,a){"use strict";a.d(t,{LP:function(){return getToken},VN:function(){return getUserID},YR:function(){return authenticate},jl:function(){return isLoggedIn},kS:function(){return logout},lz:function(){return getTokens}});let authenticate=(e,t)=>{"undefiend"!==window&&(localStorage.setItem("token",JSON.stringify(e.token)),localStorage.setItem("user",JSON.stringify(e.userInfo)))},getTokens=()=>{if("undefiend"!==window)return!!localStorage.getItem("token")&&JSON.parse(localStorage.getItem("token"))},getToken=()=>{if("undefiend"!==window)return!!localStorage.getItem("token")&&JSON.parse(localStorage.getItem("token"))},isLoggedIn=()=>!!getToken(),getUserID=()=>localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):[],logout=()=>{"undefiend"!==window&&(localStorage.removeItem("accessToken"),localStorage.removeItem("user"),localStorage.removeItem("items"),localStorage.removeItem("token"),localStorage.removeItem("users"),localStorage.removeItem("user_id"),localStorage.removeItem("isLogin"))}},60471:function(e,t,a){"use strict";a.d(t,{O:function(){return setAuthorizationToken}});var n=a(5121),o=a(50042);let setAuthorizationToken=async()=>{n.Z.interceptors.request.use(e=>(e.headers.Authorization="Bearer ".concat((0,o.lz)()),e.headers.Aurhtokenserver="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibTg4YW1id2luIiwiZW1haWwiOiJtODhhbWJ3aW5AZ21haWwuY29tIiwidXNlcl90eXBlIjoic2VydmVyIiwidXNlcl9kZXZpY2VfaWQiOiJoYXdrc2V5ZSIsImlhdCI6MTY5NzA5Nzc4OSwiZXhwIjoxNzI4NjMzNzg5fQ.J3MTRADmloFok3cNlqIXE45H9YluPL1o7eMfPB4f7PE",e),e=>Promise.reject(e))}},6840:function(e,t){"use strict";t.Z={apiURL:"https://shop-rohan.auto-studios.com",webURL:"https://wwww.playrohan.in.th",version:"0.1.0",copyrights:"Rohan Thailand Classic (Private)",name:"R.O.H.A.N. : Blood",ogimage:"/images/web/85.png",favicon:"bloodicon1.ico"}},23362:function(e,t,a){"use strict";var n=a(5121),o=a(6840),i=a(60471),s=a(50042);(0,i.O)(),t.Z={getProfile:async()=>{let e={method:"get",url:"".concat(o.Z.apiURL,"/api/v3/user/memberinfo"),headers:{"Content-Type":"application/json"}};return await (0,n.Z)(e)},itemmalldata:async e=>{let t={method:"get",url:"".concat(o.Z.apiURL,"/api/v3/itemshop/getdataitemmall"),headers:{"Content-Type":"application/json"}};return await (0,n.Z)(t)},getdata_frompay:async e=>{let t={method:"get",url:"".concat(o.Z.apiURL,"/api/v3/user/getdata_frompay"),headers:{"Content-Type":"application/json"}};return await (0,n.Z)(t)},getdataconjob:async e=>{let t={method:"get",url:"".concat(o.Z.apiURL,"/api/v3/user/cron_jobrefill"),headers:{"Content-Type":"application/json"}};return await (0,n.Z)(t)},getdata_download:async e=>{let t={method:"get",url:"".concat(o.Z.apiURL,"/api/v3/user/data_download"),headers:{"Content-Type":"application/json"}};return await (0,n.Z)(t)},addmyitemmalllist:async e=>{let t={method:"post",url:"".concat(o.Z.apiURL,"/api/v3/itemshop/addmyitemmalllist"),headers:{"Content-Type":"application/json"},data:e};return await (0,n.Z)(t)},infoFriend:async e=>{let t=(0,s.LP)();console.log(t);let a={method:"post",url:"".concat(o.Z.apiURL,"/api/v3/user/friendinfo"),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},data:e};return await (0,n.Z)(a)},req_qrcodepays:async e=>{let t={method:"post",url:"".concat(o.Z.apiURL,"/api/v3/user/req_qrcodepay"),headers:{"Content-Type":"application/json"},data:e};return await (0,n.Z)(t)},buy_items:async e=>{let t={method:"post",url:"".concat(o.Z.apiURL,"/api/v3/itemshop/buy_items"),headers:{"Content-Type":"application/json"},data:e};return await (0,n.Z)(t)},gifitem_Mail:async e=>{let t={method:"post",url:"".concat(o.Z.apiURL,"/api/v3/user/gifitem"),headers:{"Content-Type":"application/json"},data:e};return await (0,n.Z)(t)},chackCharacte_past:async e=>{let t={method:"post",url:"".concat(o.Z.apiURL,"/api/v3/user/chackCharacte_past"),headers:{"Content-Type":"application/json"},data:e};return await (0,n.Z)(t)},chacklogin:async()=>{let e={method:"get",url:"".concat(o.Z.apiURL,"/api/v3/user/chacklogin"),headers:{"Content-Type":"application/json"}};return await (0,n.Z)(e)},getdataemshop:async()=>{let e={method:"get",url:"".concat(o.Z.apiURL,"/api/v3/user/getdataemshop"),headers:{"Content-Type":"application/json"}};return await (0,n.Z)(e)},getdata_em_anduserinfo:async()=>{let e={method:"get",url:"".concat(o.Z.apiURL,"/api/v3/user/get_myemshop"),headers:{"Content-Type":"application/json"}};return await (0,n.Z)(e)},postcancel_em_anduserinfo:async e=>{let t={method:"post",url:"".concat(o.Z.apiURL,"/api/v3/user/postcancel_em_anduserinfo"),headers:{"Content-Type":"application/json"},data:e};return await (0,n.Z)(t)},postSell_em_anduserinfo:async e=>{let t={method:"post",url:"".concat(o.Z.apiURL,"/api/v3/user/postSell_em_anduserinfo"),headers:{"Content-Type":"application/json"},data:e};return await (0,n.Z)(t)},changname:async e=>{let t={method:"post",url:"".concat(o.Z.apiURL,"/api/v3/user/cangname"),headers:{"Content-Type":"application/json"},data:e};return await (0,n.Z)(t)},tranfer_point:async e=>{let t={method:"post",url:"".concat(o.Z.apiURL,"/api/v3/user/tranfer_point"),headers:{"Content-Type":"application/json"},data:e};return await (0,n.Z)(t)},gettranfer_point:async()=>{let e={method:"get",url:"".concat(o.Z.apiURL,"/api/v3/user/gettranfer_point"),headers:{"Content-Type":"application/json"}};return await (0,n.Z)(e)},post_appitemcodes:async e=>{let t={method:"post",url:"".concat(o.Z.apiURL,"/api/v3/user/post_appitemcode"),headers:{"Content-Type":"application/json"},data:e};return await (0,n.Z)(t)},post_appitemcodesv1:async e=>{let t={method:"post",url:"".concat(o.Z.apiURL,"/api/v3/user/post_appitemcode"),headers:{"Content-Type":"application/json"},data:e};return await (0,n.Z)(t)},getdata_itemcode:async()=>{let e={method:"get",url:"".concat(o.Z.apiURL,"/api/v3/user/post_appitemcode"),headers:{"Content-Type":"application/json"}};return await (0,n.Z)(e)}}},52583:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Home}});var n=a(85893),o=a(41664),i=a.n(o),s=a(83017),r=a(67294),c=a(11163),l=a(23362),p=a(8239);function Home(){let e=(0,c.useRouter)(),[t,a]=(0,r.useState)(""),[o,u]=(0,r.useState)(!1),postgiveitem=()=>{u(!0);let t={userID:e.query.id};l.Z.gifitem_Mail(t).then(function(t){!0==t.data.success&&(a(t.data.message),u(!1),setTimeout(function(){e.push("/")},3500))}).catch(function(e){console.error(e)})};return(0,n.jsxs)(n.Fragment,{children:[o&&(0,n.jsx)(n.Fragment,{children:s.Z}),(0,n.jsx)("div",{id:"wrapper",children:(0,n.jsx)("div",{id:"page",children:(0,n.jsxs)("div",{className:"section-single-page Maintenance",children:[(0,n.jsx)(i(),{href:"/",children:(0,n.jsx)("img",{src:"/assets/images/logo/logo.png",alt:""})}),(0,n.jsxs)("div",{className:"content",children:[(0,n.jsx)("div",{className:"widget-bg-line",children:(0,n.jsxs)("div",{className:"wraper",children:[(0,n.jsx)("div",{className:"bg-grid-line y top",children:(0,n.jsx)("div",{className:"bg-line"})}),(0,n.jsx)("div",{className:"bg-grid-line x left",children:(0,n.jsx)("div",{className:"bg-line"})}),(0,n.jsx)("div",{className:"bg-grid-line y bottom",children:(0,n.jsx)("div",{className:"bg-line"})}),(0,n.jsx)("div",{className:"bg-grid-line x right",children:(0,n.jsx)("div",{className:"bg-line"})})]})}),(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("div",{className:"col-6 mx-auto",children:[t&&(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)(p.Z,{className:"alert fade show alert-dismissible alert-solid-success",color:"",variant:"success",children:(0,n.jsxs)("h5",{className:"text-center my-5",children:[" ",t]})})," "]})})," "]})})}),(0,n.jsx)("h1",{children:"รับไอเทม กิจกรรม"}),(0,n.jsx)("p",{children:"*** กรุณากดรับไอเทม"}),(0,n.jsx)("div",{className:"box-button d-flex justify-content-center",children:(0,n.jsxs)(i(),{href:"#",className:"tf-button style-1 h50",onClick:()=>postgiveitem(),children:["กดรับของรางวัล",(0,n.jsx)("i",{className:"icon-arrow-up-right2"})]})})]}),(0,n.jsx)("div",{className:"widget-social",children:(0,n.jsxs)("ul",{className:"flex justify-center",children:[(0,n.jsx)("li",{children:(0,n.jsx)(i(),{href:"#",className:"icon-facebook"})}),(0,n.jsx)("li",{children:(0,n.jsx)(i(),{href:"#",className:"icon-twitter"})}),(0,n.jsx)("li",{children:(0,n.jsx)(i(),{href:"#",className:"icon-vt"})}),(0,n.jsx)("li",{children:(0,n.jsx)(i(),{href:"#",className:"icon-tiktok"})}),(0,n.jsx)("li",{children:(0,n.jsx)(i(),{href:"#",className:"icon-youtube"})})]})})]})})})]})}},87462:function(e,t,a){"use strict";function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,{Z:function(){return _extends}})},63366:function(e,t,a){"use strict";function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}a.d(t,{Z:function(){return _objectWithoutPropertiesLoose}})},89611:function(e,t,a){"use strict";function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}a.d(t,{Z:function(){return _setPrototypeOf}})}},function(e){e.O(0,[5121,1664,8239,9774,2888,179],function(){return e(e.s=82844)}),_N_E=e.O()}]);