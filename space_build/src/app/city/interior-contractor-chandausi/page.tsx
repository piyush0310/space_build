import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Contractor Chandausi",
  description: "Interior Contractor in Chandausi, UP | Vasterior provides reliable interior execution, renovation, and turnkey services.",
  keywords: "interior contractor chandausi, interior execution services chandausi, turnkey interior contractor chandausi",
  alternates: {
    canonical: "https://www.vasterior.com/city/interior-contractor-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-contractor-chandausi",
    title: "Interior Contractor Chandausi, UP | Vasterior",
    description: "Interior Contractor in Chandausi, UP | Vasterior provides reliable interior execution, renovation, and turnkey services.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
      width: 1200,
      height: 630,
      alt: "Interior Contractor Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Contractor Chandausi",
    description: "Interior Contractor in Chandausi, UP | Vasterior provides reliable interior execution, renovation, and turnkey services.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function InteriorContractorChandausi() {
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
