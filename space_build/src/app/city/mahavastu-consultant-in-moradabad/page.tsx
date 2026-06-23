import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Mahavastu Consultant In Moradabad, UP| Vasterior",
  description: "Looking for a Mahavastu Consultant in Moradabad? Vasterior is the trusted Mahavastu Consultant in Moradabad to bring harmony and positive energy.",
  keywords: "mahavastu consultant moradabad, best mahavastu expert moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/mahavastu-consultant-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/mahavastu-consultant-in-moradabad",
    title: "Mahavastu Consultant In Moradabad, UP| Vasterior",
    description: "Looking for a Mahavastu Consultant in Moradabad? Vasterior is the trusted Mahavastu Consultant in Moradabad to bring harmony and positive energy.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Mahavastu Consultant In Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Mahavastu Consultant In Moradabad, UP| Vasterior",
    description: "Looking for a Mahavastu Consultant in Moradabad? Vasterior is the trusted Mahavastu Consultant in Moradabad to bring harmony and positive energy.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function MahavvastuConsultantInMoradabad() {
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
