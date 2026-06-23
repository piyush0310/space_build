import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Farmhouse Interior Designer South Delhi",
  description:
    "Farmhouse Interior Designer South Delhi, with Price | Vasteior. Looking for a farmhouse interior designer in South Delhi with price details? Vasterior delivers stylish, rustic & Vastu-aligned farmhouse interiors.",
  keywords:
    "farmhouse interior designer south delhi, modern farmhouse interiors south delhi, luxury home interiors south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/farmhouse-interior-designer-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/farmhouse-interior-designer-south-delhi",
    title: "Farmhouse Interior Designer South Delhi",
    description:
      "Farmhouse Interior Designer South Delhi, with Price | Vasteior. Looking for a farmhouse interior designer in South Delhi with price details? Vasterior delivers stylish, rustic & Vastu-aligned farmhouse interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Farmhouse Interior Designer South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Farmhouse Interior Designer South Delhi",
    description:
      "Farmhouse Interior Designer South Delhi, with Price | Vasteior. Looking for a farmhouse interior designer in South Delhi with price details? Vasterior delivers stylish, rustic & Vastu-aligned farmhouse interiors.",
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
