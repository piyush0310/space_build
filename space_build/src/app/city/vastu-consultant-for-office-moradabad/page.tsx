import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Vastu Consultant For Office Moradabad, UP| Vasterior",
  description: "Looking for a Vastu Consultant for Office in Moradabad? Vasterior is the professional Vastu Consultant for Office in Moradabad for success and balance.",
  keywords: "vastu consultant for office moradabad, office vastu expert moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultant-for-office-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-for-office-moradabad",
    title: "Vastu Consultant For Office Moradabad, UP| Vasterior",
    description: "Looking for a Vastu Consultant for Office in Moradabad? Vasterior is the professional Vastu Consultant for Office in Moradabad for success and balance.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Consultant For Office Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant For Office Moradabad, UP| Vasterior",
    description: "Looking for a Vastu Consultant for Office in Moradabad? Vasterior is the professional Vastu Consultant for Office in Moradabad for success and balance.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function VastuConsultantForOfficeMoradabad() {
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
