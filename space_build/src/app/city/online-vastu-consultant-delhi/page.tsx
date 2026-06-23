import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Online Vastu Consultant Delhi | Vasterior",
  description: "Looking for Online Vastu Consultant Delhi? Vasterior - expert Online Vastu Consultant Delhi for quick virtual guidance.",
  keywords: "Online Vastu Consultant Delhi, Virtual Vastu Expert Delhi, Vastu Consultation Online NCR",
  alternates: {
    canonical: "https://www.vasterior.com/city/online-vastu-consultant-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/online-vastu-consultant-delhi",
    title: "Online Vastu Consultant Delhi | Vasterior",
    description: "Looking for Online Vastu Consultant Delhi? Vasterior - expert Online Vastu Consultant Delhi for quick virtual guidance.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Online Vastu Consultant Delhi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Online Vastu Consultant Delhi | Vasterior",
    description: "Looking for Online Vastu Consultant Delhi? Vasterior - expert Online Vastu Consultant Delhi for quick virtual guidance.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function OnlineVastuConsultantDelhi() {
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
