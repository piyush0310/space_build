import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Luxury Modern Interiors Amroha | Vasterior Studios",
  description:
    "Luxury Modern Interiors Amroha – Vasterior Studios delivers upscale modern interiors with premium materials and sophisticated designs.",
  keywords:
    "luxury modern interiors amroha, modern luxury design amroha, premium modern interiors amroha",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/luxury-modern-interiors-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/luxury-modern-interiors-amroha",
    title: "Luxury Modern Interiors Amroha | Vasterior Studios",
    description:
      "Luxury Modern Interiors Amroha – Vasterior Studios delivers upscale modern interiors with premium materials and sophisticated designs.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Luxury Modern Interiors Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Luxury Modern Interiors Amroha | Vasterior Studios",
    description:
      "Luxury Modern Interiors Amroha – Vasterior Studios delivers upscale modern interiors with premium materials and sophisticated designs.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function AffordableInteriorDesignerFor3BhkInMoradabad() {
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
