import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Affordable Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
  description: "Affordable Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Get expert Vastu solutions for home, office, shop, and plots with practical guidance.",
  keywords: "affordable vastu consultant chandausi, vastu consultant chandausi, low cost vastu chandausi, vastu services chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/affordable-vastu-consultant-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/affordable-vastu-consultant-chandausi",
    title: "Affordable Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Affordable Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Get expert Vastu solutions for home, office, shop, and plots with practical guidance.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Affordable Vastu Consultant Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Affordable Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Affordable Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Get expert Vastu solutions for home, office, shop, and plots with practical guidance.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function AffordableVastuConsultantChandausi() {
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
