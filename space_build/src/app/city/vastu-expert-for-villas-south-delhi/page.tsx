import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Vastu Expert For Villas South Delhi | Vasterior",
  description: "Looking for Vastu Expert For Villas South Delhi? Vasterior - expert Vastu Expert For Villas South Delhi for luxury homes.",
  keywords: "Vastu Expert For Villas South Delhi, Luxury Villa Vastu Delhi, South Delhi Vastu Consultant",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-expert-for-villas-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-expert-for-villas-south-delhi",
    title: "Vastu Expert For Villas South Delhi | Vasterior",
    description: "Looking for Vastu Expert For Villas South Delhi? Vasterior - expert Vastu Expert For Villas South Delhi for luxury homes.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Expert For Villas South Delhi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Expert For Villas South Delhi | Vasterior",
    description: "Looking for Vastu Expert For Villas South Delhi? Vasterior - expert Vastu Expert For Villas South Delhi for luxury homes.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function VastuExpertForVillasSouthDelhi() {
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
