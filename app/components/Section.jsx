import React from "react";
import H2 from "@/app/components/H2";
import CategoryBlock from "@/app/components/CategoryBlock";

const Section = ({ title, items, getRandomParagraph }) => (
  <div>
    <H2>{title}</H2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
      {items.map((item, index) => (
        <CategoryBlock
          key={index}
          href={item.href}
          industry={item.industry}
          heading={item.heading}
          paragraph={getRandomParagraph(items)}
          buttonText={item.buttonText}
        />
      ))}
    </div>
  </div>
);

export default Section;
