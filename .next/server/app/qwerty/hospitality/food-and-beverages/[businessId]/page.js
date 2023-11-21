(()=>{var e={};e.id=629,e.ids=[629],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},7374:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>o.a,__next_app__:()=>h,originalPathname:()=>m,pages:()=>d,routeModule:()=>g,tree:()=>c});var i=n(7096),a=n(6132),s=n(7284),o=n.n(s),r=n(2564),l={};for(let e in r)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>r[e]);n.d(t,l);let c=["",{children:["qwerty",{children:["hospitality",{children:["food-and-beverages",{children:["[businessId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,6200)),"C:\\Users\\baksb\\Desktop\\max-bezs\\max-bezs-next\\app\\qwerty\\hospitality\\food-and-beverages\\[businessId]\\page.jsx"]}]},{}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(n.bind(n,5042)),"C:\\Users\\baksb\\Desktop\\max-bezs\\max-bezs-next\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\baksb\\Desktop\\max-bezs\\max-bezs-next\\app\\qwerty\\hospitality\\food-and-beverages\\[businessId]\\page.jsx"],m="/qwerty/hospitality/food-and-beverages/[businessId]/page",h={require:n,loadChunk:()=>Promise.resolve()},g=new i.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/qwerty/hospitality/food-and-beverages/[businessId]/page",pathname:"/qwerty/hospitality/food-and-beverages/[businessId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2264:(e,t,n)=>{Promise.resolve().then(n.bind(n,6297))},6297:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var i=n(3854),a=n(4218),s=n(5548),o=n.n(s);let r=({tabs:e})=>i.jsx("div",{className:"sticky top-0 w-1/4 md:flex flex-col text-left pb-3 h-[calc(100vh-50px)] overflow-y-auto hidden",children:(0,i.jsxs)("div",{className:"p-4",children:[i.jsx("h2",{className:"text-lg font-semibold mb-2 sticky top-0 bg-black pb-4",children:"On This Page"}),i.jsx("ul",{className:"overflow-y-auto",children:e.map((e,t)=>(0,i.jsxs)("li",{className:"mb-4",children:[i.jsx("p",{className:"text-lg font-medium",children:i.jsx("a",{href:"#"+e.title,children:e.title})}),i.jsx("ul",{className:"ml-4",children:e.subSections?i.jsx(i.Fragment,{children:e.subSections.map((e,t)=>i.jsx("li",{className:"text-sm mt-2",children:i.jsx(o(),{href:"#"+e.id,children:e.title})},t))}):""})]},t))})]})}),l=({className:e,children:t})=>i.jsx("p",{className:e+" text-base md:text-lg lg:text-xl mb-4",children:t}),c=({styles:e,children:t,id:n})=>i.jsx("h2",{id:n,className:e+" text-2xl md:text-3xl lg:text-4xl font-bold mb-4",children:t}),d=({styles:e,id:t,children:n})=>i.jsx("h3",{id:t,className:e+" text-xl md:text-2xl lg:text-3xl font-bold mb-4",children:n}),m=({tabs:e,activeTab:t,setActiveTab:n})=>(0,i.jsxs)("div",{className:"",children:[i.jsx("div",{className:"flex justify-center mb-4 ",children:i.jsx("div",{className:"w-fit bg-neutral-900 rounded-xl p-1 ",children:e.map(e=>i.jsx("button",{className:`px-4 py-2 ${t===e.type?"  bg-neutral-700 rounded-lg text-white":"text-neutral-400"}`,onClick:()=>n(e.type),children:e.type},e.type))})}),e.map(n=>i.jsx("div",{className:`tab-content ${t===n.type?"block":"hidden"}`,children:(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsxs)("div",{className:"w-3/4",children:[i.jsx(l,{className:"indent-10 ",children:n.context}),n.content.map((e,t)=>(0,i.jsxs)("div",{children:[0===t?(0,i.jsxs)(i.Fragment,{children:[i.jsx(l,{children:e.content}),i.jsx(c,{id:e.href,children:e.title})]}):(0,i.jsxs)(i.Fragment,{children:[i.jsx(c,{id:e.href,children:e.title}),i.jsx(l,{children:e.content})]}),e.subSections?i.jsx(i.Fragment,{children:e.subSections.map((e,t)=>(0,i.jsxs)("div",{children:[i.jsx(d,{id:e.id,styles:"pt-4",children:t+1+". "+e.title}),i.jsx(l,{children:e.content})]},t))}):""]},t))]}),i.jsx(r,{tabs:e.filter(e=>e.type===t).map(e=>e.content).flat()})]})},n.type))]}),h=({styles:e,children:t})=>i.jsx("h1",{className:e+" text-4xl md:text-5xl lg:text-6xl font-bold mb-4",children:t}),g=()=>{let[e,t]=(0,a.useState)("Middle"),n=[{type:"Small",content:[{title:"Essential Technologies:",content:`Running a traditional Italian trattoria involves a delicate balance
        between honoring time-honored traditions and embracing modern
        advancements. This guide aims to introduce you to essential
        technologies that can enhance your trattoria's operations, keeping
        the essence of tradition alive while stepping into the future.`,href:"essential-technologies",subSections:[{title:"Point of Sale (POS) System",content:`Think of a POS system as more than just a cash register. It&apos;s
            the nerve center of your trattoria, streamlining everything from
            orders to inventory management.
            <a href="#">See how other trattorias have benefited</a>. A POS system not
            only improves efficiency but also offers valuable insights into your
            sales, helping you make informed decisions.`,id:"point-of-sale-pos-system"},{title:"Basic Reservation System",content:`Move beyond the pen-and-paper method with a digital reservation
            system. This technology simplifies bookings and enhances guest
            management, ensuring a warm welcome for every diner.
            <i>Explore popular systems</i> used by other small restaurants.`,id:"basic-reservation-system"},{title:"Inventory Management Software",content:`Effective inventory management is crucial in balancing fresh
            ingredients with cost efficiency. The right software helps you track
            stock levels, minimize waste, and ensure your signature dishes are
            always available. <i>Learn more about the top choices</i> for small
            eateries.`,id:"inventory-management-software"},{title:"Website and Online Presence",content:`Your trattoria&apos;s website is its digital storefront. Combined
            with an online maps presence, it guides new customers straight to
            your door. Consider adding a simple, elegant website featuring your
            menu, location, and your story.
            <i>
              Discover how a compelling online presence has transformed
              businesses
            </i>
            .`,id:"website-and-online-presence"},{title:"Social Media Engagement",content:` Platforms like Instagram and Facebook extend your trattoria&apos;s
            hospitality into the digital world. Share your culinary creations
            and connect with your community.
            <i>Get inspired by successful social media strategies</i> from
            fellow restaurateurs.`,id:"social-media-engagement"},{title:"Basic Accounting Software",content:`Stay on top of your finances with user-friendly accounting software.
            This tool simplifies tracking expenses and profits, bringing clarity
            and precision to your financial management.
            <i> Check out software recommendations</i>.`,id:"basic-accounting-software"}]},{title:"Optional but Beneficial Technologies",content:`While the above are essential, these additional technologies can
    significantly boost your operations and customer experience:`,href:"optional-but-beneficial-technologies",subSections:[{title:"Online Ordering and Delivery ",content:`Expand your reach with online ordering and delivery services. This
        not only caters to customers preferring to dine at home but also
        opens up new revenue streams.
        <i>See how others have implemented these services successfully</i>.`,id:"online-ordering-and-delivery "},{title:"Customer Relationship Management (CRM)",content:`A CRM system enhances your understanding and management of customer
        interactions, fostering loyalty through personalized communication.
        <i>Explore CRM options</i> that are ideal for small businesses.`,id:"customer-relationship-management-crm"},{title:"Kitchen Display Systems (KDS)",content:`Replace printed tickets with a KDS to reduce kitchen clutter and
        improve staff communication, leading to faster and more efficient
        service. <i>Learn about KDS benefits</i> from others&apos;
        experiences.`,id:"kitchen-display-systems-kds"},{title:"Employee Scheduling and Management Systems",content:`These systems streamline scheduling and staff management, ensuring
        optimal staffing levels without overburdening your team.
        <i>Find out more</i> about popular scheduling systems.`,id:"employee-scheduling-and-management-systems"},{title:"Online Feedback and Review Management",content:`In a world driven by online reviews, managing your digital
        reputation is crucial. Encourage reviews, respond to feedback, and
        build a positive online presence.
        <i>Discover effective strategies</i> for managing online reviews.`,id:"online-feedback-and-review-management"},{title:"Basic SEO and Email Marketing",content:`SEO ensures your trattoria appears in online searches, while email
        marketing keeps you connected with your customers.
        <i>Learn how to effectively use these tools</i> to promote your
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
              operational efficiency.{" "}
              <Link href="#">See advanced POS systems in action</Link>.`,id:"advanced-point-of-sale-pos-system"},{title:"Integrated Reservation and Table Management System",content:`Move up from a basic reservation system to one that integrates with
              table management, allowing for smoother operations and better
              customer service. This integration helps manage the flow of guests
              and optimizes table turnover rates.{" "}
              <Link href="#">Explore leading systems</Link> used by successful
              mid-sized restaurants for a more streamlined approach.`,id:"integrated-reservation-and-table-management-system"},{title:"Comprehensive Inventory Management System",content:` A comprehensive system will help in tracking ingredients and
              predicting stock needs, thus reducing waste and controlling costs.
              It's essential for ensuring that you always have the necessary
              ingredients on hand without overstocking.{" "}
              <Link href="#">Learn from others how to optimize inventory</Link>.`,id:"comprehensive-inventory-management-system"},{title:"Enhanced Website and Online Marketing",content:`A dynamic website with online booking and a strong online marketing
              strategy are key to attracting and retaining customers. These tools
              help in reaching a wider audience and providing essential
              information about the restaurant.{" "}
              <Link href="#">Discover effective online strategies</Link> tailored
              for mid-sized restaurants.`,id:"enhanced-website-and-online-marketing"},{title:"Proactive Social Media Marketing",content:`Engage customers with interactive content on social media platforms
              to build a strong community around your brand. This approach helps
              in boosting visibility and engaging with your audience on a more
              personal level.{" "}
              <Link href="#">Get inspired by successful campaigns</Link>.`,id:"proactive-social-media-marketing"},{title:"Comprehensive Accounting and Financial Management Software",content:`Upgrade to a system that offers detailed financial reporting and
              budgeting tools to keep track of your restaurant's financial health.
              This software is crucial for making informed decisions and
              maintaining profitability.{" "}
              <Link href="#">Check out recommended software</Link>.`,id:"comprehensive-accounting-and-financial-management-software"}]},{title:"Beneficial Technologies",content:`While the above are necessary, these additional technologies can
          significantly boost your operations and customer experience:`,href:"optional-but-beneficial-technologies",subSections:[{title:"Digital Menu Boards and Ordering Kiosks",content:`Implement digital menu boards for a modern touch and to enhance
              customer interaction. These tools not only modernize the
              establishment but also streamline the ordering process.{" "}
              <Link href="#">See how others are using these technologies</Link>.`,id:"digital-menu-boards-and-ordering-kiosks"},{title:"Customer Relationship Management (CRM)",content:` A robust CRM system is crucial for personalizing customer
              interactions and building long-term relationships. It helps in
              collecting and utilizing customer data effectively for targeted
              marketing and improved service.{" "}
              <Link href="#">Explore advanced CRM solutions</Link> for mid-sized
              businesses.`,id:"customer-relationship-management-crm"},{title:"Advanced Kitchen Display Systems (KDS)",content:`An advanced KDS ensures seamless communication between the front and
              back of the house, reducing errors and improving service speed. It
              plays a vital role in enhancing kitchen efficiency and order
              accuracy.{" "}
              <Link href="#">Learn about the benefits of advanced KDS</Link>.`,id:"advanced-kitchen-display-systems-kds"},{title:"Staff Training and Development Platforms",content:`Invest in platforms that offer staff training and development to
              ensure high service standards and employee satisfaction. These
              platforms can be instrumental in keeping your staff updated with the
              latest industry trends and practices.{" "}
              <Link href="#">Find effective training solutions</Link>.`,id:"staff-training-and-development-platforms"},{title:"Integrated Feedback and Online Reputation Management",content:`Actively manage your online reputation with integrated feedback
              systems to understand and respond to customer perceptions. This
              proactive approach helps in maintaining a positive brand image and
              addressing any issues promptly.{" "}
              <Link href="#">
                Discover strategies for effective reputation management
              </Link>
              .`,id:"integrated-feedback-and-online-reputation-management"},{title:"Email Marketing and Loyalty Programs",content:`Develop sophisticated email marketing strategies and loyalty
              programs to keep customers engaged and coming back. These tools are
              key to creating a loyal customer base and driving repeat business.{" "}
              <Link href="#">Learn how to build successful loyalty programs</Link>
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
              <Link href="#">Explore top-tier POS systems</Link> used by
              successful large-scale restaurants.`,id:"advanced-point-of-sale-pos-system"},{title:"Comprehensive Reservation and Table Management System",content:`A sophisticated reservation system is essential to manage the
              higher volume of guests efficiently. Such a system can optimize
              seating arrangements, reduce wait times, and enhance the overall
              guest experience.
              <Link href="#">Discover advanced reservation systems</Link> that
              can transform your guest management.`,id:"comprehensive-reservation-and-table-management-system"},{title:"Sophisticated Inventory Management Solutions",content:`Effective inventory management at a large scale demands more
              sophisticated software. It should provide real-time data,
              predictive analytics for demand forecasting, and integration with
              your suppliers.
              <Link href="#">
                Learn about comprehensive inventory management tools
              </Link>
              that cater to large-scale operations.`,id:"sophisticated-inventory-management-solutions"},{title:"Dynamic Website with Online Booking and E-commerce",content:`Your trattoria's website should be a full-fledged digital platform
              offering online booking, merchandise sales, and showcasing your
              culinary journey. Ensure it's optimized for mobile use and
              integrates with your social media.
              <Link href="#">
                See how a dynamic website can elevate your brand
              </Link>
              .`,id:"dynamic-website-with-online-booking-and-e-commerce"},{title:"Integrated Social Media and Digital Marketing Strategy",content:` Leverage the power of digital marketing and social media to reach
              a wider audience. Utilize advanced tools for content scheduling,
              targeted advertising, and analytics to measure your impact.
              <Link href="#">
                Find inspiration in successful digital marketing campaigns
              </Link>
              .`,id:"integrated-social-media-and-digital-marketing-strategy"},{title:"Enterprise-Level Accounting and Financial Management Software",content:`Your financial management needs are more complex at a large scale.
              Use enterprise-level software that offers comprehensive features
              like payroll management, advanced reporting, and tax compliance.
              <Link href="#">Review top financial management solutions</Link>.`,id:"enterprise-level-accounting-and-financial-management-software"}]},{title:" High-Impact Technologies",content:"",href:"high-impact-technologies",subSections:[{title:"Integrated Online Ordering and Delivery Platform",content:`Develop or integrate an online ordering platform that can handle
              high order volumes and seamless delivery coordination. This can
              significantly increase your reach and revenue.
              <Link href="#">
                Explore state-of-the-art online ordering systems
              </Link>
              .`,id:"integrated-online-ordering-and-delivery-platform"},{title:"Advanced Customer Relationship Management (CRM)",content:`Implement an advanced CRM system that can handle extensive
              customer data, offer personalized marketing, and track customer
              behavior patterns.
              <Link href="#">
                Discover CRM systems designed for larger businesses
              </Link>
              .`,id:"advanced-customer-relationship-management-crm"},{title:"High-Tech Kitchen Display and Management Systems (KDS)",content:`Invest in a high-tech KDS to streamline your kitchen operations,
              especially during peak hours. Look for systems that integrate with
              your POS for real-time updates.
              <Link href="#">
                Learn from others who have modernized their kitchens
              </Link>
              .`,id:"high-tech-kitchen-display-and-management-systems-kds"},{title:"Staff Management and Training Platforms",content:`Utilize comprehensive platforms for staff scheduling, training,
              and performance management. These systems should facilitate
              communication and ensure optimal staffing at all times.
              <Link href="#">Find the best staff management solutions</Link>.`,id:"staff-management-and-training-platforms"},{title:"Online Reputation and Review Management Tools",content:`For larger establishments, online reputation can be managed more
              effectively with specialized tools. These can help in monitoring
              reviews across various platforms and engaging with customers
              proactively.
              <Link href="#">
                See how large restaurants manage their online presence
              </Link>
              .`,id:"online-reputation-and-review-management-tools"},{title:"Advanced SEO and Integrated Email Marketing",content:`Utilize advanced SEO strategies and integrated email marketing
              campaigns to maintain visibility and engage with your customer
              base effectively.
              <Link href="#">
                Learn advanced techniques for SEO and email marketing
              </Link>
              .`,id:"advanced-seo-and-integrated-email-marketing"}]},{title:"In Conclusion",content:`Adopting these advanced technologies will not only help in
          preserving the unique character of your large-scale trattoria but
          also ensure its efficient operation and growth in the competitive
          restaurant industry. Embrace these innovations to keep your
          culinary traditions thriving in the modern digital landscape.`}]}];return(0,i.jsxs)("div",{className:"mx-auto w-10/12 pt-16",children:[(0,i.jsxs)(h,{styles:"text-center",children:["Professional Technology Solutions for ","Italian Trattoria"," Businesses"]}),(0,i.jsxs)(l,{className:"text-center",children:["Choose how big your ","Italian Trattoria"," business is:"]}),i.jsx(m,{tabs:n,activeTab:e,setActiveTab:t})]})}},6200:(e,t,n)=>{"use strict";n.r(t),n.d(t,{$$typeof:()=>o,__esModule:()=>s,default:()=>l});var i=n(5153);let a=(0,i.createProxy)(String.raw`C:\Users\baksb\Desktop\max-bezs\max-bezs-next\app\qwerty\hospitality\food-and-beverages\[businessId]\page.jsx`),{__esModule:s,$$typeof:o}=a,r=a.default,l=r},7481:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var i=n(8531);let a=e=>{let t=(0,i.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../../../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),i=t.X(0,[271,129,323,471],()=>n(7374));module.exports=i})();