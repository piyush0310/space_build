import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Contemporary Interior Designer Hauz Khas",
  description:
    "Looking for a contemporary interior designer in Hauz Khas with price details? Vasterior delivers stylish, functional & Vastu-based interiors.",
  keywords:
    "contemporary interior designer hauz khas, modern interior designer hauz khas, home interior designer hauz khas",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/contemporary-interior-designer-hauz-khas",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/contemporary-interior-designer-hauz-khas",
    title: "Contemporary Interior Designer Hauz Khas",
    description:
      "Looking for a contemporary interior designer in Hauz Khas with price details? Vasterior delivers stylish, functional & Vastu-based interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Contemporary Interior Designer Hauz Khas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Contemporary Interior Designer Hauz Khas",
    description:
      "Looking for a contemporary interior designer in Hauz Khas with price details? Vasterior delivers stylish, functional & Vastu-based interiors.",
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
