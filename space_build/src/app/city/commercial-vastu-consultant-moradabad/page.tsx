import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Commercial Vastu Consultant Moradabad, UP | Vasterior",
  description:
    "Leading Commercial Vastu Consultant in Moradabad, UP. Achieve business growth and success with the guidance of a trusted Commercial Vastu Consultant in Moradabad, UP.",
  keywords: "commercial vastu consultant moradabad, vastu for offices moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/commercial-vastu-consultant-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/commercial-vastu-consultant-moradabad",
    title: "Commercial Vastu Consultant Moradabad, UP | Vasterior",
    description:
      "Leading Commercial Vastu Consultant in Moradabad, UP. Achieve business growth and success with the guidance of a trusted Commercial Vastu Consultant in Moradabad, UP.",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Commercial Vastu Consultant Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Commercial Vastu Consultant Moradabad, UP | Vasterior",
    description:
      "Leading Commercial Vastu Consultant in Moradabad, UP. Achieve business growth and success with the guidance of a trusted Commercial Vastu Consultant in Moradabad, UP.",
    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function CommercialVastuConsultantMoradabad() {
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
