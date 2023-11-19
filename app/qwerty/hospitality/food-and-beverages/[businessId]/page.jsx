"use client";
import BusinessTabs from "@/app/components/BusinessTabs";
import H1 from "@/app/components/H1";
import H2 from "@/app/components/H2";
import H3 from "@/app/components/H3";
import Paragraph from "@/app/components/Paragraph";
import Sidebar from "@/app/components/Sidebar";
import Link from "next/link";
import React, { useState } from "react";
const BusinessPage = () => {
  const [activeTab, setActiveTab] = useState("Middle");

  const businessTabsData1 = [
    {
      title: "Small",
      context: `Running a traditional Italian trattoria involves a delicate balance
      between honoring time-honored traditions and embracing modern
      advancements. This guide aims to introduce you to essential
      technologies that can enhance your trattoria's operations, keeping
      the essence of tradition alive while stepping into the future.`,
      content: (
        <>
          <H2>Essential Technologies:</H2>
          <H3 styles="ml-8">1. Point of Sale (POS) System</H3>
          <Paragraph>
            Think of a POS system as more than just a cash register. It&apos;s
            the nerve center of your trattoria, streamlining everything from
            orders to inventory management.
            <i>See how other trattorias have benefited</i>. A POS system not
            only improves efficiency but also offers valuable insights into your
            sales, helping you make informed decisions.
          </Paragraph>
          <H3>2. Basic Reservation System</H3>
          <Paragraph>
            Move beyond the pen-and-paper method with a digital reservation
            system. This technology simplifies bookings and enhances guest
            management, ensuring a warm welcome for every diner.
            <i>Explore popular systems</i> used by other small restaurants.
          </Paragraph>
          <H3>3. Inventory Management Software</H3>
          <Paragraph>
            Effective inventory management is crucial in balancing fresh
            ingredients with cost efficiency. The right software helps you track
            stock levels, minimize waste, and ensure your signature dishes are
            always available. <i>Learn more about the top choices</i> for small
            eateries.
          </Paragraph>
          <H3>4. Website and Online Presence</H3>
          <Paragraph>
            Your trattoria&apos;s website is its digital storefront. Combined
            with an online maps presence, it guides new customers straight to
            your door. Consider adding a simple, elegant website featuring your
            menu, location, and your story.
            <i>
              Discover how a compelling online presence has transformed
              businesses
            </i>
            .
          </Paragraph>
          <H3>5. Social Media Engagement</H3>
          <Paragraph>
            Platforms like Instagram and Facebook extend your trattoria&apos;s
            hospitality into the digital world. Share your culinary creations
            and connect with your community.
            <i>Get inspired by successful social media strategies</i> from
            fellow restaurateurs.
          </Paragraph>
          <H3>6. Basic Accounting Software</H3>
          <Paragraph>
            Stay on top of your finances with user-friendly accounting software.
            This tool simplifies tracking expenses and profits, bringing clarity
            and precision to your financial management.
            <i> Check out software recommendations</i>.
          </Paragraph>
          <H2>Optional but Beneficial Technologies</H2>
          <Paragraph>
            While the above are essential, these additional technologies can
            significantly boost your operations and customer experience:
          </Paragraph>
          <H3>1. Online Ordering and Delivery</H3>
          <Paragraph>
            Expand your reach with online ordering and delivery services. This
            not only caters to customers preferring to dine at home but also
            opens up new revenue streams.
            <i>See how others have implemented these services successfully</i>.
          </Paragraph>
          <H3>2. Customer Relationship Management (CRM)</H3>
          <Paragraph>
            A CRM system enhances your understanding and management of customer
            interactions, fostering loyalty through personalized communication.
            <i>Explore CRM options</i> that are ideal for small businesses.
          </Paragraph>
          <H3>3. Kitchen Display Systems (KDS)</H3>
          <Paragraph>
            Replace printed tickets with a KDS to reduce kitchen clutter and
            improve staff communication, leading to faster and more efficient
            service. <i>Learn about KDS benefits</i> from others&apos;
            experiences.
          </Paragraph>
          <H3>4. Employee Scheduling and Management Systems</H3>
          <Paragraph>
            These systems streamline scheduling and staff management, ensuring
            optimal staffing levels without overburdening your team.
            <i>Find out more</i> about popular scheduling systems.
          </Paragraph>
          <H3>5. Online Feedback and Review Management</H3>
          <Paragraph>
            In a world driven by online reviews, managing your digital
            reputation is crucial. Encourage reviews, respond to feedback, and
            build a positive online presence.
            <i>Discover effective strategies</i> for managing online reviews.
          </Paragraph>
          <H3>6. Basic SEO and Email Marketing</H3>
          <Paragraph>
            SEO ensures your trattoria appears in online searches, while email
            marketing keeps you connected with your customers.
            <i>Learn how to effectively use these tools</i> to promote your
            business.
          </Paragraph>
          <H3>In Conclusion</H3>
          <Paragraph>
            Integrating these technologies may seem daunting, but they are
            invaluable allies in the journey of your trattoria. They offer
            efficiency, reach, and insights, enhancing the unique charm and
            experience of your establishment. By adopting these modern
            solutions, you ensure that your culinary heritage thrives in
            today&apos;s digital world.
          </Paragraph>
        </>
      ),
    },
    {
      title: "Middle",
      context: ` Owning and operating a mid-sized Italian trattoria presents unique
      challenges and opportunities. It's essential to balance the warm,
      traditional ambiance that customers love with modern technology to
      streamline operations. This guide highlights essential technologies
      that are particularly suited to mid-sized trattorias, helping you to
      grow your business without losing the essence of Italian
      hospitality.`,
      content: (
        <>
          <H2>Necessary Technologies: </H2>

          <H3>
            1. <strong>Advanced Point of Sale (POS) System</strong>
          </H3>
          <Paragraph>
            For a mid-sized trattoria, an advanced POS system becomes crucial.
            It should handle transactions, table management, menu customization,
            and customer preferences.
            <Link href="#">See advanced POS systems in action</Link>.
          </Paragraph>

          <H3>
            2.
            <strong>Integrated Reservation and Table Management System</strong>
          </H3>
          <Paragraph>
            Move up from a basic reservation system to one that integrates with
            table management. <Link href="#">Explore leading systems</Link> used
            by successful mid-sized restaurants.
          </Paragraph>

          <H3>
            3. <strong>Comprehensive Inventory Management System</strong>
          </H3>
          <Paragraph>
            A comprehensive system will help in tracking ingredients and
            predicting stock needs.
            <Link href="#">Learn from others how to optimize inventory</Link>.
          </Paragraph>

          <H3>
            4. <strong>Enhanced Website and Online Marketing</strong>
          </H3>
          <Paragraph>
            A dynamic website with online booking and a strong online marketing
            strategy are key.
            <Link href="#">Discover effective online strategies</Link> tailored
            for mid-sized restaurants.
          </Paragraph>

          <H3>
            5. <strong>Proactive Social Media Marketing</strong>
          </H3>
          <Paragraph>
            Engage customers with interactive content on social media.
            <Link href="#">Get inspired by successful campaigns</Link>.
          </Paragraph>

          <H3>
            6.
            <strong>
              Comprehensive Accounting and Financial Management Software
            </strong>
          </H3>
          <Paragraph>
            Upgrade to a system that offers detailed financial reporting and
            budgeting tools.
            <Link href="#">Check out recommended software</Link>.
          </Paragraph>

          <H2>Optional but Beneficial Technologies</H2>

          <H3>
            1. <strong>Digital Menu Boards and Ordering Kiosks</strong>
          </H3>
          <Paragraph>
            Implement digital menu boards for a modern touch.
            <Link href="#">See how others are using these technologies</Link>.
          </Paragraph>

          <H3>
            2. <strong>Customer Relationship Management (CRM)</strong>
          </H3>
          <Paragraph>
            A robust CRM system is crucial for personalizing customer
            interactions. <Link href="#">Explore advanced CRM solutions</Link>
            for mid-sized businesses.
          </Paragraph>

          <H3>
            3. <strong>Advanced Kitchen Display Systems (KDS)</strong>
          </H3>
          <Paragraph>
            An advanced KDS ensures seamless communication between the front and
            back of the house.
            <Link href="#">Learn about the benefits of advanced KDS</Link>.
          </Paragraph>

          <H3>
            4. <strong>Staff Training and Development Platforms</strong>
          </H3>
          <Paragraph>
            Invest in platforms that offer staff training and development.
            <Link href="#">Find effective training solutions</Link>.
          </Paragraph>

          <H3>
            5.
            <strong>
              Integrated Feedback and Online Reputation Management
            </strong>
          </H3>
          <Paragraph>
            Actively manage your online reputation with integrated feedback
            systems.
            <Link href="#">
              Discover strategies for effective reputation management
            </Link>
            .
          </Paragraph>

          <H3>
            6. <strong>Email Marketing and Loyalty Programs</strong>
          </H3>
          <Paragraph>
            Develop sophisticated email marketing strategies and loyalty
            programs.
            <Link href="#">Learn how to build successful loyalty programs</Link>
            .
          </Paragraph>

          <H2>In Conclusion</H2>
          <Paragraph>
            Embracing these technologies can lead to significant improvements in
            a mid-sized trattoria, enhancing efficiency, customer satisfaction,
            and profitability.
          </Paragraph>
        </>
      ),
    },
    {
      title: "Large",
      context: `Managing a large-scale Italian trattoria presents unique challenges
      that require advanced technological solutions. This guide focuses on
      technologies that not only preserve the authenticity of your
      trattoria but also streamline its operations, ensuring efficiency
      and customer satisfaction on a larger scale.`,
      content: (
        <>
          <div>
            <H2>Advanced Technologies:</H2>

            <H3>
              1. <strong>Advanced Point of Sale (POS) System</strong>
            </H3>
            <Paragraph>
              For a larger establishment, an advanced POS system is crucial. It
              should integrate seamlessly with other technologies, handle
              high-volume transactions, and offer detailed analytics to guide
              your business decisions.
              <Link href="#">Explore top-tier POS systems</Link> used by
              successful large-scale restaurants.
            </Paragraph>

            <H3>
              2.
              <strong>
                Comprehensive Reservation and Table Management System
              </strong>
            </H3>
            <Paragraph>
              A sophisticated reservation system is essential to manage the
              higher volume of guests efficiently. Such a system can optimize
              seating arrangements, reduce wait times, and enhance the overall
              guest experience.
              <Link href="#">Discover advanced reservation systems</Link> that
              can transform your guest management.
            </Paragraph>

            <H3>
              3. <strong>Sophisticated Inventory Management Solutions</strong>
            </H3>
            <Paragraph>
              Effective inventory management at a large scale demands more
              sophisticated software. It should provide real-time data,
              predictive analytics for demand forecasting, and integration with
              your suppliers.
              <Link href="#">
                Learn about comprehensive inventory management tools
              </Link>
              that cater to large-scale operations.
            </Paragraph>

            <H3>
              4.
              <strong>
                Dynamic Website with Online Booking and E-commerce
              </strong>
            </H3>
            <Paragraph>
              Your trattoria’s website should be a full-fledged digital platform
              offering online booking, merchandise sales, and showcasing your
              culinary journey. Ensure it’s optimized for mobile use and
              integrates with your social media.
              <Link href="#">
                See how a dynamic website can elevate your brand
              </Link>
              .
            </Paragraph>

            <H3>
              5.
              <strong>
                Integrated Social Media and Digital Marketing Strategy
              </strong>
            </H3>
            <Paragraph>
              Leverage the power of digital marketing and social media to reach
              a wider audience. Utilize advanced tools for content scheduling,
              targeted advertising, and analytics to measure your impact.
              <Link href="#">
                Find inspiration in successful digital marketing campaigns
              </Link>
              .
            </Paragraph>

            <H3>
              6.
              <strong>
                Enterprise-Level Accounting and Financial Management Software
              </strong>
            </H3>
            <Paragraph>
              Your financial management needs are more complex at a large scale.
              Use enterprise-level software that offers comprehensive features
              like payroll management, advanced reporting, and tax compliance.
              <Link href="#">Review top financial management solutions</Link>.
            </Paragraph>

            <H2>Optional but High-Impact Technologies</H2>

            <H3>
              1.
              <strong>Integrated Online Ordering and Delivery Platform</strong>
            </H3>
            <Paragraph>
              Develop or integrate an online ordering platform that can handle
              high order volumes and seamless delivery coordination. This can
              significantly increase your reach and revenue.
              <Link href="#">
                Explore state-of-the-art online ordering systems
              </Link>
              .
            </Paragraph>

            <H3>
              2.
              <strong>Advanced Customer Relationship Management (CRM)</strong>
            </H3>
            <Paragraph>
              Implement an advanced CRM system that can handle extensive
              customer data, offer personalized marketing, and track customer
              behavior patterns.
              <Link href="#">
                Discover CRM systems designed for larger businesses
              </Link>
              .
            </Paragraph>

            <H3>
              3.
              <strong>
                High-Tech Kitchen Display and Management Systems (KDS)
              </strong>
            </H3>
            <Paragraph>
              Invest in a high-tech KDS to streamline your kitchen operations,
              especially during peak hours. Look for systems that integrate with
              your POS for real-time updates.
              <Link href="#">
                Learn from others who have modernized their kitchens
              </Link>
              .
            </Paragraph>

            <H3>
              4. <strong>Staff Management and Training Platforms</strong>
            </H3>
            <Paragraph>
              Utilize comprehensive platforms for staff scheduling, training,
              and performance management. These systems should facilitate
              communication and ensure optimal staffing at all times.
              <Link href="#">Find the best staff management solutions</Link>.
            </Paragraph>

            <H3>
              5. <strong>Online Reputation and Review Management Tools</strong>
            </H3>
            <Paragraph>
              For larger establishments, online reputation can be managed more
              effectively with specialized tools. These can help in monitoring
              reviews across various platforms and engaging with customers
              proactively.
              <Link href="#">
                See how large restaurants manage their online presence
              </Link>
              .
            </Paragraph>

            <H3>
              6. <strong>Advanced SEO and Integrated Email Marketing</strong>
            </H3>
            <Paragraph>
              Utilize advanced SEO strategies and integrated email marketing
              campaigns to maintain visibility and engage with your customer
              base effectively.
              <Link href="#">
                Learn advanced techniques for SEO and email marketing
              </Link>
              .
            </Paragraph>

            <H2>In Conclusion</H2>
            <Paragraph>
              Adopting these advanced technologies will not only help in
              preserving the unique character of your large-scale trattoria but
              also ensure its efficient operation and growth in the competitive
              restaurant industry. Embrace these innovations to keep your
              culinary traditions thriving in the modern digital landscape.
            </Paragraph>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="mx-auto w-10/12 pt-16">
      <H1 styles="text-center">
        Professional Technology Solutions for Italian Trattoria Businesses
      </H1>
      <Paragraph className="text-center">
        Choose how big your Italian Trattoria business is:
      </Paragraph>
      <BusinessTabs
        tabs={businessTabsData1}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default BusinessPage;
