import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Luxury Home Vastu Consultation Delhi NCR | Vasterior",
  description: "Looking for Luxury Home Vastu Consultation Delhi NCR? Vasterior - expert Luxury Home Vastu Consultation Delhi NCR.",
  keywords: "Luxury Home Vastu Consultation Delhi NCR, Premium Vastu Consultant NCR, High-End Home Vastu Delhi",
  alternates: {
    canonical: "https://www.vasterior.com/city/luxury-home-vastu-consultation-delhi-ncr",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/luxury-home-vastu-consultation-delhi-ncr",
    title: "Luxury Home Vastu Consultation Delhi NCR | Vasterior",
    description: "Looking for Luxury Home Vastu Consultation Delhi NCR? Vasterior - expert Luxury Home Vastu Consultation Delhi NCR.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Luxury Home Vastu Consultation Delhi NCR",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Luxury Home Vastu Consultation Delhi NCR | Vasterior",
    description: "Looking for Luxury Home Vastu Consultation Delhi NCR? Vasterior - expert Luxury Home Vastu Consultation Delhi NCR.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function LuxuryHomeVastuConsultationDelhiNCR() {
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
