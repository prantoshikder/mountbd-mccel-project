import ContactSection from "@/components/ContactSection";
import PageBanner from "@/components/PageBanner";
import Container from "@/components/shared/Container";
import { BANNERS } from "@/lib/images";

export default function ContactPageContainer() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        image={BANNERS.contact}
        breadcrumb="Contact Us"
      />

      <ContactSection />

      {/* Google Maps */}
      <section className="bg-white">
        <Container>
          <div className="pb-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.2!2d90.3563!3d23.8041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMount+Construction+Chemicals+Engineering+Ltd!5e0!3m2!1sen!2sbd!4v1"
              width="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mount Construction Chemicals Engineering Ltd location"
              className="w-full h-55 sm:h-80 md:h-105"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
