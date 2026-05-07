import PageBanner from "@/components/PageBanner";
import Container from "@/components/shared/Container";
import { BANNERS, BLOG_IMAGES } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

const BLOGS = [
  {
    title: "Retrofitting",
    excerpt:
      "The word retrofit means to apply new technologies to an older system. Retrofitting in construction industry refers to re-strengthening of existing structure to make them seismic resistant.",
    image: BLOG_IMAGES[0],
    slug: "retrofitting",
  },
  {
    title: "Water Proofing",
    excerpt:
      "Waterproofing is the process of making an object or structure water proof or water resistant so that it remains relatively unaffected by water or resisting the ingress of water under specified conditions.",
    image: BLOG_IMAGES[1],
    slug: "water-proofing",
  },
  {
    title: "Flooring",
    excerpt:
      "Flooring is the general term for a permanent covering of a floor or for the work of installing such a floor covering. Floor covering is a term to describe any finish material applied over a floor structure.",
    image: BLOG_IMAGES[2],
    slug: "flooring",
  },
  {
    title: "Grouts & Anchor",
    excerpt:
      "Grout concrete anchors are post installed bars utilizing a high strength grout for the bonding material. The advantage of using a grout over an epoxy is cement grouts does not break down in high heat areas.",
    image: BLOG_IMAGES[3],
    slug: "grouts-anchor",
  },
  {
    title: "Concrete Repair & Renovation",
    excerpt:
      "Concrete repair is the process of fixing a hardened concrete surface that over time has lost the ability to hold the binding concrete materials together due to damage or environmental exposure.",
    image: BLOG_IMAGES[4],
    slug: "concrete-repair-renovation",
  },
  {
    title: "Protective Coatings",
    excerpt:
      "Reinforced concrete is a composite material. Its structural performance is realised only when concrete and steel act in unison during the service life of the structure.",
    image: BLOG_IMAGES[5],
    slug: "protective-coatings",
  },
];

export default function BlogsPageContainer() {
  return (
    <>
      <PageBanner
        title="Blogs"
        image={BANNERS.blogs}
        breadcrumb="Blogs"
      />

      <section className="bg-[#f3f4f6] py-16">
        <Container>
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-3">
            <span className="text-primary">LATEST </span>
            <span className="text-accent">BLOGS</span>
          </h2>
          <p className="text-center text-gray-500 text-sm mb-12 max-w-xl mx-auto">
            Stay updated with the latest news and insights from the world of
            construction chemicals and engineering.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOGS.map((blog) => (
              <article key={blog.slug} className="bg-white overflow-hidden group">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-primary font-bold text-lg mb-3 group-hover:text-accent transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:text-accent transition-colors"
                  >
                    Read More »
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
