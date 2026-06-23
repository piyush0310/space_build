import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu-Based Interior Designer South Delhi",
  description:
    "Looking for a Vastu-based interior designer in South Delhi with price details? Vasterior delivers holistic, stylish & Vastu-aligned interiors.",
  keywords:
    "vastu-based interior designer south delhi, vastu interior consultant south delhi, home interior designer south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-based-interior-designer-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-based-interior-designer-south-delhi",
    title: "Vastu-Based Interior Designer South Delhi",
    description:
      "Looking for a Vastu-based interior designer in South Delhi with price details? Vasterior delivers holistic, stylish & Vastu-aligned interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu-Based Interior Designer South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu-Based Interior Designer South Delhi",
    description:
      "Looking for a Vastu-based interior designer in South Delhi with price details? Vasterior delivers holistic, stylish & Vastu-aligned interiors.",
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
