import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Interior Designer in South Delhi",
  description:
    "Vastu Interior Designer in South Delhi, with Price | Vasteior. Looking for a Vastu interior designer in South Delhi with price details? Vasterior specializes in Vastu-compliant, elegant & functional interiors.",
  keywords:
    "vastu interior designer south delhi, vastu home interiors south delhi, vastu-based interior designer south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-interior-designer-in-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-interior-designer-in-south-delhi",
    title: "Vastu Interior Designer in South Delhi",
    description:
      "Vastu Interior Designer in South Delhi, with Price | Vasteior. Looking for a Vastu interior designer in South Delhi with price details? Vasterior specializes in Vastu-compliant, elegant & functional interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu Interior Designer in South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Interior Designer in South Delhi",
    description:
      "Vastu Interior Designer in South Delhi, with Price | Vasteior. Looking for a Vastu interior designer in South Delhi with price details? Vasterior specializes in Vastu-compliant, elegant & functional interiors.",
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
