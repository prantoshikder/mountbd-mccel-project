import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import OurGallerySection from "@/components/OurGallerySection";
import ProductsCollectionSection from "@/components/ProductsCollectionSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";

export default function LandingPageContainer() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsCollectionSection />
      <StatsSection />
      <OurGallerySection />
      <ClientsSection />
      <ContactSection />
    </>
  );
}
