import Footer from "@/components/partials/Footer";
import HeaderTop from "@/components/partials/HeaderTop";
import Navbar from "@/components/partials/Navbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: "https://mountbd.org",
  title: {
    default: "MCCEL | Mount Construction Chemicals Engineering Limited",
    template: "%s | MCCEL",
  },
  description:
    "Complete solution for construction — concrete repair, retrofitting, industrial flooring, waterproofing, protective coatings and more.",
  applicationName: "MCCEL",
  keywords: [
    "construction chemicals",
    "concrete repair",
    "retrofitting",
    "industrial flooring",
    "waterproofing",
    "protective coatings",
    "Bangladesh",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${poppins.variable} font-sans h-full antialiased`}
      >
        <HeaderTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
