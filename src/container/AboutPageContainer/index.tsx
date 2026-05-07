import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import PageBanner from "@/components/PageBanner";
import StatsSection from "@/components/StatsSection";
import Container from "@/components/shared/Container";
import { BANNERS, COMPLETE_WORK_IMAGE } from "@/lib/images";
import Image from "next/image";

export default function AboutPageContainer() {
  return (
    <>
      <PageBanner
        title="About Us"
        image={BANNERS.about}
        breadcrumb="About Us"
      />
      <AboutSection />
      <StatsSection />

      {/* Complete Work Section */}
      <section className="bg-white py-16">
        <Container>
          <h2 className="text-center text-3xl font-bold mb-12">
            <span className="text-primary">COMPLETE </span>
            <span className="text-accent">WORK</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative w-full aspect-4/3 overflow-hidden">
              <Image
                src={COMPLETE_WORK_IMAGE}
                alt="Completed construction work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
                Our Achievements
              </p>
              <h3 className="text-primary text-2xl md:text-3xl font-bold leading-tight mb-6">
                We Deliver Quality Construction Solutions
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed text-justify mb-4">
                By introducing environment friendly products, we will be
                implemented a sound construction and healthy environment. We are
                doing the prestigious work through its well-equipped technical
                service department.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed text-justify">
                Our company is working with new construction sector. Also repair
                and renovation work of old structure. Our goal is to develop on
                the industrial and construction segments with a wide range of
                quality products.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ClientsSection />
    </>
  );
}
