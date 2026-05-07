import ServicesPageContainer from "@/container/ServicesPageContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Complete construction chemical services — admixture, waterproofing, retrofitting, industrial flooring, joint sealants and more.",
};

export default function ServicesPage() {
  return <ServicesPageContainer />;
}
