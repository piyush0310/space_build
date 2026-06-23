import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Best Vastu Expert in Moradabad, UP | Vasterior",
  description:
    "Looking for the Best Vastu Expert in Moradabad, UP? Get trusted guidance for harmony and prosperity with the Best Vastu Expert in Moradabad, UP.",
  keywords: "best vastu expert moradabad, top vastu consultant moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/best-vastu-expert-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/best-vastu-expert-in-moradabad",
    title: "Best Vastu Expert in Moradabad, UP | Vasterior",
    description:
      "Looking for the Best Vastu Expert in Moradabad, UP? Get trusted guidance for harmony and prosperity with the Best Vastu Expert in Moradabad, UP.",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Best Vastu Expert in Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Best Vastu Expert in Moradabad, UP | Vasterior",
    description:
      "Looking for the Best Vastu Expert in Moradabad, UP? Get trusted guidance for harmony and prosperity with the Best Vastu Expert in Moradabad, UP.",
    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function BestVastuExpertInMoradabad() {
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
