import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Vastu Consultant For Villas In Moradabad, UP| Vasterior",
  description: "Looking for a Vastu Consultant for Villas in Moradabad? Vasterior is the trusted Vastu Consultant for Villas in Moradabad to ensure balance and prosperity.",
  keywords: "vastu consultant for villas moradabad, villa vastu expert moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultant-for-villas-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-for-villas-in-moradabad",
    title: "Vastu Consultant For Villas In Moradabad, UP| Vasterior",
    description: "Looking for a Vastu Consultant for Villas in Moradabad? Vasterior is the trusted Vastu Consultant for Villas in Moradabad to ensure balance and prosperity.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Consultant For Villas In Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant For Villas In Moradabad, UP| Vasterior",
    description: "Looking for a Vastu Consultant for Villas in Moradabad? Vasterior is the trusted Vastu Consultant for Villas in Moradabad to ensure balance and prosperity.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function VastuConsultantForVillasInMoradabad() {
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
