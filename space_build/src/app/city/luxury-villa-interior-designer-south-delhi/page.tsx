import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Luxury Villa Interior Designer South Delhi",
  description:
    "Luxury Villa Interior Designer South Delhi, with Price | Vasteior. Looking for a luxury villa interior designer in South Delhi with price details? Vasterior specializes in elegant, high-end & Vastu-based villas.",
  keywords:
    "luxury villa interior designer south delhi, villa interior designer south delhi, high-end villa interiors south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/luxury-villa-interior-designer-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/luxury-villa-interior-designer-south-delhi",
    title: "Luxury Villa Interior Designer South Delhi",
    description:
      "Luxury Villa Interior Designer South Delhi, with Price | Vasteior. Looking for a luxury villa interior designer in South Delhi with price details? Vasterior specializes in elegant, high-end & Vastu-based villas.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Luxury Villa Interior Designer South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Luxury Villa Interior Designer South Delhi",
    description:
      "Luxury Villa Interior Designer South Delhi, with Price | Vasteior. Looking for a luxury villa interior designer in South Delhi with price details? Vasterior specializes in elegant, high-end & Vastu-based villas.",
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
