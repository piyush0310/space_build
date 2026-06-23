import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Luxury Modern Interiors Chandausi, UP | Vasterior",
  description:
    "Luxury Modern Interiors in Chandausi, UP | Vasterior blend elegance and functionality with premium designs and turnkey execution.",
  keywords:
    "luxury modern interiors chandausi, modern luxury interior designer chandausi, premium modern interiors chandausi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/luxury-modern-interiors-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/luxury-modern-interiors-chandausi",
    title: "Luxury Modern Interiors Chandausi, UP | Vasterior",
    description:
      "Luxury Modern Interiors in Chandausi, UP | Vasterior blend elegance and functionality with premium designs and turnkey execution.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Luxury Modern Interiors Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Luxury Modern Interiors Chandausi, UP | Vasterior",
    description:
      "Luxury Modern Interiors in Chandausi, UP | Vasterior blend elegance and functionality with premium designs and turnkey execution.",
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
