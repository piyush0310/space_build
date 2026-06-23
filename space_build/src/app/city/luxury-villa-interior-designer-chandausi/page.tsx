import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Luxury Villa Interior Designer Chandausi , UP | Vasterior",
  description:
    "Luxury Villa Interior Designer in Chandausi, UP | Vasterior specializes in premium villa interiors with custom layouts and high-end finishes.",
  keywords:
    "luxury villa interior designer chandausi, high end villa interiors chandausi, custom villa design chandausi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/luxury-villa-interior-designer-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/luxury-villa-interior-designer-chandausi",
    title: "Luxury Villa Interior Designer Chandausi, UP | Vasterior",
    description:
      "Luxury Villa Interior Designer in Chandausi, UP | Vasterior specializes in premium villa interiors with custom layouts and high-end finishes.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Luxury Villa Interior Designer Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Luxury Villa Interior Designer Chandausi, UP | Vasterior",
    description:
      "Luxury Villa Interior Designer in Chandausi, UP | Vasterior specializes in premium villa interiors with custom layouts and high-end finishes.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function LuxuryVillaInteriorDesignerChandausi() {
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
