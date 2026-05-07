import Container from "@/components/shared/Container";
import { PRODUCT_IMAGES } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  { title: "Admixture",           slug: "admixture" },
  { title: "Water Proofing",      slug: "water-proofing" },
  { title: "Retrofitting",        slug: "retrofitting" },
  { title: "Grouts and Anchors",  slug: "grouts-and-anchors" },
  { title: "Industrial Flooring", slug: "industrial-flooring" },
  { title: "Joint Sealants",      slug: "joint-sealants" },
];

export default function ProductsCollectionSection() {
  return (
    <section className="bg-[#f3f4f6] py-16">
      <Container>
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
          <span className="text-accent">PRODUCTS </span>
          <span className="text-primary">COLLECTION</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <Link
              key={product.slug}
              href="/products"
              className="group relative h-56 rounded-2xl overflow-hidden block"
            >
              <Image
                src={PRODUCT_IMAGES[i]}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute bottom-4 left-0 right-0 text-center text-white font-bold text-lg drop-shadow">
                {product.title}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
