import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Vastu Consultant For Hospitals Delhi NCR | Vasterior",
  description: "Looking for Vastu Consultant For Hospitals Delhi NCR? Vasterior - trusted Vastu Consultant For Hospitals Delhi NCR.",
  keywords: "Vastu Consultant For Hospitals Delhi NCR, Healthcare Vastu Expert Delhi, Hospital Design Vastu NCR",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultant-for-hospitals-delhi-ncr",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-for-hospitals-delhi-ncr",
    title: "Vastu Consultant For Hospitals Delhi NCR | Vasterior",
    description: "Looking for Vastu Consultant For Hospitals Delhi NCR? Vasterior - trusted Vastu Consultant For Hospitals Delhi NCR.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Consultant For Hospitals Delhi NCR",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant For Hospitals Delhi NCR | Vasterior",
    description: "Looking for Vastu Consultant For Hospitals Delhi NCR? Vasterior - trusted Vastu Consultant For Hospitals Delhi NCR.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function VastuConsultantForHospitalsDelhiNCR() {
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
