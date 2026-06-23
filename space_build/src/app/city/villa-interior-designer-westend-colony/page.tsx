import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Villa Interior Designer Westend Colony",
  description:
    "Villa Interior Designer Westend Colony, with Price | Vasteior. Looking for a villa interior designer in Westend Colony with price details? Vasterior provides luxurious, Vastu-aligned villa interiors.",
  keywords:
    "villa interior designer westend colony, luxury villa interiors westend colony, high-end villa interior designer westend colony",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/villa-interior-designer-westend-colony",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/villa-interior-designer-westend-colony",
    title: "Villa Interior Designer Westend Colony",
    description:
      "Villa Interior Designer Westend Colony, with Price | Vasteior. Looking for a villa interior designer in Westend Colony with price details? Vasterior provides luxurious, Vastu-aligned villa interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Villa Interior Designer Westend Colony",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Villa Interior Designer Westend Colony",
    description:
      "Villa Interior Designer Westend Colony, with Price | Vasteior. Looking for a villa interior designer in Westend Colony with price details? Vasterior provides luxurious, Vastu-aligned villa interiors.",
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
