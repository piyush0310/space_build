import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Local Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
  description: "Local Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Practical Vastu guidance for homes, offices, shops, and nearby properties.",
  keywords: "local vastu consultant chandausi, vastu expert nearby chandausi, vastu services near me chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/local-vastu-consultant-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/local-vastu-consultant-chandausi",
    title: "Local Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Local Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Practical Vastu guidance for homes, offices, shops, and nearby properties.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Local Vastu Consultant Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Local Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Local Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Practical Vastu guidance for homes, offices, shops, and nearby properties.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function LocalVastuConsultantChandausi() {
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
