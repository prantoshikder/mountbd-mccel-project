import PageBanner from "@/components/PageBanner";
import ProductsCollectionSection from "@/components/ProductsCollectionSection";
import Container from "@/components/shared/Container";
import { BANNERS, PRODUCT_IMAGES } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  {
    title: "Admixture",
    desc: "Concrete admixtures improve the properties of fresh concrete. Added before or during mixing to enhance performance.",
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
    desc: "Complete waterproofing systems for structures — preventing ingress of water using modern coating and membrane systems.",
    items: [
      "Cementitious Water Proofing System",
      "Polyurethane Water Proofing System",
      "Self-adhesive Bituminous Membrane",
      "Torch Applied Bituminous Membrane",
    ],
  },
  {
    title: "Retrofitting",
    desc: "Re-strengthening existing structures to make them seismic resistant and extend their life span economically.",
    items: [
      "Bridges Retrofitting",
      "Buildings & Industrial Structure",
      "Transport Structure Retrofitting",
      "Earth Retaining Structure",
      "Marine Structures Retrofitting",
    ],
  },
  {
    title: "Grouts and Anchors",
    desc: "High strength grout bonding systems for post-installed anchors, crack injection and base plate grouting.",
    items: [
      "Plastic shrinkage compensated",
      "High early strength grout",
      "Free flow grout",
      "Ultra rapid strength gain",
    ],
  },
  {
    title: "Industrial Flooring",
    desc: "Durable Epoxy, PU & Hardener flooring solutions for industrial, commercial and decorative floor applications.",
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
    desc: "High performance joint sealants minimizing infiltration of surface water and protecting dowel bar systems.",
    items: [
      "Epoxy joint sealants",
      "PU joint sealants",
      "Fire proof joint sealants",
    ],
  },
];

export default function ProductsPageContainer() {
  return (
    <>
      <PageBanner
        title="Products"
        image={BANNERS.products}
        breadcrumb="Products"
      />

      <section className="bg-[#f3f4f6] py-16">
        <Container>
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-3">
            <span className="text-primary">OUR </span>
            <span className="text-accent">PRODUCTS</span>
          </h2>
          <p className="text-center text-gray-500 text-sm mb-12 max-w-xl mx-auto">
            Complete range of construction chemical products for every
            application — from admixtures to protective coatings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product, i) => (
              <div
                key={product.title}
                className="bg-white overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={PRODUCT_IMAGES[i]}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 bg-primary px-4 py-3">
                    <h3 className="text-white font-bold text-lg">
                      {product.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {product.desc}
                  </p>
                  <ul className="space-y-1.5">
                    {product.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-gray-700 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-block mt-5 bg-primary text-white text-sm font-semibold px-5 py-2.5 hover:bg-primary-dark transition-colors"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ProductsCollectionSection />
    </>
  );
}
