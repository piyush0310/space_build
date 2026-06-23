import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Interior Designer Vasant Kunj",
  description:
    "Vastu Interior Designer Vasant Kunj, with Price | Vasteior. Looking for a Vastu interior designer in Vasant Kunj with price details? Vasterior creates premium, stylish & Vastu-based interiors.",
  keywords:
    "vastu interior designer vasant kunj, luxury interior designer with vastu vasant kunj, home interior designer vasant kunj",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-interior-designer-vasant-kunj",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-interior-designer-vasant-kunj",
    title: "Vastu Interior Designer Vasant Kunj",
    description:
      "Vastu Interior Designer Vasant Kunj, with Price | Vasteior. Looking for a Vastu interior designer in Vasant Kunj with price details? Vasterior creates premium, stylish & Vastu-based interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu Interior Designer Vasant Kunj",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Interior Designer Vasant Kunj",
    description:
      "Vastu Interior Designer Vasant Kunj, with Price | Vasteior. Looking for a Vastu interior designer in Vasant Kunj with price details? Vasterior creates premium, stylish & Vastu-based interiors.",
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
