import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Interior Designer South Extension",
  description:
    "Vastu Interior Designer South Extension, with Price | Vasteior. Looking for a Vastu interior designer in South Extension with price details? Vasterior provides harmonious, modern & Vastu-based interiors.",
  keywords:
    "vastu interior designer south extension, luxury interior designer with vastu south extension, home interior designer south extension",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-interior-designer-south-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-interior-designer-south-extension",
    title: "Vastu Interior Designer South Extension",
    description:
      "Vastu Interior Designer South Extension, with Price | Vasteior. Looking for a Vastu interior designer in South Extension with price details? Vasterior provides harmonious, modern & Vastu-based interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu Interior Designer South Extension",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Interior Designer South Extension",
    description:
      "Vastu Interior Designer South Extension, with Price | Vasteior. Looking for a Vastu interior designer in South Extension with price details? Vasterior provides harmonious, modern & Vastu-based interiors.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function InteriorDesignerSouthExtension() {
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
