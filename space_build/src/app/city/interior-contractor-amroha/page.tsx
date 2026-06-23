import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Contractor Amroha | Vasterior Studios",
  description:
    "Interior Contractor Amroha – Vasterior Studios provides complete interior contracting, civil work, renovation & premium finishing.",
  keywords:
    "interior contractor amroha, interior civil work amroha, interior construction amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/interior-contractor-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-contractor-amroha",
    title: "Interior Contractor Amroha | Vasterior Studios",
    description:
      "Interior Contractor Amroha – Vasterior Studios provides complete interior contracting, civil work, renovation & premium finishing.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Interior Contractor Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Contractor Amroha | Vasterior Studios",
    description:
      "Interior Contractor Amroha – Vasterior Studios provides complete interior contracting, civil work, renovation & premium finishing.",
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
