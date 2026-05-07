import Container from "@/components/shared/Container";
import {
  FaClipboardCheck,
  FaCogs,
  FaComments,
  FaSearchLocation,
} from "react-icons/fa";

const STEPS = [
  {
    number: "01",
    icon: FaComments,
    title: "Consultation",
    desc: "We start with a detailed discussion to understand your project needs, site conditions, and specific challenges that need to be addressed.",
  },
  {
    number: "02",
    icon: FaSearchLocation,
    title: "Site Assessment",
    desc: "Our technical team visits the site to evaluate the existing structure, surface condition, and environmental factors before recommending solutions.",
  },
  {
    number: "03",
    icon: FaClipboardCheck,
    title: "Solution Design",
    desc: "Based on the assessment, we design a tailored plan selecting the right products, methods, and quantities for optimal results.",
  },
  {
    number: "04",
    icon: FaCogs,
    title: "Implementation",
    desc: "Our trained professionals execute the solution with precision, following industry standards and ensuring quality at every stage.",
  },
];

export default function WorkProcessSection() {
  return (
    <section className="py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            <span className="text-primary">OUR WORK </span>
            <span className="text-accent">PROCESS</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            A systematic approach that ensures every project is delivered with
            the highest quality and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {STEPS.map(({ number, icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="relative flex flex-col items-center text-center px-6"
            >
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full border-t-2 border-dashed border-gray-300" />
              )}

              {/* Icon circle */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-white border-2 border-primary flex items-center justify-center mb-5">
                <Icon className="text-primary text-2xl" />
              </div>

              {/* Step number */}
              <span className="text-primary text-5xl font-black leading-none mb-3 opacity-30 select-none">
                {number}
              </span>

              <h3 className="text-primary font-bold text-lg mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
