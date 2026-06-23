import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Modular Kitchen Designer South Delhi",
  description:
    "Modular Kitchen Designer South Delhi, with Price | Vasteior. Looking for a modular kitchen designer in South Delhi with price details? Vasterior creates functional, stylish & Vastu-compliant kitchens.",
  keywords:
    "modular kitchen designer south delhi, kitchen interior designer south delhi, modern kitchen interiors south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/modular-kitchen-designer-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/modular-kitchen-designer-south-delhi",
    title: "Modular Kitchen Designer South Delhi",
    description:
      "Modular Kitchen Designer South Delhi, with Price | Vasteior. Looking for a modular kitchen designer in South Delhi with price details? Vasterior creates functional, stylish & Vastu-compliant kitchens.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Designer South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Modular Kitchen Designer South Delhi",
    description:
      "Modular Kitchen Designer South Delhi, with Price | Vasteior. Looking for a modular kitchen designer in South Delhi with price details? Vasterior creates functional, stylish & Vastu-compliant kitchens.",
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
