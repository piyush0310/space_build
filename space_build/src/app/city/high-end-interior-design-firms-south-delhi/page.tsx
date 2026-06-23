import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "High-End Interior Design Firms South Delhi",
  description:
    "High-End Interior Design Firms South Delhi, with Price | Vasteior. Looking for high-end interior design firms in South Delhi with price details? Vasterior specializes in luxurious, Vastu-based interior solutions.",
  keywords:
    "high-end interior design firms south delhi, luxury interior design firm south delhi, premium interior design south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/high-end-interior-design-firms-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/high-end-interior-design-firms-south-delhi",
    title: "High-End Interior Design Firms South Delhi",
    description:
      "High-End Interior Design Firms South Delhi, with Price | Vasteior. Looking for high-end interior design firms in South Delhi with price details? Vasterior specializes in luxurious, Vastu-based interior solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "High-End Interior Design Firms South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "High-End Interior Design Firms South Delhi",
    description:
      "High-End Interior Design Firms South Delhi, with Price | Vasteior. Looking for high-end interior design firms in South Delhi with price details? Vasterior specializes in luxurious, Vastu-based interior solutions.",
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
