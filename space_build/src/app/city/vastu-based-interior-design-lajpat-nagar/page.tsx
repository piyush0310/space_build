import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Based Interior Design Lajpat Nagar",
  description:
    "Vastu Based Interior Design Lajpat Nagar, with Price | Vasteior. Looking for Vastu-based interior design in Lajpat Nagar with price details? Vasterior delivers harmonious, premium & Vastu-compliant interiors.",
  keywords:
    "vastu based interior design lajpat nagar, vastu interior designer lajpat nagar, residential interior designer lajpat nagar",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-based-interior-design-lajpat-nagar",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-based-interior-design-lajpat-nagar",
    title: "Vastu Based Interior Design Lajpat Nagar",
    description:
      "Vastu Based Interior Design Lajpat Nagar, with Price | Vasteior. Looking for Vastu-based interior design in Lajpat Nagar with price details? Vasterior delivers harmonious, premium & Vastu-compliant interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu Based Interior Design Lajpat Nagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Based Interior Design Lajpat Nagar",
    description:
      "Vastu Based Interior Design Lajpat Nagar, with Price | Vasteior. Looking for Vastu-based interior design in Lajpat Nagar with price details? Vasterior delivers harmonious, premium & Vastu-compliant interiors.",
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
