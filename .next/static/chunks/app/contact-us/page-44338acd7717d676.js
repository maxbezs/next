(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{8712:function(e,t,n){Promise.resolve().then(n.bind(n,1347)),Promise.resolve().then(n.bind(n,3320))},1347:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var s=n(7437),a=n(2265),l=n(4525),r=e=>{let{label:t,type:n,placeholder:a,value:l,onChange:r,maxLength:i}=e;return(0,s.jsxs)("div",{className:"flex relative w-full",children:[(0,s.jsxs)("span",{className:"bg-neutral-800 text-white p-3 text-left transition-all duration-300 w-[10%] rounded-s-lg",children:[t,":"]}),(0,s.jsx)("input",{className:"rounded-r-lg bg-neutral-900 border-transparent text-white px-4 py-2 w-full",type:n,placeholder:a,value:l,onChange:r,maxLength:i})]})},i=n(171);n(3343);var o=()=>{let[e,t]=(0,a.useState)(!1),n=[0,1,2,3,4,5,6].map(e=>({id:e,startTime:new Date(new Date().setDate(new Date().getDate()+e)).setHours(18,0,0,0),endTime:new Date(new Date().setDate(new Date().getDate()+e)).setHours(23,20,0,0)})),[o,c]=(0,a.useState)({name:"",email:"",time:"",details:"",options:{webpage:[!1,"Webpage"],webapp:[!1,"Web app"],mobileapp:[!1,"Mobile App"],nocode:[!1,"No-Code"],api:[!1,"API"],ecom:[!1,"E-commerce"],other:[!1,"Other"]}}),d=e=>{c(t=>({...t,options:{...t.options,[e]:[!t.options[e][0],t.options[e][1]]}}))},h=()=>{c({name:"",email:"",time:"",details:"",options:o.options})},u=async e=>{e.preventDefault();let n={email:o.email,name:o.name,time:o.time,details:o.details,options:o.options};t(!0);try{let e=await fetch("/api/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});200===e.status?(i.Am.success("Meeting scheduled successfully!"),h()):i.Am.error("Failed to schedule the meeting. Please try again later.")}catch(e){i.Am.error("An error occurred. Please try again later.")}finally{t(!1)}};return(0,s.jsxs)("form",{className:"flex w-full",onSubmit:u,children:[(0,s.jsx)("div",{className:"flex w-1/2",children:(0,s.jsx)(l.j,{borderRadius:8,backgroundColor:"#151515",primaryColor:"#232323",eventDurationInMinutes:10,availableTimeslots:n,onStartTimeSelect:e=>c({...o,time:e.startTime}),eventStartTimeSpreadInMinutes:10})}),(0,s.jsx)("div",{className:"p-2 w-1/2",children:(0,s.jsxs)("div",{className:"items-start flex flex-col gap-4 justify-start",children:[(0,s.jsx)(r,{label:"Name",type:"text",placeholder:"John Smith",value:o.name,onChange:e=>c({...o,name:e.target.value}),maxLength:30}),(0,s.jsx)(r,{label:"Email",type:"email",placeholder:"john.smith@email.abc",value:o.email,onChange:e=>c({...o,email:e.target.value})}),(0,s.jsx)(r,{label:"Details",type:"text",placeholder:"Personal requests, questions",value:o.details,onChange:e=>c({...o,details:e.target.value}),maxLength:200}),(0,s.jsx)("div",{className:"flex flex-row flex-wrap gap-4 w-full",children:Object.entries(o.options).map(e=>{let[t,n]=e;return(0,s.jsx)("div",{className:"bg-neutral-900 rounded-md flex p-4 text-left",children:(0,s.jsxs)("label",{className:"flex items-center ",htmlFor:t,children:[(0,s.jsx)("input",{className:"w-4 h-4 border-2 border-gray-500 rounded-full grid place-items-center -translate-y-1",type:"checkbox",name:t,id:t,checked:n[0],onChange:()=>d(t)}),n[1]]})},t)})}),(0,s.jsx)("button",{type:"submit",className:"align-baseline bg-neutral-700 rounded-lg text-white cursor-pointer select-none focus:outline-none py-3 px-4 no-underline w-fit",disabled:e,children:e?"Scheduling...":"Schedule Meeting"}),(0,s.jsx)(i.Ix,{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"})," "]})})]})}},3320:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var s=n(7437),a=n(2265),l=n(4033),r=n(1396),i=n.n(r),o=e=>{let{styles:t,href:n,children:a}=e;return(0,s.jsx)("div",{className:t+" align-baseline bg-neutral-700 rounded-lg text-white cursor-pointer select-none focus:outline-none py-3 px-4 no-underline w-fit",children:(0,s.jsx)(i(),{className:"font-cfont ",id:n,href:n,children:a})})},c=n(6691),d=n.n(c),h=()=>{let[e,t]=(0,a.useState)(!1),n=()=>{t(!e)},[r,c]=(0,a.useState)(!0),h=(0,l.usePathname)(),[u,m]=(0,a.useState)("");return(0,a.useEffect)(()=>{m(h),console.log(h)},[u]),(0,a.useEffect)(()=>{let e=()=>{let e=window.pageYOffset,n=e>t;c(!n),t=e},t=window.pageYOffset;return window.innerWidth>768&&window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,s.jsx)("header",{className:"fixed top-0 left-0 w-full transition-transform duration-300 filter shadow-[0_-5px_25px_rgba(130,130,130)] transform ".concat(r?"translate-y-0 shadow-white":"-translate-y-full"," bg-neutral-900"),children:(0,s.jsxs)("div",{className:"container mx-auto flex justify-between items-center w-4/5 h-[69px]",children:[(0,s.jsx)(i(),{href:"/",className:"h-full",children:(0,s.jsx)(d(),{alt:"max_bezs logo",src:"/max-bezs-logo-header.png",width:"64",height:"64"})}),(0,s.jsx)("div",{className:"md:hidden",children:(0,s.jsx)("button",{onClick:n,className:"text-white",children:(0,s.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16m-7 6h7"})})})}),(0,s.jsxs)("nav",{className:"md:flex space-x-4 ".concat(e?"fixed top-0 right-0 w-64 h-[calc(100vh+69px)] text-white transition-transform transform translate-x-0 bg-neutral-800":"hidden"),children:[(0,s.jsxs)("ul",{className:" ".concat(e?"":"md:flex md:space-x-12"),children:[(0,s.jsx)("li",{children:(0,s.jsx)(i(),{href:"/",className:"/"===u?" text-white font-cfont underline decoration-2":"text-white font-cfont ",children:"HOME"})}),(0,s.jsx)("li",{children:(0,s.jsx)(i(),{href:"/blog",className:"/blog"===u?" text-white font-cfont underline decoration-2":"text-white font-cfont ",children:"BLOG"})}),(0,s.jsx)("li",{children:(0,s.jsx)(i(),{href:"/services",className:"/services"===u?" text-white font-cfont underline decoration-2":"text-white font-cfont ",children:"SERVICES"})})]}),e&&(0,s.jsx)("button",{onClick:n,className:"absolute top-4 right-4 text-white md:hidden",children:(0,s.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}),(0,s.jsx)(o,{styles:"hidden md:block ",href:"/contact-us",children:"Contact Us"})]})})}}},function(e){e.O(0,[99,770,971,472,744],function(){return e(e.s=8712)}),_N_E=e.O()}]);