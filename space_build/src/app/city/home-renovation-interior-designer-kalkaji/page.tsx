import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Home Renovation Interior Designer Kalkaji",
  description:
    "Home Renovation Interior Designer Kalkaji, with Price | Vasteior. Looking for a home renovation interior designer in Kalkaji with price details? Vasterior provides complete, functional & Vastu-compliant home renovations.",
  keywords:
    "home renovation interior designer kalkaji, interior designer kalkaji, residential interior designer kalkaji",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/home-renovation-interior-designer-kalkaji",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/home-renovation-interior-designer-kalkaji",
    title: "Home Renovation Interior Designer Kalkaji",
    description:
      "Home Renovation Interior Designer Kalkaji, with Price | Vasteior. Looking for a home renovation interior designer in Kalkaji with price details? Vasterior provides complete, functional & Vastu-compliant home renovations.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Home Renovation Interior Designer Kalkaji",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Home Renovation Interior Designer Kalkaji",
    description:
      "Home Renovation Interior Designer Kalkaji, with Price | Vasteior. Looking for a home renovation interior designer in Kalkaji with price details? Vasterior provides complete, functional & Vastu-compliant home renovations.",
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
