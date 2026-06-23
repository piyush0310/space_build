import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Designer in Defence Colony",
  description:
    "Interior Designer in Defence Colony, with Price | Vasteior. Looking for an interior designer in Defence Colony with price details? Vasterior creates modern, stylish & Vastu-based interiors.",
  keywords:
    "interior designer in defence colony, luxury interior designer defence colony, residential interior designer defence colony",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/interior-designer-in-defence-colony",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-designer-in-defence-colony",
    title: "Interior Designer in Defence Colony",
    description:
      "Interior Designer in Defence Colony, with Price | Vasteior. Looking for an interior designer in Defence Colony with price details? Vasterior creates modern, stylish & Vastu-based interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Interior Designer in Defence Colony",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Designer in Defence Colony",
    description:
      "Interior Designer in Defence Colony, with Price | Vasteior. Looking for an interior designer in Defence Colony with price details? Vasterior creates modern, stylish & Vastu-based interiors.",
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
