import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Home Renovation Contractor Amroha | Vasterior Studios",
  description:
    "Home Renovation Contractor Amroha – Vasterior Studios delivers expert home renovation, repair, redesign & premium interior upgrades.",
  keywords:
    "home renovation contractor amroha, home renovation amroha, home upgrade amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/home-renovation-contractor-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/home-renovation-contractor-amroha",
    title: "Home Renovation Contractor Amroha | Vasterior Studios",
    description:
      "Home Renovation Contractor Amroha – Vasterior Studios delivers expert home renovation, repair, redesign & premium interior upgrades.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Home Renovation Contractor Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Home Renovation Contractor Amroha | Vasterior Studios",
    description:
      "Home Renovation Contractor Amroha – Vasterior Studios delivers expert home renovation, repair, redesign & premium interior upgrades.",
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
