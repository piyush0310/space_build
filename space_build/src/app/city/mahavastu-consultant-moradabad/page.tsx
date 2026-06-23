import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Mahavastu Consultant Moradabad, UP | Vasterior",
  description:
    "Looking for a Mahavastu Consultant Moradabad? Vasterior is the trusted Mahavastu Consultant Moradabad for peace and prosperity.",
  keywords:
    "mahavastu consultant moradabad, professional mahavastu expert moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/mahavastu-consultant-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/mahavastu-consultant-moradabad",
    title: "Mahavastu Consultant Moradabad, UP | Vasterior",
    description:
      "Looking for a Mahavastu Consultant Moradabad? Vasterior is the trusted Mahavastu Consultant Moradabad for peace and prosperity.",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Mahavastu Consultant Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Mahavastu Consultant Moradabad, UP | Vasterior",
    description:
      "Looking for a Mahavastu Consultant Moradabad? Vasterior is the trusted Mahavastu Consultant Moradabad for peace and prosperity.",
    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function MahavastuConsultantMoradabad() {
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
