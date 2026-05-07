"use client";

import Container from "@/components/shared/Container";
import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const SOCIAL: { href: string; icon: IconType; label: string }[] = [
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
  {
    href: "https://www.instagram.com/mountbd05/",
    icon: FaInstagram,
    label: "Instagram",
  },
];

export default function HeaderTop() {
  return (
    <div className="bg-primary border-b border-white/10 py-2">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-1.5 lg:gap-4">
          {/* Contact info */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-white/80 text-sm font-medium">
            <a
              href="tel:+8801718919505"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <FaPhone size={11} />
              +880-1718-919505
            </a>
            <span className="text-white/30">|</span>
            <a
              href="tel:+8801715403993"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <FaPhone size={11} />
              +880-1715-403993
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a
              href="mailto:info@mountbd.org"
              className="hidden sm:flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <FaEnvelope size={11} />
              info@mountbd.org
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {SOCIAL.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-primary transition-colors"
              >
                <Icon size={11} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
