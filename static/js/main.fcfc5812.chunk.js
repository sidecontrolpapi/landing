(this.webpackJsonpadiazx14=this.webpackJsonpadiazx14||[]).push([[0],[,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(4),i=a.n(c),r=a(3),l=a(0),o=Object(n.createContext)(),d=function(e){var t=Object(n.useState)(!1),a=Object(r.a)(t,2),s=a[0],c=a[1],i=Object(n.useState)(0),d=Object(r.a)(i,2),j=d[0],h=d[1],b=function(){if(h(Math.round(window.scrollY/window.innerHeight)),console.log(j),1===j)console.log("yes");else console.log("no")};Object(n.useEffect)((function(){return window.addEventListener("scroll",b),function(){window.removeEventListener("scroll",b)}}),[]);return Object(l.jsx)(o.Provider,{value:{sideMenuActive:s,setSideMenuActive:c,selected:j,handleSelect:function(e,t,a){h(e),c(!1),document.body.style.overflow="auto",a?setTimeout((function(){document.getElementById(t).scrollIntoView()}),1e3):document.getElementById(t).scrollIntoView()}},children:e.children})},j=a.p+"static/media/me.ee68a24a.webp",h=a.p+"static/media/MidArrow.b5d76927.svg",b=function(){var e=Object(n.useContext)(o).selected;return Object(l.jsxs)("section",{id:"AboutMe",children:[Object(l.jsx)("img",{className:"Me ".concat(1===e?"meShowing":""),src:j,alt:""}),Object(l.jsxs)("div",{id:"summary",children:[Object(l.jsx)("h1",{className:"red ".concat(e>=1&&e<3?"typed":"beforeType"),children:"//About Me"}),Object(l.jsx)("p",{className:"".concat(e>=1&&e<3?"textShowing":"beforeShow"),children:'"I am a proud member of the 46th graduating class of the Vocational Pre-University Institute of Exact Sciences \u201cVladimir Ilich Lenin\u201d in Havana, Cuba. There I received a high-quality education and met the most intellectually-keen and kind-hearted individuals; With whom I forged life-long bonds of friendship and explored my academic interests, eventually finding my passion for Technology and Programming in particular.'}),Object(l.jsx)("p",{className:"".concat(e>=1&&e<3?"textShowing":"beforeShow"),children:"In my senior year of high school, I gained admission to the prestigious Mathematics and Computer Science Department at the University of Havana. However, in early 2021, I emigrated to the United States before enrolling. Since then, I have been taking multiple online courses in Math and Programming to cope with my impossibility of going to school as a recent immigrant. Right now, I\u2019m applying to colleges in the USA with the hope of finally continuing my education, through which I hope to become the best engineer and person I can be."}),Object(l.jsx)("p",{className:"".concat(e>=1&&e<3?"textShowing":"beforeShow"),children:"Recently, I have been working as a lead developer in a team of freelancers, which produces fully custom web solutions for small businesses. My responsibilities include Project Management; API Development, Database Design, and Deployment Operations in the back-end; and API consuming, UX interactivity, and some CSS styling in the front-end. My main goal with this enterprise is to apply what I learn online and accumulate the necessary experience to land a Coding internship next Spring. Check out our latest projects below."})]}),Object(l.jsx)("img",{id:"MidArrow",src:h,alt:""})]})},m=a.p+"static/media/LongArrow.65bf7837.svg",x=a.p+"static/media/ShortArrow.249e0542.svg",u=function(){return Object(l.jsxs)("section",{className:"black",id:"Welcome",children:[Object(l.jsx)("header",{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("h1",{id:"Hello",children:[Object(l.jsx)("span",{className:"red",children:"<"}),"Hello"]})})}),Object(l.jsx)("main",{className:"textShowing",children:Object(l.jsxs)("div",{className:"flex-div",children:[Object(l.jsxs)("h2",{className:"red",children:["<Full-Stack Developer",Object(l.jsx)("br",{})]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{className:"red",children:"location = "}),'"Miami, Florida"']}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{className:"red",children:"description ="}),' "I am a self-taught full-stack web developer who works as a freelancer, mainly with Django in the back-end and Nextjs in the front-end. I love building everything custom: having fun implementing every feature and creating the most reliable, scalable, and personalized solutions out of my customers\u2019 needs." ',Object(l.jsx)("span",{className:"red",children:"/>"})]}),Object(l.jsx)("img",{className:"ShortArrow",src:x,alt:""}),Object(l.jsx)("img",{className:"LongArrow",src:m,alt:"arrow"})]})})]})},O=function(e){var t=e.mobile,a=Object(n.useContext)(o),s=a.selected,c=a.handleSelect;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("li",{className:"Navlink ".concat(1===s?"selected":""),children:[" ",Object(l.jsx)("span",{onClick:function(){return c(1,"AboutMe",t)},children:"About Me"}),"  "]}),Object(l.jsxs)("li",{className:"Navlink ".concat(s<5&&s>1?"selected":""),children:[" ",Object(l.jsx)("span",{onClick:function(){return c(2,"Projects",t)},children:"Projects"})]}),Object(l.jsxs)("li",{className:"Navlink ".concat(s>=5?"selected":""),children:[" ",Object(l.jsx)("span",{onClick:function(){return c(5,"Contact",t)},children:"Contact"})," "]})]})},f=function(){var e=Object(n.useContext)(o),t=e.sideMenuActive,a=e.setSideMenuActive;return Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:t?"nav-active":"",children:[Object(l.jsxs)("li",{onClick:function(){t?(a(!1),document.body.style.overflow="auto"):(a(!0),document.body.style.overflow="hidden")},children:[Object(l.jsx)("div",{className:"hamline ".concat(t?"ham-active":""),id:"line-1"}),Object(l.jsx)("div",{className:"hamline ".concat(t?"ham-active":""),id:"line-2"}),Object(l.jsx)("div",{className:"hamline ".concat(t?"ham-active":""),id:"line-3"})]}),Object(l.jsx)("li",{children:"Adri\xe1n Vald\xe9s D\xedaz"}),Object(l.jsx)(O,{mobile:!1})]})})},g=function(){return Object(l.jsxs)("div",{className:"Footer",children:[Object(l.jsxs)("div",{className:"PersonalInfo",children:[Object(l.jsx)("p",{children:"Adri\xe1n Vald\xe9s D\xedaz"}),Object(l.jsx)("p",{href:"#",children:"/"}),Object(l.jsx)("a",{href:"#AboutMe",children:"About Me"}),Object(l.jsx)("a",{href:"#Projects",children:"Projects"}),Object(l.jsx)("a",{href:"#Contact",children:"Contact"})]}),Object(l.jsxs)("div",{className:"Networks",children:[Object(l.jsx)("svg",{className:"RightArr",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 74.295 43.686",children:Object(l.jsxs)("g",{id:"Group_10","data-name":"Group 10",transform:"translate(-1682.851 1142.899) rotate(-90)",children:[Object(l.jsx)("path",{id:"Path_1","data-name":"Path 1",d:"M1100.981,1160.387l20.075,20.075,20.075-20.075",transform:"translate(0 573.148)",fill:"none",stroke:"white","stroke-width":"5"}),Object(l.jsx)("path",{id:"Path_2","data-name":"Path 2",d:"M1145.328,1116.822v70.76",transform:"translate(-24.272 566.029)",fill:"none",stroke:"white","stroke-width":"5"})]})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/adri%C3%A1n-vald%C3%A9s-d%C3%ADaz-2a10491b7/",children:Object(l.jsx)("svg",{className:"linkNet",xmlns:"http://www.w3.org/2000/svg",width:"38",height:"37.92",viewBox:"0 0 38 37.92",children:Object(l.jsx)("g",{id:"Capa_2","data-name":"Capa 2",transform:"translate(0 -0.05)",children:Object(l.jsxs)("g",{id:"Capa_1","data-name":"Capa 1",transform:"translate(0 0.05)",children:[Object(l.jsx)("rect",{id:"Rectangle_13","data-name":"Rectangle 13",width:"7.846",height:"25.328",transform:"translate(0.751 12.592)",fill:"white"}),Object(l.jsx)("path",{id:"Path_3","data-name":"Path 3",d:"M4.634,9.318A4.634,4.634,0,1,0,0,4.695,4.65,4.65,0,0,0,4.634,9.318Z",transform:"translate(0 -0.05)",fill:"white"}),Object(l.jsx)("path",{id:"Path_4","data-name":"Path 4",d:"M16.031,20.232c0-3.564,1.6-5.689,4.794-5.689,2.892,0,4.283,2.045,4.283,5.689v13.3h7.8V17.548c0-6.775-3.851-10.067-9.22-10.067a8.853,8.853,0,0,0-7.638,4.187V8.2H8.52V33.527h7.511Z",transform:"translate(5.095 4.393)",fill:"white"})]})})})}),Object(l.jsx)("a",{href:"https://github.com/adiazx14",children:Object(l.jsx)("svg",{className:"linkNet",xmlns:"http://www.w3.org/2000/svg",width:"38.463",height:"37.502",viewBox:"0 0 38.463 37.502",children:Object(l.jsx)("path",{id:"GitHub-Logo.wine",d:"M18.983,0A18.6,18.6,0,0,0,0,18.921,19.442,19.442,0,0,0,13.144,37.47c.993.178,1.342-.434,1.342-.938,0-.481-.023-3.133-.023-4.761,0,0-5.428,1.163-6.568-2.311,0,0-.884-2.257-2.156-2.838,0,0-1.776-1.217.124-1.194a4.093,4.093,0,0,1,2.993,2,4.1,4.1,0,0,0,5.653,1.621,4.31,4.31,0,0,1,1.241-2.613c-4.335-.481-8.708-1.109-8.708-8.569A5.877,5.877,0,0,1,8.871,13.3a7.327,7.327,0,0,1,.2-5.265c1.621-.5,5.351,2.094,5.351,2.094a18.32,18.32,0,0,1,9.74,0s3.73-2.606,5.351-2.094a7.323,7.323,0,0,1,.2,5.265,6.028,6.028,0,0,1,2,4.567c0,7.483-4.567,8.08-8.9,8.569a4.586,4.586,0,0,1,1.318,3.6c0,2.613-.023,5.847-.023,6.483,0,.5.357,1.117,1.342.938A19.263,19.263,0,0,0,38.463,18.921C38.463,8.166,29.739,0,18.983,0Z",fill:"white"})})})]}),Object(l.jsx)("div",{className:"Bye",children:Object(l.jsxs)("h1",{id:"Hello",className:"white",children:[Object(l.jsx)("span",{className:"white",children:"/"}),"Bye",Object(l.jsx)("span",{className:"red",children:">"})]})}),Object(l.jsx)("p",{className:"signature",children:"Adri\xe1n Vald\xe9s Diaz 2021  \xa9"})]})},p=a.p+"static/media/LinkedIn.bef81bb7.svg",v=a.p+"static/media/Github.54b068c7.svg",w=a.p+"static/media/RightArrow.efb0aef0.svg",N=function(){var e=Object(n.useContext)(o).sideMenuActive;return Object(l.jsxs)("div",{id:"side",className:"SideMenu ".concat(e?"active":""),children:[Object(l.jsxs)("ul",{children:[Object(l.jsx)("span",{children:"/*"}),Object(l.jsx)(O,{mobile:!0}),Object(l.jsx)("span",{children:"*/"})]}),Object(l.jsxs)("div",{className:"social",children:[Object(l.jsx)("img",{width:50,height:38,src:w,alt:""}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/adri%C3%A1n-vald%C3%A9s-d%C3%ADaz-2a10491b7/",children:Object(l.jsx)("img",{src:p,alt:""})}),Object(l.jsx)("a",{href:"https://github.com/adiazx14",children:Object(l.jsx)("img",{src:v,alt:""})})]})]})},y=(a(10),a(11),a(12),function(e){var t=e.project;return Object(l.jsxs)("div",{className:"ProjectCard",children:[Object(l.jsxs)("div",{className:"ImagesDiv",children:[Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.link,children:Object(l.jsx)("img",{className:"Portrait",src:t.portrait,alt:""})}),Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.link,children:Object(l.jsx)("img",{id:"Landscape",src:t.landscape,alt:""})})]}),Object(l.jsxs)("div",{className:"TextDiv",children:[Object(l.jsxs)("h2",{className:"red",children:["//",t.title]}),Object(l.jsxs)("div",{className:"InnerText",children:[Object(l.jsxs)("p",{children:['"',t.description,'"']}),Object(l.jsx)("div",{className:"buttons",children:Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.link,className:"ProjectLink",children:"See it live >"})})]})]})]})}),k=a.p+"static/media/encanto (2).acc8a36b.png",C=a.p+"static/media/encanto (1).c4bcadb2.png",A=a.p+"static/media/enfasis (2).79da421b.png",P=[{id:2,portrait:C,landscape:k,title:"el encanto liquidation",description:"E-commerce website for liquidation company. Features include user accounts, fast search, and secure payments with PayPal.",link:"https://elencantoliquidation.com"},{id:1,portrait:a.p+"static/media/enfasis (1).fc57161d.png",landscape:A,title:"\xe9nfasis magazine",description:"Blog site for the Enfasis Group, a magazine that focuses on supporting the work of Cuban artists and architects. Features on the website include subscribing to a mailing list, magazine PDFs download and a flexible article creation tool for the editors.",link:"https://enfasismag.com"}],M=function(){return Object(n.useEffect)((function(){console.log(P.sort((function(e,t){return e.id<t.id?-1:1})))}),[]),Object(l.jsxs)("section",{id:"Projects",children:[Object(l.jsx)("h1",{className:"red",children:"//Projects"}),P.sort((function(e,t){return e.id<t.id?-1:1})).map((function(e){return Object(l.jsx)(y,{project:e},e.id)}))]})},S=function(){return Object(l.jsxs)("div",{className:"Contact",id:"Contact",children:[Object(l.jsx)("svg",{className:"ContactArr",xmlns:"http://www.w3.org/2000/svg",width:"959",height:"40",viewBox:"0 0 959.071 71.757",children:Object(l.jsxs)("g",{id:"Group_3","data-name":"Group 3",transform:"translate(-844.851 1169.203) rotate(-90)",children:[Object(l.jsx)("path",{id:"Path_1","data-name":"Path 1",d:"M1100.981,1160.387l32.343,32.343,32.343-32.343",transform:"translate(0 604.121)",fill:"none",stroke:"#ec0544","stroke-width":"15"}),Object(l.jsx)("path",{id:"Path_2","data-name":"Path 2",d:"M1145.328,1116.822v952",transform:"translate(-12.004 -271.971)",fill:"none",stroke:"#ec0544","stroke-width":"18"})]})}),Object(l.jsx)("img",{id:"ContactArrVert",src:h,alt:""}),Object(l.jsxs)("div",{className:"CenterContact",children:[Object(l.jsx)("h1",{className:"red",children:"function Contact ()"}),Object(l.jsx)("h1",{children:"{"})]}),Object(l.jsxs)("div",{className:"RightContact",children:[Object(l.jsxs)("div",{className:"mainCode",children:[Object(l.jsxs)("p",{className:"blackFont",children:[" ",Object(l.jsx)("span",{className:"red",children:"if"})," (you.interested(me)){"]}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:"mailto: adrianvaldes1439@gmail.com",children:Object(l.jsx)("b",{children:Object(l.jsxs)("p",{className:"red",children:[" mail(",Object(l.jsx)("u",{children:'"adrianvaldes1439@gmail.com"'}),")"]})})}),Object(l.jsx)("br",{})]}),Object(l.jsx)("p",{className:"blackFont",children:"}"})]}),Object(l.jsx)("div",{className:"ClosingCurly",children:Object(l.jsx)("h1",{children:"}"})})]})]})};a(13),a(14);var I=function(){return Object(l.jsx)("div",{id:"App",children:Object(l.jsxs)(d,{children:[Object(l.jsx)(f,{}),Object(l.jsx)(N,{}),Object(l.jsx)(u,{}),Object(l.jsx)(b,{}),Object(l.jsx)(M,{}),Object(l.jsx)(S,{}),Object(l.jsx)(g,{})]})})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(I,{})}),document.getElementById("root")),D()}],[[15,1,2]]]);
//# sourceMappingURL=main.fcfc5812.chunk.js.map