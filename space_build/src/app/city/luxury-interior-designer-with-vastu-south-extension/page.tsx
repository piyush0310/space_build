import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Luxury Interior Designer with Vastu South Extension",
  description:
    "Luxury Interior Designer with Vastu South Extension, Price | Vasteior. Looking for a luxury interior designer with Vastu in South Extension with price details? Vasterior delivers premium, elegant & Vastu-aligned interiors.",
  keywords:
    "luxury interior designer with vastu south extension, vastu interior designer south extension, high-end interior designer south extension",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/luxury-interior-designer-with-vastu-south-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/luxury-interior-designer-with-vastu-south-extension",
    title: "Luxury Interior Designer with Vastu South Extension",
    description:
      "Luxury Interior Designer with Vastu South Extension, Price | Vasteior. Looking for a luxury interior designer with Vastu in South Extension with price details? Vasterior delivers premium, elegant & Vastu-aligned interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Luxury Interior Designer with Vastu South Extension",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Luxury Interior Designer with Vastu South Extension",
    description:
      "Luxury Interior Designer with Vastu South Extension, Price | Vasteior. Looking for a luxury interior designer with Vastu in South Extension with price details? Vasterior delivers premium, elegant & Vastu-aligned interiors.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function LuxuryInteriorDesignerVastuSouthExtension() {
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
