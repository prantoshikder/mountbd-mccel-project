import AboutPageContainer from "@/container/AboutPageContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Mount Construction Chemicals Engineering Ltd. — established in 2018, providing complete construction chemical solutions in Bangladesh.",
};

export default function AboutPage() {
  return <AboutPageContainer />;
}
