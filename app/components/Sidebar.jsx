import Link from "next/link";
import React from "react";

const Sidebar = ({ sections }) => (
  <div className="sticky top-0 w-1/4 flex flex-col text-left pb-3 h-[calc(100vh-50px)] overflow-y-auto">
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2 sticky top-0 bg-black pb-4">
        On This Page
      </h2>
      <ul className="overflow-y-auto">
        {sections.map((section, index) => (
          <li key={index} className="mb-4">
            <p className="text-lg font-medium">{section.title}</p>
            <ul className="ml-4">
              {section.subSections.map((subSection, idx) => (
                <li key={idx} className="text-sm mt-2">
                  <Link href={subSection.href}>{subSection.title}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Sidebar;
