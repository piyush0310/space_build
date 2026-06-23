import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Decorator Amroha | Vasterior Studios",
  description:
    "Interior Decorator Amroha – Vasterior Studios offers décor styling, furniture selection, color themes & complete home decoration services.",
  keywords:
    "interior decorator amroha, home decorator amroha, interior styling amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/interior-decorator-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-decorator-amroha",
    title: "Interior Decorator Amroha | Vasterior Studios",
    description:
      "Interior Decorator Amroha – Vasterior Studios offers décor styling, furniture selection, color themes & complete home decoration services.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Interior Decorator Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Decorator Amroha | Vasterior Studios",
    description:
      "Interior Decorator Amroha – Vasterior Studios offers décor styling, furniture selection, color themes & complete home decoration services.",
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
