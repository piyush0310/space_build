import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Vastu Consultant Near Me Delhi | Vasterior",
  description: "Looking for Vastu Consultant Near Me Delhi? Vasterior - your trusted Vastu Consultant Near Me Delhi for home & office solutions.",
  keywords: "Vastu Consultant Near Me Delhi, Best Vastu Expert Delhi, Vasterior Vastu Services",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultant-near-me-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-near-me-delhi",
    title: "Vastu Consultant Near Me Delhi | Vasterior",
    description: "Looking for Vastu Consultant Near Me Delhi? Vasterior - your trusted Vastu Consultant Near Me Delhi for home & office solutions.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Consultant Near Me Delhi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant Near Me Delhi | Vasterior",
    description: "Looking for Vastu Consultant Near Me Delhi? Vasterior - your trusted Vastu Consultant Near Me Delhi for home & office solutions.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function VastuConsultantNearMeDelhi() {
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
