import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Minimalist Interior Designer South Delhi",
  description:
    "Minimalist Interior Designer South Delhi, with Price | Vasteior. Looking for a minimalist interior designer in South Delhi with price details? Vasterior provides clean, functional & Vastu-focused home interiors.",
  keywords:
    "minimalist interior designer south delhi, modern interior designer south delhi, contemporary interior designer south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/minimalist-interior-designer-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/minimalist-interior-designer-south-delhi",
    title: "Minimalist Interior Designer South Delhi",
    description:
      "Minimalist Interior Designer South Delhi, with Price | Vasteior. Looking for a minimalist interior designer in South Delhi with price details? Vasterior provides clean, functional & Vastu-focused home interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Minimalist Interior Designer South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Minimalist Interior Designer South Delhi",
    description:
      "Minimalist Interior Designer South Delhi, with Price | Vasteior. Looking for a minimalist interior designer in South Delhi with price details? Vasterior provides clean, functional & Vastu-focused home interiors.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function LuxuryModernInteriorsChandausi() {
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
