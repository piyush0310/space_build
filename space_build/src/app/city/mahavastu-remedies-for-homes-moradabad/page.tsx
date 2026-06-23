import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Mahavastu Remedies For Homes Moradabad, UP | Vasterior",
  description:
    "Need Mahavastu Remedies for Homes in Moradabad? Vasterior offers powerful Mahavastu Remedies for Homes in Moradabad for positive energy.",
  keywords:
    "mahavastu remedies for homes moradabad, home mahavastu solutions moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/mahavastu-remedies-for-homes-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/mahavastu-remedies-for-homes-moradabad",
    title: "Mahavastu Remedies For Homes Moradabad, UP | Vasterior",
    description:
      "Need Mahavastu Remedies for Homes in Moradabad? Vasterior offers powerful Mahavastu Remedies for Homes in Moradabad for positive energy.",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Mahavastu Remedies For Homes Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Mahavastu Remedies For Homes Moradabad, UP | Vasterior",
    description:
      "Need Mahavastu Remedies for Homes in Moradabad? Vasterior offers powerful Mahavastu Remedies for Homes in Moradabad for positive energy.",
    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function MahavastuRemediesForHomesMoradabad() {
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
