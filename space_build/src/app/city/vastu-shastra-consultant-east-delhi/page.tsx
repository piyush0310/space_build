import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Vastu Shastra Consultant East Delhi | Vasterior",
  description: "Looking for Vastu Shastra Consultant East Delhi? Vasterior - trusted Vastu Shastra Consultant East Delhi for positive energy.",
  keywords: "Vastu Shastra Consultant East Delhi, East Delhi Vastu Expert, Best Vastu Shastra Consultant Delhi",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-shastra-consultant-east-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-shastra-consultant-east-delhi",
    title: "Vastu Shastra Consultant East Delhi | Vasterior",
    description: "Looking for Vastu Shastra Consultant East Delhi? Vasterior - trusted Vastu Shastra Consultant East Delhi for positive energy.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Shastra Consultant East Delhi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Shastra Consultant East Delhi | Vasterior",
    description: "Looking for Vastu Shastra Consultant East Delhi? Vasterior - trusted Vastu Shastra Consultant East Delhi for positive energy.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function VastuShastraConsultantEastDelhi() {
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
