import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Industrial Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
  description: "Industrial Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Professional Vastu services for industrial units and workspaces.",
  keywords: "industrial vastu consultant chandausi, vastu for industry chandausi, factory vastu expert chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/industrial-vastu-consultant-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/industrial-vastu-consultant-chandausi",
    title: "Industrial Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Industrial Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Professional Vastu services for industrial units and workspaces.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Industrial Vastu Consultant Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Industrial Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Industrial Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Professional Vastu services for industrial units and workspaces.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function IndustrialVastuConsultantChandausi() {
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
