"use client";

import Container from "@/components/shared/Container";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "gmail";
const TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_v6b203j";
const PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "user_oXA1cUdrVGytSgDCWXWwq";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-5 py-3 rounded-full border border-gray-300 bg-white text-gray-700 placeholder-gray-400 text-sm outline-none focus:border-primary transition-colors";

  return (
    <section className="bg-[#f3f4f6] py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="from_name"
                placeholder="Name *"
                required
                className={inputClass}
              />
              <input
                type="email"
                name="from_email"
                placeholder="Email Address *"
                required
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                required
                className={inputClass}
              />
              <input
                type="text"
                name="company"
                placeholder="Company *"
                required
                className={inputClass}
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Note *"
              required
              rows={6}
              className="w-full px-5 py-3 rounded-xl border border-gray-300 bg-white text-gray-700 placeholder-gray-400 text-sm outline-none focus:border-primary transition-colors resize-y"
            />

            {status === "success" && (
              <p className="text-green-600 text-sm font-medium">
                Message sent successfully! We will get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm font-medium">
                Something went wrong. Please try again or contact us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-primary text-white px-8 py-3 font-semibold text-sm hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
          </form>

          {/* Company Info */}
          <div className="space-y-5 pt-2">
            <h2 className="text-primary text-2xl font-bold leading-snug">
              Mount Construction Chemicals Engineering Limited (MCCEL)
            </h2>

            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-700 text-sm">
                <FaPhoneAlt className="text-primary text-base mt-0.5 shrink-0" />
                <span>+880-1718-919505, +880-1715-403993</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 text-sm">
                <FaEnvelope className="text-primary text-base mt-0.5 shrink-0" />
                <span>info@mountbd.org</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 text-sm">
                <FaMapMarkerAlt className="text-primary text-base mt-0.5 shrink-0" />
                <span>
                  99/2, Ground floor, West Shewrapara, Pirerbag road, Mirpur,
                  Dhaka-1216
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
