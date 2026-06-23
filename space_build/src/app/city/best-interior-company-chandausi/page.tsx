import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Best Interior Company Chandausi , UP | Vasterior",
  description:
    "Best Interior Company in Chandausi, UP | Vasterior delivers trusted, high-quality interior solutions with expert execution.",
  keywords:
    "best interior company chandausi, top interior company chandausi, trusted interior brand chandausi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/best-interior-company-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/best-interior-company-chandausi",
    title: "Best Interior Company Chandausi, UP | Vasterior",
    description:
      "Best Interior Company in Chandausi, UP | Vasterior delivers trusted, high-quality interior solutions with expert execution.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Best Interior Company Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Best Interior Company Chandausi, UP | Vasterior",
    description:
      "Best Interior Company in Chandausi, UP | Vasterior delivers trusted, high-quality interior solutions with expert execution.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function BestInteriorCompanyChandausi() {
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
