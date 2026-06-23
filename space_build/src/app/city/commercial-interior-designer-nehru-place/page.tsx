import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Commercial Interior Designer Nehru Place",
  description:
    "Commercial Interior Designer Nehru Place, with Price | Vasteior. Looking for a commercial interior designer in Nehru Place with price details? Vasterior provides modern, professional & Vastu-compliant interiors.",
  keywords:
    "commercial interior designer nehru place, office interior designer nehru place, showroom interior designer nehru place",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/commercial-interior-designer-nehru-place",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/commercial-interior-designer-nehru-place",
    title: "Commercial Interior Designer Nehru Place",
    description:
      "Commercial Interior Designer Nehru Place, with Price | Vasteior. Looking for a commercial interior designer in Nehru Place with price details? Vasterior provides modern, professional & Vastu-compliant interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Commercial Interior Designer Nehru Place",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Commercial Interior Designer Nehru Place",
    description:
      "Commercial Interior Designer Nehru Place, with Price | Vasteior. Looking for a commercial interior designer in Nehru Place with price details? Vasterior provides modern, professional & Vastu-compliant interiors.",
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
