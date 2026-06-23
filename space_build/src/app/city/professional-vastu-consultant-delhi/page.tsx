import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Professional Vastu Consultant Delhi | Vasterior",
  description: "Looking for Professional Vastu Consultant Delhi? Vasterior - expert Professional Vastu Consultant Delhi for balanced design.",
  keywords: "Professional Vastu Consultant Delhi, Expert Vastu Advisor Delhi, Certified Vastu Specialist NCR",
  alternates: {
    canonical: "https://www.vasterior.com/city/professional-vastu-consultant-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/professional-vastu-consultant-delhi",
    title: "Professional Vastu Consultant Delhi | Vasterior",
    description: "Looking for Professional Vastu Consultant Delhi? Vasterior - expert Professional Vastu Consultant Delhi for balanced design.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Professional Vastu Consultant Delhi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Professional Vastu Consultant Delhi | Vasterior",
    description: "Looking for Professional Vastu Consultant Delhi? Vasterior - expert Professional Vastu Consultant Delhi for balanced design.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function ProfessionalVastuConsultantDelhi() {
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
