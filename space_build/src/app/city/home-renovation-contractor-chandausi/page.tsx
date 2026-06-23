import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Home Renovation Contractor Chandausi, UP",
  description: "Home Renovation Contractor Chandausi, UP | Vasterior",
  keywords: "home renovation contractor chandausi, home remodeling services chandausi, renovation experts chandausi",
  alternates: {
    canonical: "https://www.vasterior.com/city/home-renovation-contractor-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/home-renovation-contractor-chandausi",
    title: "Home Renovation Contractor in Chandausi, UP | Vasterior offers complete remodeling with modern interior upgrades.",
    description: "Home Renovation Contractor in Chandausi, UP | Vasterior offers complete remodeling with modern interior upgrades.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
      width: 1200,
      height: 630,
      alt: "Home Renovation Contractor Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Home Renovation Contractor Chandausi, UP | Vasterior",
    description: "Home Renovation Contractor in Chandausi, UP | Vasterior offers complete remodeling with modern interior upgrades.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function HomeRenovationContractorChandausi() {
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
