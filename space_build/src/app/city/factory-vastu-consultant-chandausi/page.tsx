import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Factory Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
  description: "Factory Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Expert Vastu guidance for factory layout, growth, and operations.",
  keywords: "factory vastu consultant chandausi, vastu for factory chandausi, industrial vastu solutions chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/factory-vastu-consultant-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/factory-vastu-consultant-chandausi",
    title: "Factory Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Factory Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Expert Vastu guidance for factory layout, growth, and operations.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Factory Vastu Consultant Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Factory Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Factory Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Expert Vastu guidance for factory layout, growth, and operations.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function FactoryVastuConsultantChandausi() {
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
