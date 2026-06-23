import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Villa Interior Designer in Greater Kailash",
  description:
    "Villa Interior Designer in Greater Kailash, with Price | Vasteior. Looking for a villa interior designer in Greater Kailash with price details? Vasterior designs luxurious, Vastu-compliant villa interiors.",
  keywords:
    "villa interior designer in greater kailash, luxury villa interiors gk, premium villa interior designer gk",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/villa-interior-designer-in-greater-kailash",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/villa-interior-designer-in-greater-kailash",
    title: "Villa Interior Designer in Greater Kailash",
    description:
      "Villa Interior Designer in Greater Kailash, with Price | Vasteior. Looking for a villa interior designer in Greater Kailash with price details? Vasterior designs luxurious, Vastu-compliant villa interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Villa Interior Designer in Greater Kailash",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Villa Interior Designer in Greater Kailash",
    description:
      "Villa Interior Designer in Greater Kailash, with Price | Vasteior. Looking for a villa interior designer in Greater Kailash with price details? Vasterior designs luxurious, Vastu-compliant villa interiors.",
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
