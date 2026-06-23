import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Certified Vastu Expert Delhi NCR | Vasterior",
  description: "Looking for Certified Vastu Expert Delhi NCR? Vasterior - reliable Certified Vastu Expert Delhi NCR for balanced living.",
  keywords: "Certified Vastu Expert Delhi NCR, Professional Vastu Consultant Delhi, Vastu Specialist NCR",
  alternates: {
    canonical: "https://www.vasterior.com/city/certified-vastu-expert-delhi-ncr",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/certified-vastu-expert-delhi-ncr",
    title: "Certified Vastu Expert Delhi NCR | Vasterior",
    description: "Looking for Certified Vastu Expert Delhi NCR? Vasterior - reliable Certified Vastu Expert Delhi NCR for balanced living.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Certified Vastu Expert Delhi NCR",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Certified Vastu Expert Delhi NCR | Vasterior",
    description: "Looking for Certified Vastu Expert Delhi NCR? Vasterior - reliable Certified Vastu Expert Delhi NCR for balanced living.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function CertifiedVastuExpertDelhiNCR() {
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
