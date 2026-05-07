"use client";

import Container from "@/components/shared/Container";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CLIENTS = [
  { src: "https://mountbd.org/static/media/clients-2.747d3a52.png",  alt: "Client 2" },
  { src: "https://mountbd.org/static/media/clients-3.989f379a.png",  alt: "Client 3" },
  { src: "https://mountbd.org/static/media/clients-8.d57b453a.png",  alt: "Client 8" },
  { src: "https://mountbd.org/static/media/clients-9.66585c12.png",  alt: "Client 9" },
  { src: "https://mountbd.org/static/media/clients-10.dc26b6ea.jpg", alt: "Client 10" },
  { src: "https://mountbd.org/static/media/clients-11.c83bf121.png", alt: "Client 11" },
  { src: "https://mountbd.org/static/media/clients-12.1bbc72b7.png", alt: "Client 12" },
  { src: "https://mountbd.org/static/media/clients-14.64ace779.png", alt: "Client 14" },
];

const ITEMS = [...CLIENTS, ...CLIENTS];

function getVisible() {
  if (typeof window === "undefined") return 6;
  if (window.innerWidth < 480) return 2;
  if (window.innerWidth < 768) return 3;
  if (window.innerWidth < 1024) return 4;
  return 6;
}

export default function ClientsSection() {
  const [visible, setVisible] = useState(6);
  const [idx, setIdx] = useState(0);
  const [animated, setAnimated] = useState(true);

  useEffect(() => {
    const update = () => setVisible(getVisible());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Reset idx if visible changes to avoid out-of-bounds
  useEffect(() => { setIdx(0); }, [visible]);

  const next = () => setIdx((p) => p + 1);

  const prev = () => {
    if (idx === 0) {
      setAnimated(false);
      setIdx(CLIENTS.length);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimated(true);
          setIdx(CLIENTS.length - 1);
        })
      );
    } else {
      setIdx((p) => p - 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(next, 2500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (idx === CLIENTS.length) {
      const snap = setTimeout(() => {
        setAnimated(false);
        setIdx(0);
      }, 500);
      return () => clearTimeout(snap);
    }
  }, [idx]);

  useEffect(() => {
    if (!animated) {
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)));
    }
  }, [animated]);

  return (
    <section className="bg-white py-14">
      <Container>
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
          <span className="text-primary">OUR </span>
          <span className="text-accent">CLIENTS</span>
        </h2>

        <div className="relative flex items-center gap-2 sm:gap-4">
          <button
            onClick={prev}
            className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-primary text-white hover:bg-accent hover:text-primary transition-colors"
          >
            <FaChevronLeft size={13} />
          </button>

          <div className="overflow-hidden flex-1">
            <div
              className="flex"
              style={{
                transform: `translateX(-${idx * (100 / visible)}%)`,
                transition: animated ? "transform 0.5s ease" : "none",
              }}
            >
              {ITEMS.map((client, i) => (
                <div
                  key={i}
                  className="shrink-0 flex items-center justify-center px-2 sm:px-4"
                  style={{ width: `${100 / visible}%` }}
                >
                  <div className="relative w-20 h-12 sm:w-28 sm:h-16 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                    <Image
                      src={client.src}
                      alt={client.alt}
                      fill
                      className="object-contain"
                      sizes="112px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-primary text-white hover:bg-accent hover:text-primary transition-colors"
          >
            <FaChevronRight size={13} />
          </button>
        </div>
      </Container>
    </section>
  );
}
