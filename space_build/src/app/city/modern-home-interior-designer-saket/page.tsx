import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Modern Home Interior Designer Saket",
  description:
    "Modern Home Interior Designer Saket, with Price | Vasteior. Looking for a modern home interior designer in Saket with price details? Vasterior provides contemporary, functional & Vastu-aligned designs.",
  keywords:
    "modern home interior designer saket, home interior designer saket, residential interior designer saket",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/modern-home-interior-designer-saket",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/modern-home-interior-designer-saket",
    title: "Modern Home Interior Designer Saket",
    description:
      "Modern Home Interior Designer Saket, with Price | Vasteior. Looking for a modern home interior designer in Saket with price details? Vasterior provides contemporary, functional & Vastu-aligned designs.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Modern Home Interior Designer Saket",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Modern Home Interior Designer Saket",
    description:
      "Modern Home Interior Designer Saket, with Price | Vasteior. Looking for a modern home interior designer in Saket with price details? Vasterior provides contemporary, functional & Vastu-aligned designs.",
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
