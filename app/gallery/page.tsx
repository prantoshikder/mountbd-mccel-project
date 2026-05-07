import GalleryPageContainer from "@/container/GalleryPageContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View our construction projects and completed works gallery — Mount Construction Chemicals Engineering Ltd.",
};

export default function GalleryPage() {
  return <GalleryPageContainer />;
}
