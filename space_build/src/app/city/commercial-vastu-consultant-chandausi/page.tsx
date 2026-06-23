import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Commercial Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
  description: "Commercial Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Strategic Vastu planning for shops, offices, and business properties.",
  keywords: "commercial vastu consultant chandausi, vastu for business chandausi, vastu commercial planning chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/commercial-vastu-consultant-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/commercial-vastu-consultant-chandausi",
    title: "Commercial Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Commercial Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Strategic Vastu planning for shops, offices, and business properties.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Commercial Vastu Consultant Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Commercial Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Commercial Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Strategic Vastu planning for shops, offices, and business properties.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function CommercialVastuConsultantChandausi() {
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
