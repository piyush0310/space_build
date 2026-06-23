import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Contractor South Delhi",
  description:
    "Interior Contractor South Delhi, with Price | Vasteior. Looking for an interior contractor in South Delhi with price details? Vasterior delivers reliable, professional & Vastu-compliant interior services.",
  keywords:
    "interior contractor south delhi, turnkey interior designer south delhi, home renovation south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/interior-contractor-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-contractor-south-delhi",
    title: "Interior Contractor South Delhi",
    description:
      "Interior Contractor South Delhi, with Price | Vasteior. Looking for an interior contractor in South Delhi with price details? Vasterior delivers reliable, professional & Vastu-compliant interior services.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Interior Contractor South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Contractor South Delhi",
    description:
      "Interior Contractor South Delhi, with Price | Vasteior. Looking for an interior contractor in South Delhi with price details? Vasterior delivers reliable, professional & Vastu-compliant interior services.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function InteriorContractorSouthDelhi() {
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
