import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Modern Farmhouse Interiors Chandausi , UP | Vasterior",
  description:
    "Modern Farmhouse Interiors in Chandausi, UP | Vasterior blend natural elements with contemporary design and premium interiors.",
  keywords:
    "modern farmhouse interiors chandausi, farmhouse interior design chandausi, rustic modern interiors chandausi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/modern-farmhouse-interiors-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/modern-farmhouse-interiors-chandausi",
    title: "Modern Farmhouse Interiors Chandausi, UP | Vasterior",
    description:
      "Modern Farmhouse Interiors in Chandausi, UP | Vasterior blend natural elements with contemporary design and premium interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Modern Farmhouse Interiors Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Modern Farmhouse Interiors Chandausi, UP | Vasterior",
    description:
      "Modern Farmhouse Interiors in Chandausi, UP | Vasterior blend natural elements with contemporary design and premium interiors.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function ModernFarmhouseInteriorsChandausi() {
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
