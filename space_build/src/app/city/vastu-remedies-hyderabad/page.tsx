import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"

export const metadata: Metadata = {
  title: "Vastu Remedies Hyderabad | Vasterior",
  description: "Vastu Remedies Hyderabad offering simple and effective solutions for property-related issues.",
  keywords: "vastu remedies hyderabad, practical vastu solutions hyderabad, home correction remedies",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-remedies-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-remedies-hyderabad",
    title: "Vastu Remedies Hyderabad | Vasterior",
    description: "Vastu Remedies Hyderabad offering simple and effective solutions for property-related issues.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Vastu Remedies Hyderabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Remedies Hyderabad | Vasterior",
    description: "Vastu Remedies Hyderabad offering simple and effective solutions for property-related issues.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuConsultantKokapetHyderabad() {
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
