import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Home Interior Designer with Vastu Green Park",
  description:
    "Home Interior Designer with Vastu Green Park, Price | Vasteior. Looking for a home interior designer with Vastu in Green Park with price details? Vasterior delivers functional, elegant & Vastu-compliant interiors.",
  keywords:
    "home interior designer with vastu green park, vastu interior designer green park, luxury interior designer green park",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/home-interior-designer-with-vastu-green-park",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/home-interior-designer-with-vastu-green-park",
    title: "Home Interior Designer with Vastu Green Park",
    description:
      "Home Interior Designer with Vastu Green Park, Price | Vasteior. Looking for a home interior designer with Vastu in Green Park with price details? Vasterior delivers functional, elegant & Vastu-compliant interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Home Interior Designer with Vastu Green Park",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Home Interior Designer with Vastu Green Park",
    description:
      "Home Interior Designer with Vastu Green Park, Price | Vasteior. Looking for a home interior designer with Vastu in Green Park with price details? Vasterior delivers functional, elegant & Vastu-compliant interiors.",
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
