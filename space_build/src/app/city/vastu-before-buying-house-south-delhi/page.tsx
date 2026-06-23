import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Before Buying House South Delhi ",
  description:
    "Looking for Vastu before buying a house in South Delhi? Vasterior offers expert guidance for safe investment.",
  keywords:
    "vastu before buying house, property vastu check, vastu consultation",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-before-buying-house-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-before-buying-house-south-delhi",
    title: "Vastu Before Buying House South Delhi ",
    description:
      "Looking for Vastu before buying a house in South Delhi? Vasterior offers expert guidance for safe investment.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu Before Buying House South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Before Buying House South Delhi",
    description:
      "Looking for Vastu before buying a house in South Delhi? Vasterior offers expert guidance for safe investment.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function InteriorDesignerNearMeMoradabadDistrict() {
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
