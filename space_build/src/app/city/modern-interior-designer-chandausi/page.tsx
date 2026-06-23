import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Modern Interior Designer Chandausi , UP | Vasterior",
  description:
    "Modern Interior Designer in Chandausi, UP | Vasterior offers sleek, functional interiors with contemporary aesthetics.",
  keywords:
    "modern interior designer chandausi, contemporary interior designer chandausi, stylish modern interiors chandausi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/modern-interior-designer-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/modern-interior-designer-chandausi",
    title: "Modern Interior Designer Chandausi, UP | Vasterior",
    description:
      "Modern Interior Designer in Chandausi, UP | Vasterior offers sleek, functional interiors with contemporary aesthetics.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Modern Interior Designer Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Modern Interior Designer Chandausi, UP | Vasterior",
    description:
      "Modern Interior Designer in Chandausi, UP | Vasterior offers sleek, functional interiors with contemporary aesthetics.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function ModernInteriorDesignerChandausi() {
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
