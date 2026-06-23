import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Interior Designer Kalkaji",
  description:
    "Vastu Interior Designer Kalkaji, with Price | Vasteior. Looking for a Vastu interior designer in Kalkaji with price details? Vasterior provides elegant, modern & Vastu-compliant interiors.",
  keywords:
    "vastu interior designer kalkaji, home interior design as per vastu kalkaji, residential interior designer kalkaji",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-interior-designer-kalkaji",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-interior-designer-kalkaji",
    title: "Vastu Interior Designer Kalkaji",
    description:
      "Vastu Interior Designer Kalkaji, with Price | Vasteior. Looking for a Vastu interior designer in Kalkaji with price details? Vasterior provides elegant, modern & Vastu-compliant interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu Interior Designer Kalkaji",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Interior Designer Kalkaji",
    description:
      "Vastu Interior Designer Kalkaji, with Price | Vasteior. Looking for a Vastu interior designer in Kalkaji with price details? Vasterior provides elegant, modern & Vastu-compliant interiors.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuInteriorDesignerKalkaji() {
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
