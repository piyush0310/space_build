import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Bathroom Interior Remodeling South Delhi",
  description:
    "Bathroom Interior Remodeling South Delhi, with Price | Vasteior. Looking for bathroom interior remodeling in South Delhi with price details? Vasterior provides modern, functional & Vastu-based bathroom interiors.",
  keywords:
    "bathroom interior remodeling south delhi, bathroom interior designer south delhi, home interior designer south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/bathroom-interior-remodeling-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/bathroom-interior-remodeling-south-delhi",
    title: "Bathroom Interior Remodeling South Delhi",
    description:
      "Bathroom Interior Remodeling South Delhi, with Price | Vasteior. Looking for bathroom interior remodeling in South Delhi with price details? Vasterior provides modern, functional & Vastu-based bathroom interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Bathroom Interior Remodeling South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Bathroom Interior Remodeling South Delhi",
    description:
      "Bathroom Interior Remodeling South Delhi, with Price | Vasteior. Looking for bathroom interior remodeling in South Delhi with price details? Vasterior provides modern, functional & Vastu-based bathroom interiors.",
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
