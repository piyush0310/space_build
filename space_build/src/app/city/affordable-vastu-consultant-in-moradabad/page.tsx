import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Affordable Vastu Consultant in Moradabad, UP | Space Build",
  description: "Your Affordable Vastu Consultant in Moradabad, UP. Get cost-effective solutions for balance and prosperity with the best Affordable Vastu Consultant in Moradabad, UP.",
  keywords: "affordable vastu consultant moradabad, budget vastu services moradabad",
  alternates: {
    canonical: "https://www.Space Build.com/city/affordable-vastu-consultant-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.Space Build.com/city/affordable-vastu-consultant-in-moradabad",
    title: "Affordable Vastu Consultant in Moradabad, UP | Space Build",
    description: "Your Affordable Vastu Consultant in Moradabad, UP. Get cost-effective solutions for balance and prosperity with the best Affordable Vastu Consultant in Moradabad, UP.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Affordable Vastu Consultant in Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Space Build",
    title: "Affordable Vastu Consultant in Moradabad, UP | Space Build",
    description: "Your Affordable Vastu Consultant in Moradabad, UP. Get cost-effective solutions for balance and prosperity with the best Affordable Vastu Consultant in Moradabad, UP.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function AffordableVastuConsultantMoradabad() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <Banner />
      <Content />
      
      <Portfolio />
      <Blog />
      <Testimonials />
    </div>
  );
}
