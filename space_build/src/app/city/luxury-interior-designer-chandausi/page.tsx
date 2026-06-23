import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Luxury Interior Designer Chandausi, UP | Vasterior",
  description:
    "Luxury Interior Designer in Chandausi, UP | Vasterior specializes in high-end interiors, custom luxury designs, and premium turnkey services.",
  keywords:
    "luxury interior designer chandausi, luxury home interiors chandausi, high end interior design chandausi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/luxury-interior-designer-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/luxury-interior-designer-chandausi",
    title: "Luxury Interior Designer Chandausi, UP | Vasterior",
    description:
      "Luxury Interior Designer in Chandausi, UP | Vasterior specializes in high-end interiors, custom luxury designs, and premium turnkey services.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Luxury Interior Designer Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Luxury Interior Designer Chandausi, UP | Vasterior",
    description:
      "Luxury Interior Designer in Chandausi, UP | Vasterior specializes in high-end interiors, custom luxury designs, and premium turnkey services.",
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
