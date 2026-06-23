import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Best Interior Company South Delhi",
  description:
    "Best Interior Company South Delhi, with Price | Vasteior. Looking for the best interior company in South Delhi with price details? Vasterior delivers high-quality, modern & Vastu-aligned interiors.",
  keywords:
    "best interior company south delhi, top interior company south delhi, premium interior company south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/best-interior-company-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/best-interior-company-south-delhi",
    title: "Best Interior Company South Delhi",
    description:
      "Best Interior Company South Delhi, with Price | Vasteior. Looking for the best interior company in South Delhi with price details? Vasterior delivers high-quality, modern & Vastu-aligned interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Best Interior Company South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Best Interior Company South Delhi",
    description:
      "Best Interior Company South Delhi, with Price | Vasteior. Looking for the best interior company in South Delhi with price details? Vasterior delivers high-quality, modern & Vastu-aligned interiors.",
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
