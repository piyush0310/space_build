import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Modern Interior Designer Amroha | Vasterior Studios",
  description:
    "Modern Interior Designer Amroha – Vasterior Studios specializes in sleek, minimalist, and functional modern interior design for all spaces.",
  keywords:
    "modern interior designer amroha, modern interiors amroha, contemporary interiors amroha",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/modern-interior-designer-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/modern-interior-designer-amroha",
    title: "Modern Interior Designer Amroha | Vasterior Studios",
    description:
      "Modern Interior Designer Amroha – Vasterior Studios specializes in sleek, minimalist, and functional modern interior design for all spaces.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Modern Interior Designer Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Modern Interior Designer Amroha | Vasterior Studios",
    description:
      "Modern Interior Designer Amroha – Vasterior Studios specializes in sleek, minimalist, and functional modern interior design for all spaces.",
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
