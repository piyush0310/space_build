import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Best Interior Designer Saket",
  description:
    "Best Interior Designer Saket, with Price | Vasteior. Looking for the best interior designer in Saket with price details? Vasterior delivers high-quality, premium & Vastu-based interiors.",
  keywords:
    "best interior designer saket, modern home interior designer saket, luxury interior designer saket",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/best-interior-designer-saket",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/best-interior-designer-saket",
    title: "Best Interior Designer Saket",
    description:
      "Best Interior Designer Saket, with Price | Vasteior. Looking for the best interior designer in Saket with price details? Vasterior delivers high-quality, premium & Vastu-based interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Best Interior Designer Saket",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Best Interior Designer Saket",
    description:
      "Best Interior Designer Saket, with Price | Vasteior. Looking for the best interior designer in Saket with price details? Vasterior delivers high-quality, premium & Vastu-based interiors.",
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
