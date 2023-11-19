import React from "react";
import Sidebar from "@/app/components/Sidebar";
import Paragraph from "./Paragraph";

const BusinessTabs = ({ tabs, activeTab, setActiveTab }) => {
  const baseHref =
    "qwerty/blog/hospitality/food-and-beverages/what-is-the-best-pos-system";
  const sections = [
    {
      title: "Essential Technologies:",
      subSections: [
        {
          title: "Point of Sale (POS) System",
          href: `${baseHref}italian-trattoria`,
        },
        {
          title: " Basic Reservation System",
          href: `${baseHref}sushi-restaurant`,
        },
        {
          title: "Inventory Management Software",
          href: `${baseHref}steakhouse`,
        },
        {
          title: "Website and Online Presence(Maps)",
          href: `${baseHref}vegan-restaurant`,
        },
        { title: "Social Media", href: `${baseHref}seafood-restaurant` },
        {
          title: "Basic Accounting Software",
          href: `${baseHref}mexican-restaurant`,
        },
      ],
    },
    {
      title: "Optional but Beneficial Technologies:",
      subSections: [
        {
          title: "Online Ordering and Delivery ",
          href: `${baseHref}italian-trattoria`,
        },
        {
          title: " Customer Relationship Management (CRM)",
          href: `${baseHref}sushi-restaurant`,
        },
        {
          title: "Kitchen Display Systems (KDS)",
          href: `${baseHref}steakhouse`,
        },
        {
          title: "Employee Scheduling and Management Systems",
          href: `${baseHref}vegan-restaurant`,
        },
        {
          title: "Online Feedback and Review Management",
          href: `${baseHref}seafood-restaurant`,
        },
        {
          title: "Basic SEO andEmail Marketing",
          href: `${baseHref}mexican-restaurant`,
        },
      ],
    },
  ];
  return (
    <div className="">
      <div className="flex justify-center mb-4 ">
        <div className="w-fit bg-neutral-900 rounded-xl	 p-1	">
          {tabs.map((tab) => (
            <button
              key={tab.title}
              className={`px-4 py-2 ${
                activeTab === tab.title
                  ? "  bg-neutral-700 rounded-lg text-white"
                  : "text-neutral-400"
              }`}
              onClick={() => setActiveTab(tab.title)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.title}
          className={`tab-content ${
            activeTab === tab.title ? "block" : "hidden"
          }`}
        >
          <div className="flex">
            <div className="w-3/4">
              <Paragraph className="indent-10	">{tab.context}</Paragraph>{" "}
              {tab.content}
            </div>

            <Sidebar sections={sections} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessTabs;
