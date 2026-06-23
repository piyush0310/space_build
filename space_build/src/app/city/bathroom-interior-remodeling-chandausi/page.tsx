import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Bathroom Interior Remodeling Chandausi, UP | Vasterior",
  description: "Bathroom Interior Remodeling in Chandausi, UP | Vasterior delivers modern, functional bathroom upgrades with premium fittings.",
  keywords: "bathroom interior remodeling chandausi, modern bathroom interiors chandausi, bathroom renovation chandausi",
  alternates: {
    canonical: "https://www.vasterior.com/city/bathroom-interior-remodeling-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/bathroom-interior-remodeling-chandausi",
    title: "Bathroom Interior Remodeling Chandausi, UP | Vasterior",
    description: "Bathroom Interior Remodeling in Chandausi, UP | Vasterior delivers modern, functional bathroom upgrades with premium fittings.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
      width: 1200,
      height: 630,
      alt: "Bathroom Interior Remodeling Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Bathroom Interior Remodeling Chandausi, UP | Vasterior",
    description: "Bathroom Interior Remodeling in Chandausi, UP | Vasterior delivers modern, functional bathroom upgrades with premium fittings.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function BathroomInteriorRemodelingChandausi() {
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
