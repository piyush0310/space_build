import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Civil + Interior Work Amroha | Vasterior Studios",
  description:
    "Civil + Interior Work Amroha – Vasterior Studios offers civil construction, remodeling & complete interior design services under one roof.",
  keywords:
    "civil and interior work amroha, home civil work amroha, civil contractor amroha",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/civil-+-interior-work-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/civil-+-interior-work-amroha",
    title: "Civil + Interior Work Amroha | Vasterior Studios",
    description:
      "Civil + Interior Work Amroha – Vasterior Studios offers civil construction, remodeling & complete interior design services under one roof.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Civil + Interior Work Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Civil + Interior Work Amroha | Vasterior Studios",
    description:
      "Civil + Interior Work Amroha – Vasterior Studios offers civil construction, remodeling & complete interior design services under one roof.",
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
