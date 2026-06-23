import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Design Firm in South Delhi",
  description:
    "Interior Design Firm in South Delhi, with Price | Vasteior. Looking for an interior design firm in South Delhi with price details? Vasterior provides complete, affordable & Vastu-compliant design services.",
  keywords:
    "interior design firm south delhi, interior contractor south delhi, home renovation south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/interior-design-firm-in-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-design-firm-in-south-delhi",
    title: "Interior Design Firm in South Delhi",
    description:
      "Interior Design Firm in South Delhi, with Price | Vasteior. Looking for an interior design firm in South Delhi with price details? Vasterior provides complete, affordable & Vastu-compliant design services.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Interior Design Firm in South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Design Firm in South Delhi",
    description:
      "Interior Design Firm in South Delhi, with Price | Vasteior. Looking for an interior design firm in South Delhi with price details? Vasterior provides complete, affordable & Vastu-compliant design services.",
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
