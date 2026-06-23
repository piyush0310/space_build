import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Certified Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
  description: "Certified Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Professional Vastu guidance for homes, offices, commercial spaces, and plots.",
  keywords: "certified vastu consultant chandausi, vastu certified expert chandausi, professional vastu chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/certified-vastu-consultant-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/certified-vastu-consultant-chandausi",
    title: "Certified Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Certified Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Professional Vastu guidance for homes, offices, commercial spaces, and plots.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Certified Vastu Consultant Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Certified Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Certified Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Professional Vastu guidance for homes, offices, commercial spaces, and plots.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function CertifiedVastuConsultantChandausi() {
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
