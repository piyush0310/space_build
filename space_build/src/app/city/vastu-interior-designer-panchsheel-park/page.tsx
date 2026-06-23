import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Interior Designer Panchsheel Park",
  description:
    "Vastu Interior Designer Panchsheel Park, with Price | Vasteior. Looking for a Vastu interior designer in Panchsheel Park with price details? Vasterior creates stylish, functional & Vastu-based interiors.",
  keywords:
    "vastu interior designer panchsheel park, high-end interior designer with vastu panchsheel park, luxury home interiors panchsheel park",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-interior-designer-panchsheel-park",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-interior-designer-panchsheel-park",
    title: "Vastu Interior Designer Panchsheel Park",
    description:
      "Vastu Interior Designer Panchsheel Park, with Price | Vasteior. Looking for a Vastu interior designer in Panchsheel Park with price details? Vasterior creates stylish, functional & Vastu-based interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu Interior Designer Panchsheel Park",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Interior Designer Panchsheel Park",
    description:
      "Vastu Interior Designer Panchsheel Park, with Price | Vasteior. Looking for a Vastu interior designer in Panchsheel Park with price details? Vasterior creates stylish, functional & Vastu-based interiors.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuInteriorDesignerPanchsheelPark() {
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
