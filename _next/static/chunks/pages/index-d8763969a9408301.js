(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{75557:function(e,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(87067)}])},60109:function(e,i,s){"use strict";s.d(i,{W:function(){return n}});var a=s(53920),t=s(6840);let l=t.Z.apiURL,n=(0,a.ZP)(l)},87067:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return pages_Home}});var a=s(85893),t=s(67294),l=s(34460);s(42770),s(95553),s(77943),s(16963),s(60650),s(87836);var n=s(71593),d=s(56080);s(41664),s(98130),s(17857);var o=s(60109),g=s(23362);s(20658),s(9232);var m=s(11163),c=s(50042),r=s(2261);s(60439),s(19360),s(7025);var u=s(94135),h=s(30381);s(14395),h.locale("th");var Home=e=>{var i,s,l,n,o,f,v,p,j,_,x,y,b,N,k,S,I,w,D,T,E,R,C,G,B,F,L,P,H,O,W,z,A,M,Z,K,V,X,U,q,J,Y,Q,$,ee,ei,es,ea,et,el,en,ed,eo,eg,em,ec,er,eu,eh,ef,ev,ep,ej,e_,ex,ey,eb,eN,ek,eS,eI,ew;let eD=(0,m.useRouter)();(0,t.useEffect)(()=>{getdata_download()},[]);let getdata_download=()=>{g.Z.getdata_download().then(e=>{!0==e.data.success&&eE({data:e.data.data[0]})}).catch(e=>{})},[eT,eE]=(0,t.useState)({data:[]}),[eR,eC]=(0,t.useState)(0),[eG,eB]=(0,t.useState)(!1);(0,t.useEffect)(()=>{let e=(0,c.LP)();e?eB(!0):eB(!1),data_api()},[]);let data_api=()=>{d.Z.get_data_event().then(e=>{!0==e.data.success&&(getFriendListToCreateSocketRoom(),eL({data:e.data.data}))}).catch(e=>{})},getFriendListToCreateSocketRoom=()=>{d.Z.get_data_event().then(e=>{!0==e.data.success&&console.log(e.data.data)}).catch(e=>{})},[eF,eL]=(0,t.useReducer)((e,i)=>({...e,...i}),{data:[]}),[eP,eH]=(0,t.useState)(1),[eO,eW]=(0,t.useState)({}),[ez,eA]=(0,t.useState)(!0),showSlides=e=>{var i;eA(!1),eH(null==e?void 0:null===(i=e.item)||void 0===i?void 0:i.id),eW({data:null==e?void 0:e.item})},eM=[{item:{id:1,name:"Human (เผ่ามนุษย์)",imgTitel:"/assets/images/7info/เผ่า-Human.png",img:"/assets/images/img_infoChar5.png",list1:{imgBG:"/assets/images/7info/1499745591.png",name:"Human Knight",title:"เผ่ามนุษย์ เป็นเผ่าพันธุ์ที่เกิดมาเพื่อเป็นอัศวินโดยเฉพาะ ยึดหลักแห่งความกล้าหาญ และโดยพื้นฐานของเผ่ามนุษย์นั้น จะต่อสู้ในสิ่งที่เขา เชื่อว่ามัน 'ถูกต้อง' สามารถเปลี่ยนอาชีพเป็น Defender (อึด ถึก) หรือ Guardian (เดินฟัน ใครขวางตายยย) ได้ตอน Lv. 50 เหล่าทหารที่ยอมสูญเสียได้แม้กระทั่งชีวิต และด้วยการป้องกันที่เข้มแข็งของพวกเขา จึงมักจะเป็นกองกำลังหลัก ในการป้องกันจากเหล่าข้าศึก ทั้งนี้พวกเขายังมีความสามารถในการทำให้ศัตรูมึนงง รวมไปถึงการโจมตีระยะไกล ที่ยอดเยี่ยมอีกด้วย",img1:"/assets/images/7info/guide_humanIcon_01.jpg",detail1:"ด้วย Rising Might ความแข็งแกร่งของทุกคนสามารถเพิ่มขึ้นได้อย่างมาก",img2:"/assets/images/7info/guide_humanIcon_02.jpg",detail2:"Shield Push กระแทกศัตรูของคุณให้ห่างจากคุณและปาร์ตี้ของคุณ!",img3:"/assets/images/7info/guide_humanIcon_03.jpg",detail3:"เริ่มการต่อสู้ด้วยเลือดออก และคู่ต่อสู้ของคุณจะสูญเสียสุขภาพจำนวนมากเมื่อเวลาผ่านไป!"},list2:{imgBG:"/assets/images/Screenshot_2.png",name:"Human Guardian",text:"“คุณคิดว่ามนุษย์รู้แค่วิธีการป้องกันเหรอ? ให้ฉันแสดงให้คุณเห็นว่าคุณผิดแค่ไหน!”",title:"ผู้พิทักษ์เป็นนักสู้ระยะประชิดที่ดุดันและสวมเกราะหนา พวกเขารีบเข้าสู่การต่อสู้ที่ดุเดือดและกดดันความเสียหายมากมาย",img1:"/assets/images/7info/guide_humanIcon_04.jpg",detail1:"Crazy Standing ปักรากคุณลงบนพื้น แต่เพิ่มความเร็วการโจมตีและความเสียหายของคุณอย่างมาก!",img2:"/assets/images/7info/guide_humanIcon_05.jpg",detail2:"Stoneskin ป้องกันความเสียหายทางกายภาพทั้งหมดที่คุณได้รับในช่วงเวลาสั้นๆ!",img3:"/assets/images/7info/guide_humanIcon_06.jpg",detail3:"สัญลักษณ์อัศวินไม่เพียงเพิ่มความเสียหายของคุณอย่างมาก แต่ยังปิดการป้องกันของคู่ต่อสู้ด้วย!"},list3:{imgBG:"https://img.online-station.net/_content/2017/0711/gallery/1499745607.jpg",name:"Human Defender",text:"“ด้วยโล่ของฉัน ฉันจะปกป้องปาร์ตี้ของฉัน”",title:"ฝ่ายป้องกันเป็นตัวละครแทงค์ที่เชี่ยวชาญซึ่งมีความสามารถในการต้านทานความเสียหายมากมายจากหลายแหล่ง",img1:"/assets/images/7info/guide_humanIcon_07.jpg",detail1:"Blue Vacuum ดูดมานาของศัตรูอย่างรวดเร็ว ทำให้พวกเขาไม่สามารถใช้เวทย์มนตร์ได้!",img2:"/assets/images/7info/guide_humanIcon_08.jpg",detail2:"การเยาะเย้ยเป็นวงกว้าง Taunt Roar ทำให้ศัตรูทั้งหมดมุ่งความสนใจไปที่คุณ!",img3:"/assets/images/7info/guide_humanIcon_09.jpg",detail3:"การสูญพันธุ์จะทำให้ศัตรูจำนวนมากรอบตัวคุณตะลึง ทำให้ปาร์ตี้ของคุณสามารถจัดกลุ่มใหม่และโจมตีได้!"},imgList:{url1:"/assets/images/7info/guide_human01_screen01.jpg",url2:"/assets/images/7info/guide_human01_screen02.jpg",url3:"/assets/images/7info/guide_human01_screen03.jpg",url4:"/assets/images/7info/guide_human01_screen04.jpg"}}},{item:{id:2,name:"Half Elf (ฮาล์ฟเอล)",imgTitel:"/assets/images/7info/Hallf-Elf.png",img:"/assets/images/img_infoChar4.png",list1:{imgBG:"/assets/images/hf.png",name:"Half Elf Archer",title:"บุตรแห่งมนุษย์ และเอลฟ์ พวกเขามีถิ่นพำนักอาศัยอยู่ท่ามกลางแมกไม้ในป่ารกและเป็นผู้เชี่ยวชาญการใช้ อาวุธระยะ ไกล โดยอาวุธที่เขาใช้จะเป็นธนู, หน้าไม้ และศรธนู ซึ่งความสามารถของพวกเขานั้น ยากที่จะมีผู้เปรียบเทียบได้ สามารถเปลี่ยนเป็น Scout เชี่ยวชาญในการใช้ Bowโจมตีศัตรูทีละหลายตัว หรือ Ranger เชี่ยวชาญในการใช้ Crossbow มีการโจมตีที่รวดเร็ว และแม่นยำ ได้ตอน Lv. 50 เป็นผู้เชี่ยวชาญในการโจมตีศัตรูทีละหลายตัวในคราวเดียว ด้วยธนู และเวทมนตร์ พวกเขาเลือกที่จะต่อสู้กับศัตรูทั้งหมดในคราวเดียวมากกว่าที่จะเสียเวลาใน การโจมตีทีละตัวต่อครั้ง",img1:"/assets/images/7info//guide_halfelfIcon_01.jpg",detail1:"การยิงระยะไกลจะเพิ่มความเหนือกว่าในระยะไกลของ Half Elves ด้วยการขยายระยะการยิงสูงสุดของคุณ!",img2:"/assets/images/7info//guide_halfelfIcon_02.jpg",detail2:"Double Shot เป็นเช่นนั้นเอง แตะสองครั้งอย่างรวดเร็วใส่ศัตรูของคุณ!",img3:"/assets/images/7info//guide_halfelfIcon_03.jpg",detail3:"การเจาะรากจะห่อหุ้มคู่ต่อสู้ของคุณด้วยเถาวัลย์เพื่อให้พวกมันอยู่กับที่!"},list2:{imgBG:"",name:"Half Elf Ranger",text:"“ลูกยิงของฉันไม่เคยพลาด”",title:"เรนเจอร์เป็นผู้เชี่ยวชาญการต่อสู้แบบตัวต่อตัว ด้วยความสามารถอันทรงพลังที่ออกแบบมาเพื่อเอาชนะ เอาชนะ และเอาชนะคู่ต่อสู้ พวกมันถึงตายใน PVP",img1:"/assets/images/7info//guide_halfelfIcon_04.jpg",detail1:"Strip Shot จะเพิ่มความเสียหายต่อเป้าหมายของคุณอย่างมาก และปลดการป้องกันของพวกมันออกไป!",img2:"/assets/images/7info//guide_halfelfIcon_05.jpg",detail2:"เปิดใช้งานความเร็วลมเพื่อเพิ่มความเร็วการโจมตีของคุณอย่างมากในช่วงเวลาสั้น ๆ !",img3:"/assets/images/7info//guide_halfelfIcon_06.jpg",detail3:"Siege shot ช่วยเพิ่มความเสียหายที่คุณทำได้เป็นจำนวนมาก แต่ระวังเพราะมันจะทำให้คุณจมอยู่กับพื้นด้วย!"},list3:{imgBG:"/assets/images/hfm.png",name:"Half Elf Scout",text:"“ข้าจะทำให้ลูกศรจากฟากฟ้าลงมาใส่ศัตรูของข้า!”",title:"หน่วยสอดแนมอยู่ในสถานะที่ดีที่สุดที่รายล้อมไปด้วยศัตรู ด้วยการโจมตี AOE ระยะไกลจำนวนมาก พวกมันมีประสิทธิภาพมากในการสร้างความเสียหายจำนวนมากในพื้นที่เฉพาะจุด",img1:"/assets/images/7info//guide_halfelfIcon_07.jpg",detail1:"Pouring Shot ทำลายเกราะของศัตรูกลุ่มหนึ่งลง!",img2:"/assets/images/skill/guide_halfelfIcon_08.jpg",detail2:"Rain Shot จะให้ความรู้สึกเหมือนเป็นพายุฝนสำหรับศัตรูของคุณ โจมตีกลุ่มศัตรูอย่างรุนแรง!",img3:"/assets/images/7info//guide_halfelfIcon_09.jpg",detail3:"ในขณะที่ Scout มุ่งเน้นไปที่การต่อสู้กับศัตรูหลายตัว All in one ช่วยให้คุณปลดปล่อยศัตรูตัวเดียวซึ่งมีความหมายสำหรับหลาย ๆ คน!"},imgList:{url1:"/assets/images/7info//guide_halfelf01_screen01.jpg",url2:"/assets/images/7info//guide_halfelf01_screen02.jpg",url3:"/assets/images/7info//guide_halfelf01_screen03.jpg",url4:"/assets/images/7info//guide_halfelf01_screen04.jpg"}}},{item:{id:3,img:"/assets/images/img_infoChar2.png",name:"Elf (เอลฟ์)",imgTitel:"/assets/images/7info/Elf.png",list1:{imgBG:"/assets/images/elf.png",name:"Elf White Mage",text:"",title:"เผ่า Elf จะมีควมชำนาญในด้านการรักษาเพื่อนร่วมทีมเป็นหลัก แต่นั่นก็มิใช่เป็นจุดอ่อนในการจะถูกโจมตีของศัตรู เพราะพวกเขาก็สามารถใช้เวทมนตร์ในการโจมตีคู่ต่อสู้ด้วยเช่นกัน สามารถเปลี่ยนเป็น Priest (ผู้ใจบุญโปรดสัตว์โลก) หรือ Templar (พระโหดกระโดดฟาด) ได้ตอน Lv. 50 มีความสามารถพิเศษในการใช้สุดยอดเวทมนตร์เพื่อการรักษาและการป้องกัน พวกเขาจะเป็นหน่วยสนับสนุนหลักที่สำคัญในการฟื้นฟูเลือดรวมไปถึงการเพิ่ม พลังป้องกันของเพื่อนร่วมทีม",img1:"/assets/images/7info/guide_elfIcon_01.jpg",detail1:"ด้วยคาถารักษาอเนกประสงค์ คุณสามารถรักษาตัวเองหรือสมาชิกปาร์ตี้ของคุณได้!",img2:"/assets/images/7info/guide_elfIcon_02.jpg",detail2:"ด้วย Revive คุณสามารถนำผู้เล่นกลับมาจากความตายได้!",img3:"/assets/images/7info/guide_elfIcon_03.jpg",detail3:"ด้วยความสามารถ Chrono คุณสามารถร่ายคาถาของคุณได้ทันที!"},list2:{imgBG:"",name:"Elf Priest",text:"“อย่ากลัวเพื่อนของฉัน คุณจะไม่พินาศภายใต้สายตาที่จับตามองและสัมผัสแห่งการรักษาของฉัน”",title:"นักบวชเป็นผู้รักษาที่มีประสิทธิภาพและทรงพลัง โดยมีความสามารถในการรักษาที่ดีที่สุดใน Rohan ทั้งหมด",img1:"/assets/images/7info/guide_elfIcon_04.jpg",detail1:"าระหน้าที่จะสร้างเกราะป้องกันอันทรงพลังไว้รอบตัวคุณและพันธมิตรของคุณเพื่อปกป้องพวกเขาจากความเสียหาย!",img2:"/assets/images/7info/guide_elfIcon_05.jpg",detail2:"Perfect Healing ฟื้นฟูสุขภาพเป้าหมายของคุณอย่างเต็มที่!",img3:"/assets/images/7info/guide_elfIcon_06.jpg",detail3:"Mind Air อนุญาตให้นักบวชกำจัดศัตรูทั้งหมดที่อยู่รอบตัวเขาเป็นระยะเวลาปานกลาง!"},list3:{imgBG:"/assets/images/elfm.png",name:"Elf Templar",text:"“คุณกล้าเข้าใจผิดว่าความเมตตาของเอลฟ์เป็นจุดอ่อนเหรอ? ให้ฉันแสดงให้คุณเห็นถึงข้อผิดพลาดในวิถีทางของคุณ”",title:"เทมพลาร์คือนักบวชนักรบแห่งเผ่าเอลฟ์ ซึ่งใช้ทั้งอาวุธอันทรงพลังและคาถาเพื่อลงโทษศัตรู",img1:"/assets/images/7info/54cad52fad0d469d855f5850f444e6ae.png",detail1:"Cast Over กำจัดเวลาร่ายคาถาของคุณอย่างสมบูรณ์ในช่วงเวลาสั้น ๆ !",img2:"/assets/images/7info/d86c55eff15948cfa8cda84312b72092.png",detail2:"การทำลายล้างสร้างความเสียหายจำนวนมหาศาลให้กับศัตรูของคุณ!",img3:"/assets/images/7info/158263d34aa64c8bb708169ee2cdff3f.png",detail3:"หน้ากากสีเทาปกป้องผู้ใช้จากการสูญเสียประสบการณ์ใดๆ ในขณะที่มีผล!"},imgList:{url1:"/assets/images/7info/guide_elf01_screen01.jpg",url2:"/assets/images/7info/guide_elf01_screen03.jpg",url3:"/assets/images/7info/guide_elf01_screen04.jpg",url4:"/assets/images/7info/guide_elf01_screen02.jpg"}}},{item:{id:4,img:"/assets/images/img_infoChar6.png",name:"Dhan (ดาห์น)",imgTitel:"/assets/images/7info/Dhan.png",list1:{imgBG:"/assets/images/dhan.png",name:"Dhan Assassin",text:"",title:"พวกเขาเป็นเครื่องจักรสังหารที่มีความร้ายกาจ และความเจ้าเล่ห์ที่แฝงอยู่ในสายเลือด นั่นเกิดมาจากการที่พวกเขามีใจที่ฝักใฝ่ในการฆ่าเป็นทุนอยู่แล้ว ซึ่งพวกเขาเป็นพวกที่น่ากลัวที่สุดในดินแดน ROHAN แห่งนี้ ถ้าพวกเขาสามารถเลือกได้ แรงอาฆาตของพวก Dhan ได้สั่งสมเป็นประสบการณ์ที่มาจากการสังหารผู้อื่น มากกว่าการจบภารกิจที่มีอยู่  สามารถเปลี่ยนเป็น Avenger (ผู้พยาบาท) หรือ Predator (ผู้ล่าสังหาร) ได้ตอน Lv. 50 มีความสามารถในการเคลื่อนไหวโดยที่ศัตรูไม่สามรถมองเห็น และเมื่อใดที่คุณสามารถมองเห็นพวกเขา นั่นหมายถึงการที่ตาของคุณไม่ได้อยู่บนใบหน้าของคุณอีกต่อไป",img1:"/assets/images/7info/guide_dhanIcon_01.jpg",detail1:"ทักษะซ่อนช่วยให้ Dhan แอบเข้าไปหาคู่ต่อสู้และรับการโจมตีครั้งแรกได้!",img2:"/assets/images/7info/guide_dhanIcon_02.jpg",detail2:"การเผามานาของ Dhan ไม่เพียงแต่จะดูดมานาของคู่ต่อสู้เท่านั้น แต่ยังทำให้พวกเขามึนงงอีกด้วย!",img3:"/assets/images/7info/guide_dhanIcon_03.jpg",detail3:"Envenom เพิ่มเอฟเฟกต์ความเสียหายจากพิษที่ไม่อาจต้านทานได้ให้กับการโจมตีปกติทั้งหมดของ Dhan!"},list2:{imgBG:"",name:"Dhan Avenger",text:"“ฉันจะพาคุณออกไป ไม่ว่าจะต้องแลกมาด้วยอะไรก็ตาม!”",title:"เวนเจอร์สเป็นคลาส Dhan ที่ดุดันกว่า ด้วยชุดทักษะที่ทรงพลังและน่ารังเกียจ พวกเขาจะไม่หยุดจนกว่าพวกเขาหรือศัตรูจะตาย",img1:"/assets/images/7info/guide_dhanIcon_04.jpg",detail1:"Double Psychic Phantom พัดคู่ต่อสู้ของคุณออกไปด้วยการโจมตีอันทรงพลังแบบคู่!",img2:"/assets/images/7info/guide_dhanIcon_05.jpg",detail2:"การเผาผลาญพลังชีวิตจะดูดพลังชีวิตของคู่ต่อสู้ เพิ่มและสตันพวกเขาในกระบวนการนี้!",img3:"/assets/images/7info/guide_dhanIcon_06.jpg",detail3:"เงาทำให้ Avenger มีภูมิต้านทานต่อเอฟเฟกต์ควบคุมฝูงชนส่วนใหญ่ในระยะเวลาที่จำกัด!"},list3:{imgBG:"/assets/images/dhanw.png",name:"Dhan Predator",text:"“เมื่อคุณอยู่ในสายตาของฉัน คุณก็เหมือนตายเลย”",title:"ผู้ล่าเป็นคลาส Dhan ที่ละเอียดอ่อนกว่า โดยสร้างกับดักที่หลากหลายเพื่อจับศัตรูในจุดที่ไม่ดี!",img1:"/assets/images/7info/guide_dhanIcon_07.jpg",detail1:"การตระหนักรู้ทำให้ Predator หลุดจากเอฟเฟกต์การควบคุมฝูงชนเพื่อสร้างแรงกดดันต่อศัตรูของเขามากขึ้น!",img2:"/assets/images/7info/guide_dhanIcon_08.jpg",detail2:"การทำลายล้างสร้างความเสียหายอย่างมหาศาลให้กับศัตรูที่อยู่ตรงหน้าคุณ!",img3:"/assets/images/7info/guide_dhanIcon_09.jpg",detail3:"ด้วยความสามารถของ Royal Mask ทำให้ Predator เพลิดเพลินกับสิทธิประโยชน์ของระดับเพิ่มเติม!"},imgList:{url1:"/assets/images/7info/guide_dhan01_screen04.jpg",url2:"/assets/images/7info/guide_dhan01_screen03.jpg",url3:"/assets/images/7info/guide_dhan01_screen02.jpg",url4:"/assets/images/7info/guide_dhan01_screen01.jpg"}}},{item:{id:5,img:"/assets/images/img_infoChar0.png",name:"Dark Elf (ดาร์ค เอลฟ์)",imgTitel:"/assets/images/7info/Dark-Elf.png",list1:{imgBG:"/assets/images/de.png",name:"Dark Elf Mage",text:"",title:"ดาร์กเอลฟ์เป็นผู้ใช้เวทมนตร์ที่ทรงพลังซึ่งชอบแยกตัวเองออกจากเผ่าพันธุ์ที่ 'น้อยกว่า' ของโรฮาน วัฒนธรรมของพวกเขามุ่งเน้นไปที่การพัฒนาศักยภาพในการทำลายล้างของเวทมนตร์เพื่อให้ได้ผลลัพธ์ที่น่าอัศจรรย์ ดาร์กเอลฟ์นำการทำลายล้างด้วยเวทย์มนตร์มาสู่สนามรบ ร่ายเวทย์มนตร์ด้วยความสง่างามที่ทำให้การทำลายล้างศัตรูแทบจะเป็นรูปแบบศิลปะ",img1:"/assets/images/7info/guide_darkelfIcon_01.jpg",detail1:"Health Coil ไม่เพียงแต่เพิ่มความเสียหายของคุณอย่างมาก แต่ยังดูดซับความเสียหายเพื่อสุขภาพของคุณอีกด้วย!",img2:"/assets/images/7info/guide_darkelfIcon_02.jpg",detail2:"Health Coil not only increases your damage dramatically, but it also absorbs the damage as health for you!",img3:"/assets/images/7info/guide_darkelfIcon_03.jpg",detail3:"ด้วย Dispel Magic คุณสามารถลบบัฟที่เพิ่มพลังให้กับศัตรูของคุณได้!"},list2:{imgBG:"",name:"Dark Elf Warlock",text:"“เรารู้ความลับของคุณทั้งหมด แผนการทั้งหมดที่คุณไม่อยากให้ใครรู้...”",title:"Warlocks เป็นผู้เชี่ยวชาญในการดวลเวทย์มนตร์ มุ่งเน้นไปที่การควบคุมการไหลของการต่อสู้เป็นหลัก พวกเขามีคาถาและทักษะที่จะขัดขวางคู่ต่อสู้ในการต่อสู้อย่างละเอียด",img1:"/assets/images/7info/guide_darkelfIcon_04.jpg",detail1:"การตายปลอมทำให้คุณสามารถแสร้งทำเป็นความตายของคุณเอง สูญเสียภัยคุกคามจากศัตรูทั้งหมด และได้รับความคงกระพันชั่วคราวเช่นกัน!",img2:"/assets/images/7info/guide_darkelfIcon_05.jpg",detail2:"Snatch ขโมยบัฟของคู่ต่อสู้ แล้วนำไปใช้กับตัวคุณเองแทน!",img3:"/assets/images/7info/guide_darkelfIcon_06.jpg",detail3:"Pollution Mind ครอบคลุมพื้นที่ที่มีพิษร้ายแรง สร้างความเสียหายให้กับผู้เล่นหลายคนมากขึ้นตามที่พวกเขาอยู่ในนั้นนานขึ้น!"},list3:{imgBG:"/assets/images/dew.png",name:"Dark Elf Wizard",text:"“เราเกิดมาจากเวทมนตร์ ใช้มันเป็นส่วนขยายของตัวเรา”",title:"พ่อมดเป็นนักสู้ที่ทรงพลังในสนามรบ ด้วยความเชี่ยวชาญในการสร้างความเสียหายเป็นกลุ่มจำนวนมาก Wizards สามารถสร้างความเสียหายจำนวนมากให้กับผู้เล่นหลายคนได้ในคราวเดียว!",img1:"/assets/images/7info/guide_darkelfIcon_07.jpg",detail1:"Killing Time จะลบคูลดาวน์ออกจากความสามารถของคุณ ทำให้คุณสามารถร่ายเวทย์ได้อย่างรวดเร็ว!",img2:"/assets/images/7info/guide_darkelfIcon_08.jpg",detail2:"การทำลายล้างจะขยายขอบเขตการโจมตีปกติของคุณ โดยโจมตีเป้าหมายเพิ่มเติมได้สูงสุดถึง 7 เป้าหมายในการโจมตีแต่ละครั้ง!",img3:"/assets/images/7info/guide_darkelfIcon_09.jpg",detail3:"ด้วย Mind Training พ่อมดจะเพิ่มความสามารถในการสร้างความเสียหายในการต่อสู้ได้อย่างมาก โดยการบัฟค่าสถานะการต่อสู้หลักหลายรายการ!"},imgList:{url1:"/assets/images/7info/Darkelf_screen02.jpg",url2:"/assets/images/7info/Darkelf_screen03.jpg",url3:"/assets/images/7info/Darkelf_screen04.jpg",url4:"/assets/images/7info/Darkelf_screen01.jpg"}}},{item:{id:6,img:"/assets/images/img_infoChar3.png",name:"Giant (เผ่ายักษ์)",imgTitel:"/assets/images/7info/Giant.png",list1:{imgBG:"/assets/images/giant.png",name:"Giant Warrior",text:"",title:"เผ่าพันธุ์ยักษ์เป็นนักรบที่มีกล้ามเนื้อขนาดมหึมา ถืออาวุธในมือข้างเดียวซึ่งจะต้องใช้เผ่าพันธุ์อื่นทั้งสองถือไว้ พวกเขาต่อสู้อย่างดุเดือดซึ่งไม่มีเผ่าพันธุ์อื่นในโรฮานเทียบได้",img1:"/assets/images/7info/guide_giantIcon_01.jpg",detail1:"ด้วยความสามารถอันบ้าคลั่ง ความเสียหายคริติคอลของคุณจะเพิ่มขึ้นอย่างมาก!",img2:"/assets/images/7info/guide_giantIcon_02.jpg",detail2:"Bereave เป็นความสามารถอันทรงพลังที่จะใช้เป็นนักรบยักษ์ที่ถืออาวุธคู่ สร้างความเสียหายอย่างหนักด้วยดาบทั้งสองเล่ม!",img3:"/assets/images/7info/guide_giantIcon_03.jpg",detail3:"Reap เป็นความสามารถพิเศษในการโจมตีด้วยอาวุธขั้วโลก ซึ่งเป็นความสามารถที่มีประสิทธิภาพในการสร้างความเสียหายให้กับศัตรูของคุณ!"},list2:{imgBG:"",name:"Giant Berserker",text:"'คุณจะพบจุดจบอันรุ่งโรจน์ในการต่อสู้กับฉัน'",title:"เบอร์เซิร์กเกอร์เป็นผู้เชี่ยวชาญด้านหอก โดยใช้ความแข็งแกร่งและความสามารถในการต่อสู้กับคู่ต่อสู้ตามเงื่อนไขของตนเอง",img1:"/assets/images/7info/guide_giantIcon_04.jpg",detail1:"Cleave เป็นความสามารถอันทรงพลัง ซึ่งจะแข็งแกร่งยิ่งขึ้นเมื่อคอมโบกับ Jolt!",img2:"/assets/images/7info/guide_giantIcon_05.jpg",detail2:"Berserk เพิ่มสถิติการต่อสู้ของ Giants ทั้งหมด ทำให้พวกเขาอันตรายมากขึ้นในการต่อสู้!",img3:"/assets/images/7info/guide_giantIcon_06.jpg",detail3:"การตอบโต้จะลงโทษผู้ที่พยายามสร้างความเสียหายให้กับยักษ์จากระยะไกล สตันพวกเขา และให้เวลาแก่ยักษ์ในการเข้าใกล้!"},list3:{imgBG:"/assets/images/giantg.png",name:"Giant Savage",text:"This is gonna hurt.. A LOT",title:"Savages เป็นผู้เชี่ยวชาญการใช้อาวุธคู่ของเผ่าพันธุ์ยักษ์ กลยุทธ์ในการสู้รบของพวกเขาช่างน่าสยดสยองเป็นพิเศษ ทำลายล้างคู่ต่อสู้ด้วยความสามารถของพวกเขา!",img1:"/assets/images/7info/guide_giantIcon_07.jpg",detail1:"การสกัดจะทำให้อวัยวะสำคัญของศัตรูของคุณเจ็บปวดที่สุดเท่าที่จะเป็นไปได้!",img2:"/assets/images/7info/guide_giantIcon_08.jpg",detail2:"Lunge ช่วยให้ศัตรูของคุณเคลื่อนที่ช้าลงอย่างมากในการต่อสู้ ทำให้พวกเขาไม่สามารถหนีจากความโกรธของคุณได้!",img3:"/assets/images/7info/guide_giantIcon_09.jpg",detail3:"Storming Cross เป็นความสามารถที่ทรงพลังในตัวเอง แต่เมื่อมีสมองอยู่ในคลังของคุณ ความเสียหายก็เพิ่มขึ้น!"},imgList:{url1:"/assets/images/7info/guide_giant01_screen02.jpg",url2:"/assets/images/7info/guide_giant01_screen03.jpg",url3:"/assets/images/7info/guide_giant01_screen01.jpg",url4:"/assets/images/7info/attach-1499427094998.jpg"}}},{item:{id:7,img:"/assets/images/img_infoChar1.png",name:"Dekan (เดคาน)",imgTitel:"/assets/images/7info/Dekan.png",list1:{imgBG:"/assets/images/ddf.png",name:"Dekan Dragon fighter",text:"",title:"สร้างขึ้นจากพลังที่เหลืออยู่ของมังกรตัวสุดท้าย Dekans เป็นนักสู้ที่ทรงพลัง เลือดมังกรของพวกเขาเติมเต็มความสามารถที่เหนือกว่ามนุษย์ทั่วไป",img1:"/assets/images/7info/guide_dekanIcon_01.jpg",detail1:"ด้วย Dragon's Skin คุณจะรอดพ้นจากความเสียหายในขณะที่คุณมึนงงหรือเป็นอัมพาต!",img2:"/assets/images/7info/guide_dekanIcon_02.jpg",detail2:"ความสามารถอันทรงพลังอย่างแท้จริง Forefoot Swing ถ่ายทอดความแข็งแกร่งของการแข่งขันของคุณไปสู่การโจมตีอันทรงพลัง!",img3:"/assets/images/7info/guide_dekanIcon_03.jpg",detail3:"หางมังกรถือดาบเชื้อชาติอันทรงพลังที่เรียกว่า Zhen เป็นความสามารถอันทรงพลังที่คลาส Dekan ใช้!"},list2:{imgBG:"",name:"Dekan Dragon Knight",text:"“มนุษย์เหล่านี้คิดว่าพวกเขาสามารถต่อสู้กับมังกรได้เหรอ? ให้เราแสดงให้พวกเขาเห็นถึงข้อผิดพลาดในวิถีทางของพวกเขา",title:"อัศวินมังกรเป็นแนวหน้าของกองกำลังโจมตี Dekan ด้วยความสามารถในการต่อสู้อันทรงพลังและอาวุธอันทรงพลัง พวกมันจึงมีความทนทานและยากต่อการหยุด ไม่ต้องพูดถึงการชะลอตัวเลย",img1:"/assets/images/7info/55e607e7fa39403b958ea1c420fcbf71.png",detail1:"Lunacy ช่วยเพิ่มความเร็วการโจมตีของคุณ เพิ่มความเสียหายที่คุณทำได้อย่างมากขณะอยู่ในร่างมังกร!",img2:"/assets/images/7info/fe11cc4ec50a447bb338a0e54babef82.png",detail2:"เมื่อรวมเข้ากับ Lunacy ได้ดี Sudden Death จะช่วยเพิ่มความเสียหายของคุณด้วยบัฟติดตัวที่แข็งแกร่ง!",img3:"/assets/images/7info/30429f93a9bd479086341d4834ff448b.png",detail3:"การเจาะทะลุเป็นการโจมตีที่ทรงพลังซึ่งจะเพิกเฉยต่อการป้องกันของฝ่ายตรงข้าม และทำให้พวกมันมึนงงเช่นกัน!"},list3:{imgBG:"/assets/images/dds.png",name:"Dekan Dragon Sage",text:"We will avenge the murder of our ancestors.",title:"Dragon Mages มีความแข็งแกร่งคล้ายคลึงกับ Dragon Knights อย่างไรก็ตาม พวกเขาเสริมความสามารถในการต่อสู้ด้วยพลังที่มาจากพลังงานของมรดกมังกรที่มากขึ้น",img1:"/assets/images/7info/b8da5131c8a842a8b1ee8b9578b94653.png",detail1:"Impenetrable ช่วยเพิ่มการป้องกันของคุณในขณะที่คุณอยู่ในร่างมังกรเป็นจำนวนมาก!",img2:"/assets/images/7info/b1c70cb7231e4243a732428db55dafda.png",detail2:"เมื่อรวมกับ Impenetrable แล้ว Blue Defense จะลดความเสียหายที่คุณได้รับมากยิ่งขึ้น!",img3:"/assets/images/7info/a77cd9bf2e7648c7acfb9d12cb698679.png",detail3:"ด้วย Moving Shadow คุณสามารถเพิ่มความเร็วการโจมตีได้อย่างมากในช่วงเวลาสั้นๆ!"},imgList:{url1:"/assets/images/7info/guide_dekan01_screen04.jpg",url2:"/assets/images/7info/guide_dekan01_screen03.jpg",url3:"/assets/images/7info/guide_dekan01_screen01.jpg",url4:"/assets/images/7info/guide_dekan01_screen02.jpg"}}}],eZ=[{myswiper:{name:"Human (เผ่ามนุษย์)",img:"/assets/images/7king/Rohan-human.jpg"}},{myswiper:{name:"Half Elf (ฮาล์ฟเอล)",img:"/assets/images/7king/Rohan-half-elf.jpg"}},{myswiper:{name:"Elf (เอลฟ์)",img:"/assets/images/7king/Rohan-elf.jpg"}},{myswiper:{name:"Dhan (ดาห์น)",img:"/assets/images/7king/Rohan-dhan.jpg"}},{myswiper:{name:"Dark Elf (ดาร์ค เอลฟ์)",img:"/assets/images/7king/Rohan-dark-elf.jpg"}},{myswiper:{name:"Giant (เผ่ายักษ์)",img:"/assets/images/7king/Rohan-giant.jpg"}},{myswiper:{name:"Dekan (เดคาน)",img:"/assets/images/7king/Rohan-dekan.jpg"}}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"section  ",id:"section0",children:[(0,a.jsxs)("div",{className:"bgVideoContainer",children:[(0,a.jsx)("div",{className:"bgRepeat"}),(0,a.jsx)("div",{className:"bgShadow"})]}),(0,a.jsx)("div",{className:"intro",children:(0,a.jsxs)("div",{className:"element",children:[(0,a.jsx)("div",{className:"button_download",children:(0,a.jsx)("a",{href:"#download",onClick:()=>{var e;return window.open(null==eT?void 0:null===(e=eT.data)||void 0===e?void 0:e.link)},children:(0,a.jsx)("img",{src:"/assets/images/gamedownload.png",name:"button_download",border:0,style:{height:"64px",maxWidth:"369px"}})})}),(0,a.jsx)("div",{className:"nextPage",children:(0,a.jsx)("span",{children:(0,a.jsx)("img",{src:"/assets/images/ico_next.png"})})})]})})]}),(0,a.jsxs)("div",{className:"bg-slides",children:[(0,a.jsx)("h2",{style:{textAlign:"center",margin:0,padding:0},children:"อาชีพและเผ่าพันธุ์ ทั้ง 7"}),(0,a.jsxs)("div",{className:"container slides",children:[(0,a.jsx)("div",{className:"row menu-slide",id:"5232526412".concat(null==eO?void 0:null===(i=eO.data)||void 0===i?void 0:i.id),children:(null==eM?void 0:eM.length)>0&&eM.map((e,i)=>{var s,t,l,n,d;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("a",{href:"#5232526412".concat(null==e?void 0:null===(s=e.item)||void 0===s?void 0:s.id),className:"column ".concat((null==e?void 0:null===(t=e.item)||void 0===t?void 0:t.id)===eP&&"active"," demo"),style:{background:"url(".concat(null==e?void 0:null===(l=e.item)||void 0===l?void 0:l.img,")")},onClick:()=>showSlides(e),children:(0,a.jsx)("p",{className:"name- ".concat((null==e?void 0:null===(n=e.item)||void 0===n?void 0:n.id)===eP&&"active"),style:{position:"relative"},children:null==e?void 0:null===(d=e.item)||void 0===d?void 0:d.name})},i)})})}),(0,a.jsx)("div",{className:"bg-start ".concat(!ez&&"d-none"),style:{background:"url(/assets/images/130572.jpg)",height:"573px",backgroundPosition:"center",backgroundSize:"cover"},children:(0,a.jsx)(r.tq,{spaceBetween:30,centeredSlides:!0,loop:!0,autoplay:{delay:5500,disableOnInteraction:!1},modules:[u.pt],className:"mySwiper",children:eZ&&eZ.map((e,i)=>{var s,t;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(r.o5,{className:"mySwiper-img",style:{background:"url(".concat(null==e?void 0:null===(s=e.myswiper)||void 0===s?void 0:s.img,")")},children:[" ",(0,a.jsx)("h2",{style:{textAlign:"center",margin:0,padding:0},children:null==e?void 0:null===(t=e.myswiper)||void 0===t?void 0:t.name})]},i)})})})}),(0,a.jsxs)("div",{className:"mySlides text-center  ".concat((null==eO?void 0:null===(s=eO.data)||void 0===s?void 0:s.id)===eP&&"show"),children:[(0,a.jsx)("hr",{className:"x-hr-border-glow "}),(0,a.jsxs)("div",{className:"contain",children:[(0,a.jsxs)("div",{className:"bg-img",style:{background:"url(".concat(null==eO?void 0:null===(n=eO.data)||void 0===n?void 0:null===(l=n.list1)||void 0===l?void 0:l.imgBG,")")},children:[(0,a.jsx)("img",{className:" mb-5",src:null==eO?void 0:null===(o=eO.data)||void 0===o?void 0:o.imgTitel,alt:""}),(0,a.jsx)("h3",{className:"text-center mb-5 ",style:{color:"#000"},children:null==eO?void 0:null===(f=eO.data)||void 0===f?void 0:f.name}),(0,a.jsx)("h5",{className:"text-left",style:{color:"#000"},children:(0,a.jsx)("b",{children:null==eO?void 0:null===(p=eO.data)||void 0===p?void 0:null===(v=p.list1)||void 0===v?void 0:v.name})}),(0,a.jsx)("p",{className:"text-left",children:null==eO?void 0:null===(_=eO.data)||void 0===_?void 0:null===(j=_.list1)||void 0===j?void 0:j.title}),(0,a.jsxs)("table",{className:"tbl_lst",children:[(0,a.jsxs)("colgroup",{children:[(0,a.jsx)("col",{style:{width:"10%"}}),(0,a.jsx)("col",{})]}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"cell_v1",children:(0,a.jsx)("img",{src:null==eO?void 0:null===(y=eO.data)||void 0===y?void 0:null===(x=y.list1)||void 0===x?void 0:x.img1,alt:!0})}),(0,a.jsx)("td",{className:"txt_left txt_light",children:(0,a.jsx)("span",{style:{fontFamily:"Tahoma",fontSize:14},children:null==eO?void 0:null===(N=eO.data)||void 0===N?void 0:null===(b=N.list1)||void 0===b?void 0:b.detail1})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"cell_v1",children:(0,a.jsx)("img",{src:null==eO?void 0:null===(S=eO.data)||void 0===S?void 0:null===(k=S.list1)||void 0===k?void 0:k.img2,alt:!0})}),(0,a.jsx)("td",{className:"txt_left txt_light",children:(0,a.jsx)("span",{style:{fontFamily:"Tahoma",fontSize:14},children:null==eO?void 0:null===(w=eO.data)||void 0===w?void 0:null===(I=w.list1)||void 0===I?void 0:I.detail2})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"cell_v1",children:(0,a.jsx)("img",{src:null==eO?void 0:null===(T=eO.data)||void 0===T?void 0:null===(D=T.list1)||void 0===D?void 0:D.img3,alt:!0})}),(0,a.jsx)("td",{className:"txt_left txt_light",children:(0,a.jsx)("span",{style:{fontFamily:"Tahoma",fontSize:14},children:null==eO?void 0:null===(R=eO.data)||void 0===R?void 0:null===(E=R.list1)||void 0===E?void 0:E.detail3})})]})]})]}),(0,a.jsx)("h5",{className:"text-left",style:{color:"#000"},children:null==eO?void 0:null===(G=eO.data)||void 0===G?void 0:null===(C=G.list2)||void 0===C?void 0:C.name}),(0,a.jsx)("p",{className:"text-left",style:{color:"rgb(255, 0, 0)",fontSize:"15px"},children:null==eO?void 0:null===(F=eO.data)||void 0===F?void 0:null===(B=F.list2)||void 0===B?void 0:B.text}),(0,a.jsx)("p",{className:"text-left",children:(0,a.jsx)(a.Fragment,{children:null==eO?void 0:null===(P=eO.data)||void 0===P?void 0:null===(L=P.list2)||void 0===L?void 0:L.title})}),(0,a.jsxs)("table",{className:"tbl_lst",children:[(0,a.jsxs)("colgroup",{children:[(0,a.jsx)("col",{style:{width:"10%"}}),(0,a.jsx)("col",{})]}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"cell_v1",children:(0,a.jsx)("img",{src:null==eO?void 0:null===(O=eO.data)||void 0===O?void 0:null===(H=O.list2)||void 0===H?void 0:H.img1,alt:!0})}),(0,a.jsx)("td",{className:"txt_left txt_light",children:(0,a.jsx)("span",{style:{fontFamily:"Tahoma",fontSize:14},children:null==eO?void 0:null===(z=eO.data)||void 0===z?void 0:null===(W=z.list2)||void 0===W?void 0:W.detail1})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"cell_v1",children:(0,a.jsx)("img",{src:null==eO?void 0:null===(M=eO.data)||void 0===M?void 0:null===(A=M.list2)||void 0===A?void 0:A.img2,alt:!0})}),(0,a.jsx)("td",{className:"txt_left txt_light",children:(0,a.jsx)("span",{style:{fontFamily:"Tahoma",fontSize:14},children:null==eO?void 0:null===(K=eO.data)||void 0===K?void 0:null===(Z=K.list2)||void 0===Z?void 0:Z.detail2})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"cell_v1",children:(0,a.jsx)("img",{src:null==eO?void 0:null===(X=eO.data)||void 0===X?void 0:null===(V=X.list2)||void 0===V?void 0:V.img3,alt:!0})}),(0,a.jsx)("td",{className:"txt_left txt_light",children:(0,a.jsx)("span",{style:{fontFamily:"Tahoma",fontSize:14},children:null==eO?void 0:null===(q=eO.data)||void 0===q?void 0:null===(U=q.list2)||void 0===U?void 0:U.detail3})})]})]})]})]}),(0,a.jsxs)("div",{className:"bg-img3 ".concat((null==eO?void 0:null===(J=eO.data)||void 0===J?void 0:J.id)===eP&&"show3"),style:{background:"url(".concat(null==eO?void 0:null===(Q=eO.data)||void 0===Q?void 0:null===(Y=Q.list3)||void 0===Y?void 0:Y.imgBG,")")},children:[(0,a.jsx)("h5",{className:"text-left",style:{color:"#000"},children:null==eO?void 0:null===(ee=eO.data)||void 0===ee?void 0:null===($=ee.list3)||void 0===$?void 0:$.name}),(0,a.jsx)("p",{className:"text-left",style:{color:"rgb(255, 0, 0)",fontSize:"15px"},children:null==eO?void 0:null===(es=eO.data)||void 0===es?void 0:null===(ei=es.list3)||void 0===ei?void 0:ei.text}),(0,a.jsx)("p",{className:"text-left text-brak",children:(0,a.jsx)(a.Fragment,{children:null==eO?void 0:null===(et=eO.data)||void 0===et?void 0:null===(ea=et.list3)||void 0===ea?void 0:ea.title})}),(0,a.jsxs)("table",{className:"tbl_lst",children:[(0,a.jsxs)("colgroup",{children:[(0,a.jsx)("col",{style:{width:"10%"}}),(0,a.jsx)("col",{})]}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"cell_v1",children:(0,a.jsx)("img",{src:null==eO?void 0:null===(en=eO.data)||void 0===en?void 0:null===(el=en.list3)||void 0===el?void 0:el.img1,alt:!0})}),(0,a.jsx)("td",{className:"txt_left txt_light",children:(0,a.jsx)("span",{style:{fontFamily:"Tahoma",fontSize:14},children:null==eO?void 0:null===(eo=eO.data)||void 0===eo?void 0:null===(ed=eo.list3)||void 0===ed?void 0:ed.detail1})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"cell_v1",children:(0,a.jsx)("img",{src:null==eO?void 0:null===(em=eO.data)||void 0===em?void 0:null===(eg=em.list3)||void 0===eg?void 0:eg.img2,alt:!0})}),(0,a.jsx)("td",{className:"txt_left txt_light",children:(0,a.jsx)("span",{style:{fontFamily:"Tahoma",fontSize:14},children:null==eO?void 0:null===(er=eO.data)||void 0===er?void 0:null===(ec=er.list3)||void 0===ec?void 0:ec.detail2})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"cell_v1",children:(0,a.jsx)("img",{src:null==eO?void 0:null===(eh=eO.data)||void 0===eh?void 0:null===(eu=eh.list3)||void 0===eu?void 0:eu.img3,alt:!0})}),(0,a.jsx)("td",{className:"txt_left txt_light",children:(0,a.jsx)("span",{style:{fontFamily:"Tahoma",fontSize:14},children:null==eO?void 0:null===(ev=eO.data)||void 0===ev?void 0:null===(ef=ev.list3)||void 0===ef?void 0:ef.detail3})})]})]})]})]}),(0,a.jsxs)("div",{style:{fontSize:0,marginTop:20},children:[(0,a.jsx)("img",{src:null==eO?void 0:null===(ej=eO.data)||void 0===ej?void 0:null===(ep=ej.imgList)||void 0===ep?void 0:ep.url1,className:"list-img"}),(0,a.jsx)("img",{src:null==eO?void 0:null===(ex=eO.data)||void 0===ex?void 0:null===(e_=ex.imgList)||void 0===e_?void 0:e_.url2,className:"list-img"}),(0,a.jsx)("img",{src:null==eO?void 0:null===(eb=eO.data)||void 0===eb?void 0:null===(ey=eb.imgList)||void 0===ey?void 0:ey.url3,className:"list-img"}),(0,a.jsx)("img",{src:null==eO?void 0:null===(ek=eO.data)||void 0===ek?void 0:null===(eN=ek.imgList)||void 0===eN?void 0:eN.url4,className:"list-img"})]})]})]})]})]}),(0,a.jsx)("div",{id:"main",children:(0,a.jsx)("section",{className:"section main-info",children:(0,a.jsxs)("div",{className:"section-wrap",children:[(0,a.jsxs)("section",{className:"news",children:[(0,a.jsx)("a",{href:"/news-all/?page=notice",children:(0,a.jsx)("span",{className:"title",children:"กิจกรรม"})}),(0,a.jsx)("div",{className:"board-list",children:(0,a.jsxs)("table",{children:[(0,a.jsxs)("colgroup",{children:[(0,a.jsx)("col",{className:"category"}),(0,a.jsx)("col",{className:"subject"}),(0,a.jsx)("col",{className:"time"})]}),(0,a.jsx)("tbody",{children:(null==eF?void 0:null===(eS=eF.data)||void 0===eS?void 0:eS.promotion_limit)&&(null==eF?void 0:null===(ew=eF.data)||void 0===ew?void 0:null===(eI=ew.promotion_limit)||void 0===eI?void 0:eI.map((e,i)=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("tr",{className:"".concat("event"==e.type_event&&"important"),children:[(0,a.jsx)("td",{className:"category",children:(0,a.jsx)("span",{className:"category inspection",children:e.type_event})}),(0,a.jsx)("td",{className:"subject",children:(0,a.jsxs)("a",{href:"#".concat(e.id),onClick:()=>eD.push("/product-detail-3?provider=".concat(e.id)),children:[(0,a.jsx)("span",{className:"subject",children:(0,a.jsx)("span",{className:"text",children:e.titel_event})}),(0,a.jsx)("span",{className:"content",children:e.text_event})]})}),(0,a.jsx)("td",{className:"time",children:(0,a.jsx)("time",{children:h(e.strart_date).format("ll")})})]},i)})))})]})})]}),(0,a.jsxs)("div",{className:"right-area",children:[(0,a.jsx)("section",{className:"skill-simulator"}),(0,a.jsxs)("section",{className:"service-banner",children:[(0,a.jsx)("nav",{className:"user-service",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"register",href:"/sign-up/#section4",children:(0,a.jsx)("span",{children:"สมัครไอดี"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"changepass",href:"/login/#section4",children:(0,a.jsx)("span",{children:"เปลี่ยนรหัส"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"topup",href:"/sign-up/#section4",children:(0,a.jsx)("span",{children:"เติมเงิน"})})})]})}),(0,a.jsx)("nav",{className:"sns-service",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"facebook",onClick:()=>window.open("https://www.facebook.com/profile.php?id=61554172065754&mibextid=REkXMA"),href:"#facebook",children:(0,a.jsxs)("span",{children:["Facebook",(0,a.jsx)("br",{}),(0,a.jsx)("strong",{children:"Official"})]})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"youtube",href:"#",children:(0,a.jsxs)("span",{children:["PlaySrver",(0,a.jsx)("br",{}),(0,a.jsx)("strong",{children:"Channel"})]})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"facebook_group",onClick:()=>window.open("https://www.facebook.com/profile.php?id=61554172065754&mibextid=REkXMA"),href:"#facebook_group",children:(0,a.jsxs)("span",{children:["Community",(0,a.jsx)("br",{}),(0,a.jsx)("strong",{children:"Group"})]})})})]})})]})]})]})})})]})};function pages_Home(){(0,t.useEffect)(()=>{data_api()},[]),(0,t.useEffect)(()=>{o.W.on("some event",e=>{})},[o.W]);let data_api=()=>{d.Z.get_data_event().then(e=>{!0==e.data.success&&(getFriendListToCreateSocketRoom(),i({data:e.data.data}))}).catch(e=>{})},getFriendListToCreateSocketRoom=()=>{d.Z.get_data_event().then(e=>{e.data.success}).catch(e=>{})},[e,i]=(0,t.useReducer)((e,i)=>({...e,...i}),{data:[]});return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(l.Z,{headerStyle:1,footerStyle:1,children:[(0,a.jsx)(Home,{datamember:e}),(0,a.jsx)(n.Z,{})]})})}},7025:function(){},19360:function(){},60439:function(){},92703:function(e,i,s){"use strict";var a=s(50414);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,i,s,t,l,n){if(n!==a){var d=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},45697:function(e,i,s){e.exports=s(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[1450,4885,5121,1664,3129,6502,9265,3920,7857,4460,4645,6836,1481,9774,2888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);