import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Industrial Vastu Consultant West Delhi | Vasterior",
  description: "Looking for Industrial Vastu Consultant West Delhi? Vasterior - reliable Industrial Vastu Consultant West Delhi for success.",
  keywords: "Industrial Vastu Consultant West Delhi, Factory Vastu Expert Delhi, Industrial Space Vastu Delhi",
  alternates: {
    canonical: "https://www.vasterior.com/city/industrial-vastu-consultant-west-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/industrial-vastu-consultant-west-delhi",
    title: "Industrial Vastu Consultant West Delhi | Vasterior",
    description: "Looking for Industrial Vastu Consultant West Delhi? Vasterior - reliable Industrial Vastu Consultant West Delhi for success.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Industrial Vastu Consultant West Delhi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Industrial Vastu Consultant West Delhi | Vasterior",
    description: "Looking for Industrial Vastu Consultant West Delhi? Vasterior - reliable Industrial Vastu Consultant West Delhi for success.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function IndustrialVastuConsultantWestDelhi() {
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
