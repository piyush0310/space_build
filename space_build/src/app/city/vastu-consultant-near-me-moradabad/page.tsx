import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Vastu Consultant Near Me Moradabad, UP| Vasterior",
  description: "Searching for a Vastu Consultant near me Moradabad? Vasterior is the reliable Vastu Consultant near me Moradabad for peace and growth.",
  keywords: "vastu consultant near me moradabad, best vastu expert moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultant-near-me-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-near-me-moradabad",
    title: "Vastu Consultant Near Me Moradabad, UP| Vasterior",
    description: "Searching for a Vastu Consultant near me Moradabad? Vasterior is the reliable Vastu Consultant near me Moradabad for peace and growth.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Consultant Near Me Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant Near Me Moradabad, UP| Vasterior",
    description: "Searching for a Vastu Consultant near me Moradabad? Vasterior is the reliable Vastu Consultant near me Moradabad for peace and growth.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function VastuConsultantNearMeMoradabad() {
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
