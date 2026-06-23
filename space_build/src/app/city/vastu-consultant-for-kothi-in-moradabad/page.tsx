import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Vastu Consultant For Kothi In Moradabad, UP| Vasterior",
  description: "Searching for a Vastu Consultant for Kothi in Moradabad? Vasterior is the dependable Vastu Consultant for Kothi in Moradabad for prosperity.",
  keywords: "vastu consultant for kothi moradabad, kothi vastu expert moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultant-for-kothi-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-for-kothi-in-moradabad",
    title: "Vastu Consultant For Kothi In Moradabad, UP| Vasterior",
    description: "Searching for a Vastu Consultant for Kothi in Moradabad? Vasterior is the dependable Vastu Consultant for Kothi in Moradabad for prosperity.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Consultant For Kothi In Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant For Kothi In Moradabad, UP| Vasterior",
    description: "Searching for a Vastu Consultant for Kothi in Moradabad? Vasterior is the dependable Vastu Consultant for Kothi in Moradabad for prosperity.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function VastuConsultantForKothiInMoradabad() {
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
