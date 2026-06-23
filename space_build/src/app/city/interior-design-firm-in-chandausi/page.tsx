import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Design Firm in Chandausi, UP",
  description: "Interior Design Firm in Chandausi, UP | Vasterior",
  keywords: "interior design firm in chandausi, professional interior designers chandausi, vasterior design studio",
  alternates: {
    canonical: "https://www.vasterior.com/city/interior-design-firm-in-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-design-firm-in-chandausi",
    title: "Interior Design Firm in Chandausi, UP | Vasterior provides professional home and commercial interior design services.",
    description: "Interior Design Firm in Chandausi, UP | Vasterior provides professional home and commercial interior design services.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
      width: 1200,
      height: 630,
      alt: "Interior Design Firm in Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Design Firm in Chandausi",
    description: "Interior Design Firm in Chandausi, UP | Vasterior provides professional home and commercial interior design services.",
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
