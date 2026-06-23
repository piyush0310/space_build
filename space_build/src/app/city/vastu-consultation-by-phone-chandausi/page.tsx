import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultation by Phone Chandausi, Uttar Pradesh| Vasterior",
  description: "Vastu Consultation by Phone in Chandausi, Uttar Pradesh by Vasterior. Easy phone consultations for quick and reliable Vastu advice.",
  keywords: "vastu consultation by phone chandausi, vastu advice by call chandausi, phone vastu consultant chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultation-by-phone-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultation-by-phone-chandausi",
    title: "Vastu Consultation by Phone Chandausi, Uttar Pradesh| Vasterior",
    description: "Vastu Consultation by Phone in Chandausi, Uttar Pradesh by Vasterior. Easy phone consultations for quick and reliable Vastu advice.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Vastu Consultation by Phone Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultation by Phone Chandausi, Uttar Pradesh| Vasterior",
    description: "Vastu Consultation by Phone in Chandausi, Uttar Pradesh by Vasterior. Easy phone consultations for quick and reliable Vastu advice.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuConsultationByPhoneChandausi() {
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
