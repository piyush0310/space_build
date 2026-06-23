import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Designer Amroha Contact Number | Vasterior Studios",
  description:
    "Interior Designer Amroha Contact Number – Vasterior Studios offers expert interior design; call now for consultation, pricing & project guidance.",
  keywords:
    "interior designer amroha contact number, interior contact amroha, vasterior contact amroha",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/interior-designer-amroha-contact-number",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-designer-amroha-contact-number",
    title: "Interior Designer Amroha Contact Number | Vasterior Studios",
    description:
      "Interior Designer Amroha Contact Number – Vasterior Studios offers expert interior design; call now for consultation, pricing & project guidance.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Interior Designer Amroha Contact Number",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Designer Amroha Contact Number | Vasterior Studios",
    description:
      "Interior Designer Amroha Contact Number – Vasterior Studios offers expert interior design; call now for consultation, pricing & project guidance.",
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
