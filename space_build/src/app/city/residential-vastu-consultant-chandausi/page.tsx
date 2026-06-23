import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Residential Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
  description: "Residential Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Professional Vastu guidance for flats, houses, and residential projects.",
  keywords: "residential vastu consultant chandausi, vastu for flats chandausi, vastu home expert chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/residential-vastu-consultant-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/residential-vastu-consultant-chandausi",
    title: "Residential Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Residential Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Professional Vastu guidance for flats, houses, and residential projects.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Residential Vastu Consultant Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Residential Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Residential Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Professional Vastu guidance for flats, houses, and residential projects.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function ResidentialVastuConsultantChandausi() {
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
