(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2788:function(e,r,t){Promise.resolve().then(t.t.bind(t,231,23)),Promise.resolve().then(t.bind(t,1407))},1407:function(e,r,t){"use strict";t.d(r,{default:function(){return a}});var s=t(2265),n=t(7437),i=(e,r,t)=>new Promise((s,n)=>{var i=e=>{try{l(t.next(e))}catch(e){n(e)}},a=e=>{try{l(t.throw(e))}catch(e){n(e)}},l=e=>e.done?s(e.value):Promise.resolve(e.value).then(i,a);l((t=t.apply(e,r)).next())}),a=e=>{let{title:r="Subscribe to the newsletter",apiUrl:t="/api/newsletter"}=e,a=(0,s.useRef)(null),[l,o]=(0,s.useState)(!1),[u,d]=(0,s.useState)(""),[c,m]=(0,s.useState)(!1);return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",children:r}),(0,n.jsxs)("form",{className:"flex flex-col sm:flex-row",onSubmit:e=>i(void 0,null,function*(){e.preventDefault();let r=yield fetch(t,{body:JSON.stringify({email:a.current.value}),headers:{"Content-Type":"application/json"},method:"POST"}),{error:s}=yield r.json();if(s){o(!0),d("Your e-mail address is invalid or you are already subscribed!");return}a.current.value="",o(!1),m(!0)}),children:[(0,n.jsx)("div",{children:(0,n.jsxs)("label",{htmlFor:"email-input",children:[(0,n.jsx)("span",{className:"sr-only",children:"Email address"}),(0,n.jsx)("input",{autoComplete:"email",className:"focus:ring-primary-600 w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-black",id:"email-input",name:"email",placeholder:c?"You're subscribed !  \uD83C\uDF89":"Enter your email",ref:a,required:!0,type:"email",disabled:c})]})}),(0,n.jsx)("div",{className:"mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3",children:(0,n.jsx)("button",{className:"bg-primary-500 w-full rounded-md py-2 px-4 font-medium text-white sm:py-0 ".concat(c?"cursor-default":"hover:bg-primary-700 dark:hover:bg-primary-400"," focus:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black"),type:"submit",disabled:c,children:c?"Thank you!":"Sign up"})})]}),l&&(0,n.jsx)("div",{className:"w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96",children:u})]})}}},function(e){e.O(0,[231,971,23,744],function(){return e(e.s=2788)}),_N_E=e.O()}]);