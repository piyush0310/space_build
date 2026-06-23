import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Farmhouse Interior Designer Amroha | Vasterior Studios",
  description:
    "Farmhouse Interior Designer Amroha – Vasterior Studios specializes in rustic, modern & luxury farmhouse interiors with natural elements & unique styling.",
  keywords:
    "farmhouse interior designer amroha, farmhouse interiors amroha, rustic interiors amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/farmhouse-interior-designer-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/farmhouse-interior-designer-amroha",
    title: "Farmhouse Interior Designer Amroha | Vasterior Studios",
    description:
      "Farmhouse Interior Designer Amroha – Vasterior Studios specializes in rustic, modern & luxury farmhouse interiors with natural elements & unique styling.",
    images: [
      {
        url: "https://res.cloudinary.com/df1v3yied/image/upload/v1756528800/vasteriorlogo_fpcrfw.png",
        width: 1200,
        height: 630,
        alt: "Farmhouse Interior Designer Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Farmhouse Interior Designer Amroha | Vasterior Studios",
    description:
      "Farmhouse Interior Designer Amroha – Vasterior Studios specializes in rustic, modern & luxury farmhouse interiors with natural elements & unique styling.",
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
