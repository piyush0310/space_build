import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Full Home Interior Chandausi , UP | Vasterior",
  description:
    "Full Home Interior in Chandausi, UP | Vasterior offers end-to-end interior solutions including design, execution, and Vastu integration.",
  keywords:
    "full home interior chandausi, turnkey home interior chandausi, complete interior solutions chandausi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/full-home-interior-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/full-home-interior-chandausi",
    title: "Full Home Interior Chandausi, UP | Vasterior",
    description:
      "Full Home Interior in Chandausi, UP | Vasterior offers end-to-end interior solutions including design, execution, and Vastu integration.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Full Home Interior Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Full Home Interior Chandausi, UP | Vasterior",
    description:
      "Full Home Interior in Chandausi, UP | Vasterior offers end-to-end interior solutions including design, execution, and Vastu integration.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function FullHomeInteriorChandausi() {
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
