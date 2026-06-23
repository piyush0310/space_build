import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";


export const metadata: Metadata = {
  title: "Residential Vastu Consultant In Moradabad, UP| Vasterior",
  description: "Looking for a Residential Vastu Consultant in Moradabad? Vasterior is the expert Residential Vastu Consultant in Moradabad for balanced living.",
  keywords: "residential vastu consultant moradabad, best residential vastu expert moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/residential-vastu-consultant-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/residential-vastu-consultant-in-moradabad",
    title: "Residential Vastu Consultant In Moradabad, UP| Vasterior",
    description: "Looking for a Residential Vastu Consultant in Moradabad? Vasterior is the expert Residential Vastu Consultant in Moradabad for balanced living.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Residential Vastu Consultant In Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Residential Vastu Consultant In Moradabad, UP| Vasterior",
    description: "Looking for a Residential Vastu Consultant in Moradabad? Vasterior is the expert Residential Vastu Consultant in Moradabad for balanced living.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function ResidentialVastuConsultantInMoradabad() {
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
