import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultant Near Me Chandausi, Uttar Pradesh| Vasterior",
  description: "Vastu Consultant Near Me in Chandausi, Uttar Pradesh by Vasterior. Personalized Vastu advice for homes, offices, shops, and businesses.",
  keywords: "vastu consultant near me chandausi, vastu guidance nearby chandausi, local vastu expert chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultant-near-me-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-near-me-chandausi",
    title: "Vastu Consultant Near Me Chandausi, Uttar Pradesh| Vasterior",
    description: "Vastu Consultant Near Me in Chandausi, Uttar Pradesh by Vasterior. Personalized Vastu advice for homes, offices, shops, and businesses.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Vastu Consultant Near Me Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant Near Me Chandausi, Uttar Pradesh| Vasterior",
    description: "Vastu Consultant Near Me in Chandausi, Uttar Pradesh by Vasterior. Personalized Vastu advice for homes, offices, shops, and businesses.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuConsultantNearMeChandausi() {
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
