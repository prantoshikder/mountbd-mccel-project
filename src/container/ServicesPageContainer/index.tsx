import PageBanner from "@/components/PageBanner";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import WorkProcessSection from "@/components/WorkProcessSection";
import { BANNERS } from "@/lib/images";

export default function ServicesPageContainer() {
  return (
    <>
      <PageBanner
        title="Services"
        image={BANNERS.services}
        breadcrumb="Services"
      />
      <ServicesSection />
      <WhyChooseSection />
      <WorkProcessSection />
    </>
  );
}
