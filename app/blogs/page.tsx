import BlogsPageContainer from "@/container/BlogsPageContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Latest news and insights on construction chemicals, concrete repair, waterproofing and engineering from MCCEL.",
};

export default function BlogsPage() {
  return <BlogsPageContainer />;
}
