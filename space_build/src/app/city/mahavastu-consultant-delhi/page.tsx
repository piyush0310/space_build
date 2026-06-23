import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Mahavastu Consultant Delhi | Vasterior",
  description: "Looking for Mahavastu Consultant Delhi? Vasterior - expert Mahavastu Consultant Delhi for modern & scientific Vastu.",
  keywords: "Mahavastu Consultant Delhi, Certified Mahavastu Expert Delhi, Mahavastu Specialist NCR",
  alternates: {
    canonical: "https://www.vasterior.com/city/mahavastu-consultant-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/mahavastu-consultant-delhi",
    title: "Mahavastu Consultant Delhi | Vasterior",
    description: "Looking for Mahavastu Consultant Delhi? Vasterior - expert Mahavastu Consultant Delhi for modern & scientific Vastu.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Mahavastu Consultant Delhi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Mahavastu Consultant Delhi | Vasterior",
    description: "Looking for Mahavastu Consultant Delhi? Vasterior - expert Mahavastu Consultant Delhi for modern & scientific Vastu.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function MahavastuConsultantDelhi() {
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
