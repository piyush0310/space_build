import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultation at Home Chandausi, Uttar Pradesh| Vasterior",
  description: "Vastu Consultation at Home in Chandausi, Uttar Pradesh by Vasterior. On-site Vastu assessment for accurate and effective solutions.",
  keywords: "vastu consultation at home chandausi, on-site vastu consultation chandausi, home vastu services chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultation-at-home-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultation-at-home-chandausi",
    title: "Vastu Consultation at Home Chandausi, Uttar Pradesh| Vasterior",
    description: "Vastu Consultation at Home in Chandausi, Uttar Pradesh by Vasterior. On-site Vastu assessment for accurate and effective solutions.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Vastu Consultation at Home Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultation at Home Chandausi, Uttar Pradesh| Vasterior",
    description: "Vastu Consultation at Home in Chandausi, Uttar Pradesh by Vasterior. On-site Vastu assessment for accurate and effective solutions.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuConsultationAtHomeChandausi() {
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
