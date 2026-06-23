import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "False Ceiling Designer South Delhi",
  description:
    "False Ceiling Designer South Delhi, with Price | Vasteior. Looking for a false ceiling designer in South Delhi with price details? Vasterior delivers creative, elegant & Vastu-aligned ceiling designs.",
  keywords:
    "false ceiling designer south delhi, interior decorator south delhi, home interiors south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/false-ceiling-designer-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/false-ceiling-designer-south-delhi",
    title: "False Ceiling Designer South Delhi",
    description:
      "False Ceiling Designer South Delhi, with Price | Vasteior. Looking for a false ceiling designer in South Delhi with price details? Vasterior delivers creative, elegant & Vastu-aligned ceiling designs.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "False Ceiling Designer South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "False Ceiling Designer South Delhi",
    description:
      "False Ceiling Designer South Delhi, with Price | Vasteior. Looking for a false ceiling designer in South Delhi with price details? Vasterior delivers creative, elegant & Vastu-aligned ceiling designs.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function InteriorDesignerNearMeMoradabadDistrict() {
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
