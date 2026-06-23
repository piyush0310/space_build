import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Luxury Interior Designer Jor Bagh",
  description:
    "Luxury Interior Designer Jor Bagh, with Price | Vasteior. Looking for a luxury interior designer in Jor Bagh with price details? Vasterior creates high-end, elegant & Vastu-aligned interiors.",
  keywords:
    "luxury interior designer jor bagh, high-end interior designer jor bagh, premium interior designer jor bagh",
  alternates: {
    canonical: "https://www.vasterior.com/city/luxury-interior-designer-jor-bagh",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/luxury-interior-designer-jor-bagh",
    title: "Luxury Interior Designer Jor Bagh",
    description:
      "Luxury Interior Designer Jor Bagh, with Price | Vasteior. Looking for a luxury interior designer in Jor Bagh with price details? Vasterior creates high-end, elegant & Vastu-aligned interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Luxury Interior Designer Jor Bagh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Luxury Interior Designer Jor Bagh",
    description:
      "Luxury Interior Designer Jor Bagh, with Price | Vasteior. Looking for a luxury interior designer in Jor Bagh with price details? Vasterior creates high-end, elegant & Vastu-aligned interiors.",
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
