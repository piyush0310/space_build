import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Full Home Interior South Delhi",
  description:
    "Full Home Interior South Delhi, with Price | Vasteior. Looking for full home interior in South Delhi with price details? Vasterior delivers complete, stylish & Vastu-compliant home interiors.",
  keywords:
    "full home interior south delhi, home interior designer south delhi, turnkey interior designer south delhi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/full-home-interior-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/full-home-interior-south-delhi",
    title: "Full Home Interior South Delhi",
    description:
      "Full Home Interior South Delhi, with Price | Vasteior. Looking for full home interior in South Delhi with price details? Vasterior delivers complete, stylish & Vastu-compliant home interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Full Home Interior South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Full Home Interior South Delhi",
    description:
      "Full Home Interior South Delhi, with Price | Vasteior. Looking for full home interior in South Delhi with price details? Vasterior delivers complete, stylish & Vastu-compliant home interiors.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function FullHomeInteriorSouthDelhi() {
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
