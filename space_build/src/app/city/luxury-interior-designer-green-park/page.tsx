import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Luxury Interior Designer Green Park",
  description:
    "Luxury Interior Designer Green Park, with Price | Vasteior. Looking for a luxury interior designer in Green Park with price details? Vasterior creates premium, elegant & Vastu-based interiors.",
  keywords:
    "luxury interior designer green park, premium home interiors green park, high-end interior designer green park",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/luxury-interior-designer-green-park",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/luxury-interior-designer-green-park",
    title: "Luxury Interior Designer Green Park",
    description:
      "Luxury Interior Designer Green Park, with Price | Vasteior. Looking for a luxury interior designer in Green Park with price details? Vasterior creates premium, elegant & Vastu-based interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Luxury Interior Designer Green Park",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Luxury Interior Designer Green Park",
    description:
      "Luxury Interior Designer Green Park, with Price | Vasteior. Looking for a luxury interior designer in Green Park with price details? Vasterior creates premium, elegant & Vastu-based interiors.",
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
