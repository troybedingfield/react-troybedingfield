(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5662:function(e,s,l){Promise.resolve().then(l.bind(l,6820))},1220:function(e,s,l){"use strict";l.d(s,{Z:function(){return c}});var a=l(7437);function c(e){let{...s}=e,{children:l,color:c="default",disabled:n,fill:t="solid",size:r="medium",uppercase:i,maxWidth:o,minWidth:d,customBGColor:m,buttonClick:h}=s;return(0,a.jsx)("button",{style:{minWidth:d+"px",maxWidth:o+"px"},className:[c,t,r,i?"text-uppercase":""].join(" "),onClick:h,disabled:n||null,children:l})}l(3451)},5568:function(e,s,l){"use strict";l.d(s,{Z:function(){return n}});var a=l(7437),c=l(2265);function n(e){let{...s}=e,{images:l,captions:n,selHeight:t,automatic:r,interval:i}=s,o=(0,c.useRef)(),[d,m]=(0,c.useState)(0),[h,u]=(0,c.useState)(r);function x(){let e=d+1;m(e===l.length?0:e)}return h&&(o.current=setInterval(()=>{x()},i)),(0,a.jsxs)("div",{className:"carousel-container",style:{height:t+"px"},children:[(0,a.jsxs)("div",{className:"carousel",ref:o,children:[l&&l.map((e,s)=>{if(s===d)return(0,a.jsx)("img",{src:e,className:"slide fade"},s)}),(0,a.jsx)("a",{className:"prev",onClick:function(){let e=d-1;m(e<0?l.length-1:e)},children:"❮"}),(0,a.jsx)("a",{className:"next",onClick:x,children:"❯"})]}),(0,a.jsx)("div",{className:"text-center",children:l&&l.map((e,s)=>(0,a.jsx)("span",{className:s===d?"dot active":"dot",onClick:()=>{m(s)}},s))})]})}l(9565)},6820:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return x}});var a=l(7437);l(2131);var c=l(5568),n=l(1220),t=l(6463),r=l(2265);function i(e){let{...s}=e,{message:l,type:c,state:n="close"}=s,t=(0,r.useRef)();return(0,a.jsxs)("div",{ref:t,className:["toast",c+"-toast",n].join(" "),children:[(0,a.jsx)("div",{className:"toast-interior",children:l}),(0,a.jsx)("a",{className:"toast-close",onClick:()=>{console.log(t),t.current.classList.remove("open"),t.current.classList.add("close")}})]})}l(1932),l(4444);var o=l(1907),d=l(357);function m(e){let{...s}=e,{}=s,l=(0,r.useRef)(),c=(0,r.useRef)(),t=(0,r.useRef)(),m=(0,r.useRef)(),[h,u]=(0,r.useState)(!1),x=(0,r.useRef)();async function j(e,s,l,a){if(e.preventDefault(),x.current.getValue()){let e={FullName:l.current.value,Email:s.current.value,Comment:a.current.value},c=await fetch("https://d2nbfvp176.execute-api.us-east-2.amazonaws.com/default/sendContactEmail",{method:"POST",body:JSON.stringify(e)}),n=await c;if(200!==n.status)throw Error("Failed to send email");if(200===n.status)return console.log("Email Succesfully sent!"),void(m.current.reset(),u(e=>!e),setTimeout(()=>{u(e=>!e)},3e3))}else alert("Please verify the reCAPTCHA!")}return(0,a.jsxs)(a.Fragment,{children:[h&&(0,a.jsx)(i,{state:"open",type:"success",message:"Email Succesfully sent!"}),(0,a.jsxs)("div",{className:"form-container",children:[(0,a.jsx)("p",{className:"text-center font42",children:"Interested in working together?"}),(0,a.jsxs)("form",{ref:m,onSubmit:e=>j(e,l,c,t),children:[(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{htmlFor:"Email",children:"Email"}),(0,a.jsx)("input",{required:!0,ref:l,type:"email",className:"form-control",name:"Email","aria-describedby":"emailHelp",placeholder:"Enter email"})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{htmlFor:"fullname",children:"Full Name"}),(0,a.jsx)("input",{required:!0,ref:c,type:"text",className:"form-control",name:"FullName",placeholder:"Full Name"})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{htmlFor:"comment",children:"Comment"}),(0,a.jsx)("textarea",{required:!0,ref:t,className:"form-control",rows:5,name:"Comment"})]}),(0,a.jsx)("div",{}),(0,a.jsx)(o.Z,{ref:x,sitekey:d.env.NEXT_PUBLIC_SITE_KEY}),(0,a.jsx)(n.Z,{maxWidth:88,children:"Submit"})]})]})]})}function h(e){let{...s}=e,{codestring:l}=s;return(0,a.jsxs)("div",{className:"test-code-block",children:[(0,a.jsx)("a",{title:"Copy to Clipboard",onClick:function(){},children:(0,a.jsx)("i",{className:"icon-copy"})}),(0,a.jsx)("div",{className:"code-block",children:l})]})}function u(e){let s,{...l}=e,{}=l,[c,t]=(0,r.useState)({Label:"Button",Color:"default",Fill:"solid",Size:"medium",Uppercase:!1,Disabled:!1});function i(e,s,l){"checkbox"===e.target.type&&(l=e.target.value=e.target.checked),console.log(s,l),t(e=>({...e,[s]:l}))}return console.log(c),s="<Button","default"!=c.Color&&(s+=' color="'.concat(c.Color,'"')),"solid"!=c.Fill&&(s+=' fill="'.concat(c.Fill,'"')),"medium"!=c.Size&&(s+=' size="'.concat(c.Size,'"')),c.Uppercase&&(s+=' uppercase="'.concat(c.Uppercase,'"')),c.Disabled&&(s+=' disabled="'.concat(c.Disabled,'"')),s+=">",""!=c.Label&&(s+="".concat(c.Label)),s+="</Button>",(0,a.jsx)("div",{className:"test-container",children:(0,a.jsxs)("div",{className:"test-button-two-column",children:[(0,a.jsx)("div",{className:"column1",children:(0,a.jsxs)("div",{className:"form-container",children:[(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Label"}),(0,a.jsx)("input",{className:"form-control",value:c.Label,onChange:e=>i(e,"Label",e.target.value)})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Color"}),(0,a.jsxs)("select",{className:"form-control",value:c.Color,onChange:e=>i(e,"Color",e.target.value),children:[(0,a.jsx)("option",{value:"default",children:"Default"}),(0,a.jsx)("option",{value:"success",children:"Success"}),(0,a.jsx)("option",{value:"warning",children:"Warning"}),(0,a.jsx)("option",{value:"error",children:"Error"})]})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Fill"}),(0,a.jsxs)("select",{className:"form-control",value:c.Fill,onChange:e=>i(e,"Fill",e.target.value),children:[(0,a.jsx)("option",{value:"solid",children:"Solid"}),(0,a.jsx)("option",{value:"outline",children:"Outline"}),(0,a.jsx)("option",{value:"clear",children:"Clear"})]})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Size"}),(0,a.jsxs)("select",{className:"form-control",value:c.Size,onChange:e=>i(e,"Size",e.target.value),children:[(0,a.jsx)("option",{value:"small",children:"Small"}),(0,a.jsx)("option",{value:"medium",children:"Medium"}),(0,a.jsx)("option",{value:"large",children:"Large"})]})]}),(0,a.jsx)("div",{className:"form-group",children:(0,a.jsxs)("div",{className:"toggle-switch",children:[(0,a.jsxs)("label",{className:"switch",children:[(0,a.jsx)("input",{type:"checkbox",checked:c.Uppercase,onChange:e=>i(e,"Uppercase",e.target.value)}),(0,a.jsx)("span",{className:"slider round"})]}),"Uppercase"]})}),(0,a.jsx)("div",{className:"form-group",children:(0,a.jsxs)("div",{className:"toggle-switch",children:[(0,a.jsxs)("label",{className:"switch",children:[(0,a.jsx)("input",{type:"checkbox",checked:c.Disabled,onChange:e=>i(e,"Disabled",e.target.value)}),(0,a.jsx)("span",{className:"slider round"})]}),"Disabled"]})})]})}),(0,a.jsx)("div",{className:"column2",children:(0,a.jsxs)("div",{className:"code-block-container",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{children:"Test Button"}),(0,a.jsx)(n.Z,{color:c.Color,fill:c.Fill,size:c.Size,uppercase:c.Uppercase,disabled:c.Disabled,children:c.Label})]}),(0,a.jsxs)("div",{className:"code-container",children:[(0,a.jsx)("label",{className:"margin-top25",children:"Code"}),(0,a.jsx)(h,{codestring:s})]})]})})]})})}function x(){let e=(0,t.useRouter)();return(0,a.jsxs)("div",{className:"home-container",children:[(0,a.jsxs)("div",{className:"home-top-text",children:[(0,a.jsx)("h3",{className:"text-center font-black",children:"Experienced Front-End Developer and UX/UI Designer with a demonstrated history of working in the marketing and payroll industries."}),(0,a.jsx)("h4",{className:"text-center font-bold",children:"Skilled in HTML, CSS, JavaScript, TypeScript, Angular, Figma"}),(0,a.jsx)("h5",{className:"text-center font-regular",children:"Also have experience with .NET, PHP, WordPress, Drupal"}),(0,a.jsx)("h4",{className:"text-center font-medium",children:"Professional with a Bachelor's of fine art focused in Graphic Design from Georgia State University."})]}),(0,a.jsx)("div",{className:"saas-work",children:(0,a.jsxs)("div",{className:"inner-container",children:[(0,a.jsx)("p",{className:"text-center",children:"Payroll/HR SaaS application:"}),(0,a.jsx)("img",{src:"troy-homepage-montage-01.png",alt:"saas-examples"})]})}),(0,a.jsxs)("div",{className:"component-example",children:[(0,a.jsx)("p",{className:"text-center",children:"Component Library Button Example:"}),(0,a.jsxs)("p",{className:"text-center",children:["To see the full example setup and documentation ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{})," ",(0,a.jsx)("a",{href:"https://troybedingfield.github.io/library-test/?path=/docs/local-button--docs",target:"_blank",className:"font24",children:"Storybook Link"})]}),(0,a.jsx)("br",{}),(0,a.jsx)(u,{})]}),(0,a.jsx)("div",{className:"figma-work",children:(0,a.jsxs)("div",{className:"inner-container",children:[(0,a.jsx)("p",{className:"text-center",children:"Workflow Designs and Design System Components from Figma"}),(0,a.jsx)(c.Z,{automatic:"true",interval:"5000",selHeight:800,images:["carousel-home/4.png","carousel-home/1.png","carousel-home/2.png","carousel-home/3.png"]}),(0,a.jsx)("p",{className:"text-center",children:"Click to see more designs and prototypes of a user workflow"}),(0,a.jsx)("div",{className:"button-container",children:(0,a.jsx)(n.Z,{buttonClick:()=>e.push("/design"),children:"Design"})})]})}),(0,a.jsxs)("div",{className:"marketing-work",children:[(0,a.jsx)("p",{className:"text-center",children:"Marketing site's I've managed and/or built:"}),(0,a.jsxs)("div",{className:"home-two-column",children:[(0,a.jsx)("div",{className:"column1",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://iloveicecreamcakes.com",target:"_blank",children:"iloveicecreamcakes.com"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://electrocore.com",target:"_blank",children:"electrocore.com"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://gammacore.com",target:"_blank",children:"gammacore.com"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://thiolaec.com",target:"_blank",children:"thiolaec.com"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://farmrich.com",target:"_blank",children:"farmrich.com"})})]})}),(0,a.jsx)("div",{className:"column2",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://emflaza.com",target:"_blank",children:"emflaza.com"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://ptccares.com",target:"_blank",children:"ptccares.com"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://thiolaechcp.com",target:"_blank",children:"thiolaechcp.com"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://seapak.com",target:"_blank",children:"seapak.com"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://askewmarketing.com",target:"_blank",children:"askewmarketing.com"})})]})})]})]}),(0,a.jsx)("div",{className:"contact-form",children:(0,a.jsx)("div",{className:"form-inner-container",children:(0,a.jsx)(m,{})})})]})}l(8887),l(4537)},3451:function(){},9565:function(){},4444:function(){},4537:function(){},8887:function(){},1932:function(){},2131:function(){}},function(e){e.O(0,[261,485,971,23,744],function(){return e(e.s=5662)}),_N_E=e.O()}]);