(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3551],{96907:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news-all",function(){return a(84284)}])},56080:function(e,s,a){"use strict";var t=a(5121),c=a(6840);(0,a(60471).O)(),s.Z={get_data_event:async()=>{let e={method:"get",url:"".concat(c.Z.apiURL,"/api/v3/user/data_event"),headers:{"Content-Type":"application/json"}};return await (0,t.Z)(e)},post_data_event:async e=>{let s={method:"post",url:"".concat(c.Z.apiURL,"/api/v3/user/postdata_event"),headers:{"Content-Type":"application/json"},data:e};return await (0,t.Z)(s)},post_noconfrimemail:async()=>{let e={method:"get",url:"".concat(c.Z.apiURL,"/api/v3/user/noconfrimemail"),headers:{"Content-Type":"application/json"}};return await (0,t.Z)(e)},post_confrimemail:async e=>{let s={method:"post",url:"".concat(c.Z.apiURL,"/api/v3/user/confrimemail"),headers:{"Content-Type":"application/json"},data:e};return await (0,t.Z)(s)}}},84284:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return news_all}});var t=a(85893),c=a(41664),n=a.n(c),l=a(34460),i=a(11163),notice=e=>((0,i.useRouter)(),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("section",{className:"board-list list",children:(0,t.jsxs)("table",{children:[(0,t.jsxs)("colgroup",{children:[(0,t.jsx)("col",{className:"time"}),(0,t.jsx)("col",{className:"category"}),(0,t.jsx)("col",{className:"subject"})]}),(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"d-none",children:[(0,t.jsx)("th",{className:"time",children:"Date"}),(0,t.jsx)("th",{className:"category",children:"Type"}),(0,t.jsx)("th",{className:"subject",children:"Name"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"time",children:(0,t.jsx)("time",{className:"time-dash",children:"04-09-2023"})}),(0,t.jsx)("td",{className:"category",children:(0,t.jsx)("span",{className:"board-category item",children:"อัพเดท"})}),(0,t.jsx)("td",{className:"subject",children:(0,t.jsx)("div",{className:"board-subject",children:(0,t.jsxs)("a",{href:"https://www.rohan.in.th/home/content/view/crone-gacha-v4",children:[(0,t.jsx)("span",{className:"indicate"}),(0,t.jsx)("span",{className:"text",children:"รายการอัพเดทประจำสัปดาห์ วันที่ 19 กันยายน 2566"})]})})})]})})]})})})),News_event=e=>((0,i.useRouter)(),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("section",{className:"board-list list",children:(0,t.jsxs)("table",{children:[(0,t.jsxs)("colgroup",{children:[(0,t.jsx)("col",{className:"time"}),(0,t.jsx)("col",{className:"category"}),(0,t.jsx)("col",{className:"subject"})]}),(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"d-none",children:[(0,t.jsx)("th",{className:"time",children:"Date"}),(0,t.jsx)("th",{className:"category",children:"Type"}),(0,t.jsx)("th",{className:"subject",children:"Name"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"time",children:(0,t.jsx)("time",{className:"time-dash",children:"04-09-2023"})}),(0,t.jsx)("td",{className:"category",children:(0,t.jsx)("span",{className:"board-category item",children:"EVENT"})}),(0,t.jsx)("td",{className:"subject",children:(0,t.jsx)("div",{className:"board-subject",children:(0,t.jsxs)("a",{href:"https://www.rohan.in.th/home/content/view/crone-gacha-v4",children:[(0,t.jsx)("span",{className:"indicate"}),(0,t.jsx)("span",{className:"text",children:"รายการอัพเดทประจำสัปดาห์ วันที่ 19 กันยายน 2566"})]})})})]})})]})})})),r=a(30381);a(14395),r.locale("th");var promotion=e=>{var s,a;let{data:c}=e,n=(0,i.useRouter)();return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"table-responsive",style:{borderRadius:"8px",height:"600px",overflowX:"auto"},children:(0,t.jsxs)("table",{className:"table align-middle mb-0 w-100",style:{borderRadius:"8px",background:"#000",border:"unset"},children:[(0,t.jsx)("thead",{className:"table-light p-2 text-center",children:(0,t.jsxs)("tr",{className:"p-2 ",children:[(0,t.jsx)("th",{scope:"col",style:{width:"15%"}}),(0,t.jsx)("th",{scope:"col",style:{width:"35%"}}),(0,t.jsx)("th",{scope:"col",style:{width:"1%"}}),(0,t.jsx)("th",{scope:"col",style:{width:"30%"},children:(0,t.jsx)("h4",{children:"โปรโมชั่น"})}),(0,t.jsx)("th",{scope:"col"}),(0,t.jsx)("th",{scope:"col"}),(0,t.jsx)("th",{scope:"col",style:{width:"12%"}})]})}),(0,t.jsx)("tbody",{className:"text-center p-5",children:(null==c?void 0:null===(s=c.data)||void 0===s?void 0:s.promotion)&&(null==c?void 0:null===(a=c.data)||void 0===a?void 0:a.promotion.map((e,s)=>(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("tr",{onClick:()=>n.push("/product-detail-3?provider=".concat(e.id)),style:{cursor:"pointer"},title:e.text_event2,children:[(0,t.jsxs)("td",{className:" me-2",children:[(0,t.jsx)("i",{className:"fa fa-clock-o",children:" "})," ",(0,t.jsxs)("small",{children:[null==e.strart_date?"ช่วงกิจกรรม":r(e.strart_date).format("ll")," -"]})," ",(0,t.jsx)("br",{}),(0,t.jsx)("small",{children:null==e.end_date?"เปิดแล้ว":r(e.end_date).format("ll")})]}),(0,t.jsx)("td",{children:(0,t.jsx)("small",{className:"text-truncate d-inline-block",style:{fontSize:"13px ",width:"350px"},children:e.text_event2})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{className:"text-success",children:e.name_event}),(0,t.jsx)("td",{style:{width:"1%"}}),(0,t.jsx)("td",{style:{width:"1%"}}),(0,t.jsx)("td",{children:(0,t.jsx)("div",{className:"d-flex gap-2 align-items-center",children:(0,t.jsx)("div",{className:"flex-shrink-0",children:(0,t.jsx)("img",{src:e.img_event_1,width:64,height:64,className:"avatar-xs rounded-circle"})})})})]},s)})))}),(0,t.jsx)("tfoot",{className:"table-light",children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{colSpan:6}),(0,t.jsx)("td",{})]})})]})})})},d=a(56080),o=a(67294),h=a(50042),news_all=e=>{let s=(0,i.useRouter)(),[a,c]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let e=(0,h.LP)();e?c(!0):c(!1),data_api()},[]);let data_api=()=>{d.Z.get_data_event().then(e=>{!0==e.data.success&&(getFriendListToCreateSocketRoom(),x({data:e.data.data}))}).catch(e=>{})},getFriendListToCreateSocketRoom=()=>{d.Z.get_data_event().then(e=>{!0==e.data.success&&console.log(e.data.data)}).catch(e=>{})},[r,x]=(0,o.useReducer)((e,s)=>({...e,...s}),{data:[]});return(0,t.jsx)(t.Fragment,{children:a?(0,t.jsxs)(t.Fragment,{children:[" ",(0,t.jsx)("div",{className:"tf-section-2 product-detail",children:(0,t.jsx)("div",{className:"themesflat-container",children:(0,t.jsx)("div",{className:"row-",children:(0,t.jsx)("div",{className:"wrapper-content-create",children:(0,t.jsx)("div",{className:"widget-tabs relative",children:(0,t.jsx)("div",{classname:"widget-content-tab mb-5 default",id:"layout",children:(0,t.jsx)("section",{id:"content",children:(0,t.jsx)("div",{id:"board",children:(0,t.jsx)("section",{className:"section board-list",children:(0,t.jsxs)("div",{className:"section-wrap",children:[(0,t.jsxs)("section",{className:"page-header",children:[(0,t.jsxs)("header",{className:"page-info",children:[(0,t.jsxs)("h1",{className:"name me-3",children:[(0,t.jsx)("i",{className:"fa fa-bookmark me-1"}),"notice"==s.query.page&&"อัพเดท"||"event"==s.query.page&&"กิจกรรม"||"promotion"==s.query.page&&"โปรโมชั่น"]}),(0,t.jsx)("aside",{className:"breadcrumbs",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/",children:"Home"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{children:"News"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"on",href:"#",children:"notice"==s.query.page&&"อัพเดท"||"event"==s.query.page&&"กิจกรรม"||"promotion"==s.query.page&&"โปรโมชั่น"})})]})})]}),(0,t.jsx)("nav",{className:"page-category-menu",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(n(),{className:"notice"==s.query.page?"on":"off",href:"/news-all?page=notice",children:"อัพเดท"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{className:"event"==s.query.page?"on":"off",href:"/news-all?page=event",children:"กิจกรรม"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{className:"promotion"==s.query.page?"on":"off",href:"/news-all?page=promotion",children:"โปรโมชั่น"})})]})})]}),(0,t.jsx)("br",{}),"notice"==s.query.page&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(notice,{})}),"event"==s.query.page&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(News_event,{})}),"promotion"==s.query.page&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(promotion,{data:r})})]})})})})})})})})})})]}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(l.Z,{children:(0,t.jsx)("div",{className:"tf-section-2 product-detail",children:(0,t.jsx)("div",{className:"themesflat-container",children:(0,t.jsx)("div",{className:"row-",children:(0,t.jsx)("div",{className:"wrapper-content-create",children:(0,t.jsx)("div",{className:"widget-tabs relative",children:(0,t.jsx)("div",{classname:"widget-content-tab mb-5 default",id:"layout",children:(0,t.jsx)("section",{id:"content",children:(0,t.jsx)("div",{id:"board",children:(0,t.jsx)("section",{className:"section board-list",children:(0,t.jsxs)("div",{className:"section-wrap",children:[(0,t.jsxs)("section",{className:"page-header",children:[(0,t.jsxs)("header",{className:"page-info",children:[(0,t.jsxs)("h1",{className:"name me-3",children:[(0,t.jsx)("i",{className:"fa fa-bookmark me-1"}),"notice"==s.query.page&&"อัพเดท"||"event"==s.query.page&&"กิจกรรม"||"promotion"==s.query.page&&"โปรโมชั่น"]}),(0,t.jsx)("aside",{className:"breadcrumbs",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/",children:"Home"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{children:"News"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"on",href:"#",children:"notice"==s.query.page&&"อัพเดท"||"event"==s.query.page&&"กิจกรรม"||"promotion"==s.query.page&&"โปรโมชั่น"})})]})})]}),(0,t.jsx)("nav",{className:"page-category-menu",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(n(),{className:"notice"==s.query.page?"on":"off",href:"/news-all?page=notice",children:"อัพเดท"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{className:"event"==s.query.page?"on":"off",href:"/news-all?page=event",children:"กิจกรรม"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{className:"promotion"==s.query.page?"on":"off",href:"/news-all?page=promotion",children:"โปรโมชั่น"})})]})})]}),(0,t.jsx)("br",{}),"notice"==s.query.page&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(notice,{})}),"event"==s.query.page&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(News_event,{})}),"promotion"==s.query.page&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(promotion,{data:r})})]})})})})})})})})})})})})})}}},function(e){e.O(0,[1450,4885,1664,5121,3129,4460,9774,2888,179],function(){return e(e.s=96907)}),_N_E=e.O()}]);