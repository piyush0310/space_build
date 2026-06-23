import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Showroom Interior Designer South Delhi",
  description:
    "Showroom Interior Designer South Delhi, with Price | Vasteior. Looking for a showroom interior designer in South Delhi with price details? Vasterior designs visually appealing & Vastu-compliant showroom interiors.",
  keywords:
    "showroom interior designer south delhi, retail interior designer south delhi, commercial interiors south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/showroom-interior-designer-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/showroom-interior-designer-south-delhi",
    title: "Showroom Interior Designer South Delhi",
    description:
      "Showroom Interior Designer South Delhi, with Price | Vasteior. Looking for a showroom interior designer in South Delhi with price details? Vasterior designs visually appealing & Vastu-compliant showroom interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Showroom Interior Designer South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Showroom Interior Designer South Delhi",
    description:
      "Showroom Interior Designer South Delhi, with Price | Vasteior. Looking for a showroom interior designer in South Delhi with price details? Vasterior designs visually appealing & Vastu-compliant showroom interiors.",
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
