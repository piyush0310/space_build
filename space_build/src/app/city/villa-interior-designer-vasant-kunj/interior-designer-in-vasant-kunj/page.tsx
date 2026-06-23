import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Designer in Vasant Kunj",
  description:
    "Interior Designer in Vasant Kunj, with Price | Vasteior. Looking for an interior designer in Vasant Kunj with price details? Vasterior delivers stylish, modern & Vastu-compliant interior solutions.",
  keywords:
    "interior designer in vasant kunj, luxury interior designer vasant kunj, home interior designer vasant kunj",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/interior-designer-in-vasant-kunj",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-designer-in-vasant-kunj",
    title: "Interior Designer in Vasant Kunj",
    description:
      "Interior Designer in Vasant Kunj, with Price | Vasteior. Looking for an interior designer in Vasant Kunj with price details? Vasterior delivers stylish, modern & Vastu-compliant interior solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Interior Designer in Vasant Kunj",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Designer in Vasant Kunj",
    description:
      "Interior Designer in Vasant Kunj, with Price | Vasteior. Looking for an interior designer in Vasant Kunj with price details? Vasterior delivers stylish, modern & Vastu-compliant interior solutions.",
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
