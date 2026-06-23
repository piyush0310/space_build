import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Vastu Remedies For Homes Delhi | Vasterior",
  description: "Looking for Vastu Remedies For Homes Delhi? Vasterior - expert Vastu Remedies For Homes Delhi to balance your space.",
  keywords: "Vastu Remedies For Homes Delhi, Home Vastu Solutions Delhi, Expert Vastu Remedies NCR",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-remedies-for-homes-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-remedies-for-homes-delhi",
    title: "Vastu Remedies For Homes Delhi | Vasterior",
    description: "Looking for Vastu Remedies For Homes Delhi? Vasterior - expert Vastu Remedies For Homes Delhi to balance your space.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Remedies For Homes Delhi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Remedies For Homes Delhi | Vasterior",
    description: "Looking for Vastu Remedies For Homes Delhi? Vasterior - expert Vastu Remedies For Homes Delhi to balance your space.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function VastuRemediesForHomesDelhi() {
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
