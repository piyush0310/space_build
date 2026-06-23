import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Premium Home Interiors Defence Colony",
  description:
    "Premium Home Interiors Defence Colony, with Price | Vasteior. Looking for premium home interiors in Defence Colony with price details? Vasterior offers luxurious, Vastu-compliant designs.",
  keywords:
    "premium home interiors defence colony, residential interior designer defence colony, luxury interior designer defence colony",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/premium-home-interiors-defence-colony",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/premium-home-interiors-defence-colony",
    title: "Premium Home Interiors Defence Colony",
    description:
      "Premium Home Interiors Defence Colony, with Price | Vasteior. Looking for premium home interiors in Defence Colony with price details? Vasterior offers luxurious, Vastu-compliant designs.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Premium Home Interiors Defence Colony",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Premium Home Interiors Defence Colony",
    description:
      "Premium Home Interiors Defence Colony, with Price | Vasteior. Looking for premium home interiors in Defence Colony with price details? Vasterior offers luxurious, Vastu-compliant designs.",
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
