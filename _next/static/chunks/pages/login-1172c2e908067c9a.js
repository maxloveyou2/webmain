(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3459],{36429:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return a(37644)}])},70602:function(e,s,a){"use strict";var t=a(85893),r=a(6840);s.Z=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("footer",{className:"section fp-auto-height",children:(0,t.jsx)("div",{className:"intro",children:(0,t.jsx)("div",{className:"element",children:(0,t.jsx)("div",{className:"copy",children:(0,t.jsxs)("span",{children:["Copyrights \xa9 ",r.Z.name," (Private). All Right Reserved"]})})})})})})},60109:function(e,s,a){"use strict";a.d(s,{W:function(){return i}});var t=a(53920),r=a(6840);let n=r.Z.apiURL,i=(0,t.ZP)(n)},37644:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return Home}});var t=a(85893);a(34460),a(41664);var r=a(67294),n=a(50042),i=a(44057),o=a(82175),c=a(11163);a(60109);var l=a(16310),u=a(70602),d=a(75265),h=a(22920);a(27967);var m=a(23362);function Home(){let[e,s]=(0,r.useState)(!1),[a,p]=(0,r.useState)(!1),[g,x]=(0,r.useState)(!1),[v,f]=(0,r.useState)(!1),[j,w]=(0,r.useState)(!1),[N,_]=(0,r.useState)(!1),[C,b]=(0,r.useState)(""),[k,Z]=(0,r.useState)(""),[S,y]=(0,r.useState)(""),T=(0,c.useRouter)(),[A,E]=(0,r.useReducer)((e,s)=>({...e,...s}),{data:""});(0,r.useEffect)(()=>{clacklogin()},[]);let O=(0,o.TA)({enableReinitialize:!0,initialValues:{username:"",password:"",user_device_id:""},validationSchema:l.Ry({username:l.Z_().required("กรุณาระบุ username"),password:l.Z_().required("กรุณาระบุ password")}),onSubmit:e=>{var s=window.navigator,a=window.screen,r=s.mimeTypes.length;w(!0),e.user_device_id=r,_(a),i.Z.login(e).then(async e=>{if(e.data.success){let s={token:e.data.token,userInfo:e.data.user};h.Am.success((0,t.jsx)("p",{className:"",children:e.data.message}),{position:"bottom-center",autoClose:4500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),(0,n.YR)(s),setTimeout(function(){w(!1)},5e3),b(e.data.message),"verificationUser"==e.data.redirect?(T.push("/verificationUser"),w(!1)):setTimeout(function(){T.push("/member"),w(!1)},2500)}else f(!0),h.Am.error((0,t.jsx)("p",{className:"",children:e.data.message}),{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),Z(e.data.message),setTimeout(function(){f(!1),Z(""),w(!1)},4500)}).catch(function(e){w(!0),h.Am.error((0,t.jsx)("p",{className:"",children:e}),{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),setTimeout(function(){f(!1),Z(""),w(!1)},4500)})}}),clacklogin=e=>{m.Z.chacklogin().then(e=>{!0==e.data.success&&T.push("/member"),console.log(e.data)}).catch(e=>{})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.Z,{headTitle:"เข้าสู่ระบบ"}),j&&(0,t.jsx)(t.Fragment,{children:" "}),(0,t.jsx)("div",{className:"section",id:"section4",children:(0,t.jsx)("div",{className:"intro login",children:(0,t.jsxs)("div",{className:"element",children:[(0,t.jsx)("h1",{children:"EVENT 4"}),(0,t.jsx)("form",{onSubmit:e=>(e.preventDefault(),O.handleSubmit(),!1),children:(0,t.jsxs)("div",{className:"regist_form",children:[(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("input",{type:"text",name:"username",id:"username",placeholder:"A-Z, a-z, 0-9 | 6 - 12 ตัวอักษร",maxLength:12,autoComplete:"off",pattern:"[A-Za-z0-9]{6,12}",title:"กรุณาใส่ตัวหนังสือ A-Z, a-z, 0-9 จำนวน 6-12 ตัวอักษร",onChange:O.handleChange,onBlur:O.handleChange,value:O.values.username,required:!0})}),O.touched.username&&O.errors.username&&(0,t.jsx)("p",{className:"text-danger",children:O.errors.username})]}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"ต้องมีความยาว 6 ตัวขึ้นไป",maxLength:24,pattern:"[A-Za-z0-9]{6,24}",title:"รหัสผ่านจะต้องมีความยาว 6-24 ตัวอักษร และไม่สามารถใช้ตัวอักษรพิเศษได้",onChange:O.handleChange,onBlur:O.handleChange,value:O.values.password,required:!0})}),O.touched.password&&O.errors.password&&(0,t.jsx)("p",{className:"text-danger",children:O.errors.password})]}),(0,t.jsx)("input",{name:"register",type:j?"button":"submit"}),(0,t.jsx)("input",{name:"reset",type:"reset",onClick:()=>T.push("/")}),(0,t.jsx)("a",{href:"#",onClick:()=>window.history.back(),title:"ก่อนหน้า"})]})})]})})}),(0,t.jsx)(u.Z,{})]})}}},function(e){e.O(0,[5121,1664,3129,8382,3920,4460,9774,2888,179],function(){return e(e.s=36429)}),_N_E=e.O()}]);