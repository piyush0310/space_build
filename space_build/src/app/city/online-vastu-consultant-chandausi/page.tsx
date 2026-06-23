import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Online Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
  description: "Online Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Convenient online Vastu consultations for home and business needs.",
  keywords: "online vastu consultant chandausi, vastu consultation online chandausi, virtual vastu services chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/online-vastu-consultant-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/online-vastu-consultant-chandausi",
    title: "Online Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Online Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Convenient online Vastu consultations for home and business needs.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Online Vastu Consultant Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Online Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Online Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Convenient online Vastu consultations for home and business needs.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function OnlineVastuConsultantChandausi() {
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
