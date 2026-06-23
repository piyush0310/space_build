import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Check for House Chandausi, Uttar Pradesh| Vasterior",
  description: "Vastu Check for House in Chandausi, Uttar Pradesh by Vasterior. Detailed Vastu analysis for better peace, health, and prosperity.",
  keywords: "vastu check for house chandausi, house vastu analysis chandausi, vastu inspection chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-check-for-house-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-check-for-house-chandausi",
    title: "Vastu Check for House Chandausi, Uttar Pradesh| Vasterior",
    description: "Vastu Check for House in Chandausi, Uttar Pradesh by Vasterior. Detailed Vastu analysis for better peace, health, and prosperity.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Vastu Check for House Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Check for House Chandausi, Uttar Pradesh| Vasterior",
    description: "Vastu Check for House in Chandausi, Uttar Pradesh by Vasterior. Detailed Vastu analysis for better peace, health, and prosperity.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuCheckForHouseChandausi() {
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
