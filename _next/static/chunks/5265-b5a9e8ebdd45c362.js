"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5265],{50042:function(e,t,a){a.d(t,{LP:function(){return getToken},VI:function(){return getMyIcon},VN:function(){return getUserID},WU:function(){return o},YR:function(){return authenticate},jl:function(){return isLoggedIn},kS:function(){return logout},lz:function(){return getTokens}});let o={saveToken:(e,t,a)=>{setToken(t),setIsLogin(a),setUserID(e.id),setDatauser(e.login_id)},saveItem:(e,t,a)=>{setItemMall({data:{name:e,price:t,total:a}})},saveIcon:e=>{setIcon(e)},getItemMall:()=>getItemMall(),getToken:()=>getToken(),getIcon:()=>getIcon(),getIsLogin:()=>getIsLogin(),getUserID:()=>getUserID(),getName:()=>getName(),storeName:e=>storeName(e),getEmail:()=>getEmail(),storeEmail:e=>storeEmail(e),getProfilePhoto:()=>getProfilePhoto(),isLoggedIn:()=>!!getTokens(),clearStorage:()=>localStorage.clear()},setToken=e=>{localStorage.setItem("accessToken",e)},setIcon=e=>{localStorage.setItem("myIcon",e)},setIsLogin=e=>{localStorage.setItem("isLogin",e)},setDatauser=e=>{localStorage.setItem("users",e)},setItemMall=e=>{localStorage.setItem("dataitemmall",JSON.stringify(e))},authenticate=(e,t)=>{"undefiend"!==window&&(localStorage.setItem("token",JSON.stringify(e.token)),localStorage.setItem("user",JSON.stringify(e.userInfo)))},getTokens=()=>{if("undefiend"!==window)return!!localStorage.getItem("token")&&JSON.parse(localStorage.getItem("token"))},getToken=()=>{if("undefiend"!==window)return!!localStorage.getItem("token")&&JSON.parse(localStorage.getItem("token"))},getMyIcon=()=>localStorage.getItem("myIcon"),getIsLogin=()=>localStorage.getItem("isLogin"),getItemMall=()=>localStorage.getItem("cart"),isLoggedIn=()=>!!getToken(),setUserID=e=>{localStorage.setItem("user_id",e)},getUserID=()=>localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):[],storeName=e=>{localStorage.setItem("name",e)},getName=()=>{let e=localStorage.getItem("userData");return(e=JSON.parse(e))?e.name:e},storeEmail=e=>{localStorage.setItem("email",e)},getEmail=()=>localStorage.getItem("email"),getProfilePhoto=()=>{let e=localStorage.getItem("userData");return(e=JSON.parse(e))?e.avatar_image:e},logout=()=>{"undefiend"!==window&&(localStorage.removeItem("accessToken"),localStorage.removeItem("user"),localStorage.removeItem("items"),localStorage.removeItem("token"),localStorage.removeItem("users"),localStorage.removeItem("user_id"),localStorage.removeItem("isLogin"))}},75265:function(e,t,a){a.d(t,{Z:function(){return layout_PageHead}});var o=a(85893),n=a(9008),i=a.n(n),s=a(67294),l=a(6840),r=a(84996),c=a(70302),d=a(11163);a(23362),a(16310);var Friends_info=e=>((0,s.useEffect)(()=>{},[]),null==e||e.friend_info,(0,o.jsx)(o.Fragment,{children:(null==e?void 0:e.friend_info)&&(null==e?void 0:e.friend_info.map((e,t)=>(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"container container2 darker",id:"demo",children:[(0,o.jsx)("img",{src:"/assets/images/GoldenMonkey.jpg",alt:"Avatar",style:{width:"100%"}}),(0,o.jsx)("p",{className:"text-name",children:e.name})," ",(0,o.jsx)("img",{src:"/assets/icon/online.gif",width:10,height:10,style:{maxWidth:"10px"},className:"right",alt:""}),(0,o.jsx)("span",{className:"time-left d-block mt-2",children:"ออนไลน์"})]},t)})))})),p=a(50042),layout_PageHead=e=>{var t,a,n,m,u,g,h,f,y,v,I,j,Z,w;let{headTitle:_,userInfo:S}=e,[k,x]=(0,s.useState)(!1),CheckX1=()=>x(!1),CheckY2=()=>x(!0);(0,s.useEffect)(()=>{(0,p.jl)()?CheckY2():CheckX1()},[]);let N=(0,d.useRouter)(),[T,L]=(0,s.useState)(!1),closePopup=()=>L(!1),openPopup=()=>L(!0);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i(),{children:[(0,o.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),(0,o.jsx)("title",{children:_?"".concat(_," - การผจญถัยครั้งใหม่ และตำนานสงครามแห่งโรฮาน"):"".concat("/member"==N.pathname?"ระบบสมาชิก":"".concat(l.Z.name)," - การผจญถัยครั้งใหม่ และตำนานสงครามแห่งโรฮาน")})]}),(0,o.jsx)("div",{className:"linebtn fxline logined",style:{opacity:"".concat(T?0:1)},id:"myForm".concat(k?"-open":"-close"),children:(0,o.jsx)("div",{className:"box-friend",children:(0,o.jsx)("button",{type:"button",onClick:()=>openPopup(),className:"btn btn-primary",children:(0,o.jsxs)("span",{children:[(0,o.jsx)("img",{width:16,height:16,src:"/assets/icon/online.gif",alt:""})," ","เพื่อนทั้งหมด  (",(null==S?void 0:null===(a=S.data)||void 0===a?void 0:null===(t=a.friend)||void 0===t?void 0:t.length)>0&&(null==S?void 0:null===(m=S.data)||void 0===m?void 0:null===(n=m.friend[0])||void 0===n?void 0:n.length),")"]})})})}),(0,o.jsx)("div",{className:"clearfix"}),(0,o.jsx)("div",{className:"form-popup  ".concat(T?"open":""),id:"myForm".concat(k?"-open":"-close"),style:{opacity:"".concat(T?1:0)},children:(0,o.jsxs)("div",{className:"form-container",children:[(0,o.jsx)("span",{type:"button",className:!0,style:{position:"relative",cursor:"pointer",color:"#000",float:"right"},children:(0,o.jsx)("i",{className:"fa fa-remove",onClick:()=>closePopup(),style:{fontSize:"15px"}})}),(0,o.jsx)("span",{type:"button",className:!0,style:{position:"relative",color:"#005ca1",float:"left"},children:(0,o.jsx)("h6",{children:"เพื่อนที่กำลังออนไลน์"})}),(0,o.jsx)("div",{className:"clearfix"}),(0,o.jsx)("hr",{style:{marginBottom:"0px"}}),(0,o.jsxs)("ul",{id:"myUL",style:{padding:0,height:380,overflowX:"auto"},children:[(null==S?void 0:null===(g=S.data)||void 0===g?void 0:null===(u=g.friend)||void 0===u?void 0:u.length)>0&&(null==S?void 0:null===(f=S.data)||void 0===f?void 0:null===(h=f.friend[0])||void 0===h?void 0:h.map((e,t)=>(0,o.jsx)(o.Fragment,{children:e.name}))),(0,o.jsx)(Friends_info,{friend_info:(null==S?void 0:null===(v=S.data)||void 0===v?void 0:null===(y=v.friend)||void 0===y?void 0:y.length)>0&&(null==S?void 0:null===(I=S.data)||void 0===I?void 0:I.friend[0])})]}),(0,o.jsx)("hr",{style:{marginBottom:"0px"}}),(0,o.jsx)("div",{className:"badge-",children:(0,o.jsx)(r.Z.Ribbon,{text:"๐ กำลังออนไลน์ (".concat((null==S?void 0:null===(Z=S.data)||void 0===Z?void 0:null===(j=Z.friend)||void 0===j?void 0:j.length)>0&&(null==S?void 0:null===(w=S.data)||void 0===w?void 0:w.friend[0].length),")"),children:(0,o.jsx)(c.Z,{size:"small"})})})]})})]})}},60471:function(e,t,a){a.d(t,{O:function(){return setAuthorizationToken}});var o=a(5121),n=a(50042);let setAuthorizationToken=async()=>{o.Z.interceptors.request.use(e=>(e.headers.Authorization="Bearer ".concat((0,n.lz)()),e.headers.Aurhtokenserver="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibTg4YW1id2luIiwiZW1haWwiOiJtODhhbWJ3aW5AZ21haWwuY29tIiwidXNlcl90eXBlIjoic2VydmVyIiwidXNlcl9kZXZpY2VfaWQiOiJoYXdrc2V5ZSIsImlhdCI6MTY5NzA5Nzc4OSwiZXhwIjoxNzI4NjMzNzg5fQ.J3MTRADmloFok3cNlqIXE45H9YluPL1o7eMfPB4f7PE",e),e=>Promise.reject(e))}},6840:function(e,t){t.Z={apiURL:"https://shop-rohan.auto-studios.com",webURL:"https://wwww.playrohan.in.th",version:"0.1.0",copyrights:"Rohan Thailand Classic (Private)",name:"R.O.H.A.N. : Blood",ogimage:"/images/web/85.png",favicon:"bloodicon1.ico"}},23362:function(e,t,a){var o=a(5121),n=a(6840),i=a(60471),s=a(50042);(0,i.O)(),t.Z={getProfile:async()=>{let e={method:"get",url:"".concat(n.Z.apiURL,"/api/v3/user/memberinfo"),headers:{"Content-Type":"application/json"}};return await (0,o.Z)(e)},itemmalldata:async e=>{let t={method:"get",url:"".concat(n.Z.apiURL,"/api/v3/itemshop/getdataitemmall"),headers:{"Content-Type":"application/json"}};return await (0,o.Z)(t)},getdata_frompay:async e=>{let t={method:"get",url:"".concat(n.Z.apiURL,"/api/v3/user/getdata_frompay"),headers:{"Content-Type":"application/json"}};return await (0,o.Z)(t)},getdataconjob:async e=>{let t={method:"get",url:"".concat(n.Z.apiURL,"/api/v3/user/cron_jobrefill"),headers:{"Content-Type":"application/json"}};return await (0,o.Z)(t)},getdata_download:async e=>{let t={method:"get",url:"".concat(n.Z.apiURL,"/api/v3/user/data_download"),headers:{"Content-Type":"application/json"}};return await (0,o.Z)(t)},addmyitemmalllist:async e=>{let t={method:"post",url:"".concat(n.Z.apiURL,"/api/v3/itemshop/addmyitemmalllist"),headers:{"Content-Type":"application/json"},data:e};return await (0,o.Z)(t)},infoFriend:async e=>{let t=(0,s.LP)();console.log(t);let a={method:"post",url:"".concat(n.Z.apiURL,"/api/v3/user/friendinfo"),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},data:e};return await (0,o.Z)(a)},req_qrcodepays:async e=>{let t={method:"post",url:"".concat(n.Z.apiURL,"/api/v3/user/req_qrcodepay"),headers:{"Content-Type":"application/json"},data:e};return await (0,o.Z)(t)},buy_items:async e=>{let t={method:"post",url:"".concat(n.Z.apiURL,"/api/v3/itemshop/buy_items"),headers:{"Content-Type":"application/json"},data:e};return await (0,o.Z)(t)},gifitem_Mail:async e=>{let t={method:"post",url:"".concat(n.Z.apiURL,"/api/v3/user/gifitem"),headers:{"Content-Type":"application/json"},data:e};return await (0,o.Z)(t)},chackCharacte_past:async e=>{let t={method:"post",url:"".concat(n.Z.apiURL,"/api/v3/user/chackCharacte_past"),headers:{"Content-Type":"application/json"},data:e};return await (0,o.Z)(t)},chacklogin:async()=>{let e={method:"get",url:"".concat(n.Z.apiURL,"/api/v3/user/chacklogin"),headers:{"Content-Type":"application/json"}};return await (0,o.Z)(e)},getdataemshop:async()=>{let e={method:"get",url:"".concat(n.Z.apiURL,"/api/v3/user/getdataemshop"),headers:{"Content-Type":"application/json"}};return await (0,o.Z)(e)},getdata_em_anduserinfo:async()=>{let e={method:"get",url:"".concat(n.Z.apiURL,"/api/v3/user/get_myemshop"),headers:{"Content-Type":"application/json"}};return await (0,o.Z)(e)},postcancel_em_anduserinfo:async e=>{let t={method:"post",url:"".concat(n.Z.apiURL,"/api/v3/user/postcancel_em_anduserinfo"),headers:{"Content-Type":"application/json"},data:e};return await (0,o.Z)(t)},postSell_em_anduserinfo:async e=>{let t={method:"post",url:"".concat(n.Z.apiURL,"/api/v3/user/postSell_em_anduserinfo"),headers:{"Content-Type":"application/json"},data:e};return await (0,o.Z)(t)},changname:async e=>{let t={method:"post",url:"".concat(n.Z.apiURL,"/api/v3/user/cangname"),headers:{"Content-Type":"application/json"},data:e};return await (0,o.Z)(t)},tranfer_point:async e=>{let t={method:"post",url:"".concat(n.Z.apiURL,"/api/v3/user/tranfer_point"),headers:{"Content-Type":"application/json"},data:e};return await (0,o.Z)(t)},gettranfer_point:async()=>{let e={method:"get",url:"".concat(n.Z.apiURL,"/api/v3/user/gettranfer_point"),headers:{"Content-Type":"application/json"}};return await (0,o.Z)(e)},post_appitemcodes:async e=>{let t={method:"post",url:"".concat(n.Z.apiURL,"/api/v3/user/post_appitemcode"),headers:{"Content-Type":"application/json"},data:e};return await (0,o.Z)(t)},post_appitemcodesv1:async e=>{let t={method:"post",url:"".concat(n.Z.apiURL,"/api/v3/user/post_appitemcode"),headers:{"Content-Type":"application/json"},data:e};return await (0,o.Z)(t)},get_dataitemcodes:async()=>{let e={method:"get",url:"".concat(n.Z.apiURL,"/api/v3/user/get_data_itemcode"),headers:{"Content-Type":"application/json"}};return await (0,o.Z)(e)},get_data_logindaily:async()=>{let e={method:"get",url:"".concat(n.Z.apiURL,"/api/v3/user/get_data_logindayly"),headers:{"Content-Type":"application/json"}};return await (0,o.Z)(e)}}}}]);