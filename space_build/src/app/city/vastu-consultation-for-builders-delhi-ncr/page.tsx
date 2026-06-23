import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Vastu Consultant For Builders Delhi NCR | Vasterior",
  description: "Looking for Vastu Consultant For Builders Delhi NCR? Vasterior - trusted Vastu Consultant For Builders Delhi NCR.",
  keywords: "Vastu Consultant For Builders Delhi NCR, Builder Vastu Expert Delhi, Construction Vastu Consultant NCR",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultant-for-builders-delhi-ncr",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-for-builders-delhi-ncr",
    title: "Vastu Consultant For Builders Delhi NCR | Vasterior",
    description: "Looking for Vastu Consultant For Builders Delhi NCR? Vasterior - trusted Vastu Consultant For Builders Delhi NCR.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Consultant For Builders Delhi NCR",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant For Builders Delhi NCR | Vasterior",
    description: "Looking for Vastu Consultant For Builders Delhi NCR? Vasterior - trusted Vastu Consultant For Builders Delhi NCR.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function VastuConsultantForBuildersDelhiNCR() {
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
