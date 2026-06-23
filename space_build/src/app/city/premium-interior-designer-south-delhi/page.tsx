import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Premium Interior Designer South Delhi",
  description:
    "Premium Interior Designer South Delhi, with Price | Vasteior. Looking for a premium interior designer in South Delhi with price details? Vasterior provides sophisticated, Vastu-compliant home & office interiors.",
  keywords:
    "premium interior designer south delhi, top interior designer south delhi, luxury interior designer south delhi",
  alternates: {
    canonical: "https://www.vasterior.com/city/premium-interior-designer-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/premium-interior-designer-south-delhi",
    title: "Premium Interior Designer South Delhi",
    description:
      "Premium Interior Designer South Delhi, with Price | Vasteior. Looking for a premium interior designer in South Delhi with price details? Vasterior provides sophisticated, Vastu-compliant home & office interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Premium Interior Designer South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Premium Interior Designer South Delhi",
    description:
      "Premium Interior Designer South Delhi, with Price | Vasteior. Looking for a premium interior designer in South Delhi with price details? Vasterior provides sophisticated, Vastu-compliant home & office interiors.",
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
