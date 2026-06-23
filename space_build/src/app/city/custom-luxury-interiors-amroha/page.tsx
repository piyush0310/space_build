import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Custom Luxury Interiors Amroha | Vasterior Studios",
  description:
    "Custom Luxury Interiors Amroha – Vasterior Studios delivers personalized high-end interiors crafted to match your taste, lifestyle & comfort.",
  keywords:
    "custom luxury interiors amroha, premium custom interiors amroha, designer homes amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/custom-luxury-interiors-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/custom-luxury-interiors-amroha",
    title: "Custom Luxury Interiors Amroha | Vasterior Studios",
    description:
      "Custom Luxury Interiors Amroha – Vasterior Studios delivers personalized high-end interiors crafted to match your taste, lifestyle & comfort.",
    images: [
      {
        url: "https://res.cloudinary.com/df1v3yied/image/upload/v1756528800/vasteriorlogo_fpcrfw.png",
        width: 1200,
        height: 630,
        alt: "Custom Luxury Interiors Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Custom Luxury Interiors Amroha | Vasterior Studios",
    description:
      "Custom Luxury Interiors Amroha – Vasterior Studios delivers personalized high-end interiors crafted to match your taste, lifestyle & comfort.",
    images: [
      "https://res.cloudinary.com/df1v3yied/image/upload/v1756528800/vasteriorlogo_fpcrfw.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function HighEndInteriorDesignerMoradabad() {
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
