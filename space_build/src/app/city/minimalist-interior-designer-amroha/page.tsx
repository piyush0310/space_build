import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Minimalist Interior Designer Amroha | Vasterior Studios",
  description:
    "Minimalist Interior Designer Amroha – Vasterior Studios designs clutter-free, functional, and elegant minimalist home & office spaces.",
  keywords:
    "minimalist interior designer amroha, minimalist interiors amroha, simple interior design amroha",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/minimalist-interior-designer-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/minimalist-interior-designer-amroha",
    title: "Minimalist Interior Designer Amroha | Vasterior Studios",
    description:
      "Minimalist Interior Designer Amroha – Vasterior Studios designs clutter-free, functional, and elegant minimalist home & office spaces.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Minimalist Interior Designer Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Minimalist Interior Designer Amroha | Vasterior Studios",
    description:
      "Minimalist Interior Designer Amroha – Vasterior Studios designs clutter-free, functional, and elegant minimalist home & office spaces.",
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
