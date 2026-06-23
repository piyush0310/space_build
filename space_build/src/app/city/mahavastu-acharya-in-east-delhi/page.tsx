import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog"

export const metadata: Metadata = {
  title: "MahaVastu Acharya in East Delhi | Vasterior	",
  description: "Looking for an experienced MahaVastu Acharya in East Delhi? At Vasterior, our expert MahaVastu Acharya in East Delhi provides personalized Vastu consultation for homes, offices, and businesses to create balance, harmony, and prosperity.		",
  keywords: "maha vastu acharya in east delhi, vastu acharya east delhi, vasterior vastu consultation",
  alternates: {
    canonical: "https://www.vasterior.com/city/mahavastu-acharya-in-east-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/mahavastu-acharya-in-east-delhi",
    title: "MahaVastu Acharya in East Delhi | Vasterior	",
    description: "Looking for an experienced MahaVastu Acharya in East Delhi? At Vasterior, our expert MahaVastu Acharya in East Delhi provides personalized Vastu consultation for homes, offices, and businesses to create balance, harmony, and prosperity.		",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "MahaVastu Acharya in East Delhi | Vasterior	",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "MahaVastu Acharya in East Delhi | Vasterior	",
    description: "Looking for an experienced MahaVastu Acharya in East Delhi? At Vasterior, our expert MahaVastu Acharya in East Delhi provides personalized Vastu consultation for homes, offices, and businesses to create balance, harmony, and prosperity.		",
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