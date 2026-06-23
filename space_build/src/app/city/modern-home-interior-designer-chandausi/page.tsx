import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Modern Home Interior Designer Chandausi , UP | Vasterior",
  description:
    "Modern Home Interior Designer in Chandausi, UP | Vasterior designs contemporary, functional interiors with premium finishes and smart layouts.",
  keywords:
    "modern home interior designer chandausi, contemporary home interiors chandausi, stylish interior design chandausi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/modern-home-interior-designer-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/modern-home-interior-designer-chandausi",
    title: "Modern Home Interior Designer Chandausi, UP | Vasterior",
    description:
      "Modern Home Interior Designer in Chandausi, UP | Vasterior designs contemporary, functional interiors with premium finishes and smart layouts.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Modern Home Interior Designer Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Modern Home Interior Designer Chandausi, UP | Vasterior",
    description:
      "Modern Home Interior Designer in Chandausi, UP | Vasterior designs contemporary, functional interiors with premium finishes and smart layouts.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function ModernHomeInteriorDesignerChandausi() {
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
