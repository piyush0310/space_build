import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Vastu Expert For Showrooms Delhi NCR | Vasterior",
  description: "Looking for Vastu Expert For Showrooms Delhi NCR? Vasterior - trusted Vastu Expert For Showrooms Delhi NCR for prosperity.",
  keywords: "Vastu Expert For Showrooms Delhi NCR, Retail Vastu Consultant Delhi, Showroom Vastu Specialist NCR",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-expert-for-showrooms-delhi-ncr",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-expert-for-showrooms-delhi-ncr",
    title: "Vastu Expert For Showrooms Delhi NCR | Vasterior",
    description: "Looking for Vastu Expert For Showrooms Delhi NCR? Vasterior - trusted Vastu Expert For Showrooms Delhi NCR for prosperity.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Expert For Showrooms Delhi NCR",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Expert For Showrooms Delhi NCR | Vasterior",
    description: "Looking for Vastu Expert For Showrooms Delhi NCR? Vasterior - trusted Vastu Expert For Showrooms Delhi NCR for prosperity.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function VastuExpertForShowroomsDelhiNCR() {
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
