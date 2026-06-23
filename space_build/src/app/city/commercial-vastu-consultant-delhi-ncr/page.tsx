import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Commercial Vastu Consultant Delhi NCR | Vasterior",
  description: "Looking for Commercial Vastu Consultant Delhi NCR? Vasterior - expert Commercial Vastu Consultant Delhi NCR for success.",
  keywords: "Commercial Vastu Consultant Delhi NCR, Office Vastu Expert Delhi, Business Vastu Consultant NCR",
  alternates: {
    canonical: "https://www.vasterior.com/city/commercial-vastu-consultant-delhi-ncr",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/commercial-vastu-consultant-delhi-ncr",
    title: "Commercial Vastu Consultant Delhi NCR | Vasterior",
    description: "Looking for Commercial Vastu Consultant Delhi NCR? Vasterior - expert Commercial Vastu Consultant Delhi NCR for success.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Commercial Vastu Consultant Delhi NCR",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Commercial Vastu Consultant Delhi NCR | Vasterior",
    description: "Looking for Commercial Vastu Consultant Delhi NCR? Vasterior - expert Commercial Vastu Consultant Delhi NCR for success.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function CommercialVastuConsultantDelhiNCR() {
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
