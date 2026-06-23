import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "High-End Interior Design Greater Kailash",
  description:
    "High-End Interior Design Greater Kailash, with Price | Vasteior. Looking for high-end interior design in Greater Kailash with price details? Vasterior delivers sophisticated, Vastu-aligned interiors for homes & offices.",
  keywords:
    "high-end interior design greater kailash, luxury interior designer gk, premium home interiors gk",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/high-end-interior-design-greater-kailash",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/high-end-interior-design-greater-kailash",
    title: "High-End Interior Design Greater Kailash",
    description:
      "High-End Interior Design Greater Kailash, with Price | Vasteior. Looking for high-end interior design in Greater Kailash with price details? Vasterior delivers sophisticated, Vastu-aligned interiors for homes & offices.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "High-End Interior Design Greater Kailash",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "High-End Interior Design Greater Kailash",
    description:
      "High-End Interior Design Greater Kailash, with Price | Vasteior. Looking for high-end interior design in Greater Kailash with price details? Vasterior delivers sophisticated, Vastu-aligned interiors for homes & offices.",
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
