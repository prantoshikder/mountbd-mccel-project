"use client";

import PageBanner from "@/components/PageBanner";
import Container from "@/components/shared/Container";
import { BANNERS, GALLERY_IMAGES } from "@/lib/images";
import Image from "next/image";
import { useState } from "react";

const TABS = ["All", "Gallery1", "Gallery2", "Gallery3", "Gallery4"];

export default function GalleryPageContainer() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === active);

  return (
    <>
      <PageBanner
        title="Gallery"
        image={BANNERS.gallery}
        breadcrumb="Gallery"
      />

      <section className="bg-white py-16">
        <Container>
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
            <span className="text-accent">OUR </span>
            <span className="text-primary">GALLERY</span>
          </h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-6 py-2.5 text-sm font-semibold rounded transition-colors ${
                  active === tab
                    ? "bg-accent text-primary"
                    : "bg-primary text-white hover:bg-primary-light"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img) => (
              <div
                key={img.id}
                className="relative aspect-4/3 overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
