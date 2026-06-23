import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "High-End Interior Designer Sundar Nagar",
  description:
    "High-End Interior Designer Sundar Nagar, with Price | Vasteior. Looking for a high-end interior designer in Sundar Nagar with price details? Vasterior delivers premium, sophisticated & Vastu-compliant interiors.",
  keywords:
    "high-end interior designer sundar nagar, luxury interior designer sundar nagar, premium home interiors sundar nagar",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/high-end-interior-designer-sundar-nagar",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/high-end-interior-designer-sundar-nagar",
    title: "High-End Interior Designer Sundar Nagar",
    description:
      "High-End Interior Designer Sundar Nagar, with Price | Vasteior. Looking for a high-end interior designer in Sundar Nagar with price details? Vasterior delivers premium, sophisticated & Vastu-compliant interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "High-End Interior Designer Sundar Nagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "High-End Interior Designer Sundar Nagar",
    description:
      "High-End Interior Designer Sundar Nagar, with Price | Vasteior. Looking for a high-end interior designer in Sundar Nagar with price details? Vasterior delivers premium, sophisticated & Vastu-compliant interiors.",
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
