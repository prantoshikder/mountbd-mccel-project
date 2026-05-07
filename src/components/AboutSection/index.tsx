import Container from "@/components/shared/Container";
import { ABOUT_IMAGE } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-white py-16">
      <Container>
        {/* Section Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 md:mb-12">
          <span className="text-primary">ABOUT </span>
          <span className="text-accent">US</span>
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              We Are Expert In
            </p>

            <h3 className="text-primary text-2xl md:text-3xl font-bold leading-tight mb-6">
              Mount Construction Chemicals
              <br className="hidden sm:block" />
              {" "}Engineering Limited (MCCEL)
            </h3>

            <div className="space-y-3 text-gray-700 text-sm leading-relaxed text-justify">
              <p>
                Mount Construction Chemicals Engineering Ltd. lanced its
                glorious Journey on 2018. Mount is The Unique Name For
                Constriction related all Types of Organization. We also provide
                all types of Concrete solution with the best satisfactory
                engineering services.
              </p>
              <p>
                Our company is working with new construction sector. Also repair
                and renovation work of old structure. Our goal is to develop on
                the industrial and construction segments with a wide range of
                quality products.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-block mt-8 bg-primary text-white px-7 py-3 text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              Read More
            </Link>
          </div>

          {/* Right — Image */}
          <div className="relative w-full aspect-4/3 overflow-hidden">
            <Image
              src={ABOUT_IMAGE}
              alt="Mount Construction Chemicals Engineering site"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
