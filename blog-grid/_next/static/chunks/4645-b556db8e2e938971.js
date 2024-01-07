"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4645],{64645:function(e,s,t){t.d(s,{Z:function(){return BidModal}});var a=t(91309),l=t(85893),n=t(67294);t(50042);var i=t(23362),c=t(29270),d=t(83017);function BidModal(e){var s=e.isBidModal,t=e.handleBidModal,o=e.description,r=e.getdata_member,m=e.point,u=(0,a._)((0,n.useState)(1),2),h=u[0],x=u[1],j=(0,a._)((0,n.useState)([]),2),b=j[0],f=j[1],g=(0,a._)((0,n.useState)(!1),2),v=g[0],p=g[1],N=(0,a._)((0,n.useState)(!1),2),y=N[0],_=N[1],w=(0,a._)((0,n.useState)(!1),2);w[0],w[1];var C=(0,a._)((0,n.useState)(""),2),k=C[0],I=C[1],add_to_wishlist=function(e){p(!0),f({id:e.id,name:e.item_name,price:parseFloat(e.price*h),total:h})},buyItem=function(e){_(!0);var s={shop_id:e.id,item_count:h};p(!1),i.Z.buy_items(s).then(function(e){!0==e.data.success?(I(e.data.message),r.getdata_member(),setTimeout(function(){_(!1)},4500)):(alert(e.data.message),setTimeout(function(){_(!1)},2500))}).catch(function(e){setTimeout(function(){_(!1)},2500),alert(e)})},closeModel=function(){p(!1),x(1)},countItemPlus=function(){x(h+1)},countItemMinus=function(){x(h-1)},M=(0,a._)((0,n.useState)(""),2),F=M[0],S=M[1],B=(0,a._)((0,n.useState)(""),2),Z=B[0],z=B[1],selectedItem=function(e){i.Z.addmyitemmalllist({data:e}).then(function(e){!0==e.data.success?(r.getdata_member(),z(e.data.msg),S("success")):(z(e.data.msg),S("danger")),setTimeout(function(){z("")},2500)}).catch(function(e){console.log(e)}),p(!1)};return(0,l.jsxs)(l.Fragment,{children:[y&&(0,l.jsxs)(l.Fragment,{children:[" ",(0,l.jsx)(d.Z,{})," "]}),(0,l.jsxs)("div",{className:"modal fade popup ".concat(s?"show d-block":""," "),id:"popup_bid",tabIndex:-1,role:"dialog","aria-hidden":"true",children:[(0,l.jsx)("div",{className:"modal-dialog modal-dialog-lg",role:"document",children:(0,l.jsxs)("div",{className:"modal-content",children:[(0,l.jsx)("button",{type:"button",className:"close",onClick:t,children:(0,l.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),(0,l.jsxs)("div",{className:"modal-body",children:[(0,l.jsx)("div",{className:"image image2 W-100",children:(0,l.jsx)("img",{src:null==o?void 0:o.picture,style:{margin:"0 auto"},alt:""})}),(0,l.jsx)("h2",{children:null==o?void 0:o.item_name}),(0,l.jsxs)("p",{style:{color:"#f0ad4e"},children:[null==o?void 0:o.description_enjoy," ",null==o?void 0:o.item_description]}),""==Z?null:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"alert alert-".concat(F),children:(0,l.jsx)("h6",{children:Z})})}),(0,l.jsx)("fieldset",{className:"email",children:(0,l.jsx)("input",{type:"hidden",style:{color:"#ddf247"},className:"style-1",id:"email",placeholder:"ราคา ".concat(null==o?void 0:o.price," Cash"),name:"isbuy",tabIndex:2,value:null==o?void 0:o.price,readOnly:!0})}),(0,l.jsx)("div",{className:"d-inline text-center",children:(0,l.jsxs)("div",{className:"row",style:{justifyContent:"center"},children:[(0,l.jsxs)("a",{href:"#",onClick:function(){return add_to_wishlist(o)},className:"tf-button style-1 h50 w-45 m-2",style:{color:"black",cursor:"pointer"},children:["$ ซื้อ ",null==o?void 0:o.price," Cash"]}),(0,l.jsxs)("a",{onClick:function(){return selectedItem(o)},className:"tf-button style-1 h50 w-45 m-2 btn-info",style:{color:"#fcfcfc",cursor:"pointer"},children:[(0,l.jsx)("i",{className:"icon-create"})," เพิ่มในรายการที่อยากได้"]})]})})]})]})}),(0,l.jsx)("div",{className:"overlaymenu"})]}),(0,l.jsxs)("div",{className:"modal ng-scope fade show ",id:"quantityModal",tabIndex:-1,role:"dialog","aria-labelledby":"quantityModalLabel",style:{display:"".concat(v?"block":"none"),paddingRight:17,backgroundColor:"#00000091 "},"aria-modal":"true",children:[(0,l.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:(0,l.jsxs)("div",{className:"modal-content modal-content2",children:[(0,l.jsxs)("div",{className:"modal-body modal-body2",children:[k&&(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(l.Fragment,{children:[" ",(0,l.jsx)(c.Z,{className:"alert fade show alert-dismissible alert-solid-success",color:"",variant:"success",children:(0,l.jsxs)("h5",{className:"text-center my-5",children:[" ",k]})})," "]})})," ",(0,l.jsx)("h4",{className:"text-center mb-2",style:{color:"#000"},children:"ยืนยันรายการสั่งซื้อ"}),(0,l.jsxs)("table",{className:"table table-striped",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{className:"text-center",children:"ชื่อไอเทม"}),(0,l.jsx)("th",{className:"text-center",children:"ราคา"}),(0,l.jsx)("th",{className:"text-center",children:"จำนวน"})]})}),(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"ng-binding text-center",children:null==b?void 0:b.name}),(0,l.jsx)("td",{className:"ng-binding text-center",children:null==b?void 0:b.price}),(0,l.jsxs)("td",{className:"ng-binding text-center",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",onClick:function(){return countItemMinus()},width:18,className:"".concat(1==h?"d-none":""),height:18,viewBox:"0 0 24 24",style:{fill:"rgba(0, 0, 0, 1)",transform:"",msfilter:"",cursor:"pointer"},children:(0,l.jsx)("path",{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 12H7v-4h10v4z"})}),"\xa0\xa0 ",h," \xa0\xa0",(0,l.jsx)("svg",{onClick:function(){return countItemPlus()},xmlns:"http://www.w3.org/2000/svg",width:18,height:18,viewBox:"0 0 24 24",style:{fill:"rgba(0, 0, 0, 1)",transform:"",msfilter:"",cursor:"pointer"},children:(0,l.jsx)("path",{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"})})]})]})})]}),(0,l.jsx)("tfoot",{className:"d-flex",style:{justifyContent:"flex-end"},children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{}),(0,l.jsx)("td",{}),(0,l.jsxs)("td",{children:["รวม:",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"คงเหลือ"]}),(0,l.jsxs)("td",{className:"ng-binding",children:[Intl.NumberFormat().format(parseFloat((null==b?void 0:b.price)*h))," Cash",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),Intl.NumberFormat().format(parseFloat(m-(null==b?void 0:b.price)*h))," Cash"]})]})})]}),(0,l.jsxs)("div",{className:"modal-footer",children:[(0,l.jsx)("button",{type:"button",className:"btn btn-primary me-2","data-dismiss":"modal",onClick:function(){return buyItem(b)},"aria-label":"Close",children:"ตกลง"}),(0,l.jsx)("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",onClick:function(){return closeModel()},"aria-label":"Close",children:"ยกเลิก"})]})]})}),(0,l.jsx)("div",{className:"overlaymenu"})]})]})}}}]);