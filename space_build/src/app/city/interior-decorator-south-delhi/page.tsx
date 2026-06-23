import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Decorator South Delhi",
  description:
    "Interior Decorator South Delhi, with Price | Vasteior. Looking for an interior decorator in South Delhi with price details? Vasterior creates stylish, functional & Vastu-aligned décor solutions.",
  keywords:
    "interior decorator south delhi, home interior designer south delhi, residential interior designer south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/interior-decorator-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-decorator-south-delhi",
    title: "Interior Decorator South Delhi",
    description:
      "Interior Decorator South Delhi, with Price | Vasteior. Looking for an interior decorator in South Delhi with price details? Vasterior creates stylish, functional & Vastu-aligned décor solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Interior Decorator South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Decorator South Delhi",
    description:
      "Interior Decorator South Delhi, with Price | Vasteior. Looking for an interior decorator in South Delhi with price details? Vasterior creates stylish, functional & Vastu-aligned décor solutions.",
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
