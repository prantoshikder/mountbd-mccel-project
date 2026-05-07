import ContactPageContainer from "@/container/ContactPageContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Mount Construction Chemicals Engineering Ltd. — Mirpur, Dhaka-1216. Call +880-1718-919505.",
};

export default function ContactPage() {
  return <ContactPageContainer />;
}
