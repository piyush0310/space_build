import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Premium Villa Interior Design Amroha | Vasterior Studios",
  description:
    "Premium Villa Interior Design Amroha – Vasterior Studios delivers exclusive villa interiors with high-end materials, elegant themes & curated design.",
  keywords:
    "premium villa interior design amroha, high end villa design amroha, luxury home interiors amroha",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/premium-villa-interior-design-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/premium-villa-interior-design-amroha",
    title: "Premium Villa Interior Design Amroha | Vasterior Studios",
    description:
      "Premium Villa Interior Design Amroha – Vasterior Studios delivers exclusive villa interiors with high-end materials, elegant themes & curated design.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Premium Villa Interior Design Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Premium Villa Interior Design Amroha | Vasterior Studios",
    description:
      "Premium Villa Interior Design Amroha – Vasterior Studios delivers exclusive villa interiors with high-end materials, elegant themes & curated design.",
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
