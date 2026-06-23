import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Expert for Schools & Colleges Moradabad, UP | Vasterior",
  description: "Get trusted advice from a Vastu Expert for Schools & Colleges in Moradabad, UP. Ensure balanced learning environments with a reliable Vastu Expert for Schools & Colleges in Moradabad, UP.",
  keywords: "vastu consultant for schools moradabad, vastu for colleges moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-expert-for-schools-&-colleges-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-expert-for-schools-&-colleges-moradabad",
    title: "Vastu Expert for Schools & Colleges Moradabad, UP | Vasterior",
    description: "Get trusted advice from a Vastu Expert for Schools & Colleges in Moradabad, UP. Ensure balanced learning environments with a reliable Vastu Expert for Schools & Colleges in Moradabad, UP.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Expert for Schools & Colleges Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Expert for Schools & Colleges Moradabad, UP | Vasterior",
    description: "Get trusted advice from a Vastu Expert for Schools & Colleges in Moradabad, UP. Ensure balanced learning environments with a reliable Vastu Expert for Schools & Colleges in Moradabad, UP.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuExpertForSchoolsAndCollegesMoradabad() {
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
