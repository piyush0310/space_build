import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Custom Luxury Interiors South Delhi",
  description:
    "Custom Luxury Interiors South Delhi, with Price | Vasteior. Looking for custom luxury interiors in South Delhi with price details? Vasterior crafts unique, premium & Vastu-focused interiors.",
  keywords:
    "custom luxury interiors south delhi, luxury home interiors south delhi, high-end interior designer south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/custom-luxury-interiors-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/custom-luxury-interiors-south-delhi",
    title: "Custom Luxury Interiors South Delhi",
    description:
      "Custom Luxury Interiors South Delhi, with Price | Vasteior. Looking for custom luxury interiors in South Delhi with price details? Vasterior crafts unique, premium & Vastu-focused interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Custom Luxury Interiors South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Custom Luxury Interiors South Delhi",
    description:
      "Custom Luxury Interiors South Delhi, with Price | Vasteior. Looking for custom luxury interiors in South Delhi with price details? Vasterior crafts unique, premium & Vastu-focused interiors.",
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
