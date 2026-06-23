import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Affordable Vastu Interior Designer Malviya Nagar",
  description:
    "Affordable Vastu Interior Designer Malviya Nagar, with Price | Vasteior. Looking for an affordable Vastu interior designer in Malviya Nagar with price details? Vasterior delivers stylish, budget-friendly & Vastu-compliant interiors.",
  keywords:
    "affordable vastu interior designer malviya nagar, vastu interior consultant malviya nagar, residential interior designer malviya nagar",
  alternates: {
    canonical: "https://www.vasterior.com/city/affordable-vastu-interior-designer-malviya-nagar",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/affordable-vastu-interior-designer-malviya-nagar",
    title: "Affordable Vastu Interior Designer Malviya Nagar",
    description:
      "Affordable Vastu Interior Designer Malviya Nagar, with Price | Vasteior. Looking for an affordable Vastu interior designer in Malviya Nagar with price details? Vasterior delivers stylish, budget-friendly & Vastu-compliant interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Affordable Vastu Interior Designer Malviya Nagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Affordable Vastu Interior Designer Malviya Nagar",
    description:
      "Affordable Vastu Interior Designer Malviya Nagar, with Price | Vasteior. Looking for an affordable Vastu interior designer in Malviya Nagar with price details? Vasterior delivers stylish, budget-friendly & Vastu-compliant interiors.",
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
