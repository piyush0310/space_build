import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultant for Apartments in Moradabad, UP | Vasterior",
  description:
    "Looking for the best Vastu Consultant for Apartments in Moradabad, UP? Vasterior offers expert Vastu solutions. Choose a reliable Vastu Consultant for Apartments in Moradabad, UP for balanced living.",
  keywords: "vastu consultant for apartments moradabad, apartment vastu expert moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultant-for-apartments-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-for-apartments-in-moradabad",
    title: "Vastu Consultant for Apartments in Moradabad, UP | Vasterior",
    description:
      "Looking for the best Vastu Consultant for Apartments in Moradabad, UP? Vasterior offers expert Vastu solutions. Choose a reliable Vastu Consultant for Apartments in Moradabad, UP for balanced living.",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant for Apartments in Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant for Apartments in Moradabad, UP | Vasterior",
    description:
      "Looking for the best Vastu Consultant for Apartments in Moradabad, UP? Vasterior offers expert Vastu solutions. Choose a reliable Vastu Consultant for Apartments in Moradabad, UP for balanced living.",
    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuConsultantForApartmentsInMoradabad() {
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
