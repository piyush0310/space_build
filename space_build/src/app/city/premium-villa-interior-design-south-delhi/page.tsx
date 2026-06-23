import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Premium Villa Interior Design South Delhi",
  description:
    "Premium Villa Interior Design South Delhi, with Price | Vasteior. Looking for premium villa interior design in South Delhi with price details? Vasterior creates sophisticated, Vastu-focused villa interiors.",
  keywords:
    "premium villa interior design south delhi, luxury villa interiors south delhi, villa interior designer south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/premium-villa-interior-design-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/premium-villa-interior-design-south-delhi",
    title: "Premium Villa Interior Design South Delhi",
    description:
      "Premium Villa Interior Design South Delhi, with Price | Vasteior. Looking for premium villa interior design in South Delhi with price details? Vasterior creates sophisticated, Vastu-focused villa interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Premium Villa Interior Design South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Premium Villa Interior Design South Delhi",
    description:
      "Premium Villa Interior Design South Delhi, with Price | Vasteior. Looking for premium villa interior design in South Delhi with price details? Vasterior creates sophisticated, Vastu-focused villa interiors.",
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
