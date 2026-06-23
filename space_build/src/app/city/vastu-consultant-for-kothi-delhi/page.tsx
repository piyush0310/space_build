import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Vastu Consultant For Kothi Delhi | Vasterior",
  description: "Looking for Vastu Consultant For Kothi Delhi? Vasterior - reliable Vastu Consultant For Kothi Delhi for luxury spaces.",
  keywords: "Vastu Consultant For Kothi Delhi, Kothi Vastu Expert Delhi, Home Vastu For Luxury Kothis NCR",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultant-for-kothi-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-for-kothi-delhi",
    title: "Vastu Consultant For Kothi Delhi | Vasterior",
    description: "Looking for Vastu Consultant For Kothi Delhi? Vasterior - reliable Vastu Consultant For Kothi Delhi for luxury spaces.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Consultant For Kothi Delhi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant For Kothi Delhi | Vasterior",
    description: "Looking for Vastu Consultant For Kothi Delhi? Vasterior - reliable Vastu Consultant For Kothi Delhi for luxury spaces.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function VastuConsultantForKothiDelhi() {
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
