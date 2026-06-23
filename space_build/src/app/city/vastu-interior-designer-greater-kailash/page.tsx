import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Interior Designer Greater Kailash",
  description:
    "Vastu Interior Designer Greater Kailash, with Price | Vasteior. Looking for a Vastu interior designer in Greater Kailash with price details? Vasterior creates harmonious, premium & Vastu-focused interiors.",
  keywords:
    "vastu interior designer greater kailash, vastu home interiors greater kailash, vastu-based interior designer greater kailash",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-interior-designer-greater-kailash",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-interior-designer-greater-kailash",
    title: "Vastu Interior Designer Greater Kailash",
    description:
      "Vastu Interior Designer Greater Kailash, with Price | Vasteior. Looking for a Vastu interior designer in Greater Kailash with price details? Vasterior creates harmonious, premium & Vastu-focused interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu Interior Designer Greater Kailash",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Interior Designer Greater Kailash",
    description:
      "Vastu Interior Designer Greater Kailash, with Price | Vasteior. Looking for a Vastu interior designer in Greater Kailash with price details? Vasterior creates harmonious, premium & Vastu-focused interiors.",
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
