import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu for Career Growth Hyderabad | Vasterior",
  description:
    "Vastu for Career Growth Hyderabad providing direction-based remedies for professional success.",
  keywords:
    "vastu for career growth hyderabad, job success planning hyderabad, professional growth vastu",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-for-career-growth-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-for-career-growth-hyderabad",
    title: "Vastu for Career Growth Hyderabad | Vasterior",
    description:
      "Vastu for Career Growth Hyderabad providing direction-based remedies for professional success.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu for Career Growth Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu for Career Growth Hyderabad | Vasterior",
    description:
      "Vastu for Career Growth Hyderabad providing direction-based remedies for professional success.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuConsultantManikondaHyderabad() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <Banner />
      <Content />
      <Services />
      <Portfolio />
      <Blog />
      <Testimonials />
    </div>
  );
}
