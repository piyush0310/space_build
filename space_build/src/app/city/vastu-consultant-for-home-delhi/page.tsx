import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Vastu Consultant For Home Delhi | Vasterior",
  description: "Looking for Vastu Consultant For Home Delhi? Vasterior - expert Vastu Consultant For Home Delhi for peace & positivity.",
  keywords: "Vastu Consultant For Home Delhi, Home Vastu Expert Delhi, Residential Vastu Delhi",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultant-for-home-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-for-home-delhi",
    title: "Vastu Consultant For Home Delhi | Vasterior",
    description: "Looking for Vastu Consultant For Home Delhi? Vasterior - expert Vastu Consultant For Home Delhi for peace & positivity.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Consultant For Home Delhi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant For Home Delhi | Vasterior",
    description: "Looking for Vastu Consultant For Home Delhi? Vasterior - expert Vastu Consultant For Home Delhi for peace & positivity.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function VastuConsultantForHomeDelhi() {
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
