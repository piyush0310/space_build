import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "High-End Home Interior Design Amroha | Vasterior Studios",
  description:
    "High-End Home Interior Design Amroha – Vasterior Studios offers luxury materials, premium finishes & exclusive designer concepts for elite homes.",
  keywords:
    "high end home interiors amroha, luxury interiors amroha, premium interior design amroha",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/high-end-home-interior-design-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/high-end-home-interior-design-amroha",
    title: "High-End Home Interior Design Amroha | Vasterior Studios",
    description:
      "High-End Home Interior Design Amroha – Vasterior Studios offers luxury materials, premium finishes & exclusive designer concepts for elite homes.",
    images: [
      {
        url: "https://res.cloudinary.com/df1v3yied/image/upload/v1756528800/vasteriorlogo_fpcrfw.png",
        width: 1200,
        height: 630,
        alt: "High-End Home Interior Design Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "High-End Home Interior Design Amroha | Vasterior Studios",
    description:
      "High-End Home Interior Design Amroha – Vasterior Studios offers luxury materials, premium finishes & exclusive designer concepts for elite homes.",
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
