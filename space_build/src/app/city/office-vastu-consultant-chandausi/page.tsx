import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Office Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
  description: "Office Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Expert Vastu solutions to improve productivity, growth, and success.",
  keywords: "office vastu consultant chandausi, vastu for office chandausi, vastu office planning chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/office-vastu-consultant-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/office-vastu-consultant-chandausi",
    title: "Office Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Office Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Expert Vastu solutions to improve productivity, growth, and success.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Office Vastu Consultant Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Office Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Office Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Expert Vastu solutions to improve productivity, growth, and success.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function OfficeVastuConsultantChandausi() {
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
