import ProductsPageContainer from "@/container/ProductsPageContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our complete range of construction chemical products — admixture, waterproofing, retrofitting, industrial flooring and more.",
};

export default function ProductsPage() {
  return <ProductsPageContainer />;
}
