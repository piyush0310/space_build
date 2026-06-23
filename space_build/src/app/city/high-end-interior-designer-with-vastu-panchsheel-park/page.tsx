import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "High-End Interior Designer with Vastu Panchsheel Park",
  description:
    "High-End Interior Designer with Vastu Panchsheel Park, Price | Vasteior. Looking for a high-end interior designer with Vastu in Panchsheel Park with price details? Vasterior delivers luxurious, premium & Vastu-aligned interiors.",
  keywords:
    "high-end interior designer with vastu panchsheel park, vastu interior designer panchsheel park, premium interior designer panchsheel park",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/high-end-interior-designer-with-vastu-panchsheel-park",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/high-end-interior-designer-with-vastu-panchsheel-park",
    title: "High-End Interior Designer with Vastu Panchsheel Park",
    description:
      "High-End Interior Designer with Vastu Panchsheel Park, Price | Vasteior. Looking for a high-end interior designer with Vastu in Panchsheel Park with price details? Vasterior delivers luxurious, premium & Vastu-aligned interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "High-End Interior Designer with Vastu Panchsheel Park",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "High-End Interior Designer with Vastu Panchsheel Park",
    description:
      "High-End Interior Designer with Vastu Panchsheel Park, Price | Vasteior. Looking for a high-end interior designer with Vastu in Panchsheel Park with price details? Vasterior delivers luxurious, premium & Vastu-aligned interiors.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function HighEndInteriorDesignerVastuPanchsheelPark() {
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
