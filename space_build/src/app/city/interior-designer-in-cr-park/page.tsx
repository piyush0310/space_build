import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Designer in CR Park",
  description:
    "Interior Designer in CR Park, with Price | Vasteior. Looking for an interior designer in CR Park with price details? Vasterior delivers modern, stylish & Vastu-aligned interior solutions.",
  keywords:
    "interior designer cr park, modular kitchen designer cr park, home interior designer cr park",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/interior-designer-in-cr-park",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-designer-in-cr-park",
    title: "Interior Designer in CR Park",
    description:
      "Interior Designer in CR Park, with Price | Vasteior. Looking for an interior designer in CR Park with price details? Vasterior delivers modern, stylish & Vastu-aligned interior solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Interior Designer in CR Park",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Designer in CR Park",
    description:
      "Interior Designer in CR Park, with Price | Vasteior. Looking for an interior designer in CR Park with price details? Vasterior delivers modern, stylish & Vastu-aligned interior solutions.",
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
