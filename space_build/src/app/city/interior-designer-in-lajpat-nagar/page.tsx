import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Designer in Lajpat Nagar",
  description:
    "Interior Designer in Lajpat Nagar, with Price | Vasteior. Looking for an interior designer in Lajpat Nagar with price details? Vasterior delivers modern, stylish & Vastu-aligned interior solutions.",
  keywords:
    "interior designer lajpat nagar, home interior designer lajpat nagar, residential interior designer lajpat nagar",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/interior-designer-in-lajpat-nagar",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-designer-in-lajpat-nagar",
    title: "Interior Designer in Lajpat Nagar",
    description:
      "Interior Designer in Lajpat Nagar, with Price | Vasteior. Looking for an interior designer in Lajpat Nagar with price details? Vasterior delivers modern, stylish & Vastu-aligned interior solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Interior Designer in Lajpat Nagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Designer in Lajpat Nagar",
    description:
      "Interior Designer in Lajpat Nagar, with Price | Vasteior. Looking for an interior designer in Lajpat Nagar with price details? Vasterior delivers modern, stylish & Vastu-aligned interior solutions.",
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
