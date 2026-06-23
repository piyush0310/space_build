import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Top Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
  description: "Top Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Expert Vastu services for residential and commercial spaces with proven results.",
  keywords: "top vastu consultant chandausi, leading vastu expert chandausi, vastu specialist chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/top-vastu-consultant-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/top-vastu-consultant-chandausi",
    title: "Top Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Top Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Expert Vastu services for residential and commercial spaces with proven results.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Top Vastu Consultant Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Top Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Top Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Expert Vastu services for residential and commercial spaces with proven results.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function TopVastuConsultantChandausi() {
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
