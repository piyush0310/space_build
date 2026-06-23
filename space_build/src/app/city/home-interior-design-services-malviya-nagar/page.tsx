import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Home Interior Design Services Malviya Nagar",
  description:
    "Home Interior Design Services Malviya Nagar, with Price | Vasteior. Looking for home interior design services in Malviya Nagar with price details? Vasterior provides complete, functional & Vastu-based home interiors.",
  keywords:
    "home interior design services malviya nagar, interior designer malviya nagar, residential interiors malviya nagar",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/home-interior-design-services-malviya-nagar",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/home-interior-design-services-malviya-nagar",
    title: "Home Interior Design Services Malviya Nagar",
    description:
      "Home Interior Design Services Malviya Nagar, with Price | Vasteior. Looking for home interior design services in Malviya Nagar with price details? Vasterior provides complete, functional & Vastu-based home interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Home Interior Design Services Malviya Nagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Home Interior Design Services Malviya Nagar",
    description:
      "Home Interior Design Services Malviya Nagar, with Price | Vasteior. Looking for home interior design services in Malviya Nagar with price details? Vasterior provides complete, functional & Vastu-based home interiors.",
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
