"use client";

import Container from "@/components/shared/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

const LINKS = [
  { href: "/",        label: "Home" },
  { href: "/about",   label: "About Us" },
  { href: "/services",label: "Services" },
  { href: "/products",label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blogs",   label: "Blogs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-lg" : "shadow-sm"}`}>
      <Container>
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="text-accent font-bold text-lg leading-none">M</span>
            </div>
            <div className="leading-tight">
              <div className="text-primary font-bold text-base tracking-wide">MCCEL</div>
              <div className="text-muted text-[10px] uppercase tracking-widest hidden sm:block">
                Construction Chemicals
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors group ${
                  isActive(l.href) ? "text-primary" : "text-ink hover:text-primary"
                }`}
              >
                {l.label}
                <span
                  className={`absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-accent rounded-full transition-transform origin-left ${
                    isActive(l.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center bg-primary text-white text-sm font-semibold px-5 py-2 hover:bg-accent hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
            <button
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-primary"
            >
              {open ? <FaTimes size={22} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          <Container>
            <nav className="flex flex-col py-3">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 py-3 text-sm font-medium border-b border-gray-100 last:border-0 transition-colors ${
                    isActive(l.href)
                      ? "text-primary font-semibold"
                      : "text-ink hover:text-primary"
                  }`}
                >
                  {isActive(l.href) && (
                    <span className="w-1 h-4 bg-accent rounded-full shrink-0" />
                  )}
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 mb-1 bg-primary text-white text-sm font-semibold px-5 py-2.5 text-center hover:bg-accent hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
