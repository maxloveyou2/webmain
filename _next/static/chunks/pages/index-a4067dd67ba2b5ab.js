(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{75557:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(87067)}])},60109:function(e,s,a){"use strict";a.d(s,{W:function(){return c}});var n=a(53920),i=a(6840);let t=i.Z.apiURL,c=(0,n.ZP)(t)},87067:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return pages_Home}});var n=a(85893),i=a(67294),t=a(34460);a(42770),a(95553),a(77943),a(16963),a(60650),a(87836);var c=a(71593),l=a(56080);a(41664),a(98130),a(17857);var o=a(60109),r=a(23362);a(20658),a(9232);var d=a(11163),h=a(50042),m=a(30381);a(14395),m.locale("th");var Home=e=>{var s,a,t;let c=(0,d.useRouter)();(0,i.useEffect)(()=>{getdata_download()},[]);let getdata_download=()=>{r.Z.getdata_download().then(e=>{!0==e.data.success&&x({data:e.data.data[0]})}).catch(e=>{})},[o,x]=(0,i.useState)({data:[]}),[j,p]=(0,i.useState)(0),[u,f]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=(0,h.LP)();e?f(!0):f(!1),data_api()},[]);let data_api=()=>{l.Z.get_data_event().then(e=>{!0==e.data.success&&(getFriendListToCreateSocketRoom(),N({data:e.data.data}))}).catch(e=>{})},getFriendListToCreateSocketRoom=()=>{l.Z.get_data_event().then(e=>{!0==e.data.success&&console.log(e.data.data)}).catch(e=>{})},[v,N]=(0,i.useReducer)((e,s)=>({...e,...s}),{data:[]});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"section  ",id:"section0",children:[(0,n.jsxs)("div",{className:"bgVideoContainer",children:[(0,n.jsx)("div",{className:"bgRepeat"}),(0,n.jsx)("div",{className:"bgShadow"})]}),(0,n.jsx)("div",{className:"intro",children:(0,n.jsxs)("div",{className:"element",children:[(0,n.jsx)("div",{className:"button_download",children:(0,n.jsx)("a",{href:"#download",onClick:()=>{var e;return window.open(null==o?void 0:null===(e=o.data)||void 0===e?void 0:e.link)},children:(0,n.jsx)("img",{src:"/assets/images/gamedownload.png",name:"button_download",border:0,style:{height:"64px",maxWidth:"369px"}})})}),(0,n.jsx)("div",{className:"nextPage",children:(0,n.jsx)("span",{children:(0,n.jsx)("img",{src:"/assets/images/ico_next.png"})})})]})})]}),(0,n.jsx)("div",{className:"section d-none",id:"section2",children:(0,n.jsx)("div",{className:"intro",children:(0,n.jsxs)("div",{className:"element",children:[(0,n.jsx)("h1",{children:"EVENT 2"}),(0,n.jsx)("div",{className:"btn_charFaceArea",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{"data-className":"infoChar0",id:"",onClick:()=>{p(0)},className:0===j&&"active"}),(0,n.jsx)("li",{"data-className":"infoChar1",id:"btn_face1",onClick:()=>{p(1)},className:1===j&&"active"}),(0,n.jsx)("li",{"data-className":"infoChar2",id:"btn_face2",onClick:()=>{p(2)},className:2===j&&"active"}),(0,n.jsx)("li",{"data-className":"infoChar3",id:"btn_face3",onClick:()=>{p(3)},className:3===j&&"active"}),(0,n.jsx)("li",{"data-className":"infoChar4",id:"btn_face4",onClick:()=>{p(4)},className:4===j&&"active"}),(0,n.jsx)("li",{"data-className":"infoChar5",id:"btn_face5",onClick:()=>{p(5)},className:5===j&&"active"}),(0,n.jsx)("li",{"data-className":"infoChar6",id:"btn_face6",onClick:()=>{p(6)},className:6===j&&"active"})]})}),(0,n.jsxs)("div",{className:"char_area  d-none",children:[(0,n.jsx)("div",{className:"infoChar0",style:{display:"".concat(0===j?"block":"none")},children:(0,n.jsx)("p",{children:"55555"})}),(0,n.jsx)("div",{className:"infoChar1",style:{display:"".concat(1===j?"block":"none")}}),(0,n.jsx)("div",{className:"infoChar2",style:{display:"".concat(2===j?"block":"none")}}),(0,n.jsx)("div",{className:"infoChar3",style:{display:"".concat(3===j?"block":"none")}}),(0,n.jsx)("div",{className:"infoChar4",style:{display:"".concat(4===j?"block":"none")}}),(0,n.jsx)("div",{className:"infoChar5",style:{display:"".concat(5===j?"block":"none")}}),(0,n.jsx)("div",{className:"infoChar6",style:{display:"".concat(6===j?"block":"none")}})]})]})})}),(0,n.jsx)("div",{id:"main",children:(0,n.jsx)("section",{className:"section main-info",children:(0,n.jsxs)("div",{className:"section-wrap",children:[(0,n.jsxs)("section",{className:"news",children:[(0,n.jsx)("a",{href:"/news-all/?page=notice",children:(0,n.jsx)("span",{className:"title",children:"กิจกรรม"})}),(0,n.jsx)("div",{className:"board-list",children:(0,n.jsxs)("table",{children:[(0,n.jsxs)("colgroup",{children:[(0,n.jsx)("col",{className:"category"}),(0,n.jsx)("col",{className:"subject"}),(0,n.jsx)("col",{className:"time"})]}),(0,n.jsx)("tbody",{children:(null==v?void 0:null===(s=v.data)||void 0===s?void 0:s.promotion_limit)&&(null==v?void 0:null===(t=v.data)||void 0===t?void 0:null===(a=t.promotion_limit)||void 0===a?void 0:a.map((e,s)=>(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("tr",{className:"".concat("event"==e.type_event&&"important"),children:[(0,n.jsx)("td",{className:"category",children:(0,n.jsx)("span",{className:"category inspection",children:e.type_event})}),(0,n.jsx)("td",{className:"subject",children:(0,n.jsxs)("a",{href:"#".concat(e.id),onClick:()=>c.push("/product-detail-3?provider=".concat(e.id)),children:[(0,n.jsx)("span",{className:"subject",children:(0,n.jsx)("span",{className:"text",children:e.titel_event})}),(0,n.jsx)("span",{className:"content",children:e.text_event})]})}),(0,n.jsx)("td",{className:"time",children:(0,n.jsx)("time",{children:m(e.strart_date).format("ll")})})]},s)})))})]})})]}),(0,n.jsxs)("div",{className:"right-area",children:[(0,n.jsx)("section",{className:"skill-simulator"}),(0,n.jsxs)("section",{className:"service-banner",children:[(0,n.jsx)("nav",{className:"user-service",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"register",href:"/sign-up/#section4",children:(0,n.jsx)("span",{children:"สมัครไอดี"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"changepass",href:"/login/#section4",children:(0,n.jsx)("span",{children:"เปลี่ยนรหัส"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"topup",href:"/sign-up/#section4",children:(0,n.jsx)("span",{children:"เติมเงิน"})})})]})}),(0,n.jsx)("nav",{className:"sns-service",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"facebook",href:"https://www.facebook.com/profile.php?id=61554172065754",children:(0,n.jsxs)("span",{children:["Facebook",(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"Official"})]})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"youtube",href:"https://playserver.in.th/index.php/Server/playrohan-online-93558",children:(0,n.jsxs)("span",{children:["PlaySrver",(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"Channel"})]})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"facebook_group",href:"#",children:(0,n.jsxs)("span",{children:["Community",(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"Group"})]})})})]})})]})]})]})})})]})};function pages_Home(){(0,i.useEffect)(()=>{data_api()},[]),(0,i.useEffect)(()=>{o.W.on("some event",e=>{})},[o.W]);let data_api=()=>{l.Z.get_data_event().then(e=>{!0==e.data.success&&(getFriendListToCreateSocketRoom(),s({data:e.data.data}))}).catch(e=>{})},getFriendListToCreateSocketRoom=()=>{l.Z.get_data_event().then(e=>{e.data.success}).catch(e=>{})},[e,s]=(0,i.useReducer)((e,s)=>({...e,...s}),{data:[]});return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(t.Z,{headerStyle:1,footerStyle:1,children:[(0,n.jsx)(Home,{datamember:e}),(0,n.jsx)(c.Z,{})]})})}},92703:function(e,s,a){"use strict";var n=a(50414);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,s,a,i,t,c){if(c!==n){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},45697:function(e,s,a){e.exports=a(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[1450,4885,5121,1664,3129,6502,9265,3920,7857,4460,4645,6836,1481,9774,2888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);