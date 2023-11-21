import BusinessTabs from "@/app/components/BusinessTabs";
import H1 from "@/app/components/H1";
import Paragraph from "@/app/components/Paragraph";
import tabs from "../tabs";
import Breadcrumbs from "@/app/components/Breadcrumbs";

const BusinessPage = () => {
  return (
    <div className="mx-auto w-10/12 pt-16">
      <H1 styles="text-center">
        Professional Technology Solutions for {"Italian Trattoria"} Businesses
      </H1>
      <div className="flex justify-center w-full">
        <Breadcrumbs />
      </div>

      <Paragraph className="text-center">
        Choose how big your {"Italian Trattoria"} business is:
      </Paragraph>
      <BusinessTabs tabs={tabs} />
    </div>
  );
};

export default BusinessPage;
