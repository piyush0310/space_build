import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Planning for Home Chandausi, Uttar Pradesh| Vasterior",
  description: "Vastu Planning for Home in Chandausi, Uttar Pradesh by Vasterior. Proper Vastu planning for new homes and renovations.",
  keywords: "vastu planning for home chandausi, vastu design for house chandausi, home vastu solutions chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-planning-for-home-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-planning-for-home-chandausi",
    title: "Vastu Planning for Home Chandausi, Uttar Pradesh| Vasterior",
    description: "Vastu Planning for Home in Chandausi, Uttar Pradesh by Vasterior. Proper Vastu planning for new homes and renovations.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Vastu Planning for Home Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Planning for Home Chandausi, Uttar Pradesh| Vasterior",
    description: "Vastu Planning for Home in Chandausi, Uttar Pradesh by Vasterior. Proper Vastu planning for new homes and renovations.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuPlanningForHomeChandausi() {
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
