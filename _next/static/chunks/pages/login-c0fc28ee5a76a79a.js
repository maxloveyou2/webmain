(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3459],{36429:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return a(37644)}])},70602:function(e,s,a){"use strict";var r=a(85893),t=a(6840);s.Z=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("footer",{className:"section fp-auto-height",children:(0,r.jsx)("div",{className:"intro",children:(0,r.jsx)("div",{className:"element",children:(0,r.jsx)("div",{className:"copy",children:(0,r.jsxs)("span",{children:["Copyrights \xa9 ",t.Z.name," (Private). All Right Reserved"]})})})})})})},60109:function(e,s,a){"use strict";a.d(s,{W:function(){return i}});var r=a(53920),t=a(6840);let n=t.Z.apiURL,i=(0,r.ZP)(n)},37644:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return Home}});var r=a(85893);a(34460),a(41664);var t=a(67294),n=a(50042),i=a(44057),o=a(82175),c=a(11163);a(60109);var l=a(16310),u=a(70602),d=a(83017),h=a(75265),m=a(22920);a(27967);var p=a(23362);function Home(){let[e,s]=(0,t.useState)(!1),[a,g]=(0,t.useState)(!1),[x,v]=(0,t.useState)(!1),[f,j]=(0,t.useState)(!1),[w,N]=(0,t.useState)(!1),[_,C]=(0,t.useState)(!1),[b,k]=(0,t.useState)(""),[Z,S]=(0,t.useState)(""),[y,T]=(0,t.useState)(""),A=(0,c.useRouter)(),[E,O]=(0,t.useReducer)((e,s)=>({...e,...s}),{data:""});(0,t.useEffect)(()=>{clacklogin()},[]);let R=(0,o.TA)({enableReinitialize:!0,initialValues:{username:"",password:"",user_device_id:""},validationSchema:l.Ry({username:l.Z_().required("กรุณาระบุ username"),password:l.Z_().required("กรุณาระบุ password")}),onSubmit:e=>{var s=window.navigator,a=window.screen,t=s.mimeTypes.length;N(!0),e.user_device_id=t,C(a),i.Z.login(e).then(async e=>{if(!0==e.data.success){let s={token:e.data.token,userInfo:e.data.user};m.Am.success((0,r.jsx)("p",{className:"",children:e.data.message}),{position:"top-center",autoClose:4500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),(0,n.YR)(s),setTimeout(function(){N(!1)},5e3),k(e.data.message),"verificationUser"==e.data.redirect?(A.push("/verificationUser"),N(!1)):setTimeout(function(){A.push("/member"),N(!1)},2500)}else N(!1),m.Am.error((0,r.jsx)("p",{className:"",children:e.data.message}),{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),setTimeout(function(){j(!1),S("")},4500)}).catch(function(e){N(!0),m.Am.error((0,r.jsx)("p",{className:"",children:e}),{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),setTimeout(function(){j(!1),S(""),N(!1)},4500)})}}),clacklogin=e=>{p.Z.chacklogin().then(e=>{!0==e.data.success&&A.push("/member"),console.log(e.data)}).catch(e=>{})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.Z,{headTitle:"เข้าสู่ระบบ"}),w&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(d.Z,{})}),(0,r.jsx)("div",{className:"section",id:"section4",children:(0,r.jsx)("div",{className:"intro login",children:(0,r.jsxs)("div",{className:"element",children:[(0,r.jsx)("h1",{children:"EVENT 4"}),(0,r.jsx)("form",{onSubmit:e=>(e.preventDefault(),R.handleSubmit(),!1),children:(0,r.jsxs)("div",{className:"regist_form",children:[(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("input",{type:"text",name:"username",id:"username",placeholder:"A-Z, a-z, 0-9 | 6 - 12 ตัวอักษร",maxLength:12,autoComplete:"off",pattern:"[A-Za-z0-9]{6,12}",title:"กรุณาใส่ตัวหนังสือ A-Z, a-z, 0-9 จำนวน 6-12 ตัวอักษร",onChange:R.handleChange,onBlur:R.handleChange,value:R.values.username,required:!0})}),R.touched.username&&R.errors.username&&(0,r.jsx)("p",{className:"text-danger",children:R.errors.username})]}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"ต้องมีความยาว 6 ตัวขึ้นไป",maxLength:24,pattern:"[A-Za-z0-9]{6,24}",title:"รหัสผ่านจะต้องมีความยาว 6-24 ตัวอักษร และไม่สามารถใช้ตัวอักษรพิเศษได้",onChange:R.handleChange,onBlur:R.handleChange,value:R.values.password,required:!0})}),R.touched.password&&R.errors.password&&(0,r.jsx)("p",{className:"text-danger",children:R.errors.password})]}),(0,r.jsx)("input",{name:"register",type:w?"button":"submit"}),(0,r.jsx)("input",{name:"reset",type:"reset",onClick:()=>A.push("/")}),(0,r.jsx)("a",{href:"#",onClick:()=>window.history.back(),title:"ก่อนหน้า"})]})})]})})}),(0,r.jsx)(m.Ix,{}),(0,r.jsx)(u.Z,{})]})}}},function(e){e.O(0,[5121,1664,3129,8382,3920,4460,9774,2888,179],function(){return e(e.s=36429)}),_N_E=e.O()}]);