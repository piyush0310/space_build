import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Retail Store Interior Designer South Delhi",
  description:
    "Retail Store Interior Designer South Delhi, with Price | Vasteior. Looking for a retail store interior designer in South Delhi with price details? Vasterior delivers creative, customer-friendly & Vastu-aligned interiors.",
  keywords:
    "retail store interior designer south delhi, showroom interior designer south delhi, commercial interior designer south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/retail-store-interior-designer-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/retail-store-interior-designer-south-delhi",
    title: "Retail Store Interior Designer South Delhi",
    description:
      "Retail Store Interior Designer South Delhi, with Price | Vasteior. Looking for a retail store interior designer in South Delhi with price details? Vasterior delivers creative, customer-friendly & Vastu-aligned interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Retail Store Interior Designer South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Retail Store Interior Designer South Delhi",
    description:
      "Retail Store Interior Designer South Delhi, with Price | Vasteior. Looking for a retail store interior designer in South Delhi with price details? Vasterior delivers creative, customer-friendly & Vastu-aligned interiors.",
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
