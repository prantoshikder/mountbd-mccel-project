"use client";

import Container from "@/components/shared/Container";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const SERVICES = [
  {
    title: "Admixture",
    desc: "The concrete admixture are also called concrete additives. These materials are added to the concrete before mixing or during the mixing process to improve the properties of the fresh concrete. The dosage of concrete additive is generally not more than 5% of the cement dosage. The characteristic of concrete additives are characterized by many varieties and small amounts, which have a great influence on the performance of the concrete.",
    extended:
      "In addition it has the characteristics of less investment, quick effect and remarkable technical and economic befits. Reasonable use of admixtures in concrete can achieve various technical economic benefits such as savings cement, saving anergy, shortening the construction period, improving concrete properties and construction operating conditions.",
    items: [
      "Plasticizers Admixture",
      "Super Plasticizers Admixture",
      "Hyper Plasticizers Admixture",
      "Water Proofing Admixture",
      "Plasticized Expending Grout Admixture",
    ],
  },
  {
    title: "Water Proofing",
    desc: "Waterproofing is the process of making an object or structure water proof or water resistant so that it remains relatively unaffected by water or resisting the ingress off water under specified conditions. Water resistant and water proof often refer to penetration of water in its liquid state and possibly under pressure, wheres damp proof refers to resistant to humidity or dampness.",
    extended:
      "Permission of water vapor through a material or structure is reported as a moisture vapor transmission rate. Modern items may be water proof by applying water replant coating or by sealing seams width bituminous system.",
    items: [
      "Cementitious Water Proofing System",
      "Polyurethiene Water Proofing System",
      "Self-adhesive Bituminous Water Proofing Membrane",
      "Torch Applied Slade Bituminous Water Proofing Membrane",
      "Torch Applied Non Slade Bituminous Water Proofing Membrane",
    ],
  },
  {
    title: "Retrofitting",
    desc: "The word retrofit means to apply new technologies to an older system. Retrofit is a process of adding some new features that were not there before. Retrofitting in construction industry refers to re-strengthening of existing structure to make them seismic resistant. Retrofitting is an economic approach to increase life span of existing structure rather than redeveloping it.",
    extended:
      "There are various building structures of public, private and historical importance. If private and public structures get damaged, in extreme cases they can be dismantled. But incase of structure of historical importance, they can not be dismantled. And here the only way to save these structures is retrofitting.",
    items: [
      "Bridges Retrofitting",
      "Buildings Industrial Structure Retrofitting",
      "Transport Structure in urban areas Retrofitting",
      "Earth Retaining Structure Retrofitting",
      "Marine Structures Retrofitting",
    ],
  },
  {
    title: "Grouts and Anchors",
    desc: "Grouts concrete anchors are post installed bars utilizing a high strength grout for the bonding material. The advantage of using a grout over an epoxy is cement grouts does not break down in high heat areas and can be pumped into deep embedded holes easier than epoxy.",
    extended:
      "For injecting into cracks, Honeycombs and cavities in concrete structures. It can also be used for grouting base plates with very narrow gaps (<10mm).",
    items: [
      "Plastic shrinkage compensated",
      "Develop high early strength",
      "Free flow ensures high level of contact with load bearing area",
      "Ultra rapid strength gain — Vibration resistant — Corrosion resistant",
      "Tolerant of wet and damp conditions — Can be placed underwater",
    ],
  },
  {
    title: "Industrial Flooring",
    desc: "Flooring is the general term for a permanent covering of a floor or for the work of installing such a floor covering. Floor covering is a term to generically describe any finish material applied over a floor structure to provide a walking surface. Both terms are used interchangeably but floor covering refers more to loose-lay materials.",
    extended:
      "The floor under the flooring is called the sub floor which provides the support for the flooring. Special purpose sub floors like floating floors, raised floors may be laid upon another underlying sub floor which provides the structural strength.",
    items: [
      "Floor hardener",
      "Epoxy flooring",
      "PU flooring",
      "3D floor",
      "Polish concrete flooring",
    ],
  },
  {
    title: "Joint Sealants",
    desc: "The most widely accepted definition of a joint sealant today is a material that minimizes both infiltration of surface water and incompressible material into the joint system. Secondarily, Sealants are also purported to reduce the potential for dowel bar corrosion by reducing entrance of joint sealant chemicals.",
    extended:
      "There are some earned claims that joint sealants prevent surface water from entering the joint system, but modern vacuum tests clearly show that no sealant will provide a perfectly water tight seal.",
    items: [
      "Epoxy joint sealants",
      "PU joint sealants",
      "Fire proof joint sealants",
    ],
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const service = SERVICES[active];

  return (
    <section className="bg-white py-16">
      <Container>
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 md:mb-12">
          <span className="text-accent">OUR </span>
          <span className="text-primary">SERVICES</span>
        </h2>

        <div className="flex flex-col lg:grid lg:grid-cols-[320px_1fr] gap-0 items-start">
          {/* Left — Tab list: horizontal scroll on mobile, vertical on desktop */}
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible border border-gray-200 shrink-0 w-full">
            {SERVICES.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                className={`shrink-0 lg:shrink flex items-center justify-between px-5 py-4 lg:py-5 text-left font-bold text-sm transition-colors whitespace-nowrap lg:whitespace-normal w-auto lg:w-full
                  ${i === active
                    ? "bg-primary text-white"
                    : "bg-white text-primary hover:bg-gray-50 border-b-0 lg:border-b border-r lg:border-r-0 border-gray-200"
                  }
                  ${i !== active && i === SERVICES.length - 1 ? "border-r-0 lg:border-b-0" : ""}
                `}
              >
                <span>{s.title}</span>
                <span className="hidden lg:inline text-lg leading-none ml-4">»</span>
              </button>
            ))}
          </div>

          {/* Right — Content panel */}
          <div className="px-0 lg:px-10 pt-6 lg:pt-0">
            <h3 className="text-primary text-xl md:text-3xl font-bold mb-4">
              {service.title}
            </h3>

            <div className="text-gray-700 text-sm leading-relaxed text-justify space-y-3 mb-6">
              <p>{service.desc}</p>
              <p>{service.extended}</p>
            </div>

            {/* Items checklist */}
            <div className="space-y-2">
              {service.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border border-gray-200 px-4 py-3"
                >
                  <FaCheck className="text-accent shrink-0 text-sm" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
