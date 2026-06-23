import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Interior Designer Hauz Khas",
  description:
    "Vastu Interior Designer Hauz Khas, with Price | Vasteior. Looking for a Vastu interior designer in Hauz Khas with price details? Vasterior provides modern, elegant & Vastu-aligned interior solutions.",
  keywords:
    "vastu interior designer hauz khas, contemporary interior designer with vastu hauz khas, home interior designer hauz khas",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-interior-designer-hauz-khas",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-interior-designer-hauz-khas",
    title: "Vastu Interior Designer Hauz Khas",
    description:
      "Vastu Interior Designer Hauz Khas, with Price | Vasteior. Looking for a Vastu interior designer in Hauz Khas with price details? Vasterior provides modern, elegant & Vastu-aligned interior solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu Interior Designer Hauz Khas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Interior Designer Hauz Khas",
    description:
      "Vastu Interior Designer Hauz Khas, with Price | Vasteior. Looking for a Vastu interior designer in Hauz Khas with price details? Vasterior provides modern, elegant & Vastu-aligned interior solutions.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function InteriorDesignerNearMeMoradabadDistrict() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <Banner />
      <Content />
      <Services />
      <Portfolio />
      <Blog />
      <Testimonials />
    </div>
  );
}
