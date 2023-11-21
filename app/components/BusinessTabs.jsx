"use client";

import React, { useState } from "react";
import SidebarGuide from "@/app/components/SidebarGuide";
import Paragraph from "./Paragraph";
import H2 from "@/app/components/H2";
import H3 from "@/app/components/H3";

const BusinessTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState("Middle");

  return (
    <div className="">
      <div className="flex justify-center mb-4 ">
        <div className="w-fit bg-neutral-900 rounded-xl	 p-1	">
          {tabs.map((tab) => (
            <button
              key={tab.type}
              className={`px-4 py-2 ${
                activeTab === tab.type
                  ? "  bg-neutral-700 rounded-lg text-white"
                  : "text-neutral-400"
              }`}
              onClick={() => setActiveTab(tab.type)}
            >
              {tab.type}
            </button>
          ))}
        </div>
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.type}
          className={`tab-content ${
            activeTab === tab.type ? "block" : "hidden"
          }`}
        >
          <div className="flex">
            <div className="w-3/4">
              <Paragraph className="indent-10	">{tab.context}</Paragraph>
              {tab.content.map((section, index) => (
                <div key={index}>
                  {index === 0 ? (
                    <>
                      <Paragraph>{section.content}</Paragraph>
                      <H2 id={section.href}>{section.title}</H2>
                    </>
                  ) : (
                    <>
                      <H2 id={section.href}>{section.title}</H2>
                      <Paragraph>{section.content}</Paragraph>
                    </>
                  )}

                  {section.subSections ? (
                    <>
                      {section.subSections.map((subSection, idx) => (
                        <div key={idx}>
                          <H3 id={subSection.id} styles="pt-4">
                            {idx + 1 + ". " + subSection.title}
                          </H3>
                          <Paragraph
                            dangerouslySetInnerHTML={{
                              __html: subSection.content,
                            }}
                          ></Paragraph>
                        </div>
                      ))}
                    </>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
            <SidebarGuide
              tabs={tabs
                .filter((tab) => tab.type === activeTab)
                .map((tab) => tab.content)
                .flat()}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessTabs;
