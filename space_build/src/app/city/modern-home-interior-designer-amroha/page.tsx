import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Modern Home Interior Designer Amroha | Vasterior Studios",
  description:
    "Modern Home Interior Designer Amroha – Vasterior Studios creates sleek, functional, and aesthetic modern interiors for homes & villas.",
  keywords:
    "modern home interior designer amroha, modern interiors amroha, contemporary design amroha",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/modern-home-interior-designer-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/modern-home-interior-designer-amroha",
    title: "Modern Home Interior Designer Amroha | Vasterior Studios",
    description:
      "Modern Home Interior Designer Amroha – Vasterior Studios creates sleek, functional, and aesthetic modern interiors for homes & villas.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Modern Home Interior Designer Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Modern Home Interior Designer Amroha | Vasterior Studios",
    description:
      "Modern Home Interior Designer Amroha – Vasterior Studios creates sleek, functional, and aesthetic modern interiors for homes & villas.",
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
