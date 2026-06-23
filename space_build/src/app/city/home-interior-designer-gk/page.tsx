import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Home Interior Designer GK",
  description:
    "Home Interior Designer GK, with Price | Vasteior. Looking for a home interior designer in GK with price details? Vasterior provides functional, premium & Vastu-aligned home designs.",
  keywords:
    "home interior designer gk, interior designer greater kailash, modern home interiors gk",
  alternates: {
    canonical: "https://www.vasterior.com/city/home-interior-designer-gk",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/home-interior-designer-gk",
    title: "Home Interior Designer GK",
    description:
      "Home Interior Designer GK, with Price | Vasteior. Looking for a home interior designer in GK with price details? Vasterior provides functional, premium & Vastu-aligned home designs.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Home Interior Designer GK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Home Interior Designer GK",
    description:
      "Home Interior Designer GK, with Price | Vasteior. Looking for a home interior designer in GK with price details? Vasterior provides functional, premium & Vastu-aligned home designs.",
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
