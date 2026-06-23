import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Luxury Interior Designer with Vastu Defence Colony",
  description:
    "Luxury Interior Designer with Vastu Defence Colony, Price | Vasteior. Looking for a luxury interior designer with Vastu in Defence Colony with price details? Vasterior delivers high-end, harmonious & Vastu-based interiors.",
  keywords:
    "luxury interior designer with vastu defence colony, vastu interior designer defence colony, premium interiors defence colony",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/luxury-interior-designer-with-vastu-defence-colony",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/luxury-interior-designer-with-vastu-defence-colony",
    title: "Luxury Interior Designer with Vastu Defence Colony",
    description:
      "Luxury Interior Designer with Vastu Defence Colony, Price | Vasteior. Looking for a luxury interior designer with Vastu in Defence Colony with price details? Vasterior delivers high-end, harmonious & Vastu-based interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Luxury Interior Designer with Vastu Defence Colony",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Luxury Interior Designer with Vastu Defence Colony",
    description:
      "Luxury Interior Designer with Vastu Defence Colony, Price | Vasteior. Looking for a luxury interior designer with Vastu in Defence Colony with price details? Vasterior delivers high-end, harmonious & Vastu-based interiors.",
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
