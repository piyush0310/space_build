import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Modern Farmhouse Interiors South Delhi",
  description:
    "Modern Farmhouse Interiors South Delhi, with Price | Vasteior. Looking for modern farmhouse interiors in South Delhi with price details? Vasterior offers contemporary, functional & Vastu-based farmhouse designs.",
  keywords:
    "modern farmhouse interiors south delhi, farmhouse interior designer south delhi, luxury farmhouse interiors south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/modern-farmhouse-interiors-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/modern-farmhouse-interiors-south-delhi",
    title: "Modern Farmhouse Interiors South Delhi",
    description:
      "Modern Farmhouse Interiors South Delhi, with Price | Vasteior. Looking for modern farmhouse interiors in South Delhi with price details? Vasterior offers contemporary, functional & Vastu-based farmhouse designs.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Modern Farmhouse Interiors South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Modern Farmhouse Interiors South Delhi",
    description:
      "Modern Farmhouse Interiors South Delhi, with Price | Vasteior. Looking for modern farmhouse interiors in South Delhi with price details? Vasterior offers contemporary, functional & Vastu-based farmhouse designs.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function LuxuryModernInteriorsChandausi() {
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
