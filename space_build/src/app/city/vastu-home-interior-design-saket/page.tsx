import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Home Interior Design Saket",
  description:
    "Vastu Home Interior Design Saket, with Price | Vasteior. Looking for Vastu home interior design in Saket with price details? Vasterior delivers modern, elegant & Vastu-compliant interiors.",
  keywords:
    "vastu home interior design saket, vastu interior consultant saket, residential interior designer saket",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-home-interior-design-saket",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-home-interior-design-saket",
    title: "Vastu Home Interior Design Saket",
    description:
      "Vastu Home Interior Design Saket, with Price | Vasteior. Looking for Vastu home interior design in Saket with price details? Vasterior delivers modern, elegant & Vastu-compliant interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu Home Interior Design Saket",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Home Interior Design Saket",
    description:
      "Vastu Home Interior Design Saket, with Price | Vasteior. Looking for Vastu home interior design in Saket with price details? Vasterior delivers modern, elegant & Vastu-compliant interiors.",
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
