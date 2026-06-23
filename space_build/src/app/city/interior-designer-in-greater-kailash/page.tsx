import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Designer in Greater Kailash",
  description:
    "Looking for an interior designer in Greater Kailash with price details? Vasterior delivers modern, stylish & Vastu-aligned interior solutions.",
  keywords:
    "interior designer in greater kailash, luxury interior designer greater kailash, home interior designer gk",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/interior-designer-in-greater-kailash",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-designer-in-greater-kailash",
    title: "Interior Designer in Greater Kailash",
    description:
      "Looking for an interior designer in Greater Kailash with price details? Vasterior delivers modern, stylish & Vastu-aligned interior solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Interior Designer in Greater Kailash",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Designer in Greater Kailash",
    description:
      "Looking for an interior designer in Greater Kailash with price details? Vasterior delivers modern, stylish & Vastu-aligned interior solutions.",
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
