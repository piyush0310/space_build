import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Residential Interior Designer Green Park",
  description:
    "Residential Interior Designer Green Park, with Price | Vasteior. Looking for a residential interior designer in Green Park with price details? Vasterior provides functional, beautiful & Vastu-compliant home interiors.",
  keywords:
    "residential interior designer green park, home interior designer green park, modern interiors green park",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/residential-interior-designer-green-park",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/residential-interior-designer-green-park",
    title: "Residential Interior Designer Green Park",
    description:
      "Residential Interior Designer Green Park, with Price | Vasteior. Looking for a residential interior designer in Green Park with price details? Vasterior provides functional, beautiful & Vastu-compliant home interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Residential Interior Designer Green Park",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Residential Interior Designer Green Park",
    description:
      "Residential Interior Designer Green Park, with Price | Vasteior. Looking for a residential interior designer in Green Park with price details? Vasterior provides functional, beautiful & Vastu-compliant home interiors.",
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
