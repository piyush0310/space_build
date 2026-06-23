import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Vastu Consultant For Office Delhi | Vasterior",
  description: "Looking for Vastu Consultant For Office Delhi? Vasterior - expert Vastu Consultant For Office Delhi for growth & harmony.",
  keywords: "Vastu Consultant For Office Delhi, Office Vastu Expert Delhi, Corporate Vastu Consultant NCR",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultant-for-office-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-for-office-delhi",
    title: "Vastu Consultant For Office Delhi | Vasterior",
    description: "Looking for Vastu Consultant For Office Delhi? Vasterior - expert Vastu Consultant For Office Delhi for growth & harmony.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Consultant For Office Delhi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant For Office Delhi | Vasterior",
    description: "Looking for Vastu Consultant For Office Delhi? Vasterior - expert Vastu Consultant For Office Delhi for growth & harmony.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function VastuConsultantForOfficeDelhi() {
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
