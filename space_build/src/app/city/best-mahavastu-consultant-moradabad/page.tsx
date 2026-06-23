import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Best Mahavastu Consultant Moradabad, UP | Vasterior",
  description:
    "Searching for the Best Mahavastu Consultant Moradabad? Vasterior is the Best Mahavastu Consultant Moradabad to ensure balance and success.",
  keywords:
    "best mahavastu consultant moradabad, top mahavastu expert moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/best-mahavastu-consultant-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/best-mahavastu-consultant-moradabad",
    title: "Best Mahavastu Consultant Moradabad, UP | Vasterior",
    description:
      "Searching for the Best Mahavastu Consultant Moradabad? Vasterior is the Best Mahavastu Consultant Moradabad to ensure balance and success.",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Best Mahavastu Consultant Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Best Mahavastu Consultant Moradabad, UP | Vasterior",
    description:
      "Searching for the Best Mahavastu Consultant Moradabad? Vasterior is the Best Mahavastu Consultant Moradabad to ensure balance and success.",
    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function BestMahavastuConsultantMoradabad() {
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
