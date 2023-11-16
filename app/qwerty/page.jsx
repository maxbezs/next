import React from "react";
import CategoryBlock from "../components/CategoryBlock";
import H1 from "../components/H1";

const QWERTY = () => {
  const categories = [
    {
      industry: "Hospitality",
      heading: "Food & Beverages",
      paragraph: "Restaurants, Cafes, Bars, Pubs, Lounges, Fast Food, Catering",
      buttonText: "Explore More",
      href: "/qwerty/hospitality/food-and-beverages",
    },
    {
      industry: "Hospitality",
      heading: "Lodging",
      paragraph:
        "Hotels, Hostels, Motels, Resorts, B&Bs, Apartments, AirBnB, Booking",
      buttonText: "Explore More",
      href: "/qwerty/hospitality/lodging",
    },
    {
      industry: "Hospitality",
      heading: "Events",
      paragraph: "Corporate, Social, Entertainment, Fundraising Events",
      buttonText: "Explore More",
      href: "/qwerty/hospitality/events",
    },
    {
      industry: "Hospitality",
      heading: "Entertainment",
      paragraph:
        "Shows, Themed areas, Nightclubs, Cinemas, Cultural centers, Art gallery, Museums",
      buttonText: "Explore More",
      href: "/qwerty/hospitality/entertainment",
    },
  ];
  return (
    <div className="container mx-auto p-4">
      <H1 className="text-4xl font-bold text-center mb-4">
        ALL in ONE solution for ALL Businesses
      </H1>
      <div className="mb-8">
        <input
          className="form-input mt-1 block w-full border-2 p-3 rounded-full"
          type="text"
          placeholder="Find ur industry, service or business"
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
        {categories.map((category, index) => (
          <CategoryBlock
            key={index}
            href={category.href}
            industry={category.industry}
            heading={category.heading}
            paragraph={category.paragraph}
            buttonText={category.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default QWERTY;
