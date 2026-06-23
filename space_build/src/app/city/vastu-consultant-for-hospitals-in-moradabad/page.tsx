import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultant for Hospitals in Moradabad, UP | Vasterior",
  description: "Looking for a Vastu Consultant for Hospitals in Moradabad, UP? Get expert solutions for healing environments with a trusted Vastu Consultant for Hospitals in Moradabad, UP.",
  keywords: "vastu consultant for hospitals moradabad, hospital vastu expert moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultant-for-hospitals-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-for-hospitals-in-moradabad",
    title: "Vastu Consultant for Hospitals in Moradabad, UP | Vasterior",
    description: "Looking for a Vastu Consultant for Hospitals in Moradabad, UP? Get expert solutions for healing environments with a trusted Vastu Consultant for Hospitals in Moradabad, UP.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Consultant for Hospitals in Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant for Hospitals in Moradabad, UP | Vasterior",
    description: "Looking for a Vastu Consultant for Hospitals in Moradabad, UP? Get expert solutions for healing environments with a trusted Vastu Consultant for Hospitals in Moradabad, UP.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuConsultantForHospitalsMoradabad() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <Banner />
      <Content />
      
      <Portfolio />
      <Blog />
      <Testimonials />
    </div>
  );
}
