import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Affordable Interior Designer Amroha | Vasterior Studios",
  description:
    "Affordable Interior Designer Amroha – Vasterior Studios provides stylish, budget-friendly home interiors with smart designs, durable materials & expert planning.",
  keywords:
    "affordable interior designer amroha, low budget interiors amroha, budget home design amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/affordable-interior-designer-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/affordable-interior-designer-amroha",
    title: "Affordable Interior Designer Amroha | Vasterior Studios",
    description:
      "Affordable Interior Designer Amroha – Vasterior Studios provides stylish, budget-friendly home interiors with smart designs, durable materials & expert planning.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Affordable Interior Designer Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Affordable Interior Designer Amroha | Vasterior Studios",
    description:
      "Affordable Interior Designer Amroha – Vasterior Studios provides stylish, budget-friendly home interiors with smart designs, durable materials & expert planning.",
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
