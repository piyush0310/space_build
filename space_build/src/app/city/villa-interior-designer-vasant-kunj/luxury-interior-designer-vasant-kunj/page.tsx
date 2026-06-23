import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Luxury Interior Designer Vasant Kunj",
  description:
    "Luxury Interior Designer Vasant Kunj, with Price | Vasteior. Looking for a luxury interior designer in Vasant Kunj with price details? Vasterior provides high-end, elegant & Vastu-aligned interior designs.",
  keywords:
    "luxury interior designer vasant kunj, premium interior designer vasant kunj, high-end interior designer vasant Kunj",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/luxury-interior-designer-vasant-kunj",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/luxury-interior-designer-vasant-kunj",
    title: "Luxury Interior Designer Vasant Kunj",
    description:
      "Luxury Interior Designer Vasant Kunj, with Price | Vasteior. Looking for a luxury interior designer in Vasant Kunj with price details? Vasterior provides high-end, elegant & Vastu-aligned interior designs.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Luxury Interior Designer Vasant Kunj",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Luxury Interior Designer Vasant Kunj",
    description:
      "Luxury Interior Designer Vasant Kunj, with Price | Vasteior. Looking for a luxury interior designer in Vasant Kunj with price details? Vasterior provides high-end, elegant & Vastu-aligned interior designs.",
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
