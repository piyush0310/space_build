import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Best Vastu consultant Rampur, Uttar Pradesh | Vasterior",
  description:
    "Best Vastu consultant Rampur - Get top-rated Vastu services in Rampur with professional remedies and guidance for balanced living.",
  keywords:
    "Top Vastu consultant Rampur, Vastu expert in Rampur, Reliable Vastu consultant Rampur",
  alternates: {
    canonical: "https://www.vasterior.com/city/best-vastu-consultant-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/best-vastu-consultant-rampur",
    title: "Best Vastu consultant Rampur, Uttar Pradesh | Vasterior",
    description:
      "Best Vastu consultant Rampur - Get top-rated Vastu services in Rampur with professional remedies and guidance for balanced living.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Best Vastu consultant Rampur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Best Vastu consultant Rampur, Uttar Pradesh | Vasterior",
    description:
      "Best Vastu consultant Rampur - Get top-rated Vastu services in Rampur with professional remedies and guidance for balanced living.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function BestVastuConsultantRampur() {
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
