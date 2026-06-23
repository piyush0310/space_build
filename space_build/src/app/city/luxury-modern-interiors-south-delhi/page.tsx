import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Luxury Modern Interiors South Delhi",
  description:
    "Luxury Modern Interiors South Delhi, with Price | Vasteior. Looking for luxury modern interiors in South Delhi with price details? Vasterior combines style, comfort & Vastu principles perfectly.",
  keywords:
    "luxury modern interiors south delhi, modern luxury interiors south delhi, premium interior designer south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/luxury-modern-interiors-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/luxury-modern-interiors-south-delhi",
    title: "Luxury Modern Interiors South Delhi",
    description:
      "Luxury Modern Interiors South Delhi, with Price | Vasteior. Looking for luxury modern interiors in South Delhi with price details? Vasterior combines style, comfort & Vastu principles perfectly.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Luxury Modern Interiors South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Luxury Modern Interiors South Delhi",
    description:
      "Luxury Modern Interiors South Delhi, with Price | Vasteior. Looking for luxury modern interiors in South Delhi with price details? Vasterior combines style, comfort & Vastu principles perfectly.",
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
