import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Mahavastu Consultant For Villas In Moradabad, UP | Vasterior",
  description:
    "Need a Mahavastu Consultant for Villas in Moradabad? Vasterior is the expert Mahavastu Consultant for Villas in Moradabad for harmony and growth.",
  keywords:
    "mahavastu consultant for villas moradabad, villa mahavastu expert moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/mahavastu-consultant-for-villas-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/mahavastu-consultant-for-villas-in-moradabad",
    title: "Mahavastu Consultant For Villas In Moradabad, UP | Vasterior",
    description:
      "Need a Mahavastu Consultant for Villas in Moradabad? Vasterior is the expert Mahavastu Consultant for Villas in Moradabad for harmony and growth.",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Mahavastu Consultant For Villas In Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Mahavastu Consultant For Villas In Moradabad, UP | Vasterior",
    description:
      "Need a Mahavastu Consultant for Villas in Moradabad? Vasterior is the expert Mahavastu Consultant for Villas in Moradabad for harmony and growth.",
    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function MahavastuConsultantForVillasMoradabad() {
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
