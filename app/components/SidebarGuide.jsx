import Link from "next/link";
import React from "react";

const SidebarGuide = ({ tabs }) => {
  return (
    <div className="sticky top-0 w-1/4 md:flex flex-col text-left pb-3 h-[calc(100vh-50px)] overflow-y-auto hidden">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 sticky top-0 bg-black pb-4">
          On This Page
        </h2>
        <ul className="overflow-y-auto">
          {tabs.map((section, index) => (
            <li key={index} className="mb-4">
              <p className="text-lg font-medium">
                {section.title === "In Conclusion" ? (
                  ""
                ) : (
                  <a href={"#" + section.href}>{section.title}</a>
                )}
              </p>
              <ul className="ml-4">
                {section.subSections ? (
                  <>
                    {section.subSections.map((subSection, idx) => (
                      <li key={idx} className="text-sm mt-2">
                        <Link href={"#" + subSection.id}>
                          {subSection.title}
                        </Link>
                      </li>
                    ))}
                  </>
                ) : (
                  ""
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarGuide;
