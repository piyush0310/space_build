import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Luxury Apartment Interior Designer Hauz Khas",
  description:
    "Looking for a luxury apartment interior designer in Hauz Khas with price details? Vasterior creates premium, Vastu-aligned apartment interiors.",
  keywords:
    "luxury apartment interior designer hauz khas, premium apartment interiors hauz khas, high-end interior designer hauz khas",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/luxury-apartment-interior-designer-hauz-khas",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/luxury-apartment-interior-designer-hauz-khas",
    title: "Luxury Apartment Interior Designer Hauz Khas, with Price | Vasteior",
    description:
      "Looking for a luxury apartment interior designer in Hauz Khas with price details? Vasterior creates premium, Vastu-aligned apartment interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Luxury Apartment Interior Designer Hauz Khas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Luxury Apartment Interior Designer Hauz Khas",
    description:
      "Looking for a luxury apartment interior designer in Hauz Khas with price details? Vasterior creates premium, Vastu-aligned apartment interiors.",
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
