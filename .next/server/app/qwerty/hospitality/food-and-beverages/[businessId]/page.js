(()=>{var e={};e.id=629,e.ids=[629],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},7374:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>r.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>d,routeModule:()=>h,tree:()=>c});var a=n(7096),i=n(6132),s=n(7284),r=n.n(s),o=n(2564),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);n.d(t,l);let c=["",{children:["qwerty",{children:["hospitality",{children:["food-and-beverages",{children:["[businessId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,7162)),"C:\\Users\\baksb\\Desktop\\max-bezs\\max-bezs-next\\app\\qwerty\\hospitality\\food-and-beverages\\[businessId]\\page.jsx"]}]},{}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(n.bind(n,5042)),"C:\\Users\\baksb\\Desktop\\max-bezs\\max-bezs-next\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\baksb\\Desktop\\max-bezs\\max-bezs-next\\app\\qwerty\\hospitality\\food-and-beverages\\[businessId]\\page.jsx"],m="/qwerty/hospitality/food-and-beverages/[businessId]/page",u={require:n,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/qwerty/hospitality/food-and-beverages/[businessId]/page",pathname:"/qwerty/hospitality/food-and-beverages/[businessId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9762:(e,t,n)=>{Promise.resolve().then(n.bind(n,674)),Promise.resolve().then(n.bind(n,6461))},674:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var a=n(3854);n(4218);var i=n(1018),s=n(5548),r=n.n(s);let o=e=>e.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "),l=()=>{let e=(0,i.usePathname)(),t=e.split("/").filter(e=>e);return a.jsx("div",{className:"flex h-fit w-fit my-4",children:a.jsx("nav",{"data-slot":"base","aria-label":"Breadcrumbs",children:a.jsx("ol",{"data-slot":"list",className:"flex flex-wrap list-none rounded-small",children:t.map((e,n)=>{let i=`/${t.slice(0,n+1).join("/")}`,s=n===t.length-1,l="qwerty"===e?"Home":o(e);return(0,a.jsxs)("li",{"data-slot":"base",className:"flex items-center",children:[a.jsx("span",{"data-slot":"item",className:"flex gap-1 items-center cursor-pointer whitespace-nowrap line-clamp-1 tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-foreground/50 text-small hover:opacity-80 active:opacity-disabled transition-opacity no-underline",tabIndex:"0",role:"link",children:a.jsx(r(),{href:i,children:l})}),!s&&a.jsx("span",{"data-slot":"separator","aria-hidden":"true",className:"px-1 text-foreground/50",children:a.jsx("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",width:"1em",children:a.jsx("path",{d:"m9 18 6-6-6-6"})})})]},i)})})})})}},6461:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m});var a=n(3854),i=n(4218),s=n(5548),r=n.n(s);let o=({tabs:e})=>a.jsx("div",{className:"sticky top-0 w-1/4 md:flex flex-col text-left pb-3 h-[calc(100vh-50px)] overflow-y-auto hidden",children:(0,a.jsxs)("div",{className:"p-4",children:[a.jsx("h2",{className:"text-lg font-semibold mb-2 sticky top-0 bg-black pb-4",children:"On This Page"}),a.jsx("ul",{className:"overflow-y-auto",children:e.map((e,t)=>(0,a.jsxs)("li",{className:"mb-4",children:[a.jsx("p",{className:"text-lg font-medium",children:"In Conclusion"===e.title?"":a.jsx("a",{href:"#"+e.href,children:e.title})}),a.jsx("ul",{className:"ml-4",children:e.subSections?a.jsx(a.Fragment,{children:e.subSections.map((e,t)=>a.jsx("li",{className:"text-sm mt-2",children:a.jsx(r(),{href:"#"+e.id,children:e.title})},t))}):""})]},t))})]})}),l=({className:e,children:t,dangerouslySetInnerHTML:n})=>a.jsx("p",{dangerouslySetInnerHTML:n,className:e+" text-base md:text-lg lg:text-xl mb-4",children:t}),c=({styles:e,children:t,id:n})=>a.jsx("h2",{id:n,className:e+" text-2xl md:text-3xl lg:text-4xl font-bold mb-4",children:t}),d=({styles:e,id:t,children:n})=>a.jsx("h3",{id:t,className:e+" text-xl md:text-2xl lg:text-3xl font-bold mb-4",children:n}),m=({tabs:e})=>{let[t,n]=(0,i.useState)("Middle");return(0,a.jsxs)("div",{className:"",children:[a.jsx("div",{className:"flex justify-center mb-4 ",children:a.jsx("div",{className:"w-fit bg-neutral-900 rounded-xl p-1 ",children:e.map(e=>a.jsx("button",{className:`px-4 py-2 ${t===e.type?"  bg-neutral-700 rounded-lg text-white":"text-neutral-400"}`,onClick:()=>n(e.type),children:e.type},e.type))})}),e.map(n=>a.jsx("div",{className:`tab-content ${t===n.type?"block":"hidden"}`,children:(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsxs)("div",{className:"w-3/4",children:[a.jsx(l,{className:"indent-10 ",children:n.context}),n.content.map((e,t)=>(0,a.jsxs)("div",{children:[0===t?(0,a.jsxs)(a.Fragment,{children:[a.jsx(l,{children:e.content}),a.jsx(c,{id:e.href,children:e.title})]}):(0,a.jsxs)(a.Fragment,{children:[a.jsx(c,{id:e.href,children:e.title}),a.jsx(l,{children:e.content})]}),e.subSections?a.jsx(a.Fragment,{children:e.subSections.map((e,t)=>(0,a.jsxs)("div",{children:[a.jsx(d,{id:e.id,styles:"pt-4",children:t+1+". "+e.title}),a.jsx(l,{dangerouslySetInnerHTML:{__html:e.content}})]},t))}):""]},t))]}),a.jsx(o,{tabs:e.filter(e=>e.type===t).map(e=>e.content).flat()})]})},n.type))]})}},7733:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>l});var a=n(5153);let i=(0,a.createProxy)(String.raw`C:\Users\baksb\Desktop\max-bezs\max-bezs-next\app\components\Breadcrumbs.jsx`),{__esModule:s,$$typeof:r}=i,o=i.default,l=o},7422:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(4656);let i=({styles:e,children:t})=>a.jsx("h1",{className:e+" text-4xl md:text-5xl lg:text-6xl font-bold mb-4",children:t})},7162:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var a=n(4656),i=n(5153);let s=(0,i.createProxy)(String.raw`C:\Users\baksb\Desktop\max-bezs\max-bezs-next\app\components\BusinessTabs.jsx`),{__esModule:r,$$typeof:o}=s,l=s.default;var c=n(7422),d=n(7501);let m=[{type:"Small",content:[{title:"Essential Technologies:",content:`Running a traditional Italian trattoria involves a delicate balance
        between honoring time-honored traditions and embracing modern
        advancements. This guide aims to introduce you to essential
        technologies that can enhance your trattoria's operations, keeping
        the essence of tradition alive while stepping into the future.`,href:"essential-technologies",subSections:[{title:"Point of Sale (POS) System",content:`Think of a POS system as more than just a cash register. It&apos;s
            the nerve center of your trattoria, streamlining everything from
            orders to inventory management.
            <a class="text-sky-500 underline" href="#">See how other trattorias have benefited</a>. A POS system not
            only improves efficiency but also offers valuable insights into your
            sales, helping you make informed decisions.`,id:"point-of-sale-pos-system"},{title:"Basic Reservation System",content:`Move beyond the pen-and-paper method with a digital reservation
            system. This technology simplifies bookings and enhances guest
            management, ensuring a warm welcome for every diner.
            <a class="text-sky-500 underline" href="#">Explore popular systems</a> used by other small restaurants.`,id:"basic-reservation-system"},{title:"Inventory Management Software",content:`Effective inventory management is crucial in balancing fresh
            ingredients with cost efficiency. The right software helps you track
            stock levels, minimize waste, and ensure your signature dishes are
            always available. <a class="text-sky-500 underline" href="#">Learn more about the top choices</a> for small
            eateries.`,id:"inventory-management-software"},{title:"Website and Online Presence",content:`Your trattoria&apos;s website is its digital storefront. Combined
            with an online maps presence, it guides new customers straight to
            your door. Consider adding a simple, elegant website featuring your
            menu, location, and your story.
            <a class="text-sky-500 underline" href="#">
              Discover how a compelling online presence has transformed
              businesses
            </a>
            .`,id:"website-and-online-presence"},{title:"Social Media Engagement",content:` Platforms like Instagram and Facebook extend your trattoria&apos;s
            hospitality into the digital world. Share your culinary creations
            and connect with your community.
            <a class="text-sky-500 underline" href="#">Get inspired by successful social media strategies</a> from
            fellow restaurateurs.`,id:"social-media-engagement"},{title:"Basic Accounting Software",content:`Stay on top of your finances with user-friendly accounting software.
            This tool simplifies tracking expenses and profits, bringing clarity
            and precision to your financial management.
            <a class="text-sky-500 underline" href="#"> Check out software recommendations</a>.`,id:"basic-accounting-software"}]},{title:"Optional but Beneficial Technologies",content:`While the above are essential, these additional technologies can
    significantly boost your operations and customer experience:`,href:"optional-but-beneficial-technologies",subSections:[{title:"Online Ordering and Delivery ",content:`Expand your reach with online ordering and delivery services. This
        not only caters to customers preferring to dine at home but also
        opens up new revenue streams.
        <a class="text-sky-500 underline" href="#">See how others have implemented these services successfully</a>.`,id:"online-ordering-and-delivery "},{title:"Customer Relationship Management (CRM)",content:`A CRM system enhances your understanding and management of customer
        interactions, fostering loyalty through personalized communication.
        <a class="text-sky-500 underline" href="#">Explore CRM options</a> that are ideal for small businesses.`,id:"customer-relationship-management-crm"},{title:"Kitchen Display Systems (KDS)",content:`Replace printed tickets with a KDS to reduce kitchen clutter and
        improve staff communication, leading to faster and more efficient
        service. <a class="text-sky-500 underline" href="#">Learn about KDS benefits</a> from others&apos;
        experiences.`,id:"kitchen-display-systems-kds"},{title:"Employee Scheduling and Management Systems",content:`These systems streamline scheduling and staff management, ensuring
        optimal staffing levels without overburdening your team.
        <a class="text-sky-500 underline" href="#">Find out more</a> about popular scheduling systems.`,id:"employee-scheduling-and-management-systems"},{title:"Online Feedback and Review Management",content:`In a world driven by online reviews, managing your digital
        reputation is crucial. Encourage reviews, respond to feedback, and
        build a positive online presence.
        <a class="text-sky-500 underline" href="#">Discover effective strategies</a> for managing online reviews.`,id:"online-feedback-and-review-management"},{title:"Basic SEO and Email Marketing",content:`SEO ensures your trattoria appears in online searches, while email
        marketing keeps you connected with your customers.
        <a class="text-sky-500 underline" href="#">Learn how to effectively use these tools</a> to promote your
        business.`,id:"basic-seo-and-email-marketing"}]},{title:"In Conclusion",content:`Integrating these technologies may seem daunting, but they are
      invaluable allies in the journey of your trattoria. They offer
      efficiency, reach, and insights, enhancing the unique charm and
      experience of your establishment. By adopting these modern
      solutions, you ensure that your culinary heritage thrives in
      today&apos;s digital world.`}]},{type:"Middle",content:[{title:"Necessary Technologies:",content:` Owning and operating a mid-sized Italian trattoria presents unique
          challenges and opportunities. It's essential to balance the warm,
          traditional ambiance that customers love with modern technology to
          streamline operations. This guide highlights essential technologies
          that are particularly suited to mid-sized trattorias, helping you to
          grow your business without losing the essence of Italian
          hospitality.`,href:"necessary-technologies",subSections:[{title:"Advanced Point of Sale (POS) System",content:`For a mid-sized trattoria, an advanced POS system becomes crucial.
              Not only does it facilitate efficient transaction processing, but it
              also streamlines operations like table management, menu
              customization, and tracking customer preferences. An effective POS
              system can significantly enhance the dining experience and
              operational efficiency.
              <a class="text-sky-500 underline" href="#">See advanced POS systems in action</a>.`,id:"advanced-point-of-sale-pos-system"},{title:"Integrated Reservation and Table Management System",content:`Move up from a basic reservation system to one that integrates with
              table management, allowing for smoother operations and better
              customer service. This integration helps manage the flow of guests
              and optimizes table turnover rates.
              <a class="text-sky-500 underline" href="#">Explore leading systems</a> used by successful
              mid-sized restaurants for a more streamlined approach.`,id:"integrated-reservation-and-table-management-system"},{title:"Comprehensive Inventory Management System",content:` A comprehensive system will help in tracking ingredients and
              predicting stock needs, thus reducing waste and controlling costs.
              It's essential for ensuring that you always have the necessary
              ingredients on hand without overstocking.
              <a class="text-sky-500 underline" href="#">Learn from others how to optimize inventory</a>.`,id:"comprehensive-inventory-management-system"},{title:"Enhanced Website and Online Marketing",content:`A dynamic website with online booking and a strong online marketing
              strategy are key to attracting and retaining customers. These tools
              help in reaching a wider audience and providing essential
              information about the restaurant.
              <a class="text-sky-500 underline" href="#">Discover effective online strategies</a> tailored
              for mid-sized restaurants.`,id:"enhanced-website-and-online-marketing"},{title:"Proactive Social Media Marketing",content:`Engage customers with interactive content on social media platforms
              to build a strong community around your brand. This approach helps
              in boosting visibility and engaging with your audience on a more
              personal level.
              <a class="text-sky-500 underline" href="#">Get inspired by successful campaigns</a>.`,id:"proactive-social-media-marketing"},{title:"Comprehensive Accounting and Financial Management Software",content:`Upgrade to a system that offers detailed financial reporting and
              budgeting tools to keep track of your restaurant's financial health.
              This software is crucial for making informed decisions and
              maintaining profitability.
              <a class="text-sky-500 underline" href="#">Check out recommended software</a>.`,id:"comprehensive-accounting-and-financial-management-software"}]},{title:"Beneficial Technologies",content:`While the above are necessary, these additional technologies can
          significantly boost your operations and customer experience:`,href:"beneficial-technologies",subSections:[{title:"Digital Menu Boards and Ordering Kiosks",content:`Implement digital menu boards for a modern touch and to enhance
              customer interaction. These tools not only modernize the
              establishment but also streamline the ordering process.
              <a class="text-sky-500 underline" href="#">See how others are using these technologies</a>.`,id:"digital-menu-boards-and-ordering-kiosks"},{title:"Advanced Customer Relationship Management (CRM)",content:` A robust CRM system is crucial for personalizing customer
              interactions and building long-term relationships. It helps in
              collecting and utilizing customer data effectively for targeted
              marketing and improved service.
              <a class="text-sky-500 underline" href="#">Explore advanced CRM solutions</a> for mid-sized
              businesses.`,id:"advanced-customer-relationship-management-crm"},{title:"Advanced Kitchen Display Systems (KDS)",content:`An advanced KDS ensures seamless communication between the front and
              back of the house, reducing errors and improving service speed. It
              plays a vital role in enhancing kitchen efficiency and order
              accuracy.
              <a class="text-sky-500 underline" href="#">Learn about the benefits of advanced KDS</a>.`,id:"advanced-kitchen-display-systems-kds"},{title:"Staff Training and Development Platforms",content:`Invest in platforms that offer staff training and development to
              ensure high service standards and employee satisfaction. These
              platforms can be instrumental in keeping your staff updated with the
              latest industry trends and practices.
              <a class="text-sky-500 underline" href="#">Find effective training solutions</a>.`,id:"staff-training-and-development-platforms"},{title:"Integrated Feedback and Online Reputation Management",content:`Actively manage your online reputation with integrated feedback
              systems to understand and respond to customer perceptions. This
              proactive approach helps in maintaining a positive brand image and
              addressing any issues promptly.
              <a class="text-sky-500 underline" href="#">
                Discover strategies for effective reputation management
              </a>
              .`,id:"integrated-feedback-and-online-reputation-management"},{title:"Email Marketing and Loyalty Programs",content:`Develop sophisticated email marketing strategies and loyalty
              programs to keep customers engaged and coming back. These tools are
              key to creating a loyal customer base and driving repeat business.
              <a class="text-sky-500 underline" href="#">Learn how to build successful loyalty programs</a>
              .`,id:"email-marketing-and-loyalty-programs"}]},{title:"In Conclusion",content:`Embracing these technologies can lead to significant improvements in
          a mid-sized trattoria, enhancing efficiency, customer satisfaction,
          and profitability. Staying ahead with these technological
          advancements is essential in the competitive restaurant industry,
          ensuring both growth and sustainability.`}]},{type:"Large",content:[{title:"Advanced Technologies:",content:`Managing a large-scale Italian trattoria presents unique challenges
          that require advanced technological solutions. This guide focuses on
          technologies that not only preserve the authenticity of your
          trattoria but also streamline its operations, ensuring efficiency
          and customer satisfaction on a larger scale.`,href:"advanced-technologies",subSections:[{title:"Advanced Point of Sale (POS) System",content:`For a larger establishment, an advanced POS system is crucial. It
              should integrate seamlessly with other technologies, handle
              high-volume transactions, and offer detailed analytics to guide
              your business decisions.
              <a class="text-sky-500 underline" href="#">Explore top-tier POS systems</a> used by
              successful large-scale restaurants.`,id:"advanced-point-of-sale-pos-system"},{title:"Comprehensive Reservation and Table Management System",content:`A sophisticated reservation system is essential to manage the
              higher volume of guests efficiently. Such a system can optimize
              seating arrangements, reduce wait times, and enhance the overall
              guest experience.
              <a class="text-sky-500 underline" href="#">Discover advanced reservation systems</a> that
              can transform your guest management.`,id:"comprehensive-reservation-and-table-management-system"},{title:"Sophisticated Inventory Management Solutions",content:`Effective inventory management at a large scale demands more
              sophisticated software. It should provide real-time data,
              predictive analytics for demand forecasting, and integration with
              your suppliers.
              <a class="text-sky-500 underline" href="#">
                Learn about comprehensive inventory management tools
              </a>
              that cater to large-scale operations.`,id:"sophisticated-inventory-management-solutions"},{title:"Dynamic Website with Online Booking and E-commerce",content:`Your trattoria's website should be a full-fledged digital platform
              offering online booking, merchandise sales, and showcasing your
              culinary journey. Ensure it's optimized for mobile use and
              integrates with your social media.
              <a class="text-sky-500 underline" href="#">
                See how a dynamic website can elevate your brand
              </a>
              .`,id:"dynamic-website-with-online-booking-and-e-commerce"},{title:"Integrated Social Media and Digital Marketing Strategy",content:` Leverage the power of digital marketing and social media to reach
              a wider audience. Utilize advanced tools for content scheduling,
              targeted advertising, and analytics to measure your impact.
              <a class="text-sky-500 underline" href="#">
                Find inspiration in successful digital marketing campaigns
              </a>
              .`,id:"integrated-social-media-and-digital-marketing-strategy"},{title:"Enterprise-Level Accounting and Financial Management Software",content:`Your financial management needs are more complex at a large scale.
              Use enterprise-level software that offers comprehensive features
              like payroll management, advanced reporting, and tax compliance.
              <a class="text-sky-500 underline" href="#">Review top financial management solutions</a>.`,id:"enterprise-level-accounting-and-financial-management-software"}]},{title:" High-Impact Technologies",content:"",href:"high-impact-technologies",subSections:[{title:"Integrated Online Ordering and Delivery Platform",content:`Develop or integrate an online ordering platform that can handle
              high order volumes and seamless delivery coordination. This can
              significantly increase your reach and revenue.
              <a class="text-sky-500 underline" href="#">
                Explore state-of-the-art online ordering systems
              </a>
              .`,id:"integrated-online-ordering-and-delivery-platform"},{title:"Advanced Customer Relationship Management (CRM)",content:`Implement an advanced CRM system that can handle extensive
              customer data, offer personalized marketing, and track customer
              behavior patterns.
              <a class="text-sky-500 underline" href="#">
                Discover CRM systems designed for larger businesses
              </a>
              .`,id:"advanced-customer-relationship-management-crm"},{title:"High-Tech Kitchen Display and Management Systems (KDS)",content:`Invest in a high-tech KDS to streamline your kitchen operations,
              especially during peak hours. Look for systems that integrate with
              your POS for real-time updates.
              <a class="text-sky-500 underline" href="#">
                Learn from others who have modernized their kitchens
              </a>
              .`,id:"high-tech-kitchen-display-and-management-systems-kds"},{title:"Staff Management and Training Platforms",content:`Utilize comprehensive platforms for staff scheduling, training,
              and performance management. These systems should facilitate
              communication and ensure optimal staffing at all times.
              <a class="text-sky-500 underline" href="#">Find the best staff management solutions</a>.`,id:"staff-management-and-training-platforms"},{title:"Online Reputation and Review Management Tools",content:`For larger establishments, online reputation can be managed more
              effectively with specialized tools. These can help in monitoring
              reviews across various platforms and engaging with customers
              proactively.
              <a class="text-sky-500 underline" href="#">
                See how large restaurants manage their online presence
              </a>
              .`,id:"online-reputation-and-review-management-tools"},{title:"Advanced SEO and Integrated Email Marketing",content:`Utilize advanced SEO strategies and integrated email marketing
              campaigns to maintain visibility and engage with your customer
              base effectively.
              <a class="text-sky-500 underline" href="#">
                Learn advanced techniques for SEO and email marketing
              </a>
              .`,id:"advanced-seo-and-integrated-email-marketing"}]},{title:"In Conclusion",content:`Adopting these advanced technologies will not only help in
          preserving the unique character of your large-scale trattoria but
          also ensure its efficient operation and growth in the competitive
          restaurant industry. Embrace these innovations to keep your
          culinary traditions thriving in the modern digital landscape.`}]}];var u=n(7733);let h=()=>(0,a.jsxs)("div",{className:"mx-auto w-10/12 pt-16",children:[(0,a.jsxs)(c.Z,{styles:"text-center",children:["Professional Technology Solutions for ","Italian Trattoria"," Businesses"]}),a.jsx("div",{className:"flex justify-center w-full",children:a.jsx(u.ZP,{})}),(0,a.jsxs)(d.Z,{className:"text-center",children:["Choose how big your ","Italian Trattoria"," business is:"]}),a.jsx(l,{tabs:m})]})},7481:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var a=n(8679);let i=e=>{let t=(0,a.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../../../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),a=t.X(0,[271,129,323,471],()=>n(7374));module.exports=a})();