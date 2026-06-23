import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Luxury Interior Designer Greater Kailash",
  description:
    "Luxury Interior Designer Greater Kailash, with Price | Vasteior. Looking for a luxury interior designer in Greater Kailash with price details? Vasterior creates high-end, elegant & Vastu-focused interiors.",
  keywords:
    "luxury interior designer greater kailash, premium home interiors gk, high-end interior designer gk",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/luxury-interior-designer-greater-kailash",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/luxury-interior-designer-greater-kailash",
    title: "Luxury Interior Designer Greater Kailash",
    description:
      "Luxury Interior Designer Greater Kailash, with Price | Vasteior. Looking for a luxury interior designer in Greater Kailash with price details? Vasterior creates high-end, elegant & Vastu-focused interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Luxury Interior Designer Greater Kailash",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Luxury Interior Designer Greater Kailash",
    description:
      "Luxury Interior Designer Greater Kailash, with Price | Vasteior. Looking for a luxury interior designer in Greater Kailash with price details? Vasterior creates high-end, elegant & Vastu-focused interiors.",
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
