import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Villa Interior Designer Vasant Kunj",
  description:
    "Villa Interior Designer Vasant Kunj, with Price | Vasteior. Looking for a villa interior designer in Vasant Kunj with price details? Vasterior creates luxurious, functional & Vastu-based villa interiors.",
  keywords:
    "villa interior designer vasant kunj, luxury villa interiors vasant kunj, premium villa interior designer vasant kunj",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/villa-interior-designer-vasant-kunj",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/villa-interior-designer-vasant-kunj",
    title: "Villa Interior Designer Vasant Kunj",
    description:
      "Villa Interior Designer Vasant Kunj, with Price | Vasteior. Looking for a villa interior designer in Vasant Kunj with price details? Vasterior creates luxurious, functional & Vastu-based villa interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Villa Interior Designer Vasant Kunj",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Villa Interior Designer Vasant Kunj",
    description:
      "Villa Interior Designer Vasant Kunj, with Price | Vasteior. Looking for a villa interior designer in Vasant Kunj with price details? Vasterior creates luxurious, functional & Vastu-based villa interiors.",
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
