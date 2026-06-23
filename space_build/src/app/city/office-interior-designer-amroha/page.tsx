import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Office Interior Designer Amroha | Vasterior Studios",
  description:
    "Office Interior Designer Amroha – Vasterior Studios provides smart office designs with ergonomic layouts, modern furniture & premium finishing.",
  keywords:
    "office interior designer amroha, office design amroha, workspace interiors amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/office-interior-designer-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/office-interior-designer-amroha",
    title: "Office Interior Designer Amroha | Vasterior Studios",
    description:
      "Office Interior Designer Amroha – Vasterior Studios provides smart office designs with ergonomic layouts, modern furniture & premium finishing.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Office Interior Designer Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Office Interior Designer Amroha | Vasterior Studios",
    description:
      "Office Interior Designer Amroha – Vasterior Studios provides smart office designs with ergonomic layouts, modern furniture & premium finishing.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image_upload/v1763232541/p20_bxpldi_fx0zhz.png",
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
