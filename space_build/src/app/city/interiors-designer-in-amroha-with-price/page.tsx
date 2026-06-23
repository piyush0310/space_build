import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Designers in Amroha With Price | Vasterior Studios",
  description:
    "Interior Designers in Amroha With Price – Vasterior Studios provides transparent interior pricing, custom packages & high-quality designs.",
  keywords:
    "interior designers in amroha with price, interior price amroha, budget interior packages amroha",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/interior-designers-in-amroha-with-price",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-designers-in-amroha-with-price",
    title: "Interior Designers in Amroha With Price | Vasterior Studios",
    description:
      "Interior Designers in Amroha With Price – Vasterior Studios provides transparent interior pricing, custom packages & high-quality designs.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Interior Designers in Amroha With Price",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Designers in Amroha With Price | Vasterior Studios",
    description:
      "Interior Designers in Amroha With Price – Vasterior Studios provides transparent interior pricing, custom packages & high-quality designs.",
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
