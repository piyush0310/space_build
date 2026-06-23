import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Best Interior Designer Amroha | Vasterior Studios",
  description:
    "Best Interior Designer Amroha – Vasterior Studios delivers high-quality, luxury, and budget-friendly interior design for homes, villas & offices in Amroha. Transform your space with expert designers.",
  keywords:
    "best interior designer amroha, top interior designers amroha, vasterior studios amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/best-interior-designer-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/best-interior-designer-amroha",
    title: "Best Interior Designer Amroha | Vasterior Studios",
    description:
      "Best Interior Designer Amroha – Vasterior Studios delivers high-quality, luxury, and budget-friendly interior design for homes, villas & offices in Amroha. Transform your space with expert designers.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Best Interior Designer Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Best Interior Designer Amroha | Vasterior Studios",
    description:
      "Best Interior Designer Amroha – Vasterior Studios delivers high-quality, luxury, and budget-friendly interior design for homes, villas & offices in Amroha. Transform your space with expert designers.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function AffordableInteriorDesignerFor3BhkInMoradabad() {
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
