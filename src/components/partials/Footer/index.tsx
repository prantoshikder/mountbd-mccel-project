"use client";

import Container from "@/components/shared/Container";
import Link from "next/link";
import {
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaGlobe,
  FaGoogle,
  FaHome,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const SERVICES = [
  "Concrete Repair & Renovation",
  "Surface Treatments",
  "Water Proofing",
  "Protective Coatings",
  "Polish Concrete",
  "Fair Face Work",
];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/Mount-Construction-Chemicals-Engineering-ltd-109563461278670",
    icon: FaFacebookF,
    label: "Facebook",
  },
  { href: "https://twitter.com/mountbd1", icon: FaTwitter, label: "Twitter" },
  {
    href: "https://www.linkedin.com/in/mount-bd-353727211/",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  { href: "mailto:info@mountbd.org", icon: FaGoogle, label: "Email" },
  {
    href: "https://www.instagram.com/mountbd05/",
    icon: FaInstagram,
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer>
      {/* Newsletter Banner */}
      <div className="bg-[#060830] py-10">
        <Container>
          <div className="bg-accent rounded-xl px-4 sm:px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-primary text-2xl font-bold mb-1">
                Mount Construction Chemicals Engineering Limited
              </h2>
              <p className="text-gray-700 text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, quae.
              </p>
            </div>
            <form
              className="flex items-center gap-0 w-full md:w-auto md:min-w-[320px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="flex-1 px-4 py-3 rounded-l-full outline-none text-gray-800 text-sm bg-white border-0"
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-r-full font-semibold text-sm hover:bg-primary-dark transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </Container>
      </div>

      {/* Main Footer */}
      <div className="bg-[#060830] border-t border-white/10 py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* About Us */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 tracking-wide">
                ABOUT US
              </h3>
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center border-2 border-accent mb-4">
                  <span className="text-accent font-bold text-xs">MCCEL</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Mount Construction Chemicals Engineering Ltd. lanced its
                glorious Journey on 2018. Mount is The Unique Name For
                Constriction related all Types of Organization.
              </p>
              <ul className="flex items-center gap-4">
                {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-accent hover:text-white transition-colors text-lg"
                    >
                      <Icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 tracking-wide">
                SERVICES
              </h3>
              <ul className="space-y-0">
                {SERVICES.map((service) => (
                  <li key={service}>
                    <a
                      href="/services"
                      className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors py-3 border-b border-dashed border-white/20 text-sm"
                    >
                      <FaChevronRight className="text-accent text-xs shrink-0" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 tracking-wide">
                QUICK LINKS
              </h3>
              <ul className="space-y-0">
                {QUICK_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors py-3 border-b border-dashed border-white/20 text-sm"
                    >
                      <FaChevronRight className="text-accent text-xs shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 tracking-wide">
                CONTACT US
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <FaHome className="text-accent text-base mt-0.5 shrink-0" />
                  <span>
                    99/2, Middle Pirerbag
                    <br />
                    Mirpur, Dhaka-1216
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <FaPhone className="text-accent text-base mt-0.5 shrink-0" />
                  <span>
                    +880-248-110528
                    <br />
                    +880-1718-919505,
                    <br />
                    +880-1715-403993
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <FaEnvelope className="text-accent text-base mt-0.5 shrink-0" />
                  <span>
                    info@mountbd.org
                    <br />
                    mccelbd@gmail.com
                  </span>
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <FaGlobe className="text-accent text-base shrink-0" />
                  <a
                    href="https://www.mountbd.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    www.mountbd.org
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#04051f] py-4">
        <Container>
          <p className="text-center text-gray-400 text-sm">
            Copyright ©2019 All rights reserved | Developed by{" "}
            <span className="text-accent font-semibold">Pranto Shikder</span>
          </p>
        </Container>
      </div>
    </footer>
  );
}
