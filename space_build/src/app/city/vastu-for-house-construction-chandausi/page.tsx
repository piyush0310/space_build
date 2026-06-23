import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu for House Construction Chandausi, Uttar Pradesh| Vasterior",
  description: "Vastu for House Construction in Chandausi, Uttar Pradesh by Vasterior. Accurate Vastu planning from foundation to completion.",
  keywords: "vastu for house construction chandausi, vastu planning for house chandausi, home vastu guidance chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-for-house-construction-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-for-house-construction-chandausi",
    title: "Vastu for House Construction Chandausi, Uttar Pradesh| Vasterior",
    description: "Vastu for House Construction in Chandausi, Uttar Pradesh by Vasterior. Accurate Vastu planning from foundation to completion.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Vastu for House Construction Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu for House Construction Chandausi, Uttar Pradesh| Vasterior",
    description: "Vastu for House Construction in Chandausi, Uttar Pradesh by Vasterior. Accurate Vastu planning from foundation to completion.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuForHomeChandausi() {
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
