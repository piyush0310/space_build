import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Modular Kitchen Designer Amroha | Vasterior Studios",
  description:
    "Modular Kitchen Designer Amroha – Vasterior Studios creates modern, space-saving, and durable modular kitchens tailored to your home.",
  keywords:
    "modular kitchen designer amroha, modular kitchen amroha, kitchen design amroha",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/modular-kitchen-designer-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/modular-kitchen-designer-amroha",
    title: "Modular Kitchen Designer Amroha | Vasterior Studios",
    description:
      "Modular Kitchen Designer Amroha – Vasterior Studios creates modern, space-saving, and durable modular kitchens tailored to your home.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Designer Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Modular Kitchen Designer Amroha | Vasterior Studios",
    description:
      "Modular Kitchen Designer Amroha – Vasterior Studios creates modern, space-saving, and durable modular kitchens tailored to your home.",
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
