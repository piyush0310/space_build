import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Trusted Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
  description: "Trusted Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Reliable Vastu advice for homes, offices, shops, and commercial properties.",
  keywords: "trusted vastu consultant chandausi, reliable vastu services chandausi, vastu expert chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/trusted-vastu-consultant-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/trusted-vastu-consultant-chandausi",
    title: "Trusted Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Trusted Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Reliable Vastu advice for homes, offices, shops, and commercial properties.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Trusted Vastu Consultant Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Trusted Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Trusted Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Reliable Vastu advice for homes, offices, shops, and commercial properties.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function TrustedVastuConsultantChandausi() {
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
