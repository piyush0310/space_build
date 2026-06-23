import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Experienced Vastu Consultant South Delhi | Vasterior",
  description: "Looking for Experienced Vastu Consultant South Delhi? Vasterior - expert Experienced Vastu Consultant South Delhi.",
  keywords: "Experienced Vastu Consultant South Delhi, Top Vastu Expert South Delhi, South Delhi Vastu Advisor",
  alternates: {
    canonical: "https://www.vasterior.com/city/experienced-vastu-consultant-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/experienced-vastu-consultant-south-delhi",
    title: "Experienced Vastu Consultant South Delhi | Vasterior",
    description: "Looking for Experienced Vastu Consultant South Delhi? Vasterior - expert Experienced Vastu Consultant South Delhi.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Experienced Vastu Consultant South Delhi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Experienced Vastu Consultant South Delhi | Vasterior",
    description: "Looking for Experienced Vastu Consultant South Delhi? Vasterior - expert Experienced Vastu Consultant South Delhi.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function ExperiencedVastuConsultantSouthDelhi() {
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
