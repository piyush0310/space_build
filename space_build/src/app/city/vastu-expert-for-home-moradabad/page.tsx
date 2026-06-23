import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";



import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"



export const metadata: Metadata = {
  title: "Vastu Expert For Home Moradabad, UP| Vasterior",
  description: "Need a Vastu Expert for Home Moradabad? Vasterior is the trusted Vastu Expert for Home Moradabad to create harmony and success.",
  keywords: "vastu expert for home moradabad, home vastu consultant moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-expert-for-home-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-expert-for-home-moradabad",
    title: "Vastu Expert For Home Moradabad, UP| Vasterior",
    description: "Need a Vastu Expert for Home Moradabad? Vasterior is the trusted Vastu Expert for Home Moradabad to create harmony and success.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Expert For Home Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Expert For Home Moradabad, UP| Vasterior",
    description: "Need a Vastu Expert for Home Moradabad? Vasterior is the trusted Vastu Expert for Home Moradabad to create harmony and success.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};



export default function VastuExpertForHomeMoradabad() {
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
