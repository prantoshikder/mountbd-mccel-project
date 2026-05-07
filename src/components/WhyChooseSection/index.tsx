import Container from "@/components/shared/Container";
import {
  FaAward,
  FaClock,
  FaHandshake,
  FaLeaf,
  FaShieldAlt,
  FaUserTie,
} from "react-icons/fa";

const FEATURES = [
  {
    icon: FaAward,
    title: "Quality Assured",
    desc: "Every product and service meets strict quality standards. We use certified materials with tested formulations for long-lasting results.",
  },
  {
    icon: FaUserTie,
    title: "Expert Team",
    desc: "Our in-house professionals have years of hands-on experience in construction chemicals, concrete repair, and structural retrofitting.",
  },
  {
    icon: FaClock,
    title: "Timely Delivery",
    desc: "We understand construction schedules. Our team ensures materials are delivered and services are completed on time, every time.",
  },
  {
    icon: FaShieldAlt,
    title: "Proven Solutions",
    desc: "With 150+ completed projects across Bangladesh, our methods are tested and trusted by leading contractors and engineers.",
  },
  {
    icon: FaLeaf,
    title: "Eco-Friendly",
    desc: "We introduce environment-friendly products to implement sound construction practices while maintaining a healthy environment.",
  },
  {
    icon: FaHandshake,
    title: "After-Sales Support",
    desc: "Our technical service department provides ongoing support and guidance well after project completion for total peace of mind.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            <span className="text-accent">WHY </span>
            <span className="text-primary">CHOOSE US</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            We combine technical expertise with quality materials to deliver
            construction chemical solutions you can rely on.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-5 p-6 border border-gray-100 hover:border-primary hover:shadow-md transition-all duration-300 group"
            >
              <div className="shrink-0 w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-colors duration-300">
                <Icon className="text-primary group-hover:text-white text-xl transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-primary font-bold text-base mb-2">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
