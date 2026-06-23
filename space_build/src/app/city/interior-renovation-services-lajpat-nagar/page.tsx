import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Renovation Services Lajpat Nagar",
  description:
    "Interior Renovation Services Lajpat Nagar, with Price | Vasteior. Looking for interior renovation services in Lajpat Nagar with price details? Vasterior delivers modern, affordable & Vastu-aligned renovation solutions.",
  keywords:
    "interior renovation services lajpat nagar, home interior designer lajpat nagar, interior contractor lajpat nagar",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/interior-renovation-services-lajpat-nagar",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-renovation-services-lajpat-nagar",
    title: "Interior Renovation Services Lajpat Nagar",
    description:
      "Interior Renovation Services Lajpat Nagar, with Price | Vasteior. Looking for interior renovation services in Lajpat Nagar with price details? Vasterior delivers modern, affordable & Vastu-aligned renovation solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Interior Renovation Services Lajpat Nagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Renovation Services Lajpat Nagar",
    description:
      "Interior Renovation Services Lajpat Nagar, with Price | Vasteior. Looking for interior renovation services in Lajpat Nagar with price details? Vasterior delivers modern, affordable & Vastu-aligned renovation solutions.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function InteriorDesignServicesChandausi() {
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
