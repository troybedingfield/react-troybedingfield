(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37],{6434:(e,i,n)=>{Promise.resolve().then(n.bind(n,6745))},7722:(e,i,n)=>{"use strict";n.d(i,{A:()=>t});var s=n(5155);function t(e){let{children:i,...n}=e,{color:t="default",disabled:a,fill:o="solid",size:c="medium",uppercase:r,border:d,maxWidth:l,minWidth:m,maxHeight:u,minHeight:h,customBGColor:g,customBorderColor:p,customColor:x,buttonClick:w,formAction:f,classNames:j}=n;return(0,s.jsx)("button",{style:{minWidth:m?m+"px":"",maxWidth:l?l+"px":"",minHeight:h?h+"px":"",maxHeight:u?u+"px":"",backgroundColor:g,color:x,borderColor:p},className:[t,o,c,d?"border":"",r?"text-uppercase":"",j||""].join(" "),onClick:w,formAction:f,disabled:a,children:i})}n(9713)},3249:(e,i,n)=>{"use strict";n.d(i,{A:()=>c});var s=n(5155),t=n(4113),a=n(7491);n(245);var o=n(2115);function c(e){let{...i}=e,{images:n,captions:c,selHeight:r,automatic:d,arrowColor:l="black",interval:m}=i,{slides:u,currentSlideIndex:h,slide:g,isFirstSlide:p,isLastSlide:x,handleMouseEnter:w,handleMouseLeave:f,back:j,next:y,goto:v}=function(e,i,n){let[s,t]=(0,o.useState)(0),[a,c]=(0,o.useState)(!!n),[r,d]=(0,o.useState)(i||0),[l,m]=(0,o.useState)(!0),u=(0,o.useRef)(null);function h(){let i=s+1;t(i===e.length?0:i)}return(0,o.useEffect)(()=>(r>0&&a&&l&&(u.current=window.setInterval(h,r)),()=>{u.current&&clearInterval(u.current)}),[r,e.length,s,a,l]),{currentSlideIndex:s,slide:e[s],slides:e,isFirstSlide:0===s,isLastSlide:s===e.length-1,goto:function(e){t(e)},next:h,back:function(){let i=s-1;t(i<0?e.length-1:i)},handleMouseEnter:()=>{m(!1)},handleMouseLeave:()=>{m(!0)}}}(n,m,d);return(0,s.jsxs)("div",{className:"carousel-container",onMouseEnter:w,onMouseLeave:f,style:{height:r+"px"},children:[(0,s.jsxs)("div",{className:"carousel",children:[(0,s.jsx)(t.N,{children:(0,s.jsx)(a.P.img,{src:"".concat(g),initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:.3,duration:.3},className:"slide fade"},"".concat(g))}),(0,s.jsx)("a",{className:"prev",style:{color:l},onClick:j,children:"❮"}),(0,s.jsx)("a",{className:"next",style:{color:l},onClick:y,children:"❯"})]}),(0,s.jsx)("div",{className:"text-center",children:u&&u.map((e,i)=>(0,s.jsx)("span",{className:i===h?"dot active":"dot",onClick:()=>v(i)},i))})]})}},6745:(e,i,n)=>{"use strict";n.r(i),n.d(i,{default:()=>l});var s=n(5155),t=n(2115),a=n(7722);n(3823);var o=n(3249),c=n(6046),r=n(6927),d=n(7491);function l(){let e=(0,c.useRouter)(),[i,n]=(0,t.useState)(!1),[l,m]=(0,t.useState)(!1),[u,h]=(0,t.useState)(!1);return(0,s.jsxs)("div",{className:"design-container",children:[(0,s.jsxs)(r.x,{transition:{duration:.2,ease:"easeInOut"},children:[(0,s.jsxs)("div",{className:"design-system-container",children:[(0,s.jsx)(d.P.h3,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:{type:"spring",stiffness:50},className:"text-center",children:"Mobile App Case Study"}),(0,s.jsx)("div",{className:"img-container mb-6",children:(0,s.jsx)(d.P.img,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:{type:"spring",stiffness:50},style:{maxWidth:1024,width:"100%"},src:"/MobileCaseStudy/csimage1.png",alt:""})}),(0,s.jsx)("div",{className:"button-container",children:(0,s.jsx)(a.A,{color:"secondary",buttonClick:()=>e.push("/design/MobileCaseStudy"),children:"View Case Study"})})]}),(0,s.jsx)("div",{className:"figma-work",children:(0,s.jsxs)("div",{className:"inner-container",children:[(0,s.jsx)(d.P.h3,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:{type:"spring",stiffness:50},className:"text-center",children:"Learning Management Case Study"}),(0,s.jsx)("div",{className:"img-container mb-6",children:(0,s.jsx)(d.P.img,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:{type:"spring",stiffness:50},style:{maxWidth:1024,width:"100%"},src:"/carousel-home/3.png",alt:""})}),(0,s.jsx)("div",{className:"button-container",children:(0,s.jsx)(a.A,{color:"secondary",buttonClick:()=>e.push("/design/LearningCaseStudy"),children:"View Case Study"})})]})})]}),(0,s.jsxs)("div",{className:"design-system-container",children:[(0,s.jsx)("h3",{className:"text-center",children:"Design system I created and managed in Figma"}),(0,s.jsx)("div",{className:"inner-carousel-container",children:(0,s.jsx)(o.A,{selHeight:500,interval:6e3,automatic:!0,images:["/design-section-1/2.png","/design-section-1/4.png","/design-section-1/3.png"]})})]}),(0,s.jsx)("div",{className:"figma-work",children:(0,s.jsxs)("div",{className:"inner-container",children:[(0,s.jsx)("p",{className:"text-center",children:"Built out all our assets and components in Figma to match what we defined in our styleguide and built them to match how they are built in code and setup the same properties and added code snippets so the design and development can match and be consistent"}),(0,s.jsx)(a.A,{buttonClick:function(){window.open("https://www.figma.com/design/rOj7ptt7KWZOZdNt2cen4n/Design-System?node-id=1-26&t=GDn677E0etS2kMeb-1")},children:"Figma Link"})]})}),(0,s.jsxs)("div",{className:"design-top-section",children:[(0,s.jsx)("h3",{className:"text-center",children:"Figma design screens of a user workflow"}),(0,s.jsx)("div",{className:"inner-carousel-container top-section",children:(0,s.jsx)(o.A,{selHeight:500,interval:6e3,automatic:!0,images:["/design-section-2/1.png","/design-section-2/2.png","/design-section-2/3.png","/design-section-2/4.png","/design-section-2/5.png","/design-section-2/6.png","/design-section-2/7.png","/design-section-2/8.png"]})}),(0,s.jsx)("div",{className:"user-flow-container",children:(0,s.jsxs)("div",{className:"inner-container",children:[(0,s.jsx)("p",{className:"text-center",children:"Created responsive designs and setup prototypes for a user flow with another designer for a new product we were working on while building out the design system so we could refine and add components and prototyping sections to make it easier for the UX team to create in Figma "}),(0,s.jsx)(a.A,{buttonClick:function(){window.open("https://www.figma.com/design/JhyHuflMdoV9qNb7tXCyeU/User-Flow?node-id=193-27021&t=FHbdYcUXeDaHUdGM-1")},children:"Figma Link"})]})})]}),(0,s.jsx)("div",{className:"figma-work",children:(0,s.jsxs)("div",{className:"inner-container",children:[(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("p",{children:"Click to see Figma Prototypes"}),(0,s.jsxs)("div",{className:"button-container",children:[(0,s.jsx)(a.A,{minWidth:75,customBGColor:"#1abcfe",buttonClick:function(){n(e=>!e),m(!1),h(!1)},children:"Desktop"}),(0,s.jsx)(a.A,{minWidth:75,customBGColor:"#1abcfe",buttonClick:function(){n(!1),m(e=>!e),h(!1)},children:"Tablet"}),(0,s.jsx)(a.A,{minWidth:75,customBGColor:"#1abcfe",buttonClick:function(){n(!1),m(!1),h(e=>!e)},children:"Mobile"})]})]}),i&&(0,s.jsx)("div",{id:"figma-desktop-container",children:(0,s.jsx)("iframe",{className:" responsive-iframe",src:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJhyHuflMdoV9qNb7tXCyeU%2FUser-Flow%3Fnode-id%3D15-25105%26t%3DMMN3ouwtJn7PuhZv-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D6%253A12504%26hide-ui%3D1",allowFullScreen:!0})}),l&&(0,s.jsx)("div",{id:"figma-mobile-container",children:(0,s.jsx)("iframe",{className:" responsive-iframe",src:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJhyHuflMdoV9qNb7tXCyeU%2FUser-Flow%3Fnode-id%3D47-60563%26t%3DVwa3RZsSxcq3pG5x-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D47%253A69285%26starting-point-node-id%3D47%253A57686%26hide-ui%3D1",allowFullScreen:!0})}),u&&(0,s.jsx)("div",{id:"figma-tablet-container",children:(0,s.jsx)("iframe",{className:" responsive-iframe",src:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJhyHuflMdoV9qNb7tXCyeU%2FUser-Flow%3Fnode-id%3D159-18892%26t%3DExZiCGue67PITuAv-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D159%253A18891%26starting-point-node-id%3D159%253A18892%26hide-ui%3D1",allowFullScreen:!0})})]})}),(0,s.jsxs)("div",{className:"journeyAndFlows top-section",children:[(0,s.jsx)("h3",{className:"text-center",children:"Figma user journey and user flows"}),(0,s.jsx)("div",{className:"inner-carousel-container top-section",children:(0,s.jsx)(o.A,{arrowColor:"white",selHeight:500,interval:6e3,automatic:!0,images:["design-section-3/journey.png","design-section-3/group1.png","design-section-3/group2.png","design-section-3/group3.png"]})})]}),(0,s.jsx)("div",{className:"figma-work bottom-container",children:(0,s.jsxs)("div",{className:"inner-container",children:[(0,s.jsx)("p",{className:"text-center",children:"Click to see user journey with user flows"}),(0,s.jsx)(a.A,{buttonClick:function(){window.open("https://www.figma.com/design/CmmNz4sHeCNusCYu9HByHo/User-Journey-and-Flow?node-id=0-1&t=e3uLcWoGPcL0L5sn-1")},children:"Figma Link"})]})})]})}},9713:()=>{},245:()=>{},3823:()=>{},6927:(e,i,n)=>{"use strict";n.d(i,{x:()=>r});var s=n(5155),t=n(2115),a=n(4712),o=n(5674),c=n(2321);function r(e){let{children:i,isValidProp:n,...r}=e;n&&(0,o.D)(n),(r={...(0,t.useContext)(a.Q),...r}).isStatic=(0,c.M)(()=>r.isStatic);let d=(0,t.useMemo)(()=>r,[JSON.stringify(r.transition),r.transformPagePoint,r.reducedMotion]);return(0,s.jsx)(a.Q.Provider,{value:d,children:i})}}},e=>{var i=i=>e(e.s=i);e.O(0,[930,464,78,647,441,517,358],()=>i(6434)),_N_E=e.O()}]);