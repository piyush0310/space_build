import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Design Services Amroha | Vasterior Studios",
  description:
    "Interior Design Services Amroha – Vasterior Studios offers full interior design services including planning, décor, modular solutions & execution.",
  keywords:
    "interior design services amroha, interior services amroha, complete interior solutions amroha",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/interior-design-services-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-design-services-amroha",
    title: "Interior Design Services Amroha | Vasterior Studios",
    description:
      "Interior Design Services Amroha – Vasterior Studios offers full interior design services including planning, décor, modular solutions & execution.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Interior Design Services Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Design Services Amroha | Vasterior Studios",
    description:
      "Interior Design Services Amroha – Vasterior Studios offers full interior design services including planning, décor, modular solutions & execution.",
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
