import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Living Room Interior Designer South Delhi",
  description:
    "Living Room Interior Designer South Delhi, with Price | Vasteior. Looking for a living room interior designer in South Delhi with price details? Vasterior creates modern, functional & Vastu-based living spaces.",
  keywords:
    "living room interior designer south delhi, home interior designer south delhi, modern living room interiors south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/living-room-interior-designer-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/living-room-interior-designer-south-delhi",
    title: "Living Room Interior Designer South Delhi",
    description:
      "Living Room Interior Designer South Delhi, with Price | Vasteior. Looking for a living room interior designer in South Delhi with price details? Vasterior creates modern, functional & Vastu-based living spaces.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Living Room Interior Designer South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Living Room Interior Designer South Delhi",
    description:
      "Living Room Interior Designer South Delhi, with Price | Vasteior. Looking for a living room interior designer in South Delhi with price details? Vasterior creates modern, functional & Vastu-based living spaces.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function InteriorDesignServicesChandausi() {
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
