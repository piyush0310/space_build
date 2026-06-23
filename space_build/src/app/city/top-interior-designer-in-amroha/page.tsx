import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Top Interior Designer In Amroha | Vasterior Studios",
  description:
    "Top Interior Designer In Amroha – Vasterior Studios offers premium interiors, custom designs, and end-to-end execution for homes, villas & commercial spaces.",
  keywords:
    "top interior designer amroha, interior design experts amroha, vasterior studios",
  alternates: {
    canonical: "https://www.vasterior.com/city/top-interior-designer-in-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/top-interior-designer-in-amroha",
    title: "Top Interior Designer In Amroha | Vasterior Studios",
    description:
      "Top Interior Designer In Amroha – Vasterior Studios offers premium interiors, custom designs, and end-to-end execution for homes, villas & commercial spaces.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Top Interior Designer In Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Top Interior Designer In Amroha | Vasterior Studios",
    description:
      "Top Interior Designer In Amroha – Vasterior Studios offers premium interiors, custom designs, and end-to-end execution for homes, villas & commercial spaces.",
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
