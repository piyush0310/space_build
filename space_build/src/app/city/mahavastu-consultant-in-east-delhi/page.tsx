import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"

export const metadata: Metadata = {
  title: "MahaVastu Consultant in East Delhi | Vasterior",
  description: "Looking for the best MahaVastu Consultant in East Delhi? Vasterior offers expert MahaVastu consultation in East Delhi for homes, offices, and businesses to bring harmony, success, and prosperity.	",
  keywords: "mahavastu consultant in east delhi, best mahavastu consultant east delhi, vastu consultant east delhi",
  alternates: {
    canonical: "https://www.vasterior.com/city/mahavastu-consultant-in-east-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/mahavastu-consultant-in-east-delhi	",
    title: "MahaVastu Consultant in East Delhi | Vasterior",
    description: "Looking for the best MahaVastu Consultant in East Delhi? Vasterior offers expert MahaVastu consultation in East Delhi for homes, offices, and businesses to bring harmony, success, and prosperity.	",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "MahaVastu Consultant in East Delhi | Vasterior",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "MahaVastu Consultant in East Delhi | Vasterior",
    description: "Looking for the best MahaVastu Consultant in East Delhi? Vasterior offers expert MahaVastu consultation in East Delhi for homes, offices, and businesses to bring harmony, success, and prosperity.	",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function HomeVastuConsultationNoidaExtension() {
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